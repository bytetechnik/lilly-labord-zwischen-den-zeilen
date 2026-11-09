import { cp, mkdir, readFile, readdir, rename, rm, stat, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

// Build tooling only; never imported by the browser or server runtime.
export async function exportCpanel(root = process.cwd()) {
  const output = resolve(root, "dist");
  const client = resolve(output, "client");
  const staging = resolve(root, ".cpanel-export");
  // Node-only packaging: inspect generated HTML, never import TypeScript sources.
  await stat(resolve(client, "index.html"));
  const pages = (await readdir(client, { recursive: true })).filter((path) => path === "index.html" || path.endsWith("/index.html") || path.endsWith("\\index.html"));
  for (const path of pages) {
    const html = await readFile(resolve(client, path), "utf8");
    if (!html.includes("<html") || !html.includes("Lilly")) {
      throw new Error(`Static page is missing or incomplete: ${path}`);
    }
    // Start prefixes the relative base with "/"; make file addresses folder-independent.
    await writeFile(resolve(client, path), html.replaceAll("/./", "./"));
  }
  await stat(resolve(client, "assets"));
  await stat(resolve(client, ".htaccess"));
  await rm(staging, { recursive: true, force: true });
  await mkdir(staging, { recursive: true });
  await cp(client, staging, { recursive: true });
  await rm(output, { recursive: true, force: true });
  await rename(staging, output);
  await rm(resolve(root, ".output"), { recursive: true, force: true });
  console.log(`cPanel export ready: upload everything inside dist, including .htaccess (${pages.length} pages).`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await exportCpanel();
}