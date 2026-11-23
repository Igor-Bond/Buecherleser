import { part, ad, gap, RF, AX } from '../tests-lesen-b1.js';

export default {
  id: 'v25', title: 'Variante 5', about: 'Bahnhof · Gesundheit und Einkauf · Rückenschule, Kursausflug, Fahrradkeller · Wochenmarkt · Reklamation im Online-Shop',
  parts: [
    part(1, [{
      html: `<div class="board"><h3>Hauptbahnhof Neustetten – Wegweiser</h3>
<p><b>Obergeschoss</b> Restaurant „Gleisblick“ · Wartesaal · Fundbüro · Bahnhofsmission</p>
<p><b>Erdgeschoss</b> Reisezentrum (Fahrkarten und Beratung) · Fahrkartenautomaten · Bäckerei · Zeitungen und Bücher · Apotheke</p>
<p><b>Untergeschoss</b> Schließfächer · Toiletten und Duschen · Supermarkt · Blumenladen · Zugang zur U-Bahn</p>
<p><b>Bahnhofsvorplatz</b> Taxi · Busbahnhof · Fahrradparkhaus · Autovermietung</p></div>`,
      items: [
        { n: 1, q: 'Sie haben gestern im Zug Ihren Regenschirm vergessen. Sie möchten fragen, ob ihn jemand abgegeben hat.', opts: ['Erdgeschoss', 'Obergeschoss', 'anderer Bereich'], a: 1 },
        { n: 2, q: 'Sie möchten drei Stunden in die Stadt gehen und Ihren schweren Koffer so lange im Bahnhof einschließen.', opts: ['Erdgeschoss', 'Obergeschoss', 'anderer Bereich'], a: 2 },
        { n: 3, q: 'Sie brauchen eine Fahrkarte nach Wien und möchten vorher mit einer Mitarbeiterin über die beste Verbindung sprechen.', opts: ['Erdgeschoss', 'Untergeschoss', 'anderer Bereich'], a: 0 },
        { n: 4, q: 'Ihr Zug hat eine Stunde Verspätung. Sie möchten in Ruhe sitzen und warten, aber nichts essen oder trinken.', opts: ['Untergeschoss', 'Obergeschoss', 'anderer Bereich'], a: 1 },
        { n: 5, q: 'Sie sind mit dem Rad zum Bahnhof gekommen und möchten es für zwei Tage sicher abstellen.', opts: ['Erdgeschoss', 'Untergeschoss', 'anderer Bereich'], a: 2 },
      ],
    }]),
    part(2, [{
      html: [
        ad('a', 'Rückenschule im Gesundheitszentrum Vital', 'Acht Termine, immer donnerstags um 18.30 Uhr. Mit einfachen Übungen machen Sie Ihren Rücken stark. Viele Krankenkassen zahlen einen Teil der Kosten.'),
        ad('b', 'Schuhmacher Brenner', 'Wir reparieren Ihre Schuhe: neue Absätze und Sohlen, meistens in zwei Tagen fertig. Auch Taschen und Gürtel.'),
        ad('c', 'Gemüsekiste vom Sonnenhof', 'Jede Woche bringen wir Ihnen frisches Obst und Gemüse aus der Region bis an die Wohnungstür. Sie bestellen einfach im Internet.'),
        ad('d', 'Yoga am Vormittag', 'Für Anfängerinnen und Anfänger, dienstags um 9.30 Uhr im Familienzentrum. Im Raum nebenan passen wir auf Ihre kleinen Kinder auf.'),
        ad('e', 'Schwimmkurs für Erwachsene', 'Sie können nicht schwimmen? In zehn Stunden lernen Sie es bei uns. Samstags um 8 Uhr im Stadtbad. Teilnahme ab 18 Jahren.'),
        ad('f', 'Vortrag „Gesund essen“', 'Eine Ernährungsberaterin gibt Tipps für den Alltag. Am 12. März um 19 Uhr in der Volkshochschule. Der Eintritt ist frei.'),
        ad('g', 'Sport Lenz', 'Laufschuhe und Wanderschuhe für Damen und Herren – diese Woche sind alle Modelle 30 Prozent billiger. Wir beraten Sie gern.'),
        ad('h', 'Wandergruppe „Gut zu Fuß“', 'Jeden zweiten Sonntag wandern wir 10 bis 15 Kilometer in der Umgebung. Wir fahren zusammen mit dem Zug. Gäste sind willkommen.'),
      ].join(''),
      items: [
        { n: 6, q: 'Sie sitzen den ganzen Tag im Büro und haben oft Rückenschmerzen. Sie suchen einen Kurs, den Sie nach der Arbeit besuchen können.', opts: AX, a: 0 },
        { n: 7, q: 'Ihre Tochter ist sechs Jahre alt und soll schwimmen lernen.', opts: AX, a: 8 },
        { n: 8, q: 'An Ihrem Lieblingsschuh ist der Absatz abgebrochen. Sie möchten das Paar nicht wegwerfen.', opts: AX, a: 1 },
        { n: 9, q: 'Sie möchten sich mehr bewegen. Zeit haben Sie nur dienstags und mittwochs am Vormittag, und Ihr zweijähriger Sohn muss mitkommen.', opts: AX, a: 3 },
        { n: 10, q: 'Sie essen gern frisches Gemüse aus der Region, haben aber wenig Zeit zum Einkaufen.', opts: AX, a: 2 },
      ],
    }], { compact: true }),
    part(3, [
      {
        html: `<p>Sehr geehrter Herr Baranov,</p><p>vielen Dank für Ihre Anmeldung zum Gesundheitskurs „Rückenschule“. Der Kurs beginnt am Montag, den 3. März, um 18 Uhr im Sportzentrum Am Weiher und hat zehn Termine. Bitte bringen Sie bequeme Kleidung und ein Handtuch mit. Matten gibt es im Kursraum.</p><p>Der Kurs kostet 120 Euro. Diese Summe bezahlen Sie zuerst selbst. Wenn Sie mindestens achtmal teilgenommen haben, überweisen wir Ihnen 100 Euro zurück. Schicken Sie uns dafür nach dem Kurs die Teilnahmebestätigung.</p><p>Mit freundlichen Grüßen<br>Ihre Krankenkasse VitaPlus</p>`,
        items: [
          { n: 11, q: 'Herr Baranov muss eine eigene Matte zum Kurs mitbringen.', opts: RF, a: 1 },
          { n: 12, q: 'Die Krankenkasse überweist Herrn Baranov 100 Euro, …', opts: ['sobald er sich angemeldet hat.', 'bevor der Kurs beginnt.', 'wenn er bei mindestens acht Terminen dabei war.'], a: 2 },
        ],
      },
      {
        html: `<p>Liebe Kursteilnehmerinnen und Kursteilnehmer,</p><p>für Samstag sind leider starker Regen und Sturm angesagt. Deshalb können wir unsere Wanderung am Silbersee nicht machen. Wir fahren aber trotzdem zusammen weg: Statt an den See fahren wir nach Lindenburg und besuchen dort das Stadtmuseum.</p><p>Wir treffen uns nicht wie geplant um 8 Uhr, sondern erst um 9.15 Uhr am Hauptbahnhof vor dem Reisezentrum. Der Zug fährt um 9.40 Uhr. Die Gruppenfahrkarte habe ich schon gekauft. Für das Museum braucht jeder 4 Euro. Wer nicht mitkommen möchte, schreibt mir bitte bis Donnerstag.</p><p>Viele Grüße<br>Katrin Albers</p>`,
        items: [
          { n: 13, q: 'Der Ausflug findet am Samstag statt, aber die Gruppe fährt an einen anderen Ort.', opts: RF, a: 0 },
          { n: 14, q: 'Die Teilnehmerinnen und Teilnehmer …', opts: ['treffen sich später als geplant.', 'müssen ihre Fahrkarte am Bahnhof selbst kaufen.', 'sollen Frau Albers schreiben, wenn sie mitkommen.'], a: 0 },
        ],
      },
      {
        html: `<h4>Der Fahrradkeller wird aufgeräumt</h4><p>Liebe Hausbewohnerinnen und Hausbewohner,</p><p>in unserem Fahrradkeller stehen viele alte Räder, die niemand mehr benutzt. Deshalb räumen wir am 28. April auf. Bitte hängen Sie bis zum 25. April einen Zettel mit Ihrem Namen an Ihr Fahrrad. Die Zettel finden Sie in Ihrem Briefkasten.</p><p>Räder ohne Namen stellen wir in die Garage neben dem Haus. Dort können Sie sie noch vier Wochen lang abholen. Danach geben wir sie an einen Verein, der sie repariert und verschenkt. Kinderwagen dürfen weiter im Keller stehen.</p><p>Hausverwaltung Kolb</p>`,
        items: [
          { n: 15, q: 'Fahrräder ohne Namenszettel werden schon am 28. April verschenkt.', opts: RF, a: 1 },
          { n: 16, q: 'Die Bewohner sollen …', opts: ['ihre Räder bis zum 25. April aus dem Keller holen.', 'ihr Fahrrad mit ihrem Namen markieren.', 'ihre Kinderwagen in die Garage bringen.'], a: 1 },
        ],
      },
    ]),
    part(4, [{
      html: `<h4>Wochenmarkt oder Supermarkt – wo kauft man besser ein?</h4>
<p>Die meisten Menschen in Hallstedt kaufen ihre Lebensmittel im Supermarkt. Das ist praktisch: Die Geschäfte sind von früh bis spät geöffnet, und man bekommt dort alles an einem Ort – vom Brot bis zum Waschmittel.</p>
<p>Andere gehen lieber auf den Wochenmarkt. Er findet jeden Mittwoch und jeden Samstag von 7 bis 13 Uhr auf dem Rathausplatz statt. Die meisten Händler kommen aus der Region und verkaufen Obst, Gemüse, Eier und Käse vom eigenen Hof. Man darf die Ware probieren und kann die Händler fragen, wie man sie am besten kocht.</p>
<p>Billiger ist der Markt aber nicht immer. Besonders Fleisch und Käse kosten dort oft mehr als im Supermarkt. Obst und Gemüse der Saison, zum Beispiel Erdbeeren im Juni, sind dagegen häufig günstiger. Ein Tipp: Kurz vor 13 Uhr senken viele Händler die Preise, weil sie ihre Ware nicht wieder mitnehmen wollen.</p>
<p>Bezahlen kann man an den meisten Ständen nur bar. Bringen Sie am besten auch eine eigene Tasche mit – Plastiktüten gibt es auf dem Markt seit dem letzten Jahr nicht mehr.</p>`,
      items: [
        { n: 17, q: 'Auf dem Wochenmarkt in Hallstedt kann man an jedem Werktag einkaufen.', opts: RF, a: 1 },
        { n: 18, q: 'Wer erst am Ende der Marktzeit kommt, bezahlt oft weniger.', opts: RF, a: 0 },
        { n: 19, q: 'An fast allen Marktständen kann man mit Karte bezahlen.', opts: RF, a: 1 },
      ],
    }]),
    part(5, [{
      html: `<p>Sehr geehrte Damen und Herren,</p>
<p>am 2. Oktober habe ich in Ihrem Online-Shop ein Paar schwarze Winterstiefel in Größe 39 bestellt (Bestellnummer 77-4120). Gestern ist das Paket endlich angekommen. Leider habe ich aber nicht die Stiefel bekommen, ${gap(20)} ich bestellt habe: Im Karton waren braune Halbschuhe in Größe 41.</p>
<p>Ich schicke Ihnen die falschen Schuhe heute zurück. Bitte ${gap(21)} Sie mir so schnell wie möglich die richtigen Stiefel. Ich brauche sie dringend, ${gap(22)} es bald kalt wird.</p>
<p>Außerdem möchte ich Sie bitten, die Kosten ${gap(23)} die Rücksendung zu übernehmen, denn der Fehler liegt nicht bei mir.</p>
<p>Falls die Stiefel nicht mehr lieferbar sind, überweisen Sie mir bitte den Kaufpreis von 89,90 Euro ${gap(24)} mein Konto zurück.</p>
<p>Für Ihre Hilfe danke ich Ihnen im ${gap(25)}.</p>
<p>Mit freundlichen Grüßen<br>Samira Haddad</p>`,
      items: [
        { n: 20, q: '', opts: ['den', 'der', 'die'], a: 2 },
        { n: 21, q: '', opts: ['liefert', 'liefern', 'geliefert'], a: 1 },
        { n: 22, q: '', opts: ['weil', 'deshalb', 'denn'], a: 0 },
        { n: 23, q: '', opts: ['von', 'über', 'für'], a: 2 },
        { n: 24, q: '', opts: ['zu', 'auf', 'bei'], a: 1 },
        { n: 25, q: '', opts: ['Voraus', 'Vorher', 'Vorteil'], a: 0 },
      ],
    }], { gaps: true }),
  ],
};
