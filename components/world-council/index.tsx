"use client";

import {
  ArrowLeft,
  CircleDot,
  Clock3,
  GitFork,
  ScrollText,
  TrendingDown,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { ThemeScene } from "@/components/pixel/theme-scene";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BranchTimeline } from "@/components/world-council/branch-timeline";
import { DecisionPanel } from "@/components/world-council/decision-panel";
import { SeatsPanel } from "@/components/world-council/seats-panel";
import { SpeechStage } from "@/components/world-council/speech-stage";
import { Timeline } from "@/components/world-council/timeline";
import { useCouncilSession } from "@/components/world-council/use-council-session";
import { WorldTabs } from "@/components/world-council/world-tabs";
import { WorldIntro } from "@/components/world-intro";
import type { ScenarioSkin } from "@/lib/scenario-skin";
import {
  actForRound,
  endingLabels,
  pressureLabels,
  type WorldGameSession,
} from "@/lib/world-ending";

interface WorldCouncilProps {
  initial: WorldGameSession;
  worldId: string;
  onBack: () => void;
  skin: ScenarioSkin;
}

export function WorldCouncil({ initial, worldId, onBack, skin }: WorldCouncilProps) {
  const router = useRouter();
  const session = useCouncilSession({ initial, worldId });

  const {
    cast,
    player,
    round,
    metrics,
    turns,
    ending,
    relations,
    crisis,
    ultimatum,
    ended,
    currentTurnSettled,
    pressure,
    entropy,
    options,
    isGeneratingOptions,
    optionsError,
    choiceDisabled,
    chooseOption,
    retryOptions,
    submittedDecision,
    submittedBranch,
    reactions,
    retorts,
    isResolving,
    isJudging,
    judgeError,
    retryJudge,
    isTurnComplete,
    startNextRound,
    canCloseVoluntarily,
    closeVoluntarily,
    turnError,
    idleOption,
    currentBeat,
    stagePhase,
    stageIdleHint,
    stageSpeakerId,
    stageOpponentId,
    handleBeatDone,
    skipPerformance,
    showIntro,
    setShowIntro,
    agentStatuses,
    lastDeltas,
    lastEntropy,
    lastCrisisPenalty,
    showOpening,
  } = session;

  if (!player) {
    return (
      <Card className="mx-auto max-w-lg shadow-none">
        <CardHeader>
          <CardTitle>玩家角色丢失</CardTitle>
          <p className="text-muted-foreground text-sm leading-6">
            存档中的角色与当前阵容不一致,请返回世界线页面重新建档。
          </p>
        </CardHeader>
        <CardContent>
          <Button
            nativeButton={false}
            render={<Link href={`/world/${encodeURIComponent(worldId)}`} />}
          >
            返回世界线
            <ArrowLeft data-icon="inline-end" />
          </Button>
        </CardContent>
      </Card>
    );
  }

  const activePlayer = player;

  function goFinale() {
    router.push(`/world/${encodeURIComponent(worldId)}/finale`);
  }

  return (
    <div className="space-y-4">
      <ThemeScene skin={skin} variant="strip" className="border-border rounded-md border" />
      {showIntro ? (
        <WorldIntro
          crisis={cast.setting.crisis}
          opening={cast.setting.opening}
          onDone={() => setShowIntro(false)}
        />
      ) : null}
      <div className="flex flex-col justify-between gap-3 border-b pb-4 sm:flex-row sm:items-center sm:pb-5">
        <div className="flex min-w-0 items-start gap-2.5 sm:items-center sm:gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            aria-label="返回角色选择"
            className="shrink-0"
          >
            <ArrowLeft />
          </Button>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <Badge>{`回合 ${String(round).padStart(2, "0")}`}</Badge>
              <Badge variant="outline">
                <CircleDot data-icon="inline-start" />
                {actForRound(round)}
              </Badge>
              {pressure !== "stable" ? (
                <Badge variant="destructive">{pressureLabels[pressure]}</Badge>
              ) : null}
              {entropy > 0 ? (
                <Badge variant="outline" className="gap-1">
                  <TrendingDown className="size-3" />
                  大势每回合流失 {entropy}
                </Badge>
              ) : null}
              <Badge variant="secondary">{skin.name}</Badge>
              {ended && ending ? (
                <Badge variant="secondary">{endingLabels[ending.type]}</Badge>
              ) : null}
            </div>
            <h2 className="mt-1.5 text-lg font-semibold sm:mt-2 sm:text-xl">危机议事</h2>
            <div className="text-muted-foreground mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
              <span className="text-foreground shrink-0 font-medium break-words">
                {initial.scenarioTitle}
              </span>
              <span className="hidden sm:inline">·</span>
              <span className="bg-muted/80 text-muted-foreground inline-flex max-w-full min-w-0 items-center gap-1.5 rounded border px-2 py-0.5 text-xs">
                <span className="text-foreground shrink-0 font-medium">主线焦点:</span>
                <span className="truncate">{crisis ? crisis.title : cast.setting.crisis}</span>
              </span>
            </div>
          </div>
        </div>
        <div className="text-muted-foreground flex shrink-0 items-center gap-1.5 text-xs sm:text-sm">
          <Clock3 className="size-4 shrink-0" />
          <span className="break-words">
            {cast.setting.time} · {cast.setting.location}
          </span>
        </div>
      </div>

      <Tabs defaultValue="council" className="w-full min-w-0 gap-4">
        <TabsList className="grid h-10 w-full grid-cols-3 sm:w-fit sm:min-w-96">
          <TabsTrigger value="council" className="text-xs sm:text-sm">
            <Users data-icon="inline-start" />
            议事现场
          </TabsTrigger>
          <TabsTrigger value="messages" className="text-xs sm:text-sm">
            <ScrollText data-icon="inline-start" />
            消息记录
          </TabsTrigger>
          <TabsTrigger value="branches" className="text-xs sm:text-sm">
            <GitFork data-icon="inline-start" />
            世界线
          </TabsTrigger>
        </TabsList>

        <TabsContent value="council" className="mt-0 w-full min-w-0">
          <div className="grid w-full min-w-0 items-start gap-4 lg:grid-cols-[15rem_minmax(0,1fr)_17rem]">
            <div className="order-2 w-full min-w-0 lg:order-1">
              <SeatsPanel
                cast={cast}
                activePlayer={activePlayer}
                agentStatuses={agentStatuses}
                relations={relations}
                ultimatum={ultimatum}
                speakingId={stageSpeakerId}
                opposingId={stageOpponentId}
                skin={skin}
              />
            </div>

            <div className="order-1 w-full min-w-0 space-y-4 lg:order-2">
              <SpeechStage
                skin={skin}
                beat={currentBeat}
                player={activePlayer}
                phase={stagePhase}
                idleHint={stageIdleHint}
                onBeatDone={handleBeatDone}
                onSkip={skipPerformance}
              />

              <Card className="shadow-none">
                <CardContent className="p-0">
                  <DecisionPanel
                    cast={cast}
                    ended={ended}
                    currentTurnSettled={currentTurnSettled}
                    submittedDecision={submittedDecision}
                    submittedBranch={submittedBranch}
                    isGeneratingOptions={isGeneratingOptions}
                    options={options}
                    optionsError={optionsError}
                    onRetryOptions={retryOptions}
                    choiceDisabled={choiceDisabled}
                    onChooseOption={(option) => void chooseOption(option)}
                    isResolving={isResolving}
                    reactions={reactions}
                    isJudging={isJudging}
                    judgeError={judgeError}
                    onRetryJudge={retryJudge}
                    isTurnComplete={isTurnComplete}
                    turnsCount={turns.length}
                    onStartNextRound={startNextRound}
                    canCloseVoluntarily={canCloseVoluntarily}
                    onCloseVoluntarily={closeVoluntarily}
                    onGoFinale={goFinale}
                    turnError={turnError}
                    crisis={crisis}
                    ultimatum={ultimatum}
                    idleOption={idleOption}
                  />
                </CardContent>
              </Card>
            </div>

            <div className="order-3 w-full min-w-0 lg:order-3">
              <WorldTabs
                cast={cast}
                activePlayer={activePlayer}
                metrics={metrics}
                lastDeltas={lastDeltas}
                lastEntropy={lastEntropy}
                lastCrisisPenalty={lastCrisisPenalty}
                round={round}
                turns={turns}
                relations={relations}
                reactions={reactions}
                retorts={retorts}
                submittedDecision={submittedDecision}
                currentTurnSettled={currentTurnSettled}
                isTurnComplete={isTurnComplete}
                crisis={crisis}
                ultimatum={ultimatum}
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="messages" className="mt-0 w-full min-w-0">
          <Card className="shadow-none">
            <CardContent className="p-0">
              <Timeline
                cast={cast}
                activePlayer={activePlayer}
                turns={turns}
                ended={ended}
                ending={ending}
                showOpening={showOpening}
                onGoFinale={goFinale}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="branches" className="mt-0 w-full min-w-0">
          <BranchTimeline
            round={round}
            turns={turns}
            options={options}
            submittedBranch={submittedBranch}
            ended={ended}
            ending={ending}
            choiceDisabled={choiceDisabled}
            onChooseOption={(option) => void chooseOption(option)}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
