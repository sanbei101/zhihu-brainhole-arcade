import flowAgentsPng from "@/docs/flow/council-agents.png";
import flowOptionsPng from "@/docs/flow/council-options.png";
import flowGalleryPng from "@/docs/flow/step-1-gallery.png";
import flowCastPng from "@/docs/flow/step-2-cast.png";
import flowCouncilPng from "@/docs/flow/step-3-council.png";
import flowFinalePng from "@/docs/flow/step-4-finale.png";
import shotDesktopPng from "@/docs/shot-desktop.png";
import shotMobilePng from "@/docs/shot-mobile.png";
import basketballWebp from "@/public/liukanshan/basketball.webp";
import codingWebp from "@/public/liukanshan/coding.webp";
import greetingWebp from "@/public/liukanshan/greeting.webp";
import sleepyWebp from "@/public/liukanshan/sleepy.webp";
import strollWebp from "@/public/liukanshan/stroll.webp";
import zhihuSvg from "@/public/zhihu.svg";

function toSrc(asset: unknown): string {
  if (typeof asset === "string") return asset;
  if (
    asset &&
    typeof asset === "object" &&
    "src" in asset &&
    typeof (asset as { src: unknown }).src === "string"
  ) {
    return (asset as { src: string }).src;
  }
  return "";
}

export const ASSETS = {
  zhihuSvg: toSrc(zhihuSvg),
  shots: {
    desktop: toSrc(shotDesktopPng),
    mobile: toSrc(shotMobilePng),
  },
  flow: {
    gallery: toSrc(flowGalleryPng),
    cast: toSrc(flowCastPng),
    council: toSrc(flowCouncilPng),
    councilOptions: toSrc(flowOptionsPng),
    councilAgents: toSrc(flowAgentsPng),
    finale: toSrc(flowFinalePng),
  },
  liukanshan: {
    greeting: toSrc(greetingWebp),
    coding: toSrc(codingWebp),
    stroll: toSrc(strollWebp),
    sleepy: toSrc(sleepyWebp),
    basketball: toSrc(basketballWebp),
  },
};
