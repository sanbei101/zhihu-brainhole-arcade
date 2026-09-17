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
    id: "gallery",
    number: 2,
    title: "玩法第 1 幕 · 知乎高赞脑洞展厅",
    subtitle: "从一句知乎提问，到一场多方博弈",
    category: "推演实操 · 选题",
    defaultSkinId: "three-kingdoms",
    notes: [
      "现场演示：复刻原版题库展厅，点击切换平行宇宙分类与脑洞卡片。",
      "题库全部来自知乎历史/科幻区高赞提问，保留原帖作者与点赞、评论数。",
      "默认锁定经典脑洞：《如果赤壁之战曹操大获全胜生擒刘备孙权，历史会怎样走向？》。",
    ],
    component: ({ skin }) => <Slide2Gallery skin={skin} />,
  },
  {
    id: "cast",
    number: 3,
    title: "玩法第 2 幕 · 势力立局与选角",
    subtitle: "三方视角 × 四路 AI：立场互斥的博弈棋局",
    category: "推演实操 · 选角",
    defaultSkinId: "three-kingdoms",
    notes: [
      "现场演示：复刻原版 WorldCastPanel，点击 3 位候选角色切换主角身份。",
      "联动查阅不同主角的公开目标、私密动机、底牌绝密与 4 路 Agent 利益红线（Red Line）。",
      "强调：每个世界线现场生成互斥阵容，拒绝千篇一律。",
    ],
    component: ({ skin }) => <Slide3Cast skin={skin} />,
  },
  {
    id: "council",
    number: 4,
    title: "玩法第 3 幕 · 议事厅全景战局",
    subtitle: "三栏战局：势力信任 × 梯度抉择 × 四维国力",
    category: "推演实操 · 抉择",
    defaultSkinId: "three-kingdoms",
    notes: [
      "现场演示：复刻原版三栏全景战局，左栏 SeatsPanel 信任度血条，右栏四维国力动态账本与大势熵增。",
      "核心亮点：点击 A/B/C/D 梯度选项，实时联动指标增减预览与各路 Agent 预测。",
      "特别展示 🌟 D 项【天命破壁】燃向金句：『汉家四百年若只有九州之大，这天下不要也罢！天下若容不下汉室，汉室便去重造一个天下！』",
    ],
    component: ({ skin }) => <Slide4Council skin={skin} />,
  },
  {
    id: "debate",
    number: 5,
    title: "玩法第 4 幕 · 智能体当场表态与交锋",
    subtitle: "一人抉择，四方表态，冲突矩阵短兵相接",
    category: "推演实操 · 交锋",
    defaultSkinId: "three-kingdoms",
    notes: [
      "现场演示：复刻原版 SpeechStage，点击 4 个回合按钮，步进演示四路 Agent 并发表态与短兵相接交锋。",
      "重点演示 Beat 3【双人短兵相接】：程昱按剑怒叱与鲁肃昂首对质双人同框，程序化像素立绘呼吸律动。",
      "阐释多智能体调度管线：并发扇出 + pickConflictPair 冲突矩阵对齐 + 单次结构化驳斥合成。",
    ],
    component: ({ skin }) => <Slide5Debate skin={skin} />,
  },
  {
    id: "finale",
    number: 6,
    title: "玩法第 5 幕 · 终局结算万字长文",
    subtitle: "结算即内容：万字知乎体亲历长回答",
    category: "推演实操 · 结算",
    defaultSkinId: "three-kingdoms",
    notes: [
      "现场演示：复刻原版 WorldFinaleView，点击章节 Tab 分卷阅读知乎体长回答。",
      "展示经典知乎开头：『谢邀。人在赤壁，刚下战船……』，严格亲历者纪律，绝不打破第四面墙。",
      "点击【一键复制发回知乎】按钮，展示复制成功 Toast 交互反馈；右侧展示四维终局战报卡。",
    ],
    component: ({ skin }) => <Slide6Finale skin={skin} />,
  },
  {
    id: "architecture",
    number: 7,
    title: "核心工程攻坚 · 架构与算法突破",
    subtitle: "底层技术硬实力：缓存降本 × 像素引擎 × 冲突调度",
    category: "底层架构",
    defaultSkinId: "cosmic",
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
    defaultSkinId: "evolution",
    notes: [
      "知乎生态闭环飞轮：知乎选题 ➔ 沙盘推演 ➔ 结算长文发回知乎 ➔ 社区二次讨论发酵。",
      "知乎 OAuth 助力闭环：已打通授权，推演完毕可为本作助力【黑客松人气奖】并点亮专属徽章。",
      "致敬知乎答主与评委老师！进入 Q&A 互动问答环节。",
    ],
    component: ({ skin }) => <Slide8Vision skin={skin} />,
  },
];
