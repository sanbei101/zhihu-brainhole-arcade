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
    <div className="relative flex size-full max-h-full scrollbar-none flex-col justify-between gap-3 overflow-y-auto rounded-2xl border border-white/80 bg-white/80 p-4 text-slate-900 shadow-2xl backdrop-blur-md sm:gap-5 sm:rounded-3xl sm:p-6 lg:p-8">
      {/* 顶部标题 */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-[#0066ff] uppercase sm:text-sm">
          <span>[前端图形与渲染架构]</span>
        </div>
        <h2 className="text-2xl leading-tight font-black text-slate-900 sm:text-3xl lg:text-4xl">
          程序化像素渲染引擎 × 10 大平行宇宙动态换肤
        </h2>
        <div className="flex flex-wrap items-center gap-2 pt-0.5 sm:gap-3">
          <span className="rounded-lg border border-blue-200 bg-blue-50 px-2.5 py-1 font-mono text-xs font-black text-[#0066ff]">
            ⚡ DOM 节点合并 -85%
          </span>
          <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-2.5 py-1 font-mono text-xs font-black text-emerald-700">
            ⚡ 60fps 极限锁定
          </span>
          <span className="rounded-lg border border-purple-200 bg-purple-50 px-2.5 py-1 font-mono text-xs font-black text-purple-700">
            ⚡ 0 外部图片依赖
          </span>
          <span className="rounded-lg border border-amber-200 bg-amber-50 px-2.5 py-1 font-mono text-xs font-black text-amber-700">
            ⚡ 10 大平行宇宙秒级换肤
          </span>
        </div>
      </div>

      {/* 核心亮点矩阵 */}
      <div className="my-auto grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-6">
        {/* 左侧说明（7列） */}
        <div className="space-y-3 sm:space-y-4 lg:col-span-7">
          {/* 1：SVG 路径合并算法 */}
          <div className="space-y-2 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:p-5">
            <div className="flex items-center gap-2 text-base font-black text-[#0066ff] sm:text-lg">
              <Zap className="size-5 shrink-0 text-[#0066ff]" />
              <span>01. SVG 路径合并算法 (Path Merging Optimization)</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
              传统点阵使用成百上千个{" "}
              <code className="rounded border border-slate-200 bg-slate-100 px-1 py-0.5 font-mono text-xs text-[#0066ff]">
                &lt;rect&gt;
              </code>{" "}
              元素，DOM 树过深极易引发重绘掉帧。本项目自研{" "}
              <code className="rounded border border-slate-200 bg-slate-100 px-1 py-0.5 font-mono text-xs text-[#0066ff]">
                frameToPaths
              </code>{" "}
              算法，将单帧同色像素批量合并为单条路径定义，DOM 节点数量缩减 85%，锁死 60fps
              稳定帧率。
            </p>
          </div>

          {/* 2：角色情绪微律动系统 */}
          <div className="space-y-2 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:p-5">
            <div className="flex items-center gap-2 text-base font-black text-amber-700 sm:text-lg">
              <Eye className="size-5 shrink-0 text-amber-600" />
              <span>02. 情绪驱动程序化微律动 (Procedural Motion)</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
              按躯干、头冠、面容与手持物等部件模块化拼接，支持
              Scribe（抚须沉思）、Guard（持戈戒备）、Plead（急迫进言）等 6
              种动作节拍，随发言情绪自适应调节呼吸与放大节奏。
            </p>
          </div>

          {/* 3：10 大平行宇宙语义化皮肤 */}
          <div className="space-y-2 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-base font-black text-emerald-700 sm:text-lg">
                <Palette className="size-5 shrink-0 text-emerald-600" />
                <span>03. 语义化 Design Tokens (Zero-CSS Overhead)</span>
              </div>
              <span className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-0.5 font-mono text-xs text-slate-500">
                右侧可现场切换
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
              通过统一的 CSS 变量语义系统（
              <code className="font-mono text-xs text-emerald-700">
                bg, surface, ink, accent, pixel
              </code>
              ），一处切换即可在三国水墨、秦汉玄黑到赛博深空等 10 套世界线皮肤间实现瞬时重绘。
            </p>
          </div>
        </div>

        {/* 右侧互动体验舱（5列） */}
        <div className="flex flex-col justify-between rounded-2xl border-2 border-blue-200 bg-white/95 p-4 shadow-xl backdrop-blur-2xl sm:p-5 lg:col-span-5">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="size-2.5 animate-pulse rounded-full bg-emerald-500" />
              <span className="font-mono text-xs font-black text-slate-900 sm:text-sm">
                LIVE PIXEL ENGINE
              </span>
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
          <div className="my-3 flex items-end justify-around rounded-xl border border-slate-200 bg-slate-50/90 py-4 sm:py-5">
            {/* 文臣 */}
            <div className="text-center">
              <div
                className={`transition-transform duration-300 ${isTalking ? "animate-[portrait-scribe-talk_1.1s_ease-in-out_infinite]" : "animate-[portrait-scribe_4.2s_ease-in-out_infinite]"}`}
              >
                <PixelSprite
                  label="文臣立绘"
                  frames={ministerPortrait.frames}
                  palette={ministerPortrait.palette}
                  scale={4.2}
                />
              </div>
              <span className="mt-1.5 block font-mono text-xs font-bold text-slate-700">
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
                  scale={4.2}
                />
              </div>
              <span className="mt-1.5 block font-mono text-xs font-bold text-amber-700">
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
                  scale={4.2}
                />
              </div>
              <span className="mt-1.5 block font-mono text-xs font-bold text-[#0066ff]">
                军师 · 诸葛亮
              </span>
            </div>
          </div>

          {/* 程序化数学天体展示 */}
          <div className="flex items-center justify-around border-t border-slate-200 py-1.5 text-center">
            <div>
              <PixelSprite label="轨道" frames={orb} palette={activeSkin.pixel} scale={2.2} />
              <span className="mt-0.5 block font-mono text-[10px] text-slate-500 sm:text-[11px]">
                轨道计算
              </span>
            </div>
            <div>
              <PixelSprite label="螺旋" frames={helix} palette={activeSkin.pixel} scale={2.2} />
              <span className="mt-0.5 block font-mono text-[10px] text-slate-500 sm:text-[11px]">
                DNA双螺旋
              </span>
            </div>
            <div>
              <PixelSprite label="灯塔" frames={beacon} palette={activeSkin.pixel} scale={2.2} />
              <span className="mt-0.5 block font-mono text-[10px] text-slate-500 sm:text-[11px]">
                地标光柱
              </span>
            </div>
          </div>

          {/* 实时换肤选择器 */}
          <div className="mt-1 flex flex-wrap gap-1.5 border-t border-slate-200 pt-2 sm:gap-2 sm:pt-2.5">
            {LIGHT_SKINS.slice(0, 6).map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveSkin(s)}
                className={`cursor-pointer rounded-lg px-2 py-0.5 font-mono text-xs transition-all sm:px-2.5 sm:py-1 ${
                  activeSkin.id === s.id
                    ? "scale-105 bg-[#0066ff] font-black text-white shadow-xs"
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
