import { ChevronLeft, ChevronRight, Expand, FileText, Grid, Palette, Shrink } from "lucide-react";

import { type ScenarioSkin } from "@/lib/scenario-skin";

import { LIGHT_SKINS } from "../theme";

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
    <footer className="relative z-30 flex shrink-0 items-center justify-between border-t border-slate-200/80 bg-white/90 px-4 py-2.5 shadow-sm backdrop-blur-xl sm:px-8">
      {/* 底部细进度条 */}
      <div className="absolute top-0 right-0 left-0 h-[3px] bg-slate-200/80">
        <div
          className="h-full bg-gradient-to-r from-[#0066ff] to-cyan-500 transition-all duration-300 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* 左侧：翻页与页码 */}
      <div className="flex items-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={onPrev}
          disabled={currentSlide === 0}
          className="flex size-8 cursor-pointer items-center justify-center rounded-lg border border-slate-200 bg-slate-100/90 text-slate-700 shadow-xs transition-all hover:bg-slate-200 hover:text-black active:scale-95 disabled:pointer-events-none disabled:opacity-35"
          title="上一页 (←)"
          aria-label="上一页"
        >
          <ChevronLeft className="size-4" />
        </button>

        <div className="flex items-center gap-1 font-mono text-xs font-bold">
          <span className="text-slate-900">{String(currentSlide + 1).padStart(2, "0")}</span>
          <span className="text-slate-400">/</span>
          <span className="text-slate-500">{String(totalSlides).padStart(2, "0")}</span>
        </div>

        <button
          type="button"
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="flex size-8 cursor-pointer items-center justify-center rounded-lg border border-slate-200 bg-slate-100/90 text-slate-700 shadow-xs transition-all hover:bg-slate-200 hover:text-black active:scale-95 disabled:pointer-events-none disabled:opacity-35"
          title="下一页 (→ 或 Space)"
          aria-label="下一页"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>

      {/* 中间：皮肤快捷切换器 */}
      <div className="hidden items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100/90 px-2 py-1 shadow-xs md:flex">
        <Palette className="ml-1 size-3.5 text-slate-500" />
        <span className="mr-1 font-mono text-[11px] font-bold text-slate-600">宇宙换肤:</span>
        <div className="flex items-center gap-1">
          {LIGHT_SKINS.slice(0, 6).map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => onSelectSkin(s)}
              className={`cursor-pointer rounded-full px-2.5 py-0.5 text-[11px] font-medium transition-all ${
                skin.id === s.id
                  ? "scale-102 bg-[#0066ff] font-bold text-white shadow-xs"
                  : "text-slate-600 hover:bg-white hover:text-slate-900"
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
          className={`flex h-8 cursor-pointer items-center gap-1.5 rounded-lg border px-2.5 text-xs font-bold transition-all ${
            showOverview
              ? "border-[#0066ff] bg-[#0066ff] text-white shadow-xs"
              : "border-slate-200 bg-slate-100/90 text-slate-700 hover:bg-slate-200"
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
          className={`flex h-8 cursor-pointer items-center gap-1.5 rounded-lg border px-2.5 text-xs font-bold transition-all ${
            showNotes
              ? "border-amber-500 bg-amber-500 text-white shadow-xs"
              : "border-slate-200 bg-slate-100/90 text-slate-700 hover:bg-slate-200"
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
          className="flex size-8 cursor-pointer items-center justify-center rounded-lg border border-slate-200 bg-slate-100/90 text-slate-700 shadow-xs transition-all hover:bg-slate-200"
          title="切换全屏 (F 键)"
          aria-label="全屏"
        >
          {isFullscreen ? <Shrink className="size-3.5" /> : <Expand className="size-3.5" />}
        </button>
      </div>
    </footer>
  );
}
