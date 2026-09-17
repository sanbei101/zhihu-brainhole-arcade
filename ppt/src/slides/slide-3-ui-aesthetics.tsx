import { Eye, Palette, Zap } from "lucide-react";
import { useState } from "react";

import { orbFrames, helixFrames, beaconFrames } from "@/components/pixel/generators";
import { PixelSprite } from "@/components/pixel/pixel-sprite";
import { portraitFor } from "@/components/pixel/portraits";
import type { ScenarioSkin } from "@/lib/scenario-skin";
import { SCENARIO_SKINS } from "@/lib/scenario-skin";

export function Slide3UiAesthetics({ skin: initialSkin }: { skin: ScenarioSkin }) {
  const [activeSkin, setActiveSkin] = useState<ScenarioSkin>(initialSkin);
  const [isTalking, setIsTalking] = useState(true);

  // 现场渲染角色立绘 (文臣、武将、谋士、神策)
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
    <div className="relative flex size-full flex-col justify-between gap-4 overflow-hidden rounded-2xl border border-white/10 bg-[#0c101a] p-6 shadow-2xl sm:p-10">
      {/* 顶部标题 */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-[#0066ff] uppercase">
          <span>[设计哲学与工程实现]</span>
        </div>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          纯前端程序化像素引擎 × 10 大平行宇宙动态换肤
        </h2>
        <p className="text-xs text-slate-300 sm:text-sm">
          突破重度游戏美术包袱：以轻量 SVG 路径合并与数学网格算法，实现 0
          图片外链依赖的高清像素动态美学。
        </p>
      </div>

      {/* 核心亮点矩阵 */}
      <div className="my-auto grid grid-cols-1 gap-4 lg:grid-cols-12">
        {/* 左侧说明（7列） */}
        <div className="space-y-3 lg:col-span-7">
          {/* 突破 1：SVG 路径合并算法 */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-sm font-bold text-cyan-300">
              <Zap className="size-4 text-cyan-400" />
              <span>突破 1：SVG 路径合并算法 (Path Merging Optimization)</span>
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
              传统像素组件使用成百上千个{" "}
              <code className="rounded bg-black/50 px-1 py-0.5 font-mono text-[11px] text-cyan-300">
                &lt;rect&gt;
              </code>{" "}
              标签，DOM 树过深导致重绘掉帧。本项目手写{" "}
              <code className="rounded bg-black/50 px-1 py-0.5 font-mono text-[11px] text-cyan-300">
                frameToPaths
              </code>{" "}
              压缩算法，将单帧同色像素点合并为<strong>唯一定义的单条路径</strong>，DOM 节点数量骤降
              85%，实现 60fps 极限丝滑。
            </p>
          </div>

          {/* 突破 2：角色情绪微律动系统 */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-sm font-bold text-amber-300">
              <Eye className="size-4 text-amber-400" />
              <span>突破 2：角色情绪微律动系统 (Procedural Motion)</span>
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
              基于身体躯干、头冠、面容、手持物 5 种独立 Handcrafted 部件动态拼接，提供
              Scribe（抚须沉思）、Guard（持戈警惕）、Plead（急迫进言）等 6
              种微动作，随台词发言实时加快律动与放大，赋予 AI 鲜活体温。
            </p>
          </div>

          {/* 突破 3：10 大平行宇宙语义化皮肤 */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-bold text-emerald-300">
                <Palette className="size-4 text-emerald-400" />
                <span>突破 3：10 大平行宇宙瞬时换肤 (Semantic Tokens)</span>
              </div>
              <span className="font-mono text-[10px] text-slate-400">点击右侧即时体验</span>
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
              通过一套优雅的 CSS 变量语义注入（
              <code className="font-mono text-[11px] text-emerald-300">
                bg, surface, ink, accent, pixel
              </code>
              ），从秦汉玄黑、三国水墨到赛博霓虹，全局组件秒级换肤。
            </p>
          </div>
        </div>

        {/* 右侧互动体验舱（5列）：现场展示立绘与换肤 */}
        <div className="flex flex-col justify-between rounded-xl border border-cyan-500/30 bg-black/60 p-4 shadow-xl lg:col-span-5">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="size-2 animate-pulse rounded-full bg-emerald-400" />
              <span className="font-mono text-xs font-bold text-white">LIVE PIXEL ENGINE</span>
            </div>
            <button
              type="button"
              onClick={() => setIsTalking(!isTalking)}
              className="cursor-pointer rounded-full border border-cyan-500/40 bg-cyan-500/20 px-2.5 py-0.5 text-[10px] font-medium text-cyan-200 hover:bg-cyan-500/30"
            >
              状态: {isTalking ? "正在交锋发言 🗣️" : "闲置屏息沉思 🤫"}
            </button>
          </div>

          {/* 实时活体人物展示 */}
          <div className="my-3 flex items-end justify-center gap-6 rounded-lg border border-white/5 bg-white/5 py-4">
            {/* 文臣 */}
            <div className="text-center">
              <div
                className={`transition-transform duration-300 ${isTalking ? "animate-[portrait-scribe-talk_1.1s_ease-in-out_infinite]" : "animate-[portrait-scribe_4.2s_ease-in-out_infinite]"}`}
              >
                <PixelSprite
                  label="文臣立绘"
                  frames={ministerPortrait.frames}
                  palette={ministerPortrait.palette}
                  scale={3.5}
                />
              </div>
              <span className="mt-2 block font-mono text-[10px] text-slate-300">
                文官 · 抚须进谏
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
                  scale={3.5}
                />
              </div>
              <span className="mt-2 block font-mono text-[10px] text-amber-300">
                武将 · 铁腕拔剑
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
                  scale={3.5}
                />
              </div>
              <span className="mt-2 block font-mono text-[10px] text-cyan-300">
                军师 · 羽扇定策
              </span>
            </div>
          </div>

          {/* 程序化数学天体展示 */}
          <div className="flex items-center justify-around border-t border-white/10 pt-2 text-center">
            <div>
              <PixelSprite label="轨道" frames={orb} palette={activeSkin.pixel} scale={2} />
              <span className="block font-mono text-[9px] text-slate-400">轨道计算</span>
            </div>
            <div>
              <PixelSprite label="螺旋" frames={helix} palette={activeSkin.pixel} scale={2} />
              <span className="block font-mono text-[9px] text-slate-400">DNA双螺旋</span>
            </div>
            <div>
              <PixelSprite label="灯塔" frames={beacon} palette={activeSkin.pixel} scale={2} />
              <span className="block font-mono text-[9px] text-slate-400">地标光柱</span>
            </div>
          </div>

          {/* 实时换肤选择器 */}
          <div className="mt-3 flex flex-wrap gap-1.5 border-t border-white/10 pt-2">
            {SCENARIO_SKINS.slice(0, 6).map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveSkin(s)}
                className={`cursor-pointer rounded px-2 py-0.5 font-mono text-[10px] transition-all ${
                  activeSkin.id === s.id
                    ? "bg-white font-bold text-black"
                    : "bg-white/10 text-slate-400 hover:text-white"
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
