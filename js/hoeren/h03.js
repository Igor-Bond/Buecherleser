import { part, RF, AF } from './fmt.js';

export default {
  id: 'h03', title: 'Variante 3', about: 'Jobcenter, Kaufhaus, Heizungsfirma, Schulsekretariat · Wetter, Straßensperrung, Sprachschule, Flohmarkt, Stadtbibliothek · Krankschreibung, Fahrkarte, Überstunden, Umzugshilfe · Kinder und Handys',
  parts: [
    part(1, [
      {
        audio: [['m1', 'Guten Tag, Herr Rahimi, hier spricht Körner vom Jobcenter Auental. Sie haben am Dienstag um 11 Uhr einen Beratungstermin bei mir. Ich muss den Termin leider um eine Stunde vorverlegen, also auf 10 Uhr. Der Raum bleibt gleich: Zimmer 214 im zweiten Stock. Bitte bringen Sie Ihren Lebenslauf und Ihre Zeugnisse mit. Wenn es um 10 Uhr nicht geht, rufen Sie mich bitte an unter 5 5 5, 0 1, 6 2.']],
        items: [{ n: 1, q: 'Was ändert sich für Herrn Rahimi?', opts: ['Die Uhrzeit des Termins.', 'Der Tag des Termins.', 'Das Zimmer.'], a: 0 }],
      },
      {
        audio: [['f1', 'Sehr geehrte Kundinnen und Kunden, bitte beachten Sie: Die Rolltreppe zwischen dem ersten und dem zweiten Stock ist heute außer Betrieb. Bitte benutzen Sie die Aufzüge neben der Schuhabteilung. Und unser Angebot des Tages: In der Kinderabteilung im dritten Stock erhalten Sie heute auf alle Winterjacken 25 Prozent Rabatt. Unser Haus ist heute bis 20 Uhr für Sie geöffnet.']],
        items: [{ n: 2, q: 'Was sollen die Kunden tun?', opts: ['Die Rolltreppe neben der Schuhabteilung nehmen.', 'Mit dem Aufzug nach oben fahren.', 'Die Winterjacken im zweiten Stock anschauen.'], a: 1 }],
      },
      {
        audio: [['m1', 'Guten Tag, Frau Ostrowski, Firma Heiztechnik Baumann, Schuster hier. Wir waren gestern wegen Ihrer Heizung bei Ihnen. Das Ersatzteil ist jetzt angekommen. Mein Kollege kann es morgen, am Freitag, zwischen 13 und 15 Uhr einbauen. Das dauert ungefähr eine Stunde. Es muss jemand zu Hause sein, denn wir brauchen auch den Schlüssel für den Keller. Die Rechnung schicken wir wie immer an Ihren Vermieter. Auf Wiederhören.']],
        items: [{ n: 3, q: 'Was muss Frau Ostrowski machen?', opts: ['Die Rechnung für die Reparatur bezahlen.', 'Das Ersatzteil bei der Firma abholen.', 'Dafür sorgen, dass jemand zu Hause ist.'], a: 2 }],
      },
      {
        audio: [['f1', 'Guten Morgen, hier ist das Sekretariat der Lessing-Schule mit einer Nachricht für die Eltern der Klasse 6 a. Herr Jung ist krank, deshalb fällt heute der Sportunterricht in der fünften und sechsten Stunde aus. Die Kinder haben also schon um 11 Uhr 30 Schluss. Wer nicht früher nach Hause gehen kann, wird bis 13 Uhr in der Schulbibliothek betreut. Das Mittagessen in der Mensa gibt es wie immer. Vielen Dank.']],
        items: [{ n: 4, q: 'Was passiert heute in der Klasse 6 a?', opts: ['Der Unterricht beginnt erst um 11 Uhr 30.', 'Es gibt kein Mittagessen in der Mensa.', 'Die letzten beiden Stunden finden nicht statt.'], a: 2 }],
      },
    ]),
    part(2, [
      {
        audio: [['m1', 'Das Wetter am Wochenende. Am Samstag scheint zunächst noch oft die Sonne, und es wird sehr warm mit bis zu 29 Grad. Am späten Nachmittag gibt es dann erste Gewitter mit starkem Regen. Am Sonntag ist es bewölkt und windig, aber es regnet kaum noch. Die Temperaturen gehen auf 21 Grad zurück. Zum Wochenanfang wird es wieder sonniger.']],
        items: [{ n: 5, q: 'Wie ist das Wetter am Sonntag?', opts: ['Es gibt Gewitter.', 'Es ist sehr warm und sonnig.', 'Es ist kühler als am Samstag.'], a: 2 }],
      },
      {
        audio: [['f1', 'Achtung, Autofahrer in Kirchhausen: Ab Montag wird die Lindenallee zwischen dem Rathaus und der Post erneuert. Die Straße ist deshalb drei Wochen lang für Autos gesperrt. Fußgänger und Radfahrer können weiter durch. Die Geschäfte bleiben geöffnet. Parken können Sie in dieser Zeit kostenlos im Parkhaus am Rathaus. Die Buslinie 6 hält nicht an der Post, sondern am Schillerplatz.']],
        items: [{ n: 6, q: 'Was gilt während der Bauarbeiten?', opts: ['Die Geschäfte in der Lindenallee sind geschlossen.', 'Das Parkhaus am Rathaus kostet nichts.', 'Auch Radfahrer dürfen nicht durch die Straße fahren.'], a: 1 }],
      },
      {
        audio: [['m1', 'Sie brauchen Deutsch für den Beruf? Die Sprachschule Wortwerk am Hafenplatz bietet ab dem 15. September neue Kurse an: Deutsch für die Pflege, für das Büro und für das Handwerk. Die Kurse finden samstags von 9 bis 13 Uhr statt, damit Sie neben der Arbeit lernen können. In jeder Gruppe sind höchstens zehn Personen. Melden Sie sich bis Ende August an, dann bekommen Sie das Kursbuch geschenkt.']],
        items: [{ n: 7, q: 'Für wen sind die neuen Kurse besonders geeignet?', opts: ['Für Menschen, die unter der Woche arbeiten.', 'Für Personen, die noch gar kein Deutsch sprechen.', 'Für Leute, die allein mit einem Lehrer lernen wollen.'], a: 0 }],
      },
      {
        audio: [['f1', 'Unser Veranstaltungstipp: Am Sonntag gibt es wieder den großen Flohmarkt auf dem Parkplatz am Stadion. Von 8 bis 16 Uhr finden Sie dort Kleidung, Spielzeug, Bücher und Möbel. Wer selbst etwas verkaufen möchte, zahlt 12 Euro für einen Stand. Eine Anmeldung brauchen Sie nicht, aber Sie sollten schon um 6 Uhr 30 da sein, denn die Plätze sind schnell weg. Neue Waren dürfen nicht verkauft werden.']],
        items: [{ n: 8, q: 'Was sollen Verkäufer machen?', opts: ['Sich vorher anmelden.', 'Früh am Morgen kommen.', 'Nur neue Sachen anbieten.'], a: 1 }],
      },
      {
        audio: [['m1', 'Gute Nachrichten für alle, die gern lesen: Die Stadtbibliothek Wallenfels hat ab dem 1. Februar neue Öffnungszeiten. Sie ist dann auch samstags geöffnet, von 10 bis 14 Uhr. Dafür bleibt sie montags geschlossen. Von Dienstag bis Freitag können Sie wie bisher von 10 bis 18 Uhr kommen. Bücher zurückgeben kann man jederzeit: Vor dem Eingang steht jetzt ein Rückgabekasten.']],
        items: [{ n: 9, q: 'Was ist ab Februar neu?', opts: ['Man kann am Samstag in die Bibliothek gehen.', 'Die Bibliothek hat montags länger geöffnet.', 'Bücher kann man nur noch während der Öffnungszeiten zurückgeben.'], a: 0 }],
      },
    ]),
    part(3, [
      {
        who: { f1: 'Ärztin', m1: 'Herr Horvat' },
        audio: [
          ['f1', 'Guten Morgen, Herr Horvat. Was fehlt Ihnen denn?'],
          ['m1', 'Guten Morgen, Frau Doktor. Ich habe seit drei Tagen starken Husten, und gestern Abend hatte ich über 38 Grad Fieber.'],
          ['f1', 'Dann höre ich Sie einmal ab. Ja, das ist eine starke Erkältung. Die Lunge ist aber frei.'],
          ['m1', 'Ich arbeite auf dem Bau. Kann ich morgen wieder arbeiten gehen?'],
          ['f1', 'Nein, auf keinen Fall. Ich schreibe Sie bis Freitag krank. Bleiben Sie im Bett und trinken Sie viel Tee.'],
          ['m1', 'Brauche ich ein Antibiotikum?'],
          ['f1', 'Nein, das ist nicht nötig. Ich gebe Ihnen einen Hustensaft. Den nehmen Sie morgens und abends.'],
          ['m1', 'Und wenn es nicht besser wird?'],
          ['f1', 'Dann kommen Sie am Montag noch einmal vorbei, gleich um 8 Uhr.'],
          ['m1', 'Gut, vielen Dank.'],
        ],
        items: [
          { n: 10, q: 'Herr Horvat darf morgen wieder zur Arbeit gehen.', opts: RF, a: 1 },
          { n: 11, q: 'Was bekommt Herr Horvat von der Ärztin?', opts: ['Ein Antibiotikum.', 'Einen Hustensaft.', 'Tabletten gegen Fieber.'], a: 1 },
        ],
      },
      {
        who: { f1: 'Kundin', m1: 'Mitarbeiter' },
        audio: [
          ['f1', 'Guten Tag. Ich möchte am Samstag nach Rheinfurt fahren und am Sonntag zurück.'],
          ['m1', 'Guten Tag. Um wie viel Uhr möchten Sie denn fahren?'],
          ['f1', 'Am Vormittag, so gegen 9 Uhr.'],
          ['m1', 'Da gibt es einen schnellen Zug um 9 Uhr 40, der fährt direkt. Hin und zurück kostet das 58 Euro. Haben Sie eine Bahncard?'],
          ['f1', 'Nein. Gibt es nichts Günstigeres?'],
          ['m1', 'Doch, das Wochenendticket für 44 Euro. Damit dürfen Sie aber nur Regionalzüge benutzen, und die Fahrt dauert eine Stunde länger.'],
          ['f1', 'Das macht nichts, ich habe Zeit. Dann nehme ich das Wochenendticket.'],
          ['m1', 'Gern. Zahlen Sie bar oder mit Karte?'],
          ['f1', 'Mit Karte, bitte.'],
        ],
        items: [
          { n: 12, q: 'Die Kundin kauft eine Fahrkarte nur für die Hinfahrt.', opts: RF, a: 1 },
          { n: 13, q: 'Warum nimmt die Kundin das Wochenendticket?', opts: ['Weil sie damit schneller ankommt.', 'Weil sie eine Bahncard hat.', 'Weil es weniger kostet.'], a: 2 },
        ],
      },
      {
        who: { m1: 'Herr Lorenz', f1: 'Frau Jensen' },
        audio: [
          ['m1', 'Frau Jensen, haben Sie einen Moment?'],
          ['f1', 'Ja, Herr Lorenz, worum geht es?'],
          ['m1', 'Wir haben einen großen Auftrag bekommen. 2000 Pakete müssen bis Freitag fertig sein. Könnten Sie diese Woche länger bleiben?'],
          ['f1', 'Wie lange denn?'],
          ['m1', 'Am Mittwoch und am Donnerstag jeweils zwei Stunden, also bis 18 Uhr.'],
          ['f1', 'Am Mittwoch geht es. Aber am Donnerstag muss ich meinen Sohn um halb fünf vom Kindergarten abholen.'],
          ['m1', 'Verstehe. Könnten Sie dann am Donnerstag morgens früher anfangen, um 6 statt um 8 Uhr?'],
          ['f1', 'Ja, das ist möglich. Mein Mann bringt den Kleinen morgens hin.'],
          ['m1', 'Wunderbar. Die Überstunden bekommen Sie natürlich bezahlt. Oder Sie nehmen dafür nächste Woche einen Tag frei.'],
          ['f1', 'Dann nehme ich lieber nächste Woche den Freitag frei.'],
        ],
        items: [
          { n: 14, q: 'Der Chef bittet Frau Jensen, diese Woche mehr zu arbeiten.', opts: RF, a: 0 },
          { n: 15, q: 'Was macht Frau Jensen am Donnerstag?', opts: ['Sie beginnt früher mit der Arbeit.', 'Sie bleibt bis 18 Uhr in der Firma.', 'Sie nimmt den Tag frei.'], a: 0 },
        ],
      },
      {
        who: { f1: 'Carla', m1: 'Ben' },
        audio: [
          ['f1', 'Hallo Ben, hier ist Carla. Du, ich ziehe am Samstag um. Könntest du mir vielleicht helfen?'],
          ['m1', 'Am Samstag? Vormittags spiele ich Fußball, aber ab 13 Uhr habe ich Zeit.'],
          ['f1', 'Das passt gut. Vormittags packen wir sowieso noch. Den Transporter hole ich erst um 12 Uhr.'],
          ['m1', 'Wie viele Leute seid ihr denn?'],
          ['f1', 'Mein Bruder kommt und zwei Kolleginnen. Aber für die Waschmaschine brauchen wir noch jemand Starken.'],
          ['m1', 'Kein Problem. Soll ich etwas mitbringen? Kartons vielleicht?'],
          ['f1', 'Kartons habe ich genug. Aber einen Akkuschrauber könnten wir gut brauchen, für die Schränke.'],
          ['m1', 'Den bringe ich mit. Und wohin ziehst du?'],
          ['f1', 'In die Mozartstraße 31, dritter Stock. Leider ohne Aufzug.'],
          ['m1', 'Oje. Na gut, dann bis Samstag!'],
        ],
        items: [
          { n: 16, q: 'Carla bittet Ben um Hilfe beim Umzug.', opts: RF, a: 0 },
          { n: 17, q: 'Was bringt Ben am Samstag mit?', opts: ['Kartons.', 'Werkzeug.', 'Einen Transporter.'], a: 1 },
        ],
      },
    ]),
    part(4, [
      {
        ex: 5,
        audio: [['f1', 'Viele Eltern sehen nur die Probleme. Aber meine Tochter ist elf und benutzt auf ihrem Handy eine App für Englischvokabeln. Jeden Tag zehn Minuten. Ihre Noten sind viel besser geworden. Und wenn sie in Mathe etwas nicht versteht, schaut sie sich ein Erklärvideo an. Das finde ich prima.']],
        items: [],
      },
      {
        audio: [['m1', 'Mein Sohn ist neun und fährt allein mit dem Bus zum Training. Deshalb hat er seit einem halben Jahr ein einfaches Handy. Wenn der Bus Verspätung hat, ruft er mich kurz an. Und ich kann ihm schreiben, wenn ich ihn später abhole. So bin ich viel ruhiger. Spiele hat er darauf nicht.']],
        items: [{ n: 18, q: '', opts: AF, a: 1 }],
      },
      {
        audio: [['f2', 'Bei uns zu Hause gab es früher jeden Abend Streit wegen des Handys. Jetzt haben wir einen Plan gemacht: eine Stunde am Tag, und beim Essen bleibt das Handy in der Küche. Um 20 Uhr geben beide Kinder ihre Geräte ab. Seitdem funktioniert es viel besser, und wir reden wieder mehr miteinander.']],
        items: [{ n: 19, q: '', opts: AF, a: 3 }],
      },
      {
        audio: [['m2', 'Ich bin Erzieher und sehe schon Sechsjährige mit einem Smartphone. Das verstehe ich nicht. In dem Alter sollen Kinder draußen spielen, malen oder Bücher anschauen. Meine Tochter ist sieben und fragt natürlich auch schon danach. Aber sie bekommt ihr erstes Handy frühestens in der fünften Klasse. Das reicht völlig.']],
        items: [{ n: 20, q: '', opts: AF, a: 0 }],
      },
    ], {
      topic: 'Thema: Kinder und Handys',
      stmts: [
        'Kleine Kinder brauchen noch kein eigenes Handy.',
        'Mit dem Handy kann ich mein Kind immer erreichen.',
        'Handys sind für Kinder viel zu teuer.',
        'Feste Regeln für die Handyzeit sind wichtig.',
        'In der Schule sollten Handys verboten sein.',
        'Kinder können mit dem Handy auch etwas lernen.',
      ],
    }),
  ],
};
