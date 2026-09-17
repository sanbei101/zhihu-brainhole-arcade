import { Sparkles, Trophy, Terminal } from "lucide-react";

import type { ScenarioSkin } from "@/lib/scenario-skin";

import { ASSETS } from "../assets";

export function Slide1Cover({ skin: _skin }: { skin: ScenarioSkin }) {
  return (
    <div className="relative flex size-full flex-col justify-between overflow-hidden rounded-3xl border border-white/20 bg-black/50 p-8 shadow-2xl backdrop-blur-md sm:p-14">
      {/* 顶栏重要信息：大号徽章 */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-[#0066ff]/60 bg-[#0066ff]/30 px-4 py-1.5 text-sm font-bold text-white shadow-lg shadow-[#0066ff]/25">
            <img src={ASSETS.zhihuSvg} alt="Zhihu" className="size-5 brightness-0 invert" />
            <span>2026 知乎黑客松 · 最终决赛答辩</span>
          </div>
          <span className="flex items-center gap-1.5 rounded-full border border-amber-400/50 bg-amber-400/20 px-3.5 py-1.5 text-xs font-bold text-amber-300 shadow-sm sm:text-sm">
            <Trophy className="size-4 text-amber-400" />
            <span>入围总决赛项目</span>
          </span>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 font-mono text-sm text-slate-300">
          <Terminal className="size-4 text-cyan-400" />
          <span>Next.js 16 · React 19 · DeepSeek V4.1 Flash</span>
        </div>
      </div>

      {/* 核心主标题区：极具震撼力的大号排版 */}
      <div className="relative z-10 my-auto max-w-5xl space-y-6 py-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-cyan-300 backdrop-blur-md">
          <Sparkles className="size-4 animate-pulse text-amber-400" />
          <span>经典知乎“脑洞/历史假设题”具象化推演沙盘</span>
        </div>

        <div className="space-y-3">
          <h1 className="text-5xl leading-tight font-black tracking-tight text-white drop-shadow-lg sm:text-7xl lg:text-8xl">
            知乎脑洞游乐园
          </h1>
          <h2 className="bg-gradient-to-r from-[#0066ff] via-cyan-300 to-amber-300 bg-clip-text text-2xl font-extrabold text-transparent drop-shadow-md sm:text-4xl lg:text-5xl">
            “如果……会怎样” 世界线演变沙盘
          </h2>
        </div>

        <p className="max-w-4xl text-base leading-relaxed font-normal text-slate-200 sm:text-xl">
          以知乎最具代表性的硬核历史、科幻高赞假设问答为母本，通过
          <strong className="mx-1.5 font-bold text-white underline decoration-cyan-400 underline-offset-4">
            Multi-Agent 权力博弈
          </strong>
          、
          <strong className="mx-1.5 font-bold text-cyan-300 underline decoration-cyan-400 underline-offset-4">
            严苛前缀缓存架构
          </strong>{" "}
          与
          <strong className="mx-1.5 font-bold text-amber-300 underline decoration-amber-400 underline-offset-4">
            结算即内容知乎长文生成
          </strong>
          ，把单向文字脑洞转变为人人可亲历、步步有代价的策略文字推演模拟器。
        </p>

        {/* 金句横幅：巨大字体 */}
        <div className="rounded-r-2xl border-y border-r border-l-4 border-amber-400 border-amber-400/20 bg-amber-400/10 py-2.5 pl-6 font-serif text-lg text-amber-200 italic sm:text-2xl">
          “天下若容不下汉室，汉室便去重造一个天下！—— 一句‘如果’，值得用一整个世界来回答。”
        </div>
      </div>

      {/* 底栏与刘看山交互形象：超大号刘看山 */}
      <div className="relative z-10 flex flex-wrap items-end justify-between gap-6 border-t border-white/15 pt-5">
        <div className="flex items-center gap-5">
          <div className="size-24 shrink-0 rounded-3xl border-2 border-white/25 bg-white/10 p-2 shadow-2xl backdrop-blur-xl transition-transform hover:scale-105 sm:size-32">
            <img
              src={ASSETS.liukanshan.greeting}
              alt="刘看山打招呼"
              className="size-full object-contain"
            />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <span className="text-base font-bold text-white sm:text-lg">参赛主创: sanbei101</span>
              <span className="rounded-full border border-cyan-400/40 bg-cyan-500/20 px-2.5 py-0.5 font-mono text-xs text-cyan-300">
                独立开发者
              </span>
            </div>
            <p className="text-sm font-medium text-slate-300 sm:text-base">
              刘看山为您领航：硬核历史区 × 脑洞科幻区 × 多智能体推演沙盘
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="font-mono text-xs text-slate-400">DEFENSE STATUS</div>
            <div className="flex items-center justify-end gap-2 text-sm font-black text-emerald-400 sm:text-base">
              <span className="size-3 animate-ping rounded-full bg-emerald-400" />
              <span>LIVE READY · 评委请就座</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
