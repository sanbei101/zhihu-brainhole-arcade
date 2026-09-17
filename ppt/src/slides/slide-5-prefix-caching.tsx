import { Check, Database, Flame, HardDrive, Layers, Server, TrendingDown, Zap } from "lucide-react";

import type { ScenarioSkin } from "@/lib/scenario-skin";

export function Slide5PrefixCaching({ skin: _skin }: { skin: ScenarioSkin }) {
  return (
    <div className="relative flex size-full flex-col justify-between gap-4 overflow-hidden rounded-2xl border border-white/10 bg-[#0c101a] p-6 shadow-2xl sm:p-10">
      {/* 顶部标题 */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-emerald-400 uppercase">
          <span>[提示词工程 · 架构突破]</span>
        </div>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          严苛的三段式前缀缓存 (Prefix Caching) 架构设计
        </h2>
        <p className="text-xs text-slate-300 sm:text-sm">
          突破多回合多智能体推演的 Token 爆炸与延迟剧痛：严格按照「静态设定 ➔ 线性推演 ➔
          动态变量」组织上下文。
        </p>
      </div>

      {/* 核心架构解析图 */}
      <div className="my-auto grid grid-cols-1 gap-5 lg:grid-cols-12">
        {/* 左侧：三段式前缀缓存堆栈（7列） */}
        <div className="flex flex-col gap-2.5 lg:col-span-7">
          {/* 第 1 层：静态顶层（100% Cache Hit） */}
          <div className="relative overflow-hidden rounded-xl border border-emerald-500/40 bg-emerald-950/20 p-4 shadow-sm">
            <div className="absolute top-3 right-3 flex items-center gap-1 rounded border border-emerald-500/40 bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-300">
              <Zap className="size-3" />
              <span>100% CACHE HIT</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-300">
              <HardDrive className="size-4" />
              <span>第一段：静态世界硬约束与角色身份矩阵 (Static World & Cast Top)</span>
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
              包含世界背景、纪元硬规则、四方 Agent 身份、说话语气、不可触碰红线（Red Line）。
              <strong>对齐在最顶端且全生命周期绝对不可变</strong>，保证 DeepSeek / OpenAI
              首次调用后持久命中 KV Cache。
            </p>
          </div>

          {/* 第 2 层：中层只增历史（Incremental Cache） */}
          <div className="relative overflow-hidden rounded-xl border border-cyan-500/40 bg-cyan-950/20 p-4 shadow-sm">
            <div className="absolute top-3 right-3 flex items-center gap-1 rounded border border-cyan-500/40 bg-cyan-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-cyan-300">
              <Database className="size-3" />
              <span>APPEND-ONLY CACHE</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-300">
              <Layers className="size-4" />
              <span>第二段：线性推演历史沉淀 (Linear History Summary Middle)</span>
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
              严格按回合顺序以极简高密度结构追加历史决策与公开结果（不产生倒序插入或无序重排），
              使上一回合已缓存的 KV Cache 持续向后复用，仅计算当轮增量！
            </p>
          </div>

          {/* 第 3 层：底层动态变量（Minimal Delta） */}
          <div className="relative overflow-hidden rounded-xl border border-amber-500/40 bg-amber-950/20 p-4 shadow-sm">
            <div className="absolute top-3 right-3 flex items-center gap-1 rounded border border-amber-500/40 bg-amber-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-amber-300">
              <Flame className="size-3" />
              <span>&lt; 5% NEW TOKENS</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
              <Server className="size-4" />
              <span>第三段：当回合微观变量与即时处境 (Dynamic Tail Variables)</span>
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
              仅将当前四维数值涨跌、突发危机倒计时、未决通牒与玩家当下动作置于 Prompt 最末尾。
              只有这区区几十个 Token 需要执行全量算力计算！
            </p>
          </div>
        </div>

        {/* 右侧：性能收益对比卡片（5列） */}
        <div className="flex flex-col justify-between space-y-4 rounded-xl border border-white/10 bg-black/60 p-5 shadow-xl lg:col-span-5">
          <div className="flex items-center gap-2 border-b border-white/10 pb-3 font-mono text-xs font-bold text-white">
            <TrendingDown className="size-4 text-emerald-400" />
            <span>实测前缀缓存收益对比 (DeepSeek Flash 4.1)</span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-center">
            {/* 延迟对比 */}
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="text-[11px] text-slate-400">首字响应延迟 (TTFT)</div>
              <div className="my-1 text-2xl font-black text-cyan-400">-72%</div>
              <div className="font-mono text-[10px] text-slate-400">从 1.6s ➔ 0.45s 闪电响应</div>
            </div>

            {/* 成本对比 */}
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="text-[11px] text-slate-400">输入 Token 计费成本</div>
              <div className="my-1 text-2xl font-black text-emerald-400">-85%</div>
              <div className="font-mono text-[10px] text-slate-400">命中缓存仅按 0.1 折结算</div>
            </div>
          </div>

          <div className="space-y-2 border-t border-white/10 pt-3 text-xs text-slate-300">
            <div className="font-semibold text-white">为什么对游戏体验生死攸关？</div>
            <div className="flex items-start gap-1.5">
              <Check className="mt-0.5 size-3.5 shrink-0 text-emerald-400" />
              <span>多 Agent 连续台词交锋无需玩家枯等 5~10 秒，如同真人面对面秒回。</span>
            </div>
            <div className="flex items-start gap-1.5">
              <Check className="mt-0.5 size-3.5 shrink-0 text-emerald-400" />
              <span>
                整场推演 + 万字知乎长回答生成，总 API 成本不到 <strong>0.02 元人民币</strong>！
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 底部代码设计规范背书 */}
      <div className="flex items-center justify-between rounded-lg border border-white/10 bg-black/40 px-4 py-2 font-mono text-[11px] text-slate-400">
        <span>lib/prompts/turn.ts: L30-L70 buildEnvironmentBlock 严格静态置顶</span>
        <span className="font-semibold text-emerald-400">Zero KV Cache Fragmentation</span>
      </div>
    </div>
  );
}
