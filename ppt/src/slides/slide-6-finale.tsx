import { Check, Copy, Repeat, ShieldQuestion, Sparkles, Trophy } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress";
import { getSkin, isDarkSkin, skinStyleVars, type ScenarioSkin } from "@/lib/scenario-skin";

import { useMockGame } from "../mock/game-state";
import { MOCK_FINALE } from "../mock/preset-data";
import { ASSETS } from "../assets";

const COMPLETE_ARTICLE = `> 谢邀。人在南口双堡关外，刚摘下结满白霜的防毒面具。看着身后三百万同胞在零下四十三度冰原上点亮的连天篝火，我知道，人类文明没有死在这次冰河时代。

【一、绝境封关与三百万命门】
许多人以为冰河时代到来，最致命的是极寒气温。其实不是，最致命的是‘关门’。当暴雪封死北纬四十度，当南方的粮仓和城墙冷冰冰地闭闸，三百万从黑土地南撤的同胞在冰封江面上排成了望不到头的长队。前是重机枪与封关公文，后是每小时逼近两公里的极寒暴风雪。
双堡关前的雪是黑色的，混杂着柴油烟尘与冻土粉末。燕崇山的重机枪就在关墙上架着，黑洞洞的枪口直指冰面。黄满仓三十万石陈粮要价万金，桂香抱着发热的婴儿跪在辕门之外。那时军垦联军弹药库里只剩一万发枪弹，粮秣仅够全营七日稀粥。所有人都以为，这一场大雪终将以三百万人的绝望火并收场。

【二、廷争僵局与绝境倒计时】
就在议事厅僵持不下的深夜，国家极地气象观测站沈寒山带回了绝密通牒：极端寒潮提前二十三天到来，夜间最低温即将跌破零下五十五度！常规通关与借道谈判彻底破产，留给三百万人的时间只有七天。
“你闭关死守不是守土，是替暴风雪屠杀三百万同胞！”“军令如山，州城粮库仅够三月，大门一开，全州陪葬！”关楼内的咆哮震落屋檐冰棱。常规路线已是全盘死局。

【三、天命破壁·凿冰为渠的惊天狂想】
那一晚，我们当众撕碎了向南方乞和的请愿书，拔刀断冰，定下了‘天命破壁’之策：不叩关，不乞粮！既然天冻不住人的路，冰封千里，那就把冰原演变成千里通衢，走出一条不用叩关的天下！
动员三百万军民，利用零下四十度极寒冰层的超强硬度，以拆卸的铁轨为骨架垫底、引封冻运河为平整路基，浇水凝冰修筑一条自北纬四十三度直抵江南暖带的‘冰上长城’！

【四、三万里狂奔与终局存续】
那是人类工业史与群体生存意志最壮烈的一幕：图雅的两万头驯鹿雪橇组成无休止的穿梭传送带，五万军垦退伍老兵带头三班倒破冰凿渠，以雪水凝冰浇筑出一条宽逾百米的千里通衢。
队伍避开了设伏雷场的双堡关，绕过盘剥的粮行，借着化冻前仅存的极寒冻土窗口，犹如银龙破雪，浩浩荡荡跨过了北纬三十度暖带防线！

【尾声 · 文明在冰原上重生】
当南迁大军先锋部队在长江以南重新见到未被完全冰封的江水时，整整三百万人口，最终生还率高达 92.4%。
知府卫长庚站在空无一人的关楼上长叹，燕崇山的机枪终究没能射出一发阻拦同胞的子弹。三百万人的足迹在冰原上踏出的不仅是一条活路，更是一份文明在绝境中重造天下的壮丽答卷。

—— 知乎特邀答主 · 赵泠 / 执政亲历者联合推演（全卷完）`;

