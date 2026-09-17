import { ChevronLeft, ChevronRight, Expand, Shrink } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { getSkin } from "@/lib/scenario-skin";

import { SlideShell } from "./components/slide-shell";
import { SLIDES } from "./slides";

export function PresentationApp() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const [isFullscreen, setIsFullscreen] = useState(false);

  const touchStartXRef = useRef<number | null>(null);
  const totalSlides = SLIDES.length;
  const currentSlide = SLIDES[currentSlideIndex] ?? SLIDES[0];

  // 每一页自动采用其专属世界线主题皮肤
  const skin = getSkin(currentSlide.defaultSkinId);

  const goToNext = useCallback(() => {
    setDirection("forward");
    setCurrentSlideIndex((prev) => Math.min(prev + 1, totalSlides - 1));
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    setDirection("backward");
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const jumpToSlide = useCallback(
    (target: number) => {
      if (target >= 0 && target < totalSlides) {
        setDirection(target >= currentSlideIndex ? "forward" : "backward");
        setCurrentSlideIndex(target);
      }
    },
    [currentSlideIndex, totalSlides],
  );

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      void document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      void document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  }, []);

  // 键盘快捷键监听
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 翻页操作
      if (
        e.key === "ArrowRight" ||
        e.key === " " ||
        e.key === "PageDown" ||
        e.key === "ArrowDown"
      ) {
        e.preventDefault();
        goToNext();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp" || e.key === "ArrowUp") {
        e.preventDefault();
        goToPrev();
      } else if (e.key === "Home") {
        e.preventDefault();
        jumpToSlide(0);
      } else if (e.key === "End") {
        e.preventDefault();
        jumpToSlide(totalSlides - 1);
      } else if (e.key === "f" || e.key === "F") {
        toggleFullscreen();
      } else if (e.key >= "1" && e.key <= "9") {
        const target = Number(e.key) - 1;
        jumpToSlide(target);
      } else if (e.key === "0") {
        jumpToSlide(9);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev, jumpToSlide, toggleFullscreen, totalSlides]);

  // 全屏状态改变同步
  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener("fullscreenchange", handleFsChange);
    return () => document.removeEventListener("fullscreenchange", handleFsChange);
  }, []);

  // 触摸手势滑动监听 (移动端适配)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartXRef.current;
    if (diff > 50) {
      goToPrev();
    } else if (diff < -50) {
      goToNext();
    }
    touchStartXRef.current = null;
  };

  return (
    <div
      className="relative flex h-screen w-screen flex-col overflow-hidden font-sans text-slate-900 select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 悬浮全屏控制按钮：置于屏幕右上角，毛玻璃轻巧悬浮，绝不占据内容布局 */}
      <button
        type="button"
        onClick={toggleFullscreen}
        className="fixed top-3 right-3 z-50 flex cursor-pointer items-center gap-1.5 rounded-full border border-slate-300/80 bg-white/85 px-3.5 py-1.5 text-xs font-black text-slate-700 shadow-xl backdrop-blur-md transition-all hover:scale-105 hover:border-[#0066ff] hover:bg-white hover:text-[#0066ff] active:scale-95 sm:top-4 sm:right-4"
        title={isFullscreen ? "退出全屏 (F / Esc)" : "全屏演示 (F)"}
      >
        {isFullscreen ? <Shrink className="size-4" /> : <Expand className="size-4" />}
        <span className="hidden sm:inline">{isFullscreen ? "退出全屏" : "全屏演示"}</span>
        <kbd className="hidden rounded bg-slate-100 px-1 py-0.5 font-mono text-[10px] text-slate-500 sm:inline">
          F
        </kbd>
      </button>

      {/* 悬浮轻量翻页状态指示舱：置于屏幕右下角，低透明度，悬浮时高亮 */}
      <div className="fixed right-3 bottom-3 z-50 flex items-center gap-1 rounded-full border border-slate-300/80 bg-white/80 px-2.5 py-1 text-xs font-bold text-slate-700 opacity-40 shadow-xl backdrop-blur-md transition-opacity hover:opacity-100 sm:right-4 sm:bottom-4">
        <button
          type="button"
          onClick={goToPrev}
          disabled={currentSlideIndex === 0}
          className="cursor-pointer rounded-full p-1 hover:bg-slate-100 hover:text-[#0066ff] disabled:cursor-not-allowed disabled:opacity-25"
          title="上一页 (←)"
        >
          <ChevronLeft className="size-4" />
        </button>
        <span className="px-1.5 font-mono text-xs font-black">
          {currentSlideIndex + 1} / {totalSlides}
        </span>
        <button
          type="button"
          onClick={goToNext}
          disabled={currentSlideIndex === totalSlides - 1}
          className="cursor-pointer rounded-full p-1 hover:bg-slate-100 hover:text-[#0066ff] disabled:cursor-not-allowed disabled:opacity-25"
          title="下一页 (→ / Space)"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>

      {/* 边缘轻微悬浮翻页热区：鼠标靠近屏幕两侧边缘出现 */}
      {currentSlideIndex > 0 && (
        <button
          type="button"
          onClick={goToPrev}
          className="fixed top-1/2 left-2 z-40 -translate-y-1/2 cursor-pointer rounded-full border border-slate-200/60 bg-white/60 p-2 text-slate-600 opacity-0 shadow-lg backdrop-blur-sm transition-all hover:border-[#0066ff] hover:bg-white hover:text-[#0066ff] hover:opacity-100 active:scale-95 sm:left-3"
          title="上一页 (←)"
        >
          <ChevronLeft className="size-5" />
        </button>
      )}
      {currentSlideIndex < totalSlides - 1 && (
        <button
          type="button"
          onClick={goToNext}
          className="fixed top-1/2 right-2 z-40 -translate-y-1/2 cursor-pointer rounded-full border border-slate-200/60 bg-white/60 p-2 text-slate-600 opacity-0 shadow-lg backdrop-blur-sm transition-all hover:border-[#0066ff] hover:bg-white hover:text-[#0066ff] hover:opacity-100 active:scale-95 sm:right-3"
          title="下一页 (→ / Space)"
        >
          <ChevronRight className="size-5" />
        </button>
      )}

      {/* 幻灯片主体：100% 占满全屏显示内容 */}
      <div
        className={`${direction === "forward" ? "slide-enter-forward" : "slide-enter-backward"} relative size-full flex-1 overflow-hidden`}
        key={currentSlide.id}
      >
        <SlideShell skin={skin}>{currentSlide.component({ skin, active: true })}</SlideShell>
      </div>
    </div>
  );
}

export default PresentationApp;
