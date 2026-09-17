import {
  Check,
  CircleDot,
  Clock3,
  Compass,
  Cpu,
  GitFork,
  Scale,
  Shield,
  Sparkles,
  TrendingDown,
} from "lucide-react";

import { PixelSprite } from "@/components/pixel/pixel-sprite";
import { portraitFor, portraitMotionClass } from "@/components/pixel/portraits";
import { Badge } from "@/components/ui/badge";
import { getSkin, isDarkSkin, skinStyleVars, type ScenarioSkin } from "@/lib/scenario-skin";

import { useMockGame } from "../mock/game-state";
import { type MockAgentCharacter, type MockDecisionOption } from "../mock/preset-data";

export function Slide4Council({ skin: _defaultSkin }: { skin: ScenarioSkin }) {
  const { selectedPlayer, agents, options, selectedOption, setSelectedOptionId } = useMockGame();
  const skin = getSkin("apocalypse");

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
            <Badge className="bg-[#e2622c] font-mono text-[10px] font-bold text-black">
              回合 01
            </Badge>
            <Badge variant="outline" className="border-orange-500/40 text-[10px] text-orange-300">
              <CircleDot className="mr-1 size-2.5 text-[#e2622c]" />
              ACT I / 起手破局
            </Badge>
            <Badge variant="outline" className="border-red-500/40 text-[10px] text-red-400">
              <TrendingDown className="mr-1 size-2.5" />
              大势严寒熵增 -2/回合
            </Badge>
            <span className="text-xs font-black text-slate-100 sm:text-sm">
              主线焦点：冰河压境 · 开闸放粮抑或死守关防？
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-400">
              <Clock3 className="size-3 text-orange-400" />
              <span>松花江双堡关 · 零下43℃</span>
            </div>
          </div>
        </div>
      </section>

      {/* ⚔️ 核心 16:9 双半区：左半边用于 PPT 文字解释，右半边放人物和选项卡牌 */}
      <section className="mx-auto w-full max-w-7xl flex-1 overflow-hidden px-4 py-2.5 sm:px-6 sm:py-3">
        <div className="grid h-full grid-cols-1 gap-3.5 lg:grid-cols-12 lg:gap-4">
          {/* 👉 左半边（占 6 列）：用于 PPT 文字解释（大字号、通俗易懂说人话） */}
          <aside className="flex h-full flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#26201d]/95 p-4 shadow-xl lg:col-span-6">
            {/* 标题栏 */}
            <div className="shrink-0 border-b border-white/10 pb-2">
              <div className="flex items-center justify-between">
                <Badge className="bg-[#e2622c] text-xs font-black text-black">
                  STAGE 02 · 廷议交锋：牵一发而动全身的活沙盘
                </Badge>
                <span className="font-mono text-xs font-bold text-orange-400">
                  COUNCIL & DECISION
                </span>
              </div>
              <h2 className="mt-1.5 flex items-center gap-2 text-base font-black text-slate-100 sm:text-lg">
                <Scale className="size-5 shrink-0 text-orange-400" />
                <span>动态博弈：四维指标量化与阵营立场联动</span>
              </h2>
              <p className="mt-1 text-xs leading-relaxed text-slate-300 sm:text-sm">
                玩家拟草决策时，系统不仅计算四维生存资源的即时损益，还将实时驱动多智能体进行动态立场反馈。
              </p>
            </div>

            {/* 3 个核心机制解析卡片（产品机制风格，客观严谨） */}
            <div className="flex flex-1 flex-col justify-around space-y-2 overflow-hidden py-1.5">
              {/* 机制 1 */}
              <div className="rounded-xl border border-white/10 bg-black/40 p-3 shadow-xs">
                <div className="flex items-center gap-2">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-md border border-orange-500/30 bg-orange-950 font-mono text-xs font-black text-orange-400">
                    01
                  </span>
                  <h3 className="flex items-center gap-1.5 text-sm font-black text-slate-100 sm:text-base">
                    <Shield className="size-4 text-orange-400" />
                    <span>【四维生存账本】量化决策代价与环境熵增</span>
                  </h3>
                </div>
                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-200 font-medium">
                  系统设定稳定、士气、民心、物资四项量化指标，并引入大势环境衰减机制，促使决策者权衡每项方案的现实收益与代价。
                </p>
              </div>

              {/* 机制 2 */}
              <div className="rounded-xl border border-white/10 bg-black/40 p-3 shadow-xs">
                <div className="flex items-center gap-2">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-md border border-orange-500/30 bg-orange-950 font-mono text-xs font-black text-orange-400">
                    02
                  </span>
                  <h3 className="flex items-center gap-1.5 text-sm font-black text-slate-100 sm:text-base">
                    <Cpu className="size-4 text-orange-400" />
                    <span>【阵营立场演算】多智能体实时反馈支持度</span>
                  </h3>
                </div>
                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-200 font-medium">
                  四位智能体代表各自的阶层诉求，在玩家选择不同方案时，系统基于阵营利益模型实时计算并呈现各方的支持或反对态度。
                </p>
              </div>

              {/* 机制 3 */}
              <div className="rounded-xl border border-white/10 bg-black/40 p-3 shadow-xs">
                <div className="flex items-center gap-2">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-md border border-orange-500/30 bg-orange-950 font-mono text-xs font-black text-orange-400">
                    03
                  </span>
                  <h3 className="flex items-center gap-1.5 text-sm font-black text-slate-100 sm:text-base">
                    <Sparkles className="size-4 text-orange-400" />
                    <span>【阶梯式决策档位】常规应对与重大战略决议</span>
                  </h3>
                </div>
                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-200 font-medium">
                  系统提供稳健、冒险、权策等多档位方案，并包含高投入高回报的重大工程决议，拓展沙盘推演的战略深度与世界线分支。
                </p>
              </div>
            </div>

            {/* 底部联动提示 */}
            <div className="flex shrink-0 items-center justify-between rounded-lg border border-orange-500/40 bg-orange-950/40 px-3 py-2 text-xs sm:text-[13px] text-orange-300">
              <div>
                <strong className="text-orange-400">💡 交互说明：</strong>
                <span>点击右侧 A / B / C / D 选项，可实时预览四维指标预期变化以及各智能体席位的支持度响应。</span>
              </div>
              <Compass className="size-4 shrink-0 text-orange-400" />
            </div>
          </aside>

          {/* 👉 右半边（占 6 列）：放人物卡牌与选项卡牌 */}
          <section className="flex h-full flex-col justify-between gap-2 overflow-hidden lg:col-span-6">
            {/* 上半部分：人物卡牌（当前执政主角 + 4 位 Agent 议事席位） */}
            <div className="shrink-0 rounded-xl border border-white/10 bg-[#26201d]/90 p-2 shadow-md">
              <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-12">
                {/* 执政主角卡 (占 5 列) */}
                <div className="flex flex-col justify-between rounded-lg border-2 border-orange-500/60 bg-orange-950/40 p-1.5 sm:col-span-5">
                  <div className="flex items-center justify-between font-mono text-[10px] text-orange-400">
                    <span className="font-bold">ACTIVE LEADER</span>
                    <span className="py-0.2 rounded bg-orange-500 px-1 text-[9px] font-black text-black">
                      执棋
                    </span>
                  </div>
                  <div className="mt-0.5 flex items-center gap-2">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-black/70 p-0.5 shadow-inner">
                      <PixelSprite
                        frames={playerPortrait.frames}
                        palette={playerPortrait.palette}
                        label={playerPortrait.label}
                        scale={1.4}
                        className={portraitMotionClass(playerPortrait.motion, false)}
                      />
                    </div>
                    <div className="min-w-0">
                      <span className="block truncate text-xs font-black text-slate-100">
                        {selectedPlayer.name}
                      </span>
                      <span className="block truncate text-[10px] font-bold text-orange-300">
                        {selectedPlayer.identity.split("·")[0]}
                      </span>
                    </div>
                  </div>
                  <p className="mt-0.5 line-clamp-1 text-[10px] leading-tight text-slate-300">
                    {selectedPlayer.publicGoal}
                  </p>
                </div>

                {/* 4 位 Agent 议事席位网格 (占 7 列) */}
                <div className="grid grid-cols-2 gap-1 sm:col-span-7">
                  {agents.map((agent: MockAgentCharacter) => {
                    const spritePortrait = portraitFor(agent, skin);
                    const forecastLean = selectedOption.forecast.find(
                      (f) => f.agentId === agent.id,
                    )?.lean;
                    return (
                      <div
                        key={agent.id}
                        className="flex flex-col justify-between rounded border border-white/10 bg-black/40 px-1.5 py-1 text-[10px] shadow-xs"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex min-w-0 items-center gap-1.5">
                            <div className="flex size-4.5 shrink-0 items-center justify-center rounded bg-white/10">
                              <PixelSprite
                                frames={spritePortrait.frames}
                                palette={spritePortrait.palette}
                                label={spritePortrait.label}
                                scale={0.7}
                                className={portraitMotionClass(spritePortrait.motion, false)}
                              />
                            </div>
                            <span className="truncate text-[10px] font-bold text-slate-200">
                              {agent.name}
                            </span>
                          </div>
                          <span
                            className={`py-0.2 rounded px-1 text-[9px] font-bold ${
                              forecastLean === "支持"
                                ? "border border-emerald-500/40 bg-emerald-950 text-emerald-400"
                                : forecastLean === "反对"
                                  ? "border border-red-500/40 bg-red-950 text-red-400"
                                  : "border border-amber-500/40 bg-amber-950 text-amber-400"
                            }`}
                          >
                            {forecastLean ?? agent.attitude}
                          </span>
                        </div>
                        {/* 信任条 */}
                        <div className="mt-0.5 flex items-center gap-1.5 text-[9px] text-slate-400">
                          <div className="h-1 flex-1 overflow-hidden rounded-full bg-slate-800">
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
                          <span className="font-mono text-[9px] font-bold text-slate-300">
                            {agent.trust}%
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 下半部分：选项卡牌 (ABCD 四卡大字排布，紧凑舒展，绝不截断) */}
            <div className="flex flex-1 flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#26201d]/90 p-2.5 shadow-md">
              <div className="flex shrink-0 items-center justify-between border-b border-white/10 pb-1 text-xs">
                <span className="flex items-center gap-1.5 font-bold text-slate-200">
                  <GitFork className="size-3.5 text-orange-400" />
                  <span>拟草决策 · 推动世界线分叉（点击即刻落子）</span>
                </span>
                <span className="font-mono text-[11px] text-orange-400">4 档战略抉择</span>
              </div>

              <div className="flex flex-1 flex-col justify-between gap-2 pt-1">
                {options.map((opt: MockDecisionOption) => {
                  const isSelected = opt.id === selectedOption.id;
                  const isEpic = opt.id === "D";

                  if (!isEpic) {
                    return (
                      <div
                        key={opt.id}
                        onClick={() => setSelectedOptionId(opt.id)}
                        className={`flex cursor-pointer flex-col justify-between rounded-xl border p-2.5 transition-all sm:p-3 ${
                          isSelected
                            ? "border-[#e2622c] bg-orange-950/70 shadow-md ring-2 ring-[#e2622c]/50"
                            : "border-white/10 bg-black/40 hover:border-white/20 hover:bg-white/5"
                        }`}
                      >
                        {/* 标题栏 */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="flex size-5 items-center justify-center rounded bg-orange-500 font-mono text-xs font-black text-black">
                              {opt.id}
                            </span>
                            <strong className="text-xs font-black text-slate-100 sm:text-sm">
                              {opt.title}
                            </strong>
                          </div>
                          <Badge
                            variant="outline"
                            className="h-5 border-white/20 bg-black/30 px-2 text-[10px] font-bold text-slate-200"
                          >
                            {opt.risk}档抉择
                          </Badge>
                        </div>

                        {/* 方案说明（舒展充实大字号） */}
                        <p className="mt-1 text-xs leading-relaxed text-slate-200 sm:text-[12.5px]">
                          {opt.desc}
                        </p>

                        {/* 四维损益行 */}
                        <div className="mt-1 flex items-center justify-between border-t border-white/10 pt-1 font-mono text-xs text-slate-300">
                          <div className="flex items-center gap-2.5 sm:gap-3">
                            <span>
                              稳定:{" "}
                              <strong
                                className={
                                  opt.deltas.stability >= 0
                                    ? "font-bold text-emerald-400"
                                    : "font-bold text-red-400"
                                }
                              >
                                {opt.impactText.stability}
                              </strong>
                            </span>
                            <span>
                              士气:{" "}
                              <strong
                                className={
                                  opt.deltas.morale >= 0
                                    ? "font-bold text-emerald-400"
                                    : "font-bold text-red-400"
                                }
                              >
                                {opt.impactText.morale}
                              </strong>
                            </span>
                            <span>
                              民心:{" "}
                              <strong
                                className={
                                  opt.deltas.support >= 0
                                    ? "font-bold text-emerald-400"
                                    : "font-bold text-red-400"
                                }
                              >
                                {opt.impactText.support}
                              </strong>
                            </span>
                            <span>
                              物资:{" "}
                              <strong
                                className={
                                  opt.deltas.resources >= 0
                                    ? "font-bold text-emerald-400"
                                    : "font-bold text-red-400"
                                }
                              >
                                {opt.impactText.resources}
                              </strong>
                            </span>
                          </div>

                          {isSelected ? (
                            <span className="flex items-center gap-1 text-xs font-black text-orange-400">
                              <Check className="size-3.5" />
                              已拟定落子
                            </span>
                          ) : (
                            <span className="text-[10px] text-slate-400 hover:text-slate-200">
                              点击拟定 ➔
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  }

                  // 🌟 D 选项：单独做大做强，史诗级群星飞升决议卡
                  return (
                    <div
                      key={opt.id}
                      onClick={() => setSelectedOptionId(opt.id)}
                      className={`flex cursor-pointer flex-col justify-between rounded-xl border-2 p-2.5 transition-all sm:p-3 ${
                        isSelected
                          ? "border-amber-400 bg-gradient-to-br from-amber-950/90 via-[#26201d] to-black/90 shadow-xl ring-2 ring-amber-400/50"
                          : "border-amber-500/40 bg-amber-950/40 hover:border-amber-400/70 hover:bg-amber-950/60"
                      }`}
                    >
                      {/* 顶部标题与飞升徽章 */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="flex size-5.5 items-center justify-center rounded-md bg-amber-400 font-mono text-xs font-black text-black shadow-sm">
                            {opt.id}
                          </span>
                          <strong className="text-xs font-black tracking-wide text-amber-200 sm:text-sm">
                            {opt.title}
                          </strong>
                        </div>
                        <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 px-2 py-0.5 text-[10px] font-black text-black shadow-sm">
                          🌟 宇宙级飞升决议 · 群星巨构
                        </Badge>
                      </div>

                      {/* 完整方案描述（舒展大字号，绝不省略截断） */}
                      <p className="mt-1 text-xs leading-relaxed font-medium text-slate-100 sm:text-[12.5px]">
                        {opt.desc}
                      </p>

                      {/* 专属飞升宣誓金句卡 */}
                      {opt.epigraph && (
                        <div className="mt-1 rounded-lg border border-amber-500/40 bg-black/50 px-2.5 py-1 font-serif text-xs text-amber-200 italic shadow-inner">
                          <span className="mr-1 font-sans font-bold text-amber-400 not-italic">
                            🌟 飞升宣誓：
                          </span>
                          “{opt.epigraph}”
                        </div>
                      )}

                      {/* 底部四维损益与决选徽章 */}
                      <div className="mt-1 flex items-center justify-between border-t border-amber-500/30 pt-1 font-mono text-xs text-slate-300">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <span className="text-slate-400">稳定:</span>
                            <strong className="font-bold text-emerald-400">
                              {opt.impactText.stability}
                            </strong>
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="text-slate-400">士气:</span>
                            <strong className="text-sm font-bold text-emerald-400 sm:text-base">
                              {opt.impactText.morale} 🚀
                            </strong>
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="text-slate-400">民心:</span>
                            <strong className="font-bold text-emerald-400">
                              {opt.impactText.support}
                            </strong>
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="text-slate-400">物资:</span>
                            <strong className="font-bold text-red-400">
                              {opt.impactText.resources}
                            </strong>
                          </span>
                        </div>

                        {isSelected ? (
                          <span className="flex items-center gap-1 rounded border border-amber-400/50 bg-amber-950/80 px-2 py-0.5 text-xs font-black text-amber-300">
                            <Check className="size-3.5" />
                            已拟定最高决议
                          </span>
                        ) : (
                          <span className="text-[11px] font-bold text-amber-400">
                            点击拟定飞升 ➔
                          </span>
                        )}
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
            <GitFork className="size-4 text-[#e2622c]" />
            <span className="text-slate-400">已拟草决策：</span>
            <strong className="text-slate-100">
              [{selectedOption.id}项] {selectedOption.title}
            </strong>
          </div>
          <span className="font-mono text-[11px] font-bold text-orange-400">
            下一幕：各方角色当堂表态与交锋 (Speech Stage) ➔ (按空格键或右方向键)
          </span>
        </div>
      </footer>
    </main>
  );
}
