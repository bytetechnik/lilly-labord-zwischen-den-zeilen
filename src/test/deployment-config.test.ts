import { readFileSync } from "node:fs";
import { afterEach, describe, expect, it, vi } from "vitest";

vi.mock("@lovable.dev/vite-tanstack-config", () => ({
  defineConfig: (options: unknown) => options,
}));

afterEach(() => {
  vi.unstubAllEnvs();
  vi.resetModules();
});

describe("Deployment configuration", () => {
  it("generates Netlify functions on Netlify", async () => {
    vi.stubEnv("NETLIFY", "true");
    const { deploymentOptions } = await import("../../vite.config");
    const config = deploymentOptions("production");
    expect(config).toMatchObject({ nitro: { preset: "netlify" } });
  });

  it("preserves the default deployment target outside Netlify", async () => {
    vi.stubEnv("NETLIFY", "false");
    const { deploymentOptions } = await import("../../vite.config");
    const config = deploymentOptions("production");
    expect(config).not.toHaveProperty("nitro");
  });

  it("publishes the public directory produced by the Netlify preset", () => {
    const config = readFileSync("netlify.toml", "utf8");
    expect(config).toMatch(/^\s*publish\s*=\s*"dist"\s*$/m);
    expect(config).toMatch(/^\s*command\s*=\s*"bun run build"\s*$/m);
  });

  it("exports cPanel without a hosting server even when NETLIFY is set", async () => {
    vi.stubEnv("NETLIFY", "true");
    const { deploymentOptions } = await import("../../vite.config");
    const config = deploymentOptions("cpanel");
    expect(config).toHaveProperty("nitro", false);
    expect(config.tanstackStart.prerender).toEqual({
      enabled: true, autoStaticPathsDiscovery: false, crawlLinks: false, failOnError: true,
    });
  });

  it("includes every public page and all 15 book details", async () => {
    const { cpanelPaths } = await import("../lib/static-pages");
    const { books } = await import("../lib/books");
    expect(cpanelPaths).toHaveLength(24);
    expect(cpanelPaths).toEqual(expect.arrayContaining([
      "/", "/books", "/buecher", "/autorin", "/blog", "/buchtipp", "/faq", "/impressum", "/datenschutz",
      ...books.map((book) => `/buecher/${book.slug}`),
    ]));
  });
});