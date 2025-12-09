import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Set base for GitHub Pages (repo name), override with VITE_BASE if deploying elsewhere.
  base: process.env.VITE_BASE || "/QuickGrowth/",
  server: {
    port: 3000,
  },
});
