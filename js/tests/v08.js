import { part, ad, gap, RF, AX } from '../tests-lesen-b1.js';

export default {
  id: 'v08', title: 'Variante 8', about: 'Möbelhaus · Geschäfte und Service · Urlaubsanträge, Geburtstagsfeier, Grippeimpfung · Einkaufen im Internet · Anfrage an eine Sprachschule',
  parts: [
    part(1, [{
      html: `<div class="board"><h3>Möbelhaus Wohnwelt Brenner – Wegweiser</h3>
<p><b>3. Etage</b> Schlafzimmer · Betten und Matratzen · Kleiderschränke · Kinder- und Jugendzimmer</p>
<p><b>2. Etage</b> Wohnzimmer · Sofas und Sessel · Regale · Esstische und Stühle · Büromöbel</p>
<p><b>1. Etage</b> Küchen (Planung und Beratung) · Badmöbel · Lampen · Teppiche · Gardinen</p>
<p><b>Erdgeschoss</b> Information · Geschirr und Gläser · Bettwäsche und Handtücher · Dekoration · Kinderspielecke · Restaurant</p>
<p><b>Untergeschoss</b> Warenausgabe · Lieferservice und Verleih von Transportern · Reklamation · Fundgrube (Einzelstücke zum halben Preis)</p></div>`,
      items: [
        { n: 1, q: 'Sie brauchen ein Bett für Ihre zehnjährige Tochter.', opts: ['2. Etage', '3. Etage', 'andere Etage'], a: 1 },
        { n: 2, q: 'Sie arbeiten oft zu Hause und möchten einen Schreibtisch kaufen.', opts: ['2. Etage', '1. Etage', 'andere Etage'], a: 0 },
        { n: 3, q: 'Sie suchen neue Vorhänge für die Fenster im Wohnzimmer.', opts: ['2. Etage', 'Erdgeschoss', 'andere Etage'], a: 2 },
        { n: 4, q: 'Der Schrank, den Sie letzte Woche gekauft haben, hat einen Kratzer. Sie möchten sich beschweren.', opts: ['3. Etage', 'Untergeschoss', 'andere Etage'], a: 1 },
        { n: 5, q: 'Sie brauchen neue Handtücher für Ihr Bad.', opts: ['Erdgeschoss', '1. Etage', 'andere Etage'], a: 0 },
      ],
    }]),
    part(2, [{
      html: [
        ad('a', 'Secondhand-Laden „Zweite Chance“', 'Kleidung für Damen, Herren und Kinder zu kleinen Preisen. Wir kaufen auch Ihre gut erhaltene Kleidung. Bringen Sie sie einfach vorbei.'),
        ad('b', 'Handy-Doktor', 'Wir reparieren Handys und Tablets, meistens in einer Stunde: neues Display, neuer Akku. Montag bis Samstag 10–19 Uhr.'),
        ad('c', 'Buchhandlung Leseratte', 'Kinderbücher in vielen Sprachen. Jeden Samstag um 11 Uhr lesen wir Kindern ab vier Jahren Geschichten vor.'),
        ad('d', 'Wochenmarkt am Kirchplatz', 'Mittwochs und samstags von 7 bis 13 Uhr: frisches Obst und Gemüse, Käse, Eier und Blumen direkt vom Bauernhof.'),
        ad('e', 'Getränke Hoffmann', 'Wir liefern Wasser, Saft und Limonade zu Ihnen nach Hause oder ins Büro. Ab drei Kästen ist die Lieferung kostenlos.'),
        ad('f', 'Schreibwaren Lenz', 'Alles für die Schule: Hefte, Stifte, Schultaschen und Sportbeutel. Zum Schulanfang 10 Prozent Rabatt auf alles.'),
        ad('g', 'Supermarkt Basar', 'Lebensmittel aus der Türkei, aus Asien und Afrika. Frisches Fleisch, Gewürze, Tee. Täglich bis 22 Uhr geöffnet.'),
        ad('h', 'Fotostudio Blende', 'Passbilder zum Mitnehmen in zehn Minuten. Auch Fotos für Bewerbungen und Familienfotos. Kein Termin nötig.'),
      ].join(''),
      items: [
        { n: 6, q: 'Sie beantragen einen neuen Pass und brauchen dafür ein Foto.', opts: AX, a: 7 },
        { n: 7, q: 'Ihr Handy ist auf den Boden gefallen. Jetzt ist das Display kaputt.', opts: AX, a: 1 },
        { n: 8, q: 'Ihre Tochter kommt bald in die erste Klasse und braucht noch eine Schultasche.', opts: AX, a: 5 },
        { n: 9, q: 'Die Jacken und Hosen Ihrer Kinder sind zu klein geworden, aber noch gut. Sie möchten die Sachen verkaufen.', opts: AX, a: 0 },
        { n: 10, q: 'Sie möchten Ihrem Mann zum Geburtstag eine Armbanduhr schenken.', opts: AX, a: 8 },
      ],
    }], { compact: true }),
    part(3, [
      {
        html: `<p>Liebe Mitarbeiterinnen und Mitarbeiter,</p><p>bitte planen Sie Ihren Sommerurlaub rechtzeitig. Alle Urlaubsanträge für Juli und August müssen bis zum 31. März bei Ihrer Abteilungsleitung sein. Kolleginnen und Kollegen mit Schulkindern bekommen in den Schulferien zuerst Urlaub. In jeder Abteilung dürfen höchstens drei Personen gleichzeitig fehlen.</p><p>Wer mehr als drei Wochen ohne Pause Urlaub nehmen möchte, spricht bitte vorher mit mir.</p><p>Mit freundlichen Grüßen<br>Helga Brandstetter, Personalleitung</p>`,
        items: [
          { n: 11, q: 'Eltern von Schulkindern bekommen in den Schulferien vor den anderen Mitarbeitern Urlaub.', opts: RF, a: 0 },
          { n: 12, q: 'Wer im August Urlaub machen möchte, …', opts: ['muss den Antrag bis Ende März abgeben.', 'darf höchstens drei Wochen Urlaub nehmen.', 'muss immer zuerst mit Frau Brandstetter sprechen.'], a: 0 },
        ],
      },
      {
        html: `<p>Liebe Nachbarinnen und Nachbarn,</p><p>am Samstag, den 17. Mai, feiere ich meinen 30. Geburtstag in meiner Wohnung im zweiten Stock. Es kommen ungefähr zwanzig Gäste, deshalb kann es an diesem Abend etwas lauter werden. Um 24 Uhr machen wir die Musik aus, das verspreche ich. Wenn es Sie trotzdem stört, klingeln Sie einfach bei mir.</p><p>Natürlich sind Sie auch herzlich eingeladen: Kommen Sie gern ab 20 Uhr auf ein Glas vorbei!</p><p>Viele Grüße<br>Jonas Petrović</p>`,
        items: [
          { n: 13, q: 'Bei der Feier soll die ganze Nacht Musik laufen.', opts: RF, a: 1 },
          { n: 14, q: 'Die Nachbarn …', opts: ['sollen am Samstagabend nicht zu Hause sein.', 'dürfen auch zur Feier kommen.', 'müssen sich für die Feier anmelden.'], a: 1 },
        ],
      },
      {
        html: `<h4>Grippeimpfung im Gesundheitsamt</h4><p>Im Oktober und November können Sie sich im Gesundheitsamt Sonnberg gegen Grippe impfen lassen: jeden Dienstag von 14 bis 17 Uhr, ohne Termin. Die Impfung wird besonders für Menschen über 60, für Schwangere und für Personen mit chronischen Krankheiten empfohlen. Für sie bezahlt die Krankenkasse. Alle anderen zahlen 20 Euro.</p><p>Bitte bringen Sie Ihren Impfpass und Ihre Versichertenkarte mit. Wenn Sie Fieber haben, kommen Sie bitte erst, wenn Sie wieder gesund sind.</p>`,
        items: [
          { n: 15, q: 'Für die Impfung muss man vorher einen Termin vereinbaren.', opts: RF, a: 1 },
          { n: 16, q: 'Menschen über 60 …', opts: ['können nur im November kommen.', 'bezahlen für die Impfung 20 Euro.', 'müssen die Impfung nicht selbst bezahlen.'], a: 2 },
        ],
      },
    ]),
    part(4, [{
      html: `<h4>Einkaufen im Internet – das sollten Sie wissen</h4>
<p>Immer mehr Menschen bestellen Kleidung, Bücher oder Elektrogeräte im Internet. Das ist bequem, aber man sollte einige Regeln kennen.</p>
<p>Wenn Ihnen die Ware nicht gefällt, können Sie sie innerhalb von 14 Tagen zurückschicken. Einen Grund müssen Sie nicht nennen. Die Frist beginnt an dem Tag, an dem Sie das Paket bekommen. Wer das Porto für die Rücksendung bezahlt, ist bei jedem Geschäft anders. Lesen Sie das deshalb vor der Bestellung nach.</p>
<p>Nicht alles kann man zurückgeben: Lebensmittel, die schnell schlecht werden, und Waren, die extra für Sie gemacht wurden, zum Beispiel ein T-Shirt mit Ihrem Namen, müssen Sie behalten.</p>
<p>Bezahlen Sie am besten erst, wenn Sie die Rechnung bekommen haben. Seien Sie vorsichtig, wenn ein unbekanntes Geschäft das Geld vor der Lieferung haben möchte und die Preise sehr niedrig sind.</p>`,
      items: [
        { n: 17, q: 'Man hat zwei Wochen Zeit, um eine Bestellung zurückzuschicken.', opts: RF, a: 0 },
        { n: 18, q: 'Die Rücksendung ist bei allen Geschäften kostenlos.', opts: RF, a: 1 },
        { n: 19, q: 'Ein T-Shirt, auf das der eigene Name gedruckt wurde, kann man nicht zurückgeben.', opts: RF, a: 0 },
      ],
    }]),
    part(5, [{
      html: `<p>Sehr geehrte Damen und Herren,</p>
<p>auf Ihrer Internetseite habe ich gesehen, dass Sie im Herbst neue Deutschkurse ${gap(20)}. Ich habe im Juni die Prüfung B1 bestanden und möchte jetzt gern einen B2-Kurs ${gap(21)}.</p>
<p>Da ich tagsüber als Busfahrer arbeite, kann ich nur abends oder am Wochenende lernen. Gibt es bei Ihnen einen Kurs, ${gap(22)} nach 18 Uhr beginnt? Ich würde auch gern wissen, wie ${gap(23)} Teilnehmer in einer Gruppe sind und was der Kurs kostet.</p>
<p>Außerdem möchte ich fragen, ${gap(24)} ich vor dem Kurs einen Einstufungstest machen muss. Könnten Sie mir bitte ein Anmeldeformular ${gap(25)}?</p>
<p>Vielen Dank im Voraus für Ihre Antwort.</p>
<p>Mit freundlichen Grüßen<br>Mehmet Aydin</p>`,
      items: [
        { n: 20, q: '', opts: ['anbieten', 'anbietet', 'angeboten'], a: 0 },
        { n: 21, q: '', opts: ['teilnehmen', 'besuchen', 'gehen'], a: 1 },
        { n: 22, q: '', opts: ['den', 'dem', 'der'], a: 2 },
        { n: 23, q: '', opts: ['viel', 'viele', 'vielen'], a: 1 },
        { n: 24, q: '', opts: ['ob', 'dass', 'wenn'], a: 0 },
        { n: 25, q: '', opts: ['geschickt', 'schickt', 'schicken'], a: 2 },
      ],
    }], { gaps: true }),
  ],
};
