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
  liukanshan: {
    greeting: toSrc(greetingWebp),
    coding: toSrc(codingWebp),
    stroll: toSrc(strollWebp),
    sleepy: toSrc(sleepyWebp),
    basketball: toSrc(basketballWebp),
  },
};
