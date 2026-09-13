"use client";

import {
  Check,
  Flag,
  GitFork,
  LoaderCircle,
  PauseCircle,
  ScrollText,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CrisisBanner, UltimatumBanner } from "@/components/world-council/messages";
import { type WorldCast } from "@/lib/world-cast";
import {
  MIN_ROUND_TO_CLOSE,
  metricKeys,
  metricLabels,
  type TurnReactionRecord,
  type WorldCrisis,
  type WorldUltimatum,
} from "@/lib/world-ending";
import {
  type DecisionOption,
  type ForecastEntry,
  type ImpactHint,
  type RoundOptions,
} from "@/lib/world-options";

interface DecisionPanelProps {
  cast: WorldCast;
  ended: boolean;
  currentTurnSettled: boolean;
  submittedDecision: string;
  submittedBranch: DecisionOption | null;
  isGeneratingOptions: boolean;
  options: RoundOptions | null;
  optionsError: string;
  onRetryOptions: () => void;
  choiceDisabled: boolean;
  onChooseOption: (option: DecisionOption) => void;
  isResolving: boolean;
  reactions: TurnReactionRecord[];
  isJudging: boolean;
  judgeError: string;
  onRetryJudge: () => void;
  isTurnComplete: boolean;
  turnsCount: number;
  onStartNextRound: () => void;
  canCloseVoluntarily: boolean;
  onCloseVoluntarily: () => void;
  onGoFinale: () => void;
  turnError: string;
  crisis: WorldCrisis | null;
  ultimatum: WorldUltimatum | null;
  idleOption: DecisionOption | null;
}

function formatQuote(text: string): string {
  const trimmed = text.trim();
  const clean = trimmed.replace(/^[“"「]\s*/, "").replace(/\s*[”"」]$/, "");
  return `“${clean}”`;
}

function ImpactRow({ impact }: { impact: ImpactHint }) {
  return (
    <span className="flex w-full min-w-0 flex-wrap gap-1.5">
      {metricKeys.map((key) => {
        const hint = impact[key];
        const tone = hint.startsWith("↑")
          ? "text-emerald-600 dark:text-emerald-400"
          : hint.startsWith("↓")
            ? "text-destructive dark:text-red-400"
            : "text-muted-foreground";
        return (
          <span
            key={key}
            className="bg-muted/70 inline-flex shrink-0 items-center gap-1 rounded px-1.5 py-0.5 text-[11px]"
          >
            <span className="text-muted-foreground">{metricLabels[key].slice(0, 2)}</span>
            <span className={`font-mono font-medium ${tone}`}>{hint}</span>
          </span>
        );
      })}
    </span>
  );
}

function ForecastRow({
  forecast,
  nameById,
}: {
  forecast: ForecastEntry[];
  nameById: Map<string, string>;
}) {
  if (!forecast.length) return null;

  const backs = forecast.filter((e) => e.lean === "back");
  const opposes = forecast.filter((e) => e.lean === "oppose");
  const doubts = forecast.filter((e) => e.lean === "doubt");

  return (
    <span className="text-muted-foreground flex w-full min-w-0 flex-wrap items-center gap-x-2.5 gap-y-1 pt-0.5 text-[11px] leading-tight">
      {backs.length ? (
        <span className="inline-flex min-w-0 flex-wrap items-center gap-1 font-medium text-emerald-700 dark:text-emerald-400">
          <span className="shrink-0">赞成:</span>
          <span className="break-words">
            {backs.map((e) => nameById.get(e.agentId) ?? e.agentId).join("、")}
          </span>
        </span>
      ) : null}
      {opposes.length ? (
        <span className="inline-flex min-w-0 flex-wrap items-center gap-1 font-medium text-red-700 dark:text-red-400">
          <span className="shrink-0">反对:</span>
          <span className="break-words">
            {opposes.map((e) => nameById.get(e.agentId) ?? e.agentId).join("、")}
          </span>
        </span>
      ) : null}
      {doubts.length ? (
        <span className="inline-flex min-w-0 flex-wrap items-center gap-1 opacity-80">
          <span className="shrink-0">观望:</span>
          <span className="break-words">
            {doubts.map((e) => nameById.get(e.agentId) ?? e.agentId).join("、")}
          </span>
        </span>
      ) : null}
    </span>
  );
}

