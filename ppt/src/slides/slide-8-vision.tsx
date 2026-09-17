import { Compass, HeartHandshake, Repeat, Sparkles, Trophy } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
            <div className="flex items-center gap-1.5">
              <Badge className="bg-[#e2622c] text-[10px] text-black font-bold">生态飞轮与愿景</Badge>
              <span className="font-mono text-[10px] text-slate-400">
                让思想实验成为人人可玩的社区沙盘狂欢
              </span>
            </div>
            <h1 className="mt-0.5 text-base font-black text-slate-100 sm:text-xl">
              为每一个脑洞，赋以一整个世界
            </h1>
          </div>

          <div className="flex items-center gap-1.5 font-mono text-[10px] text-amber-400">
            <Trophy className="size-3" />
            <span>2026 知乎黑客松决赛答辩 · 结算闭环</span>
          </div>
        </div>
      </section>

      {/* 🎡 核心生态与愿景展示区：16:9 比例精准排版 */}
      <section className="mx-auto w-full max-w-7xl flex-1 px-4 py-2 sm:px-6 sm:py-3">
        <div className="grid h-full grid-cols-1 gap-3 lg:grid-cols-12 lg:gap-4">
          {/* 左侧：知乎 4 步闭环飞轮 + 路线图 (占 7 列) */}
          <div className="flex flex-col justify-between gap-2.5 lg:col-span-7">
            {/* 飞轮 4 步 */}
            <Card className="border-white/15 bg-[#26201d]/95 p-3.5 shadow-md">
              <CardHeader className="space-y-1.5 p-0 pb-2 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 font-mono text-xs font-black text-orange-400">
                    <Repeat className="size-3.5" />
                    <span>知乎生态 4 步闭环飞轮</span>
                  </span>
                  <Badge className="bg-[#e2622c] text-[9px] text-black font-bold">FLYWHEEL</Badge>
                </div>
              </CardHeader>

              <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                <div className="rounded-lg border border-white/10 bg-black/30 p-2.5">
                  <strong className="text-orange-400">1. 选题源于社区</strong>
                  <p className="mt-0.5 text-[10px] leading-relaxed text-slate-400">
                    锁定历史/科幻高赞假设题，自带原帖受众认知基底。
                  </p>
                </div>
                <div className="rounded-lg border border-white/10 bg-black/30 p-2.5">
                  <strong className="text-cyan-400">2. 多智能体博弈</strong>
                  <p className="mt-0.5 text-[10px] leading-relaxed text-slate-400">
                    四路独立 Agent 动态博弈，实时推演千人千面分支世界线。
                  </p>
                </div>
                <div className="rounded-lg border border-white/10 bg-black/30 p-2.5">
                  <strong className="text-amber-400">3. 结算即内容资产</strong>
                  <p className="mt-0.5 text-[10px] leading-relaxed text-slate-400">
                    终局自动铸成万字知乎体长回答，一键复制发回原帖。
                  </p>
                </div>
                <div className="rounded-lg border border-white/10 bg-black/30 p-2.5">
                  <strong className="text-emerald-400">4. 社区二次引爆</strong>
                  <p className="mt-0.5 text-[10px] leading-relaxed text-slate-400">
                    深度回答引发知友跟评与二创，形成长尾自传播效应。
                  </p>
                </div>
              </div>
            </Card>

            {/* 未来路线图 */}
            <Card className="border-white/15 bg-[#26201d]/95 p-3 shadow-xs">
              <CardHeader className="p-0 pb-1.5 border-b border-white/10">
                <div className="flex items-center gap-1.5 text-xs font-black text-slate-200">
                  <Compass className="size-3.5 text-orange-400" />
                  <span>未来演进蓝图 (Roadmap)</span>
                </div>
              </CardHeader>
              <CardContent className="grid grid-cols-3 gap-2 p-0 pt-2 text-[10px]">
                <div className="rounded border border-white/5 bg-black/30 p-2">
                  <strong className="block text-orange-400">UGC 链接转沙盘</strong>
                  <span className="mt-0.5 block text-[9px] text-slate-400">
                    输入任意知乎问题 URL，秒级生成独立推演世界
                  </span>
                </div>
                <div className="rounded border border-white/5 bg-black/30 p-2">
                  <strong className="block text-cyan-400">社区世界线拓扑树</strong>
                  <span className="mt-0.5 block text-[9px] text-slate-400">
                    聚合全网答主推演分支，绘制集体智慧平行宇宙
                  </span>
                </div>
                <div className="rounded border border-white/5 bg-black/30 p-2">
                  <strong className="block text-emerald-400">多人联机廷议对决</strong>
                  <span className="mt-0.5 block text-[9px] text-slate-400">
                    支持真人玩家分别扮演君臣敌友展开在线博弈
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 右侧：知乎 OAuth 助力人气奖 + 致谢 & Q&A (占 5 列) */}
          <div className="flex flex-col justify-between gap-2.5 lg:col-span-5">
            {/* 知乎官方 OAuth 助力卡 */}
            <Card className="border-2 border-orange-500/50 bg-gradient-to-br from-orange-950/40 via-[#26201d] to-black/60 p-3.5 shadow-md">
              <CardHeader className="space-y-2 p-0">
                <div className="flex items-center justify-between">
                  <Badge className="bg-amber-500 text-[9px] text-black font-bold">知乎官方 OAuth 授权</Badge>
                  <span className="font-mono text-[10px] font-bold text-amber-300">黑客松人气奖助力</span>
                </div>

                <div className="flex items-center gap-3 py-1">
                  <div className="size-14 shrink-0 overflow-hidden rounded-xl border border-white/15 bg-white/10 p-0.5 shadow-md">
                    <img
                      src={ASSETS.liukanshan.stroll}
                      alt="刘看山极地巡逻"
                      className="size-full object-contain"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-sm font-black text-slate-100">
                      刘看山为您点亮极地推演徽章
                    </CardTitle>
                    <p className="mt-0.5 text-[10px] leading-relaxed text-slate-400">
                      支持知乎官方 OAuth 一键登录，推演通关即可为本作品在黑客松中计入人气奖选票！
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="mt-2 p-0">
                <Button className="h-8.5 w-full gap-1.5 bg-[#e2622c] text-xs font-bold text-black shadow-sm hover:bg-orange-500">
                  <img src={ASSETS.zhihuSvg} alt="知乎" className="size-3.5 rounded-xs" />
                  <span>知乎登录 · 为《知乎脑洞游乐园》助力人气奖</span>
                  <Sparkles className="size-3 text-black" />
                </Button>
              </CardContent>
            </Card>

            {/* 致谢与 Q&A 卡 */}
            <Card className="border-white/15 bg-[#26201d]/95 p-3.5 shadow-xs">
              <CardHeader className="space-y-1.5 p-0">
                <div className="flex items-center gap-1.5 text-xs font-black text-slate-200">
                  <HeartHandshake className="size-3.5 text-rose-400" />
                  <span>致敬知乎创作者与评委老师</span>
                </div>
                <p className="font-serif text-[11px] leading-relaxed text-slate-300">
                  “一句‘如果’，值得用一整个世界来回答。”
                  感谢知乎社区无数硬核答主贡献的灵感火花，感谢各位评委老师的指导与倾听！
                </p>
              </CardHeader>

              <CardContent className="mt-2 p-0">
                <div className="rounded-lg border border-white/10 bg-black/40 p-2 text-center">
                  <strong className="block text-xs font-black text-slate-100">
                    Q & A 答辩交流环节
                  </strong>
                  <span className="mt-0.5 block text-[10px] text-slate-400">
                    欢迎评委老师提问指导
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
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
