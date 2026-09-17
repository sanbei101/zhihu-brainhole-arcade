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
    id: "456699039",
    themeId: "three-kingdoms",
    title: "如果赤壁之战曹操大获全胜生擒刘备孙权，历史会怎样走向？",
    author: "煮酒论青史",
    votes: 42100,
    answers: 1380,
    tag: "三国历史 · 狂澜假设",
    summary:
      "曹操于赤壁大胜生擒刘备孙权押解许昌，朝臣、宗族少壮派与江东降臣各怀心思，一统之后是杀降立威还是分化怀柔？",
  },
  {
    id: "cosmic-sun-extinguish",
    themeId: "cosmic",
    title: "如果太阳将在三天后彻底熄灭，且全人类提前收到了警告？",
    author: "深空观星者",
    votes: 38900,
    answers: 2150,
    tag: "硬核科幻 · 终极倒计时",
    summary:
      "地球地表将在72小时后跌入零下六十度极寒，避难地下城席位、重核聚变储备与飞船船票将引爆全球秩序。",
  },
  {
    id: "qin-han-shahu",
    themeId: "qin-han",
    title: "如果始皇帝第五次东巡并未病逝沙丘，扶苏顺利监军回京？",
    author: "大秦纪事",
    votes: 31200,
    answers: 920,
    tag: "大秦帝国 · 宿命分叉",
    summary:
      "赵高李斯伪诏被当场截获，始皇携三十万长城军团回咸阳整饬法度，郡县与封建、严刑与与民休息激烈碰撞。",
  },
  {
    id: "dino-civilization",
    themeId: "dino",
    title: "如果小行星擦肩而过，伤齿龙演化出地表高智慧文明？",
    author: "古生物猜想",
    votes: 24700,
    answers: 780,
    tag: "平行演化 · 史前文明",
    summary: "地热蒸汽朋克时代降临，羽冠长老院与新生破壳者在冰川期前夕争夺赤道大陆架的统治权。",
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
    id: "player_xunyu",
    name: "荀彧",
    identity: "汉尚书令 · 曹操首席谋臣",
    faction: "汉室宗亲与元老士族派",
    archetype: "official",
    motion: "scribe",
    publicGoal: "匡扶汉室正统，促成天下止战罢兵与战后礼法复兴",
    privateGoal: "阻止曹操诛杀刘备孙权，保全天下士人脊梁，逼退曹操进封魏公之谋",
    decisionPower: "尚书台诏令草拟权、调动朝臣士人谏书与许昌城防符节",
    secret: "与伏皇后暗有通传，手中留有一份刘备早年所受的汉献帝密诏副卷",
    redLine: "绝不签署违背汉家祖制、废黜献帝或私自代汉的诏书",
    quote: "天下若容不下汉室，汉室便去重造一个天下！",
  },
  {
    id: "player_caopi",
    name: "曹丕",
    identity: "五官中郎将 · 副丞相",
    faction: "曹魏少壮派与军功派",
    archetype: "general",
    motion: "guard",
    publicGoal: "雷厉风行整肃降军，扫清天下异己，确立曹氏代汉大基业",
    privateGoal: "在曹植立功前独揽荆襄江东降将改编大权，坐实世子之位",
    decisionPower: "调动丞相府虎贲禁卫、任免地方太守副职与调配军功封赏",
    secret: "暗中扣留了孙权的一批绝密降表，试图以此要挟江东世家为己所用",
    redLine: "世子之权与军功决断绝不容他人染指与分流",
    quote: "成王败寇，天命在曹！阻我大业者，虽至亲亦不可留！",
  },
  {
    id: "player_zhugejin",
    name: "诸葛瑾",
    identity: "前东吴长史 · 降将代表",
    faction: "江东世族与战俘集团",
    archetype: "envoy",
    motion: "plead",
    publicGoal: "保全江东数万将士家眷性命，促成南北和平受降",
    privateGoal: "暗中掩护胞弟诸葛亮突围入蜀，为天下保留三分平衡的火种",
    decisionPower: "江东世族联络密信、安抚长江水师降卒的名望与粮道调度",
    secret: "掌握江东水师隐藏在鄱阳湖水域的一处备用船坞与战略军饷暗账",
    redLine: "绝不充当曹军引路先锋屠戮江东故土百姓",
    quote: "瑾虽降附，然江东百万生灵不可轻掷，愿以残躯换得江淮止战。",
  },
];

