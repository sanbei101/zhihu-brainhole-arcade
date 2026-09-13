"use client";

import { Sparkles, Trophy } from "lucide-react";
import { useEffect, useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const KANSHAN_ACTIONS = [
  { id: "greeting", file: "/liukanshan/greeting.gif", name: "打招呼", hint: "Hi！我是刘看山～" },
  {
    id: "coding",
    file: "/liukanshan/coding.gif",
    name: "狂敲代码",
    hint: "正在黑客松通宵肝代码中…",
  },
  {
    id: "stroll",
    file: "/liukanshan/stroll.gif",
    name: "逛脑洞街",
    hint: "在脑洞游乐园里四处晃悠～",
  },
  {
    id: "sleepy",
    file: "/liukanshan/sleepy.gif",
    name: "打瞌睡",
    hint: "推演太烧脑，看山犯困啦 zzz",
  },
];

export function LiuKanshanMascot({ className }: { className?: string }) {
  const [actionIndex, setActionIndex] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    // 检查是否已助力
    const params = new URLSearchParams(window.location.search);
    if (params.get("voted") === "1") {
      setHasVoted(true);
      setActionIndex(1); // 助力成功后切换为敲代码庆祝
    }

    fetch("/api/auth/zhihu/status")
      .then((res) => res.json())
      .then((data: { voted?: boolean }) => {
        if (data.voted) {
          setHasVoted(true);
        }
      })
      .catch(() => {});
  }, []);

  const currentAction = KANSHAN_ACTIONS[actionIndex];

  const handleNextAction = () => {
    setActionIndex((prev) => (prev + 1) % KANSHAN_ACTIONS.length);
  };

  return (
    <div
      className={cn(
        "relative flex flex-col sm:flex-row items-center gap-3 rounded-2xl border border-primary/20 bg-card/60 p-3 sm:p-4 shadow-lg backdrop-blur-md transition-all hover:border-primary/40",
        className,
      )}
    >
      {/* 刘看山动态立绘 (点击切换动作) */}
      <button
        type="button"
        onClick={handleNextAction}
        className="group bg-primary/5 relative size-20 shrink-0 cursor-pointer overflow-hidden rounded-xl p-1 transition-transform hover:scale-105 active:scale-95 sm:size-24"
        title="点击切换刘看山动作"
        aria-label="点击切换刘看山动作"
      >
        <img
          src={currentAction.file}
          alt={`刘看山 · ${currentAction.name}`}
          className="size-full object-contain"
        />
        <span className="bg-background/80 py-0.2 text-muted-foreground absolute right-1 bottom-1 rounded px-1 font-mono text-[9px] opacity-70 group-hover:opacity-100">
          {currentAction.name}
        </span>
      </button>

      {/* 对话气泡与人气奖说明 */}
      <div className="flex flex-1 flex-col items-center gap-1.5 text-center sm:items-start sm:text-left">
        <div className="text-foreground flex items-center gap-1.5 text-xs font-semibold">
          <span className="text-primary font-mono text-[11px] tracking-wider uppercase">
            [知乎吉祥物 · 刘看山]
          </span>
          <span className="text-muted-foreground text-[11px]">{currentAction.hint}</span>
        </div>

        {hasVoted ? (
          <div className="space-y-1">
            <p className="flex items-center justify-center gap-1 text-xs font-medium text-amber-500 sm:justify-start">
              <Trophy className="size-3.5" />
              <span>感谢老铁！你已为本作成功助力「黑客松人气奖」！</span>
            </p>
            <p className="text-muted-foreground text-[11px]">
              你的知乎授权已计入调用统计，快去下方挑选世界线开始推演吧！
            </p>
          </div>
        ) : (
          <div className="space-y-1.5">
            <p className="text-foreground/90 text-xs leading-5">
              主办方特设<span className="text-primary font-semibold">【黑客松人气奖】</span>
              ，点击下方通过知乎官方 OAuth 授权，即可为本作品打 Call 助力！
            </p>
            <div className="pt-0.5">
              <a
                href="/api/auth/zhihu/login"
                className={cn(
                  buttonVariants({ variant: "default", size: "sm" }),
                  "h-7 text-xs gap-1.5 px-3 bg-[#0066ff] hover:bg-[#0052d4] text-white shadow-xs font-medium",
                )}
              >
                <img src="/zhihu.svg" alt="知乎" className="size-3.5 brightness-0 invert" />
                <span>立即登录知乎为本作助力</span>
                <Sparkles className="size-3 animate-pulse text-amber-300" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
