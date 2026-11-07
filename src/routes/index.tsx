import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import hero from "@/assets/hero-study.jpg";
import { books, categories, type Category } from "@/lib/books";
import { BookCard, GoldButton, Sparks } from "@/components/site";
import { bookListPath, useBookLang } from "@/lib/book-lang";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lilly Labord – Magie, Spannung & Kaffee zwischen Buchdeckeln" },
      { name: "description", content: "Die Autorin von „Zum Kaffee bei Mr. Dalton“: Urban Fantasy, Paranormal Romance und Cosy Crime aus Frankfurt am Main." },
      { property: "og:title", content: "Lilly Labord – Autorin" },
      { property: "og:description", content: "Urban Fantasy, Paranormal Romance und Cosy Crime. Was möchtest du lesen?" },
    ],
  }),
  component: Index,
});

const moods: Record<Category, { numeral: string; glyph: string; line: string }> = {
  Spannung: { numeral: "I", glyph: "🗝", line: "Geheimnisse, Intrigen & Herzklopfen" },
  Entspannung: { numeral: "II", glyph: "☕", line: "Waffeln, Torten & gute Laune" },
  Magie: { numeral: "III", glyph: "✦", line: "Zauberstäbe, Gilden & Schattenwelt" },
  "Ohne Paranormales": { numeral: "IV", glyph: "♡", line: "Liebe, Hunde & Katzen – ganz ohne Zauber" },
};

function Index() {
  const [mood, setMood] = useState<Category>("Magie");
  const lang = useBookLang();
  const featured = books.filter((b) => b.featured);
  const shelf = books.filter((b) => b.category === mood);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-end overflow-hidden">
        <img src={hero} alt="" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-veil" />
        <Sparks count={24} />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-24">
          <p className="animate-rise font-display text-sm uppercase tracking-[0.5em] text-primary">Urban Fantasy · Paranormal Romance · Cosy Crime</p>
          <h1 className="animate-rise mt-4 font-script text-7xl leading-none text-gilded md:text-[10rem]" style={{ animationDelay: "0.2s" }}>
            Lilly Labord
          </h1>
          <p className="animate-rise mt-6 max-w-xl font-display text-2xl italic text-foreground md:text-3xl" style={{ animationDelay: "0.5s" }}>
            Wo Kaffeekannen schweben, Leprechauns beleidigt sind und Magier einander niemals ganz trauen.
          </p>
          <div className="animate-rise mt-10 flex flex-wrap gap-6" style={{ animationDelay: "0.8s" }}>
            <a href="#lesen" className="rounded-sm bg-primary px-7 py-3 font-display text-lg text-primary-foreground shadow-glow">
              Was möchtest du lesen?
            </a>
            <Link to={bookListPath(lang)} className="self-center font-display text-lg text-primary underline-offset-8 hover:underline">
              Alle Bücher →
            </Link>
          </div>
        </div>
      </section>

      {/* Mood selector */}
      <section id="lesen" className="mx-auto max-w-6xl scroll-mt-20 px-6 pt-28">
        <div className="text-center">
          <p className="font-display text-sm uppercase tracking-[0.4em] text-primary">Ziehe eine Karte</p>
          <h2 className="mt-3 text-5xl md:text-6xl">Was möchtest du lesen?</h2>
          <div className="ornament-rule mx-auto mt-6 max-w-xs">✦</div>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">
          {categories.map((c) => {
            const active = c === mood;
            return (
              <button
                key={c}
                onClick={() => setMood(c)}
                aria-pressed={active}
                className={`group relative flex aspect-[3/5] flex-col items-center justify-between rounded-md border p-5 text-center transition-all duration-500 ${
                  active ? "-translate-y-3 border-primary bg-secondary shadow-glow" : "border-border bg-card hover:-translate-y-1 hover:border-primary/60"
                }`}
              >
                <span className="absolute inset-2 rounded-sm border border-border" />
                <span className="font-display text-xl text-primary">{moods[c].numeral}</span>
                <span className={`text-6xl transition-transform duration-700 ${active ? "scale-110 animate-flicker" : "opacity-70"}`}>{moods[c].glyph}</span>
                <span>
                  <span className="block font-display text-2xl">{c}</span>
                  <span className="mt-2 block text-sm text-muted-foreground">{moods[c].line}</span>
                </span>
              </button>
            );
          })}
        </div>

        <div key={mood} className="mt-20 grid grid-cols-2 gap-x-8 gap-y-14 md:grid-cols-4">
          {shelf.map((b, i) => (
            <div key={b.id} className="animate-rise" style={{ animationDelay: `${i * 0.08}s` }}>
              <BookCard book={b} />
            </div>
          ))}
        </div>
      </section>

      {/* Featured spreads */}
      <section className="mx-auto max-w-6xl px-6 pt-36">
        <div className="text-center">
          <p className="font-display text-sm uppercase tracking-[0.4em] text-primary">Aus dem Bücherregal</p>
          <h2 className="mt-3 text-5xl md:text-6xl">Hier eine Auswahl meiner Bücher</h2>
        </div>
        <div className="mt-20 space-y-32">
          {featured.map((b, i) => (
            <article key={b.id} className={`grid items-center gap-12 md:grid-cols-[2fr_3fr] ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <Link to="/buecher/$slug" params={{ slug: b.slug }} className="mx-auto w-64 md:w-80">
                <img src={b.cover} alt={b.title} loading="lazy" className="book-tilt w-full rounded-sm shadow-book" />
              </Link>
              <div>
                <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">Band {String(i + 1).padStart(2, "0")} · {b.category}</p>
                <h3 className="mt-3 text-4xl md:text-5xl">{b.title}</h3>
                <p className="drop-cap mt-6 line-clamp-[8] whitespace-pre-line text-muted-foreground">{b.description}</p>
                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <GoldButton href={b.url}>Bei Amazon ansehen</GoldButton>
                  <Link to="/buecher/$slug" params={{ slug: b.slug }} className="font-display text-lg text-primary hover:underline">
                    Mehr Informationen →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Author teaser */}
      <section className="mx-auto max-w-5xl px-6 pt-36">
        <div className="parchment-panel relative grid items-center gap-10 rounded-md p-10 shadow-book md:grid-cols-[1fr_2fr] md:p-14">
          <img src="/lilly-portrait.jpg" alt="Lilly Labord" loading="lazy" className="mx-auto w-56 rounded-full border-4 border-gold object-cover" />
          <div>
            <p className="font-script text-5xl">Hi, ich bin Lilly</p>
            <p className="mt-4 text-lg">
              Ich komme aus Frankfurt am Main, und drei Katzen begleiten mich bei meinen Schreibabenteuern. Ich lese und
              schreibe überwiegend Urban Fantasy und Paranormal Romance.
            </p>
            <Link to="/autorin" className="mt-6 inline-block font-display text-xl underline underline-offset-4">
              Mehr über mich →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
