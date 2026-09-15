import { logger } from "@/lib/logger";

async function probe(name: string, url: string, init?: RequestInit) {
  const startedAt = Date.now();

  try {
    const response = await fetch(url, {
      ...init,
      cache: "no-store",
      signal: AbortSignal.timeout(15000),
    });

    const result = {
      name,
      status: response.status,
      ok: response.ok,
      durationMs: Date.now() - startedAt,
    };

    logger.debug("auth", "知乎网络探测完成", result);
    return result;
  } catch (error) {
    const result = {
      name,
      durationMs: Date.now() - startedAt,
      error,
    };

    logger.error("auth", "知乎网络探测失败", result);
    return result;
  }
}

export async function GET() {
  const results = await Promise.all([
    probe("openapi-root", "https://openapi.zhihu.com"),
    probe("access-token", "https://openapi.zhihu.com/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        app_id: "network-test",
        app_key: "network-test",
        grant_type: "authorization_code",
        redirect_uri: "https://example.com/callback",
        code: "network-test",
      }),
    }),
  ]);

  return Response.json({
    region: process.env.VERCEL_REGION ?? "unknown",
    results,
  });
}
