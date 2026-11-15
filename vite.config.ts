import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "github-pages" ? "/Portfolio-Angelina/" : "/",
  plugins: [react(), ViteImageOptimizer()],
}));
