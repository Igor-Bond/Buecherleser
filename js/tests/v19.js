import { part, ad, gap, RF, AX } from '../tests-lesen-b1.js';

export default {
  id: 'v19', title: 'Variante 19', about: 'Ärzte- und Bürohaus · Anzeigen · Wochenmarkt, Krankenkasse, Nachbarschaftsfrühstück · Berufsanerkennung · Paket nicht angekommen',
  parts: [
    part(1, [{
      html: `<div class="board"><h3>Ärzte- und Bürohaus am Marktplatz – Wegweiser</h3>
<p><b>5. Stock</b> Rechtsanwälte Brenner &amp; Aksoy (Arbeitsrecht, Mietrecht) · Steuerberaterin Vogel</p>
<p><b>4. Stock</b> Übersetzungsbüro Lingo (beglaubigte Übersetzungen) · Reisebüro Fernweh</p>
<p><b>3. Stock</b> Praxis für Physiotherapie und Massage · Augenarzt Dr. Lang</p>
<p><b>2. Stock</b> Hausarztpraxis Dr. Jansen · Kinderärztin Dr. Roth</p>
<p><b>1. Stock</b> Versicherungsbüro Albers · Fahrschule Start · Zeitarbeitsfirma Personal Plus</p>
<p><b>Erdgeschoss</b> Apotheke · Optiker Klarblick · Bäckerei · Paketstation</p></div>`,
      items: [
        { n: 1, q: 'Ihr Arzt hat Ihnen ein Rezept gegeben. Jetzt möchten Sie das Medikament holen.', opts: ['Erdgeschoss', '2. Stock', 'anderer Stock'], a: 0 },
        { n: 2, q: 'Sie brauchen Ihr Schulzeugnis aus Ihrem Heimatland auf Deutsch, mit Stempel.', opts: ['1. Stock', '4. Stock', 'anderer Stock'], a: 1 },
        { n: 3, q: 'Sie haben Probleme mit Ihrem Vermieter und brauchen den Rat eines Juristen.', opts: ['4. Stock', '1. Stock', 'anderer Stock'], a: 2 },
        { n: 4, q: 'Ihre Augen sind seit Tagen rot und tun weh. Sie brauchen einen Arzt.', opts: ['Erdgeschoss', '3. Stock', 'anderer Stock'], a: 1 },
        { n: 5, q: 'Sie haben seit drei Tagen Husten und Fieber und möchten sich untersuchen lassen.', opts: ['3. Stock', '5. Stock', 'anderer Stock'], a: 2 },
      ],
    }]),
    part(2, [{
      html: [
        ad('a', 'Friseursalon Haarscharf', 'Kommen Sie ohne Termin! Montag bis Samstag 9–19 Uhr. Herrenschnitt 18 Euro, Kinder 12 Euro.'),
        ad('b', 'Hebamme Carla Nuñez', 'Ich begleite Sie vor und nach der Geburt und beantworte alle Ihre Fragen. Kurse für Schwangere jeden Montag.'),
        ad('c', 'Ernährungsberatung', 'Gesund essen und abnehmen – Beratung allein oder in der Gruppe. Viele Krankenkassen bezahlen einen Teil der Kosten.'),
        ad('d', 'Handy-Doktor', 'Display kaputt? Akku schwach? Wir reparieren Smartphones und Tablets, oft in nur einer Stunde.'),
        ad('e', 'Biohof Wiesengrund', 'Jede Woche eine Kiste mit frischem Obst und Gemüse – wir liefern direkt an Ihre Wohnungstür.'),
        ad('f', 'Elektronikmarkt Voltix', 'Neue Smartphones und Tablets zu Top-Preisen. Diese Woche: 20 Prozent Rabatt auf Hüllen und Ladekabel.'),
        ad('g', 'Pflegedienst Herzenssache', 'Wir helfen älteren Menschen zu Hause: beim Waschen und Anziehen, mit Medikamenten und beim Einkaufen. Täglich, auch am Wochenende.'),
        ad('h', 'Endlich Nichtraucher', 'In sechs Wochen rauchfrei. Kurs montags um 18 Uhr im Gesundheitszentrum.'),
      ].join(''),
      items: [
        { n: 6, q: 'Ihr Handy ist auf den Boden gefallen. Jetzt ist das Glas kaputt.', opts: AX, a: 3 },
        { n: 7, q: 'Ihre Mutter ist 82 Jahre alt und lebt allein. Sie braucht jeden Morgen Hilfe beim Aufstehen und Anziehen.', opts: AX, a: 6 },
        { n: 8, q: 'Sie erwarten Ihr erstes Kind und haben viele Fragen.', opts: AX, a: 1 },
        { n: 9, q: 'Sie haben wenig Zeit zum Einkaufen, möchten aber oft frisches Gemüse essen.', opts: AX, a: 4 },
        { n: 10, q: 'Sie haben oft Rückenschmerzen und suchen einen Gymnastikkurs.', opts: AX, a: 8 },
      ],
    }], { compact: true }),
    part(3, [
      {
        html: `<h4>Der Wochenmarkt zieht um</h4><p>Liebe Kundinnen und Kunden, ab dem 6. Oktober wird der Rathausplatz umgebaut. Der Wochenmarkt findet deshalb bis zum Frühjahr auf dem Parkplatz an der Stadthalle statt. Die Markttage bleiben gleich: Mittwoch und Samstag von 7 bis 13 Uhr. Alle Händler kommen mit.</p><p>An Markttagen können Sie auf dem Parkplatz an der Stadthalle nicht parken. Benutzen Sie bitte das Parkhaus in der Schillerstraße: Die erste Stunde ist dort für Marktbesucher kostenlos.</p>`,
        items: [
          { n: 11, q: 'Der Markt findet in Zukunft an anderen Wochentagen statt.', opts: RF, a: 1 },
          { n: 12, q: 'Wer mit dem Auto zum Markt kommt, …', opts: ['parkt im Parkhaus eine Stunde gratis.', 'kann direkt an der Stadthalle parken.', 'soll auf dem Rathausplatz parken.'], a: 0 },
        ],
      },
      {
        html: `<p>Sehr geehrte Frau Yilmaz,</p><p>Ihre Gesundheitskarte ist nur noch bis zum 31. Dezember gültig. Für die neue Karte brauchen wir ein aktuelles Foto von Ihnen. Sie können es ganz einfach mit unserer App hochladen oder per Post schicken. Bitte schreiben Sie dann Ihre Versichertennummer auf die Rückseite.</p><p>Die neue Karte bekommen Sie etwa drei Wochen später mit der Post. Für die Karte Ihrer Tochter Elif brauchen wir kein Foto, weil sie noch nicht 15 Jahre alt ist.</p><p>Mit freundlichen Grüßen<br>Ihre Krankenkasse VitaPlus</p>`,
        items: [
          { n: 13, q: 'Frau Yilmaz soll der Krankenkasse ein Foto schicken.', opts: RF, a: 0 },
          { n: 14, q: 'Die Tochter von Frau Yilmaz …', opts: ['bekommt erst mit 15 Jahren eine Karte.', 'braucht für ihre Karte kein Bild.', 'muss ihr Foto mit der Post schicken.'], a: 1 },
        ],
      },
      {
        html: `<p>Liebe Nachbarinnen und Nachbarn der Ahornstraße,</p><p>viele von uns kennen sich nur vom Sehen. Das möchten wir ändern! Am Sonntag, den 14. Juli, laden wir Sie ab 10 Uhr zu einem gemeinsamen Frühstück im Hof von Haus Nummer 12 ein. Tische und Bänke stellen wir auf, Kaffee und Tee kochen wir.</p><p>Bitte bringen Sie etwas zu essen für das Buffet und Ihr eigenes Geschirr mit. Wer beim Aufbauen helfen kann, kommt bitte schon um 9 Uhr.</p><p>Wir freuen uns auf Sie!<br>Lena Fischer und Karim Benali</p>`,
        items: [
          { n: 15, q: 'Die Gäste müssen ihren Kaffee selbst mitbringen.', opts: RF, a: 1 },
          { n: 16, q: 'Wer bei der Vorbereitung helfen möchte, …', opts: ['soll Tische und Bänke mitbringen.', 'ruft vorher bei Frau Fischer an.', 'soll eine Stunde früher kommen.'], a: 2 },
        ],
      },
    ]),
    part(4, [{
      html: `<h4>Beratung: Arbeiten im gelernten Beruf</h4>
<p>Sie haben in Ihrem Heimatland einen Beruf gelernt oder studiert und möchten in Deutschland in diesem Beruf arbeiten? Für manche Berufe, zum Beispiel Krankenpfleger, Ärztin oder Lehrer, brauchen Sie dafür eine offizielle Anerkennung. In vielen anderen Berufen dürfen Sie auch ohne Anerkennung arbeiten. Mit ihr finden Sie aber oft leichter eine Stelle und verdienen mehr.</p>
<p>Unsere Beratungsstelle im Bildungszentrum am Marktplatz hilft Ihnen dabei. Wir erklären Ihnen, welches Amt für Ihren Beruf zuständig ist und welche Papiere Sie brauchen. Die Beratung ist kostenlos und in sechs Sprachen möglich. Für die Anerkennung selbst müssen Sie aber beim Amt eine Gebühr bezahlen.</p>
<p>Bitte vereinbaren Sie einen Termin, telefonisch oder per E-Mail, und bringen Sie Ihre Zeugnisse mit. Übersetzen lassen müssen Sie sie vor dem ersten Gespräch noch nicht.</p>`,
      items: [
        { n: 17, q: 'Wer als Krankenpfleger arbeiten möchte, braucht eine Anerkennung.', opts: RF, a: 0 },
        { n: 18, q: 'Die Anerkennung beim Amt ist kostenlos.', opts: RF, a: 1 },
        { n: 19, q: 'Zum ersten Gespräch kann man Zeugnisse mitbringen, die noch nicht übersetzt sind.', opts: RF, a: 0 },
      ],
    }]),
    part(5, [{
      html: `<p>Sehr geehrte Damen und Herren,</p>
<p>am 2. November habe ich in Ihrem Online-Shop eine Winterjacke bestellt und sofort bezahlt. In Ihrer E-Mail stand, dass die Lieferung ${gap(20)} von fünf Tagen kommt. Heute ist schon der 20. November, ${gap(21)} ich habe das Paket immer noch nicht bekommen.</p>
<p>In der Sendungsverfolgung steht, dass das Paket bei einem Nachbarn ${gap(22)}. Ich habe alle Nachbarn im Haus gefragt, doch ${gap(23)} hat es angenommen. Auch in meinem Briefkasten war keine Karte.</p>
<p>Ich brauche die Jacke dringend, ${gap(24)} es wird jetzt kalt. Bitte prüfen Sie, ${gap(25)} das Paket ist. Wenn Sie es nicht finden, schicken Sie mir bitte eine neue Jacke oder überweisen Sie mir das Geld zurück. Meine Bestellnummer ist 48-2291.</p>
<p>Mit freundlichen Grüßen<br>Oksana Melnyk</p>`,
      items: [
        { n: 20, q: '', opts: ['während', 'innerhalb', 'zwischen'], a: 1 },
        { n: 21, q: '', opts: ['aber', 'sondern', 'oder'], a: 0 },
        { n: 22, q: '', opts: ['abgeben wurde', 'abgegeben hat', 'abgegeben wurde'], a: 2 },
        { n: 23, q: '', opts: ['keinen', 'keiner', 'keinem'], a: 1 },
        { n: 24, q: '', opts: ['weil', 'dass', 'denn'], a: 2 },
        { n: 25, q: '', opts: ['wo', 'wohin', 'woher'], a: 0 },
      ],
    }], { gaps: true }),
  ],
};
