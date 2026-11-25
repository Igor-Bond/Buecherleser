import { part, RF, AF } from './fmt.js';

export default {
  id: 'h15', title: 'Variante 5', about: 'Lohnsteuerhilfe, Messe, Kinderarzt, Stadtbibliothek · Hochwasser, Busstreik, Tagesfahrt, Nachtflohmarkt, Trinkwasser · Führerscheinstelle, Putzplan, Überstunden, Tierarzt · Geld sparen im Alltag',
  parts: [
    part(1, [
      {
        audio: [['m1', 'Guten Tag, Frau Petrova, hier spricht Jansen von der Lohnsteuerhilfe Nordring. Ich bearbeite gerade Ihre Steuererklärung für das letzte Jahr. Die Lohnabrechnungen und die Bescheinigung von der Krankenkasse sind inzwischen angekommen, vielen Dank dafür. Es fehlt mir allerdings noch die Rechnung von der Kita, denn ohne sie werden die Betreuungskosten nicht anerkannt. Sie müssen deswegen nicht extra vorbeikommen, schicken Sie mir einfach ein Foto per E-Mail. Falls ich die Rechnung bis Freitag habe, geht die Erklärung noch diese Woche ans Finanzamt, sonst erst Mitte des Monats. Auf Wiederhören.']],
        items: [{ n: 1, q: 'Was soll Frau Petrova tun?', opts: ['Einen Beleg über die Ausgaben für ihr Kind senden.', 'Die Lohnabrechnungen bis Freitag vorbeibringen.', 'Ihre Erklärung selbst ans Finanzamt schicken.'], a: 0 }],
      },
      {
        audio: [['f1', 'Sehr geehrte Besucherinnen und Besucher, willkommen auf der Messe „Wohnen und Garten“. Bitte beachten Sie eine Änderung im Programm: Der Vortrag „Energie sparen im Altbau“ findet nicht wie angekündigt um 11 Uhr in Halle 2 statt, sondern erst um 13 Uhr 30 auf der Bühne in Halle 4. Die Kochvorführung in Halle 2 beginnt dagegen pünktlich um 12 Uhr. Außerdem möchten wir Sie daran erinnern, dass Tageskarten nur bis 16 Uhr an der Kasse verkauft werden, obwohl die Messe bis 18 Uhr geöffnet ist. Wir wünschen Ihnen einen angenehmen Aufenthalt.']],
        items: [{ n: 2, q: 'Was erfahren die Besucher?', opts: ['Die Kochvorführung wird auf 13 Uhr 30 verschoben.', 'Eine Veranstaltung beginnt später und an einem anderen Ort als geplant.', 'Die Messe schließt heute schon um 16 Uhr.'], a: 1 }],
      },
      {
        audio: [['f1', 'Guten Tag, Herr Karimi, hier ist die Kinderarztpraxis Doktor Sommerfeld, mein Name ist Wolff. Es geht um den Impftermin für Ihren Sohn Daniel am Montag um 15 Uhr. Der Impfstoff wird leider erst am Mittwoch geliefert, deshalb müssen wir den Termin verschieben. Ich habe Sie für Donnerstag um 15 Uhr 30 eingetragen. Sollte das nicht passen, melden Sie sich bitte bis morgen Mittag. Und noch etwas: Beim letzten Mal hatten Sie das Impfheft vergessen. Bringen Sie es diesmal bitte unbedingt mit, denn ohne das Heft dürfen wir nicht impfen. Vielen Dank und auf Wiederhören.']],
        items: [{ n: 3, q: 'Warum ruft die Praxis an?', opts: ['Weil die Impfung erst einige Tage später möglich ist.', 'Weil Herr Karimi am Montag das Impfheft vergessen hat.', 'Weil der Impfstoff am Mittwoch um 15 Uhr abgeholt werden soll.'], a: 0 }],
      },
      {
        audio: [['m1', 'Liebe Besucherinnen und Besucher, die Stadtbibliothek schließt in 20 Minuten, also um 19 Uhr. Die Ausleihe am Schalter ist bereits beendet. Wenn Sie noch Bücher mitnehmen möchten, benutzen Sie bitte die Automaten im Erdgeschoss, die bis zur Schließung in Betrieb sind. Bücher zurückgeben können Sie übrigens auch nach 19 Uhr, und zwar am Rückgabekasten neben dem Haupteingang. Bitte denken Sie daran, dass die Computerplätze im ersten Stock schon in fünf Minuten abgeschaltet werden. Speichern Sie also rechtzeitig Ihre Dateien. Wir danken für Ihren Besuch.']],
        items: [{ n: 4, q: 'Was ist nach der Schließung noch möglich?', opts: ['Bücher an den Automaten ausleihen.', 'Am Computer im ersten Stock arbeiten.', 'Ausgeliehene Medien draußen abgeben.'], a: 2 }],
      },
    ]),
    part(2, [
      {
        audio: [['f1', 'Das Wetter für unsere Region. Seit gestern regnet es ohne Pause, und das bleibt auch heute so. Erst morgen Nachmittag lässt der Regen nach. Der Fluss Lahne steigt deshalb weiter: In Brückenau wird der höchste Wasserstand in der kommenden Nacht erwartet, in Altenfurt erst morgen gegen Mittag. Die Uferstraße in Brückenau ist bereits gesperrt, die Altstadt ist bisher aber nicht betroffen. Wer am Fluss wohnt, sollte sein Auto möglichst heute noch aus der Tiefgarage holen. Die Temperaturen liegen bei 9 Grad, am Wochenende wird es trocken und etwas milder.']],
        items: [{ n: 5, q: 'Was wird den Menschen geraten, die am Fluss wohnen?', opts: ['Die Altstadt von Brückenau zu verlassen.', 'Ihr Auto bis morgen Nachmittag in der Tiefgarage zu lassen.', 'Ihren Wagen rechtzeitig an einen sicheren Ort zu bringen.'], a: 2 }],
      },
      {
        audio: [['m1', 'Und nun eine Information für alle, die morgen mit dem Bus unterwegs sind. Die Fahrerinnen und Fahrer der Stadtwerke Lindental streiken morgen von Betriebsbeginn bis 14 Uhr. In dieser Zeit fallen alle Stadtbusse aus, nur die Linie 20 zum Krankenhaus fährt einmal pro Stunde. Die Straßenbahnen und die Regionalbusse sind vom Streik nicht betroffen. Fahrkarten für den Bus gelten morgen ausnahmsweise auch in der Regionalbahn. Nach 14 Uhr fahren die Busse wieder, allerdings muss noch bis zum Abend mit Verspätungen gerechnet werden.']],
        items: [{ n: 6, q: 'Was gilt morgen Vormittag?', opts: ['Die Straßenbahnen fahren nur einmal pro Stunde.', 'Mit einem Busticket darf man auch den Zug benutzen.', 'Zum Krankenhaus kommt man nur mit dem Regionalbus.'], a: 1 }],
      },
      {
        audio: [['f1', 'Lust auf einen Tag am Meer? Dann fahren Sie mit Wendland Reisen an die Ostsee! Jeden Samstag bringt Sie unser bequemer Reisebus nach Seehagen, Abfahrt um 6 Uhr 30 am Busbahnhof, Rückkehr gegen 21 Uhr. Die Fahrt kostet 45 Euro, Kinder bis 12 Jahre zahlen nur 25 Euro. Im Preis enthalten ist ein Frühstück im Bus, das Mittagessen im Restaurant am Hafen ist dagegen nicht dabei. Und wenn Sie mindestens zwei Wochen vorher buchen, sparen Sie 5 Euro pro Person. Wendland Reisen, Telefon 4 4 7, 2 0, 9 1.']],
        items: [{ n: 7, q: 'Was bekommt man bei dieser Fahrt ohne Aufpreis?', opts: ['Ein Mittagessen im Restaurant am Hafen.', 'Eine zweite Fahrt für nur 5 Euro.', 'Eine Mahlzeit unterwegs am Morgen.'], a: 2 }],
      },
      {
        audio: [['m1', 'Unser Veranstaltungstipp: Am Freitag gibt es wieder den Nachtflohmarkt in der alten Markthalle am Güterbahnhof. Von 17 Uhr bis Mitternacht können Sie dort Kleidung, Bücher, Möbel und vieles mehr kaufen. Der Eintritt kostet 3 Euro, ab 22 Uhr kommt man aber umsonst hinein. Wer selbst etwas verkaufen möchte, musste sich eigentlich bis gestern anmelden. Weil noch Tische frei sind, nimmt der Veranstalter jedoch bis Donnerstag Anmeldungen an, allerdings nur telefonisch. Neue Waren und Lebensmittel dürfen übrigens nicht verkauft werden.']],
        items: [{ n: 8, q: 'Was erfahren Sie über den Nachtflohmarkt?', opts: ['Späte Gäste müssen nichts bezahlen.', 'Verkäufer können sich bis Donnerstag im Internet anmelden.', 'Ab 22 Uhr werden auch Lebensmittel verkauft.'], a: 0 }],
      },
      {
        audio: [['f1', 'Eine wichtige Meldung der Stadtwerke Marbeck. Bei einer Kontrolle wurden im Trinkwasser Bakterien gefunden. Betroffen sind die Stadtteile Nordfeld und Hafen, nicht aber die Innenstadt. Dort muss das Leitungswasser ab sofort mindestens drei Minuten gekocht werden, bevor man es trinkt oder zum Kochen verwendet. Duschen und Wäsche waschen können Sie weiterhin ohne Probleme. Die Leitungen werden zurzeit gereinigt. Das Ergebnis der nächsten Kontrolle wird am Donnerstag erwartet, und erst danach wird entschieden, ob das Wasser wieder normal benutzt werden darf.']],
        items: [{ n: 9, q: 'Was sollen die Menschen in Nordfeld tun?', opts: ['Bis Donnerstag nicht mit Leitungswasser duschen.', 'Wasser aus dem Hahn erhitzen, bevor sie es trinken.', 'Trinkwasser aus der Innenstadt holen.'], a: 1 }],
      },
    ]),
    part(3, [
      {
        who: { f1: 'Mitarbeiterin', m1: 'Herr Moreno' },
        audio: [
          ['f1', 'Guten Tag, nehmen Sie bitte Platz. Was kann ich für Sie tun?'],
          ['m1', 'Guten Tag. Ich komme aus Kolumbien und lebe seit vier Monaten hier. Ich möchte meinen Führerschein umschreiben lassen. Darf ich im Moment eigentlich noch fahren?'],
          ['f1', 'Ja, mit Ihrem Führerschein dürfen Sie sechs Monate lang fahren, gerechnet ab Ihrer Anmeldung in Deutschland. Danach brauchen Sie den deutschen.'],
          ['m1', 'Dann habe ich ja nur noch zwei Monate. Muss ich dafür noch einmal in die Fahrschule?'],
          ['f1', 'Unterricht ist keine Pflicht, aber die theoretische und die praktische Prüfung müssen Sie beide machen.'],
          ['m1', 'Oh, ich hatte gehofft, dass die praktische reicht. Welche Unterlagen brauchen Sie denn von mir?'],
          ['f1', 'Den Pass, ein Foto, einen Sehtest und eine Übersetzung Ihres Führerscheins.'],
          ['m1', 'Den Sehtest habe ich dabei. Und die Übersetzung hat mir ein Freund schon gemacht, er spricht sehr gut Deutsch.'],
          ['f1', 'Das reicht leider nicht. Sie muss von einem anerkannten Übersetzer oder von einem Automobilclub kommen.'],
          ['m1', 'Schade. Kann ich den Antrag trotzdem heute schon stellen und den Rest später bringen?'],
          ['f1', 'Nein, erst wenn alles vollständig ist. Buchen Sie dann einfach online einen neuen Termin.'],
          ['m1', 'Gut, dann kümmere ich mich zuerst darum.'],
        ],
        items: [
          { n: 10, q: 'Herr Moreno darf mit seinem jetzigen Führerschein zurzeit noch Auto fahren.', opts: RF, a: 0 },
          { n: 11, q: 'Was macht Herr Moreno als Nächstes?', opts: ['Er lässt das Dokument noch einmal von einer offiziellen Stelle ins Deutsche übertragen.', 'Er stellt heute den Antrag und bringt den Sehtest später.', 'Er meldet sich in der Fahrschule für den Unterricht an.'], a: 0 },
        ],
      },
      {
        who: { f1: 'Jana', m1: 'Lukas' },
        audio: [
          ['f1', 'Lukas, hast du einen Moment? Wir müssen über den Putzplan reden.'],
          ['m1', 'Schon wieder? Ich habe doch letzte Woche das Bad geputzt.'],
          ['f1', 'Das Bad schon, aber diese Woche bist du mit der Küche dran, und der Müll steht seit Montag im Flur.'],
          ['m1', 'Stimmt, das habe ich vergessen. Ich hatte drei Spätschichten und war abends einfach kaputt.'],
          ['f1', 'Das verstehe ich ja, aber ich habe die Küche jetzt schon zweimal für dich gemacht, obwohl ich selbst für die Prüfung lernen muss.'],
          ['m1', 'Tut mir leid. Sollen wir vielleicht eine Putzfirma bestellen? Dann hätten wir das Problem nicht mehr.'],
          ['f1', 'Das ist mir zu teuer, das kostet bestimmt 60 Euro im Monat für jeden.'],
          ['m1', 'Na gut. Und wenn wir nicht mehr wechseln? Ich übernehme immer das Bad und den Müll, du die Küche. Die benutzt du sowieso viel öfter als ich.'],
          ['f1', 'Hm, einverstanden, aber nur, wenn du den Müll wirklich jede Woche rausbringst und nicht erst, wenn ich dich erinnere.'],
          ['m1', 'Versprochen. Ich stelle mir eine Erinnerung ins Handy, jeden Montag.'],
          ['f1', 'Gut. Dann schreibe ich den neuen Plan und hänge ihn an den Kühlschrank.'],
          ['m1', 'Und den Müll bringe ich sofort runter.'],
        ],
        items: [
          { n: 12, q: 'Lukas hat in dieser Woche seine Aufgaben im Haushalt erledigt.', opts: RF, a: 1 },
          { n: 13, q: 'Worauf einigen sich die beiden?', opts: ['Sie bestellen eine Putzfirma für 60 Euro im Monat.', 'Jeder hat ab jetzt feste Aufgaben, die gleich bleiben.', 'Jana putzt weiter die Küche für Lukas, bis seine Spätschichten vorbei sind.'], a: 1 },
        ],
      },
      {
        who: { f1: 'Frau Nowak', m1: 'Herr Brandt' },
        audio: [
          ['f1', 'Herr Brandt, hätten Sie kurz Zeit? Es geht um meine Überstunden.'],
          ['m1', 'Natürlich, Frau Nowak, kommen Sie herein. Wie viele sind es denn inzwischen?'],
          ['f1', '42 Stunden. Seit Herr Albers krank ist, bleibe ich ja fast jeden Tag länger.'],
          ['m1', 'Ich weiß, und dafür bin ich Ihnen sehr dankbar. Am liebsten würde ich Ihnen die Stunden auszahlen, das wäre für die Abteilung am einfachsten.'],
          ['f1', 'Ehrlich gesagt hätte ich lieber frei. Vom Geld bleibt nach den Steuern nicht viel übrig, und ich bin wirklich müde.'],
          ['m1', 'Das kann ich verstehen. Aber solange Herr Albers fehlt, kann ich nicht auf Sie verzichten. Er fängt am 2. Mai wieder an, danach könnten Sie eine ganze Woche frei nehmen.'],
          ['f1', 'Die Woche ab dem 12. Mai wäre ideal, da hat die Kita meiner Tochter geschlossen.'],
          ['m1', 'Einverstanden, das trage ich gleich ein. Das sind dann 40 Stunden. Und die zwei übrigen?'],
          ['f1', 'Könnte ich an diesem Freitag einfach zwei Stunden früher gehen?'],
          ['m1', 'Diesen Freitag kommt die große Lieferung, das ist schlecht. Nächsten Freitag gern.'],
          ['f1', 'Gut, dann machen wir es so. Vielen Dank.'],
        ],
        items: [
          { n: 14, q: 'Frau Nowak arbeitet zurzeit mehr, weil ein Kollege ausfällt.', opts: RF, a: 0 },
          { n: 15, q: 'Wie werden die Überstunden ausgeglichen?', opts: ['Frau Nowak bekommt die 42 Stunden bezahlt.', 'Sie hat ab dem 2. Mai eine Woche frei und geht diesen Freitag früher.', 'Sie bleibt Mitte Mai eine Woche zu Hause und hört an einem anderen Tag eher auf.'], a: 2 },
        ],
      },
      {
        who: { f1: 'Tierärztin', m1: 'Herr Aydin' },
        audio: [
          ['f1', 'Guten Tag, Herr Aydin. Was fehlt denn Ihrem Kater?'],
          ['m1', 'Guten Tag, Frau Doktor. Milo frisst seit drei Tagen kaum noch und schläft fast nur. Normalerweise ist er sehr lebhaft.'],
          ['f1', 'Dann schaue ich ihn mir mal an. Fieber hat er nicht, das ist schon mal gut. Aber sehen Sie hier: Ein Zahn hinten ist entzündet. Deshalb tut ihm das Fressen weh.'],
          ['m1', 'Ach so! Ich dachte schon, es wäre der Magen, weil ich vor einer Woche das Futter gewechselt habe.'],
          ['f1', 'Nein, am Futter liegt es nicht. Der Zahn muss allerdings gezogen werden, und das geht nur unter Narkose.'],
          ['m1', 'Können Sie das gleich heute machen?'],
          ['f1', 'Heute nicht, dafür muss er nüchtern sein. Ich gebe ihm jetzt eine Spritze gegen die Schmerzen, und Sie bringen ihn am Donnerstag um 8 Uhr, ohne Frühstück.'],
          ['m1', 'Donnerstag muss ich arbeiten. Ginge auch Freitag?'],
          ['f1', 'Freitag operieren wir nicht. Aber Sie können ihn schon um halb acht abgeben und am späten Nachmittag abholen.'],
          ['m1', 'Gut, dann bringe ich ihn, bevor ich ins Büro fahre. Was kostet die Behandlung ungefähr?'],
          ['f1', 'Mit Narkose etwa 180 Euro.'],
        ],
        items: [
          { n: 16, q: 'Der Kater ist krank, weil er das neue Futter nicht verträgt.', opts: RF, a: 1 },
          { n: 17, q: 'Was passiert am Donnerstag?', opts: ['Der Kater bekommt eine Spritze gegen die Schmerzen.', 'Herr Aydin kommt um 8 Uhr nach dem Frühstück mit dem Kater.', 'Herr Aydin liefert das Tier vor der Arbeit in der Praxis ab.'], a: 2 },
        ],
      },
    ]),
    part(4, [
      {
        ex: 5,
        audio: [['f1', 'Sparen im Supermarkt ist ja gut und schön, aber das meiste Geld verliert man woanders. Ich habe jahrelang denselben Stromanbieter und dieselbe Handyfirma gehabt, ohne nachzudenken. Letztes Jahr habe ich mich dann mal einen Abend hingesetzt und die Tarife verglichen. Jetzt zahle ich für Strom, Handy und Versicherung zusammen fast 40 Euro weniger im Monat. Seitdem prüfe ich das jedes Jahr, obwohl es natürlich etwas Arbeit macht.']],
        items: [],
      },
      {
        audio: [['m1', 'Früher wusste ich am Monatsende nie, wo mein Gehalt geblieben war. Einen Einkaufszettel habe ich zwar probiert, aber das hat wenig geändert. Dann hat mir ein Kollege geraten, jeden Abend alles ins Handy einzutragen, vom Kaffee bis zur Miete. Das ist am Anfang lästig, doch nach zwei Monaten habe ich gesehen, dass ich über 100 Euro für Essen unterwegs bezahle. Erst seitdem kann ich überhaupt entscheiden, wo ich sparen will.']],
        items: [{ n: 18, q: '', opts: AF, a: 4 }],
      },
      {
        audio: [['f2', 'Als unsere Tochter geboren wurde, wollte ich eigentlich alles neu kaufen. Meine Schwester hat mich dann überredet, mal in einem Laden für Kindersachen aus zweiter Hand zu schauen. Der Kinderwagen dort sah aus wie neu und hat nur ein Drittel gekostet. Inzwischen kaufe ich auch Möbel und Fahrräder so. Natürlich muss man genau hinschauen und manchmal etwas suchen, aber einen Unterschied in der Qualität merke ich fast nie.']],
        items: [{ n: 19, q: '', opts: AF, a: 1 }],
      },
      {
        audio: [['m2', 'Ich achte schon auf Angebote, aber das bringt bei mir nicht viel. Was wirklich geholfen hat: Ich gehe mittags nicht mehr in die Kantine oder zum Imbiss. Das waren jeden Tag 8 oder 9 Euro. Jetzt bereite ich am Sonntag Essen für mehrere Tage vor und nehme es mit zur Arbeit. Das kostet mich vielleicht 3 Euro pro Portion. Zugegeben, es braucht Zeit, aber am Monatsende habe ich deutlich mehr übrig.']],
        items: [{ n: 20, q: '', opts: AF, a: 0 }],
      },
    ], {
      topic: 'Thema: Geld sparen im Alltag',
      stmts: [
        'Wer selbst kocht, gibt deutlich weniger aus.',
        'Gebrauchte Sachen sind oft genauso gut wie neue.',
        'Ich warte mit größeren Käufen auf Sonderangebote.',
        'Mit einem Einkaufszettel kaufe ich nur, was ich wirklich brauche.',
        'Ich notiere alle Ausgaben, um den Überblick zu behalten.',
        'Bei Verträgen sollte man regelmäßig die Preise vergleichen.',
      ],
    }),
  ],
};
