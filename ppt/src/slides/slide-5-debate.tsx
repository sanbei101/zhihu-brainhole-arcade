import {
  Brain,
  CheckCircle2,
  Flame,
  Network,
  Radio,
  Repeat,
  ShieldAlert,
  Swords,
  Volume2,
  XCircle,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { PixelSprite } from "@/components/pixel/pixel-sprite";
import { portraitFor, portraitMotionClass } from "@/components/pixel/portraits";
import { Badge } from "@/components/ui/badge";
import { getSkin, isDarkSkin, skinStyleVars, type ScenarioSkin } from "@/lib/scenario-skin";

import { useMockGame } from "../mock/game-state";
import { MOCK_AGENTS, MOCK_DEBATE_BEATS, type MockDebateBeat } from "../mock/preset-data";

// 逐字打字机 Hook
function useTypewriter(text: string, speed = 25, active = true) {
  const [displayed, setDisplayed] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!active || !text) {
      setDisplayed("");
      setIsTyping(false);
      return;
    }
    setDisplayed("");
    setIsTyping(true);
    let index = 0;
    const timer = setInterval(() => {
      index++;
      if (index >= text.length) {
        setDisplayed(text);
        setIsTyping(false);
        clearInterval(timer);
      } else {
        setDisplayed(text.slice(0, index));
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed, active]);

  return { displayed, isTyping };
}

export function Slide5Debate({ skin: _defaultSkin }: { skin: ScenarioSkin }) {
  const { activeDebateIndex, setActiveDebateIndex } = useMockGame();
  const skin = getSkin("apocalypse");
  const currentBeat = MOCK_DEBATE_BEATS[activeDebateIndex] ?? MOCK_DEBATE_BEATS[0];
  const opponent = currentBeat.opponent ?? MOCK_AGENTS[0];

  const speakerPortrait = portraitFor(currentBeat.speaker, skin);
  const opponentPortrait = portraitFor(opponent, skin);

  // 三阶段演进：
  // 1: 第一个人物（沈寒山）单独出现在舞台，打字机冒出支持玩家气泡
  // 2: 第二个人物（燕崇山）单独出现在舞台，打字机冒出反对玩家气泡
  // 3: 两人同台对峙，中央出现 VS 标志，两人打字机冒出争吵气泡互相辩驳
  const [stage, setStage] = useState<1 | 2 | 3>(1);
  const timersRef = useRef<NodeJS.Timeout[]>([]);

  const startAutoProgression = (initialStage: 1 | 2 | 3 = 1) => {
    // 清理先前的计时器
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];

    setStage(initialStage);

    if (initialStage === 1) {
      const t1 = setTimeout(() => {
        setStage(2);
      }, 2500); // 2.5 秒后进入阶段 2（燕崇山单独登场）
      const t2 = setTimeout(() => {
        setStage(3);
      }, 5200); // 5.2 秒后进入阶段 3（两人同台争吵）
      timersRef.current.push(t1, t2);
    } else if (initialStage === 2) {
      const t = setTimeout(() => {
        setStage(3);
      }, 2700);
      timersRef.current.push(t);
    }
  };

  useEffect(() => {
    startAutoProgression(1);
    return () => {
      timersRef.current.forEach(clearTimeout);
    };
  }, [activeDebateIndex]);

  // 台词定义（群星风格 · 行星地幔巨构飞升）
  const speakerStanceText =
    "“极端寒潮提前二十三天南下！死守双堡关必死无疑，我以首席气象官之名支持执政官启动地幔熔炉巨构，向大地深处夺取文明活路！”";
  const opponentStanceText =
    "“荒谬绝伦！私启万米地热裂变井，若地壳失稳引发崩塌谁来负责？！军法无情，我誓死反对这疯狂的飞升决议！”";

  const speakerClashText =
    "“燕崇山！极端寒潮十天内南压，夜间破零下55度！你的关防只能当棺材，唯有点燃地幔熔炉才能救三百万同胞！”";
  const opponentClashText =
    "“沈寒山！军令如山，州城粮库仅够三月！大门一开全州陪葬！谁敢煽动私启地热裂变井，先问过老子的机枪！”";

  // 逐字打字机绑定
  const speakerStanceType = useTypewriter(speakerStanceText, 22, stage === 1);
  const opponentStanceType = useTypewriter(opponentStanceText, 22, stage === 2);

  const speakerClashType = useTypewriter(speakerClashText, 22, stage === 3);
  const opponentClashType = useTypewriter(opponentClashText, 22, stage === 3);

  const handleManualStep = (targetStage: 1 | 2 | 3) => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
    setStage(targetStage);
  };

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
            <Badge className="bg-[#e2622c] text-[10px] font-bold text-black">智能体即时交锋</Badge>
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
                  <span className="text-[11px]">
                    {beat.roundTitle.split("·")[1]?.trim() ?? beat.roundTitle}
                  </span>
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
      <section className="mx-auto w-full max-w-7xl flex-1 overflow-hidden px-4 py-2.5 sm:px-6 sm:py-3">
        <div className="grid h-full grid-cols-1 gap-3.5 lg:grid-cols-12 lg:gap-4">
          {/* 👈 左半边（占 6 列）：用于 PPT 文字解释（根据当前演进状态动态联动高亮） */}
          <aside className="flex h-full flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#26201d]/95 p-4 shadow-xl lg:col-span-6">
            {/* 标题栏 */}
            <div className="shrink-0 border-b border-white/10 pb-2.5">
              <div className="flex items-center justify-between">
                <Badge className="bg-[#e2622c] text-[11px] font-black text-black">
                  STAGE 03 · 调度管线与冲突对齐
                </Badge>
                <span className="font-mono text-xs font-bold text-orange-400">
                  DISPATCH PIPELINE
                </span>
              </div>
              <h2 className="mt-1.5 flex items-center gap-2 text-base font-black text-slate-100 sm:text-lg">
                <Swords className="size-5 shrink-0 text-orange-400" />
                <span>多智能体即时冲突矩阵与短兵相接调度管线</span>
              </h2>
              <p className="mt-1 text-xs leading-relaxed text-slate-400">
                告别单向死板对话，通过算法并发推演与冲突聚焦，将多方利益矛盾实时转化为知乎硬核对峙长文。
              </p>
            </div>

            {/* 3 个核心算法亮点卡片（动态发光呼应当前阶段） */}
            <div className="flex flex-1 flex-col justify-around space-y-2.5 overflow-hidden py-2">
              {/* 算法 1：并发扇出表态 */}
              <div
                className={`rounded-xl border p-3 shadow-xs transition-all ${
                  stage === 1 || stage === 2
                    ? "scale-[1.01] border-[#e2622c] bg-orange-950/50 shadow-md ring-2 ring-[#e2622c]/50"
                    : "border-white/10 bg-black/40 opacity-85"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-md border border-orange-500/30 bg-orange-950 font-mono text-xs font-black text-orange-400">
                      01
                    </span>
                    <h3 className="flex items-center gap-1.5 text-xs font-black text-slate-100 sm:text-sm">
                      <Zap className="size-3.5 text-orange-400" />
                      <span>并发扇出表态（Parallel Fan-Out Dispatch）</span>
                    </h3>
                  </div>
                  {(stage === 1 || stage === 2) && (
                    <Badge className="animate-pulse border border-emerald-500/40 bg-emerald-950 text-[10px] text-emerald-400">
                      ● 演示中：单人独立亮相表态
                    </Badge>
                  )}
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                  使用 <code>Promise.all</code> 并发唤起 4 位独立 Agent
                  对拟定决策进行并行结构化表态，NDJSON 流式分块返回，<strong>首包秒级上屏</strong>
                  ，彻底根治多智能体排队延迟。
                </p>
              </div>

              {/* 算法 2：冲突矩阵对齐 */}
              <div
                className={`rounded-xl border p-3 shadow-xs transition-all ${
                  stage === 3
                    ? "scale-[1.01] border-[#e2622c] bg-orange-950/50 shadow-md ring-2 ring-[#e2622c]/50"
                    : "border-white/10 bg-black/40 opacity-85"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-md border border-orange-500/30 bg-orange-950 font-mono text-xs font-black text-orange-400">
                      02
                    </span>
                    <h3 className="flex items-center gap-1.5 text-xs font-black text-slate-100 sm:text-sm">
                      <Network className="size-3.5 text-orange-400" />
                      <span>冲突矩阵对齐算法（pickConflictPair）</span>
                    </h3>
                  </div>
                  {stage === 3 && (
                    <Badge className="animate-pulse border border-red-500/40 bg-red-950 text-[10px] text-red-400">
                      ● 演示中：两人同台短兵相接
                    </Badge>
                  )}
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                  根据各 Agent 利益函数过滤无悬念共识，
                  <strong>算法精准锁定立场极化权重最高的一对尖锐矛盾</strong>（如沈寒山极限气象预警
                  vs 燕崇山铁血戒严），凸显戏剧张力。
                </p>
              </div>

              {/* 算法 3：单次结构化交锋 */}
              <div className="rounded-xl border border-white/10 bg-black/40 p-3 shadow-xs">
                <div className="flex items-center gap-2">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-md border border-orange-500/30 bg-orange-950 font-mono text-xs font-black text-orange-400">
                    03
                  </span>
                  <h3 className="flex items-center gap-1.5 text-xs font-black text-slate-100 sm:text-sm">
                    <Brain className="size-3.5 text-orange-400" />
                    <span>单次结构化交锋合成（Single-Shot Clash）</span>
                  </h3>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                  将双方对抗合并为单次模型结构化推演，消除多轮往返产生的死锁与复读，直接合成具有知乎硬核答主辩论感的
                  <strong>针锋相对、引经据典短兵相接</strong>。
                </p>
              </div>
            </div>

            {/* 底部容灾说明 */}
            <div className="flex shrink-0 items-center justify-between rounded-lg border border-orange-500/40 bg-orange-950/40 px-3 py-2 text-xs text-orange-300">
              <div>
                <strong className="text-orange-400">🛡️ 容灾与超时保护：</strong>
                <span>采用 AbortController 毫秒级超时熔断，单 Agent 异常不中断主线推演推进。</span>
              </div>
              <ShieldAlert className="size-4 shrink-0 text-orange-400" />
            </div>
          </aside>

          {/* 👉 右半边（占 6 列）：SpeechStage 舞台（单人逐一亮相表态 ➔ 两人同台争吵） */}
          <section className="flex h-full flex-col justify-between gap-2.5 overflow-hidden rounded-xl border border-white/15 bg-gradient-to-b from-black/80 via-black/95 to-black/80 p-3.5 text-white shadow-xl lg:col-span-6">
            {/* 舞台顶栏 + 演进控制器 */}
            <div className="flex shrink-0 items-center justify-between border-b border-white/10 pb-1.5 text-xs">
              <div className="flex items-center gap-1.5 font-mono font-bold text-orange-400">
                <Radio className="size-3.5 animate-pulse text-[#e2622c]" />
                <span>{currentBeat.tag}</span>
              </div>

              {/* 手动可点击的 3 个阶段按钮与重播按钮 */}
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => handleManualStep(1)}
                  className={`cursor-pointer rounded-md px-2 py-0.5 text-[10px] font-bold transition-all ${
                    stage === 1
                      ? "bg-emerald-600 text-white shadow-xs"
                      : "bg-white/10 text-slate-400 hover:bg-white/20"
                  }`}
                >
                  ① 沈寒山表态
                </button>
                <button
                  type="button"
                  onClick={() => handleManualStep(2)}
                  className={`cursor-pointer rounded-md px-2 py-0.5 text-[10px] font-bold transition-all ${
                    stage === 2
                      ? "bg-red-600 text-white shadow-xs"
                      : "bg-white/10 text-slate-400 hover:bg-white/20"
                  }`}
                >
                  ② 燕崇山表态
                </button>
                <button
                  type="button"
                  onClick={() => handleManualStep(3)}
                  className={`cursor-pointer rounded-md px-2 py-0.5 text-[10px] font-bold transition-all ${
                    stage === 3
                      ? "bg-amber-500 font-black text-black shadow-xs"
                      : "bg-white/10 text-slate-400 hover:bg-white/20"
                  }`}
                >
                  ③ 两人同台争吵
                </button>
                <button
                  type="button"
                  onClick={() => startAutoProgression(1)}
                  title="重新播放全流程"
                  className="flex size-6 cursor-pointer items-center justify-center rounded bg-white/5 text-slate-400 transition-all hover:bg-white/15 hover:text-white"
                >
                  <Repeat className="size-3" />
                </button>
              </div>
            </div>

            {/* 竞技擂台舞台：单人时居中且大幅放大立绘，双人时两翼对峙争吵 */}
            <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden py-1">
              {/* ===== 阶段 1：沈寒山单独居中登场（立绘大幅放大，气泡紧随上方） ===== */}
              {stage === 1 && (
                <div className="animate-in zoom-in-95 fade-in flex flex-col items-center justify-center gap-2.5 duration-300">
                  {/* 居中大打字机气泡 */}
                  <div className="relative z-20 w-72 rounded-2xl border-2 border-emerald-400 bg-black/95 p-3 shadow-2xl shadow-emerald-500/40 sm:w-88">
                    <div className="flex items-center justify-between border-b border-emerald-500/30 pb-1">
                      <span className="flex items-center gap-1.5 text-xs font-black text-emerald-400">
                        <CheckCircle2 className="size-4" />
                        <span>【首席气象官 · 单独亮相】支持玩家决策</span>
                      </span>
                      <span className="font-mono text-[10px] font-bold text-emerald-300/80">
                        LEAN: SUPPORT
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed font-bold text-slate-100 sm:text-sm">
                      {speakerStanceType.displayed}
                      {speakerStanceType.isTyping && (
                        <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-emerald-400 align-middle" />
                      )}
                    </p>
                    {/* 居中气泡尖角向下 */}
                    <div className="absolute -bottom-2.5 left-1/2 size-0 -translate-x-1/2 border-x-8 border-t-10 border-x-transparent border-t-emerald-400" />
                  </div>

                  {/* 居中特写大立绘 */}
                  <div className="flex size-32 items-center justify-center overflow-hidden rounded-3xl border-3 border-emerald-400 bg-gradient-to-b from-slate-900 via-black to-slate-950 p-2 shadow-2xl ring-4 shadow-emerald-500/50 ring-emerald-500/20 backdrop-blur-md sm:size-36 lg:size-40">
                    <PixelSprite
                      frames={speakerPortrait.frames}
                      palette={speakerPortrait.palette}
                      label={speakerPortrait.label}
                      scale={4.6}
                      className={portraitMotionClass(speakerPortrait.motion, true)}
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-base font-black text-cyan-300 sm:text-lg">
                      {currentBeat.speaker.name}
                    </div>
                    <div className="text-xs font-bold text-slate-400">
                      {currentBeat.speaker.identity}
                    </div>
                  </div>
                </div>
              )}

              {/* ===== 阶段 2：燕崇山单独居中登场（立绘大幅放大，气泡紧随上方） ===== */}
              {stage === 2 && (
                <div className="animate-in zoom-in-95 fade-in flex flex-col items-center justify-center gap-2.5 duration-300">
                  {/* 居中大打字机气泡 */}
                  <div className="relative z-20 w-72 rounded-2xl border-2 border-red-500 bg-black/95 p-3 shadow-2xl shadow-red-500/40 sm:w-88">
                    <div className="flex items-center justify-between border-b border-red-500/30 pb-1">
                      <span className="flex items-center gap-1.5 text-xs font-black text-red-400">
                        <XCircle className="size-4" />
                        <span>【防务总兵官 · 单独亮相】反对玩家决策</span>
                      </span>
                      <span className="font-mono text-[10px] font-bold text-red-300/80">
                        LEAN: OPPOSE
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed font-bold text-slate-100 sm:text-sm">
                      {opponentStanceType.displayed}
                      {opponentStanceType.isTyping && (
                        <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-red-400 align-middle" />
                      )}
                    </p>
                    {/* 居中气泡尖角向下 */}
                    <div className="absolute -bottom-2.5 left-1/2 size-0 -translate-x-1/2 border-x-8 border-t-10 border-x-transparent border-t-red-500" />
                  </div>

                  {/* 居中特写大立绘 */}
                  <div className="flex size-32 items-center justify-center overflow-hidden rounded-3xl border-3 border-red-500 bg-gradient-to-b from-slate-900 via-black to-slate-950 p-2 shadow-2xl ring-4 shadow-red-500/50 ring-red-500/20 backdrop-blur-md sm:size-36 lg:size-40">
                    <PixelSprite
                      frames={opponentPortrait.frames}
                      palette={opponentPortrait.palette}
                      label={opponentPortrait.label}
                      scale={4.6}
                      className={portraitMotionClass(opponentPortrait.motion, true)}
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-base font-black text-red-400 sm:text-lg">
                      {opponent.name}
                    </div>
                    <div className="text-xs font-bold text-slate-400">{opponent.identity}</div>
                  </div>
                </div>
              )}

              {/* ===== 阶段 3：两人同台对峙，气泡紧贴人物上方，中央 VS 引爆 ===== */}
              {stage === 3 && (
                <div className="animate-in zoom-in-95 fade-in flex w-full flex-col items-center justify-center gap-2.5 duration-300">
                  {/* 上部：双人激烈交锋打字机气泡行（自适应 2 列，紧密贴近人物） */}
                  <div className="grid w-full grid-cols-2 gap-3 px-2">
                    {/* 左：沈寒山气泡 */}
                    <div className="relative rounded-xl border-2 border-cyan-400 bg-black/95 p-2 shadow-lg shadow-cyan-500/20">
                      <div className="flex items-center justify-between border-b border-cyan-500/30 pb-0.5">
                        <span className="flex items-center gap-1 text-[11px] font-black text-cyan-300">
                          <Flame className="size-3 animate-bounce text-orange-400" />
                          <span>沈寒山怒斥：</span>
                        </span>
                        <span className="font-mono text-[9px] font-bold text-cyan-400/80">
                          SUPPORT
                        </span>
                      </div>
                      <p className="mt-1 text-xs leading-snug font-bold text-slate-100">
                        {speakerClashType.displayed}
                        {speakerClashType.isTyping && (
                          <span className="ml-0.5 inline-block h-3 w-1.5 animate-pulse bg-cyan-400 align-middle" />
                        )}
                      </p>
                      {/* 尖角向下指向沈寒山 */}
                      <div className="absolute -bottom-2 left-1/2 size-0 -translate-x-1/2 border-x-5 border-t-7 border-x-transparent border-t-cyan-400" />
                    </div>

                    {/* 右：燕崇山气泡 */}
                    <div className="relative rounded-xl border-2 border-red-500 bg-black/95 p-2 shadow-lg shadow-red-500/20">
                      <div className="flex items-center justify-between border-b border-red-500/30 pb-0.5">
                        <span className="flex items-center gap-1 text-[11px] font-black text-red-400">
                          <Flame className="size-3 animate-bounce text-red-400" />
                          <span>燕崇山驳斥：</span>
                        </span>
                        <span className="font-mono text-[9px] font-bold text-red-400/80">
                          OPPOSE
                        </span>
                      </div>
                      <p className="mt-1 text-xs leading-snug font-bold text-slate-100">
                        {opponentClashType.displayed}
                        {opponentClashType.isTyping && (
                          <span className="ml-0.5 inline-block h-3 w-1.5 animate-pulse bg-red-400 align-middle" />
                        )}
                      </p>
                      {/* 尖角向下指向燕崇山 */}
                      <div className="absolute -bottom-2 left-1/2 size-0 -translate-x-1/2 border-x-5 border-t-7 border-x-transparent border-t-red-500" />
                    </div>
                  </div>

                  {/* 下部：双人立绘与中央 VS */}
                  <div className="flex w-full items-center justify-around px-4">
                    {/* 左侧：沈寒山 */}
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex size-20 items-center justify-center overflow-hidden rounded-2xl border-2 border-cyan-400 bg-gradient-to-b from-slate-900 via-black to-slate-950 p-1.5 shadow-xl shadow-cyan-500/30 backdrop-blur-md sm:size-24">
                        <PixelSprite
                          frames={speakerPortrait.frames}
                          palette={speakerPortrait.palette}
                          label={speakerPortrait.label}
                          scale={2.8}
                          className={portraitMotionClass(speakerPortrait.motion, true)}
                        />
                      </div>
                      <div className="text-center">
                        <div className="text-xs font-black text-cyan-300 sm:text-sm">
                          {currentBeat.speaker.name}
                        </div>
                        <div className="text-[10px] font-bold text-slate-400">
                          {currentBeat.speaker.identity.split("·")[0]}
                        </div>
                      </div>
                    </div>

                    {/* 中央 VS 标志 */}
                    <div className="flex flex-col items-center gap-0.5 font-mono text-xs font-black text-amber-400">
                      <div className="flex size-9 animate-pulse items-center justify-center rounded-full border-2 border-amber-400 bg-amber-500/30 shadow-xl ring-2 shadow-amber-500/50 ring-amber-400">
                        <Swords className="size-4 text-amber-300" />
                      </div>
                      <span className="text-[10px] tracking-widest">VS</span>
                    </div>

                    {/* 右侧：燕崇山 */}
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex size-20 items-center justify-center overflow-hidden rounded-2xl border-2 border-red-500 bg-gradient-to-b from-slate-900 via-black to-slate-950 p-1.5 shadow-xl shadow-red-500/30 backdrop-blur-md sm:size-24">
                        <PixelSprite
                          frames={opponentPortrait.frames}
                          palette={opponentPortrait.palette}
                          label={opponentPortrait.label}
                          scale={2.8}
                          className={portraitMotionClass(opponentPortrait.motion, true)}
                        />
                      </div>
                      <div className="text-center">
                        <div className="text-xs font-black text-red-400 sm:text-sm">
                          {opponent.name}
                        </div>
                        <div className="text-[10px] font-bold text-slate-400">
                          {opponent.identity.split("·")[0]}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 动态台词与流程状态指示条 */}
            <div className="shrink-0 rounded-xl border border-white/15 bg-black/70 px-3 py-2 text-xs leading-relaxed text-slate-100 shadow-md backdrop-blur-md">
              <div className="mb-0.5 flex items-center gap-1.5 font-mono text-xs font-bold text-amber-300">
                <Volume2 className="size-3.5 text-[#e2622c]" />
                <span>
                  {stage === 1
                    ? "【步骤 1/3 · 智能体独立亮相】沈寒山单独登场，表明【支持】执政官决策"
                    : stage === 2
                      ? "【步骤 2/3 · 智能体独立亮相】燕崇山单独登场，表明【反对】执政官决策"
                      : "【步骤 3/3 · 冲突矩阵对齐交锋】两人同台短兵相接，针锋相对互相激烈争吵！"}
                </span>
              </div>
              <p className="line-clamp-2 font-serif text-[11px] leading-relaxed text-slate-300 sm:text-xs">
                {stage === 1
                  ? "玩家选定【D项·群星飞升决议】点燃地幔熔炉后，国家极地气象站沈寒山断定常规守关必死，率先单独登场力挺地幔熔炉方案。"
                  : stage === 2
                    ? "守防总兵官燕崇山随后单独亮相，手按配枪断然否决。其阶层利益绑定关防军纪，严厉警告私启万米裂变井将引发地质崩塌灾难。"
                    : currentBeat.speech}
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
