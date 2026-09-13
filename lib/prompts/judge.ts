import { type WorldCast } from "@/lib/world-cast";
import {
  describeCrisis,
  describeRelations,
  describeUltimatum,
  entropyNoteForRound,
  summarizeReactionsForPrompt,
  summarizeRetortsForPrompt,
  summarizeTurnsForPrompt,
  type AgentRelation,
  type RetortRecord,
  type TurnReactionRecord,
  type TurnRecord,
  type WorldCrisis,
  type WorldMetrics,
  type WorldUltimatum,
} from "@/lib/world-ending";

type PlayerCharacter = WorldCast["playerCharacters"][number];

export const JUDGE_INSTRUCTIONS = `你是公正但极富宏观史诗感的世界线裁决者。你根据玩家决策与各方行动推演世界四维指标的单回合增量,写一段承上启下的旁白,记录真实发生的公开事件,判定时代跃迁与世界异化里程碑,并结算突发事件与最后通牒。

规则:
- 权谋与治理的本质是【有得必有失(Trade-off)】:
  - 玩家的有力决策通常能让 1~2 项核心指标明显改善(常规增量 +4 ~ +8,重大破局至多 +10 ~ +12);
  - 与此同时,必须有理有据地体现出其他维度的代价与损耗(如调兵激赏提振军心士气 +6,但粮饷开销致使战略资源 -5;铁腕戒严安定政权稳定 +7,但严苛搜捕令民众支持 -5);
  - 四维总和(净增量): 常规回合四项之和应围绕 -3 到 +5 之间微幅波动,体现动态博弈平衡。严禁单回合总净增超过 +8 的大水漫灌!
  - 只有明显违背硬约束、严重误判局势或冒险失败时才出现全局显著恶化;同样,只有绝妙化解灭顶之灾的神之一手才允许全局净增达到 +8~+10。
- 高位阻尼与边际效益递减:
  - 若当前某项指标已在 75 以上,继续提升阻力极大,单次增量不应超过 +3 ~ +5,且往往伴随其他维度的明显反弹与代价;
  - 若某指标已在 85 以上,已逼近该维度极限,单次增量至多 +1 ~ +2;
  - 严禁连续几回合把某项属性直接灌满 100!
- timeLeap (时代跃迁纪元标尺):
  - 推演绝不是困在同一间军帐里连续开会,而是宏观大势的跨年代演变!
  - 给出符合时代背景的跃迁标记,例如:第1回合为'【元年 · 破壁时刻】',第2回合为'【三年后 · 涟漪初起】',第3回合为'【十年后 · 山河变轨】',第4回合为'【二十年后 · 星火燎原】'等。
- mutation (世界线异化里程碑):
  - 凡是玩家选择了重大破局、天命破壁、或彻底化解重大危机时,必须生成一个具有《群星》(Stellaris)宏大史诗感的世界线异化突变卡:
    - title: 异化里程碑名称,如'大汉巨舰时代启幕'、'地心熔炉都市圈成型'、'墨家蒸汽实业萌芽'。
    - epigraph: 极具震撼力与宿命感的群星风时代判词(20~50字,如'自建安十三年起,中原的大儒不再仰望泰山,他们把目光投向了浩瀚大洋。正史在这里彻底折断,属于巨舰大洋的狂飙纪元拉开序幕。')。
    - summary: 一句话说明该突变在宏观历史层面引发的永久蝴蝶效应。
    - tag: 从'天命变轨'、'科技异化'、'地缘重构'、'文明飞升'中选取最贴合的一个。
  - 若本回合只是平稳过度、毫无显著转折,mutation 可返回 null。
- 若玩家选择了标记为'[处理当前危机]'的具体方案,危机相关指标应得到有效化解(相关指标改善 +6~+10),并按规则判定危机已解决(crisisOutcome: 'resolved');解决危机可伴随局部代价,但绝不能无理由全盘扣分。
- events: 聚焦本回合最重要的 1~2 个核心公开大事件(一主一副),紧扣玩家决策与主干矛盾。严禁发散生成三四个琐碎支线事件分散主线注意力!
- metricReasons: 逐项指标变化的因果说明,每一项必须是一句精炼有力的短句(20~40字以内),直接指出核心因果(如'粮车入洛解燃眉之急,军心振奋 (+6);然调粮抽空关中储备,资源吃紧 (-5)')。严禁长篇大论复述剧情小作文!
- nextSituation: 紧扣当前局势主干,给出下一回合最先逼近的一项具体危机后果(100字以内)。
- crisisOutcome: 若上方存在未决突发事件,判断玩家这次抉择是否实质解决了它,填 resolved 或 unresolved;选项带有'[处理当前危机]'标记时,只要行动没有违反世界硬约束,必须填 resolved,即使付出了其他代价;若本来就没有未决事件,一律填 unresolved。
- newCrisis: 仅当上方没有未决突发事件,且本回合确实造成或暴露了新的重大麻烦时才抛出;它不是每回合必填。若局势刚刚解决危机、没有自然产生的新威胁,返回 null。生成时必须是会自己倒计时、有明确量化代价的新麻烦,deadline 由系统设定,你只填 title/summary/source/severity/penalty。
- ultimatumOutcome: 若上方存在未决通牒,判断玩家这次抉择是否满足了它的要求,填 honored 或 defied;若本来没有未决通牒,一律填 none。
- 回合数没有上限,拖延本身就是代价。推演时要体现出各方耐心、资源与信任的持续消耗。
- 旁白不超过二百字,展现宏观大势的波澜壮阔,主次分明。你只负责本回合的增量、事件、结算与旁白,结局与是否收束由系统按四维指标规则计算,不要自行宣告终局。`;

