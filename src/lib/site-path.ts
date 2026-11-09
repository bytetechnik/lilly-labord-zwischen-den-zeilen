// Vite sets this to /lilly/ for cPanel and / for hosted builds and preview.
export const siteBase = import.meta.env.BASE_URL || "/";

export function publicAsset(path: string, base = siteBase): string {
  return `${base.replace(/\/$/, "")}/${path.replace(/^\/+/, "")}`;
}

export function routePath(path: string, base = siteBase): string {
  const prefix = base.replace(/\/$/, "");
  if (prefix && (path === prefix || path.startsWith(`${prefix}/`))) {
    return path.slice(prefix.length) || "/";
  }
  return path;
}