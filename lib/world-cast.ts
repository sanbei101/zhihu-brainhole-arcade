import { z } from "zod";

import { publicErrorSchema } from "@/lib/app-error";

export const worldCastRequestSchema = z.object({
  scenarioId: z.string().trim().min(1).max(100),
  title: z.string().trim().min(1).max(300),
  content: z.string().trim().max(6000),
  forceRegenerate: z.boolean().optional(),
  excludePresetId: z.string().optional(),
});

/**
 * 立绘原型:决定议事厅舞台上这个人物的像素造型(冠帽、衣着、手持物)。
 * 只用来选造型,不影响任何玩法数值。
 */
export const rawCharacterArchetypeEnum = z.enum([
  "official",
  "general",
  "envoy",
  "magnate",
  "technician",
  "commoner",
]);
export type CharacterArchetype = z.infer<typeof rawCharacterArchetypeEnum>;

const ARCHETYPE_SYNONYMS: Record<string, CharacterArchetype> = {
  official: "official",
  文臣: "official",
  官员: "official",
  学者: "official",
  幕僚: "official",
  谋士: "official",
  文官: "official",
  minister: "official",
  civil: "official",
  scholar: "official",

  general: "general",
  武将: "general",
  将军: "general",
  将帅: "general",
  武人: "general",
  军人: "general",
  统帅: "general",
  commander: "general",
  warrior: "general",
  soldier: "general",

  envoy: "envoy",
  使者: "envoy",
  说客: "envoy",
  外交官: "envoy",
  中间人: "envoy",
  diplomat: "envoy",

  magnate: "magnate",
  商贾: "magnate",
  商人: "magnate",
  资本: "magnate",
  财阀: "magnate",
  东家: "magnate",
  merchant: "magnate",

  technician: "technician",
  技术: "technician",
  工匠: "technician",
  科学家: "technician",
  工程师: "technician",
  科研: "technician",
  工程: "technician",
  engineer: "technician",
  scientist: "technician",

  commoner: "commoner",
  平民: "commoner",
  百姓: "commoner",
  群众: "commoner",
  匠人: "commoner",
  渔农: "commoner",
  citizen: "commoner",
  peasant: "commoner",
};

const normalizeArchetype = (raw: unknown): unknown => {
  if (typeof raw !== "string") return raw;
  const text = raw.trim().toLowerCase();
  return ARCHETYPE_SYNONYMS[text] ?? text;
};

export const characterArchetypeSchema = z
  .preprocess(normalizeArchetype, rawCharacterArchetypeEnum)
  .describe(
    "角色立绘原型: official(文臣/学者) | general(将帅/武人) | envoy(使者/说客) | magnate(商贾/资本) | technician(技术/科研) | commoner(平民/工匠)",
  );

export const archetypeLabels: Record<CharacterArchetype, string> = {
  official: "文臣",
  general: "武将",
  envoy: "使者",
  magnate: "商贾",
  technician: "技术",
  commoner: "平民",
};

const characterSchema = z.object({
  id: z.string().describe("角色唯一的简短英文标识"),
  name: z.string().describe("符合时代背景的角色姓名"),
  identity: z.string().describe("角色的身份与职务"),
  faction: z.string().describe("角色所属阵营或利益群体"),
  archetype: characterArchetypeSchema.describe(
    "这个角色的立绘原型,只能从 official(文臣/幕僚/学者)、general(将帅/武人)、envoy(使者/说客/中间人)、magnate(商贾/资本/东家)、technician(技术/科研/工程)、commoner(平民/匠人/渔农) 里挑最贴近身份的一个",
  ),
  personality: z.string().describe("两到三个鲜明且会影响决策的性格特征"),
  publicGoal: z.string().describe("角色公开追求的目标"),
  secret: z.string().describe("只有角色自己知道的秘密或真实动机"),
  relationship: z.string().describe("与其他核心人物最重要的关系或矛盾"),
  voice: z.string().describe("角色说话时的语言习惯、语气和关注点"),
  redLine: z.string().describe("角色绝不会接受的结果或底线"),
});

export const playerCharacterSchema = characterSchema.extend({
  decisionPower: z.string().describe("玩家扮演此角色时能直接调动的关键资源或权力"),
  privateGoal: z
    .string()
    .describe(
      "只有玩家自己知道的私密目标,一句话、具体到可以被判定是否达成(如'无论如何保住幼弟性命'),不能与公开目标重复",
    ),
});

export const agentCharacterSchema = characterSchema.extend({
  pressureMethod: z.string().describe("该角色向玩家施压或推进局势的主要手段"),
  openingLine: z.string().describe("该角色在第一幕对玩家说的第一句话"),
});

export const worldSettingSchema = z.object({
  time: z.string().describe("故事发生的具体时间"),
  location: z.string().describe("故事开始的地点"),
  crisis: z.string().describe("此刻所有角色必须面对的核心危机"),
  opening: z.string().describe("不超过一百五十字的第一幕开场旁白"),
  rules: z
    .array(z.string().min(1).max(120))
    .min(3)
    .max(6)
    .describe("三到六条不能被角色违背的时代、制度、地理或技术硬约束"),
});

export const worldCastSchema = z.object({
  setting: worldSettingSchema,
  playerCharacters: z
    .array(playerCharacterSchema)
    .length(3)
    .describe("三个立场和玩法明显不同的玩家候选角色"),
  agentCharacters: z
    .array(agentCharacterSchema)
    .length(4)
    .describe("四个将在后续回合中分别由独立 AI Agent 扮演的角色"),
});

export type WorldCast = z.infer<typeof worldCastSchema>;

export const worldCastStageSchema = z.enum(["setting", "players", "agents"]);
export type WorldCastStage = z.infer<typeof worldCastStageSchema>;

export const worldCastStreamEventSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("stage"), stage: worldCastStageSchema }),
  z.object({ type: z.literal("setting"), setting: worldSettingSchema }),
  z.object({ type: z.literal("player-character"), character: playerCharacterSchema }),
  z.object({ type: z.literal("agent-character"), character: agentCharacterSchema }),
  z.object({ type: z.literal("complete"), cast: worldCastSchema }),
  z.object({ type: z.literal("error"), error: publicErrorSchema }),
]);

export type WorldCastStreamEvent = z.infer<typeof worldCastStreamEventSchema>;

export function worldCouncilStorageKey(scenarioId: string) {
  return `world-council:${scenarioId}`;
}
