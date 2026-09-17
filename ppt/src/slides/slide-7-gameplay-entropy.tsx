import { Activity, AlertTriangle, Clock, Flame, Shield, Users, Wallet } from "lucide-react";

import type { ScenarioSkin } from "@/lib/scenario-skin";

export function Slide7GameplayEntropy({ skin: _skin }: { skin: ScenarioSkin }) {
  return (
    <div className="relative flex max-h-full w-full scrollbar-none flex-col justify-between overflow-y-auto rounded-2xl border border-white/80 bg-white/85 p-4 text-slate-900 shadow-2xl backdrop-blur-md sm:p-6 lg:p-8">
      {/* 顶部标题 */}
      <div className="space-y-1 sm:space-y-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-wider text-rose-700 uppercase sm:text-sm">
          <span>[游戏机制 · 数值与博弈模型]</span>
        </div>
        <h2 className="text-2xl leading-tight font-black text-slate-900 sm:text-3xl lg:text-4xl">
          四维国力动态博弈 × 大势熵增定律 (Entropy Dynamics)
        </h2>
        <p className="text-xs text-slate-600 sm:text-sm lg:text-base">
          杜绝无痛最优解与消极苟活：时代大势不可逆损耗，逼迫决策者在死局中做出战略破壁。
        </p>
      </div>

      {/* 核心双引擎：四维国力与大势熵增 */}
      <div className="my-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
        {/* 左侧：四维指标与权衡对冲 */}
        <div className="flex flex-col justify-between space-y-4 rounded-2xl border-2 border-blue-200 bg-white/95 p-4 shadow-sm sm:p-5">
          <div className="flex items-center justify-between border-b border-blue-200/80 pb-2.5">
            <span className="flex items-center gap-2 text-base font-black text-[#0066ff] sm:text-lg">
              <Activity className="size-5 text-[#0066ff]" />
              <span>四维大势：相互掣肘的权力天平</span>
            </span>
            <span className="rounded-full bg-blue-100 px-2.5 py-0.5 font-mono text-xs font-bold text-[#0066ff]">
              权谋对冲
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50/90 p-3">
              <div className="flex items-center gap-2 text-xs font-black text-emerald-700 sm:text-sm">
                <Shield className="size-4 text-emerald-600" />
                <span>政权稳定 (Stability)</span>
              </div>
              <p className="mt-1 text-xs text-slate-600">朝堂与士族归心度，过低引发叛乱政变</p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/90 p-3">
              <div className="flex items-center gap-2 text-xs font-black text-rose-700 sm:text-sm">
                <Flame className="size-4 text-rose-600" />
                <span>军心士气 (Morale)</span>
              </div>
              <p className="mt-1 text-xs text-slate-600">三军死战意志，归零则军阵全面溃散</p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/90 p-3">
              <div className="flex items-center gap-2 text-xs font-black text-[#0066ff] sm:text-sm">
                <Users className="size-4 text-[#0066ff]" />
                <span>民众支持 (Support)</span>
              </div>
              <p className="mt-1 text-xs text-slate-600">民心向背与徭役耐受力，枯竭引发民变</p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/90 p-3">
              <div className="flex items-center gap-2 text-xs font-black text-amber-700 sm:text-sm">
                <Wallet className="size-4 text-amber-600" />
                <span>战略资源 (Resources)</span>
              </div>
              <p className="mt-1 text-xs text-slate-600">府库钱粮底牌，耗尽则天下寸步难行</p>
            </div>
          </div>

          <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-3 text-xs leading-relaxed text-slate-700 sm:text-sm">
            每一个选项都有尖锐代价（
            <code className="font-mono font-bold text-[#0066ff]">↑↑ ↑ - ↓ ↓↓</code>
            ）：要军心往往耗钱粮，安抚庶民往往得罪士族，逼迫玩家做出不可逆的战略抉择。
          </div>
        </div>

        {/* 右侧：大势熵增与突发危机绞索 */}
        <div className="flex flex-col justify-between space-y-4 rounded-2xl border-2 border-rose-200 bg-white/95 p-4 shadow-sm sm:p-5">
          <div className="flex items-center justify-between border-b border-rose-200/80 pb-2.5">
            <span className="flex items-center gap-2 text-base font-black text-rose-700 sm:text-lg">
              <AlertTriangle className="size-5 text-rose-600" />
              <span>大势熵增定律：时代局势的不可逆衰变</span>
            </span>
            <span className="rounded-full bg-rose-100 px-2.5 py-0.5 font-mono text-xs font-bold text-rose-800">
              杜绝消极苟活
            </span>
          </div>

          {/* 熵增曲线示意 */}
          <div className="space-y-2.5 rounded-xl border border-slate-200 bg-slate-50/90 p-3 text-xs sm:text-sm">
            <div className="flex items-center justify-between font-mono">
              <span className="font-bold text-slate-800">第 1 回合：局势初定</span>
              <span className="font-bold text-emerald-700">大势损耗 -0/回合 (蓄势)</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-1/4 rounded-full bg-emerald-500" />
            </div>

            <div className="flex items-center justify-between pt-1 font-mono">
              <span className="font-bold text-slate-800">第 2 回合：矛盾激化</span>
              <span className="font-bold text-amber-700">大势损耗 -5/回合 (压力剧增)</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-2/3 rounded-full bg-amber-500" />
            </div>

            <div className="flex items-center justify-between pt-1 font-mono">
              <span className="font-bold text-slate-800">第 3 回合：终极危局</span>
              <span className="font-bold text-rose-700">大势损耗 -10/回合 (逼出破局)</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-full rounded-full bg-rose-500" />
            </div>
          </div>

          <ul className="space-y-2 text-xs text-slate-700 sm:text-sm">
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 size-4 shrink-0 text-amber-600" />
              <span>
                <strong>危机倒计时 (Crisis Timer)</strong>：突发事件限期 3
                回合拆解，逾期直接触发全局大溃败。
              </span>
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle className="mt-0.5 size-4 shrink-0 text-rose-600" />
              <span>
                <strong>最后通牒 (Ultimatum)</strong>：阵营信任耗尽时将发起逼宫，逼出戏剧最高潮。
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* 底部机制小结 */}
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200/90 bg-white/95 px-4 py-2.5 font-mono text-xs text-slate-700 shadow-xs sm:px-6 sm:py-3 sm:text-sm">
        <span>数值不是简单的加减法，而是将玩家置于历史狂澜中的心理压迫感与破局抉择</span>
        <span className="font-bold text-rose-700">零最优解策略设计</span>
      </div>
    </div>
  );
}
