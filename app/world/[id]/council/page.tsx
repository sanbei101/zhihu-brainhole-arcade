import { WorldCouncilSession } from "@/components/world-council/session";
import { findScenario } from "@/lib/scenario-library";
import { getSkin, isDarkSkin, skinStyleVars } from "@/lib/scenario-skin";

interface CouncilPageProps {
  params: Promise<{ id: string }>;
}

/**
 * 这里刻意不做静态预渲染(不要补回 generateStaticParams)。
 * 本页的选项生成与回合判定走 Server Action,而 Server Action 是以 POST 打回
 * 当前页面 URL 的;EdgeOne Pages 对构建期预渲染的静态路径「静态优先」,会把那份
 * HTML 直接返回、请求进不到函数,线上必然报「选项生成失败」。
 * 保持动态渲染,让该路径不产出静态文件,action 才能正常落到函数。
 */
export const dynamic = "force-dynamic";

export default async function CouncilPage({ params }: CouncilPageProps) {
  const { id } = await params;
  const skin = getSkin(findScenario(id)?.theme.id);

  return (
    <main
      style={skinStyleVars(skin)}
      className={`bg-background text-foreground min-h-screen overflow-x-hidden ${isDarkSkin(skin) ? "dark" : ""}`}
    >
      <section className="mx-auto max-w-7xl px-3 py-4 sm:px-8 sm:py-7">
        <WorldCouncilSession worldId={id} skin={skin} />
      </section>
    </main>
  );
}
