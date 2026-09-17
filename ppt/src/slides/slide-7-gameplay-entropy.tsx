import { Activity, AlertTriangle, Clock, Flame, Shield, Users, Wallet } from "lucide-react";

import type { ScenarioSkin } from "@/lib/scenario-skin";

export function Slide7GameplayEntropy({ skin: _skin }: { skin: ScenarioSkin }) {
  return (
    <div className="relative flex size-full flex-col justify-between gap-4 overflow-hidden rounded-2xl border border-white/10 bg-[#0c101a] p-6 shadow-2xl sm:p-10">
      {/* 顶部标题 */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-rose-400 uppercase">
          <span>[游戏机制 · 数值与权力博弈]</span>
        </div>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          四维国力动态博弈 × 大势熵增定律 (Entropy Dynamics)
        </h2>
        <p className="text-xs text-slate-300 sm:text-sm">
          杜绝无痛最优解与消极苟活：时代大势不可逆损耗，逼迫决策者在绝境中以大魄力破壁破局。
        </p>
      </div>

      {/* 核心双引擎：四维国力与大势熵增 */}
      <div className="my-auto grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* 左侧：四维指标与权衡对冲 */}
        <div className="space-y-4 rounded-xl border border-blue-500/20 bg-blue-950/10 p-5 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-sm font-bold text-blue-300">
              <Activity className="size-4 text-blue-400" />
              <span>四维大势：相互掣肘的权力天平</span>
            </span>
            <span className="rounded bg-blue-500/20 px-2 py-0.5 font-mono text-[10px] text-blue-200">
              权谋对冲
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-white/10 bg-black/40 p-3">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                <Shield className="size-3.5" />
                <span>政权稳定 (Stability)</span>
              </div>
              <p className="mt-1 text-[11px] text-slate-300">
                朝堂文武归心与政令推行力，过低引发内部政变
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-black/40 p-3">
              <div className="flex items-center gap-1.5 text-xs font-bold text-rose-400">
                <Flame className="size-3.5" />
                <span>军心士气 (Morale)</span>
              </div>
              <p className="mt-1 text-[11px] text-slate-300">
                三军死战决心与前线战力，归零导致兵败如山倒
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-black/40 p-3">
              <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-400">
                <Users className="size-3.5" />
                <span>民众支持 (Support)</span>
              </div>
              <p className="mt-1 text-[11px] text-slate-300">
                天下万民休戚与民心向背，枯竭则激起四方起义
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-black/40 p-3">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400">
                <Wallet className="size-3.5" />
                <span>战略资源 (Resources)</span>
              </div>
              <p className="mt-1 text-[11px] text-slate-300">
                钱粮府库与军械底牌，耗尽则寸步难行无以为继
              </p>
            </div>
          </div>

          <p className="text-xs leading-relaxed text-slate-300">
            每个选项明码标价（
            <code className="font-mono text-[11px] text-emerald-400">↑↑ ↑ - ↓ ↓↓</code>
            ）：绝无十全十美的天降神兵，要军心往往耗钱粮，保民力往往动摇既得利益。
          </p>
        </div>

        {/* 右侧：大势熵增与突发危机绞索 */}
        <div className="space-y-4 rounded-xl border border-rose-500/20 bg-rose-950/10 p-5 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-sm font-bold text-rose-300">
              <AlertTriangle className="size-4 text-rose-400" />
              <span>大势熵增机制：时代洪流的倒计时</span>
            </span>
            <span className="rounded bg-rose-500/20 px-2 py-0.5 font-mono text-[10px] text-rose-200">
              反消极苟活
            </span>
          </div>

          {/* 熵增曲线示意 */}
          <div className="space-y-2">
            <div className="space-y-2 rounded-lg border border-white/10 bg-black/50 p-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-slate-300">第 1 回合：局势初定</span>
                <span className="font-mono text-emerald-400">大势损耗 -0/回合</span>
              </div>
              <div className="h-1.5 w-full rounded bg-emerald-500/30" />

              <div className="flex items-center justify-between pt-1 text-xs">
                <span className="font-mono text-slate-300">第 2 回合：矛盾激化</span>
                <span className="font-mono text-amber-400">大势损耗 -5/回合</span>
              </div>
              <div className="h-1.5 w-full rounded bg-amber-500/50" />

              <div className="flex items-center justify-between pt-1 text-xs">
                <span className="font-mono text-slate-300">第 3 回合：时代末日</span>
                <span className="font-mono text-rose-400">大势损耗 -10/回合（危局爆发）</span>
              </div>
              <div className="h-1.5 w-full rounded bg-rose-500/70" />
            </div>
          </div>

          <ul className="space-y-1.5 text-xs text-slate-300">
            <li className="flex items-start gap-1.5">
              <Clock className="mt-0.5 size-3.5 shrink-0 text-amber-400" />
              <span>
                <strong>危机倒计时 (Crisis Countdown)</strong>：若不正面处置，3
                回合内必将引发灭顶之灾。
              </span>
            </li>
            <li className="flex items-start gap-1.5">
              <AlertTriangle className="mt-0.5 size-3.5 shrink-0 text-rose-400" />
              <span>
                <strong>最后通牒 (Ultimatum)</strong>
                ：朝臣信任耗尽时将发起逼宫，迫使玩家做出残酷抉择。
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* 底部玩法设计总结 */}
      <div className="flex items-center justify-between rounded-lg border border-white/10 bg-black/40 px-4 py-2.5 text-xs text-slate-300">
        <span>
          数值不是冷冰冰的加减法，而是为<strong>戏剧冲突与历史宿命感</strong>服务的心理压迫器。
        </span>
        <span className="font-mono text-[11px] font-semibold text-cyan-400">
          High Stakes · Irreversible Consequence
        </span>
      </div>
    </div>
  );
}