function OptionsLoadingState() {
  const branchPreviews = [
    { label: "分支 A", archetype: "稳妥方案", desc: "平衡风险与收益，稳固基本盘" },
    { label: "分支 B", archetype: "进取破局", desc: "主动态势突破，争夺关键主动权" },
    { label: "分支 C", archetype: "权变结盟", desc: "外交拉拢制衡，利益置换解敌意" },
    { label: "分支 D", archetype: "险策破壁", desc: "高风险博弈，绝境反击押注奇迹" },
  ];

  return (
    <div className="space-y-3" role="status" aria-label="AI 正在推演选项">
      <div className="border-primary/30 bg-primary/5 flex items-center justify-between rounded-lg border px-3.5 py-2.5 text-xs">
        <div className="flex items-center gap-2">
          <LoaderCircle className="text-primary size-4 shrink-0 animate-spin" />
          <span className="text-foreground font-medium">AI 正在推演本回合世界线分叉…</span>
          <span className="text-muted-foreground hidden sm:inline">根据多方阵营博弈实时演算中</span>
        </div>
        <div className="text-primary/80 flex items-center gap-1.5 font-mono text-[11px]">
          <Sparkles className="size-3.5 animate-pulse text-amber-500" />
          <span>推演中</span>
        </div>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        {branchPreviews.map((branch, idx) => (
          <div
            key={idx}
            className="border-border/80 bg-muted/20 relative flex min-h-[105px] animate-pulse flex-col justify-between rounded-lg border border-dashed p-3.5"
          >
            <div>
              <div className="mb-2 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="bg-primary/10 text-primary rounded px-1.5 py-0.5 font-mono text-[11px] font-semibold">
                    {branch.label}
                  </span>
                  <span className="text-foreground/85 text-xs font-medium">{branch.archetype}</span>
                </div>
                <div className="text-muted-foreground flex items-center gap-1.5 text-[10px]">
                  <span className="relative flex size-1.5 shrink-0">
                    <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                    <span className="bg-primary relative inline-flex size-1.5 rounded-full" />
                  </span>
                  <span className="leading-none">生成中</span>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="bg-muted-foreground/15 h-3 w-4/5 rounded" />
                <div className="bg-muted-foreground/10 h-2.5 w-3/5 rounded" />
              </div>
            </div>
            <div className="border-border/40 text-muted-foreground/70 mt-2 flex items-center justify-between border-t pt-2 font-mono text-[10px]">
              <span>{branch.desc}</span>
              <span>待选择</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DecisionPanel({
  cast,
  ended,
  currentTurnSettled,
  submittedDecision,
  submittedBranch,
  isGeneratingOptions,
  options,
  optionsError,
  onRetryOptions,
  choiceDisabled,
  onChooseOption,
  isResolving,
  reactions,
  isJudging,
  judgeError,
  onRetryJudge,
  isTurnComplete,
  turnsCount,
  onStartNextRound,
  canCloseVoluntarily,
  onCloseVoluntarily,
  onGoFinale,
  turnError,
  crisis,
  ultimatum,
  idleOption,
}: DecisionPanelProps) {
  const nameById = new Map(cast.agentCharacters.map((character) => [character.id, character.name]));
  const agentCount = cast.agentCharacters.length;

  return (
    <div className="space-y-3 border-t p-3 sm:p-5">
      {!ended && crisis ? <CrisisBanner crisis={crisis} /> : null}
      {!ended && ultimatum ? <UltimatumBanner ultimatum={ultimatum} /> : null}

      {!ended && !currentTurnSettled && !submittedDecision ? (
        <div aria-live="polite">
          {isGeneratingOptions || (!options && !optionsError) ? <OptionsLoadingState /> : null}
          {optionsError ? (
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-destructive text-xs" role="alert">
                {optionsError}
              </p>
              <Button type="button" variant="outline" size="sm" onClick={onRetryOptions}>
                重试生成选项
              </Button>
            </div>
          ) : null}
          {options && !isGeneratingOptions ? (
            <div className="space-y-3">
              <div className="border-primary/30 bg-primary/5 flex items-start gap-2.5 rounded-md border p-3 sm:gap-3">
                <GitFork className="text-primary mt-0.5 size-4 shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium">世界线分叉点</p>
                  <p className="text-muted-foreground mt-1 text-xs leading-5 text-pretty break-words">
                    {options.situation}
                  </p>
                </div>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {options.options.map((option, index) => {
                  const isWild = option.risk === "狂";
                  return (
                    <Button
                      key={option.id}
                      type="button"
                      variant="outline"
                      disabled={choiceDisabled}
                      onClick={() => onChooseOption(option)}
                      className={`h-auto w-full min-w-0 shrink flex-col items-start gap-2 p-3 text-left whitespace-normal transition-all sm:p-4 ${
                        isWild
                          ? "border-amber-500/40 bg-amber-500/5 hover:border-amber-500/70 hover:bg-amber-500/10 dark:border-amber-400/40 dark:bg-amber-950/20"
                          : ""
                      }`}
                    >
                      <span className="flex w-full min-w-0 items-start gap-2 whitespace-normal">
                        <span
                          className={`grid size-6 shrink-0 place-items-center rounded font-mono text-xs ${
                            isWild
                              ? "bg-amber-500 font-bold text-amber-950"
                              : "bg-primary text-primary-foreground"
                          }`}
                        >
                          {["A", "B", "C", "D"][index] ?? index + 1}
                        </span>
                        <span className="min-w-0 flex-1 font-medium break-words">
                          {option.title}
                        </span>
                      </span>
                      <span className="flex w-full flex-wrap items-center gap-1.5 pl-8">
                        {option.crisisAction ? <Badge variant="destructive">处理危机</Badge> : null}
                        {isWild ? (
                          <Badge className="border-amber-500/40 bg-amber-500/20 text-amber-800 dark:text-amber-300">
                            🌟 狂 · 天命破壁
                          </Badge>
                        ) : (
                          <Badge variant="secondary">{option.risk}</Badge>
                        )}
                      </span>
                      {option.epigraph ? (
                        <div
                          className={`w-full min-w-0 rounded px-2.5 py-1.5 font-serif text-xs leading-relaxed text-pretty break-words whitespace-normal italic ${
                            isWild
                              ? "border-l-2 border-amber-500/70 bg-amber-500/15 text-amber-800 dark:text-amber-200"
                              : "border-primary/50 bg-muted/50 text-muted-foreground border-l-2"
                          }`}
                        >
                          {formatQuote(option.epigraph)}
                        </div>
                      ) : null}
                      <span className="text-muted-foreground w-full min-w-0 text-xs leading-5 font-normal break-words whitespace-normal">
                        {option.desc}
                      </span>
                      <ImpactRow impact={option.impact} />
                      <ForecastRow forecast={option.forecast} nameById={nameById} />
                    </Button>
                  );
                })}
              </div>
              {idleOption ? (
                <Button
                  type="button"
                  variant="ghost"
                  disabled={choiceDisabled}
                  onClick={() => onChooseOption(idleOption)}
                  className="border-border h-auto w-full min-w-0 flex-col items-start gap-1.5 rounded-lg border border-dashed p-3 text-left"
                >
                  <span className="flex w-full min-w-0 items-start gap-2 whitespace-normal">
                    <PauseCircle className="text-muted-foreground size-4 shrink-0" />
                    <span className="min-w-0 flex-1 font-medium break-words">
                      {idleOption.title}
                    </span>
                    <Badge variant="outline" className="shrink-0">
                      {idleOption.risk}
                    </Badge>
                  </span>
                  <span className="text-muted-foreground text-xs leading-5 font-normal break-words whitespace-normal">
                    {idleOption.desc}
                  </span>
                </Button>
              ) : null}
              <p className="text-muted-foreground text-xs">
                点选其一即提交,不可更改。四维代价与预测都只是推演,不保证成真。
              </p>
            </div>
          ) : null}
        </div>
      ) : null}

      {submittedBranch ? (
        <div
          className="border-primary/30 bg-primary/5 flex items-start gap-2.5 rounded-md border p-3 sm:gap-3"
          aria-live="polite"
        >
          <GitFork className="text-primary mt-0.5 size-4 shrink-0" />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium break-words">
              已进入世界线分支{" "}
              {submittedBranch.id === "idle" ? "停驻" : submittedBranch.id.toUpperCase()}
            </p>
            <p className="text-muted-foreground mt-1 text-xs leading-5 break-words">
              {submittedBranch.title}
            </p>
            {submittedBranch.epigraph ? (
              <p className="mt-1 font-serif text-xs break-words whitespace-normal text-amber-800 italic dark:text-amber-200">
                {formatQuote(submittedBranch.epigraph)}
              </p>
            ) : null}
          </div>
        </div>
      ) : null}

      {isResolving ? (
        <div className="text-muted-foreground flex items-center gap-2 text-xs" aria-live="polite">
          <LoaderCircle className="size-3.5 animate-spin" />
          已收到 {reactions.length} / {agentCount} 条回应
        </div>
      ) : null}
      {isJudging ? (
        <div className="text-muted-foreground flex items-center gap-2 text-xs" aria-live="polite">
          <LoaderCircle className="size-3.5 animate-spin" />
          各方表态收齐,正在裁决世界走向……
        </div>
      ) : null}
      {judgeError ? (
        <div className="flex flex-wrap items-center gap-2" aria-live="polite">
          <p className="text-destructive text-xs" role="alert">
            {judgeError}
          </p>
          <Button type="button" variant="outline" size="sm" onClick={onRetryJudge}>
            重试裁决
          </Button>
        </div>
      ) : null}
      {isTurnComplete && !ended && !isJudging && !judgeError ? (
        <div className="flex flex-wrap items-center gap-2" aria-live="polite">
          <div className="flex items-center gap-2 text-xs text-emerald-700">
            <Check className="size-3.5" />
            本回合已裁决(已演 {turnsCount} 回合)
          </div>
          <Button type="button" variant="outline" size="sm" onClick={onStartNextRound}>
            开始下一回合
          </Button>
          {canCloseVoluntarily ? (
            <Button type="button" variant="ghost" size="sm" onClick={onCloseVoluntarily}>
              <Flag data-icon="inline-start" />
              收束世界线
            </Button>
          ) : (
            <span className="text-muted-foreground text-xs">
              演满 {MIN_ROUND_TO_CLOSE} 回合后可随时收束(拖得越久,大势损耗越快)
            </span>
          )}
        </div>
      ) : null}
      {ended ? (
        <div className="flex flex-wrap items-center gap-2" aria-live="polite">
          <Button type="button" size="sm" onClick={onGoFinale}>
            <ScrollText data-icon="inline-start" />
            查看终章结算
          </Button>
        </div>
      ) : null}
      {turnError ? (
        <p className="text-destructive text-xs" role="alert">
          {turnError}(可直接重选其一重试)
        </p>
      ) : null}
    </div>
  );
}
