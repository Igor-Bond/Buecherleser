import { part, ad, gap, RF, AX } from '../tests-lesen-b1.js';

export default {
  id: 'v26', title: 'Variante 6', about: 'Seniorenheim · Anzeigen · Besuchszeiten, Fahrrad als Geschenk, Hofflohmarkt · Ganztagsbetreuung · Brief an den Vermieter',
  parts: [
    part(1, [{
      html: `<div class="board"><h3>Seniorenheim Haus Lindenhof – Wegweiser</h3>
<p><b>3. Stock</b> Wohnbereich C (Zimmer 301–324) · Bibliothek · Dachterrasse</p>
<p><b>2. Stock</b> Wohnbereich B (Zimmer 201–224) · Arztzimmer · Krankengymnastik</p>
<p><b>1. Stock</b> Wohnbereich A (Zimmer 101–124) · Friseur · Fußpflege · Kapelle</p>
<p><b>Erdgeschoss</b> Empfang · Heimleitung und Verwaltung · Speisesaal · Cafeteria · Veranstaltungssaal</p>
<p><b>Untergeschoss</b> Küche · Wäscherei · Lager</p></div>`,
      items: [
        { n: 1, q: 'Sie besuchen Ihre Großmutter. Sie wohnt in Zimmer 217.', opts: ['1. Stock', '2. Stock', 'anderer Stock'], a: 1 },
        { n: 2, q: 'Sie suchen einen Platz für Ihren Vater und haben einen Termin bei der Leiterin des Hauses.', opts: ['Erdgeschoss', '3. Stock', 'anderer Stock'], a: 0 },
        { n: 3, q: 'Ihre Tante möchte sich die Haare schneiden lassen. Sie begleiten sie.', opts: ['Erdgeschoss', '2. Stock', 'anderer Stock'], a: 2 },
        { n: 4, q: 'Sie arbeiten ehrenamtlich im Haus und lesen den Bewohnern am Nachmittag vor. Vorher möchten Sie ein Buch ausleihen.', opts: ['2. Stock', '3. Stock', 'anderer Stock'], a: 1 },
        { n: 5, q: 'Ihr Onkel kann nach einer Operation schlecht gehen. Heute macht der Therapeut mit ihm Übungen für die Beine. Sie bringen ihn hin.', opts: ['1. Stock', 'Untergeschoss', 'anderer Stock'], a: 2 },
      ],
    }]),
    part(2, [{
      html: [
        ad('a', 'Fahrrad-Flohmarkt', 'Am Samstag von 10 bis 14 Uhr auf dem Hof der Goetheschule. Gebrauchte Räder für Kinder und Erwachsene schon ab 30 Euro.'),
        ad('b', 'Radwerkstatt Kette & Co.', 'Bremsen, Licht, Reifen – wir reparieren alles, meistens in 24 Stunden. Sie brauchen keinen Termin.'),
        ad('c', 'Zweirad Böhm', 'Neue Fahrräder, E-Bikes und Zubehör. Sie suchen ein Geschenk? Bei uns gibt es Gutscheine ab 20 Euro.'),
        ad('d', 'Hausaufgabenhilfe im Stadtteiltreff', 'Für Grundschulkinder, Montag bis Donnerstag von 14 bis 16 Uhr. Kostenlos, aber nur mit Anmeldung. Nicht in den Schulferien.'),
        ad('e', 'Babysitterin hat Zeit', 'Schülerin (17) passt abends und am Wochenende auf Ihre Kinder auf. 10 Euro pro Stunde. Ich habe selbst zwei kleine Brüder.'),
        ad('f', 'Ferienprogramm im Jugendhaus', 'In den Sommerferien für Kinder von 6 bis 12 Jahren: Sport, Basteln und Ausflüge. Montag bis Freitag von 8 bis 16 Uhr.'),
        ad('g', 'Seniorenheim St. Anna sucht Ehrenamtliche', 'Haben Sie eine Stunde pro Woche frei? Gehen Sie mit unseren Bewohnern spazieren, spielen Sie Karten oder lesen Sie ihnen vor.'),
        ad('h', 'Reinigungsfirma Blitzblank sucht Mitarbeiter', 'Sie putzen Treppenhäuser und Büros, Montag bis Freitag von 6 bis 9 Uhr. Erfahrung ist nicht nötig.'),
      ].join(''),
      items: [
        { n: 6, q: 'Sie möchten am Samstagabend mit Ihrem Mann ins Theater gehen. Jemand muss in dieser Zeit bei Ihren zwei Kindern bleiben.', opts: AX, a: 4 },
        { n: 7, q: 'Ihr Kollege geht in Rente und fährt gern Rad. Sie haben mit den anderen Kollegen Geld gesammelt. Er soll sich selbst etwas aussuchen können.', opts: AX, a: 2 },
        { n: 8, q: 'Ihre Mutter ist 85 Jahre alt und kann nicht mehr allein wohnen. Sie suchen für sie einen Platz in einem Heim.', opts: AX, a: 8 },
        { n: 9, q: 'Sie haben viel Freizeit und möchten etwas für ältere Menschen tun. Geld möchten Sie dafür nicht haben.', opts: AX, a: 6 },
        { n: 10, q: 'Im August müssen Sie jeden Tag bis 15 Uhr arbeiten. Ihr achtjähriger Sohn hat dann keine Schule und kann nicht allein zu Hause bleiben.', opts: AX, a: 5 },
      ],
    }], { compact: true }),
    part(3, [
      {
        html: `<p>Liebe Angehörige,</p><p>ab dem 1. Mai ändern wir unsere Besuchszeiten. Sie können Ihre Verwandten dann täglich von 10 bis 12 Uhr und von 14.30 bis 19 Uhr besuchen. Dazwischen ruhen sich viele Bewohner aus. Deshalb bitten wir Sie, in dieser Zeit nicht zu kommen.</p><p>Eine Ausnahme ist der Sonntag: Dann können Sie zusammen mit Ihren Verwandten im Speisesaal zu Mittag essen. Das Essen kostet für Gäste 6,50 Euro. Bitte melden Sie sich dafür immer bis Freitag am Empfang an.</p><p>Mit freundlichen Grüßen<br>Renate Vogt, Heimleitung Haus Lindenhof</p>`,
        items: [
          { n: 11, q: 'Wer am Sonntag im Heim mitessen möchte, muss vorher Bescheid sagen.', opts: RF, a: 0 },
          { n: 12, q: 'Die neuen Besuchszeiten …', opts: ['gelten nur am Wochenende.', 'haben am Mittag eine Pause.', 'beginnen erst am Nachmittag.'], a: 1 },
        ],
      },
      {
        html: `<p>Hallo zusammen,</p><p>wie ihr wisst, wird Jonas am 14. Juni vierzig. Sein altes Fahrrad wurde im Frühling gestohlen, und seitdem fährt er mit dem Bus zur Arbeit. Meine Idee: Wir kaufen ihm zusammen ein neues Rad. Im Fahrradladen in der Mühlgasse habe ich ein gutes gesehen. Es kostet 480 Euro. Wenn alle acht mitmachen, sind das 60 Euro pro Person. Wem das zu viel ist, der gibt einfach weniger – den Rest bezahle ich.</p><p>Bitte überweist mir das Geld bis zum 5. Juni. Und ganz wichtig: Sagt Jonas nichts, es soll eine Überraschung sein!</p><p>Liebe Grüße<br>Elif</p>`,
        items: [
          { n: 13, q: 'Jonas weiß schon, was er zum Geburtstag bekommt.', opts: RF, a: 1 },
          { n: 14, q: 'Elif möchte, dass die Freunde …', opts: ['ihr das Geld Anfang Juni geben, wenn sie Jonas besuchen.', 'ihr bis zum 5. Juni Geld für das Geschenk schicken.', 'das Fahrrad zusammen im Laden aussuchen.'], a: 1 },
        ],
      },
      {
        html: `<h4>Flohmarkt im Hof der Birkenallee 12–16</h4><p>Liebe Nachbarinnen und Nachbarn,</p><p>am Samstag, den 9. September, machen wir von 10 bis 15 Uhr einen Flohmarkt in unserem Hof. Alle Bewohner können mitmachen und Kleidung, Bücher, Spielzeug oder Geschirr verkaufen. Der Platz kostet nichts, aber Sie müssen Ihren Tisch selbst mitbringen.</p><p>Bitte tragen Sie sich bis zum 1. September in die Liste im Hausflur von Nummer 14 ein. Dann wissen wir, wie viele Stände es gibt. Was Sie nicht verkauft haben, nehmen Sie am Ende bitte wieder mit in Ihre Wohnung. Bei Regen verschieben wir den Flohmarkt um eine Woche.</p><p>Ihr Hausbeirat</p>`,
        items: [
          { n: 15, q: 'Bei schlechtem Wetter findet der Flohmarkt an einem späteren Tag statt.', opts: RF, a: 0 },
          { n: 16, q: 'Wer etwas verkaufen möchte, …', opts: ['bezahlt für den Platz eine kleine Gebühr.', 'bekommt vom Hausbeirat einen Tisch.', 'muss seinen Namen auf eine Liste schreiben.'], a: 2 },
        ],
      },
    ]),
    part(4, [{
      html: `<h4>Ganztagsbetreuung an der Grundschule am Mühlbach</h4>
<p>Viele Eltern arbeiten und können ihre Kinder nicht schon mittags abholen. Deshalb bietet unsere Schule eine Kinderbetreuung am Nachmittag an. Sie beginnt nach dem Unterricht und endet um 16 Uhr, freitags schon um 15 Uhr.</p>
<p>Um 12.30 Uhr essen die Kinder zusammen in der Mensa. Das Mittagessen kostet 3,80 Euro pro Tag. Familien mit wenig Geld können bei der Stadt einen Antrag stellen. Dann ist das Essen für sie kostenlos.</p>
<p>Nach dem Essen machen die Kinder eine Stunde lang ihre Hausaufgaben. Erzieherinnen und Studenten helfen ihnen dabei. Danach können die Kinder wählen: Es gibt zum Beispiel Fußball, Theater, Basteln und eine Gartengruppe.</p>
<p>Die Betreuung selbst kostet 45 Euro im Monat. Für das zweite Kind einer Familie bezahlen Sie nur die Hälfte.</p>
<p>Die Anmeldung gilt immer für ein ganzes Schuljahr. Das Formular bekommen Sie im Sekretariat. Bitte geben Sie es bis zum 30. April ab – später können wir leider keinen Platz mehr garantieren. In den Schulferien gibt es keine Ganztagsbetreuung.</p>`,
      items: [
        { n: 17, q: 'Die Betreuung endet an allen Schultagen zur gleichen Zeit.', opts: RF, a: 1 },
        { n: 18, q: 'Bei den Hausaufgaben bekommen die Kinder Unterstützung.', opts: RF, a: 0 },
        { n: 19, q: 'Wenn zwei Geschwister in die Betreuung gehen, ist der Platz für das zweite Kind billiger.', opts: RF, a: 0 },
      ],
    }]),
    part(5, [{
      html: `<p>Sehr geehrter Herr Wendland,</p>
<p>vielen Dank für Ihr Schreiben vom 3. Februar. Darin teilen Sie uns mit, ${gap(20)} ab März eine Firma das Treppenhaus reinigen soll. Dafür soll jede Mietpartei 20 Euro im Monat bezahlen.</p>
<p>${gap(21)} bin ich nicht einverstanden. In unserem Haus putzen die Mieter das Treppenhaus seit vielen Jahren selbst, und das hat immer gut ${gap(22)}. So steht es auch ${gap(23)} Mietvertrag. Außerdem sind 240 Euro im Jahr für viele Familien im Haus viel Geld.</p>
<p>Ich habe schon mit den anderen Mietern gesprochen. Die meisten möchten weiter selbst putzen. Ich schlage deshalb vor, dass wir uns alle treffen, ${gap(24)} gemeinsam eine Lösung zu finden. Am Abend habe ich immer Zeit.</p>
<p>Bitte schreiben Sie mir, wann Ihnen ein Termin passt. Über eine baldige Antwort ${gap(25)} ich mich sehr freuen.</p>
<p>Mit freundlichen Grüßen<br>Goran Pavlović</p>`,
      items: [
        { n: 20, q: '', opts: ['weil', 'dass', 'damit'], a: 1 },
        { n: 21, q: '', opts: ['Damit', 'Dafür', 'Darauf'], a: 0 },
        { n: 22, q: '', opts: ['funktionieren', 'funktioniert', 'funktionierte'], a: 1 },
        { n: 23, q: '', opts: ['am', 'zum', 'im'], a: 2 },
        { n: 24, q: '', opts: ['um', 'damit', 'für'], a: 0 },
        { n: 25, q: '', opts: ['hätte', 'wäre', 'würde'], a: 2 },
      ],
    }], { gaps: true }),
  ],
};
