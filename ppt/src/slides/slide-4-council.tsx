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
  const { selectedPlayer, agents, options, selectedOption, setSelectedOptionId } =
    useMockGame();
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
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-400">
              <Clock3 className="size-3 text-orange-400" />
              <span>松花江双堡关 · 零下43℃</span>
            </div>
          </div>
        </div>
      </section>

      {/* ⚔️ 核心 16:9 双半区：左半边用于 PPT 文字解释，右半边放人物和选项卡牌 */}
      <section className="mx-auto w-full max-w-7xl flex-1 px-4 py-2.5 sm:px-6 sm:py-3 overflow-hidden">
        <div className="grid h-full grid-cols-1 gap-3.5 lg:grid-cols-12 lg:gap-4">
          {/* 👈 左半边（占 6 列）：用于 PPT 文字解释（架构深意、博弈机制与技术攻坚） */}
          <aside className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#26201d]/95 p-4 shadow-xl lg:col-span-6 h-full overflow-hidden">
            {/* 标题栏 */}
            <div className="border-b border-white/10 pb-2.5 shrink-0">
              <div className="flex items-center justify-between">
                <Badge className="bg-[#e2622c] text-[11px] font-black text-black">
                  STAGE 02 · 动态议事厅与梯度抉择
                </Badge>
                <span className="font-mono text-xs font-bold text-orange-400">COUNCIL & DECISION</span>
              </div>
              <h2 className="mt-1.5 text-base sm:text-lg font-black text-slate-100 flex items-center gap-2">
                <Scale className="size-5 text-orange-400 shrink-0" />
                <span>高维动态沙盘：四维动态账本、极寒熵增与天命破壁</span>
              </h2>
              <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                从扁平分支树升级为动态博弈场，每一次落子都在四维文明存续账本与四大 Agent 势力间掀起连锁震荡。
              </p>
            </div>

            {/* 3 个核心机制解析卡片 */}
            <div className="space-y-2.5 py-2 flex-1 flex flex-col justify-around overflow-hidden">
              {/* 机制 1 */}
              <div className="rounded-xl border border-white/10 bg-black/40 p-3 shadow-xs">
                <div className="flex items-center gap-2">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-orange-950 font-mono text-xs font-black text-orange-400 border border-orange-500/30">
                    01
                  </span>
                  <h3 className="text-xs sm:text-sm font-black text-slate-100 flex items-center gap-1.5">
                    <Shield className="size-3.5 text-orange-400" />
                    <span>四维动态存续账本与极寒大势熵增律</span>
                  </h3>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                  构建<strong>秩序稳定、军民士气、难民支持、战略物资</strong>四维硬核账本。引入不可逆的「极寒大势熵增定律」（-2/回合），打破任何消极固守的幻象，逼迫决策者发动攻势破局。
                </p>
              </div>

              {/* 机制 2 */}
              <div className="rounded-xl border border-white/10 bg-black/40 p-3 shadow-xs">
                <div className="flex items-center gap-2">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-orange-950 font-mono text-xs font-black text-orange-400 border border-orange-500/30">
                    02
                  </span>
                  <h3 className="text-xs sm:text-sm font-black text-slate-100 flex items-center gap-1.5">
                    <Cpu className="size-3.5 text-orange-400" />
                    <span>四方 Agent 独立认知建模与立场推演</span>
                  </h3>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                  四路势力（总兵/粮商/科学家/医官）内置差异化阶层信念，对右侧每一项拟定方案实时推演<strong>支持 / 反对立场与信任度损益</strong>，绝非死板剧本，而是活生生的博弈生态。
                </p>
              </div>

              {/* 机制 3 */}
              <div className="rounded-xl border border-white/10 bg-black/40 p-3 shadow-xs">
                <div className="flex items-center gap-2">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-orange-950 font-mono text-xs font-black text-orange-400 border border-orange-500/30">
                    03
                  </span>
                  <h3 className="text-xs sm:text-sm font-black text-slate-100 flex items-center gap-1.5">
                    <Sparkles className="size-3.5 text-orange-400" />
                    <span>四档梯度抉择与「天命破壁」史诗机制</span>
                  </h3>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                  摒弃非黑即白二选一，设立<strong>稳健、险极、妥协、奇径</strong>四阶推演；独创<strong>天命破壁选项</strong>（如 D 项凿冰为渠·冰上长城），跳出零和博弈围城，开启前所未有的高维破局世界线！
                </p>
              </div>
            </div>

            {/* 底部联动提示 */}
            <div className="rounded-lg border border-orange-500/40 bg-orange-950/40 px-3 py-2 text-xs text-orange-300 shrink-0 flex items-center justify-between">
              <div>
                <strong className="text-orange-400">💡 交互说明：</strong>
                <span>右侧点击 A / B / C / D 选项，可即时联动各方势力态度预测与账本增减！</span>
              </div>
              <Compass className="size-4 text-orange-400 shrink-0" />
            </div>
          </aside>

          {/* 👉 右半边（占 6 列）：放人物卡牌与选项卡牌 */}
          <section className="flex flex-col justify-between gap-2.5 lg:col-span-6 h-full overflow-hidden">
            {/* 上半部分：人物卡牌（当前执政主角 + 4 位 Agent 议事席位） */}
            <div className="rounded-xl border border-white/10 bg-[#26201d]/90 p-2.5 shadow-md shrink-0">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
                {/* 执政主角卡 (占 5 列) */}
                <div className="sm:col-span-5 rounded-lg border-2 border-orange-500/60 bg-orange-950/40 p-2 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-[10px] font-mono text-orange-400">
                    <span className="font-bold">ACTIVE LEADER</span>
                    <span className="rounded bg-orange-500 px-1 py-0.2 font-black text-black text-[9px]">执棋</span>
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-black/70 p-0.5 shadow-inner">
                      <PixelSprite
                        frames={playerPortrait.frames}
                        palette={playerPortrait.palette}
                        label={playerPortrait.label}
                        scale={1.6}
                        className={portraitMotionClass(playerPortrait.motion, false)}
                      />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-xs font-black text-slate-100 truncate">{selectedPlayer.name}</span>
                      <span className="block text-[10px] font-bold text-orange-300 truncate">{selectedPlayer.identity.split("·")[0]}</span>
                    </div>
                  </div>
                  <p className="mt-1 line-clamp-1 text-[11px] text-slate-300 leading-tight">{selectedPlayer.publicGoal}</p>
                </div>

                {/* 4 位 Agent 议事席位网格 (占 7 列) */}
                <div className="sm:col-span-7 grid grid-cols-2 gap-1.5">
                  {agents.map((agent: MockAgentCharacter) => {
                    const spritePortrait = portraitFor(agent, skin);
                    const forecastLean = selectedOption.forecast.find(
                      (f) => f.agentId === agent.id,
                    )?.lean;
                    return (
                      <div
                        key={agent.id}
                        className="rounded border border-white/10 bg-black/40 px-2 py-1 text-[11px] shadow-xs flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 min-w-0">
                            <div className="flex size-5 shrink-0 items-center justify-center rounded bg-white/10">
                              <PixelSprite
                                frames={spritePortrait.frames}
                                palette={spritePortrait.palette}
                                label={spritePortrait.label}
                                scale={0.8}
                                className={portraitMotionClass(spritePortrait.motion, false)}
                              />
                            </div>
                            <span className="font-bold text-slate-200 text-[10px] truncate">{agent.name}</span>
                          </div>
                          <span
                            className={`rounded px-1 py-0.2 text-[9px] font-bold ${
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
                        {/* 信任条 */}
                        <div className="mt-1 flex items-center gap-1.5 text-[9px] text-slate-400">
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
                          <span className="font-mono text-[9px] font-bold text-slate-300">{agent.trust}%</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 下半部分：选项卡牌 (ABCD 四卡大字排布) */}
            <div className="rounded-xl border border-white/10 bg-[#26201d]/90 p-3 shadow-md flex-1 flex flex-col justify-between overflow-hidden">
              <div className="flex items-center justify-between text-xs pb-1 border-b border-white/10 shrink-0">
                <span className="font-bold text-slate-200 flex items-center gap-1.5">
                  <GitFork className="size-3.5 text-orange-400" />
                  <span>拟草决策 · 推动世界线分叉（点击即刻落子）</span>
                </span>
                <span className="text-orange-400 text-[11px] font-mono">4 档战略抉择</span>
              </div>

              <div className="grid grid-cols-1 gap-2 flex-1 pt-1.5 overflow-hidden">
                {options.map((opt: MockDecisionOption) => {
                  const isSelected = opt.id === selectedOption.id;
                  const isEpic = opt.id === "D";
                  return (
                    <div
                      key={opt.id}
                      onClick={() => setSelectedOptionId(opt.id)}
                      className={`cursor-pointer rounded-xl border p-2.5 transition-all flex flex-col justify-between ${
                        isSelected
                          ? isEpic
                            ? "border-amber-400 bg-amber-950/70 shadow-md ring-2 ring-amber-400/50 scale-[1.01]"
                            : "border-[#e2622c] bg-orange-950/70 shadow-md ring-2 ring-[#e2622c]/50 scale-[1.01]"
                          : "border-white/10 bg-black/30 hover:border-white/20 hover:bg-white/5"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span
                            className={`flex size-5.5 items-center justify-center rounded font-mono text-xs font-black text-black ${
                              isEpic ? "bg-amber-400" : "bg-orange-500"
                            }`}
                          >
                            {opt.id}
                          </span>
                          <strong className="text-xs sm:text-sm font-black text-slate-100">{opt.title}</strong>
                        </div>
                        <Badge variant="outline" className="h-5 border-white/20 px-1.5 text-[10px] text-slate-300">
                          {opt.risk}档抉择
                        </Badge>
                      </div>

                      <p className="mt-1 text-xs text-slate-300 leading-normal line-clamp-1">{opt.desc}</p>

                      {opt.epigraph && (
                        <div className="mt-1 rounded border border-amber-500/40 bg-amber-950/60 px-2 py-0.5 text-xs font-bold text-amber-200 line-clamp-1">
                          🌟 天命破壁: “{opt.epigraph}”
                        </div>
                      )}

                      {/* 指标损益 */}
                      <div className="mt-1 flex items-center justify-between border-t border-white/5 pt-1 text-[11px] font-mono text-slate-400">
                        <div className="flex gap-2.5">
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
            下一幕：智能体当场表态与交锋 (Speech Stage) ➔ (按空格键或右方向键)
          </span>
        </div>
      </footer>
    </main>
  );
}
