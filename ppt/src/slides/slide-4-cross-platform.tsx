import { CheckCircle2, Laptop, Smartphone, ShieldCheck } from "lucide-react";

import type { ScenarioSkin } from "@/lib/scenario-skin";

export function Slide4CrossPlatform({ skin: _skin }: { skin: ScenarioSkin }) {
  return (
    <div className="relative flex max-h-full w-full scrollbar-none flex-col justify-between overflow-y-auto rounded-2xl border border-white/80 bg-white/85 p-4 text-slate-900 shadow-2xl backdrop-blur-md sm:p-6 lg:p-8">
      {/* 顶部标题 */}
      <div className="space-y-1 sm:space-y-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-wider text-[#0066ff] uppercase sm:text-sm">
          <span>[多端工程与跨设备响应]</span>
        </div>
        <h2 className="text-2xl leading-tight font-black text-slate-900 sm:text-3xl lg:text-4xl">
          多端响应式适配：桌面三栏战局看板 × 移动端单手流式触控
        </h2>
        <p className="text-xs text-slate-600 sm:text-sm lg:text-base">
          根据用户输入介质重构信息架构：从 4K 宽屏战局全貌，到 6.1 英寸手机大拇指黄金触控区。
        </p>
      </div>

      {/* 终端双模态对比卡片 */}
      <div className="my-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
        {/* 桌面端布局架构 */}
        <div className="space-y-3.5 rounded-2xl border-2 border-blue-200 bg-white/95 p-4 shadow-sm sm:p-5">
          <div className="flex items-center justify-between border-b border-blue-200/80 pb-2.5">
            <span className="flex items-center gap-2 text-base font-black text-[#0066ff] sm:text-lg">
              <Laptop className="size-5" />
              <span>桌面端：全景三栏权力看板</span>
            </span>
            <span className="rounded-full bg-blue-100 px-2.5 py-0.5 font-mono text-xs font-bold text-[#0066ff]">
              宽屏沉浸
            </span>
          </div>

          {/* 桌面端线框模拟：大号清晰版 */}
          <div className="rounded-xl border border-slate-200 bg-slate-100/80 p-3 shadow-inner">
            <div className="flex h-36 gap-2.5 sm:h-40">
              {/* 左栏 */}
              <div className="flex w-1/4 flex-col justify-between rounded-lg border border-slate-200 bg-white p-2.5 shadow-xs">
                <span className="font-mono text-xs font-bold text-slate-700">朝野势力谱系</span>
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between font-mono text-[10px] text-slate-500">
                    <span>江东士族</span>
                    <span className="font-bold text-[#0066ff]">85%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-100">
                    <div className="h-full w-[85%] rounded-full bg-[#0066ff]" />
                  </div>
                  <div className="flex items-center justify-between font-mono text-[10px] text-slate-500">
                    <span>军伍武将</span>
                    <span className="font-bold text-amber-600">42%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-100">
                    <div className="h-full w-[42%] rounded-full bg-amber-500" />
                  </div>
                </div>
                <span className="font-mono text-[10px] text-slate-400">实时信任阈值</span>
              </div>

              {/* 中栏 */}
              <div className="flex flex-1 flex-col justify-between rounded-lg border border-blue-200 bg-blue-50/70 p-2.5 shadow-xs">
                <div className="flex items-center justify-between font-mono text-xs font-bold text-[#0066ff]">
                  <span>议事推演主舞台</span>
                  <span className="flex items-center gap-1 text-[11px] text-emerald-600">
                    <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
                    <span>NDJSON 推流中</span>
                  </span>
                </div>
                <div className="my-auto flex items-end justify-around py-1">
                  <div className="text-center">
                    <div className="size-8 rounded-lg bg-slate-300 shadow-xs" />
                    <span className="mt-1 block font-mono text-[9px] text-slate-500">文官</span>
                  </div>
                  <div className="text-center">
                    <div className="size-10 rounded-lg bg-amber-400 shadow-md ring-2 ring-amber-300" />
                    <span className="mt-1 block font-mono text-[9px] font-bold text-amber-900">
                      周瑜(发言)
                    </span>
                  </div>
                  <div className="text-center">
                    <div className="size-8 rounded-lg bg-blue-300 shadow-xs" />
                    <span className="mt-1 block font-mono text-[9px] text-slate-500">军师</span>
                  </div>
                </div>
                <div className="rounded-md border border-blue-200 bg-white px-2 py-1 text-xs font-bold text-slate-800 shadow-xs">
                  周瑜: “誓保江东六郡，虽曹公百万何惧一战！”
                </div>
              </div>

              {/* 右栏 */}
              <div className="flex w-1/3 flex-col justify-between rounded-lg border border-slate-200 bg-white p-2.5 shadow-xs">
                <span className="font-mono text-xs font-bold text-slate-700">
                  四维国力与天命决策
                </span>
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>政权/士气/民心/资源</span>
                    <span className="font-mono font-bold text-emerald-600">平衡中</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1">
                    <div className="h-1.5 rounded-full bg-emerald-500" />
                    <div className="h-1.5 rounded-full bg-rose-500" />
                    <div className="h-1.5 rounded-full bg-[#0066ff]" />
                    <div className="h-1.5 rounded-full bg-amber-500" />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="truncate rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[10px] font-medium text-slate-700">
                    A. 据江自守稳住防线
                  </div>
                  <div className="truncate rounded border border-amber-300 bg-amber-50 px-1.5 py-0.5 text-[10px] font-bold text-amber-900">
                    🌟 D. 孤注一掷天命破壁
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ul className="space-y-2 text-xs text-slate-700 sm:text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 shrink-0 text-[#0066ff]" />
              <span>
                <strong>高信息密度同屏</strong>：国力指标、角色立绘、言论对峙、决策树零翻页。
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 shrink-0 text-[#0066ff]" />
              <span>
                <strong>全键盘快捷操作</strong>：数字键 1-4 快速决策，Space 键推进世界线剧本。
              </span>
            </li>
          </ul>
        </div>

        {/* 移动端布局架构 */}
        <div className="space-y-3.5 rounded-2xl border-2 border-emerald-200 bg-white/95 p-4 shadow-sm sm:p-5">
          <div className="flex items-center justify-between border-b border-emerald-200/80 pb-2.5">
            <span className="flex items-center gap-2 text-base font-black text-emerald-700 sm:text-lg">
              <Smartphone className="size-5" />
              <span>移动端：流式卡片与单手掌控</span>
            </span>
            <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 font-mono text-xs font-bold text-emerald-800">
              触控优先
            </span>
          </div>

          {/* 移动端线框模拟：大号手机模型 */}
          <div className="rounded-xl border border-slate-200 bg-slate-100/80 p-3 shadow-inner">
            <div className="flex h-36 items-center justify-center sm:h-40">
              <div className="flex h-full w-48 flex-col justify-between rounded-xl border-2 border-emerald-400 bg-white p-2 shadow-md">
                <div className="flex items-center justify-between border-b border-slate-100 pb-1 font-mono text-[10px] font-bold text-emerald-700">
                  <span>WORLDLINE #赤壁</span>
                  <span>R.2/4</span>
                </div>
                <div className="my-auto flex items-center justify-around rounded-lg border border-blue-100 bg-blue-50/80 py-1.5">
                  <div className="size-7 rounded-md bg-slate-200" />
                  <div className="size-8 rounded-md bg-amber-300 ring-1 ring-amber-400" />
                  <div className="size-7 rounded-md bg-blue-200" />
                </div>
                <div className="space-y-1">
                  <div className="truncate rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[9px] text-slate-700">
                    A. 遣使求和保全宗庙
                  </div>
                  <div className="truncate rounded border border-amber-300 bg-amber-100 px-1.5 py-0.5 text-[9px] font-bold text-amber-900">
                    🌟 D. 借东风焚连环巨舰
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ul className="space-y-2 text-xs text-slate-700 sm:text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 shrink-0 text-emerald-600" />
              <span>
                <strong>动态视口单位 (dvh)</strong>：彻底消除 iOS Safari/Chrome 动态工具栏遮挡。
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 shrink-0 text-emerald-600" />
              <span>
                <strong>单手热区流式触控</strong>：决策项吸附屏幕下半区，单手大拇指轻松盲操。
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* 底部代码背书 */}
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white/90 px-4 py-2.5 text-xs text-slate-700 shadow-xs sm:text-sm">
        <span className="flex items-center gap-2">
          <ShieldCheck className="size-4 text-[#0066ff]" />
          <span>React 19 Compiler 全自动记忆化，多端状态切换零冗余重绘 (Zero Re-render)</span>
        </span>
        <span className="font-mono text-xs font-bold text-[#0066ff]">Next.js 16 App Router</span>
      </div>
    </div>
  );
}
