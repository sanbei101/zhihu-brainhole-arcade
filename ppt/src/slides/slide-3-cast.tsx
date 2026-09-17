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
        <div className="grid h-full grid-cols-1 gap-3 lg:grid-cols-12 lg:gap-3.5">
          {/* 左栏：世界线角色召集规则与局势设定 (占 3 列，紧凑精致) */}
          <aside className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#26201d]/90 p-3 shadow-md lg:col-span-3">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                <Badge variant="secondary" className="bg-orange-950/60 text-[10px] text-orange-400">
                  WORLDLINE / CAST
                </Badge>
                <span className="font-mono text-[10px] text-slate-400">STAGE 2</span>
              </div>
              <h2 className="text-sm font-black text-slate-100 sm:text-base">世界线推演与角色召集</h2>
              <p className="text-xs leading-relaxed text-slate-400">
                北纬四十度冰盖南压，零下四十三度寒风封江。三百万北方幸存者南迁撞上闭锁关隘。
              </p>
              <ol className="space-y-2 pt-1 text-xs text-slate-300">
                <li className="flex gap-2">
                  <span className="flex size-4.5 shrink-0 items-center justify-center rounded bg-orange-950/80 font-mono text-[10px] font-bold text-orange-400">01</span>
                  <span>建立时间、地点与极寒资源命门</span>
                </li>
                <li className="flex gap-2">
                  <span className="flex size-4.5 shrink-0 items-center justify-center rounded bg-orange-950/80 font-mono text-[10px] font-bold text-orange-400">02</span>
                  <span>生成权力来源不同的玩家候选角色</span>
                </li>
                <li className="flex gap-2">
                  <span className="flex size-4.5 shrink-0 items-center justify-center rounded bg-orange-950/80 font-mono text-[10px] font-bold text-orange-400">03</span>
                  <span>配置独立 Agent 扮演的利益博弈方</span>
                </li>
              </ol>
            </div>

            {/* 场景时空设定框 */}
            <div className="rounded-lg border border-orange-500/40 bg-orange-950/40 p-2.5 text-xs text-orange-300">
              <span className="font-bold">局势时空：</span>
              <p className="mt-0.5 font-mono text-[11px] text-orange-200">冰河第140天 · 松花江双堡关 · 零下43℃</p>
            </div>
          </aside>

          {/* 右栏：开场横幅 + 选择你的角色 3 张大卡片 + 4 路 Agent (占 9 列) */}
          <section className="flex flex-col justify-between gap-2.5 lg:col-span-9">
            {/* 开场危机条 */}
            <div className="rounded-xl border border-l-4 border-orange-500 border-white/10 bg-black/50 px-4 py-2 shadow-xs">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[11px] font-bold text-orange-400">ACT I / OPENING · 绝境开场</p>
                <span className="font-mono text-[11px] text-slate-400">三百万人的南迁命门</span>
              </div>
              <p className="mt-1 text-xs leading-relaxed text-slate-200">
                零下四十三度的寒风卷着冰晶，封冻江面上蜿蜒着三百万大迁徙队伍。关隘上重机枪冰冷，关隘下婴儿啼哭。放，则南方粮仓被吃穿；不放，则关外冻尸千里。
              </p>
            </div>

            {/* 3 位玩家候选角色卡片：大尺寸立绘与清晰排版 */}
            <div className="flex-1 flex flex-col justify-between">
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <UserRound className="size-4 text-orange-400" />
                  <span className="text-sm font-black text-slate-100">选择你的扮演角色（点击立局）</span>
                </div>
                <span className="text-xs text-slate-400">选择后揭示该角色私密动机与破局底线</span>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 flex-1">
                {players.map((character: MockPlayerCharacter) => {
                  const isSelected = character.id === selectedPlayer.id;
                  const spritePortrait = portraitFor(character, skin);

                  return (
                    <Card
                      key={character.id}
                      onClick={() => setSelectedPlayerId(character.id)}
                      className={`cursor-pointer flex flex-col justify-between border-2 bg-[#26201d]/95 p-3.5 shadow-md transition-all ${
                        isSelected
                          ? "border-[#e2622c] bg-orange-950/50 ring-2 ring-orange-500/60 shadow-lg scale-[1.01]"
                          : "border-slate-700/80 hover:border-slate-500 hover:bg-black/30"
                      }`}
                    >
                      <CardHeader className="p-0 pb-2">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-3">
                            <div className="flex size-14 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-black/70 p-1 shadow-inner">
                              <PixelSprite
                                frames={spritePortrait.frames}
                                palette={spritePortrait.palette}
                                label={spritePortrait.label}
                                scale={2.2}
                                className={portraitMotionClass(spritePortrait.motion, false)}
                              />
                            </div>
                            <div>
                              <CardTitle className="text-base font-black text-slate-100">
                                {character.name}
                              </CardTitle>
                              <CardDescription className="mt-0.5 text-xs font-medium text-slate-400">
                                {character.identity.split("·")[0]}
                              </CardDescription>
                            </div>
                          </div>
                          <Badge variant="outline" className="border-orange-500/50 text-[10px] font-bold text-orange-300">
                            {character.faction.split("与")[0]}
                          </Badge>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-2 p-0 text-xs leading-relaxed text-slate-300 flex-1 flex flex-col justify-around">
                        <p className="text-slate-300 leading-normal line-clamp-3">{character.publicGoal}</p>
                        <div className="rounded-lg border border-orange-500/30 bg-orange-950/60 p-2 text-xs text-orange-200">
                          <strong className="text-orange-400">私密动机：</strong>
                          <span>{character.privateGoal}</span>
                        </div>
                      </CardContent>

                      <CardFooter className="mt-2.5 p-0">
                        <Button
                          variant={isSelected ? "default" : "outline"}
                          size="sm"
                          className={cn(
                            "h-8 w-full text-xs font-bold shadow-xs",
                            isSelected ? "bg-[#e2622c] text-black hover:bg-orange-500" : "border-slate-700 text-slate-200 hover:bg-white/10",
                          )}
                        >
                          {isSelected ? "✓ 已选定此执棋身份" : `扮演 ${character.name}`}
                        </Button>
                      </CardFooter>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* 4 位 Agent 预览卡片 */}
            <div className="rounded-xl border border-white/10 bg-black/40 p-2.5 shadow-xs">
              <div className="mb-1.5 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 font-bold text-slate-300">
                  <Bot className="size-3.5 text-orange-400" />
                  <span>本场 4 位独立 Agent 利益博弈方：</span>
                </span>
                <span className="font-mono text-[11px] text-slate-400">多智能体并发决策 · 各怀死守与自救底线</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs sm:grid-cols-4">
                {agents.map((agent: MockAgentCharacter) => {
                  const agentSprite = portraitFor(agent, skin);
                  return (
                    <div key={agent.id} className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/5 px-2.5 py-1.5">
                      <div className="flex size-7 shrink-0 items-center justify-center rounded bg-black/60 p-0.5">
                        <PixelSprite
                          frames={agentSprite.frames}
                          palette={agentSprite.palette}
                          label={agentSprite.label}
                          scale={1.1}
                          className={portraitMotionClass(agentSprite.motion, false)}
                        />
                      </div>
                      <div className="min-w-0">
                        <span className="block font-black text-orange-300 truncate">{agent.name}</span>
                        <span className="block text-[10px] text-slate-400 truncate">{agent.identity.split("·")[0]}</span>
                      </div>
                    </div>
                  );
                })}
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
