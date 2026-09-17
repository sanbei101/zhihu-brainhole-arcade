import type { PortraitMotion } from "@/components/pixel/portraits";
import type { CharacterArchetype } from "@/lib/world-cast";

export interface MockScenarioItem {
  id: string;
  themeId: string;
  title: string;
  author: string;
  votes: number;
  answers: number;
  tag: string;
  summary: string;
}

export const MOCK_SCENARIOS: MockScenarioItem[] = [
  {
    id: "553550666",
    themeId: "apocalypse",
    title: "假如地球现在进入冰河时代,人类还能生存下去吗?",
    author: "赵泠",
    votes: 77800,
    answers: 1480,
    tag: "末日灾变 · 极限存续",
    summary:
      "大气环流骤变，北半球气温骤降，冰盖以每年百余公里南压。三百万北方幸存者沿封冻江面大迁徙，撞上南方闭锁的粮仓雄关，放行与拒关之间是百万条人命。",
  },
  {
    id: "289929440",
    themeId: "apocalypse",
    title: "如果丧尸病毒爆发,如何从容应对?",
    author: "凉小离",
    votes: 85200,
    answers: 1720,
    tag: "末日灾变 · 生存法则",
    summary:
      "未知病原体席卷全球，高密度都市率先沦陷。是坚守城市孤岛，还是向荒野建立自给自足的生态避难所？",
  },
  {
    id: "638546924",
    themeId: "apocalypse",
    title: "如果黄石超级火山爆发,是美国的末日,还是全人类的灭亡?",
    author: "赵泠",
    votes: 67400,
    answers: 1250,
    tag: "末日灾变 · 火山严冬",
    summary:
      "火山灰遮天蔽日遮蔽全球阳光，无夏之年降临，全球农业体系崩溃，地热地下城成为唯一文明温床。",
  },
];

export interface MockPlayerCharacter {
  id: string;
  name: string;
  identity: string;
  faction: string;
  archetype: CharacterArchetype;
  motion: PortraitMotion;
  publicGoal: string;
  privateGoal: string;
  decisionPower: string;
  secret: string;
  redLine: string;
  quote: string;
}

export interface MockAgentCharacter {
  id: string;
  name: string;
  identity: string;
  faction: string;
  archetype: CharacterArchetype;
  motion: PortraitMotion;
  trust: number;
  attitude: "拥戴" | "观望" | "施压";
  publicGoal: string;
  secret: string;
  redLine: string;
  pressureMethod: string;
  openingLine: string;
}

export const MOCK_PLAYERS: MockPlayerCharacter[] = [
  {
    id: "player_migrate_cmd",
    name: "李烽",
    identity: "北方军垦兵团师长 · 三百万难民总旗首",
    faction: "北撤军垦与迁徙难民联军",
    archetype: "general",
    motion: "guard",
    publicGoal: "率领三百万迁徙大军平安通过双堡关，在开春化冻前将老弱妇孺护送入关",
    privateGoal: "为麾下军垦团一万两千名复员老兵及其家属争取整建制入关安置资格",
    decisionPower: "指挥五万徒手与持械民兵、掌握各营地存粮与车辆柴油的统一调配权",
    secret: "联军弹药库仅存一万余发枪弹与三千斤火药，根本无力与守军硬拼",
    redLine: "绝不容许任何部族武装抢道冲卡，把全队拖进与守军的火并",
    quote: "天冻不住人的路！三百万同胞一个都不能被抛弃在冰原上！",
  },
  {
    id: "player_border_prefect",
    name: "卫长庚",
    identity: "双堡关知府 · 南直州民政总管",
    faction: "南方州府守土派与粮储体系",
    archetype: "official",
    motion: "scribe",
    publicGoal: "严守放行定额与检疫规程，为南方本省保住渡过整个严冬的战略口粮",
    privateGoal: "促成朝廷加拨南直州三成税粮回填仓廪，换取放行难民的正名文书",
    decisionPower: "双堡关开闭闸令牌、州府粮仓发粮签与全关四千守军的民政调配",
    secret: "州府仓廪实际存粮因早年贪腐亏空三成，一旦无节制开仓必当场败露",
    redLine: "绝不肯在天气转暖前一次性放行超过安全阈值的人数",
    quote: "本府若大开城门，便是拿关内几十万身家性命做人情！公文未至，恕难从命！",
  },
  {
    id: "player_reindeer_head",
    name: "图雅",
    identity: "漠北驯鹿部族女头人 · 迁徙押阵官",
    faction: "驯鹿部族与牧猎老幼方阵",
    archetype: "commoner",
    motion: "work",
    publicGoal: "保住部族两万头驯鹿与三千族民，为整个迁徙队伍提供持续的肉奶补给",
    privateGoal: "在关隘检疫队下手前，接回被扣作人质的十二名部族少年",
    decisionPower: "掌管驯鹿群与雪橇队调度、两万头鹿群迁徙路线与每日出肉配额",
    secret: "驯鹿群已爆发轻度口蹄疫，她一直瞒报并混用草药强行压制",
    redLine: "谁敢拆散部族家庭或抢走驯鹿当军粮，她就让鹿群倒毙在关卡前",
    quote: "冰原上的风雪冻不死雄鹰，只要火种还在，长生天就会庇佑活着的人。",
  },
];

