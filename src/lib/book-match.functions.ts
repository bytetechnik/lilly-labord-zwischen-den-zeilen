import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const findBooks = createServerFn({ method: "POST" })
  .inputValidator((d) =>
    z.object({ query: z.string().trim().min(3).max(500), lang: z.enum(["de", "en"]) }).parse(d),
  )
  .handler(async ({ data }) => {
    const { matchBooks } = await import("./book-match.server");
    try {
      return { matches: await matchBooks(data.query, data.lang), error: null as string | null };
    } catch (e) {
      const status = (e as { statusCode?: number }).statusCode;
      const msg =
        status === 429
          ? data.lang === "en" ? "Too many requests — please try again in a moment." : "Zu viele Anfragen – bitte gleich noch einmal versuchen."
          : status === 402
            ? data.lang === "en" ? "The search is unavailable right now." : "Die Suche ist gerade nicht verfügbar."
            : data.lang === "en" ? "Something went wrong. Please try again." : "Etwas ist schiefgegangen. Bitte versuche es erneut.";
      console.error("findBooks failed", e);
      return { matches: [], error: msg };
    }
  });
