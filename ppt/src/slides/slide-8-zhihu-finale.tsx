import { Copy, FileText, Send, Share2 } from "lucide-react";

import type { ScenarioSkin } from "@/lib/scenario-skin";

export function Slide8ZhihuFinale({ skin: _skin }: { skin: ScenarioSkin }) {
  return (
    <div className="relative flex size-full flex-col justify-between gap-6 overflow-hidden rounded-3xl border border-white/20 bg-black/55 p-8 shadow-2xl backdrop-blur-md sm:p-12">
      {/* 顶部标题 */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-[#0066ff] uppercase sm:text-sm">
          <span>[结算即内容 · 社区生态闭环]</span>
        </div>
        <h2 className="text-3xl leading-tight font-black text-white sm:text-4xl lg:text-5xl">
          结算即内容：通关自动铸就万字“知乎体第一人称亲历长回答”
        </h2>
        <p className="text-sm text-slate-300 sm:text-lg">
          对局结束不是终点，而是优质知乎社区内容的起点。史官 AI
          站在当事人视角复盘整场世界线，一键回流原帖。
        </p>
      </div>

      {/* 两大板块：知乎体写作纪律 vs 回答样式模拟 */}
      <div className="my-auto grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* 左侧：严苛的知乎体写作纪律（5列） */}
        <div className="space-y-4 lg:col-span-5">
          <div className="space-y-3 rounded-2xl border-2 border-white/15 bg-black/65 p-6 shadow-xl backdrop-blur-xl">
            <div className="flex items-center gap-2.5 text-base font-black text-cyan-300 sm:text-lg">
              <FileText className="size-5 text-cyan-400" />
              <span>知乎高赞答主写作纪律 (Voice Rules)</span>
            </div>
            <ul className="space-y-3 pl-1 text-xs leading-relaxed text-slate-200 sm:text-sm">
              <li className="flex items-start gap-2">
                <span className="text-base font-bold text-cyan-400">•</span>
                <span>
                  <strong className="text-white">“谢邀”开篇破题</strong>：必须以{" "}
                  <em>“谢邀。人在赤壁，刚下战船。利益相关：[当事人]……”</em> 纯正知乎高赞起手。
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-base font-bold text-cyan-400">•</span>
                <span>
                  <strong className="text-white">绝对严禁打破第四面墙</strong>
                  ：通篇严禁出现“玩家、AI、数值、选项、回合”等戏谑词汇，通篇以冷峻、犹疑、疲惫与深沉自省的亲历者视角叙事。
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-base font-bold text-cyan-400">•</span>
                <span>
                  <strong className="text-white">卷目分章与戏剧交锋</strong>
                  ：逐卷还原决断现场的案几烛火与惊险权谋，绝非流水账。
                </span>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border-2 border-amber-500/30 bg-amber-950/20 p-5 shadow-lg backdrop-blur-xl">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-amber-400/40 bg-amber-400/25">
              <Share2 className="size-6 text-amber-300" />
            </div>
            <div>
              <div className="text-sm font-black text-white sm:text-base">
                天然具备极高社区社交货币
              </div>
              <p className="mt-1 text-xs leading-relaxed text-slate-300 sm:text-sm">
                玩家通关后产出的长文与图文战报卡，可直接一键复制
                Markdown，发表在知乎对应提问下引发广泛讨论！
              </p>
            </div>
          </div>
        </div>

        {/* 右侧：生成的知乎回答样张模拟（7列）：大字号、沉浸感 */}
        <div className="flex flex-col justify-between space-y-4 rounded-2xl border-2 border-[#0066ff]/60 bg-black/80 p-6 font-sans shadow-2xl backdrop-blur-2xl sm:p-7 lg:col-span-7">
          {/* 知乎答题卡头 */}
          <div className="flex items-center justify-between border-b border-white/15 pb-4">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-[#0066ff] text-base font-black text-white shadow-md">
                知
              </div>
              <div>
                <span className="text-sm font-black text-white sm:text-base">
                  曹操 · 丞相中军帐亲笔
                </span>
                <span className="ml-3 font-mono text-xs text-slate-400">
                  1.2 万赞同 · 历史亲历者答题
                </span>
              </div>
            </div>
            <span className="rounded-full border border-emerald-400/50 bg-emerald-500/25 px-3.5 py-1 font-mono text-xs font-black text-emerald-300 shadow-sm sm:text-sm">
              终局评级: S · 混一天下
            </span>
          </div>

          {/* 正文摘录：加大字号 */}
          <div className="space-y-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm leading-relaxed text-slate-200 sm:p-5 sm:text-base">
            <p className="text-base font-bold text-white sm:text-lg">
              谢邀。人在赤壁乌林，刚刚下令拔营。这事就算后世史官把墨水倒干，我也必须把大实话倒出来……
            </p>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              建安十三年十一月二十日夜，帐前东风骤起的时候，子孝（曹仁）几乎是撞翻了帅案冲进来的。那一晚水面上的大火不是烧过来的，而是我们自己放的。当死士把铁锁直接焊死在连环船上的那一刻，我就知道，大汉的天下容不下第二张龙椅了……
            </p>
            <div className="my-2 rounded-r-lg border-l-4 border-cyan-400 bg-cyan-950/30 py-1 pl-3 text-sm font-bold text-cyan-300 sm:text-base">
              《卷二 · 借东风者，不知东风亦可吞江》
            </div>
          </div>

          {/* 底部分享动作栏 */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-2">
            <div className="flex items-center gap-4 font-mono text-xs text-slate-300 sm:text-sm">
              <span>推演历时: 3 回合 (5分钟)</span>
              <span>•</span>
              <span className="font-bold text-cyan-300">产出正文字数: 3,420 字</span>
            </div>
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                className="flex cursor-pointer items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-slate-200 hover:bg-white/20 sm:text-sm"
              >
                <Copy className="size-3.5" />
                <span>复制 Markdown</span>
              </button>
              <button
                type="button"
                className="flex cursor-pointer items-center gap-1.5 rounded-lg bg-[#0066ff] px-4 py-1.5 text-xs font-bold text-white shadow-md shadow-[#0066ff]/30 hover:bg-[#0052d4] sm:text-sm"
              >
                <Send className="size-3.5" />
                <span>一键发往知乎</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 底部生态意义背书 */}
      <div className="flex items-center justify-between rounded-xl border border-white/15 bg-black/60 px-6 py-3.5 text-sm text-slate-200 sm:text-base">
        <span>“玩沙盘 ➔ 产深度长文 ➔ 社区讨论 ➔ 裂变吸引新玩家” 形成完美的知乎自循环飞轮。</span>
        <span className="font-mono text-sm font-bold text-cyan-400">Native Zhihu Flywheel</span>
      </div>
    </div>
  );
}