export const MOCK_AGENTS: MockAgentCharacter[] = [
  {
    id: "agent_south_warlord",
    name: "燕崇山",
    identity: "南直州防务总兵官 · 坚壁清野派",
    faction: "南方守备军",
    archetype: "general",
    motion: "guard",
    trust: 32,
    attitude: "施压",
    publicGoal: "在化冻前死守双堡关，将入关人数压到两千人以内并实行严格军事管制",
    secret: "他已暗中在关后三十里埋设雷场，防止难民破关后涌向州城",
    redLine: "绝不容许放行人数超出军事上限，否则以抗命论处",
    pressureMethod: "调重机枪火力扫射关前冰面示威，并出示朝廷戒严令",
    openingLine: "卫大人、李旗首，这关后是几十万百姓的活命粮，谁敢冲卡，休怪重机枪无情！",
  },
  {
    id: "agent_grain_tycoon",
    name: "黄满仓",
    identity: "江南粮行总东家 · 漕运把头",
    faction: "江南粮商资本集团",
    archetype: "magnate",
    motion: "weigh",
    trust: 48,
    attitude: "观望",
    publicGoal: "以三十万石存粮为筹码，换取南直州漕运专营与免检通行证",
    secret: "粮仓中三分之一是霉变陈粮，他要赶在查验前脱手换成现银",
    redLine: "朝廷若敢以征粮令强兑他的库存，他便放火烧仓鱼死网破",
    pressureMethod: "扬言锁仓断供州城粮市，并在难民中散布入关即饿死的谣言",
    openingLine: "李旗首，三十万石米够三百万人喝上四十天粥，就看您出得起什么价了！",
  },
  {
    id: "agent_climate_scientist",
    name: "沈寒山",
    identity: "国家极地气象站首席研究员",
    faction: "气象观测站与科学预判派",
    archetype: "technician",
    motion: "scan",
    trust: 82,
    attitude: "拥戴",
    publicGoal: "说服决策层相信冰盖将提前封死全境，必须立刻放开南迁总闸",
    secret: "他观测到环流崩溃比模型快了十二年，极端暴风雪将在十日内封死全境",
    redLine: "绝不容忍官僚为了账本数字而隐瞒将提前到来的极端寒潮",
    pressureMethod: "出示未来十日降温模型与三百年一遇寒潮预报，要求启动最高级响应",
    openingLine: "化冻提前了！不是五十天，是二十三天！再不决断，三百万人全将冻死在冰面上！",
  },
  {
    id: "agent_camp_medic",
    name: "桂香",
    identity: "关外难民营地临时医官",
    faction: "难民自救医疗队与妇孺保护会",
    archetype: "commoner",
    motion: "plead",
    trust: 68,
    attitude: "拥戴",
    publicGoal: "为营地爆发传染症候的难民争取隔离帐篷、药品与快速检验绿色通道",
    secret: "自己已在接触病患时染上疑似症候，把仅剩的两剂特效药让给了婴儿",
    redLine: "若检疫队想以防疫为名隔离烧毁她护下的孩童，她就敢掀翻隔离棚",
    pressureMethod: "抱着染病婴儿跪在关隘前喊话，直击全城守军良知",
    openingLine: "当官的！你们防的是瘟疫，还是防的活人？这孩子在发高烧，你们谁来管？！",
  },
];

export interface MockDecisionOption {
  id: "A" | "B" | "C" | "D";
  title: string;
  desc: string;
  risk: "稳" | "险" | "策" | "奇";
  epigraph?: string;
  deltas: {
    stability: number;
    morale: number;
    support: number;
    resources: number;
  };
  impactText: {
    stability: string;
    morale: string;
    support: string;
    resources: string;
  };
  forecast: {
    agentId: string;
    lean: "支持" | "反对" | "中立";
  }[];
}

