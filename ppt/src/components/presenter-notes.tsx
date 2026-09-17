import { Lightbulb, MessageSquare, ShieldAlert, X } from "lucide-react";

import type { SlideData } from "../types";

interface PresenterNotesProps {
  slide: SlideData;
  isOpen: boolean;
  onClose: () => void;
}

export function PresenterNotes({ slide, isOpen, onClose }: PresenterNotesProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-16 right-4 z-50 w-96 max-w-[calc(100vw-2rem)] rounded-xl border border-amber-400/30 bg-black/90 p-5 shadow-2xl backdrop-blur-2xl transition-all">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <Lightbulb className="size-4 text-amber-400" />
          <span className="font-mono text-xs font-bold tracking-wider text-amber-300 uppercase">
            演讲手记 · P{String(slide.number).padStart(2, "0")}
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="cursor-pointer rounded p-1 text-slate-400 hover:bg-white/10 hover:text-white"
          aria-label="关闭"
        >
          <X className="size-4" />
        </button>
      </div>

      <div className="mt-3 space-y-4">
        <div>
          <h4 className="text-xs font-medium text-slate-400">当前演讲重心</h4>
          <p className="mt-0.5 text-sm font-semibold text-white">{slide.title}</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-medium text-amber-400">
            <MessageSquare className="size-3.5" />
            <span>核心讲稿提示 (Bullet Points)</span>
          </div>
          <ul className="space-y-1.5 pl-2 text-xs leading-relaxed text-slate-200">
            {slide.notes.map((note, index) => (
              <li key={index} className="flex items-start gap-1.5">
                <span className="font-bold text-amber-400">•</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-start gap-2 rounded-lg border border-cyan-500/20 bg-cyan-500/10 p-2.5 text-[11px] leading-normal text-cyan-200">
          <ShieldAlert className="mt-0.5 size-4 shrink-0 text-cyan-400" />
          <div>
            <strong className="font-semibold text-white">评委攻防提示:</strong>
            <p className="mt-0.5">
              若评委质疑大模型成本与幻觉，重点拿出「前缀缓存 100% 静态命中」与「In-Context Few-Shot
              约束」的数据应对。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