export const MOCK_AGENTS: MockAgentCharacter[] = [
  {
    id: "agent_chengyu",
    name: "程昱",
    identity: "相府军师 · 奋武将军",
    faction: "曹氏宿将法家派",
    archetype: "general",
    motion: "guard",
    trust: 35,
    attitude: "施压",
    publicGoal: "斩草除根，即刻处决刘孙二人，以绝天下野心家死灰复燃之望",
    secret: "在兖州曾为军粮行非常手段，最惧战后朝廷清算酷吏罪名，故必须严刑立威",
    redLine: "绝不容许姑息放纵降将，绝不赞同任何养虎为患的缓兵之计",
    pressureMethod: "摔出刘备早年谋叛卷宗，以军法违逆罪当庭逼宫发难",
    openingLine: "二贼不死，江东与荆襄终非丞相所有！今日若存妇人之仁，他日必受噬脐之痛！",
  },
  {
    id: "agent_lusu",
    name: "鲁肃",
    identity: "前东吴赞军校尉 · 阶下囚",
    faction: "孙权旧部与抗曹联军",
    archetype: "envoy",
    motion: "plead",
    trust: 68,
    attitude: "拥戴",
    publicGoal: "保全刘备孙权性命，避免南北彻底陷入血海深仇的屠戮循环",
    secret: "早已料定曹军必有赤壁疫病与粮秣短缺之困，拖延受降进程以待北方生变",
    redLine: "绝不诬陷孙权负屈请死，绝不替曹操撰写招降降书",
    pressureMethod: "当众道破曹军南征粮尽疫作的实情，以江南万民抗辩",
    openingLine: "杀刘备孙权易如反掌，然丞相若欲得江东人心，恐以此一刀断绝天下归心之望！",
  },
  {
    id: "agent_kongrong",
    name: "孔融",
    identity: "大汉少府 · 孔子二十世孙",
    faction: "许昌宗室清议名士派",
    archetype: "official",
    motion: "scribe",
    trust: 72,
    attitude: "拥戴",
    publicGoal: "借赤壁大胜收复兵权之机，迎还天子实权，恢复汉家朝仪",
    secret: "与汉献帝近侍互通声气，暗中联络益州刘璋图谋许昌翻盘",
    redLine: "绝不参拜无天子制诰的私宴，绝不承认曹操自加九锡",
    pressureMethod: "高举大汉宗庙礼法与四海清议，直斥擅杀宗亲乃谋逆僭越",
    openingLine: "天下未定便急于烹狗藏弓，丞相眼中可还有许昌端坐的九五之尊？！",
  },
  {
    id: "agent_caocao",
    name: "曹操",
    identity: "大汉丞相 · 汉相魏公",
    faction: "相府最高决策层",
    archetype: "magnate",
    motion: "work",
    trust: 58,
    attitude: "观望",
    publicGoal: "荡平四海，令天下重归一统，建万世不易之霸业",
    secret: "赤壁水师疫病已蔓延三军，数万将士染疾，迫切需要稳定江淮后方班师北归",
    redLine: "汉室天命不可借以压制相府军政号令，大军军心绝不可动摇",
    pressureMethod: "按剑作色，以数十年相知之情与身家性命向文若施压",
    openingLine: "文若，孤三十年南征北战，今天下尽在股掌。杀与放，孤只要你一句话！",
  },
];

export interface MockDecisionOption {
  id: "A" | "B" | "C" | "D";
  risk: "稳" | "险" | "赌" | "狂";
  title: string;
  desc: string;
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
    name: string;
    lean: "支持" | "反对" | "犹疑";
  }[];
}

