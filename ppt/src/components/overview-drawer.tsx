import { X } from "lucide-react";

import type { SlideData } from "../types";

interface OverviewDrawerProps {
  slides: SlideData[];
  currentSlide: number;
  isOpen: boolean;
  onClose: () => void;
  onSelectSlide: (index: number) => void;
}

export function OverviewDrawer({
  slides,
  currentSlide,
  isOpen,
  onClose,
  onSelectSlide,
}: OverviewDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="animate-in fade-in absolute inset-0 z-50 flex flex-col bg-black/85 p-6 backdrop-blur-2xl duration-200 sm:p-10">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <h2 className="text-xl font-bold text-white">答辩幻灯片大纲</h2>
          <p className="mt-0.5 text-xs text-slate-400">
            共 {slides.length} 页，点击任意卡片即可直接跳转
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex size-9 cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:bg-white/15"
          aria-label="关闭"
        >
          <X className="size-5" />
        </button>
      </div>

      <div className="mt-6 grid flex-1 grid-cols-2 gap-4 overflow-y-auto pr-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {slides.map((slide, index) => {
          const isCurrent = index === currentSlide;
          return (
            <button
              key={slide.id}
              type="button"
              onClick={() => {
                onSelectSlide(index);
                onClose();
              }}
              className={`group flex cursor-pointer flex-col justify-between rounded-xl border p-4 text-left transition-all ${
                isCurrent
                  ? "border-[#0066ff] bg-[#0066ff]/15 shadow-lg ring-2 shadow-[#0066ff]/20 ring-[#0066ff]/50"
                  : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-white">
                  P{String(slide.number).padStart(2, "0")}
                </span>
                <span className="rounded bg-white/10 px-1.5 py-0.5 text-[9px] font-medium text-slate-300">
                  {slide.category}
                </span>
              </div>

              <div className="my-3">
                <h3 className="line-clamp-2 text-xs font-semibold text-white transition-colors group-hover:text-[#0066ff]">
                  {slide.title}
                </h3>
                <p className="mt-1 line-clamp-1 text-[11px] text-slate-400">{slide.subtitle}</p>
              </div>

              <div className="font-mono text-[10px] text-slate-500">
                {isCurrent ? "● 当前展示中" : "点击跳转 →"}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
