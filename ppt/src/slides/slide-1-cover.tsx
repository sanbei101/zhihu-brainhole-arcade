import { Trophy, Terminal } from "lucide-react";

import type { ScenarioSkin } from "@/lib/scenario-skin";

import { ASSETS } from "../assets";

export function Slide1Cover({ skin: _skin }: { skin: ScenarioSkin }) {
  return (
    <div className="relative flex size-full max-h-full scrollbar-none flex-col justify-between overflow-y-auto rounded-2xl border border-white/80 bg-white/85 p-4 text-slate-900 shadow-2xl backdrop-blur-md sm:p-6 lg:p-8">
      {/* 顶栏重要信息：真实参赛身份与技术栈 */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/80 pb-3">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-2 rounded-full bg-[#0066ff] px-3.5 py-1 text-xs font-bold text-white shadow-sm shadow-[#0066ff]/25 sm:text-sm">
            <img src={ASSETS.zhihuSvg} alt="Zhihu" className="size-4 brightness-0 invert" />
            <span>2026 知乎黑客松 · 最终决赛答辩</span>
          </div>
          <span className="flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-bold text-amber-800 shadow-xs">
            <Trophy className="size-3.5 text-amber-600" />
            <span>入围总决赛项目</span>
          </span>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100/90 px-3 py-1 font-mono text-xs font-medium text-slate-600">
          <Terminal className="size-3.5 text-[#0066ff]" />
          <span>Next.js 16 · React 19 · DeepSeek V4.1 Flash</span>
        </div>
      </div>

      {/* 核心主标题区：大气排版，视觉张力十足 */}
      <div className="relative z-10 my-auto max-w-5xl space-y-4 py-3 sm:space-y-6 sm:py-5">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/90 px-3.5 py-1 text-xs font-bold text-[#0066ff] shadow-xs sm:text-sm">
          <span className="size-2 rounded-full bg-[#0066ff]" />
          <span>知乎硬核“历史假设与科幻脑洞”具象化推演沙盘</span>
        </div>

        <div className="space-y-2 sm:space-y-3">
          <h1 className="text-4xl leading-none font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            知乎脑洞游乐园
          </h1>
          <h2 className="bg-gradient-to-r from-[#0066ff] via-indigo-600 to-amber-600 bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl lg:text-5xl">
            “如果……会怎样” 世界线演变沙盘
          </h2>
        </div>

        {/* 三大核心支柱标签组 */}
        <div className="flex flex-wrap gap-2 pt-1 sm:gap-3">
          <span className="rounded-xl border border-blue-200 bg-blue-50/90 px-3.5 py-1.5 font-mono text-xs font-bold text-[#0066ff] shadow-xs sm:text-sm">
            ⚡ 4 势力 Multi-Agent 冲突调度
          </span>
          <span className="rounded-xl border border-emerald-200 bg-emerald-50/90 px-3.5 py-1.5 font-mono text-xs font-bold text-emerald-800 shadow-xs sm:text-sm">
            ⚡ 三段式前缀缓存 (TTFT -72%)
          </span>
          <span className="rounded-xl border border-amber-200 bg-amber-50/90 px-3.5 py-1.5 font-mono text-xs font-bold text-amber-900 shadow-xs sm:text-sm">
            ⚡ 结算自动沉淀知乎体深度回答
          </span>
        </div>

        <p className="max-w-4xl text-xs leading-relaxed text-slate-700 sm:text-sm lg:text-base">
          以知乎历史区与科幻区高赞假设题为母本，通过智能体朝堂博弈、大势熵增死局与天命破壁抉择，把单向看热闹的文字脑洞，做成人人可亲历、步步有代价的策略文字推演沙盘。
        </p>

        {/* 金句横幅 */}
        <div className="rounded-r-2xl border-y border-r border-l-4 border-amber-300 border-amber-500 bg-amber-50/95 py-2.5 pr-3 pl-4 font-serif text-xs text-amber-950 italic shadow-xs sm:py-3 sm:pl-5 sm:text-sm lg:text-base">
          “天下若容不下汉室，汉室便去重造一个天下！—— 一句‘如果’，值得用一整个世界来回答。”
        </div>
      </div>

      {/* 底栏与刘看山交互形象 */}
      <div className="relative z-10 flex flex-wrap items-end justify-between gap-4 border-t border-slate-200/80 pt-3 sm:pt-4">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="size-16 shrink-0 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-md sm:size-20 lg:size-22">
            <img
              src={ASSETS.liukanshan.greeting}
              alt="刘看山打招呼"
              className="size-full object-contain"
            />
          </div>
          <div className="space-y-0.5 sm:space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-black text-slate-900 sm:text-base">
                参赛主创: sanbei101
              </span>
              <span className="rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 font-mono text-xs font-bold text-[#0066ff]">
                独立全栈开发
              </span>
            </div>
            <p className="text-xs text-slate-600 sm:text-sm">
              领航员刘看山：硬核历史区 × 脑洞科幻区 × 多智能体推演沙盘
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="text-right">
            <div className="font-mono text-[10px] font-bold text-slate-400">DEFENSE STATUS</div>
            <div className="flex items-center justify-end gap-1.5 text-xs font-black text-emerald-600 sm:text-sm">
              <span className="size-2.5 animate-ping rounded-full bg-emerald-500" />
              <span>LIVE READY · 评委请就座</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
