import { part, ad, gap, RF, AX } from '../tests-lesen-b1.js';

export default {
  id: 'v16', title: 'Variante 16', about: 'Hotel · Anzeigen · Fitnessstudio, Elternsprechtag, Geburtstagsfeier · Leihfahrräder · Krankmeldung',
  parts: [
    part(1, [{
      html: `<div class="board"><h3>Hotel Am Stadtgarten – Wegweiser</h3>
<p><b>4. Stock</b> Zimmer 401–420 · Dachterrasse mit Bar (ab 18 Uhr)</p>
<p><b>3. Stock</b> Zimmer 301–320 · Waschraum für Gäste (Waschmaschine, Trockner, Bügeleisen)</p>
<p><b>2. Stock</b> Zimmer 201–220 · Konferenzräume „Berlin“ und „Wien“</p>
<p><b>1. Stock</b> Frühstücksraum · Restaurant „Lindenhof“ · Kinderspielzimmer</p>
<p><b>Erdgeschoss</b> Rezeption · Gepäckraum · Fahrradverleih · Geldautomat</p>
<p><b>Untergeschoss</b> Schwimmbad · Sauna · Fitnessraum · Tiefgarage</p></div>`,
      items: [
        { n: 1, q: 'Sie sind gerade angekommen und möchten Ihren Zimmerschlüssel abholen.', opts: ['Erdgeschoss', '1. Stock', 'anderer Stock'], a: 0 },
        { n: 2, q: 'Ihr Hemd ist nach der Reise schmutzig. Sie möchten es selbst waschen.', opts: ['Untergeschoss', '3. Stock', 'anderer Stock'], a: 1 },
        { n: 3, q: 'Ihre Firma hat im Hotel einen Raum für eine Besprechung gemietet. Sie nehmen daran teil.', opts: ['1. Stock', '4. Stock', 'anderer Stock'], a: 2 },
        { n: 4, q: 'Sie möchten vor dem Frühstück eine halbe Stunde schwimmen.', opts: ['Untergeschoss', '1. Stock', 'anderer Stock'], a: 0 },
        { n: 5, q: 'Es ist ein warmer Abend. Sie möchten draußen sitzen und noch etwas trinken.', opts: ['1. Stock', 'Erdgeschoss', 'anderer Stock'], a: 2 },
      ],
    }]),
    part(2, [{
      html: [
        ad('a', 'Fahrschule Tempo', 'Führerschein Klasse B. Theorieunterricht am Abend, auch auf Englisch und Arabisch. Anmeldung jederzeit möglich.'),
        ad('b', 'Bäckerei Kornblume sucht Verkäufer/in', 'Vollzeit, Arbeitsbeginn um 5.30 Uhr. Sie haben schon im Verkauf gearbeitet und sprechen gut Deutsch.'),
        ad('c', 'Verkaufe Kleinwagen', 'Baujahr 2015, 90 000 km, TÜV neu, sehr sparsam. 4 200 Euro.'),
        ad('d', 'Lagerhelfer gesucht', 'Logistikfirma sucht Hilfe im Lager. Teilzeit, Montag bis Freitag 8–12 Uhr. Erfahrung ist nicht nötig, wir zeigen Ihnen alles.'),
        ad('e', 'Bewerbungstraining', 'Wir schreiben mit Ihnen Ihren Lebenslauf und üben das Vorstellungsgespräch. Dienstags 14–16 Uhr in der Stadtbibliothek. Kostenlos.'),
        ad('f', 'Autowerkstatt Yıldız', 'Reparaturen, Inspektion und Reifenwechsel für alle Marken. Termine oft schon am nächsten Tag.'),
        ad('g', 'Ausbildung in der Altenpflege', 'Das Seniorenheim Rosenhof bietet ab September Ausbildungsplätze. Voraussetzung: Schulabschluss und Deutsch auf Niveau B2.'),
        ad('h', 'Gabelstaplerschein in drei Tagen', 'Kurs im Bildungszentrum Kronfeld, 250 Euro. Nächster Termin: 6. bis 8. Mai.'),
      ].join(''),
      items: [
        { n: 6, q: 'Ihre Kinder sind bis mittags in der Schule. In dieser Zeit möchten Sie arbeiten. Sie haben in Deutschland noch nie gearbeitet.', opts: AX, a: 3 },
        { n: 7, q: 'Sie möchten Auto fahren lernen.', opts: AX, a: 0 },
        { n: 8, q: 'Sie haben ein interessantes Stellenangebot gefunden, wissen aber nicht, wie man einen Lebenslauf schreibt.', opts: AX, a: 4 },
        { n: 9, q: 'Ihr Auto macht beim Bremsen seltsame Geräusche.', opts: AX, a: 5 },
        { n: 10, q: 'Sie suchen einen Abendkurs, in dem Sie besser mit dem Computer arbeiten lernen.', opts: AX, a: 8 },
      ],
    }], { compact: true }),
    part(3, [
      {
        html: `<p>Sehr geehrter Herr Demir,</p><p>wir möchten Sie über eine Änderung informieren: Ab dem 1. Januar kostet Ihre Mitgliedschaft im Fitnessstudio Aktiv 34 Euro statt 29 Euro im Monat. Dafür haben wir neue Geräte gekauft, und das Studio ist jetzt jeden Tag bis 23 Uhr geöffnet.</p><p>Wenn Sie mit dem neuen Preis nicht einverstanden sind, können Sie bis zum 30. November schriftlich kündigen. Sonst läuft Ihr Vertrag automatisch weiter.</p><p>Mit sportlichen Grüßen<br>Ihr Team vom Fitnessstudio Aktiv</p>`,
        items: [
          { n: 11, q: 'Die Mitgliedschaft wird teurer.', opts: RF, a: 0 },
          { n: 12, q: 'Wenn Herr Demir nichts tut, …', opts: ['endet sein Vertrag am 30. November.', 'bezahlt er weiter 29 Euro.', 'bleibt er Mitglied im Studio.'], a: 2 },
        ],
      },
      {
        html: `<p>Liebe Eltern,</p><p>am Donnerstag, den 20. November, findet von 15 bis 19 Uhr unser Elternsprechtag statt. Sie können mit allen Lehrerinnen und Lehrern Ihres Kindes sprechen. Jedes Gespräch dauert etwa zehn Minuten.</p><p>Termine vereinbaren Sie bitte bis zum 14. November über die Schul-App, nicht per Telefon. Wenn Sie eine Dolmetscherin oder einen Dolmetscher brauchen, schreiben Sie uns das bitte. Am Elternsprechtag endet der Unterricht für alle Klassen schon um 12.30 Uhr.</p><p>Mit freundlichen Grüßen<br>R. Albrecht, Schulleiterin</p>`,
        items: [
          { n: 13, q: 'Am Elternsprechtag haben die Kinder keinen Unterricht.', opts: RF, a: 1 },
          { n: 14, q: 'Einen Termin für ein Gespräch bekommt man …', opts: ['am Telefon.', 'über die App der Schule.', 'bei der Schulleiterin.'], a: 1 },
        ],
      },
      {
        html: `<p>Liebe Nachbarn,</p><p>am Samstag, den 8. Juni, feiere ich meinen 30. Geburtstag in meiner Wohnung im 3. Stock. Es kommen ungefähr zwanzig Gäste, deshalb kann es am Abend etwas lauter werden. Ab 22 Uhr machen wir die Fenster zu und die Musik leiser.</p><p>Wenn es Sie trotzdem stört, klingeln Sie bitte einfach bei mir. Natürlich sind Sie auch herzlich eingeladen: Kommen Sie gern auf ein Glas vorbei!</p><p>Viele Grüße<br>Jonas Petersen</p>`,
        items: [
          { n: 15, q: 'Die Nachbarn dürfen auch zur Feier kommen.', opts: RF, a: 0 },
          { n: 16, q: 'Wenn die Nachbarn die Feier zu laut finden, sollen sie …', opts: ['bei Herrn Petersen klingeln.', 'ihre Fenster schließen.', 'bis 22 Uhr warten.'], a: 0 },
        ],
      },
    ]),
    part(4, [{
      html: `<h4>Stadtrad Kronfeld – so leihen Sie ein Fahrrad</h4>
<p>In Kronfeld stehen an 40 Stationen Leihfahrräder für Sie bereit. Um ein Rad zu leihen, brauchen Sie die Stadtrad-App. Dort melden Sie sich einmal mit Ihrem Namen und Ihrer Bankverbindung an. Die Anmeldung ist kostenlos.</p>
<p>An der Station scannen Sie mit dem Handy den Code am Fahrrad, dann öffnet sich das Schloss. Die ersten 30 Minuten jeder Fahrt sind gratis. Danach kostet jede halbe Stunde einen Euro, höchstens aber 12 Euro pro Tag.</p>
<p>Sie müssen das Rad nicht dorthin zurückbringen, wo Sie es geholt haben: Sie können es an jeder Station in der Stadt abstellen. Wenn Sie das Rad aber an einem anderen Ort stehen lassen, bezahlen Sie 20 Euro extra.</p>
<p>Die Räder darf man erst ab 16 Jahren benutzen. Kindersitze gibt es nicht. Wenn ein Rad kaputt ist, melden Sie das bitte in der App und nehmen Sie ein anderes.</p>`,
      items: [
        { n: 17, q: 'Für eine Fahrt von 20 Minuten muss man nichts bezahlen.', opts: RF, a: 0 },
        { n: 18, q: 'Man muss das Fahrrad an derselben Station zurückgeben, an der man es geholt hat.', opts: RF, a: 1 },
        { n: 19, q: 'Ein 14-jähriges Kind darf mit einem Stadtrad fahren.', opts: RF, a: 1 },
      ],
    }]),
    part(5, [{
      html: `<p>Sehr geehrte Frau Kessler,</p>
<p>leider muss ich Ihnen mitteilen, dass ich heute nicht zur Arbeit kommen ${gap(20)}. Seit gestern Abend habe ich hohes Fieber und starke Halsschmerzen. Heute Morgen war ich ${gap(21)} Arzt. Er hat mich bis einschließlich Freitag ${gap(22)}. Die Krankmeldung hat die Praxis schon elektronisch an die Krankenkasse geschickt.</p>
<p>Es tut ${gap(23)} leid, dass ich so kurzfristig absagen muss. Die Bestellung für die Firma Hartung konnte ich gestern nicht mehr fertig machen. Vielleicht kann Herr Novak sie übernehmen, ${gap(24)} er kennt den Kunden gut. Alle Unterlagen liegen auf meinem Schreibtisch.</p>
<p>Ich hoffe, dass ich am Montag wieder gesund bin. ${gap(25)} Sie Fragen haben, können Sie mich gern anrufen.</p>
<p>Mit freundlichen Grüßen<br>Samira Haddad</p>`,
      items: [
        { n: 20, q: '', opts: ['können', 'kann', 'könnt'], a: 1 },
        { n: 21, q: '', opts: ['beim', 'zum', 'im'], a: 0 },
        { n: 22, q: '', opts: ['krankschreiben', 'krankschreibt', 'krankgeschrieben'], a: 2 },
        { n: 23, q: '', opts: ['mich', 'mir', 'ich'], a: 1 },
        { n: 24, q: '', opts: ['weil', 'deshalb', 'denn'], a: 2 },
        { n: 25, q: '', opts: ['Falls', 'Ob', 'Dass'], a: 0 },
      ],
    }], { gaps: true }),
  ],
};
