import { Layers, Network, Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ScenarioSkin } from "@/lib/scenario-skin";

export function Slide7Architecture({ skin: _skin }: { skin: ScenarioSkin }) {
  return (
    <div className="relative flex size-full max-h-full scrollbar-none flex-col justify-between gap-3 overflow-y-auto rounded-2xl border border-white/80 bg-white/90 p-4 text-slate-900 shadow-2xl backdrop-blur-md sm:gap-4 sm:p-6 lg:p-7">
      {/* 顶部标题区 */}
      <div className="space-y-1 border-b border-slate-200/80 pb-2.5 sm:space-y-2">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold tracking-wider text-[#0066ff] uppercase">
            [核心工程攻坚 · 架构与算法突破]
          </span>
          <Badge variant="secondary" className="text-[10px]">
            ENGINEERING & PROMPT CACHING
          </Badge>
        </div>
        <h2 className="text-xl leading-tight font-black text-slate-900 sm:text-2xl lg:text-3xl">
          底层技术硬实力：缓存降本 × 像素引擎 × 冲突调度
        </h2>
        <p className="text-xs text-slate-600 sm:text-sm">
          拒绝做浅层 Prompt 套壳，以严苛工程指标攻克多智能体回合延迟、成本与并发渲染瓶颈。
        </p>
      </div>

      {/* 3 大硬核工程突破卡片 */}
      <div className="my-auto grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
        {/* 1. Prefix Caching 架构 */}
        <Card className="flex flex-col justify-between gap-3 rounded-2xl border-2 border-blue-200 bg-white/95 p-4 shadow-sm">
          <CardHeader className="space-y-2 p-0">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 font-mono text-xs font-black text-[#0066ff]">
                <Zap className="size-4" />
                <span>PREFIX CACHING</span>
              </span>
              <Badge className="bg-[#0066ff] text-[10px]">降本 85%</Badge>
            </div>
            <CardTitle className="text-base font-black text-slate-900">
              严苛三段式前缀缓存架构
            </CardTitle>
            <p className="text-xs leading-relaxed text-slate-600">
              针对多回合多智能体提示词膨胀问题，设计确定性 Prompt 管道：
            </p>

            <div className="space-y-1.5 font-mono text-[11px]">
              <div className="rounded-lg border border-blue-100 bg-blue-50/80 p-2">
                <span className="font-bold text-blue-900">① 静态世界规则与角色顶层</span>
                <span className="block text-[10px] text-blue-600">100% KV Cache 命中</span>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-2">
                <span className="font-bold text-slate-800">② 线性演化历史居中</span>
                <span className="block text-[10px] text-slate-500">追加复用，增量极小</span>
              </div>
              <div className="rounded-lg border border-amber-100 bg-amber-50/80 p-2">
                <span className="font-bold text-amber-900">③ 动态即时变量置底</span>
                <span className="block text-[10px] text-amber-600">单次回合仅计算微量 Token</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-2.5 text-center">
              <div className="font-mono text-xl font-black text-[#0066ff]">
                0.45s / 单局&lt;2分钱
              </div>
              <div className="text-[10px] text-slate-600">首字延迟降低 72%，成本骤降 85%</div>
            </div>
          </CardContent>
        </Card>

        {/* 2. 纯前端程序化像素引擎 */}
        <Card className="flex flex-col justify-between gap-3 rounded-2xl border-2 border-emerald-200 bg-white/95 p-4 shadow-sm">
          <CardHeader className="space-y-2 p-0">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 font-mono text-xs font-black text-emerald-700">
                <Layers className="size-4" />
                <span>PIXEL ENGINE</span>
              </span>
              <Badge className="bg-emerald-600 text-[10px]">锁死 60fps</Badge>
            </div>
            <CardTitle className="text-base font-black text-slate-900">
              SVG 路径合并与程序化生成
            </CardTitle>
            <p className="text-xs leading-relaxed text-slate-600">
              拒绝沉重的静态美术包袱，纯数学与代码定义的程序化像素引擎：
            </p>

            <div className="space-y-2 text-xs">
              <div className="rounded-lg border border-emerald-100 bg-emerald-50/70 p-2">
                <strong className="text-emerald-900">`frameToPaths` 合并算法:</strong>
                <p className="mt-0.5 text-[11px] text-slate-600">
                  将数百个 `rect` 元素压缩合并为单条连续 SVG `path`，DOM 节点减少 85%。
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-2">
                <strong className="text-slate-900">10 套平行宇宙换肤:</strong>
                <p className="mt-0.5 text-[11px] text-slate-600">
                  白垩纪、大秦、三国、深空、霓虹等，基于纯函数毫秒级实时换肤。
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-2">
                <strong className="text-slate-900">情绪与动作微律动:</strong>
                <p className="mt-0.5 text-[11px] text-slate-600">
                  手绘 5 类微部件组合上百立绘，配置 6 种动作呼吸律动。
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-2.5 text-center">
              <div className="font-mono text-xl font-black text-emerald-700">0 外部图片依赖</div>
              <div className="text-[10px] text-slate-600">纯代码绘制，自包含单 HTML 极速渲染</div>
            </div>
          </CardContent>
        </Card>

        {/* 3. 多智能体博弈调度管线 */}
        <Card className="flex flex-col justify-between gap-3 rounded-2xl border-2 border-purple-200 bg-white/95 p-4 shadow-sm">
          <CardHeader className="space-y-2 p-0">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 font-mono text-xs font-black text-purple-700">
                <Network className="size-4" />
                <span>AGENT DISPATCH</span>
              </span>
              <Badge className="bg-purple-600 text-[10px]">零死锁零卡顿</Badge>
            </div>
            <CardTitle className="text-base font-black text-slate-900">
              冲突矩阵对齐与结构化交锋
            </CardTitle>
            <p className="text-xs leading-relaxed text-slate-600">
              解决多 Agent 演化中常见的死循环、同质化与机械感问题：
            </p>

            <div className="space-y-2 text-xs">
              <div className="rounded-lg border border-purple-100 bg-purple-50/70 p-2">
                <strong className="text-purple-900">并发扇出 + NDJSON 流式:</strong>
                <p className="mt-0.5 text-[11px] text-slate-600">
                  并行获取四方立场，首包秒级上屏，流式打字机打消用户等待感知。
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-2">
                <strong className="text-slate-900">冲突矩阵对齐剪枝:</strong>
                <p className="mt-0.5 text-[11px] text-slate-600">
                  `pickConflictPair` 自动筛选冲突最激烈的阵营（如相府法家 vs 江东降臣）。
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-2">
                <strong className="text-slate-900">Single-Shot Dual Clash:</strong>
                <p className="mt-0.5 text-[11px] text-slate-600">
                  单次模型推演双向对抗，节约 50% 往返时延并杜绝死锁。
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-2.5 text-center">
              <div className="font-mono text-xl font-black text-purple-700">AbortController</div>
              <div className="text-[10px] text-slate-600">级联取消与单 Agent 故障隔离容灾</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 底部确认栏 */}
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white/95 px-4 py-2 text-xs text-slate-700 shadow-xs sm:text-sm">
        <span>
          严苛工程纪律：Next.js 16 App Router + React 19 Compiler 自动化记忆化，全链路零冗余重绘
        </span>
        <span className="font-mono text-xs font-bold text-[#0066ff]">
          下一幕：知乎生态闭环、未来愿景与致谢 ➔ (按空格键或右方向键)
        </span>
      </div>
    </div>
  );
}
