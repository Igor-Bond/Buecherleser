import { part, RF, AF } from './fmt.js';

export default {
  id: 'h08', title: 'Variante 8', about: 'Hausverwaltung, Gleisänderung, Friseur, Ausbildungsbeginn · Wetter, Verkehr, Tierpark, Kleidertausch, Wasser abgestellt · Probetag in der Bäckerei, Fundbüro, Rezept beim Hausarzt, Hoffest · Ehrenamt',
  parts: [
    part(1, [
      {
        audio: [['m1', 'Guten Tag, Frau Petrenko, hier ist die Hausverwaltung Ostermeier, Grabowski mein Name. Es geht um die Reinigung im Treppenhaus. Ab dem 1. März putzt eine Firma das Treppenhaus, immer montags. Sie müssen also nicht mehr selbst putzen. Dafür steigen die Nebenkosten um 9 Euro im Monat. Den Brief dazu bekommen Sie nächste Woche. Eine Bitte noch: Stellen Sie montags keine Schuhe und keinen Kinderwagen vor die Wohnungstür. Vielen Dank, auf Wiederhören.']],
        items: [{ n: 1, q: 'Was ändert sich für Frau Petrenko ab März?', opts: ['Sie muss jeden Montag das Treppenhaus putzen.', 'Sie bezahlt 9 Euro weniger Nebenkosten.', 'Sie muss die Treppe nicht mehr selbst sauber machen.'], a: 2 }],
      },
      {
        audio: [['f1', 'Bitte beachten Sie folgende Gleisänderung: Der Intercity nach Marienburg, Abfahrt 15 Uhr 8, fährt heute nicht von Gleis 2, sondern von Gleis 11. Der Zug ist pünktlich. Die Wagen der ersten Klasse halten im Abschnitt A, das Bordrestaurant finden Sie in der Mitte des Zuges. Auf Gleis 2 fährt in wenigen Minuten die Regionalbahn nach Tannrode ein. Bitte steigen Sie nicht in den falschen Zug.']],
        items: [{ n: 2, q: 'Was ist heute beim Intercity nach Marienburg anders?', opts: ['Er fährt von einem anderen Gleis ab.', 'Er kommt einige Minuten später.', 'Er hat kein Bordrestaurant.'], a: 0 }],
      },
      {
        audio: [['m1', 'Hallo Herr Vasquez, hier ist der Salon Haarscharf, Jannik am Telefon. Sie haben am Samstag um 10 Uhr einen Termin zum Schneiden bei meiner Kollegin Ines. Ines ist am Samstag leider auf einer Fortbildung. Sie können trotzdem um 10 Uhr kommen, dann schneide ich Ihnen die Haare. Wenn Sie lieber zu Ines möchten, hat sie am Dienstag um 17 Uhr Zeit. Sagen Sie uns einfach Bescheid, was Ihnen lieber ist. Unsere Nummer: 5 5 5, 0 1, 8 4. Bis dann!']],
        items: [{ n: 3, q: 'Was kann Herr Vasquez am Samstag machen?', opts: ['Um 17 Uhr zu Ines kommen.', 'Sich von einem anderen Friseur die Haare schneiden lassen.', 'An einer Fortbildung teilnehmen.'], a: 1 }],
      },
      {
        audio: [['f1', 'Guten Tag, Herr Adeyemi, Elektro Hallmann, Personalbüro, Seidler am Apparat. Wir freuen uns, dass Sie am 1. August Ihre Ausbildung bei uns beginnen. Am ersten Tag treffen wir uns um 7 Uhr 30 am Haupteingang in der Werftstraße 22. Arbeitskleidung und Sicherheitsschuhe bekommen Sie von uns. Bitte bringen Sie aber unbedingt Ihre Steuer-Identifikationsnummer und die Bescheinigung von der Krankenkasse mit. Der Unterricht in der Berufsschule beginnt erst im September. Bis dahin, auf Wiederhören!']],
        items: [{ n: 4, q: 'Was soll Herr Adeyemi am ersten Tag mitbringen?', opts: ['Sicherheitsschuhe.', 'Eine Bescheinigung seiner Krankenkasse.', 'Bücher für die Berufsschule.'], a: 1 }],
      },
    ]),
    part(2, [
      {
        audio: [['m1', 'Die Wetteraussichten. Heute bleibt es den ganzen Tag grau, und immer wieder fällt leichter Regen. Dazu ist es mit 8 Grad recht kühl. In der Nacht hört der Regen auf. Morgen können Sie sich freuen: Schon am Vormittag kommt die Sonne heraus, und es wird mit 17 Grad deutlich wärmer. Am Sonntag sind dann sogar 20 Grad möglich, am Abend gibt es aber erste Gewitter.']],
        items: [{ n: 5, q: 'Wie wird das Wetter morgen?', opts: ['Kühl und regnerisch.', 'Sonnig und wärmer als heute.', 'Warm, mit Gewittern am Abend.'], a: 1 }],
      },
      {
        audio: [['f1', 'Verkehrsfunk. Achtung, Autofahrer auf der Bundesstraße 27 bei Ellerbach: Dort sind Kühe auf der Straße. Fahren Sie bitte langsam und überholen Sie nicht. Auf der Autobahn 5 zwischen Rheinau und Dornfeld läuft der Verkehr nach einem Unfall wieder normal, die Sperrung ist aufgehoben. Und für Bahnfahrer: Wegen Bauarbeiten fallen bis Sonntag alle Züge zwischen Dornfeld und Kirchtal aus. Dort fahren Busse.']],
        items: [{ n: 6, q: 'Was hören Sie über die Autobahn 5?', opts: ['Man kann dort wieder normal fahren.', 'Sie ist nach einem Unfall gesperrt.', 'Dort sind Tiere auf der Fahrbahn.'], a: 0 }],
      },
      {
        audio: [['m1', 'Ein Ausflug für die ganze Familie? Kommen Sie in den Tierpark Wildenstein! Neu seit April: unser Haus mit den kleinen Affen. Jeden Tag um 11 und um 15 Uhr können Sie bei der Fütterung der Seehunde zusehen. Erwachsene zahlen 14 Euro, Kinder von 4 bis 14 Jahren 7 Euro. Und jeden Mittwoch ist Familientag: Dann haben alle Kinder freien Eintritt. Tierpark Wildenstein – täglich geöffnet von 9 bis 18 Uhr.']],
        items: [{ n: 7, q: 'Was ist am Mittwoch besonders?', opts: ['Kinder müssen keinen Eintritt bezahlen.', 'Man kann bei der Fütterung der Affen zusehen.', 'Der Tierpark hat länger geöffnet.'], a: 0 }],
      },
      {
        audio: [['f1', 'Sie haben Kleidung im Schrank, die Sie nicht mehr tragen? Dann kommen Sie am Samstag zur Kleidertauschparty ins Bürgerhaus Westend, Hafenstraße 5. Von 14 bis 17 Uhr können Sie bis zu zehn saubere Kleidungsstücke bringen und andere mitnehmen. Geld brauchen Sie nicht, hier wird nur getauscht. Kinderkleidung nehmen wir diesmal leider nicht an. Was am Ende übrig bleibt, geht an das Sozialkaufhaus.']],
        items: [{ n: 8, q: 'Was erfahren Sie über die Kleidertauschparty?', opts: ['Man kann dort günstig Kleidung kaufen.', 'Man kann auch Sachen für Kinder abgeben.', 'Man darf höchstens zehn Teile mitbringen.'], a: 2 }],
      },
      {
        audio: [['m1', 'Eine Mitteilung der Stadtwerke: Im Stadtteil Sandberg wird morgen das Wasser abgestellt. Betroffen sind die Gartenstraße, die Kastanienallee und der Mühlenweg. Von 8 bis etwa 13 Uhr kommt dort kein Wasser aus der Leitung, weil ein altes Rohr ausgetauscht wird. Die Stadtwerke raten: Füllen Sie schon heute Abend einige Flaschen und Eimer. Strom und Gas funktionieren ganz normal. Fragen beantwortet das Servicetelefon unter 5 5 5, 0 1, 9 0.']],
        items: [{ n: 9, q: 'Was sollen die Bewohner tun?', opts: ['Morgen Vormittag den Strom ausschalten.', 'Morgen um 8 Uhr das Servicetelefon anrufen.', 'Vorher Wasser in Flaschen und Eimer füllen.'], a: 2 }],
      },
    ]),
    part(3, [
      {
        who: { f1: 'Frau Hollerbach', m1: 'Herr Sesay' },
        audio: [
          ['f1', 'Bäckerei Hollerbach, guten Tag.'],
          ['m1', 'Guten Tag, hier ist Sesay. Ich habe mich bei Ihnen als Verkäufer beworben.'],
          ['f1', 'Ach ja, Herr Sesay! Ihre Bewerbung hat mir gefallen. Ich möchte Sie gern zu einem Probetag einladen. Geht es bei Ihnen am Donnerstag?'],
          ['m1', 'Am Donnerstag habe ich bis 12 Uhr Deutschkurs. Am Freitag kann ich den ganzen Tag.'],
          ['f1', 'Gut, dann Freitag. Wir fangen früh an: Können Sie um 5 Uhr 30 hier sein?'],
          ['m1', 'Das ist kein Problem, ich wohne ganz in der Nähe. Wie lange dauert der Tag?'],
          ['f1', 'Bis 11 Uhr. Sie stehen mit meiner Kollegin im Laden und verkaufen.'],
          ['m1', 'Muss ich etwas mitbringen?'],
          ['f1', 'Nur bequeme Schuhe. Eine Schürze bekommen Sie von uns. Und für den Probetag zahle ich Ihnen 50 Euro.'],
          ['m1', 'Vielen Dank. Dann bis Freitag!'],
        ],
        items: [
          { n: 10, q: 'Herr Sesay arbeitet schon seit einiger Zeit in der Bäckerei.', opts: RF, a: 1 },
          { n: 11, q: 'Wann ist der Probetag?', opts: ['Am Freitag ab halb sechs.', 'Am Donnerstag nach dem Deutschkurs.', 'Am Freitag ab elf Uhr.'], a: 0 },
        ],
      },
      {
        who: { m1: 'Herr Kowalke', f1: 'Frau Dimitrova' },
        audio: [
          ['m1', 'Fundbüro der Verkehrsbetriebe, Kowalke, guten Tag.'],
          ['f1', 'Guten Tag, Dimitrova. Ich habe gestern meinen Rucksack im Bus verloren, in der Linie 34.'],
          ['m1', 'Wann war das ungefähr?'],
          ['f1', 'Gegen 16 Uhr, ich bin am Theaterplatz ausgestiegen.'],
          ['m1', 'Wie sieht der Rucksack aus?'],
          ['f1', 'Er ist dunkelblau, und vorne ist eine kleine gelbe Tasche. Innen sind mein Schlüsselbund und ein Wörterbuch.'],
          ['m1', 'Moment … ja, so einen Rucksack hat ein Fahrer gestern Abend abgegeben. Mit Schlüsseln und einem Buch.'],
          ['f1', 'Was für ein Glück! Kann ich ihn heute noch abholen?'],
          ['m1', 'Wir haben bis 16 Uhr geöffnet, Depotstraße 3. Bringen Sie bitte Ihren Ausweis mit. Und es kostet eine Gebühr von 5 Euro.'],
          ['f1', 'Gut, ich komme gleich nach der Arbeit, um halb vier.'],
        ],
        items: [
          { n: 12, q: 'Frau Dimitrova hat im Bus einen Rucksack gefunden.', opts: RF, a: 1 },
          { n: 13, q: 'Was muss Frau Dimitrova tun?', opts: ['Bis morgen auf den Rucksack warten.', 'Den Busfahrer selbst anrufen.', 'Ihren Ausweis zeigen und etwas bezahlen.'], a: 2 },
        ],
      },
      {
        who: { f1: 'Frau Hanke', m1: 'Herr Popescu' },
        audio: [
          ['f1', 'Praxis Doktor Reusch, Hanke am Apparat.'],
          ['m1', 'Guten Tag, Popescu. Meine Tabletten gegen den hohen Blutdruck sind fast alle. Ich brauche ein neues Rezept.'],
          ['f1', 'Wann waren Sie denn das letzte Mal bei uns, Herr Popescu?'],
          ['m1', 'Vor drei Wochen, glaube ich.'],
          ['f1', 'Dann waren Sie in diesem Quartal schon hier, das ist gut. Ich bereite das Rezept vor.'],
          ['m1', 'Muss ich dafür zum Doktor in die Sprechstunde?'],
          ['f1', 'Nein, das ist nicht nötig. Sie können das Rezept morgen ab 10 Uhr hier am Empfang abholen.'],
          ['m1', 'Morgen arbeite ich bis abends. Kann auch meine Frau kommen?'],
          ['f1', 'Natürlich. Sie soll nur Ihre Versichertenkarte mitbringen.'],
          ['m1', 'Prima, dann kommt sie morgen Vormittag vorbei. Danke schön!'],
        ],
        items: [
          { n: 14, q: 'Herr Popescu ruft in der Praxis an, weil er ein neues Rezept braucht.', opts: RF, a: 0 },
          { n: 15, q: 'Wer holt das Rezept ab?', opts: ['Herr Popescu selbst, nach der Arbeit.', 'Niemand, die Praxis schickt es mit der Post.', 'Die Frau von Herrn Popescu.'], a: 2 },
        ],
      },
      {
        who: { m1: 'Herr Jessen', f1: 'Frau Aydemir' },
        audio: [
          ['m1', 'Hallo, Frau Aydemir! Haben Sie den Zettel im Flur gesehen? Wir wollen im Hof ein Fest machen.'],
          ['f1', 'Ja, eine schöne Idee, Herr Jessen. Wann soll es denn sein?'],
          ['m1', 'Am Samstag, dem 12. Juli, ab 16 Uhr. Kommen Sie mit Ihrer Familie?'],
          ['f1', 'Sehr gern. Was können wir mitbringen? Ich könnte einen großen Salat machen.'],
          ['m1', 'Salate haben wir schon vier. Aber Sie backen doch dieses leckere Brot …'],
          ['f1', 'Das Fladenbrot? Gern, dann backe ich drei oder vier Stück.'],
          ['m1', 'Wunderbar. Würstchen und Getränke kaufen wir zusammen ein, jeder Haushalt gibt 10 Euro.'],
          ['f1', 'In Ordnung. Und Tische und Bänke?'],
          ['m1', 'Die leiht uns der Sportverein. Mein Sohn holt sie am Vormittag mit dem Transporter.'],
          ['f1', 'Gut. Das Geld bringe ich Ihnen heute Abend vorbei.'],
        ],
        items: [
          { n: 16, q: 'Frau Aydemir hat am Tag des Hoffests keine Zeit.', opts: RF, a: 1 },
          { n: 17, q: 'Was bringt Frau Aydemir zum Fest mit?', opts: ['Einen großen Salat.', 'Selbst gebackenes Brot.', 'Tische und Bänke.'], a: 1 },
        ],
      },
    ]),
    part(4, [
      {
        ex: 3,
        audio: [['m1', 'Vor zwei Jahren bin ich in diese Stadt gezogen und kannte niemanden. Dann habe ich angefangen, im Fußballverein die Kindermannschaft zu trainieren, jeden Dienstag und Donnerstag. Heute sind die anderen Trainer und viele Eltern meine Freunde. Wir grillen zusammen und feiern Geburtstage. Ohne den Verein wäre ich hier ziemlich allein.']],
        items: [],
      },
      {
        audio: [['f1', 'Ich lese jeden Mittwoch im Seniorenheim vor, eine Stunde lang. Die alten Leute warten schon auf mich. Wenn ich sehe, wie sie lachen und wie glücklich sie sind, dann geht es mir selbst auch gut. Ich bekomme dafür kein Geld, und ich will auch keins. Dieses Lächeln ist für mich genug.']],
        items: [{ n: 18, q: '', opts: AF, a: 4 }],
      },
      {
        audio: [['m2', 'Als ich vor acht Jahren nach Deutschland kam, konnte ich kein Wort Deutsch. Ein Rentner aus der Nachbarschaft ist mit mir zu den Ämtern gegangen und hat mir alle Briefe erklärt. Das habe ich nie vergessen. Deshalb begleite ich heute selbst neue Familien zum Amt und übersetze für sie. Ich möchte etwas zurückgeben.']],
        items: [{ n: 19, q: '', opts: AF, a: 0 }],
      },
      {
        audio: [['f2', 'Ich finde es toll, wenn Menschen anderen helfen. Früher habe ich selbst bei der Tafel Lebensmittel verteilt. Aber jetzt arbeite ich voll, habe drei Kinder und pflege noch meine Mutter. Abends falle ich nur noch ins Bett. Vielleicht mache ich später wieder etwas, wenn die Kinder größer sind.']],
        items: [{ n: 20, q: '', opts: AF, a: 2 }],
      },
    ], {
      topic: 'Thema: Ehrenamt – anderen helfen, ja oder nein?',
      stmts: [
        'Ich helfe, weil mir früher auch jemand geholfen hat.',
        'Für meine Hilfe möchte ich etwas Geld bekommen.',
        'Für ein Ehrenamt habe ich im Moment keine Zeit.',
        'Durch das Ehrenamt habe ich neue Leute kennengelernt.',
        'Ich helfe gern, weil sich die anderen so darüber freuen.',
        'Ein Ehrenamt ist gut für den Beruf.',
      ],
    }),
  ],
};
