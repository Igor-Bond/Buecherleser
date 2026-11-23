import { part, ad, gap, RF, AX } from '../tests-lesen-b1.js';

export default {
  id: 'v36', title: 'Variante 6', about: 'Portal der Arbeitsagentur · Reise- und Freizeitanzeigen · Monatsticket, Schichtzeiten, Elterninitiative · Fahrraddiebstahl · Brief ans Fundbüro',
  parts: [
    part(1, [{
      html: `<div class="board"><h3>Arbeitsagentur Westhafen – Online-Portal</h3>
<p><b>Arbeitslos melden</b> Meldung online · Fristen · benötigte Unterlagen · Änderungen mitteilen</p>
<p><b>Stellensuche</b> Jobbörse · Bewerbungstraining · Vorlagen für den Lebenslauf · Minijobs und Teilzeit</p>
<p><b>Weiterbildung</b> Kurssuche · Bildungsgutschein · Umschulung · Deutsch für den Beruf</p>
<p><b>Geldleistungen</b> Arbeitslosengeld · Bürgergeld · Antrag online stellen · Bescheid verstehen</p>
<p><b>Familie & Kinder</b> Kindergeld · Kinderzuschlag · Wiedereinstieg nach der Elternzeit</p>
<p><b>Ausbildung & Studium</b> Berufsberatung · Ausbildungsplatzbörse · Berufsausbildungsbeihilfe · Praktika</p>
<p><b>Ausländische Abschlüsse</b> Anerkennungsberatung · Zeugnisse übersetzen lassen · zuständige Stellen</p>
<p><b>Selbstständigkeit</b> Gründungsberatung · Gründungszuschuss · Businessplan</p>
<p><b>Arbeitgeber</b> Stelle melden · Förderung bei Einstellungen · Kurzarbeit</p>
<p><b>Termine & Kontakt</b> Termin vereinbaren oder verschieben · Standorte und Öffnungszeiten · Rückruf anfordern</p></div>`,
      items: [
        { n: 1, q: 'Ihr Arbeitsvertrag endet in vier Monaten und wird nicht verlängert. Sie möchten wissen, bis wann Sie das der Agentur mitteilen müssen.', opts: ['Arbeitslos melden', 'Termine & Kontakt', 'andere Rubrik'], a: 0 },
        { n: 2, q: 'Sie haben in Ihrer Heimat als Krankenschwester gearbeitet und möchten erfahren, ob Ihr Diplom in Deutschland gilt.', opts: ['Ausbildung & Studium', 'Weiterbildung', 'andere Rubrik'], a: 2 },
        { n: 3, q: 'Sie sind seit einem halben Jahr ohne Arbeit und möchten einen Kurs in Lagerlogistik besuchen. Sie möchten wissen, ob die Agentur die Kursgebühren übernimmt.', opts: ['Geldleistungen', 'Weiterbildung', 'andere Rubrik'], a: 1 },
        { n: 4, q: 'Ihre Tochter macht nächstes Jahr den Realschulabschluss und weiß noch nicht, welcher Beruf zu ihr passt.', opts: ['Familie & Kinder', 'Ausbildung & Studium', 'andere Rubrik'], a: 1 },
        { n: 5, q: 'Die Agentur hat Ihnen schriftlich mitgeteilt, wie viel Arbeitslosengeld Sie erhalten. Sie verstehen nicht, wie die Summe berechnet wurde.', opts: ['Geldleistungen', 'Arbeitslos melden', 'andere Rubrik'], a: 0 },
      ],
    }], { instr: 'Sie lesen eine Seite im Internet. Lesen Sie die Aufgaben 1–5 und die Übersicht. Wo finden Sie etwas Passendes? Wählen Sie a, b oder c.', ru: 'Прочитайте обзор сайта и выберите подходящую рубрику.' }),
    part(2, [{
      html: [
        ad('a', 'Busreise Prag – 4 Tage', '14.–17.5., Fahrt im mod. Reisebus, 3 Übern. im 3-Sterne-Hotel inkl. Frühst., Stadtführung. 289 € p. P. im DZ, EZ-Zuschlag 60 €. Tel. 0151 555 01 12'),
        ad('b', 'Mitfahrgelegenheit', 'Fahre jeden So. 17 Uhr von Leipzig nach Nürnberg, Fr. mittags zurück. 3 Plätze frei, 16 € pro Strecke. Nichtraucher. Tel. 0151 555 01 19'),
        ad('c', 'Tagesausflug an die Ostsee', 'Sa., 6.6., Abfahrt 6.30 Uhr ZOB, Rückkehr ca. 21 Uhr. 5 Std. Aufenthalt am Strand. 39 €, Kinder bis 12 J. 20 €. Anmeldung: Tel. 0151 555 01 26'),
        ad('d', 'Tagesfahrt Nordsee mit Wattwanderung', 'So., 7.6., Abfahrt 5.45 Uhr Hbf., zurück ca. 22 Uhr. Geführte Wanderung (3 Std.), Teilnahme erst ab 14 J. 45 € p. P. Tel. 0151 555 01 33'),
        ad('e', 'FeWo im Allgäu', '2-Zi.-FeWo, 45 m², bis 3 Pers., Balkon, EBK, Parkplatz. Haustiere nicht erlaubt. 65 €/Nacht zzgl. Endreinigung 40 €, mind. 5 Nächte. Tel. 0151 555 01 41'),
        ad('f', 'Ferienhaus am Waldsee', '80 m², 3 Schlafzi., bis 6 Pers., Garten, Hund willkommen. 110 €/Nacht inkl. NK, Bettwäsche zzgl. 8 € p. P. Frei ab 18.7. Tel. 0151 555 01 48'),
        ad('g', 'Sprachreise Brighton', '2 Wo. Englisch für Jugendl. von 14–17 J., Unterkunft in Gastfamilie, 20 Std. Unterricht/Wo., Termine Juli/Aug. 1.490 € inkl. Flug u. Betreuung. Tel. 0151 555 01 55'),
        ad('h', 'Biete Mitfahrt Leipzig–Nürnberg', 'Jeden Fr. ca. 15 Uhr ab Leipzig Hbf., So. abends zurück. 2 Plätze frei, 18 € pro Strecke, nur kl. Gepäck. Tel. 0151 555 01 62'),
      ].join(''),
      items: [
        { n: 6, q: 'Sie und Ihr Mann möchten im Mai ein paar Tage lang eine Stadt im Ausland besichtigen. Selbst fahren möchten Sie nicht.', opts: AX, a: 0 },
        { n: 7, q: 'Ihre Tochter ist zwölf Jahre alt. In den Sommerferien soll sie im Ausland ihr Englisch verbessern.', opts: AX, a: 8 },
        { n: 8, q: 'Sie möchten mit Ihren beiden Kindern (7 und 9 Jahre) im Juni für einen Tag ans Meer fahren, ohne dort zu übernachten.', opts: AX, a: 2 },
        { n: 9, q: 'Sie wollen im August zu fünft eine Woche Urlaub machen. Ihr Hund soll auch mitkommen.', opts: AX, a: 5 },
        { n: 10, q: 'Sie arbeiten in Leipzig, Ihre Familie wohnt in Nürnberg. Sie möchten jedes Wochenende günstig zu ihr fahren und am Montag wieder bei der Arbeit sein.', opts: AX, a: 7 },
      ],
    }], { compact: true }),
    part(3, [
      {
        html: `<h4>Monatsticket wird ab Januar teurer</h4><p>Brückstadt. Fahrgäste des Stadtverkehrs Brückstadt (SVB) müssen im kommenden Jahr tiefer in die Tasche greifen. Wie das Unternehmen am Dienstag bekannt gab, wird der Preis für das Monatsticket zum 1. Januar von 52 auf 57 Euro angehoben. Begründet wird die Erhöhung mit gestiegenen Energie- und Personalkosten. Einzelfahrscheine und das Sozialticket bleiben dagegen unverändert. „Uns ist bewusst, dass das für viele Pendler eine Belastung ist, aber ohne diese Anpassung müssten wir Linien streichen“, erklärte Unternehmenssprecher Jonas Riedel. Wer sein Ticket als Jahresabo bezieht, zahlt den alten Preis noch bis zum Ende der Vertragslaufzeit. Der Fahrgastverband kritisierte die Entscheidung und forderte stattdessen höhere Zuschüsse der Stadt.</p>`,
        items: [
          { n: 11, q: 'Auch für einzelne Fahrten muss man ab Januar mehr bezahlen.', opts: RF, a: 1 },
          { n: 12, q: 'Kundinnen und Kunden mit einem Jahresabo …', opts: ['zahlen vom 1. Januar an 57 Euro im Monat.', 'bezahlen vorerst nicht mehr als bisher.', 'bekommen einen Zuschuss von der Stadt.'], a: 1 },
        ],
      },
      {
        html: `<p>An alle Mitarbeiterinnen und Mitarbeiter der Produktion</p><p>Ab Montag, dem 2. März, gelten in unserem Werk neue Schichtzeiten: Die Frühschicht beginnt künftig um 5.30 Uhr statt um 6 Uhr und endet um 13.30 Uhr; die Spätschicht dauert von 13.30 bis 21.30 Uhr. Die Nachtschicht bleibt unverändert. Gleichzeitig wird die Arbeitszeit nicht mehr mit Stempelkarten, sondern elektronisch erfasst. Dafür erhalten Sie einen persönlichen Chip, der in der Woche vom 23. Februar im Personalbüro ausgegeben wird. Bitte bringen Sie zur Abholung Ihren Werksausweis mit. Bei Verlust des Chips wird eine Gebühr von 10 Euro erhoben. Fragen beantwortet der Betriebsrat in seiner Sprechstunde am Mittwoch.</p><p>Die Werksleitung<br>Feinmechanik Sattler GmbH</p>`,
        items: [
          { n: 13, q: 'Wer in der Frühschicht arbeitet, muss ab März eine halbe Stunde eher anfangen.', opts: RF, a: 0 },
          { n: 14, q: 'Den Chip für die Zeiterfassung …', opts: ['bekommt man nur gegen eine Gebühr von 10 Euro.', 'verteilt der Betriebsrat in seiner Sprechstunde.', 'holt man mit dem Werksausweis im Personalbüro ab.'], a: 2 },
        ],
      },
      {
        html: `<h4>Elterninitiative „Spielplatz Mühlenwiese“ – wer wir sind</h4><p>Vor zwei Jahren wurde der Spielplatz an der Mühlenwiese wegen defekter Geräte von der Stadt gesperrt. Weil für eine Sanierung kein Geld vorgesehen war, haben wir uns als Eltern aus dem Viertel zusammengeschlossen. Inzwischen sind wir 35 Familien. Durch Flohmärkte, ein Sommerfest und Geldspenden örtlicher Firmen sind bisher 18.000 Euro zusammengekommen. Davon wurden bereits eine Schaukel und ein Klettergerüst angeschafft, die von einer Fachfirma aufgebaut und geprüft wurden. Alle übrigen Arbeiten – Streichen, Pflanzen, Sand austauschen – erledigen wir an jedem ersten Samstag im Monat selbst. Helferinnen und Helfer sind auch ohne eigene Kinder willkommen; Werkzeug wird gestellt.</p>`,
        items: [
          { n: 15, q: 'Die Erneuerung des Spielplatzes wird aus der Stadtkasse bezahlt.', opts: RF, a: 1 },
          { n: 16, q: 'Die neuen Spielgeräte …', opts: ['wurden von Fachleuten aufgestellt.', 'haben die Eltern an einem Samstag selbst montiert.', 'hat eine Firma aus dem Ort geschenkt.'], a: 0 },
        ],
      },
    ]),
    part(4, [{
      html: `<h4>Fahrrad gestohlen – was tun?</h4>
<p>Jahr für Jahr werden in Deutschland sehr viele Fahrräder gestohlen. Wer betroffen ist, sollte schnell und in der richtigen Reihenfolge handeln.</p>
<p>Erstatten Sie zuerst Anzeige bei der Polizei – persönlich auf der Wache oder über die Online-Wache Ihres Bundeslandes. Dafür benötigen Sie möglichst die Rahmennummer, die meist unter dem Tretlager eingeprägt ist, sowie Marke, Farbe und besondere Merkmale. Hilfreich sind außerdem ein Foto und der Kaufbeleg. Sie erhalten eine Bestätigung mit Aktenzeichen.</p>
<p>Melden Sie den Diebstahl anschließend Ihrer Versicherung. Viele Versicherer verlangen, dass dies innerhalb einer Woche geschieht, und zahlen nur, wenn das Rad an einen festen Gegenstand angeschlossen war. Über die Hausratversicherung ist ein Fahrrad in der Regel nur dann mitversichert, wenn es aus einem verschlossenen Raum wie Keller oder Garage entwendet wurde; für Diebstähle auf der Straße ist ein Zusatzvertrag oder eine eigene Fahrradversicherung nötig. Beachten Sie auch: Gezahlt wird meist erst, wenn das Rad nach drei Wochen nicht wieder aufgetaucht ist.</p>
<p>Zur Vorbeugung empfiehlt die Polizei eine Codierung. Dabei wird ein persönlicher Code in den Rahmen graviert, über den der Eigentümer ermittelt werden kann. Codierte Räder lassen sich schwerer weiterverkaufen. Angeboten wird die Codierung von vielen Polizeidienststellen und Fahrradclubs, oft gegen eine geringe Gebühr.</p>`,
      items: [
        { n: 17, q: 'Für ein Fahrrad, das vor einem Geschäft gestohlen wird, reicht die normale Hausratversicherung meistens nicht aus.', opts: RF, a: 0 },
        { n: 18, q: 'Die Versicherung überweist das Geld in der Regel, sobald ihr der Diebstahl gemeldet wurde.', opts: RF, a: 1 },
        { n: 19, q: 'Seinen Rahmen kann man auch bei anderen Stellen als der Polizei kennzeichnen lassen.', opts: RF, a: 0 },
      ],
    }]),
    part(5, [{
      html: `<p>Sehr geehrte Damen und Herren,</p>
<p>am vergangenen Freitag, dem 9. Oktober, bin ich mit dem Regionalexpress um 17.42 Uhr von Hannover nach Göttingen gefahren. Beim Aussteigen ${gap(20)} ich leider meine Sporttasche im Zug vergessen. Sie lag im Wagen 3 auf der Gepäckablage ${gap(21)} dem Fenster.</p>
<p>Es handelt sich ${gap(22)} eine dunkelblaue Tasche mit weißem Reißverschluss. Darin befinden sich Sportschuhe, ein Handtuch und ein Schlüsselbund.</p>
<p>${gap(23)} die Tasche bei Ihnen abgegeben wurde, würde ich sie gern persönlich abholen. Könnten Sie ${gap(24)} bitte mitteilen, zu welchen Zeiten Ihr Büro geöffnet ist? Sollte eine Abholung nicht möglich sein, ${gap(25)} Sie mir die Tasche auch gern zuschicken; die Kosten übernehme ich.</p>
<p>Sie erreichen mich tagsüber unter 0151 555 01 47. Vielen Dank für Ihre Mühe.</p>
<p>Mit freundlichen Grüßen<br>Daniel Okonkwo</p>`,
      items: [
        { n: 20, q: '', opts: ['bin', 'habe', 'war'], a: 1 },
        { n: 21, q: '', opts: ['über', 'zwischen', 'durch'], a: 0 },
        { n: 22, q: '', opts: ['an', 'für', 'um'], a: 2 },
        { n: 23, q: '', opts: ['Falls', 'Damit', 'Obwohl'], a: 0 },
        { n: 24, q: '', opts: ['mich', 'mir', 'ich'], a: 1 },
        { n: 25, q: '', opts: ['müssen', 'wollen', 'können'], a: 2 },
      ],
    }], { gaps: true }),
  ],
};
