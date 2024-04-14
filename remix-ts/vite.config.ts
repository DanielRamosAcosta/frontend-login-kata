import { defineConfig } from "vitest/config";
import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

export default defineConfig({
  plugins: [...(process.env.VITEST ? [] : [remix()]), tsconfigPaths()],
  test: {
    environment: "jsdom",
    setupFiles: ["./tests/setup.ts"],
    exclude: ["**/node_modules/**", "**/e2e/**"],
    globals: true,
  },
});