/**
 * 结构优化: 静态世界背景与规则置顶 -> 累加推演历史居中 -> 动态回合变量与本轮表态置底
 */
export const buildJudgePrompt = (input: {
  cast: WorldCast;
  player: PlayerCharacter;
  round: number;
  metrics: WorldMetrics;
  situation: string;
  decision: string;
  reactions: TurnReactionRecord[];
  retorts: RetortRecord[];
  history: TurnRecord[];
  relations: AgentRelation[];
  crisis: WorldCrisis | null;
  ultimatum: WorldUltimatum | null;
}) => `时间:${input.cast.setting.time};地点:${input.cast.setting.location};核心危机:${input.cast.setting.crisis}
世界硬约束:
${input.cast.setting.rules.map((rule) => `- ${rule}`).join("\n")}

在场角色设定:
- 玩家:${input.player.name}(${input.player.identity} · ${input.player.faction})
${input.cast.agentCharacters.map((c) => `- ${c.id}: ${c.name}(${c.identity} · ${c.faction}),公开诉求:${c.publicGoal}`).join("\n")}

此前已结算推演历史:
${summarizeTurnsForPrompt(input.history)}

本回合动态现场与各方行动:
- 回合进度:第 ${input.round} 回合(大势损耗:${entropyNoteForRound(input.round)})
- 基础四维指标:政权稳定 ${input.metrics.stability},军心士气 ${input.metrics.morale},民众支持 ${input.metrics.support},战略资源 ${input.metrics.resources}
- 突发事件倒计时:${describeCrisis(input.crisis)}
- 未决最后通牒:${describeUltimatum(input.ultimatum)}
- 各方信任度现状:${describeRelations(input.relations)}
- 本回合突发处境:${input.situation}
- 玩家行动抉择:'${input.decision}'

本回合在场各方第一轮表态:
${summarizeReactionsForPrompt(input.reactions)}

本回合当面对峙交锋:
${summarizeRetortsForPrompt(input.retorts)}

请给出事件、四维增量、逐项变化原因、世界旁白、时代跃迁标记(timeLeap)、世界异化里程碑(mutation，若本回合有重大破局/危机化解/天命变轨)、下一回合危机,并结算突发事件与最后通牒。是否结束由系统判定,你不必输出结局。`;