export const MOCK_OPTIONS: MockDecisionOption[] = [
  {
    id: "A",
    risk: "稳",
    title: "奏请天子厚封两王以安降附",
    desc: "力劝丞相上表天子，授刘备、孙权归义侯爵位软禁许昌，大赦江南部曲以弭兵祸。",
    deltas: { stability: 8, morale: 0, support: 12, resources: -6 },
    impactText: { stability: "+8", morale: "0", support: "+12", resources: "-6" },
    forecast: [
      { agentId: "agent_caocao", name: "曹操", lean: "犹疑" },
      { agentId: "agent_chengyu", name: "程昱", lean: "反对" },
      { agentId: "agent_lusu", name: "鲁肃", lean: "支持" },
      { agentId: "agent_kongrong", name: "孔融", lean: "支持" },
    ],
  },
  {
    id: "B",
    risk: "险",
    title: "坚持由廷尉大理寺依律公审",
    desc: "行尚书令职权，严禁相府私设军法处决朝廷大臣，将二人移交廷尉公审以明汉法。",
    deltas: { stability: 15, morale: -8, support: 6, resources: 0 },
    impactText: { stability: "+15", morale: "-8", support: "+6", resources: "0" },
    forecast: [
      { agentId: "agent_caocao", name: "曹操", lean: "反对" },
      { agentId: "agent_chengyu", name: "程昱", lean: "反对" },
      { agentId: "agent_lusu", name: "鲁肃", lean: "支持" },
      { agentId: "agent_kongrong", name: "孔融", lean: "支持" },
    ],
  },
  {
    id: "C",
    risk: "赌",
    title: "直陈南征疫病军情劝止班师",
    desc: "借抚恤新附之名，上疏力陈南征大军粮秣将罄、疫疠横生之实，要求立即撤兵休养中原民力。",
    deltas: { stability: 0, morale: -14, support: 16, resources: 14 },
    impactText: { stability: "0", morale: "-14", support: "+16", resources: "+14" },
    forecast: [
      { agentId: "agent_caocao", name: "曹操", lean: "反对" },
      { agentId: "agent_chengyu", name: "程昱", lean: "反对" },
      { agentId: "agent_lusu", name: "鲁肃", lean: "支持" },
      { agentId: "agent_kongrong", name: "孔融", lean: "支持" },
    ],
  },
  {
    id: "D",
    risk: "狂",
    title: "焚舟断汉 · 请天子封两王开海外宗藩",
    desc: "奏请天子顺势收缴长江战船，赦刘备孙权为东洋王，押其督造巨舰泛海开辟南洋新汉土！",
    epigraph: "汉家四百年若只有九州之大，这天下不要也罢！天下若容不下汉室，汉室便去重造一个天下！",
    deltas: { stability: -6, morale: 18, support: 20, resources: -15 },
    impactText: { stability: "-6", morale: "+18", support: "+20", resources: "-15" },
    forecast: [
      { agentId: "agent_caocao", name: "曹操", lean: "犹疑" },
      { agentId: "agent_chengyu", name: "程昱", lean: "反对" },
      { agentId: "agent_lusu", name: "鲁肃", lean: "支持" },
      { agentId: "agent_kongrong", name: "孔融", lean: "支持" },
    ],
  },
];

export interface MockDebateBeat {
  id: string;
  roundTitle: string;
  speaker: {
    id: string;
    name: string;
    faction: string;
    motion: PortraitMotion;
    archetype: CharacterArchetype;
  };
  opponent?: {
    id: string;
    name: string;
    faction: string;
    motion: PortraitMotion;
    archetype: CharacterArchetype;
  };
  speech: string;
  clashType: "单方表态" | "矛与盾尖锐交锋" | "最终裁定";
  tag: string;
}

export const MOCK_DEBATE_BEATS: MockDebateBeat[] = [
  {
    id: "beat_1",
    roundTitle: "第一回合 · 鹰派发难",
    speaker: {
      id: "agent_chengyu",
      name: "程昱",
      faction: "相府军法派",
      motion: "guard",
      archetype: "general",
    },
    speech:
      "二贼不死，江东与荆襄终非丞相所有！文若欲赦其死罪，更欲令其远渡开宗？此无异于纵虎归山、开门揖盗！今日若存妇人之仁，明日三军将士之血谁来偿还？！",
    clashType: "单方表态",
    tag: "相府军威 · 力主立斩",
  },
  {
    id: "beat_2",
    roundTitle: "第二回合 · 降臣抗辩",
    speaker: {
      id: "agent_lusu",
      name: "鲁肃",
      faction: "江东受降代表",
      motion: "plead",
      archetype: "envoy",
    },
    speech:
      "杀刘备孙权易如反掌，然丞相若欲得江东人心，恐以此一刀断绝天下归心之望！尚书令大人所言极是，江东子弟善于舟楫，若能泛海开疆，化干戈为四海之藩，何其雄哉！",
    clashType: "单方表态",
    tag: "苍生大计 · 绝境生机",
  },
  {
    id: "beat_3",
    roundTitle: "第三回合 · 矛与盾短兵相接",
    speaker: {
      id: "agent_chengyu",
      name: "程昱",
      faction: "相府军法派",
      motion: "guard",
      archetype: "general",
    },
    opponent: {
      id: "agent_lusu",
      name: "鲁肃",
      faction: "江东受降代表",
      motion: "plead",
      archetype: "envoy",
    },
    speech:
      "【程昱按剑怒叱】鲁子敬！你不过阶下之囚，胆敢在此妄言国策蛊惑尚书令？！\n【鲁肃昂首对质】程仲德！肃虽为囚，所言皆为天下数十万生灵！曹军北归已现疫疠，强行杀降，江东八十一州必同归于尽，丞相亦难保中原！",
    clashType: "矛与盾尖锐交锋",
    tag: "冲突矩阵对齐 · 双人驳斥",
  },
  {
    id: "beat_4",
    roundTitle: "第四回合 · 曹操一锤定音",
    speaker: {
      id: "agent_caocao",
      name: "曹操",
      faction: "大汉丞相",
      motion: "work",
      archetype: "magnate",
    },
    speech:
      "哈哈哈哈哈！好一个『天下若容不下汉室，汉室便去重造一个天下』！文若这一笔，倒教孤生出三十年前起兵讨董的气魄来！罢罢罢！依文若所请，封刘备为靖海王、孙权为拓海王，即日起调长江千艘艨艟，给孤开辟南洋新汉土！",
    clashType: "最终裁定",
    tag: "天命破壁 · 裁决落定",
  },
];

