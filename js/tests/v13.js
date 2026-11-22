import { part, ad, gap, RF, AX } from '../tests-lesen-b1.js';

export default {
  id: 'v13', title: 'Variante 13', about: 'Sportzentrum · Anzeigen · Schuhgeschäft, Erste-Hilfe-Kurs, Bürgerbüro · Schulmensa · Anmeldung im Sportverein',
  parts: [
    part(1, [{
      html: `<div class="board"><h3>Sportzentrum Westpark – Wegweiser</h3>
<p><b>2. Stock</b> Fitnessstudio · Kursraum 1 (Yoga, Gymnastik) · Kursraum 2 (Tanzen) · Sauna</p>
<p><b>1. Stock</b> Sporthalle (Basketball, Volleyball, Badminton) · Tischtennisraum · Zuschauertribüne</p>
<p><b>Erdgeschoss</b> Empfang und Kasse (Anmeldung, Mitgliedsausweise) · Schwimmhalle · Umkleiden · Bistro</p>
<p><b>Untergeschoss</b> Kegelbahn · Kletterwand · Physiotherapie</p>
<p><b>Außenbereich</b> Fußballplatz · Tennisplätze · Parkplatz</p></div>`,
      items: [
        { n: 1, q: 'Sie möchten Mitglied werden und haben noch Fragen zu den Preisen.', opts: ['Erdgeschoss', '1. Stock', 'anderer Bereich'], a: 0 },
        { n: 2, q: 'Ihre Tochter hat heute ein Volleyballspiel. Sie möchten zuschauen.', opts: ['Erdgeschoss', '1. Stock', 'anderer Bereich'], a: 1 },
        { n: 3, q: 'Nach dem Training möchten Sie noch in die Sauna gehen.', opts: ['1. Stock', 'Untergeschoss', 'anderer Bereich'], a: 2 },
        { n: 4, q: 'Sie haben sich mit einem Kollegen zum Tennisspielen verabredet.', opts: ['1. Stock', '2. Stock', 'anderer Bereich'], a: 2 },
        { n: 5, q: 'Sie möchten zum ersten Mal das Klettern ausprobieren.', opts: ['Untergeschoss', '2. Stock', 'anderer Bereich'], a: 0 },
      ],
    }]),
    part(2, [{
      html: [
        ad('a', 'Babysitterin hat Zeit', 'Schülerin (17) mit Erfahrung passt abends und am Wochenende auf Ihre Kinder auf. 10 Euro pro Stunde.'),
        ad('b', 'Ferienprogramm im Jugendzentrum', 'Für Kinder von 8 bis 14 Jahren: in allen Schulferien montags bis freitags 9–16 Uhr Ausflüge, Sport und Basteln. 40 Euro pro Woche mit Mittagessen.'),
        ad('c', 'Eltern-Kind-Café', 'Jeden Dienstag von 9.30 bis 11.30 Uhr im Familienzentrum. Für Eltern mit Babys und Kleinkindern: frühstücken, reden, andere Familien kennenlernen.'),
        ad('d', 'Musikgarten für die Kleinsten', 'Kinder von 3 bis 5 Jahren singen und tanzen zusammen mit Mama oder Papa. Freitags um 15 Uhr in der Musikschule.'),
        ad('e', 'Familienberatung der Stadt', 'Probleme bei der Erziehung oder Streit in der Familie? Wir beraten Sie kostenlos, auch in anderen Sprachen.'),
        ad('f', 'Indoor-Spielplatz Tobeland', 'Wir organisieren den Kindergeburtstag für Sie: Spiele, Kuchen und Getränke für bis zu zehn Kinder in einem eigenen Raum.'),
        ad('g', 'Vorlesestunde in der Buchhandlung Seitenweise', 'Jeden Samstag um 11 Uhr lesen wir Geschichten für Kinder ab 4 Jahren. Der Eintritt ist frei.'),
        ad('h', 'Kinderturnen beim TV Eichenau', 'Für Kinder von 4 bis 6 Jahren, donnerstags um 16 Uhr in der Turnhalle der Grundschule.'),
      ].join(''),
      items: [
        { n: 6, q: 'Sie und Ihr Mann möchten am Samstagabend ins Kino gehen. Sie brauchen jemanden für Ihre zwei kleinen Kinder.', opts: AX, a: 0 },
        { n: 7, q: 'Ihr Sohn wird neun Jahre alt. Er möchte mit seinen Freunden feiern, aber Ihre Wohnung ist zu klein.', opts: AX, a: 5 },
        { n: 8, q: 'Sie sind mit Ihrem Baby neu in der Stadt und möchten andere Mütter und Väter treffen.', opts: AX, a: 2 },
        { n: 9, q: 'In den Sommerferien müssen Sie arbeiten. Ihre zehnjährige Tochter soll nicht den ganzen Tag allein sein.', opts: AX, a: 1 },
        { n: 10, q: 'Ihre Tochter ist zwölf Jahre alt und möchte reiten lernen.', opts: AX, a: 8 },
      ],
    }], { compact: true }),
    part(3, [
      {
        html: `<h4>Schuhhaus Kramer – wir ziehen um!</h4><p>Nach 20 Jahren in der Kirchstraße ziehen wir Ende Mai in das neue Einkaufszentrum am Nordring. Vorher müssen unsere Regale leer werden: Vom 2. bis zum 25. Mai bekommen Sie alle Schuhe 30 Prozent billiger, Kinderschuhe sogar zum halben Preis. Reduzierte Ware können Sie leider nicht umtauschen.</p><p>Vom 26. bis zum 31. Mai bleibt das Geschäft geschlossen. Am 1. Juni eröffnen wir am Nordring – jeder Kunde bekommt an diesem Tag ein kleines Geschenk.</p>`,
        items: [
          { n: 11, q: 'Im Mai kosten alle Schuhe nur noch die Hälfte.', opts: RF, a: 1 },
          { n: 12, q: 'Schuhe, die man im Mai billiger kauft, …', opts: ['kann man nicht zurückgeben.', 'bekommt man erst am 1. Juni.', 'gibt es nur im neuen Geschäft.'], a: 0 },
        ],
      },
      {
        html: `<p>Hallo Farid,</p><p>ich habe mich für einen Erste-Hilfe-Kurs angemeldet, weil ich ihn für den Führerschein brauche. Er findet am Samstag, den 9. März, von 9 bis 16.30 Uhr beim Roten Kreuz in der Bahnhofstraße statt und kostet 45 Euro.</p><p>Du hast doch gesagt, dass du auch so einen Kurs machen möchtest. Es sind noch Plätze frei! Anmelden kann man sich aber nur noch bis Mittwoch auf der Internetseite. Wenn du mitkommst, können wir zusammen mit dem Bus hinfahren. Sag mir Bescheid!</p><p>Viele Grüße<br>Luis</p>`,
        items: [
          { n: 13, q: 'Luis besucht den Kurs, weil er den Führerschein machen will.', opts: RF, a: 0 },
          { n: 14, q: 'Farid …', opts: ['hat sich schon für den Kurs angemeldet.', 'muss sich bis Mittwoch entscheiden.', 'soll Luis mit dem Auto abholen.'], a: 1 },
        ],
      },
      {
        html: `<h4>Bürgerbüro Altenfeld – wichtige Information</h4><p>Ab dem 1. März können Sie das Bürgerbüro nur noch mit Termin besuchen. Termine buchen Sie online oder telefonisch unter 0800 555 0199. So müssen Sie nicht mehr lange warten.</p><p>Eine Ausnahme gibt es: Fertige Ausweise und Reisepässe können Sie weiterhin ohne Termin abholen, montags bis freitags von 8 bis 12 Uhr am Schalter 1. Bitte bringen Sie dafür Ihren alten Ausweis mit. Bezahlen können Sie bei uns bar oder mit Karte.</p>`,
        items: [
          { n: 15, q: 'Wer seinen neuen Ausweis abholen möchte, braucht dafür einen Termin.', opts: RF, a: 1 },
          { n: 16, q: 'Einen Termin im Bürgerbüro …', opts: ['bekommt man nur am Schalter 1.', 'braucht man erst ab 12 Uhr.', 'kann man im Internet oder am Telefon machen.'], a: 2 },
        ],
      },
    ]),
    part(4, [{
      html: `<h4>Mittagessen in der Schulmensa – Informationen für Eltern</h4>
<p>Ab dem neuen Schuljahr können alle Schülerinnen und Schüler der Grundschule am Park in der Mensa zu Mittag essen. Das Essen wird jeden Tag frisch in unserer Küche gekocht. Es gibt immer zwei Gerichte, eines davon ist ohne Fleisch.</p>
<p>Ein Essen kostet 3,80 Euro. Familien mit wenig Einkommen können beim Jobcenter oder beim Sozialamt einen Antrag stellen. Dann ist das Mittagessen für ihr Kind kostenlos.</p>
<p>Die Kinder bezahlen nicht mit Bargeld. Sie als Eltern überweisen Geld auf ein Mensakonto und bestellen das Essen online, spätestens am Donnerstag für die nächste Woche. Ist Ihr Kind krank, können Sie das Essen bis 8 Uhr morgens abbestellen. Sonst müssen Sie es bezahlen.</p>
<p>Hat Ihr Kind eine Allergie? Dann sprechen Sie bitte mit unserer Küchenleiterin, Frau Arslan. Den Speiseplan finden Sie auf der Internetseite der Schule.</p>`,
      items: [
        { n: 17, q: 'In der Mensa gibt es jeden Tag auch ein Essen für Kinder, die kein Fleisch essen.', opts: RF, a: 0 },
        { n: 18, q: 'Die Kinder bezahlen das Essen jeden Tag an der Kasse.', opts: RF, a: 1 },
        { n: 19, q: 'Wenn ein Kind krank ist, muss man das bestellte Essen immer bezahlen.', opts: RF, a: 1 },
      ],
    }]),
    part(5, [{
      html: `<p>Sehr geehrte Frau Baumgart,</p>
<p>auf der Internetseite Ihres Vereins habe ich gelesen, dass es bei Ihnen eine Handballgruppe für Kinder gibt. Ich ${gap(20)} meinen Sohn Emil gern für diese Gruppe anmelden. Er ist acht Jahre alt und spielt schon ${gap(21)} zwei Jahren in der Schule Handball.</p>
<p>Ich habe noch einige Fragen: An ${gap(22)} Tagen findet das Training statt? Und wie viel kostet die Mitgliedschaft im Jahr?</p>
<p>Emil würde gern einmal zum Probetraining kommen, ${gap(23)} er die Gruppe und den Trainer kennenlernen kann. Wäre das möglich?</p>
<p>Bitte schicken Sie mir auch das Anmeldeformular. Ich fülle ${gap(24)} dann aus und bringe es zum ersten Training mit. Über eine schnelle Antwort würde ich mich sehr ${gap(25)}.</p>
<p>Mit freundlichen Grüßen<br>Olga Schneider</p>`,
      items: [
        { n: 20, q: '', opts: ['wäre', 'würde', 'hätte'], a: 1 },
        { n: 21, q: '', opts: ['seit', 'vor', 'ab'], a: 0 },
        { n: 22, q: '', opts: ['welche', 'welchem', 'welchen'], a: 2 },
        { n: 23, q: '', opts: ['um', 'damit', 'dass'], a: 1 },
        { n: 24, q: '', opts: ['ihn', 'sie', 'es'], a: 2 },
        { n: 25, q: '', opts: ['freuen', 'freue', 'gefreut'], a: 0 },
      ],
    }], { gaps: true }),
  ],
};
