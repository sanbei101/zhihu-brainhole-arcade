import { Copy, FileText, Send, Share2 } from "lucide-react";

import type { ScenarioSkin } from "@/lib/scenario-skin";

export function Slide8ZhihuFinale({ skin: _skin }: { skin: ScenarioSkin }) {
  return (
    <div className="relative flex size-full flex-col justify-between gap-4 overflow-hidden rounded-2xl border border-white/10 bg-[#0c101a] p-6 shadow-2xl sm:p-10">
      {/* 顶部标题 */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-[#0066ff] uppercase">
          <span>[结算即内容 · 生态闭环]</span>
        </div>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          结算即内容：通关自动铸就万字“知乎体第一人称亲历长回答”
        </h2>
        <p className="text-xs text-slate-300 sm:text-sm">
          对局结束不是终点，而是优质知乎社区内容的起点。史官 AI
          站在当事人视角复盘整场世界线，一键回流原帖。
        </p>
      </div>

      {/* 两大板块：知乎体写作纪律 vs 回答样式模拟 */}
      <div className="my-auto grid grid-cols-1 gap-5 lg:grid-cols-12">
        {/* 左侧：严苛的知乎体写作纪律（5列） */}
        <div className="space-y-3 lg:col-span-5">
          <div className="space-y-2 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-sm font-bold text-cyan-300">
              <FileText className="size-4 text-cyan-400" />
              <span>知乎高赞答主写作纪律 (Voice Rules)</span>
            </div>
            <ul className="space-y-2 pl-1 text-xs leading-relaxed text-slate-300">
              <li className="flex items-start gap-1.5">
                <span className="font-bold text-cyan-400">•</span>
                <span>
                  <strong>“谢邀”开篇破题</strong>：必须以{" "}
                  <em>“谢邀。人在赤壁，刚下战船。利益相关：[当事人]……”</em> 纯正知乎答主起手。
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="font-bold text-cyan-400">•</span>
                <span>
                  <strong>绝对严禁打破第四面墙</strong>
                  ：通篇严禁出现“玩家、AI、数值、选项、回合”等戏谑词汇，通篇以冷峻、犹疑、疲惫与深沉自省的亲历者视角叙事。
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="font-bold text-cyan-400">•</span>
                <span>
                  <strong>卷目分章与戏剧交锋</strong>
                  ：逐卷还原决断现场的案几烛火与惊险权谋，而非干瘪流水账。
                </span>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-amber-500/20 bg-amber-950/15 p-3.5 backdrop-blur-sm">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-amber-400/20">
              <Share2 className="size-5 text-amber-300" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">天然具备极高社区社交货币</div>
              <p className="mt-0.5 text-[11px] text-slate-300">
                玩家通关后产出的长文与图文战报卡，可直接一键复制
                Markdown，发表在知乎对应提问下引发热议！
              </p>
            </div>
          </div>
        </div>

        {/* 右侧：生成的知乎回答样张模拟（7列） */}
        <div className="flex flex-col justify-between space-y-3 rounded-xl border border-[#0066ff]/40 bg-black/70 p-5 font-sans shadow-2xl lg:col-span-7">
          {/* 知乎答题卡头 */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <div className="flex size-7 items-center justify-center rounded-full bg-[#0066ff] text-xs font-bold text-white">
                知
              </div>
              <div>
                <span className="text-xs font-bold text-white">曹操 · 丞相中军帐亲笔</span>
                <span className="ml-2 font-mono text-[10px] text-slate-400">
                  1.2 万赞同 · 历史亲历者
                </span>
              </div>
            </div>
            <span className="rounded-full border border-emerald-500/40 bg-emerald-500/20 px-2.5 py-0.5 font-mono text-[10px] font-bold text-emerald-300">
              终局评级: S · 混一天下
            </span>
          </div>

          {/* 正文摘录 */}
          <div className="space-y-2 rounded-lg border border-white/5 bg-white/5 p-3 text-xs leading-relaxed text-slate-300">
            <p className="font-semibold text-white">
              谢邀。人在赤壁乌林，刚刚下令拔营。这事就算后世史官把墨水倒干，我也必须把大实话倒出来……
            </p>
            <p className="text-[11.5px] text-slate-400">
              建安十三年十一月二十日夜，帐前东风骤起的时候，子孝（曹仁）几乎是撞翻了帅案冲进来的。那一晚水面上的火不是烧过来的，而是我们自己放的。当死士把铁锁直接焊死在连环船上的那一刻，我就知道，大汉的天下容不下第二张龙椅了……
            </p>
            <div className="my-1 border-l-2 border-cyan-400 py-0.5 pl-2 text-[11px] font-semibold text-cyan-300">
              《卷二 · 借东风者，不知东风亦可吞江》
            </div>
          </div>

          {/* 底部分享动作栏 */}
          <div className="flex items-center justify-between border-t border-white/10 pt-1 text-xs">
            <div className="flex items-center gap-3 font-mono text-[11px] text-slate-400">
              <span>耗时: 3回合 (5分钟)</span>
              <span>•</span>
              <span>产出正文字数: 3,420 字</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="flex cursor-pointer items-center gap-1 rounded bg-white/10 px-2.5 py-1 text-[11px] text-slate-200 hover:bg-white/20"
              >
                <Copy className="size-3" />
                <span>复制长文 Markdown</span>
              </button>
              <button
                type="button"
                className="flex cursor-pointer items-center gap-1 rounded bg-[#0066ff] px-2.5 py-1 text-[11px] font-medium text-white hover:bg-[#0052d4]"
              >
                <Send className="size-3" />
                <span>一键发往知乎</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 底部生态意义背书 */}
      <div className="flex items-center justify-between rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-xs text-slate-300">
        <span>“玩游戏 ➔ 产内容 ➔ 社区讨论 ➔ 吸引新玩家” 形成完美的知乎自循环飞轮。</span>
        <span className="font-mono text-[11px] font-semibold text-[#0066ff]">
          Native Zhihu Flywheel
        </span>
      </div>
    </div>
  );
}
