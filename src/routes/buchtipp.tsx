import { createFileRoute } from "@tanstack/react-router";
import { PageTitle } from "@/components/site";

export const Route = createFileRoute("/buchtipp")({
  head: () => ({
    meta: [
      { title: "Buchtipp: Der Drache im Fabergé-Ei – Lilly Labord" },
      { name: "description", content: "Lillys aktuelle Empfehlung: „Der Drache im Fabergé-Ei“ von C. C. Ravenmiller." },
      { property: "og:title", content: "Lillys Buchtipp: Der Drache im Fabergé-Ei" },
      { property: "og:description", content: "Eine magische Verwechslung mit ungeheuerlichen Folgen." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Tip,
});

function Tip() {
  return (
    <>
      <PageTitle eyebrow="Meine aktuelle Empfehlung" title="Buchtipp" />
      <article className="mx-auto max-w-5xl px-6">
        <div className="parchment-panel grid gap-12 rounded-md p-8 shadow-book md:grid-cols-[1fr_2fr] md:p-14">
          <img src="/covers/tipp.jpg" alt="Der Drache im Fabergé-Ei" className="mx-auto w-64 rotate-[-3deg] rounded-sm shadow-book md:w-full" />
          <div>
            <h2 className="text-5xl">Der Drache im Fabergé-Ei</h2>
            <p className="mt-2 font-display text-xl italic">
              von{" "}
              <a href="https://carinmueller.de/blog/2024-12-16/der-drache-im-faberge-ei" target="_blank" rel="noreferrer" className="underline underline-offset-4">
                C. C. Ravenmiller
              </a>
            </p>
            <p className="mt-6 font-script text-3xl">Eine magische Verwechslung mit ungeheuerlichen Folgen</p>
            <div className="mt-6 space-y-4 text-lg">
              <p>
                Liam Mackenzie hat ein Problem. Als Chefauktionator von Edinburgh Fine Arts & Antiquities sollte er sich
                eigentlich auf den größten Deal seiner Karriere konzentrieren: Die Versteigerung eines legendären Fabergé-Eis
                für mehrere Millionen Pfund. Stattdessen steht er vor der Frage, was man einem Drachen-Baby zum Abendessen
                serviert – denn genau das ist aus besagtem Ei soeben geschlüpft.
              </p>
              <p>
                Während Liam noch an seiner Realitätswahrnehmung zweifelt und seine Töchter bereits Namen für den
                unerwarteten Mitbewohner diskutieren, macht sich die geheimnisvolle Aislinn Silvermist auf die Jagd nach dem
                verschwundenen »Heilsbringer« der magischen Welt. Dass ausgerechnet ein pragmatischer Kunstexperte, zwei
                Teenager-Mädchen und ein sehr entspannter Corgi ihre Mission durchkreuzen könnten, hatte die sonst so clevere
                Fee allerdings nicht eingeplant.
              </p>
              <p className="border-t border-ink/20 pt-4 italic">
                Eine wirklich schöne kleine Geschichte mit Drachen-Feeling, bei der die Leserinnen und Leser verständlicherweise
                nach mehr verlangt haben. Deswegen hat die Autorin sich mit mir und zwei anderen Autoren zusammengetan und ab
                November 2025 gibt es eine Urban-Fantasy-Drachenreihe, die alle Fragen aus der Geschichte beantwortet und noch
                viel mehr.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
