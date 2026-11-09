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
    expect(config).not.toHaveProperty("vite.base");
  });

  it("publishes the public directory produced by the Netlify preset", () => {
    const config = readFileSync("netlify.toml", "utf8");
    expect(config).toMatch(/^\s*publish\s*=\s*"dist"\s*$/m);
    expect(config).toMatch(/^\s*command\s*=\s*"npm run build:hosted"\s*$/m);
  });

  it("exports cPanel without a hosting server even when NETLIFY is set", async () => {
    vi.stubEnv("NETLIFY", "true");
    const { deploymentOptions } = await import("../../vite.config");
    const config = deploymentOptions("cpanel");
    expect(config).toHaveProperty("nitro", false);
    expect(config).toHaveProperty("vite.base", "/lilly/");
    expect(config.tanstackStart).toHaveProperty("router.basepath", "/lilly");
    expect(config.tanstackStart.pages?.map((page) => page.path)).toEqual(cpanelExportPaths());
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

  it("makes npm run build use the static cPanel target with Node, not Bun", () => {
    const { scripts } = JSON.parse(readFileSync("package.json", "utf8"));
    expect(scripts.build).toBe("vite build --config vite.cpanel.config.ts --mode cpanel && node scripts/export-cpanel.mjs");
    expect(scripts["build:cpanel"]).toBe("npm run build");
    expect(scripts["build:hosted"]).toBe("vite build");
  });
});

function cpanelExportPaths() {
  return ["/lilly/", "/lilly/autorin", "/lilly/blog", "/lilly/books", "/lilly/buchtipp", "/lilly/buecher", "/lilly/datenschutz", "/lilly/faq", "/lilly/impressum",
    "/lilly/buecher/k-ein-chihuahua-zu-ostern", "/lilly/buecher/eine-katze-namens-christmas", "/lilly/buecher/liebe-hat-einen-vogel", "/lilly/buecher/rosenmaedchen", "/lilly/buecher/waffeln-fuer-whitehall", "/lilly/buecher/das-kriegen-wir-gebacken", "/lilly/buecher/die-torte-der-wuensche", "/lilly/buecher/ueber-irische-wiesen", "/lilly/buecher/zauber-und-stab-1", "/lilly/buecher/zum-kaffee-bei-mr-dalton", "/lilly/buecher/das-geheimnis-der-blauen-schale", "/lilly/buecher/der-magische-besen-des-ian-mccormack", "/lilly/buecher/das-magische-kompendium-der-anastasia-bane", "/lilly/buecher/mr-nigh", "/lilly/buecher/the-athanor-academy"];
}