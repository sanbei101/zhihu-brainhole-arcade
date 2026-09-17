import { Bot, MessageCircle, ThumbsUp, UserCheck, UserRound } from "lucide-react";

import { PixelSprite } from "@/components/pixel/pixel-sprite";
import { portraitFor, portraitMotionClass } from "@/components/pixel/portraits";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
      {/* 🏞️ 极寒冰原 Strip 与话题英雄栏：紧凑适配 16:9 */}
      <section className="shrink-0 border-b border-white/10 bg-[#26201d]/60 px-4 py-2 sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <Badge className="bg-[#e2622c] text-[10px] text-black font-bold">
                末日灾变 · 灰烬警报
              </Badge>
              <Badge variant="outline" className="border-orange-500/40 font-mono text-[10px] text-orange-400">
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

      {/* 🎭 核心双栏：左侧规则指引 + 右侧开场危机与 3 位主角卡片 (16:9 精确比例) */}
      <section className="mx-auto w-full max-w-7xl flex-1 px-4 py-2 sm:px-6 sm:py-2.5">
        <div className="grid h-full grid-cols-1 gap-3 lg:grid-cols-12 lg:gap-4">
          {/* 左栏：复刻原版世界线角色召集规则 (占 4 列) */}
          <aside className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#26201d]/90 p-3 shadow-md lg:col-span-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                <Badge variant="secondary" className="bg-orange-950/60 text-[10px] text-orange-400">
                  WORLDLINE / CAST
                </Badge>
                <span className="font-mono text-[10px] text-slate-400">STAGE 2</span>
              </div>
              <h2 className="text-sm font-black text-slate-100 sm:text-base">世界线推演与角色召集</h2>
              <p className="text-[11px] leading-relaxed text-slate-400">
                北纬四十度冰盖南压，零下四十三度寒风封江。三百万北方幸存者南迁撞上闭锁关隘。
              </p>
              <ol className="space-y-1.5 pt-1 text-[11px] text-slate-300">
                <li className="flex gap-2">
                  <span className="font-mono font-bold text-orange-400">01</span>
                  <span>建立时间、地点与极寒资源命门</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-mono font-bold text-orange-400">02</span>
                  <span>生成权力来源不同的玩家候选角色</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-mono font-bold text-orange-400">03</span>
                  <span>配置由独立 Agent 扮演的利益相关者</span>
                </li>
              </ol>
            </div>

            {/* 场景时空设定框 */}
            <div className="rounded-lg border border-orange-500/30 bg-orange-950/30 p-2 text-[10px] text-orange-300">
              <span className="font-bold">局势时空：</span>
              <span>冰河开启第140天 · 松花江双堡关 · 零下43℃</span>
            </div>
          </aside>

          {/* 右栏：开场横幅 + 选择你的角色 3 张卡片 + 4 路 Agent (占 8 列) */}
          <section className="flex flex-col justify-between gap-2 lg:col-span-8">
            {/* 开场危机条 */}
            <div className="rounded-xl border border-l-4 border-orange-500 border-white/10 bg-black/40 px-3.5 py-2">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[10px] font-bold text-orange-400">ACT I / OPENING</p>
                <span className="font-mono text-[10px] text-slate-400">三百万人的南迁命门</span>
              </div>
              <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-200">
                零下四十三度的寒风卷着冰晶，封冻江面上蜿蜒着三百万大迁徙队伍。关隘上重机枪冰冷，关隘下婴儿啼哭。放，则南方粮仓被吃穿；不放，则关外冻尸千里。
              </p>
            </div>

            {/* 3 位玩家候选角色卡片 */}
            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <UserRound className="size-3.5 text-orange-400" />
                  <span className="text-xs font-black text-slate-100">选择你的扮演角色（点击立局）</span>
                </div>
                <span className="text-[10px] text-slate-400">选择后揭示该角色私密动机</span>
              </div>

              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                {players.map((character: MockPlayerCharacter) => {
                  const isSelected = character.id === selectedPlayer.id;
                  const spritePortrait = portraitFor(character, skin);

                  return (
                    <Card
                      key={character.id}
                      onClick={() => setSelectedPlayerId(character.id)}
                      className={`cursor-pointer border-2 bg-[#26201d]/95 p-2.5 shadow-xs transition-all ${
                        isSelected
                          ? "border-[#e2622c] bg-orange-950/40 ring-1 ring-orange-500/50 shadow-md"
                          : "border-slate-700/80 hover:border-slate-500"
                      }`}
                    >
                      <CardHeader className="p-0 pb-1.5">
                        <div className="flex items-center justify-between gap-1.5">
                          <div className="flex items-center gap-2">
                            <div className="flex size-7 items-center justify-center rounded bg-black/50 p-0.5">
                              <PixelSprite
                                frames={spritePortrait.frames}
                                palette={spritePortrait.palette}
                                label={spritePortrait.label}
                                scale={1.1}
                                className={portraitMotionClass(spritePortrait.motion, false)}
                              />
                            </div>
                            <div>
                              <CardTitle className="text-xs font-black text-slate-100">
                                {character.name}
                              </CardTitle>
                              <CardDescription className="text-[9px] text-slate-400">
                                {character.identity.split("·")[0]}
                              </CardDescription>
                            </div>
                          </div>
                          <Badge variant="outline" className="border-orange-500/40 text-[9px] text-orange-300">
                            {character.faction.split("与")[0]}
                          </Badge>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-1 p-0 text-[10px] leading-tight text-slate-300">
                        <p className="line-clamp-2 text-slate-400">{character.publicGoal}</p>
                        <div className="rounded bg-orange-950/40 p-1 text-[10px] text-orange-300">
                          <strong>私密动机：</strong>
                          <span className="line-clamp-1">{character.privateGoal}</span>
                        </div>
                      </CardContent>

                      <CardFooter className="mt-1.5 p-0">
                        <Button
                          variant={isSelected ? "default" : "outline"}
                          size="xs"
                          className={cn(
                            "h-6 w-full text-[10px] font-bold",
                            isSelected ? "bg-[#e2622c] text-black" : "border-slate-700 text-slate-300",
                          )}
                        >
                          {isSelected ? "已选定此身份" : `扮演 ${character.name}`}
                        </Button>
                      </CardFooter>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* 4 位 Agent 预览 */}
            <div className="rounded-lg border border-white/10 bg-black/30 p-2">
              <div className="mb-1 flex items-center justify-between text-[11px]">
                <span className="flex items-center gap-1 font-bold text-slate-300">
                  <Bot className="size-3 text-orange-400" />
                  <span>本场 4 位独立 Agent 利益博弈方：</span>
                </span>
                <span className="font-mono text-[10px] text-slate-400">各怀死守与自救底线</span>
              </div>
              <div className="grid grid-cols-2 gap-1 text-[10px] sm:grid-cols-4">
                {agents.map((agent: MockAgentCharacter) => (
                  <div key={agent.id} className="rounded bg-white/5 px-2 py-1">
                    <span className="font-bold text-orange-300">{agent.name}</span>
                    <span className="text-slate-400"> ({agent.identity.split("·")[0]})</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
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
