import {
  Bot,
  BrainCircuit,
  Compass,
  FileText,
  Lock,
  MessageCircle,
  Sparkles,
  ThumbsUp,
  UserCheck,
} from "lucide-react";

import { PixelSprite } from "@/components/pixel/pixel-sprite";
import { portraitFor, portraitMotionClass } from "@/components/pixel/portraits";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getSkin, isDarkSkin, skinStyleVars, type ScenarioSkin } from "@/lib/scenario-skin";
import { cn } from "@/lib/utils";

import { useMockGame } from "../mock/game-state";
import { type MockAgentCharacter, type MockPlayerCharacter } from "../mock/preset-data";

const numberFormatter = new Intl.NumberFormat("zh-CN", {
  notation: "compact",
  maximumFractionDigits: 1,
});

export function Slide3Cast({ skin: _defaultSkin }: { skin: ScenarioSkin }) {
  const { selectedPlayer, setSelectedPlayerId, players, agents, selectedScenario } = useMockGame();
  const skin = getSkin("apocalypse");

  return (
    <main
      style={skinStyleVars(skin)}
      className={`bg-background text-foreground relative flex size-full h-screen flex-col justify-between overflow-hidden select-none ${
        isDarkSkin(skin) ? "dark" : ""
      }`}
    >
      {/* 🏞️ 极寒冰原 Strip 与话题英雄栏：16:9 紧凑适配 */}
      <section className="shrink-0 border-b border-white/10 bg-[#26201d]/60 px-4 py-2 sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <Badge className="bg-[#e2622c] text-[10px] font-bold text-black">
                末日灾变 · 灰烬警报
              </Badge>
              <Badge
                variant="outline"
                className="border-orange-500/40 font-mono text-[10px] text-orange-400"
              >
                ACT I / OPENING & CAST
              </Badge>
              <span className="font-mono text-[10px] text-slate-400">ID: 553550666</span>
            </div>
            <h1 className="mt-1 truncate text-sm font-black text-slate-100 sm:text-lg">
              {selectedScenario.title}
            </h1>
          </div>

          <div className="flex shrink-0 items-center gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <Avatar className="size-5">
                <AvatarFallback className="bg-orange-600 text-[10px] text-white">赵</AvatarFallback>
              </Avatar>
              <span className="font-bold text-slate-200">@{selectedScenario.author}</span>
            </span>
            <span className="flex items-center gap-1 font-mono">
              <ThumbsUp className="size-3 text-orange-400" />
              {numberFormatter.format(selectedScenario.votes)}
            </span>
            <span className="flex items-center gap-1 font-mono">
              <MessageCircle className="size-3" />
              {numberFormatter.format(selectedScenario.answers)}
            </span>
          </div>
        </div>
      </section>

      {/* 🎭 核心 16:9 双半区：左半边保留人物卡片，右半边用于 PPT 文字解释 */}
      <section className="mx-auto w-full max-w-7xl flex-1 overflow-hidden px-4 py-2.5 sm:px-6 sm:py-3">
        <div className="grid h-full grid-cols-1 gap-3.5 lg:grid-cols-12 lg:gap-4">
          {/* 👈 左半边（占 6 列）：保留 3 位角色卡片与 4 位 Agent 预览 */}
          <section className="flex h-full flex-col justify-between gap-2 overflow-hidden lg:col-span-6">
            {/* 3 位主角候选卡片（垂直三段排布） */}
            <div className="grid flex-1 grid-cols-1 gap-2 overflow-hidden px-1">
              {players.map((character: MockPlayerCharacter) => {
                const isSelected = character.id === selectedPlayer.id;
                const spritePortrait = portraitFor(character, skin);

                return (
                  <Card
                    key={character.id}
                    onClick={() => setSelectedPlayerId(character.id)}
                    className={`flex cursor-pointer flex-col justify-between border-2 bg-[#26201d]/95 p-2.5 shadow-md transition-all ${
                      isSelected
                        ? "scale-[1.01] border-[#e2622c] bg-orange-950/50 shadow-lg ring-2 ring-orange-500/60"
                        : "border-slate-700/80 hover:border-slate-500 hover:bg-black/30"
                    }`}
                  >
                    <CardHeader className="p-0">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <div className="flex size-16 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-black/70 p-1 shadow-inner">
                            <PixelSprite
                              frames={spritePortrait.frames}
                              palette={spritePortrait.palette}
                              label={spritePortrait.label}
                              scale={2.0}
                              className={portraitMotionClass(spritePortrait.motion, false)}
                            />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <CardTitle className="text-base font-black text-slate-100">
                                {character.name}
                              </CardTitle>
                              <Badge
                                variant="outline"
                                className="border-orange-500/50 text-[10px] font-bold text-orange-300"
                              >
                                {character.faction.split("与")[0]}
                              </Badge>
                            </div>
                            <CardDescription className="mt-0.5 text-xs font-bold text-orange-200">
                              {character.identity}
                            </CardDescription>
                          </div>
                        </div>

                        <Button
                          variant={isSelected ? "default" : "outline"}
                          size="xs"
                          className={cn(
                            "h-7 px-2.5 text-xs font-bold shadow-xs",
                            isSelected
                              ? "bg-[#e2622c] text-black hover:bg-orange-500"
                              : "border-slate-700 text-slate-300 hover:bg-white/10",
                          )}
                        >
                          {isSelected ? "✓ 当前执政" : "选择扮演"}
                        </Button>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-1.5 p-0 text-lg leading-relaxed text-slate-300">
                      <p className="line-clamp-2 leading-normal text-slate-300">
                        <strong className="text-slate-200">公开主张：</strong>
                        {character.publicGoal}
                      </p>
                      <div className="flex items-start gap-1 rounded border border-orange-500/30 bg-orange-950/60 px-2 py-1 text-xs text-orange-200">
                        <Lock className="mt-0.5 size-3 shrink-0 text-orange-400" />
                        <span className="line-clamp-2">
                          <strong className="text-orange-400">私密动机：</strong>
                          {character.privateGoal}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* 4 位 Agent 利益方预览栏 */}
            <div className="shrink-0 rounded-xl border border-white/10 bg-black/40 p-2 shadow-xs">
              <div className="mb-1 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 font-bold text-slate-300">
                  <Bot className="size-3 text-orange-400" />
                  <span className="text-[11px]">本场 4 位独立 Agent 利益博弈方：</span>
                </span>
                <span className="font-mono text-[10px] text-slate-400">各怀死守与自救底线</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5 text-xs">
                {agents.map((agent: MockAgentCharacter) => {
                  const agentSprite = portraitFor(agent, skin);
                  return (
                    <div
                      key={agent.id}
                      className="flex items-center gap-1.5 rounded border border-white/5 bg-white/5 px-2 py-1"
                    >
                      <div className="flex size-6 shrink-0 items-center justify-center rounded bg-black/60 p-0.5">
                        <PixelSprite
                          frames={agentSprite.frames}
                          palette={agentSprite.palette}
                          label={agentSprite.label}
                          scale={1.0}
                          className={portraitMotionClass(agentSprite.motion, false)}
                        />
                      </div>
                      <div className="min-w-0">
                        <span className="block truncate text-[11px] font-black text-orange-300">
                          {agent.name}
                        </span>
                        <span className="block truncate text-[9px] text-slate-400">
                          {agent.identity.split("·")[0]}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* 👉 右半边（占 6 列）：用于 PPT 文字解释（大字号、通俗易懂说人话） */}
          <aside className="flex h-full flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#26201d]/95 p-4 shadow-xl lg:col-span-6">
            {/* 标题栏 */}
            <div className="shrink-0 border-b border-white/10 pb-2">
              <div className="flex items-center justify-between">
                <Badge className="bg-[#e2622c] text-xs font-black text-black">
                  STAGE 01 · 把脑洞问题转化为沙盘
                </Badge>
                <span className="font-mono text-xs font-bold text-orange-400">
                  WORLDLINE / CASTING
                </span>
              </div>
              <h2 className="mt-1.5 flex items-center gap-2 text-base font-black text-slate-100 sm:text-lg">
                <Compass className="size-5 shrink-0 text-orange-400" />
                <span>知乎高赞母本具象化：自由选择各方阵营人物</span>
              </h2>
              <p className="mt-1 text-xs leading-relaxed text-slate-300 sm:text-sm">
                以知乎 7.7w 赞爆款《假如地球进入冰河时代》为母本：将文字脑洞转化为互动沙盘，选择一位核心角色开启你的推演。
              </p>
            </div>

            {/* 3 个核心设计深度解释卡片（说人话、大字体） */}
            <div className="flex flex-1 flex-col justify-around space-y-2 overflow-hidden py-1.5">
              {/* 卡片 1 */}
              <div className="rounded-xl border border-white/10 bg-black/40 p-3 shadow-xs">
                <div className="flex items-center gap-2">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-md border border-orange-500/30 bg-orange-950 font-mono text-xs font-black text-orange-400">
                    01
                  </span>
                  <h3 className="flex items-center gap-1.5 text-sm font-black text-slate-100 sm:text-base">
                    <FileText className="size-4 text-orange-400" />
                    <span>【选择核心人物】正反派由你说了算</span>
                  </h3>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-slate-200 sm:text-sm font-medium">
                  系统生成在这个世界观中，各方阵营举足轻重的代表人物，各有各的诉求和性格，增强多元化体验。
                </p>
              </div>

              {/* 卡片 2 */}
              <div className="rounded-xl border border-white/10 bg-black/40 p-3 shadow-xs">
                <div className="flex items-center gap-2">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-md border border-orange-500/30 bg-orange-950 font-mono text-xs font-black text-orange-400">
                    02
                  </span>
                  <h3 className="flex items-center gap-1.5 text-sm font-black text-slate-100 sm:text-base">
                    <BrainCircuit className="size-4 text-orange-400" />
                    <span>【双层动机机制】公开主张与私密诉求</span>
                  </h3>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-slate-200 sm:text-sm font-medium">
                  每个角色均拥有明面的政治立场与隐藏的私信底牌，在应对外部危机时需要权衡公私诉求与阵营利益。
                </p>
              </div>

              {/* 卡片 3 */}
              <div className="rounded-xl border border-white/10 bg-black/40 p-3 shadow-xs">
                <div className="flex items-center gap-2">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-md border border-orange-500/30 bg-orange-950 font-mono text-xs font-black text-orange-400">
                    03
                  </span>
                  <h3 className="flex items-center gap-1.5 text-sm font-black text-slate-100 sm:text-base">
                    <Sparkles className="size-4 text-orange-400" />
                    <span>【初始条件差异】不同的资源与决策权</span>
                  </h3>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-slate-200 sm:text-sm font-medium">
                  军备、仓储与运输等不同职权对应着各自的优势与困境，选择不同角色将带来截然不同的决策起点。
                </p>
              </div>
            </div>

            {/* 底部技术注记 */}
            <div className="shrink-0 rounded-lg border border-orange-500/40 bg-orange-950/40 px-3 py-2 text-xs text-orange-300 sm:text-[13px]">
              <strong className="text-orange-400">💡 交互说明：</strong>
              <span>点击左侧角色卡片可切换扮演身份，实时查看不同人物的职权属性与动机设定。</span>
            </div>
          </aside>
        </div>
      </section>

      {/* 底部确认栏 */}
      <footer className="relative z-30 shrink-0 border-t border-white/10 bg-black/60 px-4 py-2 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <UserCheck className="size-4 text-[#e2622c]" />
            <span className="text-slate-400">已就绪身份：</span>
            <strong className="text-slate-100">
              以【{selectedPlayer.name} · {selectedPlayer.identity}】视角入局执棋
            </strong>
          </div>
          <span className="font-mono text-[11px] font-bold text-orange-400">
            下一幕：议事厅全景战局与梯度抉择 (Act II) ➔ (按空格键或右方向键)
          </span>
        </div>
      </footer>
    </main>
  );
}
