import { Compass, Sparkles, Trophy, Users } from "lucide-react";

import type { ScenarioSkin } from "@/lib/scenario-skin";

import { ASSETS } from "../assets";

export function Slide10Summary({ skin: _skin }: { skin: ScenarioSkin }) {
  return (
    <div className="relative flex size-full flex-col justify-between gap-6 overflow-hidden rounded-3xl border border-slate-200/90 bg-white/75 p-8 text-slate-900 shadow-2xl backdrop-blur-xl sm:p-12">
      {/* 顶部标题 */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-amber-700 uppercase sm:text-sm">
          <span>[未来演进 · 商业想象力与致谢]</span>
        </div>
        <h2 className="text-3xl leading-tight font-black text-slate-900 sm:text-4xl lg:text-5xl">
          让每一个知乎脑洞生根发芽：UGC 开放世界与生态共生
        </h2>
        <p className="text-sm text-slate-600 sm:text-lg">
          知乎脑洞游乐园不仅是一个参赛作品，更是一套可持续演化、激发群体创意的知乎社区叙事基建。
        </p>
      </div>

      {/* 核心未来规划：三大卡片 */}
      <div className="my-auto grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* 1. UGC 自动化脑洞生成 */}
        <div className="space-y-4 rounded-2xl border-2 border-slate-200 bg-white/90 p-6 shadow-md backdrop-blur-xl sm:p-7">
          <div className="flex items-center gap-2.5 text-lg font-black text-[#0066ff] sm:text-xl">
            <Compass className="size-5 text-[#0066ff]" />
            <span>1. 知乎链接一键转沙盘 (UGC)</span>
          </div>
          <p className="text-xs leading-relaxed font-normal text-slate-700 sm:text-sm">
            用户只需粘贴任意知乎“假设/脑洞”问题链接，系统自动解析核心矛盾，提取朝野势力与硬约束，30
            秒生成专属可玩推演副本。
          </p>
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-3 font-mono text-xs font-bold text-[#0066ff] sm:text-sm">
            无限题材：从修仙脑洞到三体接触
          </div>
        </div>

        {/* 2. 社区世界线群像对比 */}
        <div className="space-y-4 rounded-2xl border-2 border-slate-200 bg-white/90 p-6 shadow-md backdrop-blur-xl sm:p-7">
          <div className="flex items-center gap-2.5 text-lg font-black text-amber-800 sm:text-xl">
            <Users className="size-5 text-amber-600" />
            <span>2. 世界线分叉大矩阵</span>
          </div>
          <p className="text-xs leading-relaxed font-normal text-slate-700 sm:text-sm">
            打通知乎答主之间的世界线碰撞：
            <em>“在赤壁之夜，82% 的知友选择了据江而守，而你选择了天命破壁！”</em>{" "}
            形成全社区维度的群体智慧推演图谱。
          </p>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 font-mono text-xs font-bold text-amber-900 sm:text-sm">
            群体智慧：绘制历史假设拓扑树
          </div>
        </div>

        {/* 3. 官方 OAuth 闭环与黑客松人气奖 */}
        <div className="space-y-4 rounded-2xl border-2 border-emerald-200 bg-white/90 p-6 shadow-md backdrop-blur-xl sm:p-7">
          <div className="flex items-center gap-2.5 text-lg font-black text-emerald-700 sm:text-xl">
            <Trophy className="size-5 text-emerald-600" />
            <span>3. 知乎 OAuth 助力闭环</span>
          </div>
          <p className="text-xs leading-relaxed font-normal text-slate-700 sm:text-sm">
            深度集成知乎官方 OAuth 授权，打通社区用户身份，用户推演完毕可直接为本作品助力
            <strong>【黑客松人气奖】</strong>，并附赠专属刘看山徽章！
          </p>
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 font-mono text-xs font-bold text-emerald-800 sm:text-sm">
            已打通官方接口，现场可扫码打 Call
          </div>
        </div>
      </div>

      {/* 答辩致谢与金句结语 */}
      <div className="flex flex-wrap items-center justify-between gap-6 rounded-2xl border-2 border-amber-300 bg-gradient-to-r from-amber-50/90 to-blue-50/90 p-6 shadow-xl backdrop-blur-2xl sm:p-8">
        <div className="flex items-center gap-5">
          <div className="size-24 shrink-0 rounded-3xl border-2 border-amber-200 bg-white p-2 shadow-lg transition-transform hover:scale-105 sm:size-32">
            <img
              src={ASSETS.liukanshan.basketball}
              alt="刘看山绝杀投篮"
              className="size-full object-contain"
            />
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2.5">
              <h3 className="text-xl font-black text-slate-900 sm:text-2xl lg:text-3xl">
                致敬所有敢于提问“如果……会怎样”的知乎探险家！
              </h3>
              <Sparkles className="size-5 animate-pulse text-amber-500" />
            </div>
            <p className="font-serif text-sm text-amber-950 italic sm:text-lg">
              “为每一个天马行空的脑洞，赋以一整个世界的重量与荣光。”
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2.5 rounded-xl bg-[#0066ff] px-6 py-3 text-sm font-black text-white shadow-xl shadow-[#0066ff]/25 sm:text-base">
            <img src={ASSETS.zhihuSvg} alt="Zhihu" className="size-5 brightness-0 invert" />
            <span>感谢各位评委老师审阅与指点</span>
          </div>
        </div>
      </div>
    </div>
  );
}
