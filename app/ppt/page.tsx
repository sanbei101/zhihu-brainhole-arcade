"use client";

import dynamic from "next/dynamic";

// 动态客户端加载，避免 SSR 与 full-screen / touch 相关的客户端 API 冲突
const PresentationApp = dynamic(() => import("@/ppt/src/App"), {
  ssr: false,
});

export default function PresentationPage() {
  return <PresentationApp />;
}
