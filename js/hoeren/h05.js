import { part, RF, AF } from './fmt.js';

export default {
  id: 'h05', title: 'Variante 5', about: 'Optiker, Schwimmbad, Ausländerbehörde, Krankmeldung · Wetter, Straßenbahn, Technikmarkt, Kino im Schlosshof, Müllabfuhr · Reklamation, Kinderarzt, Lärm im Haus, Turnverein · Deutsch lernen',
  parts: [
    part(1, [
      {
        audio: [['f1', 'Guten Tag, Herr Rashidi, hier ist Optik Seewald, Tönnies am Apparat. Ihre neue Brille ist fertig. Sie können sie ab morgen bei uns abholen. Wir haben montags bis freitags von 9 bis 18 Uhr 30 geöffnet, samstags nur bis 13 Uhr. Bitte bringen Sie unbedingt den Abholschein mit. Die Rechnung über 149 Euro können Sie bar oder mit Karte bezahlen. Auf Wiederhören.']],
        items: [{ n: 1, q: 'Was soll Herr Rashidi mitbringen?', opts: ['149 Euro in bar.', 'Seine Versichertenkarte.', 'Den Abholschein.'], a: 2 }],
      },
      {
        audio: [['m1', 'Liebe Badegäste, eine Durchsage: Das Sportbecken ist heute ab 17 Uhr für das Training des Schwimmvereins reserviert. Bitte verlassen Sie das Becken bis 16 Uhr 45. Das Nichtschwimmerbecken und die Rutsche können Sie wie immer bis 20 Uhr benutzen. Die Sauna ist heute wegen einer Reparatur leider den ganzen Tag geschlossen. Unser Bistro im Erdgeschoss hat bis 19 Uhr für Sie geöffnet. Vielen Dank.']],
        items: [{ n: 2, q: 'Was erfahren die Badegäste?', opts: ['Die Sauna öffnet heute erst um 17 Uhr.', 'Im Sportbecken kann man am späten Nachmittag nicht mehr schwimmen.', 'Das ganze Bad schließt heute um 19 Uhr.'], a: 1 }],
      },
      {
        audio: [['f1', 'Guten Tag. Sie sind mit der Ausländerbehörde der Stadt Wiesental verbunden. Im Moment sind alle Leitungen besetzt. Persönliche Termine gibt es nur nach Anmeldung. Einen Termin buchen Sie bitte über unsere Internetseite, am Telefon vergeben wir keine Termine. Wenn Sie nur Unterlagen abgeben möchten, werfen Sie diese in den Briefkasten am Eingang, Rathausplatz 3. Unsere Telefonsprechzeiten sind Montag und Mittwoch von 8 bis 12 Uhr.']],
        items: [{ n: 3, q: 'Wie bekommt man einen Termin?', opts: ['Man bucht ihn im Internet.', 'Man ruft am Montag oder Mittwoch an.', 'Man kommt einfach zum Rathausplatz 3.'], a: 0 }],
      },
      {
        audio: [['m1', 'Hallo Frau Wolters, hier ist Zoran Petrow aus dem Lager. Ich bin leider krank, ich habe Fieber und starken Husten. Ich gehe heute um 11 Uhr zum Arzt. Diese Woche komme ich wahrscheinlich nicht mehr zur Arbeit. Die Krankmeldung schicke ich Ihnen heute Nachmittag per E-Mail. Und noch etwas Wichtiges: Um 14 Uhr kommt die Lieferung von der Firma Quandt. Vielleicht kann Herr Uzun sie annehmen. Vielen Dank und bis bald.']],
        items: [{ n: 4, q: 'Was macht Herr Petrow heute Nachmittag?', opts: ['Er geht zum Arzt.', 'Er schickt seine Krankmeldung.', 'Er nimmt eine Lieferung an.'], a: 1 }],
      },
    ]),
    part(2, [
      {
        audio: [['f1', 'Das Wetter für heute und morgen. Heute Morgen gibt es in vielen Orten noch dichten Nebel, fahren Sie bitte vorsichtig. Gegen Mittag kommt die Sonne heraus, und es wird mit 24 Grad angenehm warm. Morgen wird es noch wärmer, bis zu 30 Grad. Am Abend sind dann aber kräftige Gewitter möglich, vor allem im Süden. Am Donnerstag kühlt es auf 19 Grad ab.']],
        items: [{ n: 5, q: 'Wie wird das Wetter morgen?', opts: ['Es bleibt den ganzen Tag neblig.', 'Es wird sehr warm, später kann es Gewitter geben.', 'Es wird kühler als heute.'], a: 1 }],
      },
      {
        audio: [['m1', 'Eine Information der Verkehrsbetriebe: Wegen Bauarbeiten an den Schienen fährt die Straßenbahnlinie 6 ab Montag für drei Wochen nicht zwischen Rathaus und Zoo. Auf diesem Abschnitt fahren Ersatzbusse, alle 10 Minuten. Die Busse halten direkt vor dem Rathaus, an der Haltestelle der Linie 21. Ihre Fahrkarten gelten natürlich auch im Ersatzbus. Planen Sie bitte etwa 15 Minuten mehr Zeit ein.']],
        items: [{ n: 6, q: 'Was sollen Fahrgäste der Linie 6 tun?', opts: ['Für den Bus eine neue Fahrkarte kaufen.', 'Mit der Linie 21 zum Zoo fahren.', 'Zwischen Rathaus und Zoo den Ersatzbus nehmen.'], a: 2 }],
      },
      {
        audio: [['f1', 'Nur an diesem Wochenende bei Technikwelt Ullmann in der Ziegelgasse: Fernseher, Laptops und Handys zu Sonderpreisen! Zum Beispiel ein Laptop für nur 399 Euro statt 499. Und das Beste: Wenn Sie Ihr altes Handy bei uns abgeben, bekommen Sie einen Gutschein über 50 Euro für ein neues Gerät. Technikwelt Ullmann – am Samstag bis 20 Uhr, am Sonntag von 13 bis 18 Uhr geöffnet.']],
        items: [{ n: 7, q: 'Wofür bekommt man einen Gutschein?', opts: ['Für ein gebrauchtes Handy, das man in den Laden bringt.', 'Für den Kauf eines Laptops für 399 Euro.', 'Für jeden Einkauf am Sonntag.'], a: 0 }],
      },
      {
        audio: [['m1', 'Unser Freizeittipp: Am Freitag beginnt wieder das Kino unter freiem Himmel im Schlosshof. Bis Ende August laufen dort jeden Freitag und Samstag Filme, immer ab 21 Uhr 30. Eine Karte kostet 8 Euro, Kinder bis 12 Jahre zahlen die Hälfte. Stühle gibt es genug, aber bringen Sie eine Jacke oder eine Decke mit – abends wird es kühl. Bei Regen fällt die Vorstellung aus.']],
        items: [{ n: 8, q: 'Was sollen die Besucher mitbringen?', opts: ['Etwas Warmes.', 'Einen eigenen Stuhl.', 'Einen Regenschirm.'], a: 0 }],
      },
      {
        audio: [['f1', 'Und noch ein Hinweis für alle Hörerinnen und Hörer in Tannenberg: Wegen des Feiertags am Donnerstag kommt die Müllabfuhr in dieser Woche später. Die Biotonne wird nicht am Donnerstag, sondern erst am Freitag geleert. Der Restmüll wird statt am Freitag am Samstag abgeholt. Bitte stellen Sie die Tonnen schon bis 6 Uhr morgens an die Straße. Das Papier wird wie immer am Montag abgeholt.']],
        items: [{ n: 9, q: 'Wann wird in dieser Woche der Restmüll abgeholt?', opts: ['Am Donnerstag.', 'Am Freitag.', 'Am Samstag.'], a: 2 }],
      },
    ]),
    part(3, [
      {
        who: { m1: 'Verkäufer', f1: 'Kundin' },
        audio: [
          ['m1', 'Guten Tag, kann ich Ihnen helfen?'],
          ['f1', 'Ja, ich habe vor zwei Wochen diesen Wasserkocher bei Ihnen gekauft. Jetzt geht er nicht mehr an.'],
          ['m1', 'Das tut mir leid. Haben Sie den Kassenzettel dabei?'],
          ['f1', 'Ja, hier bitte. 34 Euro 90 habe ich bezahlt.'],
          ['m1', 'Danke. Ich kann das Gerät reparieren lassen, das dauert aber ungefähr zehn Tage.'],
          ['f1', 'So lange möchte ich nicht warten. Kann ich nicht mein Geld zurückbekommen?'],
          ['m1', 'Das Geld zurück, das geht leider nicht. Aber ich kann Ihnen gleich ein neues Gerät geben, das gleiche Modell.'],
          ['f1', 'Gut, dann nehme ich das neue.'],
          ['m1', 'Gern. Ich hole es aus dem Lager. Einen Moment bitte.'],
        ],
        items: [
          { n: 10, q: 'Die Kundin bringt ein Gerät zurück, weil es ihr zu teuer war.', opts: RF, a: 1 },
          { n: 11, q: 'Was bekommt die Kundin?', opts: ['Einen neuen Wasserkocher.', 'Ihr Geld zurück.', 'Das reparierte Gerät in zehn Tagen.'], a: 0 },
        ],
      },
      {
        who: { f1: 'Arzthelferin', m1: 'Herr Varga' },
        audio: [
          ['f1', 'Kinderarztpraxis Doktor Ohlsen, guten Morgen.'],
          ['m1', 'Guten Morgen, Varga hier. Mein Sohn Milan hat seit gestern Abend Ohrenschmerzen und Fieber. Können wir heute kommen?'],
          ['f1', 'Wie alt ist Milan denn?'],
          ['m1', 'Er ist vier.'],
          ['f1', 'Heute Vormittag ist leider alles voll. Sie können um 15 Uhr 20 kommen. Oder ohne Termin in die offene Sprechstunde ab 11 Uhr, da müssen Sie aber lange warten.'],
          ['m1', 'Dann lieber mit Termin, um 15 Uhr 20.'],
          ['f1', 'Gut. Waren Sie schon einmal bei uns?'],
          ['m1', 'Nein, wir sind neu in der Stadt.'],
          ['f1', 'Dann bringen Sie bitte die Versichertenkarte und das gelbe Untersuchungsheft mit. Den Impfpass brauchen wir heute nicht.'],
          ['m1', 'In Ordnung, vielen Dank.'],
        ],
        items: [
          { n: 12, q: 'Herr Varga ruft in der Praxis an, weil sein Kind krank ist.', opts: RF, a: 0 },
          { n: 13, q: 'Was soll Herr Varga mitbringen?', opts: ['Nur den Impfpass.', 'Die Versichertenkarte und den Impfpass.', 'Die Versichertenkarte und das Untersuchungsheft.'], a: 2 },
        ],
      },
      {
        who: { f1: 'Frau Schütte', m1: 'Herr Tomic' },
        audio: [
          ['f1', 'Guten Abend, Herr Tomic. Entschuldigen Sie die Störung.'],
          ['m1', 'Guten Abend, Frau Schütte. Was ist denn?'],
          ['f1', 'Es geht um die Musik. Gestern war es bei Ihnen bis nach Mitternacht sehr laut. Ich konnte nicht schlafen.'],
          ['m1', 'Oh, das tut mir leid. Mein Bruder hatte Geburtstag, wir haben ein bisschen gefeiert.'],
          ['f1', 'Feiern ist ja in Ordnung. Aber ich muss um 5 Uhr aufstehen, ich arbeite in einer Bäckerei.'],
          ['m1', 'Das wusste ich nicht. Am Samstag kommen noch einmal Freunde zu mir. Aber ich verspreche Ihnen: Um 22 Uhr machen wir die Musik leiser.'],
          ['f1', 'Am Samstag ist es nicht so schlimm, sonntags habe ich frei. Aber in der Woche bitte nicht.'],
          ['m1', 'Versprochen. Und wenn es doch einmal zu laut ist, klingeln Sie einfach.'],
        ],
        items: [
          { n: 14, q: 'Frau Schütte beschwert sich bei ihrem Nachbarn über Lärm.', opts: RF, a: 0 },
          { n: 15, q: 'Warum ist die Feier am Samstag für Frau Schütte kein großes Problem?', opts: ['Weil sie selbst eingeladen ist.', 'Weil sie am nächsten Tag nicht arbeiten muss.', 'Weil Herr Tomic ganz ohne Musik feiert.'], a: 1 },
        ],
      },
      {
        who: { m1: 'Herr Stenzel', f1: 'Frau Nwosu' },
        audio: [
          ['m1', 'Turnverein Rotbach, Geschäftsstelle, Stenzel am Apparat.'],
          ['f1', 'Guten Tag, hier ist Nwosu. Ich möchte meine Tochter zum Kinderturnen anmelden. Sie ist sieben.'],
          ['m1', 'Gern. Für die Sieben- bis Neunjährigen haben wir zwei Gruppen: montags um 16 Uhr und donnerstags um 17 Uhr 15.'],
          ['f1', 'Montags hat sie Musikschule. Donnerstag wäre gut. Was kostet das?'],
          ['m1', 'Der Beitrag für Kinder beträgt 9 Euro im Monat. Dazu kommt einmalig eine Aufnahmegebühr von 15 Euro.'],
          ['f1', 'Und kann sie erst einmal probieren, ob es ihr gefällt?'],
          ['m1', 'Natürlich. Die ersten zwei Stunden sind kostenlos. Kommen Sie einfach am Donnerstag in die Turnhalle der Uhlandschule.'],
          ['f1', 'Muss ich vorher ein Formular ausfüllen oder etwas bezahlen?'],
          ['m1', 'Nein, das machen wir alles erst nach den Probestunden.'],
          ['f1', 'Schön, dann kommen wir am Donnerstag.'],
        ],
        items: [
          { n: 16, q: 'Frau Nwosu möchte selbst im Verein Sport machen.', opts: RF, a: 1 },
          { n: 17, q: 'Was macht Frau Nwosu als Nächstes?', opts: ['Sie geht mit ihrer Tochter am Donnerstag zur Probestunde.', 'Sie füllt das Anmeldeformular aus.', 'Sie bezahlt die Aufnahmegebühr.'], a: 0 },
        ],
      },
    ]),
    part(4, [
      {
        ex: 3,
        audio: [['m1', 'Am Anfang habe ich fast nichts verstanden. Dann hat mir ein Freund gesagt: Schau doch deutsches Fernsehen! Jetzt sehe ich jeden Abend eine Serie, zuerst mit Untertiteln, inzwischen ohne. Ich höre, wie die Leute wirklich sprechen, und lerne viele neue Wörter. Das macht mir mehr Spaß als jedes Lehrbuch.']],
        items: [],
      },
      {
        audio: [['f1', 'Ich arbeite seit einem Jahr in einer Großküche. Dort sprechen alle Deutsch miteinander, den ganzen Tag. Am Anfang war das schwer, aber die anderen erklären mir alles und verbessern mich auch. In den Pausen reden wir über die Familie und über das Wochenende. So habe ich mehr gelernt als vorher in zwei Jahren allein zu Hause.']],
        items: [{ n: 18, q: '', opts: AF, a: 0 }],
      },
      {
        audio: [['m2', 'Ich fahre jeden Morgen 20 Minuten mit der Bahn. Früher habe ich da nur Musik gehört. Jetzt habe ich eine Lern-App auf dem Telefon und wiederhole Wörter und kurze Sätze. Abends vor dem Schlafen mache ich noch einmal zehn Minuten. Das ist nicht viel, aber ich mache es wirklich täglich, und das bringt etwas.']],
        items: [{ n: 19, q: '', opts: AF, a: 5 }],
      },
      {
        audio: [['f2', 'Ich habe es zuerst allein versucht, mit Übungen aus dem Internet. Aber ehrlich gesagt: Nach zwei Wochen habe ich nichts mehr gemacht. Ich brauche jemanden, der mir sagt, was ich lernen soll, und der meine Fehler korrigiert. Jetzt gehe ich dreimal pro Woche in die Sprachschule, immer von 9 bis 12 Uhr. Da muss ich hingehen, und das ist gut so.']],
        items: [{ n: 20, q: '', opts: AF, a: 4 }],
      },
    ], {
      topic: 'Thema: Deutsch lernen – wie geht es am besten?',
      stmts: [
        'Ich lerne am meisten, wenn ich mit Kollegen spreche.',
        'Ohne Grammatikbuch kann man keine Sprache lernen.',
        'Für einen Kurs habe ich im Moment keine Zeit.',
        'Mir hilft es, Filme und Serien auf Deutsch zu sehen.',
        'Ich brauche einen Kurs mit Lehrer und festen Zeiten.',
        'Ich übe jeden Tag ein bisschen mit dem Handy.',
      ],
    }),
  ],
};