export const MOCK_OPTIONS: MockDecisionOption[] = [
  {
    id: "A",
    title: "依关规分批排队护老弱先过审",
    desc: "按双堡关检疫定额每日放行，老弱妇孺居前，军垦兵团化整为零殿后，用秩序换守军信任。",
    risk: "稳",
    deltas: { stability: 15, morale: -10, support: 20, resources: -15 },
    impactText: { stability: "+15", morale: "-10", support: "+20", resources: "-15" },
    forecast: [
      { agentId: "agent_south_warlord", lean: "中立" },
      { agentId: "agent_grain_tycoon", lean: "中立" },
      { agentId: "agent_climate_scientist", lean: "反对" },
      { agentId: "agent_camp_medic", lean: "支持" },
    ],
  },
  {
    id: "B",
    title: "以五万民兵助筑关防换配额翻倍",
    desc: "亲赴关楼谈判：调五万民兵协助加固关墙、破冰通渠，换取每日放行名额翻倍至两万人并整建制入关安置。",
    risk: "险",
    deltas: { stability: 20, morale: 15, support: 5, resources: 5 },
    impactText: { stability: "+20", morale: "+15", support: "+5", resources: "+5" },
    forecast: [
      { agentId: "agent_south_warlord", lean: "支持" },
      { agentId: "agent_grain_tycoon", lean: "反对" },
      { agentId: "agent_climate_scientist", lean: "中立" },
      { agentId: "agent_camp_medic", lean: "支持" },
    ],
  },
  {
    id: "C",
    title: "买断三十万石陈粮赌七日不生变",
    desc: "签下黄满仓的苛刻粮约，掺杂好粮熬煮稀粥硬顶七日，明知陈粮隐患也先保住百万性命。",
    risk: "策",
    deltas: { stability: -20, morale: 10, support: -10, resources: 25 },
    impactText: { stability: "-20", morale: "+10", support: "-10", resources: "+25" },
    forecast: [
      { agentId: "agent_south_warlord", lean: "中立" },
      { agentId: "agent_grain_tycoon", lean: "支持" },
      { agentId: "agent_climate_scientist", lean: "中立" },
      { agentId: "agent_camp_medic", lean: "反对" },
    ],
  },
  {
    id: "D",
    title: "凿冰为渠 · 三百万人的冰上长城",
    desc: "不叩关、不乞粮！动员三百万军民沿封冻运河日夜凿冰筑路，以两万头驯鹿雪橇横贯冰原直下江南，走出一条自己的通衢活路！",
    risk: "奇",
    epigraph: "天冻不住人的路！冰封千里，那就把冰原踏成通衢，走出一个不用叩关的天下！",
    deltas: { stability: 10, morale: 35, support: 35, resources: -20 },
    impactText: { stability: "+10", morale: "+35", support: "+35", resources: "-20" },
    forecast: [
      { agentId: "agent_south_warlord", lean: "反对" },
      { agentId: "agent_grain_tycoon", lean: "反对" },
      { agentId: "agent_climate_scientist", lean: "支持" },
      { agentId: "agent_camp_medic", lean: "支持" },
    ],
  },
];

export interface MockDebateBeat {
  id: string;
  roundTitle: string;
  tag: string;
  speaker: MockAgentCharacter;
  opponent?: MockAgentCharacter;
  clashType: "单方表态" | "矛与盾尖锐交锋" | "立场博弈" | "裁决终局";
  speech: string;
}

