import { Check, Database, HardDrive, Layers, Server, TrendingDown, Zap } from "lucide-react";

import type { ScenarioSkin } from "@/lib/scenario-skin";

export function Slide5PrefixCaching({ skin: _skin }: { skin: ScenarioSkin }) {
  return (
    <div className="relative flex max-h-full w-full scrollbar-none flex-col justify-between overflow-y-auto rounded-2xl border border-white/80 bg-white/85 p-4 text-slate-900 shadow-2xl backdrop-blur-md sm:p-6 lg:p-8">
      {/* 顶部标题 */}
      <div className="space-y-1 sm:space-y-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-wider text-emerald-700 uppercase sm:text-sm">
          <span>[提示词工程 · 架构底层]</span>
        </div>
        <h2 className="text-2xl leading-tight font-black text-slate-900 sm:text-3xl lg:text-4xl">
          三段式前缀缓存 (Prefix Caching) 架构设计
        </h2>
        <p className="text-xs text-slate-600 sm:text-sm lg:text-base">
          多回合、多智能体交互的吞吐瓶颈在于 Token 膨胀与高昂延迟。我们通过严格的「静态设定 ➔
          纯追加历史 ➔ 动态尾部」保证高命中率。
        </p>
      </div>

      {/* 核心架构解析图 */}
      <div className="my-auto grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-6">
        {/* 左侧：三段式前缀缓存堆栈（7列） */}
        <div className="flex flex-col gap-3 sm:gap-4 lg:col-span-7">
          {/* 第 1 层：静态顶层（100% Cache Hit） */}
          <div className="rounded-2xl border-2 border-emerald-300 bg-emerald-50/80 p-4 shadow-sm sm:p-5">
            <div className="mb-1.5 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-black text-emerald-950 sm:text-base">
                <HardDrive className="size-5 text-emerald-700" />
                <span>1. 静态世界规则与身份顶层 (Static World Top)</span>
              </div>
              <span className="flex items-center gap-1 rounded-full bg-emerald-200/80 px-2.5 py-0.5 font-mono text-xs font-bold text-emerald-900">
                <Zap className="size-3.5 text-emerald-700" />
                <span>100% CACHE HIT</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
              纪元规则、四方 Agent 阵营偏好、语言风格与私密红线。
              <strong>置于 Prompt 绝对最顶端且推演全程不可变</strong>，保证 DeepSeek 服务端持久命中
              KV Cache。
            </p>
          </div>

          {/* 第 2 层：中层只增历史（Incremental Cache） */}
          <div className="rounded-2xl border-2 border-blue-300 bg-blue-50/80 p-4 shadow-sm sm:p-5">
            <div className="mb-1.5 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-black text-blue-950 sm:text-base">
                <Layers className="size-5 text-[#0066ff]" />
                <span>2. 顺序追加推演历史 (Append-Only History Middle)</span>
              </div>
              <span className="flex items-center gap-1 rounded-full bg-blue-200/80 px-2.5 py-0.5 font-mono text-xs font-bold text-blue-900">
                <Database className="size-3.5 text-[#0066ff]" />
                <span>APPEND-ONLY CACHE</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
              严格按时序从前向后紧凑追加前序决策与势力反馈（严禁倒序或插入重排）， 此前已生成的 KV
              Cache 持续复用，模型仅计算当前轮次新增 Token！
            </p>
          </div>

          {/* 第 3 层：底层动态变量（Minimal Delta） */}
          <div className="rounded-2xl border-2 border-amber-300 bg-amber-50/80 p-4 shadow-sm sm:p-5">
            <div className="mb-1.5 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-black text-amber-950 sm:text-base">
                <Server className="size-5 text-amber-700" />
                <span>3. 即时微观处境变量 (Dynamic Tail Variables)</span>
              </div>
              <span className="rounded-full bg-amber-200/80 px-2.5 py-0.5 font-mono text-xs font-bold text-amber-900">
                &lt; 5% NEW TOKENS
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
              仅将当轮四维指标涨跌、突发危机倒计时与玩家当前选拔拍板置于 Prompt
              最末端，全额计算开销降至极微小增量。
            </p>
          </div>
        </div>

        {/* 右侧：性能收益对比卡片（5列） */}
        <div className="flex flex-col justify-between space-y-4 rounded-2xl border-2 border-emerald-200 bg-white/95 p-5 shadow-xl sm:p-6 lg:col-span-5">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-3 font-mono text-xs font-bold text-slate-800 sm:text-sm">
            <TrendingDown className="size-5 text-emerald-600" />
            <span>实测前缀缓存收益 (DeepSeek Flash 4.1)</span>
          </div>

          <div className="my-auto grid grid-cols-2 gap-3.5 text-center">
            {/* 延迟对比 */}
            <div className="rounded-2xl border-2 border-blue-200 bg-blue-50/70 p-4 shadow-xs">
              <div className="text-xs font-bold text-slate-700 sm:text-sm">首字延迟 (TTFT)</div>
              <div className="my-1.5 text-4xl font-black text-[#0066ff] sm:text-5xl lg:text-6xl">
                -72%
              </div>
              <div className="font-mono text-xs font-bold text-slate-600">1.6s ➔ 0.45s</div>
            </div>

            {/* 成本对比 */}
            <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50/70 p-4 shadow-xs">
              <div className="text-xs font-bold text-slate-700 sm:text-sm">输入 Token 成本</div>
              <div className="my-1.5 text-4xl font-black text-emerald-600 sm:text-5xl lg:text-6xl">
                -85%
              </div>
              <div className="font-mono text-xs font-bold text-slate-600">命中单价 0.1 折</div>
            </div>
          </div>

          <div className="space-y-2.5 border-t border-slate-200 pt-3.5 text-xs text-slate-700 sm:text-sm">
            <div className="text-sm font-black text-slate-900">工程落地效果：</div>
            <div className="flex items-start gap-2">
              <Check className="mt-0.5 size-4 shrink-0 text-emerald-600" />
              <span>4 位 Agent 连续台词交互如面对面对话，无需玩家漫长等待；</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="mt-0.5 size-4 shrink-0 text-emerald-600" />
              <span>
                整局 10+ 回合推演 + 知乎体万字答题草稿，单局 API 成本不足 <strong>2 分钱</strong>。
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 底部代码背书 */}
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 font-mono text-xs text-slate-600 sm:text-sm">
        <span>代码实现: lib/prompts/turn.ts 严格静态结构组织</span>
        <span className="font-bold text-emerald-700">Zero KV Cache Fragmentation</span>
      </div>
    </div>
  );
}
