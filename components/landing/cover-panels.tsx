import { ArrowUp, ChevronDown } from "lucide-react";
import Link from "next/link";

import { LiuKanshanMascot } from "@/components/landing/liu-kanshan-mascot";
import { spritesForSkin } from "@/components/pixel/sprites";
import {
  StageBackdrop,
  GROUND_LINE,
  StageSprite,
  ThemeStage,
} from "@/components/pixel/theme-stage";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import TextType from "@/components/ui/TextType";
import { SCENARIO_THEMES } from "@/lib/scenario-library";
import { getSkin, isDarkSkin, skinStyleVars } from "@/lib/scenario-skin";
import { cn } from "@/lib/utils";

const BRAND = "知乎脑洞游乐园";

/** 封面巡游:每个主题派一位招牌精灵,带着自己的皮肤配色站成一排 */
const PARADE: Array<{ id: string; height: number }> = [
  { id: "dino", height: 208 },
  { id: "three-kingdoms", height: 176 },
  { id: "cosmic", height: 190 },
  { id: "apocalypse", height: 164 },
  { id: "alien", height: 182 },
];

/**
 * 巡游精灵的高度上限。
 * 首屏大字是垂直居中的,下面那簇小字会一直压到约 440px 处,
 * 所以精灵最多只能用'(视口高 - 440) / 2 - 56'这点空间,矮屏才不会被小字压住。
 */
const PARADE_FIT = "w-auto max-h-[calc((100dvh_-_440px)/2_-_56px)]";

function WorldParade({ active = true }: { active?: boolean }) {
  return (
    <div
      className={`absolute inset-x-0 ${GROUND_LINE} flex items-end justify-between gap-3 px-[6%] sm:px-[9%]`}
      aria-hidden="true"
    >
      {PARADE.map((entry) => {
        const skin = getSkin(entry.id);
        const sprite = spritesForSkin(skin)[0];
        if (!sprite) return null;
        return (
          <StageSprite
            key={entry.id}
            sprite={sprite}
            targetHeight={entry.height}
            fit={PARADE_FIT}
            animated={active}
          />
        );
      })}
    </div>
  );
}

