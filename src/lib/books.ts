import { publicAsset } from "./site-path";

export type Category = "Spannung" | "Entspannung" | "Magie" | "Ohne Paranormales";
export type Book = { id: number; slug: string; title: string; category: Category; url: string; cover: string; featured: boolean; hasAudio: boolean; description: string };

export const categories: Category[] = ["Spannung", "Entspannung", "Magie", "Ohne Paranormales"];

export const books: Book[] = [
  {
    "id": 83,
    "slug": "k-ein-chihuahua-zu-ostern",
    "title": "K(ein) Chihuahua zu Ostern: Das Geschenk, das alles ändert",
    "category": "Ohne Paranormales",
    "url": "https://amzn.eu/d/fUZkGTI",
    "cover": publicAsset("covers/83.jpg"),
    "featured": false,
    "hasAudio": false,
    "description": "Ein kleiner Hund, Liebe und Ärger mit dem Ex: Die Autorin Bianca Michaelis ist gerade rechtzeitig in Leipzig angekommen, um die Buchmesse zu besuchen, da steht plötzlich ihr Ex vor dem Hotelzimmer und lädt ihr einen süßen Hund auf den Arm. Ehe Bianca ihm dieses ungewollte Geschenk zurückgeben kann, ist er auch schon verschwunden. Ein Liebesbrief in der Pralinenschachtel lässt vermuten, dass Ollie die längst beendete Beziehung wieder aufwärmen will, aber Bianca hatte damals nicht grundlos mit ihm Schluss gemacht. Im Versuch, Ollie noch einzuholen, stolpert Bianca dem attraktiven Joe in die Arme, doch ihm fallen anscheinend weniger Biancas grüne Augen auf, als die geschmacklosen Bunny-Ohren, die Ollie dem Chihuahua aufgesetzt hat. So kommt es zwischen ihr und Joe gleich zu einem bissigen Wortwechsel, der wenig Hoffnung auf eine Fortsetzung der Bekanntschaft macht. Auf einer Autorenparty trifft sie Joe jedoch wieder und beide stellen fest, dass sie mehr gemeinsam haben, als zuerst gedacht. Gerade, als sie sich näher kommen, macht Bianca eine Entdeckung, die alles auf den Kopf stellt, und aus einem geruhsamen Messe-Besuch wird unversehens eine höchst gefährliche Angelegenheit.\nEine Frühlingsnovella zur Leipziger Buchmesse."
  },
  {
    "id": 82,
    "slug": "eine-katze-namens-christmas",
    "title": "Eine Katze namens Christmas: Romantischer Weihnachts-Krimi",
    "category": "Ohne Paranormales",
    "url": "https://amzn.eu/d/inTKz6H",
    "cover": publicAsset("covers/82.jpg"),
    "featured": false,
    "hasAudio": false,
    "description": "Spannung und Romantik für die Vorweihnachtszeit:\nCat hat kein leichtes Erbe angetreten, als sie das Tierheim ihrer Schwester übernimmt. Neben der Ausbildung jeden Tag dorthin zu radeln und die Tiere zu versorgen, ist nicht nur ein finanzielles Problem - das Tierheim liegt nahe am Wald und Cat hat häufiger das Gefühl, jemand würde ihr folgen.\nDann lernt sie auch noch unverhofft einen gutaussehenden Mann mit beeindruckenden grünen Augen kennen, doch scheint er nicht gerade der Retter in der Not zu sein: Es handelt sich nämlich um den örtlichen Schornsteinfeger, der ihr den Betrieb ihres alten Ofens untersagt. Ohne Ofen kann sie jedoch ihre Katzen nicht über den Winter bringen.\nAls sie dann auch noch eine anonyme Botschaft erhält, die andeutet, der Tod ihrer Schwester sei kein Unfall gewesen, steht Cats Leben endgültig Kopf.\n\nBald weiß Cat kaum noch, welches ihrer Probleme sie zuerst angehen soll - und dabei steht Heilig Abend vor der Tür.\nAls sich dann merkwürdige Vorfälle rund um das Tierheim häufen, muss sich zeigen:\n\nBringen Schornsteinfeger wirklich Glück?\n\nJetzt in neuem Gewand!"
  },
  {
    "id": 81,
    "slug": "liebe-hat-einen-vogel",
    "title": "Liebe hat einen Vogel: Mein geheimnisvoller Nachbar",
    "category": "Ohne Paranormales",
    "url": "https://amzn.eu/d/7knLsOG",
    "cover": publicAsset("covers/81.jpg"),
    "featured": false,
    "hasAudio": false,
    "description": "Die kleine Liebeskomödie:\nWer ist Neles neuer Nachbar?\nNichtsahnend kommt Nele nach einem Kurzurlaub in ihre WG und findet ihr Bett besetzt und ihr Zimmer vermietet vor. Ihr bleibt nichts anderes übrig, als ganz schnell eine neue Bleibe zu finden. Als sie die Fotografin Melissa trifft, scheint sich das Problem wunderbar zu lösen: Melissa hat ein Zimmer frei. Es ist hübsch, gut gelegen und außerdem bezahlbar. Doch natürlich hat das Ganze einen Haken. Neles neuen Nachbarn nämlich.\nWie man munkelt, hat er das, was Melissa einen \"Inhaftierungshintergrund\" nennt, und nicht nur die alte Frau Waldscheidt aus dem zweiten Stock hat Angst, er könne ihr nachts im Treppenhaus auflauern. Zunächst findet Nele den geheimnisvollen Nachbarn ganz nett, doch als störende Geräusche aus seiner Wohnung einfach nicht aufhören wollen, kommt es zu einer Aussprache.\nUnd danach ist nichts mehr, wie zuvor.\n\nAndere kleine Liebesromane von Lilly Labord:\n\n\"Eine Katze namens Christmas\"\n\"Der Zitrusclub\"\n\nLilly Labord ist vor allem durch ihre paranormalen Romane bekannt, allen voran \"Zum Kaffee bei Mr. Dalton\"."
  },
  {
    "id": 80,
    "slug": "rosenmaedchen",
    "title": "Rosenmädchen (Lady of treasures 1)",
    "category": "Magie",
    "url": "https://amzn.eu/d/c82Jl35",
    "cover": publicAsset("covers/80.jpg"),
    "featured": false,
    "hasAudio": false,
    "description": "Nima hat in ihrem jungen Leben hauptsächlich eins gelernt: in Bars und Lokalen rote Rosen an Liebende zu verkaufen. Dass merkwürdige Dinge geschehen, wenn jemand sie wirklich wütend macht, blendet sie aus. Eines Abends erscheint ein Fremder mit magischen Fähigkeiten und macht ihr ein unglaubliches Angebot: Sie soll ein privates Studium absolvieren und danach für ihn arbeiten. Nur was steckt hinter dieser großzügigen Offerte?\nAls sie das herausfindet, stellt es alles auf den Kopf, was sie über sich und die Welt weiß. Als sie dann den wagemutigen Finn kennenlernt, scheint ein neues und besseres Leben vor ihr zu liegen. Aber Finn verbirgt seine wahre Identität vor ihr und droht so schließlich alles zu zerstören, auch eine gemeinsame Zukunft.\n\nUpdate: ZWEITEILER - Band 2 \"Juwelenmädchen\" erscheint demnächst\nEin außergewöhnliches SPIN OFF zur magischen Reihe „Zum Kaffee bei Mr. Dalton“"
  },
  {
    "id": 79,
    "slug": "waffeln-fuer-whitehall",
    "title": "Waffeln für Whitehall",
    "category": "Entspannung",
    "url": "https://amzn.eu/d/dLREew1",
    "cover": publicAsset("covers/79.jpg"),
    "featured": false,
    "hasAudio": false,
    "description": "Eine Geschichte voller paranormaler Wesen mit dem Duft frisch gebackener Waffeln: Als Grace vor den Scherben ihrer Ehe steht und überlegt, ein kleines Café zu kaufen, das künftig ihren Lebensunterhalt sichern soll, trifft sie auf Kenneth MacKendrick. Er ist im wahrsten Sinne des Wortes umwerfend: Er fegt Grace aus Versehen so heftig die Stufen zur Londoner U-Bahn hinunter, dass sie verletzt liegenbleibt. Bestürzt über diesen Zusammenprall erweist er sich zunächst als wahrer Gentleman und Grace ist nicht abgeneigt, ihn näher kennen zu lernen, doch bald schon kommen ihr Zweifel: Kann ein Mann so gutaussehend, so betörend und dabei so nett sein? Das müsste ja mit dem Teufel zugehen! Und tatsächlich findet Grace bald heraus, dass dieser charmante Kerl nicht ist, was er zu sein vorgibt. Weshalb trägt er ein geheimnisvolles, schwarzes Armband, das manchmal sonderbar aufleuchtet? Weshalb schickt ihr jemand eine Botschaft, um sie vor Kenneth zu warnen? Als Grace all ihr Geld zusammensucht, um ein Café namens Dongels zu kaufen, ahnt sie nicht, dass sie auf diese Weise auch das Geheimnis um Kenneth lüften wird. Und dass es sehr sonderbare Kräfte gibt, die alles daran setzen, sie an diesem Kauf zu hindern und eine mögliche Romanze mit Kenneth im Keim zu ersticken. Das Buch kann vollkommen unabhängig gelesen werden. Wer allerdings \"Zum Kaffee bei Mr. Dalton\" mag, findet hier die Geschichte des Café und seiner Betreiber wieder."
  },
  {
    "id": 78,
    "slug": "das-kriegen-wir-gebacken",
    "title": "Das kriegen wir gebacken! (Zwei ganz besondere Magier 1)",
    "category": "Entspannung",
    "url": "https://amzn.eu/d/e3myExn",
    "cover": publicAsset("covers/78.jpg"),
    "featured": false,
    "hasAudio": false,
    "description": "Linnea hat sich damit abgefunden, dass all ihre Geschwister hexen können, nur sie nicht. Sie arbeitet inzwischen in einem Café weit fort von Zuhause. Doch nun haben sich ihre Geschwister mitten in der Scheidungsschlacht ihrer Eltern ein Magieverbot eingehandelt. Plötzlich ist Linnea die einzige, die zum alljährlichen Magienachweis zugelassen wird. Gelingt es ihr nicht, ihn zu erbringen, verliert ihre Familie das Recht in einem der nur zwölf magischen Häuser Deutschlands zu leben, einer sogenannten Residenz. Ihre Geschwister heuern den geheimnisvollen Ben von Bergen an, damit er ihr die angeblich einfachste Form der Hexerei vermittelt: das magische Backen. Doch ist er selbst aus der einzigen entsprechenden Fachschule in hohem Bogen hinausgeworfen worden. Wird er Linnea helfen, das Haus ihrer Familie zu erhalten oder bringt er sie erst so richtig in Schwierigkeiten? Immerhin ist er ein Schwarzmagier, wie Linnea bald herausfindet, und seine Abstammung gilt unter Magiern nicht umsonst als legendär.\n\nNeu: Band 4 ist erschienen. Als Ebook und Taschenbuch erhältlich. Ein magischer Roman, der mitten in Deutschland spielt und gute Laune macht. Auch von Lilly Labord:\n\"Zum Kaffee bei Mr. Dalton\"\n\"Das magische Kompendium der Anastasia Bane\"\n\"Waffeln für Whitehall\" und weitere Romane über Hexen, Vampire, Werwölfe und andere Wesen der Schattenwelt."
  },
  {
    "id": 77,
    "slug": "die-torte-der-wuensche",
    "title": "Die Torte der Wünsche",
    "category": "Entspannung",
    "url": "https://amzn.eu/d/elgfQLm",
    "cover": publicAsset("covers/77.jpg"),
    "featured": false,
    "hasAudio": false,
    "description": "Susan führt ein sehr beschauliches Leben, bis unvermittelt der Magier Rory Campell auftaucht und sehr viel Geld für eine falsch zugestellte Torte verlangt. Das sündteure Backwerk war nämlich keine gewöhnliche Torte, sondern dazu gemacht, Wünsche zu erfüllen. Und da Susan den geforderten Betrag nicht aufbringen kann, bleibt ihr nichts anderes übrig, als Rory ersatzweise ihre Fähigkeiten zur Verfügung zu stellen. Doch was kann eine backbegabte ältere Dame einem Magier schon helfen?\nUnd weshalb interessiert sich plötzlich auch ein gefährlicher Mann namens Trenton für sie?\n\nEine ebenso spannende wie herzerwärmende Geschichte von der Autorin von \"Zum Kaffee bei Mr Dalton\" und \"Waffeln für Whitehall\"."
  },
  {
    "id": 76,
    "slug": "ueber-irische-wiesen",
    "title": "Über irische Wiesen",
    "category": "Spannung",
    "url": "https://amzn.eu/d/941mN3q",
    "cover": publicAsset("covers/76.jpg"),
    "featured": true,
    "hasAudio": false,
    "description": "Als Charlotte mit ihrem Hund Maxi nach Irland reist um Aufnahmen für ihren Reiseführer zu machen, gehen sofort einige Dinge schief. Ein Teil des Gepäcks geht verloren und damit auch ihre Kamera. Also bricht sie auf, um sich die Schönheit irischer Wiesen mit der Handykamera zu erschließen. Doch dabei jagt Maxi plötzlich einer kleinen Gestalt nach, die sich gerade noch auf einen Baum retten kann. Und damit beginnt Charlottes Pechsträhne erst richtig, denn das kleine Wesen war ein Leprechaun. Und einen Leprechaun zu kränken, kann einen teuer zu stehen kommen.\nIhr bleibt nichts anderes übrig, als das gefährliche und hochbeleidigte Wesen wieder günstig zu stimmen.\nAber wie? Besonders, da Maxi nicht vorhat, die Fehde ruhen zu lassen.\nAls sie noch darüber nachgrübelt, muss sie feststellen, dass sie zwar noch am selben Ort ist, doch nicht zur selben Zeit.\n\nEine paranormale irische Zeitreise mit Cosy Crime. Kann vollkommen unabhängig von anderen Romanen der Autorin gelesen werden."
  },
  {
    "id": 75,
    "slug": "zauber-und-stab-1",
    "title": "Zauber & Stab 1",
    "category": "Magie",
    "url": "https://amzn.eu/d/5vOgvxI",
    "cover": publicAsset("covers/75.jpg"),
    "featured": true,
    "hasAudio": false,
    "description": "Als Ricarda McIntosh von ihrer Mutter zu einem Casting gebracht wird, ahnt sie nicht, dass eine der kleinsten und mächtigsten Gilden der magischen Welt sie womöglich aufnehmen wird. Doch bereits in den ersten Momenten des Castings gibt es einen Todesfall. Dann steht sie ihrem Zwillingsbruder gegenüber, der angeblich gar keine Gabe besitzt.\nSchnell gerät Ricarda ins Zentrum einer Auseinandersetzung, die von den größten Magiern Englands geführt wird und bei der niemand weiß, wer welches Ziel verfolgt. Eine Freundin findet Ricarda in der Tochter einer weißen Magierin: Aislin Taylor. Aber in Zeiten wie diesen sind solche Freundschaften nicht erwünscht und damit hochgefährlich.\nZauber, Intrige, Freundschaft und die höchste aller magischen Künste."
  },
  {
    "id": 74,
    "slug": "zum-kaffee-bei-mr-dalton",
    "title": "Zum Kaffee bei Mr. Dalton",
    "category": "Magie",
    "url": "https://amzn.eu/d/iIm5GR9",
    "cover": publicAsset("covers/74.jpg"),
    "featured": true,
    "hasAudio": false,
    "description": "Auf der Suche nach einer neuen Stelle lernt Holly den geheimnisvollen Mr. Dalton kennen. Er kann nicht nur Kaffeekannen schweben lassen, sondern offenbar wirkliche, echte Magie wirken. In seinem Auftrag beginnt Holly, Menschen in Notlagen zu helfen. Aber worum geht es dabei wirklich? Warum zeigt sich Mr. Dalton niemandem, sondern schickt Holly? Als sie das begreift, ist sie bereits in eine gefährliche Auseinandersetzung zwischen Magiern verwickelt. Und dann nimmt sie zum ersten Mal in ihrem Leben einen Zauberstab in die Hand!\nDer Beginn einer zauberhaften Serie voll dunkler Magie, Verrat, aber auch unverbrüchlicher Freundschaft, gefährlicher Liebe und wahrem Mut. Mehrteilige Reihe der Autorin von: \"Mr Nigh\" Band 5 ist erschienen!"
  },
  {
    "id": 73,
    "slug": "das-geheimnis-der-blauen-schale",
    "title": "Das Geheimnis der blauen Schale",
    "category": "Magie",
    "url": "https://amzn.eu/d/5cSesYw",
    "cover": publicAsset("covers/73.jpg"),
    "featured": true,
    "hasAudio": false,
    "description": "Gerade, als er einen Klienten retten will, verschägt es den jungen Magier Sean in eine geheimnisvolle Villa mitten in London.\nSchnell findet er heraus, dass er sie nicht mehr verlassen kann.\nDoch weshalb er überhaupt dort gelandet ist, lässt sich nicht so leicht herausfinden. Während er noch versucht, sich den Weg nach draußen zu erzwingen, muss er feststellen, dass er zusammen mit einem der gefährlichsten Zauberer seiner Zeit eingeschlossen ist. Seine einzige Chance, die Villa zu verlassen, besteht darin, seinen Gegnern ein äußerst gefährliches Geheimnis zuzuspielen. Doch dann stellt eine unerwartete Begegnung alles auf den Kopf.\nSpin off zu \"Zum Kaffee bei Mr. Dalton\", das zwei Jahre nach der Hauptserie spielt."
  },
  {
    "id": 72,
    "slug": "der-magische-besen-des-ian-mccormack",
    "title": "Der magische Besen des Ian McCormack",
    "category": "Magie",
    "url": "https://amzn.eu/d/fXDGhpb",
    "cover": publicAsset("covers/72.jpg"),
    "featured": false,
    "hasAudio": false,
    "description": "Als Silvie Stewart Zuflucht vor einem Unwetter sucht, verschlägt es sie in das Haus von Ian McCormack, der als Hexer bekannt war. Sein magischer Besen ist immer noch legendär. Doch er selbst ist seit sechs Jahren verschwunden. Was zunächst nicht mehr als ein interessantes Erlebnis während ihres Schottland-Urlaubs zu sein scheint, birgt ein tieferes Geheimnis, dem Silvie schließlich auf den Grund geht, denn sie erhält den Auftrag, Ian zu finden.\nIhre Suche erweist sich als ziemlich gefährlich und Silvie muss sich bald eingestehen, dass bemerkenswerte Dinge geschehen, wenn jemand den sagenumwobenen Besen in die Hand nimmt."
  },
  {
    "id": 71,
    "slug": "das-magische-kompendium-der-anastasia-bane",
    "title": "Das magische Kompendium der Anastasia Bane",
    "category": "Magie",
    "url": "https://amzn.eu/d/ipRYiCj",
    "cover": publicAsset("covers/71.jpg"),
    "featured": false,
    "hasAudio": false,
    "description": "Anastasia Bane kommt 1888 nach London, um dort ihre magischen Fähigkeiten zu erweitern, aber ihr wird das Zaubern vom Rat der Magier glattweg verboten. Ihre einzige Hoffnung ist die Aufnahme in eine anerkannte magische Organisation, doch weigern sie sich alle, Anastasia in ihre Reihen aufzunehmen. Bis auf eine. Ein kleiner Zirkel voller mittelmäßig begabter Gelegenheitsmagier gibt ihr eine Chance. Sie ahnt nicht, dass sie damit mitten in eine Verschwörung gerät. Bald befindet sie sich in größter Gefahr.\nHilfe bietet ihr ausgerechnet ein eben beschworener Dämon. Doch kann sie ihm trauen oder sollte sie lieber die Unterstützung des geheimnisvollen Mr. Finch in Anspruch nehmen, der offenbar Geld und Einfluss besitzt? Sie muss sich schnellstens entscheiden, denn nun bricht in der magischen Welt ein Sturm los, nach dem nichts mehr so sein wird, wie es war."
  },
  {
    "id": 70,
    "slug": "mr-nigh",
    "title": "Mr. Nigh",
    "category": "Spannung",
    "url": "https://amzn.eu/d/4YBzHhn",
    "cover": publicAsset("covers/70.jpg"),
    "featured": false,
    "hasAudio": false,
    "description": "Für Nell ist bereits bei der ersten Begegnung klar: Mr. Nigh kann nur ein Scharlatan sein. Er behauptet, mit einem Verdächtigen in einem Fall von Bankraub gesprochen zu haben – nach dessen Ableben.\nDoch als sich einiges von dem bewahrheitet, was Mr. Nigh behauptet hat, nimmt Nell noch einmal Kontakt zu ihm auf. Bald geht es bei ihrem Fall buchstäblich um Leben und Tod.\nSie gerät in eine Welt aus Schatten und Licht, voller Geheimnisse und ungelöster Fragen. Nur Nigh könnte ihr jetzt helfen. Doch warum sollte er das tun?\nDrei Bände auf Amazon verfügbar."
  },
  {
    "id": 69,
    "slug": "the-athanor-academy",
    "title": "The Athanor Academy",
    "category": "Magie",
    "url": "https://amzn.eu/d/5lujXqa",
    "cover": publicAsset("covers/69.jpg"),
    "featured": false,
    "hasAudio": false,
    "description": "Eileen Broadcastle will sich nur schnell ein Eis holen, da wird ihr Leben binnen weniger Minuten vollkommen auf den Kopf gestellt. Magier verwechseln sie mit der Erbin eines bedeutenden Zaubertrank-Meisters und versuchen, sie zu entführen. Als ein Fremder namens Zuko Hitoshi sie nach Bradford \"in Sicherheit\" bringt, wünscht sich Eileen nur eins: Nach London zurückzukehren und ihr Studium der Politikwissenschaft aufnehmen. Stattdessen soll sie plötzlich lernen, in einer geheimen Akademie Zaubertränke zu brauen. Widerstrebend lässt sich Eileen auf die Herausforderung ein, ist aber zunächst nur an Liebestränken interessiert, denn mit Zuko hat sie den Mann getroffen, der ihr Herz höherschlagen lässt. Leider scheint er ihr Interesse nicht zu erwidern. Also versucht sie sich an ihrem ersten magischen Gebräu. Doch mit Liebestränken spielt man nicht. Alle drei Bände erschienen."
  }
];

export const getBook = (slug: string) => books.find((b) => b.slug === slug);
