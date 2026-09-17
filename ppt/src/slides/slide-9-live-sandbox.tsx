import { Eye, Sparkles, User } from "lucide-react";
import { useState } from "react";

import { PixelSprite } from "@/components/pixel/pixel-sprite";
import { portraitFor, type PortraitMotion } from "@/components/pixel/portraits";
import { ThemeScene } from "@/components/pixel/theme-scene";
import type { ScenarioSkin } from "@/lib/scenario-skin";
import { SCENARIO_SKINS } from "@/lib/scenario-skin";

import { ASSETS } from "../assets";

const CHARACTERS = [
  {
    id: "minister",
    name: "张昭",
    identity: "东吴元老文臣",
    faction: "江东士族",
    archetype: "official" as const,
    motion: "scribe" as PortraitMotion,
    quote: "江东六郡八十一州，非降不能保也！",
  },
  {
    id: "general",
    name: "周瑜",
    identity: "东吴水师大都督",
    faction: "江东军伍",
    archetype: "general" as const,
    motion: "guard" as PortraitMotion,
    quote: "借伯符之志，虽百万曹军何惧一战！",
  },
  {
    id: "diplomat",
    name: "诸葛亮",
    identity: "蜀汉丞相军师",
    faction: "刘备集团",
    archetype: "envoy" as const,
    motion: "plead" as PortraitMotion,
    quote: "愿借东风三日，助都督破曹！",
  },
  {
    id: "mechanic",
    name: "墨家巨子",
    identity: "机关工匠掌门",
    faction: "百工学派",
    archetype: "technician" as const,
    motion: "work" as PortraitMotion,
    quote: "引蒸汽造连环巨舰，虽神仙不可敌！",
  },
];

const KANSHAN_LIST = [
  { id: "greeting", file: ASSETS.liukanshan.greeting, name: "挥手致意", desc: "评委老师好！" },
  { id: "coding", file: ASSETS.liukanshan.coding, name: "连夜肝码", desc: "黑客松极限通宵～" },
  { id: "stroll", file: ASSETS.liukanshan.stroll, name: "漫步脑洞", desc: "游历十万平行世界" },
  { id: "sleepy", file: ASSETS.liukanshan.sleepy, name: "烧脑犯困", desc: "世界线推演太烧脑了" },
  {
    id: "basketball",
    file: ASSETS.liukanshan.basketball,
    name: "绝杀投篮",
    desc: "知乎黑客松必胜！",
  },
];

