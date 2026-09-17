import { CheckCircle2, Laptop, Smartphone, ShieldCheck } from "lucide-react";

import type { ScenarioSkin } from "@/lib/scenario-skin";

export function Slide4CrossPlatform({ skin: _skin }: { skin: ScenarioSkin }) {
  return (
    <div className="relative flex size-full flex-col justify-between gap-4 overflow-hidden rounded-2xl border border-white/10 bg-[#0c101a] p-6 shadow-2xl sm:p-10">
      {/* 顶部标题 */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-[#0066ff] uppercase">
          <span>[多端工程与响应式体验]</span>
        </div>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          无缝适配：桌面端三栏全景战局 × 移动端单手掌控
        </h2>
        <p className="text-xs text-slate-300 sm:text-sm">
          针对不同终端使用场景量身设计布局体系，从 4K 超宽屏到手机竖屏，确保决策沉浸感零损耗。
        </p>
      </div>

      {/* 终端双模态对比卡片 */}
      <div className="my-auto grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* 桌面端布局架构 */}
        <div className="space-y-4 rounded-xl border border-blue-500/20 bg-blue-950/10 p-5 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-sm font-bold text-blue-400">
              <Laptop className="size-4" />
              <span>桌面端：全景三栏式权力战局 (Tactical War Room)</span>
            </span>
            <span className="rounded bg-blue-500/20 px-2 py-0.5 font-mono text-[10px] text-blue-300">
              宽屏沉浸
            </span>
          </div>

          {/* 桌面端线框模拟 */}
          <div className="rounded-lg border border-white/10 bg-black/60 p-3">
            <div className="flex h-28 gap-2">
              {/* 左栏 */}
              <div className="flex w-1/4 flex-col justify-between rounded border border-white/10 bg-white/5 p-1.5">
                <span className="font-mono text-[9px] text-slate-400">四方势力</span>
                <div className="space-y-1">
                  <div className="h-2 w-full rounded bg-cyan-400/40" />
                  <div className="h-2 w-3/4 rounded bg-amber-400/40" />
                  <div className="h-2 w-4/5 rounded bg-rose-400/40" />
                </div>
                <span className="text-[8px] text-slate-500">信任阈值</span>
              </div>

              {/* 中栏 */}
              <div className="flex flex-1 flex-col justify-between rounded border border-[#0066ff]/30 bg-[#0066ff]/10 p-2">
                <div className="flex items-center justify-between font-mono text-[9px] text-cyan-300">
                  <span>议事厅推演舞台</span>
                  <span className="animate-pulse">● 演出中</span>
                </div>
                <div className="my-auto flex items-end justify-around">
                  <div className="size-6 rounded bg-white/20" />
                  <div className="size-7 rounded bg-amber-400/30" />
                  <div className="size-6 rounded bg-cyan-400/30" />
                </div>
                <div className="h-3 truncate rounded border border-white/10 bg-black/50 px-1 text-[8px] text-slate-300">
                  周瑜: 誓保江东六郡，决不降曹！
                </div>
              </div>

              {/* 右栏 */}
              <div className="flex w-1/3 flex-col justify-between rounded border border-white/10 bg-white/5 p-1.5">
                <span className="font-mono text-[9px] text-slate-400">四维指标 & 决策</span>
                <div className="space-y-1">
                  <div className="h-1.5 w-full rounded bg-emerald-400/50" />
                  <div className="h-1.5 w-2/3 rounded bg-blue-400/50" />
                </div>
                <div className="space-y-1">
                  <div className="h-3 rounded bg-amber-400/20 px-1 text-[8px] text-amber-300">
                    D. 天命破壁
                  </div>
                  <div className="h-2.5 rounded bg-white/10" />
                </div>
              </div>
            </div>
          </div>

          <ul className="space-y-1.5 text-xs text-slate-300">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-3.5 shrink-0 text-blue-400" />
              <span>
                <strong>信息密度充沛</strong>：四维指标、人物阵营、对峙舞台同屏呈现，无需频繁切页。
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-3.5 shrink-0 text-blue-400" />
              <span>
                <strong>全键盘快捷操作</strong>：数字键 1-4 快速决策，Space
                推进剧本，大屏爽快度拉满。
              </span>
            </li>
          </ul>
        </div>

        {/* 移动端布局架构 */}
        <div className="space-y-4 rounded-xl border border-emerald-500/20 bg-emerald-950/10 p-5 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-sm font-bold text-emerald-400">
              <Smartphone className="size-4" />
              <span>移动端：流式卡片与单手掌控 (Single-Hand Card Stream)</span>
            </span>
            <span className="rounded bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] text-emerald-300">
              触控优先
            </span>
          </div>

          {/* 移动端线框模拟 */}
          <div className="rounded-lg border border-white/10 bg-black/60 p-3">
            <div className="flex h-28 items-center justify-center">
              <div className="flex h-full w-28 flex-col justify-between rounded-lg border border-emerald-500/40 bg-white/5 p-1.5">
                <div className="flex items-center justify-between font-mono text-[8px] text-emerald-300">
                  <span>WORLDLINE</span>
                  <span>R.2/4</span>
                </div>
                {/* 移动端吸附舞台 */}
                <div className="flex h-9 items-center justify-center gap-1 rounded bg-[#0066ff]/15">
                  <div className="size-4 rounded bg-white/20" />
                  <div className="size-5 rounded bg-amber-400/40" />
                </div>
                {/* 底部吸附选项 */}
                <div className="space-y-1">
                  <div className="h-3 truncate rounded bg-amber-400/20 px-1 text-[7px] text-amber-200">
                    🌟 破釜沉舟挥师南渡
                  </div>
                  <div className="h-2.5 rounded bg-white/10" />
                </div>
              </div>
            </div>
          </div>

          <ul className="space-y-1.5 text-xs text-slate-300">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-3.5 shrink-0 text-emerald-400" />
              <span>
                <strong>动态视口单位 (dvh)</strong>：完美解决移动端 Safari / Chrome
                动态地址栏遮挡问题。
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-3.5 shrink-0 text-emerald-400" />
              <span>
                <strong>大拇指黄金热区</strong>：核心决策项吸附屏幕下半区，点击热区 &gt;
                48px，杜绝误触。
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* 底部性能支撑 */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-slate-300 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <ShieldCheck className="size-4 text-cyan-400" />
          <span className="font-semibold text-white">底层工程支撑:</span>
          <span>Next.js 16 App Router + React 19 React Compiler 自动记忆化，零冗余重绘。</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
          <span>GPU Keyframe CSS</span>
          <span>•</span>
          <span>Zero Runtime CSS-in-JS</span>
        </div>
      </div>
    </div>
  );
}
