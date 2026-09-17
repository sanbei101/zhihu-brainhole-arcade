import type { SlideData } from "../types";
import { Slide1Cover } from "./slide-1-cover";
import { Slide2Gallery } from "./slide-2-gallery";
import { Slide3Cast } from "./slide-3-cast";
import { Slide4Council } from "./slide-4-council";
import { Slide5Debate } from "./slide-5-debate";
import { Slide6Finale } from "./slide-6-finale";
import { Slide7Architecture } from "./slide-7-architecture";
import { Slide8Vision } from "./slide-8-vision";

export const SLIDES: SlideData[] = [
  {
    id: "cover",
    number: 1,
    title: "知乎脑洞游乐园 · 作品答辩",
    subtitle: "假如地球现在进入冰河时代，人类还能生存下去吗？",
    category: "开篇定调",
    defaultSkinId: "apocalypse",
    fullBleed: true,
    notes: [
      "向评委问好，介绍项目定位与知乎生态价值。",
      "点题：精准切入知乎硬核历史区与科幻区最受热捧的'极端假设'文化现象。",
      "亮出核心金句：天冻不住人的路！冰封千里，那就把冰原踏成通衢，走出一个不用叩关的天下！",
    ],
    component: ({ skin }) => <Slide1Cover skin={skin} />,
  },
  {
    id: "gallery",
    number: 2,
    title: "玩法第 1 幕 · 知乎高赞脑洞展厅",
    subtitle: "从一句知乎提问，到一场多方博弈",
    category: "推演实操 · 选题",
    defaultSkinId: "apocalypse",
    fullBleed: true,
    notes: [
      "现场演示：展示末日灾变专区，锁定知乎答主赵泠的高赞核心问题。",
      "保留知乎原帖作者、7.7w+ 赞同与 1480 条讨论热度基底。",
      "选定核心脑洞：《假如地球现在进入冰河时代，人类还能生存下去吗？》。",
    ],
    component: ({ skin }) => <Slide2Gallery skin={skin} />,
  },
  {
    id: "cast",
    number: 3,
    title: "玩法第 2 幕 · 势力立局与选角",
    subtitle: "三方视角 × 四路 AI：生死存续的博弈棋局",
    category: "推演实操 · 选角",
    defaultSkinId: "apocalypse",
    fullBleed: true,
    notes: [
      "现场演示：复刻原版 WorldCastPanel，点击 3 位候选角色（李烽、卫长庚、图雅）切换主角身份。",
      "查阅不同主角的公开目标、私密动机与 4 路 Agent 利益红线（Red Line）。",
      "强调：三百年一遇极寒大迁徙，每个角色权力来源与道德困境各异。",
    ],
    component: ({ skin }) => <Slide3Cast skin={skin} />,
  },
  {
    id: "council",
    number: 4,
    title: "玩法第 3 幕 · 议事厅全景战局",
    subtitle: "三栏战局：势力信任 × 梯度抉择 × 四维存续账本",
    category: "推演实操 · 抉择",
    defaultSkinId: "apocalypse",
    fullBleed: true,
    notes: [
      "现场演示：三栏全景战局沙盘，左栏 SeatsPanel 信任度血条，右栏四维存续账本与严寒大势熵增。",
      "核心亮点：点击 A/B/C/D 梯度选项，实时联动存续指标增减预览与各路 Agent 预测。",
      "重点展示 🌟 D 项【天命破壁】燃向金句：『天冻不住人的路！冰封千里，那就把冰原踏成通衢，走出一个不用叩关的天下！』",
    ],
    component: ({ skin }) => <Slide4Council skin={skin} />,
  },
  {
    id: "debate",
    number: 5,
    title: "玩法第 4 幕 · 智能体当场表态与交锋",
    subtitle: "一人抉择，四方表态，冲突矩阵短兵相接",
    category: "推演实操 · 交锋",
    defaultSkinId: "apocalypse",
    fullBleed: true,
    notes: [
      "现场演示：点击 4 个回合按钮，步进演示四路 Agent 并发表态与短兵相接交锋。",
      "重点演示 Beat 3【矛与盾尖锐交锋】：气象学家沈寒山与防务总兵燕崇山双人同框对峙，程序化像素立绘呼吸律动。",
      "阐释多智能体调度管线：并发扇出 + pickConflictPair 冲突矩阵对齐 + 单次结构化交锋合成。",
    ],
    component: ({ skin, active }) => <Slide5Debate skin={skin} active={active} />,
  },
  {
    id: "finale",
    number: 6,
    title: "玩法第 5 幕 · 终局结算万字长文",
    subtitle: "结算即内容：万字知乎体亲历长回答",
    category: "推演实操 · 结算",
    defaultSkinId: "apocalypse",
    fullBleed: true,
    notes: [
      "现场演示：分卷阅读知乎体万字长回答，展示经典知乎开头：『谢邀。人在南口双堡关外，刚摘下结满白霜的防毒面具……』。",
      "严格亲历者纪律，展现人类工业组织力与意志奇迹。",
      "点击【一键复制发回知乎原帖】按钮展示 Toast 交互反馈；右侧展示 92.4% 文明存续战报卡。",
    ],
    component: ({ skin, active }) => <Slide6Finale skin={skin} active={active} />,
  },
  {
    id: "architecture",
    number: 7,
    title: "核心工程攻坚 · 架构与算法突破",
    subtitle: "底层技术硬实力：缓存降本 × 像素引擎 × 冲突调度",
    category: "底层架构",
    defaultSkinId: "apocalypse",
    fullBleed: true,
    notes: [
      "硬核工程攻坚 1：严苛三段式 Prefix Caching 架构，首字时延降低 72%，Token 成本锐减 85%，单局推演不到 2 分钱！",
      "硬核工程攻坚 2：纯前端程序化像素引擎，frameToPaths 算法减少 85% DOM 节点，锁死 60fps，10 大皮肤瞬间换肤。",
      "硬核工程攻坚 3：多智能体冲突矩阵对齐与 AbortController 级联容灾，保障长链路推演稳定可靠。",
    ],
    component: ({ skin }) => <Slide7Architecture skin={skin} />,
  },
  {
    id: "vision",
    number: 8,
    title: "生态飞轮与未来演进 · 愿景致谢",
    subtitle: "为每一个脑洞，赋以一整个世界！",
    category: "生态愿景",
    defaultSkinId: "apocalypse",
    fullBleed: true,
    notes: [
      "知乎生态闭环飞轮：知乎选题 ➔ 沙盘推演 ➔ 结算长文发回知乎 ➔ 社区二次讨论发酵。",
      "知乎 OAuth 助力闭环：已打通授权，推演完毕可为本作助力【黑客松人气奖】并点亮专属徽章。",
      "致敬知乎答主与评委老师！进入 Q&A 互动问答环节。",
    ],
    component: ({ skin }) => <Slide8Vision skin={skin} />,
  },
];
