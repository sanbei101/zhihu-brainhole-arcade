import path from "node:path";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const dirname = import.meta.dirname ?? path.resolve(".");

export default defineConfig({
  root: dirname,
  publicDir: path.resolve(dirname, "../public"),
  plugins: [
    react(),
    tailwindcss(),
    viteSingleFile({
      useRecommendedBuildConfig: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(dirname, ".."),
    },
  },
  build: {
    target: "esnext",
    assetsInlineLimit: 100000000,
    outDir: path.resolve(dirname, "dist"),
    emptyOutDir: true,
  },
});
