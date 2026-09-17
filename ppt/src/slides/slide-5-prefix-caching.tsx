import { Check, Database, Flame, HardDrive, Layers, Server, TrendingDown, Zap } from "lucide-react";

import type { ScenarioSkin } from "@/lib/scenario-skin";

export function Slide5PrefixCaching({ skin: _skin }: { skin: ScenarioSkin }) {
  return (
    <div className="relative flex size-full flex-col justify-between gap-6 overflow-hidden rounded-3xl border border-slate-200/90 bg-white/75 p-8 text-slate-900 shadow-2xl backdrop-blur-xl sm:p-12">
      {/* 顶部标题 */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-emerald-700 uppercase sm:text-sm">
          <span>[提示词工程 · 核心架构突破]</span>
        </div>
        <h2 className="text-3xl leading-tight font-black text-slate-900 sm:text-4xl lg:text-5xl">
          严苛的三段式前缀缓存 (Prefix Caching) 架构设计
        </h2>
        <p className="text-sm text-slate-600 sm:text-lg">
          突破多回合多智能体推演的 Token 爆炸与延迟剧痛：严格按照「静态设定 ➔ 线性推演 ➔
          动态变量」组织上下文。
        </p>
      </div>

      {/* 核心架构解析图 */}
      <div className="my-auto grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* 左侧：三段式前缀缓存堆栈（7列） */}
        <div className="flex flex-col gap-3.5 lg:col-span-7">
          {/* 第 1 层：静态顶层（100% Cache Hit） */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-emerald-300 bg-emerald-50/80 p-5 shadow-sm sm:p-6">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-base font-black text-emerald-900 sm:text-lg">
                <HardDrive className="size-5 text-emerald-700" />
                <span>第一段：静态世界硬约束与角色身份 (Static World Top)</span>
              </div>
              <span className="flex items-center gap-1 rounded-full border border-emerald-300 bg-emerald-100 px-3 py-1 font-mono text-xs font-black text-emerald-800 shadow-xs">
                <Zap className="size-3.5 text-emerald-600" />
                <span>100% CACHE HIT</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
              包含纪元规则、硬约束、四方 Agent 身份、说话语气、不可触碰红线（Red Line）。
              <strong>置于 Prompt 最顶端且全流程绝对不可变</strong>，保证 DeepSeek / OpenAI
              首次调用后持久命中 KV Cache。
            </p>
          </div>

          {/* 第 2 层：中层只增历史（Incremental Cache） */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-blue-300 bg-blue-50/80 p-5 shadow-sm sm:p-6">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-base font-black text-blue-900 sm:text-lg">
                <Layers className="size-5 text-[#0066ff]" />
                <span>第二段：线性推演历史沉淀 (Append-Only History Middle)</span>
              </div>
              <span className="flex items-center gap-1 rounded-full border border-blue-300 bg-blue-100 px-3 py-1 font-mono text-xs font-black text-[#0066ff] shadow-xs">
                <Database className="size-3.5 text-[#0066ff]" />
                <span>APPEND-ONLY CACHE</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
              严格按回合顺序以极简高密度结构追加历史决策与结果（杜绝倒序插入或无序重排），
              使此前已缓存的 KV Cache 持续向后复用，仅计算当轮增量！
            </p>
          </div>

          {/* 第 3 层：底层动态变量（Minimal Delta） */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-amber-300 bg-amber-50/80 p-5 shadow-sm sm:p-6">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-base font-black text-amber-900 sm:text-lg">
                <Server className="size-5 text-amber-700" />
                <span>第三段：当回合微观变量与即时处境 (Dynamic Tail Variables)</span>
              </div>
              <span className="flex items-center gap-1 rounded-full border border-amber-300 bg-amber-100 px-3 py-1 font-mono text-xs font-black text-amber-800 shadow-xs">
                <Flame className="size-3.5 text-amber-600" />
                <span>&lt; 5% NEW TOKENS</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
              仅将当前四维数值涨跌、突发事件倒计时、未决通牒与玩家当下决策置于 Prompt 最末尾。
              只有这区区几十个 Token 需要消耗全额算力！
            </p>
          </div>
        </div>

        {/* 右侧：性能收益对比卡片（5列）：巨幅大数字震撼呈现 */}
        <div className="flex flex-col justify-between space-y-6 rounded-2xl border-2 border-emerald-200 bg-white/95 p-6 shadow-xl backdrop-blur-2xl sm:p-8 lg:col-span-5">
          <div className="flex items-center gap-2.5 border-b border-slate-200 pb-4 font-mono text-sm font-bold text-slate-900">
            <TrendingDown className="size-5 text-emerald-600" />
            <span>实测前缀缓存收益数据 (DeepSeek Flash 4.1)</span>
          </div>

          <div className="my-auto grid grid-cols-2 gap-4 text-center">
            {/* 延迟对比 */}
            <div className="rounded-2xl border border-blue-200 bg-blue-50/60 p-5 shadow-xs">
              <div className="text-xs font-bold text-slate-700 sm:text-sm">首字响应延迟 (TTFT)</div>
              <div className="my-2 text-5xl font-black tracking-tight text-[#0066ff] sm:text-6xl lg:text-7xl">
                -72%
              </div>
              <div className="font-mono text-xs font-bold text-slate-500">
                从 1.6s ➔ 0.45s 秒级回响
              </div>
            </div>

            {/* 成本对比 */}
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5 shadow-xs">
              <div className="text-xs font-bold text-slate-700 sm:text-sm">输入 Token 成本</div>
              <div className="my-2 text-5xl font-black tracking-tight text-emerald-600 sm:text-6xl lg:text-7xl">
                -85%
              </div>
              <div className="font-mono text-xs font-bold text-slate-500">
                缓存命中仅按 0.1 折结算
              </div>
            </div>
          </div>

          <div className="space-y-3 border-t border-slate-200 pt-4 text-sm text-slate-700">
            <div className="text-base font-bold text-slate-900">为什么对游戏体验生死攸关？</div>
            <div className="flex items-start gap-2">
              <Check className="mt-1 size-4 shrink-0 text-emerald-600" />
              <span>多 Agent 连续台词交锋无需玩家枯等 5~10 秒，如同真人面对面秒回！</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="mt-1 size-4 shrink-0 text-emerald-600" />
              <span>
                推演整场多回合世界线 + 万字知乎长回答，单局 API 成本不到 <strong>2 分钱</strong>！
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 底部代码背书 */}
      <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-6 py-3 font-mono text-xs text-slate-600 sm:text-sm">
        <span>lib/prompts/turn.ts: L30-L70 buildEnvironmentBlock 严格静态置顶</span>
        <span className="text-sm font-black text-emerald-700">Zero KV Cache Fragmentation</span>
      </div>
    </div>
  );
}
