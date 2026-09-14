import { WorldFinaleView } from "@/components/world-finale";
import { SCENARIO_THEMES, findScenario } from "@/lib/scenario-library";
import { getSkin, isDarkSkin, skinStyleVars } from "@/lib/scenario-skin";

interface FinalePageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return SCENARIO_THEMES.flatMap((theme) => theme.scenarios.map(({ id }) => ({ id })));
}

export default async function FinalePage({ params }: FinalePageProps) {
  const { id } = await params;
  const skin = getSkin(findScenario(id)?.theme.id);

  return (
    <main
      style={skinStyleVars(skin)}
      className={`bg-background text-foreground min-h-screen ${isDarkSkin(skin) ? "dark" : ""}`}
    >
      <section className="mx-auto max-w-7xl px-4 py-5 sm:px-8 sm:py-7">
        <WorldFinaleView worldId={id} />
      </section>
    </main>
  );
}
