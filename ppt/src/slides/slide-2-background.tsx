import { Flame, HelpCircle, Layers } from "lucide-react";

import type { ScenarioSkin } from "@/lib/scenario-skin";

export function Slide2Background({ skin: _skin }: { skin: ScenarioSkin }) {
  return (
    <div className="relative flex size-full flex-col justify-between gap-4 overflow-hidden rounded-2xl border border-white/10 bg-[#0c101a] p-6 shadow-2xl sm:p-10">
      {/* 顶部简述 */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-[#0066ff] uppercase">
          <span>[立意与知乎生态定位]</span>
        </div>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          让知乎最具辨识度的“神级脑洞”，从静态长文跃迁为动态演化沙盘
        </h2>
        <p className="text-xs text-slate-300 sm:text-sm">
          知乎硬核历史区与科幻区沉淀了无数让人击节赞叹的假设题，我们将其打造成「人人可亲历的互动游戏」。
        </p>
      </div>

      {/* 核心对比：传统单向答题 vs 脑洞沙盘 */}
      <div className="my-auto grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* 左栏：传统知乎脑洞现状 */}
        <div className="space-y-3 rounded-xl border border-rose-500/20 bg-rose-950/10 p-5 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-sm font-bold text-rose-400">
              <HelpCircle className="size-4" />
              <span>传统生态：单向静态阅读</span>
            </span>
            <span className="rounded bg-rose-500/20 px-2 py-0.5 font-mono text-[10px] text-rose-300">
              痛点与局限
            </span>
          </div>
          <ul className="space-y-2 text-xs leading-relaxed text-slate-300">
            <li className="flex items-start gap-2">
              <span className="font-bold text-rose-400">×</span>
              <span>
                <strong>答主独白</strong>：读者只能被动阅读答主设定好的单一故事线，缺乏参与感。
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-rose-400">×</span>
              <span>
                <strong>无法推演博弈</strong>
                ：历史是各方势力的残酷妥协，单视角文章难以呈现复杂的微观权力抗衡。
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-rose-400">×</span>
              <span>
                <strong>消费即终结</strong>：读者点赞收藏后流失，无法二次生产新的沉浸式衍生内容。
              </span>
            </li>
          </ul>
          <div className="rounded-lg border border-white/5 bg-black/40 p-2.5 text-[11px] text-slate-400 italic">
            “如果赤壁之战曹操大获全胜……” 过去你只能看答主脑补，今天由你亲自执掌帅印。
          </div>
        </div>

        {/* 右栏：知乎脑洞游乐园创新 */}
        <div className="space-y-3 rounded-xl border border-cyan-500/30 bg-cyan-950/15 p-5 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-sm font-bold text-cyan-300">
              <Flame className="size-4 text-cyan-400" />
              <span>本项目突破：动态多智能体演变沙盘</span>
            </span>
            <span className="rounded bg-cyan-500/20 px-2 py-0.5 font-mono text-[10px] text-cyan-200">
              核心创新
            </span>
          </div>
          <ul className="space-y-2 text-xs leading-relaxed text-slate-200">
            <li className="flex items-start gap-2">
              <span className="font-bold text-cyan-400">✓</span>
              <span>
                <strong>身临其境做抉择</strong>
                ：扮演身处风暴核心的决策者，每一步都必须在四方势力撕扯下下注。
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-cyan-400">✓</span>
              <span>
                <strong>Multi-Agent 活体博弈</strong>
                ：朝臣、异邦、军将各怀秘密动机与红线，实时反驳、借势与逼宫。
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-cyan-400">✓</span>
              <span>
                <strong>结算即内容闭环</strong>
                ：结局自动整理成万字第一人称知乎体回答与战报卡，一键回流知乎社区！
              </span>
            </li>
          </ul>
          <div className="rounded-lg border border-cyan-500/20 bg-cyan-500/10 p-2.5 text-[11px] font-medium text-cyan-200">
            把知乎的“推演推拿狂欢”，转化为高粘度、高裂变的策略向推演玩法。
          </div>
        </div>
      </div>

      {/* 闭环机制流水线 */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
        <div className="mb-2 flex items-center justify-between font-mono text-[11px] text-slate-400">
          <span className="flex items-center gap-1.5">
            <Layers className="size-3 text-[#0066ff]" />
            <span>【知乎脑洞游乐园 · 闭环飞轮】</span>
          </span>
          <span className="font-medium text-amber-400">生态完美共振</span>
        </div>
        <div className="grid grid-cols-2 gap-3 text-center sm:grid-cols-4">
          <div className="rounded-lg border border-white/5 bg-black/40 p-2.5">
            <div className="mb-1 text-base">🏛️</div>
            <div className="text-xs font-bold text-white">1. 知乎母本选题</div>
            <div className="mt-0.5 text-[10px] text-slate-400">10 大历史/科幻脑洞副本</div>
          </div>
          <div className="rounded-lg border border-white/5 bg-black/40 p-2.5">
            <div className="mb-1 text-base">🎭</div>
            <div className="text-xs font-bold text-white">2. Multi-Agent 博弈</div>
            <div className="mt-0.5 text-[10px] text-slate-400">四方施压与通牒危机</div>
          </div>
          <div className="rounded-lg border border-white/5 bg-black/40 p-2.5">
            <div className="mb-1 text-base">🌟</div>
            <div className="text-xs font-bold text-white">3. 天命分叉决策</div>
            <div className="mt-0.5 text-[10px] text-slate-400">A/B/C/D 梯度破壁选项</div>
          </div>
          <div className="rounded-lg border border-white/5 bg-black/40 p-2.5">
            <div className="mb-1 text-base">📜</div>
            <div className="text-xs font-bold text-white">4. 结算知乎长回答</div>
            <div className="mt-0.5 text-[10px] text-slate-400">万字亲历复盘一键发帖</div>
          </div>
        </div>
      </div>
    </div>
  );
}
