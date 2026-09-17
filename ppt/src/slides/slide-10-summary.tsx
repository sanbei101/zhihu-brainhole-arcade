import { Compass, Sparkles, Trophy, Users } from "lucide-react";

import type { ScenarioSkin } from "@/lib/scenario-skin";

import { ASSETS } from "../assets";

export function Slide10Summary({ skin: _skin }: { skin: ScenarioSkin }) {
  return (
    <div className="relative flex size-full flex-col justify-between gap-4 overflow-hidden rounded-2xl border border-white/10 bg-[#0c101a] p-6 shadow-2xl sm:p-10">
      {/* 顶部标题 */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-amber-400 uppercase">
          <span>[未来演进 · 商业想象力与致谢]</span>
        </div>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          让每一个知乎脑洞生根发芽：UGC 开放世界与生态共生
        </h2>
        <p className="text-xs text-slate-300 sm:text-sm">
          知乎脑洞游乐园不仅是一个参赛作品，更是一套可持续演化的知乎社区叙事基建。
        </p>
      </div>

      {/* 核心未来规划 */}
      <div className="my-auto grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* 1. UGC 自动化脑洞生成 */}
        <div className="space-y-3 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-sm font-bold text-cyan-300">
            <Compass className="size-4 text-cyan-400" />
            <span>1. 知乎链接一键转沙盘 (UGC)</span>
          </div>
          <p className="text-xs leading-relaxed text-slate-300">
            用户只需粘贴任意知乎“假设/脑洞”问题链接，系统自动解析核心矛盾，提取朝野势力与硬约束，30
            秒生成专属可玩推演副本。
          </p>
          <div className="rounded border border-white/5 bg-black/40 p-2 font-mono text-[10px] text-cyan-200">
            无限题材：从修仙脑洞到三体接触
          </div>
        </div>

        {/* 2. 社区世界线群像对比 */}
        <div className="space-y-3 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-sm font-bold text-amber-300">
            <Users className="size-4 text-amber-400" />
            <span>2. 世界线分叉大矩阵</span>
          </div>
          <p className="text-xs leading-relaxed text-slate-300">
            打通知乎答主之间的世界线碰撞：
            <em>“在赤壁之夜，82% 的知友选择了据江而守，而你选择了天命破壁！”</em>{" "}
            形成全社区维度的群体智慧推演图谱。
          </p>
          <div className="rounded border border-white/5 bg-black/40 p-2 font-mono text-[10px] text-amber-200">
            群体智慧：绘制历史假设拓扑树
          </div>
        </div>

        {/* 3. 官方 OAuth 闭环与黑客松人气奖 */}
        <div className="space-y-3 rounded-xl border border-emerald-500/30 bg-emerald-950/15 p-5 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-sm font-bold text-emerald-300">
            <Trophy className="size-4 text-emerald-400" />
            <span>3. 知乎 OAuth 助力闭环</span>
          </div>
          <p className="text-xs leading-relaxed text-slate-300">
            深度集成知乎官方 OAuth 授权，打通社区用户身份，用户推演完毕可直接为本作品助力
            <strong>【黑客松人气奖】</strong>，并附赠专属刘看山徽章！
          </p>
          <div className="rounded border border-emerald-500/20 bg-black/40 p-2 font-mono text-[10px] text-emerald-200">
            已打通官方接口，现场可扫码打 Call
          </div>
        </div>
      </div>

      {/* 答辩致谢与金句结语 */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/30 bg-black/60 p-5 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="size-16 shrink-0 rounded-xl border border-amber-400/20 bg-amber-400/10 p-1">
            <img
              src={ASSETS.liukanshan.basketball}
              alt="刘看山绝杀投篮"
              className="size-full object-contain"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-white">
                致敬所有敢于提问“如果……会怎样”的知乎探险家！
              </h3>
              <Sparkles className="size-4 animate-pulse text-amber-400" />
            </div>
            <p className="mt-1 font-serif text-xs text-slate-300 italic">
              “为每一个天马行空的脑洞，赋以一整个世界的重量与荣光。”
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-lg bg-[#0066ff] px-4 py-2 text-xs font-bold text-white shadow-lg shadow-[#0066ff]/20">
            <img src={ASSETS.zhihuSvg} alt="Zhihu" className="size-4 brightness-0 invert" />
            <span>感谢各位评委老师审阅与提问</span>
          </div>
        </div>
      </div>
    </div>
  );
}
