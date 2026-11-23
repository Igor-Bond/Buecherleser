import { part, ad, gap, RF, AX } from '../tests-lesen-b1.js';

export default {
  id: 'v28', title: 'Variante 8', about: 'Baumarkt · Anzeigen · Einkaufen mit der neuen Nachbarin, Wohnung streichen, Klavierunterricht · Putzaktion an der Schule · Wasserschaden nach Starkregen',
  parts: [
    part(1, [{
      html: `<div class="board"><h3>Baumarkt Hollmann – Übersicht</h3>
<p><b>Bereich A (Eingang)</b> Information · Kasse · Umtausch und Reklamation · Transporter-Verleih</p>
<p><b>Bereich B</b> Farben und Lacke · Pinsel und Rollen · Tapeten · Abdeckfolie · Leitern</p>
<p><b>Bereich C</b> Werkzeug · Schrauben und Nägel · Geräte-Verleih (Bohrmaschinen, Sägen)</p>
<p><b>Bereich D</b> Bad und Küche · Wasserhähne · Fliesen · Lampen · Kabel und Steckdosen</p>
<p><b>Bereich E</b> Laminat und Teppichboden · Türen · Holz nach Maß</p>
<p><b>Außenbereich</b> Gartencenter · Pflanzen und Blumenerde · Gartenmöbel · Grills</p></div>`,
      items: [
        { n: 1, q: 'Sie möchten Ihr Wohnzimmer streichen und brauchen weiße Wandfarbe.', opts: ['Bereich A', 'Bereich B', 'anderer Bereich'], a: 1 },
        { n: 2, q: 'In Ihrem Bad tropft der Wasserhahn. Sie möchten einen neuen kaufen.', opts: ['Bereich D', 'Bereich E', 'anderer Bereich'], a: 0 },
        { n: 3, q: 'Sie wollen ein Regal an die Wand hängen und möchten dafür eine Bohrmaschine für einen Tag leihen.', opts: ['Bereich A', 'Bereich C', 'anderer Bereich'], a: 1 },
        { n: 4, q: 'Sie brauchen frische Erde für die Blumen auf Ihrem Balkon.', opts: ['Bereich B', 'Bereich E', 'anderer Bereich'], a: 2 },
        { n: 5, q: 'Die Lampe, die Sie gestern hier gekauft haben, funktioniert nicht. Sie möchten sie zurückgeben.', opts: ['Bereich C', 'Bereich D', 'anderer Bereich'], a: 2 },
      ],
    }]),
    part(2, [{
      html: [
        ad('a', 'Gitarre lernen – auch ohne Noten', 'Musikstudent unterrichtet Jugendliche und Erwachsene, einmal pro Woche bei Ihnen zu Hause. 22 Euro für 45 Minuten.'),
        ad('b', 'Malerbetrieb Öztürk', 'Wir streichen und tapezieren Ihre Wohnung – sauber und pünktlich. Sie bekommen innerhalb von drei Tagen ein kostenloses Angebot.'),
        ad('c', 'Klavier zu verkaufen', 'Gut erhaltenes Klavier, 25 Jahre alt, für 600 Euro. Den Transport müssen Sie selbst organisieren.'),
        ad('d', 'Trocknungsservice Reuter', 'Wasser im Keller oder in der Wohnung? Wir pumpen es ab und trocknen Wände und Böden. Unser Notdienst ist rund um die Uhr erreichbar.'),
        ad('e', 'Nachbarschaftstreff „Willkommen“', 'Neu in Deutschland? Freiwillige Helfer begleiten Sie zum Amt, zum Arzt oder zur Bank und helfen beim Übersetzen. Dienstags und freitags 10–13 Uhr.'),
        ad('f', 'Musikschule Klangfarbe – Schnupperwoche', 'Kinder von 6 bis 12 Jahren probieren eine Woche lang kostenlos verschiedene Instrumente aus: Geige, Flöte, Trompete und Schlagzeug.'),
        ad('g', 'Leihladen Nordstadt', 'Leihen statt kaufen: Leitern, Tapeziertische, Bohrmaschinen und anderes Werkzeug bekommen Sie bei uns für wenig Geld, pro Tag oder pro Woche.'),
        ad('h', 'Sozialkaufhaus Fundgrube', 'Gebrauchte Möbel, Geschirr und Lampen zu kleinen Preisen. Auf Wunsch liefern wir die Möbel zu Ihnen nach Hause.'),
      ].join(''),
      items: [
        { n: 6, q: 'Ihr Sohn ist acht Jahre alt und möchte ein Instrument lernen. Er weiß aber noch nicht, welches ihm gefällt.', opts: AX, a: 5 },
        { n: 7, q: 'Nach einem Gewitter steht bei Ihnen Wasser im Keller. Sie brauchen sofort Hilfe.', opts: AX, a: 3 },
        { n: 8, q: 'Sie möchten Ihre Küche selbst streichen. Farbe haben Sie schon, aber Ihnen fehlt eine Leiter, und kaufen wollen Sie keine.', opts: AX, a: 6 },
        { n: 9, q: 'Sie sind 40 Jahre alt und haben ein Klavier zu Hause. Jetzt suchen Sie jemanden, der Ihnen das Spielen beibringt.', opts: AX, a: 8 },
        { n: 10, q: 'Ihre neue Nachbarin aus Brasilien spricht noch wenig Deutsch. Sie braucht jemanden, der mit ihr zur Ausländerbehörde geht.', opts: AX, a: 4 },
      ],
    }], { compact: true }),
    part(3, [
      {
        html: `<p>Hallo Birgit,</p><p>bei uns im Haus wohnt seit letzter Woche eine neue Nachbarin. Sie heißt Thu und kommt aus Vietnam. Sie ist erst seit einem Monat in Deutschland und kennt sich hier noch nicht aus. Gestern hat sie mich gefragt, wo man günstig einkaufen kann.</p><p>Ich gehe deshalb am Samstag um 10 Uhr mit ihr zum Wochenmarkt und danach in den Supermarkt in der Gartenstraße. Du kennst doch den Asia-Laden am Bahnhof. Hast du Lust mitzukommen? Dann könntest du ihn ihr zeigen. Thu versteht schon ein bisschen Deutsch, wenn man langsam spricht. Gib mir bitte bis Freitag Bescheid.</p><p>Liebe Grüße<br>Sabine</p>`,
        items: [
          { n: 11, q: 'Sabine und Thu wollen am Samstag zuerst auf den Markt gehen.', opts: RF, a: 0 },
          { n: 12, q: 'Birgit soll …', opts: ['der Nachbarin ein Geschäft am Bahnhof zeigen.', 'für die Nachbarin übersetzen.', 'am Freitag mit in den Supermarkt kommen.'], a: 0 },
        ],
      },
      {
        html: `<p>Hallo Jonas,</p><p>wie du weißt, ziehen wir Ende des Monats in die neue Wohnung in der Uferstraße. Vorher müssen wir die alte Wohnung renovieren – das steht im Mietvertrag. Die Wände in allen drei Zimmern müssen weiß sein. Ein Maler ist uns zu teuer, deshalb streichen wir selbst. Farbe und Pinsel habe ich schon im Baumarkt gekauft.</p><p>Hättest du am nächsten Wochenende Zeit, uns zu helfen? Wir fangen am Samstag um 9 Uhr an. Zieh bitte alte Kleidung an! Zum Mittagessen bestellen wir Pizza für alle.</p><p>Viele Grüße<br>Emre</p>`,
        items: [
          { n: 13, q: 'Emre lässt die alte Wohnung von einer Firma streichen.', opts: RF, a: 1 },
          { n: 14, q: 'Emre bittet Jonas, …', opts: ['beim Umzug in die Uferstraße zu helfen.', 'Farbe und Pinsel zu besorgen.', 'in Sachen zu kommen, die schmutzig werden dürfen.'], a: 2 },
        ],
      },
      {
        html: `<h4>Musikschule Tonleiter – Ihr Unterricht</h4><p>Sehr geehrter Herr Castillo,</p><p>vielen Dank für Ihre Anmeldung. Ihr Klavierunterricht beginnt am Dienstag, dem 7. Oktober. Sie haben einmal pro Woche 30 Minuten Einzelunterricht bei Frau Lindholm, immer dienstags um 18 Uhr in Raum 4. Der Unterricht kostet 68 Euro im Monat. In den Schulferien findet kein Unterricht statt.</p><p>Ein eigenes Klavier brauchen Sie am Anfang nicht: Sie können montags bis freitags von 14 bis 20 Uhr in unseren Übungsräumen spielen. Bitte reservieren Sie den Raum vorher im Sekretariat.</p><p>Mit freundlichen Grüßen<br>Ihre Musikschule Tonleiter</p>`,
        items: [
          { n: 15, q: 'Herr Castillo hat jede Woche eine halbe Stunde Unterricht.', opts: RF, a: 0 },
          { n: 16, q: 'Zum Üben …', opts: ['muss Herr Castillo sofort ein Klavier kaufen.', 'kann Herr Castillo einen Raum in der Musikschule benutzen.', 'darf Herr Castillo auch am Wochenende in die Musikschule kommen.'], a: 1 },
        ],
      },
    ]),
    part(4, [{
      html: `<h4>„Sauberes Viertel“ – Putzaktion an der Gesamtschule Am Weiher</h4>
<p>Rund um unsere Schule liegt leider oft Müll: Flaschen, Papier und Plastiktüten auf dem Gehweg, im Park und am Spielplatz. Deshalb organisiert die Schule zusammen mit dem Elternrat am Samstag, dem 26. April, eine große Putzaktion. Mitmachen können alle: Schüler, Eltern, Lehrer und auch die Nachbarn aus dem Viertel.</p>
<p>Wir treffen uns um 10 Uhr auf dem Schulhof und bilden dort kleine Gruppen. Kinder unter zehn Jahren dürfen nur zusammen mit einem Erwachsenen sammeln. Handschuhe, Müllsäcke und Zangen bekommen wir von der Stadtreinigung. Sie müssen also nichts mitbringen, nur feste Schuhe sind wichtig. Die vollen Säcke stellen wir an den Schulparkplatz. Die Stadt holt sie am Montag ab.</p>
<p>Gegen 13 Uhr ist die Aktion zu Ende. Danach gibt es für alle Helferinnen und Helfer kostenlos Würstchen und Getränke in der Mensa. Bei starkem Regen fällt die Aktion nicht aus, sondern findet eine Woche später statt.</p>
<p>Bitte melden Sie sich bis zum 22. April im Sekretariat oder per E-Mail an, damit wir genug Material bestellen können.</p>`,
      items: [
        { n: 17, q: 'An der Putzaktion dürfen nur Schüler und ihre Familien teilnehmen.', opts: RF, a: 1 },
        { n: 18, q: 'Die Teilnehmer brauchen keine eigenen Handschuhe und Müllsäcke.', opts: RF, a: 0 },
        { n: 19, q: 'Wenn es stark regnet, wird die Aktion auf einen anderen Samstag verschoben.', opts: RF, a: 0 },
      ],
    }]),
    part(5, [{
      html: `<p>Sehr geehrter Herr Aigner,</p>
<p>ich wohne in der Birkenallee 14 im Erdgeschoss links. In der Nacht von Dienstag auf Mittwoch hat es sehr stark geregnet. Dabei ist Wasser durch die Balkontür in ${gap(20)} Wohnzimmer gelaufen. Der Boden ist jetzt an mehreren Stellen kaputt, ${gap(21)} die Wand ist immer noch nass.</p>
<p>Ich habe sofort Fotos gemacht und schicke ${gap(22)} Ihnen mit diesem Brief. Könnten Sie bitte so schnell wie möglich einen Handwerker schicken, ${gap(23)} sich den Schaden ansieht?</p>
<p>Außerdem möchte ich wissen, ${gap(24)} die Versicherung des Hauses die Reparatur bezahlt. Oder muss ich den Schaden meiner eigenen Versicherung melden?</p>
<p>Ich bin diese Woche jeden Tag ab 15 Uhr zu Hause. Ich bitte Sie ${gap(25)} eine schnelle Antwort.</p>
<p>Mit freundlichen Grüßen<br>Marta Kowalczyk</p>`,
      items: [
        { n: 20, q: '', opts: ['meinem', 'mein', 'meinen'], a: 1 },
        { n: 21, q: '', opts: ['weil', 'dass', 'und'], a: 2 },
        { n: 22, q: '', opts: ['sie', 'ihn', 'es'], a: 0 },
        { n: 23, q: '', opts: ['den', 'der', 'dem'], a: 1 },
        { n: 24, q: '', opts: ['wenn', 'weil', 'ob'], a: 2 },
        { n: 25, q: '', opts: ['um', 'für', 'auf'], a: 0 },
      ],
    }], { gaps: true }),
  ],
};
