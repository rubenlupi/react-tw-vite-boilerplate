import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setup.tests.ts",
    include: ["**/?(*.)test.ts?(x)"],
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
  plugins: [
    viteCompression(),
    react({
      include: "**/*.tsx",
    }),
  ],
  resolve: {
    alias: {
      "@/": path.join(__dirname, "src/"),
    },
  },
});
