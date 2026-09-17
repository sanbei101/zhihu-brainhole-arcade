import { ChevronLeft, ChevronRight, Expand, FileText, Grid, Palette, Shrink } from "lucide-react";

import { SCENARIO_SKINS, type ScenarioSkin } from "@/lib/scenario-skin";

interface NavigationBarProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onToggleNotes: () => void;
  showNotes: boolean;
  onToggleOverview: () => void;
  showOverview: boolean;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  skin: ScenarioSkin;
  onSelectSkin: (skin: ScenarioSkin) => void;
}

export function NavigationBar({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onToggleNotes,
  showNotes,
  onToggleOverview,
  showOverview,
  isFullscreen,
  onToggleFullscreen,
  skin,
  onSelectSkin,
}: NavigationBarProps) {
  const progressPercent = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <footer className="relative z-30 flex shrink-0 items-center justify-between border-t border-white/10 bg-black/70 px-4 py-2.5 backdrop-blur-xl sm:px-8">
      {/* 底部细进度条 */}
      <div className="absolute top-0 right-0 left-0 h-[2px] bg-white/10">
        <div
          className="h-full bg-gradient-to-r from-[#0066ff] to-cyan-400 transition-all duration-300 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* 左侧：翻页与页码 */}
      <div className="flex items-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={onPrev}
          disabled={currentSlide === 0}
          className="flex size-8 cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition-all hover:bg-white/15 active:scale-95 disabled:pointer-events-none disabled:opacity-30"
          title="上一页 (←)"
          aria-label="上一页"
        >
          <ChevronLeft className="size-4" />
        </button>

        <div className="flex items-center gap-1 font-mono text-xs font-semibold">
          <span className="text-white">{String(currentSlide + 1).padStart(2, "0")}</span>
          <span className="text-slate-500">/</span>
          <span className="text-slate-400">{String(totalSlides).padStart(2, "0")}</span>
        </div>

        <button
          type="button"
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="flex size-8 cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition-all hover:bg-white/15 active:scale-95 disabled:pointer-events-none disabled:opacity-30"
          title="下一页 (→ 或 Space)"
          aria-label="下一页"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>

      {/* 中间：皮肤快捷切换器 */}
      <div className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2 py-1 md:flex">
        <Palette className="ml-1 size-3 text-slate-400" />
        <span className="mr-1 font-mono text-[11px] text-slate-400">宇宙换肤:</span>
        <div className="flex items-center gap-1">
          {SCENARIO_SKINS.slice(0, 5).map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => onSelectSkin(s)}
              className={`cursor-pointer rounded-full px-2 py-0.5 text-[10px] font-medium transition-all ${
                skin.id === s.id
                  ? "bg-white font-semibold text-black shadow-xs"
                  : "text-slate-400 hover:bg-white/10 hover:text-white"
              }`}
              title={`${s.name} · ${s.mood}`}
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>

      {/* 右侧：辅助功能按钮 */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* 幻灯片大纲抽屉 */}
        <button
          type="button"
          onClick={onToggleOverview}
          className={`flex h-8 cursor-pointer items-center gap-1.5 rounded-lg border px-2.5 text-xs font-medium transition-all ${
            showOverview
              ? "border-[#0066ff] bg-[#0066ff]/20 text-[#0066ff]"
              : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/15"
          }`}
          title="查看大纲缩略图 (T 键)"
        >
          <Grid className="size-3.5" />
          <span className="hidden sm:inline">大纲</span>
        </button>

        {/* 演讲者备注 */}
        <button
          type="button"
          onClick={onToggleNotes}
          className={`flex h-8 cursor-pointer items-center gap-1.5 rounded-lg border px-2.5 text-xs font-medium transition-all ${
            showNotes
              ? "border-amber-400 bg-amber-400/20 text-amber-300"
              : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/15"
          }`}
          title="演讲者手记与答辩重点 (N 键)"
        >
          <FileText className="size-3.5" />
          <span className="hidden sm:inline">手记</span>
        </button>

        {/* 全屏按钮 */}
        <button
          type="button"
          onClick={onToggleFullscreen}
          className="flex size-8 cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-all hover:bg-white/15"
          title="切换全屏 (F 键)"
          aria-label="全屏"
        >
          {isFullscreen ? <Shrink className="size-3.5" /> : <Expand className="size-3.5" />}
        </button>
      </div>
    </footer>
  );
}
