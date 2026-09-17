import {
  Brain,
  Network,
  Radio,
  ShieldAlert,
  Swords,
  Volume2,
  Zap,
} from "lucide-react";

import { PixelSprite } from "@/components/pixel/pixel-sprite";
import { portraitFor, portraitMotionClass } from "@/components/pixel/portraits";
import { Badge } from "@/components/ui/badge";
import { getSkin, isDarkSkin, skinStyleVars, type ScenarioSkin } from "@/lib/scenario-skin";

import { useMockGame } from "../mock/game-state";
import { MOCK_DEBATE_BEATS, type MockDebateBeat } from "../mock/preset-data";

export function Slide5Debate({ skin: _defaultSkin }: { skin: ScenarioSkin }) {
  const { activeDebateIndex, setActiveDebateIndex } = useMockGame();
  const skin = getSkin("apocalypse");
  const currentBeat = MOCK_DEBATE_BEATS[activeDebateIndex] ?? MOCK_DEBATE_BEATS[0];

  const speakerPortrait = portraitFor(currentBeat.speaker, skin);
  const opponentPortrait = currentBeat.opponent ? portraitFor(currentBeat.opponent, skin) : null;

  return (
    <main
      style={skinStyleVars(skin)}
      className={`bg-background text-foreground relative flex size-full h-screen flex-col justify-between overflow-hidden select-none ${
        isDarkSkin(skin) ? "dark" : ""
      }`}
    >
      {/* 🎭 顶部状态与 4 个回合快捷切换栏 */}
      <section className="shrink-0 border-b border-white/10 bg-[#26201d]/70 px-4 py-1.5 sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Badge className="bg-[#e2622c] text-[10px] text-black font-bold">智能体即时交锋</Badge>
            <span className="text-xs font-black text-slate-100 sm:text-sm">
              Speech Stage · 动态调度管线现场
            </span>
          </div>

          {/* 4 个回合快捷切换按钮 */}
          <div className="flex items-center gap-1.5">
            {MOCK_DEBATE_BEATS.map((beat: MockDebateBeat, idx: number) => {
              const isActive = idx === activeDebateIndex;
              return (
                <button
                  key={beat.id}
                  type="button"
                  onClick={() => setActiveDebateIndex(idx)}
                  className={`flex cursor-pointer items-center gap-1 rounded-md px-2.5 py-0.5 text-xs font-bold transition-all ${
                    isActive
                      ? "bg-[#e2622c] text-black shadow-xs ring-1 ring-orange-400"
                      : "border border-white/10 bg-black/40 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  <span className="font-mono text-[9px] opacity-75">#{idx + 1}</span>
                  <span className="text-[11px]">{beat.roundTitle.split("·")[1]?.trim() ?? beat.roundTitle}</span>
                  {beat.opponent && (
                    <span className="rounded bg-amber-400 px-1 font-mono text-[8px] font-black text-black">
                      交锋
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 🎭 核心 16:9 双半区：左半边用于 PPT 文字解释，右半边放人物辩论对决舞台 */}
      <section className="mx-auto w-full max-w-7xl flex-1 px-4 py-2.5 sm:px-6 sm:py-3 overflow-hidden">
        <div className="grid h-full grid-cols-1 gap-3.5 lg:grid-cols-12 lg:gap-4">
          {/* 👈 左半边（占 6 列）：用于 PPT 文字解释（多智能体调度与对抗算法） */}
          <aside className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#26201d]/95 p-4 shadow-xl lg:col-span-6 h-full overflow-hidden">
            {/* 标题栏 */}
            <div className="border-b border-white/10 pb-2.5 shrink-0">
              <div className="flex items-center justify-between">
                <Badge className="bg-[#e2622c] text-[11px] font-black text-black">
                  STAGE 03 · 调度管线与冲突对齐
                </Badge>
                <span className="font-mono text-xs font-bold text-orange-400">DISPATCH PIPELINE</span>
              </div>
              <h2 className="mt-1.5 text-base sm:text-lg font-black text-slate-100 flex items-center gap-2">
                <Swords className="size-5 text-orange-400 shrink-0" />
                <span>多智能体即时冲突矩阵与短兵相接调度管线</span>
              </h2>
              <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                告别单向死板对话，通过算法并发推演与冲突聚焦，将多方利益矛盾实时转化为知乎硬核对峙长文。
              </p>
            </div>

            {/* 3 个核心算法亮点卡片 */}
            <div className="space-y-2.5 py-2 flex-1 flex flex-col justify-around overflow-hidden">
              {/* 算法 1 */}
              <div className="rounded-xl border border-white/10 bg-black/40 p-3 shadow-xs">
                <div className="flex items-center gap-2">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-orange-950 font-mono text-xs font-black text-orange-400 border border-orange-500/30">
                    01
                  </span>
                  <h3 className="text-xs sm:text-sm font-black text-slate-100 flex items-center gap-1.5">
                    <Zap className="size-3.5 text-orange-400" />
                    <span>并发扇出表态（Parallel Fan-Out Dispatch）</span>
                  </h3>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                  使用 <code>Promise.all</code> 并发唤起 4 位独立 Agent 对拟定决策进行并行结构化表态，NDJSON 流式分块返回，<strong>首包秒级上屏</strong>，彻底根治多智能体排队延迟。
                </p>
              </div>

              {/* 算法 2 */}
              <div className="rounded-xl border border-white/10 bg-black/40 p-3 shadow-xs">
                <div className="flex items-center gap-2">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-orange-950 font-mono text-xs font-black text-orange-400 border border-orange-500/30">
                    02
                  </span>
                  <h3 className="text-xs sm:text-sm font-black text-slate-100 flex items-center gap-1.5">
                    <Network className="size-3.5 text-orange-400" />
                    <span>冲突矩阵对齐算法（pickConflictPair）</span>
                  </h3>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                  根据各 Agent 利益函数过滤无悬念共识，<strong>算法精准锁定立场极化权重最高的一对尖锐矛盾</strong>（如沈寒山极限气象预警 vs 燕崇山铁血戒严），凸显戏剧张力。
                </p>
              </div>

              {/* 算法 3 */}
              <div className="rounded-xl border border-white/10 bg-black/40 p-3 shadow-xs">
                <div className="flex items-center gap-2">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-orange-950 font-mono text-xs font-black text-orange-400 border border-orange-500/30">
                    03
                  </span>
                  <h3 className="text-xs sm:text-sm font-black text-slate-100 flex items-center gap-1.5">
                    <Brain className="size-3.5 text-orange-400" />
                    <span>单次结构化交锋合成（Single-Shot Clash）</span>
                  </h3>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                  将双方对抗合并为单次模型结构化推演，消除多轮往返产生的死锁与复读，直接合成具有知乎硬核答主辩论感的<strong>针锋相对、引经据典短兵相接</strong>。
                </p>
              </div>
            </div>

            {/* 底部容灾说明 */}
            <div className="rounded-lg border border-orange-500/40 bg-orange-950/40 px-3 py-2 text-xs text-orange-300 shrink-0 flex items-center justify-between">
              <div>
                <strong className="text-orange-400">🛡️ 容灾与超时保护：</strong>
                <span>采用 AbortController 毫秒级超时熔断，单 Agent 异常不中断主线推演推进。</span>
              </div>
              <ShieldAlert className="size-4 text-orange-400 shrink-0" />
            </div>
          </aside>

          {/* 👉 右半边（占 6 列）：SpeechStage 像素对决剧场 */}
          <section className="flex flex-col justify-between gap-2.5 rounded-xl border border-white/15 bg-gradient-to-b from-black/80 via-black/95 to-black/80 p-3.5 text-white shadow-xl lg:col-span-6 h-full overflow-hidden">
            {/* 舞台顶栏 */}
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5 text-xs shrink-0">
              <div className="flex items-center gap-1.5 font-mono font-bold text-orange-400">
                <Radio className="size-3.5 animate-pulse text-[#e2622c]" />
                <span>{currentBeat.tag}</span>
              </div>
              <span
                className={`rounded px-2 py-0.5 font-mono text-[10px] font-bold ${
                  currentBeat.clashType === "矛与盾尖锐交锋"
                    ? "border border-red-500/40 bg-red-950/60 text-red-400"
                    : "border border-blue-500/40 bg-blue-950/60 text-blue-300"
                }`}
              >
                {currentBeat.clashType}
              </span>
            </div>

            {/* 角色立绘对立站位：霸气大画幅竞技舞台 */}
            <div className="my-auto flex items-center justify-around py-3 sm:py-4">
              {/* 发言人 1 */}
              <div className="flex flex-col items-center gap-1.5">
                <div className="flex size-24 sm:size-28 lg:size-32 items-center justify-center overflow-hidden rounded-2xl border-2 border-cyan-400/60 bg-gradient-to-b from-slate-900 via-black to-slate-950 p-2 shadow-xl shadow-cyan-500/20 backdrop-blur-md">
                  <PixelSprite
                    frames={speakerPortrait.frames}
                    palette={speakerPortrait.palette}
                    label={speakerPortrait.label}
                    scale={3.2}
                    className={portraitMotionClass(speakerPortrait.motion, true)}
                  />
                </div>
                <div className="text-center">
                  <div className="text-sm sm:text-base font-black text-cyan-300">{currentBeat.speaker.name}</div>
                  <div className="text-xs font-bold text-slate-400">{currentBeat.speaker.identity.split("·")[0]}</div>
                </div>
              </div>

              {/* 双人短兵相接 VS 标志 */}
              {opponentPortrait && currentBeat.opponent ? (
                <>
                  <div className="flex flex-col items-center gap-1 font-mono text-sm font-black text-amber-400">
                    <div className="flex size-10 animate-pulse items-center justify-center rounded-full border-2 border-amber-400/60 bg-amber-500/30 shadow-xl shadow-amber-500/30">
                      <Swords className="size-4 text-amber-300" />
                    </div>
                    <span className="tracking-widest text-xs">VS</span>
                  </div>

                  <div className="flex flex-col items-center gap-1.5">
                    <div className="flex size-24 sm:size-28 lg:size-32 items-center justify-center overflow-hidden rounded-2xl border-2 border-red-500/60 bg-gradient-to-b from-slate-900 via-black to-slate-950 p-2 shadow-xl shadow-red-500/20 backdrop-blur-md">
                      <PixelSprite
                        frames={opponentPortrait.frames}
                        palette={opponentPortrait.palette}
                        label={opponentPortrait.label}
                        scale={3.2}
                        className={portraitMotionClass(opponentPortrait.motion, true)}
                      />
                    </div>
                    <div className="text-center">
                      <div className="text-sm sm:text-base font-black text-red-400">{currentBeat.opponent.name}</div>
                      <div className="text-xs font-bold text-slate-400">{currentBeat.opponent.identity.split("·")[0]}</div>
                    </div>
                  </div>
                </>
              ) : null}
            </div>

            {/* 动态台词气泡框 */}
            <div className="rounded-xl border border-white/15 bg-black/70 p-3 text-xs sm:text-sm leading-relaxed text-slate-100 backdrop-blur-md shadow-md shrink-0">
              <div className="mb-1 flex items-center gap-1.5 font-mono text-xs font-bold text-amber-300">
                <Volume2 className="size-3.5 text-[#e2622c]" />
                <span>
                  {currentBeat.opponent
                    ? `${currentBeat.speaker.name} ➔ 对抗驳斥 ➔ ${currentBeat.opponent.name}`
                    : `${currentBeat.speaker.name} 发言中`}
                </span>
              </div>
              <p className="font-serif leading-relaxed whitespace-pre-line text-slate-200 text-xs sm:text-[13px]">
                {currentBeat.speech}
              </p>
            </div>
          </section>
        </div>
      </section>

      {/* 底部确认栏 */}
      <footer className="relative z-30 shrink-0 border-t border-white/10 bg-black/60 px-4 py-2 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <Swords className="size-4 text-[#e2622c]" />
            <span className="text-slate-400">四方交锋终了：</span>
            <strong className="text-slate-100">
              天命破壁已确立，全盘推演已自动整理为知乎体万字亲历长回答
            </strong>
          </div>
          <span className="font-mono text-[11px] font-bold text-orange-400">
            下一幕：终局结算万字长文 (Act III) ➔ (按空格键或右方向键)
          </span>
        </div>
      </footer>
    </main>
  );
}
