import { Check, Copy, Repeat, ShieldQuestion, Trophy } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress";
import { getSkin, isDarkSkin, skinStyleVars, type ScenarioSkin } from "@/lib/scenario-skin";

import { useMockGame } from "../mock/game-state";
import { MOCK_FINALE } from "../mock/preset-data";
import { ASSETS } from "../assets";

export function Slide6Finale({ skin: _defaultSkin }: { skin: ScenarioSkin }) {
  const {
    activeChapterIndex,
    setActiveChapterIndex,
    copiedToast,
    triggerCopyToast,
    selectedPlayer,
  } = useMockGame();
  const skin = getSkin("apocalypse");

  const allChapters = [
    { title: "楔子 · 绝境风雪", content: MOCK_FINALE.prologue },
    ...MOCK_FINALE.chapters,
  ];

  const currentChapter = allChapters[activeChapterIndex] ?? allChapters[0];

  return (
    <main
      style={skinStyleVars(skin)}
      className={`bg-background text-foreground relative flex size-full h-screen flex-col justify-between overflow-hidden select-none ${
        isDarkSkin(skin) ? "dark" : ""
      }`}
    >
      {/* 🏆 终章结算 Header 栏：16:9 紧凑适配 */}
      <section className="shrink-0 border-b border-white/10 bg-[#26201d]/70 px-4 py-1.5 sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <Badge className="bg-[#e2622c] font-mono text-[10px] text-black font-bold">终章结算</Badge>
            <Badge variant="outline" className="border-orange-500/40 text-[10px] text-orange-300">
              <Trophy className="size-2.5 text-[#e2622c] mr-1" />
              天命破壁 · 逆命结局
            </Badge>
            <Badge variant="secondary" className="bg-orange-950/60 text-[10px] text-orange-300 font-bold">
              终局评级 S+ 级
            </Badge>
            <span className="text-xs font-black text-slate-100 sm:text-sm">
              【天命破壁 · 踏碎严冬三万里】
            </span>
            <span className="hidden sm:inline text-[11px] text-slate-400">
              · 你扮演【{selectedPlayer.name} · {selectedPlayer.identity.split("·")[0]}】历经 3 回合廷争与凿冰决断
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2 font-mono text-[10px] text-slate-400">
              <span>原帖赞同: 7.7w+</span>
              <span>·</span>
              <span>讨论: 1,480 条</span>
            </div>
            <Button
              size="xs"
              onClick={triggerCopyToast}
              className={`h-7.5 gap-1.5 px-3 text-xs font-bold transition-all shadow-xs ${
                copiedToast
                  ? "bg-emerald-600 text-white"
                  : "bg-[#e2622c] text-black hover:bg-orange-500"
              }`}
            >
              {copiedToast ? (
                <>
                  <Check className="size-3.5" />
                  已复制知乎长回答！
                </>
              ) : (
                <>
                  <Copy className="size-3.5" />
                  一键复制发回知乎原帖
                </>
              )}
            </Button>
          </div>
        </div>
      </section>

      {/* 📜 核心推演内容：左侧 知乎体深度长文回答 + 右侧 终局世界数据卡 (16:9 比例) */}
      <section className="mx-auto w-full max-w-7xl flex-1 px-4 py-2 sm:px-6 sm:py-2.5">
        <div className="grid h-full grid-cols-1 gap-3 lg:grid-cols-12 lg:gap-4">
          {/* 左侧：知乎专栏长文回答卡片 (占 8 列) */}
          <Card className="flex flex-col justify-between border-white/15 bg-[#26201d]/95 p-3 shadow-md lg:col-span-8">
            <CardHeader className="gap-2 border-b border-white/10 p-0 pb-2">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 rounded-full bg-orange-950/60 px-2.5 py-0.5 font-mono text-[10px] font-bold text-orange-400">
                    <img src={ASSETS.zhihuSvg} alt="知乎" className="size-3 rounded-xs" />
                    知乎脑洞推演专栏
                  </span>
                  <span className="text-[11px] text-slate-400">· 深度亲历回答</span>
                </div>
                <span className="font-mono text-[10px] text-slate-400">全卷共 12,850 字</span>
              </div>

              {/* 答主信息 */}
              <div className="flex items-center justify-between rounded-lg border border-white/10 bg-black/30 px-2.5 py-1.5">
                <div className="flex items-center gap-2">
                  <div className="flex size-7 items-center justify-center rounded-full bg-[#e2622c] font-bold text-black text-xs">
                    赵
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-black text-slate-100">赵泠</span>
                      <span className="text-[10px] text-slate-400">(知乎特邀答主) /</span>
                      <span className="text-xs font-bold text-orange-300">{selectedPlayer.name}</span>
                      <Badge variant="outline" className="border-orange-500/40 text-[9px] text-orange-300">
                        当事亲历者
                      </Badge>
                    </div>
                  </div>
                </div>
                <Badge className="bg-emerald-950 border border-emerald-500/40 text-[9px] font-mono text-emerald-400">
                  S+ 破局定鼎
                </Badge>
              </div>

              {/* 章节 Navigation Tabs */}
              <div className="flex flex-wrap items-center gap-1 pt-0.5">
                {allChapters.map((ch, idx) => (
                  <button
                    key={ch.title}
                    type="button"
                    onClick={() => setActiveChapterIndex(idx)}
                    className={`cursor-pointer rounded px-2 py-0.5 text-[10px] font-bold transition-all ${
                      idx === activeChapterIndex
                        ? "bg-orange-500 text-black shadow-xs"
                        : "bg-white/5 text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    {ch.title.split("·")[0].trim()}
                  </button>
                ))}
              </div>
            </CardHeader>

            {/* 正文区域 */}
            <CardContent className="p-0 pt-2 text-xs">
              <h4 className="mb-1 text-xs font-black text-orange-300">{currentChapter.title}</h4>
              <div className="font-serif leading-relaxed whitespace-pre-line text-slate-200 line-clamp-6">
                {currentChapter.content}
              </div>
            </CardContent>
          </Card>

          {/* 右侧：世界终局数据卡与社区飞轮 (占 4 列) */}
          <div className="flex flex-col justify-between gap-2 lg:col-span-4">
            {/* 世界终局数据卡 */}
            <Card className="border-white/15 bg-[#26201d]/95 p-3 shadow-xs">
              <CardHeader className="border-b border-white/10 p-0 pb-1.5">
                <CardTitle className="flex items-center justify-between text-xs font-bold text-slate-100">
                  <span>极寒终局存续数据卡</span>
                  <span className="font-mono text-[10px] text-emerald-400">文明存续 92.4%</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 p-0 pt-2">
                {[
                  { label: "族群存续", val: MOCK_FINALE.metricsSummary.morale },
                  { label: "秩序稳定", val: MOCK_FINALE.metricsSummary.stability },
                  { label: "民众支持", val: MOCK_FINALE.metricsSummary.support },
                  { label: "战略资源", val: MOCK_FINALE.metricsSummary.resources },
                ].map((item) => (
                  <Progress key={item.label} value={item.val}>
                    <ProgressLabel className="text-[10px] font-medium text-slate-300">
                      {item.label}
                    </ProgressLabel>
                    <ProgressValue className="font-mono text-[10px] font-bold text-orange-400">
                      {() => item.val}
                    </ProgressValue>
                  </Progress>
                ))}
              </CardContent>
            </Card>

            {/* 私密目标达成判定卡 */}
            <Card className="border-white/15 bg-[#26201d]/95 p-2.5 shadow-xs">
              <CardHeader className="p-0 pb-1">
                <CardTitle className="flex items-center gap-1 text-[11px] font-bold text-slate-200">
                  <ShieldQuestion className="size-3 text-[#e2622c]" />
                  <span>私密目标判定：圆满达成</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-[10px] leading-tight text-slate-300">
                <p className="text-orange-200">“三百万同胞一个都不能扔在冰原上”</p>
                <p className="mt-0.5 text-slate-400">
                  以冰上长城绕开防守雷场，护送三百万军民横贯千里直下暖带，开辟极寒自救通衢。
                </p>
              </CardContent>
            </Card>

            {/* 社区飞轮卡 */}
            <div className="rounded-lg border border-orange-500/30 bg-orange-950/30 p-2 text-[10px] text-slate-300">
              <div className="flex items-center gap-1 font-bold text-orange-400">
                <Repeat className="size-3" />
                <span>结算即内容社区闭环</span>
              </div>
              <p className="mt-0.5 text-slate-400">
                一次沙盘推演，天然产出一篇严守知乎体感的万字亲历长回答，一键发回知乎原帖。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 底部确认栏 */}
      <footer className="relative z-30 shrink-0 border-t border-white/10 bg-black/60 px-4 py-2 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <Trophy className="size-4 text-orange-400" />
            <span className="text-slate-400">推演全流程闭幕：</span>
            <strong className="text-slate-100">
              完成从知乎问题到沙盘推演再到知乎长回答的完整闭环
            </strong>
          </div>
          <span className="font-mono text-[11px] font-bold text-orange-400">
            下一幕：底层工程攻坚 (Architecture) ➔ (按空格键或右方向键)
          </span>
        </div>
      </footer>
    </main>
  );
}
