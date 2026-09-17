import { CheckCircle2, Laptop, Smartphone, ShieldCheck } from "lucide-react";

import type { ScenarioSkin } from "@/lib/scenario-skin";

export function Slide4CrossPlatform({ skin: _skin }: { skin: ScenarioSkin }) {
  return (
    <div className="relative flex size-full flex-col justify-between gap-6 overflow-hidden rounded-3xl border border-slate-200/90 bg-white/75 p-8 text-slate-900 shadow-2xl backdrop-blur-xl sm:p-12">
      {/* 顶部标题 */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-[#0066ff] uppercase sm:text-sm">
          <span>[多端工程与跨设备体验]</span>
        </div>
        <h2 className="text-3xl leading-tight font-black text-slate-900 sm:text-4xl lg:text-5xl">
          极致多端适配：桌面三栏战局大屏 × 移动端单手掌控
        </h2>
        <p className="text-sm text-slate-600 sm:text-lg">
          针对不同终端交互场景重构布局体系，从 4K 超宽显示器到手机竖屏，确保宏大决策沉浸感零损耗。
        </p>
      </div>

      {/* 终端双模态对比卡片 */}
      <div className="my-auto grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* 桌面端布局架构 */}
        <div className="space-y-5 rounded-2xl border-2 border-blue-200 bg-white/90 p-6 shadow-md backdrop-blur-xl sm:p-8">
          <div className="flex items-center justify-between border-b border-blue-200 pb-3">
            <span className="flex items-center gap-2.5 text-lg font-black text-[#0066ff] sm:text-xl">
              <Laptop className="size-5" />
              <span>桌面端：全景三栏式权力战局 (Tactical War Room)</span>
            </span>
            <span className="rounded-full border border-blue-200 bg-blue-100 px-3 py-1 font-mono text-xs font-bold text-[#0066ff]">
              宽屏沉浸
            </span>
          </div>

          {/* 桌面端线框模拟 */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-inner">
            <div className="flex h-36 gap-3">
              {/* 左栏 */}
              <div className="flex w-1/4 flex-col justify-between rounded-lg border border-slate-200 bg-white p-2.5 shadow-xs">
                <span className="font-mono text-xs font-bold text-slate-700">四方势力谱系</span>
                <div className="space-y-1.5">
                  <div className="h-2.5 w-full rounded bg-blue-400/60" />
                  <div className="h-2.5 w-3/4 rounded bg-amber-400/60" />
                  <div className="h-2.5 w-4/5 rounded bg-rose-400/60" />
                </div>
                <span className="font-mono text-[11px] text-slate-500">信任阈值监视</span>
              </div>

              {/* 中栏 */}
              <div className="flex flex-1 flex-col justify-between rounded-lg border border-blue-200 bg-blue-50/80 p-2.5 shadow-xs">
                <div className="flex items-center justify-between font-mono text-xs font-bold text-[#0066ff]">
                  <span>议事厅推演舞台</span>
                  <span className="animate-pulse text-emerald-600">● 实时演出中</span>
                </div>
                <div className="my-auto flex items-end justify-around py-1">
                  <div className="size-8 rounded-lg bg-slate-200" />
                  <div className="size-10 rounded-lg bg-amber-200" />
                  <div className="size-8 rounded-lg bg-blue-200" />
                </div>
                <div className="truncate rounded border border-slate-200 bg-white px-2 py-1 text-[11px] font-medium text-slate-800 shadow-xs">
                  周瑜: 誓保江东六郡，决不降曹！
                </div>
              </div>

              {/* 右栏 */}
              <div className="flex w-1/3 flex-col justify-between rounded-lg border border-slate-200 bg-white p-2.5 shadow-xs">
                <span className="font-mono text-xs font-bold text-slate-700">四维指标 & 决策</span>
                <div className="space-y-1">
                  <div className="h-2 w-full rounded bg-emerald-500/50" />
                  <div className="h-2 w-2/3 rounded bg-blue-500/50" />
                </div>
                <div className="space-y-1">
                  <div className="truncate rounded border border-amber-300 bg-amber-100 px-1.5 py-0.5 text-[11px] font-bold text-amber-900">
                    🌟 D. 天命破壁飞升
                  </div>
                  <div className="h-4 rounded bg-slate-100" />
                </div>
              </div>
            </div>
          </div>

          <ul className="space-y-2 text-sm text-slate-700 sm:text-base">
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="size-4 shrink-0 text-[#0066ff]" />
              <span>
                <strong className="text-slate-900">高信息密度同屏呈现</strong>
                ：指标、立绘、对话、决策无需任何翻页。
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="size-4 shrink-0 text-[#0066ff]" />
              <span>
                <strong className="text-slate-900">全键盘极速盲操</strong>：数字键 1-4
                快速决策，Space 推进剧本，大屏爽感拉满。
              </span>
            </li>
          </ul>
        </div>

        {/* 移动端布局架构 */}
        <div className="space-y-5 rounded-2xl border-2 border-emerald-200 bg-white/90 p-6 shadow-md backdrop-blur-xl sm:p-8">
          <div className="flex items-center justify-between border-b border-emerald-200 pb-3">
            <span className="flex items-center gap-2.5 text-lg font-black text-emerald-700 sm:text-xl">
              <Smartphone className="size-5" />
              <span>移动端：流式卡片与单手掌控 (Card Stream)</span>
            </span>
            <span className="rounded-full border border-emerald-200 bg-emerald-100 px-3 py-1 font-mono text-xs font-bold text-emerald-800">
              触控优先
            </span>
          </div>

          {/* 移动端线框模拟 */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-inner">
            <div className="flex h-36 items-center justify-center">
              <div className="flex h-full w-36 flex-col justify-between rounded-xl border-2 border-emerald-300 bg-white p-2 shadow-md">
                <div className="flex items-center justify-between font-mono text-[10px] font-bold text-emerald-700">
                  <span>WORLDLINE</span>
                  <span>R.2/4</span>
                </div>
                {/* 移动端吸附舞台 */}
                <div className="flex h-12 items-center justify-center gap-1.5 rounded-lg border border-blue-200 bg-blue-50">
                  <div className="size-6 rounded bg-slate-200" />
                  <div className="size-7 rounded bg-amber-200" />
                </div>
                {/* 底部吸附选项 */}
                <div className="space-y-1">
                  <div className="truncate rounded border border-amber-300 bg-amber-100 px-1 py-0.5 text-[9px] font-bold text-amber-900">
                    🌟 破釜沉舟挥师南渡
                  </div>
                  <div className="h-3 rounded bg-slate-100" />
                </div>
              </div>
            </div>
          </div>

          <ul className="space-y-2 text-sm text-slate-700 sm:text-base">
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="size-4 shrink-0 text-emerald-600" />
              <span>
                <strong className="text-slate-900">动态视口单位 (dvh)</strong>：彻底解决 iOS Safari
                与 Chrome 动态地址栏遮挡问题。
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="size-4 shrink-0 text-emerald-600" />
              <span>
                <strong className="text-slate-900">大拇指黄金热区</strong>
                ：决策项吸附下半屏，点击热区 &gt; 48px，完全杜绝误触。
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* 底部性能支撑 */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200/90 bg-white/90 px-6 py-3.5 text-sm text-slate-700 shadow-sm backdrop-blur-xl">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="size-5 text-[#0066ff]" />
          <span className="font-bold text-slate-900">工程底层支撑:</span>
          <span>
            Next.js 16 App Router + React 19 React Compiler 自动记忆化，无冗余 re-render。
          </span>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs font-bold text-slate-500">
          <span>GPU Keyframe CSS</span>
          <span>•</span>
          <span>Zero Runtime CSS-in-JS Overhead</span>
        </div>
      </div>
    </div>
  );
}
