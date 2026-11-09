// cPanel builds use "./" so assets resolve from whichever folder hosts index.html.
export const siteBase = import.meta.env?.BASE_URL || "/";
// cPanel builds use hash URLs (#/buecher) so any upload folder works without server rules.
export const useHashRouting = import.meta.env?.MODE === "cpanel";

export function publicAsset(path: string, base = siteBase): string {
  return `${base.replace(/\/$/, "")}/${path.replace(/^\/+/, "")}`;
}

export function routePath(path: string, base = siteBase): string {
  const prefix = base.replace(/\/$/, "");
  if (prefix && prefix !== "." && (path === prefix || path.startsWith(`${prefix}/`))) {
    return path.slice(prefix.length) || "/";
  }
  return path;
}
