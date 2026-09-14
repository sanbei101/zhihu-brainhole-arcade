import { NextResponse } from "next/server";

import { ZHIHU_VOTED_COOKIE } from "@/lib/zhihu-oauth";

export async function POST() {
  const response = NextResponse.json({ success: true });
  response.cookies.delete(ZHIHU_VOTED_COOKIE);
  return response;
}
