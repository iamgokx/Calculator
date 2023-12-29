import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ViteGHPages from "vite-plugin-gh-pages";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Calculator/",
});
