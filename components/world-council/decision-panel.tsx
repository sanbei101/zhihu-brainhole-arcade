"use client";

import { Check, Flag, GitFork, LoaderCircle, PauseCircle, ScrollText } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
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
    <span className="flex flex-wrap gap-1.5">
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
            className="bg-muted/70 inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[11px]"
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
    <span className="text-muted-foreground flex flex-wrap items-center gap-x-2.5 gap-y-1 pt-0.5 text-[11px] leading-tight">
      {backs.length ? (
        <span className="inline-flex items-center gap-1 font-medium text-emerald-700 dark:text-emerald-400">
          <span>赞成:</span>
          <span>{backs.map((e) => nameById.get(e.agentId) ?? e.agentId).join("、")}</span>
        </span>
      ) : null}
      {opposes.length ? (
        <span className="inline-flex items-center gap-1 font-medium text-red-700 dark:text-red-400">
          <span>反对:</span>
          <span>{opposes.map((e) => nameById.get(e.agentId) ?? e.agentId).join("、")}</span>
        </span>
      ) : null}
      {doubts.length ? (
        <span className="inline-flex items-center gap-1 opacity-80">
          <span>观望:</span>
          <span>{doubts.map((e) => nameById.get(e.agentId) ?? e.agentId).join("、")}</span>
        </span>
      ) : null}
    </span>
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
    <div className="space-y-3 border-t p-4 sm:p-5">
      {!ended && crisis ? <CrisisBanner crisis={crisis} /> : null}
      {!ended && ultimatum ? <UltimatumBanner ultimatum={ultimatum} /> : null}

      {!ended && !currentTurnSettled && !submittedDecision ? (
        <div aria-live="polite">
          {isGeneratingOptions ? (
            <div className="grid gap-2 sm:grid-cols-2">
              {[0, 1, 2, 3].map((index) => (
                <Skeleton key={index} className="h-28" />
              ))}
            </div>
          ) : null}
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
              <div className="border-primary/30 bg-primary/5 flex items-start gap-3 rounded-md border p-3">
                <GitFork className="text-primary mt-0.5 size-4 shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm font-medium">世界线分叉点</p>
                  <p className="text-muted-foreground mt-1 text-xs leading-5">
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
                      className={`h-auto w-full min-w-0 flex-col items-start gap-2 p-4 text-left whitespace-normal transition-all ${
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
                  <span className="text-muted-foreground text-xs leading-5 font-normal whitespace-normal">
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
          className="border-primary/30 bg-primary/5 flex items-start gap-3 rounded-md border p-3"
          aria-live="polite"
        >
          <GitFork className="text-primary mt-0.5 size-4 shrink-0" />
          <div className="min-w-0">
            <p className="text-sm font-medium">
              已进入世界线分支{" "}
              {submittedBranch.id === "idle" ? "停驻" : submittedBranch.id.toUpperCase()}
            </p>
            <p className="text-muted-foreground mt-1 text-xs leading-5">{submittedBranch.title}</p>
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
