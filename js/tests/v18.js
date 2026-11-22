import { part, ad, gap, RF, AX } from '../tests-lesen-b1.js';

export default {
  id: 'v18', title: 'Variante 18', about: 'Gartencenter · Anzeigen · Betriebsausflug, Zahnarzt, Hallenbad · Monatsticket · Verlorene Bankkarte',
  parts: [
    part(1, [{
      html: `<div class="board"><h3>Gartencenter Grünwald – Wegweiser</h3>
<p><b>Eingangsbereich</b> Information · Kasse · Lieferservice · Café · Samen und Blumenzwiebeln</p>
<p><b>Halle 1</b> Zimmerpflanzen · Orchideen · Blumentöpfe und Vasen · Schnittblumen und Blumensträuße</p>
<p><b>Halle 2</b> Gartenwerkzeug · Rasenmäher · Gartenschläuche und Gießkannen · Erde und Dünger</p>
<p><b>Halle 3</b> Gartenmöbel · Sonnenschirme · Grills und Grillkohle · Dekoration</p>
<p><b>Außenbereich</b> Obstbäume · Rosen · Sträucher · Gemüse- und Kräuterpflanzen · Teichpflanzen</p>
<p><b>Obergeschoss</b> Tierfutter · Aquarien · Zubehör für Hunde, Katzen und Vögel</p></div>`,
      items: [
        { n: 1, q: 'Sie möchten auf Ihrem Balkon Tomaten haben und suchen junge Tomatenpflanzen.', opts: ['Halle 1', 'Außenbereich', 'anderer Bereich'], a: 1 },
        { n: 2, q: 'Sie brauchen einen Sack Blumenerde.', opts: ['Halle 1', 'Halle 2', 'anderer Bereich'], a: 1 },
        { n: 3, q: 'Sie möchten für den Sommer einen Tisch und zwei Stühle für Ihre Terrasse kaufen.', opts: ['Halle 2', 'Außenbereich', 'anderer Bereich'], a: 2 },
        { n: 4, q: 'Sie sind zum Geburtstag eingeladen und möchten einen Blumenstrauß mitbringen.', opts: ['Halle 1', 'Halle 3', 'anderer Bereich'], a: 0 },
        { n: 5, q: 'Sie haben einen großen Apfelbaum bezahlt. Jetzt möchten Sie fragen, ob man ihn zu Ihnen nach Hause bringen kann.', opts: ['Außenbereich', 'Halle 2', 'anderer Bereich'], a: 2 },
      ],
    }]),
    part(2, [{
      html: [
        ad('a', 'WG-Zimmer frei', '18 m², möbliert, in einer Wohngemeinschaft mit vier Personen in der Nähe der Universität. 380 Euro warm. Nur für Nichtraucher.'),
        ad('b', 'Hausmeisterservice Petrov', 'Wir mähen Ihren Rasen, schneiden Hecken, räumen im Winter den Schnee und machen kleine Reparaturen am Haus.'),
        ad('c', 'Suche Garage oder Stellplatz', 'Für meinen Pkw in der Südstadt. Ich zahle bis 60 Euro im Monat.'),
        ad('d', 'Schlüsseldienst Blitz', 'Tür zu? Wir sind in 30 Minuten bei Ihnen – rund um die Uhr, auch an Sonn- und Feiertagen. Feste Preise.'),
        ad('e', 'Nachmieter gesucht', '2-Zimmer-Wohnung, 55 m², Einbauküche, Balkon. 620 Euro warm, frei ab 1. März. Haustiere sind erlaubt.'),
        ad('f', 'Stellplatz zu vermieten', 'In der Tiefgarage im Lindenweg (Südstadt). 50 Euro im Monat, ab sofort frei.'),
        ad('g', 'Fensterreinigung Kristall', 'Wir putzen Fenster in Wohnungen, Büros und Geschäften. Auch Wintergärten. Rufen Sie uns an!'),
        ad('h', '4-Zimmer-Wohnung mit Garten', '110 m², am Stadtrand, ruhige Lage. 1 350 Euro kalt. Keine Haustiere.'),
      ].join(''),
      items: [
        { n: 6, q: 'Es ist Sonntagabend. Sie stehen vor Ihrer Wohnungstür, aber der Schlüssel liegt in der Wohnung.', opts: AX, a: 3 },
        { n: 7, q: 'Sie und Ihr Freund haben eine Katze und suchen eine kleine Wohnung für höchstens 700 Euro.', opts: AX, a: 4 },
        { n: 8, q: 'Sie wohnen in der Südstadt und haben ein Auto gekauft. In Ihrer Straße gibt es fast nie freie Parkplätze.', opts: AX, a: 5 },
        { n: 9, q: 'Sie sind 75 Jahre alt und können die Arbeit in Ihrem Garten nicht mehr allein machen.', opts: AX, a: 1 },
        { n: 10, q: 'Ihr Sofa hat Flecken. Sie suchen eine Firma, die Sofas und Teppiche reinigt.', opts: AX, a: 8 },
      ],
    }], { compact: true }),
    part(3, [
      {
        html: `<p>Liebe Kolleginnen und Kollegen,</p><p>unser Betriebsausflug findet dieses Jahr am Freitag, den 19. September, statt. Wir fahren mit dem Zug nach Seeburg, machen dort eine Schifffahrt und essen danach zusammen im Restaurant „Zur Mühle“. Die Zugfahrt und das Schiff bezahlt die Firma, das Essen bezahlt jeder selbst.</p><p>Wer mitkommen möchte, trägt sich bitte bis zum 5. September in die Liste am Empfang ein. Wer nicht mitfährt, arbeitet an diesem Tag normal.</p><p>Viele Grüße<br>Martin Lorenz</p>`,
        items: [
          { n: 11, q: 'Am Tag des Ausflugs haben alle Mitarbeiter frei.', opts: RF, a: 1 },
          { n: 12, q: 'Wer am Ausflug teilnimmt, bezahlt …', opts: ['nichts.', 'nur das Essen.', 'die Zugfahrt und das Essen.'], a: 1 },
        ],
      },
      {
        html: `<p>Sehr geehrter Herr Tran,</p><p>Ihre letzte Kontrolle bei uns war vor einem Jahr. Wir empfehlen Ihnen, Ihre Zähne wieder untersuchen zu lassen. Die Kontrolle bezahlt Ihre Krankenkasse. Bitte bringen Sie Ihr Bonusheft mit: Wenn Sie jedes Jahr zur Kontrolle kommen, bezahlen Sie später weniger für Zahnersatz.</p><p>Einen Termin können Sie telefonisch oder über unsere Internetseite vereinbaren. Wenn Sie einen Termin nicht einhalten können, sagen Sie ihn bitte mindestens 24 Stunden vorher ab.</p><p>Ihre Zahnarztpraxis Dr. Engel</p>`,
        items: [
          { n: 13, q: 'Die Praxis rät Herrn Tran, wieder zur Kontrolle zu kommen.', opts: RF, a: 0 },
          { n: 14, q: 'Wer nicht zu seinem Termin kommen kann, soll …', opts: ['spätestens einen Tag vorher absagen.', 'einfach an einem anderen Tag kommen.', 'seine Krankenkasse informieren.'], a: 0 },
        ],
      },
      {
        html: `<h4>Hallenbad Grünwald – wichtige Information</h4><p>Unser Hallenbad wird renoviert und bleibt deshalb vom 1. Juni bis zum 31. August geschlossen. In dieser Zeit können Sie mit Ihrer Jahreskarte das Freibad am Waldsee benutzen und müssen dafür nichts extra bezahlen. Die Schwimmkurse für Kinder finden im Sommer ebenfalls im Freibad statt.</p><p>Nur die Sauna bleibt geöffnet: Sie hat einen eigenen Eingang in der Parkstraße. Ab September freuen wir uns, Sie im neuen Bad zu begrüßen.</p>`,
        items: [
          { n: 15, q: 'Im Sommer kann man die Sauna nicht benutzen.', opts: RF, a: 1 },
          { n: 16, q: 'Wer eine Jahreskarte hat, …', opts: ['bekommt für den Sommer sein Geld zurück.', 'muss im Freibad noch etwas dazuzahlen.', 'darf im Sommer ohne Extrakosten ins Freibad.'], a: 2 },
        ],
      },
    ]),
    part(4, [{
      html: `<h4>Mit dem Monatsticket günstig unterwegs</h4>
<p>Fahren Sie oft mit Bus und Bahn? Dann lohnt sich das Monatsticket der Verkehrsbetriebe Grünwald. Es kostet 49 Euro und gilt in allen Bussen und Straßenbahnen der Stadt, so oft Sie möchten. In den Zügen der Bahn gilt es nicht.</p>
<p>Das Ticket gibt es nur im Abonnement. Sie bestellen es im Kundenzentrum am Marktplatz oder im Internet, und wir buchen das Geld jeden Monat von Ihrem Konto ab. Sie können das Abonnement jeden Monat kündigen.</p>
<p>Das Ticket ist persönlich: Ihr Name steht darauf, und eine andere Person darf es nicht benutzen. Bei einer Kontrolle müssen Sie auch Ihren Ausweis zeigen. Am Wochenende und an Feiertagen dürfen Sie aber bis zu drei Kinder unter 15 Jahren kostenlos mitnehmen.</p>
<p>Ein Fahrrad können Sie nach 9 Uhr mitnehmen, wenn genug Platz ist. Dafür brauchen Sie eine Fahrradkarte für 2 Euro.</p>`,
      items: [
        { n: 17, q: 'Mit dem Monatsticket kann man auch mit dem Zug fahren.', opts: RF, a: 1 },
        { n: 18, q: 'Man darf das Ticket einem Freund leihen.', opts: RF, a: 1 },
        { n: 19, q: 'Am Samstag kann man Kinder mitnehmen, ohne für sie zu bezahlen.', opts: RF, a: 0 },
      ],
    }]),
    part(5, [{
      html: `<p>Sehr geehrte Damen und Herren,</p>
<p>am vergangenen Samstag habe ich meine Bankkarte verloren. Wahrscheinlich ist sie mir beim Einkaufen aus der Tasche ${gap(20)}. Ich habe die Karte noch am selben Abend telefonisch sperren ${gap(21)}.</p>
<p>Nun möchte ich Sie bitten, mir so schnell ${gap(22)} möglich eine neue Karte zu schicken. Bitte teilen Sie mir auch mit, ${gap(23)} das dauert und ob ich dafür etwas bezahlen muss.</p>
<p>In den nächsten Tagen brauche ich Bargeld. Deshalb ${gap(24)} wissen, ob ich auch ohne Karte am Schalter Geld abheben kann.</p>
<p>Meine Kontonummer und meine Adresse finden Sie unten. Für Ihre Hilfe bedanke ich ${gap(25)} im Voraus.</p>
<p>Mit freundlichen Grüßen<br>Farid Rahimi</p>`,
      items: [
        { n: 20, q: '', opts: ['fallen', 'gefallen', 'fiel'], a: 1 },
        { n: 21, q: '', opts: ['lassen', 'gelassen', 'lässt'], a: 0 },
        { n: 22, q: '', opts: ['als', 'so', 'wie'], a: 2 },
        { n: 23, q: '', opts: ['wie viel', 'wie lange', 'wie oft'], a: 1 },
        { n: 24, q: '', opts: ['ich möchte', 'möchte ich', 'ich möchten'], a: 1 },
        { n: 25, q: '', opts: ['mich', 'mir', 'sich'], a: 0 },
      ],
    }], { gaps: true }),
  ],
};
