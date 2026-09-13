import { z } from "zod";

const METRIC_LEVELS = ["↑↑", "↑", "-", "↓", "↓↓"] as const;
export type MetricHint = (typeof METRIC_LEVELS)[number];

/** 常见空写法,统一视为持平 */
const EMPTY_ALIASES: ReadonlySet<string> = new Set([
  "",
  "空",
  "无",
  "0",
  "—",
  "－",
  "持平",
  "不变",
]);

/** AI 防呆设计,实测会输出语义相同的不同答案造成无报错 */
/** 把任意输入洗成合法的 MetricHint */
const normalizeMetricHint = (raw: unknown): MetricHint => {
  const text = typeof raw === "string" ? raw.trim() : "";

  if (EMPTY_ALIASES.has(text)) return "-";
  if ((METRIC_LEVELS as readonly string[]).includes(text)) return text as MetricHint;

  if (/^↑+$/.test(text)) return text.length >= 2 ? "↑↑" : "↑";
  if (/^↓+$/.test(text)) return text.length >= 2 ? "↓↓" : "↓";

  return "-";
};

export const metricHintSchema = z.preprocess(normalizeMetricHint, z.enum(METRIC_LEVELS));

export const impactHintSchema = z.object({
  stability: metricHintSchema.describe("政权稳定"),
  morale: metricHintSchema.describe("军心士气"),
  support: metricHintSchema.describe("民众支持"),
  resources: metricHintSchema.describe("战略资源"),
});
export type ImpactHint = z.infer<typeof impactHintSchema>;

// 同样是防呆设计,同义词替换,不要重试
export const rawLeanEnum = z.enum(["back", "doubt", "oppose"]);
export type Lean = z.infer<typeof rawLeanEnum>;

const LEAN_SYNONYMS: Record<string, Lean> = {
  // back
  back: "back",
  support: "back",
  agree: "back",
  favor: "back",
  approve: "back",
  endorse: "back",
  赞成: "back",
  支持: "back",
  同意: "back",
  拥护: "back",

  // doubt
  doubt: "doubt",
  neutral: "doubt",
  hesitate: "doubt",
  wait: "doubt",
  observe: "doubt",
  watch: "doubt",
  negotiate: "doubt",
  bargain: "doubt",
  exploit: "doubt",
  观望: "doubt",
  中立: "doubt",
  犹豫: "doubt",
  谈判: "doubt",
  协商: "doubt",
  利用: "doubt",
  投机: "doubt",

  // oppose
  oppose: "oppose",
  against: "oppose",
  reject: "oppose",
  disagree: "oppose",
  resist: "oppose",
  refuse: "oppose",
  deny: "oppose",
  反对: "oppose",
  拒绝: "oppose",
  抵抗: "oppose",
  否决: "oppose",
};
const normalizeLean = (raw: unknown): unknown => {
  if (typeof raw !== "string") return raw;
  const text = raw.trim().toLowerCase();
  return LEAN_SYNONYMS[text] ?? text;
};

export const leanSchema = z
  .preprocess(normalizeLean, rawLeanEnum)
  .describe("对玩家决策的态度倾向: back (赞成) | doubt (观望/中立) | oppose (反对)");

export const leanLabels: Record<Lean, string> = {
  back: "赞成",
  doubt: "观望",
  oppose: "反对",
};

export const forecastEntrySchema = z.object({
  agentId: z.string().describe("必须是所给在场角色列表里的 id,不要发明新 id"),
  lean: leanSchema,
});
export type ForecastEntry = z.infer<typeof forecastEntrySchema>;

export const riskEnum = z.enum(["稳", "险", "赌", "狂"]);
export type RiskLevel = z.infer<typeof riskEnum>;

const RISK_SYNONYMS: Record<string, RiskLevel> = {
  稳: "稳",
  稳妥: "稳",
  保守: "稳",
  低: "稳",
  险: "险",
  危险: "险",
  激进: "险",
  中: "险",
  赌: "赌",
  冒险: "赌",
  豪赌: "赌",
  高: "赌",
  狂: "狂",
  疯狂: "狂",
  天命: "狂",
  飞升: "狂",
  天命破壁: "狂",
};

const normalizeRisk = (raw: unknown): unknown => {
  if (typeof raw !== "string") return raw;
  const s = raw.trim();
  if (RISK_SYNONYMS[s]) return RISK_SYNONYMS[s];
  if (s.includes("稳")) return "稳";
  if (s.includes("狂") || s.includes("天命") || s.includes("飞升")) return "狂";
  if (s.includes("赌") || s.includes("冒")) return "赌";
  if (s.includes("险") || s.includes("激")) return "险";
  return s;
};

export const riskSchema = z
  .preprocess(normalizeRisk, riskEnum)
  .describe("选项风险等级: 稳(守正) | 险(铁腕) | 赌(置换) | 狂(天命破壁/群星飞升级抉择)");

export const decisionOptionSchema = z.object({
  id: z.string().describe("选项唯一短 id,如 A/B/C/D"),
  title: z.string().min(1).max(80).describe("选项标题,不超过三十字"),
  desc: z.string().min(1).max(300).describe("选项具体做法与代价,不超过一百二十字"),
  risk: riskSchema,
  epigraph: z
    .string()
    .max(120)
    .optional()
    .describe("群星风格的燃向宣誓语录或时代判词,15~35字,极具宿命感与史诗感"),
  crisisAction: z
    .boolean()
    .describe("是否直接处理当前未决突发事件;有危机时至少一个选项为 true,无危机时全部为 false"),
  impact: impactHintSchema.describe("这个选项大致会拉动哪几维指标,只给定性方向"),
  forecast: z
    .array(forecastEntrySchema)
    .min(1)
    .max(12)
    .describe("你对在场各方在此选项下会站到哪一边的预判,覆盖全部在场角色"),
});
export type DecisionOption = z.infer<typeof decisionOptionSchema>;

export const roundOptionsSchema = z.object({
  situation: z.string().min(1).max(800).describe("本回合突发处境,不超过三百字"),
  options: z
    .array(decisionOptionSchema)
    .min(1)
    .describe("恰好四个立场与代价明显不同的抉择,按 A/B/C/D 顺序排列"),
});
export type RoundOptions = z.infer<typeof roundOptionsSchema>;

/** 点选后拼成 decision 字符串,复用现有回合链路。 */
export function decisionTextOf(option: DecisionOption): string {
  return `${option.crisisAction ? "[处理当前危机] " : ""}${option.title}:${option.desc}`;
}

/** 内置的'按兵不动'选项:不是白给的安全牌,熵增会照常收账。 */
export function idleOptionFor(cast: { agentCharacters: { id: string }[] }): DecisionOption {
  return {
    id: "idle",
    title: "按兵不动",
    desc: "不下任何新命令,让各方先动。你能看清谁在替你扛事、谁在趁乱伸手,但局势不会停下来等你。",
    risk: "稳",
    crisisAction: false,
    impact: { stability: "↓", morale: "↓", support: "-", resources: "↑" },
    forecast: cast.agentCharacters.map((character) => ({
      agentId: character.id,
      lean: "doubt" as const,
    })),
  };
}
