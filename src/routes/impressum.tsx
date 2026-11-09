import { createFileRoute } from "@tanstack/react-router";
import { PageTitle } from "@/components/site";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – Lilly Labord" },
      { name: "description", content: "Impressum der Website von Lilly Labord." },
      { property: "og:title", content: "Impressum – Lilly Labord" },
      { property: "og:description", content: "Angaben gemäß Impressumspflicht." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Impressum,
});

function Impressum() {
  return (
    <>
      <PageTitle eyebrow="Rechtliches" title="Impressum" />
      <div className="parchment-panel mx-auto max-w-xl rounded-md p-10 text-lg shadow-book">
        <p className="font-display text-3xl">Gundel Limberg</p>
        <p className="mt-6 font-semibold">Adresse:</p>
        <p>Europa Allee 165, 60486 Frankfurt</p>
        <p className="mt-6 font-semibold">Kontakt:</p>
        <p>Telefon: <a href="tel:+4915175040338" className="underline">0151 75040338</a></p>
        <p>E-Mail: <a href="mailto:gundel.limberg@web.de" className="underline">gundel.limberg@web.de</a></p>
      </div>
    </>
  );
}
