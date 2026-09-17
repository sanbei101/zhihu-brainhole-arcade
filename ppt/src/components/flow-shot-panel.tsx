import type { ReactNode } from "react";

const TONES = {
  blue: { border: "border-blue-200", text: "text-[#0066ff]", chip: "bg-blue-100 text-[#0066ff]" },
  amber: {
    border: "border-amber-200",
    text: "text-amber-700",
    chip: "bg-amber-100 text-amber-800",
  },
  emerald: {
    border: "border-emerald-200",
    text: "text-emerald-700",
    chip: "bg-emerald-100 text-emerald-800",
  },
  purple: {
    border: "border-purple-200",
    text: "text-purple-700",
    chip: "bg-purple-100 text-purple-800",
  },
  rose: { border: "border-rose-200", text: "text-rose-700", chip: "bg-rose-100 text-rose-800" },
} as const;

export type FlowTone = keyof typeof TONES;

interface FlowShotPanelProps {
  index: string;
  tag: string;
  title: string;
  desc: ReactNode;
  img: string;
  alt: string;
  tone: FlowTone;
}

/** 全流程走查用的单张大图卡：标题条 + 满宽实拍 + 说明。 */
export function FlowShotPanel({ index, tag, title, desc, img, alt, tone }: FlowShotPanelProps) {
  const palette = TONES[tone];

  return (
    <div
      className={`flex flex-col gap-3 rounded-2xl border-2 bg-white/95 p-3 shadow-sm sm:p-4 ${palette.border}`}
    >
      <div className="flex items-center justify-between gap-3 border-b border-slate-200 pb-2">
        <span className="flex min-w-0 items-center gap-2">
          <span className={`font-mono text-sm font-black sm:text-base ${palette.text}`}>
            {index}
          </span>
          <span className="truncate text-sm font-black text-slate-900 sm:text-base lg:text-lg">
            {title}
          </span>
        </span>
        <span
          className={`shrink-0 rounded-full px-2.5 py-0.5 font-mono text-[10px] font-bold ${palette.chip}`}
        >
          {tag}
        </span>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-inner">
        <img src={img} alt={alt} className="aspect-video w-full object-cover object-top" />
      </div>

      <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">{desc}</p>
    </div>
  );
}
