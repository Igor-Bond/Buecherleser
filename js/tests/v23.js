import { part, ad, gap, RF, AX } from '../tests-lesen-b1.js';

export default {
  id: 'v23', title: 'Variante 3', about: 'Möbelhaus · Anzeigen am Schwarzen Brett · Umzugshilfe, Straßenfest, Babysitter · Nach dem Umzug · Größere Wohnung',
  parts: [
    part(1, [{
      html: `<div class="board"><h3>Möbelhaus Wohnpark – Wegweiser</h3>
<p><b>3. Stock</b> Restaurant · Kinderparadies (Betreuung für Kinder von 3 bis 8 Jahren) · Kundentoiletten</p>
<p><b>2. Stock</b> Schlafzimmer · Betten und Matratzen · Kleiderschränke · Kinderzimmer</p>
<p><b>1. Stock</b> Wohnzimmer · Sofas und Sessel · Regale · Büromöbel · Lampen</p>
<p><b>Erdgeschoss</b> Information · Küchen · Geschirr und Haushaltswaren · Teppiche · Gardinen · Kassen</p>
<p><b>Untergeschoss</b> Warenausgabe · Transporter-Verleih · Lieferservice · Kundenservice (Umtausch und Reklamation)</p></div>`,
      items: [
        { n: 1, q: 'Sie ziehen um und brauchen für Ihre vielen Bücher ein neues Regal.', opts: ['1. Stock', 'Erdgeschoss', 'anderes Stockwerk'], a: 0 },
        { n: 2, q: 'Sie möchten für einen Tag ein großes Auto leihen, um Ihre Möbel in die neue Wohnung zu fahren.', opts: ['Erdgeschoss', '1. Stock', 'anderes Stockwerk'], a: 2 },
        { n: 3, q: 'Ihr Sohn bekommt in der neuen Wohnung ein eigenes Zimmer. Sie suchen ein Bett für ihn.', opts: ['1. Stock', '2. Stock', 'anderes Stockwerk'], a: 1 },
        { n: 4, q: 'Sie möchten in Ruhe Möbel ansehen. Ihre vierjährige Tochter soll in dieser Zeit mit anderen Kindern spielen.', opts: ['3. Stock', '2. Stock', 'anderes Stockwerk'], a: 0 },
        { n: 5, q: 'Sie brauchen Vorhänge für die Fenster in Ihrem Wohnzimmer.', opts: ['1. Stock', 'Erdgeschoss', 'anderes Stockwerk'], a: 1 },
      ],
    }]),
    part(2, [{
      html: [
        ad('a', 'Babysitterin hat Zeit', 'Schülerin (17) passt abends und am Wochenende auf Ihre Kinder auf. Ich habe zwei kleine Geschwister und viel Erfahrung. 9 Euro pro Stunde.'),
        ad('b', 'Tagesmutter hat Plätze frei', 'Ich betreue Kinder von 1 bis 3 Jahren in meiner Wohnung. Montag bis Freitag von 7.30 bis 15 Uhr.'),
        ad('c', 'Starke Helfer für Ihren Umzug', 'Zwei Studenten tragen Ihre Möbel und Kartons – auch in den fünften Stock. 15 Euro pro Stunde und Person. Ein Auto haben wir leider nicht.'),
        ad('d', 'Transporter zu vermieten', 'Kleiner Lkw für Ihren Umzug, 49 Euro pro Tag. Der normale Autoführerschein reicht.'),
        ad('e', 'Umzugskartons zu verschenken', '30 stabile Kartons und Packpapier, nur einmal benutzt. Sie müssen alles selbst abholen.'),
        ad('f', 'Wohnung zu vermieten', '4 Zimmer, Küche, Bad, Balkon, 92 m², 2. Stock. 980 Euro warm. Frei ab 1. Mai. Gern an Familie mit Kindern.'),
        ad('g', 'Nachhilfe in Deutsch und Englisch', 'Studentin hilft Schülerinnen und Schülern der Klassen 5 bis 9. Ich komme auch zu Ihnen nach Hause.'),
        ad('h', 'Möbel günstig abzugeben', 'Wegen Umzug: Sofa, Esstisch und vier Stühle, zusammen 120 Euro. Alles ist in gutem Zustand.'),
      ].join(''),
      items: [
        { n: 6, q: 'Sie möchten am Samstagabend mit Ihrem Mann ins Kino gehen. Sie suchen jemanden, der in dieser Zeit bei Ihrem fünfjährigen Sohn bleibt.', opts: AX, a: 0 },
        { n: 7, q: 'Sie ziehen nächste Woche um und müssen noch Ihr Geschirr und Ihre Kleidung einpacken. Dafür fehlt Ihnen das Material.', opts: AX, a: 4 },
        { n: 8, q: 'Für Ihren Umzug leiht Ihnen ein Freund sein großes Auto. Ihre Möbel sind aber schwer, und Sie können sie nicht allein tragen.', opts: AX, a: 2 },
        { n: 9, q: 'Ihr Sohn geht in die 7. Klasse und braucht Hilfe in Mathematik.', opts: AX, a: 8 },
        { n: 10, q: 'Sie haben ein zweites Kind bekommen. Ihre Zweizimmerwohnung ist jetzt zu klein, und Sie suchen etwas Größeres.', opts: AX, a: 5 },
      ],
    }], { compact: true }),
    part(3, [
      {
        html: `<p>Hallo Jonas,</p><p>wie du weißt, ziehe ich am Samstag, den 12. April, in die Gartenstraße um. Leider ist mein Bruder krank geworden und kann nicht helfen. Hättest du vielleicht Zeit? Wir fangen um 9 Uhr an. Einen Transporter habe ich schon gemietet, du musst also nur beim Tragen helfen. Die neue Wohnung liegt im dritten Stock, aber zum Glück gibt es einen Aufzug.</p><p>Gegen 14 Uhr sind wir bestimmt fertig. Danach lade ich alle Helfer zum Pizzaessen ein. Sag mir bitte bis Mittwoch Bescheid, ob du kommen kannst.</p><p>Viele Grüße<br>Aylin</p>`,
        items: [
          { n: 11, q: 'Aylin sucht für den Umzug noch ein Fahrzeug.', opts: RF, a: 1 },
          { n: 12, q: 'Jonas soll …', opts: ['Aylin bis Mittwoch antworten.', 'für die Helfer Pizza mitbringen.', 'am Samstag um 14 Uhr in die Gartenstraße kommen.'], a: 0 },
        ],
      },
      {
        html: `<h4>Straßenfest in der Birkenstraße</h4><p>Liebe Nachbarinnen und Nachbarn,</p><p>am Samstag, den 28. Juni, feiern wir ab 15 Uhr unser Straßenfest. Die Birkenstraße ist an diesem Tag von 12 bis 22 Uhr für Autos gesperrt. Bitte parkt eure Autos deshalb schon am Freitagabend in einer anderen Straße.</p><p>Tische und Bänke leiht uns der Sportverein. Die Getränke kaufen wir gemeinsam, dafür sammeln wir 5 Euro pro Erwachsenen. Für das Buffet bringt bitte jede Familie einen Salat oder einen Kuchen mit. Die Liste dafür hängt im Hausflur von Nummer 14. Wir suchen auch noch Leute, die am Vormittag beim Aufbauen helfen.</p><p>Familie Brandt und Herr Özdemir</p>`,
        items: [
          { n: 13, q: 'Am Tag des Festes dürfen in der Birkenstraße einige Stunden lang keine Autos fahren.', opts: RF, a: 0 },
          { n: 14, q: 'Die Nachbarn sollen …', opts: ['Tische und Bänke mitbringen.', 'ihre eigenen Getränke mitbringen.', 'etwas zu essen für alle mitbringen.'], a: 2 },
        ],
      },
      {
        html: `<h4>Babysitter gesucht!</h4><p>Wir sind eine Familie mit zwei Kindern (3 und 6 Jahre) und wohnen ganz in der Nähe von diesem Supermarkt. Wir suchen eine zuverlässige Person, die jeden Dienstag und Donnerstag von 16 bis 19 Uhr auf unsere Kinder aufpasst. In dieser Zeit sollten Sie mit den Kindern spielen und ihnen um 18 Uhr das Abendbrot machen.</p><p>Erfahrung mit Kindern ist uns wichtig, eine Ausbildung brauchen Sie aber nicht. Wir zahlen 12 Euro pro Stunde. Bitte rufen Sie uns abends nach 19 Uhr an: 0151 / 555 01 42.</p><p>Familie Sokolow</p>`,
        items: [
          { n: 15, q: 'Die Familie braucht an zwei Nachmittagen in der Woche Hilfe.', opts: RF, a: 0 },
          { n: 16, q: 'Die Person, die die Familie sucht, …', opts: ['muss den Beruf Erzieherin gelernt haben.', 'soll den Kindern etwas zu essen geben.', 'kann die Familie am Vormittag anrufen.'], a: 1 },
        ],
      },
    ]),
    part(4, [{
      html: `<h4>Nach dem Umzug – woran Sie denken müssen</h4>
<p>Wenn Sie in eine neue Wohnung ziehen, müssen Sie sich in den ersten zwei Wochen nach dem Umzug beim Bürgeramt anmelden. Dafür brauchen Sie Ihren Ausweis und eine Bestätigung von Ihrem Vermieter. Die Anmeldung kostet nichts. Einen Termin müssen Sie vorher im Internet oder am Telefon buchen.</p>
<p>Denken Sie auch an Ihre Post. Bei der Post können Sie einen Nachsendeauftrag stellen. Dann schickt die Post Ihre Briefe sechs oder zwölf Monate lang automatisch an die neue Adresse. Dieser Service ist nicht kostenlos. Teilen Sie die neue Adresse außerdem Ihrer Bank, Ihrer Krankenkasse und Ihrem Arbeitgeber mit.</p>
<p>Für den Umzugswagen können Sie vor dem Haus einen Parkplatz reservieren lassen. Den Antrag stellen Sie beim Ordnungsamt, und zwar spätestens zehn Tage vor dem Umzug. Das kostet 35 Euro.</p>
<p>Lesen Sie am letzten Tag in der alten Wohnung den Stromzähler ab und melden Sie die Zahl Ihrer Stromfirma. So bezahlen Sie nicht für den Strom, den der nächste Mieter verbraucht.</p>`,
      items: [
        { n: 17, q: 'Nach dem Umzug hat man einen Monat Zeit, um sich beim Bürgeramt anzumelden.', opts: RF, a: 1 },
        { n: 18, q: 'Die Post kann Briefe eine Zeit lang an die neue Adresse weiterschicken.', opts: RF, a: 0 },
        { n: 19, q: 'Wer einen Parkplatz für den Umzugswagen braucht, muss das dem Ordnungsamt mehr als eine Woche vorher sagen.', opts: RF, a: 0 },
      ],
    }]),
    part(5, [{
      html: `<p>Sehr geehrter Herr Lehmann,</p>
<p>seit vier Jahren wohne ich mit ${gap(20)} Familie in der Zweizimmerwohnung im ersten Stock, Ahornweg 7. Wir sind hier sehr zufrieden. Im März haben wir aber unser zweites Kind bekommen, und jetzt ist die Wohnung für vier Personen ${gap(21)} klein.</p>
<p>Von einer Nachbarin habe ich gehört, ${gap(22)} im dritten Stock bald eine Vierzimmerwohnung frei wird. Wir ${gap(23)} gern in diesem Haus bleiben, weil unsere ältere Tochter hier in der Nähe in den Kindergarten geht. Deshalb interessiere ich mich sehr ${gap(24)} diese Wohnung.</p>
<p>Könnten Sie mir bitte mitteilen, wie hoch die Miete ist? Ich bitte Sie auch ${gap(25)} einen Termin, damit wir die Wohnung ansehen können. Sie erreichen mich jeden Tag ab 17 Uhr am Telefon.</p>
<p>Vielen Dank im Voraus.</p>
<p>Mit freundlichen Grüßen<br>Karim Mansour</p>`,
      items: [
        { n: 20, q: '', opts: ['meine', 'meiner', 'meinem'], a: 1 },
        { n: 21, q: '', opts: ['viel', 'mehr', 'zu'], a: 2 },
        { n: 22, q: '', opts: ['dass', 'ob', 'wenn'], a: 0 },
        { n: 23, q: '', opts: ['wären', 'würden', 'hätten'], a: 1 },
        { n: 24, q: '', opts: ['für', 'an', 'über'], a: 0 },
        { n: 25, q: '', opts: ['nach', 'für', 'um'], a: 2 },
      ],
    }], { gaps: true }),
  ],
};
