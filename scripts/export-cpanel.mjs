import { cp, mkdir, readFile, rename, rm, stat } from "node:fs/promises";
import { resolve } from "node:path";

// Build tooling only; never imported by the browser or server runtime.
export async function exportCpanel(root = process.cwd()) {
  const output = resolve(root, "dist");
  const client = resolve(output, "client");
  const staging = resolve(root, ".cpanel-export");
  const { cpanelPaths } = await import(resolve(root, "src/lib/static-pages.ts"));
  for (const path of cpanelPaths) {
    const html = await readFile(resolve(client, `.${path === "/" ? "" : path}/index.html`), "utf8");
    if (!html.includes("<html") || !html.includes("Lilly")) {
      throw new Error(`Static page is missing or incomplete: ${path}`);
    }
  }
  await stat(resolve(client, "assets"));
  await stat(resolve(client, ".htaccess"));
  await rm(staging, { recursive: true, force: true });
  await mkdir(staging, { recursive: true });
  await cp(client, staging, { recursive: true });
  await rm(output, { recursive: true, force: true });
  await rename(staging, output);
  console.log(`cPanel export ready: upload everything inside dist, including .htaccess (${cpanelPaths.length} pages).`);
}

if (process.argv[1] && resolve(process.argv[1]) === resolve(import.meta.filename)) {
  await exportCpanel();
}