export const MOCK_DEBATE_BEATS: MockDebateBeat[] = [
  {
    id: "beat_1",
    roundTitle: "第 1 拍 · 守备总兵封关戒严",
    tag: "【燕崇山 · 重机枪扫射示威】",
    speaker: MOCK_AGENTS[0],
    clashType: "单方表态",
    speech:
      "“双堡关是南直州屏障，关后是全城几十万百姓的救命粮！朝廷戒严令在此：无验身符节者，踏过关前白线者一律以破关谋逆论处，重机枪当场击毙！”",
  },
  {
    id: "beat_2",
    roundTitle: "第 2 拍 · 营地医官跪关控诉",
    tag: "【桂香 · 怀抱病婴直击良知】",
    speaker: MOCK_AGENTS[3],
    clashType: "单方表态",
    speech:
      "“当官的！睁大眼睛看看！怀里这孩子才六个月大，咳得浑身滚烫！关外冻死的人已经堆成了雪包，你们防的到底是瘟疫，还是嫌穷怕累防活人？！”",
  },
  {
    id: "beat_3",
    roundTitle: "第 3 拍 · 极地气象学家对质总兵官",
    tag: "【沈寒山 vs 燕崇山 · 矛与盾尖锐交锋】",
    speaker: MOCK_AGENTS[2],
    opponent: MOCK_AGENTS[0],
    clashType: "矛与盾尖锐交锋",
    speech:
      "沈寒山扬起卫星云图，厉声喝道：“燕崇山！极端寒潮将在十天内南压五百公里，夜间气温逼近零下五十五度！你闭关死守不是守土，是替暴风雪屠杀三百万同胞！”\n\n燕崇山按枪怒斥：“沈寒山！军令如山，州城粮库仅够三月！大门一开，全州陪葬！谁敢煽动闯关，先问过老子的机枪！”",
  },
  {
    id: "beat_4",
    roundTitle: "第 4 拍 · 旗首决断与天命破壁",
    tag: "【李烽拔刀断冰 · 动员三百万军民】",
    speaker: MOCK_AGENTS[2],
    opponent: MOCK_AGENTS[1],
    clashType: "裁决终局",
    speech:
      "李烽拔出佩刀斩断冰棱，声震四野：“天冻不住人的路！既然双堡关容不下三百万关外人，我们便不叩这道门！调五万军垦兵团、两万头驯鹿雪橇，凿冰为渠，自修千里坦途直下江南！”",
  },
];

export const MOCK_FINALE = {
  prologue:
    "> 谢邀。人在南口双堡关外，刚摘下结满白霜的防毒面具。看着身后三百万同胞在零下四十三度冰原上点亮的连天篝火，我知道，人类文明没有死在这次冰河时代。\n\n" +
    "许多人以为冰河时代到来，最致命的是气温。其实不是，最致命的是‘关门’。当暴雪封死北纬四十度，当南方的粮仓和城墙冷冰冰地闭闸，三百万从黑土地南撤的同胞在江面上排成了望不到头的长队。前是重机枪与封关公文，后是每小时逼近两公里的极寒风暴。",
  chapters: [
    {
      title: "卷一 · 关前的生与死",
      content:
        "建安关前的雪是黑色的，混杂着柴油烟尘与冻土粉末。燕崇山的重机枪就在关墙上架着，黑洞洞的枪口直指冰面。黄满仓三十万石陈粮要价万金，桂香抱着发热的婴儿跪在辕门之外。\n\n" +
        "那时军垦联军弹药库里只剩一万发枪弹，粮秣仅够全营七日稀粥。所有人都以为，这一场大雪终将以三百万人的绝望火并收场。",
    },
    {
      title: "卷二 · 凿冰为渠的惊天狂想",
      content:
        "就在议事厅僵持不下的深夜，气象观测站沈寒山带回了最后通牒：极端寒潮提前二十三天到来。留给三百万人的时间只有七天。\n\n" +
        "那一晚，李烽当众砸碎了向南直州求和的请愿书，拔刀断冰，定下了‘天命破壁’之策：不叩关，不乞粮！动员三百万民工，利用零下四十度冰层超强硬度，以钢轨垫底、引封冻运河为路基，修筑一条自北纬四十三度直抵暖带的‘冰上长城’！",
    },
    {
      title: "卷三 · 冰上长城直贯江南",
      content:
        "那是人类工业史与群体生存意志最壮烈的一幕：图雅的两万头驯鹿雪橇组成无休止的补给传送带，五万军垦退伍老兵带头三班倒破冰凿渠，以雪水凝冰浇筑出一条宽逾百米的千里通衢。\n\n" +
        "队伍避开了设伏雷场的双堡关，绕过盘剥的粮行，借着化冻前仅存的极寒冻土窗口，犹如银龙破雪，浩浩荡荡跨过了北纬三十度暖带防线！",
    },
    {
      title: "尾声 · 终局幸存与极地纪实",
      content:
        "当南迁大军先锋部队在长江以南重新见到未被完全冰封的江水时，整整三百万人口，最终生还率高达 92.4%。\n\n" +
        "知府卫长庚站在空无一人的关楼上长叹，燕崇山的机枪终究没能射出一发阻拦同胞的子弹。三百万人的足迹在冰原上踏出的不仅是一条活路，更是一份文明在绝境中重造天下的壮丽答卷。\n\n" +
        "——知乎专栏 · 冰河纪推演亲历实录（全卷完）",
    },
  ],
  metricsSummary: {
    stability: 85,
    morale: 92,
    support: 95,
    resources: 78,
  },
};
