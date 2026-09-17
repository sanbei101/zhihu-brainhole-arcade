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
  UserRound,
} from "lucide-react";

import { PixelSprite } from "@/components/pixel/pixel-sprite";
import { portraitFor, portraitMotionClass } from "@/components/pixel/portraits";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
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
      {/* 🏞️ 极寒冰原 Strip 与话题英雄栏：16:9 紧凑适配 */}
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

      {/* 🎭 核心 16:9 双半区：左半边保留人物卡片，右半边用于 PPT 文字解释 */}
      <section className="mx-auto w-full max-w-7xl flex-1 px-4 py-2.5 sm:px-6 sm:py-3 overflow-hidden">
        <div className="grid h-full grid-cols-1 gap-3.5 lg:grid-cols-12 lg:gap-4">
          {/* 👈 左半边（占 6 列）：保留 3 位角色卡片与 4 位 Agent 预览 */}
          <section className="flex flex-col justify-between gap-2 lg:col-span-6 h-full overflow-hidden">
            {/* 开场危机条 */}
            <div className="rounded-xl border border-l-4 border-orange-500 border-white/10 bg-black/50 px-3.5 py-1.5 shadow-xs shrink-0">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[11px] font-bold text-orange-400 flex items-center gap-1.5">
                  <UserRound className="size-3.5" />
                  <span>选择你的执棋角色（点击立局）</span>
                </p>
                <span className="font-mono text-[10px] text-slate-400">零下43℃ · 双堡关下</span>
              </div>
            </div>

            {/* 3 位主角候选卡片（垂直三段排布） */}
            <div className="grid grid-cols-1 gap-2 flex-1 overflow-hidden">
              {players.map((character: MockPlayerCharacter) => {
                const isSelected = character.id === selectedPlayer.id;
                const spritePortrait = portraitFor(character, skin);

                return (
                  <Card
                    key={character.id}
                    onClick={() => setSelectedPlayerId(character.id)}
                    className={`cursor-pointer flex flex-col justify-between border-2 bg-[#26201d]/95 p-2.5 shadow-md transition-all ${
                      isSelected
                        ? "border-[#e2622c] bg-orange-950/50 ring-2 ring-orange-500/60 shadow-lg scale-[1.01]"
                        : "border-slate-700/80 hover:border-slate-500 hover:bg-black/30"
                    }`}
                  >
                    <CardHeader className="p-0 pb-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-black/70 p-1 shadow-inner">
                            <PixelSprite
                              frames={spritePortrait.frames}
                              palette={spritePortrait.palette}
                              label={spritePortrait.label}
                              scale={1.9}
                              className={portraitMotionClass(spritePortrait.motion, false)}
                            />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <CardTitle className="text-base font-black text-slate-100">
                                {character.name}
                              </CardTitle>
                              <Badge variant="outline" className="border-orange-500/50 text-[10px] font-bold text-orange-300">
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
                            isSelected ? "bg-[#e2622c] text-black hover:bg-orange-500" : "border-slate-700 text-slate-300 hover:bg-white/10",
                          )}
                        >
                          {isSelected ? "✓ 当前执政" : "选择扮演"}
                        </Button>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-1.5 p-0 text-xs leading-relaxed text-slate-300">
                      <p className="text-slate-300 leading-normal line-clamp-2">
                        <strong className="text-slate-200">公开主张：</strong>
                        {character.publicGoal}
                      </p>
                      <div className="rounded border border-orange-500/30 bg-orange-950/60 px-2 py-1 text-xs text-orange-200 flex items-start gap-1">
                        <Lock className="size-3 shrink-0 text-orange-400 mt-0.5" />
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
            <div className="rounded-xl border border-white/10 bg-black/40 p-2 shadow-xs shrink-0">
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
                    <div key={agent.id} className="flex items-center gap-1.5 rounded border border-white/5 bg-white/5 px-2 py-1">
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
                        <span className="block font-black text-orange-300 text-[11px] truncate">{agent.name}</span>
                        <span className="block text-[9px] text-slate-400 truncate">{agent.identity.split("·")[0]}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* 👉 右半边（占 6 列）：用于 PPT 文字解释（大字号、专业排版与架构亮点） */}
          <aside className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#26201d]/95 p-4 shadow-xl lg:col-span-6 h-full overflow-hidden">
            {/* 标题栏 */}
            <div className="border-b border-white/10 pb-2.5 shrink-0">
              <div className="flex items-center justify-between">
                <Badge className="bg-[#e2622c] text-[11px] font-black text-black">
                  STAGE 01 · 破题立局与角色生成
                </Badge>
                <span className="font-mono text-xs font-bold text-orange-400">WORLDLINE / CASTING</span>
              </div>
              <h2 className="mt-1.5 text-base sm:text-lg font-black text-slate-100 flex items-center gap-2">
                <Compass className="size-5 text-orange-400 shrink-0" />
                <span>知乎高赞母本具象化：从静态答题到多方沙盘</span>
              </h2>
              <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                以知乎 7.7w+ 赞爆款问题《假如地球进入冰河时代》为母本，提取极限时空冲突，实时具象化为策略博弈沙盘。
              </p>
            </div>

            {/* 3 个核心设计深度解释卡片 */}
            <div className="space-y-2.5 py-2 flex-1 flex flex-col justify-around overflow-hidden">
              {/* 卡片 1 */}
              <div className="rounded-xl border border-white/10 bg-black/40 p-3 shadow-xs">
                <div className="flex items-center gap-2">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-orange-950 font-mono text-xs font-black text-orange-400 border border-orange-500/30">
                    01
                  </span>
                  <h3 className="text-xs sm:text-sm font-black text-slate-100 flex items-center gap-1.5">
                    <FileText className="size-3.5 text-orange-400" />
                    <span>母本矛盾解构与时空极限定桩</span>
                  </h3>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                  提炼母本答主的科学推演脉络：<strong>北纬四十度冰盖封江、零下43℃极寒风暴、三百万南迁难民被阻于双堡关下</strong>。将文学假设拆解为具有物理限制与倒计时压迫的生死时空。
                </p>
              </div>

              {/* 卡片 2 */}
              <div className="rounded-xl border border-white/10 bg-black/40 p-3 shadow-xs">
                <div className="flex items-center gap-2">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-orange-950 font-mono text-xs font-black text-orange-400 border border-orange-500/30">
                    02
                  </span>
                  <h3 className="text-xs sm:text-sm font-black text-slate-100 flex items-center gap-1.5">
                    <BrainCircuit className="size-3.5 text-orange-400" />
                    <span>非同质化权力结构生成（Asymmetric Casts）</span>
                  </h3>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                  拒绝单一的“全知上帝”，让玩家代入具备不同筹码与软肋的真实决策者：<strong>军垦师长</strong>（拥兵自重与兵变边缘）、<strong>守关知府</strong>（恪守朝廷律法）、<strong>部族女头人</strong>（掌控唯一的抗寒驯鹿运输线）。
                </p>
              </div>

              {/* 卡片 3 */}
              <div className="rounded-xl border border-white/10 bg-black/40 p-3 shadow-xs">
                <div className="flex items-center gap-2">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-orange-950 font-mono text-xs font-black text-orange-400 border border-orange-500/30">
                    03
                  </span>
                  <h3 className="text-xs sm:text-sm font-black text-slate-100 flex items-center gap-1.5">
                    <Sparkles className="size-3.5 text-orange-400" />
                    <span>「公开主张」与「私密暗盘」双层博弈引擎</span>
                  </h3>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                  每个角色均绑定公开交代的政治姿态与水面之下的私密动机。表面为大局共赴国难，深层各怀利益死线，为后续的<strong>多智能体廷争抉择与冲突爆发</strong>埋下绝对真实的动力机制。
                </p>
              </div>
            </div>

            {/* 底部技术注记 */}
            <div className="rounded-lg border border-orange-500/40 bg-orange-950/40 px-3 py-2 text-xs text-orange-300 shrink-0">
              <strong className="text-orange-400">💡 演示要点：</strong>
              <span>左侧点击不同角色即可即时变换开局立场与利益暗盘，驱动后续截然不同的世界线推演走向。</span>
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
