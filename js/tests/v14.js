import { part, ad, gap, RF, AX } from '../tests-lesen-b1.js';

export default {
  id: 'v14', title: 'Variante 14', about: 'Supermarkt · Anzeigen · Versicherung, Fahrradkeller, Betriebsausflug · Neue Mitarbeiter · Fundbüro der Bahn',
  parts: [
    part(1, [{
      html: `<div class="board"><h3>Frischeland-Markt – Übersicht</h3>
<p><b>Eingangsbereich</b> Information · Pfandautomat (Leergut) · Zeitungen und Zeitschriften · Blumen</p>
<p><b>Gang 1</b> Obst und Gemüse · Salate · Kräuter</p>
<p><b>Gang 2</b> Brot und Backwaren · Marmelade · Honig · Müsli · Kaffee und Tee</p>
<p><b>Gang 3</b> Milch · Joghurt · Käse · Butter · Eier</p>
<p><b>Gang 4</b> Nudeln · Reis · Mehl · Zucker · Öl · Gewürze · Konserven</p>
<p><b>Gang 5</b> Wasser · Säfte · Bier und Wein · Süßigkeiten · Chips</p>
<p><b>Gang 6</b> Waschmittel · Putzmittel · Toilettenpapier · Shampoo und Seife · Babynahrung und Windeln</p>
<p><b>Frischetheken</b> Fleisch und Wurst · Frischer Fisch</p></div>`,
      items: [
        { n: 1, q: 'Sie möchten einen Kuchen backen und brauchen noch Mehl und Zucker.', opts: ['Gang 2', 'Gang 4', 'anderer Bereich'], a: 1 },
        { n: 2, q: 'Sie haben viele leere Flaschen dabei und möchten sie zurückgeben.', opts: ['Eingangsbereich', 'Gang 5', 'anderer Bereich'], a: 0 },
        { n: 3, q: 'Sie brauchen Windeln für Ihr Baby.', opts: ['Gang 3', 'Gang 5', 'anderer Bereich'], a: 2 },
        { n: 4, q: 'Zum Abendessen möchten Sie frischen Lachs braten.', opts: ['Gang 4', 'Gang 1', 'anderer Bereich'], a: 2 },
        { n: 5, q: 'Sie haben morgen Gäste zum Frühstück und brauchen noch Marmelade.', opts: ['Gang 2', 'Gang 4', 'anderer Bereich'], a: 0 },
      ],
    }]),
    part(2, [{
      html: [
        ad('a', 'Bäckerei Korn sucht Verkäufer/in', 'Teilzeit, Montag bis Freitag von 8 bis 12 Uhr. Sie sind freundlich und sprechen gut Deutsch? Dann kommen Sie einfach vorbei.'),
        ad('b', 'Ausbildung in der Pflege', 'Das Seniorenheim Abendsonne bietet ab September Ausbildungsplätze. Sie brauchen einen Schulabschluss und gute Deutschkenntnisse.'),
        ad('c', 'Bewerbungstraining im Stadtteilzentrum', 'Wir helfen Ihnen kostenlos beim Lebenslauf und üben mit Ihnen das Vorstellungsgespräch. Jeden Mittwoch 14–17 Uhr.'),
        ad('d', 'Paketdienst Flink sucht Fahrer', 'Vollzeit, Montag bis Samstag. Sie brauchen den Führerschein Klasse B und müssen schwer tragen können.'),
        ad('e', 'Reinigungsfirma sucht Mitarbeiter', 'Für Büros in der Innenstadt, Montag bis Freitag von 18 bis 21 Uhr. Minijob, auch ohne Erfahrung.'),
        ad('f', 'Staplerschein in drei Tagen', 'Kurs mit Prüfung, auch am Wochenende. Oft bezahlt die Agentur für Arbeit die Kosten.'),
        ad('g', 'Zeitungen austragen', 'Für Schülerinnen und Schüler ab 13 Jahren: jeden Mittwochnachmittag etwa zwei Stunden in deinem Stadtteil.'),
        ad('h', 'Beratung: Abschlüsse aus dem Ausland', 'Sie haben im Ausland einen Beruf gelernt oder studiert? Wir prüfen mit Ihnen, ob Sie in Deutschland in Ihrem Beruf arbeiten können. Kostenlos.'),
      ].join(''),
      items: [
        { n: 6, q: 'Sie haben in Ihrer Heimat als Krankenschwester gearbeitet. Sie möchten wissen, ob Sie das auch in Deutschland dürfen.', opts: AX, a: 7 },
        { n: 7, q: 'Ihre Kinder sind bis mittags in der Schule. In dieser Zeit möchten Sie arbeiten.', opts: AX, a: 0 },
        { n: 8, q: 'Sie haben eine Einladung zu einem Vorstellungsgespräch bekommen und möchten sich gut vorbereiten.', opts: AX, a: 2 },
        { n: 9, q: 'Ihr Sohn ist 14 Jahre alt und möchte etwas Taschengeld verdienen.', opts: AX, a: 6 },
        { n: 10, q: 'Sie sind Koch und suchen eine Stelle in einem Restaurant.', opts: AX, a: 8 },
      ],
    }], { compact: true }),
    part(3, [
      {
        html: `<p>Sehr geehrte Frau Lang,</p><p>vielen Dank für Ihre Schadensmeldung vom 3. April. Sie schreiben, dass Ihr Sohn beim Spielen das Fenster Ihres Nachbarn kaputt gemacht hat. Damit wir den Schaden bezahlen können, brauchen wir noch zwei Dinge: ein Foto vom kaputten Fenster und die Rechnung des Handwerkers.</p><p>Bitte schicken Sie uns beides innerhalb von 14 Tagen per E-Mail oder mit der Post. Das Geld überweisen wir dann direkt an Ihren Nachbarn.</p><p>Mit freundlichen Grüßen<br>Ihre Versicherung Sekura</p>`,
        items: [
          { n: 11, q: 'Die Versicherung hat den Schaden schon bezahlt.', opts: RF, a: 1 },
          { n: 12, q: 'Frau Lang soll …', opts: ['dem Nachbarn das Geld selbst geben.', 'der Versicherung noch Unterlagen schicken.', 'für die Versicherung einen Handwerker suchen.'], a: 1 },
        ],
      },
      {
        html: `<p>Liebe Hausbewohner,</p><p>im Fahrradkeller stehen viele alte Fahrräder, die niemand mehr benutzt. Deshalb gibt es kaum noch Platz. Wir räumen den Keller am 30. April auf. Bitte hängen Sie bis dahin einen Zettel mit Ihrem Namen an Ihr Fahrrad.</p><p>Fahrräder ohne Namen stellen wir für vier Wochen in die Garage. Wenn sie dort niemand abholt, geben wir sie an eine soziale Werkstatt weiter. Kinderwagen dürfen natürlich weiter im Keller stehen.</p><p>Ihr Hausmeister Bernd Wolter</p>`,
        items: [
          { n: 13, q: 'Die Bewohner sollen ihren Namen an ihr Fahrrad hängen.', opts: RF, a: 0 },
          { n: 14, q: 'Fahrräder ohne Namen …', opts: ['kommen sofort in eine Werkstatt.', 'bleiben im Fahrradkeller stehen.', 'kann man noch vier Wochen lang aus der Garage holen.'], a: 2 },
        ],
      },
      {
        html: `<p>Liebe Kolleginnen und Kollegen,</p><p>unser Betriebsausflug findet dieses Jahr am Freitag, den 20. Juni, statt. Wir fahren mit dem Schiff nach Rheinfels und essen dort zusammen zu Mittag. Die Firma bezahlt die Fahrt und das Essen, nur die Getränke bezahlt jeder selbst.</p><p>Abfahrt ist um 9.30 Uhr am Hafen, zurück sind wir gegen 17 Uhr. Wer nicht mitkommen möchte, arbeitet an diesem Tag ganz normal. Bitte tragt euch bis zum 6. Juni in die Liste am Empfang ein.</p><p>Viele Grüße<br>Sabine Kurz</p>`,
        items: [
          { n: 15, q: 'Am 20. Juni haben alle Mitarbeiter frei.', opts: RF, a: 1 },
          { n: 16, q: 'Die Firma bezahlt …', opts: ['die Fahrt und das Mittagessen.', 'nur die Fahrt mit dem Schiff.', 'auch die Getränke.'], a: 0 },
        ],
      },
    ]),
    part(4, [{
      html: `<h4>Willkommen bei der Großbäckerei Sonnenkorn – Informationen für neue Mitarbeiter</h4>
<p>Wir freuen uns, dass Sie bei uns anfangen. Hier sind die wichtigsten Regeln.</p>
<p><b>Arbeitskleidung:</b> Jacke, Hose und Mütze bekommen Sie von uns. Wir waschen die Kleidung auch für Sie. Nur die Sicherheitsschuhe kaufen Sie selbst; die Firma gibt Ihnen dafür einmal im Jahr 40 Euro dazu.</p>
<p><b>Arbeitszeit:</b> Die Frühschicht beginnt um 4 Uhr, die Spätschicht um 12 Uhr. Den Schichtplan für den nächsten Monat finden Sie immer ab dem 20. am Schwarzen Brett. Nach sechs Stunden Arbeit haben Sie 30 Minuten Pause.</p>
<p><b>Krankheit:</b> Wenn Sie krank sind, rufen Sie bitte sofort Ihren Schichtleiter an – eine SMS oder E-Mail reicht nicht. Eine Krankmeldung vom Arzt brauchen wir ab dem ersten Tag.</p>
<p><b>Hygiene:</b> In der Produktion dürfen Sie keinen Schmuck und keine Uhr tragen. Handys bleiben im Schließfach in der Umkleide.</p>`,
      items: [
        { n: 17, q: 'Die Mitarbeiter müssen ihre Jacken und Hosen zu Hause waschen.', opts: RF, a: 1 },
        { n: 18, q: 'Wer krank ist, muss den Schichtleiter telefonisch informieren.', opts: RF, a: 0 },
        { n: 19, q: 'Bei der Arbeit in der Produktion darf man keine Uhr tragen.', opts: RF, a: 0 },
      ],
    }]),
    part(5, [{
      html: `<p>Sehr geehrte Damen und Herren,</p>
<p>am Freitag, den 14. Juni, bin ich mit dem Regionalexpress von Kassel nach Fulda gefahren (Abfahrt 16.12 Uhr). Als ich in Fulda ${gap(20)} bin, habe ich leider meine Tasche im Zug vergessen. Sie lag auf der Ablage ${gap(21)} meinem Sitzplatz im zweiten Wagen.</p>
<p>Es ist eine schwarze Sporttasche aus Stoff. In der Tasche ${gap(22)} sich meine Arbeitsschuhe, eine Regenjacke und ein Buch aus der Bibliothek.</p>
<p>Ich habe schon am Bahnhof in Fulda gefragt, aber dort ${gap(23)} man mir nicht helfen. Deshalb schreibe ich Ihnen.</p>
<p>Könnten Sie bitte nachsehen, ob jemand die Tasche bei Ihnen ${gap(24)} hat? Wenn Sie sie finden, hole ich sie gern ab. Sie ${gap(25)} mich unter der Nummer 0151 555 0142 oder per E-Mail.</p>
<p>Vielen Dank für Ihre Mühe.</p>
<p>Mit freundlichen Grüßen<br>Ivana Kolar</p>`,
      items: [
        { n: 20, q: '', opts: ['aussteigen', 'ausgestiegen', 'ausstieg'], a: 1 },
        { n: 21, q: '', opts: ['über', 'aus', 'zwischen'], a: 0 },
        { n: 22, q: '', opts: ['befindet', 'befunden', 'befinden'], a: 2 },
        { n: 23, q: '', opts: ['konnten', 'konnte', 'könnt'], a: 1 },
        { n: 24, q: '', opts: ['aufgegeben', 'ausgegeben', 'abgegeben'], a: 2 },
        { n: 25, q: '', opts: ['erreichen', 'rufen', 'sprechen'], a: 0 },
      ],
    }], { gaps: true }),
  ],
};
