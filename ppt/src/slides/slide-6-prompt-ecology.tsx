import { ShieldAlert, Sparkles, Flame } from "lucide-react";

import type { ScenarioSkin } from "@/lib/scenario-skin";

export function Slide6PromptEcology({ skin: _skin }: { skin: ScenarioSkin }) {
  return (
    <div className="relative flex size-full flex-col justify-between gap-6 overflow-hidden rounded-3xl border border-slate-200/90 bg-white/75 p-8 text-slate-900 shadow-2xl backdrop-blur-xl sm:p-12">
      {/* 顶部标题 */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-amber-700 uppercase sm:text-sm">
          <span>[提示词工程 · 情景真实度与文学质感]</span>
        </div>
        <h2 className="text-3xl leading-tight font-black text-slate-900 sm:text-4xl lg:text-5xl">
          情景真实度突破：利益红线博弈 × In-Context Few-Shot 范本模仿
        </h2>
        <p className="text-sm text-slate-600 sm:text-lg">
          杜绝套话工具人与后期文风滑坡：通过多维人设硬约束与首轮范本少样本注入，打造张力拉满的权力交锋。
        </p>
      </div>

      {/* 三大核心技术支柱：大号卡片 */}
      <div className="my-auto grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* 支柱 1：四维活体人设与通牒绞索 */}
        <div className="flex flex-col justify-between space-y-4 rounded-2xl border-2 border-rose-200 bg-rose-50/75 p-6 shadow-md backdrop-blur-xl sm:p-7">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-lg font-black text-rose-700 sm:text-xl">
              <ShieldAlert className="size-5 text-rose-600" />
              <span>1. 独立意志与权力红线</span>
            </div>
            <p className="text-xs leading-relaxed font-normal text-slate-700 sm:text-sm">
              每个 AI Agent 都不讨好玩家，而是受制于阶级利益的深谋政客：
            </p>
            <ul className="space-y-2.5 pl-1 text-xs text-slate-700 sm:text-sm">
              <li className="flex items-start gap-2">
                <span className="text-base font-bold text-rose-600">•</span>
                <span>
                  <strong className="text-slate-900">公开诉求 vs 秘密动机</strong>
                  ：嘴上言仁义，暗地保宗族；
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-base font-bold text-rose-600">•</span>
                <span>
                  <strong className="text-slate-900">信任度阶梯反应</strong>：高于 45
                  愿替玩家分担代价，跌破 20 当场叛离通牒；
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-base font-bold text-rose-600">•</span>
                <span>
                  <strong className="text-slate-900">即席对峙 (Clash)</strong>：单次 Prompt
                  演化朝堂双方针锋相对。
                </span>
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-rose-200 bg-white/90 p-3 font-mono text-xs font-bold text-rose-800 shadow-xs sm:text-sm">
            Prompt 纪律：严禁公文套话，台词 30~50 字短兵相接！
          </div>
        </div>

        {/* 支柱 2：In-Context Few-Shot 范本模仿引擎 */}
        <div className="flex flex-col justify-between space-y-4 rounded-2xl border-2 border-blue-200 bg-blue-50/75 p-6 shadow-md backdrop-blur-xl sm:p-7">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-lg font-black text-[#0066ff] sm:text-xl">
              <Sparkles className="size-5 text-[#0066ff]" />
              <span>2. Few-Shot 范本模仿引擎</span>
            </div>
            <p className="text-xs leading-relaxed font-normal text-slate-700 sm:text-sm">
              彻底攻克长上下文推演中大模型<strong>“质量滑坡、遣词平庸”</strong>的顽疾：
            </p>
            <ul className="space-y-2.5 pl-1 text-xs text-slate-700 sm:text-sm">
              <li className="flex items-start gap-2">
                <span className="text-base font-bold text-[#0066ff]">•</span>
                <span>
                  <strong className="text-slate-900">首轮典范动态注入</strong>
                  ：人工连夜打磨的首轮极高水准选项作为 In-Context 样本注入；
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-base font-bold text-[#0066ff]">•</span>
                <span>
                  <strong className="text-slate-900">文风全生命周期对齐</strong>
                  ：大模型自适应模仿典范的文字密度与冷峻反差；
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-base font-bold text-[#0066ff]">•</span>
                <span>
                  <strong className="text-slate-900">严格字数预算约束</strong>：标题 ≤ 14 字，描述 ≤
                  60 字，开门见山。
                </span>
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-blue-200 bg-white/90 p-3 font-mono text-xs font-bold text-[#0066ff] shadow-xs sm:text-sm">
            动态 Few-Shot：每一局后续选项皆具首轮顶级神采。
          </div>
        </div>

        {/* 支柱 3：群星风天命破壁与燃向宣誓词 */}
        <div className="flex flex-col justify-between space-y-4 rounded-2xl border-2 border-amber-200 bg-amber-50/75 p-6 shadow-md backdrop-blur-xl sm:p-7">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-lg font-black text-amber-800 sm:text-xl">
              <Flame className="size-5 text-amber-600" />
              <span>3. 🌟 群星风天命破壁 (D 项)</span>
            </div>
            <p className="text-xs leading-relaxed font-normal text-slate-700 sm:text-sm">
              每个分叉点严格按 <strong>A(稳) / B(险) / C(赌) / D(狂)</strong> 阶梯分布：
            </p>
            <ul className="space-y-2.5 pl-1 text-xs text-slate-700 sm:text-sm">
              <li className="flex items-start gap-2">
                <span className="text-base font-bold text-amber-600">•</span>
                <span>
                  <strong className="text-slate-900">知乎脑洞神髓</strong>
                  ：彻底打破正史枷锁（引蒸汽实业、撕裂地幔引熔岩为火）；
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-base font-bold text-amber-600">•</span>
                <span>
                  <strong className="text-slate-900">燃向宣誓金句 (Epigraph)</strong>：自带 15~35
                  字极具宿命感与压迫力的宣誓！
                </span>
              </li>
            </ul>
          </div>
          {/* 金句范例：大号字体 */}
          <div className="rounded-xl border border-amber-300 bg-amber-100/90 p-3.5 font-serif text-sm leading-relaxed text-amber-950 italic shadow-xs sm:text-base">
            “若天空不再赐予光明，我们就把地核撕开当作篝火！”
          </div>
        </div>
      </div>

      {/* 底部收益小结 */}
      <div className="flex items-center justify-between rounded-xl border border-slate-200/90 bg-white/90 px-6 py-3.5 text-sm text-slate-700 shadow-xs sm:text-base">
        <span>
          通过 <strong>严苛角色纪律 + 双人即席对峙 (Clash) + 少样本自适应 (Few-Shot)</strong>
          ，使推演摆脱普通套壳对话的廉价感。
        </span>
        <span className="ml-4 shrink-0 font-mono text-sm font-bold text-amber-700">
          文学张力 100% 拿捏
        </span>
      </div>
    </div>
  );
}
