import { Cpu, Layers, Network, ShieldCheck, Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getSkin, isDarkSkin, skinStyleVars, type ScenarioSkin } from "@/lib/scenario-skin";

export function Slide7Architecture({ skin: _defaultSkin }: { skin: ScenarioSkin }) {
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
              <Badge className="bg-[#e2622c] text-[10px] text-black font-bold">核心工程攻坚</Badge>
              <span className="font-mono text-[10px] text-slate-400">
                攻克多智能体回合延迟、算力成本与纯前端并发渲染瓶颈
              </span>
            </div>
            <h1 className="mt-0.5 text-base font-black text-slate-100 sm:text-xl">
              底层技术硬实力：前缀缓存降本 × 程序化像素引擎 × 冲突矩阵调度
            </h1>
          </div>

          <div className="flex items-center gap-2 font-mono text-[10px] text-slate-400">
            <Cpu className="size-3 text-[#e2622c]" />
            <span>Next.js 16 App Router · React 19 Compiler 自动记忆化</span>
          </div>
        </div>
      </section>

      {/* ⚙️ 3 大硬核工程突破卡片：16:9 比例精准排版 */}
      <section className="mx-auto w-full max-w-7xl flex-1 px-4 py-2 sm:px-6 sm:py-3">
        <div className="grid h-full grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-4">
          {/* 1. Prefix Caching 架构 */}
          <Card className="flex flex-col justify-between border-white/15 bg-[#26201d]/95 p-3.5 shadow-md">
            <CardHeader className="space-y-2 p-0">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1 font-mono text-xs font-black text-orange-400">
                  <Zap className="size-3.5" />
                  <span>PREFIX CACHING</span>
                </span>
                <Badge className="bg-[#e2622c] text-[9px] text-black font-bold">成本暴跌 85%</Badge>
              </div>
              <CardTitle className="text-sm font-black text-slate-100 sm:text-base">
                严苛三段式前缀缓存架构
              </CardTitle>
              <p className="text-[11px] leading-relaxed text-slate-400">
                针对多回合多智能体提示词膨胀问题，设计严格确定性的前缀注入管道：
              </p>

              <div className="space-y-1.5 font-mono text-[10px]">
                <div className="rounded border border-orange-500/30 bg-orange-950/40 p-2">
                  <span className="font-bold text-orange-300">① 静态世界规则与角色设定</span>
                  <span className="block text-slate-400">100% KV Cache 命中，首包极速响应</span>
                </div>
                <div className="rounded border border-white/10 bg-black/30 p-2">
                  <span className="font-bold text-slate-300">② 线性演化历史居中追加</span>
                  <span className="block text-slate-400">增量复用，仅计算新回合 Token</span>
                </div>
                <div className="rounded border border-amber-500/30 bg-amber-950/40 p-2">
                  <span className="font-bold text-amber-300">③ 动态即时变量置底</span>
                  <span className="block text-slate-400">单次回合仅消耗微量计算开销</span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="mt-2 p-0">
              <div className="rounded-lg border border-orange-500/30 bg-orange-950/30 p-2 text-center">
                <div className="font-mono text-lg font-black text-orange-400">
                  0.45s / 单局 &lt; 2 分钱
                </div>
                <div className="text-[10px] text-slate-400">首字延迟降低 72%，单局算力成本锐减 85%</div>
              </div>
            </CardContent>
          </Card>

          {/* 2. 纯前端程序化像素引擎 */}
          <Card className="flex flex-col justify-between border-white/15 bg-[#26201d]/95 p-3.5 shadow-md">
            <CardHeader className="space-y-2 p-0">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1 font-mono text-xs font-black text-emerald-400">
                  <Layers className="size-3.5" />
                  <span>PIXEL ENGINE</span>
                </span>
                <Badge className="bg-emerald-600 text-[9px] text-white font-bold">锁死 60fps</Badge>
              </div>
              <CardTitle className="text-sm font-black text-slate-100 sm:text-base">
                SVG 路径合并与程序化生成
              </CardTitle>
              <p className="text-[11px] leading-relaxed text-slate-400">
                纯数学与代码定义的程序化像素引擎，摆脱庞大静态美术图片包袱：
              </p>

              <div className="space-y-1.5 text-[11px]">
                <div className="rounded border border-emerald-500/30 bg-emerald-950/40 p-2">
                  <strong className="text-emerald-300">`frameToPaths` 压缩合并:</strong>
                  <p className="mt-0.5 text-[10px] text-slate-400">
                    数百个 `rect` 元素合并为单条连续 SVG `path`，DOM 节点减少 85%。
                  </p>
                </div>
                <div className="rounded border border-white/10 bg-black/30 p-2">
                  <strong className="text-slate-200">10 套平行宇宙毫秒换肤:</strong>
                  <p className="mt-0.5 text-[10px] text-slate-400">
                    白垩纪、大秦、三国、末日等，纯函数毫秒级实时计算与换肤。
                  </p>
                </div>
                <div className="rounded border border-white/10 bg-black/30 p-2">
                  <strong className="text-slate-200">情绪与动作微律动:</strong>
                  <p className="mt-0.5 text-[10px] text-slate-400">
                    手绘 5 类微部件组合上百立绘，配置 6 种动作呼吸律动。
                  </p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="mt-2 p-0">
              <div className="rounded-lg border border-emerald-500/30 bg-emerald-950/30 p-2 text-center">
                <div className="font-mono text-lg font-black text-emerald-400">
                  0 外部静态图片依赖
                </div>
                <div className="text-[10px] text-slate-400">单 HTML 自包含，单文件 100% 离线极速渲染</div>
              </div>
            </CardContent>
          </Card>

          {/* 3. 多智能体博弈调度管线 */}
          <Card className="flex flex-col justify-between border-white/15 bg-[#26201d]/95 p-3.5 shadow-md">
            <CardHeader className="space-y-2 p-0">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1 font-mono text-xs font-black text-cyan-400">
                  <Network className="size-3.5" />
                  <span>AGENT DISPATCH</span>
                </span>
                <Badge className="bg-cyan-600 text-[9px] text-white font-bold">零死锁零卡顿</Badge>
              </div>
              <CardTitle className="text-sm font-black text-slate-100 sm:text-base">
                冲突矩阵对齐与结构化交锋
              </CardTitle>
              <p className="text-[11px] leading-relaxed text-slate-400">
                攻克多智能体博弈中死锁、复读机与高延迟三大行业顽疾：
              </p>

              <div className="space-y-1.5 text-[11px]">
                <div className="rounded border border-cyan-500/30 bg-cyan-950/40 p-2">
                  <strong className="text-cyan-300">并发扇出 + 流式推送:</strong>
                  <p className="mt-0.5 text-[10px] text-slate-400">
                    4 位 Agent 并行表态，首包秒级上屏，流式打字机打消用户等待。
                  </p>
                </div>
                <div className="rounded border border-white/10 bg-black/30 p-2">
                  <strong className="text-slate-200">冲突矩阵对齐剪枝:</strong>
                  <p className="mt-0.5 text-[10px] text-slate-400">
                    `pickConflictPair` 算法过滤共识，锁定立场极化权重最高的一对矛与盾。
                  </p>
                </div>
                <div className="rounded border border-white/10 bg-black/30 p-2">
                  <strong className="text-slate-200">Single-Shot 对抗合成:</strong>
                  <p className="mt-0.5 text-[10px] text-slate-400">
                    单次结构化推演双向对抗，节约 50% 往返时延并彻底杜绝死锁。
                  </p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="mt-2 p-0">
              <div className="rounded-lg border border-cyan-500/30 bg-cyan-950/30 p-2 text-center">
                <div className="font-mono text-lg font-black text-cyan-400">
                  AbortController 级联容灾
                </div>
                <div className="text-[10px] text-slate-400">单 Agent 异常自动降级，长链路推演稳如磐石</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 底部确认栏 */}
      <footer className="relative z-30 shrink-0 border-t border-white/10 bg-black/60 px-4 py-2 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-emerald-400" />
            <span className="text-slate-400">工程硬指标：</span>
            <strong className="text-slate-100">
              Next.js 16 App Router + React 19 Compiler 全链路零冗余重绘
            </strong>
          </div>
          <span className="font-mono text-[11px] font-bold text-orange-400">
            下一幕：生态飞轮与未来演进 ➔ (按空格键或右方向键)
          </span>
        </div>
      </footer>
    </main>
  );
}
