import { part, RF, AF } from './fmt.js';

export default {
  id: 'h13', title: 'Variante 3', about: 'Zahnklinik, Flugsteig, Umzugsfirma, Feueralarm · Hitzewelle, Demonstration, Elektromarkt, Stadtteilfest, Sperrmüll · Weiterbildung, Geburtstagsfeier, Internetanschluss, Überweisung · Das Smartphone im Alltag',
  parts: [
    part(1, [
      {
        audio: [['f1', 'Guten Tag, Herr Marković, hier spricht Frau Seidel von der Zahnklinik am Lindenpark. Es geht um den Kostenvoranschlag für Ihre Krone. Eigentlich wollten wir ihn Ihnen per Post schicken, aber er liegt jetzt bei uns am Empfang zur Abholung bereit, denn Sie müssen ihn noch unterschreiben. Danach reichen Sie ihn bitte selbst bei Ihrer Krankenkasse ein. Erst wenn die Kasse zugestimmt hat, können wir mit der Behandlung beginnen. Den Termin am 12. Mai müssen wir deshalb wahrscheinlich verschieben. Sie erreichen uns bis 17 Uhr unter 5 5 5, 0 1, 4 8. Auf Wiederhören.']],
        items: [{ n: 1, q: 'Was muss Herr Marković zuerst tun?', opts: ['Warten, bis der Kostenvoranschlag mit der Post kommt.', 'Die Krankenkasse wegen des Termins am 12. Mai anrufen.', 'Persönlich in der Klinik vorbeigehen.'], a: 2 }],
      },
      {
        audio: [['m1', 'Sehr geehrte Fluggäste, bitte beachten Sie eine Änderung für den Flug 4 7 2 nach Lissabon. Das Einsteigen findet nicht wie angezeigt am Flugsteig B 14 statt, sondern am Flugsteig B 41. Die Abflugzeit bleibt unverändert bei 13 Uhr 20, das Einsteigen beginnt allerdings erst um 12 Uhr 50, also zehn Minuten später als geplant. Fluggäste mit kleinen Kindern werden zuerst aufgerufen. Da die Maschine ausgebucht ist, darf nur ein Handgepäckstück mit in die Kabine genommen werden. Weitere Taschen werden am Flugsteig kostenlos aufgegeben.']],
        items: [{ n: 2, q: 'Was ändert sich für die Fluggäste?', opts: ['Sie müssen zu einem anderen Ausgang gehen.', 'Das Flugzeug startet zehn Minuten später.', 'Für eine zweite Tasche muss man am Flugsteig bezahlen.'], a: 0 }],
      },
      {
        audio: [['m1', 'Guten Tag, Frau Adeyemi, hier ist Krause von der Umzugsfirma Hollmann. Ich rufe wegen Ihres Umzugs am Samstag an. Wir kommen nicht um 8 Uhr, wie besprochen, sondern schon um 7 Uhr, weil der Wagen am Nachmittag noch gebraucht wird. Die Kartons müssen Sie nicht selbst hinuntertragen, das machen meine Kollegen. Wichtig wäre aber, dass vor dem Eingang Platz für den Lastwagen ist. Könnten Sie bitte Ihre Nachbarn fragen, ob sie am Samstagmorgen woanders parken? Sonst müssen wir weit weg stehen, und das kostet extra. Vielen Dank und bis Samstag.']],
        items: [{ n: 3, q: 'Worum bittet Herr Krause?', opts: ['Die Kartons schon vor den Eingang zu stellen.', 'Dafür zu sorgen, dass der Lastwagen direkt am Haus halten kann.', 'Den Umzug auf den Nachmittag zu verschieben.'], a: 1 }],
      },
      {
        audio: [['f1', 'Achtung, eine Durchsage an alle Mitarbeiterinnen und Mitarbeiter. Morgen, am Mittwoch, wird um 10 Uhr 15 unser Feueralarm geprüft. Es handelt sich nur um eine Probe. Trotzdem müssen alle das Gebäude verlassen, auch die Kolleginnen und Kollegen im Lager. Benutzen Sie bitte die Treppen und nicht die Aufzüge. Wir treffen uns nicht wie im letzten Jahr auf dem Parkplatz, sondern auf der Wiese hinter der Kantine. Maschinen werden vorher ausgeschaltet, Computer dürfen anbleiben. Erst wenn die Abteilungsleiter das Zeichen geben, gehen Sie bitte wieder an Ihren Arbeitsplatz. Vielen Dank.']],
        items: [{ n: 4, q: 'Was sollen die Beschäftigten morgen tun?', opts: ['Nach draußen gehen, obwohl es nicht wirklich brennt.', 'Sich auf dem Parkplatz treffen.', 'Vor der Probe ihre Computer ausschalten.'], a: 0 }],
      },
    ]),
    part(2, [
      {
        audio: [['f1', 'Und nun das Wetter. Die Hitze bleibt uns noch erhalten: Heute werden bis zu 34 Grad erreicht, morgen sogar 36. In den Nächten kühlt es kaum ab, die Temperaturen sinken nur auf etwa 22 Grad. Erst am Freitag ziehen von Westen Gewitter heran, die aber zunächst nur das Bergland erreichen. Bei uns in der Region bleibt es bis Samstagabend trocken und heiß. Am Sonntag wird es dann mit 25 Grad deutlich angenehmer. Die Stadt bittet darum, wegen der Trockenheit im Wald und in den Parks nicht zu grillen.']],
        items: [{ n: 5, q: 'Was sagt der Wetterbericht für die Region?', opts: ['Am Freitag gibt es hier Gewitter.', 'Morgen ist es nicht mehr so heiß wie heute.', 'Die Hitze geht erst am Ende des Wochenendes zurück.'], a: 2 }],
      },
      {
        audio: [['m1', 'Die Verkehrsmeldungen. Wegen einer Demonstration ist die Innenstadt heute zwischen 14 und 18 Uhr für Autos gesperrt. Betroffen sind der Rathausplatz und die Königstraße bis zum Hauptbahnhof. Die Parkhäuser am Markt können in dieser Zeit weder angefahren noch verlassen werden. Die Straßenbahnlinien 2 und 5 fahren nicht durch das Zentrum, sondern enden am Nordplatz. Nur die U-Bahn verkehrt wie gewohnt. Wer heute Nachmittag in die Innenstadt muss, sollte also am besten das Auto am Stadtrand stehen lassen. Auf dem Ring ist außerdem mit Stau zu rechnen.']],
        items: [{ n: 6, q: 'Was erfahren Autofahrer?', opts: ['Wer sein Auto im Zentrum im Parkhaus abgestellt hat, kann am Nachmittag nicht wegfahren.', 'Die Straßenbahnen 2 und 5 fallen heute ganz aus.', 'Auf dem Ring dürfen bis 18 Uhr keine Autos fahren.'], a: 0 }],
      },
      {
        audio: [['f1', 'Ihr Fernseher bleibt schwarz, oder die Waschmaschine macht komische Geräusche? Werfen Sie Ihre Geräte nicht gleich weg! Bei Elektro Sandner in der Gartenstraße gibt es jetzt eine eigene Werkstatt. Wir schauen uns jedes Gerät an und sagen Ihnen, was die Reparatur kosten würde. Diese Prüfung kostet 25 Euro. Wenn Sie das Gerät dann bei uns reparieren lassen, wird dieser Betrag von der Rechnung abgezogen. Große Geräte holen wir für 15 Euro bei Ihnen zu Hause ab. Und auf jede Reparatur bekommen Sie ein Jahr Garantie. Elektro Sandner, wir machen das wieder ganz.']],
        items: [{ n: 7, q: 'Was erfährt man über die Prüfung der Geräte?', opts: ['Sie ist für alle Kunden kostenlos.', 'Sie kostet 15 Euro und wird zu Hause gemacht.', 'Man bezahlt sie am Ende nicht extra, wenn man den Auftrag gibt.'], a: 2 }],
      },
      {
        audio: [['m1', 'Unser Tipp für das Wochenende: In der Südstadt wird gefeiert! Das Stadtteilfest findet in diesem Jahr nicht auf dem Marktplatz statt, sondern wegen der Baustelle im Hof der Grundschule in der Weberstraße. Los geht es am Samstag um 14 Uhr mit einem Flohmarkt, ab 17 Uhr spielen Bands aus dem Viertel. Essen und Getränke verkaufen die Vereine, der Eintritt ist frei. Wer beim Flohmarkt selbst etwas verkaufen möchte, muss sich allerdings bis Donnerstag im Stadtteilbüro anmelden. Ein Tisch kostet 5 Euro. Kuchenspenden sind herzlich willkommen.']],
        items: [{ n: 8, q: 'Was erfahren Sie über das Stadtteilfest?', opts: ['Es wird diesmal an einem anderen Ort gefeiert.', 'Für den Besuch des Flohmarkts muss man sich anmelden.', 'Die Bands spielen schon ab 14 Uhr.'], a: 0 }],
      },
      {
        audio: [['f1', 'Aus der Region: Ab dem 1. Juli gelten in Neuburg neue Regeln für den Sperrmüll. Bisher wurden alte Möbel viermal im Jahr an festen Tagen abgeholt. Diese Termine fallen weg. Stattdessen muss man die Abholung künftig selbst bestellen, telefonisch oder im Internet. Einmal im Jahr ist das für jeden Haushalt kostenlos, jede weitere Abholung kostet 20 Euro. Die Sachen dürfen erst am Abend vorher an die Straße gestellt werden. Elektrogeräte werden weiterhin nicht mitgenommen, sie müssen zum Wertstoffhof gebracht werden.']],
        items: [{ n: 9, q: 'Was ist ab Juli neu?', opts: ['Der Sperrmüll wird nur noch viermal im Jahr abgeholt.', 'Alte Möbel werden nur noch mitgenommen, wenn man vorher einen Termin ausmacht.', 'Auch Elektrogeräte werden jetzt an der Straße abgeholt.'], a: 1 }],
      },
    ]),
    part(3, [
      {
        who: { f1: 'Beraterin', m1: 'Herr Petrov' },
        audio: [
          ['f1', 'Guten Tag, Herr Petrov, nehmen Sie doch Platz. Sie interessieren sich für eine Weiterbildung, habe ich gelesen.'],
          ['m1', 'Ja, genau. Ich arbeite seit drei Jahren als Helfer im Lager, aber ich würde gern Berufskraftfahrer werden. In meiner Heimat bin ich schon Lastwagen gefahren.'],
          ['f1', 'Das ist eine gute Idee, Fahrer werden ja überall gesucht. Wird Ihr Führerschein hier anerkannt?'],
          ['m1', 'Leider nur der für das Auto. Den für den Lastwagen müsste ich neu machen, und das ist sehr teuer.'],
          ['f1', 'Die Kosten können wir übernehmen. Es gibt einen Kurs in Vollzeit, der sechs Monate dauert, und einen am Abend, der dauert ein Jahr.'],
          ['m1', 'Am Abend wäre mir eigentlich lieber, dann könnte ich weiter arbeiten. Aber ein ganzes Jahr ist lang.'],
          ['f1', 'Beim Vollzeitkurs zahlt der Arbeitgeber oft den Lohn weiter, und wir geben der Firma Geld dazu. Fragen Sie doch mal Ihren Chef.'],
          ['m1', 'Das wusste ich nicht. Dann spreche ich zuerst mit ihm, bevor ich mich entscheide. Was brauchen Sie noch von mir?'],
          ['f1', 'Heute nichts. Den Antrag stellen wir, sobald Sie wissen, welchen Kurs Sie machen. Ich gebe Ihnen die Liste der Schulen mit.'],
          ['m1', 'Vielen Dank, dann melde ich mich nächste Woche.'],
        ],
        items: [
          { n: 10, q: 'Herr Petrov hat bereits Erfahrung in dem Beruf, den er lernen möchte.', opts: RF, a: 0 },
          { n: 11, q: 'Was macht Herr Petrov als Nächstes?', opts: ['Er meldet sich für den Kurs am Abend an.', 'Er stellt den Antrag, damit die Kosten übernommen werden.', 'Er klärt mit seinem Vorgesetzten, ob der kürzere Kurs möglich ist.'], a: 2 },
        ],
      },
      {
        who: { f1: 'Marta', m1: 'Jonas' },
        audio: [
          ['f1', 'Jonas, wir müssen endlich über den Geburtstag deiner Mutter reden. Sie wird siebzig, und das ist schon in drei Wochen.'],
          ['m1', 'Ich weiß. Ich dachte, wir reservieren einen Tisch im Restaurant am See, da hat es ihr letztes Mal doch so gut gefallen.'],
          ['f1', 'Schon, aber mit zwanzig Personen wird das ziemlich teuer. Und deine Mutter hat gesagt, dass sie keine große Feier will.'],
          ['m1', 'Das sagt sie jedes Jahr, und dann freut sie sich doch. Wir könnten bei uns im Garten feiern, falls das Wetter mitspielt.'],
          ['f1', 'Und wenn es regnet? In unsere Wohnung passen keine zwanzig Leute. Was hältst du vom Vereinsheim, wo dein Bruder Fußball spielt? Den Raum kann man für 80 Euro mieten.'],
          ['m1', 'Stimmt, da ist auch eine Küche. Aber wer kocht dann für alle?'],
          ['f1', 'Niemand. Jeder bringt etwas mit, einen Salat oder einen Kuchen, und wir kümmern uns nur um die Getränke.'],
          ['m1', 'Na gut, so machen wir es. Soll ich meinen Bruder wegen des Raums anrufen?'],
          ['f1', 'Ja, mach das bitte gleich heute. Ich schreibe inzwischen die Einladungen. Aber deiner Mutter sagen wir nichts, sie soll erst an dem Tag davon erfahren.'],
          ['m1', 'Einverstanden.'],
        ],
        items: [
          { n: 12, q: 'Die beiden bereiten ein Fest vor, das für das Geburtstagskind eine Überraschung sein soll.', opts: RF, a: 0 },
          { n: 13, q: 'Wo wird gefeiert?', opts: ['Im Restaurant am See.', 'In einem Raum des Sportvereins.', 'Im Garten, wenn das Wetter gut ist.'], a: 1 },
        ],
      },
      {
        who: { f1: 'Mitarbeiterin', m1: 'Herr Castillo' },
        audio: [
          ['f1', 'Kundenservice Netzwerk Nord, mein Name ist Lindner, was kann ich für Sie tun?'],
          ['m1', 'Guten Tag, Castillo hier. Mein Internet funktioniert seit Montag nicht richtig. Abends bricht die Verbindung ständig ab, und ich arbeite doch oft von zu Hause.'],
          ['f1', 'Das tut mir leid. Haben Sie das Gerät schon einmal aus- und wieder eingeschaltet?'],
          ['m1', 'Ja, mehrmals. Ich habe sogar ein neues Kabel gekauft, aber das hat auch nichts gebracht.'],
          ['f1', 'Einen Moment, ich prüfe die Leitung. Also, in Ihrer Straße gibt es keine Störung. Es liegt wahrscheinlich am Gerät selbst, das ist ja schon sechs Jahre alt.'],
          ['m1', 'Und was heißt das jetzt? Muss ich ein neues kaufen?'],
          ['f1', 'Nein, Sie haben es ja nur gemietet. Wir schicken Ihnen ein neues zu, das kostet Sie nichts. Es ist in zwei bis drei Tagen da. Ich könnte auch einen Techniker schicken, aber der hätte erst in zehn Tagen Zeit.'],
          ['m1', 'Nein, so lange möchte ich nicht warten. Das Anschließen schaffe ich schon allein. Bekomme ich für diese Woche eigentlich Geld zurück?'],
          ['f1', 'Ja, wir schreiben Ihnen 10 Euro auf der nächsten Rechnung gut. Das alte Gerät schicken Sie bitte innerhalb von 14 Tagen zurück.'],
          ['m1', 'In Ordnung, vielen Dank.'],
        ],
        items: [
          { n: 14, q: 'Herr Castillo hat vor dem Anruf noch nichts unternommen, um das Problem selbst zu lösen.', opts: RF, a: 1 },
          { n: 15, q: 'Wie wird das Problem gelöst?', opts: ['Ein Techniker kommt in zehn Tagen zu Herrn Castillo.', 'Herr Castillo bekommt Ersatz und installiert ihn ohne Hilfe.', 'Herr Castillo kauft für 10 Euro ein neues Gerät.'], a: 1 },
        ],
      },
      {
        who: { f1: 'Arzthelferin', m1: 'Herr Baumann' },
        audio: [
          ['f1', 'Praxis Doktor Reuter, Sie sprechen mit Frau Hoxha.'],
          ['m1', 'Guten Morgen, Baumann hier. Ich war letzte Woche wegen meiner Knieschmerzen bei Ihnen, und der Doktor meinte, ich soll zum Orthopäden gehen. Dafür brauche ich doch eine Überweisung, oder?'],
          ['f1', 'Ja, richtig. Die hat der Doktor schon ausgestellt, sie liegt hier am Empfang.'],
          ['m1', 'Könnten Sie mir die vielleicht mit der Post schicken? Ich kann im Moment schlecht laufen.'],
          ['f1', 'Das machen wir eigentlich nur, wenn wir von Ihnen einen Briefumschlag mit Briefmarke haben. Aber vielleicht kann jemand sie für Sie abholen?'],
          ['m1', 'Meine Frau arbeitet gleich um die Ecke. Sie könnte heute in der Mittagspause vorbeikommen.'],
          ['f1', 'Heute haben wir von 12 bis 15 Uhr geschlossen. Morgen sind wir aber durchgehend bis 18 Uhr da.'],
          ['m1', 'Gut, dann kommt sie morgen nach der Arbeit. Braucht sie dafür etwas von mir?'],
          ['f1', 'Nein, es reicht, wenn sie Ihren Namen sagt. Haben Sie denn schon einen Termin beim Orthopäden?'],
          ['m1', 'Ja, am Donnerstag in einer Woche. Früher war nichts frei.'],
          ['f1', 'Falls die Schmerzen stärker werden, rufen Sie dort noch einmal an und sagen, dass es dringend ist. Dann geht es oft schneller.'],
          ['m1', 'Danke für den Tipp.'],
        ],
        items: [
          { n: 16, q: 'Herr Baumann ruft in der Praxis an, weil er schneller einen Termin beim Facharzt braucht.', opts: RF, a: 1 },
          { n: 17, q: 'Wie bekommt Herr Baumann die Überweisung?', opts: ['Seine Ehefrau nimmt sie am nächsten Tag mit.', 'Die Praxis schickt sie ihm mit der Post.', 'Seine Frau holt sie heute in der Mittagspause.'], a: 0 },
        ],
      },
    ]),
    part(4, [
      {
        ex: 0,
        audio: [['f1', 'Ehrlich gesagt nervt mich mein Handy manchmal. Aber ich bin alleinerziehend und arbeite im Schichtdienst. Die Termine der Kinder, der Dienstplan, die Einkaufsliste, die Fahrkarte für den Bus, das ist alles in diesem kleinen Gerät. Letztes Jahr war es eine Woche lang kaputt, und ich habe sofort den Elternabend vergessen. Seitdem weiß ich: Ohne geht bei mir fast nichts mehr.']],
        items: [],
      },
      {
        audio: [['m1', 'Natürlich ist so ein Smartphone praktisch, das will ich gar nicht bestreiten. Aber irgendwann habe ich gemerkt, dass ich jeden Abend zwei Stunden lang nur Videos angeschaut habe. Jetzt lege ich das Handy nach dem Abendessen in eine Schublade im Flur und hole es erst morgens wieder heraus. Am Anfang ist mir das schwergefallen, inzwischen lese ich wieder Bücher und schlafe auch besser.']],
        items: [{ n: 18, q: '', opts: AF, a: 3 }],
      },
      {
        audio: [['f2', 'Ich benutze mein Handy gern, zum Beispiel für Fotos oder um den Weg zu finden. Was mir aber nicht gefällt: Mein Chef schreibt mir auch am Wochenende Nachrichten, und meine Freundinnen sind beleidigt, wenn ich nicht innerhalb von zehn Minuten antworte. Früher hat man einfach abends angerufen, und es war in Ordnung, wenn niemand da war. Diese Erwartung finde ich wirklich anstrengend.']],
        items: [{ n: 19, q: '', opts: AF, a: 1 }],
      },
      {
        audio: [['m2', 'Mein Sohn ist neun, und in seiner Klasse haben schon fast alle ein eigenes Handy. Er fragt natürlich jeden Tag danach. Ich verstehe ihn ja, und ich selbst benutze meins auch dauernd. Trotzdem bleiben meine Frau und ich dabei: Vor der siebten Klasse gibt es keins. In dem Alter soll man draußen spielen und Freunde treffen. Telefonieren kann er auch von zu Hause.']],
        items: [{ n: 20, q: '', opts: AF, a: 2 }],
      },
    ], {
      topic: 'Thema: Das Smartphone im Alltag',
      stmts: [
        'Ohne Smartphone könnte ich meinen Alltag kaum organisieren.',
        'Mich stört, dass man immer sofort erreichbar sein soll.',
        'Kinder sollten erst spät ein eigenes Smartphone bekommen.',
        'Ich achte bewusst darauf, das Gerät weniger zu benutzen.',
        'Für ältere Menschen ist das Smartphone zu kompliziert.',
        'Ein neues Smartphone ist mir zu teuer.',
      ],
    }),
  ],
};
