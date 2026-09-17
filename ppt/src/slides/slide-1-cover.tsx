import { Sparkles, Trophy, Terminal } from "lucide-react";

import { ThemeScene } from "@/components/pixel/theme-scene";
import type { ScenarioSkin } from "@/lib/scenario-skin";

import { ASSETS } from "../assets";

export function Slide1Cover({ skin }: { skin: ScenarioSkin }) {
  return (
    <div className="relative flex size-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0c101a] p-6 shadow-2xl sm:p-12">
      {/* 像素背景微舞台 */}
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <ThemeScene skin={skin} variant="banner" className="h-full w-full object-cover" />
      </div>

      {/* 顶栏信息 */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 rounded-full border border-[#0066ff]/40 bg-[#0066ff]/20 px-3 py-1 text-xs font-semibold text-[#0066ff]">
            <img src={ASSETS.zhihuSvg} alt="Zhihu" className="size-3.5 brightness-0 invert" />
            <span>2026 知乎黑客松 · 最终决赛答辩</span>
          </div>
          <span className="flex items-center gap-1 rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-[11px] font-medium text-amber-300">
            <Trophy className="size-3" />
            <span>入围总决赛项目</span>
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
          <Terminal className="size-3.5 text-cyan-400" />
          <span>Next.js 16 · React 19 · DeepSeek V4.1 Flash</span>
        </div>
      </div>

      {/* 核心主标题区 */}
      <div className="relative z-10 my-auto max-w-4xl space-y-6 py-6">
        <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur-md">
          <Sparkles className="size-3.5 animate-pulse text-amber-400" />
          <span>经典知乎“脑洞/历史假设题”具象化推演沙盘</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl leading-tight font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            知乎脑洞游乐园
          </h1>
          <h2 className="bg-gradient-to-r from-[#0066ff] via-cyan-400 to-amber-300 bg-clip-text text-xl font-extrabold text-transparent sm:text-3xl">
            “如果……会怎样” 世界线演变沙盘
          </h2>
        </div>

        <p className="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
          以知乎最具代表性的硬核历史、科幻高赞假设问答为母本，通过
          <strong className="mx-1 font-semibold text-white">Multi-Agent 权力博弈</strong>、
          <strong className="mx-1 font-semibold text-cyan-300">严苛前缀缓存架构</strong> 与
          <strong className="mx-1 font-semibold text-amber-300">结算即内容知乎体生成</strong>，
          把单向文字脑洞转变为人人可亲历、步步有代价的策略文字推演沙盘。
        </p>

        {/* 金句横幅 */}
        <div className="border-l-2 border-amber-400/80 py-1 pl-4 font-serif text-xs text-amber-200/90 italic sm:text-sm">
          “天下若容不下汉室，汉室便去重造一个天下！—— 一句‘如果’，值得用一整个世界来回答。”
        </div>
      </div>

      {/* 底栏与刘看山交互形象 */}
      <div className="relative z-10 flex flex-wrap items-end justify-between gap-4 border-t border-white/10 pt-4">
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 size-16 shrink-0 overflow-hidden rounded-2xl border border-white/10 p-1 shadow-lg backdrop-blur-md sm:size-20">
            <img
              src={ASSETS.liukanshan.greeting}
              alt="刘看山打招呼"
              className="size-full object-contain transition-transform hover:scale-110"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-white">参赛选手: sanbei101</span>
              <span className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[10px] text-slate-300">
                Independent Developer
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-400">
              刘看山为您领航：硬核历史区 × 脑洞科幻区 × 沙盘策略推演
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="font-mono text-[11px] text-slate-400">STATUS</div>
            <div className="flex items-center justify-end gap-1.5 text-xs font-bold text-emerald-400">
              <span className="size-2 animate-ping rounded-full bg-emerald-400" />
              <span>LIVE READY · 评委请就座</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
