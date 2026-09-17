import type { ReactNode } from "react";

import { ThemeStage } from "@/components/pixel/theme-stage";
import { skinStyleVars, type ScenarioSkin } from "@/lib/scenario-skin";

interface SlideShellProps {
  category: string;
  title: string;
  subtitle?: string;
  skin: ScenarioSkin;
  children: ReactNode;
  headerRight?: ReactNode;
  noPadding?: boolean;
}

export function SlideShell({
  category,
  title,
  subtitle,
  skin,
  children,
  headerRight,
  noPadding = false,
}: SlideShellProps) {
  return (
    <div
      className="relative flex size-full flex-col justify-between overflow-hidden select-none"
      style={skinStyleVars(skin)}
    >
      {/* 🌌 活体像素舞台背景：天空、星尘、远山轮廓、动态地标与地面律动精灵 */}
      <ThemeStage
        skin={skin}
        active={true}
        className="pointer-events-none opacity-85 transition-opacity duration-700"
      />

      {/* 渐变遮罩：在确保背景像素动画与星空清晰流动的同时，给前景文字和卡片充足对比度 */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/75 backdrop-blur-[2px]" />

      {/* 顶部标题栏：放大字号与间隙 */}
      <header className="relative z-20 flex shrink-0 items-center justify-between border-b border-white/15 bg-black/65 px-6 py-4 backdrop-blur-xl sm:px-12">
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2.5 rounded-full border border-[#0066ff]/50 bg-[#0066ff]/25 px-3.5 py-1">
            <span className="flex size-2.5 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
            <span className="font-mono text-xs font-bold tracking-wider text-cyan-300 uppercase sm:text-sm">
              {category}
            </span>
          </div>
          <div className="h-4 w-px bg-white/25" />
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
            <h1 className="text-xl font-black tracking-tight text-white drop-shadow-md sm:text-2xl lg:text-3xl">
              {title}
            </h1>
            {subtitle && (
              <span className="text-xs font-medium text-amber-300/90 drop-shadow-xs sm:text-sm">
                — {subtitle}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3.5">
          {headerRight}
          <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs text-slate-200 shadow-sm backdrop-blur-md">
            <span
              className="size-2.5 rounded-full shadow-xs"
              style={{ backgroundColor: skin.accent }}
            />
            <span className="font-bold">{skin.name}</span>
            <span className="font-mono text-[11px] text-slate-400">({skin.mood})</span>
          </div>
        </div>
      </header>

      {/* 主体展示区：开阔空间，充沛边距 */}
      <main
        className={`relative z-10 flex flex-1 flex-col justify-center overflow-hidden ${
          noPadding ? "" : "px-6 py-4 sm:px-12 sm:py-6 lg:px-16"
        }`}
      >
        {children}
      </main>
    </div>
  );
}
