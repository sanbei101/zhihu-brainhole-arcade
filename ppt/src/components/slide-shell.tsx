import { Expand, Shrink } from "lucide-react";
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
  isFullscreen?: boolean;
  onToggleFullscreen?: () => void;
}

export function SlideShell({
  category,
  title,
  subtitle,
  skin,
  children,
  headerRight,
  noPadding = false,
  isFullscreen = false,
  onToggleFullscreen,
}: SlideShellProps) {
  return (
    <div
      className="relative flex size-full flex-col justify-between overflow-hidden select-none"
      style={skinStyleVars(skin)}
    >
      {/* 🌌 活体像素舞台背景：天空、星尘、远山轮廓、动态地标与地面律动精灵（全量饱满展现） */}
      <ThemeStage
        skin={skin}
        active={true}
        className="pointer-events-none opacity-100 transition-opacity duration-700"
      />

      {/* 顶部标题栏：纯净亮色高通透毛玻璃 */}
      <header className="relative z-20 flex shrink-0 items-center justify-between border-b border-slate-200/70 bg-white/80 px-6 py-3 shadow-xs backdrop-blur-md sm:px-10">
        <div className="flex items-center gap-3 sm:gap-5">
          <div className="flex items-center gap-2 rounded-full border border-[#0066ff]/30 bg-[#0066ff]/10 px-3 py-0.5 shadow-xs">
            <span className="flex size-2 animate-pulse rounded-full bg-[#0066ff] shadow-[0_0_6px_#0066ff]" />
            <span className="font-mono text-xs font-black tracking-wider text-[#0066ff] uppercase">
              {category}
            </span>
          </div>
          <div className="h-4 w-px bg-slate-300/80" />
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2.5">
            <h1 className="text-lg font-black tracking-tight text-slate-900 drop-shadow-xs sm:text-xl lg:text-2xl">
              {title}
            </h1>
            {subtitle && (
              <span className="text-xs font-semibold text-slate-500 sm:text-sm">— {subtitle}</span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2.5 sm:gap-3">
          {headerRight}

          {/* 全屏切换按钮 */}
          {onToggleFullscreen && (
            <button
              type="button"
              onClick={onToggleFullscreen}
              className="flex cursor-pointer items-center gap-1.5 rounded-full border border-[#0066ff] bg-blue-50 px-3 py-1 text-xs font-bold text-[#0066ff] shadow-xs transition-all hover:bg-[#0066ff] hover:text-white active:scale-95"
              title="切换全屏演示 (F 键)"
            >
              {isFullscreen ? <Shrink className="size-3.5" /> : <Expand className="size-3.5" />}
              <span className="hidden sm:inline">{isFullscreen ? "退出全屏" : "全屏演示"}</span>
              <kbd className="hidden rounded bg-blue-100 px-1 py-0.5 font-mono text-[10px] text-blue-800 sm:inline">
                F
              </kbd>
            </button>
          )}

          {/* 随页自动流转的世界线皮肤指示徽章 */}
          <div className="flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/90 px-3 py-1 text-xs text-slate-700 shadow-xs backdrop-blur-md">
            <span
              className="size-2.5 rounded-full shadow-xs ring-1 ring-black/10"
              style={{ backgroundColor: skin.accent }}
            />
            <span className="font-bold">{skin.name}</span>
            <span className="font-mono text-[11px] text-slate-400">({skin.mood})</span>
          </div>
        </div>
      </header>

      {/* 主体展示区：底部留出高度，让地台与巡游精灵完整露脸！ */}
      <main
        className={`relative z-10 flex flex-1 flex-col justify-center overflow-hidden ${
          noPadding ? "" : "px-4 py-2 pb-12 sm:px-10 sm:py-3 sm:pb-16 lg:px-14 lg:pb-22"
        }`}
      >
        {children}
      </main>
    </div>
  );
}
