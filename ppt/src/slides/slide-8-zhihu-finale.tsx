import { Copy, FileText, Send, Share2 } from "lucide-react";

import type { ScenarioSkin } from "@/lib/scenario-skin";

export function Slide8ZhihuFinale({ skin: _skin }: { skin: ScenarioSkin }) {
  return (
    <div className="relative flex size-full max-h-full scrollbar-none flex-col justify-between gap-3 overflow-y-auto rounded-2xl border border-white/80 bg-white/80 p-4 text-slate-900 shadow-2xl backdrop-blur-md sm:gap-5 sm:rounded-3xl sm:p-6 lg:p-8">
      {/* 顶部标题 */}
      <div className="space-y-1 sm:space-y-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-[#0066ff] uppercase sm:text-sm">
          <span>[结算即内容 · 社区生态协同]</span>
        </div>
        <h2 className="text-2xl leading-tight font-black text-slate-900 sm:text-3xl lg:text-4xl">
          结算即内容：通关自动沉淀知乎体「第一人称亲历深度长文」
        </h2>
        <p className="text-xs text-slate-600 sm:text-sm lg:text-base">
          推演终局不是闭幕，而是深度内容的起点。史官根据全量推演事件，站在当事人视角复盘万字长文，一键回流知乎社区。
        </p>
      </div>

      {/* 两大板块：知乎体写作纪律 vs 回答样式模拟 */}
      <div className="my-auto grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-6">
        {/* 左侧：严苛的知乎体写作纪律（5列） */}
        <div className="space-y-4 lg:col-span-5">
          <div className="space-y-3 rounded-2xl border-2 border-slate-200 bg-white/95 p-4 shadow-sm sm:p-5">
            <div className="flex items-center gap-2 text-base font-black text-[#0066ff] sm:text-lg">
              <FileText className="size-5 text-[#0066ff]" />
              <span>知乎硬核答主写作准则 (Persona & Voice)</span>
            </div>
            <ul className="space-y-3 pl-1 text-xs leading-relaxed text-slate-700 sm:text-sm">
              <li className="flex items-start gap-2.5">
                <span className="text-base font-black text-[#0066ff]">•</span>
                <span>
                  <strong className="text-slate-900">“谢邀”开篇破题</strong>：必须以{" "}
                  <em>“谢邀。人在赤壁，刚下战船。利益相关：[当事人]……”</em> 纯正知乎硬核起手。
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-base font-black text-[#0066ff]">•</span>
                <span>
                  <strong className="text-slate-900">绝对严禁打破第四面墙</strong>
                  ：严禁出现“玩家、AI、数值、选项、回合”等出戏词汇，通篇以冷峻、自省的亲历者视角叙事。
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-base font-black text-[#0066ff]">•</span>
                <span>
                  <strong className="text-slate-900">编年分卷与戏剧交锋</strong>
                  ：逐卷还原决断现场的案几烛火与权谋博弈，赋予世界线史诗厚度。
                </span>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-3.5 rounded-2xl border-2 border-amber-200 bg-amber-50/90 p-4 shadow-sm">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-amber-400/50 bg-amber-400/30">
              <Share2 className="size-6 text-amber-700" />
            </div>
            <div>
              <div className="text-sm font-black text-amber-950 sm:text-base">
                天然具备社区高传播属性
              </div>
              <p className="mt-0.5 text-xs leading-relaxed text-slate-700 sm:text-sm">
                通关沉淀的长文与数据卡，可一键导出 Markdown
                或发往知乎对应问题下，把推演体验直接变成高赞回答。
              </p>
            </div>
          </div>
        </div>

        {/* 右侧：生成的知乎回答样张模拟（7列）：高度还原知乎经典白蓝卡片 */}
        <div className="flex flex-col justify-between space-y-3.5 rounded-2xl border-2 border-blue-200 bg-white p-4 font-sans shadow-xl backdrop-blur-2xl sm:p-6 lg:col-span-7">
          {/* 知乎答题卡头 */}
          <div className="flex items-center justify-between border-b border-slate-200 pb-3 sm:pb-4">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-[#0066ff] text-base font-black text-white shadow-md">
                知
              </div>
              <div>
                <span className="text-sm font-black text-slate-900 sm:text-base">
                  曹操 · 丞相中军帐亲笔
                </span>
                <span className="ml-2.5 font-mono text-xs font-medium text-slate-500">
                  1.2 万赞同 · 历史亲历者答题
                </span>
              </div>
            </div>
            <span className="rounded-full border border-emerald-300 bg-emerald-100 px-3 py-1 font-mono text-xs font-black text-emerald-800 shadow-xs sm:text-sm">
              终局评级: S · 混一天下
            </span>
          </div>

          {/* 正文摘录 */}
          <div className="space-y-2.5 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs leading-relaxed text-slate-700 sm:p-5 sm:text-sm">
            <p className="text-sm font-bold text-slate-900 sm:text-base">
              谢邀。人在赤壁乌林，刚刚下令拔营。这事就算后世史官把墨水倒干，我也必须把大实话倒出来……
            </p>
            <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
              建安十三年十一月二十日夜，帐前东风骤起的时候，子孝（曹仁）几乎是撞翻了帅案冲进来的。那一晚水面上的大火不是烧过来的，而是我们自己放的。当死士把铁锁直接焊死在连环船上的那一刻，我就知道，大汉的天下容不下第二张龙椅了……
            </p>
            <div className="rounded-r-lg border-l-4 border-[#0066ff] bg-blue-50 py-1.5 pl-3 text-xs font-bold text-[#0066ff] sm:text-sm">
              《卷二 · 借东风者，不知东风亦可吞江》
            </div>
          </div>

          {/* 底部分享动作栏 */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-3">
            <div className="flex items-center gap-3 font-mono text-xs font-medium text-slate-600 sm:text-sm">
              <span>推演历时: 3 回合 (5分钟)</span>
              <span>•</span>
              <span className="font-black text-[#0066ff]">沉淀正文: 3,420 字</span>
            </div>
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                className="flex cursor-pointer items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-xs hover:bg-slate-200 sm:text-sm"
              >
                <Copy className="size-4" />
                <span>复制 Markdown</span>
              </button>
              <button
                type="button"
                className="flex cursor-pointer items-center gap-1.5 rounded-lg bg-[#0066ff] px-4 py-1.5 text-xs font-bold text-white shadow-md shadow-[#0066ff]/25 hover:bg-[#0052d4] sm:text-sm"
              >
                <Send className="size-4" />
                <span>一键发往知乎</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 底部生态意义背书 */}
      <div className="flex items-center justify-between rounded-xl border border-slate-200/90 bg-white/90 px-4 py-2.5 text-xs text-slate-700 shadow-xs sm:px-6 sm:py-3 sm:text-sm">
        <span>从互动沙盘到硬核长文：让每一次世界线推演，都成为知乎问答区有血有肉的内容增量。</span>
        <span className="font-mono text-xs font-bold text-[#0066ff] sm:text-sm">
          Content Synthesis Pipeline
        </span>
      </div>
    </div>
  );
}
