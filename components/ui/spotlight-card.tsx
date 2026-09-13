"use client";

import React, { useRef, useCallback, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  spotlightRadius?: number;
}

/**
 * SpotlightCard
 * 使用 CSS 变量与 requestAnimationFrame 驱动聚光灯反射
 */
export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.08)",
  spotlightRadius = 320,
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const rafRef = useRef<number | null>(null);

  const handleMouseEnter = useCallback(() => {
    if (cardRef.current) {
      rectRef.current = cardRef.current.getBoundingClientRect();
    }
    if (spotlightRef.current) {
      spotlightRef.current.style.opacity = "1";
    }
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!rectRef.current && cardRef.current) {
      rectRef.current = cardRef.current.getBoundingClientRect();
    }
    const rect = rectRef.current;
    if (!rect || !spotlightRef.current) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty("--spot-x", `${x}px`);
        spotlightRef.current.style.setProperty("--spot-y", `${y}px`);
      }
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    rectRef.current = null;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (spotlightRef.current) {
      spotlightRef.current.style.opacity = "0";
    }
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative rounded-xl border border-border bg-card text-card-foreground overflow-hidden transition-all",
        className,
      )}
      {...props}
    >
      {/* 聚光灯微光层 */}
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(${spotlightRadius}px circle at var(--spot-x, -999px) var(--spot-y, -999px), ${spotlightColor}, transparent 80%)`,
        }}
        aria-hidden="true"
      />
      <div className="relative z-20 h-full">{children}</div>
    </div>
  );
}

export default SpotlightCard;
