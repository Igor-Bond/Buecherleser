import { part, ad, gap, RF, AX } from '../tests-lesen-b1.js';

export default {
  id: 'v10', title: 'Variante 10', about: 'Flughafen · Anzeigen · Elternsprechtag, Nachbarin, Krankenkasse · Volkshochschule · Heizung',
  parts: [
    part(1, [{
      html: `<div class="board"><h3>Flughafen Steinau – Wegweiser</h3>
<p><b>Ebene 3</b> Besucherterrasse · Restaurants · Kinderspielbereich</p>
<p><b>Ebene 2 – Abflug</b> Check-in-Schalter 1–60 · Gepäckaufgabe · Sicherheitskontrolle · Ticketschalter der Fluggesellschaften</p>
<p><b>Ebene 1 – Ankunft</b> Gepäckausgabe · Gepäckermittlung (vermisste Koffer) · Zoll · Information · Autovermietung · Geldwechsel</p>
<p><b>Ebene 0</b> Bahnhof (S-Bahn und Regionalzüge) · Bushaltestellen · Taxi · Apotheke · Supermarkt</p>
<p><b>Ebene −1</b> Parkhaus P1 · Gepäckaufbewahrung (Schließfächer)</p></div>`,
      items: [
        { n: 1, q: 'Sie fliegen in zwei Stunden nach Istanbul und möchten Ihren Koffer aufgeben.', opts: ['Ebene 1', 'Ebene 2', 'andere Ebene'], a: 1 },
        { n: 2, q: 'Sie warten auf einen Freund. Bis er landet, möchten Sie draußen die Flugzeuge beobachten.', opts: ['Ebene 2', 'Ebene 1', 'andere Ebene'], a: 2 },
        { n: 3, q: 'Sie sind gerade gelandet, aber Ihr Koffer ist nicht angekommen.', opts: ['Ebene 1', 'Ebene 0', 'andere Ebene'], a: 0 },
        { n: 4, q: 'Sie möchten mit dem Zug vom Flughafen in die Innenstadt fahren.', opts: ['Ebene 2', 'Ebene 0', 'andere Ebene'], a: 1 },
        { n: 5, q: 'Ihr Flug geht erst in sechs Stunden. Sie möchten Ihre schwere Tasche so lange einschließen.', opts: ['Ebene 0', 'Ebene 2', 'andere Ebene'], a: 2 },
      ],
    }]),
    part(2, [{
      html: [
        ad('a', 'Chor „Stimmband“ sucht neue Mitglieder', 'Wir proben jeden Donnerstag um 19.30 Uhr im Gemeindehaus. Sie müssen keine Noten lesen können – Hauptsache, Sie haben Spaß.'),
        ad('b', 'Yoga am Morgen', 'Dienstags und freitags von 9 bis 10 Uhr im Studio Balance. Auch für Anfänger geeignet. Die erste Stunde ist kostenlos.'),
        ad('c', 'Kochkurs „Küche der Welt“', 'Einmal im Monat kochen wir zusammen Gerichte aus verschiedenen Ländern. Samstags um 17 Uhr, 20 Euro mit allen Lebensmitteln.'),
        ad('d', 'Gitarrenunterricht', 'Musiklehrer gibt Unterricht für Kinder und Erwachsene, auch bei Ihnen zu Hause. 25 Euro für 45 Minuten.'),
        ad('e', 'Lauftreff im Stadtpark', 'Wir joggen jeden Sonntag um 17 Uhr zusammen 5 oder 10 Kilometer. Kostenlos und ohne Anmeldung.'),
        ad('f', 'Tanzschule Rondo', 'Salsa und Walzer für Paare. Neue Kurse ab Oktober, immer mittwochs um 20 Uhr.'),
        ad('g', 'Wanderverein Bergfreunde', 'Jeden zweiten Samstag machen wir eine Tageswanderung in der Umgebung. Gäste sind herzlich willkommen.'),
        ad('h', 'Malkurs für Kinder', 'Für Kinder von 6 bis 12 Jahren, montags 15–16.30 Uhr im Jugendzentrum. Farben und Papier bekommen die Kinder von uns.'),
      ].join(''),
      items: [
        { n: 6, q: 'Sie singen gern und möchten das zusammen mit anderen Menschen tun.', opts: AX, a: 0 },
        { n: 7, q: 'Ihr Sohn ist zehn Jahre alt und möchte ein Instrument lernen.', opts: AX, a: 3 },
        { n: 8, q: 'Sie möchten sich am Wochenende in der Natur bewegen, aber Joggen mögen Sie nicht.', opts: AX, a: 6 },
        { n: 9, q: 'Sie arbeiten immer nachmittags und abends. Am Vormittag möchten Sie etwas für Ihre Gesundheit tun.', opts: AX, a: 1 },
        { n: 10, q: 'Sie möchten in einer Mannschaft Fußball spielen.', opts: AX, a: 8 },
      ],
    }], { compact: true }),
    part(3, [
      {
        html: `<p>Liebe Eltern,</p><p>am Dienstag, den 12. November, findet an unserer Schule der Elternsprechtag statt. Von 15 bis 19 Uhr können Sie mit den Lehrerinnen und Lehrern über Ihr Kind sprechen. Jedes Gespräch dauert zehn Minuten.</p><p>Ihr Kind bringt heute eine Liste mit. Bitte schreiben Sie Ihre Wunschzeit auf und geben Sie die Liste bis Freitag zurück. Wenn Sie noch nicht gut Deutsch sprechen, können Sie gern eine Person zum Übersetzen mitbringen. An diesem Tag endet der Unterricht für alle Klassen schon um 12.30 Uhr.</p><p>Mit freundlichen Grüßen<br>Jens Albrecht, Schulleiter</p>`,
        items: [
          { n: 11, q: 'Am Elternsprechtag haben die Kinder länger Unterricht als sonst.', opts: RF, a: 1 },
          { n: 12, q: 'Eltern, die wenig Deutsch können, …', opts: ['bekommen einen Termin an einem anderen Tag.', 'dürfen jemanden mitbringen, der ihnen hilft.', 'sollen dem Lehrer einen Brief schreiben.'], a: 1 },
        ],
      },
      {
        html: `<p>Liebe Nachbarn,</p><p>am Samstag, den 8. Juni, feiere ich meinen 30. Geburtstag mit Freunden in meiner Wohnung im zweiten Stock. Es kann deshalb am Abend etwas lauter werden. Ab 22 Uhr machen wir die Fenster zu und die Musik leiser.</p><p>Ich hoffe, das ist für Sie in Ordnung. Wenn es Sie trotzdem stört, klingeln Sie bitte einfach bei mir. Natürlich können Sie auch gern auf ein Glas vorbeikommen – ich würde mich freuen!</p><p>Viele Grüße<br>Ihre Nachbarin Jelena Marković</p>`,
        items: [
          { n: 13, q: 'Die Nachbarn dürfen auch zu der Feier kommen.', opts: RF, a: 0 },
          { n: 14, q: 'Wenn es den Nachbarn zu laut ist, sollen sie …', opts: ['die Hausverwaltung anrufen.', 'ihre Fenster zumachen.', 'zu Jelena gehen und es ihr sagen.'], a: 2 },
        ],
      },
      {
        html: `<p>Sehr geehrter Herr Okafor,</p><p>wir möchten Ihnen eine neue Gesundheitskarte schicken. Dafür brauchen wir aber noch ein aktuelles Foto von Ihnen. Bitte laden Sie das Foto auf unserer Internetseite hoch oder schicken Sie es uns mit der Post. Ein Foto aus dem Automaten ist ausreichend.</p><p>Ihre alte Karte ist noch bis zum 31. Dezember gültig. Danach können Sie nur noch mit der neuen Karte zum Arzt gehen.</p><p>Mit freundlichen Grüßen<br>Ihre Krankenkasse GesundPlus</p>`,
        items: [
          { n: 15, q: 'Herr Okafor hat seine neue Gesundheitskarte schon bekommen.', opts: RF, a: 1 },
          { n: 16, q: 'Das Foto …', opts: ['kann Herr Okafor online oder per Post schicken.', 'muss Herr Okafor persönlich zur Krankenkasse bringen.', 'muss von einem Fotografen sein.'], a: 0 },
        ],
      },
    ]),
    part(4, [{
      html: `<h4>Volkshochschule Talheim – so melden Sie sich an</h4>
<p>Unser neues Programm mit über 300 Kursen ist da. Sie können sich ab dem 1. September anmelden: online, per Post oder persönlich in unserem Büro. Eine Anmeldung am Telefon ist leider nicht möglich.</p>
<p>Die Kursgebühr bezahlen Sie nicht bar. Wir buchen das Geld nach dem ersten Kurstag von Ihrem Konto ab. Schüler, Studierende und Arbeitslose bezahlen nur die Hälfte. Bitte bringen Sie dafür einen Nachweis mit.</p>
<p>Ein Kurs findet nur statt, wenn sich mindestens acht Personen angemeldet haben. Wenn ein Kurs ausfällt, informieren wir Sie rechtzeitig.</p>
<p>Sie möchten doch nicht teilnehmen? Bis eine Woche vor Kursbeginn können Sie sich kostenlos abmelden. Danach müssen Sie die ganze Gebühr bezahlen, auch wenn Sie nicht kommen.</p>
<p>Am Ende bekommen Sie eine Teilnahmebescheinigung, wenn Sie mindestens 80 Prozent der Termine besucht haben.</p>`,
      items: [
        { n: 17, q: 'Für die Anmeldung muss man nicht ins Büro der Volkshochschule gehen.', opts: RF, a: 0 },
        { n: 18, q: 'Studierende bezahlen für einen Kurs weniger als andere Teilnehmer.', opts: RF, a: 0 },
        { n: 19, q: 'Wer sich drei Tage vor Kursbeginn abmeldet, muss nichts bezahlen.', opts: RF, a: 1 },
      ],
    }]),
    part(5, [{
      html: `<p>Sehr geehrter Herr Lindemann,</p>
<p>ich wohne im Haus Am Mühlbach 7 im dritten Stock. Seit Montag funktioniert die Heizung in meiner Wohnung nicht ${gap(20)}. Alle Heizkörper bleiben kalt, ${gap(21)} ich sie ganz aufdrehe.</p>
<p>Draußen sind es im Moment nur zwei Grad, und in der Wohnung ist es sehr kalt. Das ist besonders schlimm für meine beiden Kinder, ${gap(22)} noch sehr klein sind. Ich habe schon zweimal ${gap(23)} Hausmeister angerufen, aber er hat sich nicht gemeldet.</p>
<p>Ich bitte Sie deshalb, so schnell wie möglich einen Handwerker zu schicken. Ich arbeite bis 14 Uhr, aber ${gap(24)} 15 Uhr bin ich immer zu Hause.</p>
<p>Wenn die Heizung bis Freitag nicht repariert ${gap(25)}, werde ich weniger Miete bezahlen.</p>
<p>Mit freundlichen Grüßen<br>Nadia Rahmani</p>`,
      items: [
        { n: 20, q: '', opts: ['noch', 'mehr', 'schon'], a: 1 },
        { n: 21, q: '', opts: ['damit', 'deshalb', 'auch wenn'], a: 2 },
        { n: 22, q: '', opts: ['die', 'der', 'denen'], a: 0 },
        { n: 23, q: '', opts: ['dem', 'den', 'der'], a: 1 },
        { n: 24, q: '', opts: ['seit', 'von', 'ab'], a: 2 },
        { n: 25, q: '', opts: ['ist', 'hat', 'werden'], a: 0 },
      ],
    }], { gaps: true }),
  ],
};
