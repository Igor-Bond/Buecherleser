import { part, ad, gap, RF, AX } from '../tests-lesen-b1.js';

export default {
  id: 'v07', title: 'Variante 7', about: 'Baumarkt · Gesundheit und Beratung · Vorstellungsgespräch, Neueröffnung, Bankfiliale · Nachmittagsbetreuung · Beschwerde über Lärm',
  parts: [
    part(1, [{
      html: `<div class="board"><h3>Baumarkt Hammerfest – Abteilungen</h3>
<p><b>Abteilung 1 – Garten</b> Pflanzen · Blumenerde · Gartenmöbel · Grills · Rasenmäher</p>
<p><b>Abteilung 2 – Werkzeug</b> Bohrmaschinen · Hämmer und Zangen · Schrauben und Nägel · Leitern</p>
<p><b>Abteilung 3 – Farben und Tapeten</b> Wandfarben · Lacke · Pinsel · Tapeten · Klebeband</p>
<p><b>Abteilung 4 – Bad und Sanitär</b> Wasserhähne · Duschen · Waschbecken · Badmöbel · Fliesen</p>
<p><b>Abteilung 5 – Elektro und Licht</b> Lampen · Glühbirnen · Kabel · Steckdosen · Rauchmelder</p>
<p><b>Abteilung 6 – Holz und Bauen</b> Bretter · Holzzuschnitt nach Maß · Türen · Fenster · Bodenbeläge</p>
<p><b>Abteilung 7 – Service am Eingang</b> Information · Umtausch · Schlüsseldienst · Verleih von Maschinen und Anhängern</p></div>`,
      items: [
        { n: 1, q: 'Sie möchten das Kinderzimmer gelb streichen.', opts: ['Abteilung 3', 'Abteilung 6', 'andere Abteilung'], a: 0 },
        { n: 2, q: 'Im Flur ist es dunkel, weil die Glühbirne kaputt ist. Sie brauchen eine neue.', opts: ['Abteilung 2', 'Abteilung 4', 'andere Abteilung'], a: 2 },
        { n: 3, q: 'Sie brauchen für Ihr Regal ein Brett, das genau 82 Zentimeter lang ist.', opts: ['Abteilung 2', 'Abteilung 6', 'andere Abteilung'], a: 1 },
        { n: 4, q: 'Sie möchten für einen Tag eine Maschine ausleihen, mit der man Teppiche reinigen kann.', opts: ['Abteilung 2', 'Abteilung 5', 'andere Abteilung'], a: 2 },
        { n: 5, q: 'Der Wasserhahn in Ihrer Küche tropft. Sie möchten einen neuen kaufen.', opts: ['Abteilung 4', 'Abteilung 2', 'andere Abteilung'], a: 0 },
      ],
    }]),
    part(2, [{
      html: [
        ad('a', 'Apotheke am Markt', 'Wir bringen Ihre Medikamente kostenlos zu Ihnen nach Hause. Bestellen Sie bis 12 Uhr am Telefon – wir liefern noch am selben Tag.'),
        ad('b', 'Physiotherapie Lang', 'Krankengymnastik und Massagen. Termine auch abends bis 20 Uhr. Bitte bringen Sie die Verordnung von Ihrem Arzt mit.'),
        ad('c', 'Optik Sehgut', 'Kostenloser Sehtest ohne Termin. Große Auswahl an Brillen und Kontaktlinsen, auch für Kinder.'),
        ad('d', 'Ernährungsberatung Dr. Morina', 'Gesund essen und langsam abnehmen: Kurse in kleinen Gruppen oder Einzelberatung. Viele Krankenkassen bezahlen einen Teil.'),
        ad('e', 'Hebamme Julia Stern', 'Ich begleite Sie vor und nach der Geburt, beantworte Ihre Fragen und komme auch zu Ihnen nach Hause. Kurse für Schwangere.'),
        ad('f', 'Beratungsstelle „Offenes Ohr“', 'Hilfe bei Stress, Sorgen und Streit in der Familie. Die Gespräche sind kostenlos und anonym, auch auf Russisch und Arabisch.'),
        ad('g', 'Hörgeräte Weiß', 'Hören Sie schlecht? Machen Sie bei uns einen kostenlosen Hörtest. Wir beraten Sie gern.'),
        ad('h', 'Erste-Hilfe-Kurs', 'Für alle, die den Führerschein machen, und für Betriebe. Jeden Samstag 9–16 Uhr, 40 Euro. Die Bescheinigung bekommen Sie sofort.'),
      ].join(''),
      items: [
        { n: 6, q: 'Ihre Mutter ist krank und kann die Wohnung nicht verlassen. Sie braucht dringend ihre Tabletten.', opts: AX, a: 0 },
        { n: 7, q: 'Sie bekommen in vier Monaten Ihr erstes Kind und haben viele Fragen.', opts: AX, a: 4 },
        { n: 8, q: 'Sie machen gerade den Führerschein und brauchen dafür noch einen Kurs.', opts: AX, a: 7 },
        { n: 9, q: 'Sie möchten ein paar Kilo weniger wiegen und wissen nicht, wie Sie richtig essen sollen.', opts: AX, a: 3 },
        { n: 10, q: 'Sie haben seit Wochen rote Flecken auf der Haut und suchen einen Hautarzt.', opts: AX, a: 8 },
      ],
    }], { compact: true }),
    part(3, [
      {
        html: `<p>Sehr geehrter Herr Tran,</p><p>vielen Dank für Ihre Bewerbung als Verkäufer in unserem Elektromarkt. Wir möchten Sie gern kennenlernen und laden Sie zu einem Gespräch am Mittwoch, den 9. April, um 14 Uhr ein. Bitte melden Sie sich an der Information im Erdgeschoss. Das Gespräch dauert ungefähr 45 Minuten.</p><p>Bringen Sie bitte Ihre Zeugnisse im Original mit. Falls Sie an diesem Tag keine Zeit haben, rufen Sie mich bitte bis Freitag an.</p><p>Mit freundlichen Grüßen<br>Sabine Kröger, Personalabteilung</p>`,
        items: [
          { n: 11, q: 'Herr Tran hat die Stelle als Verkäufer schon bekommen.', opts: RF, a: 1 },
          { n: 12, q: 'Herr Tran soll …', opts: ['seine Zeugnisse mitbringen.', 'am Freitag zum Gespräch kommen.', 'seine Bewerbung noch einmal schicken.'], a: 0 },
        ],
      },
      {
        html: `<h4>Neueröffnung!</h4><p>Am Montag, den 2. Juni, öffnet in der Brunnenstraße 14 unser neuer Frischmarkt Peters. In der ersten Woche bekommen Sie auf Obst und Gemüse 20 Prozent Rabatt. Am Eröffnungstag schenken wir den ersten hundert Kunden eine Einkaufstasche.</p><p>Wir haben montags bis samstags von 7 bis 21 Uhr geöffnet. Vor dem Markt gibt es 60 Parkplätze. Für unsere Kunden sind sie zwei Stunden lang kostenlos. Neu: Bestellen Sie im Internet, und wir bringen Ihren Einkauf nach Hause.</p>`,
        items: [
          { n: 13, q: 'Obst und Gemüse sind eine Woche lang billiger.', opts: RF, a: 0 },
          { n: 14, q: 'Die Kunden des Marktes …', opts: ['bekommen alle eine Tasche geschenkt.', 'können auch am Sonntag einkaufen.', 'dürfen zwei Stunden parken, ohne zu bezahlen.'], a: 2 },
        ],
      },
      {
        html: `<p>Sehr geehrte Kundin, sehr geehrter Kunde,</p><p>unsere Filiale in der Bahnhofstraße schließt am 30. September. Ab Oktober beraten wir Sie gern in unserer Filiale am Rathausplatz. Ihre Kontonummer und Ihre Bankkarte bleiben gleich. Sie müssen also nichts tun.</p><p>Der Geldautomat in der Bahnhofstraße bleibt stehen. Dort können Sie weiter Geld abheben und Kontoauszüge drucken. Wenn Sie eine Beratung wünschen, kommen Sie bitte zum Rathausplatz.</p><p>Mit freundlichen Grüßen<br>Ihre Stadtbank Erlenau</p>`,
        items: [
          { n: 15, q: 'In der Bahnhofstraße kann man auch im Oktober noch Geld abheben.', opts: RF, a: 0 },
          { n: 16, q: 'Die Kunden der Bank …', opts: ['bekommen eine neue Bankkarte.', 'behalten ihre Kontonummer.', 'müssen am Rathausplatz ein neues Konto eröffnen.'], a: 1 },
        ],
      },
    ]),
    part(4, [{
      html: `<h4>Nachmittagsbetreuung an der Grundschule am Mühlbach</h4>
<p>Nach dem Unterricht können die Kinder unserer Schule bis 16 Uhr in der Nachmittagsbetreuung bleiben. Zuerst essen alle zusammen in der Mensa zu Mittag. Danach machen die Kinder von 14 bis 15 Uhr ihre Hausaufgaben. Zwei Betreuerinnen helfen ihnen dabei. Sie kontrollieren aber nicht, ob alles richtig ist – das bleibt Aufgabe der Eltern und der Lehrer.</p>
<p>Ab 15 Uhr gibt es verschiedene Angebote: Sport in der Turnhalle, Basteln, Musik oder freies Spielen auf dem Hof. Jedes Kind wählt am Anfang des Halbjahres zwei Angebote aus.</p>
<p>Die Betreuung kostet 45 Euro im Monat. Dazu kommen 3,50 Euro für jedes Mittagessen. Familien mit wenig Geld können einen Antrag stellen und bezahlen dann weniger.</p>
<p>In den Schulferien findet die Betreuung nicht statt. Die Anmeldung gilt immer für ein ganzes Schuljahr. Formulare gibt es im Sekretariat.</p>`,
      items: [
        { n: 17, q: 'Die Betreuerinnen prüfen, ob die Hausaufgaben richtig sind.', opts: RF, a: 1 },
        { n: 18, q: 'Das Mittagessen ist im Preis von 45 Euro schon enthalten.', opts: RF, a: 1 },
        { n: 19, q: 'In den Ferien gibt es keine Nachmittagsbetreuung.', opts: RF, a: 0 },
      ],
    }]),
    part(5, [{
      html: `<p>Sehr geehrter Herr Steinbach,</p>
<p>ich wohne seit vier Jahren in Ihrem Haus in der Ahornstraße 7 und habe mich hier immer wohl ${gap(20)}. Seit einigen Wochen gibt es aber ein Problem, ${gap(21)} ich nicht mehr allein lösen kann.</p>
<p>Die neuen Mieter über mir hören fast jede Nacht bis zwei Uhr laute Musik. Ich muss um fünf Uhr aufstehen und kann ${gap(22)} des Lärms kaum schlafen. Ich habe schon zweimal mit den Nachbarn gesprochen, ${gap(23)} es hat sich nichts geändert.</p>
<p>Ich bitte Sie deshalb, mit den Mietern zu sprechen und sie ${gap(24)} die Hausordnung zu erinnern. Wenn es nicht bald ruhiger ${gap(25)}, muss ich mich leider an den Mieterverein wenden.</p>
<p>Mit freundlichen Grüßen<br>Olga Nowak</p>`,
      items: [
        { n: 20, q: '', opts: ['gefühlt', 'fühlen', 'fühlte'], a: 0 },
        { n: 21, q: '', opts: ['der', 'den', 'das'], a: 2 },
        { n: 22, q: '', opts: ['weil', 'wegen', 'für'], a: 1 },
        { n: 23, q: '', opts: ['aber', 'sondern', 'obwohl'], a: 0 },
        { n: 24, q: '', opts: ['auf', 'für', 'an'], a: 2 },
        { n: 25, q: '', opts: ['werden', 'wird', 'geworden'], a: 1 },
      ],
    }], { gaps: true }),
  ],
};
