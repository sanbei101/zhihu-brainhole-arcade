import { Check, Copy, ShieldQuestion, Trophy } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress";
import type { ScenarioSkin } from "@/lib/scenario-skin";

import { useMockGame } from "../mock/game-state";
import { MOCK_FINALE } from "../mock/preset-data";

export function Slide6Finale({ skin: _skin }: { skin: ScenarioSkin }) {
  const {
    activeChapterIndex,
    setActiveChapterIndex,
    copiedToast,
    triggerCopyToast,
    selectedPlayer,
  } = useMockGame();

  const allChapters = [
    { title: "楔子 · 赤壁余烬", content: MOCK_FINALE.prologue },
    ...MOCK_FINALE.chapters,
  ];

  const currentChapter = allChapters[activeChapterIndex] ?? allChapters[0];

  return (
    <div className="relative flex size-full max-h-full scrollbar-none flex-col justify-between gap-2.5 overflow-y-auto rounded-2xl border border-white/80 bg-white/90 p-3 text-slate-900 shadow-2xl backdrop-blur-md sm:gap-3.5 sm:p-5 lg:p-6">
      {/* 顶部标题栏：复刻原版 WorldFinaleView 结算 Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/80 pb-2.5">
        <div>
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <Badge className="bg-[#0066ff]">终章结算</Badge>
            <Badge variant="outline">天命破壁 · 逆命结局</Badge>
            <Badge variant="secondary">终章评级 S+ 级</Badge>
            <Badge variant="outline" className="font-mono">
              12,850 字
            </Badge>
          </div>
          <div className="mt-1 flex items-center gap-2">
            <h2 className="text-base font-black text-slate-900 sm:text-lg">
              【天命破壁 · 汉室新开九万里】
            </h2>
            <span className="text-xs text-slate-500">
              你扮演 {selectedPlayer.name}({selectedPlayer.identity}) · 历经 3 回合廷议博弈
            </span>
          </div>
        </div>

        <Button
          size="sm"
          onClick={triggerCopyToast}
          className={`h-8 text-xs ${copiedToast ? "bg-emerald-600 hover:bg-emerald-700" : "bg-[#0066ff] hover:bg-blue-600"}`}
        >
          {copiedToast ? (
            <>
              <Check className="size-3.5" data-icon="inline-start" />
              已复制万字知乎长回答！
            </>
          ) : (
            <>
              <Copy className="size-3.5" data-icon="inline-start" />
              一键复制发回知乎原帖
            </>
          )}
        </Button>
      </div>

      {/* 核心复刻：左侧 知乎脑洞推演专栏长回答 + 右侧 世界终局数据卡 */}
      <div className="my-auto grid grid-cols-1 items-start gap-3 lg:grid-cols-12 lg:gap-4">
        {/* 左侧：知乎专栏长文回答卡片（占 8 列） */}
        <Card className="border-[#0066ff]/30 bg-white/95 shadow-sm lg:col-span-8">
          <CardHeader className="gap-2 border-b border-slate-100 p-3.5 sm:p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 rounded-full bg-[#0066ff]/10 px-2.5 py-0.5 font-mono text-xs font-bold text-[#0066ff]">
                  <img src="/zhihu.svg" alt="知乎" className="size-3.5 rounded-xs" />
                  知乎脑洞推演专栏
                </span>
                <span className="text-muted-foreground text-xs font-medium">· 深度亲历回答</span>
              </div>
              <span className="font-mono text-xs text-slate-400">
                原帖点赞: 4.2w+ · 评论: 1,380
              </span>
            </div>

            {/* 答主信息 */}
            <div className="flex items-center justify-between rounded-xl border border-slate-200/80 bg-slate-50 p-2.5">
              <div className="flex items-center gap-2.5">
                <div className="flex size-9 items-center justify-center rounded-full bg-[#0066ff] font-bold text-white shadow-xs">
                  {selectedPlayer.name.slice(0, 1)}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-black text-slate-900">{selectedPlayer.name}</span>
                    <Badge variant="secondary" className="px-1.5 py-0 text-[10px]">
                      当事亲历者
                    </Badge>
                  </div>
                  <p className="text-[10px] text-slate-500">
                    {selectedPlayer.identity} · 【{selectedPlayer.faction}】核心掌印人
                  </p>
                </div>
              </div>
              <Badge
                variant="outline"
                className="border-[#0066ff]/40 font-mono text-xs text-[#0066ff]"
              >
                S+ 破局定鼎
              </Badge>
            </div>

            {/* 章节 Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              {allChapters.map((ch, idx) => (
                <button
                  key={ch.title}
                  type="button"
                  onClick={() => setActiveChapterIndex(idx)}
                  className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-all ${
                    idx === activeChapterIndex
                      ? "bg-slate-900 text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {ch.title.split("·")[0].trim()}
                </button>
              ))}
            </div>
          </CardHeader>

          {/* 正文区域 */}
          <CardContent className="max-h-[220px] overflow-y-auto p-4 text-xs leading-relaxed sm:text-sm">
            <h4 className="mb-2 font-bold text-slate-900">{currentChapter.title}</h4>
            <div className="font-serif leading-relaxed whitespace-pre-line text-slate-700">
              {currentChapter.content}
            </div>
          </CardContent>
        </Card>

        {/* 右侧：原版 世界终局数据卡（占 4 列） */}
        <div className="space-y-3 lg:col-span-4">
          <Card className="border-slate-200 bg-white/95 shadow-xs">
            <CardHeader className="border-b border-slate-100 p-3 pb-2">
              <CardTitle className="flex items-center justify-between text-sm font-bold">
                <span>世界终局数据卡</span>
                <span className="font-mono text-xs font-bold text-emerald-600">全域平衡</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2.5 p-3">
              {[
                { label: "政权稳定", val: MOCK_FINALE.metricsSummary.stability },
                { label: "军心士气", val: MOCK_FINALE.metricsSummary.morale },
                { label: "民众支持", val: MOCK_FINALE.metricsSummary.support },
                { label: "战略资源", val: MOCK_FINALE.metricsSummary.resources },
              ].map((item) => (
                <Progress key={item.label} value={item.val}>
                  <ProgressLabel className="text-[11px] font-medium text-slate-600">
                    {item.label}
                  </ProgressLabel>
                  <ProgressValue className="font-mono text-xs font-bold">
                    {() => item.val}
                  </ProgressValue>
                </Progress>
              ))}
            </CardContent>
          </Card>

          {/* 私密目标达成判定卡 */}
          <Card className="border-slate-200 bg-white/95 shadow-xs">
            <CardHeader className="p-3 pb-1.5">
              <CardTitle className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                <ShieldQuestion className="size-3.5 text-[#0066ff]" />
                <span>你的私密目标判定</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-1.5 p-3 pt-0 text-xs">
              <div className="flex items-center gap-2">
                <Badge className="bg-emerald-600 text-[10px] text-white">圆满达成</Badge>
                <span className="text-[11px] text-slate-500">“保全士人脊梁，开辟重洋”</span>
              </div>
              <p className="text-[11px] leading-snug text-slate-600">
                成功逼退曹操代汉进封魏公之谋，并令刘孙二王远渡南洋，保全天下苍生与汉家天命。
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 底部确认栏 */}
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white/95 px-4 py-2 text-xs text-slate-700 shadow-xs sm:text-sm">
        <span className="flex items-center gap-2">
          <Trophy className="size-4 text-amber-600" />
          <span>结算即内容闭环：</span>
          <strong className="text-slate-900">
            一次对局推演，天然产出一篇严格恪守亲历者纪律的知乎体长回答
          </strong>
        </span>
        <span className="font-mono text-xs font-bold text-[#0066ff]">
          下一幕：核心工程攻坚 · 架构与算法突破 ➔ (按空格键或右方向键)
        </span>
      </div>
    </div>
  );
}
