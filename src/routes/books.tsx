import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BookFinder } from "@/components/BookFinder";
import { books, categories, type Category } from "@/lib/books";
import { blurbsEn, categoryEn } from "@/lib/books-en";
import { GoldButton, PageTitle } from "@/components/site";

export const Route = createFileRoute("/books")({
  head: () => ({
    meta: [
      { title: "Books in English – Lilly Labord" },
      { name: "description", content: "All of Lilly Labord's novels with English descriptions: urban fantasy, paranormal romance and cosy crime." },
      { property: "og:title", content: "Lilly Labord – Books (English)" },
      { property: "og:description", content: "Magic, suspense, feel-good stories and romance — described in English." },
    ],
  }),
  component: BooksEn,
});

function BooksEn() {
  const [filter, setFilter] = useState<Category | "All">("All");
  const list = filter === "All" ? books : books.filter((b) => b.category === filter);
  return (
    <div lang="en">
      <PageTitle eyebrow="The Library · English" title="My Books">
        Original German titles, English blurbs. All books are written in German.
      </PageTitle>
      <BookFinder lang="en" />
      <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3 px-6">
        {(["All", ...categories] as const).map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full border px-5 py-1.5 font-display text-lg transition-colors ${
              filter === c ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-primary hover:text-primary"
            }`}
          >
            {c === "All" ? "All" : categoryEn[c]}
          </button>
        ))}
      </div>
      <div key={filter} className="mx-auto mt-20 max-w-5xl space-y-24 px-6">
        {list.map((b, i) => (
          <article key={b.id} className="animate-rise grid items-start gap-10 md:grid-cols-[1fr_2fr]" style={{ animationDelay: `${Math.min(i, 4) * 0.06}s` }}>
            <a href={b.url} target="_blank" rel="noreferrer" className="mx-auto w-56 md:w-full">
              <img src={b.cover} alt={b.title} loading="lazy" className="book-tilt w-full rounded-sm shadow-book" />
            </a>
            <div>
              <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">{categoryEn[b.category]}</p>
              <h2 className="mt-2 text-4xl" lang="de">{b.title}</h2>
              <p className="drop-cap mt-6 whitespace-pre-line text-muted-foreground">{blurbsEn[b.id]}</p>
              <div className="mt-8">
                <GoldButton href={b.url}>Buy on Amazon ↗</GoldButton>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
