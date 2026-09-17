import type { ReactNode } from "react";

import type { ScenarioSkin } from "@/lib/scenario-skin";

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
      style={
        {
          "--skin-bg": skin.bg,
          "--skin-surface": skin.surface,
          "--skin-raised": skin.raised,
          "--skin-ink": skin.ink,
          "--skin-ink-soft": skin.inkSoft,
          "--skin-accent": skin.accent,
          "--skin-accent-soft": skin.accentSoft,
          "--skin-border": skin.border,
        } as React.CSSProperties
      }
    >
      {/* 顶部标题栏 */}
      <header className="relative z-20 flex shrink-0 items-center justify-between border-b border-white/10 bg-black/40 px-6 py-3.5 backdrop-blur-md sm:px-10">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="flex size-2 rounded-full bg-[#0066ff] shadow-[0_0_8px_#0066ff]" />
            <span className="font-mono text-xs font-semibold tracking-wider text-[#0066ff] uppercase">
              {category}
            </span>
          </div>
          <div className="h-3 w-px bg-white/20" />
          <h1 className="text-base font-bold tracking-tight text-white sm:text-lg lg:text-xl">
            {title}
          </h1>
          {subtitle && (
            <span className="hidden text-xs font-normal text-slate-400 lg:inline-block">
              — {subtitle}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          {headerRight}
          <div className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-300 sm:flex">
            <span className="size-2 rounded-full" style={{ backgroundColor: skin.accent }} />
            <span className="font-medium">{skin.name}</span>
            <span className="font-mono text-[10px] text-slate-500">({skin.mood})</span>
          </div>
        </div>
      </header>

      {/* 主体展示区 */}
      <main
        className={`relative z-10 flex flex-1 flex-col justify-center overflow-hidden ${
          noPadding ? "" : "px-6 py-4 sm:px-10 sm:py-6"
        }`}
      >
        {children}
      </main>
    </div>
  );
}
