import {
  Check,
  CircleDot,
  Clock3,
  GitFork,
  Shield,
  TrendingDown,
  Users,
} from "lucide-react";

import { PixelSprite } from "@/components/pixel/pixel-sprite";
import { portraitFor, portraitMotionClass } from "@/components/pixel/portraits";
import { ThemeScene } from "@/components/pixel/theme-scene";
import { Badge } from "@/components/ui/badge";
import type { ScenarioSkin } from "@/lib/scenario-skin";

import { useMockGame } from "../mock/game-state";
import { type MockAgentCharacter, type MockDecisionOption } from "../mock/preset-data";

export function Slide4Council({ skin }: { skin: ScenarioSkin }) {
  const { selectedPlayer, agents, options, selectedOption, setSelectedOptionId, metrics } =
    useMockGame();

  return (
    <div className="relative flex size-full max-h-full scrollbar-none flex-col justify-between gap-2.5 overflow-y-auto rounded-2xl border border-white/80 bg-white/90 p-3 text-slate-900 shadow-2xl backdrop-blur-md sm:gap-3.5 sm:p-5 lg:p-6">
      {/* 顶部原版像素条 Banner */}
      <ThemeScene
        skin={skin}
        variant="strip"
        className="border-border h-10 shrink-0 rounded-lg border"
      />

      {/* 原版廷议看板 Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/80 pb-2.5">
        <div>
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <Badge className="bg-[#0066ff]">回合 01</Badge>
            <Badge variant="outline">
              <CircleDot className="size-3 text-[#0066ff]" />
              ACT I / 起手变局
            </Badge>
            <Badge variant="outline" className="gap-1 border-red-200 text-red-600">
              <TrendingDown className="size-3" />
              大势每回合流失 2
            </Badge>
            <Badge variant="secondary">三国乐园 · {selectedPlayer.name}掌印</Badge>
          </div>
          <div className="mt-1 flex items-center gap-2">
            <h2 className="text-base font-black text-slate-900 sm:text-lg">危机议事大厅</h2>
            <span className="font-mono text-xs text-slate-500">
              主线焦点: 赤壁全胜 · 杀降抑或怀柔？
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1 font-mono text-xs text-slate-500">
          <Clock3 className="size-3.5 text-slate-400" />
          <span>建安十三年冬十二月 · 许昌中军相府</span>
        </div>
      </div>

      {/* 核心原版三栏全景战局同屏沙盘 */}
      <div className="my-auto grid grid-cols-1 items-start gap-3 lg:grid-cols-12 lg:gap-4">
        {/* 左栏：复刻 SeatsPanel 四路 Agent 席位（占 3 列） */}
        <div className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white/95 p-3 shadow-xs lg:col-span-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
            <span className="flex items-center gap-1.5 font-mono text-xs font-black text-slate-900">
              <Users className="size-3.5 text-[#0066ff]" />
              <span>议事席位 (SeatsPanel)</span>
            </span>
            <span className="font-mono text-[10px] text-slate-400">AGENTS</span>
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
                  className="rounded-lg border border-slate-200/80 bg-slate-50/70 p-2 text-xs transition-all hover:bg-slate-100"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex size-6 items-center justify-center overflow-hidden rounded bg-white p-0.5 shadow-xs">
                        <PixelSprite
                          frames={spritePortrait.frames}
                          palette={spritePortrait.palette}
                          label={spritePortrait.label}
                          scale={1.1}
                          className={portraitMotionClass(spritePortrait.motion, false)}
                        />
                      </div>
                      <div>
                        <strong className="text-xs font-bold text-slate-900">{agent.name}</strong>
                        <span className="ml-1 text-[10px] text-slate-400">
                          ({agent.identity.split("·")[0]})
                        </span>
                      </div>
                    </div>
                    <span
                      className={`py-0.2 rounded px-1.5 text-[10px] font-bold ${
                        forecastLean === "支持"
                          ? "bg-emerald-100 text-emerald-800"
                          : forecastLean === "反对"
                            ? "bg-red-100 text-red-800"
                            : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {forecastLean ?? agent.attitude}
                    </span>
                  </div>

                  {/* 信任度进度条 */}
                  <div className="mt-1.5 flex items-center justify-between gap-2 text-[10px] text-slate-500">
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${
                          agent.trust > 60
                            ? "bg-emerald-500"
                            : agent.trust > 40
                              ? "bg-blue-500"
                              : "bg-red-500"
                        }`}
                        style={{ width: `${agent.trust}%` }}
                      />
                    </div>
                    <span className="font-mono font-bold">{agent.trust}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 中栏：复刻 DecisionPanel 梯度抉择（占 6 列） */}
        <div className="flex flex-col gap-2.5 rounded-xl border-2 border-blue-200 bg-white/95 p-3.5 shadow-sm lg:col-span-6">
          <div className="rounded-lg border border-blue-100 bg-blue-50/60 p-2 text-xs leading-relaxed text-slate-800">
            <span className="font-black text-[#0066ff]">【大营战局】</span>
            曹操于赤壁生擒刘备孙权押赴许昌。程昱厉声主杀以立军威，孔融清流名士高呼汉法，天下目光皆聚焦于【
            {selectedPlayer.name}】如何落子拟诏。
          </div>

          {/* ABCD 选项 */}
          <div className="space-y-2">
            {options.map((opt: MockDecisionOption) => {
              const isSelected = opt.id === selectedOption.id;
              const isEpic = opt.id === "D";
              return (
                <div
                  key={opt.id}
                  onClick={() => setSelectedOptionId(opt.id)}
                  className={`group relative cursor-pointer rounded-xl border-2 p-2.5 text-xs transition-all ${
                    isSelected
                      ? isEpic
                        ? "border-amber-500 bg-amber-50/70 shadow-md ring-2 ring-amber-400/30"
                        : "border-[#0066ff] bg-blue-50/70 shadow-md ring-2 ring-[#0066ff]/20"
                      : "border-slate-200 bg-slate-50/50 hover:border-slate-300 hover:bg-slate-100/60"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span
                        className={`flex size-5 items-center justify-center rounded-md font-mono text-xs font-black text-white ${
                          isEpic
                            ? "bg-amber-600"
                            : opt.risk === "稳"
                              ? "bg-emerald-600"
                              : opt.risk === "险"
                                ? "bg-blue-600"
                                : "bg-purple-600"
                        }`}
                      >
                        {opt.id}
                      </span>
                      <strong className="text-xs font-black text-slate-900 sm:text-sm">
                        {opt.title}
                      </strong>
                    </div>
                    <Badge variant={isEpic ? "default" : "secondary"} className="h-5 text-[10px]">
                      {opt.risk}档魄力
                    </Badge>
                  </div>

                  <p className="mt-1 text-[11px] leading-relaxed text-slate-600">{opt.desc}</p>

                  {/* 🌟 天命破壁燃向誓言金句 */}
                  {opt.epigraph && (
                    <div className="mt-1.5 rounded-md border border-amber-300/80 bg-gradient-to-r from-amber-100/90 via-amber-50 to-white px-2 py-1 text-[11px] font-bold text-amber-900">
                      🌟 天命破壁: “{opt.epigraph}”
                    </div>
                  )}

                  {/* 底部指标预测 */}
                  <div className="mt-2 flex flex-wrap items-center justify-between gap-1 border-t border-slate-200/60 pt-1.5 text-[10px]">
                    <div className="flex items-center gap-2 font-mono">
                      <span className="text-slate-500">
                        稳定:{" "}
                        <strong
                          className={
                            opt.deltas.stability >= 0 ? "text-emerald-700" : "text-red-600"
                          }
                        >
                          {opt.impactText.stability}
                        </strong>
                      </span>
                      <span className="text-slate-500">
                        军心:{" "}
                        <strong
                          className={opt.deltas.morale >= 0 ? "text-emerald-700" : "text-red-600"}
                        >
                          {opt.impactText.morale}
                        </strong>
                      </span>
                      <span className="text-slate-500">
                        民心:{" "}
                        <strong
                          className={opt.deltas.support >= 0 ? "text-emerald-700" : "text-red-600"}
                        >
                          {opt.impactText.support}
                        </strong>
                      </span>
                      <span className="text-slate-500">
                        资源:{" "}
                        <strong
                          className={
                            opt.deltas.resources >= 0 ? "text-emerald-700" : "text-red-600"
                          }
                        >
                          {opt.impactText.resources}
                        </strong>
                      </span>
                    </div>

                    {isSelected ? (
                      <span className="flex items-center gap-1 font-bold text-[#0066ff]">
                        <Check className="size-3.5" />
                        <span>已选定落子</span>
                      </span>
                    ) : (
                      <span className="text-slate-400 group-hover:text-slate-700">点击落子</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 右栏：复刻 WorldTabs / 国力动态账本（占 3 列） */}
        <div className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white/95 p-3 shadow-xs lg:col-span-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
            <span className="flex items-center gap-1.5 font-mono text-xs font-black text-slate-900">
              <Shield className="size-3.5 text-[#0066ff]" />
              <span>四维国力动态账本</span>
            </span>
            <span className="font-mono text-[10px] text-slate-400">GAUGES</span>
          </div>

          <div className="space-y-2">
            {[
              {
                label: "政权稳定",
                key: "stability",
                value: metrics.stability,
                delta: selectedOption.deltas.stability,
              },
              {
                label: "军心士气",
                key: "morale",
                value: metrics.morale,
                delta: selectedOption.deltas.morale,
              },
              {
                label: "民众支持",
                key: "support",
                value: metrics.support,
                delta: selectedOption.deltas.support,
              },
              {
                label: "战略资源",
                key: "resources",
                value: metrics.resources,
                delta: selectedOption.deltas.resources,
              },
            ].map((m) => (
              <div
                key={m.key}
                className="rounded-lg border border-slate-100 bg-slate-50/80 p-2 text-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-700">{m.label}</span>
                  <div className="flex items-center gap-1 font-mono">
                    <span className="font-black text-slate-900">{m.value}</span>
                    <span
                      className={`text-[10px] font-bold ${
                        m.delta > 0
                          ? "text-emerald-600"
                          : m.delta < 0
                            ? "text-red-600"
                            : "text-slate-400"
                      }`}
                    >
                      ({m.delta > 0 ? `+${m.delta}` : m.delta})
                    </span>
                  </div>
                </div>
                <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      m.value > 70 ? "bg-emerald-500" : m.value > 40 ? "bg-blue-500" : "bg-red-500"
                    }`}
                    style={{ width: `${m.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* 大势熵增说明 */}
          <div className="mt-auto rounded-lg border border-red-200 bg-red-50/60 p-2 text-[11px] leading-snug text-red-900">
            <div className="flex items-center gap-1 font-bold text-red-700">
              <TrendingDown className="size-3.5" />
              <span>大势熵增定律</span>
            </div>
            <p className="mt-1 text-[10px] text-red-800">
              局势损耗不可逆增加（-2/回合），杜绝消极苟活，逼迫玩家做出战略破局。
            </p>
          </div>
        </div>
      </div>

      {/* 底部确认栏 */}
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white/95 px-4 py-2 text-xs text-slate-700 shadow-xs sm:text-sm">
        <span className="flex items-center gap-2">
          <GitFork className="size-4 text-[#0066ff]" />
          <span>已提交分叉抉择：</span>
          <strong className="text-slate-900">
            [{selectedOption.id}项 · {selectedOption.risk}] {selectedOption.title}
          </strong>
        </span>
        <span className="font-mono text-xs font-bold text-[#0066ff]">
          下一幕：四路 Agent 并发表态与短兵相接交锋 ➔ (按空格键或右方向键)
        </span>
      </div>
    </div>
  );
}
