import { Activity, AlertTriangle, Clock, Flame, Shield, Users, Wallet } from "lucide-react";

import type { ScenarioSkin } from "@/lib/scenario-skin";

export function Slide7GameplayEntropy({ skin: _skin }: { skin: ScenarioSkin }) {
  return (
    <div className="relative flex size-full flex-col justify-between gap-6 overflow-hidden rounded-3xl border border-white/20 bg-black/55 p-8 shadow-2xl backdrop-blur-md sm:p-12">
      {/* 顶部标题 */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-rose-400 uppercase sm:text-sm">
          <span>[游戏机制 · 数值与博弈模型]</span>
        </div>
        <h2 className="text-3xl leading-tight font-black text-white sm:text-4xl lg:text-5xl">
          四维国力动态博弈 × 大势熵增定律 (Entropy Dynamics)
        </h2>
        <p className="text-sm text-slate-300 sm:text-lg">
          杜绝无痛最优解与消极苟活：时代大势不可逆损耗，逼迫决策者在绝境中以大魄力破壁破局。
        </p>
      </div>

      {/* 核心双引擎：四维国力与大势熵增 */}
      <div className="my-auto grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* 左侧：四维指标与权衡对冲 */}
        <div className="space-y-5 rounded-2xl border-2 border-blue-500/30 bg-black/65 p-6 shadow-xl backdrop-blur-xl sm:p-8">
          <div className="flex items-center justify-between border-b border-blue-500/20 pb-3">
            <span className="flex items-center gap-2.5 text-lg font-black text-blue-300 sm:text-xl">
              <Activity className="size-5 text-blue-400" />
              <span>四维大势：相互掣肘的权力天平</span>
            </span>
            <span className="rounded-full bg-blue-500/20 px-3 py-1 font-mono text-xs font-bold text-blue-200">
              权谋对冲
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3.5">
            <div className="rounded-xl border border-white/15 bg-white/5 p-4 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-black text-emerald-400 sm:text-base">
                <Shield className="size-4" />
                <span>政权稳定 (Stability)</span>
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-300 sm:text-sm">
                朝堂归心与政令推行力，过低引发内部政变
              </p>
            </div>

            <div className="rounded-xl border border-white/15 bg-white/5 p-4 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-black text-rose-400 sm:text-base">
                <Flame className="size-4" />
                <span>军心士气 (Morale)</span>
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-300 sm:text-sm">
                三军死战决心与前线战力，归零导致阵线崩盘
              </p>
            </div>

            <div className="rounded-xl border border-white/15 bg-white/5 p-4 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-black text-cyan-400 sm:text-base">
                <Users className="size-4" />
                <span>民众支持 (Support)</span>
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-300 sm:text-sm">
                天下民心向背与粮徭承受力，枯竭激起四方起义
              </p>
            </div>

            <div className="rounded-xl border border-white/15 bg-white/5 p-4 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-black text-amber-400 sm:text-base">
                <Wallet className="size-4" />
                <span>战略资源 (Resources)</span>
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-300 sm:text-sm">
                钱粮府库与军械底牌，耗尽则寸步难行无以为继
              </p>
            </div>
          </div>

          <p className="rounded-xl border border-white/10 bg-white/5 p-3 text-xs leading-relaxed font-medium text-slate-200 sm:text-sm">
            每个选项明码标价（
            <code className="font-mono font-bold text-emerald-400">↑↑ ↑ - ↓ ↓↓</code>
            ）：绝无十全十美的天降神兵，要军心往往耗钱粮，保民力往往动摇既得利益。
          </p>
        </div>

        {/* 右侧：大势熵增与突发危机绞索 */}
        <div className="space-y-5 rounded-2xl border-2 border-rose-500/30 bg-black/65 p-6 shadow-xl backdrop-blur-xl sm:p-8">
          <div className="flex items-center justify-between border-b border-rose-500/20 pb-3">
            <span className="flex items-center gap-2.5 text-lg font-black text-rose-300 sm:text-xl">
              <AlertTriangle className="size-5 text-rose-400" />
              <span>大势熵增定律：时代洪流的倒计时</span>
            </span>
            <span className="rounded-full bg-rose-500/20 px-3 py-1 font-mono text-xs font-bold text-rose-200">
              反消极苟活
            </span>
          </div>

          {/* 熵增曲线示意 */}
          <div className="space-y-3">
            <div className="space-y-3 rounded-xl border border-white/15 bg-black/70 p-4">
              <div className="flex items-center justify-between text-xs font-bold sm:text-sm">
                <span className="font-mono text-slate-200">第 1 回合：局势初定</span>
                <span className="font-mono text-emerald-400">大势损耗 -0/回合</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-emerald-500/30">
                <div className="h-full w-1/4 rounded-full bg-emerald-400" />
              </div>

              <div className="flex items-center justify-between pt-1 text-xs font-bold sm:text-sm">
                <span className="font-mono text-slate-200">第 2 回合：矛盾激化</span>
                <span className="font-mono text-amber-400">大势损耗 -5/回合</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-amber-500/30">
                <div className="h-full w-2/3 rounded-full bg-amber-400" />
              </div>

              <div className="flex items-center justify-between pt-1 text-xs font-bold sm:text-sm">
                <span className="font-mono text-slate-200">第 3 回合：时代末日</span>
                <span className="font-mono text-rose-400">大势损耗 -10/回合（危局爆发）</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-rose-500/30">
                <div className="h-full w-full animate-pulse rounded-full bg-rose-500" />
              </div>
            </div>
          </div>

          <ul className="space-y-2.5 text-xs text-slate-200 sm:text-sm">
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 size-4 shrink-0 text-amber-400" />
              <span>
                <strong className="text-white">危机倒计时 (Crisis Countdown)</strong>
                ：突发事件若不正面处置，3 回合内必将引发灭顶之灾。
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <AlertTriangle className="mt-0.5 size-4 shrink-0 text-rose-400" />
              <span>
                <strong className="text-white">最后通牒 (Ultimatum)</strong>
                ：朝臣信任耗尽时将发起逼宫，迫使玩家做出残酷割舍。
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* 底部玩法设计总结 */}
      <div className="flex items-center justify-between rounded-xl border border-white/15 bg-black/60 px-6 py-3.5 text-sm text-slate-200 sm:text-base">
        <span>
          数值不是冷冰冰的加减法，而是为<strong>戏剧冲突与历史宿命感</strong>服务的心理压迫器。
        </span>
        <span className="font-mono text-sm font-bold text-cyan-400">
          High Stakes · Irreversible Consequence
        </span>
      </div>
    </div>
  );
}
