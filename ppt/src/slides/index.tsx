import type { SlideData } from "../types";
import { Slide1Cover } from "./slide-1-cover";
import { Slide2Background } from "./slide-2-background";
import { Slide3UiAesthetics } from "./slide-3-ui-aesthetics";
import { Slide4CrossPlatform } from "./slide-4-cross-platform";
import { Slide5PrefixCaching } from "./slide-5-prefix-caching";
import { Slide6PromptEcology } from "./slide-6-prompt-ecology";
import { Slide7GameplayEntropy } from "./slide-7-gameplay-entropy";
import { Slide8ZhihuFinale } from "./slide-8-zhihu-finale";
import { Slide9LiveSandbox } from "./slide-9-live-sandbox";
import { Slide10Summary } from "./slide-10-summary";

export const SLIDES: SlideData[] = [
  {
    id: "cover",
    number: 1,
    title: "知乎脑洞游乐园 · 决赛答辩",
    subtitle: "一句'如果'，值得用一整个世界来回答",
    category: "开篇定调",
    defaultSkinId: "tang-song-ming",
    notes: [
      "向评委问好，自报参赛姓名与项目定位。",
      "点题：我们精准切入知乎硬核历史区与科幻区最受热捧的'历史/科学假设'文化现象。",
      "亮出核心金句：天下若容不下汉室，汉室便去重造一个天下！",
    ],
    component: ({ skin }) => <Slide1Cover skin={skin} />,
  },
  {
    id: "background",
    number: 2,
    title: "立意痛点与知乎生态共振",
    subtitle: "从静态长文跃迁为人人可玩的沙盘推演",
    category: "项目立意",
    defaultSkinId: "qin-han",
    notes: [
      "对比传统知乎假设题痛点：单向阅读、缺乏多方博弈感、消费即终结。",
      "阐述四步闭环飞轮：知乎母本选题 ➔ 多智能体博弈 ➔ 天命分叉决策 ➔ 结算万字长回答一键发帖。",
      "突出知乎生态契合度：不仅是好玩的独立游戏，更是社区内容的二次生产机器。",
    ],
    component: ({ skin }) => <Slide2Background skin={skin} />,
  },
  {
    id: "ui-aesthetics",
    number: 3,
    title: "纯前端程序化像素美学引擎",
    subtitle: "SVG 路径合并算法 × 10 大平行宇宙换肤",
    category: "美学架构",
    defaultSkinId: "future-tech",
    notes: [
      "评委关注点：为什么选用像素风格？如何做到丝滑不卡？",
      "关键突破：frameToPaths 算法将数百个 <rect> 压缩合并为单条 SVG path，减少 85% DOM 节点，锁死 60fps。",
      "手绘 5 类微部件组合出上百种角色立绘，配以 6 种动作情绪律动。",
      "展示 10 套语义化皮肤瞬间换肤能力。",
    ],
    component: ({ skin }) => <Slide3UiAesthetics skin={skin} />,
  },
  {
    id: "cross-platform",
    number: 4,
    title: "多端极致响应式适配",
    subtitle: "桌面端三栏全景战局 × 移动端单手掌控",
    category: "工程体验",
    defaultSkinId: "three-kingdoms",
    notes: [
      "评委关注点：多端体验是否合格？",
      "桌面端：三栏战局（左侧势力谱系，中间议事舞台，右侧四维指标与决策树），全键盘快捷键驱动。",
      "移动端：卡片流自适应，使用 dvh 单位彻底解决 Safari/Chrome 动态工具栏遮挡，大拇指黄金热区排布。",
      "底层采用 React 19 Compiler 与 Next.js 16 自动化记忆化，零冗余重绘。",
    ],
    component: ({ skin }) => <Slide4CrossPlatform skin={skin} />,
  },
  {
    id: "prefix-caching",
    number: 5,
    title: "严苛的三段式前缀缓存设计",
    subtitle: "最大化 KV Cache 命中，降低 72% 延迟与 85% 成本",
    category: "提示词工程",
    defaultSkinId: "cosmic",
    notes: [
      "核心攻坚：多回合多 Agent 调用如果不严谨，延迟与成本会指数级失控。",
      "架构设计：严格的三段式Prompt：① 静态世界规则与身份顶层（100% 缓存命中）➔ ② 线性历史记录居中（追加复用）➔ ③ 动态变量置底（极微小增量计算）。",
      "实测数据：首字延迟（TTFT）降低 72%（从 1.6s 降至 0.45s），Token 成本降低 85%，单局成本不到 2 分钱！",
    ],
    component: ({ skin }) => <Slide5PrefixCaching skin={skin} />,
  },
  {
    id: "prompt-ecology",
    number: 6,
    title: "多智能体博弈调度管线",
    subtitle: "并发扇出表态 ➔ 冲突矩阵对齐 ➔ 单次结构化交锋",
    category: "Agent 调度",
    defaultSkinId: "alien",
    notes: [
      "核心攻坚：如何解决多智能体回合演算的高延迟、死锁与机械感？",
      "阶段一：Promise.all 并发扇出 4 大阵营表态，NDJSON 流式实时推送，前端首包直出零等待。",
      "阶段二：冲突矩阵对齐算法（pickConflictPair），按立场对抗权重识别出最尖锐的矛与盾，自动剪枝共识。",
      "阶段三：单次结构化双向交锋合成（Single-Shot Dual Clash），合并双人驳斥 prompt，节约 50% 往返时延并杜绝死锁。",
      "可靠性保障：AbortController 级联取消与单 Agent 故障隔离，保证长链路推演稳定可靠。",
    ],
    component: ({ skin }) => <Slide6PromptEcology skin={skin} />,
  },
  {
    id: "gameplay-entropy",
    number: 7,
    title: "四维国力博弈 × 大势熵增定律",
    subtitle: "数值不是加减法，而是历史宿命与心理压迫",
    category: "机制设计",
    defaultSkinId: "apocalypse",
    notes: [
      "四维指标权衡：政权稳定、军心士气、民众支持、战略资源。每一个选项都有尖锐代价。",
      "大势熵增定律：随回合推演，局势损耗不可逆增加（从 -0 到 -10/回合），杜绝消极苟活，逼迫玩家做出战略破局。",
      "危机倒计时与通牒机制强化游戏节奏张力。",
    ],
    component: ({ skin }) => <Slide7GameplayEntropy skin={skin} />,
  },
  {
    id: "zhihu-finale",
    number: 8,
    title: "结算即内容：万字知乎体长回答",
    subtitle: "亲历者第一人称自省 × 绝不打破第四面墙",
    category: "内容闭环",
    defaultSkinId: "after-human",
    notes: [
      "核心机制：对局结束即自动产出一篇格式严密的万字知乎长回答，形成社区内容增量。",
      "严格写作纪律：以'谢邀。人在赤壁，刚下战船'切入，严禁出现'AI/玩家/数值'等出戏词汇。",
      "卷目分章叙事 + 四维战报卡 + 一键复制发回知乎原帖，天然的高传播社交货币。",
    ],
    component: ({ skin }) => <Slide8ZhihuFinale skin={skin} />,
  },
  {
    id: "live-sandbox",
    number: 9,
    title: "现场沙盘交互演示舱",
    subtitle: "10 大皮肤切换、角色原型立绘与刘看山互动",
    category: "现场演示",
    defaultSkinId: "dino",
    notes: [
      "邀请评委现场监督交互体验！",
      "直接在幻灯片中点击切换文臣、武将、军师、工匠，观察呼吸动效与台词对峙。",
      "点击切换 10 大平行宇宙（白垩纪、三国、秦汉、深空、霓虹等），见证纯函数确定性的毫秒级渲染。",
      "展示知乎吉祥物刘看山的多姿态互动。",
    ],
    component: ({ skin }) => <Slide9LiveSandbox skin={skin} />,
  },
  {
    id: "summary",
    number: 10,
    title: "未来愿景、知乎 OAuth 助力与致谢",
    subtitle: "为每一个天马行空的脑洞，赋以一整个世界！",
    category: "愿景致谢",
    defaultSkinId: "evolution",
    notes: [
      "未来演进：知乎链接一键转沙盘（UGC 开放世界）；社区群体世界线拓扑树。",
      "知乎官方 OAuth 助力闭环：已打通授权，推演完毕可为本作助力【黑客松人气奖】并点亮刘看山徽章。",
      "致敬并感谢知乎答主与评委老师！邀请评委提问交流。",
    ],
    component: ({ skin }) => <Slide10Summary skin={skin} />,
  },
];
