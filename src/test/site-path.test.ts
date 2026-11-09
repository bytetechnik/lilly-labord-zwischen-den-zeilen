import { describe, expect, it } from "vitest";
import { publicAsset, routePath } from "@/lib/site-path";
import { createRouter, createMemoryHistory } from "@tanstack/react-router";
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
    for (const [path, routeId] of [["/lilly/", "/"], ["/lilly/books", "/books"], ["/lilly/buecher/zum-kaffee-bei-mr-dalton", "/buecher/$slug"]]) {
      const router = createRouter({ routeTree, basepath: "/lilly/", history: createMemoryHistory({ initialEntries: [path] }), context: { queryClient: new QueryClient() } });
      expect(router.matchRoutes(router.latestLocation.pathname).at(-1)?.routeId).toBe(routeId);
      expect(router.buildLocation({ to: "/books" }).publicHref).toBe("/lilly/books");
    }
  });
});