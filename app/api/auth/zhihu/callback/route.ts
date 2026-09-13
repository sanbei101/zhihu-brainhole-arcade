import { NextResponse, type NextRequest } from "next/server";

import {
  ZHIHU_OAUTH_STATE_COOKIE,
  ZHIHU_VOTED_COOKIE,
  exchangeZhihuAccessToken,
  getZhihuOAuthConfig,
} from "@/lib/zhihu-oauth";

export async function GET(request: NextRequest) {
  const config = getZhihuOAuthConfig();
  if (!config) {
    return NextResponse.json(
      { error: "CONFIG_MISSING", message: "知乎 OAuth 凭证未配置" },
      { status: 503 },
    );
  }

  const { searchParams } = new URL(request.url);
  const code = searchParams.get("authorization_code") || searchParams.get("code");
  const state = searchParams.get("state");
  const savedState = request.cookies.get(ZHIHU_OAUTH_STATE_COOKIE)?.value;

  const homeUrl = new URL("/", request.url);

  if (!code) {
    homeUrl.searchParams.set("error", "missing_code");
    return NextResponse.redirect(homeUrl);
  }

  if (!state || !savedState || state !== savedState) {
    console.error("知乎 OAuth state 不匹配或已过期", { state, savedState });
    homeUrl.searchParams.set("error", "state_mismatch");
    return NextResponse.redirect(homeUrl);
  }

  const defaultRedirectUri = new URL("/api/auth/zhihu/callback", request.url).toString();

  try {
    // 调用知乎 access_token 接口换票,成功换取即完成一次人气奖接口调用
    await exchangeZhihuAccessToken(code, defaultRedirectUri);

    // 成功助力人气奖,重定向回首页并带上 voted=1 标记
    homeUrl.searchParams.set("voted", "1");
    const response = NextResponse.redirect(homeUrl);

    // 设置人气奖助力已完成标记
    response.cookies.set({
      name: ZHIHU_VOTED_COOKIE,
      value: "1",
      httpOnly: false, // 允许前端直接读取或通过 API 读取
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 30 * 24 * 60 * 60,
    });

    // 清除一次性 state
    response.cookies.delete(ZHIHU_OAUTH_STATE_COOKIE);

    return response;
  } catch (err) {
    console.error("知乎 OAuth 回调处理异常", err);
    homeUrl.searchParams.set("error", "token_exchange_failed");
    return NextResponse.redirect(homeUrl);
  }
}
