import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { books, categories, type Category } from "@/lib/books";
import { BookCard, PageTitle } from "@/components/site";

export const Route = createFileRoute("/buecher/")({
  head: () => ({
    meta: [
      { title: "Bücher – Lilly Labord" },
      { name: "description", content: "Alle Romane von Lilly Labord: Mr. Dalton, Mr. Nigh, Anastasia Bane, Zauber & Stab und viele mehr." },
      { property: "og:title", content: "Alle Bücher von Lilly Labord" },
      { property: "og:description", content: "Magie, Spannung, Entspannung – und Romane ganz ohne Paranormales." },
    ],
  }),
  component: BooksPage,
});

function BooksPage() {
  const [filter, setFilter] = useState<Category | "Alle">("Alle");
  const list = filter === "Alle" ? books : books.filter((b) => b.category === filter);
  return (
    <>
      <PageTitle eyebrow="Die Bibliothek" title="Meine Bücher">
        {books.length} Geschichten voller Magie, Geheimnisse und Herz.
      </PageTitle>
      <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3 px-6">
        {(["Alle", ...categories] as const).map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full border px-5 py-1.5 font-display text-lg transition-colors ${
              filter === c ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-primary hover:text-primary"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div key={filter} className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-x-8 gap-y-14 px-6 md:grid-cols-4">
        {list.map((b, i) => (
          <div key={b.id} className="animate-rise" style={{ animationDelay: `${i * 0.05}s` }}>
            <BookCard book={b} />
          </div>
        ))}
      </div>
    </>
  );
}
