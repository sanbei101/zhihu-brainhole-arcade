import { ArrowRight, CheckCircle2, MessageCircle, Sparkles, ThumbsUp } from "lucide-react";
import { useState } from "react";

import { ThemeStage } from "@/components/pixel/theme-stage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { SCENARIO_THEMES, type ScenarioTheme, type ScenarioTopic } from "@/lib/scenario-library";
import { getSkin, skinStyleVars } from "@/lib/scenario-skin";

import { useMockGame } from "../mock/game-state";

const numberFormatter = new Intl.NumberFormat("zh-CN", {
  notation: "compact",
  maximumFractionDigits: 1,
});

export function Slide2Gallery({ skin: _skin }: { skin: ReturnType<typeof getSkin> }) {
  const { selectedScenario, setSelectedScenario } = useMockGame();
  const [activeThemeId, setActiveThemeId] = useState<string>("three-kingdoms");

  const currentTheme = SCENARIO_THEMES.find((t) => t.id === activeThemeId) ?? SCENARIO_THEMES[0];
  const themeSkin = getSkin(currentTheme.id);

  return (
    <div
      style={skinStyleVars(themeSkin)}
      className="relative flex size-full max-h-full scrollbar-none flex-col justify-between gap-3 overflow-y-auto rounded-2xl border border-white/80 bg-white/90 p-4 text-slate-900 shadow-2xl backdrop-blur-md sm:gap-4 sm:p-6 lg:p-7"
    >
      {/* 顶部标题与导航栏 */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/80 pb-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold tracking-wider text-[#0066ff] uppercase">
              [第 1 幕 · 题库大厅]
            </span>
            <Badge variant="secondary" className="text-[10px]">
              知乎脑洞游乐园 · WORLDLINE DECK
            </Badge>
          </div>
          <h2 className="text-xl font-black text-slate-900 sm:text-2xl lg:text-3xl">
            知乎高赞脑洞题库 · 经典假设具象化
          </h2>
        </div>

        {/* 主题乐园切换 Tabs */}
        <div className="flex flex-wrap items-center gap-1.5">
          {SCENARIO_THEMES.slice(0, 5).map((theme: ScenarioTheme) => (
            <Button
              key={theme.id}
              variant={theme.id === activeThemeId ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveThemeId(theme.id)}
              className="text-xs h-8"
            >
              {theme.name}
            </Button>
          ))}
        </div>
      </div>

      {/* 核心复刻：左侧 ThemeStage + 右侧 3 张 SpotlightCard 话题卡片 */}
      <div className="my-auto grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-6 items-center">
        {/* 左侧：原版 ThemeStage 像素舞台 */}
        <div className="relative overflow-hidden rounded-2xl border-2 border-slate-200 bg-slate-900/90 shadow-md lg:col-span-5 flex flex-col justify-between p-4 sm:p-6 text-white min-h-[300px]">
          <ThemeStage skin={themeSkin} active={true} />
          <div className="relative z-10 mt-auto pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
            <span>收录 {currentTheme.scenarios.length} 条高赞世界线</span>
            <span className="font-mono font-bold text-amber-400">已接入知乎原帖数据</span>
          </div>
        </div>

        {/* 右侧：原版 SpotlightCard 话题卡片列表 */}
        <div className="grid grid-cols-1 gap-3 lg:col-span-7">
          {currentTheme.scenarios.slice(0, 3).map((topic: ScenarioTopic, idx: number) => {
            const isSelected =
              selectedScenario.id === topic.id ||
              (idx === 0 && currentTheme.id === "three-kingdoms");
            return (
              <div
                key={topic.id}
                onClick={() =>
                  setSelectedScenario({
                    id: topic.id,
                    themeId: currentTheme.id,
                    title: topic.title,
                    author: topic.author ?? "知乎答主",
                    votes: topic.votes,
                    answers: 1280,
                    tag: currentTheme.name,
                    summary: topic.title,
                  })
                }
                className="cursor-pointer"
              >
                <SpotlightCard
                  spotlightColor="rgba(0, 102, 255, 0.15)"
                  className={`bg-card/95 hover:border-primary/60 border-2 transition-all ${
                    isSelected
                      ? "border-[#0066ff] bg-blue-50/70 shadow-md ring-2 ring-[#0066ff]/20"
                      : "border-slate-200"
                  }`}
                >
                  <CardHeader className="gap-1.5 p-3.5 sm:p-4">
                    <div className="text-muted-foreground flex items-center justify-between font-mono text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-black text-[#0066ff]">
                          #{String(idx + 1).padStart(2, "0")}
                        </span>
                        {topic.author ? <span>· @{topic.author}</span> : null}
                      </div>
                      <Badge variant="outline" className="text-[10px]">
                        知乎高赞假设
                      </Badge>
                    </div>
                    <CardTitle className="line-clamp-2 text-sm leading-snug font-bold text-slate-900 sm:text-base">
                      {topic.title}
                    </CardTitle>
                  </CardHeader>
                  <CardFooter className="flex items-center justify-between border-t border-slate-100 px-3.5 py-2 text-xs text-slate-500">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 font-mono font-bold text-slate-700">
                        <ThumbsUp className="size-3.5 text-[#0066ff]" />
                        {numberFormatter.format(topic.votes)} 赞同
                      </span>
                      <span className="flex items-center gap-1 font-mono">
                        <MessageCircle className="size-3.5" />
                        800+ 讨论
                      </span>
                    </div>

                    {isSelected ? (
                      <span className="flex items-center gap-1 font-bold text-[#0066ff]">
                        <CheckCircle2 className="size-4" />
                        <span>已锁定世界线</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-slate-400 group-hover:text-[#0066ff]">
                        <span>点击选择</span>
                        <ArrowRight className="size-3.5" />
                      </span>
                    )}
                  </CardFooter>
                </SpotlightCard>
              </div>
            );
          })}
        </div>
      </div>

      {/* 底部确认条 */}
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white/95 px-4 py-2.5 text-xs text-slate-700 shadow-xs sm:text-sm">
        <span className="flex items-center gap-2">
          <Sparkles className="size-4 text-[#0066ff]" />
          <span>当前选定脑洞：</span>
          <strong className="max-w-md truncate text-slate-900">{selectedScenario.title}</strong>
        </span>
        <span className="font-mono text-xs font-bold text-[#0066ff]">
          下一幕：势力立局与选角 ➔ (按空格键或右方向键)
        </span>
      </div>
    </div>
  );
}
