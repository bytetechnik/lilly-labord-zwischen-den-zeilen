import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import md from "@/content/datenschutz.md?raw";
import { PageTitle } from "@/components/site";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung – Lilly Labord" },
      { name: "description", content: "Datenschutzerklärung der Website von Lilly Labord." },
      { property: "og:title", content: "Datenschutz – Lilly Labord" },
      { property: "og:description", content: "Informationen zur Verarbeitung personenbezogener Daten." },
    ],
  }),
  component: Datenschutz,
});

function inline(text: string): ReactNode[] {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g);
  return parts.map((p, i) => {
    const link = p.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) return <a key={i} href={link[2]} className="text-primary underline" target="_blank" rel="noreferrer">{link[1]}</a>;
    if (p.startsWith("**")) return <strong key={i}>{p.slice(2, -2)}</strong>;
    return p;
  });
}

function render(src: string) {
  const blocks = src.split(/\n{2,}/).map((b) => b.trim()).filter(Boolean);
  return blocks.slice(1).map((b, i) => {
    if (b.startsWith("### ")) return <h3 key={i} className="mt-8 text-2xl">{b.slice(4)}</h3>;
    if (b.startsWith("## ")) return <h2 key={i} className="mt-12 text-3xl text-primary">{b.slice(3)}</h2>;
    if (b.startsWith("# ")) return <h2 key={i} className="mt-12 text-4xl">{b.slice(2)}</h2>;
    if (/^(- |\d+\. )/.test(b))
      return (
        <ul key={i} className="ml-6 list-disc space-y-1">
          {b.split("\n").map((l, j) => <li key={j}>{inline(l.replace(/^(- |\d+\. )/, ""))}</li>)}
        </ul>
      );
    return <p key={i}>{inline(b)}</p>;
  });
}

function Datenschutz() {
  return (
    <>
      <PageTitle eyebrow="Rechtliches" title="Datenschutz" />
      <article className="mx-auto max-w-3xl space-y-4 px-6 text-muted-foreground">{render(md)}</article>
    </>
  );
}
