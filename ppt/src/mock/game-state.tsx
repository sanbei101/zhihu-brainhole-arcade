import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

import {
  MOCK_AGENTS,
  MOCK_OPTIONS,
  MOCK_PLAYERS,
  MOCK_SCENARIOS,
  type MockAgentCharacter,
  type MockDecisionOption,
  type MockPlayerCharacter,
  type MockScenarioItem,
} from "./preset-data";

interface MockGameState {
  selectedScenario: MockScenarioItem;
  setSelectedScenario: (scenario: MockScenarioItem) => void;
  selectedPlayer: MockPlayerCharacter;
  setSelectedPlayerId: (id: string) => void;
  players: MockPlayerCharacter[];
  agents: MockAgentCharacter[];
  options: MockDecisionOption[];
  selectedOption: MockDecisionOption;
  setSelectedOptionId: (id: "A" | "B" | "C" | "D") => void;
  metrics: {
    stability: number;
    morale: number;
    support: number;
    resources: number;
  };
  hasCommitted: boolean;
  commitDecision: () => void;
  activeDebateIndex: number;
  setActiveDebateIndex: (index: number) => void;
  activeChapterIndex: number;
  setActiveChapterIndex: (index: number) => void;
  copiedToast: boolean;
  triggerCopyToast: () => void;
  resetAll: () => void;
}

const MockGameContext = createContext<MockGameState | null>(null);

export function MockGameProvider({ children }: { children: ReactNode }) {
  const [selectedScenario, setSelectedScenario] = useState<MockScenarioItem>(MOCK_SCENARIOS[0]);
  const [selectedPlayerId, setSelectedPlayerId] = useState<string>("player_xunyu");
  const [selectedOptionId, setSelectedOptionId] = useState<"A" | "B" | "C" | "D">("D");
  const [hasCommitted, setHasCommitted] = useState<boolean>(true);
  const [activeDebateIndex, setActiveDebateIndex] = useState<number>(2); // 默认落在第3回合短兵相接
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(1); // 默认展示卷二焚舟断汉
  const [copiedToast, setCopiedToast] = useState<boolean>(false);

  const selectedPlayer = useMemo(
    () => MOCK_PLAYERS.find((p) => p.id === selectedPlayerId) ?? MOCK_PLAYERS[0],
    [selectedPlayerId],
  );

  const selectedOption = useMemo(
    () => MOCK_OPTIONS.find((o) => o.id === selectedOptionId) ?? MOCK_OPTIONS[3],
    [selectedOptionId],
  );

  // 动态根据当前选中的选项计算国力数值
  const metrics = useMemo(() => {
    const base = { stability: 52, morale: 54, support: 48, resources: 50 };
    if (!hasCommitted) return base;
    return {
      stability: Math.min(100, Math.max(0, base.stability + selectedOption.deltas.stability)),
      morale: Math.min(100, Math.max(0, base.morale + selectedOption.deltas.morale)),
      support: Math.min(100, Math.max(0, base.support + selectedOption.deltas.support)),
      resources: Math.min(100, Math.max(0, base.resources + selectedOption.deltas.resources)),
    };
  }, [hasCommitted, selectedOption]);

  const commitDecision = () => {
    setHasCommitted(true);
  };

  const triggerCopyToast = () => {
    setCopiedToast(true);
    setTimeout(() => setCopiedToast(false), 2500);
  };

  const resetAll = () => {
    setSelectedScenario(MOCK_SCENARIOS[0]);
    setSelectedPlayerId("player_xunyu");
    setSelectedOptionId("D");
    setHasCommitted(true);
    setActiveDebateIndex(2);
    setActiveChapterIndex(1);
  };

  return (
    <MockGameContext.Provider
      value={{
        selectedScenario,
        setSelectedScenario,
        selectedPlayer,
        setSelectedPlayerId,
        players: MOCK_PLAYERS,
        agents: MOCK_AGENTS,
        options: MOCK_OPTIONS,
        selectedOption,
        setSelectedOptionId,
        metrics,
        hasCommitted,
        commitDecision,
        activeDebateIndex,
        setActiveDebateIndex,
        activeChapterIndex,
        setActiveChapterIndex,
        copiedToast,
        triggerCopyToast,
        resetAll,
      }}
    >
      {children}
    </MockGameContext.Provider>
  );
}

export function useMockGame() {
  const context = useContext(MockGameContext);
  if (!context) {
    throw new Error("useMockGame must be used within a MockGameProvider");
  }
  return context;
}
