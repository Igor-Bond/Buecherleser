import { part, ad, gap, RF, AX } from '../tests-lesen-b1.js';

export default {
  id: 'v24', title: 'Variante 4', about: 'Ärztehaus · Kultur- und Musikanzeigen · Musikschule, Rezept, Buslinie · Stadtmuseum · Beschwerde beim Busunternehmen',
  parts: [
    part(1, [{
      html: `<div class="board"><h3>Ärztehaus am Marktplatz – Wegweiser</h3>
<p><b>3. Stock</b> Dr. Seidel, Augenärztin · Dr. Hoffmann, Hals-Nasen-Ohren-Arzt · Hörgeräte Winter</p>
<p><b>2. Stock</b> Dr. Petrova, Kinderärztin · Dr. Aksoy, Frauenärztin · Hebammenpraxis</p>
<p><b>1. Stock</b> Dr. Krause, Hausarzt · Dr. Lang, Zahnarzt · Labor (Blutabnahme)</p>
<p><b>Erdgeschoss</b> Information · Markt-Apotheke · Optiker · Bäckerei mit Café</p>
<p><b>Untergeschoss</b> Physiotherapie und Massage · Röntgen · Tiefgarage</p></div>`,
      items: [
        { n: 1, q: 'Sie haben von Ihrem Arzt ein Rezept bekommen und möchten die Tabletten gleich mitnehmen.', opts: ['Erdgeschoss', '1. Stock', 'anderes Stockwerk'], a: 0 },
        { n: 2, q: 'Sie hören schlecht. Ihr Hausarzt sagt, dass ein Facharzt Ihre Ohren untersuchen soll.', opts: ['1. Stock', '3. Stock', 'anderes Stockwerk'], a: 1 },
        { n: 3, q: 'Ihre Tochter ist zwei Jahre alt. Sie hat seit gestern Fieber und Husten.', opts: ['1. Stock', '2. Stock', 'anderes Stockwerk'], a: 1 },
        { n: 4, q: 'Sie haben Rückenschmerzen. Ihre Ärztin hat Ihnen sechs Massagen verschrieben.', opts: ['Erdgeschoss', '1. Stock', 'anderes Stockwerk'], a: 2 },
        { n: 5, q: 'Ihnen tut seit zwei Tagen ein Zahn weh.', opts: ['1. Stock', '3. Stock', 'anderes Stockwerk'], a: 0 },
      ],
    }]),
    part(2, [{
      html: [
        ad('a', 'Naturkundemuseum: Familiensonntag', 'Jeden ersten Sonntag im Monat ist der Eintritt für Familien frei. Um 11 Uhr gibt es eine Führung für Kinder ab 6 Jahren zum Thema „Tiere im Wald“.'),
        ad('b', 'Kunsthalle am Fluss', 'Neue Ausstellung „Farben des Nordens“ mit Bildern moderner Maler. Dienstag bis Sonntag 10–18 Uhr, donnerstags bis 21 Uhr. Eintritt 9 Euro.'),
        ad('c', 'Technikmuseum Hallberg', 'Alte Autos, Flugzeuge und Lokomotiven. Viele Maschinen dürfen die Besucher selbst ausprobieren. Täglich 9–17 Uhr.'),
        ad('d', 'Musikschule Klangfarbe', 'Unterricht in Gitarre, Klavier und Geige für Kinder ab 6 Jahren und für Erwachsene. Die erste Stunde ist eine kostenlose Probestunde.'),
        ad('e', 'Musikgarten für die Kleinsten', 'Eltern singen und tanzen zusammen mit ihren Kindern (1 bis 3 Jahre). Mittwochs um 9.30 Uhr im Familienzentrum.'),
        ad('f', 'Klavier zu verkaufen', 'Gebrauchtes Klavier in gutem Zustand, 600 Euro. Den Transport müssen Sie selbst organisieren.'),
        ad('g', 'Stadtführung „Altstadt bei Nacht“', 'Freitags und samstags um 20 Uhr ab Rathaus. Die Führung dauert 90 Minuten und kostet 8 Euro.'),
        ad('h', 'Konzert im Schlosspark', 'Das Stadtorchester spielt bekannte Filmmusik. Samstag, 5. Juli, 19 Uhr. Eintritt frei. Bitte bringen Sie eine Decke oder einen Stuhl mit.'),
      ].join(''),
      items: [
        { n: 6, q: 'Ihr Sohn ist acht Jahre alt und möchte Geige spielen lernen. Sie möchten zuerst sehen, ob ihm der Unterricht gefällt.', opts: AX, a: 3 },
        { n: 7, q: 'Sie interessieren sich für Malerei, arbeiten aber jeden Tag bis 18 Uhr. Sie möchten nach der Arbeit eine Ausstellung besuchen.', opts: AX, a: 1 },
        { n: 8, q: 'Ihre Kinder sind 10 und 12 Jahre alt und lieben Autos und Flugzeuge. Im Museum wollen sie nicht nur schauen, sondern auch selbst etwas tun.', opts: AX, a: 2 },
        { n: 9, q: 'Sie singen gern und suchen einen Chor für Erwachsene.', opts: AX, a: 8 },
        { n: 10, q: 'Sie möchten am Wochenende mit Freunden Musik hören. Sie haben im Moment aber wenig Geld.', opts: AX, a: 7 },
      ],
    }], { compact: true }),
    part(3, [
      {
        html: `<p>Sehr geehrte Frau Haddad,</p><p>vielen Dank für die Anmeldung Ihrer Tochter Lina an unserer Musikschule. Lina bekommt einen Platz im Gitarrenkurs für Anfänger. Der Unterricht findet ab dem 8. September immer montags von 15.30 bis 16.15 Uhr in Raum 4 statt. In der Gruppe sind vier Kinder.</p><p>Der Kurs kostet 38 Euro im Monat. In den ersten drei Monaten kann Lina kostenlos eine Gitarre von uns leihen. Danach braucht sie ein eigenes Instrument. Bitte schicken Sie uns den Vertrag bis zum 25. August unterschrieben zurück.</p><p>Mit freundlichen Grüßen<br>Musikschule Sonnberg</p>`,
        items: [
          { n: 11, q: 'Lina muss schon zur ersten Stunde ihre eigene Gitarre mitbringen.', opts: RF, a: 1 },
          { n: 12, q: 'Frau Haddad soll …', opts: ['ihre Tochter am 25. August zum Unterricht bringen.', 'den Vertrag unterschreiben und zurückschicken.', 'für die Gitarre der Musikschule 38 Euro bezahlen.'], a: 1 },
        ],
      },
      {
        html: `<h4>Praxis Dr. Krause – Rezepte bestellen</h4><p>Liebe Patientinnen und Patienten,</p><p>wenn Sie regelmäßig dasselbe Medikament nehmen, müssen Sie für ein neues Rezept nicht mehr in die Sprechstunde kommen. Bestellen Sie es einfach am Telefon oder auf unserer Internetseite. Wir brauchen dafür den Namen des Medikaments und Ihr Geburtsdatum.</p><p>Das Rezept ist am nächsten Werktag fertig. Sie müssen es nicht bei uns abholen: Zeigen Sie in der Apotheke einfach Ihre Versichertenkarte, dann bekommen Sie Ihr Medikament. Wichtig: Alle drei Monate müssen Sie mit Ihrer Karte einmal persönlich in die Praxis kommen.</p><p>Ihr Praxisteam</p>`,
        items: [
          { n: 13, q: 'Wer ein Medikament schon lange nimmt, kann das neue Rezept telefonisch bestellen.', opts: RF, a: 0 },
          { n: 14, q: 'In der Apotheke …', opts: ['muss man sein Geburtsdatum aufschreiben.', 'kann man ein neues Rezept bestellen.', 'braucht man die Versichertenkarte.'], a: 2 },
        ],
      },
      {
        html: `<h4>Buslinie 12 – Änderung wegen Bauarbeiten</h4><p>Liebe Fahrgäste,</p><p>vom 3. bis zum 21. November wird die Schillerstraße repariert. In dieser Zeit fahren die Busse der Linie 12 einen anderen Weg. An den Haltestellen „Schillerstraße“ und „Stadtbad“ halten sie nicht. Bitte benutzen Sie die Ersatzhaltestelle in der Gartenstraße vor der Post.</p><p>Der Fahrplan bleibt gleich. Rechnen Sie aber bitte mit Verspätungen von bis zu zehn Minuten. Für die Linie 14 ändert sich nichts.</p><p>Ihre Verkehrsbetriebe Hallberg</p>`,
        items: [
          { n: 15, q: 'Während der Bauarbeiten fahren keine Busse der Linie 12.', opts: RF, a: 1 },
          { n: 16, q: 'Die Fahrgäste der Linie 12 …', opts: ['können in der Gartenstraße einsteigen.', 'bekommen einen neuen Fahrplan.', 'müssen jetzt die Linie 14 nehmen.'], a: 0 },
        ],
      },
    ]),
    part(4, [{
      html: `<h4>Willkommen im Stadtmuseum Hallberg</h4>
<p>Unser Museum zeigt auf drei Etagen die Geschichte der Stadt – von den ersten Häusern am Fluss bis heute. Es ist von Dienstag bis Sonntag von 10 bis 17 Uhr geöffnet. Montags ist das Museum geschlossen, außer an Feiertagen.</p>
<p>Der Eintritt kostet 7 Euro. Schüler, Studenten und Rentner zahlen 4 Euro. Kinder unter sechs Jahren müssen nichts bezahlen. Am ersten Sonntag im Monat ist der Eintritt für alle Besucher frei.</p>
<p>Jeden Samstag um 14 Uhr gibt es eine Führung durch das Museum. Sie dauert eine Stunde und kostet 3 Euro extra. Gruppen ab zehn Personen melden sich bitte mindestens eine Woche vorher an.</p>
<p>Große Taschen und Rucksäcke dürfen Sie nicht in die Ausstellung mitnehmen. Bitte schließen Sie sie in die Schränke neben der Kasse ein. Dafür brauchen Sie eine 1-Euro-Münze. Die Münze bekommen Sie zurück, wenn Sie Ihre Sachen wieder abholen. Fotografieren ist erlaubt, aber nur ohne Blitz. Essen und trinken können Sie in unserem Café im Erdgeschoss.</p>`,
      items: [
        { n: 17, q: 'An einem Feiertag kann man das Museum auch am Montag besuchen.', opts: RF, a: 0 },
        { n: 18, q: 'Wer am Samstag an der Führung teilnimmt, zahlt nur den normalen Eintritt.', opts: RF, a: 1 },
        { n: 19, q: 'Das Geld für den Schrank bekommt man am Ende wieder.', opts: RF, a: 0 },
      ],
    }]),
    part(5, [{
      html: `<p>Sehr geehrte Damen und Herren,</p>
<p>ich fahre jeden Morgen mit der Linie 27 von der Haltestelle Waldstraße zur Arbeit. Leider muss ich mich heute ${gap(20)} Ihnen beschweren.</p>
<p>In den letzten drei Wochen ist der Bus fast jeden Tag zu spät ${gap(21)}. Am Montag habe ich sogar 25 Minuten gewartet, ${gap(22)} der Bus um 7.10 Uhr gar nicht gefahren ist. Ich bin deshalb schon zweimal zu spät zur Arbeit gekommen und habe Ärger mit ${gap(23)} Chef bekommen.</p>
<p>Außerdem sind einige Fahrer sehr unfreundlich. Gestern wollte ich nur fragen, ${gap(24)} der nächste Bus kommt. Der Fahrer hat mir aber nicht geantwortet und einfach die Tür geschlossen.</p>
<p>Ich bezahle jeden Monat 59 Euro für meine Monatskarte. Ich hoffe, dass die Busse bald wieder pünktlich ${gap(25)}. Bitte teilen Sie mir mit, was Sie gegen diese Probleme tun.</p>
<p>Mit freundlichen Grüßen<br>Ivana Marković</p>`,
      items: [
        { n: 20, q: '', opts: ['an', 'bei', 'mit'], a: 1 },
        { n: 21, q: '', opts: ['gekommen', 'kommen', 'kam'], a: 0 },
        { n: 22, q: '', opts: ['denn', 'deshalb', 'weil'], a: 2 },
        { n: 23, q: '', opts: ['meinen', 'mein', 'meinem'], a: 2 },
        { n: 24, q: '', opts: ['wann', 'wenn', 'als'], a: 0 },
        { n: 25, q: '', opts: ['fährt', 'fahren', 'gefahren'], a: 1 },
      ],
    }], { gaps: true }),
  ],
};
