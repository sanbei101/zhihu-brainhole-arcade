import { Eye, Sparkles, User } from "lucide-react";
import { useState } from "react";

import { PixelSprite } from "@/components/pixel/pixel-sprite";
import { portraitFor, type PortraitMotion } from "@/components/pixel/portraits";
import { ThemeScene } from "@/components/pixel/theme-scene";
import type { ScenarioSkin } from "@/lib/scenario-skin";

import { ASSETS } from "../assets";
import { LIGHT_SKINS } from "../theme";

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
    <div className="relative flex size-full flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-white/80 bg-white/80 p-6 text-slate-900 shadow-2xl backdrop-blur-md sm:rounded-3xl sm:p-10 lg:p-12">
      {/* 顶部标题 */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-[#0066ff] uppercase sm:text-sm">
          <span>[现场交互演示舱 · 资产与算法验算]</span>
        </div>
        <h2 className="text-3xl leading-tight font-black text-slate-900 sm:text-4xl lg:text-5xl">
          现场沙盘演练：全套程序化资产与刘看山动图互动
        </h2>
        <p className="text-sm text-slate-600 sm:text-lg">
          评委可现场点击切换 10 大平行世界皮肤、不同角色性格立绘，亲身体验毫秒级渲染与情绪律动。
        </p>
      </div>

      {/* 核心双沙盘演示区 */}
      <div className="my-auto grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* 左侧：大号像素舞台与角色控制器（7列） */}
        <div className="flex flex-col justify-between space-y-4 rounded-2xl border-2 border-blue-200 bg-white/95 p-6 shadow-xl backdrop-blur-2xl lg:col-span-7">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <span className="flex items-center gap-2 font-mono text-sm font-black text-slate-900 sm:text-base">
              <Eye className="size-4 text-[#0066ff]" />
              <span>程序化议事厅舞台 (Live Stage View)</span>
            </span>
            <button
              type="button"
              onClick={() => setIsTalking(!isTalking)}
              className="cursor-pointer rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#0066ff] shadow-xs transition-colors hover:bg-blue-100"
            >
              律动状态: {isTalking ? "即席交锋 (Talk) 🗣️" : "平息待命 (Idle) 🤫"}
            </button>
          </div>

          {/* 舞台背景与当前大号角色 */}
          <div className="relative flex h-56 flex-col justify-end overflow-hidden rounded-xl border border-slate-300 bg-slate-50 shadow-inner">
            <div className="absolute inset-0">
              <ThemeScene skin={activeSkin} variant="strip" className="size-full" />
            </div>

            {/* 角色与台词气泡 */}
            <div className="relative z-10 flex items-end justify-between px-8 pb-3">
              <div className="flex items-end gap-5">
                <div
                  className={`drop-shadow-md transition-all duration-300 ${
                    isTalking
                      ? "animate-[portrait-talk_1.05s_ease-in-out_infinite]"
                      : "animate-[portrait-idle_3.2s_ease-in-out_infinite]"
                  }`}
                >
                  <PixelSprite
                    label={curChar.name}
                    frames={portrait.frames}
                    palette={portrait.palette}
                    scale={5.8}
                  />
                </div>
                <div className="mb-3 max-w-sm rounded-2xl border-2 border-slate-300 bg-white/95 p-3.5 text-slate-900 shadow-xl backdrop-blur-xl">
                  <div className="font-mono text-xs font-bold text-[#0066ff]">
                    {curChar.name} · {curChar.identity}
                  </div>
                  <div className="mt-1 text-sm leading-snug font-black text-slate-900 sm:text-base">
                    “{curChar.quote}”
                  </div>
                </div>
              </div>

              <div className="mb-3 space-y-0.5 rounded-xl border border-slate-200 bg-white/90 px-3 py-1.5 text-right font-mono text-xs text-slate-600 shadow-xs">
                <div className="font-bold text-emerald-700">FPS: 60 (Locked)</div>
                <div>DOM: 1 Path / Color</div>
              </div>
            </div>
          </div>

          {/* 角色切换按钮组：大号按钮 */}
          <div>
            <div className="mb-2 flex items-center gap-1.5 font-mono text-xs font-bold text-slate-600 sm:text-sm">
              <User className="size-4 text-[#0066ff]" />
              <span>选择推演角色原型 (Archetype):</span>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {CHARACTERS.map((char, index) => (
                <button
                  key={char.id}
                  type="button"
                  onClick={() => setSelectedCharIndex(index)}
                  className={`cursor-pointer rounded-xl border-2 p-3 text-left transition-all ${
                    selectedCharIndex === index
                      ? "scale-102 border-[#0066ff] bg-blue-50 text-[#0066ff] shadow-md"
                      : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <div className="text-sm font-black sm:text-base">{char.name}</div>
                  <div className="mt-0.5 truncate text-xs text-slate-500">{char.identity}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 右侧：刘看山动图互动与 10 大平行世界换肤（5列） */}
        <div className="flex flex-col justify-between space-y-4 rounded-2xl border-2 border-slate-200 bg-white/95 p-6 shadow-xl backdrop-blur-2xl lg:col-span-5">
          {/* 知乎刘看山动图切换 */}
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <span className="flex items-center gap-2 font-mono text-sm font-black text-slate-900 sm:text-base">
                <Sparkles className="size-4 text-[#0066ff]" />
                <span>知乎吉祥物 · 刘看山</span>
              </span>
              <span className="font-mono text-xs font-bold text-[#0066ff]">点击动作切换</span>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-xs">
              <div className="size-20 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white p-1.5 shadow-xs sm:size-24">
                <img
                  src={curKanshan.file}
                  alt={curKanshan.name}
                  className="size-full object-contain"
                />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-base font-black text-slate-900">
                  <span>{curKanshan.name}</span>
                  <span className="rounded-full border border-blue-200 bg-blue-100 px-2 py-0.5 font-mono text-xs font-bold text-[#0066ff]">
                    Official Asset
                  </span>
                </div>
                <p className="text-xs leading-relaxed font-medium text-slate-600 sm:text-sm">
                  {curKanshan.desc}
                </p>
              </div>
            </div>

            <div className="flex scrollbar-none gap-2 overflow-x-auto pb-1">
              {KANSHAN_LIST.map((k, idx) => (
                <button
                  key={k.id}
                  type="button"
                  onClick={() => setKanshanIndex(idx)}
                  className={`shrink-0 cursor-pointer rounded-lg px-3 py-1.5 font-mono text-xs font-bold transition-all ${
                    kanshanIndex === idx
                      ? "scale-105 bg-[#0066ff] text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  {k.name}
                </button>
              ))}
            </div>
          </div>

          {/* 10 大平行世界皮肤矩阵：大按钮 */}
          <div className="border-t border-slate-200 pt-3">
            <div className="mb-2.5 flex items-center justify-between font-mono text-xs font-bold text-slate-600 sm:text-sm">
              <span>平行世界动态换肤:</span>
              <span className="text-[#0066ff]">
                {activeSkin.name} ({activeSkin.mood})
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {LIGHT_SKINS.slice(0, 8).map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveSkin(s)}
                  className={`flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-2 text-left text-xs shadow-xs transition-all sm:text-sm ${
                    activeSkin.id === s.id
                      ? "scale-102 border-[#0066ff] bg-blue-50 font-black text-[#0066ff] shadow-xs"
                      : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <span
                    className="size-2.5 shrink-0 rounded-full shadow-xs ring-1 ring-black/10"
                    style={{ backgroundColor: s.accent }}
                  />
                  <span className="truncate font-medium">{s.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 底部架构说明 */}
      <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-6 py-3 text-xs text-slate-600 shadow-xs sm:text-sm">
        <span>
          全套生成器均为<strong>纯函数无随机数设计</strong>，完全杜绝客户端与服务端水合不一致。
        </span>
        <span className="font-mono text-sm font-bold text-emerald-700">
          100% Deterministic Code
        </span>
      </div>
    </div>
  );
}
