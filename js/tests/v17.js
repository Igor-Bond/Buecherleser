import { part, ad, gap, RF, AX } from '../tests-lesen-b1.js';

export default {
  id: 'v17', title: 'Variante 17', about: 'Museum · Anzeigen · Stromzähler, Kochkurs, Kinderflohmarkt · Krank am Wochenende · Elternabend',
  parts: [
    part(1, [{
      html: `<div class="board"><h3>Stadtmuseum Brunnental – Wegweiser</h3>
<p><b>3. Stock</b> Sonderausstellung „100 Jahre Fotografie“ · Museumscafé mit Terrasse</p>
<p><b>2. Stock</b> Malerei und Skulpturen · Vortragssaal (Filme und Vorträge)</p>
<p><b>1. Stock</b> Stadtgeschichte vom Mittelalter bis heute · Kinderwerkstatt (Malen und Basteln)</p>
<p><b>Erdgeschoss</b> Kasse · Information · Audioguides · Museumsshop (Bücher, Postkarten, Geschenke)</p>
<p><b>Untergeschoss</b> Garderobe · Schließfächer · Toiletten · Wickelraum</p></div>`,
      items: [
        { n: 1, q: 'Sie haben einen großen Rucksack dabei und möchten ihn nicht durch das ganze Museum tragen.', opts: ['Erdgeschoss', 'Untergeschoss', 'anderer Stock'], a: 1 },
        { n: 2, q: 'Ihre Tochter ist sieben Jahre alt und möchte im Museum selbst ein Bild malen.', opts: ['1. Stock', '2. Stock', 'anderer Stock'], a: 0 },
        { n: 3, q: 'Sie interessieren sich für alte Kameras und Fotos.', opts: ['1. Stock', '2. Stock', 'anderer Stock'], a: 2 },
        { n: 4, q: 'Sie möchten eine Postkarte kaufen und sie Ihrer Freundin schicken.', opts: ['Erdgeschoss', '3. Stock', 'anderer Stock'], a: 0 },
        { n: 5, q: 'Um 16 Uhr wird ein Film über das Leben in Brunnental vor 100 Jahren gezeigt. Sie möchten ihn sehen.', opts: ['1. Stock', '3. Stock', 'anderer Stock'], a: 2 },
      ],
    }]),
    part(2, [{
      html: [
        ad('a', 'Musikschule Klangfarbe', 'Unterricht in Gitarre, Klavier und Geige für Kinder ab 6 Jahren und für Erwachsene. Die Probestunde ist kostenlos.'),
        ad('b', 'SV Brunnental sucht junge Fußballer', 'Für Mädchen und Jungen von 6 bis 12 Jahren. Training mittwochs um 16.30 Uhr auf dem Sportplatz am Waldweg.'),
        ad('c', 'Kinderkleider-Basar', 'Samstag, 9–13 Uhr, im Gemeindehaus: gebrauchte Kinderkleidung, Schuhe und Spielzeug zu kleinen Preisen.'),
        ad('d', 'Tanzschule Rondo', 'Salsa und Walzer für Paare. Neuer Kurs für Anfänger ab Freitag, 20 Uhr.'),
        ad('e', 'Chor „Stimmen der Welt“', 'Wir singen Lieder aus vielen Ländern und suchen neue Sängerinnen und Sänger. Probe donnerstags um 19 Uhr. Noten lesen müssen Sie nicht.'),
        ad('f', 'Ferienprogramm für Schulkinder', 'In den Sommerferien, Montag bis Freitag 8–16 Uhr: Ausflüge, Sport und Basteln für Kinder von 6 bis 12 Jahren. Mit Mittagessen.'),
        ad('g', 'Schneiderei Aylin', 'Wir kürzen Hosen und Röcke, ändern Kleider und reparieren Reißverschlüsse. Meistens fertig in zwei Tagen.'),
        ad('h', 'Modehaus Berger – Sommerschlussverkauf', 'Damen- und Herrenmode bis zu 50 Prozent billiger. Nur noch bis Samstag!'),
      ].join(''),
      items: [
        { n: 6, q: 'Sie singen gern und möchten dabei neue Leute kennenlernen.', opts: AX, a: 4 },
        { n: 7, q: 'Sie müssen im Juli arbeiten, aber Ihr achtjähriger Sohn hat keine Schule. Sie suchen für ihn eine Betreuung am Tag.', opts: AX, a: 5 },
        { n: 8, q: 'Sie haben eine Hose gekauft, aber sie ist zu lang.', opts: AX, a: 6 },
        { n: 9, q: 'Ihre Kinder wachsen schnell. Sie brauchen für sie günstige Hosen und Pullover.', opts: AX, a: 2 },
        { n: 10, q: 'Ihre neunjährige Tochter möchte in einem Verein Handball spielen.', opts: AX, a: 8 },
      ],
    }], { compact: true }),
    part(3, [
      {
        html: `<p>Sehr geehrte Frau Nowak,</p><p>einmal im Jahr lesen wir den Stromzähler in Ihrer Wohnung ab. Unser Mitarbeiter kommt am Dienstag, den 3. Februar, zwischen 8 und 12 Uhr zu Ihnen. Er zeigt Ihnen seinen Dienstausweis.</p><p>Wenn Sie an diesem Tag nicht zu Hause sind, können Sie den Zählerstand auch selbst ablesen und uns bis zum 10. Februar auf unserer Internetseite mitteilen. Die Ablesung ist für Sie kostenlos.</p><p>Mit freundlichen Grüßen<br>Stadtwerke Brunnental</p>`,
        items: [
          { n: 11, q: 'Frau Nowak muss am 3. Februar unbedingt zu Hause sein.', opts: RF, a: 1 },
          { n: 12, q: 'Der Mitarbeiter der Stadtwerke …', opts: ['kommt am Nachmittag.', 'muss von Frau Nowak bezahlt werden.', 'hat einen Ausweis dabei.'], a: 2 },
        ],
      },
      {
        html: `<p>Liebe Teilnehmerinnen und Teilnehmer,</p><p>leider ist unsere Kursleiterin Frau Okoye krank. Der Kurs „Kochen aus aller Welt“ fällt deshalb am Mittwoch, den 11. März, aus. Wir holen den Abend am Ende des Kurses nach: Der letzte Termin ist jetzt der 29. April und nicht der 22. April.</p><p>Sie müssen nichts extra bezahlen. Wer am 29. April keine Zeit hat, bekommt 12 Euro zurück. Bitte melden Sie sich in diesem Fall im Büro der Volkshochschule.</p><p>Freundliche Grüße<br>Ihre Volkshochschule</p>`,
        items: [
          { n: 13, q: 'Der Kurs endet jetzt eine Woche später als geplant.', opts: RF, a: 0 },
          { n: 14, q: 'Geld zurück bekommen Teilnehmer, die …', opts: ['am 11. März krank waren.', 'am neuen Termin nicht kommen können.', 'den Kurs schon im Büro bezahlt haben.'], a: 1 },
        ],
      },
      {
        html: `<h4>Kinderflohmarkt im Stadtpark</h4><p>Am Sonntag, den 17. Mai, findet von 10 bis 15 Uhr wieder unser Flohmarkt von Kindern für Kinder statt. Verkaufen dürfen nur Kinder und Jugendliche bis 14 Jahre: Spielzeug, Bücher, Spiele und Kinderkleidung.</p><p>Einen Stand muss man nicht anmelden, und er kostet nichts. Bitte bringt eine Decke mit, auf die ihr eure Sachen legen könnt. Tische sind nicht erlaubt. Eltern dürfen natürlich helfen. Bei schlechtem Wetter fällt der Flohmarkt aus.</p>`,
        items: [
          { n: 15, q: 'Bei Regen findet der Flohmarkt an einem anderen Ort statt.', opts: RF, a: 1 },
          { n: 16, q: 'Wer etwas verkaufen möchte, …', opts: ['soll eine Decke mitbringen.', 'muss einen Tisch mitbringen.', 'muss sich vorher anmelden.'], a: 0 },
        ],
      },
    ]),
    part(4, [{
      html: `<h4>Krank am Wochenende – was tun?</h4>
<p>Viele Arztpraxen sind abends, am Wochenende und an Feiertagen geschlossen. Wenn Sie in dieser Zeit krank werden und nicht bis zum nächsten Werktag warten können, hilft Ihnen der ärztliche Bereitschaftsdienst. Sie erreichen ihn in ganz Deutschland unter der Telefonnummer 116 117. Der Anruf ist kostenlos. Am Telefon sagt man Ihnen, wo die nächste Bereitschaftspraxis ist. Wenn Sie nicht selbst kommen können, besucht ein Arzt Sie zu Hause.</p>
<p>Der Bereitschaftsdienst ist für Krankheiten da, die nicht lebensgefährlich sind, zum Beispiel hohes Fieber oder starke Bauchschmerzen. Bei einem Notfall, etwa nach einem schweren Unfall oder bei starken Schmerzen in der Brust, rufen Sie sofort den Rettungsdienst unter 112 an.</p>
<p>Medikamente bekommen Sie auch nachts: In jeder Stadt hat immer eine Apotheke Notdienst. Welche das ist, steht an der Tür jeder Apotheke und im Internet. Nachts bezahlen Sie dort eine Gebühr von 2,50 Euro.</p>`,
      items: [
        { n: 17, q: 'Den Bereitschaftsdienst ruft man an, wenn man in Lebensgefahr ist.', opts: RF, a: 1 },
        { n: 18, q: 'Ein Arzt vom Bereitschaftsdienst kann auch zu den Patienten nach Hause kommen.', opts: RF, a: 0 },
        { n: 19, q: 'In der Apotheke mit Notdienst muss man nachts etwas extra bezahlen.', opts: RF, a: 0 },
      ],
    }]),
    part(5, [{
      html: `<p>Sehr geehrte Frau Baumgartner,</p>
<p>vielen Dank ${gap(20)} Ihre Einladung zum Elternabend am 24. September. Leider kann ich an diesem Abend nicht kommen, ${gap(21)} ich bis 21 Uhr arbeiten muss. Mein Mann kann auch nicht, er ist in dieser Woche auf einer Dienstreise.</p>
<p>Trotzdem möchten wir gern wissen, ${gap(22)} an dem Abend besprochen wird. Könnten Sie ${gap(23)} bitte das Protokoll per E-Mail schicken? Besonders interessieren wir uns für die Klassenfahrt im Frühling.</p>
<p>Außerdem würde ich gern einmal persönlich mit Ihnen ${gap(24)} Leons Noten in Mathematik sprechen. Haben Sie in der nächsten Woche ${gap(25)} Termin frei? Ich habe am Dienstag und am Donnerstag ab 14 Uhr Zeit.</p>
<p>Mit freundlichen Grüßen<br>Ivana Kovačević</p>`,
      items: [
        { n: 20, q: '', opts: ['über', 'für', 'um'], a: 1 },
        { n: 21, q: '', opts: ['weil', 'denn', 'deshalb'], a: 0 },
        { n: 22, q: '', opts: ['wenn', 'weil', 'was'], a: 2 },
        { n: 23, q: '', opts: ['uns', 'unser', 'wir'], a: 0 },
        { n: 24, q: '', opts: ['für', 'über', 'an'], a: 1 },
        { n: 25, q: '', opts: ['ein', 'einem', 'einen'], a: 2 },
      ],
    }], { gaps: true }),
  ],
};
