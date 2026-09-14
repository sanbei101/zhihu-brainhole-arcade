/**
 * 全仓统一日志入口
 * - 服务端排查 AI 问题时需要看到完整请求与响应,所以 AI 日志默认全量打印、不截断。
 * - 仅对密钥类字段做脱敏,业务内容原样输出。
 */

const SENSITIVE_KEY = /api[_-]?key|token|secret|authorization|cookie|password/i;
const LONG_KEY_PATTERN = /\bsk-[A-Za-z0-9_-]{8,}\b/g;
// eslint-disable-next-line no-control-regex -- 日志平台无 TTY 时剥离 ANSI 着色码,故意匹配控制字符
const ANSI_PATTERN = /\x1b\[[0-9;]*m/g;

function redactValue(value: unknown, seen: WeakSet<object> = new WeakSet()): unknown {
  if (typeof value === "string") {
    return value.replace(LONG_KEY_PATTERN, "sk-***");
  }
  if (Array.isArray(value)) return value.map((item) => redactValue(item, seen));
  if (value !== null && typeof value === "object") {
    if (seen.has(value)) return "[Circular]";
    seen.add(value);
    const entries = Object.entries(value as Record<string, unknown>).map(([key, item]) => [
      key,
      SENSITIVE_KEY.test(key) ? "***" : redactValue(item, seen),
    ]);
    return Object.fromEntries(entries);
  }
  return value;
}

function timestamp(): string {
  try {
    return new Date().toISOString();
  } catch {
    return "";
  }
}

/**
 * 日志平台收集的是管道 stdout,没有 TTY,
 * ANSI 着色码会原样落盘变成乱码,所以非终端环境自动剥掉。
 * 本地终端(isTTY)保留颜色;可用 NO_COLOR=1 强制关,FORCE_COLOR=1 强制开。
 */
function colorSupported(): boolean {
  try {
    const env = globalThis.process?.env;
    if (env?.NO_COLOR !== undefined) return false;
    if (env?.FORCE_COLOR === "1" || env?.FORCE_COLOR === "true") return true;
    if (env?.TERM === "dumb") return false;
    const stdout = globalThis.process?.stdout as { isTTY?: boolean } | undefined;
    if (stdout && typeof stdout.isTTY === "boolean") return stdout.isTTY;
  } catch {
    // 取不到进程信息(如浏览器)一律按不支持处理
  }
  return false;
}

function print(
  level: "DEBUG" | "INFO" | "WARN" | "ERROR",
  tag: string,
  message: string,
  data?: unknown,
): void {
  const prefix = `${timestamp()} [${level}] [${tag}]`;
  const text = colorSupported() ? message : message.replace(ANSI_PATTERN, "");
  const args = data === undefined ? [prefix, text] : [prefix, text, redactValue(data)];
  if (level === "ERROR") console.error(...args);
  else if (level === "WARN") console.warn(...args);
  else if (level === "DEBUG") console.debug(...args);
  else console.log(...args);
}

export const logger = {
  debug(tag: string, message: string, data?: unknown): void {
    print("DEBUG", tag, message, data);
  },
  info(tag: string, message: string, data?: unknown): void {
    print("INFO", tag, message, data);
  },
  warn(tag: string, message: string, data?: unknown): void {
    print("WARN", tag, message, data);
  },
  error(tag: string, message: string, data?: unknown): void {
    print("ERROR", tag, message, data);
  },
};

/** AI 调用请求全量日志:instructions + prompt 完整打印,不截断。 */
export function logAiRequest(
  label: string,
  request: {
    model: string;
    temperature?: number;
    maxOutputTokens?: number;
    instructions: string;
    prompt: string;
  },
): void {
  logger.info("ai", `→ [${label}] 模型请求 (model=${request.model})`, request);
}

/** AI 调用响应全量日志:解析后的 output 完整打印,不截断。 */
export function logAiResponse(label: string, ms: number, output: unknown): void {
  logger.info("ai", `← [${label}] 模型响应 (${ms}ms)`, output);
}

/** AI 调用失败日志:outer 错误对象 + 抢救信息,供排查。 */
export function logAiError(label: string, message: string, error?: unknown): void {
  logger.error("ai", `[${label}] ${message}`, error);
}
