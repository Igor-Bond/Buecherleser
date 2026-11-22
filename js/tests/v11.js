import { part, ad, gap, RF, AX } from '../tests-lesen-b1.js';

export default {
  id: 'v11', title: 'Variante 11', about: 'Berufsschule · Anzeigen · Möbellieferung, Hausaufgabenbetreuung, Wasserzähler · Monatsticket · Falsche Lieferung',
  parts: [
    part(1, [{
      html: `<div class="board"><h3>Berufliche Schule Eichberg – Wegweiser</h3>
<p><b>3. Stock</b> Computerräume 301–306 · Bibliothek und Lernzentrum · Deutschförderkurse</p>
<p><b>2. Stock</b> Klassenräume 201–215 · Lehrerzimmer · Sozialberatung · Berufsberatung (dienstags)</p>
<p><b>1. Stock</b> Sekretariat (Anmeldung, Schulbescheinigungen) · Schulleitung · Krankenzimmer</p>
<p><b>Erdgeschoss</b> Hausmeister (Fundsachen, Schließfächer) · Mensa und Cafeteria · Aula · Kopierraum</p>
<p><b>Untergeschoss</b> Werkstätten Holz und Metall · Lehrküche · Fahrradkeller</p></div>`,
      items: [
        { n: 1, q: 'Sie brauchen für die Krankenkasse eine Bescheinigung, dass Sie Schüler dieser Schule sind.', opts: ['Erdgeschoss', '1. Stock', 'anderer Stock'], a: 1 },
        { n: 2, q: 'Sie haben gestern Ihre Jacke im Klassenraum vergessen. Heute ist sie nicht mehr dort.', opts: ['Erdgeschoss', '2. Stock', 'anderer Stock'], a: 0 },
        { n: 3, q: 'Sie haben heute praktischen Unterricht: Sie lernen, wie man Brot backt.', opts: ['1. Stock', '3. Stock', 'anderer Stock'], a: 2 },
        { n: 4, q: 'Sie möchten wissen, welche Berufe zu Ihnen passen, und suchen Beratung.', opts: ['2. Stock', '1. Stock', 'anderer Stock'], a: 0 },
        { n: 5, q: 'Ihnen ist im Unterricht schlecht geworden. Sie möchten sich kurz hinlegen.', opts: ['3. Stock', '1. Stock', 'anderer Stock'], a: 1 },
      ],
    }]),
    part(2, [{
      html: [
        ad('a', 'Fahrschule Tempo', 'Führerschein Klasse B. Den Theorieunterricht gibt es bei uns auch auf Englisch, Arabisch und Russisch. Intensivkurse in den Ferien.'),
        ad('b', 'Autowerkstatt Demir', 'Reparaturen für alle Marken, Reifenwechsel, TÜV. Termine bekommen Sie bei uns schnell – oft schon am nächsten Tag.'),
        ad('c', 'Busreisen Sonnental', 'Tagesfahrten und Städtereisen, zum Beispiel ein Wochenende in Prag ab 129 Euro mit Hotel und Frühstück.'),
        ad('d', 'Fahrradverleih am Bahnhof', 'Stadträder und E-Bikes für einen Tag oder länger, ab 12 Euro pro Tag. Täglich von 8 bis 19 Uhr geöffnet.'),
        ad('e', 'Verkaufe Kleinwagen', 'Baujahr 2015, 90 000 Kilometer, TÜV neu, sehr sparsam. Preis: 4 200 Euro.'),
        ad('f', 'Taxi Hartmann – Flughafentransfer', 'Wir fahren Sie Tag und Nacht zum Festpreis zum Flughafen. Auch große Taxis für bis zu acht Personen.'),
        ad('g', 'Stellplatz zu vermieten', 'Platz in der Tiefgarage in der Innenstadt, 60 Euro im Monat. Ab sofort frei.'),
        ad('h', 'Radfahrkurs für Erwachsene', 'Sie können noch nicht Rad fahren? Bei uns lernen Sie es in kleinen Gruppen. Fahrräder und Helme haben wir für Sie.'),
      ].join(''),
      items: [
        { n: 6, q: 'Sie möchten den Führerschein machen, verstehen aber schwierige Texte auf Deutsch noch nicht gut.', opts: AX, a: 0 },
        { n: 7, q: 'Sie fliegen mit Ihrer Familie um 5 Uhr morgens in den Urlaub. So früh fährt noch kein Bus.', opts: AX, a: 5 },
        { n: 8, q: 'Sie bekommen am Wochenende Besuch und möchten eine Radtour machen. Ihre Gäste haben aber keine Fahrräder.', opts: AX, a: 3 },
        { n: 9, q: 'Sie wohnen im Zentrum und finden abends nie einen Parkplatz für Ihr Auto.', opts: AX, a: 6 },
        { n: 10, q: 'Sie möchten ein gebrauchtes Motorrad kaufen.', opts: AX, a: 8 },
      ],
    }], { compact: true }),
    part(3, [
      {
        html: `<p>Sehr geehrte Frau Nowak,</p><p>Ihr neuer Kleiderschrank ist bei uns im Lager angekommen. Wir können ihn am Donnerstag, den 21. März, zwischen 8 und 12 Uhr liefern. Unser Fahrer ruft Sie etwa 30 Minuten vorher an.</p><p>Die Lieferung bis in die Wohnung ist im Preis enthalten. Wenn unsere Mitarbeiter den Schrank auch aufbauen sollen, kostet das 49 Euro extra. Bitte teilen Sie uns bis Dienstag mit, ob Ihnen der Termin passt.</p><p>Mit freundlichen Grüßen<br>Möbelhaus Wohnwelt</p>`,
        items: [
          { n: 11, q: 'Frau Nowak muss den Schrank selbst im Lager abholen.', opts: RF, a: 1 },
          { n: 12, q: 'Der Aufbau des Schranks …', opts: ['ist kostenlos.', 'kostet zusätzlich Geld.', 'ist leider nicht möglich.'], a: 1 },
        ],
      },
      {
        html: `<p>Liebe Eltern,</p><p>ab Februar gibt es an unserer Schule eine Hausaufgabenbetreuung. Von Montag bis Donnerstag können die Kinder nach dem Mittagessen bis 15.30 Uhr in Raum 12 ihre Hausaufgaben machen. Zwei Lehrerinnen und einige ältere Schüler helfen ihnen dabei.</p><p>Das Angebot ist kostenlos, aber es gibt nur 25 Plätze. Wenn Sie Ihr Kind anmelden möchten, füllen Sie bitte das Formular aus und geben Sie es bis zum 20. Januar im Sekretariat ab.</p><p>Mit freundlichen Grüßen<br>Karin Vogt, Schulleiterin</p>`,
        items: [
          { n: 13, q: 'Die Hausaufgabenbetreuung gibt es an vier Tagen in der Woche.', opts: RF, a: 0 },
          { n: 14, q: 'Die Eltern …', opts: ['müssen für die Betreuung bezahlen.', 'sollen den Kindern in Raum 12 helfen.', 'müssen ihr Kind mit einem Formular anmelden.'], a: 2 },
        ],
      },
      {
        html: `<h4>Stadtwerke Bergau – Ablesung der Wasserzähler</h4><p>Sehr geehrte Kundinnen und Kunden,</p><p>am Montag, den 4. Dezember, liest unser Mitarbeiter zwischen 9 und 13 Uhr in Ihrem Haus die Wasserzähler ab. Bitte sorgen Sie dafür, dass er in Ihre Wohnung kommen kann. Wenn Sie nicht zu Hause sind, können Sie den Schlüssel einem Nachbarn geben.</p><p>Sie können den Zähler auch selbst ablesen und uns die Zahl bis zum 8. Dezember online mitteilen. Unser Mitarbeiter zeigt Ihnen an der Tür seinen Dienstausweis.</p>`,
        items: [
          { n: 15, q: 'Am 4. Dezember muss man unbedingt selbst zu Hause sein.', opts: RF, a: 1 },
          { n: 16, q: 'Die Kunden können …', opts: ['den Zählerstand im Internet melden.', 'einen anderen Termin am Nachmittag bekommen.', 'die Ablesung am Telefon absagen.'], a: 0 },
        ],
      },
    ]),
    part(4, [{
      html: `<h4>Das Monatsticket der Verkehrsbetriebe Bergau</h4>
<p>Mit dem Monatsticket fahren Sie einen ganzen Monat lang mit allen Bussen und Straßenbahnen in der Stadt. Es kostet 52 Euro. Im Abo, also wenn Sie das Ticket für mindestens zwölf Monate bestellen, bezahlen Sie nur 44 Euro im Monat.</p>
<p>Das Ticket ist persönlich: Ihr Name steht darauf, und nur Sie dürfen damit fahren. Bei einer Kontrolle müssen Sie auch Ihren Ausweis zeigen.</p>
<p>Montags bis freitags ab 19 Uhr und am ganzen Wochenende dürfen Sie einen Erwachsenen und bis zu drei Kinder unter 15 Jahren kostenlos mitnehmen. Ein Fahrrad können Sie nur mitnehmen, wenn Sie dafür eine extra Karte kaufen.</p>
<p>Sie bekommen das Ticket im Kundenzentrum am Hauptbahnhof, an allen Automaten und in unserer App. Wenn Sie Ihr Ticket verlieren, stellen wir Ihnen im Kundenzentrum für 10 Euro ein neues aus.</p>`,
      items: [
        { n: 17, q: 'Das Ticket ist billiger, wenn man es für ein ganzes Jahr bestellt.', opts: RF, a: 0 },
        { n: 18, q: 'Man kann das Ticket auch einem Freund leihen.', opts: RF, a: 1 },
        { n: 19, q: 'Am Samstag darf eine zweite erwachsene Person ohne eigene Fahrkarte mitfahren.', opts: RF, a: 0 },
      ],
    }]),
    part(5, [{
      html: `<p>Sehr geehrte Damen und Herren,</p>
<p>am 12. Oktober habe ich in Ihrem Online-Shop eine schwarze Winterjacke in Größe M bestellt (Bestellnummer 48213). Heute habe ich das Paket bekommen. Leider haben Sie mir ${gap(20)} falsche Jacke geschickt: Sie ist blau und ${gap(21)} zu groß, nämlich Größe XL.</p>
<p>Ich schicke Ihnen die Jacke morgen zurück. Bitte teilen Sie mir mit, ${gap(22)} ich das Porto selbst bezahlen muss.</p>
<p>Ich brauche die Jacke dringend, ${gap(23)} es schon sehr kalt ist. Schicken Sie mir deshalb bitte so schnell wie möglich die richtige Jacke. ${gap(24)} die schwarze Jacke nicht mehr lieferbar ist, überweisen Sie mir bitte das Geld zurück.</p>
<p>Ich warte ${gap(25)} Ihre Antwort.</p>
<p>Mit freundlichen Grüßen<br>Tomasz Wieczorek</p>`,
      items: [
        { n: 20, q: '', opts: ['einen', 'eine', 'einer'], a: 1 },
        { n: 21, q: '', opts: ['viel', 'sehr', 'mehr'], a: 0 },
        { n: 22, q: '', opts: ['dass', 'wenn', 'ob'], a: 2 },
        { n: 23, q: '', opts: ['denn', 'weil', 'deshalb'], a: 1 },
        { n: 24, q: '', opts: ['Falls', 'Ob', 'Als'], a: 0 },
        { n: 25, q: '', opts: ['für', 'über', 'auf'], a: 2 },
      ],
    }], { gaps: true }),
  ],
};
