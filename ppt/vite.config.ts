import fs from "node:fs";
import path from "node:path";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const dirname = import.meta.dirname ?? path.resolve(".");
const rootDir = path.resolve(dirname, "..");
const woff2Path = path.resolve(rootDir, "public/pixel.woff2");
const zhihuSvgPath = path.resolve(rootDir, "public/zhihu.svg");

const woff2Base64 = fs.existsSync(woff2Path)
  ? `data:font/woff2;base64,${fs.readFileSync(woff2Path).toString("base64")}`
  : "";
const zhihuSvgBase64 = fs.existsSync(zhihuSvgPath)
  ? `data:image/svg+xml;base64,${fs.readFileSync(zhihuSvgPath).toString("base64")}`
  : "";

function inlineAssetsPlugin(): Plugin {
  return {
    name: "inline-assets-plugin",
    enforce: "pre",
    transform(code, id) {
      if (id.endsWith(".css") && woff2Base64) {
        return {
          code: code.replace(/url\(["']?\/pixel\.woff2["']?\)/g, `url("${woff2Base64}")`),
          map: null,
        };
      }
    },
    transformIndexHtml(html) {
      if (!zhihuSvgBase64) return html;
      return html.replace(/href="[^"]*zhihu\.svg"/g, `href="${zhihuSvgBase64}"`);
    },
  };
}

export default defineConfig({
  root: dirname,
  publicDir: false, // 彻底禁止拷贝外部静态目录，强制所有图片、字体与资源 100% 编译内联为 Base64
  plugins: [
    inlineAssetsPlugin(),
    react(),
    tailwindcss(),
    viteSingleFile({
      useRecommendedBuildConfig: true,
    }),
  ],
  resolve: {
    alias: {
      "@": rootDir,
    },
  },
  build: {
    target: "esnext",
    assetsInlineLimit: 100000000,
    outDir: path.resolve(dirname, "dist"),
    emptyOutDir: true,
  },
});
