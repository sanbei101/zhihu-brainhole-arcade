import { NextResponse, type NextRequest } from "next/server";

import { logger } from "@/lib/logger";
import {
  ZHIHU_OAUTH_STATE_COOKIE,
  buildZhihuAuthorizeUrl,
  getZhihuOAuthConfig,
} from "@/lib/zhihu-oauth";

export async function GET(request: NextRequest) {
  const config = getZhihuOAuthConfig();
  if (!config) {
    logger.error("auth", "知乎 OAuth 登录初始化失败：配置缺失");
    return NextResponse.json(
      {
        error: "CONFIG_MISSING",
        message:
          "未配置知乎 OAuth 凭证，请在部署环境或 .env 中配置 ZHIHU_OAUTH_APP_ID 与 ZHIHU_OAUTH_APP_KEY",
      },
      { status: 503 },
    );
  }

  const state = crypto.randomUUID();
  const defaultRedirectUri = new URL("/api/auth/zhihu/callback", request.url).toString();

  try {
    const authUrl = buildZhihuAuthorizeUrl(defaultRedirectUri, state);
    const response = NextResponse.redirect(authUrl);

    response.cookies.set({
      name: ZHIHU_OAUTH_STATE_COOKIE,
      value: state,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 600, // 10 分钟有效期
    });

    logger.debug("auth", "知乎 OAuth 登录跳转已创建", { redirectUri: defaultRedirectUri });
    return response;
  } catch (err) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    logger.error("auth", "知乎 OAuth 登录初始化异常", { error: err });
    return NextResponse.json({ error: "OAUTH_INIT_ERROR", message: errorMsg }, { status: 500 });
  }
}
