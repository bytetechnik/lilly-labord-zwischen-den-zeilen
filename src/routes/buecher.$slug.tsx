import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { books, getBook } from "@/lib/books";
import { BookCard, GoldButton, Sparks } from "@/components/site";

export const Route = createFileRoute("/buecher/$slug")({
  loader: ({ params }) => {
    const book = getBook(params.slug);
    if (!book) throw notFound();
    return { book };
  },
  head: ({ loaderData }) => {
    const b = loaderData?.book;
    if (!b) return { meta: [{ title: "Buch nicht gefunden – Lilly Labord" }, { name: "robots", content: "noindex" }] };
    const d = b.description.slice(0, 155);
    return {
      meta: [
        { title: `${b.title} – Lilly Labord` },
        { name: "description", content: d },
        { property: "og:title", content: b.title },
        { property: "og:description", content: d },
        { property: "og:type", content: "book" },
      ],
    };
  },
  component: BookPage,
});

function BookPage() {
  const { book } = Route.useLoaderData();
  const more = books.filter((b) => b.category === book.category && b.id !== book.id).slice(0, 4);
  return (
    <>
      <section className="relative overflow-hidden px-6 pt-36">
        <Sparks count={14} />
        <div className="relative mx-auto grid max-w-6xl gap-14 md:grid-cols-[2fr_3fr]">
          <div className="mx-auto w-72 md:sticky md:top-28 md:w-full md:self-start">
            <img src={book.cover} alt={book.title} className="animate-rise w-full rounded-sm shadow-book shadow-glow" />
          </div>
          <div className="animate-rise">
            <Link to="/buecher" className="font-display text-primary hover:underline">← Alle Bücher</Link>
            <p className="mt-6 font-display text-sm uppercase tracking-[0.4em] text-primary">{book.category}</p>
            <h1 className="mt-3 text-5xl md:text-6xl">{book.title}</h1>
            <p className="mt-2 font-script text-3xl text-muted-foreground">von Lilly Labord</p>
            <div className="ornament-rule mt-8 max-w-xs">✦</div>
            <div className="drop-cap mt-8 whitespace-pre-line text-lg">{book.description}</div>
            <div className="mt-10">
              <GoldButton href={book.url}>Jetzt bei Amazon kaufen ↗</GoldButton>
            </div>
          </div>
        </div>
      </section>
      {more.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 pt-32">
          <h2 className="text-center text-4xl">Das könnte dir auch gefallen</h2>
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            {more.map((b) => <BookCard key={b.id} book={b} />)}
          </div>
        </section>
      )}
    </>
  );
}
