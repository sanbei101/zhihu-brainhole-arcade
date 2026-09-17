import { ShieldAlert, Sparkles, Flame } from "lucide-react";

import type { ScenarioSkin } from "@/lib/scenario-skin";

export function Slide6PromptEcology({ skin: _skin }: { skin: ScenarioSkin }) {
  return (
    <div className="relative flex size-full flex-col justify-between gap-4 overflow-hidden rounded-2xl border border-white/10 bg-[#0c101a] p-6 shadow-2xl sm:p-10">
      {/* 顶部标题 */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-amber-400 uppercase">
          <span>[提示词工程 · 情景真实度与文学质感]</span>
        </div>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          情景真实度突破：利益红线博弈 × In-Context Few-Shot 范本模仿
        </h2>
        <p className="text-xs text-slate-300 sm:text-sm">
          杜绝套话工具人与后期文风滑坡：通过多维人设硬约束与首轮范本少样本注入，打造张力拉满的权力交锋。
        </p>
      </div>

      {/* 三大核心技术支柱 */}
      <div className="my-auto grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* 支柱 1：四维活体人设与通牒绞索 */}
        <div className="flex flex-col justify-between space-y-3 rounded-xl border border-rose-500/30 bg-rose-950/15 p-5 backdrop-blur-sm">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-rose-400">
              <ShieldAlert className="size-4" />
              <span>1. 独立意志与权力红线 (Red Line)</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-300">
              每个 AI Agent 都不是讨好玩家的工具人，而是受制于阶级利益的政客：
            </p>
            <ul className="space-y-1.5 pl-2 text-[11px] text-slate-300">
              <li className="flex items-start gap-1.5">
                <span className="font-bold text-rose-400">•</span>
                <span>
                  <strong>公开诉求 vs 秘密动机</strong>：嘴上言大义，暗中保家族；
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="font-bold text-rose-400">•</span>
                <span>
                  <strong>信任度阶梯</strong>：高于 45 主动分担代价，跌破 20 当场通牒抗命；
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="font-bold text-rose-400">•</span>
                <span>
                  <strong>即席对峙 (Clash)</strong>：单次调用生成双方当朝反驳，杜绝一言堂。
                </span>
              </li>
            </ul>
          </div>
          <div className="rounded border border-rose-500/20 bg-black/40 p-2 font-mono text-[10px] text-rose-300">
            Prompt 纪律：严禁长篇套话，台词 30-50 字短兵相接！
          </div>
        </div>

        {/* 支柱 2：In-Context Few-Shot 范本模仿引擎 */}
        <div className="flex flex-col justify-between space-y-3 rounded-xl border border-cyan-500/30 bg-cyan-950/15 p-5 backdrop-blur-sm">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-cyan-300">
              <Sparkles className="size-4 text-cyan-400" />
              <span>2. Few-Shot 范本模仿引擎</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-300">
              彻底攻克长上下文推演中大模型<strong>“质量滑坡、遣词干瘪、平庸化”</strong>的顽疾：
            </p>
            <ul className="space-y-1.5 pl-2 text-[11px] text-slate-300">
              <li className="flex items-start gap-1.5">
                <span className="font-bold text-cyan-400">•</span>
                <span>
                  <strong>首轮人工典范注入</strong>：系统将连夜打磨的首轮极高水准选项作为 In-Context
                  样本注入；
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="font-bold text-cyan-400">•</span>
                <span>
                  <strong>强制文风对齐</strong>
                  ：大模型自适应模仿典范的信息密度、行文冷峻感与锋利反差；
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="font-bold text-cyan-400">•</span>
                <span>
                  <strong>严格字数约束</strong>：标题 ≤ 14 字，描述 ≤ 60 字，直奔收益与代价。
                </span>
              </li>
            </ul>
          </div>
          <div className="rounded border border-cyan-500/20 bg-black/40 p-2 font-mono text-[10px] text-cyan-300">
            动态Few-Shot：每一局后续选项皆具首轮顶级神采。
          </div>
        </div>

        {/* 支柱 3：群星风天命破壁与燃向宣誓词 */}
        <div className="flex flex-col justify-between space-y-3 rounded-xl border border-amber-500/30 bg-amber-950/15 p-5 backdrop-blur-sm">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-amber-300">
              <Flame className="size-4 text-amber-400" />
              <span>3. 🌟 群星风天命破壁 (D 项)</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-300">
              每个分叉点严格按 <strong>A(稳) / B(险) / C(赌) / D(狂)</strong> 阶梯分布：
            </p>
            <ul className="space-y-1.5 pl-2 text-[11px] text-slate-300">
              <li className="flex items-start gap-1.5">
                <span className="font-bold text-amber-400">•</span>
                <span>
                  <strong>知乎脑洞神髓</strong>：D
                  项彻底打破正史枷锁（如引墨家蒸汽实业、撕裂地幔引熔岩为火）；
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="font-bold text-amber-400">•</span>
                <span>
                  <strong>燃向宣誓金句 (Epigraph)</strong>：自带 15~35
                  字极具宿命感与决绝气魄的史诗级宣誓！
                </span>
              </li>
            </ul>
          </div>
          {/* 金句范例 */}
          <div className="rounded border border-amber-400/30 bg-black/50 p-2.5 font-serif text-[10.5px] leading-tight text-amber-200 italic">
            “若天空不再赐予光明，我们就把地核撕开当作篝火！”
          </div>
        </div>
      </div>

      {/* 底部收益小结 */}
      <div className="flex items-center justify-between rounded-lg border border-white/10 bg-black/40 p-3 text-xs text-slate-300">
        <span className="text-slate-400">
          通过{" "}
          <strong>严苛的角色指令(Voice Rules) + 双人对峙(Clash) + 少样本自适应(Few-Shot)</strong>
          ，使推演摆脱了普通套壳对话的廉价感。
        </span>
        <span className="ml-3 shrink-0 font-mono text-xs font-semibold text-amber-400">
          文学张力 100% 拿捏
        </span>
      </div>
    </div>
  );
}
