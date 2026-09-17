import { useEffect, useState, useRef, useCallback } from "react";

import { getSkin } from "@/lib/scenario-skin";

import { NavigationBar } from "./components/navigation-bar";
import { OverviewDrawer } from "./components/overview-drawer";
import { PresenterNotes } from "./components/presenter-notes";
import { SlideShell } from "./components/slide-shell";
import { SLIDES } from "./slides";

export function PresentationApp() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const [showNotes, setShowNotes] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const touchStartXRef = useRef<number | null>(null);
  const totalSlides = SLIDES.length;
  const currentSlide = SLIDES[currentSlideIndex] ?? SLIDES[0];

  // 每一页自动严格采用其专属世界线主题皮肤，不再提供手动干扰
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
      // 若处于抽屉打开状态，Esc 退出抽屉
      if (e.key === "Escape") {
        setShowOverview(false);
        setShowNotes(false);
        return;
      }

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
      } else if (e.key === "n" || e.key === "N") {
        setShowNotes((prev) => !prev);
      } else if (e.key === "t" || e.key === "T" || e.key === "o" || e.key === "O") {
        setShowOverview((prev) => !prev);
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
      className="relative flex h-screen w-screen flex-col overflow-hidden font-sans text-slate-900"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 幻灯片主体：带丝滑的前后方向感知动画 */}
      <div
        className={`${direction === "forward" ? "slide-enter-forward" : "slide-enter-backward"} relative flex-1 overflow-hidden`}
        key={currentSlide.id}
      >
        <SlideShell
          category={currentSlide.category}
          title={currentSlide.title}
          subtitle={currentSlide.subtitle}
          skin={skin}
          isFullscreen={isFullscreen}
          onToggleFullscreen={toggleFullscreen}
        >
          {currentSlide.component({ skin, active: true })}
        </SlideShell>
      </div>

      {/* 底部控制台 */}
      <NavigationBar
        currentSlide={currentSlideIndex}
        totalSlides={totalSlides}
        onPrev={goToPrev}
        onNext={goToNext}
        onToggleNotes={() => setShowNotes((prev) => !prev)}
        showNotes={showNotes}
        onToggleOverview={() => setShowOverview((prev) => !prev)}
        showOverview={showOverview}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        skin={skin}
      />

      {/* 演讲者备注抽屉 */}
      <PresenterNotes slide={currentSlide} isOpen={showNotes} onClose={() => setShowNotes(false)} />

      {/* 幻灯片大纲缩略面板 */}
      <OverviewDrawer
        slides={SLIDES}
        currentSlide={currentSlideIndex}
        isOpen={showOverview}
        onClose={() => setShowOverview(false)}
        onSelectSlide={(idx) => jumpToSlide(idx)}
      />
    </div>
  );
}

export default PresentationApp;