export function Slide6Finale({ skin: _defaultSkin }: { skin: ScenarioSkin }) {
  const { copiedToast, triggerCopyToast, selectedPlayer } = useMockGame();
  const skin = getSkin("apocalypse");

  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 哗啦啦自动快速流式输出：每 16ms 吐出 18-24 个字，无需任何点击，瀑布般涌现
  useEffect(() => {
    setDisplayedText("");
    setIsTyping(true);

    let currentIndex = 0;
    const step = 20; // 极速瀑布流式
    const timer = setInterval(() => {
      currentIndex += step;
      if (currentIndex >= COMPLETE_ARTICLE.length) {
        setDisplayedText(COMPLETE_ARTICLE);
        setIsTyping(false);
        clearInterval(timer);
      } else {
        setDisplayedText(COMPLETE_ARTICLE.slice(0, currentIndex));
      }

      // 自动跟随流式滚动至底部
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  const replayStreaming = () => {
    setDisplayedText("");
    setIsTyping(true);
    let currentIndex = 0;
    const step = 20;
    const timer = setInterval(() => {
      currentIndex += step;
      if (currentIndex >= COMPLETE_ARTICLE.length) {
        setDisplayedText(COMPLETE_ARTICLE);
        setIsTyping(false);
        clearInterval(timer);
      } else {
        setDisplayedText(COMPLETE_ARTICLE.slice(0, currentIndex));
      }
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    }, 16);
  };

  return (
    <main
      style={skinStyleVars(skin)}
      className={`bg-background text-foreground relative flex size-full h-screen flex-col justify-between overflow-hidden select-none ${
        isDarkSkin(skin) ? "dark" : ""
      }`}
    >
      {/* 🏆 终章结算 Header 栏：16:9 紧凑适配 */}
      <section className="shrink-0 border-b border-white/10 bg-[#26201d]/70 px-4 py-1.5 sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <Badge className="bg-[#e2622c] font-mono text-[10px] text-black font-bold">终章结算</Badge>
            <Badge variant="outline" className="border-orange-500/40 text-[10px] text-orange-300">
              <Trophy className="size-2.5 text-[#e2622c] mr-1" />
              天命破壁 · 逆命结局
            </Badge>
            <Badge variant="secondary" className="bg-orange-950/60 text-[10px] text-orange-300 font-bold">
              终局评级 S+ 级
            </Badge>
            <span className="text-xs font-black text-slate-100 sm:text-sm">
              【天命破壁 · 踏碎严冬三万里】
            </span>
            <span className="hidden sm:inline text-[11px] text-slate-400">
              · 你扮演【{selectedPlayer.name} · {selectedPlayer.identity.split("·")[0]}】历经 3 回合廷争与凿冰决断
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2 font-mono text-[10px] text-slate-400">
              <span>原帖赞同: 7.7w+</span>
              <span>·</span>
              <span>讨论: 1,480 条</span>
            </div>
            <Button
              size="xs"
              onClick={triggerCopyToast}
              className={`h-7.5 gap-1.5 px-3 text-xs font-bold transition-all shadow-xs ${
                copiedToast
                  ? "bg-emerald-600 text-white"
                  : "bg-[#e2622c] text-black hover:bg-orange-500"
              }`}
            >
              {copiedToast ? (
                <>
                  <Check className="size-3.5" />
                  已复制知乎长回答！
                </>
              ) : (
                <>
                  <Copy className="size-3.5" />
                  一键复制发回知乎原帖
                </>
              )}
            </Button>
          </div>
        </div>
      </section>

      {/* 📜 核心推演内容：左侧 知乎体深度长文回答 + 右侧 终局世界数据卡 (16:9 比例) */}
      <section className="mx-auto w-full max-w-7xl flex-1 px-4 py-2 sm:px-6 sm:py-2.5 overflow-hidden">
        <div className="grid h-full grid-cols-1 gap-3 lg:grid-cols-12 lg:gap-4">
          {/* 左侧：知乎专栏长文回答卡片 (占 8 列) */}
          <Card className="flex flex-col justify-between border-white/15 bg-[#26201d]/95 p-3.5 shadow-md lg:col-span-8 h-full overflow-hidden">
            <CardHeader className="gap-2 border-b border-white/10 p-0 pb-2 shrink-0">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 rounded-full bg-orange-950/60 px-2.5 py-0.5 font-mono text-[11px] font-bold text-orange-400 border border-orange-500/30">
                    <img src={ASSETS.zhihuSvg} alt="知乎" className="size-3.5 rounded-xs" />
                    知乎脑洞推演专栏
                  </span>
                  <span className="text-xs text-slate-400">· 深度亲历长文回答</span>
                </div>
                <div className="flex items-center gap-2">
                  {isTyping ? (
                    <span className="flex items-center gap-1.5 font-mono text-xs text-orange-400 font-bold animate-pulse">
                      <Sparkles className="size-3.5 text-[#e2622c]" />
                      DeepSeek V4.1 正在高速生成...
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 font-mono text-xs text-emerald-400 font-bold">
                      <Check className="size-3.5" />
                      全文已铸成 · 12,850 字
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={replayStreaming}
                    title="重新播放流式生成"
                    className="flex size-6 items-center justify-center rounded bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white transition-all cursor-pointer"
                  >
                    <Repeat className="size-3" />
                  </button>
                </div>
              </div>

              {/* 答主信息条 */}
              <div className="flex items-center justify-between rounded-lg border border-white/10 bg-black/30 px-3 py-1.5">
                <div className="flex items-center gap-2.5">
                  <div className="flex size-7 items-center justify-center rounded-full bg-[#e2622c] font-bold text-black text-xs">
                    赵
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm font-black text-slate-100">赵泠</span>
                      <span className="text-xs text-slate-400">(知乎特邀答主) /</span>
                      <span className="text-xs sm:text-sm font-bold text-orange-300">{selectedPlayer.name}</span>
                      <Badge variant="outline" className="border-orange-500/40 text-[10px] text-orange-300">
                        当事亲历视角
                      </Badge>
                    </div>
                  </div>
                </div>
                <Badge className="bg-emerald-950 border border-emerald-500/40 text-[10px] font-mono text-emerald-400">
                  S+ 破局定鼎
                </Badge>
              </div>
            </CardHeader>

            {/* 正文区域：大字号长文，哗啦啦全自动流式滚动 */}
            <CardContent className="p-0 pt-2.5 flex-1 flex flex-col justify-between overflow-hidden">
              <div
                ref={scrollRef}
                className="font-serif leading-relaxed whitespace-pre-line text-slate-100 text-sm sm:text-base md:text-[17px] bg-black/50 rounded-xl p-4 border border-white/10 flex-1 overflow-y-auto shadow-inner select-text"
              >
                {displayedText}
                {isTyping && (
                  <span className="inline-block w-2 h-5 ml-1 bg-[#e2622c] animate-pulse align-middle" />
                )}
              </div>
            </CardContent>
          </Card>

          {/* 右侧：世界终局数据卡与社区飞轮 (占 4 列) */}
          <div className="flex flex-col justify-between gap-2.5 lg:col-span-4 h-full overflow-hidden">
            {/* 世界终局数据卡 */}
            <Card className="border-white/15 bg-[#26201d]/95 p-3.5 shadow-xs shrink-0">
              <CardHeader className="border-b border-white/10 p-0 pb-2">
                <CardTitle className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-100">
                  <span>极寒终局存续数据卡</span>
                  <span className="font-mono text-xs font-bold text-emerald-400">文明存续 92.4%</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2.5 p-0 pt-2.5">
                {[
                  { label: "族群存续", val: MOCK_FINALE.metricsSummary.morale },
                  { label: "秩序稳定", val: MOCK_FINALE.metricsSummary.stability },
                  { label: "民众支持", val: MOCK_FINALE.metricsSummary.support },
                  { label: "战略资源", val: MOCK_FINALE.metricsSummary.resources },
                ].map((item) => (
                  <Progress key={item.label} value={item.val}>
                    <ProgressLabel className="text-xs font-medium text-slate-300">
                      {item.label}
                    </ProgressLabel>
                    <ProgressValue className="font-mono text-xs font-bold text-orange-400">
                      {() => item.val}
                    </ProgressValue>
                  </Progress>
                ))}
              </CardContent>
            </Card>

            {/* 私密目标达成判定卡 */}
            <Card className="border-white/15 bg-[#26201d]/95 p-3 shadow-xs shrink-0">
              <CardHeader className="p-0 pb-1.5">
                <CardTitle className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-200">
                  <ShieldQuestion className="size-4 text-[#e2622c]" />
                  <span>私密目标判定：圆满达成</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-xs leading-relaxed text-slate-300">
                <p className="text-orange-200 font-bold">“三百万同胞一个都不能扔在冰原上”</p>
                <p className="mt-1 text-slate-400 text-xs">
                  以冰上长城绕开防守雷场，护送三百万军民横贯千里直下暖带，开辟极寒自救通衢。
                </p>
              </CardContent>
            </Card>

            {/* 社区飞轮卡 */}
            <div className="rounded-xl border border-orange-500/30 bg-orange-950/40 p-3 text-xs text-slate-300 shrink-0">
              <div className="flex items-center gap-1.5 font-bold text-orange-400 text-xs sm:text-sm">
                <Repeat className="size-4" />
                <span>结算即内容社区飞轮</span>
              </div>
              <p className="mt-1 text-slate-300 text-xs leading-relaxed">
                一次沙盘推演，天然产出一篇严守知乎体感的万字亲历长回答，一键发回知乎原帖引爆社区讨论！
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 底部确认栏 */}
      <footer className="relative z-30 shrink-0 border-t border-white/10 bg-black/60 px-4 py-2 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <Trophy className="size-4 text-orange-400" />
            <span className="text-slate-400">推演全流程闭幕：</span>
            <strong className="text-slate-100">
              完成从知乎问题到沙盘推演再到知乎长回答的完整闭环
            </strong>
          </div>
          <span className="font-mono text-[11px] font-bold text-orange-400">
            下一幕：底层工程攻坚 (Architecture) ➔ (按空格键或右方向键)
          </span>
        </div>
      </footer>
    </main>
  );
}