export function CoverPanel({
  onJump,
  active = true,
}: {
  onJump: (index: number) => void;
  active?: boolean;
}) {
  const skin = getSkin(undefined);

  return (
    <section
      id="top"
      style={skinStyleVars(skin)}
      aria-label="知乎脑洞游乐园入口"
      className={`bg-background text-foreground relative h-dvh w-full snap-start snap-always overflow-hidden ${isDarkSkin(skin) ? "dark" : ""}`}
    >
      <div className="absolute inset-0">
        <StageBackdrop skin={skin} />
        <WorldParade active={active} />
      </div>

      <div className="from-background/95 via-background/75 pointer-events-none absolute inset-0 bg-gradient-to-b to-transparent" />

      <div className="relative flex h-full flex-col items-center px-5 pt-14 pb-14 text-center">
        {/* 上簇:贴着大字的上沿,把大字顶到页心 */}
        <div className="flex flex-1 flex-col items-center justify-end gap-2.5">
          <Badge variant="outline" className="font-mono text-[10px] tracking-[0.25em]">
            WORLDLINE ARCADE
          </Badge>
          <p className="max-w-2xl text-base leading-7 font-medium tracking-tight text-balance sm:text-xl">
            一句'如果',值得用<span className="text-primary">一整个世界</span>来回答。
          </p>
          <div className="w-full max-w-lg">
            <LiuKanshanMascot />
          </div>
        </div>

        {/* 页心大字:整页最大的字,打字机逐字敲出来。用 flex 居中,逐字出现时由中间向外长,
            行高由内容决定,不会顶到顶栏也不会挤压上下两簇小字。 */}
        <h1
          aria-label={BRAND}
          className="my-5 flex w-full justify-center text-[clamp(2.4rem,11vw,11rem)] leading-[1.15] font-semibold tracking-tight sm:my-3"
        >
          {/* 光标绝对定位挂在字的右边:不占宽度,居中以七个字为准,不会整体偏左 */}
          <span className="relative">
            <TextType
              text={BRAND}
              as="span"
              loop={false}
              typingSpeed={190}
              initialDelay={420}
              cursorCharacter="▎"
              cursorClassName="absolute top-0 left-full text-primary"
            />
          </span>
        </h1>

        {/* 下簇:贴着大字的下沿 */}
        <div className="flex w-full flex-1 flex-col items-center justify-start gap-3">
          {/* 移动端: 无缝平滑自动轮转跑马灯 */}
          <div className="relative w-full overflow-hidden sm:hidden">
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r to-transparent" />
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l to-transparent" />
            <div className="animate-badge-marquee flex w-max gap-2 py-1 motion-reduce:animate-none">
              {[...SCENARIO_THEMES, ...SCENARIO_THEMES].map((theme, loopIndex) => {
                const themeSkin = getSkin(theme.id);
                const themeIndex = loopIndex % SCENARIO_THEMES.length;
                return (
                  <button
                    key={`${theme.id}-${loopIndex}`}
                    type="button"
                    onClick={() => onJump(themeIndex + 1)}
                    className={cn(buttonVariants({ variant: "outline", size: "xs" }), "shrink-0")}
                  >
                    <span
                      className="size-2 rounded-full"
                      style={{ backgroundColor: themeSkin.accent }}
                      aria-hidden="true"
                    />
                    {themeSkin.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 桌面端 (sm+): 保持整齐居中多行展示 */}
          <div className="hidden gap-2 sm:flex sm:max-w-5xl sm:flex-wrap sm:justify-center">
            {SCENARIO_THEMES.map((theme, index) => {
              const themeSkin = getSkin(theme.id);
              return (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => onJump(index + 1)}
                  className={cn(buttonVariants({ variant: "outline", size: "xs" }), "shrink-0")}
                >
                  <span
                    className="size-2 rounded-full"
                    style={{ backgroundColor: themeSkin.accent }}
                    aria-hidden="true"
                  />
                  {themeSkin.name}
                </button>
              );
            })}
          </div>

          <div className="text-muted-foreground flex flex-col items-center gap-1">
            <span className="font-mono text-[10px] tracking-widest">SCROLL / 向下滑</span>
            <ChevronDown className="size-4 animate-bounce motion-reduce:animate-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function OutroPanel({
  onJump,
  mounted,
  active = true,
}: {
  onJump: (index: number) => void;
  mounted: boolean;
  active?: boolean;
}) {
  const skin = getSkin(undefined);

  return (
    <section
      id="end"
      style={skinStyleVars(skin)}
      aria-label="游园结束"
      className={`bg-background text-foreground relative h-dvh w-full snap-start snap-always overflow-hidden ${isDarkSkin(skin) ? "dark" : ""}`}
    >
      {mounted ? <ThemeStage skin={skin} active={active} /> : null}

      <div className="from-background/95 via-background/75 pointer-events-none absolute inset-0 bg-gradient-to-b to-transparent" />

      <div className="relative flex h-full flex-col items-center justify-center px-5 text-center">
        <Badge variant="outline" className="tracking-[0.2em]">
          本次游园到此
        </Badge>
        <h2 className="mt-4 max-w-2xl text-2xl leading-snug font-semibold tracking-tight sm:text-4xl">
          每一条世界线,
          <br />
          都从一个'如果'开始。
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl text-sm leading-7">
          挑一间副本走进去,剩下的交给议事厅。
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
          <Button onClick={() => onJump(0)}>
            回到入口
            <ArrowUp data-icon="inline-end" />
          </Button>
          <Button
            variant="outline"
            nativeButton={false}
            render={<Link href={`#${SCENARIO_THEMES[0]?.id ?? "top"}`} />}
          >
            从第一间副本开始
          </Button>
        </div>
      </div>

      <footer className="border-border bg-background/70 absolute inset-x-0 bottom-0 border-t backdrop-blur-md">
        <div className="text-muted-foreground mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 text-[11px] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span className="text-foreground font-semibold">知乎脑洞游乐园 / WORLDLINE ARCADE</span>
          <span>题目来自知乎公开问题,推演内容由 AI 生成</span>
        </div>
      </footer>
    </section>
  );
}
