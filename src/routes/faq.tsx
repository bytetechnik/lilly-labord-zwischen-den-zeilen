import { createFileRoute } from "@tanstack/react-router";
import { PageTitle } from "@/components/site";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Häufig gestellte Fragen – Lilly Labord" },
      { name: "description", content: "Wo gibt es Lillys Bücher, Hörbücher, Lesereihenfolge, Signaturen und das nächste Buch." },
      { property: "og:title", content: "FAQ – Lilly Labord" },
      { property: "og:description", content: "Antworten auf die häufigsten Fragen rund um Lillys Bücher." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Faq,
});

const faqs = [
  ["Wo kann ich deine Bücher kaufen?", 'Meine E-Books findest du überwiegend auf Amazon.de, einige sind jedoch auch über alle anderen Onlineshops erhältlich, darunter "Ordo Draconis" und "Die Torte der Wünsche".'],
  ["Gibt es deine Bücher auch als Hörbücher?", "Ja, sogar recht viele. Einige gibt es nur bei Audible, Amazon und iTunes, aber einige sind überall im Online-Handel zu finden und können auch gestreamt werden."],
  ["In welcher Reihenfolge sollte ich die Bücher lesen?", 'Da gibt es mehrere Möglichkeiten. "Zum Kaffee bei Mr. Dalton" ist der beste Ausgangspunkt, gut eignet sich aber auch "Das magische Kompendium der Anastasia Bane", das die Vorgeschichte erzählt. Danach kann man dann die Reihe lesen, die an die Hauptreihe anschließt: "Der Gedächtnispalast des Lionel Tiptree".\n\nIn den kleineren Reihen wie bei Mr. Nigh empfehle ich unbedingt die Reihenfolge einzuhalten, weil es eine überspannende Geschichte gibt, die in Band 4 aufgelöst wird. Es finden sich aber auch einige Romane, die unabhängig von Reihen sind, darunter "Über irische Wiesen", "Der magische Besen", "Die Torte der Wünsche." Da kannst du einfach irgendwo einsteigen.'],
  ["Wann erscheint das nächste Buch?", "Das nächste Buch erscheint im März 2026, direkt gefolgt von einem weiteren im April. Wer mir auf Amazon.de folgt, bekommt eine Benachrichtigungsmail direkt von Amazon."],
  ["Kann ich deine Bücher signiert bekommen?", "Ja, falls wir uns auf Messen oder anderen Veranstaltungen sehen. Versenden kann ich leider keine."],
  ["Wo bekomme ich mehr Informationen zu Schattenwelt, in der du mit Kay Noa zusammen schreibst?", "Sehr bald wird eine neue Seite aus der Taufe gehoben, wo du ein richtiges Wiki finden wirst, das es erlaubt, jede Person und viele Details zu finden und dazu viele Informationen. Sobald sie online ist, werde ich das hier natürlich feiern."],
];

function Faq() {
  return (
    <>
      <PageTitle eyebrow="Fragen & Antworten" title="Häufig gestellte Fragen" />
      <div className="mx-auto max-w-3xl space-y-4 px-6">
        {faqs.map(([q, a], i) => (
          <details key={q} className="group rounded-md border border-border bg-card p-6 open:border-primary open:shadow-glow">
            <summary className="flex cursor-pointer list-none items-start gap-5 font-display text-2xl">
              <span className="text-primary">{["I", "II", "III", "IV", "V", "VI"][i]}.</span>
              <span className="flex-1">{q}</span>
              <span className="text-primary transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 whitespace-pre-line pl-12 text-muted-foreground">{a}</p>
          </details>
        ))}
      </div>
    </>
  );
}