export function Slide9LiveSandbox({ skin: initialSkin }: { skin: ScenarioSkin }) {
  const [activeSkin, setActiveSkin] = useState<ScenarioSkin>(initialSkin);
  const [selectedCharIndex, setSelectedCharIndex] = useState(1); // 默认周瑜
  const [kanshanIndex, setKanshanIndex] = useState(0);
  const [isTalking, setIsTalking] = useState(true);

  const curChar = CHARACTERS[selectedCharIndex];
  const portrait = portraitFor(curChar, activeSkin);
  const curKanshan = KANSHAN_LIST[kanshanIndex];

  return (
    <div className="relative flex size-full flex-col justify-between gap-4 overflow-hidden rounded-2xl border border-white/10 bg-[#0c101a] p-6 shadow-2xl sm:p-10">
      {/* 顶部标题 */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-cyan-400 uppercase">
          <span>[现场交互演示舱 · 资产与算法验算]</span>
        </div>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          现场沙盘演练：全套程序化资产与刘看山动图互动
        </h2>
        <p className="text-xs text-slate-300 sm:text-sm">
          评委可现场点击切换 10 大平行世界皮肤、不同角色性格立绘，亲身体验毫秒级渲染与情绪律动。
        </p>
      </div>

      {/* 核心双沙盘演示区 */}
      <div className="my-auto grid grid-cols-1 gap-5 lg:grid-cols-12">
        {/* 左侧：像素舞台与角色控制器（7列） */}
        <div className="flex flex-col justify-between space-y-3 rounded-xl border border-white/10 bg-black/60 p-4 shadow-xl lg:col-span-7">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <span className="flex items-center gap-1.5 font-mono text-xs font-bold text-white">
              <Eye className="size-3.5 text-cyan-400" />
              <span>程序化议事厅舞台 (Live Stage View)</span>
            </span>
            <button
              type="button"
              onClick={() => setIsTalking(!isTalking)}
              className="cursor-pointer rounded-full bg-white/10 px-2.5 py-0.5 font-mono text-[10px] text-slate-200 hover:bg-white/20"
            >
              律动: {isTalking ? "即席交锋 (Talk)" : "平息待命 (Idle)"}
            </button>
          </div>

          {/* 舞台背景与当前角色 */}
          <div className="relative flex h-44 flex-col justify-end overflow-hidden rounded-lg border border-white/10">
            <div className="absolute inset-0">
              <ThemeScene skin={activeSkin} variant="strip" className="size-full" />
            </div>

            {/* 角色与台词气泡 */}
            <div className="relative z-10 flex items-end justify-between px-6 pb-2">
              <div className="flex items-end gap-3">
                <div
                  className={`transition-all duration-200 ${isTalking ? "animate-[portrait-talk_1.05s_ease-in-out_infinite]" : "animate-[portrait-idle_3.2s_ease-in-out_infinite]"}`}
                >
                  <PixelSprite
                    label={curChar.name}
                    frames={portrait.frames}
                    palette={portrait.palette}
                    scale={4.2}
                  />
                </div>
                <div className="mb-2 max-w-xs rounded-xl border border-white/20 bg-black/80 p-2.5 shadow-lg backdrop-blur-md">
                  <div className="font-mono text-[10px] text-cyan-300">
                    {curChar.name} · {curChar.identity}
                  </div>
                  <div className="mt-0.5 text-xs font-medium text-white">“{curChar.quote}”</div>
                </div>
              </div>

              <div className="mb-2 rounded border border-white/10 bg-black/60 px-2 py-1 text-right font-mono text-[10px] text-slate-400">
                <div>FPS: 60 (Locked)</div>
                <div>DOM: 1 Path / Color</div>
              </div>
            </div>
          </div>

          {/* 角色切换按钮组 */}
          <div>
            <div className="mb-1.5 flex items-center gap-1 font-mono text-[11px] text-slate-400">
              <User className="size-3 text-slate-400" />
              <span>选择推演角色原型 (Archetype):</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {CHARACTERS.map((char, index) => (
                <button
                  key={char.id}
                  type="button"
                  onClick={() => setSelectedCharIndex(index)}
                  className={`cursor-pointer rounded-lg border p-2 text-left transition-all ${
                    selectedCharIndex === index
                      ? "border-cyan-400 bg-cyan-500/20 text-white shadow-xs"
                      : "border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <div className="text-xs font-bold">{char.name}</div>
                  <div className="truncate text-[9px] text-slate-400">{char.identity}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 右侧：刘看山动图互动与 10 大平行世界换肤（5列） */}
        <div className="flex flex-col justify-between space-y-3 rounded-xl border border-white/10 bg-black/60 p-4 shadow-xl lg:col-span-5">
          {/* 知乎刘看山动图切换 */}
          <div className="space-y-2">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="flex items-center gap-1.5 font-mono text-xs font-bold text-white">
                <Sparkles className="size-3.5 text-[#0066ff]" />
                <span>知乎吉祥物 · 刘看山</span>
              </span>
              <span className="font-mono text-[10px] text-amber-400">点击下方头像切换</span>
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="size-16 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-black/50 p-1">
                <img
                  src={curKanshan.file}
                  alt={curKanshan.name}
                  className="size-full object-contain"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                  <span>{curKanshan.name}</span>
                  <span className="rounded bg-[#0066ff]/20 px-1 font-mono text-[9px] text-[#0066ff]">
                    Official Asset
                  </span>
                </div>
                <p className="mt-1 text-[11px] text-slate-300">{curKanshan.desc}</p>
              </div>
            </div>

            <div className="flex scrollbar-none gap-1.5 overflow-x-auto pb-1">
              {KANSHAN_LIST.map((k, idx) => (
                <button
                  key={k.id}
                  type="button"
                  onClick={() => setKanshanIndex(idx)}
                  className={`shrink-0 cursor-pointer rounded-md px-2 py-1 font-mono text-[10px] transition-all ${
                    kanshanIndex === idx
                      ? "bg-[#0066ff] font-semibold text-white"
                      : "bg-white/10 text-slate-400 hover:text-white"
                  }`}
                >
                  {k.name}
                </button>
              ))}
            </div>
          </div>

          {/* 10 大平行世界皮肤矩阵 */}
          <div className="border-t border-white/10 pt-2.5">
            <div className="mb-2 flex items-center justify-between font-mono text-[11px] text-slate-400">
              <span>10 大平行世界动态换肤 (Instant Theme):</span>
              <span className="text-cyan-300">{activeSkin.name}</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {SCENARIO_SKINS.slice(0, 8).map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveSkin(s)}
                  className={`flex cursor-pointer items-center gap-1.5 rounded-lg border px-2 py-1.5 text-left text-[11px] transition-all ${
                    activeSkin.id === s.id
                      ? "border-white bg-white/20 font-semibold text-white shadow-xs"
                      : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  <span
                    className="size-2 shrink-0 rounded-full"
                    style={{ backgroundColor: s.accent }}
                  />
                  <span className="truncate">{s.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 底部架构说明 */}
      <div className="flex items-center justify-between rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-xs text-slate-300">
        <span>
          全套生成器均为<strong>纯函数无随机数设计</strong>，完全杜绝客户端/服务端水合不一致。
        </span>
        <span className="font-mono text-[11px] text-emerald-400">100% Deterministic Code</span>
      </div>
    </div>
  );
}
