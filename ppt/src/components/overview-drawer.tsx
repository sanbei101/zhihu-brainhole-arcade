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
    <div className="animate-in fade-in absolute inset-0 z-50 flex flex-col bg-white/95 p-6 text-slate-900 backdrop-blur-2xl duration-200 sm:p-12">
      <div className="flex items-center justify-between border-b border-slate-200 pb-5">
        <div>
          <h2 className="text-2xl font-black text-slate-900">答辩幻灯片大纲</h2>
          <p className="mt-1 text-xs text-slate-500 sm:text-sm">
            共 {slides.length} 页，点击任意卡片即可直接跳转
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex size-10 cursor-pointer items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-slate-600 shadow-xs hover:bg-slate-200 hover:text-black"
          aria-label="关闭"
        >
          <X className="size-5" />
        </button>
      </div>

      <div className="mt-6 grid flex-1 grid-cols-2 gap-5 overflow-y-auto pr-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
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
              className={`group flex cursor-pointer flex-col justify-between rounded-2xl border-2 p-5 text-left shadow-sm transition-all ${
                isCurrent
                  ? "border-[#0066ff] bg-blue-50/90 shadow-md ring-4 shadow-[#0066ff]/15 ring-[#0066ff]/20"
                  : "border-slate-200 bg-white hover:border-[#0066ff]/50 hover:bg-slate-50/80 hover:shadow-md"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-black text-slate-400 group-hover:text-[#0066ff]">
                  P{String(slide.number).padStart(2, "0")}
                </span>
                <span className="rounded-full border border-slate-200 bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">
                  {slide.category}
                </span>
              </div>

              <div className="my-4">
                <h3 className="line-clamp-2 text-sm font-black text-slate-900 transition-colors group-hover:text-[#0066ff]">
                  {slide.title}
                </h3>
                <p className="mt-1 line-clamp-1 text-xs text-slate-500">{slide.subtitle}</p>
              </div>

              <div className="font-mono text-xs font-bold text-slate-400">
                {isCurrent ? "● 当前展示中" : "点击跳转 →"}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
