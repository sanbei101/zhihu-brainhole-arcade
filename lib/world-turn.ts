import { z } from "zod";

import { publicErrorSchema } from "@/lib/app-error";
import { worldCastSchema } from "@/lib/world-cast";

/**
 * 本模块刻意不 import `world-ending`,避免循环依赖。
 * 关系 / 突发事件 / 通牒都以'已渲染好的文本摘要'形式传入,
 * 由 `world-ending` 侧的 `describeRelations` 等函数生成。
 */

const metricsPayloadSchema = z.object({
  stability: z.number().min(0).max(100),
  morale: z.number().min(0).max(100),
  support: z.number().min(0).max(100),
  resources: z.number().min(0).max(100),
});

const relationPayloadSchema = z.object({
  agentId: z.string(),
  trust: z.number().min(0).max(100),
});

/** 回合数不再设上限,由'大势熵增'保证收敛。 */
export const worldTurnRequestSchema = z.object({
  cast: worldCastSchema,
  playerId: z.string(),
  round: z.number().int().min(1),
  situation: z.string().trim().min(1).max(600),
  metrics: metricsPayloadSchema,
  /** 各 Agent 对玩家的信任度(结构化,用于挑本回合最可能合作方) */
  relations: z.array(relationPayloadSchema).max(8),
  historySummary: z.string().max(8000),
  /** 各 Agent 对玩家的信任度摘要 */
  relationsSummary: z.string().max(2000),
  /** 当前未决的突发事件摘要 */
  crisisSummary: z.string().max(800),
  /** 当前未决的通牒摘要 */
  ultimatumSummary: z.string().max(800),
  /** 本回合大势熵增的说明 */
  entropyNote: z.string().max(400),
  decision: z.string().trim().min(1).max(600),
});

export const ultimatumDraftSchema = z.object({
  demand: z.string().min(1).max(300).describe("你要求玩家在期限内做到的具体事情"),
  penalty: z.string().min(1).max(300).describe("玩家若不照做,你将立刻采取的行动"),
});
export type UltimatumDraft = z.infer<typeof ultimatumDraftSchema>;

export const stanceEnum = z.enum(["support", "oppose", "negotiate", "exploit"]);
export type AgentStance = z.infer<typeof stanceEnum>;

const STANCE_SYNONYMS: Record<string, AgentStance> = {
  support: "support",
  back: "support",
  agree: "support",
  支持: "support",
  赞成: "support",
  拥护: "support",

  oppose: "oppose",
  against: "oppose",
  reject: "oppose",
  反对: "oppose",
  抵制: "oppose",
  拒绝: "oppose",

  negotiate: "negotiate",
  compromise: "negotiate",
  bargain: "negotiate",
  协商: "negotiate",
  谈判: "negotiate",
  妥协: "negotiate",
  观望: "negotiate",
  中立: "negotiate",

  exploit: "exploit",
  leverage: "exploit",
  utilize: "exploit",
  利用: "exploit",
  借机利用: "exploit",
  投机: "exploit",
};

const normalizeStance = (raw: unknown): unknown => {
  if (typeof raw !== "string") return raw;
  const text = raw.trim().toLowerCase();
  return STANCE_SYNONYMS[text] ?? text;
};

export const stanceSchema = z
  .preprocess(normalizeStance, stanceEnum)
  .describe("态度立场: support(支持) | oppose(反对) | negotiate(协商) | exploit(借机利用)");

const normalizeTrustDelta = (raw: unknown): unknown => {
  if (typeof raw === "number") {
    return Number.isFinite(raw) ? Math.min(30, Math.max(-30, Math.round(raw))) : 0;
  }
  if (typeof raw === "string") {
    const num = Number.parseFloat(raw.trim());
    return Number.isFinite(num) ? Math.min(30, Math.max(-30, Math.round(num))) : 0;
  }
  return 0;
};

