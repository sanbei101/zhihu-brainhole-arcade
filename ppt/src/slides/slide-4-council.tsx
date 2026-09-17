import {
  Check,
  CircleDot,
  Clock3,
  GitFork,
  ScrollText,
  Shield,
  TrendingDown,
  Users,
} from "lucide-react";
import { useState } from "react";

import { PixelSprite } from "@/components/pixel/pixel-sprite";
import { portraitFor, portraitMotionClass } from "@/components/pixel/portraits";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getSkin, isDarkSkin, skinStyleVars, type ScenarioSkin } from "@/lib/scenario-skin";

import { useMockGame } from "../mock/game-state";
import { type MockAgentCharacter, type MockDecisionOption } from "../mock/preset-data";

export function Slide4Council({ skin: _defaultSkin }: { skin: ScenarioSkin }) {
  const { selectedPlayer, agents, options, selectedOption, setSelectedOptionId } =
    useMockGame();
  const skin = getSkin("apocalypse");
  const [activeTab, setActiveTab] = useState<string>("council");

  const playerPortrait = portraitFor(selectedPlayer, skin);

  return (
    <main
      style={skinStyleVars(skin)}
      className={`bg-background text-foreground relative flex size-full h-screen flex-col justify-between overflow-hidden select-none ${
        isDarkSkin(skin) ? "dark" : ""
      }`}
    >
      {/* 🏛️ 廷议 Header 条：16:9 紧凑适配 */}
      <section className="shrink-0 border-b border-white/10 bg-[#26201d]/70 px-4 py-1.5 sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <Badge className="bg-[#e2622c] font-mono text-[10px] text-black font-bold">回合 01</Badge>
            <Badge variant="outline" className="border-orange-500/40 text-[10px] text-orange-300">
              <CircleDot className="size-2.5 text-[#e2622c] mr-1" />
              ACT I / 起手破局
            </Badge>
            <Badge variant="outline" className="border-red-500/40 text-[10px] text-red-400">
              <TrendingDown className="size-2.5 mr-1" />
              大势严寒熵增 -2/回合
            </Badge>
            <span className="text-xs font-black text-slate-100 sm:text-sm">
              主线焦点：冰河压境 · 开闸放粮抑或死守关防？
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden xl:flex items-center gap-1.5 font-mono text-[10px] text-slate-400">
              <Clock3 className="size-3 text-orange-400" />
              <span>松花江双堡关 · 零下43℃</span>
            </div>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
            <TabsList className="h-7 bg-black/40">
              <TabsTrigger value="council" className="h-6 px-2 text-[10px] font-bold">
                <Users className="size-3 mr-1" />
                议事现场
              </TabsTrigger>
              <TabsTrigger value="messages" className="h-6 px-2 text-[10px]">
                <ScrollText className="size-3 mr-1" />
                历史记录
              </TabsTrigger>
              <TabsTrigger value="branches" className="h-6 px-2 text-[10px]">
                <GitFork className="size-3 mr-1" />
                世界线
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
    </section>

      {/* ⚔️ 核心 16:9 三栏全景战局沙盘 (SeatsPanel + SpeechStage/DecisionPanel + WorldTabs) */}
      <section className="mx-auto w-full max-w-7xl flex-1 px-4 py-2 sm:px-6 sm:py-2.5">
        <div className="grid h-full grid-cols-1 gap-2.5 lg:grid-cols-12 lg:gap-3.5">
          {/* 左栏：100% SeatsPanel (玩家席位 + 4 路 Agent 席位，占 3 列) */}
          <div className="flex flex-col justify-between gap-2.5 rounded-xl border border-white/10 bg-[#26201d]/90 p-3 shadow-md lg:col-span-3">
            {/* 玩家席位 */}
            <div className="rounded-xl border-2 border-orange-500/50 bg-orange-950/50 p-2.5 shadow-sm">
              <div className="flex items-center justify-between text-[10px] font-mono text-orange-400">
                <span className="font-bold">ACTIVE PLAYER</span>
                <span className="rounded bg-orange-500 px-1 py-0.2 font-black text-black text-[9px]">掌印执棋</span>
              </div>
              <div className="mt-1.5 flex items-center gap-2.5">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-black/70 p-1 shadow-inner">
                  <PixelSprite
                    frames={playerPortrait.frames}
                    palette={playerPortrait.palette}
                    label={playerPortrait.label}
                    scale={1.8}
                    className={portraitMotionClass(playerPortrait.motion, false)}
                  />
                </div>
                <div className="min-w-0">
                  <span className="block text-sm font-black text-slate-100 truncate">{selectedPlayer.name}</span>
                  <span className="block text-xs font-bold text-orange-300 truncate">{selectedPlayer.identity.split("·")[0]}</span>
                </div>
              </div>
              <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-slate-300">{selectedPlayer.publicGoal}</p>
            </div>

            {/* 4 位 Agent 议事席位 */}
            <div className="space-y-1.5 flex-1 flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-white/10 pb-1 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 font-bold text-slate-200">
                  <Users className="size-3.5 text-orange-400" />
                  <span>四方势力席位 (Seats)</span>
                </span>
                <span className="text-[10px]">博弈态势</span>
              </div>

              <div className="space-y-1.5">
                {agents.map((agent: MockAgentCharacter) => {
                  const spritePortrait = portraitFor(agent, skin);
                  const forecastLean = selectedOption.forecast.find(
                    (f) => f.agentId === agent.id,
                  )?.lean;
                  return (
                    <div
                      key={agent.id}
                      className="rounded-lg border border-white/10 bg-black/40 px-2.5 py-1.5 text-xs shadow-xs"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex size-8 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/10 p-0.5">
                            <PixelSprite
                              frames={spritePortrait.frames}
                              palette={spritePortrait.palette}
                              label={spritePortrait.label}
                              scale={1.3}
                              className={portraitMotionClass(spritePortrait.motion, false)}
                            />
                          </div>
                          <div>
                            <span className="font-bold text-slate-200 text-xs">{agent.name}</span>
                            <span className="ml-1 text-[10px] text-slate-400">({agent.identity.split("·")[0]})</span>
                          </div>
                        </div>
                        <span
                          className={`rounded px-1.5 py-0.5 text-[10px] font-bold ${
                            forecastLean === "支持"
                              ? "bg-emerald-950 text-emerald-400 border border-emerald-500/40"
                              : forecastLean === "反对"
                                ? "bg-red-950 text-red-400 border border-red-500/40"
                                : "bg-amber-950 text-amber-400 border border-amber-500/40"
                          }`}
                        >
                          {forecastLean ?? agent.attitude}
                        </span>
                      </div>
                      {/* 信任度血条 */}
                      <div className="mt-1 flex items-center gap-2 text-[10px] text-slate-400">
                        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-800">
                          <div
                            className={`h-full rounded-full transition-all ${
                              agent.trust > 60
                                ? "bg-emerald-500"
                                : agent.trust > 40
                                  ? "bg-amber-500"
                                  : "bg-red-500"
                            }`}
                            style={{ width: `${agent.trust}%` }}
                          />
                        </div>
                        <span className="font-mono font-bold text-slate-300">{agent.trust}%</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 中栏：SpeechStage 像素舞台 + DecisionPanel 梯度抉择 (占 6 列) */}
          <div className="flex flex-col justify-between gap-2.5 lg:col-span-6">
            {/* 🎭 SpeechStage 极寒暗黑对峙舞台 (突出立绘对决) */}
            <div className="rounded-xl border border-white/15 bg-gradient-to-b from-black/85 via-black/95 to-black/85 p-3 shadow-md">
              <div className="flex items-center justify-between border-b border-white/10 pb-1 text-xs">
                <span className="font-mono font-bold text-orange-400">
                  【沈寒山 vs 燕崇山 · 矛与盾尖锐交锋】
                </span>
                <span className="rounded bg-red-950 px-2 py-0.5 font-mono text-[10px] font-bold text-red-400 border border-red-500/40">
                  短兵相接
                </span>
              </div>

              {/* 两个立绘对峙 */}
              <div className="flex items-center justify-around py-2">
                <div className="flex flex-col items-center gap-1.5">
                  <div className="flex size-14 items-center justify-center rounded-xl border-2 border-cyan-500/50 bg-slate-900 p-1 shadow-md">
                    <PixelSprite
                      frames={portraitFor(agents[2], skin).frames}
                      palette={portraitFor(agents[2], skin).palette}
                      label={agents[2].name}
                      scale={2.2}
                      className={portraitMotionClass(portraitFor(agents[2], skin).motion, true)}
                    />
                  </div>
                  <span className="text-xs font-bold text-cyan-300">{agents[2].name}</span>
                </div>

                <div className="flex flex-col items-center gap-0.5 font-mono text-base font-black text-amber-400 animate-pulse">
                  <span>⚔️</span>
                  <span>VS</span>
                </div>

                <div className="flex flex-col items-center gap-1.5">
                  <div className="flex size-14 items-center justify-center rounded-xl border-2 border-red-500/50 bg-slate-900 p-1 shadow-md">
                    <PixelSprite
                      frames={portraitFor(agents[0], skin).frames}
                      palette={portraitFor(agents[0], skin).palette}
                      label={agents[0].name}
                      scale={2.2}
                      className={portraitMotionClass(portraitFor(agents[0], skin).motion, true)}
                    />
                  </div>
                  <span className="text-xs font-bold text-red-400">{agents[0].name}</span>
                </div>
              </div>

              {/* 动态对话气泡 */}
              <div className="rounded-lg border border-white/10 bg-white/5 p-2.5 text-xs leading-relaxed text-slate-200">
                <strong className="text-cyan-300">沈寒山厉声：</strong>
                <span>“极端寒潮提前二十三天到来，夜间跌破零下五十五度！你闭关死守不是守土，是替暴风雪屠杀三百万同胞！”</span>
              </div>
            </div>

            {/* 🎲 DecisionPanel (ABCD 梯度抉择卡：大字清晰排版) */}
            <div className="space-y-2 rounded-xl border border-white/10 bg-[#26201d]/90 p-3 shadow-md flex-1 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-200">拟草决策 · 推动世界线分叉</span>
                <span className="text-slate-400 text-[11px]">掌握起草权，点击即刻联动全局指标</span>
              </div>

              <div className="space-y-2 flex-1 flex flex-col justify-between">
                {options.map((opt: MockDecisionOption) => {
                  const isSelected = opt.id === selectedOption.id;
                  const isEpic = opt.id === "D";
                  return (
                    <div
                      key={opt.id}
                      onClick={() => setSelectedOptionId(opt.id)}
                      className={`cursor-pointer rounded-xl border p-2.5 transition-all ${
                        isSelected
                          ? isEpic
                            ? "border-amber-400 bg-amber-950/60 shadow-md ring-2 ring-amber-400/50 scale-[1.01]"
                            : "border-[#e2622c] bg-orange-950/60 shadow-md ring-2 ring-[#e2622c]/50 scale-[1.01]"
                          : "border-white/10 bg-black/30 hover:border-white/20 hover:bg-white/5"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span
                            className={`flex size-5 items-center justify-center rounded font-mono text-xs font-black text-black ${
                              isEpic ? "bg-amber-400" : "bg-orange-500"
                            }`}
                          >
                            {opt.id}
                          </span>
                          <strong className="text-xs sm:text-sm font-bold text-slate-100">{opt.title}</strong>
                        </div>
                        <Badge variant="outline" className="h-5 border-white/20 px-1.5 text-[10px] text-slate-300">
                          {opt.risk}档抉择
                        </Badge>
                      </div>

                      <p className="mt-1 text-xs text-slate-300 leading-normal line-clamp-1">{opt.desc}</p>

                      {opt.epigraph && (
                        <div className="mt-1.5 rounded border border-amber-500/40 bg-amber-950/50 px-2.5 py-1 text-xs font-bold text-amber-200">
                          🌟 天命破壁: “{opt.epigraph}”
                        </div>
                      )}

                      {/* 指标预测 */}
                      <div className="mt-1.5 flex items-center justify-between border-t border-white/5 pt-1 text-[11px] font-mono text-slate-400">
                        <div className="flex gap-3">
                          <span>稳定: <strong className={opt.deltas.stability >= 0 ? "text-emerald-400" : "text-red-400"}>{opt.impactText.stability}</strong></span>
                          <span>士气: <strong className={opt.deltas.morale >= 0 ? "text-emerald-400" : "text-red-400"}>{opt.impactText.morale}</strong></span>
                          <span>民心: <strong className={opt.deltas.support >= 0 ? "text-emerald-400" : "text-red-400"}>{opt.impactText.support}</strong></span>
                          <span>物资: <strong className={opt.deltas.resources >= 0 ? "text-emerald-400" : "text-red-400"}>{opt.impactText.resources}</strong></span>
                        </div>
                        {isSelected ? (
                          <span className="flex items-center gap-1 font-bold text-orange-400 text-xs">
                            <Check className="size-3.5" />
                            已拟定落子
                          </span>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 右栏：WorldTabs / 四维极寒存续动态账本 (占 3 列) */}
          <div className="flex flex-col justify-between gap-2 rounded-xl border border-white/10 bg-[#26201d]/90 p-2.5 shadow-md lg:col-span-3">
            <div className="space-y-2">
              <div className="flex items-center justify-between border-b border-white/10 pb-1 text-[10px] font-mono text-slate-400">
                <span className="flex items-center gap-1 font-bold text-slate-300">
                  <Shield className="size-3 text-orange-400" />
                  <span>四维存续动态账本</span>
                </span>
                <span>GAUGES</span>
              </div>

              <div className="space-y-2 pt-1">
                {[
                  { label: "秩序稳定", key: "stability", value: 85, delta: selectedOption.deltas.stability },
                  { label: "军民士气", key: "morale", value: 92, delta: selectedOption.deltas.morale },
                  { label: "难民支持", key: "support", value: 95, delta: selectedOption.deltas.support },
                  { label: "战略物资", key: "resources", value: 78, delta: selectedOption.deltas.resources },
                ].map((m) => (
                  <div key={m.key} className="rounded border border-white/5 bg-black/20 p-1.5 text-[10px]">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">{m.label}</span>
                      <div className="flex items-center gap-1 font-mono">
                        <span className="font-black text-slate-100">{m.value}</span>
                        <span
                          className={`font-bold ${
                            m.delta > 0
                              ? "text-emerald-400"
                              : m.delta < 0
                                ? "text-red-400"
                                : "text-slate-500"
                          }`}
                        >
                          ({m.delta > 0 ? `+${m.delta}` : m.delta})
                        </span>
                      </div>
                    </div>
                    <div className="mt-1 h-1 overflow-hidden rounded-full bg-slate-800">
                      <div
                        className={`h-full rounded-full transition-all ${
                          m.value > 80 ? "bg-emerald-500" : m.value > 50 ? "bg-orange-500" : "bg-red-500"
                        }`}
                        style={{ width: `${m.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 严寒大势熵增定律 */}
            <div className="rounded-lg border border-red-500/30 bg-red-950/30 p-2 text-[10px] leading-tight text-red-300">
              <div className="flex items-center gap-1 font-bold text-red-400">
                <TrendingDown className="size-3" />
                <span>极寒大势熵增定律</span>
              </div>
              <p className="mt-0.5 text-slate-400">
                严寒损耗不可逆（-2/回合），杜绝消极防守，逼迫决策者做出战略破局！
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 底部确认栏 */}
      <footer className="relative z-30 shrink-0 border-t border-white/10 bg-black/60 px-4 py-2 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <GitFork className="size-4 text-[#e2622c]" />
            <span className="text-slate-400">已拟草决策：</span>
            <strong className="text-slate-100">
              [{selectedOption.id}项] {selectedOption.title}
            </strong>
          </div>
          <span className="font-mono text-[11px] font-bold text-orange-400">
            下一幕：智能体当场表态与交锋 (Speech Stage) ➔ (按空格键或右方向键)
          </span>
        </div>
      </footer>
    </main>
  );
}
