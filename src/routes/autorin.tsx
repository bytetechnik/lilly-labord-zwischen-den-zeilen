import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparks } from "@/components/site";
import { bookListPath, useBookLang } from "@/lib/book-lang";

export const Route = createFileRoute("/autorin")({
  head: () => ({
    meta: [
      { title: "Über mich – Lilly Labord" },
      { name: "description", content: "Lilly Labord lebt in Frankfurt am Main mit drei Katzen und schreibt Urban Fantasy und Paranormal Romance." },
      { property: "og:title", content: "Über Lilly Labord" },
      { property: "og:description", content: "„Schreiben ist die Stimme meiner Seele.“" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Author,
});

function Author() {
  const lang = useBookLang();
  return (
    <section className="relative overflow-hidden px-6 pt-36">
      <Sparks count={16} />
      <div className="relative mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 rounded-full border border-primary/40" />
          <div className="absolute -inset-10 rounded-full border border-primary/15" />
          <img src="/lilly-portrait.jpg" alt="Lilly Labord" className="animate-rise relative aspect-square w-full rounded-full object-cover shadow-glow" />
        </div>
        <div className="animate-rise">
          <p className="font-display text-sm uppercase tracking-[0.4em] text-primary">Über mich</p>
          <h1 className="mt-3 font-script text-7xl text-gilded md:text-8xl">Lilly Labord</h1>
          <blockquote className="mt-8 border-l-2 border-primary pl-6 font-display text-3xl italic">
            „Schreiben ist die Stimme meiner Seele."
          </blockquote>
          <p className="drop-cap mt-10 text-lg">
            Hi, ich bin Lilly Labord und komme aus Frankfurt am Main, wo ich seit meinem Studium in Hagen auch wieder lebe.
            Drei Katzen begleiten mich bei meinen Schreibabenteuern. Ich lese und schreibe überwiegend Urban Fantasy und
            Paranormal Romance und freue mich, dass du auf meine Seite gefunden hast.
          </p>
          <div className="mt-10 flex flex-wrap gap-6 font-display text-xl">
            <a href="https://www.facebook.com/@LillyLabord/" target="_blank" rel="noreferrer" className="text-primary hover:underline">Facebook ↗</a>
            <a href="https://www.instagram.com/lillylabord" target="_blank" rel="noreferrer" className="text-primary hover:underline">Instagram ↗</a>
            <Link to={bookListPath(lang)} className="text-primary hover:underline">Meine Bücher →</Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-28 grid max-w-4xl grid-cols-3 gap-6 text-center">
        {[
          ["15", "Romane"],
          ["3", "Katzen"],
          ["∞", "Tassen Kaffee"],
        ].map(([n, l]) => (
          <div key={l} className="rounded-md border border-border bg-card p-8">
            <p className="font-display text-6xl text-gilded">{n}</p>
            <p className="mt-2 font-display text-lg text-muted-foreground">{l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
