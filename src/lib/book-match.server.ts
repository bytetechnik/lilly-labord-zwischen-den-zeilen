import { createOpenAI } from "@ai-sdk/openai";
import { NoObjectGeneratedError, Output, streamText } from "ai";
import { z } from "zod";
import { books } from "./books";
import { blurbsEn } from "./books-en";

const schema = z.object({
  matches: z.array(z.object({ id: z.number(), reason: z.string() })),
});

export type Match = { id: number; reason: string };

export async function matchBooks(query: string, lang: "de" | "en"): Promise<Match[]> {
  const apiKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey) throw new Error("AI ist nicht konfiguriert.");
  const provider = createOpenAI({
    baseURL: "https://ai.gateway.lovable.dev/v1",
    apiKey,
    headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
  });

  const catalog = books
    .map((b) => `ID ${b.id} | ${b.title} | ${b.category}\n${lang === "en" ? blurbsEn[b.id] : b.description}`)
    .join("\n\n");

  const language = lang === "en" ? "English" : "German (Deutsch, informal 'du')";
  const result = streamText({
    model: provider.responses("openai/gpt-6-astra"),
    instructions: `You are a warm, enthusiastic bookseller recommending novels by the author Lilly Labord. Only recommend books from the catalog below, using their exact IDs. Pick 1 to 4 books that best match the reader's wishes, best match first. For each, write one short sentence (max 25 words) in ${language} explaining why it fits their wish, based only on the blurb. If nothing fits at all, return an empty list.\n\nCATALOG:\n${catalog}`,
    messages: [{ role: "user", content: query }],
    output: Output.object({ schema }),
    providerOptions: {
      openai: {
        store: false,
        forceReasoning: true,
        reasoningEffort: "low",
        include: ["reasoning.encrypted_content"],
      },
    },
  });

  let parsed: z.infer<typeof schema>;
  try {
    parsed = await result.output;
  } catch (e) {
    if (NoObjectGeneratedError.isInstance(e) && e.text) {
      try {
        parsed = schema.parse(JSON.parse(e.text));
      } catch {
        return [];
      }
    } else throw e;
  }
  const valid = new Set(books.map((b) => b.id));
  return parsed.matches.filter((m) => valid.has(m.id)).slice(0, 4);
}
