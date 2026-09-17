import { Flame, HelpCircle, Layers } from "lucide-react";

import type { ScenarioSkin } from "@/lib/scenario-skin";

export function Slide2Background({ skin: _skin }: { skin: ScenarioSkin }) {
  return (
    <div className="relative flex size-full flex-col justify-between gap-6 overflow-hidden rounded-3xl border border-white/20 bg-black/55 p-8 shadow-2xl backdrop-blur-md sm:p-12">
      {/* 顶部主旨 */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-cyan-400 uppercase sm:text-sm">
          <span>[立意痛点与知乎生态共振]</span>
        </div>
        <h2 className="text-3xl leading-tight font-black text-white sm:text-4xl lg:text-5xl">
          让知乎最具辨识度的“神级脑洞”，从单向静态文字跃迁为动态演化沙盘
        </h2>
        <p className="text-sm text-slate-300 sm:text-lg">
          知乎硬核历史区与科幻区沉淀了无数让人击节赞叹的假设题，我们将其打造成「人人可亲历、步步有代价的博弈游戏」。
        </p>
      </div>

      {/* 核心对比卡片：大尺寸、高对比度 */}
      <div className="my-auto grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* 左栏：传统知乎脑洞局限 */}
        <div className="space-y-4 rounded-2xl border-2 border-rose-500/30 bg-black/60 p-6 shadow-xl backdrop-blur-xl sm:p-8">
          <div className="flex items-center justify-between border-b border-rose-500/20 pb-3">
            <span className="flex items-center gap-2.5 text-lg font-black text-rose-400 sm:text-xl">
              <HelpCircle className="size-5" />
              <span>传统生态：单向静态阅读</span>
            </span>
            <span className="rounded-full bg-rose-500/20 px-3 py-1 font-mono text-xs font-bold text-rose-300">
              核心痛点
            </span>
          </div>
          <ul className="space-y-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            <li className="flex items-start gap-2.5">
              <span className="text-lg font-black text-rose-400">✕</span>
              <span>
                <strong className="text-white">答主独白</strong>
                ：读者只能被动阅读答主设定好的单一路线，缺乏亲历决策与代入感。
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-lg font-black text-rose-400">✕</span>
              <span>
                <strong className="text-white">无法推演博弈</strong>
                ：历史是各方势力的残酷妥协，单篇文章难以呈现复杂的微观权力撕扯。
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-lg font-black text-rose-400">✕</span>
              <span>
                <strong className="text-white">消费即终结</strong>
                ：读者点赞收藏后即流失，无法在社区内二次生产新的衍生内容。
              </span>
            </li>
          </ul>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 text-xs text-slate-400 italic sm:text-sm">
            “如果赤壁之战曹操大获全胜……” 过去你只能看答主脑补，今天由你亲自执掌相印！
          </div>
        </div>

        {/* 右栏：知乎脑洞游乐园创新 */}
        <div className="space-y-4 rounded-2xl border-2 border-cyan-400/50 bg-black/60 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
          <div className="flex items-center justify-between border-b border-cyan-400/30 pb-3">
            <span className="flex items-center gap-2.5 text-lg font-black text-cyan-300 sm:text-xl">
              <Flame className="size-5 text-cyan-400" />
              <span>本作创新：动态多智能体演变沙盘</span>
            </span>
            <span className="rounded-full bg-cyan-500/20 px-3 py-1 font-mono text-xs font-bold text-cyan-200">
              颠覆体验
            </span>
          </div>
          <ul className="space-y-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            <li className="flex items-start gap-2.5">
              <span className="text-lg font-black text-cyan-400">✓</span>
              <span>
                <strong className="text-white">身临其境执掌天下</strong>
                ：扮演风暴核心的决策者，面对四方 AI 施压，步步皆有尖锐代价。
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-lg font-black text-cyan-400">✓</span>
              <span>
                <strong className="text-white">Multi-Agent 活体博弈</strong>
                ：朝臣、异邦、大将拥有独立秘密动机与底线红线，当场反驳逼宫。
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-lg font-black text-cyan-400">✓</span>
              <span>
                <strong className="text-white">结算即内容闭环</strong>
                ：终局自动生成数千字第一人称知乎体回答与战报卡，一键发回社区原帖！
              </span>
            </li>
          </ul>
          <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/15 p-3.5 text-xs font-semibold text-cyan-200 sm:text-sm">
            将知乎历史/科幻区的“推演推拿狂欢”，升维为高互动、高传播的策略沙盘！
          </div>
        </div>
      </div>

      {/* 底部：闭环机制流水线大尺寸展示 */}
      <div className="rounded-2xl border border-white/20 bg-black/65 p-5 backdrop-blur-xl">
        <div className="mb-3 flex items-center justify-between font-mono text-xs text-slate-300 sm:text-sm">
          <span className="flex items-center gap-2 font-bold text-white">
            <Layers className="size-4 text-[#0066ff]" />
            <span>【知乎脑洞游乐园 · 闭环飞轮】</span>
          </span>
          <span className="text-sm font-bold text-amber-300">输入 ➔ 博弈 ➔ 分叉 ➔ 社区输出</span>
        </div>
        <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-4">
          <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 transition-colors hover:bg-white/10">
            <div className="mb-1.5 text-2xl">🏛️</div>
            <div className="text-sm font-bold text-white sm:text-base">1. 知乎母本选题</div>
            <div className="mt-1 text-xs text-slate-300">10 大历史/科幻脑洞副本</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 transition-colors hover:bg-white/10">
            <div className="mb-1.5 text-2xl">🎭</div>
            <div className="text-sm font-bold text-white sm:text-base">2. Multi-Agent 博弈</div>
            <div className="mt-1 text-xs text-slate-300">四方势力施压与通牒</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 transition-colors hover:bg-white/10">
            <div className="mb-1.5 text-2xl">🌟</div>
            <div className="text-sm font-bold text-white sm:text-base">3. 天命分叉决策</div>
            <div className="mt-1 text-xs text-slate-300">A/B/C/D 梯度破壁选项</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 transition-colors hover:bg-white/10">
            <div className="mb-1.5 text-2xl">📜</div>
            <div className="text-sm font-bold text-white sm:text-base">4. 结算知乎长回答</div>
            <div className="mt-1 text-xs text-slate-300">万字亲历复盘一键发帖</div>
          </div>
        </div>
      </div>
    </div>
  );
}
