import { part, RF, AF } from './fmt.js';

export default {
  id: 'h01', title: 'Variante 1', about: 'Arztpraxis, Bahnhof, Hausmeister, Supermarkt · Wetter, Verkehr, Möbelhaus, Familienfest, Hallenbad · Nachbarn, Schichttausch, Bürgeramt, Elterngespräch · Einkaufen im Internet oder im Geschäft',
  parts: [
    part(1, [
      {
        audio: [['f1', 'Guten Tag, Frau Yilmaz, hier ist die Praxis Doktor Brandner, Lehmann am Apparat. Sie haben morgen um 9 Uhr 15 einen Termin bei uns. Leider ist der Doktor morgen Vormittag nicht im Haus. Wir können Ihnen einen neuen Termin am Donnerstag um 16 Uhr anbieten. Passt Ihnen das? Dann müssen Sie nichts tun. Wenn Sie am Donnerstag keine Zeit haben, rufen Sie uns bitte heute noch bis 18 Uhr zurück. Und bitte denken Sie an Ihre Versichertenkarte. Auf Wiederhören.']],
        items: [{ n: 1, q: 'Frau Yilmaz soll die Praxis anrufen, …', opts: ['um den Termin am Donnerstag zu bestätigen.', 'wenn sie am Donnerstag nicht kommen kann.', 'weil ihre Versichertenkarte fehlt.'], a: 1 }],
      },
      {
        audio: [['m1', 'Achtung an Gleis 4! Der Regionalexpress nach Felsberg, planmäßige Abfahrt 10 Uhr 42, hat heute etwa 25 Minuten Verspätung. Grund dafür ist eine Störung an der Strecke. Reisende nach Felsberg können auch die S-Bahn-Linie 3 nehmen. Sie fährt um 10 Uhr 50 von Gleis 9. Bitte beachten Sie: Die S-Bahn hält nicht in Altdorf. Wir bitten um Ihr Verständnis.']],
        items: [{ n: 2, q: 'Was erfahren die Reisenden?', opts: ['Der Regionalexpress fährt heute von Gleis 9 ab.', 'Die S-Bahn nach Felsberg hat 25 Minuten Verspätung.', 'Mit der S-Bahn kommt man nicht nach Altdorf.'], a: 2 }],
      },
      {
        audio: [['m1', 'Guten Tag, Herr Okafor, Hausmeister Wendt hier. Sie hatten wegen der kaputten Klingel angerufen. Der Elektriker kommt am Mittwoch zwischen 8 und 10 Uhr. Er muss auch kurz in Ihre Wohnung. Wenn Sie da nicht zu Hause sind, können Sie Ihren Schlüssel bei der Nachbarin im ersten Stock abgeben, bei Frau Petersen. Sie ist den ganzen Vormittag da. Bei Fragen erreichen Sie mich unter 5 5 5, 0 1, 3 6. Tschüs.']],
        items: [{ n: 3, q: 'Was kann Herr Okafor tun, wenn er am Mittwochmorgen nicht zu Hause ist?', opts: ['Den Schlüssel einer Nachbarin geben.', 'Mit dem Elektriker einen anderen Termin ausmachen.', 'Den Schlüssel zum Hausmeister bringen.'], a: 0 }],
      },
      {
        audio: [['f1', 'Liebe Kundinnen und Kunden, willkommen im Frischemarkt Kessler. Heute für Sie im Angebot: Tomaten aus der Region, das Kilo für nur 1 Euro 99. An unserer Käsetheke bekommen Sie bis 14 Uhr alle Sorten 20 Prozent günstiger. Und noch ein Hinweis: Wegen Umbauarbeiten ist unser Getränkemarkt diese Woche geschlossen. Wasser und Saft finden Sie so lange im Eingangsbereich neben der Bäckerei. Wir wünschen Ihnen einen schönen Einkauf.']],
        items: [{ n: 4, q: 'Was bekommt man heute günstiger?', opts: ['Getränke im Eingangsbereich.', 'Käse an der Theke bis zum frühen Nachmittag.', 'Brot aus der Bäckerei.'], a: 1 }],
      },
    ]),
    part(2, [
      {
        audio: [['f1', 'Und jetzt das Wetter. Heute Vormittag ist es noch überall trocken, und die Sonne zeigt sich immer wieder. Am Nachmittag ziehen von Westen dichte Wolken auf, und am Abend beginnt es zu regnen. Die Temperaturen erreichen heute noch 18 Grad. Morgen wird es deutlich kühler: Es regnet fast den ganzen Tag bei höchstens 11 Grad. Erst am Wochenende wird es wieder freundlicher.']],
        items: [{ n: 5, q: 'Wie wird das Wetter heute?', opts: ['Erst am Abend fällt Regen.', 'Es regnet schon am Vormittag.', 'Es bleibt den ganzen Tag sonnig.'], a: 0 }],
      },
      {
        audio: [['m1', 'Die Verkehrsmeldungen. Auf der Autobahn 7 Richtung Norden: Zwischen Neustadt und Waldsee 6 Kilometer Stau nach einem Unfall. Die rechte Spur ist gesperrt. Fahren Sie dort bitte besonders vorsichtig. Und in der Innenstadt: Die Brückenstraße ist wegen eines Wasserrohrbruchs bis morgen früh komplett gesperrt. Eine Umleitung über den Bahnhofsplatz ist ausgeschildert. Die Buslinien 12 und 15 fahren dort ebenfalls anders.']],
        items: [{ n: 6, q: 'Die Brückenstraße …', opts: ['ist nach einem Unfall gesperrt.', 'ist nur auf der rechten Spur frei.', 'kann man bis morgen früh nicht benutzen.'], a: 2 }],
      },
      {
        audio: [['m1', 'Sie suchen ein neues Sofa oder einen Kleiderschrank? Dann kommen Sie zu Möbel Hartwig am Stadtring! Nur diese Woche: Alle Betten und Matratzen 30 Prozent billiger. Und bei einem Einkauf ab 500 Euro liefern wir kostenlos zu Ihnen nach Hause. Der Aufbau kostet nur 39 Euro extra. Möbel Hartwig – geöffnet Montag bis Samstag von 10 bis 20 Uhr.']],
        items: [{ n: 7, q: 'Was ist bei Möbel Hartwig gratis?', opts: ['Der Aufbau der Möbel.', 'Die Lieferung bei einem größeren Einkauf.', 'Eine Matratze zu jedem Bett.'], a: 1 }],
      },
      {
        audio: [['f1', 'Und hier unser Tipp fürs Wochenende: Am Samstag findet im Stadtpark das große Familienfest statt. Von 11 bis 18 Uhr gibt es Musik, Spiele für Kinder und Essen aus vielen Ländern. Der Eintritt ist frei. Parkplätze gibt es am Park nur wenige – kommen Sie am besten mit dem Bus oder mit dem Fahrrad. Bei Regen wird das Fest auf Sonntag verschoben.']],
        items: [{ n: 8, q: 'Was wird den Besuchern empfohlen?', opts: ['Nicht mit dem Auto zu kommen.', 'Lieber erst am Sonntag zu kommen.', 'Die Eintrittskarten vorher zu kaufen.'], a: 0 }],
      },
      {
        audio: [['m1', 'Aus der Region: Das Hallenbad am Rosengarten bleibt länger geschlossen als geplant. Eigentlich sollte es nach der Renovierung am 1. Oktober wieder öffnen. Nun hat die Stadt mitgeteilt: Die Arbeiten am Dach dauern länger. Das Bad öffnet erst Mitte November. Schulen und Vereine können in dieser Zeit das Bad in Lindenau benutzen. Wer eine Jahreskarte hat, bekommt sie um sechs Wochen verlängert.']],
        items: [{ n: 9, q: 'Was erfahren Sie über das Hallenbad am Rosengarten?', opts: ['Es öffnet am 1. Oktober wieder.', 'Es ist jetzt nur noch für Schulen und Vereine da.', 'Die Renovierung ist später fertig als geplant.'], a: 2 }],
      },
    ]),
    part(3, [
      {
        who: { f1: 'Frau Bergmann', m1: 'Herr Novak' },
        audio: [
          ['f1', 'Hallo, Herr Novak! Gut, dass ich Sie treffe.'],
          ['m1', 'Guten Abend, Frau Bergmann. Was gibt es denn?'],
          ['f1', 'Der Paketbote war heute Mittag da. Sie waren nicht zu Hause, da habe ich Ihr Paket angenommen.'],
          ['m1', 'Oh, vielen Dank! Das sind bestimmt die Schuhe für meinen Sohn. Kann ich es gleich mitnehmen?'],
          ['f1', 'Im Moment ist es schlecht, ich muss sofort los zum Elternabend. Aber ich bin ab halb neun wieder da.'],
          ['m1', 'Halb neun – da bringe ich gerade die Kinder ins Bett. Geht es auch morgen früh?'],
          ['f1', 'Ja, natürlich. Ich gehe um Viertel nach sieben aus dem Haus. Klingeln Sie einfach vorher.'],
          ['m1', 'Gut, dann komme ich um sieben. Danke noch mal!'],
        ],
        items: [
          { n: 10, q: 'Frau Bergmann hat ein Paket für ihren Nachbarn angenommen.', opts: RF, a: 0 },
          { n: 11, q: 'Wann holt Herr Novak das Paket ab?', opts: ['Jetzt gleich.', 'Heute um halb neun.', 'Morgen um sieben Uhr.'], a: 2 },
        ],
      },
      {
        who: { m1: 'Tarek', f1: 'Elena' },
        audio: [
          ['m1', 'Du, Elena, hast du kurz Zeit? Ich habe eine Bitte.'],
          ['f1', 'Klar, was ist los?'],
          ['m1', 'Ich habe am Freitag Spätschicht, aber meine Tochter hat um 17 Uhr ihr Schulkonzert. Könntest du mit mir tauschen?'],
          ['f1', 'Am Freitag … da habe ich Frühschicht. Eigentlich wollte ich am Nachmittag zum Friseur. Aber den Termin kann ich verschieben.'],
          ['m1', 'Das wäre super! Dann übernehme ich deine Frühschicht, von 6 bis 14 Uhr.'],
          ['f1', 'In Ordnung. Aber wir müssen das noch Frau Albrecht sagen, sie macht den Schichtplan.'],
          ['m1', 'Stimmt. Ich gehe gleich in ihr Büro und sage Bescheid.'],
          ['f1', 'Gut. Und viel Spaß beim Konzert!'],
        ],
        items: [
          { n: 12, q: 'Elena kann am Freitag nicht mit Tarek tauschen.', opts: RF, a: 1 },
          { n: 13, q: 'Was macht Tarek jetzt?', opts: ['Er informiert Frau Albrecht.', 'Er ruft beim Friseur an.', 'Er fährt zum Schulkonzert.'], a: 0 },
        ],
      },
      {
        who: { f1: 'Mitarbeiterin', m1: 'Herr Hassan' },
        audio: [
          ['f1', 'Bürgeramt Steinfeld, Kramer, guten Tag.'],
          ['m1', 'Guten Tag, mein Name ist Hassan. Ich bin umgezogen und möchte mich ummelden. Brauche ich dafür einen Termin?'],
          ['f1', 'Ja, ohne Termin geht es leider nicht. Der nächste freie Termin ist am Dienstag, um 10 Uhr 30.'],
          ['m1', 'Vormittags arbeite ich. Haben Sie auch etwas am Nachmittag?'],
          ['f1', 'Am Donnerstag haben wir bis 18 Uhr geöffnet. Da hätte ich noch 16 Uhr 45.'],
          ['m1', 'Ja, das passt. Was muss ich mitbringen?'],
          ['f1', 'Ihren Ausweis und die Bestätigung vom Vermieter. Das Formular dafür finden Sie auf unserer Internetseite.'],
          ['m1', 'Die Bestätigung habe ich schon. Kostet die Anmeldung etwas?'],
          ['f1', 'Nein, die ist kostenlos.'],
        ],
        items: [
          { n: 14, q: 'Herr Hassan kann ohne Termin zum Bürgeramt kommen.', opts: RF, a: 1 },
          { n: 15, q: 'Wann geht Herr Hassan zum Bürgeramt?', opts: ['Am Dienstag um 10 Uhr 30.', 'Am Donnerstag um 16 Uhr 45.', 'Am Donnerstag um 18 Uhr.'], a: 1 },
        ],
      },
      {
        who: { f1: 'Frau Vogt', m1: 'Herr Demirci' },
        audio: [
          ['f1', 'Guten Tag, Herr Demirci. Schön, dass Sie kommen konnten.'],
          ['m1', 'Guten Tag, Frau Vogt. Gibt es Probleme mit Leyla?'],
          ['f1', 'Nein, gar nicht. In Mathematik ist Ihre Tochter sogar eine der Besten in meiner Klasse. Nur beim Lesen braucht sie noch etwas Hilfe.'],
          ['m1', 'Zu Hause sprechen wir meistens Türkisch. Vielleicht liegt es daran.'],
          ['f1', 'Das ist kein Problem. Aber es wäre gut, wenn sie jeden Tag zehn Minuten laut auf Deutsch liest.'],
          ['m1', 'Haben Sie einen Tipp, welche Bücher?'],
          ['f1', 'In der Stadtbibliothek gibt es viele Kinderbücher, und der Ausweis ist für Kinder kostenlos. Außerdem bieten wir dienstags nach dem Unterricht eine Lesegruppe an.'],
          ['m1', 'Dienstags hat sie Schwimmen, das geht leider nicht. Aber in die Bibliothek gehen wir gleich am Samstag.'],
        ],
        items: [
          { n: 16, q: 'Die Lehrerin spricht mit einem Vater über seine Tochter.', opts: RF, a: 0 },
          { n: 17, q: 'Was will Herr Demirci tun?', opts: ['Leyla für die Lesegruppe anmelden.', 'Leyla vom Schwimmen abmelden.', 'Mit Leyla in die Bibliothek gehen.'], a: 2 },
        ],
      },
    ]),
    part(4, [
      {
        ex: 2,
        audio: [['f1', 'Ich arbeite im Krankenhaus, oft bis abends, und habe zwei kleine Kinder. Wann soll ich da in die Stadt gehen? Ich bestelle fast alles im Internet, abends auf dem Sofa, wenn die Kinder schlafen. Zwei Tage später ist das Paket da. Für mich ist das einfach praktisch.']],
        items: [],
      },
      {
        audio: [['m1', 'Also, Kleidung bestelle ich nie im Internet. Ich habe es einmal probiert: Die Hose war zu eng, die Jacke zu lang, und ich musste alles zurückschicken. Im Geschäft ziehe ich die Sachen an und sehe sofort, ob sie passen. Das dauert vielleicht länger, aber dann bin ich auch zufrieden.']],
        items: [{ n: 18, q: '', opts: AF, a: 3 }],
      },
      {
        audio: [['f2', 'Letzten Monat brauchte ich eine neue Waschmaschine. Ich kenne mich mit Technik nicht aus. Deshalb bin ich in ein Fachgeschäft gegangen. Der Verkäufer hat sich viel Zeit genommen, hat mir die Unterschiede erklärt und alle meine Fragen beantwortet. Das Gerät war dort etwas teurer, aber das war es mir wert.']],
        items: [{ n: 19, q: '', opts: AF, a: 0 }],
      },
      {
        audio: [['m2', 'Ich bin Student und muss auf mein Geld achten. Bevor ich etwas kaufe, vergleiche ich die Preise im Internet. Dort finde ich fast immer ein günstigeres Angebot als in den Läden hier in der Stadt. Meine Kopfhörer zum Beispiel haben online 20 Euro weniger gekostet. Warum soll ich mehr bezahlen?']],
        items: [{ n: 20, q: '', opts: AF, a: 5 }],
      },
    ], {
      topic: 'Thema: Einkaufen – im Internet oder im Geschäft?',
      stmts: [
        'Im Geschäft bekomme ich eine gute Beratung.',
        'Im Internet ist mir die Auswahl zu groß.',
        'Ich kaufe online, weil ich wenig Zeit habe.',
        'Ich möchte die Sachen vor dem Kauf anprobieren.',
        'Im Internet zu bestellen ist mir zu unsicher.',
        'Ich kaufe im Internet, weil es dort billiger ist.',
      ],
    }),
  ],
};
