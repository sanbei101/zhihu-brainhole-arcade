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
      className="relative flex size-full flex-col justify-between overflow-hidden bg-slate-100/60 select-none"
      style={skinStyleVars(skin)}
    >
      {/* 🌌 活体像素舞台背景：天空、星尘、远山轮廓、动态地标与地面律动精灵 */}
      <ThemeStage
        skin={skin}
        active={true}
        className="pointer-events-none opacity-85 transition-opacity duration-700"
      />

      {/* 亮色通透光晕遮罩：让背景像素动画如水墨青绿/知乎蓝般清新流淌，前景大字保持超高黑白对比度 */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-white/25 to-white/60 backdrop-blur-[1px]" />

      {/* 顶部标题栏：纯净亮色毛玻璃 */}
      <header className="relative z-20 flex shrink-0 items-center justify-between border-b border-slate-200/80 bg-white/85 px-6 py-4 shadow-xs backdrop-blur-xl sm:px-12">
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2 rounded-full border border-[#0066ff]/30 bg-[#0066ff]/10 px-3.5 py-1 shadow-xs">
            <span className="flex size-2.5 animate-pulse rounded-full bg-[#0066ff] shadow-[0_0_8px_#0066ff]" />
            <span className="font-mono text-xs font-black tracking-wider text-[#0066ff] uppercase sm:text-sm">
              {category}
            </span>
          </div>
          <div className="h-4 w-px bg-slate-300" />
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
            <h1 className="text-xl font-black tracking-tight text-slate-900 drop-shadow-xs sm:text-2xl lg:text-3xl">
              {title}
            </h1>
            {subtitle && (
              <span className="text-xs font-semibold text-slate-500 sm:text-sm">— {subtitle}</span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3.5">
          {headerRight}
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3.5 py-1.5 text-xs text-slate-700 shadow-xs backdrop-blur-md">
            <span
              className="size-2.5 rounded-full shadow-xs ring-1 ring-black/10"
              style={{ backgroundColor: skin.accent }}
            />
            <span className="font-bold">{skin.name}</span>
            <span className="font-mono text-[11px] text-slate-400">({skin.mood})</span>
          </div>
        </div>
      </header>

      {/* 主体展示区 */}
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
