import type { ReactNode } from "react";

import type { ScenarioSkin } from "@/lib/scenario-skin";

export interface SlideData {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  category: string;
  notes: string[];
  component: (props: { skin: ScenarioSkin; active: boolean }) => ReactNode;
}
