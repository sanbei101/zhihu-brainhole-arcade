import { WorldCouncilSession } from "@/components/world-council/session";
import { findScenario } from "@/lib/scenario-library";
import { getSkin, isDarkSkin, skinStyleVars } from "@/lib/scenario-skin";

interface CouncilPageProps {
  params: Promise<{ id: string }>;
}

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
