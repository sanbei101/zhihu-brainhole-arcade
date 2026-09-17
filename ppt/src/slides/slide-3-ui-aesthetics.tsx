import { Eye, Palette, Zap } from "lucide-react";
import { useState } from "react";

import { orbFrames, helixFrames, beaconFrames } from "@/components/pixel/generators";
import { PixelSprite } from "@/components/pixel/pixel-sprite";
import { portraitFor } from "@/components/pixel/portraits";
import type { ScenarioSkin } from "@/lib/scenario-skin";

import { LIGHT_SKINS } from "../theme";

export function Slide3UiAesthetics({ skin: initialSkin }: { skin: ScenarioSkin }) {
  const [activeSkin, setActiveSkin] = useState<ScenarioSkin>(initialSkin);
  const [isTalking, setIsTalking] = useState(true);

  // 现场渲染角色立绘 (文臣、武将、谋士)
  const ministerPortrait = portraitFor(
    {
      id: "minister",
      name: "张昭",
      identity: "东吴元老文臣",
      faction: "江东士族",
      archetype: "official",
    },
    activeSkin,
  );
  const generalPortrait = portraitFor(
    {
      id: "general",
      name: "周瑜",
      identity: "东吴水师大都督",
      faction: "江东军伍",
      archetype: "general",
    },
    activeSkin,
  );
  const diplomatPortrait = portraitFor(
    {
      id: "diplomat",
      name: "诸葛亮",
      identity: "蜀汉军师军门",
      faction: "刘备集团",
      archetype: "envoy",
    },
    activeSkin,
  );

  // 程序化天体生成器
  const orb = orbFrames(16, 16, 8);
  const helix = helixFrames(18, 12, 6);
  const beacon = beaconFrames(12, 18, 4);

  return (
    <div className="relative flex size-full flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-white/80 bg-white/80 p-6 text-slate-900 shadow-2xl backdrop-blur-md sm:rounded-3xl sm:p-10 lg:p-12">
      {/* 顶部标题 */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-[#0066ff] uppercase sm:text-sm">
          <span>[美学设计与渲染工程]</span>
        </div>
        <h2 className="text-3xl leading-tight font-black text-slate-900 sm:text-4xl lg:text-5xl">
          纯前端程序化像素引擎 × 10 大平行宇宙动态换肤
        </h2>
        <p className="text-sm text-slate-600 sm:text-lg">
          彻底抛弃重度游戏图片美术包袱：以轻量 SVG 路径合并与数学网格算法，实现 0 外链依赖的 60fps
          动态像素美学。
        </p>
      </div>

      {/* 核心亮点矩阵 */}
      <div className="my-auto grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* 左侧说明（7列）：大字号排版 */}
        <div className="space-y-4 lg:col-span-7">
          {/* 突破 1：SVG 路径合并算法 */}
          <div className="space-y-2 rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur-xl sm:p-6">
            <div className="flex items-center gap-2.5 text-base font-black text-[#0066ff] sm:text-lg">
              <Zap className="size-5 shrink-0 text-[#0066ff]" />
              <span>突破 1：SVG 路径合并算法 (Path Merging Optimization)</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
              传统像素组件使用成百上千个{" "}
              <code className="rounded border border-slate-200 bg-slate-100 px-1.5 py-0.5 font-mono text-xs text-[#0066ff]">
                &lt;rect&gt;
              </code>{" "}
              标签，DOM 树过深导致重绘掉帧。本项目手写{" "}
              <code className="rounded border border-slate-200 bg-slate-100 px-1.5 py-0.5 font-mono text-xs text-[#0066ff]">
                frameToPaths
              </code>{" "}
              压缩算法，将单帧同色像素点合并为<strong>唯一定义的单条路径</strong>，DOM 节点数量骤降
              85%，实现 60fps 极限丝滑。
            </p>
          </div>

          {/* 突破 2：角色情绪微律动系统 */}
          <div className="space-y-2 rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur-xl sm:p-6">
            <div className="flex items-center gap-2.5 text-base font-black text-amber-700 sm:text-lg">
              <Eye className="size-5 shrink-0 text-amber-600" />
              <span>突破 2：角色情绪微律动系统 (Procedural Motion)</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
              基于身体躯干、头冠、面容、手持物 5 种独立部件动态拼接，提供
              Scribe（抚须沉思）、Guard（持戈戒备）、Plead（急迫进言）等 6
              种微动作，随发言情绪加速律动并轻微放大，赋予 AI 朝堂人物鲜活体温。
            </p>
          </div>

          {/* 突破 3：10 大平行宇宙语义化皮肤 */}
          <div className="space-y-2 rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur-xl sm:p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-base font-black text-emerald-700 sm:text-lg">
                <Palette className="size-5 shrink-0 text-emerald-600" />
                <span>突破 3：10 大平行宇宙瞬时换肤 (Semantic Tokens)</span>
              </div>
              <span className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-0.5 font-mono text-xs text-slate-500">
                右侧可现场点击
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
              通过一套优雅的 CSS 变量语义注入（
              <code className="font-mono text-xs text-emerald-700">
                bg, surface, ink, accent, pixel
              </code>
              ），从秦汉玄黑、三国水墨到赛博霓虹，全局组件秒级换肤。
            </p>
          </div>
        </div>

        {/* 右侧互动体验舱（5列）：大号活体人物展示 */}
        <div className="flex flex-col justify-between rounded-2xl border-2 border-blue-200 bg-white/95 p-5 shadow-xl backdrop-blur-2xl sm:p-6 lg:col-span-5">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="flex items-center gap-2">
              <span className="size-3 animate-pulse rounded-full bg-emerald-500" />
              <span className="font-mono text-sm font-black text-slate-900">LIVE PIXEL ENGINE</span>
            </div>
            <button
              type="button"
              onClick={() => setIsTalking(!isTalking)}
              className="cursor-pointer rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold text-[#0066ff] shadow-xs transition-colors hover:bg-blue-100"
            >
              律动: {isTalking ? "即席交锋 🗣️" : "静止沉思 🤫"}
            </button>
          </div>

          {/* 实时大号人物展示 */}
          <div className="my-4 flex items-end justify-around rounded-xl border border-slate-200 bg-slate-50/90 py-6">
            {/* 文臣 */}
            <div className="text-center">
              <div
                className={`transition-transform duration-300 ${isTalking ? "animate-[portrait-scribe-talk_1.1s_ease-in-out_infinite]" : "animate-[portrait-scribe_4.2s_ease-in-out_infinite]"}`}
              >
                <PixelSprite
                  label="文臣立绘"
                  frames={ministerPortrait.frames}
                  palette={ministerPortrait.palette}
                  scale={4.8}
                />
              </div>
              <span className="mt-2.5 block font-mono text-xs font-bold text-slate-700">
                文官 · 张昭
              </span>
            </div>

            {/* 武将 */}
            <div className="text-center">
              <div
                className={`transition-transform duration-300 ${isTalking ? "animate-[portrait-guard-talk_0.78s_ease-in-out_infinite]" : "animate-[portrait-guard_2.1s_ease-in-out_infinite]"}`}
              >
                <PixelSprite
                  label="武将立绘"
                  frames={generalPortrait.frames}
                  palette={generalPortrait.palette}
                  scale={4.8}
                />
              </div>
              <span className="mt-2.5 block font-mono text-xs font-bold text-amber-700">
                武将 · 周瑜
              </span>
            </div>

            {/* 谋士 */}
            <div className="text-center">
              <div
                className={`transition-transform duration-300 ${isTalking ? "animate-[portrait-plead-talk_1.35s_ease-in-out_infinite]" : "animate-[portrait-plead_3s_ease-in-out_infinite]"}`}
              >
                <PixelSprite
                  label="谋士立绘"
                  frames={diplomatPortrait.frames}
                  palette={diplomatPortrait.palette}
                  scale={4.8}
                />
              </div>
              <span className="mt-2.5 block font-mono text-xs font-bold text-[#0066ff]">
                军师 · 诸葛亮
              </span>
            </div>
          </div>

          {/* 程序化数学天体展示 */}
          <div className="flex items-center justify-around border-t border-slate-200 py-2.5 text-center">
            <div>
              <PixelSprite label="轨道" frames={orb} palette={activeSkin.pixel} scale={2.8} />
              <span className="mt-1 block font-mono text-[11px] text-slate-500">轨道计算</span>
            </div>
            <div>
              <PixelSprite label="螺旋" frames={helix} palette={activeSkin.pixel} scale={2.8} />
              <span className="mt-1 block font-mono text-[11px] text-slate-500">DNA双螺旋</span>
            </div>
            <div>
              <PixelSprite label="灯塔" frames={beacon} palette={activeSkin.pixel} scale={2.8} />
              <span className="mt-1 block font-mono text-[11px] text-slate-500">地标光柱</span>
            </div>
          </div>

          {/* 实时换肤选择器 */}
          <div className="mt-2 flex flex-wrap gap-2 border-t border-slate-200 pt-3">
            {LIGHT_SKINS.slice(0, 6).map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveSkin(s)}
                className={`cursor-pointer rounded-lg px-2.5 py-1 font-mono text-xs transition-all ${
                  activeSkin.id === s.id
                    ? "scale-105 bg-[#0066ff] font-black text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
