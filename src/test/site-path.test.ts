import { describe, expect, it } from "vitest";
import { publicAsset, routePath } from "@/lib/site-path";
import { createRouter, createMemoryHistory } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { routeTree } from "@/routeTree.gen";

describe("folder-independent cPanel addresses", () => {
  it("loads public media relative to whichever folder holds the site", () => {
    expect(publicAsset("/covers/74.jpg", "./")).toBe("./covers/74.jpg");
    expect(publicAsset("favicon.png", "./")).toBe("./favicon.png");
    expect(publicAsset("covers/74.jpg", "/")).toBe("/covers/74.jpg");
  });

  it("keeps hash page addresses unchanged for language memory", () => {
    expect(routePath("/books", "./")).toBe("/books");
    expect(routePath("/buecher", "./")).toBe("/buecher");
  });

  it("matches lists and book details without a folder prefix", () => {
    for (const [path, routeId] of [["/", "/"], ["/books", "/books"], ["/buecher/zum-kaffee-bei-mr-dalton", "/buecher/$slug"]] as const) {
      const router = createRouter({ routeTree, history: createMemoryHistory({ initialEntries: [path] }), context: { queryClient: new QueryClient() } });
      expect(router.matchRoutes(router.latestLocation.pathname).at(-1)?.routeId).toBe(routeId);
    }
  });
});
