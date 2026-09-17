import { useEffect, useState, useRef, useCallback } from "react";

import { getSkin, type ScenarioSkin } from "@/lib/scenario-skin";

import { NavigationBar } from "./components/navigation-bar";
import { OverviewDrawer } from "./components/overview-drawer";
import { PresenterNotes } from "./components/presenter-notes";
import { SlideShell } from "./components/slide-shell";
import { SLIDES } from "./slides";

export function PresentationApp() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [manualSkin, setManualSkin] = useState<ScenarioSkin | null>(null);
  const [showNotes, setShowNotes] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const touchStartXRef = useRef<number | null>(null);
  const totalSlides = SLIDES.length;
  const currentSlide = SLIDES[currentSlideIndex] ?? SLIDES[0];

  // 默认根据当前页的世界线主题自动换肤，若用户手动选择则优先响应
  const skin = manualSkin ?? getSkin(currentSlide.defaultSkinId);

  const goToNext = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, totalSlides - 1));
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  }, []);

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
        setCurrentSlideIndex(0);
      } else if (e.key === "End") {
        e.preventDefault();
        setCurrentSlideIndex(totalSlides - 1);
      } else if (e.key === "n" || e.key === "N") {
        setShowNotes((prev) => !prev);
      } else if (e.key === "t" || e.key === "T" || e.key === "o" || e.key === "O") {
        setShowOverview((prev) => !prev);
      } else if (e.key === "f" || e.key === "F") {
        toggleFullscreen();
      } else if (e.key >= "1" && e.key <= "9") {
        const target = Number(e.key) - 1;
        if (target < totalSlides) {
          setCurrentSlideIndex(target);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev, toggleFullscreen, totalSlides]);

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
      className="relative flex h-screen w-screen flex-col overflow-hidden font-sans text-slate-100"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 幻灯片主体 */}
      <div className="slide-enter relative flex-1 overflow-hidden" key={currentSlide.id}>
        <SlideShell
          category={currentSlide.category}
          title={currentSlide.title}
          subtitle={currentSlide.subtitle}
          skin={skin}
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
        onSelectSkin={(selected) => setManualSkin(selected)}
      />

      {/* 演讲者备注抽屉 */}
      <PresenterNotes slide={currentSlide} isOpen={showNotes} onClose={() => setShowNotes(false)} />

      {/* 幻灯片大纲缩略面板 */}
      <OverviewDrawer
        slides={SLIDES}
        currentSlide={currentSlideIndex}
        isOpen={showOverview}
        onClose={() => setShowOverview(false)}
        onSelectSlide={(idx) => {
          setCurrentSlideIndex(idx);
          setManualSkin(null); // 切页时恢复世界线自适应
        }}
      />
    </div>
  );
}

export default PresentationApp;
