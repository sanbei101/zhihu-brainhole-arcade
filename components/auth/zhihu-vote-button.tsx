"use client";

import { CheckCircle2, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getZhihuVoteStatus } from "@/lib/zhihu-status";

export function ZhihuVoteButton({ className }: { className?: string }) {
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    // 检查 URL query 是否刚完成助力
    const params = new URLSearchParams(window.location.search);
    if (params.get("voted") === "1") {
      setHasVoted(true);
      // 清除 URL 上的 query 参数避免刷新重复触发
      const newUrl = window.location.pathname;
      window.history.replaceState({}, "", newUrl);
    }

    // 多个首页组件共享同一个状态请求
    void getZhihuVoteStatus().then((voted) => {
      if (voted) setHasVoted(true);
    });
  }, []);

  if (hasVoted) {
    return (
      <div className={cn("flex items-center gap-1.5", className)}>
        <Badge
          variant="outline"
          className="gap-1.5 border-amber-500/40 bg-amber-500/10 px-2.5 py-1 text-xs font-medium text-amber-500 shadow-xs"
        >
          <CheckCircle2 className="size-3.5 text-amber-500" />
          <span>🏆 人气奖已助力</span>
        </Badge>
      </div>
    );
  }

  return (
    <a
      href="/api/auth/zhihu/login"
      className={cn(
        buttonVariants({ variant: "outline", size: "sm" }),
        "border-zhihu/40 bg-zhihu/5 text-zhihu hover:bg-zhihu/10 hover:border-zhihu/60 h-8 gap-1.5 px-3 text-xs font-medium transition-all",
        className,
      )}
      title="通过知乎官方 OAuth 授权，为本作品在黑客松中计入一次人气奖投票"
    >
      <img src="/zhihu.svg" alt="知乎" className="size-3.5 rounded-xs" />
      <span>知乎登录 · 助力人气奖</span>
      <Sparkles className="size-3 animate-pulse text-amber-500" />
    </a>
  );
}
