import { part, ad, gap, RF, AX } from '../tests-lesen-b1.js';

export default {
  id: 'v05', title: 'Variante 5', about: 'Volkshochschule · Stellenanzeigen · Rückruf im Supermarkt, Nachbarin, Personalausweis · Anerkennung von Berufen · Bewerbung als Aushilfe',
  parts: [
    part(1, [{
      html: `<div class="board"><h3>Volkshochschule Marbach – Kursprogramm nach Bereichen</h3>
<p><b>Bereich 1 – Sprachen</b> Deutsch als Fremdsprache · Englisch · Spanisch · Arabisch · Sprachprüfungen</p>
<p><b>Bereich 2 – Beruf und Computer</b> Bewerbungstraining · Texte und Tabellen am Computer · Buchhaltung · Schreiben mit zehn Fingern</p>
<p><b>Bereich 3 – Gesundheit und Bewegung</b> Yoga · Rückengymnastik · Gesunde Ernährung · Kochkurse · Erste Hilfe</p>
<p><b>Bereich 4 – Kultur und Kreatives</b> Malen · Fotografieren · Nähen · Gitarre · Theater</p>
<p><b>Bereich 5 – Gesellschaft und Alltag</b> Erziehung und Familie · Recht im Alltag (Mietrecht, Arbeitsrecht) · Geld und Versicherungen · Stadtführungen</p>
<p><b>Bereich 6 – Schulabschlüsse</b> Hauptschulabschluss · Realschulabschluss am Abend · Lesen und Schreiben für Erwachsene</p></div>`,
      items: [
        { n: 1, q: 'Sie möchten lernen, wie man einen guten Lebenslauf schreibt und wie man sich bei einem Vorstellungsgespräch verhält.', opts: ['Bereich 1', 'Bereich 2', 'anderer Bereich'], a: 1 },
        { n: 2, q: 'Sie sitzen bei der Arbeit viel und haben oft Rückenschmerzen. Sie möchten etwas dagegen tun.', opts: ['Bereich 5', 'Bereich 2', 'anderer Bereich'], a: 2 },
        { n: 3, q: 'Sie haben eine Nähmaschine bekommen und möchten lernen, Kleidung selbst zu machen.', opts: ['Bereich 4', 'Bereich 3', 'anderer Bereich'], a: 0 },
        { n: 4, q: 'Sie haben Ärger mit Ihrem Vermieter und möchten wissen, welche Rechte Mieter haben.', opts: ['Bereich 5', 'Bereich 6', 'anderer Bereich'], a: 0 },
        { n: 5, q: 'Sie haben die Schule früher ohne Zeugnis verlassen. Jetzt möchten Sie einen Abschluss machen.', opts: ['Bereich 2', 'Bereich 6', 'anderer Bereich'], a: 1 },
      ],
    }]),
    part(2, [{
      html: [
        ad('a', 'Bäckerei Kornblume sucht Verkäufer/in', 'Montag bis Freitag von 5.30 bis 10 Uhr. Sie sind freundlich und stehen gern früh auf? Dann kommen Sie vorbei!'),
        ad('b', 'Reinigungsfirma Glanz', 'Wir suchen Reinigungskräfte für Büros im Stadtzentrum. Arbeitszeit: Montag bis Freitag, 18–21 Uhr. Gut mit Bus und Bahn zu erreichen.'),
        ad('c', 'Pizzeria Vesuvio sucht Fahrer/in', 'Sie bringen abends und am Wochenende Pizza zu unseren Kunden. Führerschein und eigenes Auto sind nötig.'),
        ad('d', 'Pflegeheim Abendsonne', 'Ausbildung zur Pflegefachkraft ab 1. September. Sie brauchen einen Schulabschluss und gute Deutschkenntnisse. Dauer: drei Jahre.'),
        ad('e', 'Hotel am See', 'Wir suchen Mitarbeiter für die Zimmerreinigung, 40 Stunden pro Woche, auch am Wochenende. Erfahrung ist nicht nötig.'),
        ad('f', 'Spedition Rehm', 'Lkw-Fahrer für Fahrten in ganz Europa gesucht. Sie sind oft mehrere Tage unterwegs. Gute Bezahlung.'),
        ad('g', 'Zeitungen austragen', 'Mittwochs und samstags am Nachmittag, etwa zwei Stunden. Für Jugendliche ab 13 Jahren, in Ihrem Stadtteil.'),
        ad('h', 'Kindergarten Regenbogen sucht Küchenhilfe', 'Sie helfen beim Mittagessen und in der Küche. Montag bis Freitag von 11 bis 14 Uhr.'),
      ].join(''),
      items: [
        { n: 6, q: 'Sie besuchen vormittags einen Deutschkurs und können nur am Abend arbeiten. Ein Auto haben Sie nicht.', opts: AX, a: 1 },
        { n: 7, q: 'Ihr Sohn ist 14 Jahre alt und möchte ein bisschen Taschengeld verdienen.', opts: AX, a: 6 },
        { n: 8, q: 'Sie möchten einen Beruf lernen und später mit alten Menschen arbeiten.', opts: AX, a: 3 },
        { n: 9, q: 'Ihre Kinder sind bis 15 Uhr in der Schule. Sie suchen eine Arbeit für wenige Stunden um die Mittagszeit.', opts: AX, a: 7 },
        { n: 10, q: 'Sie sind Koch von Beruf und suchen eine feste Stelle in einem Restaurant.', opts: AX, a: 8 },
      ],
    }], { compact: true }),
    part(3, [
      {
        html: `<h4>Wichtige Information für unsere Kunden</h4><p>Die Firma Milchhof Tannberg ruft den Joghurt „Frucht-Traum Erdbeere“ (500 g) zurück. In einigen Bechern wurden kleine Plastikteile gefunden. Das Problem gibt es nur bei Bechern mit dem Datum 12.05. Bitte essen Sie diesen Joghurt nicht.</p><p>Sie können ihn in jeden unserer Märkte zurückbringen und bekommen den Kaufpreis zurück – auch ohne Kassenzettel. Andere Produkte der Firma können Sie ohne Sorge weiter essen.</p><p>Ihr Kaufmarkt-Team</p>`,
        items: [
          { n: 11, q: 'Das Problem gibt es bei allen Produkten der Firma Milchhof Tannberg.', opts: RF, a: 1 },
          { n: 12, q: 'Wer den Joghurt in den Markt zurückbringt, …', opts: ['muss den Kassenzettel zeigen.', 'bekommt dafür einen neuen Joghurt.', 'bekommt sein Geld zurück.'], a: 2 },
        ],
      },
      {
        html: `<p>Liebe Frau Petersen,</p><p>von Samstag bis zum 20. August sind wir im Urlaub bei meinen Eltern. Darf ich Sie wieder um einen Gefallen bitten? Es wäre sehr nett, wenn Sie zweimal in der Woche unsere Blumen gießen und den Briefkasten leeren könnten. Den Schlüssel bringe ich Ihnen am Freitagabend.</p><p>Die Katze müssen Sie dieses Mal nicht füttern, sie bleibt bei meinem Bruder. Wenn etwas passiert, erreichen Sie mich immer auf dem Handy.</p><p>Herzlichen Dank!<br>Ihre Nachbarin Lucia Ferrante</p>`,
        items: [
          { n: 13, q: 'Frau Petersen soll die Post aus dem Briefkasten holen.', opts: RF, a: 0 },
          { n: 14, q: 'Die Katze …', opts: ['fährt mit in den Urlaub.', 'ist in dieser Zeit bei Lucias Bruder.', 'bekommt ihr Futter von Frau Petersen.'], a: 1 },
        ],
      },
      {
        html: `<p>Sehr geehrte Frau Adeyemi,</p><p>Ihr neuer Personalausweis ist fertig. Sie können ihn ab sofort im Bürgerbüro, Zimmer 12, abholen. Einen Termin brauchen Sie dafür nicht. Bitte bringen Sie diesen Brief und Ihren alten Ausweis mit.</p><p>Wenn Sie nicht selbst kommen können, darf auch eine andere Person den Ausweis abholen. Sie braucht dann eine Vollmacht mit Ihrer Unterschrift.</p><p>Öffnungszeiten: Montag bis Freitag 8–12 Uhr, Donnerstag auch 14–18 Uhr.</p><p>Mit freundlichen Grüßen<br>Stadt Lauenfeld, Bürgerbüro</p>`,
        items: [
          { n: 15, q: 'Frau Adeyemi muss zuerst einen Termin vereinbaren.', opts: RF, a: 1 },
          { n: 16, q: 'Den neuen Ausweis …', opts: ['kann auch jemand anderes mit einer Vollmacht abholen.', 'bekommt Frau Adeyemi mit der Post.', 'kann man an jedem Nachmittag abholen.'], a: 0 },
        ],
      },
    ]),
    part(4, [{
      html: `<h4>Ihr Beruf in Deutschland – Beratung zur Anerkennung</h4>
<p>Sie haben in Ihrem Heimatland einen Beruf gelernt oder studiert und möchten in Deutschland in diesem Beruf arbeiten? Dann helfen wir Ihnen. In unserer Beratungsstelle prüfen wir mit Ihnen, ob Ihr Abschluss in Deutschland anerkannt werden kann und welches Amt dafür zuständig ist.</p>
<p>Für manche Berufe, zum Beispiel Ärztin, Krankenpfleger oder Lehrerin, brauchen Sie die Anerkennung unbedingt. In vielen anderen Berufen dürfen Sie auch ohne Anerkennung arbeiten. Mit dem Dokument finden Sie aber leichter eine Stelle und verdienen oft mehr.</p>
<p>Die Beratung ist kostenlos und in sechs Sprachen möglich. Für den Antrag beim Amt müssen Sie jedoch eine Gebühr bezahlen.</p>
<p>Bitte vereinbaren Sie einen Termin per Telefon oder E-Mail. Bringen Sie zum Gespräch Ihre Zeugnisse und Ihren Lebenslauf mit. Wenn Sie noch nicht gut Deutsch sprechen, können Sie gern eine Person mitbringen, die für Sie übersetzt.</p>`,
      items: [
        { n: 17, q: 'In Deutschland darf man in allen Berufen nur mit einer Anerkennung arbeiten.', opts: RF, a: 1 },
        { n: 18, q: 'Für die Beratung muss man nichts bezahlen.', opts: RF, a: 0 },
        { n: 19, q: 'Zum Gespräch soll man seine Zeugnisse mitbringen.', opts: RF, a: 0 },
      ],
    }]),
    part(5, [{
      html: `<p>Sehr geehrte Frau Lorenz,</p>
<p>in Ihrem Schaufenster habe ich gelesen, dass Sie eine Aushilfe für Ihr Blumengeschäft suchen. Um diese Stelle möchte ich ${gap(20)} bewerben.</p>
<p>Ich bin 28 Jahre alt und lebe seit drei Jahren in Deutschland. In meiner Heimat habe ich fünf Jahre lang in einem Gartencenter ${gap(21)}. Zurzeit besuche ich einen Deutschkurs. Er findet nur vormittags statt, ${gap(22)} ich am Nachmittag und am Samstag arbeiten kann.</p>
<p>Die Arbeit mit Pflanzen macht ${gap(23)} viel Freude, und ich spreche gern mit Kunden. Ich bin pünktlich und zuverlässig und lerne schnell.</p>
<p>Über eine Einladung ${gap(24)} einem persönlichen Gespräch würde ich mich sehr freuen. Sie erreichen mich jeden Tag ${gap(25)} 13 Uhr auf meinem Handy.</p>
<p>Mit freundlichen Grüßen<br>Yasmin Karimi</p>`,
      items: [
        { n: 20, q: '', opts: ['mich', 'mir', 'sich'], a: 0 },
        { n: 21, q: '', opts: ['arbeiten', 'arbeitete', 'gearbeitet'], a: 2 },
        { n: 22, q: '', opts: ['deshalb', 'sodass', 'denn'], a: 1 },
        { n: 23, q: '', opts: ['mir', 'mich', 'ich'], a: 0 },
        { n: 24, q: '', opts: ['für', 'zu', 'an'], a: 1 },
        { n: 25, q: '', opts: ['seit', 'bei', 'ab'], a: 2 },
      ],
    }], { gaps: true }),
  ],
};
