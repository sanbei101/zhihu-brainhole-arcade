import { type WorldCast } from "@/lib/world-cast";
import {
  describeCrisis,
  describeRelations,
  describeUltimatum,
  entropyNoteForRound,
  summarizeTurnsForPrompt,
  type AgentRelation,
  type TurnRecord,
  type WorldCrisis,
  type WorldMetrics,
  type WorldUltimatum,
} from "@/lib/world-ending";
import { type DecisionOption } from "@/lib/world-options";

type PlayerCharacter = WorldCast["playerCharacters"][number];

export const OPTIONS_INSTRUCTIONS = `你是世界线导演。每回合给出一个有张力但可扭转的突发处境和恰好四个互斥抉择,供玩家从世界线分叉点选入其中一条未来。

硬性要求:
1. 每个选项都要填 impact(四维影响方向,只用 ↑↑ ↑ - ↓ ↓↓)和 forecast(在场每一方会站到哪一边)。玩家必须在点下去之前就看得出这笔交易的收益与代价,以及各方站队。
2. forecast 必须覆盖题目给出的全部在场角色,并且至少有一方是 doubt 或 oppose,不许所有人一致赞成。
3. 四个选项生态位严格按 A/B/C/D 梯度排列:
   - A. 稳 (守正持重): 现有秩序或惯性下的稳妥应对,代价温和,收益明确。
   - B. 险 (铁腕强推): 激进有力的政治或军事立威,伴随内部剧烈震荡。
   - C. 赌 (利益置换): 拆东墙补西墙的高风险博弈,代价与收益强烈对冲。
   - D. 狂 (🌟【天命破壁 · 群星式飞升抉择】): 必须是知乎高赞神级脑洞与群星史诗感的高光破壁项!打破正史常规与官僚常理(如开启远洋开拓纪、引入墨家蒸汽实业、撕裂地幔引熔岩为火、颠覆千年礼法等)。必须同时附带[epigraph](群星风格燃向宣誓语录,15~35字,极具宏大宿命感与决绝气魄,如'天下若容不下汉室,汉室便去重造一个天下!'、'若天空不再赐予光明,我们就把地核撕开当作篝火!')。
4. 每个选项标题在 14 字以内,描述在 60 字以内,开门见山写明"做什么 + 核心代价",禁止铺陈无用废话。
5. 若存在正在倒计时的突发事件,必须至少提供一个 crisisAction=true 的选项明确写出针对动作;若无突发事件,所有选项 crisisAction 均为 false。
6. 每个选项都必须有明确收益与代价,体现权谋交换,不能全盘单纯扣血。
7. 承接此前推演历史,体现大时代世界线的不可逆变轨。使用简体中文。
8. 风格对齐与范本模仿: 若上下文中提供了【首轮选项典范】,必须严格模仿其文字质感、行文干练度与鲜明反差。特别是 D 选项(狂),必须保持与典范一致的群星式飞升豪气与破壁决绝感,并配以极具宿命感与压迫力的宣誓词,绝不随着回合推进而降低质量水准。`;

export function formatExemplarOptionsForPrompt(options?: DecisionOption[]): string {
  if (!options || !options.length) return "";
  const lines = options.slice(0, 4).map((opt, idx) => {
    const letter = ["A", "B", "C", "D"][idx] ?? opt.id;
    const epigraphText = opt.epigraph
      ? ` [宣誓语录 epigraph: "${opt.epigraph.replace(/^[""']\s*/, "").replace(/\s*[""']$/, "")}"]`
      : "";
    return `- ${letter} (${opt.risk}): [${opt.title}]-- ${opt.desc}${epigraphText}`;
  });
  return `\n本世界线首轮选项典范 (Few-Shot 范本,后续生成请严格模仿此文学质感、短促干练度与 D 项宣誓词燃向史诗感):\n${lines.join("\n")}\n`;
}

/**
 * 结构优化: 静态世界背景与角色置顶 -> 历史推演记录居中 -> 动态回合变量与上轮后果置底
 */
export const buildOptionsPrompt = (input: {
  cast: WorldCast;
  player: PlayerCharacter;
  round: number;
  metrics: WorldMetrics;
  history: TurnRecord[];
  relations: AgentRelation[];
  crisis: WorldCrisis | null;
  ultimatum: WorldUltimatum | null;
  exemplarOptions?: DecisionOption[];
}) => {
  const lastTurn = input.history.at(-1);
  const exemplarText = formatExemplarOptionsForPrompt(input.exemplarOptions);
  return `时间:${input.cast.setting.time};地点:${input.cast.setting.location};核心危机:${input.cast.setting.crisis}
世界硬约束:
${input.cast.setting.rules.map((rule) => `- ${rule}`).join("\n")}

玩家设定:
- ${input.player.name}(${input.player.identity}),可调动资源与权力:${input.player.decisionPower}

在场各方角色(forecast 必须覆盖这些 id):
${input.cast.agentCharacters.map((character) => `- ${character.id} = ${character.name}(${character.identity}),公开诉求是[${character.publicGoal}]`).join("\n")}
${exemplarText}
此前已结算历史回合:
${summarizeTurnsForPrompt(input.history)}

当前局势与本轮分叉点:
- 回合进度:第 ${input.round} 回合(大势损耗:${entropyNoteForRound(input.round)})
- 当前四维指标:政权稳定 ${input.metrics.stability},军心士气 ${input.metrics.morale},民众支持 ${input.metrics.support},战略资源 ${input.metrics.resources}
- 各方信任度现状:${describeRelations(input.relations)}
- 突发事件倒计时:${describeCrisis(input.crisis)}
- 未决最后通牒:${describeUltimatum(input.ultimatum)}
- 上一回合直接遗留后果(本回合至少有选项正面处理之):
${lastTurn?.nextSituation ?? input.cast.setting.crisis}

请给出本回合突发处境与恰好四个互斥抉择。`;
};