export const trustDeltaSchema = z
  .preprocess(normalizeTrustDelta, z.number().min(-30).max(30))
  .describe("玩家的这个抉择让你对玩家的信任度变化,-15 到 15;顺你心意给正数,踩到你底线给负数");

export const agentReactionSchema = z.object({
  speech: z
    .string()
    .min(1)
    .max(180)
    .describe("角色当场说出的犀利发言,严禁长篇大论,严格控制在三十到五十个字以内,直奔要害与利害"),
  action: z
    .string()
    .min(1)
    .max(60)
    .describe("角色当场采取的即时小动作,短促明确,十到二十字以内,例如'拍案而起下令闭门'"),
  target: z.string().min(1).max(30).describe("行动针对的人物、阵营或资源,十个字以内"),
  stance: stanceSchema,
  impact: z
    .string()
    .min(1)
    .max(60)
    .describe("该动作引发的最直接即时后果,十五字以内,例如'中军守卫全面警戒'"),
  trustDelta: trustDeltaSchema,
  ultimatum: ultimatumDraftSchema
    .nullish()
    .describe("仅当你已被逼到极限、且当前对你的信任度低于 35 时,才给出最后通牒;否则返回 null"),
});

const eventMetaSchema = z.object({
  id: z.string().min(1).max(100),
  title: z.string().min(1).max(100),
  summary: z.string().min(1).max(500),
  source: z.string().min(1).max(200),
  actors: z.array(z.string().min(1).max(60)).min(1).max(8),
  severity: z.enum(["low", "medium", "high"]),
});

export const worldEventSchema = z.discriminatedUnion("kind", [
  eventMetaSchema.extend({
    kind: z.literal("decree"),
    issuer: z.string().min(1).max(100),
    target: z.string().min(1).max(150),
    order: z.string().min(1).max(300),
    cost: z.string().min(1).max(300),
  }),
  eventMetaSchema.extend({
    kind: z.literal("dispatch"),
    location: z.string().min(1).max(150),
    forces: z.string().min(1).max(300),
    movement: z.string().min(1).max(300),
    casualties: z.string().min(1).max(300),
  }),
  eventMetaSchema.extend({
    kind: z.literal("diplomacy"),
    from: z.string().min(1).max(100),
    to: z.string().min(1).max(100),
    offer: z.string().min(1).max(300),
    response: z.string().min(1).max(300),
    relation: z.string().min(1).max(300),
  }),
  eventMetaSchema.extend({
    kind: z.literal("rumor"),
    rumorSource: z.string().min(1).max(150),
    claim: z.string().min(1).max(300),
    credibility: z.number().int().min(0).max(100),
    spread: z.string().min(1).max(300),
  }),
  eventMetaSchema.extend({
    kind: z.literal("shortage"),
    resource: z.string().min(1).max(100),
    stock: z.string().min(1).max(200),
    pressure: z.string().min(1).max(300),
  }),
]);

export type WorldEvent = z.infer<typeof worldEventSchema>;

export const worldTurnEventSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("agent-start"), agentId: z.string() }),
  z.object({
    type: z.literal("agent-reaction"),
    agentId: z.string(),
    reaction: agentReactionSchema,
  }),
  z.object({
    type: z.literal("retort-start"),
    agentId: z.string(),
    againstId: z.string(),
  }),
  z.object({
    type: z.literal("agent-retort"),
    agentId: z.string(),
    againstId: z.string(),
    reaction: agentReactionSchema,
  }),
  z.object({
    type: z.literal("agent-error"),
    agentId: z.string(),
    phase: z.enum(["reaction", "retort"]),
    againstId: z.string().optional(),
    error: publicErrorSchema,
  }),
  z.object({ type: z.literal("error"), error: publicErrorSchema }),
  z.object({ type: z.literal("complete") }),
]);

export type AgentReaction = z.infer<typeof agentReactionSchema>;
export type WorldTurnEvent = z.infer<typeof worldTurnEventSchema>;
