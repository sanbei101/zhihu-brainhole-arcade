import { RefreshCw, Sparkles, UserCheck, UserRound } from "lucide-react";

import { PixelSprite } from "@/components/pixel/pixel-sprite";
import { portraitFor, portraitMotionClass } from "@/components/pixel/portraits";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { ScenarioSkin } from "@/lib/scenario-skin";

import { useMockGame } from "../mock/game-state";
import { type MockPlayerCharacter } from "../mock/preset-data";

export function Slide3Cast({ skin }: { skin: ScenarioSkin }) {
  const { selectedPlayer, setSelectedPlayerId, players, selectedScenario } = useMockGame();

  return (
    <div className="relative flex size-full max-h-full scrollbar-none flex-col justify-between gap-3 overflow-y-auto rounded-2xl border border-white/80 bg-white/90 p-4 text-slate-900 shadow-2xl backdrop-blur-md sm:gap-4 sm:p-6 lg:p-7">
      {/* 顶部标题栏 */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/80 pb-2.5">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold tracking-wider text-[#0066ff] uppercase">
              [第 2 幕 · 势力立局与选角]
            </span>
            <Badge variant="secondary" className="text-[10px]">
              ACT I / OPENING & CAST
            </Badge>
          </div>
          <h2 className="text-xl font-black text-slate-900 sm:text-2xl lg:text-3xl">
            三方视角 × 四路 AI：立场互斥的博弈阵容
          </h2>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold text-[#0066ff]">
          <Sparkles className="size-3.5" />
          <span>点击下方角色卡片即可无缝切换主角身份</span>
        </span>
      </div>

      {/* 核心复刻：原版 WorldCastPanel 左右双栏布局 */}
      <div className="my-auto grid grid-cols-1 items-start gap-4 lg:grid-cols-12 lg:gap-5">
        {/* 左侧 Aside：复刻原版世界线角色召集指引卡 */}
        <aside className="h-full lg:col-span-3">
          <Card className="border-border/80 flex h-full flex-col justify-between bg-white/95 shadow-xs">
            <CardHeader className="p-3.5 sm:p-4">
              <Badge variant="secondary" className="w-fit text-[10px]">
                WORLDLINE / CAST
              </Badge>
              <CardTitle className="pt-1.5 text-base font-bold sm:text-lg">
                世界线推演与角色召集
              </CardTitle>
              <CardDescription className="mt-1 text-xs leading-relaxed">
                推演引擎已就绪，已锁定《{selectedScenario.title}》推演剧本。
              </CardDescription>
            </CardHeader>
            <CardContent className="px-3.5 pb-2">
              <ol className="text-muted-foreground space-y-3 text-xs">
                <li className="flex gap-2">
                  <span className="text-primary font-mono font-bold">01</span>
                  <span>建立危机发生时的时间、地点与局势</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-mono font-bold">02</span>
                  <span>生成权力来源不同的玩家候选角色</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-mono font-bold">03</span>
                  <span>配置由独立 Agent 扮演的利益相关者</span>
                </li>
              </ol>
            </CardContent>
            <CardFooter className="bg-muted/40 flex-col items-stretch gap-2 border-t p-3">
              <Button size="sm" variant="outline" className="w-full text-xs">
                <RefreshCw className="size-3.5" data-icon="inline-start" />
                推演其他分支世界线
              </Button>
            </CardFooter>
          </Card>
        </aside>

        {/* 右侧：原版 ACT I / OPENING 危机横幅 + 选择你的角色 3 张卡片 */}
        <section className="space-y-4 lg:col-span-9">
          {/* 原版开场情境横幅 */}
          <div className="rounded-r-xl border border-l-4 border-[#0066ff] border-slate-200/60 bg-blue-50/40 py-1 pl-4">
            <div className="flex items-center justify-between">
              <p className="font-mono text-xs font-bold text-[#0066ff]">ACT I / OPENING</p>
              <span className="text-muted-foreground font-mono text-[11px]">世界线已确立</span>
            </div>
            <h3 className="mt-1 text-base font-black text-slate-900 sm:text-lg">
              曹操火烧赤壁大胜生擒刘备孙权，押解许昌，天下看似一统，暗流汹涌！
            </h3>
            <p className="text-muted-foreground mt-0.5 font-mono text-xs">
              建安十三年冬十二月 · 荆州赤壁大营与许昌丞相府
            </p>
            <div className="mt-2.5 flex flex-wrap gap-2 text-xs">
              <span className="rounded bg-slate-100 px-2.5 py-1 text-[11px] text-slate-700">
                • 汉献帝仍居许昌，汉家名分仍具极高道义召集力
              </span>
              <span className="rounded bg-slate-100 px-2.5 py-1 text-[11px] text-slate-700">
                • 荆襄江东新附之地军心动荡，水师不可轻动
              </span>
              <span className="rounded bg-slate-100 px-2.5 py-1 text-[11px] text-slate-700">
                • 中原士族对曹氏异姓封王与代汉抱持戒心
              </span>
            </div>
          </div>

          {/* 原版三位玩家候选角色卡片 */}
          <div>
            <div className="mb-2.5 flex items-center gap-2">
              <UserRound className="text-primary size-4" />
              <h4 className="text-sm font-bold text-slate-900">选择你的扮演角色（点击立局）</h4>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              {players.map((character: MockPlayerCharacter) => {
                const isSelected = character.id === selectedPlayer.id;
                const spritePortrait = portraitFor(character, skin);

                return (
                  <Card
                    key={character.id}
                    onClick={() => setSelectedPlayerId(character.id)}
                    className={`cursor-pointer border-2 bg-white/95 shadow-xs transition-all duration-200 ${
                      isSelected
                        ? "border-[#0066ff] bg-blue-50/50 shadow-md ring-2 ring-[#0066ff]/20"
                        : "border-slate-200 hover:border-blue-300"
                    }`}
                  >
                    <CardHeader className="p-3.5 pb-2">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <div className="flex size-8 items-center justify-center rounded-md border border-slate-200 bg-slate-100 p-0.5">
                            <PixelSprite
                              frames={spritePortrait.frames}
                              palette={spritePortrait.palette}
                              label={spritePortrait.label}
                              scale={1.3}
                              className={portraitMotionClass(spritePortrait.motion, false)}
                            />
                          </div>
                          <div>
                            <CardTitle className="text-sm font-black">{character.name}</CardTitle>
                            <CardDescription className="text-[10px]">
                              {character.identity}
                            </CardDescription>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-[10px] whitespace-nowrap">
                          {character.faction}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-2 p-3.5 pt-0 text-xs leading-relaxed">
                      <p className="line-clamp-2 text-[11px] text-slate-600">
                        {character.publicGoal}
                      </p>
                      <Separator />
                      <div>
                        <span className="block text-[10px] text-slate-400">
                          私密动机 (唯你可知):
                        </span>
                        <span className="line-clamp-2 text-[11px] font-medium text-amber-900">
                          {character.privateGoal}
                        </span>
                      </div>
                      <div className="rounded border border-red-100 bg-red-50 p-1.5 text-[10px] text-red-800">
                        <strong>利益红线: </strong>
                        {character.redLine}
                      </div>
                    </CardContent>

                    <CardFooter className="p-3.5 pt-0">
                      <Button
                        variant={isSelected ? "default" : "outline"}
                        size="sm"
                        className="h-7.5 w-full text-xs"
                      >
                        {isSelected ? "已选择此身份" : `扮演 ${character.name}`}
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* 四路利益相关 Agent 预览条 */}
          <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-2.5">
            <div className="mb-1.5 flex items-center justify-between text-xs">
              <span className="font-bold text-slate-800">四位独立 Agent 利益相关者:</span>
              <span className="font-mono text-[10px] text-slate-500">
                程昱(相府法家) · 鲁肃(江东联军) · 孔融(汉室清流) · 曹操(相府最高层)
              </span>
            </div>
          </div>
        </section>
      </div>

      {/* 底部确认栏 */}
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white/95 px-4 py-2 text-xs text-slate-700 shadow-xs sm:text-sm">
        <span className="flex items-center gap-2">
          <UserCheck className="size-4 text-[#0066ff]" />
          <span>已就绪身份：</span>
          <strong className="text-slate-900">
            以【{selectedPlayer.name} · {selectedPlayer.identity}】视角入局执棋
          </strong>
        </span>
        <span className="font-mono text-xs font-bold text-[#0066ff]">
          下一幕：议事厅三栏战局与梯度抉择 ➔ (按空格键或右方向键)
        </span>
      </div>
    </div>
  );
}
