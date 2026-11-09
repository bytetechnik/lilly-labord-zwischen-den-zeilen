// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// Never set ssr.external or resolve.external: the Worker has no runtime module resolution, so
// the build fails. Never add compression (compressPublicAssets, vite-plugin-compression):
// hosting already compresses at the edge.
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export const deploymentOptions = (mode: string) => ({
  ...(mode === "cpanel" ? { vite: { base: "./" } } : {}),
  // Netlify needs its own server-function output; Lovable keeps the default target.
  ...(mode === "cpanel" ? { nitro: false as const } : process.env["NETLIFY"] === "true" ? { nitro: { preset: "netlify" } } : {}),
  tanstackStart: {
    ...(mode === "cpanel" ? {
      // Hash routing: one prerendered entry page serves every address in any folder.
      pages: [{ path: "/" }],
      prerender: {
        enabled: true,
        autoStaticPathsDiscovery: false,
        crawlLinks: false,
        failOnError: true,
      },
    } : {}),
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});

export default defineConfig(deploymentOptions("production"));
