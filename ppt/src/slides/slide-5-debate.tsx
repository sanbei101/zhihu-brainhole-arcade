import { ShieldAlert, Swords, Volume2, Zap } from "lucide-react";

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
          <div className="flex items-center gap-1">
            {MOCK_DEBATE_BEATS.map((beat: MockDebateBeat, idx: number) => {
              const isActive = idx === activeDebateIndex;
              return (
                <button
                  key={beat.id}
                  type="button"
                  onClick={() => setActiveDebateIndex(idx)}
                  className={`flex cursor-pointer items-center gap-1 rounded-md px-2 py-0.5 text-xs font-bold transition-all ${
                    isActive
                      ? "bg-[#e2622c] text-black shadow-xs"
                      : "border border-white/10 bg-black/40 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  <span className="font-mono text-[9px] opacity-75">#{idx + 1}</span>
                  <span className="text-[10px]">{beat.roundTitle.split("·")[1]?.trim() ?? beat.roundTitle}</span>
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

      {/* 🎭 核心 16:9 双栏剧场与调度管线 */}
      <section className="mx-auto w-full max-w-7xl flex-1 px-4 py-2 sm:px-6 sm:py-3">
        <div className="grid h-full grid-cols-1 gap-3 lg:grid-cols-12 lg:gap-4">
          {/* 左侧：SpeechStage 像素对决剧场 (占 7 列) */}
          <div className="flex flex-col justify-between gap-2.5 rounded-xl border border-white/15 bg-gradient-to-b from-black/80 via-black/95 to-black/80 p-4 text-white shadow-xl lg:col-span-7">
            {/* 舞台顶栏 */}
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5 text-xs">
              <div className="flex items-center gap-1.5 font-mono font-bold text-orange-400">
                <Swords className="size-3.5" />
                <span>{currentBeat.tag}</span>
              </div>
              <span
                className={`rounded px-1.5 py-0.2 font-mono text-[10px] font-bold ${
                  currentBeat.clashType === "矛与盾尖锐交锋"
                    ? "border border-red-500/40 bg-red-950/60 text-red-400"
                    : "border border-blue-500/40 bg-blue-950/60 text-blue-300"
                }`}
              >
                {currentBeat.clashType}
              </span>
            </div>

            {/* 角色立绘对立站位：大画幅竞技舞台 */}
            <div className="my-auto flex items-center justify-around py-4 sm:py-6">
              {/* 发言人 1 */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex size-28 sm:size-32 lg:size-36 items-center justify-center overflow-hidden rounded-2xl border-2 border-cyan-400/60 bg-gradient-to-b from-slate-900 via-black to-slate-950 p-2 shadow-xl shadow-cyan-500/20 backdrop-blur-md">
                  <PixelSprite
                    frames={speakerPortrait.frames}
                    palette={speakerPortrait.palette}
                    label={speakerPortrait.label}
                    scale={3.8}
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
                  <div className="flex flex-col items-center gap-1.5 font-mono text-sm font-black text-amber-400">
                    <div className="flex size-11 animate-pulse items-center justify-center rounded-full border-2 border-amber-400/60 bg-amber-500/30 shadow-xl shadow-amber-500/30">
                      <Swords className="size-5 text-amber-300" />
                    </div>
                    <span className="tracking-widest">VS</span>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <div className="flex size-28 sm:size-32 lg:size-36 items-center justify-center overflow-hidden rounded-2xl border-2 border-red-500/60 bg-gradient-to-b from-slate-900 via-black to-slate-950 p-2 shadow-xl shadow-red-500/20 backdrop-blur-md">
                      <PixelSprite
                        frames={opponentPortrait.frames}
                        palette={opponentPortrait.palette}
                        label={opponentPortrait.label}
                        scale={3.8}
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
            <div className="rounded-xl border border-white/15 bg-black/60 p-3.5 text-xs sm:text-sm leading-relaxed text-slate-100 backdrop-blur-md shadow-md">
              <div className="mb-1.5 flex items-center gap-1.5 font-mono text-xs font-bold text-amber-300">
                <Volume2 className="size-3.5 text-[#e2622c]" />
                <span>
                  {currentBeat.opponent
                    ? `${currentBeat.speaker.name} ➔ 对抗驳斥 ➔ ${currentBeat.opponent.name}`
                    : `${currentBeat.speaker.name} 发言中`}
                </span>
              </div>
              <p className="font-serif leading-relaxed whitespace-pre-line text-slate-200 text-xs sm:text-sm">
                {currentBeat.speech}
              </p>
            </div>
          </div>

          {/* 右侧：多智能体调度算法深度解析 (占 5 列) */}
          <div className="flex flex-col justify-between gap-2.5 rounded-xl border border-white/10 bg-[#26201d]/90 p-3 shadow-md lg:col-span-5">
            <div className="border-b border-white/10 pb-1.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-black text-orange-400 uppercase">
                  MULTI-AGENT DISPATCH PIPELINE
                </span>
                <Badge className="bg-[#e2622c] text-[9px] text-black font-bold">调度算法突破</Badge>
              </div>
              <h3 className="mt-1 text-sm font-black text-slate-100">多智能体冲突矩阵对齐管线</h3>
            </div>

            <div className="space-y-2 text-xs">
              <div className="rounded-lg border border-orange-500/30 bg-orange-950/30 p-2">
                <strong className="flex items-center gap-1 text-[11px] font-bold text-orange-300">
                  <Zap className="size-3 text-[#e2622c]" />
                  <span>1. 并发扇出表态 (Fan-Out)</span>
                </strong>
                <p className="mt-0.5 text-[10px] leading-relaxed text-slate-400">
                  `Promise.all` 瞬间唤起 4 位 Agent 针对同一抉择表态，NDJSON 流式推送，首包秒级上屏。
                </p>
              </div>

              <div className="rounded-lg border border-red-500/30 bg-red-950/30 p-2">
                <strong className="flex items-center gap-1 text-[11px] font-bold text-red-300">
                  <Swords className="size-3 text-red-400" />
                  <span>2. 冲突矩阵对齐 (pickConflictPair)</span>
                </strong>
                <p className="mt-0.5 text-[10px] leading-relaxed text-slate-400">
                  算法过滤共识，锁定立场极化权重最高的一对矛与盾（沈寒山极地科学 vs 燕崇山铁血死守）。
                </p>
              </div>

              <div className="rounded-lg border border-amber-500/30 bg-amber-950/30 p-2">
                <strong className="flex items-center gap-1 text-[11px] font-bold text-amber-300">
                  <Volume2 className="size-3 text-amber-400" />
                  <span>3. 单次结构化交锋合成 (Single-Shot Clash)</span>
                </strong>
                <p className="mt-0.5 text-[10px] leading-relaxed text-slate-400">
                  合并双人对抗为单次模型结构化推演，消除多轮往返时延，杜绝多智能体死锁。
                </p>
              </div>
            </div>

            <div className="rounded border border-white/5 bg-black/40 p-1.5 text-center font-mono text-[10px] text-slate-400">
              AbortController 级联容灾：单 Agent 失败不熔断对局长链路
            </div>
          </div>
        </div>
      </section>

      {/* 底部确认栏 */}
      <footer className="relative z-30 shrink-0 border-t border-white/10 bg-black/60 px-4 py-2 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <ShieldAlert className="size-4 text-orange-400" />
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
