import { ArrowRight, Sparkles } from "lucide-react";

import { ThemeStage } from "@/components/pixel/theme-stage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getSkin, isDarkSkin, skinStyleVars, type ScenarioSkin } from "@/lib/scenario-skin";

import { ASSETS } from "../assets";

export function Slide1Cover({ skin: _defaultSkin }: { skin: ScenarioSkin }) {
  const skin = getSkin("apocalypse");

  return (
    <div
      style={skinStyleVars(skin)}
      className={`bg-background text-foreground relative flex size-full h-screen flex-col justify-between overflow-hidden select-none ${
        isDarkSkin(skin) ? "dark" : ""
      }`}
    >
      {/* 🌌 末日灾变灰烬像素舞台底座 */}
      <ThemeStage
        skin={skin}
        active={true}
        className="pointer-events-none absolute inset-0 size-full opacity-100 transition-opacity duration-700"
      />

      {/* 🎪 核心主标题排版区：16:9 比例精准适配 */}
      <div className="relative z-20 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 py-3 sm:px-6 sm:py-4">
        <div className="space-y-2.5 sm:space-y-3.5">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/40 bg-orange-950/60 px-3 py-0.5 text-xs font-bold text-orange-300 shadow-xs">
            <span className="size-1.5 rounded-full bg-[#e2622c] animate-pulse" />
            <span>知乎硬核脑洞题具象化 · 经典末日灾变推演沙盘</span>
          </div>

          <div className="space-y-1">
            <h1 className="text-3xl leading-tight font-black tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
              假如地球现在进入冰河时代，
            </h1>
            <h2 className="bg-gradient-to-r from-[#e2622c] via-amber-400 to-cyan-400 bg-clip-text text-2xl font-black text-transparent sm:text-4xl lg:text-5xl">
              人类还能生存下去吗？
            </h2>
          </div>

          <p className="max-w-3xl text-xs leading-relaxed text-slate-300 sm:text-sm lg:text-base">
            以知乎答主赵泠等高赞推演为母本，将零下四十三度冰原大迁徙的极限伦理与生死博弈，做成人人可亲历、四方动态博弈的多智能体文字沙盘。
          </p>

          {/* 三大支柱徽章 */}
          <div className="flex flex-wrap gap-2 pt-0.5">
            <span className="rounded-lg border border-orange-500/40 bg-orange-950/50 px-2.5 py-1 font-mono text-[11px] font-bold text-orange-300">
              ⚡ 势力 Multi-Agent 动态博弈
            </span>
            <span className="rounded-lg border border-amber-500/40 bg-amber-950/50 px-2.5 py-1 font-mono text-[11px] font-bold text-amber-300">
              ⚡ 严酷道德与资源梯度抉择
            </span>
            <span className="rounded-lg border border-cyan-500/40 bg-cyan-950/50 px-2.5 py-1 font-mono text-[11px] font-bold text-cyan-300">
              ⚡ 终局自动铸成万字知乎体长回答
            </span>
          </div>

          {/* 🌟 核心金句横幅 */}
          <div className="rounded-r-xl border-y border-r border-l-4 border-orange-500/80 border-orange-500 bg-orange-950/40 py-2 pr-3 pl-3.5 font-serif text-xs text-orange-200 italic shadow-xs sm:py-2.5 sm:pl-4 sm:text-sm">
            “天冻不住人的路！冰封千里，那就把冰原踏成通衢，走出一个不用叩关的天下！”
          </div>
        </div>
      </div>

      {/* 🧭 底栏：领航员刘看山与启动按钮 */}
      <footer className="relative z-20 shrink-0 border-t border-white/10 bg-black/40 px-4 py-2 sm:px-6 sm:py-2.5 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="size-11 shrink-0 rounded-xl border border-white/15 bg-white/10 p-0.5 shadow-sm sm:size-12">
              <img
                src={ASSETS.liukanshan.stroll}
                alt="刘看山极地巡逻"
                className="size-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <Badge className="bg-[#e2622c] text-[10px]">极地领航员 · 刘看山</Badge>
                <span className="font-mono text-[10px] text-slate-400">知乎黑客松参赛作品</span>
              </div>
              <p className="text-[11px] font-medium text-slate-300">
                末日灾变主题 · 零下四十三度全流程对局演示
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button size="sm" className="h-8 gap-1.5 bg-[#e2622c] px-3.5 text-xs font-bold text-black shadow-md hover:bg-orange-500">
              <span>进入沙盘全流程演示</span>
              <ArrowRight className="size-3.5" />
            </Button>
          </div>
        </div>
      </footer>

      {/* 悬浮轻巧快捷键提示 */}
      <div className="pointer-events-none absolute bottom-12 right-4 z-30 hidden sm:flex items-center gap-1 rounded-full border border-white/15 bg-black/70 px-2.5 py-0.5 font-mono text-[10px] text-slate-400 backdrop-blur-md">
        <Sparkles className="size-2.5 text-orange-400" />
        <span>按空格或右方向键进入第 1 幕</span>
      </div>
    </div>
  );
}
