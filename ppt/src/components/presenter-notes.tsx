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
    <div className="absolute top-20 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] rounded-2xl border-2 border-amber-400/60 bg-white/95 p-6 text-slate-800 shadow-2xl backdrop-blur-2xl transition-all">
      <div className="flex items-center justify-between border-b border-slate-200 pb-3.5">
        <div className="flex items-center gap-2">
          <Lightbulb className="size-4 text-amber-500" />
          <span className="font-mono text-xs font-black tracking-wider text-amber-600 uppercase">
            演讲手记 · P{String(slide.number).padStart(2, "0")}
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="cursor-pointer rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-800"
          aria-label="关闭"
        >
          <X className="size-4" />
        </button>
      </div>

      <div className="mt-4 space-y-4">
        <div>
          <h4 className="text-xs font-bold text-slate-400">当前演讲重心</h4>
          <p className="mt-0.5 text-base font-black text-slate-900">{slide.title}</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-600">
            <MessageSquare className="size-3.5" />
            <span>核心讲稿提示 (Bullet Points)</span>
          </div>
          <ul className="space-y-2 pl-2 text-xs leading-relaxed text-slate-700 sm:text-sm">
            {slide.notes.map((note, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-base font-bold text-amber-500">•</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-start gap-2.5 rounded-xl border border-blue-200 bg-blue-50/80 p-3 text-xs leading-relaxed text-blue-900">
          <ShieldAlert className="mt-0.5 size-4 shrink-0 text-[#0066ff]" />
          <div>
            <strong className="font-bold text-[#0066ff]">评委答辩攻防提示:</strong>
            <p className="mt-0.5">
              若评委质疑多智能体调用成本与延迟，重点拿出「前缀缓存 100% 静态命中」与「In-Context
              Few-Shot 约束」的数据强力回应。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
