import { part, RF, AF } from './fmt.js';

export default {
  id: 'h12', title: 'Variante 2', about: 'Maler, Einkaufszentrum, Sprachschule, Bürgertelefon · Glatteis, Bahnstrecke, Küchenstudio, Konzert, Blutspende · Bewerbung, Renovierungslärm, Bank, Schülerpraktikum · Auto oder öffentliche Verkehrsmittel',
  parts: [
    part(1, [
      {
        audio: [['m1', 'Guten Tag, Herr Demir, hier ist Malermeister Krüger. Es geht um Ihr Wohnzimmer, das wir eigentlich am Donnerstag streichen wollten. Leider ist die Farbe, die Sie ausgesucht haben, noch nicht geliefert worden. Sie kommt erst am Freitag bei uns an. Wir könnten deshalb frühestens am Montag um 7 Uhr 30 anfangen. Falls Ihnen das nicht passt, wäre auch Mittwoch möglich, allerdings erst ab Mittag. Bitte räumen Sie die Möbel schon vorher in die Mitte des Zimmers, das Abdecken übernehmen wir. Rufen Sie mich doch kurz zurück, welcher Tag Ihnen lieber ist. Auf Wiederhören.']],
        items: [{ n: 1, q: 'Warum kann der Maler nicht am Donnerstag kommen?', opts: ['Weil Herr Demir die Möbel noch nicht weggeräumt hat.', 'Weil ihm das Material für die Arbeit noch fehlt.', 'Weil er an diesem Tag erst ab Mittag Zeit hat.'], a: 1 }],
      },
      {
        audio: [['f1', 'Sehr geehrte Kundinnen und Kunden, willkommen in der Rathaus-Galerie. Heute ist langer Einkaufsabend: Alle Geschäfte haben bis 22 Uhr für Sie geöffnet, nur der Supermarkt im Untergeschoss schließt wie gewohnt um 20 Uhr. Bitte beachten Sie: Das Parkhaus wird um 22 Uhr 30 geschlossen, danach können Fahrzeuge erst morgen früh wieder abgeholt werden. Wer heute für mindestens 50 Euro einkauft, parkt zwei Stunden kostenlos. Zeigen Sie dazu einfach Ihren Kassenzettel an der Information im Erdgeschoss vor. Die Kinderbetreuung im ersten Stock ist heute ausnahmsweise bis 21 Uhr besetzt.']],
        items: [{ n: 2, q: 'Was sollten die Kunden heute Abend beachten?', opts: ['Sie müssen ihr Auto rechtzeitig aus der Garage holen.', 'Der Supermarkt hat heute nur bis 21 Uhr geöffnet.', 'Wer 50 Euro ausgibt, kann den ganzen Abend gratis parken.'], a: 0 }],
      },
      {
        audio: [['f1', 'Guten Tag, Frau Nguyen, hier ist die Sprachschule Dialog, es geht um Ihre Prüfung. Die schriftliche Prüfung findet wie geplant am Samstag, dem 14. Juni, um 9 Uhr statt. Geändert hat sich nur der Termin für die mündliche Prüfung: Die ist nicht am selben Tag, sondern erst am Montag danach, um 14 Uhr 15. Bitte kommen Sie zu beiden Terminen eine halbe Stunde früher und bringen Sie Ihren Pass mit, der Kursausweis reicht nicht. Die Prüfungsgebühr haben Sie ja schon überwiesen. Wenn Sie am Montag nicht können, melden Sie sich bitte bis Mittwoch.']],
        items: [{ n: 3, q: 'Was ist neu für Frau Nguyen?', opts: ['Sie muss die Prüfungsgebühr bis Mittwoch überweisen.', 'Die schriftliche Prüfung beginnt eine halbe Stunde früher.', 'Sie wird an zwei verschiedenen Tagen geprüft.'], a: 2 }],
      },
      {
        audio: [['m1', 'Guten Tag, Sie sind mit dem Bürgertelefon der Stadt Weidenbach verbunden. Leider rufen Sie außerhalb unserer Sprechzeiten an. Persönlich erreichen Sie uns montags bis freitags von 8 bis 16 Uhr, donnerstags sogar bis 18 Uhr. Wenn Sie einen Termin im Bürgeramt absagen möchten, drücken Sie bitte die 1 und sprechen Sie Ihren Namen und Ihre Terminnummer auf das Band. Neue Termine können allerdings nicht telefonisch vergeben werden, sondern nur über unsere Internetseite. Bei einem Wasserrohrbruch oder anderen Notfällen wählen Sie bitte die Nummer der Stadtwerke: 5 5 5, 0 1, 4 2.']],
        items: [{ n: 4, q: 'Was kann man jetzt am Telefon erledigen?', opts: ['Mitteilen, dass man zu einem Besuch im Amt nicht kommt.', 'Einen neuen Termin im Bürgeramt bekommen.', 'Dem Bürgertelefon einen Notfall melden.'], a: 0 }],
      },
    ]),
    part(2, [
      {
        audio: [['m1', 'Das Wetter für unsere Region. In der kommenden Nacht fällt zunächst Regen, der auf dem gefrorenen Boden sofort zu Eis wird. Vor allem zwischen 4 und 9 Uhr morgens muss mit gefährlicher Glätte auf Straßen und Gehwegen gerechnet werden. Wer kann, sollte das Auto morgen früh stehen lassen. Die Busse fahren voraussichtlich erst ab 9 Uhr wieder regelmäßig, die Straßenbahnen sind dagegen nicht betroffen. Im Laufe des Vormittags steigen die Temperaturen auf 4 Grad, und das Eis taut. Am Nachmittag bleibt es dann trocken, und die Sonne kommt sogar kurz heraus.']],
        items: [{ n: 5, q: 'Was wird für morgen früh gesagt?', opts: ['Busse und Straßenbahnen fahren erst ab 9 Uhr.', 'Es regnet bis zum Nachmittag.', 'Draußen kann man am frühen Morgen leicht ausrutschen.'], a: 2 }],
      },
      {
        audio: [['f1', 'Hinweise für Bahnreisende: Nach einem Sturmschaden ist die Strecke zwischen Grünfeld und Seehausen seit heute Morgen gesperrt. Ein Baum ist auf die Leitung gefallen. Die Regionalzüge aus Richtung Norden enden deshalb schon in Grünfeld. Von dort fahren Ersatzbusse nach Seehausen, sie brauchen allerdings etwa 40 Minuten länger als der Zug, und Fahrräder können nicht mitgenommen werden. Die Reparatur dauert nach Angaben der Bahn nicht wie zuerst gemeldet bis heute Abend, sondern mindestens bis morgen Mittag. Fahrkarten für heute bleiben bis einschließlich Freitag gültig.']],
        items: [{ n: 6, q: 'Was erfahren Reisende, die nach Seehausen wollen?', opts: ['Sie müssen unterwegs das Verkehrsmittel wechseln.', 'Ab heute Abend fahren die Züge wieder.', 'Im Ersatzbus dürfen sie ihr Fahrrad mitnehmen.'], a: 0 }],
      },
      {
        audio: [['m1', 'Träumen Sie von einer neuen Küche? Im Küchenstudio Winkler in der Gartenstraße planen wir sie gemeinsam mit Ihnen, ganz in Ruhe und ohne Kosten für die Beratung. Unsere Fachleute kommen zu Ihnen nach Hause und messen alles genau aus. Nur im November: Beim Kauf einer kompletten Küche bekommen Sie den Geschirrspüler zum halben Preis. Lieferung und Einbau berechnen wir mit 10 Prozent des Kaufpreises, dafür nehmen wir Ihre alte Küche ohne Aufpreis mit. Küchenstudio Winkler, geöffnet Dienstag bis Samstag. Für die Planung vereinbaren Sie bitte vorher einen Termin.']],
        items: [{ n: 7, q: 'Wofür muss man im Küchenstudio Winkler nichts bezahlen?', opts: ['Für die Unterstützung beim Planen.', 'Für den Geschirrspüler beim Kauf einer Küche.', 'Für Lieferung und Einbau.'], a: 0 }],
      },
      {
        audio: [['f1', 'Für alle Musikfans: Das Konzert der Sängerin Lena Marquardt am Freitagabend findet nicht wie geplant auf der Freilichtbühne im Schlosspark statt. Weil Sturm angesagt ist, wird es in die Stadthalle verlegt. Der Beginn bleibt bei 20 Uhr, Einlass ist aber schon ab 18 Uhr 30. Alle gekauften Karten behalten ihre Gültigkeit. Da es in der Halle weniger Plätze gibt, werden an der Abendkasse allerdings keine Karten mehr verkauft. Wer unter diesen Umständen lieber nicht kommen möchte, kann seine Karte bis Donnerstag dort zurückgeben, wo er sie gekauft hat, und bekommt sein Geld zurück.']],
        items: [{ n: 8, q: 'Was gilt für Leute, die schon eine Karte haben?', opts: ['Sie müssen ihre Karte bis Donnerstag umtauschen.', 'Sie können damit ohne Weiteres am neuen Ort ins Konzert.', 'Sie bekommen an der Abendkasse ihr Geld zurück.'], a: 1 }],
      },
      {
        audio: [['m1', 'Aus der Region: Das Stadtkrankenhaus bittet dringend um Blutspenden, weil die Vorräte nach den Ferien knapp geworden sind. Am Mittwoch und Donnerstag kann man deshalb im Gemeindehaus am Markt Blut spenden, jeweils von 13 bis 19 Uhr. Spenden dürfen gesunde Erwachsene ab 18 Jahren. Wer zum ersten Mal kommt, darf nicht älter als 60 sein und sollte etwa eine Stunde Zeit einplanen. Bitte bringen Sie Ihren Ausweis mit und essen Sie vorher etwas. Einen Termin braucht man nicht, mit einer Reservierung im Internet geht es aber schneller. Danach gibt es für alle einen kleinen Imbiss.']],
        items: [{ n: 9, q: 'Was wird über die Blutspende gesagt?', opts: ['Ohne Reservierung im Internet kann man nicht teilnehmen.', 'Wer noch nie Blut gespendet hat, darf höchstens 60 Jahre alt sein.', 'Man soll vor der Spende nichts essen.'], a: 1 }],
      },
    ]),
    part(3, [
      {
        who: { f1: 'Frau Lindner', m1: 'Herr Ibrahim' },
        audio: [
          ['f1', 'Firma Elektro Sander, Personalabteilung, Lindner am Apparat.'],
          ['m1', 'Guten Tag, hier spricht Karim Ibrahim. Ich habe mich vor drei Wochen bei Ihnen als Elektriker beworben und bisher noch keine Antwort bekommen. Deshalb wollte ich mal nachfragen.'],
          ['f1', 'Einen Moment, Herr Ibrahim, ich schaue nach. Ja, Ihre Unterlagen sind angekommen. Es hat leider etwas länger gedauert, weil unser Abteilungsleiter im Urlaub war.'],
          ['m1', 'Ach so. Fehlt denn noch etwas? Mein Zeugnis aus Ägypten ist ja noch nicht übersetzt.'],
          ['f1', 'Die Übersetzung können Sie später nachreichen, das ist im Moment nicht so wichtig. Herr Sander möchte Sie aber gern persönlich kennenlernen. Hätten Sie am Dienstag um 10 Uhr Zeit?'],
          ['m1', 'Dienstagvormittag habe ich leider meinen Deutschkurs. Ginge es auch am Nachmittag?'],
          ['f1', 'Am Dienstag nicht, da ist er auf einer Baustelle. Aber am Mittwoch um 15 Uhr wäre er im Haus.'],
          ['m1', 'Das passt gut. Soll ich etwas mitbringen?'],
          ['f1', 'Nur Ihren Führerschein, falls Sie einen haben. Unsere Mitarbeiter fahren ja oft zu Kunden. Alles Weitere schicke ich Ihnen noch per E-Mail.'],
          ['m1', 'Den habe ich. Vielen Dank, dann bis Mittwoch.'],
        ],
        items: [
          { n: 10, q: 'Herr Ibrahim wird zu einem Vorstellungsgespräch eingeladen.', opts: RF, a: 0 },
          { n: 11, q: 'Wann geht Herr Ibrahim zur Firma?', opts: ['Am Dienstag nach seinem Deutschkurs.', 'Einen Tag später als zuerst vorgeschlagen.', 'Sobald sein Zeugnis übersetzt ist.'], a: 1 },
        ],
      },
      {
        who: { f1: 'Frau Wagner', m1: 'Herr Popescu' },
        audio: [
          ['f1', 'Guten Abend, Herr Popescu. Entschuldigen Sie die Störung, aber ich muss mal mit Ihnen reden.'],
          ['m1', 'Guten Abend, Frau Wagner. Es geht bestimmt um den Lärm, oder?'],
          ['f1', 'Ja. Seit einer Woche wird bei Ihnen gebohrt und gehämmert, gestern sogar bis halb zehn abends. Ich arbeite im Schichtdienst und muss um vier Uhr aufstehen.'],
          ['m1', 'Das tut mir wirklich leid. Wir renovieren das Bad, und die Handwerker sind tagsüber da. Aber abends mache ich selbst noch einiges, weil ich Geld sparen möchte.'],
          ['f1', 'Das verstehe ich ja. Aber laut Hausordnung ist ab 20 Uhr Ruhe.'],
          ['m1', 'Sie haben recht, daran habe ich gar nicht gedacht. Ab heute höre ich spätestens um 19 Uhr auf, versprochen.'],
          ['f1', 'Das wäre schön. Wie lange dauert es denn überhaupt noch?'],
          ['m1', 'Eigentlich sollte alles am Freitag fertig sein, aber die Fliesen wurden zu spät geliefert. Jetzt wird es wohl Ende nächster Woche.'],
          ['f1', 'Und am Samstag? Da wollte ich eigentlich ausschlafen.'],
          ['m1', 'Am Samstag wird nur gestrichen, das hören Sie nicht. Und wenn alles fertig ist, lade ich Sie zum Kaffee ein.'],
          ['f1', 'Na gut, da sage ich nicht nein.'],
        ],
        items: [
          { n: 12, q: 'Die beiden Nachbarn können sich nicht einigen.', opts: RF, a: 1 },
          { n: 13, q: 'Was verspricht Herr Popescu?', opts: ['Abends künftig früher Schluss zu machen.', 'Dass das Bad am Freitag fertig ist.', 'Dass am Samstag nicht gearbeitet wird.'], a: 0 },
        ],
      },
      {
        who: { f1: 'Frau Okoye', m1: 'Bankberater' },
        audio: [
          ['f1', 'Guten Tag, ich möchte Geld an meine Schwester in Nigeria überweisen, 400 Euro. Geht das bei Ihnen am Schalter?'],
          ['m1', 'Guten Tag. Ja, das geht, aber am Schalter kostet eine Überweisung ins Ausland 25 Euro Gebühr.'],
          ['f1', 'So viel? Das ist ja ziemlich teuer für diese Summe.'],
          ['m1', 'Wenn Sie es selbst im Online-Banking machen, sind es nur 12 Euro. Haben Sie dafür einen Zugang?'],
          ['f1', 'Ja, den benutze ich für die Miete und so weiter. Aber eine Überweisung ins Ausland habe ich damit noch nie gemacht.'],
          ['m1', 'Das ist nicht schwer. Sie brauchen nur die Kontonummer und den internationalen Code der Bank Ihrer Schwester.'],
          ['f1', 'Die Kontonummer habe ich dabei, aber den Code nicht. Da muss ich sie erst fragen.'],
          ['m1', 'Ohne den Code könnte ich es leider auch hier nicht ausführen.'],
          ['f1', 'Und wie lange ist das Geld unterwegs? Sie braucht es für die Schulgebühren.'],
          ['m1', 'In der Regel drei bis fünf Arbeitstage. Schneller geht es nur mit einer Eilüberweisung, die kostet aber 20 Euro zusätzlich.'],
          ['f1', 'Nein, das ist mir zu viel, fünf Tage reichen noch. Dann rufe ich heute Abend meine Schwester an und mache es danach zu Hause am Computer.'],
        ],
        items: [
          { n: 14, q: 'Frau Okoye schickt das Geld gleich in der Bank ab.', opts: RF, a: 1 },
          { n: 15, q: 'Was braucht Frau Okoye noch, bevor sie überweisen kann?', opts: ['Einen Zugang zum Online-Banking.', 'Die Kontonummer ihrer Schwester.', 'Eine Angabe zur Bank der Empfängerin.'], a: 2 },
        ],
      },
      {
        who: { f1: 'Frau Seidel', m1: 'Herr Markovic' },
        audio: [
          ['f1', 'Guten Tag, Herr Markovic. Danke, dass Sie gekommen sind. Es geht um das Praktikum von Daniel im März.'],
          ['m1', 'Guten Tag, Frau Seidel. Ja, er hat mir davon erzählt. Hat er denn schon einen Platz?'],
          ['f1', 'Das ist das Problem. Alle anderen aus der Klasse haben ihren Vertrag schon abgegeben, nur von Daniel fehlt er noch. Die Frist ist eigentlich letzten Freitag abgelaufen.'],
          ['m1', 'Oh, das wusste ich nicht. Er wollte ja unbedingt in eine Autowerkstatt, aber die zwei, bei denen er gefragt hat, haben abgesagt.'],
          ['f1', 'Das ist schade. Hat er sich denn noch woanders beworben?'],
          ['m1', 'Nein. Mein Bruder hat eine Bäckerei, da könnte er sofort anfangen. Aber Daniel sagt, das interessiert ihn nicht.'],
          ['f1', 'Dann sollte er lieber etwas Technisches suchen, wenn das sein Wunsch ist. Die Firma Reuter, ein Betrieb für Heizungsbau, hat sich gestern bei uns gemeldet. Dort wird noch ein Praktikant gesucht.'],
          ['m1', 'Das klingt gut. Was muss er tun?'],
          ['f1', 'Er sollte dort bis Mittwoch anrufen und einen kurzen Lebenslauf hinschicken. Die Adresse gebe ich ihm morgen. Den Vertrag darf er dann ausnahmsweise bis Ende nächster Woche abgeben.'],
          ['m1', 'Vielen Dank. Ich spreche heute Abend mit ihm und helfe ihm beim Lebenslauf.'],
        ],
        items: [
          { n: 16, q: 'Daniel hat als Einziger in seiner Klasse noch keinen Praktikumsplatz.', opts: RF, a: 0 },
          { n: 17, q: 'Was schlägt die Lehrerin vor?', opts: ['Daniel soll sich bei einem Betrieb melden, der noch jemanden braucht.', 'Daniel soll das Praktikum in der Bäckerei seines Onkels machen.', 'Daniel soll es noch einmal bei den Autowerkstätten versuchen.'], a: 0 },
        ],
      },
    ]),
    part(4, [
      {
        ex: 3,
        audio: [['f1', 'Ich fahre jeden Tag 45 Minuten mit der S-Bahn zur Arbeit. Mit dem Auto wäre ich vielleicht zehn Minuten schneller, und manchmal kommt die Bahn auch zu spät, das stimmt schon. Aber im Auto muss ich mich auf die Straße konzentrieren und stehe am Ende doch im Stau. Im Zug lese ich meine E-Mails, lerne Vokabeln für meinen Spanischkurs oder mache einfach kurz die Augen zu. Wenn ich im Büro ankomme, habe ich schon einiges erledigt.']],
        items: [],
      },
      {
        audio: [['m1', 'In der Stadt habe ich früher alles mit der Straßenbahn gemacht, das war wirklich bequem. Vor drei Jahren sind wir aber in ein kleines Dorf gezogen, weil wir mehr Platz haben wollten. Hier fährt der Bus nur viermal am Tag und am Sonntag gar nicht. Zum Arzt, zum Einkaufen, die Kinder zum Sportverein bringen – ohne eigenen Wagen wäre das alles unmöglich. Ich würde gern öfter darauf verzichten, aber so, wie es ist, geht es einfach nicht.']],
        items: [{ n: 18, q: '', opts: AF, a: 1 }],
      },
      {
        audio: [['f2', 'Ich hatte lange ein Auto und bin eigentlich gern gefahren, das gebe ich zu. Aber dann habe ich mal alles zusammengerechnet: Versicherung, Steuer, Benzin, Reparaturen und dazu noch der Parkplatz für 80 Euro im Monat. Da habe ich es verkauft. Jetzt habe ich eine Monatskarte, und wenn ich wirklich mal einen Wagen brauche, zum Beispiel für einen Umzug, leihe ich mir einen. Am Ende des Monats bleibt mir so deutlich mehr übrig als früher.']],
        items: [{ n: 19, q: '', opts: AF, a: 5 }],
      },
      {
        audio: [['m2', 'Natürlich ist das Auto praktischer, da muss man ehrlich sein: Man steigt vor der Haustür ein und muss nicht im Regen an der Haltestelle stehen. Trotzdem habe ich meins vor einem Jahr abgeschafft. Ich habe zwei kleine Kinder und frage mich, in welcher Welt sie später leben werden. Die vielen Abgase, die schlechte Luft in den Städten – da möchte ich nicht mehr mitmachen. Mit dem Bus brauche ich zwar länger, aber ich habe ein besseres Gefühl dabei.']],
        items: [{ n: 20, q: '', opts: AF, a: 2 }],
      },
    ], {
      topic: 'Thema: Auto oder öffentliche Verkehrsmittel?',
      stmts: [
        'Ich fahre fast nur noch mit dem Fahrrad.',
        'Auf dem Land kommt man ohne Auto nicht aus.',
        'Ich fahre mit Bus und Bahn, weil das besser für die Umwelt ist.',
        'In Bus und Bahn kann ich die Fahrzeit sinnvoll nutzen.',
        'Öffentliche Verkehrsmittel sind mir zu unpünktlich.',
        'Ein eigenes Auto ist mir zu teuer.',
      ],
    }),
  ],
};
