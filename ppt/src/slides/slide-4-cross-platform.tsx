import { CheckCircle2, Laptop, Smartphone } from "lucide-react";

import type { ScenarioSkin } from "@/lib/scenario-skin";

import { ASSETS } from "../assets";

export function Slide4CrossPlatform({ skin: _skin }: { skin: ScenarioSkin }) {
  return (
    <div className="relative flex size-full max-h-full scrollbar-none flex-col justify-between overflow-y-auto rounded-2xl border border-white/80 bg-white/85 p-4 text-slate-900 shadow-2xl backdrop-blur-md sm:p-6 lg:p-8">
      {/* 顶部标题 */}
      <div className="space-y-1 sm:space-y-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-wider text-[#0066ff] uppercase sm:text-sm">
          <span>[多端工程与跨设备响应]</span>
        </div>
        <h2 className="text-2xl leading-tight font-black text-slate-900 sm:text-3xl lg:text-4xl">
          多端响应式适配：桌面三栏战局看板 × 移动端单手流式触控
        </h2>
      </div>

      {/* 终端双模态实拍对照 */}
      <div className="my-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
        {/* 桌面端实拍 */}
        <div className="space-y-3.5 rounded-2xl border-2 border-blue-200 bg-white/95 p-4 shadow-sm sm:p-5">
          <div className="flex items-center justify-between border-b border-blue-200/80 pb-2.5">
            <span className="flex items-center gap-2 text-base font-black text-[#0066ff] sm:text-lg">
              <Laptop className="size-5" />
              <span>桌面端</span>
            </span>
            <span className="rounded-full bg-blue-100 px-2.5 py-0.5 font-mono text-xs font-bold text-[#0066ff]">
              宽屏沉浸
            </span>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-inner">
            <img
              src={ASSETS.shots.desktop}
              alt="桌面端宽屏实拍：世界线展厅与战局看板的多栏同屏铺开"
              className="aspect-[3/2] w-full object-cover object-center"
            />
            <span className="absolute top-2 left-2 rounded-full bg-slate-900/70 px-2.5 py-0.5 font-mono text-[10px] font-bold text-white">
              1920px 宽屏 · 多栏并列
            </span>
          </div>

          <ul className="space-y-2 text-xs text-slate-700 sm:text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 shrink-0 text-[#0066ff]" />
              <span>
                <strong>高信息密度同屏</strong>：国力指标、角色立绘、言论对峙、决策树零翻页。
              </span>
            </li>
          </ul>
        </div>

        {/* 移动端实拍 */}
        <div className="space-y-3.5 rounded-2xl border-2 border-emerald-200 bg-white/95 p-4 shadow-sm sm:p-5">
          <div className="flex items-center justify-between border-b border-emerald-200/80 pb-2.5">
            <span className="flex items-center gap-2 text-base font-black text-emerald-700 sm:text-lg">
              <Smartphone className="size-5" />
              <span>移动端</span>
            </span>
            <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 font-mono text-xs font-bold text-emerald-800">
              触控优先
            </span>
          </div>

          {/* 移动端实拍：竖屏单列卡片流 */}
          <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-inner">
            <img
              src={ASSETS.shots.mobile}
              alt="移动端竖屏实拍：单列卡片流与贴合大拇指热区的决策项"
              className="aspect-[3/2] w-full object-cover object-center"
            />
            <span className="absolute top-2 left-2 rounded-full bg-slate-900/70 px-2.5 py-0.5 font-mono text-[10px] font-bold text-white">
              竖屏 · 单列卡片流
            </span>
          </div>

          <ul className="space-y-2 text-xs text-slate-700 sm:text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 shrink-0 text-emerald-600" />
              <span>
                <strong>单手热区流式触控</strong>：决策项吸附屏幕下半区，单手大拇指轻松盲操。
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
