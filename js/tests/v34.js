import { part, ad, gap, RF, AX } from '../tests-lesen-b1.js';

export default {
  id: 'v34', title: 'Variante 4', about: 'Online-Supermarkt · Kleinanzeigen aus zweiter Hand · Baustelle, Schornsteinfeger, Repair-Café · Widerrufsrecht · Widerruf eines Mobilfunkvertrags',
  parts: [
    part(1, [{
      html: `<div class="board"><h3>Frischekorb – Ihr Supermarkt mit Lieferservice</h3>
<p><b>Obst &amp; Gemüse</b> Äpfel und Birnen · Salate · Kartoffeln · Kräuter · Pilze</p>
<p><b>Brot &amp; Backwaren</b> Brötchen · Vollkornbrot · Kuchen · Brötchen zum Aufbacken</p>
<p><b>Kühlregal</b> Milch · Joghurt · Käse · Eier · Wurst · frischer Fisch</p>
<p><b>Tiefkühlkost</b> Pizza · Gemüse · Fischstäbchen · Eis</p>
<p><b>Vorräte</b> Nudeln · Reis · Konserven · Mehl und Zucker · Öl · Gewürze</p>
<p><b>Getränke</b> Wasser · Säfte · Kaffee und Tee · Bier und Wein</p>
<p><b>Drogerie &amp; Haushalt</b> Waschmittel · Putzmittel · Zahnpflege · Toilettenpapier · Müllbeutel</p>
<p><b>Baby &amp; Kind</b> Windeln · Babynahrung · Feuchttücher · Fläschchen</p>
<p><b>Tierbedarf</b> Hundefutter · Katzenfutter · Katzenstreu</p>
<p><b>Mein Konto &amp; Lieferung</b> Liefertermin ändern · Lieferkosten · Pfandrückgabe · Reklamation · Gutscheine</p></div>`,
      items: [
        { n: 1, q: 'Sie wollen am Sonntag selbst einen Kuchen backen und haben kein Mehl mehr im Haus.', opts: ['Brot & Backwaren', 'Vorräte', 'andere Rubrik'], a: 1 },
        { n: 2, q: 'Ihre Bestellung soll morgen kommen, aber Sie sind erst übermorgen wieder zu Hause.', opts: ['Mein Konto & Lieferung', 'Drogerie & Haushalt', 'andere Rubrik'], a: 0 },
        { n: 3, q: 'Ihr Sohn ist acht Monate alt. Sie brauchen für ihn fertigen Brei im Glas.', opts: ['Vorräte', 'Kühlregal', 'andere Rubrik'], a: 2 },
        { n: 4, q: 'Sie möchten heute Abend Lachs braten, der nicht gefroren ist.', opts: ['Tiefkühlkost', 'Kühlregal', 'andere Rubrik'], a: 1 },
        { n: 5, q: 'In der gelieferten Packung waren zwei Eier zerbrochen. Sie wollen das melden und Ihr Geld zurückbekommen.', opts: ['Kühlregal', 'Drogerie & Haushalt', 'andere Rubrik'], a: 2 },
      ],
    }], { instr: 'Sie lesen eine Seite im Internet. Lesen Sie die Aufgaben 1–5 und die Übersicht. Wo finden Sie etwas Passendes? Wählen Sie a, b oder c.', ru: 'Прочитайте обзор сайта и выберите подходящую рубрику.' }),
    part(2, [{
      html: [
        ad('a', 'Kombi-Kinderwagen', '2 J. alt, mit Babywanne u. Regenschutz, sehr gepflegt. NP 480 €, jetzt 120 € VB. Nur Abholung in Dornbach. Tel. 0151 555 01 31'),
        ad('b', 'Buggy, zusammenklappbar', 'Für Kinder ab 6 Mon., nur Sitzposition, leichte Gebrauchsspuren. 35 €, Abholung in Dornbach o. Versand zzgl. 8 €. Tel. 0151 555 01 42'),
        ad('c', 'Waschmaschine, 7 kg', '5 J. alt, läuft einwandfrei. 90 € Festpreis. Lieferung im Stadtgebiet u. Anschluss gg. 20 € Aufpreis mögl. Tel. 0151 555 01 53'),
        ad('d', 'Waschmaschine wg. Umzug', '6 kg, 3 J. alt, top Zustand, 60 € VB. Nur an Selbstabholer, 4. OG ohne Aufzug, 2 Pers. zum Tragen nötig. Tel. 0151 555 01 64'),
        ad('e', 'Zu verschenken: Sofa', '3-Sitzer, grau, dazu Couchtisch. Nichtraucherhaushalt. Abholung nur bis Sa., 30.11., danach Sperrmüll. Tel. 0151 555 01 75'),
        ad('f', 'Trekkingrad 28 Zoll', '21 Gänge, Rahmenhöhe 54 cm, Licht defekt, sonst fahrbereit. 80 € Festpreis. Besichtigung nach Absprache. Tel. 0151 555 01 86'),
        ad('g', 'Citybike 28 Zoll', '7 Gänge, Bremsen u. Beleuchtung neu, frisch durchgesehen, mit Korb. 110 € VB. Abends ab 18 Uhr: Tel. 0151 555 01 97'),
        ad('h', 'Suche Kinderfahrrad', 'Gut erhaltenes Rad, 20 Zoll, für 7-jähr. Mädchen, bis 50 €. Hole es gern bei Ihnen ab. Tel. 0151 555 01 08'),
      ].join(''),
      items: [
        { n: 6, q: 'Sie brauchen eine gebrauchte Waschmaschine. Sie haben kein Auto, und niemand kann Ihnen beim Tragen helfen.', opts: AX, a: 2 },
        { n: 7, q: 'Ihr Sohn ist für sein 20-Zoll-Fahrrad zu groß geworden. Sie möchten es verkaufen.', opts: AX, a: 7 },
        { n: 8, q: 'Sie ziehen in Ihre erste eigene Wohnung und brauchen ein Sofa, können aber nichts dafür bezahlen. Abholen können Sie es frühestens am 5. Dezember.', opts: AX, a: 8 },
        { n: 9, q: 'Sie wohnen in Dornbach und bekommen im März ein Kind. Sie suchen einen Wagen, in dem schon ein Neugeborenes liegen kann.', opts: AX, a: 0 },
        { n: 10, q: 'Sie fahren früh morgens und spät abends mit dem Rad zur Arbeit und möchten nach dem Kauf nichts reparieren müssen. Sie können höchstens 120 Euro bezahlen.', opts: AX, a: 6 },
      ],
    }], { compact: true }),
    part(3, [
      {
        html: `<h4>Kanalarbeiten: Bergstraße ab Montag für sechs Wochen gesperrt</h4><p>Altenfurt. Wegen der Erneuerung eines Abwasserkanals wird die Bergstraße zwischen Rathausplatz und Mühlweg ab Montag, 9. März, voll gesperrt. Die Arbeiten sollen nach Angaben des Tiefbauamts rund sechs Wochen dauern. Der Autoverkehr wird über die Ringstraße umgeleitet. Betroffen sind auch die Buslinien 12 und 14: Die Haltestellen „Bergstraße“ und „Mühlweg“ werden in dieser Zeit nicht angefahren, als Ersatz wird eine Haltestelle am Rathausplatz eingerichtet. Fahrgäste müssen mit Verspätungen von bis zu zehn Minuten rechnen. „Anwohner können ihre Grundstücke jederzeit zu Fuß erreichen, mit dem Auto jedoch nur abends ab 18 Uhr und am Wochenende“, sagte Amtsleiter Volker Renz. Die Kosten der Maßnahme liegen bei 420.000 Euro.</p>`,
        items: [
          { n: 11, q: 'Solange gebaut wird, steigen die Fahrgäste der Linien 12 und 14 an einem anderen Ort ein und aus als sonst.', opts: RF, a: 0 },
          { n: 12, q: 'Wer in der Bergstraße wohnt, …', opts: ['darf sein Grundstück sechs Wochen lang nicht betreten.', 'muss einen Teil der Baukosten bezahlen.', 'kann von Montag bis Freitag tagsüber nicht mit dem Auto bis zu seinem Haus fahren.'], a: 2 },
        ],
      },
      {
        html: `<p>Sehr geehrte Mieterinnen und Mieter,</p><p>am Mittwoch, den 14. Oktober, werden in unserem Haus die Gasthermen durch den Bezirksschornsteinfeger überprüft. Die Messung ist gesetzlich vorgeschrieben und dauert pro Wohnung etwa 15 Minuten. Herr Brandl beginnt um 8 Uhr im Erdgeschoss und arbeitet sich bis zum Mittag nach oben vor.</p><p>Bitte sorgen Sie dafür, dass Ihre Wohnung zugänglich ist. Falls Sie nicht zu Hause sein können, geben Sie Ihren Schlüssel bitte einem Nachbarn oder bis Dienstag beim Hausmeister ab. Die Therme muss frei erreichbar sein; davor abgestellte Gegenstände sind vorher zu entfernen. Kann eine Wohnung nicht betreten werden, wird ein zweiter Termin nötig, dessen Kosten von 45 Euro der Mieter selbst tragen muss.</p><p>Mit freundlichen Grüßen<br>Hausverwaltung Kessler</p>`,
        items: [
          { n: 13, q: 'Am 14. Oktober müssen alle Mieter am Vormittag persönlich in ihrer Wohnung sein.', opts: RF, a: 1 },
          { n: 14, q: 'Wenn der Schornsteinfeger nicht in eine Wohnung hineinkommt, …', opts: ['bezahlt die Hausverwaltung einen neuen Termin.', 'kostet das den Mieter Geld, weil der Schornsteinfeger noch einmal kommen muss.', 'fällt die Überprüfung für diese Wohnung in diesem Jahr aus.'], a: 1 },
        ],
      },
      {
        html: `<h4>Repair-Café Sonnenhof – reparieren statt wegwerfen</h4><p>Seit 2017 treffen sich bei uns an jedem ersten Samstag im Monat Menschen, die defekte Dinge nicht einfach wegwerfen wollen. Im Nachbarschaftshaus Sonnenhof werden Toaster, Lampen, Fahrräder und Kleidung gemeinsam mit unseren ehrenamtlichen Fachleuten repariert. Das Angebot ist kostenlos; lediglich Ersatzteile müssen von den Besuchern selbst bezahlt werden. Über eine Spende freuen wir uns natürlich. Wichtig: Wir sind keine Werkstatt, in der man Geräte einfach abgibt. Wer etwas mitbringt, bleibt dabei und hilft mit. Eine Garantie für die Reparatur kann nicht übernommen werden. Im vergangenen Jahr konnten so rund 300 Gegenstände vor dem Müll gerettet werden. Zurzeit suchen wir dringend Helferinnen und Helfer, die sich mit Elektrogeräten oder Nähmaschinen auskennen. Kontakt: Tel. 0151 555 01 62.</p>`,
        items: [
          { n: 15, q: 'Besucher können ein kaputtes Gerät im Repair-Café lassen und es später repariert wieder abholen.', opts: RF, a: 1 },
          { n: 16, q: 'Im Repair-Café …', opts: ['zahlen Besucher nur für Teile, die neu eingebaut werden.', 'bekommt man auf jede Reparatur eine Garantie.', 'arbeiten Handwerker, die dafür bezahlt werden.'], a: 0 },
        ],
      },
    ]),
    part(4, [{
      html: `<h4>Vertrag an der Haustür oder im Internet abgeschlossen – so widerrufen Sie</h4>
<p>Ein Vertreter klingelt, und zehn Minuten später haben Sie einen neuen Stromvertrag unterschrieben? Oder Sie haben online etwas bestellt, das Sie nun doch nicht wollen? In beiden Fällen können Sie den Vertrag in der Regel innerhalb von 14 Tagen widerrufen. Einen Grund müssen Sie dafür nicht nennen.</p>
<p>Bei Waren beginnt die Frist erst an dem Tag, an dem Sie die Lieferung erhalten, bei Dienstleistungen mit dem Vertragsschluss. Hat der Händler Sie nicht über Ihr Widerrufsrecht informiert, verlängert sich die Frist um zwölf Monate.</p>
<p>Wichtig: Es reicht nicht, ein Paket einfach kommentarlos zurückzuschicken. Sie müssen eindeutig erklären, dass Sie widerrufen – am besten schriftlich per Brief oder E-Mail, damit Sie es später beweisen können. Entscheidend ist, dass Sie die Erklärung rechtzeitig absenden.</p>
<p>Der Händler muss Ihnen das Geld innerhalb von 14 Tagen erstatten. Das Porto für die Rücksendung tragen in der Regel Sie, es sei denn, der Händler bietet die Übernahme freiwillig an.</p>
<p>Kein Widerrufsrecht besteht unter anderem bei frischen Lebensmitteln, bei Produkten, die nach Ihren Wünschen angefertigt wurden, sowie bei Eintrittskarten für einen festen Termin. Auch wer im Geschäft einkauft, kann sich nicht auf dieses Recht berufen.</p>`,
      items: [
        { n: 17, q: 'Wer im Internet ein Sofa kauft, hat ab dem Tag der Bestellung 14 Tage Zeit für den Widerruf.', opts: RF, a: 1 },
        { n: 18, q: 'Wer die Ware ohne ein Wort an den Händler zurückschickt, hat damit noch nicht gültig widerrufen.', opts: RF, a: 0 },
        { n: 19, q: 'Konzertkarten für einen bestimmten Abend, die man online gekauft hat, kann man nicht mit einem Widerruf zurückgeben.', opts: RF, a: 0 },
      ],
    }]),
    part(5, [{
      html: `<p>Sehr geehrte Damen und Herren,</p>
<p>am 3. November ${gap(20)} ich auf Ihrer Internetseite einen Mobilfunkvertrag (Tarif „Flex 20“, Kundennummer 77 402 918) abgeschlossen. Hiermit widerrufe ich diesen Vertrag fristgerecht.</p>
<p>Die SIM-Karte habe ich nicht benutzt, ${gap(21)} sie schon vor einer Woche angekommen ist. Ich schicke sie Ihnen heute ${gap(22)} der Post zurück. Bitte bestätigen Sie ${gap(23)} den Eingang des Widerrufs schriftlich.</p>
<p>Die Anschlussgebühr von 29,99 Euro, die Sie bereits abgebucht haben, ${gap(24)} innerhalb von 14 Tagen auf mein Konto zurückgezahlt werden. Außerdem bitte ich Sie ${gap(25)}, meine persönlichen Daten zu löschen und mir keine Werbung mehr zu schicken.</p>
<p>Sollte ich bis Ende November nichts von Ihnen hören, werde ich mich an die Verbraucherzentrale wenden.</p>
<p>Mit freundlichen Grüßen<br>Jelena Marković</p>`,
      items: [
        { n: 20, q: '', opts: ['bin', 'habe', 'werde'], a: 1 },
        { n: 21, q: '', opts: ['trotzdem', 'aber', 'obwohl'], a: 2 },
        { n: 22, q: '', opts: ['mit', 'für', 'durch'], a: 0 },
        { n: 23, q: '', opts: ['mich', 'mir', 'ich'], a: 1 },
        { n: 24, q: '', opts: ['muss', 'möchte', 'will'], a: 0 },
        { n: 25, q: '', opts: ['daran', 'dafür', 'darum'], a: 2 },
      ],
    }], { gaps: true }),
  ],
};
