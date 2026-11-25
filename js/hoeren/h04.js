import { part, RF, AF } from './fmt.js';

export default {
  id: 'h04', title: 'Variante 4', about: 'Stadtwerke, Zugdurchsage, Fahrschule, Stadtbücherei · Sturm, Stadtmarathon, Supermarkt, Museum, Grippeimpfung · Girokonto, Wasserschaden, Zusage für eine Stelle, Klassenfahrt · Arbeiten am Wochenende und im Schichtdienst',
  parts: [
    part(1, [
      {
        audio: [['f1', 'Guten Tag, hier sind die Stadtwerke Bergheim mit einer Nachricht für Familie Castillo. Am Donnerstag lesen wir in Ihrem Haus die Wasserzähler ab. Unser Mitarbeiter kommt zwischen 14 und 16 Uhr. Sollten Sie nicht zu Hause sein, lesen Sie den Zähler bitte selbst ab und schreiben Sie die Zahl auf die Karte, die Sie in Ihrem Briefkasten finden. Die Karte können Sie kostenlos an uns zurückschicken. Vielen Dank.']],
        items: [{ n: 1, q: 'Was soll Familie Castillo tun, wenn am Donnerstag niemand zu Hause ist?', opts: ['Einen neuen Termin vereinbaren.', 'Den Zählerstand selbst aufschreiben und abschicken.', 'Den Wohnungsschlüssel bei Nachbarn lassen.'], a: 1 }],
      },
      {
        audio: [['m1', 'Sehr geehrte Fahrgäste, in wenigen Minuten erreichen wir Tannenburg Hauptbahnhof. Wegen einer Baustelle endet dieser Zug heute hier und fährt nicht weiter nach Seehausen. Reisende nach Seehausen steigen bitte in den Bus um. Er steht direkt vor dem Bahnhof, am Ausgang Nord, und fährt um 16 Uhr 5 ab. Ihre Fahrkarten gelten auch im Bus. Bitte vergessen Sie Ihr Gepäck nicht.']],
        items: [{ n: 2, q: 'Wie kommen Reisende heute nach Seehausen?', opts: ['Mit einem Bus ab Tannenburg.', 'Mit diesem Zug, aber mit Verspätung.', 'Mit einem anderen Zug um 16 Uhr 5.'], a: 0 }],
      },
      {
        audio: [['f1', 'Hallo, Herr Bajwa, Fahrschule Tempo, hier ist Nicole Arendt. Es geht um Ihre Fahrstunde morgen um 17 Uhr. Ihr Fahrlehrer, Herr Stein, hat sich das Bein verletzt und fällt zwei Wochen aus. Sie können morgen trotzdem fahren, aber mit meiner Kollegin, Frau Blum. Treffpunkt ist wie immer vor dem Büro in der Kastanienstraße 5. Und denken Sie daran: Ihre theoretische Prüfung ist am 3. Juni. Bis morgen!']],
        items: [{ n: 3, q: 'Was ist morgen anders?', opts: ['Herr Bajwa fährt nicht mit seinem Fahrlehrer.', 'Die Fahrstunde fällt aus.', 'Der Treffpunkt ist an einem anderen Ort.'], a: 0 }],
      },
      {
        audio: [['m1', 'Guten Tag, Frau Nyberg, hier ist die Stadtbücherei am Mühlentor. Das Buch, das Sie bestellt haben, ist jetzt da: der Reiseführer für Portugal. Wir legen ihn bis Samstag für Sie zurück. Danach geben wir ihn an den nächsten Leser weiter. Bitte bringen Sie beim Abholen Ihren Bibliotheksausweis mit. Übrigens: Die beiden Kochbücher müssen Sie erst Ende des Monats zurückbringen. Auf Wiederhören.']],
        items: [{ n: 4, q: 'Was soll Frau Nyberg bis Samstag tun?', opts: ['Zwei Kochbücher zurückgeben.', 'Ihren Ausweis verlängern.', 'Ein bestelltes Buch abholen.'], a: 2 }],
      },
    ]),
    part(2, [
      {
        audio: [['f1', 'Die Wetteraussichten. Heute zieht ein Sturm über das Land. Vor allem an der Küste weht der Wind sehr stark, dazu gibt es immer wieder Regenschauer. Bitte gehen Sie nicht in den Wald und in die Parks, es können Äste herunterfallen. Die Temperaturen liegen bei 12 Grad. In der Nacht wird der Wind schwächer. Morgen ist es ruhig und meist trocken, mit 10 Grad aber etwas frischer.']],
        items: [{ n: 5, q: 'Wovor wird heute gewarnt?', opts: ['Vor starkem Wind.', 'Vor Schnee und Glätte.', 'Vor großer Kälte.'], a: 0 }],
      },
      {
        audio: [['m1', 'Verkehrshinweise für die Region. Wegen des Stadtmarathons sind heute von 9 bis 15 Uhr viele Straßen in der Innenstadt gesperrt, vor allem rund um den Rathausplatz. Die Straßenbahnlinien 2 und 5 fahren in dieser Zeit nur bis zum Hauptbahnhof. Die U-Bahn ist nicht betroffen und fährt sogar häufiger, alle fünf Minuten. Wer mit dem Auto kommt, sollte am Messegelände parken.']],
        items: [{ n: 6, q: 'Was erfahren Sie über die U-Bahn?', opts: ['Sie fährt nur bis zum Hauptbahnhof.', 'Sie fährt heute bis 15 Uhr nicht.', 'Sie fährt heute öfter als sonst.'], a: 2 }],
      },
      {
        audio: [['f1', 'Diese Woche bei Vollgut, Ihrem Supermarkt in der Ringstraße: Frische Äpfel aus der Region, das Kilo für 1 Euro 79. Ein Pfund Kaffee für nur 4 Euro 49. Und am Freitag und Samstag gibt es an der Fleischtheke Hähnchen zum halben Preis. Neu bei uns: Bestellen Sie im Internet und holen Sie Ihren Einkauf fertig gepackt bei uns ab. Vollgut – jeden Tag bis 21 Uhr für Sie da.']],
        items: [{ n: 7, q: 'Was ist neu im Supermarkt?', opts: ['Er bringt den Einkauf nach Hause.', 'Man kann online bestellen und die Waren abholen.', 'Es gibt jetzt eine Fleischtheke.'], a: 1 }],
      },
      {
        audio: [['m1', 'Und jetzt unser Kulturtipp. Im Stadtmuseum Arnsfeld beginnt am Freitag eine Ausstellung mit alten Fotos und Filmen. Sie zeigt unsere Stadt vor 100 Jahren und läuft bis zum 30. April. Der Eintritt kostet 6 Euro, für Kinder und Jugendliche bis 18 Jahre ist er frei. Jeden Sonntag um 11 Uhr gibt es eine Führung in einfacher Sprache. Dafür müssen Sie sich nicht anmelden und nichts extra bezahlen. Montags ist das Museum geschlossen.']],
        items: [{ n: 8, q: 'Was erfahren Sie über die Führung?', opts: ['Sie kostet 6 Euro extra.', 'Man muss sich dafür anmelden.', 'Sie findet einmal pro Woche statt.'], a: 2 }],
      },
      {
        audio: [['f1', 'Ein Hinweis vom Gesundheitsamt: Die Grippezeit beginnt. Besonders Menschen über 60 und Personen mit chronischen Krankheiten sollten sich jetzt impfen lassen. Die Impfung bekommen Sie bei Ihrem Hausarzt und seit diesem Jahr auch in vielen Apotheken. Die Krankenkasse übernimmt die Kosten. Die beste Zeit für die Impfung ist Oktober oder November, denn der Schutz beginnt erst nach etwa zwei Wochen.']],
        items: [{ n: 9, q: 'Was ist seit diesem Jahr möglich?', opts: ['Man kann sich im Gesundheitsamt impfen lassen.', 'Man kann sich in der Apotheke impfen lassen.', 'Man kann sich schon im Sommer impfen lassen.'], a: 1 }],
      },
    ]),
    part(3, [
      {
        who: { m1: 'Bankberater', f1: 'Frau Mensah' },
        audio: [
          ['m1', 'Guten Tag, was kann ich für Sie tun?'],
          ['f1', 'Guten Tag. Ich möchte ein Girokonto eröffnen. Ich fange nächsten Monat eine neue Stelle an und brauche ein Konto für mein Gehalt.'],
          ['m1', 'Gern. Haben Sie Ihren Ausweis und eine Meldebescheinigung dabei?'],
          ['f1', 'Den Ausweis ja. Die Meldebescheinigung liegt leider zu Hause.'],
          ['m1', 'Kein Problem, die schicken Sie mir einfach heute Abend per E-Mail. Das Formular füllen wir jetzt schon aus.'],
          ['f1', 'Gut. Was kostet das Konto?'],
          ['m1', '4 Euro 90 im Monat. Die Bankkarte ist kostenlos, eine Kreditkarte kostet 30 Euro im Jahr.'],
          ['f1', 'Eine Kreditkarte brauche ich nicht. Wann bekomme ich die Bankkarte?'],
          ['m1', 'Die kommt in etwa einer Woche mit der Post. Die Geheimnummer schicken wir zwei Tage später in einem zweiten Brief.'],
          ['f1', 'Sehr gut, vielen Dank.'],
        ],
        items: [
          { n: 10, q: 'Frau Mensah möchte ein Konto eröffnen.', opts: RF, a: 0 },
          { n: 11, q: 'Was fehlt der Bank noch von Frau Mensah?', opts: ['Ihr Ausweis.', 'Ihr Arbeitsvertrag.', 'Ihre Meldebescheinigung.'], a: 2 },
        ],
      },
      {
        who: { f1: 'Frau Winkler', m1: 'Herr Aksoy' },
        audio: [
          ['f1', 'Guten Tag, Herr Aksoy, hier ist Ihre Mieterin, Winkler aus dem zweiten Stock. Ich habe ein Problem: In meinem Bad tropft Wasser von der Decke.'],
          ['m1', 'Oh. Seit wann denn?'],
          ['f1', 'Seit gestern Abend. Ich habe einen Eimer daruntergestellt.'],
          ['m1', 'Das kommt sicher aus der Wohnung über Ihnen. Ich rufe sofort den Installateur an.'],
          ['f1', 'Wann kann er kommen? Ich bin heute nur bis 14 Uhr zu Hause.'],
          ['m1', 'Heute schafft er es nicht mehr. Geht es morgen früh um 8 Uhr?'],
          ['f1', 'Morgen früh habe ich einen Arzttermin. Aber ab 11 Uhr bin ich wieder da.'],
          ['m1', 'Gut, dann sage ich ihm: morgen um 11 Uhr 30. Machen Sie bitte ein paar Fotos von der Decke, die brauche ich für die Versicherung.'],
          ['f1', 'Mache ich. Die schicke ich Ihnen gleich aufs Handy.'],
        ],
        items: [
          { n: 12, q: 'Frau Winkler meldet dem Vermieter einen Schaden in ihrer Wohnung.', opts: RF, a: 0 },
          { n: 13, q: 'Wann kommt der Installateur?', opts: ['Heute vor 14 Uhr.', 'Morgen um 11 Uhr 30.', 'Morgen um 8 Uhr.'], a: 1 },
        ],
      },
      {
        who: { f1: 'Frau Reuter', m1: 'Herr Sesay' },
        audio: [
          ['f1', 'Guten Tag, Herr Sesay, hier ist Reuter von der Firma Gartenbau Hoffmann. Sie waren letzte Woche zum Vorstellungsgespräch bei uns.'],
          ['m1', 'Ja, guten Tag, Frau Reuter!'],
          ['f1', 'Ich habe eine gute Nachricht: Wir möchten Ihnen die Stelle geben.'],
          ['m1', 'Das freut mich sehr! Vielen Dank.'],
          ['f1', 'Können Sie schon am 1. April anfangen?'],
          ['m1', 'Leider nicht ganz. Bei meiner jetzigen Firma muss ich noch bis zum 15. April arbeiten.'],
          ['f1', 'Das ist in Ordnung, dann beginnen Sie am 16. April. Die Arbeitszeit ist von 7 bis 16 Uhr, freitags nur bis 13 Uhr.'],
          ['m1', 'Sehr gut. Brauche ich eigene Arbeitskleidung?'],
          ['f1', 'Nein, die bekommen Sie von uns. Nur Sicherheitsschuhe müssen Sie selbst kaufen.'],
          ['m1', 'Die habe ich schon. Dann bis zum 16. April, Frau Reuter!'],
        ],
        items: [
          { n: 14, q: 'Herr Sesay hat die Stelle nicht bekommen.', opts: RF, a: 1 },
          { n: 15, q: 'Wann fängt Herr Sesay bei der neuen Firma an?', opts: ['Am 16. April.', 'Am 1. April.', 'Am 15. April.'], a: 0 },
        ],
      },
      {
        who: { f1: 'Frau Haddad', f2: 'Frau Seidel' },
        audio: [
          ['f1', 'Guten Tag, Frau Seidel. Ich habe eine Frage zur Klassenfahrt im Mai.'],
          ['f2', 'Guten Tag, Frau Haddad. Ja, bitte?'],
          ['f1', 'Im Brief steht, die Fahrt kostet 180 Euro. Das ist im Moment sehr viel für uns. Mein Mann ist seit Januar arbeitslos.'],
          ['f2', 'Das verstehe ich. Aber Samira soll auf jeden Fall mitfahren. Sie können beim Jobcenter einen Antrag stellen, dann werden die Kosten übernommen.'],
          ['f1', 'Wirklich? Das wusste ich nicht. Und wo bekomme ich den Antrag?'],
          ['f2', 'Den habe ich hier in der Schule. Ich gebe Samira morgen das Formular mit. Sie müssen es nur ausfüllen.'],
          ['f1', 'Bis wann muss ich das machen?'],
          ['f2', 'Am besten bis Ende März. Die Fahrt ist vom 12. bis zum 16. Mai.'],
          ['f1', 'Vielen Dank, Frau Seidel. Da bin ich sehr froh.'],
        ],
        items: [
          { n: 16, q: 'Samira kann nicht an der Klassenfahrt teilnehmen.', opts: RF, a: 1 },
          { n: 17, q: 'Wie bekommt Frau Haddad das Formular?', opts: ['Sie holt es beim Jobcenter ab.', 'Es kommt mit der Post.', 'Ihre Tochter bringt es aus der Schule mit.'], a: 2 },
        ],
      },
    ]),
    part(4, [
      {
        ex: 1,
        audio: [['f1', 'Ich bin Krankenpflegerin und arbeite oft von 14 bis 22 Uhr. Viele finden das schlimm, aber ich nicht. Am Vormittag gehe ich in Ruhe einkaufen, zum Arzt oder zum Amt. Da ist es überall leer, und ich muss nicht lange warten. Meine Freundinnen mit Bürojob müssen dafür Urlaub nehmen.']],
        items: [],
      },
      {
        audio: [['m1', 'Ich arbeite von Montag bis Freitag in einer Werkstatt, und das reicht mir. Mein Chef hat mich schon zweimal gefragt, ob ich samstags kommen kann. Ich habe Nein gesagt. Samstag und Sonntag gehören meinem Fußballverein und meinen Freunden. Diese zwei Tage brauche ich einfach für mich.']],
        items: [{ n: 18, q: '', opts: AF, a: 5 }],
      },
      {
        audio: [['f2', 'Ich arbeite in einem Restaurant, fast immer abends und auch samstags und sonntags. Wenn ich nach Hause komme, schlafen mein Mann und die Kinder schon. Morgens sind sie in der Schule, wenn ich aufstehe. Gemeinsam essen wir eigentlich nur am Montag, da habe ich frei. Das finde ich sehr schade.']],
        items: [{ n: 19, q: '', opts: AF, a: 4 }],
      },
      {
        audio: [['m2', 'Ich fahre Bus, auch an Sonntagen und Feiertagen. Am Anfang war das schwer. Aber für diese Tage gibt es einen Zuschlag, und am Monatsende habe ich ungefähr 300 Euro mehr auf dem Konto. Davon bezahlen wir unseren Urlaub. Deshalb mache ich diese Dienste inzwischen sogar gern.']],
        items: [{ n: 20, q: '', opts: AF, a: 2 }],
      },
    ], {
      topic: 'Thema: Arbeiten am Wochenende und im Schichtdienst',
      stmts: [
        'Nachtarbeit macht mich krank.',
        'Durch die Schichtarbeit kann ich tagsüber vieles erledigen.',
        'Für die Arbeit am Wochenende bekomme ich mehr Geld.',
        'Ich möchte gern in den Schichtdienst wechseln.',
        'Wegen meiner Arbeitszeiten sehe ich meine Familie zu wenig.',
        'Am Wochenende zu arbeiten kommt für mich nicht in Frage.',
      ],
    }),
  ],
};
