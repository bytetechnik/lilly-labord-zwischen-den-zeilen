// @vitest-environment node
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
    const { default: config } = await import("../../vite.config");
    expect(config).toMatchObject({ nitro: { preset: "netlify" } });
  });

  it("preserves the default deployment target outside Netlify", async () => {
    vi.stubEnv("NETLIFY", "false");
    const { default: config } = await import("../../vite.config");
    expect(config).not.toHaveProperty("nitro");
  });

  it("publishes the public directory produced by the Netlify preset", () => {
    const config = readFileSync(new URL("../../netlify.toml", import.meta.url), "utf8");
    expect(config).toMatch(/^\s*publish\s*=\s*"dist"\s*$/m);
    expect(config).toMatch(/^\s*command\s*=\s*"bun run build"\s*$/m);
  });
});