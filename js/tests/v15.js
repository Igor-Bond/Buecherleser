import { part, ad, gap, RF, AX } from '../tests-lesen-b1.js';

export default {
  id: 'v15', title: 'Variante 15', about: 'Agentur für Arbeit · Anzeigen · Fahrradkeller, Arztpraxis, Schichttausch · Repair-Café · Ferienwohnung',
  parts: [
    part(1, [{
      html: `<div class="board"><h3>Agentur für Arbeit und Jobcenter Talheim – Wegweiser</h3>
<p><b>3. Stock</b> Familienkasse (Kindergeld, Kinderzuschlag) · Geschäftsleitung · Kantine</p>
<p><b>2. Stock</b> Jobcenter: Bürgergeld (Anträge und Leistungen) · Kosten für Miete und Heizung</p>
<p><b>1. Stock</b> Arbeitsvermittlung (Stellenangebote, Hilfe bei Bewerbungen) · Berufsberatung für Jugendliche (Ausbildung, Studium) · Arbeitgeber-Service</p>
<p><b>Erdgeschoss</b> Empfang und Information · Arbeitslos melden · Berufsinformationszentrum mit Computern für die Stellensuche · Kopierer</p></div>`,
      items: [
        { n: 1, q: 'Sie haben Ihre Stelle verloren und möchten sich arbeitslos melden.', opts: ['Erdgeschoss', '1. Stock', 'anderer Stock'], a: 0 },
        { n: 2, q: 'Ihr Sohn ist 16 Jahre alt und weiß noch nicht, welche Ausbildung er machen soll. Er möchte sich beraten lassen.', opts: ['2. Stock', '3. Stock', 'anderer Stock'], a: 2 },
        { n: 3, q: 'Sie haben ein Baby bekommen und möchten Kindergeld beantragen.', opts: ['1. Stock', '3. Stock', 'anderer Stock'], a: 1 },
        { n: 4, q: 'Sie bekommen Bürgergeld. Ihre Miete ist gestiegen, und Sie möchten den neuen Mietvertrag abgeben.', opts: ['Erdgeschoss', '2. Stock', 'anderer Stock'], a: 1 },
        { n: 5, q: 'Sie haben eine kleine Firma und suchen zwei neue Mitarbeiter.', opts: ['3. Stock', 'Erdgeschoss', 'anderer Stock'], a: 2 },
      ],
    }]),
    part(2, [{
      html: [
        ad('a', 'Malerbetrieb Hoxha', 'Wir streichen und tapezieren Wohnungen, Büros und Treppenhäuser – sauber und pünktlich. Das Angebot ist für Sie kostenlos.'),
        ad('b', 'Babysitterin hat Zeit', 'Schülerin (17) passt abends und am Wochenende auf Ihre Kinder auf. 10 Euro pro Stunde. Ich habe selbst zwei kleine Geschwister.'),
        ad('c', 'Elektro Brandl', 'Wir reparieren Waschmaschinen, Kühlschränke und Herde aller Marken. Wir kommen zu Ihnen nach Hause, auch samstags.'),
        ad('d', 'Verkaufe Kinderwagen', 'Gut erhalten, mit Regenschutz, 60 Euro. Sie müssen ihn in Talheim abholen.'),
        ad('e', 'Yoga für Anfänger', 'Jeden Mittwoch um 19 Uhr im Stadtteilzentrum. Die erste Stunde ist kostenlos. Bitte bequeme Kleidung mitbringen.'),
        ad('f', 'Kaufhaus „Zweite Chance“', 'Gebrauchte Waschmaschinen, Kühlschränke und Herde ab 90 Euro, mit einem Jahr Garantie. Wir liefern auch.'),
        ad('g', 'Putzhilfe gesucht', 'Familie sucht einmal pro Woche für drei Stunden Hilfe im Haushalt. 14 Euro pro Stunde.'),
        ad('h', 'Rückengymnastik für Senioren', 'Für alle ab 60 Jahren. Dienstags um 10 Uhr in der Turnhalle der Grundschule.'),
      ].join(''),
      items: [
        { n: 6, q: 'Ihr Kühlschrank kühlt nicht mehr richtig. Sie möchten keinen anderen kaufen, sondern ihn reparieren lassen.', opts: AX, a: 2 },
        { n: 7, q: 'Sie möchten am Samstagabend mit Ihrem Mann ins Kino gehen und brauchen jemanden für Ihre zwei Kinder.', opts: AX, a: 1 },
        { n: 8, q: 'Sie renovieren Ihre Wohnung. Die Wände im Wohnzimmer brauchen eine neue Farbe.', opts: AX, a: 0 },
        { n: 9, q: 'Sie sind 35 Jahre alt und sitzen den ganzen Tag im Büro. Nach der Arbeit möchten Sie sich mehr bewegen.', opts: AX, a: 4 },
        { n: 10, q: 'Sie suchen ein gebrauchtes Kinderbett für Ihren kleinen Sohn.', opts: AX, a: 8 },
      ],
    }], { compact: true }),
    part(3, [
      {
        html: `<p>Liebe Nachbarinnen und Nachbarn,</p><p>in unserem Fahrradkeller stehen viele alte Räder, die niemand mehr benutzt. Deshalb räumen wir am Samstag, den 12. April, ab 10 Uhr gemeinsam auf. Bitte hängen Sie bis Freitag einen Zettel mit Ihrem Namen an Ihr Fahrrad.</p><p>Räder ohne Namen stellen wir zuerst in den Hof. Wenn sich bis Ende April niemand meldet, schenken wir sie der Fahrradwerkstatt für Jugendliche. Für alle, die beim Aufräumen helfen, gibt es Kaffee und Kuchen.</p><p>Viele Grüße<br>Familie Okafor, 2. Stock</p>`,
        items: [
          { n: 11, q: 'Fahrräder ohne Namen werden schon am Samstag verschenkt.', opts: RF, a: 1 },
          { n: 12, q: 'Die Bewohner sollen …', opts: ['ihr Fahrrad am Samstag in den Hof stellen.', 'bis Freitag ihren Namen an ihr Fahrrad hängen.', 'Kaffee und Kuchen mitbringen.'], a: 1 },
        ],
      },
      {
        html: `<h4>Praxis Dr. Marković – Information für unsere Patienten</h4><p>Vom 4. bis zum 15. August ist unsere Praxis wegen Urlaub geschlossen. In dringenden Fällen wenden Sie sich bitte an Frau Dr. Seidel in der Bahnhofstraße 7.</p><p>Rezepte für Medikamente, die Sie regelmäßig nehmen, können Sie noch bis zum 1. August bei uns bestellen – am Telefon oder online. Ab dem 18. August sind wir wieder für Sie da. Neu: Montags haben wir dann bis 19 Uhr Sprechstunde.</p>`,
        items: [
          { n: 13, q: 'Während des Urlaubs können Patienten zu einer anderen Ärztin gehen.', opts: RF, a: 0 },
          { n: 14, q: 'Rezepte …', opts: ['kann man vor dem Urlaub telefonisch bestellen.', 'gibt es erst wieder ab dem 18. August.', 'muss man bei Frau Dr. Seidel bestellen.'], a: 0 },
        ],
      },
      {
        html: `<p>Hallo Dana,</p><p>ich habe eine Bitte: Könntest du am nächsten Donnerstag meine Spätschicht übernehmen? Meine Tochter hat an diesem Tag um 17 Uhr ein Schulkonzert, und ich möchte unbedingt dabei sein. Dafür arbeite ich gern am Samstag für dich, dann hast du ein langes Wochenende.</p><p>Mit unserem Chef, Herrn Brandt, habe ich schon gesprochen. Er ist einverstanden. Sag mir bitte bis morgen Bescheid, damit er den Dienstplan ändern kann.</p><p>Danke und liebe Grüße<br>Mirela</p>`,
        items: [
          { n: 15, q: 'Der Chef weiß schon, dass Mirela die Schicht tauschen möchte.', opts: RF, a: 0 },
          { n: 16, q: 'Mirela möchte am Donnerstag nicht arbeiten, weil …', opts: ['sie ein langes Wochenende haben möchte.', 'ihre Tochter krank ist.', 'sie zu einer Veranstaltung in der Schule gehen will.'], a: 2 },
        ],
      },
    ]),
    part(4, [{
      html: `<h4>Repair-Café im Stadtteilzentrum Talheim</h4>
<p>Ihr Toaster funktioniert nicht mehr, die Lampe ist kaputt oder die Hose hat ein Loch? Werfen Sie die Sachen nicht weg! Im Repair-Café helfen Ihnen Freiwillige, kaputte Dinge zu reparieren. Das ist gut für die Umwelt und spart Geld.</p>
<p>Das Repair-Café findet an jedem ersten Samstag im Monat von 14 bis 17 Uhr statt. Eine Anmeldung ist nicht nötig, aber kommen Sie bitte früh: Nach 16 Uhr nehmen wir keine neuen Geräte mehr an.</p>
<p>Die Hilfe kostet nichts, über eine kleine Spende freuen wir uns. Ersatzteile müssen Sie selbst bezahlen. Wichtig: Sie reparieren zusammen mit unseren Helfern. Sie können Ihr Gerät also nicht einfach abgeben und später abholen.</p>
<p>Große Geräte wie Waschmaschinen oder Fernseher können wir leider nicht reparieren. Während Sie warten, gibt es Kaffee und selbst gebackenen Kuchen.</p>`,
      items: [
        { n: 17, q: 'Für das Repair-Café muss man sich vorher anmelden.', opts: RF, a: 1 },
        { n: 18, q: 'Man bleibt bei der Reparatur dabei und macht selbst mit.', opts: RF, a: 0 },
        { n: 19, q: 'Im Repair-Café werden auch Fernseher repariert.', opts: RF, a: 1 },
      ],
    }]),
    part(5, [{
      html: `<p>Sehr geehrte Frau Lindqvist,</p>
<p>auf Ihrer Internetseite habe ich die Ferienwohnung „Seeblick“ gesehen, die mir sehr gut ${gap(20)}. Ich möchte die Wohnung gern vom 12. bis zum 19. Juli für zwei Erwachsene und zwei Kinder ${gap(21)}. Deshalb möchte ich wissen, ${gap(22)} sie in dieser Zeit noch frei ist.</p>
<p>Außerdem habe ich noch zwei Fragen: Gibt es in der Wohnung ein Kinderbett? Und dürfen wir unseren kleinen Hund ${gap(23)}? Er ist sehr ruhig.</p>
<p>Wir kommen ${gap(24)} dem Auto und brauchen deshalb einen Parkplatz. Bitte schreiben Sie mir auch, wie viel die Wohnung pro Woche kostet und bis ${gap(25)} ich bezahlen muss.</p>
<p>Vielen Dank im Voraus.</p>
<p>Mit freundlichen Grüßen<br>Tomasz Wieczorek</p>`,
      items: [
        { n: 20, q: '', opts: ['gefallen', 'gefällt', 'gefalle'], a: 1 },
        { n: 21, q: '', opts: ['reservieren', 'reserviert', 'reserviere'], a: 0 },
        { n: 22, q: '', opts: ['ob', 'obwohl', 'damit'], a: 0 },
        { n: 23, q: '', opts: ['mitgebracht', 'bringen mit', 'mitbringen'], a: 2 },
        { n: 24, q: '', opts: ['bei', 'von', 'mit'], a: 2 },
        { n: 25, q: '', opts: ['wenn', 'wann', 'wie'], a: 1 },
      ],
    }], { gaps: true }),
  ],
};
