import type { ScenarioSkin } from "@/lib/scenario-skin";
import { SCENARIO_SKINS } from "@/lib/scenario-skin";

/**
 * 知乎经典亮色官方皮肤 (Zhihu Official Light Skin)
 * 专为答辩演讲设计：高对比度、纯净明亮、护眼、清晰可读
 */
export const ZHIHU_LIGHT_SKIN: ScenarioSkin = {
  id: "zhihu-light",
  name: "知乎经典",
  mood: "青蓝破晓",
  bg: "#f1f5f9",
  surface: "#ffffff",
  raised: "#e2e8f0",
  ink: "#0f172a",
  inkSoft: "#475569",
  accent: "#0066ff",
  accentInk: "#ffffff",
  accentSoft: "#dbeafe",
  border: "#cbd5e1",
  pixel: { o: "#475569", x: "#0066ff", y: "#38bdf8", e: "#f59e0b" },
};

/**
 * 亮色系世界线皮肤矩阵 (Light Themes Palette)
 */
export const LIGHT_SKINS: ScenarioSkin[] = [
  ZHIHU_LIGHT_SKIN,
  SCENARIO_SKINS[3], // tang-song-ming (青绿山水)
  SCENARIO_SKINS[1], // three-kingdoms (水墨青灰)
  ...SCENARIO_SKINS.filter((s) => s.id !== "tang-song-ming" && s.id !== "three-kingdoms"),
];
