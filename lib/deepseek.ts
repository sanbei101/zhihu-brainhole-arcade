import { createDeepSeek } from "@ai-sdk/deepseek";
import { NoObjectGeneratedError, Output, generateText } from "ai";
import { jsonrepair } from "jsonrepair";
import { type ZodType } from "zod";

import { logAiError, logAiResponse, logger, logStructuredFailure } from "@/lib/logger";

globalThis.AI_SDK_LOG_WARNINGS = false;

const DEFAULT_MODEL = "deepseek-v4.1-flash";
const EMPTY_ROLE = /"role"\s*:\s*""/g;
export const JSON_ONLY_INSTRUCTION = `输出格式:你的整条回复必须是一个裸 JSON 对象,不要用 markdown 代码块包裹,不要写 \`\`\`json,不要在 JSON 前后添加任何内容`;

function env(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value || undefined;
}

export interface LlmConfig {
  baseURL?: string;
  apiKey?: string;
  model: string;
  isRelay: boolean;
}

export function llmConfig(): LlmConfig {
  const baseURL = env("LLM_BASE_URL");
  const apiKey = env("LLM_API_KEY") ?? (baseURL ? undefined : env("DEEPSEEK_API_KEY"));

  return {
    baseURL,
    apiKey,
    model: env("LLM_MODEL") ?? DEFAULT_MODEL,
    isRelay: Boolean(baseURL),
  };
}

export function hasLlmKey(): boolean {
  return Boolean(llmConfig().apiKey);
}

export function missingLlmKeyMessage(): string {
  return "服务端尚未配置模型密钥";
}

export function llmModel() {
  const { baseURL, apiKey, model } = llmConfig();

  return createDeepSeek({
    ...(apiKey ? { apiKey } : {}),
    ...(baseURL ? { baseURL, fetch: relayTolerantFetch } : {}),
  })(model);
}

function repairedHeaders(source: Headers): Headers {
  const headers = new Headers(source);
  headers.delete("content-encoding");
  headers.delete("content-length");
  headers.delete("transfer-encoding");
  return headers;
}

function repairRole(text: string): string {
  return text.replace(EMPTY_ROLE, '"role":"assistant"');
}

let roleRepairLogged = false;
function noteRoleRepair(): void {
  if (roleRepairLogged) return;
  roleRepairLogged = true;
  logger.debug("relay", "中转站空 role 已修复为 assistant", { event: "relay.role_repaired" });
}

function repairStream(body: ReadableStream<Uint8Array>): ReadableStream<Uint8Array> {
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();
  let buffer = "";

  const text = body
    .pipeThrough(
      new TransformStream<Uint8Array, string>({
        transform(chunk, controller) {
          controller.enqueue(decoder.decode(chunk, { stream: true }));
        },
        flush(controller) {
          controller.enqueue(decoder.decode());
        },
      }),
    )
    .pipeThrough(
      new TransformStream<string, string>({
        transform(chunk, controller) {
          buffer += chunk;
          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";

          for (const line of lines) {
            const repaired = repairRole(line);
            if (repaired !== line) noteRoleRepair();
            controller.enqueue(`${repaired}\n`);
          }
        },
        flush(controller) {
          const repaired = repairRole(buffer);
          if (repaired !== buffer) noteRoleRepair();
          if (repaired) controller.enqueue(repaired);
        },
      }),
    )
    .pipeThrough(
      new TransformStream<string, Uint8Array>({
        transform(chunk, controller) {
          controller.enqueue(encoder.encode(chunk));
        },
      }),
    );

  return text;
}

export const relayTolerantFetch: typeof fetch = async (input, init) => {
  const response = await fetch(input, init);
  const contentType = response.headers.get("content-type") ?? "";

  if (contentType.includes("text/event-stream")) {
    return new Response(response.body ? repairStream(response.body) : null, {
      status: response.status,
      statusText: response.statusText,
      headers: repairedHeaders(response.headers),
    });
  }

  const text = await response.text();
  const repaired = repairRole(text);
  if (repaired !== text) noteRoleRepair();

  return new Response(repaired, {
    status: response.status,
    statusText: response.statusText,
    headers: repairedHeaders(response.headers),
  });
};

