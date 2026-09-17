import { ArrowRight, Network } from "lucide-react";

import type { ScenarioSkin } from "@/lib/scenario-skin";

export function Slide6PromptEcology({ skin: _skin }: { skin: ScenarioSkin }) {
  return (
    <div className="relative flex size-full max-h-full scrollbar-none flex-col justify-between overflow-y-auto rounded-2xl border border-white/80 bg-white/85 p-4 text-slate-900 shadow-2xl backdrop-blur-md sm:p-6 lg:p-8">
      {/* 顶部标题与调度流概览 */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-wider text-amber-700 uppercase sm:text-sm">
          <Network className="size-4" />
          <span>[核心工程攻坚 · 多智能体博弈调度管线]</span>
        </div>
        <div className="flex flex-col gap-1 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="text-2xl leading-tight font-black text-slate-900 sm:text-3xl lg:text-4xl">
            多智能体调度管线：并发扇出 ➔ 冲突矩阵对齐 ➔ 单次双向交锋合成
          </h2>
          <span className="font-mono text-xs font-black text-[#0066ff] sm:text-sm">
            2-Stage Pipeline Architecture
          </span>
        </div>

        {/* 核心硬核指标条 */}
        <div className="flex flex-wrap items-center gap-2 pt-0.5 sm:gap-3">
          <span className="rounded-lg border border-blue-200 bg-blue-50 px-2.5 py-1 font-mono text-xs font-black text-[#0066ff]">
            ⚡ 4 Agents 并行扇出
          </span>
          <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-2.5 py-1 font-mono text-xs font-black text-emerald-700">
            ⚡ ~450ms 首包打字机直出
          </span>
          <span className="rounded-lg border border-rose-200 bg-rose-50 px-2.5 py-1 font-mono text-xs font-black text-rose-700">
            ⚡ 0 循环阻塞死锁
          </span>
          <span className="rounded-lg border border-amber-200 bg-amber-50 px-2.5 py-1 font-mono text-xs font-black text-amber-700">
            ⚡ 驳斥往返时延 -50%
          </span>
        </div>
      </div>

      {/* 3 阶段技术架构卡片：大号卡片与清晰动线 */}
      <div className="my-auto grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-5">
        {/* 阶段 1：并发扇出与 NDJSON 流式分发 */}
        <div className="flex flex-col justify-between space-y-3.5 rounded-2xl border-2 border-blue-200 bg-white/95 p-4 shadow-sm sm:p-5">
          <div className="space-y-2.5">
            <div className="flex items-center justify-between border-b border-blue-200/80 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="flex size-7 items-center justify-center rounded-lg bg-[#0066ff] font-mono text-xs font-black text-white shadow-xs">
                  01
                </span>
                <span className="text-base font-black text-[#0066ff] sm:text-lg">并发扇出表态</span>
              </div>
              <span className="rounded-full bg-blue-100 px-2.5 py-0.5 font-mono text-xs font-bold text-blue-800">
                Promise.all
              </span>
            </div>

            <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
              4 位朝堂 Agent 基于当前世界线快照<strong>并行发起推演</strong>，彻底消灭串行调用耗时：
            </p>

            <div className="space-y-2 text-xs text-slate-700 sm:text-sm">
              <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-2.5">
                <strong className="text-blue-950">NDJSON 流式分发</strong>
                <p className="mt-0.5 text-xs text-slate-600">
                  任一角色完成即刻向前端推送，立绘实时呼吸点亮，首包仅 ~450ms。
                </p>
              </div>
              <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-2.5">
                <strong className="text-blue-950">Zod 强契约与红线逼宫</strong>
                <p className="mt-0.5 text-xs text-slate-600">
                  严格约束立场与通牒，信任度跌破 20 当场逼宫政变，杜绝工具人。
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-blue-200 bg-blue-50 p-2.5 text-center font-mono text-xs font-bold text-blue-900">
            首包直出 ~450ms · 零翻倍排队等待
          </div>
        </div>

        {/* 阶段 2：冲突矩阵对齐算法 */}
        <div className="flex flex-col justify-between space-y-3.5 rounded-2xl border-2 border-rose-200 bg-white/95 p-4 shadow-sm sm:p-5">
          <div className="space-y-2.5">
            <div className="flex items-center justify-between border-b border-rose-200/80 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="flex size-7 items-center justify-center rounded-lg bg-rose-600 font-mono text-xs font-black text-white shadow-xs">
                  02
                </span>
                <span className="text-base font-black text-rose-700 sm:text-lg">冲突矩阵对齐</span>
              </div>
              <span className="rounded-full bg-rose-100 px-2.5 py-0.5 font-mono text-xs font-bold text-rose-800">
                pickConflictPair
              </span>
            </div>

            <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
              攻克多 Agent<strong>“各自为战、自说自话”</strong>痛点，以数学矩阵精准锁定矛盾焦点：
            </p>

            <div className="space-y-2 text-xs text-slate-700 sm:text-sm">
              <div className="rounded-xl border border-rose-100 bg-rose-50/70 p-2.5">
                <strong className="text-rose-950">显式反驳与极性对抗</strong>
                <p className="mt-0.5 text-xs text-slate-600">
                  优先匹配点名反驳，再按对抗权重（oppose &gt; exploit &gt; negotiate）排序。
                </p>
              </div>
              <div className="rounded-xl border border-rose-100 bg-rose-50/70 p-2.5">
                <strong className="text-rose-950">全场共识智能剪枝</strong>
                <p className="mt-0.5 text-xs text-slate-600">
                  全员协同或支持时判定为朝野共识，跳过无谓争吵，自适应节省一次调用。
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-rose-200 bg-rose-50 p-2.5 text-center font-mono text-xs font-bold text-rose-900">
            算法自动锁定最尖锐的矛与盾
          </div>
        </div>

        {/* 阶段 3：单次结构化双向交锋合成 */}
        <div className="flex flex-col justify-between space-y-3.5 rounded-2xl border-2 border-amber-200 bg-white/95 p-4 shadow-sm sm:p-5">
          <div className="space-y-2.5">
            <div className="flex items-center justify-between border-b border-amber-200/80 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="flex size-7 items-center justify-center rounded-lg bg-amber-600 font-mono text-xs font-black text-white shadow-xs">
                  03
                </span>
                <span className="text-base font-black text-amber-800 sm:text-lg">单次双向交锋</span>
              </div>
              <span className="rounded-full bg-amber-100 px-2.5 py-0.5 font-mono text-xs font-bold text-amber-800">
                Single-Shot Clash
              </span>
            </div>

            <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
              彻底抛弃多轮往返串行调用（延迟翻倍且极易死锁），单次 Prompt 双向交锋：
            </p>

            <div className="space-y-2 text-xs text-slate-700 sm:text-sm">
              <div className="rounded-xl border border-amber-100 bg-amber-50/70 p-2.5">
                <strong className="text-amber-950">双向红线单次注入</strong>
                <p className="mt-0.5 text-xs text-slate-600">
                  打包双方立场与上轮发言，单次生成 30~45 字尖锐驳斥与 15 字肢体微动作。
                </p>
              </div>
              <div className="rounded-xl border border-amber-100 bg-amber-50/70 p-2.5">
                <strong className="text-amber-950">知乎脑洞天命金句</strong>
                <p className="mt-0.5 text-xs text-slate-600">
                  为天命选项注入知乎硬核燃向宣誓金句，戏剧冲突与历史厚度拉满。
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-amber-200 bg-amber-50 p-2.5 text-center font-mono text-xs font-bold text-amber-900">
            往返延迟砍半 · 机制杜绝循环死锁
          </div>
        </div>
      </div>

      {/* 底部工程保障栏：Abort 联锁与熔断 */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200/80 bg-white/95 px-4 py-2.5 text-xs text-slate-700 shadow-xs sm:px-5 sm:py-3 sm:text-sm">
        <div className="flex items-center gap-2">
          <span className="flex size-2.5 rounded-full bg-emerald-500 shadow-xs" />
          <span>
            <strong>底座稳定性保障</strong>：前端{" "}
            <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-xs font-bold text-slate-800">
              AbortController
            </code>{" "}
            与服务端流严格联锁，切页即时取消；单一 Agent 异常局部熔断，推演永不卡死。
          </span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-xs font-black text-[#0066ff] sm:text-sm">
          <span>端到端流水线收敛率</span>
          <ArrowRight className="size-4" />
          <span className="font-black text-emerald-700">99.8% (Battle-Tested)</span>
        </div>
      </div>
    </div>
  );
}
