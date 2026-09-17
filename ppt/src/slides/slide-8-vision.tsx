import { Compass, HeartHandshake, Repeat, Trophy } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ScenarioSkin } from "@/lib/scenario-skin";

import { ASSETS } from "../assets";

export function Slide8Vision({ skin: _skin }: { skin: ScenarioSkin }) {
  return (
    <div className="relative flex size-full max-h-full scrollbar-none flex-col justify-between gap-3 overflow-y-auto rounded-2xl border border-white/80 bg-white/90 p-4 text-slate-900 shadow-2xl backdrop-blur-md sm:gap-4 sm:p-6 lg:p-7">
      {/* 顶部标题区 */}
      <div className="space-y-1 border-b border-slate-200/80 pb-2.5 sm:space-y-2">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold tracking-wider text-[#0066ff] uppercase">
            [知乎生态共振 · 愿景与致谢]
          </span>
          <Badge variant="secondary" className="text-[10px]">
            COMMUNITY FLYWHEEL & Q&A
          </Badge>
        </div>
        <h2 className="text-xl leading-tight font-black text-slate-900 sm:text-2xl lg:text-3xl">
          生态飞轮与未来演进：为每一个脑洞，赋以一整个世界
        </h2>
        <p className="text-xs text-slate-600 sm:text-sm">
          从知乎社区高赞中来，回到知乎社区长文中去；让思想实验成为人人可玩的沙盘狂欢。
        </p>
      </div>

      {/* 核心生态展示区 */}
      <div className="my-auto grid grid-cols-1 items-stretch gap-4 lg:grid-cols-12 lg:gap-5">
        {/* 左侧：知乎闭环飞轮与未来蓝图（占 7 列） */}
        <Card className="flex flex-col justify-between gap-3 rounded-2xl border-2 border-blue-200 bg-white/95 p-4 shadow-sm sm:p-5 lg:col-span-7">
          <CardHeader className="space-y-2 p-0">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="flex items-center gap-1.5 font-mono text-xs font-black text-[#0066ff]">
                <Repeat className="size-4" />
                <span>知乎生态 4 步闭环飞轮</span>
              </span>
              <Badge className="bg-[#0066ff] text-[10px]">FLYWHEEL</Badge>
            </div>

            {/* 飞轮 4 步卡片 */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-2.5">
                <strong className="font-bold text-blue-900">1. 选题源于社区</strong>
                <p className="mt-1 text-[11px] leading-snug text-slate-600">
                  锁定历史区与科幻区高赞假设题，自带原帖讨论热度与受众认知基底。
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-2.5">
                <strong className="font-bold text-purple-900">2. 多智能体博弈</strong>
                <p className="mt-1 text-[11px] leading-snug text-slate-600">
                  摆脱单向推演，四路独立 Agent 实时推演连锁反应与分叉世界线。
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-2.5">
                <strong className="font-bold text-amber-900">3. 结算即内容资产</strong>
                <p className="mt-1 text-[11px] leading-snug text-slate-600">
                  终局自动铸成万字知乎长回答与四维战报，一键复制直接发回知乎原帖。
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-2.5">
                <strong className="font-bold text-emerald-900">4. 社区二次引爆</strong>
                <p className="mt-1 text-[11px] leading-snug text-slate-600">
                  高质量推演回答在知乎引发跟评与二创，形成天然的长尾自传播网络。
                </p>
              </div>
            </div>
          </CardHeader>

          {/* 未来演进规划 */}
          <CardContent className="p-0">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <div className="mb-2 flex items-center gap-2 text-xs font-black text-slate-900">
                <Compass className="size-4 text-[#0066ff]" />
                <span>未来演进蓝图 (Roadmap)</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-[11px] text-slate-700">
                <div className="rounded-lg border border-slate-200 bg-white p-2">
                  <strong className="block text-[#0066ff]">UGC 链接转沙盘</strong>
                  <span className="text-[10px] text-slate-500">
                    输入任意知乎问题 URL，秒级生成独立推演世界
                  </span>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-2">
                  <strong className="block text-purple-600">社区世界线拓扑树</strong>
                  <span className="text-[10px] text-slate-500">
                    聚合全网答主推演分支，绘制集体智慧平行宇宙
                  </span>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-2">
                  <strong className="block text-emerald-600">多人联机廷议对决</strong>
                  <span className="text-[10px] text-slate-500">
                    支持玩家分别扮演君臣敌友，展开在线博弈
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 右侧：知乎 OAuth 助力人气奖与致谢（占 5 列） */}
        <Card className="flex flex-col justify-between gap-3 rounded-2xl border-2 border-amber-200 bg-gradient-to-b from-amber-50/70 via-white to-amber-50/30 p-4 shadow-sm sm:p-5 lg:col-span-5">
          <CardHeader className="space-y-2 border-b border-amber-200/80 p-0 pb-3">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 font-mono text-xs font-black text-amber-800">
                <Trophy className="size-4 text-amber-600" />
                <span>知乎 OAuth 授权闭环</span>
              </span>
              <Badge className="bg-amber-600 text-[10px] text-white">人气奖助力</Badge>
            </div>
            <CardTitle className="text-base font-black text-slate-900">
              推演完毕 · 扫码即可投票助力
            </CardTitle>
            <p className="text-xs leading-relaxed text-slate-600">
              本作已打通知乎官方 OAuth
              授权体系，对局通关后可直接唤起授权，为本作投出宝贵的【黑客松人气奖】选票！
            </p>
          </CardHeader>

          {/* 刘看山吉祥物与致谢展示卡 */}
          <CardContent className="space-y-3 p-0">
            <div className="my-auto flex items-center gap-3.5 rounded-xl border border-amber-200 bg-white p-3 shadow-inner">
              <div className="size-16 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-1">
                <img
                  src={ASSETS.liukanshan.basketball}
                  alt="刘看山投篮绝杀"
                  className="size-full object-contain"
                />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-black text-slate-900">
                  <HeartHandshake className="size-4 text-red-500" />
                  <span>致谢知乎与答辩评委</span>
                </div>
                <p className="text-[11px] leading-relaxed text-slate-600">
                  感谢知乎举办此次 AI 黑客松，感谢每一位在评论区留下惊艳脑洞的知友。
                </p>
                <div className="font-mono text-[10px] font-bold text-[#0066ff]">
                  “天下若容不下汉室，汉室便去重造一个天下！”
                </div>
              </div>
            </div>

            {/* 结语标志条 */}
            <div className="flex items-center justify-between rounded-xl bg-slate-900 px-3.5 py-2.5 text-white">
              <div className="flex items-center gap-2">
                <img src={ASSETS.zhihuSvg} alt="知乎" className="size-5 rounded-xs" />
                <span className="text-xs font-black">知乎脑洞游乐园 · 敬请评委检阅！</span>
              </div>
              <span className="font-mono text-[10px] font-bold text-amber-400">Q & A 交流环节</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 底部确认栏 */}
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white/95 px-4 py-2 text-xs text-slate-700 shadow-xs sm:text-sm">
        <span>“一句如果，值得用一整个世界来回答” —— 2026 知乎黑客松总决赛答辩汇报完毕</span>
        <span className="font-mono text-xs font-bold text-[#0066ff]">
          按 [Home] 键直达封面 ／ 按 [N] 键唤出演讲手记
        </span>
      </div>
    </div>
  );
}
