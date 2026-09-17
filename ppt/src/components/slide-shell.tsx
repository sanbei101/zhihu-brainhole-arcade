import type { ReactNode } from "react";

import { ThemeStage } from "@/components/pixel/theme-stage";
import { skinStyleVars, type ScenarioSkin } from "@/lib/scenario-skin";

interface SlideShellProps {
  skin: ScenarioSkin;
  children: ReactNode;
  noPadding?: boolean;
}

export function SlideShell({ skin, children, noPadding = false }: SlideShellProps) {
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

      {/* 主体展示区：全屏沉浸，四周留出微边距透出像素背景 */}
      <main
        className={`relative z-10 flex size-full min-h-0 flex-1 flex-col justify-center overflow-hidden ${
          noPadding ? "" : "p-2 sm:p-3 md:p-4 lg:p-5"
        }`}
      >
        {children}
      </main>
    </div>
  );
}
