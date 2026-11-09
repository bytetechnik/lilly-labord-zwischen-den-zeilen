import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { books } from "@/lib/books";

const copy = {
  de: {
    eyebrow: "Die Buchorakel-Kugel",
    title: "Erzähl mir, was du lesen möchtest",
    placeholder: "z. B. etwas Gemütliches mit Magie, einem Café und ein bisschen Romantik …",
    button: "Bücher finden",
    loading: "Die Kugel befragt das Regal …",
    none: "Leider passt diesmal nichts – versuch es mit anderen Worten.",
    examples: ["Gemütlich mit Backen und Magie", "Spannend, im viktorianischen London", "Liebesgeschichte ohne Zauberei"],
    short: "Bitte beschreibe deinen Wunsch in ein paar Worten.",
  },
  en: {
    eyebrow: "The Book Oracle",
    title: "Tell me what you'd like to read",
    placeholder: "e.g. something cosy with magic, a café and a little romance …",
    button: "Find books",
    loading: "The oracle is consulting the shelves …",
    none: "Nothing fits this time – try describing it differently.",
    examples: ["Cosy with baking and magic", "Suspenseful, in Victorian London", "A love story without magic"],
    short: "Please describe your wish in a few words.",
  },
};

export function BookFinder({ lang }: { lang: "de" | "en" }) {
  const t = copy[lang];
  const [query, setQuery] = useState("");
  const loading = false;
  const [error, setError] = useState<string | null>(null);
  const results: { id: number; reason: string }[] | null = null;

  function search(q: string) {
    if (q.trim().length < 3) return setError(t.short);
    // Placeholder only: no requests, invented matches, or AI credentials.
    setError(lang === "en" ? "The search is unavailable right now." : "Die Suche ist gerade nicht verfügbar.");
  }

  return (
    <section className="mx-auto mb-16 max-w-4xl px-6">
      <div className="relative overflow-hidden rounded-md border border-primary/40 bg-card p-8 shadow-glow md:p-10">
        <p className="font-display text-sm uppercase tracking-[0.4em] text-primary">✦ {t.eyebrow}</p>
        <h2 className="mt-2 text-3xl md:text-4xl">{t.title}</h2>
        <form
          className="mt-6 flex flex-col gap-3 md:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            search(query);
          }}
        >
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                search(query);
              }
            }}
            rows={2}
            maxLength={500}
            placeholder={t.placeholder}
            className="flex-1 resize-none rounded-sm border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-sm bg-primary px-7 py-3 font-display text-lg text-primary-foreground transition-opacity disabled:opacity-60"
          >
            {loading ? "…" : t.button}
          </button>
        </form>
        <div className="mt-4 flex flex-wrap gap-2">
          {t.examples.map((ex) => (
            <button
              key={ex}
              type="button"
              onClick={() => {
                setQuery(ex);
                search(ex);
              }}
              className="rounded-full border border-border px-4 py-1 text-sm text-muted-foreground hover:border-primary hover:text-primary"
            >
              {ex}
            </button>
          ))}
        </div>

        {loading && <p className="mt-8 animate-flicker font-display text-xl italic text-primary">{t.loading}</p>}
        {error && <p className="mt-6 text-destructive">{error}</p>}
        {results && results.length === 0 && <p className="mt-8 font-display text-xl italic">{t.none}</p>}
        {results && results.length > 0 && (
          <ul className="mt-8 space-y-5">
            {results.map((r, i) => {
              const b = books.find((x) => x.id === r.id);
              if (!b) return null;
              const inner = (
                <>
                  <img src={b.cover} alt={b.title} className="w-16 shrink-0 rounded-sm shadow-book" />
                  <div>
                    <p className="font-display text-xl group-hover:text-primary">{b.title}</p>
                    <p className="mt-1 text-muted-foreground">{r.reason}</p>
                  </div>
                </>
              );
              return (
                <li key={r.id} className="animate-rise" style={{ animationDelay: `${i * 0.1}s` }}>
                  {lang === "de" ? (
                    <Link to="/buecher/$slug" params={{ slug: b.slug }} className="group flex gap-5">{inner}</Link>
                  ) : (
                    <a href={b.url} target="_blank" rel="noreferrer" className="group flex gap-5">{inner}</a>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
