import { part, RF, AF } from './fmt.js';

export default {
  id: 'h14', title: 'Variante 4', about: 'Elternsprechtag, Fähre, Autohaus, Stadtverwaltung · Nebel, Tunnel, Gartencenter, Weihnachtsmarkt, Stromabschaltung · Handyvertrag, neue Kollegin, Makler, Fußballverein · Teilzeit oder Vollzeit arbeiten?',
  parts: [
    part(1, [
      {
        audio: [['f1', 'Guten Tag, Herr Ramírez, hier ist Frau Engel vom Sekretariat der Schule am Mühlbach. Es geht um den Elternsprechtag am Donnerstag. Sie hatten sich für 17 Uhr 30 bei Frau Wolter eingetragen. Leider ist Frau Wolter an diesem Tag auf einer Fortbildung. Das Gespräch übernimmt deshalb Herr Stein, der Ihre Tochter in Englisch unterrichtet, und zwar zur gleichen Zeit, aber nicht im Klassenzimmer, sondern in Raum 2 0 4. Falls Sie lieber mit Frau Wolter selbst sprechen möchten, rufen Sie bitte bis Mittwoch an, dann suchen wir einen Termin in der nächsten Woche. Auf Wiederhören.']],
        items: [{ n: 1, q: 'Was wird Herrn Ramírez mitgeteilt?', opts: ['Er spricht am Donnerstag mit einer anderen Lehrkraft als geplant.', 'Das Gespräch am Donnerstag beginnt später als 17 Uhr 30.', 'Der Elternsprechtag wird auf die nächste Woche verschoben.'], a: 0 }],
      },
      {
        audio: [['m1', 'Liebe Fahrgäste, herzlich willkommen an Bord der Fähre nach Sandholm. Wegen des starken Windes dauert die Überfahrt heute nicht 40 Minuten, sondern etwa eine Stunde. Wir legen also voraussichtlich gegen 11 Uhr 15 an. Das obere Deck bleibt aus Sicherheitsgründen geschlossen, das Restaurant im unteren Deck ist dagegen wie immer geöffnet. Fahrgäste mit Auto werden gebeten, während der Fahrt nicht im Wagen zu bleiben. Bitte gehen Sie erst dann zu Ihrem Fahrzeug zurück, wenn Sie dazu aufgefordert werden. Wir wünschen Ihnen trotz des Wetters eine angenehme Fahrt.']],
        items: [{ n: 2, q: 'Was erfahren die Fahrgäste?', opts: ['Das Restaurant bleibt wegen des Windes geschlossen.', 'Die Fähre kommt 40 Minuten später an.', 'Die Reise ist heute länger als sonst.'], a: 2 }],
      },
      {
        audio: [['f1', 'Guten Tag, Frau Lindqvist, Autohaus Reinhardt, Schuster am Apparat. Ihr Wagen ist leider noch nicht fertig. Das Ersatzteil, das eigentlich heute kommen sollte, wird erst am Freitag geliefert. Abholen können Sie das Auto also frühestens am Montag. Damit Sie in der Zwischenzeit mobil sind, stellen wir Ihnen gern einen Ersatzwagen zur Verfügung. Der kostet Sie nichts, nur das Benzin müssten Sie selbst bezahlen. Sie könnten ihn heute bis 18 Uhr oder morgen ab 7 Uhr 30 bei uns holen. Bringen Sie dafür bitte unbedingt Ihren Führerschein mit. Vielen Dank für Ihr Verständnis.']],
        items: [{ n: 3, q: 'Was bietet das Autohaus Frau Lindqvist an?', opts: ['Sie bekommt ihr Auto schon am Freitag zurück.', 'Sie darf ein anderes Fahrzeug benutzen, ohne dafür Miete zu zahlen.', 'Das Autohaus bezahlt auch das Benzin für den Ersatzwagen.'], a: 1 }],
      },
      {
        audio: [['m1', 'Guten Tag, Sie sind mit der Stadtverwaltung Altenau verbunden. Leider rufen Sie außerhalb unserer Sprechzeiten an. Telefonisch sind wir montags bis freitags von 8 bis 12 Uhr erreichbar, donnerstags zusätzlich von 14 bis 18 Uhr. Bitte beachten Sie: Das Bürgerbüro ist umgezogen und befindet sich nicht mehr im Rathaus, sondern im Gebäude der alten Post in der Bahnhofstraße 9. Persönlich können Sie dort nur mit Termin vorsprechen. Termine werden nicht am Telefon vergeben, sondern ausschließlich über unsere Internetseite. Vielen Dank für Ihren Anruf.']],
        items: [{ n: 4, q: 'Wie bekommt man einen Termin im Bürgerbüro?', opts: ['Man ruft donnerstags am Nachmittag an.', 'Man fragt persönlich im Rathaus nach.', 'Man bucht ihn online.'], a: 2 }],
      },
    ]),
    part(2, [
      {
        audio: [['f1', 'Das Wetter für heute und morgen. Am Morgen liegt in den Tälern und entlang des Flusses dichter Nebel, die Sicht beträgt dort teilweise unter 50 Meter. Im Laufe des Vormittags löst sich der Nebel langsam auf, und am Nachmittag scheint fast überall die Sonne bei 9 bis 12 Grad. Nur am Fluss bleibt es den ganzen Tag grau und mit 5 Grad deutlich kälter. In der Nacht bildet sich erneut Nebel, und auf Brücken kann es glatt werden. Morgen ändert sich wenig, erst am Donnerstag kommt Regen.']],
        items: [{ n: 5, q: 'Wie wird das Wetter heute Nachmittag?', opts: ['Überall bleibt es grau und neblig.', 'In den meisten Gebieten wird es freundlich.', 'Es regnet bei 9 bis 12 Grad.'], a: 1 }],
      },
      {
        audio: [['m1', 'Und nun der Verkehr. Der Lindbergtunnel auf der Bundesstraße 27 ist nach einem Unfall mit einem Lastwagen in beiden Richtungen voll gesperrt. Die Arbeiten an der Unfallstelle dauern voraussichtlich bis 16 Uhr. Autofahrer in Richtung Süden werden ab der Ausfahrt Hohenfeld über die Landstraße umgeleitet, dort müssen Sie mit etwa 30 Minuten mehr rechnen. In Richtung Norden gibt es keine Umleitung, hier staut sich der Verkehr bereits auf 8 Kilometern. Wer kann, sollte die Fahrt auf den Abend verschieben. Wir informieren Sie, sobald der Tunnel wieder frei ist.']],
        items: [{ n: 6, q: 'Was erfahren Autofahrer, die nach Norden unterwegs sind?', opts: ['Sie werden über die Landstraße umgeleitet.', 'Für sie ist der Tunnel noch geöffnet.', 'Für sie ist kein anderer Weg ausgeschildert.'], a: 2 }],
      },
      {
        audio: [['f1', 'Der Frühling ist da, und Ihr Balkon sieht noch nach Winter aus? Dann wird es Zeit für einen Besuch im Gartencenter Grünwald! Bis Samstag erhalten Sie alle Balkonpflanzen zum halben Preis, und Kräuter gibt es schon ab 1 Euro 50. Wer drei Säcke Blumenerde kauft, bezahlt nur zwei. Sie wissen nicht, was auf Ihrem Balkon gut wächst? Unsere Gärtnerinnen beraten Sie gern, am Samstag sogar in einem kostenlosen Kurs um 11 Uhr. Dafür ist allerdings eine Anmeldung nötig, denn die Plätze sind begrenzt. Gartencenter Grünwald, direkt an der Ringstraße.']],
        items: [{ n: 7, q: 'Was erfährt man über das Angebot?', opts: ['Am Kurs kann man nicht einfach spontan teilnehmen.', 'Blumenerde kostet diese Woche die Hälfte.', 'Für den Kurs am Samstag muss man 1 Euro 50 bezahlen.'], a: 0 }],
      },
      {
        audio: [['m1', 'Unser Veranstaltungstipp: Am Freitag wird der Weihnachtsmarkt in der Altstadt eröffnet. Anders als in den letzten Jahren stehen die Buden nicht nur auf dem Domplatz, sondern auch im Schlosshof, wo es eine Eisbahn für Kinder gibt. Geöffnet ist täglich von 11 bis 21 Uhr, freitags und samstags eine Stunde länger. Glühwein und Punsch werden nur noch in Tassen ausgeschenkt, für die man 3 Euro Pfand bezahlt. Und für alle, die Geschenke suchen: Die Handwerker im Schlosshof sind nur an den Wochenenden da, unter der Woche bleiben ihre Stände geschlossen.']],
        items: [{ n: 8, q: 'Was erfahren Sie über den Weihnachtsmarkt?', opts: ['Er findet dieses Jahr im Schlosshof statt und nicht mehr auf dem Domplatz.', 'Handwerksprodukte kann man dort nicht an jedem Tag kaufen.', 'Am Samstag schließt er um 21 Uhr.'], a: 1 }],
      },
      {
        audio: [['f1', 'Eine Information der Stadtwerke Marienthal: Wegen Arbeiten am Stromnetz wird am kommenden Dienstag in der Nordstadt der Strom abgeschaltet. Betroffen sind alle Haushalte zwischen der Schillerstraße und dem Kanal, und zwar von 9 bis etwa 13 Uhr. Eigentlich waren die Arbeiten für Montag geplant, sie mussten aber um einen Tag verschoben werden. Bitte schalten Sie empfindliche Geräte wie Computer vorher aus. Kühlschränke sollten in dieser Zeit möglichst nicht geöffnet werden, dann bleiben die Lebensmittel kalt. Das Krankenhaus und das Altenheim in der Nordstadt werden weiter versorgt.']],
        items: [{ n: 9, q: 'Was sollen die Bewohner der Nordstadt tun?', opts: ['Den Kühlschrank am Dienstagvormittag geschlossen halten.', 'Am Montag ihre Computer ausschalten.', 'Die Lebensmittel vorher aus dem Kühlschrank nehmen.'], a: 0 }],
      },
    ]),
    part(3, [
      {
        who: { m1: 'Verkäufer', f1: 'Frau Dimitrova' },
        audio: [
          ['m1', 'Guten Tag, was kann ich für Sie tun?'],
          ['f1', 'Guten Tag. Ich möchte meinen Handyvertrag kündigen. Ich zahle jeden Monat 35 Euro, und das ist mir einfach zu viel geworden.'],
          ['m1', 'Verstehe. Darf ich mal in Ihren Vertrag schauen? Ah ja, der läuft noch bis Ende September. Kündigen können Sie natürlich, aber frühestens zu diesem Datum.'],
          ['f1', 'Also noch vier Monate. Schade. Und die Kündigung, kann ich die gleich hier bei Ihnen unterschreiben?'],
          ['m1', 'Im Laden nehmen wir leider keine Kündigungen an. Das geht nur schriftlich, per Brief oder über das Kundenkonto im Internet.'],
          ['f1', 'Das ist ja umständlich.'],
          ['m1', 'Darf ich Ihnen etwas anderes vorschlagen? Wir haben einen kleineren Tarif für 15 Euro. In den könnten Sie schon ab nächstem Monat wechseln, ohne zu warten. Sie hätten allerdings weniger Datenvolumen.'],
          ['f1', 'Das Internet benutze ich unterwegs sowieso kaum. Aber verlängert sich der Vertrag dann wieder um zwei Jahre?'],
          ['m1', 'Nein, den neuen Tarif können Sie jeden Monat kündigen.'],
          ['f1', 'Das klingt vernünftig. Dann machen wir das so, und die Kündigung lasse ich erst einmal.'],
          ['m1', 'Gern. Ich brauche dann nur Ihren Ausweis und eine Unterschrift.'],
        ],
        items: [
          { n: 10, q: 'Frau Dimitrova will kündigen, weil ihr Handy unterwegs schlecht funktioniert.', opts: RF, a: 1 },
          { n: 11, q: 'Wofür entscheidet sich Frau Dimitrova?', opts: ['Sie kündigt schriftlich für Ende September.', 'Sie behält ihren Vertrag für 35 Euro noch zwei Jahre.', 'Sie nimmt ein günstigeres Angebot derselben Firma.'], a: 2 },
        ],
      },
      {
        who: { m1: 'Herr Aydin', f1: 'Frau Sommer' },
        audio: [
          ['m1', 'So, Frau Sommer, herzlich willkommen bei uns an der Rezeption. Ich zeige Ihnen heute erst einmal alles.'],
          ['f1', 'Vielen Dank, Herr Aydin. Ich war ja schon in einem Hotel angestellt, aber das war viel kleiner als dieses hier.'],
          ['m1', 'Dann kennen Sie das meiste ja schon. Unser Buchungsprogramm ist allerdings neu, das erkläre ich Ihnen gleich nach der Pause in Ruhe.'],
          ['f1', 'Gut. Und wie sind meine Arbeitszeiten?'],
          ['m1', 'Eigentlich wechseln wir zwischen Frühdienst und Spätdienst. In den ersten zwei Wochen arbeiten Sie aber nur früh, von 6 bis 14 Uhr 30, zusammen mit mir. Danach stehen Sie ganz normal im Plan.'],
          ['f1', 'Und Nachtdienst?'],
          ['m1', 'Den machen nur zwei feste Kollegen, darum müssen Sie sich nicht kümmern.'],
          ['f1', 'Da bin ich ehrlich gesagt froh. Wo kann ich meine Sachen lassen?'],
          ['m1', 'Im Personalraum im Keller hat jeder einen Schrank. Den Schlüssel dafür bekommen Sie beim Hausmeister, aber der ist erst ab 10 Uhr da. So lange können Sie Ihre Tasche hier ins Büro stellen.'],
          ['f1', 'Alles klar. Und die Kleidung?'],
          ['m1', 'Die Bluse bekommen Sie von uns, eine dunkle Hose bringen Sie bitte selbst mit.'],
        ],
        items: [
          { n: 12, q: 'Für Frau Sommer ist die Arbeit in einem Hotel ganz neu.', opts: RF, a: 1 },
          { n: 13, q: 'Wie arbeitet Frau Sommer am Anfang?', opts: ['Abwechselnd im Frühdienst und im Spätdienst.', 'Immer in derselben Schicht, gemeinsam mit einem erfahrenen Kollegen.', 'Zwei Wochen lang im Nachtdienst.'], a: 1 },
        ],
      },
      {
        who: { m1: 'Makler', f1: 'Frau Jovanović' },
        audio: [
          ['m1', 'Immobilien Falk, guten Tag.'],
          ['f1', 'Guten Tag, Jovanović. Ich rufe wegen der Dreizimmerwohnung in der Uferstraße an. Ist die noch frei?'],
          ['m1', 'Ja, die ist noch zu haben. Darf ich fragen, für wie viele Personen Sie suchen?'],
          ['f1', 'Für meinen Mann, unsere Tochter und mich. Im Moment wohnen wir in zwei Zimmern, und das wird langsam zu eng, weil im Herbst unser zweites Kind kommt.'],
          ['m1', 'Verstehe. Die Wohnung hat 78 Quadratmeter und liegt im dritten Stock. Einen Aufzug gibt es allerdings nicht.'],
          ['f1', 'Hm, mit Kinderwagen ist das nicht ideal. Und die Miete? In der Anzeige stand 820 Euro.'],
          ['m1', 'Das ist die Kaltmiete. Mit Nebenkosten kommen Sie auf ungefähr 1040 Euro.'],
          ['f1', 'Das ist mehr, als wir geplant hatten. Aber die Lage wäre perfekt, die Schule ist ja gleich nebenan.'],
          ['m1', 'Ich hätte noch eine ähnliche Wohnung im Erdgeschoss, die ist etwas günstiger. Sie liegt aber am Stadtrand.'],
          ['f1', 'Nein, danke, wir möchten im Viertel bleiben. Könnten wir die Wohnung in der Uferstraße besichtigen?'],
          ['m1', 'Gern. Ich hätte Mittwoch um 17 Uhr oder Samstag um 10 Uhr.'],
          ['f1', 'Mittwochs arbeitet mein Mann lange. Samstag passt uns besser.'],
          ['m1', 'Gut. Bringen Sie bitte Ihre letzten drei Gehaltsabrechnungen mit.'],
        ],
        items: [
          { n: 14, q: 'Die Familie braucht mehr Platz, weil sie bald zu viert ist.', opts: RF, a: 0 },
          { n: 15, q: 'Was vereinbaren Frau Jovanović und der Makler?', opts: ['Die Familie schaut sich die Wohnung am Wochenende an.', 'Sie besichtigen am Mittwoch die Wohnung im Erdgeschoss.', 'Frau Jovanović schickt zuerst ihre Gehaltsabrechnungen.'], a: 0 },
        ],
      },
      {
        who: { f1: 'Trainerin', m1: 'Herr Idrissi' },
        audio: [
          ['f1', 'Herr Idrissi, haben Sie einen Moment? Ich würde gern kurz mit Ihnen über Samir sprechen.'],
          ['m1', 'Natürlich, Frau Brandt. Hat er etwas angestellt?'],
          ['f1', 'Nein, im Gegenteil. Er spielt wirklich gut, und ich würde ihn gern in die erste Mannschaft holen. Allerdings hat er in letzter Zeit oft beim Training gefehlt.'],
          ['m1', 'Ja, das stimmt leider. Dienstags hat er jetzt Nachmittagsunterricht bis 16 Uhr 30, und das Training beginnt ja schon um 17 Uhr. Mit dem Bus schafft er das nicht.'],
          ['f1', 'Ach so, das wusste ich nicht. Ich dachte schon, er hätte keine Lust mehr.'],
          ['m1', 'Doch, er ist ganz traurig darüber. Ich kann ihn leider auch nicht fahren, weil ich bis 18 Uhr arbeite.'],
          ['f1', 'Die erste Mannschaft trainiert dienstags erst um 18 Uhr und zusätzlich am Donnerstag. Das würde doch besser passen, oder?'],
          ['m1', 'Dienstag ja. Donnerstags geht er eigentlich zur Nachhilfe in Mathe, aber die könnten wir vielleicht auf Montag legen. Das müsste ich erst mit der Lehrerin klären.'],
          ['f1', 'Machen Sie das in Ruhe. Am Samstag ist das Turnier in Rosenfeld, da soll er auf jeden Fall schon mitspielen.'],
          ['m1', 'Da freut er sich bestimmt. Ich sage Ihnen bis Ende der Woche Bescheid.'],
        ],
        items: [
          { n: 16, q: 'Samir konnte wegen der Schule oft nicht rechtzeitig auf dem Sportplatz sein.', opts: RF, a: 0 },
          { n: 17, q: 'Was will Herr Idrissi tun?', opts: ['Samir dienstags mit dem Auto zum Training fahren.', 'Samir für das Turnier am Samstag abmelden.', 'Nachfragen, ob der Zusatzunterricht an einem anderen Tag stattfinden kann.'], a: 2 },
        ],
      },
    ]),
    part(4, [
      {
        ex: 2,
        audio: [['f1', 'Ich bin Krankenpflegerin und habe früher voll gearbeitet. Das Geld war natürlich besser, das merke ich jetzt schon. Aber seit unser Sohn in die Schule geht, bin ich nur noch 25 Stunden pro Woche in der Klinik. So kann ich ihn mittags abholen, wir essen zusammen, und ich helfe ihm bei den Hausaufgaben. Mein Mann und ich haben das so entschieden, und ich bereue es nicht. Diese Jahre kommen ja nicht wieder.']],
        items: [],
      },
      {
        audio: [['m1', 'Ich war zwanzig Jahre lang Koch, immer sechzig Stunden die Woche, oft auch am Wochenende. Der Beruf macht mir Spaß, und das Gehalt war in Ordnung. Aber vor zwei Jahren hatte ich starke Probleme mit dem Rücken und konnte kaum noch schlafen. Mein Arzt hat gesagt, so geht es nicht weiter. Jetzt arbeite ich nur noch vier Tage, und es geht mir viel besser. Weniger Geld ist nicht schön, aber krank sein ist schlimmer.']],
        items: [{ n: 18, q: '', opts: AF, a: 5 }],
      },
      {
        audio: [['f2', 'Als meine Kinder klein waren, war die halbe Stelle im Büro ideal für mich. Inzwischen sind beide aus dem Haus, und ich hätte Zeit und Lust, wieder dreißig oder vierzig Stunden zu arbeiten. Ich habe schon zweimal mit meiner Chefin gesprochen. Sie sagt aber jedes Mal, dass es in der Abteilung im Moment keine volle Stelle gibt. Vielleicht muss ich mir doch etwas anderes suchen, obwohl ich die Kolleginnen sehr mag.']],
        items: [{ n: 19, q: '', opts: AF, a: 3 }],
      },
      {
        audio: [['m2', 'Viele meiner Freunde arbeiten nur noch dreißig Stunden und sagen, das Leben ist so viel schöner. Das glaube ich ihnen sogar. Ich bleibe trotzdem bei meinen vierzig Stunden in der Werkstatt. Ich habe nämlich ausgerechnet, was ich mit einer kleineren Stelle im Alter bekommen würde, und das würde kaum für die Miete reichen. Mit 67 möchte ich nicht zum Amt gehen müssen. Freie Zeit habe ich dann später noch genug.']],
        items: [{ n: 20, q: '', opts: AF, a: 0 }],
      },
    ], {
      topic: 'Thema: Teilzeit oder Vollzeit arbeiten?',
      stmts: [
        'Ich arbeite voll, damit ich später als Rentner genug Geld habe.',
        'In Teilzeit hat man schlechtere Chancen auf eine bessere Position.',
        'Ich arbeite weniger, damit ich mehr Zeit für die Familie habe.',
        'Ich würde gern mehr arbeiten, aber bei meinem Arbeitgeber ist das nicht möglich.',
        'Wer in Teilzeit arbeitet, muss oft trotzdem die gleiche Arbeit schaffen.',
        'Ich habe meine Stunden reduziert, weil mir meine Gesundheit wichtiger ist.',
      ],
    }),
  ],
};
