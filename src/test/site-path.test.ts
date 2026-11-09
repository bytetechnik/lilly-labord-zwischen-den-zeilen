import { describe, expect, it } from "vitest";
import { publicAsset, routePath } from "@/lib/site-path";
import { createRouter } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { routeTree } from "@/routeTree.gen";

describe("cPanel subfolder addresses", () => {
  it("loads public media below /lilly/", () => {
    expect(publicAsset("/covers/74.jpg", "/lilly/")).toBe("/lilly/covers/74.jpg");
    expect(publicAsset("favicon.png", "/lilly/")).toBe("/lilly/favicon.png");
    expect(publicAsset("lilly-portrait.jpg", "/lilly/")).toBe("/lilly/lilly-portrait.jpg");
    expect(publicAsset("covers/74.jpg", "/")).toBe("/covers/74.jpg");
  });

  it("recognizes language selections under /lilly without stripping similar names", () => {
    expect(routePath("/lilly/books", "/lilly/")).toBe("/books");
    expect(routePath("/lilly/buecher/", "/lilly/")).toBe("/buecher/");
    expect(routePath("/lilly/", "/lilly/")).toBe("/");
    expect(routePath("/lilly-other/books", "/lilly/")).toBe("/lilly-other/books");
  });

  it("matches lists and book details below /lilly", () => {
    const router = createRouter({ routeTree, basepath: "/lilly/", context: { queryClient: new QueryClient() } });
    expect(router.matchRoutes("/lilly/").at(-1)?.routeId).toBe("/");
    expect(router.matchRoutes("/lilly/books").at(-1)?.routeId).toBe("/books");
    expect(router.matchRoutes("/lilly/buecher/zum-kaffee-bei-mr-dalton").at(-1)?.routeId).toBe("/buecher/$slug");
  });
});