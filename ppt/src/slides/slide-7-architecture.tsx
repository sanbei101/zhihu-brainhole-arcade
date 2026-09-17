import { Cpu, GitBranch, Layers, ShieldCheck, Zap } from "lucide-react";

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
            <div className="flex items-center gap-2">
              <Badge className="bg-[#e2622c] text-xs text-black font-black px-2 py-0.5">系统架构与工程实现</Badge>
              <span className="font-mono text-xs text-slate-300 font-medium">
                轻量化、高响应、低成本的多智能体策略推演底座
              </span>
            </div>
            <h1 className="mt-1 text-lg font-black text-slate-100 sm:text-2xl tracking-tight">
              底层架构设计：前缀缓存优化 × 程序化像素引擎 × 状态机推演底座
            </h1>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
            <Cpu className="size-4 text-[#e2622c]" />
            <span>Next.js 16 App Router · React 19 Compiler</span>
          </div>
        </div>
      </section>

      {/* ⚙️ 3 大核心架构支撑卡片：16:9 比例精准排版 */}
      <section className="mx-auto w-full max-w-7xl flex-1 px-4 py-3 sm:px-6 sm:py-4">
        <div className="grid h-full grid-cols-1 gap-3.5 lg:grid-cols-3 lg:gap-5">
          {/* 1. Prefix Caching 架构 */}
          <Card className="flex flex-col justify-between border-white/15 bg-[#26201d]/95 p-4 shadow-lg sm:p-5">
            <CardHeader className="space-y-2.5 p-0">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 font-mono text-xs font-black text-orange-400 sm:text-sm">
                  <Zap className="size-4" />
                  <span>PREFIX CACHING</span>
                </span>
                <Badge className="bg-[#e2622c] text-[11px] text-black font-black px-2 py-0.5">成本优化 85%</Badge>
              </div>
              <CardTitle className="text-base font-black text-slate-100 sm:text-lg">
                多轮推演如何实现毫秒级响应与超低成本？
              </CardTitle>
              <p className="text-xs sm:text-[13px] leading-relaxed text-slate-300 font-medium">
                基于前缀缓存（KV Cache）的上下文复用机制
              </p>

              <div className="space-y-2 text-xs sm:text-[13px]">
                <div className="rounded-lg border border-orange-500/30 bg-orange-950/40 p-2.5">
                  <strong className="block font-black text-orange-300">① 静态规则前置固化</strong>
                  <span className="mt-0.5 block leading-relaxed text-slate-200">
                    世界观背景与阵营设定固化在提示词前序，实现长前缀高命中率缓存，首字响应缩短至 0.45 秒。
                  </span>
                </div>
                <div className="rounded-lg border border-white/10 bg-black/30 p-2.5">
                  <strong className="block font-black text-slate-200">② 增量历史状态复用</strong>
                  <span className="mt-0.5 block leading-relaxed text-slate-300">
                    推演历史以增量形式追加，避免全量上下文重复编码计算，显著降低多轮交互中的无效算力开销。
                  </span>
                </div>
                <div className="rounded-lg border border-amber-500/30 bg-amber-950/40 p-2.5">
                  <strong className="block font-black text-amber-300">③ 动态变量最小化</strong>
                  <span className="mt-0.5 block leading-relaxed text-slate-200">
                    每轮交互仅提取当前决策变量与关键环境差量，精简输入规模，整体推演算力成本降低 85%。
                  </span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="mt-3 p-0">
              <div className="rounded-xl border border-orange-500/40 bg-orange-950/30 p-3 text-center">
                <div className="font-mono text-xl font-black text-orange-400 sm:text-2xl">
                  0.45s 响应 · 单局成本 &lt; 2 分钱
                </div>
                <div className="mt-1 text-xs text-slate-300 font-medium">首字延迟降低 72%，多轮交互算力成本大幅缩减</div>
              </div>
            </CardContent>
          </Card>

          {/* 2. 纯前端程序化像素引擎 */}
          <Card className="flex flex-col justify-between border-white/15 bg-[#26201d]/95 p-4 shadow-lg sm:p-5">
            <CardHeader className="space-y-2.5 p-0">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 font-mono text-xs font-black text-emerald-400 sm:text-sm">
                  <Layers className="size-4" />
                  <span>PIXEL ENGINE</span>
                </span>
                <Badge className="bg-emerald-600 text-[11px] text-white font-black px-2 py-0.5">性能满帧 60FPS</Badge>
              </div>
              <CardTitle className="text-base font-black text-slate-100 sm:text-lg">
                零外部静态依赖：轻量级程序化像素引擎
              </CardTitle>
              <p className="text-xs sm:text-[13px] leading-relaxed text-slate-300 font-medium">
                纯代码生成动态像素视觉，实现极致首屏与无缝主题切换
              </p>

              <div className="space-y-2 text-xs sm:text-[13px]">
                <div className="rounded-lg border border-emerald-500/30 bg-emerald-950/40 p-2.5">
                  <strong className="block font-black text-emerald-300">① 矢量数学算法实时生成</strong>
                  <span className="mt-0.5 block leading-relaxed text-slate-200">
                    无需加载外部美术切片或图集资源，通过轻量级 SVG 描述与色彩映射在内存中毫秒级构建角色立绘。
                  </span>
                </div>
                <div className="rounded-lg border border-white/10 bg-black/30 p-2.5">
                  <strong className="block font-black text-slate-200">② 路径压缩与 DOM 节点合并</strong>
                  <span className="mt-0.5 block leading-relaxed text-slate-300">
                    采用色块路径合并算法，将数百像素点汇聚为单一连续路径，DOM 节点开销降低 85%，保障全平台稳定 60 帧。
                  </span>
                </div>
                <div className="rounded-lg border border-emerald-500/20 bg-black/30 p-2.5">
                  <strong className="block font-black text-emerald-200">③ 多元世界观无缝适配</strong>
                  <span className="mt-0.5 block leading-relaxed text-slate-200">
                    场景与角色外观完全通过调色板与像素矩阵驱动，变更配置即可即时切换历史、科幻等多题材视觉表现。
                  </span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="mt-3 p-0">
              <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/30 p-3 text-center">
                <div className="font-mono text-xl font-black text-emerald-400 sm:text-2xl">
                  0 外部静态图片依赖
                </div>
                <div className="mt-1 text-xs text-slate-300 font-medium">单 HTML 文件完全自包含，极速首屏加载与断网离线可用</div>
              </div>
            </CardContent>
          </Card>

          {/* 3. 推演状态机与强类型约束架构 */}
          <Card className="flex flex-col justify-between border-white/15 bg-[#26201d]/95 p-4 shadow-lg sm:p-5">
            <CardHeader className="space-y-2.5 p-0">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 font-mono text-xs font-black text-cyan-400 sm:text-sm">
                  <GitBranch className="size-4" />
                  <span>STATE & SCHEMA</span>
                </span>
                <Badge className="bg-cyan-600 text-[11px] text-white font-black px-2 py-0.5">强类型零幻觉</Badge>
              </div>
              <CardTitle className="text-base font-black text-slate-100 sm:text-lg">
                推演状态机与强类型约束架构
              </CardTitle>
              <p className="text-xs sm:text-[13px] leading-relaxed text-slate-300 font-medium">
                解耦数值判定与文本生成，保障世界线分支的确定性与自洽性
              </p>

              <div className="space-y-2 text-xs sm:text-[13px]">
                <div className="rounded-lg border border-cyan-500/30 bg-cyan-950/40 p-2.5">
                  <strong className="block font-black text-cyan-300">① 有限状态机驱动推演进程</strong>
                  <span className="mt-0.5 block leading-relaxed text-slate-200">
                    将玩家抉择、阵营立场反馈与终局结算形式化为离散状态机，保证多回合流程严密演进且具备确定性。
                  </span>
                </div>
                <div className="rounded-lg border border-white/10 bg-black/30 p-2.5">
                  <strong className="block font-black text-slate-200">② 强类型 Schema 严格约束</strong>
                  <span className="mt-0.5 block leading-relaxed text-slate-300">
                    所有模型交互均通过强类型 Schema 校验，将论辩内容与四维数值逻辑解耦，彻底避免数据漂移与格式异常。
                  </span>
                </div>
                <div className="rounded-lg border border-cyan-500/20 bg-black/30 p-2.5">
                  <strong className="block font-black text-cyan-200">③ 环境动态演变与分支可追溯</strong>
                  <span className="mt-0.5 block leading-relaxed text-slate-200">
                    引入环境大势熵增模型驱动资源演化，完整记录各阶段决策路径，实现世界线推演轨迹的全程可回溯。
                  </span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="mt-3 p-0">
              <div className="rounded-xl border border-cyan-500/40 bg-cyan-950/30 p-3 text-center">
                <div className="font-mono text-xl font-black text-cyan-400 sm:text-2xl">
                  100% 状态自洽 · 零格式异常
                </div>
                <div className="mt-1 text-xs text-slate-300 font-medium">业务逻辑与模型推理严格解耦，保障长链路推演稳定可靠</div>
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
