/**
 * 知乎官方 OAuth 鉴权及黑客松“人气奖”接口调用工具
 * 依据知乎黑客松补充资料与开放平台规范实现
 */

import { logger } from "@/lib/logger";

export const ZHIHU_OAUTH_STATE_COOKIE = "zhihu_oauth_state";
export const ZHIHU_VOTED_COOKIE = "zhihu_voted";

export interface ZhihuOAuthConfig {
  appId: string;
  appKey: string;
  redirectUri?: string;
}

export function getZhihuOAuthConfig(): ZhihuOAuthConfig | null {
  const appId = process.env.ZHIHU_OAUTH_APP_ID?.trim();
  const appKey = process.env.ZHIHU_OAUTH_APP_KEY?.trim();
  const redirectUri = process.env.ZHIHU_OAUTH_REDIRECT_URI?.trim();

  if (!appId || !appKey) {
    logger.error("auth", "知乎 OAuth 配置缺失", {
      hasAppId: Boolean(appId),
      hasAppKey: Boolean(appKey),
    });
    return null;
  }

  return {
    appId,
    appKey,
    redirectUri: redirectUri || undefined,
  };
}

/**
 * 构造知乎授权跳转 URL
 */
export function buildZhihuAuthorizeUrl(defaultRedirectUri: string, state: string): string {
  const config = getZhihuOAuthConfig();
  if (!config) {
    throw new Error("缺少知乎 OAuth 凭证配置 (ZHIHU_OAUTH_APP_ID / ZHIHU_OAUTH_APP_KEY)");
  }

  const finalRedirectUri = config.redirectUri || defaultRedirectUri;
  const url = new URL("https://openapi.zhihu.com/authorize");
  url.searchParams.set("redirect_uri", finalRedirectUri);
  url.searchParams.set("app_id", config.appId);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("state", state);

  logger.debug("auth", "知乎 OAuth 授权地址已生成", { redirectUri: finalRedirectUri });
  return url.toString();
}

export interface ZhihuTokenResponse {
  access_token?: string;
  token_type?: string;
  expires_in?: number;
  code?: number;
  message?: string;
  [key: string]: unknown;
}

/**
 * 使用 authorization_code 向知乎官方换取 access_token
 * 成功换取即代表为黑客松参赛作品完成一次人气奖接口调用！
 */
export async function exchangeZhihuAccessToken(
  code: string,
  defaultRedirectUri: string,
): Promise<string> {
  const config = getZhihuOAuthConfig();
  if (!config) {
    throw new Error("缺少知乎 OAuth 凭证配置 (ZHIHU_OAUTH_APP_ID / ZHIHU_OAUTH_APP_KEY)");
  }

  const finalRedirectUri = config.redirectUri || defaultRedirectUri;
  const directTokenEndpoint = "https://openapi.zhihu.com/access_token";
  const tokenEndpoint = process.env.ZHIHU_OAUTH_TOKEN_ENDPOINT?.trim() || directTokenEndpoint;
  const proxyKey = process.env.ZHIHU_OAUTH_PROXY_KEY?.trim();
  const usingProxy = tokenEndpoint !== directTokenEndpoint;

  if (usingProxy && !proxyKey) {
    throw new Error("配置了 ZHIHU_OAUTH_TOKEN_ENDPOINT 但缺少 ZHIHU_OAUTH_PROXY_KEY");
  }

  const startedAt = Date.now();
  logger.debug("auth", "知乎 OAuth token 换取开始", {
    redirectUri: finalRedirectUri,
    viaProxy: usingProxy,
  });

  try {
    const headers = new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
    });
    if (proxyKey) headers.set("X-Proxy-Key", proxyKey);

    const response = await fetch(tokenEndpoint, {
      method: "POST",
      headers,
      body: new URLSearchParams({
        app_id: config.appId,
        app_key: config.appKey,
        grant_type: "authorization_code",
        redirect_uri: finalRedirectUri,
        code,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`知乎 OAuth Token 换取失败 (HTTP ${response.status}): ${errorText}`);
    }

    const data = (await response.json()) as ZhihuTokenResponse;

    if (!data.access_token) {
      throw new Error(
        `知乎 OAuth 返回未包含 access_token (code=${String(data.code)}, message=${String(data.message)})`,
      );
    }

    logger.debug("auth", "知乎 OAuth token 换取成功", { durationMs: Date.now() - startedAt });
    return data.access_token;
  } catch (error) {
    logger.error("auth", "知乎 OAuth token 换取失败", {
      durationMs: Date.now() - startedAt,
      error,
    });
    throw error;
  }
}
