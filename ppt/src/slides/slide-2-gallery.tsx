import { CheckCircle2, MessageCircle, Sparkles, ThumbsUp } from "lucide-react";

import { ThemeStage } from "@/components/pixel/theme-stage";
import { Badge } from "@/components/ui/badge";
import { CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { getSkin, isDarkSkin, skinStyleVars, type ScenarioSkin } from "@/lib/scenario-skin";
import { cn } from "@/lib/utils";

import { useMockGame } from "../mock/game-state";
import { MOCK_SCENARIOS, type MockScenarioItem } from "../mock/preset-data";

const numberFormatter = new Intl.NumberFormat("zh-CN", {
  notation: "compact",
  maximumFractionDigits: 1,
});

export function Slide2Gallery({ skin: _defaultSkin }: { skin: ScenarioSkin }) {
  const { selectedScenario, setSelectedScenario } = useMockGame();
  const skin = getSkin("apocalypse");

  return (
    <div
      style={skinStyleVars(skin)}
      className={`bg-background text-foreground relative flex size-full h-screen flex-col justify-between overflow-hidden select-none ${
        isDarkSkin(skin) ? "dark" : ""
      }`}
    >
      {/* 🌌 末日灾变全景像素舞台底座 */}
      <ThemeStage
        skin={skin}
        active={true}
        className="pointer-events-none absolute inset-0 size-full opacity-100 transition-opacity duration-700"
      />

      {/* 🎪 核心 16:9 话题展厅布局 */}
      <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between px-4 py-3 sm:px-6 sm:py-4">
        {/* 大标题与氛围文案 */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="border-orange-500/50 font-mono text-[10px] text-orange-400">
              apocalypse / 04 / 06
            </Badge>
            <span className="font-mono text-xs text-slate-400">末日灾变专区</span>
            <Badge className="bg-[#e2622c] text-[10px] text-black font-bold">
              知乎高赞母本锁定
            </Badge>
            <div className="ml-auto flex items-center gap-1.5 rounded-full border border-orange-500/40 bg-orange-950/60 px-2.5 py-0.5 text-xs font-bold text-orange-300">
              <span className="size-1.5 rounded-full bg-[#e2622c]" />
              <span>当前专区：末日灾变 (Apocalypse)</span>
            </div>
          </div>
          <h2 className="text-xl font-black tracking-tight text-slate-100 sm:text-3xl lg:text-4xl">
            末日灾变 · 灰烬警报
          </h2>
          <p className="text-xs text-slate-300 sm:text-sm">
            北纬四十度冰盖南压，零下四十三度风雪锁江，三百万幸存者的南迁命门抉择。
          </p>
        </div>

        {/* 话题卡片展架：锁定冰河时代核心问题 */}
        <div className="my-auto grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          {MOCK_SCENARIOS.map((topic: MockScenarioItem, idx: number) => {
            const isFeatured = topic.id === "553550666";
            const isSelected = selectedScenario.id === topic.id || isFeatured;

            return (
              <div
                key={topic.id}
                onClick={() => setSelectedScenario(topic)}
                className="cursor-pointer transition-transform active:scale-[0.99]"
              >
                <SpotlightCard
                  spotlightColor="rgba(226, 98, 44, 0.15)"
                  className={cn(
                    "bg-[#26201d]/95 hover:border-orange-500/70 flex h-full flex-col justify-between gap-0 border-2 p-0 shadow-lg backdrop-blur-md transition-all",
                    isSelected
                      ? "border-[#e2622c] ring-2 ring-[#e2622c]/30 shadow-orange-950/50"
                      : "border-slate-700/80 opacity-75 hover:opacity-100",
                  )}
                >
                  <CardHeader className="gap-1.5 p-3.5 sm:p-4">
                    <div className="flex items-center justify-between font-mono text-[10px] text-slate-400">
                      <span className="font-bold text-orange-400">#{String(idx + 1).padStart(2, "0")} · @{topic.author}</span>
                      <Badge variant="outline" className="border-orange-500/30 text-[10px] text-orange-300">
                        {topic.tag}
                      </Badge>
                    </div>
                    <CardTitle className="line-clamp-2 text-xs leading-5 font-bold text-slate-100 sm:text-sm sm:leading-6">
                      {topic.title}
                    </CardTitle>
                    <p className="line-clamp-2 text-[11px] leading-relaxed text-slate-400">
                      {topic.summary}
                    </p>
                  </CardHeader>

                  <CardFooter className="mt-auto flex items-center justify-between gap-2 border-t border-white/10 bg-black/30 px-3.5 py-2.5 sm:px-4">
                    <div className="flex items-center gap-2.5 text-[11px] text-slate-300">
                      <span className="flex items-center gap-1 font-mono">
                        <ThumbsUp className="size-3 text-orange-400" />
                        {numberFormatter.format(topic.votes)}
                      </span>
                      <span className="flex items-center gap-1 font-mono text-slate-400">
                        <MessageCircle className="size-3" />
                        {numberFormatter.format(topic.answers)}
                      </span>
                    </div>

                    {isFeatured ? (
                      <span className="inline-flex items-center gap-1 rounded-md bg-[#e2622c] px-2.5 py-1 text-[11px] font-bold text-black shadow-xs">
                        <CheckCircle2 className="size-3" />
                        已锁定核心剧本
                      </span>
                    ) : (
                      <span className="text-[11px] text-slate-400">点击切换</span>
                    )}
                  </CardFooter>
                </SpotlightCard>
              </div>
            );
          })}
        </div>

        {/* 演出带：为地面像素精灵保留呼吸空间 */}
        <div className="h-[14dvh] shrink-0" aria-hidden="true" />
      </div>

      {/* 底部浮动引导条 */}
      <footer className="relative z-30 shrink-0 border-t border-white/10 bg-black/50 px-4 py-2 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <Sparkles className="size-3.5 text-[#e2622c]" />
            <span className="text-slate-400">当前演示母本：</span>
            <strong className="text-slate-100">
              《假如地球现在进入冰河时代，人类还能生存下去吗？》
            </strong>
          </div>
          <span className="font-mono text-[11px] font-bold text-orange-400">
            下一幕：势力立局与选角 (Act I) ➔ (按空格键或右方向键)
          </span>
        </div>
      </footer>
    </div>
  );
}