/** 删除根对象提前闭合后留下的逗号,例如 `{"a":1},"b":2}`。 */
function removePrematureRootClosure(text: string): string | undefined {
  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];

    if (inString) {
      if (escaped) escaped = false;
      else if (character === "\\") escaped = true;
      else if (character === '"') inString = false;
      continue;
    }

    if (character === '"') inString = true;
    else if (character === "{") depth += 1;
    else if (character === "}" && --depth === 0 && /^\s*,/.test(text.slice(index + 1))) {
      return text.slice(0, index) + text.slice(index + 1);
    }
  }

  return undefined;
}

function parseObject(text: string): unknown {
  const candidates = [text, text.replace(/,\s*([}\]])/g, "$1")];

  for (const candidate of candidates) {
    for (const source of [candidate, removePrematureRootClosure(candidate)]) {
      if (!source) continue;

      try {
        const value: unknown = JSON.parse(source);
        if (value !== null && typeof value === "object") return value;
      } catch {
        // Try the repairer below.
      }

      try {
        const value: unknown = JSON.parse(jsonrepair(source));
        if (value !== null && typeof value === "object") return value;
      } catch {
        // Try the next candidate.
      }
    }
  }

  return undefined;
}

/** 从模型回复中提取对象,兼容代码围栏、前后废话和常见 JSON 错误。 */
export function extractJsonObject(text: string | undefined): unknown {
  if (!text) return undefined;

  const candidates = [...text.matchAll(/```(?:json)?\s*([\s\S]*?)```/gi)].flatMap((match) =>
    match[1] ? [match[1]] : [],
  );
  candidates.push(text);

  const first = text.indexOf("{");
  const last = text.lastIndexOf("}");
  if (first >= 0 && last > first) candidates.push(text.slice(first, last + 1));

  for (const candidate of candidates) {
    const parsed = parseObject(candidate.trim());
    if (parsed !== undefined) return parsed;
  }

  return undefined;
}

export function salvageStructuredOutput<T>(error: unknown, schema: ZodType<T>): T | undefined {
  if (!NoObjectGeneratedError.isInstance(error)) return undefined;

  const extracted = extractJsonObject(error.text);
  if (extracted === undefined) return undefined;

  const result = schema.safeParse(extracted);
  return result.success ? result.data : undefined;
}

interface StructuredCallOptions<T> {
  label?: string;
  instructions: string;
  prompt: string;
  schema: ZodType<T>;
  temperature?: number;
  maxOutputTokens?: number;
  abortSignal?: AbortSignal;
}

async function generateAttempt<T>(
  options: StructuredCallOptions<T>,
  instructions: string,
  label: string,
): Promise<T> {
  const startedAt = Date.now();

  try {
    const result = await generateText({
      model: llmModel(),
      instructions,
      prompt: options.prompt,
      output: Output.object({ schema: options.schema }),
      temperature: options.temperature,
      maxOutputTokens: options.maxOutputTokens,
      abortSignal: options.abortSignal,
      providerOptions: { deepseek: { thinking: { type: "disabled" } } },
    });
    logAiResponse(label, Date.now() - startedAt, result.output);
    return result.output;
  } catch (error) {
    logAiError(label, Date.now() - startedAt, error);
    throw error;
  }
}

/** 结构化对象生成,失败时先抢救原始 JSON,再重试一次。 */
export async function generateStructured<T>(options: StructuredCallOptions<T>): Promise<T> {
  const label = options.label ?? "structured";
  const instructions = `${options.instructions}${JSON_ONLY_INSTRUCTION}`;

  const run = async (attempt: number): Promise<T> => {
    try {
      return await generateAttempt(options, instructions, label);
    } catch (error) {
      const salvaged = salvageStructuredOutput(error, options.schema);
      if (salvaged !== undefined) {
        logger.debug("ai", attempt === 1 ? "结构化输出抢救成功" : "重试后结构化输出抢救成功", {
          label,
          output: salvaged,
        });
        return salvaged;
      }

      if (options.abortSignal?.aborted || !NoObjectGeneratedError.isInstance(error)) throw error;
      logStructuredFailure(label, attempt, error);
      if (attempt === 2) throw error;
      return run(attempt + 1);
    }
  };

  return run(1);
}
