import { ShieldAlert, Swords, Volume2 } from "lucide-react";

import { PixelSprite } from "@/components/pixel/pixel-sprite";
import { portraitFor, portraitMotionClass } from "@/components/pixel/portraits";
import { Badge } from "@/components/ui/badge";
import type { ScenarioSkin } from "@/lib/scenario-skin";

import { useMockGame } from "../mock/game-state";
import { MOCK_DEBATE_BEATS, type MockDebateBeat } from "../mock/preset-data";

export function Slide5Debate({ skin }: { skin: ScenarioSkin }) {
  const { activeDebateIndex, setActiveDebateIndex } = useMockGame();
  const currentBeat = MOCK_DEBATE_BEATS[activeDebateIndex] ?? MOCK_DEBATE_BEATS[0];

  const speakerPortrait = portraitFor(currentBeat.speaker, skin);
  const opponentPortrait = currentBeat.opponent ? portraitFor(currentBeat.opponent, skin) : null;

  return (
    <div className="relative flex size-full max-h-full scrollbar-none flex-col justify-between gap-3 overflow-y-auto rounded-2xl border border-white/80 bg-white/90 p-4 text-slate-900 shadow-2xl backdrop-blur-md sm:gap-4 sm:p-6 lg:p-7">
      {/* 顶部标题栏 */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/80 pb-2.5">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold tracking-wider text-[#0066ff] uppercase">
              [第 4 幕 · 智能体当场表态与交锋]
            </span>
            <Badge variant="secondary" className="text-[10px]">
              SPEECH STAGE & CLASH MATRIX
            </Badge>
          </div>
          <h2 className="text-xl font-black text-slate-900 sm:text-2xl lg:text-3xl">
            一人抉择，四方表态，冲突矩阵短兵相接
          </h2>
        </div>

        {/* 4 个回合快捷切换按钮 */}
        <div className="flex flex-wrap items-center gap-1.5">
          {MOCK_DEBATE_BEATS.map((beat: MockDebateBeat, idx: number) => {
            const isActive = idx === activeDebateIndex;
            return (
              <button
                key={beat.id}
                type="button"
                onClick={() => setActiveDebateIndex(idx)}
                className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-bold transition-all ${
                  isActive
                    ? "bg-[#0066ff] text-white shadow-sm"
                    : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                }`}
              >
                <span className="font-mono text-[10px] opacity-75">#{idx + 1}</span>
                <span>{beat.roundTitle.split("·")[1]?.trim() ?? beat.roundTitle}</span>
                {beat.opponent && (
                  <span className="py-0.2 rounded bg-amber-400 px-1 font-mono text-[9px] font-black text-black">
                    交锋
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 核心原版舞台复刻：左侧 SpeechStage 像素舞台 + 右侧调度管线解析 */}
      <div className="my-auto grid grid-cols-1 items-center gap-4 lg:grid-cols-12 lg:gap-6">
        {/* 左侧：原版 SpeechStage 暗黑像素剧场（占 8 列） */}
        <div className="flex min-h-[320px] flex-col justify-between gap-3 rounded-2xl border-2 border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 p-4 text-white shadow-xl sm:p-6 lg:col-span-8">
          {/* 舞台顶栏 */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-slate-300">
              <Swords className="size-4 text-amber-400" />
              <span>{currentBeat.tag}</span>
            </div>
            <span
              className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] font-black ${
                currentBeat.clashType === "矛与盾尖锐交锋"
                  ? "border border-red-500/30 bg-red-500/20 text-red-400"
                  : "border border-blue-500/30 bg-blue-500/20 text-blue-300"
              }`}
            >
              {currentBeat.clashType}
            </span>
          </div>

          {/* 角色立绘站位区 */}
          <div className="my-auto flex items-center justify-around py-2 sm:py-4">
            {/* 发言人 1 */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex size-20 items-center justify-center overflow-hidden rounded-2xl border-2 border-blue-400/40 bg-slate-800/80 p-1 shadow-lg shadow-blue-500/10 backdrop-blur-sm sm:size-24">
                <PixelSprite
                  frames={speakerPortrait.frames}
                  palette={speakerPortrait.palette}
                  label={speakerPortrait.label}
                  scale={3}
                  className={portraitMotionClass(speakerPortrait.motion, true)}
                />
              </div>
              <div className="text-center">
                <div className="text-sm font-black text-white">{currentBeat.speaker.name}</div>
                <div className="text-[10px] text-slate-400">{currentBeat.speaker.faction}</div>
              </div>
            </div>

            {/* 双人交锋中栏 */}
            {opponentPortrait && currentBeat.opponent ? (
              <>
                <div className="flex flex-col items-center gap-1 font-mono text-xs font-black text-amber-400">
                  <div className="flex size-9 animate-pulse items-center justify-center rounded-full border border-amber-400/40 bg-amber-500/20">
                    <Swords className="size-4.5" />
                  </div>
                  <span>VS</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="flex size-20 items-center justify-center overflow-hidden rounded-2xl border-2 border-red-400/40 bg-slate-800/80 p-1 shadow-lg shadow-red-500/10 backdrop-blur-sm sm:size-24">
                    <PixelSprite
                      frames={opponentPortrait.frames}
                      palette={opponentPortrait.palette}
                      label={opponentPortrait.label}
                      scale={3}
                      className={portraitMotionClass(opponentPortrait.motion, true)}
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-black text-white">{currentBeat.opponent.name}</div>
                    <div className="text-[10px] text-slate-400">{currentBeat.opponent.faction}</div>
                  </div>
                </div>
              </>
            ) : null}
          </div>

          {/* 原版台词气泡框 */}
          <div className="rounded-xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-md">
            <div className="mb-1 flex items-center gap-2 font-mono text-xs font-bold text-amber-300">
              <Volume2 className="size-3.5" />
              <span>
                {currentBeat.opponent
                  ? `${currentBeat.speaker.name} ➔ 对抗驳斥 ➔ ${currentBeat.opponent.name}`
                  : `${currentBeat.speaker.name} 发言中`}
              </span>
            </div>
            <p className="font-serif text-xs leading-relaxed font-medium whitespace-pre-line text-slate-100 sm:text-sm">
              {currentBeat.speech}
            </p>
          </div>
        </div>

        {/* 右侧：多智能体调度算法突破解析卡（占 4 列） */}
        <div className="flex flex-col justify-between gap-3 rounded-2xl border-2 border-slate-200 bg-white/95 p-4 shadow-sm lg:col-span-4">
          <div className="space-y-1 border-b border-slate-200 pb-2">
            <span className="font-mono text-[10px] font-bold text-[#0066ff] uppercase">
              AGENT DISPATCH PIPELINE
            </span>
            <h4 className="text-sm font-black text-slate-900">多智能体调度管线突破</h4>
          </div>

          <div className="space-y-2 text-xs text-slate-700">
            <div className="rounded-xl border border-blue-200 bg-blue-50/60 p-2.5">
              <strong className="font-bold text-blue-900">1. 并发扇出表态</strong>
              <p className="mt-0.5 text-[11px] leading-snug text-slate-600">
                `Promise.all` 同时唤起 4 位 Agent 针对同一抉择表态，NDJSON 流式推送，首包毫秒直出。
              </p>
            </div>

            <div className="rounded-xl border border-purple-200 bg-purple-50/60 p-2.5">
              <strong className="font-bold text-purple-900">2. 冲突矩阵对齐</strong>
              <p className="mt-0.5 text-[11px] leading-snug text-slate-600">
                `pickConflictPair` 算法过滤共识，精准锁定立场极化权重最高的一对矛与盾（程昱 vs
                鲁肃）。
              </p>
            </div>

            <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-2.5">
              <strong className="font-bold text-amber-900">3. 单次结构化交锋合成</strong>
              <p className="mt-0.5 text-[11px] leading-snug text-slate-600">
                合并双人驳斥为单次 LLM 结构化推演，消除多轮往返时延，杜绝多智能体死锁。
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-2 text-center font-mono text-[10px] font-bold text-slate-500">
            故障隔离: 单 Agent 失败不熔断对局长链路
          </div>
        </div>
      </div>

      {/* 底部确认栏 */}
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white/95 px-4 py-2 text-xs text-slate-700 shadow-xs sm:text-sm">
        <span className="flex items-center gap-2">
          <ShieldAlert className="size-4 text-purple-600" />
          <span>四方交锋终了：</span>
          <strong className="text-slate-900">
            天命大权抵定，全盘推演过程已由 AI 自动整理为知乎体万字亲历长文
          </strong>
        </span>
        <span className="font-mono text-xs font-bold text-[#0066ff]">
          下一幕：终局收束 · 结算即内容 ➔ (按空格键或右方向键)
        </span>
      </div>
    </div>
  );
}
