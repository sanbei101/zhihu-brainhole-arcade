import { Compass, Sparkles, Trophy, Users } from "lucide-react";

import type { ScenarioSkin } from "@/lib/scenario-skin";

import { ASSETS } from "../assets";

export function Slide10Summary({ skin: _skin }: { skin: ScenarioSkin }) {
  return (
    <div className="relative flex max-h-full w-full scrollbar-none flex-col justify-between overflow-y-auto rounded-2xl border border-white/80 bg-white/85 p-4 text-slate-900 shadow-2xl backdrop-blur-md sm:p-6 lg:p-8">
      {/* 顶部标题 */}
      <div className="space-y-1 sm:space-y-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-wider text-amber-700 uppercase sm:text-sm">
          <span>[未来演进 · 社区叙事基建与致谢]</span>
        </div>
        <h2 className="text-2xl leading-tight font-black text-slate-900 sm:text-3xl lg:text-4xl">
          让每一个知乎脑洞生根发芽：UGC 开放世界与生态协同
        </h2>
        <p className="text-xs text-slate-600 sm:text-sm lg:text-base">
          知乎脑洞游乐园不仅是一个独立参赛作品，更是一套可持续演化、激发群体创意的知乎社区叙事基建。
        </p>

        {/* 关键特性横幅徽章 */}
        <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs font-bold">
          <span className="rounded-lg border border-blue-200 bg-blue-50 px-2.5 py-1 text-[#0066ff] shadow-xs">
            ⚡ UGC 30秒沙盘生成
          </span>
          <span className="rounded-lg border border-amber-200 bg-amber-50 px-2.5 py-1 text-amber-800 shadow-xs">
            🌐 社区世界线拓扑树
          </span>
          <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-emerald-800 shadow-xs">
            🏆 官方 OAuth 授权闭环
          </span>
          <span className="rounded-lg border border-purple-200 bg-purple-50 px-2.5 py-1 text-purple-800 shadow-xs">
            ✍️ 结算沉淀知乎体高赞
          </span>
        </div>
      </div>

      {/* 核心未来规划：三大卡片 */}
      <div className="my-auto grid grid-cols-1 gap-3.5 sm:gap-4 md:grid-cols-3 lg:gap-5">
        {/* 1. UGC 自动化脑洞生成 */}
        <div className="flex flex-col justify-between space-y-3 rounded-2xl border-2 border-blue-200 bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:p-5">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-base font-black text-[#0066ff] sm:text-lg">
                <Compass className="size-5 shrink-0 text-[#0066ff]" />
                <span>知乎链接一键转沙盘</span>
              </span>
              <span className="font-mono text-lg font-black text-blue-200">01</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
              用户只需粘贴任意知乎“假设/脑洞”问题链接，系统自动解析核心矛盾，提取朝野势力与硬约束，30
              秒生成专属可玩推演副本。
            </p>
          </div>
          <div className="rounded-xl border border-blue-200 bg-blue-50/80 p-2.5 font-mono text-xs font-bold text-[#0066ff]">
            无限题材：从历史假说到科幻三体
          </div>
        </div>

        {/* 2. 社区世界线群像对比 */}
        <div className="flex flex-col justify-between space-y-3 rounded-2xl border-2 border-amber-200 bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:p-5">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-base font-black text-amber-800 sm:text-lg">
                <Users className="size-5 shrink-0 text-amber-600" />
                <span>世界线分叉大矩阵</span>
              </span>
              <span className="font-mono text-lg font-black text-amber-200">02</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
              打通知乎答主之间的世界线碰撞：
              <em>“在赤壁之夜，82% 的知友选择了据江而守，而你选择了天命破壁！”</em>{" "}
              形成全社区维度的群体智慧推演图谱。
            </p>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50/80 p-2.5 font-mono text-xs font-bold text-amber-900">
            群体智慧：绘制历史假设拓扑树
          </div>
        </div>

        {/* 3. 官方 OAuth 闭环与黑客松人气奖 */}
        <div className="flex flex-col justify-between space-y-3 rounded-2xl border-2 border-emerald-200 bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:p-5">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-base font-black text-emerald-700 sm:text-lg">
                <Trophy className="size-5 shrink-0 text-emerald-600" />
                <span>知乎 OAuth 助力闭环</span>
              </span>
              <span className="font-mono text-lg font-black text-emerald-200">03</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
              深度集成知乎官方 OAuth 授权，打通社区用户身份，用户推演完毕可直接为本作品助力
              <strong>【黑客松人气奖】</strong>，并点亮专属刘看山徽章！
            </p>
          </div>
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/80 p-2.5 font-mono text-xs font-bold text-emerald-800">
            已打通官方授权，推演即完成打 Call
          </div>
        </div>
      </div>

      {/* 答辩致谢与金句结语 */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border-2 border-amber-300 bg-gradient-to-r from-amber-50/95 via-white/95 to-blue-50/95 p-4 shadow-xl backdrop-blur-2xl sm:p-6">
        <div className="flex items-center gap-4 sm:gap-5">
          <div className="size-18 shrink-0 overflow-hidden rounded-2xl border-2 border-amber-300 bg-white p-1.5 shadow-md transition-transform hover:scale-105 sm:size-22 lg:size-26">
            <img
              src={ASSETS.liukanshan.basketball}
              alt="刘看山绝杀投篮"
              className="size-full object-contain"
            />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="text-base font-black text-slate-900 sm:text-lg lg:text-xl">
                致敬所有敢于提问“如果……会怎样”的知乎探险家！
              </h3>
              <Sparkles className="size-5 animate-pulse text-amber-500" />
            </div>
            <p className="font-serif text-xs font-medium text-amber-950 italic sm:text-sm lg:text-base">
              “为每一个天马行空的脑洞，赋以一整个世界的重量与荣光。”
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2.5 rounded-xl bg-[#0066ff] px-5 py-2.5 text-xs font-black text-white shadow-lg shadow-[#0066ff]/25 transition-transform hover:scale-105 sm:px-6 sm:py-3 sm:text-sm">
            <img
              src={ASSETS.zhihuSvg}
              alt="Zhihu"
              className="size-4 brightness-0 invert sm:size-5"
            />
            <span>感谢各位评委老师审阅与指点</span>
          </div>
        </div>
      </div>
    </div>
  );
}
