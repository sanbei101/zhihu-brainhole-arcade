import { NextResponse, type NextRequest } from "next/server";

import { ZHIHU_VOTED_COOKIE } from "@/lib/zhihu-oauth";

export async function GET(request: NextRequest) {
  const voted = request.cookies.get(ZHIHU_VOTED_COOKIE)?.value === "1";
  return NextResponse.json({ voted });
}
