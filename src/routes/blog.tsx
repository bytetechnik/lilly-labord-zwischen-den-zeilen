import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageTitle } from "@/components/site";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog – Lilly Labord" },
      { name: "description", content: "Schreibtipps, Buchneuigkeiten, Blicke hinter die Kulissen und Rezensionen von Lilly Labord." },
      { property: "og:title", content: "Blog – Lilly Labord" },
      { property: "og:description", content: "Schreibtipps, Buchneuigkeiten, Hinter den Kulissen und Rezensionen." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Blog,
});

const cats = ["Alle", "Schreibtipps", "Buchneuigkeiten", "Hinter den Kulissen", "Rezensionen"];

function Blog() {
  const [c, setC] = useState("Alle");
  return (
    <>
      <PageTitle eyebrow="Aus der Schreibstube" title="Blog" />
      <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3 px-6">
        {cats.map((x) => (
          <button
            key={x}
            onClick={() => setC(x)}
            className={`rounded-full border px-5 py-1.5 font-display text-lg ${c === x ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:text-primary"}`}
          >
            {x}
          </button>
        ))}
      </div>
      <div className="mx-auto mt-16 max-w-xl rounded-md border border-dashed border-border p-14 text-center">
        <p className="text-6xl animate-flicker">🕯</p>
        <p className="mt-6 font-display text-3xl">Die Tinte ist noch feucht …</p>
        <p className="mt-3 text-muted-foreground">Keine Blog-Beiträge gefunden. Schau bald wieder vorbei!</p>
      </div>
    </>
  );
}