export interface MockFinaleArticle {
  title: string;
  author: string;
  verdictLine: string;
  rating: string;
  zhihuBadge: string;
  prologue: string;
  chapters: {
    title: string;
    content: string;
  }[];
  metricsSummary: {
    stability: number;
    morale: number;
    support: number;
    resources: number;
  };
  keyQuote: string;
}

export const MOCK_FINALE: MockFinaleArticle = {
  title: "如果赤壁之战曹操大获全胜生擒刘备孙权，历史会怎样走向？",
  author: "尚书令荀彧",
  zhihuBadge: "知乎优秀历史答主 · 亲历者自省长回答",
  verdictLine: "【天命破壁 · 汉室新开九万里】",
  rating: "S+ 级 逆命破局",
  keyQuote: "天下若容不下汉室，汉室便去重造一个天下！",
  metricsSummary: {
    stability: 78,
    morale: 88,
    support: 92,
    resources: 68,
  },
  prologue:
    "谢邀。人在赤壁，刚下战船。\n\n建安十三年冬十二月，曹孟德火烧连环，八十万北军生擒刘备、孙权于中军大帐。天下人都以为，大汉四百年的战乱终于要收束为相府的一张受禅台。然而只有尚书台那一盏夜夜燃至天明的孤灯明白——杀降之日，便是天下彻底崩散之时。",
  chapters: [
    {
      title: "卷一 · 赤壁余烬与相府杀机",
      content:
        "曹孟德在大帐中温酒，程昱拔剑侍立，少府孔融在席间愤而掷爵。程昱力主将刘孙二人斩首徇葬，将长江染红，以绝天下异心。满堂将领皆欲割功分地，无人顾及大军营中已蔓延的江淮疫疠。\n\n我捧着尚书台玉节走入大帐，孟德笑问：『文若，天下已定，孤还要留他们作甚？』那一刻我知道，若顺着曹氏军功派的心意，不出三年，中原与江东必再次死生枕藉。",
    },
    {
      title: "卷二 · 焚舟断汉与海外拓土",
      content:
        "我上疏曰：汉家四百年若只有九州之大，这天下不要也罢！天下若容不下汉室，汉室便去重造一个天下！\n\n以天子密诏为凭，我借曹军南征战船数千艘，奏请赦免刘备、孙权死罪，封为靖海、拓海二王，令其携荆扬健儿泛海东渡，南下百越与南洋开辟新汉土。孟德拊掌大笑，程昱默然收剑。赤壁之火，终未烧尽天下气节，反将大汉火种引渡重洋。",
    },
    {
      title: "尾声 · 孤灯自照与天命长存",
      content:
        "建安二十年，南洋扶南、占城皆建汉家太学，刘玄德在南海铸九鼎，孙仲谋率战舰巡视马六甲。中原无战事，江南免刀兵。\n\n孟德终生未登受禅台。我一生未背汉室，亦未负孟德三十年故剑之情。历史在此分叉，天命并未老去，它只是顺着季风，吹向了更广袤的人间。",
    },
  ],
};
