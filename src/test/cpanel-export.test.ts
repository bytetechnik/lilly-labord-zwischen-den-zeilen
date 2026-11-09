import { execFileSync } from "node:child_process";
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, existsSync, cpSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { resolve, join } from "node:path";
import { describe, expect, it } from "vitest";
import { cpanelPaths } from "@/lib/static-pages";

describe("cPanel upload packaging", () => {
  it("puts static pages and hidden Apache settings in dist without server code", () => {
    const root = mkdtempSync(join(tmpdir(), "cpanel-export-"));
    try {
      for (const path of cpanelPaths) {
        const directory = join(root, "dist/client", path);
        mkdirSync(directory, { recursive: true });
        writeFileSync(join(directory, "index.html"), "<html><body>Lilly Labord</body></html>");
      }
      mkdirSync(join(root, "dist/client/assets"));
      writeFileSync(join(root, "dist/client/assets/site.js"), "console.log('static')");
      cpSync("public/.htaccess", join(root, "dist/client/.htaccess"));
      mkdirSync(join(root, "dist/server"));
      writeFileSync(join(root, "dist/server/index.js"), "server-only");
      mkdirSync(join(root, ".output"));
      writeFileSync(join(root, ".output/old-server.js"), "old output");
      execFileSync("node", [resolve("scripts/export-cpanel.mjs")], { cwd: root });
      expect(existsSync(join(root, ".output"))).toBe(false);
      expect(existsSync(join(root, "dist/server"))).toBe(false);
      expect(existsSync(join(root, "dist/client"))).toBe(false);
      expect(readFileSync(join(root, "dist/.htaccess"), "utf8")).toContain("DirectoryIndex index.html");
      expect(existsSync(join(root, "dist/assets/site.js"))).toBe(true);
      for (const path of cpanelPaths) expect(existsSync(join(root, "dist", path, "index.html"))).toBe(true);
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });
});