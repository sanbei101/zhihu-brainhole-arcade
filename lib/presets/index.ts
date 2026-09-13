import { findScenario } from "@/lib/scenario-library";
import { type WorldCast } from "@/lib/world-cast";
import { type RoundOptions } from "@/lib/world-options";

import { AFTER_HUMAN_PRESETS } from "./after-human";
import { ALIEN_PRESETS } from "./alien";
import { APOCALYPSE_PRESETS } from "./apocalypse";
import { COSMIC_PRESETS } from "./cosmic";
import { DINO_PRESETS } from "./dino";
import { EVOLUTION_PRESETS } from "./evolution";
import { FUTURE_TECH_PRESETS } from "./future-tech";
import { QIN_HAN_PRESETS } from "./qin-han";
import { TANG_SONG_MING_PRESETS } from "./tang-song-ming";
import { THREE_KINGDOMS_PRESETS } from "./three-kingdoms";
import { type PresetCastEntry, type PresetLookupResult } from "./types";

export * from "./types";

// ==========================================
// 1. 全局各世界预制池统一汇总
// ==========================================

export const ALL_PRESETS: PresetCastEntry[] = [
  ...THREE_KINGDOMS_PRESETS,
  ...COSMIC_PRESETS,
  ...QIN_HAN_PRESETS,
  ...APOCALYPSE_PRESETS,
  ...DINO_PRESETS,
  ...TANG_SONG_MING_PRESETS,
  ...AFTER_HUMAN_PRESETS,
  ...EVOLUTION_PRESETS,
  ...FUTURE_TECH_PRESETS,
  ...ALIEN_PRESETS,
];

/** 按 themeId 聚合的预制池 (每个世界 1~8 个) */
export const THEME_PRESET_MAP: Record<string, PresetCastEntry[]> = {
  "three-kingdoms": THREE_KINGDOMS_PRESETS,
  cosmic: COSMIC_PRESETS,
  "qin-han": QIN_HAN_PRESETS,
  apocalypse: APOCALYPSE_PRESETS,
  dino: DINO_PRESETS,
  "tang-song-ming": TANG_SONG_MING_PRESETS,
  "after-human": AFTER_HUMAN_PRESETS,
  evolution: EVOLUTION_PRESETS,
  "future-tech": FUTURE_TECH_PRESETS,
  alien: ALIEN_PRESETS,
};

// ==========================================
// 2. 预制检索与轮转抽取中心
// ==========================================

interface GetCastPresetOptions {
  scenarioId: string;
  excludePresetId?: string;
}

/**
 * 根据知乎问题 ID 获取匹配的世界线预制。
 * 1. 优先在专属绑定了此 scenarioId 的预制中抽取。
 * 2. 次选在该问题所属的世界主题 (themeId) 预制池中轮转抽取。
 * 3. 支持 excludePresetId,保证点击"重新生成"时切换至同一池内的下一套预制。
 */
export function getCastPreset(options: GetCastPresetOptions): PresetLookupResult {
  const { scenarioId, excludePresetId } = options;
  const scenarioInfo = findScenario(scenarioId);
  const themeId = scenarioInfo?.theme.id ?? "three-kingdoms";
  const themePool = THEME_PRESET_MAP[themeId] ?? THREE_KINGDOMS_PRESETS;

  // 1. 寻找直接命中预制 id 或绑定了此 scenarioId 的专属预制池
  const directlyBound = ALL_PRESETS.filter(
    (item) => item.id === scenarioId || item.scenarioIds?.includes(scenarioId),
  );

  // 2. 确定候选池:
  // 若无排除项,优先使用专属预制;若有排除项且专属池只有1套,则扩展至整个主题预制池轮转,确保用户能切到新视角
  let candidatePool =
    directlyBound.length > 0 && (!excludePresetId || directlyBound.length > 1)
      ? directlyBound
      : themePool;

  if (candidatePool.length === 0) {
    candidatePool = THREE_KINGDOMS_PRESETS;
  }

  const totalInPool = candidatePool.length;

  // 3. 轮转选取:若传入了 excludePresetId,选同一池或主题池内的下一套
  let selectedIndex = 0;
  if (excludePresetId && totalInPool > 1) {
    const prevIndex = candidatePool.findIndex((item) => item.id === excludePresetId);
    selectedIndex = prevIndex >= 0 ? (prevIndex + 1) % totalInPool : 1;
  }

  const selected = candidatePool[selectedIndex] ?? candidatePool[0] ?? ALL_PRESETS[0];

  return {
    preset: structuredClone(selected) as PresetCastEntry,
    totalInPool,
    currentIndex: selectedIndex,
  };
}

/**
 * 兼容旧版调用的简易提取方法 (直接返回深拷贝的 WorldCast)
 */
export function getPresetCast(scenarioId: string): WorldCast | null {
  const result = getCastPreset({ scenarioId });
  return result.preset.cast;
}

/**
 * 获取玩家角色在指定世界线/剧本下的预制第一回合选项
 * 优先从匹配的 preset.initialOptions 中读取
 */
export function getInitialRoundOptions(options: {
  scenarioId: string;
  playerId: string;
  fallbackSituation?: string;
}): RoundOptions | null {
  const { scenarioId, playerId, fallbackSituation } = options;
  const lookup = getCastPreset({ scenarioId });
  const raw = lookup?.preset?.initialOptions?.[playerId];
  if (!raw) return null;

  if (Array.isArray(raw)) {
    return {
      situation:
        fallbackSituation ||
        lookup.preset.cast.setting.crisis ||
        "面对当前的突发局势，作为关键决策者，你必须做出抉择。",
      options: raw,
    };
  }

  return raw;
}
