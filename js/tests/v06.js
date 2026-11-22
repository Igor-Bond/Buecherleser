import { part, ad, gap, RF, AX } from '../tests-lesen-b1.js';

export default {
  id: 'v06', title: 'Variante 6', about: 'Bahnhof · Reisen und Verkehr · Hallenbad, Elternsprechtag, Paketdienst · Krank am Wochenende · Termin beim Amt verschieben',
  parts: [
    part(1, [{
      html: `<div class="board"><h3>Hauptbahnhof Kranzburg – Wegweiser</h3>
<p><b>Obergeschoss</b> Wartesaal · Restaurant „Gleisblick“ · Bahnhofsmission · Polizei</p>
<p><b>Erdgeschoss</b> Reisezentrum (Fahrkarten und Auskunft) · Fahrkartenautomaten · Bäckerei · Zeitungen und Bücher · Apotheke · Zugang zu den Gleisen 1–8</p>
<p><b>Untergeschoss</b> Schließfächer · Toiletten und Duschen · Fundbüro · Supermarkt (täglich bis 22 Uhr) · Zugang zur U-Bahn</p>
<p><b>Ausgang Nord</b> Taxi · Busbahnhof · Fahrradparkhaus · Autovermietung</p></div>`,
      items: [
        { n: 1, q: 'Ihr Zug fährt erst in drei Stunden. Sie möchten Ihren schweren Koffer so lange einschließen.', opts: ['Erdgeschoss', 'Untergeschoss', 'anderer Bereich'], a: 1 },
        { n: 2, q: 'Sie möchten nach Wien fahren. Ein Mitarbeiter soll Ihnen erklären, welche Verbindung am günstigsten ist.', opts: ['Erdgeschoss', 'Obergeschoss', 'anderer Bereich'], a: 0 },
        { n: 3, q: 'Sie möchten für das Wochenende ein Auto mieten.', opts: ['Untergeschoss', 'Erdgeschoss', 'anderer Bereich'], a: 2 },
        { n: 4, q: 'Im Zug hat Ihnen jemand die Geldbörse gestohlen. Sie möchten eine Anzeige machen.', opts: ['Obergeschoss', 'Untergeschoss', 'anderer Bereich'], a: 0 },
        { n: 5, q: 'Es ist Sonntagabend. Sie brauchen noch Nudeln, Milch und Eier für morgen.', opts: ['Erdgeschoss', 'Obergeschoss', 'anderer Bereich'], a: 2 },
      ],
    }]),
    part(2, [{
      html: [
        ad('a', 'Busreise nach Prag', 'Drei Tage in der Goldenen Stadt, Hotel mit Frühstück, nur 189 Euro pro Person. Abfahrt jeden Freitag um 7 Uhr am Busbahnhof.'),
        ad('b', 'Fahrschule Kolbe', 'Führerschein für Auto und Motorrad. Theorieunterricht am Abend, auch auf Englisch und Arabisch. Anmeldung jederzeit möglich.'),
        ad('c', 'Stadtrundfahrt mit dem Schiff', 'Täglich um 11 und 15 Uhr ab Hafenbrücke. Die Fahrt dauert eine Stunde. Kinder bis 6 Jahre fahren kostenlos mit.'),
        ad('d', 'Autowerkstatt Yildiz', 'Reparaturen für alle Marken. Reifenwechsel ohne Termin: Kommen Sie einfach vorbei. Montag bis Samstag ab 7.30 Uhr.'),
        ad('e', 'Fahrradverleih am Bahnhof', 'Fahrräder für Erwachsene und Kinder ab 12 Euro pro Tag. Helme und Kindersitze bekommen Sie kostenlos dazu.'),
        ad('f', 'Wanderverein Bergfreunde', 'Jeden zweiten Sonntag wandern wir 10 bis 15 Kilometer in der Umgebung. Gäste sind herzlich willkommen.'),
        ad('g', 'Flughafen-Fahrdienst Schmitz', 'Wir holen Sie zu Hause ab und bringen Sie zum Flughafen – zu jeder Uhrzeit, auch nachts. Festpreis 45 Euro.'),
        ad('h', 'Campingplatz Seeblick', 'Plätze für Zelte und Wohnwagen direkt am Wasser. Kleine Ferienhäuser für Familien. Hunde sind erlaubt.'),
      ].join(''),
      items: [
        { n: 6, q: 'Am Wochenende besuchen Freunde Sie. Sie möchten zusammen eine Radtour machen, aber Ihre Gäste haben keine Räder dabei.', opts: AX, a: 4 },
        { n: 7, q: 'Ihr Flugzeug startet am Montag um 6 Uhr morgens. So früh fährt bei Ihnen noch kein Bus.', opts: AX, a: 6 },
        { n: 8, q: 'Sie möchten Auto fahren lernen.', opts: AX, a: 1 },
        { n: 9, q: 'Bald kommt der Winter, und Ihr Auto braucht andere Reifen.', opts: AX, a: 3 },
        { n: 10, q: 'Sie möchten in den Ferien mit dem Zug nach Italien fahren und suchen günstige Fahrkarten.', opts: AX, a: 8 },
      ],
    }], { compact: true }),
    part(3, [
      {
        html: `<h4>Hallenbad Nordstadt – wichtige Mitteilung</h4><p>Liebe Badegäste,</p><p>vom 3. bis zum 28. Februar bleibt unser Schwimmbecken geschlossen, weil es neue Fliesen bekommt. Die Sauna ist in dieser Zeit wie immer geöffnet.</p><p>Die Schwimmkurse fallen nicht aus: Sie finden im Februar im Hallenbad Südstadt statt, zur gleichen Uhrzeit. Wer eine Monatskarte für Februar gekauft hat, kann sie im März benutzen oder bekommt an der Kasse das Geld zurück. Wir bitten um Ihr Verständnis.</p>`,
        items: [
          { n: 11, q: 'Im Februar kann man im Hallenbad Nordstadt nicht in die Sauna gehen.', opts: RF, a: 1 },
          { n: 12, q: 'Die Schwimmkurse …', opts: ['fallen im Februar aus.', 'finden im Februar in einem anderen Bad statt.', 'beginnen im Februar eine Stunde später.'], a: 1 },
        ],
      },
      {
        html: `<p>Liebe Eltern der Klasse 6c,</p><p>am Donnerstag, den 21. November, findet von 15 bis 19 Uhr unser Elternsprechtag statt. Sie können mit allen Lehrerinnen und Lehrern Ihres Kindes sprechen. Jedes Gespräch dauert zehn Minuten. Bitte tragen Sie sich bis Montag in die Liste ein, die Ihr Kind heute mitbringt.</p><p>Wer am Donnerstag keine Zeit hat, kann mit mir einen anderen Termin vereinbaren. Wenn Sie Hilfe beim Übersetzen brauchen, sagen Sie mir bitte vorher Bescheid.</p><p>Freundliche Grüße<br>Katrin Oswald</p>`,
        items: [
          { n: 13, q: 'Die Eltern sollen sich vor dem Elternsprechtag in eine Liste eintragen.', opts: RF, a: 0 },
          { n: 14, q: 'Eltern, die am 21. November nicht kommen können, …', opts: ['können an einem anderen Tag mit Frau Oswald sprechen.', 'sollen ihr Kind zum Gespräch schicken.', 'müssen bis zum nächsten Elternsprechtag warten.'], a: 0 },
        ],
      },
      {
        html: `<p>Guten Tag Herr Baptiste,</p><p>wir wollten Ihnen heute um 11.20 Uhr ein Paket bringen, aber leider war niemand zu Hause. Das Paket liegt ab morgen 10 Uhr in unserem Paketshop im Kiosk am Sternplatz 3 für Sie bereit. Dort bleibt es sieben Tage. Danach schicken wir es an den Absender zurück.</p><p>Bitte bringen Sie zum Abholen Ihren Ausweis und diese Karte mit. Auf unserer Internetseite können Sie auch einen neuen Liefertermin wählen.</p><p>Ihr Paketdienst Flinkpost</p>`,
        items: [
          { n: 15, q: 'Herr Baptiste kann das Paket schon heute Nachmittag im Kiosk abholen.', opts: RF, a: 1 },
          { n: 16, q: 'Wenn niemand das Paket innerhalb einer Woche abholt, …', opts: ['bringt der Paketdienst es noch einmal zu Herrn Baptiste.', 'muss Herr Baptiste eine Gebühr bezahlen.', 'geht es zurück an den Absender.'], a: 2 },
        ],
      },
    ]),
    part(4, [{
      html: `<h4>Krank am Wochenende – wohin?</h4>
<p>Viele Menschen gehen sofort in die Notaufnahme des Krankenhauses, wenn sie abends oder am Wochenende krank werden. Das ist aber nicht immer richtig. Die Notaufnahme ist für Menschen da, die in Lebensgefahr sind, zum Beispiel nach einem schweren Unfall oder bei starken Schmerzen in der Brust. In solchen Fällen rufen Sie die Nummer 112 an.</p>
<p>Bei Fieber, einer Erkältung oder Bauchschmerzen hilft Ihnen der ärztliche Bereitschaftsdienst. Sie erreichen ihn unter der Nummer 116 117, auch nachts und an Feiertagen. Der Anruf kostet nichts. Am Telefon sagt man Ihnen, welche Praxis in Ihrer Nähe geöffnet ist. Wenn Sie zu krank sind, um aus dem Haus zu gehen, kommt ein Arzt zu Ihnen.</p>
<p>Medikamente bekommen Sie nachts in der Notdienst-Apotheke. Welche Apotheke gerade Dienst hat, steht an der Tür jeder Apotheke. Nachts bezahlen Sie dort 2,50 Euro extra.</p>`,
      items: [
        { n: 17, q: 'Wer in Lebensgefahr ist, soll die 112 anrufen.', opts: RF, a: 0 },
        { n: 18, q: 'Ein Arzt vom Bereitschaftsdienst kann auch zu den Kranken nach Hause kommen.', opts: RF, a: 0 },
        { n: 19, q: 'Der Anruf beim Bereitschaftsdienst kostet 2,50 Euro.', opts: RF, a: 1 },
      ],
    }]),
    part(5, [{
      html: `<p>Sehr geehrte Frau Winkler,</p>
<p>vielen Dank für Ihren Brief. Ich habe am Dienstag, den 12. März, um 9.30 Uhr einen Termin bei ${gap(20)} in der Ausländerbehörde. Leider kann ich an diesem Tag nicht kommen, ${gap(21)} ich eine wichtige Prüfung in meinem Deutschkurs habe.</p>
<p>Deshalb möchte ich Sie bitten, den Termin zu ${gap(22)}. Wäre es möglich, dass ich in der Woche danach komme? ${gap(23)} Nachmittag habe ich immer Zeit.</p>
<p>Bitte teilen Sie mir auch mit, ${gap(24)} Unterlagen ich mitbringen soll. Meinen Pass und meinen Mietvertrag habe ich schon kopiert.</p>
<p>Ich entschuldige mich für die Umstände und ${gap(25)} Ihnen im Voraus für Ihre Hilfe.</p>
<p>Mit freundlichen Grüßen<br>Daniel Okonkwo</p>`,
      items: [
        { n: 20, q: '', opts: ['Sie', 'Ihnen', 'Ihr'], a: 1 },
        { n: 21, q: '', opts: ['weil', 'denn', 'deshalb'], a: 0 },
        { n: 22, q: '', opts: ['verschoben', 'verschiebe', 'verschieben'], a: 2 },
        { n: 23, q: '', opts: ['Im', 'Am', 'Um'], a: 1 },
        { n: 24, q: '', opts: ['welche', 'was', 'wie'], a: 0 },
        { n: 25, q: '', opts: ['bedanke', 'dankbar', 'danke'], a: 2 },
      ],
    }], { gaps: true }),
  ],
};
