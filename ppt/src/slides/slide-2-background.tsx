import { CheckCircle2, HelpCircle, Layers, TrendingUp } from "lucide-react";

import type { ScenarioSkin } from "@/lib/scenario-skin";

export function Slide2Background({ skin: _skin }: { skin: ScenarioSkin }) {
  return (
    <div className="relative flex max-h-full w-full scrollbar-none flex-col justify-between overflow-y-auto rounded-2xl border border-white/80 bg-white/85 p-4 text-slate-900 shadow-2xl backdrop-blur-md sm:p-6 lg:p-8">
      {/* 顶部主旨 */}
      <div className="space-y-1 sm:space-y-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-wider text-[#0066ff] uppercase sm:text-sm">
          <span>[立意与知乎生态共振]</span>
        </div>
        <h2 className="text-2xl leading-tight font-black text-slate-900 sm:text-3xl lg:text-4xl">
          知乎脑洞题的本质：从单向长文阅读，跃迁为人人可玩的“沙盘推演”
        </h2>
        <p className="text-xs text-slate-600 sm:text-sm lg:text-base">
          知乎沉淀了中文互联网最硬核的历史与科幻脑洞。我们把传统的单向答题，变为人人可亲历、步步有代价的互动推演。
        </p>
      </div>

      {/* 核心对比卡片：大号卡片与对比张力 */}
      <div className="my-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
        {/* 左栏：传统知乎脑洞痛点 */}
        <div className="flex flex-col justify-between space-y-4 rounded-2xl border-2 border-rose-200 bg-rose-50/70 p-4 shadow-sm sm:p-6">
          <div className="flex items-center justify-between border-b border-rose-200/80 pb-3">
            <span className="flex items-center gap-2 text-base font-black text-rose-800 sm:text-lg">
              <HelpCircle className="size-5 text-rose-600" />
              <span>传统生态痛点：单向静态阅读</span>
            </span>
            <span className="rounded-full bg-rose-200/80 px-2.5 py-0.5 font-mono text-xs font-bold text-rose-900">
              单向消费
            </span>
          </div>
          <ul className="space-y-3 text-xs leading-relaxed text-slate-700 sm:text-sm">
            <li className="flex items-start gap-2.5">
              <span className="text-base font-black text-rose-600">✕</span>
              <span>
                <strong className="text-slate-900">单向答主独白</strong>
                ：读者只能被动翻阅别人写好的线性剧本，缺乏亲临其境的权衡感与压迫感。
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-base font-black text-rose-600">✕</span>
              <span>
                <strong className="text-slate-900">缺乏微观利益博弈</strong>
                ：历史演进是朝野多方掣肘妥协的结果，普通文章很难呈现鲜活对质与背叛。
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-base font-black text-rose-600">✕</span>
              <span>
                <strong className="text-slate-900">阅读完即流失</strong>
                ：点赞收藏后互动宣告终止，无法在知乎社区衍生源源不断的新讨论资产。
              </span>
            </li>
          </ul>
          <div className="rounded-xl border border-rose-200 bg-white/90 p-3 font-serif text-xs text-slate-600 italic sm:text-sm">
            “如果赤壁曹操赢了历史会怎样？” 过去只能看考据答主脑补，现在由你亲自权衡推演！
          </div>
        </div>

        {/* 右栏：知乎脑洞游乐园解法 */}
        <div className="flex flex-col justify-between space-y-4 rounded-2xl border-2 border-blue-200 bg-blue-50/70 p-4 shadow-sm sm:p-6">
          <div className="flex items-center justify-between border-b border-blue-200/80 pb-3">
            <span className="flex items-center gap-2 text-base font-black text-[#0066ff] sm:text-lg">
              <CheckCircle2 className="size-5 text-[#0066ff]" />
              <span>本作解法：动态多势力推演沙盘</span>
            </span>
            <span className="rounded-full bg-blue-200/80 px-2.5 py-0.5 font-mono text-xs font-bold text-[#0066ff]">
              多方演变
            </span>
          </div>
          <ul className="space-y-3 text-xs leading-relaxed text-slate-700 sm:text-sm">
            <li className="flex items-start gap-2.5">
              <span className="text-base font-black text-[#0066ff]">✓</span>
              <span>
                <strong className="text-slate-900">沉浸式身临其境决策</strong>
                ：扮演风暴核心决策者，直面四方朝臣施压，每一次抉择都有尖锐代价。
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-base font-black text-[#0066ff]">✓</span>
              <span>
                <strong className="text-slate-900">Multi-Agent 利益博弈</strong>
                ：文臣、武将、异邦各怀红线底线，实时生成台词互驳与朝堂政变通牒。
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-base font-black text-[#0066ff]">✓</span>
              <span>
                <strong className="text-slate-900">结算即社区优质内容</strong>
                ：通关自动铸就知乎体万字第一人称自省长回答与战报卡，一键回流原帖！
              </span>
            </li>
          </ul>
          <div className="rounded-xl border border-blue-200 bg-white/90 p-3 text-xs font-medium text-[#0066ff] sm:text-sm">
            将知乎硬核历史与科幻区的讨论狂欢，转化为人人可玩、可沉淀长文的互动沙盘。
          </div>
        </div>
      </div>

      {/* 底部：4 步闭环管线 */}
      <div className="rounded-2xl border border-slate-200/80 bg-white/95 p-3.5 shadow-sm sm:p-5">
        <div className="mb-2.5 flex items-center justify-between font-mono text-xs text-slate-600 sm:text-sm">
          <span className="flex items-center gap-2 font-bold text-slate-900">
            <Layers className="size-4 text-[#0066ff]" />
            <span>【知乎生态推演与内容生产全链路】</span>
          </span>
          <span className="flex items-center gap-1.5 font-bold text-[#0066ff]">
            <TrendingUp className="size-3.5" />
            <span>母本题库 ➔ 势力博弈 ➔ 天命决策 ➔ 知乎体回帖</span>
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2.5 text-center sm:grid-cols-4 sm:gap-3">
          <div className="rounded-xl border border-slate-100 bg-slate-50/90 p-2.5 sm:p-3">
            <div className="text-2xl">🏛️</div>
            <div className="mt-1 text-xs font-black text-slate-900 sm:text-sm">1. 知乎母本题库</div>
            <div className="text-[11px] text-slate-500 sm:text-xs">10 大主题真实高赞问题</div>
          </div>
          <div className="rounded-xl border border-slate-100 bg-slate-50/90 p-2.5 sm:p-3">
            <div className="text-2xl">🎭</div>
            <div className="mt-1 text-xs font-black text-slate-900 sm:text-sm">
              2. Multi-Agent 博弈
            </div>
            <div className="text-[11px] text-slate-500 sm:text-xs">朝臣将领施压与尖锐反驳</div>
          </div>
          <div className="rounded-xl border border-slate-100 bg-slate-50/90 p-2.5 sm:p-3">
            <div className="text-2xl">🌟</div>
            <div className="mt-1 text-xs font-black text-slate-900 sm:text-sm">3. 天命分叉决策</div>
            <div className="text-[11px] text-slate-500 sm:text-xs">稳/险/赌/狂 4 级支线</div>
          </div>
          <div className="rounded-xl border border-slate-100 bg-slate-50/90 p-2.5 sm:p-3">
            <div className="text-2xl">📜</div>
            <div className="mt-1 text-xs font-black text-slate-900 sm:text-sm">
              4. 知乎体长文结算
            </div>
            <div className="text-[11px] text-slate-500 sm:text-xs">第一人称万字草稿一键发帖</div>
          </div>
        </div>
      </div>
    </div>
  );
}
