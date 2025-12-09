import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Default base for Netlify/custom domains; override with VITE_BASE if needed.
  base: process.env.VITE_BASE || "/",
  server: {
    port: 3000,
  },
});
