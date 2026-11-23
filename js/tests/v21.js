import { part, ad, gap, RF, AX } from '../tests-lesen-b1.js';

export default {
  id: 'v21', title: 'Variante 1', about: 'Bürgerhaus · Anzeigen zur Weihnachtszeit · Licht im Treppenhaus, Kinobesuch, Hallenbad · Weihnachtsmarkt · Müll im Haus',
  parts: [
    part(1, [{
      html: `<div class="board"><h3>Bürgerhaus Sonnenberg – Wegweiser</h3>
<p><b>3. Stock</b> Kino „Lichtblick“ · Kinokasse · Café mit Dachterrasse</p>
<p><b>2. Stock</b> Stadtteilbibliothek · Lesesaal · Computerraum mit Internet · Kopierer</p>
<p><b>1. Stock</b> Sprachkurse (Räume 101–108) · Anmeldung Volkshochschule · Beratung für Mieterinnen und Mieter</p>
<p><b>Erdgeschoss</b> Information · Fundbüro · Bürgerbüro (Ausweise, Anmeldung der Wohnung) · Garderobe</p>
<p><b>Untergeschoss</b> Reparatur-Treff (Werkstatt) · Fahrradkeller · Toiletten</p></div>`,
      items: [
        { n: 1, q: 'Sie möchten für Samstagabend zwei Karten für einen Film kaufen.', opts: ['2. Stock', '3. Stock', 'anderes Stockwerk'], a: 1 },
        { n: 2, q: 'Sie haben Ärger mit Ihrem Vermieter und möchten wissen, welche Rechte Sie haben.', opts: ['Erdgeschoss', '1. Stock', 'anderes Stockwerk'], a: 1 },
        { n: 3, q: 'Sie haben gestern im Bürgerhaus Ihren Schal verloren. Vielleicht hat ihn jemand abgegeben.', opts: ['Erdgeschoss', '2. Stock', 'anderes Stockwerk'], a: 0 },
        { n: 4, q: 'Ihre Stehlampe ist kaputt. Sie möchten sie mit Hilfe von anderen Leuten selbst reparieren.', opts: ['1. Stock', '3. Stock', 'anderes Stockwerk'], a: 2 },
        { n: 5, q: 'Sie suchen eine neue Wohnung und möchten Anzeigen im Internet lesen. Zu Hause haben Sie keinen Computer.', opts: ['2. Stock', 'Erdgeschoss', 'anderes Stockwerk'], a: 0 },
      ],
    }]),
    part(2, [{
      html: [
        ad('a', 'Adventskonzert in der Pauluskirche', 'Am Sonntag, den 15. Dezember, um 17 Uhr singt der Stadtchor Weihnachtslieder aus vielen Ländern. Der Eintritt ist frei.'),
        ad('b', 'Weihnachtsbäume vom Hof Brettschneider', 'Frische Bäume direkt vom Bauern, ab 18 Euro. Für 5 Euro bringen wir Ihren Baum bis vor Ihre Wohnungstür.'),
        ad('c', 'Silvester im Restaurant Seeblick', 'Am 31. Dezember ab 19 Uhr: Menü mit vier Gängen, Musik und Tanz bis 2 Uhr. 69 Euro pro Person. Bitte reservieren Sie bis zum 20. Dezember.'),
        ad('d', 'Plätzchen backen im Familienzentrum', 'Für Kinder ab 5 Jahren, am Samstag, den 14. Dezember, von 14 bis 17 Uhr. 4 Euro pro Kind. Die Eltern können im Café warten.'),
        ad('e', 'Hausmeisterservice Dobler', 'Wir räumen im Winter den Schnee vor Ihrem Haus weg und reinigen Treppenhaus und Hof. Rufen Sie uns an – wir machen Ihnen ein Angebot.'),
        ad('f', 'Bäckerei Korn – Feiertage', 'Am 24. und 31. Dezember haben wir von 6 bis 12 Uhr geöffnet. Am 25. und 26. Dezember und am 1. Januar ist geschlossen. Bitte bestellen Sie Ihr Brot rechtzeitig.'),
        ad('g', 'Kaufhaus Lorenz sucht Aushilfen', 'Im Dezember brauchen wir Hilfe an der Kasse und beim Einpacken von Geschenken. 13 Euro pro Stunde, auch für Studierende.'),
        ad('h', 'Eisbahn am Stadtpark', 'Schlittschuhlaufen für Groß und Klein, täglich von 10 bis 20 Uhr. Schlittschuhe können Sie für 4 Euro ausleihen.'),
      ].join(''),
      items: [
        { n: 6, q: 'Sie möchten vor Weihnachten ein paar Wochen arbeiten und etwas Geld verdienen.', opts: AX, a: 6 },
        { n: 7, q: 'Sie haben kein Auto und wissen nicht, wie Sie einen Weihnachtsbaum nach Hause transportieren sollen.', opts: AX, a: 1 },
        { n: 8, q: 'Sie möchten den letzten Abend des Jahres mit Ihrem Mann feiern und dabei nicht selbst kochen.', opts: AX, a: 2 },
        { n: 9, q: 'Ihr Sohn möchte in den Weihnachtsferien Ski fahren lernen.', opts: AX, a: 8 },
        { n: 10, q: 'Ihre Tochter ist sieben Jahre alt und backt gern. Sie suchen für sie ein Angebot in der Adventszeit.', opts: AX, a: 3 },
      ],
    }], { compact: true }),
    part(3, [
      {
        html: `<p>Sehr geehrte Mieterinnen und Mieter,</p><p>seit dem Wochenende funktioniert das Licht im Treppenhaus zwischen dem zweiten und dem vierten Stock nicht. Der Elektriker war heute da und hat festgestellt, dass ein Kabel beschädigt ist. Er kann es aber erst am Donnerstag, den 12. Dezember, reparieren, weil ihm noch ein Ersatzteil fehlt.</p><p>Bis dahin hängt unser Hausmeister in diesen Stockwerken Lampen mit Batterie auf. Bitte gehen Sie auf der Treppe vorsichtig und stellen Sie keine Schuhe oder Kinderwagen in den Flur.</p><p>Ihre Hausverwaltung Kessler</p>`,
        items: [
          { n: 11, q: 'Im ganzen Treppenhaus gibt es zurzeit kein Licht.', opts: RF, a: 1 },
          { n: 12, q: 'Der Elektriker …', opts: ['hat das Kabel schon repariert.', 'wartet noch auf ein Ersatzteil.', 'bringt am Donnerstag Lampen mit Batterie.'], a: 1 },
        ],
      },
      {
        html: `<p>Liebe Kursteilnehmerinnen und Kursteilnehmer,</p><p>wie besprochen gehen wir am Freitag, den 6. Dezember, zusammen ins Kino „Lichtblick“. Wir sehen die Komödie „Drei Koffer nach Wien“ – auf Deutsch und mit deutschen Untertiteln, damit Sie mehr verstehen. Der Film beginnt um 18 Uhr. Wir treffen uns schon um 17.30 Uhr vor der Kasse.</p><p>Als Gruppe bezahlen wir pro Karte nur 6 Euro, normalerweise kostet sie 9 Euro. Bitte geben Sie mir das Geld bis Mittwoch im Unterricht, dann kaufe ich die Karten für alle. Wer Lust hat, kann nach dem Film noch mit in die Pizzeria nebenan kommen.</p><p>Viele Grüße<br>Ihre Kursleiterin Beate Hollweg</p>`,
        items: [
          { n: 13, q: 'Die Kursteilnehmer bezahlen für den Film weniger als andere Besucher.', opts: RF, a: 0 },
          { n: 14, q: 'Die Teilnehmerinnen und Teilnehmer sollen …', opts: ['ihre Karte selbst an der Kasse kaufen.', 'um 18 Uhr vor dem Kino sein.', 'der Kursleiterin vor dem Kinotag das Geld geben.'], a: 2 },
        ],
      },
      {
        html: `<h4>Hallenbad Sonnenberg – Öffnungszeiten über die Feiertage</h4><p>Am 24., 25. und 31. Dezember bleibt unser Hallenbad geschlossen. Am 26. Dezember und am 1. Januar öffnen wir erst um 12 Uhr und schließen um 18 Uhr. An allen anderen Tagen gelten die normalen Zeiten.</p><p>In den Weihnachtsferien fällt der Schwimmkurs für Kinder aus. Der nächste Kurs beginnt am 7. Januar. Zehnerkarten, die Ende Dezember ablaufen, verlängern wir automatisch bis Ende Januar. Sie müssen dafür nicht an die Kasse kommen.</p><p>Wir wünschen Ihnen schöne Feiertage!</p>`,
        items: [
          { n: 15, q: 'Am ersten Tag des neuen Jahres kann man am Nachmittag schwimmen gehen.', opts: RF, a: 0 },
          { n: 16, q: 'Zehnerkarten, die Ende Dezember ablaufen, …', opts: ['kann man einen Monat länger benutzen.', 'muss man an der Kasse verlängern lassen.', 'sind im Januar nicht mehr gültig.'], a: 0 },
        ],
      },
    ]),
    part(4, [{
      html: `<h4>Weihnachtsmarkt in Lindenau – Informationen für Besucher</h4>
<p>Unser Weihnachtsmarkt auf dem Marktplatz ist in diesem Jahr vom 28. November bis zum 23. Dezember geöffnet: von Sonntag bis Donnerstag von 11 bis 20 Uhr, freitags und samstags eine Stunde länger. An über 60 Ständen finden Sie Geschenke, Süßigkeiten und warme Getränke.</p>
<p>Getränke bekommen Sie nur in Tassen aus Porzellan. Für jede Tasse bezahlen Sie 3 Euro Pfand. Sie können die Tasse an jedem Getränkestand zurückgeben und bekommen dort Ihr Geld wieder.</p>
<p>In der Innenstadt gibt es nur wenige Parkplätze. Kommen Sie deshalb am besten mit dem Bus oder der Straßenbahn. An den vier Samstagen im Advent brauchen Sie dafür in der ganzen Stadt keine Fahrkarte.</p>
<p>Für Kinder gibt es ein Karussell und eine kleine Eisbahn. Jeden Mittwoch um 16 Uhr kommt der Nikolaus und verteilt Süßigkeiten. Hunde dürfen Sie mitbringen, aber nur an der Leine.</p>
<p>Nach dem 23. Dezember werden die meisten Stände abgebaut. Nur die Stände mit Essen und Getränken bleiben noch bis Silvester. An diesem Tag schließen sie schon um 14 Uhr.</p>`,
      items: [
        { n: 17, q: 'Am Samstag kann man abends länger auf dem Weihnachtsmarkt bleiben als am Montag.', opts: RF, a: 0 },
        { n: 18, q: 'Die Tasse muss man an dem Stand zurückgeben, an dem man das Getränk gekauft hat.', opts: RF, a: 1 },
        { n: 19, q: 'Im Advent fährt man jeden Tag kostenlos mit Bus und Straßenbahn.', opts: RF, a: 1 },
      ],
    }]),
    part(5, [{
      html: `<p>Sehr geehrte Frau Kessler,</p>
<p>ich wohne seit drei Jahren im Haus Birkenallee 14. Leider gibt es seit einigen Wochen ein großes Problem ${gap(20)} dem Müll in unserem Hof. Die Tonnen sind oft schon am Mittwoch voll, ${gap(21)} sie erst am Freitag geleert werden. Viele Nachbarn stellen ihre Müllsäcke dann einfach neben die Tonnen. Es riecht sehr schlecht, und letzte Woche haben wir dort sogar eine Ratte ${gap(22)}.</p>
<p>Auch im Haus ist es nicht sauber. Im Treppenhaus liegen oft Papier und Werbung auf dem Boden, und im Keller steht seit einem Monat ein altes Sofa, ${gap(23)} niemandem gehört.</p>
<p>Ich bitte Sie deshalb, eine zweite Tonne für den Restmüll zu bestellen und das Treppenhaus öfter reinigen zu ${gap(24)}. Es wäre auch gut, wenn Sie alle Mieter in einem Brief über die Mülltrennung informieren ${gap(25)}.</p>
<p>Vielen Dank im Voraus für Ihre Hilfe.</p>
<p>Mit freundlichen Grüßen<br>Samira Haddad</p>`,
      items: [
        { n: 20, q: '', opts: ['für', 'mit', 'über'], a: 1 },
        { n: 21, q: '', opts: ['obwohl', 'deshalb', 'trotzdem'], a: 0 },
        { n: 22, q: '', opts: ['sehen', 'sahen', 'gesehen'], a: 2 },
        { n: 23, q: '', opts: ['der', 'das', 'den'], a: 1 },
        { n: 24, q: '', opts: ['lassen', 'lässt', 'gelassen'], a: 0 },
        { n: 25, q: '', opts: ['werden', 'wurden', 'würden'], a: 2 },
      ],
    }], { gaps: true }),
  ],
};
