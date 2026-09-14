import { logger } from "@/lib/logger";

let statusPromise: Promise<boolean> | null = null;

export function getZhihuVoteStatus(): Promise<boolean> {
  if (!statusPromise) {
    statusPromise = fetch("/api/auth/zhihu/status")
      .then(async (response) => {
        if (!response.ok) {
          logger.warn("auth", "知乎助力状态请求失败", { status: response.status });
          return false;
        }
        const data: unknown = await response.json();
        if (typeof data === "object" && data !== null && "voted" in data && data.voted === true) {
          return true;
        }
        if (typeof data === "object" && data !== null && "voted" in data) return false;

        logger.warn("auth", "知乎助力状态响应格式异常");
        return false;
      })
      .catch((error: unknown) => {
        logger.error("auth", "知乎助力状态请求异常", error);
        return false;
      });
  }

  return statusPromise;
}
