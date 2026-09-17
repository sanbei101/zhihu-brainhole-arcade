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
            <div className="flex items-center gap-2">
              <Badge className="bg-[#e2622c] text-xs text-black font-black px-2 py-0.5">硬核工程突破</Badge>
              <span className="font-mono text-xs text-slate-300 font-medium">
                彻底解决多智能体延迟高、算力贵、渲染卡顿三大痛点
              </span>
            </div>
            <h1 className="mt-1 text-lg font-black text-slate-100 sm:text-2xl tracking-tight">
              底层技术硬实力：前缀缓存降本 × 程序化像素引擎 × 冲突矩阵调度
            </h1>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
            <Cpu className="size-4 text-[#e2622c]" />
            <span>Next.js 16 App Router · React 19 Compiler</span>
          </div>
        </div>
      </section>

      {/* ⚙️ 3 大硬核工程突破卡片：16:9 比例精准排版 */}
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
                <Badge className="bg-[#e2622c] text-[11px] text-black font-black px-2 py-0.5">成本暴降 85%</Badge>
              </div>
              <CardTitle className="text-base font-black text-slate-100 sm:text-lg">
                多轮推演怎么做到单局低于 2 分钱？
              </CardTitle>
              <p className="text-xs sm:text-[13px] leading-relaxed text-slate-300 font-medium">
                死磕前缀缓存（KV Cache）：绝不让大模型重复看废话
              </p>

              <div className="space-y-2 text-xs sm:text-[13px]">
                <div className="rounded-lg border border-orange-500/30 bg-orange-950/40 p-2.5">
                  <strong className="block font-black text-orange-300">① 固定规则锁死在最前</strong>
                  <span className="mt-0.5 block leading-relaxed text-slate-200">
                    世界背景、阵营人设一次性输入，后续 100% 缓存命中，首字 0.45 秒秒出。
                  </span>
                </div>
                <div className="rounded-lg border border-white/10 bg-black/30 p-2.5">
                  <strong className="block font-black text-slate-200">② 历史战报只追加不重算</strong>
                  <span className="mt-0.5 block leading-relaxed text-slate-300">
                    前几回合聊过的内容增量复用，绝不来回倒腾重复花钱。
                  </span>
                </div>
                <div className="rounded-lg border border-amber-500/30 bg-amber-950/40 p-2.5">
                  <strong className="block font-black text-amber-300">③ 每回合只算两句新话</strong>
                  <span className="mt-0.5 block leading-relaxed text-slate-200">
                    把每轮动态变量压缩到极简，单局大模型算力成本直接省下 85%。
                  </span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="mt-3 p-0">
              <div className="rounded-xl border border-orange-500/40 bg-orange-950/30 p-3 text-center">
                <div className="font-mono text-xl font-black text-orange-400 sm:text-2xl">
                  0.45s 响应 · 单局 &lt; 2 分钱
                </div>
                <div className="mt-1 text-xs text-slate-300 font-medium">首字延迟降低 72%，单局算力成本锐减 85%</div>
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
                <Badge className="bg-emerald-600 text-[11px] text-white font-black px-2 py-0.5">稳跑 60 帧</Badge>
              </div>
              <CardTitle className="text-base font-black text-slate-100 sm:text-lg">
                0 张外部图片！纯代码手搓像素引擎
              </CardTitle>
              <p className="text-xs sm:text-[13px] leading-relaxed text-slate-300 font-medium">
                连一张外部 png 都不用加载，打开网页直接秒开
              </p>

              <div className="space-y-2 text-xs sm:text-[13px]">
                <div className="rounded-lg border border-emerald-500/30 bg-emerald-950/40 p-2.5">
                  <strong className="block font-black text-emerald-300">① 纯数学算法当场画小人</strong>
                  <span className="mt-0.5 block leading-relaxed text-slate-200">
                    告别几十兆美术图片包袱，几十行 SVG 代码在内存里毫秒级算出来。
                  </span>
                </div>
                <div className="rounded-lg border border-white/10 bg-black/30 p-2.5">
                  <strong className="block font-black text-slate-200">② 数百色块合并为单条路径</strong>
                  <span className="mt-0.5 block leading-relaxed text-slate-300">
                    frameToPaths 算法压缩合并，DOM 节点暴降 85%，千元机也稳如丝滑。
                  </span>
                </div>
                <div className="rounded-lg border border-emerald-500/20 bg-black/30 p-2.5">
                  <strong className="block font-black text-emerald-200">③ 十大世界一秒换装</strong>
                  <span className="mt-0.5 block leading-relaxed text-slate-200">
                    恐龙灭绝、大秦、三国、末日太阳，切换场景就像换 CSS 主题一样快，零等待。
                  </span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="mt-3 p-0">
              <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/30 p-3 text-center">
                <div className="font-mono text-xl font-black text-emerald-400 sm:text-2xl">
                  0 外部静态图片依赖
                </div>
                <div className="mt-1 text-xs text-slate-300 font-medium">单 HTML 文件自包含，断网离线也能极速流畅运行</div>
              </div>
            </CardContent>
          </Card>

          {/* 3. 多智能体博弈调度管线 */}
          <Card className="flex flex-col justify-between border-white/15 bg-[#26201d]/95 p-4 shadow-lg sm:p-5">
            <CardHeader className="space-y-2.5 p-0">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 font-mono text-xs font-black text-cyan-400 sm:text-sm">
                  <Network className="size-4" />
                  <span>AGENT DISPATCH</span>
                </span>
                <Badge className="bg-cyan-600 text-[11px] text-white font-black px-2 py-0.5">零死锁零卡顿</Badge>
              </div>
              <CardTitle className="text-base font-black text-slate-100 sm:text-lg">
                告别 AI 复读机与慢吞吞排队
              </CardTitle>
              <p className="text-xs sm:text-[13px] leading-relaxed text-slate-300 font-medium">
                让四路智能体真正当场“吵起来”，还不卡死
              </p>

              <div className="space-y-2 text-xs sm:text-[13px]">
                <div className="rounded-lg border border-cyan-500/30 bg-cyan-950/40 p-2.5">
                  <strong className="block font-black text-cyan-300">① 四路角色同时开口，不排队</strong>
                  <span className="mt-0.5 block leading-relaxed text-slate-200">
                    4 位 Agent 并发思考，0.5 秒直接冒出气泡，不用盯着进度条干等。
                  </span>
                </div>
                <div className="rounded-lg border border-white/10 bg-black/30 p-2.5">
                  <strong className="block font-black text-slate-200">② 自动挑出最针锋相对的俩人</strong>
                  <span className="mt-0.5 block leading-relaxed text-slate-300">
                    冲突矩阵算法过滤附和废话，专门抓立场最对立的正反双方当面硬刚。
                  </span>
                </div>
                <div className="rounded-lg border border-cyan-500/20 bg-black/30 p-2.5">
                  <strong className="block font-black text-cyan-200">③ 单次回合搞定，拒绝无限套娃</strong>
                  <span className="mt-0.5 block leading-relaxed text-slate-200">
                    单次结构化推演搞定双向对抗，节约 50% 耗时并彻底杜绝大模型死锁。
                  </span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="mt-3 p-0">
              <div className="rounded-xl border border-cyan-500/40 bg-cyan-950/30 p-3 text-center">
                <div className="font-mono text-xl font-black text-cyan-400 sm:text-2xl">
                  智能容灾 · 稳如磐石
                </div>
                <div className="mt-1 text-xs text-slate-300 font-medium">单个 Agent 异常自动优雅降级，长链路推演绝不崩盘</div>
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
