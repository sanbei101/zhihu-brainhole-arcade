import type { NoObjectGeneratedError} from "ai";
import { TypeValidationError, JSONParseError } from "ai";
type LogLevel = "DEBUG" | "WARN" | "ERROR";

const levelWeight: Record<LogLevel, number> = { DEBUG: 10, WARN: 20, ERROR: 30 };

function minimumLevel(): LogLevel {
  const configured = process.env.LOG_LEVEL?.toUpperCase();
  if (configured === "DEBUG" || configured === "WARN" || configured === "ERROR") {
    return configured;
  }
  return "WARN";
}

export function logStructuredFailure(
  label: string,
  attempt: number,
  error: NoObjectGeneratedError,
): void {
  const cause = error.cause;
  const details = TypeValidationError.isInstance(cause)
    ? { name: cause.name, value: cause.value, cause: cause.cause }
    : JSONParseError.isInstance(cause)
      ? { name: cause.name, text: cause.text, cause: cause.cause }
      : cause;

  logger.error("ai", "结构化输出失败", { label, attempt, cause: details });
}
function print(level: LogLevel, tag: string, message: string, data?: unknown): void {
  if (levelWeight[level] < levelWeight[minimumLevel()]) return;

  const payload = {
    level,
    tag,
    message,
    ...(data === undefined ? {} : { data }),
  };
  const line = JSON.stringify(
    payload,
    (_key, value: unknown) => {
      if (value instanceof Error) return { name: value.name, message: value.message };
      return value;
    },
    2,
  );

  if (level === "ERROR") console.error(line);
  else if (level === "WARN") console.warn(line);
  else console.debug(line);
}

export const logger = {
  debug(tag: string, message: string, data?: unknown): void {
    print("DEBUG", tag, message, data);
  },
  warn(tag: string, message: string, data?: unknown): void {
    print("WARN", tag, message, data);
  },
  error(tag: string, message: string, data?: unknown): void {
    print("ERROR", tag, message, data);
  },
};

export function logAiResponse(label: string, ms: number, output: unknown): void {
  logger.debug("ai", "模型响应", { label, durationMs: ms, output });
}

export function logAiError(label: string, durationMs: number, error: unknown): void {
  logger.error("ai", "模型调用失败", { label, durationMs, error });
}
