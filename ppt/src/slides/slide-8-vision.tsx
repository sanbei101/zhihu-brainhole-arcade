import { Compass, HeartHandshake, Repeat, Sparkles, Trophy } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getSkin, isDarkSkin, skinStyleVars, type ScenarioSkin } from "@/lib/scenario-skin";

import { ASSETS } from "../assets";

export function Slide8Vision({ skin: _defaultSkin }: { skin: ScenarioSkin }) {
  const skin = getSkin("apocalypse");

  return (
    <main
      style={skinStyleVars(skin)}
      className={`bg-background text-foreground relative flex size-full h-screen flex-col justify-between overflow-hidden select-none ${
        isDarkSkin(skin) ? "dark" : ""
      }`}
    >
      {/* 🏛️ 标题区：16:9 紧凑适配 */}
      <section className="shrink-0 border-b border-white/10 bg-[#26201d]/70 px-4 py-2 sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <Badge className="bg-[#e2622c] text-xs text-black font-black px-2 py-0.5">生态闭环与商业落地</Badge>
              <span className="font-mono text-xs text-slate-300 font-medium">
                从一个好奇脑洞，到万字硬核回答，再引爆社区二次狂欢
              </span>
            </div>
            <h1 className="mt-1 text-lg font-black text-slate-100 sm:text-2xl tracking-tight">
              知乎生态飞轮与未来演进：为每一个脑洞，赋以一整个世界
            </h1>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-amber-400">
            <Trophy className="size-4" />
            <span className="font-bold">2026 知乎黑客松决赛答辩 · 结算闭环</span>
          </div>
        </div>
      </section>

      {/* 🎡 核心生态与商业愿景：纵向充实饱满，绝不留空 */}
      <section className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between px-4 py-2.5 sm:px-6 sm:py-3.5 gap-3">
        {/* 第一行：知乎生态 4 步闭环飞轮 + 4 大核心实测数据展板 */}
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-12 lg:gap-4">
          {/* 左侧：4 步闭环飞轮 (7 列) */}
          <Card className="border-white/15 bg-[#26201d]/95 p-3.5 shadow-md lg:col-span-7">
            <CardHeader className="space-y-1 p-0 pb-2 border-b border-white/10">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 font-mono text-xs font-black text-orange-400 sm:text-sm">
                  <Repeat className="size-4" />
                  <span>知乎生态 4 步闭环飞轮</span>
                </span>
                <Badge className="bg-[#e2622c] text-[11px] text-black font-black px-2 py-0.5">自循环生态</Badge>
              </div>
            </CardHeader>

            <div className="grid grid-cols-2 gap-2 pt-2 text-xs sm:text-[13px]">
              <div className="rounded-lg border border-orange-500/30 bg-orange-950/20 p-2.5">
                <strong className="block font-black text-orange-400">① 灵感源于知乎热榜</strong>
                <p className="mt-1 text-xs leading-relaxed text-slate-200">
                  直接提取历史、科幻高赞假设题，自带原生受众与热烈讨论基础。
                </p>
              </div>
              <div className="rounded-lg border border-cyan-500/30 bg-cyan-950/20 p-2.5">
                <strong className="block font-black text-cyan-400">② 多智能体策略推演</strong>
                <p className="mt-1 text-xs leading-relaxed text-slate-200">
                  四路阵营实时交锋，玩家每一次抉择都催生截然不同的世界线。
                </p>
              </div>
              <div className="rounded-lg border border-amber-500/30 bg-amber-950/20 p-2.5">
                <strong className="block font-black text-amber-400">③ 终局自动生成万字长文</strong>
                <p className="mt-1 text-xs leading-relaxed text-slate-200">
                  不用费劲码字，通关后 AI 自动整理成严谨专业的高赞知乎体深度回答。
                </p>
              </div>
              <div className="rounded-lg border border-emerald-500/30 bg-emerald-950/20 p-2.5">
                <strong className="block font-black text-emerald-400">④ 回流原帖二次引爆</strong>
                <p className="mt-1 text-xs leading-relaxed text-slate-200">
                  携带专属推演数据卡一键发帖，吸引更多知友跟帖辩论与二次推演。
                </p>
              </div>
            </div>
          </Card>

          {/* 右侧：4 项硬核实测数据展板 (5 列) */}
          <Card className="border-white/15 bg-[#26201d]/95 p-3.5 shadow-md lg:col-span-5">
            <CardHeader className="space-y-1 p-0 pb-2 border-b border-white/10">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 font-mono text-xs font-black text-amber-400 sm:text-sm">
                  <Sparkles className="size-4" />
                  <span>核心实测工程数据指标</span>
                </span>
                <Badge className="bg-amber-500 text-[11px] text-black font-black px-2 py-0.5">实测达标</Badge>
              </div>
            </CardHeader>

            <div className="grid grid-cols-2 gap-2 pt-2 text-center">
              <div className="rounded-lg border border-white/10 bg-black/40 p-2.5">
                <div className="font-mono text-lg sm:text-xl font-black text-orange-400">77,000+</div>
                <div className="mt-0.5 text-xs text-slate-200 font-medium">全剧推演上下文</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-black/40 p-2.5">
                <div className="font-mono text-lg sm:text-xl font-black text-emerald-400">0.45s</div>
                <div className="mt-0.5 text-xs text-slate-200 font-medium">流式首字极速上屏</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-black/40 p-2.5">
                <div className="font-mono text-lg sm:text-xl font-black text-cyan-400">&lt; 2 分钱</div>
                <div className="mt-0.5 text-xs text-slate-200 font-medium">单局推理算力成本</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-black/40 p-2.5">
                <div className="font-mono text-lg sm:text-xl font-black text-amber-400">10,279 字</div>
                <div className="mt-0.5 text-xs text-slate-200 font-medium">单篇知乎长文生成</div>
              </div>
            </div>
          </Card>
        </div>

        {/* 第二行：知乎业务赋能与三大商业化落地场景 */}
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-4">
          <Card className="border-white/15 bg-[#26201d]/90 p-3.5 shadow-md">
            <div className="flex items-center gap-2">
              <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/40 text-xs font-bold px-2 py-0.5">业务场景 1</Badge>
              <h3 className="text-sm sm:text-base font-black text-slate-100">盘活百万知乎“冷饭”脑洞</h3>
            </div>
            <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-slate-200">
              过去十年知乎积攒了海量优质假设题。把静态老回答一键转为可互动沙盘，唤醒沉睡老内容，再造千万级长尾曝光。
            </p>
          </Card>

          <Card className="border-white/15 bg-[#26201d]/90 p-3.5 shadow-md">
            <div className="flex items-center gap-2">
              <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/40 text-xs font-bold px-2 py-0.5">业务场景 2</Badge>
              <h3 className="text-sm sm:text-base font-black text-slate-100">“边玩边产出”破除创作门槛</h3>
            </div>
            <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-slate-200">
              很多答主脑洞极大却不爱动手码长文。玩家沉浸推演一局，系统自动沉淀出结构严谨的万字回答，源源不断反哺社区内容库。
            </p>
          </Card>

          <Card className="border-white/15 bg-[#26201d]/90 p-3.5 shadow-md">
            <div className="flex items-center gap-2">
              <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/40 text-xs font-bold px-2 py-0.5">业务场景 3</Badge>
              <h3 className="text-sm sm:text-base font-black text-slate-100">盐选专栏与故事 IP 互动变现</h3>
            </div>
            <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-slate-200">
              联动知乎盐选小说、历史悬疑专栏，把单向付费阅读升级为多结局“互动推演剧”，解锁会员留存与内容付费新形态。
            </p>
          </Card>
        </div>

        {/* 第三行：未来演进蓝图 (Roadmap) + 知乎 OAuth 助力 & Q&A 答辩 */}
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-12 lg:gap-4">
          {/* 路线图 (7 列) */}
          <Card className="border-white/15 bg-[#26201d]/95 p-3.5 shadow-md lg:col-span-7">
            <CardHeader className="p-0 pb-1.5 border-b border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-black text-slate-200">
                  <Compass className="size-4 text-orange-400" />
                  <span>未来演进蓝图 (Roadmap)</span>
                </div>
                <span className="font-mono text-xs text-slate-400">持续迭代中</span>
              </div>
            </CardHeader>
            <CardContent className="grid grid-cols-3 gap-2.5 p-0 pt-2 text-xs sm:text-[13px]">
              <div className="rounded-lg border border-white/10 bg-black/40 p-2.5">
                <strong className="block font-black text-orange-400">UGC 链接转沙盘</strong>
                <span className="mt-1 block text-xs leading-relaxed text-slate-300">
                  粘贴任意知乎问题 URL，AI 秒级解析母本并生成推演沙盘
                </span>
              </div>
              <div className="rounded-lg border border-white/10 bg-black/40 p-2.5">
                <strong className="block font-black text-cyan-400">全网世界线拓扑树</strong>
                <span className="mt-1 block text-xs leading-relaxed text-slate-300">
                  聚合所有答主的推演分支，绘制集体智慧的平行宇宙全景
                </span>
              </div>
              <div className="rounded-lg border border-white/10 bg-black/40 p-2.5">
                <strong className="block font-black text-emerald-400">多人联机廷议对决</strong>
                <span className="mt-1 block text-xs leading-relaxed text-slate-300">
                  支持真人知友分别扮演文武重臣，实时联机唇枪舌剑博弈
                </span>
              </div>
            </CardContent>
          </Card>

          {/* 知乎 OAuth 助力与答辩交流卡 (5 列) */}
          <Card className="border-2 border-orange-500/50 bg-gradient-to-br from-orange-950/40 via-[#26201d] to-black/60 p-3.5 shadow-md lg:col-span-5">
            <CardHeader className="space-y-1.5 p-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <HeartHandshake className="size-4 text-rose-400" />
                  <span className="text-xs sm:text-sm font-black text-slate-100">答辩交流与致谢</span>
                </div>
                <Badge className="bg-[#e2622c] text-[10px] text-black font-black px-1.5 py-0.5">人气奖助力</Badge>
              </div>

              <div className="flex items-center gap-3 py-1">
                <div className="size-12 shrink-0 overflow-hidden rounded-xl border border-white/15 bg-white/10 p-0.5 shadow-md">
                  <img
                    src={ASSETS.liukanshan.stroll}
                    alt="刘看山极地巡逻"
                    className="size-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-xs sm:text-[13px] font-serif leading-relaxed text-slate-200">
                    “一句‘如果’，值得用一整个世界来回答。”
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    感谢知乎社区提供源源不断的灵感，感谢各位评委老师！
                  </p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="mt-1.5 p-0">
              <Button className="h-8 w-full gap-2 bg-[#e2622c] text-xs sm:text-sm font-black text-black shadow-md hover:bg-orange-500">
                <img src={ASSETS.zhihuSvg} alt="知乎" className="size-4 rounded-xs" />
                <span>知乎 OAuth 登录 · 为本作品投出人气选票</span>
                <Sparkles className="size-3.5 text-black" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 底部确认栏 */}
      <footer className="relative z-30 shrink-0 border-t border-white/10 bg-black/60 px-4 py-2 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <Trophy className="size-4 text-amber-400" />
            <strong className="text-slate-100">感谢倾听 · 欢迎各位评委老师提问</strong>
          </div>
          <span className="font-mono text-[11px] font-bold text-orange-400">
            (按 Home 键可快速返回封面页)
          </span>
        </div>
      </footer>
    </main>
  );
}
