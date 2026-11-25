import { part, RF, AF } from './fmt.js';

export default {
  id: 'h17', title: 'Variante 7', about: 'Hausarztpraxis, U-Bahn, Zeitarbeitsfirma, Möbelhaus · Gewitter, Ferienstau, Fahrschule, Repair-Café, Buslinie · Elterngeld, Haustier, Schichtplan, gebrauchtes Fahrrad · Selbst kochen oder Fertiggerichte',
  parts: [
    part(1, [
      {
        audio: [['f1', 'Guten Tag, Herr Marković, hier ist die Praxis Doktor Seidel, Brandt am Apparat. Ihre Blutwerte aus dem Labor sind inzwischen da. Es ist nichts Schlimmes, aber Frau Doktor Seidel möchte das Ergebnis gern persönlich mit Ihnen besprechen, weil ein Wert etwas zu hoch ist. Am Telefon geben wir dazu leider keine Auskunft. Eigentlich hätten wir morgen um 8 Uhr 30 etwas frei, aber da ist die Ärztin doch bei einer Fortbildung. Kommen Sie bitte am Donnerstag in die offene Sprechstunde, zwischen 11 und 13 Uhr. Einen Termin brauchen Sie dafür nicht. Auf Wiederhören.']],
        items: [{ n: 1, q: 'Was soll Herr Marković tun?', opts: ['Morgen um 8 Uhr 30 zur Besprechung in die Praxis kommen.', 'Die Praxis anrufen, damit ihm das Ergebnis erklärt wird.', 'Am Donnerstag ohne Anmeldung bei der Ärztin vorbeigehen.'], a: 2 }],
      },
      {
        audio: [['m1', 'Sehr geehrte Fahrgäste, bitte beachten Sie: Wegen Bauarbeiten an den Gleisen wird die Linie U 4 zwischen Rathausplatz und Lindenhof ab heute Abend, 21 Uhr, unterbrochen. Die Sperrung dauert nicht, wie zuerst angekündigt, bis Sonntag, sondern bis Montagmorgen um 4 Uhr. Zwischen den beiden Stationen fahren Ersatzbusse, allerdings nur alle 15 Minuten. Die Busse halten nicht direkt am Rathausplatz, sondern in der Kirchgasse hinter dem Rathaus. Fahrräder können in den Bussen leider nicht mitgenommen werden. Planen Sie bitte mehr Zeit ein.']],
        items: [{ n: 2, q: 'Was erfahren die Fahrgäste?', opts: ['Die U 4 fährt ab Sonntag wieder normal.', 'Zum Bus muss man am Rathaus in eine andere Straße gehen.', 'Die Ersatzbusse fahren erst ab Montagmorgen um 4 Uhr.'], a: 1 }],
      },
      {
        audio: [['f1', 'Guten Tag, Frau Adeyemi, hier spricht Kowalski von der Personalfirma Tempora. Es geht um Ihren Einsatz in der Kantine der Firma Nordpack. Eigentlich sollten Sie dort am Montag anfangen, aber der Kunde braucht Sie jetzt doch erst ab Mittwoch. Die Arbeitszeit bleibt wie besprochen, von 6 bis 14 Uhr 30. Arbeitskleidung bekommen Sie vor Ort, die müssen Sie also nicht kaufen. Den Arbeitsvertrag haben wir schon, es fehlt aber noch die Kopie Ihres Gesundheitszeugnisses. Bitte schicken Sie sie mir bis morgen Mittag per E-Mail, sonst kann ich Sie nicht einplanen. Vielen Dank und auf Wiederhören.']],
        items: [{ n: 3, q: 'Was muss Frau Adeyemi noch erledigen?', opts: ['Der Personalfirma ein Dokument senden, das noch nicht vorliegt.', 'Arbeitskleidung für die Kantine kaufen.', 'Den Arbeitsvertrag bis morgen Mittag unterschreiben.'], a: 0 }],
      },
      {
        audio: [['f1', 'Liebe Kundinnen und Kunden, herzlich willkommen im Einrichtungshaus Wohnland. Während Sie in Ruhe einkaufen, können Ihre Kinder in unserem Spielparadies im Erdgeschoss spielen. Betreut werden Kinder von drei bis neun Jahren, und zwar höchstens 90 Minuten lang. Die Betreuung ist kostenlos, allerdings müssen Sie bei der Anmeldung Ihren Ausweis zeigen. Bitte beachten Sie: Heute schließt das Spielparadies nicht um 19 Uhr, sondern wegen einer Veranstaltung schon um 17 Uhr 30. Kinder unter drei Jahren dürfen nur zusammen mit einem Erwachsenen hinein.']],
        items: [{ n: 4, q: 'Was gilt für die Kinderbetreuung?', opts: ['Sie ist 90 Minuten lang kostenlos, danach muss man bezahlen.', 'Eltern brauchen ein persönliches Dokument, wenn sie ihr Kind dort abgeben.', 'Kinder unter drei Jahren werden heute nur bis 17 Uhr 30 betreut.'], a: 1 }],
      },
    ]),
    part(2, [
      {
        audio: [['f1', 'Und nun das Wetter für das Wochenende. Der Samstag beginnt noch freundlich und sehr warm, mit Temperaturen bis 31 Grad. Am späten Nachmittag bilden sich dann zuerst im Süden kräftige Gewitter mit Starkregen und Hagel, die bis zum Abend auch den Norden erreichen. Wer ein Grillfest plant, sollte es lieber auf den Sonntag verschieben: Dann ist es zwar mit 22 Grad deutlich kühler, aber es bleibt trocken, und nur an der Küste weht noch ein starker Wind. In der neuen Woche wird es wieder wärmer.']],
        items: [{ n: 5, q: 'Was wird für das Wochenende vorhergesagt?', opts: ['Am zweiten Tag muss man nicht mit Regen rechnen.', 'Am Samstag gibt es nur im Süden Gewitter.', 'Am Sonntag wird es mit 31 Grad noch wärmer.'], a: 0 }],
      },
      {
        audio: [['m1', 'Die Verkehrslage. Weil heute in drei Bundesländern die Sommerferien beginnen, ist auf den Autobahnen Richtung Süden viel los. Auf der Autobahn 9 zwischen Hellbrunn und Kirchtal stehen Sie zurzeit auf 14 Kilometern, das bedeutet etwa eine Stunde Zeitverlust. Die Umleitung über die Bundesstraße 15 lohnt sich nicht, denn auch dort staut es sich nach einem Unfall. Unser Rat: Fahren Sie, falls möglich, erst nach 20 Uhr los, dann ist die Strecke erfahrungsgemäß wieder frei. Am Samstag wird ab 7 Uhr früh erneut dichter Verkehr erwartet.']],
        items: [{ n: 6, q: 'Was wird den Autofahrern empfohlen?', opts: ['Die Bundesstraße 15 als Umleitung zu nehmen.', 'Die Abreise auf den späteren Abend zu verschieben.', 'Lieber am Samstag um 7 Uhr früh zu starten.'], a: 1 }],
      },
      {
        audio: [['f1', 'Sie brauchen den Führerschein schnell, zum Beispiel für eine neue Arbeitsstelle? In der Fahrschule Lenkrad am Marktplatz schaffen Sie die Theorie in nur sieben Tagen. Unser nächster Intensivkurs beginnt am 4. August, Unterricht ist täglich von 9 bis 13 Uhr. Der Kurs kostet 290 Euro, die Fahrstunden werden extra berechnet. Wer sich bis Ende Juli anmeldet, bekommt das Lehrbuch und den Zugang zur Lern-App gratis dazu. Der Unterricht ist auf Deutsch, die Theorieprüfung können Sie aber auch in zwölf anderen Sprachen ablegen. Fahrschule Lenkrad – rufen Sie uns an!']],
        items: [{ n: 7, q: 'Was erfahren Sie über das Angebot der Fahrschule?', opts: ['Für 290 Euro bekommt man Theorie und Fahrstunden.', 'Den Unterricht gibt es in zwölf Sprachen.', 'Bei rechtzeitiger Anmeldung muss man das Lernmaterial nicht bezahlen.'], a: 2 }],
      },
      {
        audio: [['m1', 'Unser Tipp für den Stadtteil Westend: Am kommenden Samstag öffnet wieder das Repair-Café im Nachbarschaftshaus an der Gartenstraße. Von 14 bis 17 Uhr helfen Ihnen dort Ehrenamtliche, kaputte Toaster, Lampen, Fahrräder oder Kleidung zu reparieren. Die Hilfe kostet nichts, nur Ersatzteile müssen Sie selbst bezahlen oder mitbringen. Wichtig: Die Geräte werden nicht einfach abgegeben, sondern Sie reparieren gemeinsam mit den Helfern. Große Geräte wie Waschmaschinen können leider nicht angenommen werden. Kaffee und Kuchen gibt es gegen eine kleine Spende.']],
        items: [{ n: 8, q: 'Was sollten Besucher des Repair-Cafés wissen?', opts: ['Man kann sein Gerät am Samstag abgeben und später abholen.', 'Für die Hilfe bei der Reparatur wird eine kleine Spende verlangt.', 'Man arbeitet an seinen kaputten Sachen selbst mit.'], a: 2 }],
      },
      {
        audio: [['f1', 'Nachrichten aus der Region. Ab dem 1. September fährt die neue Buslinie 48 vom Hauptbahnhof über das Klinikum bis ins Gewerbegebiet Ost. Die Stadt reagiert damit auf Wünsche vieler Beschäftigter, die bisher zweimal umsteigen mussten. Die Busse fahren werktags alle 20 Minuten, am Wochenende jedoch nur stündlich. Eigentlich sollte die Linie auch am Freibad halten, aber diese Haltestelle wird erst im nächsten Frühjahr gebaut. In der ersten Woche kann man die neue Linie kostenlos testen, danach gelten die normalen Fahrpreise.']],
        items: [{ n: 9, q: 'Was erfahren Sie über die Linie 48?', opts: ['Wer im Gewerbegebiet arbeitet, kommt künftig einfacher dorthin.', 'Sie hält ab dem 1. September auch am Freibad.', 'Sie fährt an allen Tagen alle 20 Minuten.'], a: 0 }],
      },
    ]),
    part(3, [
      {
        who: { f1: 'Beraterin', m1: 'Herr Santos' },
        audio: [
          ['f1', 'Guten Tag, Herr Santos, nehmen Sie doch Platz. Sie haben Fragen zum Elterngeld?'],
          ['m1', 'Ja. Unser Kind kommt voraussichtlich Anfang Mai zur Welt, und meine Frau und ich möchten beide eine Zeit lang zu Hause bleiben. Ich weiß aber nicht, wie das funktioniert.'],
          ['f1', 'Grundsätzlich bekommen Eltern zusammen zwölf Monate Elterngeld. Wenn auch der zweite Elternteil mindestens zwei Monate zu Hause bleibt, sind es sogar vierzehn.'],
          ['m1', 'Aha. Meine Frau wollte eigentlich das ganze erste Jahr nehmen. Dann könnte ich also noch zwei Monate dazunehmen?'],
          ['f1', 'Richtig. Wie viel Geld Sie bekommen, hängt von Ihrem Einkommen ab, meistens sind es ungefähr 65 Prozent vom Nettolohn.'],
          ['m1', 'Und wann muss ich den Antrag stellen? Am besten jetzt gleich, oder?'],
          ['f1', 'Nein, das geht erst nach der Geburt, weil Sie die Geburtsurkunde brauchen. Warten Sie aber nicht zu lange: Das Geld wird höchstens drei Monate rückwirkend gezahlt.'],
          ['m1', 'Gut zu wissen. Muss ich meinem Chef auch erst dann Bescheid sagen?'],
          ['f1', 'Nein, den Arbeitgeber müssen Sie früher informieren, spätestens sieben Wochen vor Beginn der Elternzeit, und zwar schriftlich.'],
          ['m1', 'Dann schreibe ich den Brief an die Firma noch diese Woche. Das Formular für das Elterngeld nehme ich aber schon mal mit.'],
        ],
        items: [
          { n: 10, q: 'Herr Santos lässt sich beraten, bevor sein Kind geboren ist.', opts: RF, a: 0 },
          { n: 11, q: 'Was will Herr Santos als Nächstes tun?', opts: ['Den Antrag auf Elterngeld abgeben.', 'Seiner Firma mitteilen, dass er Elternzeit nehmen möchte.', 'Die Geburtsurkunde abholen.'], a: 1 },
        ],
      },
      {
        who: { m1: 'Herr Aksoy', f1: 'Frau Lindqvist' },
        audio: [
          ['m1', 'Aksoy, guten Abend.'],
          ['f1', 'Guten Abend, Herr Aksoy, hier ist Lindqvist aus dem zweiten Stock. Ich hätte eine Frage: Meine Tochter wünscht sich schon lange einen Hund. Wäre das im Haus eigentlich erlaubt?'],
          ['m1', 'Einen Hund? Im Mietvertrag steht ja, dass Sie für größere Tiere meine Zustimmung brauchen. An was für einen Hund haben Sie denn gedacht?'],
          ['f1', 'An einen Schäferhund aus dem Tierheim. Er ist schon älter und sehr ruhig.'],
          ['m1', 'Ein Schäferhund? Das ist mir ehrlich gesagt zu viel. Das Haus ist hellhörig, und Familie Brandt unter Ihnen hat ein Baby.'],
          ['f1', 'Das verstehe ich. Und wie wäre es mit einer Katze? Die macht doch keinen Lärm.'],
          ['m1', 'Eine Katze wäre kein Problem. Nur falls sie etwas kaputt macht, zum Beispiel die Türen zerkratzt, müssen Sie den Schaden bezahlen.'],
          ['f1', 'Selbstverständlich, dafür komme ich auf. Muss ich dann eigentlich mehr Miete zahlen?'],
          ['m1', 'Nein, die Miete bleibt gleich. Ich brauche das Ganze aber schriftlich. Schreiben Sie mir bitte eine kurze E-Mail, und ich schicke Ihnen meine Erlaubnis zurück.'],
          ['f1', 'Das mache ich gleich heute Abend.'],
          ['m1', 'Gut. Und bitte holen Sie das Tier erst, wenn Sie meine Antwort haben.'],
          ['f1', 'Natürlich. Vielen Dank, meine Tochter wird sich trotzdem freuen.'],
        ],
        items: [
          { n: 12, q: 'Der Vermieter möchte grundsätzlich keine Tiere in seinem Haus haben.', opts: RF, a: 1 },
          { n: 13, q: 'Was soll Frau Lindqvist tun, bevor sie das Tier holt?', opts: ['Mit Familie Brandt über den Lärm sprechen.', 'Eine höhere Miete überweisen.', 'Ihre Bitte per Mail wiederholen und die Zusage abwarten.'], a: 2 },
        ],
      },
      {
        who: { f1: 'Jana', m1: 'Emre' },
        audio: [
          ['f1', 'Emre, hast du mal eine Minute? Wir haben ein Problem mit dem Plan für nächste Woche.'],
          ['m1', 'Was ist denn passiert?'],
          ['f1', 'Dennis hat sich gerade krankgemeldet. Er hat sich beim Fußball das Bein gebrochen und fällt mindestens vier Wochen aus. Nächste Woche hätte er die Nachtschicht gehabt.'],
          ['m1', 'Oh nein, der Arme. Und jetzt soll ich die Nächte übernehmen? Du weißt doch, dass ich nachts nicht kann, weil die Kinder sonst allein wären.'],
          ['f1', 'Nein, keine Sorge. Die Nachtschicht übernimmt Carla, das habe ich schon mit ihr geklärt. Aber dann fehlt mir jemand für ihre Spätschicht, von Montag bis Mittwoch.'],
          ['m1', 'Spätschicht, also von 14 bis 22 Uhr? Montag und Dienstag ginge das. Am Mittwoch habe ich aber um 16 Uhr einen Termin beim Zahnarzt, den ich schon zweimal verschoben habe.'],
          ['f1', 'Dann frage ich für Mittwoch den neuen Kollegen aus der Verpackung. Und deine Frühschichten an den beiden Tagen streiche ich natürlich.'],
          ['m1', 'Einverstanden. Bekomme ich für die Spätschicht eigentlich den Zuschlag?'],
          ['f1', 'Ja, ab 20 Uhr gibt es 25 Prozent mehr, wie immer. Ich hänge den neuen Plan morgen früh aus.'],
          ['m1', 'Gut, dann schaue ich morgen noch mal drauf.'],
        ],
        items: [
          { n: 14, q: 'Emre arbeitet nächste Woche nachts, weil ein Kollege krank ist.', opts: RF, a: 1 },
          { n: 15, q: 'Wann arbeitet Emre nächste Woche in der Spätschicht?', opts: ['Nur an den ersten beiden Tagen der Woche.', 'Von Montag bis Mittwoch.', 'Am Mittwoch ab 16 Uhr.'], a: 0 },
        ],
      },
      {
        who: { f1: 'Frau Okonkwo', m1: 'Herr Lehner' },
        audio: [
          ['f1', 'Guten Tag, Okonkwo, ich komme wegen Ihrer Anzeige. Ist das Fahrrad noch zu haben?'],
          ['m1', 'Ja, es steht hier in der Garage. Es ist vier Jahre alt, aber ich bin wenig damit gefahren.'],
          ['f1', 'Sieht gut aus. In der Anzeige stand 180 Euro. Darf ich mal eine Runde fahren?'],
          ['m1', 'Natürlich, nur zu.'],
          ['f1', 'So, da bin ich wieder. Es fährt sich angenehm, aber die hintere Bremse funktioniert kaum, und das Licht vorne geht gar nicht.'],
          ['m1', 'Das Licht ist nur ein Kabel, das repariere ich Ihnen sofort. Die Bremse müsste allerdings eine Werkstatt machen, das kostet vielleicht 30 Euro.'],
          ['f1', 'Dann würde ich Ihnen 140 Euro geben.'],
          ['m1', 'Das ist mir zu wenig. Sagen wir 160, und Sie bekommen das Schloss und den Kindersitz dazu.'],
          ['f1', 'Den Kindersitz brauche ich nicht, meine Kinder fahren schon selbst. Aber gut, 160 mit Schloss. Ich habe allerdings nur 150 Euro bar dabei. Könnte ich den Rest überweisen?'],
          ['m1', 'Lieber nicht. Um die Ecke ist ein Geldautomat. Ich repariere inzwischen das Licht und schreibe einen kurzen Kaufvertrag.'],
          ['f1', 'In Ordnung, ich bin in zehn Minuten zurück.'],
        ],
        items: [
          { n: 16, q: 'Bei der Probefahrt merkt Frau Okonkwo, dass am Fahrrad nicht alles in Ordnung ist.', opts: RF, a: 0 },
          { n: 17, q: 'Worauf einigen sich die beiden?', opts: ['Frau Okonkwo zahlt 140 Euro, weil die Bremse kaputt ist.', 'Sie zahlt weniger als zuerst verlangt und bekommt ein Schloss dazu.', 'Sie überweist einen Teil des Geldes später.'], a: 1 },
        ],
      },
    ]),
    part(4, [
      {
        ex: 1,
        audio: [['f1', 'Ich arbeite im Schichtdienst im Krankenhaus und komme oft erst gegen neun Uhr abends nach Hause. Natürlich weiß ich, dass frisches Essen gesünder wäre, und am Wochenende koche ich auch ganz gern. Aber unter der Woche bin ich einfach zu müde, um noch Gemüse zu schneiden und eine Stunde am Herd zu stehen. Dann schiebe ich eine Pizza in den Ofen oder mache mir eine Suppe aus der Dose warm. Das ist nicht ideal, aber ehrlich.']],
        items: [],
      },
      {
        audio: [['m1', 'Früher habe ich oft Fertiggerichte gekauft, die sind ja praktisch und manche schmecken gar nicht schlecht. Aber dann hat mein Sohn eine Allergie bekommen, und ich habe angefangen, die Zutatenlisten zu lesen: Zucker, Farbstoffe und lauter Dinge, deren Namen ich nicht einmal aussprechen kann. Seitdem koche ich fast alles selbst, obwohl es mehr Arbeit macht. Nur so kann ich sicher sein, dass nichts drin ist, was wir nicht vertragen.']],
        items: [{ n: 18, q: '', opts: AF, a: 4 }],
      },
      {
        audio: [['f2', 'Viele sagen ja, frisch kochen sei Luxus, weil Gemüse und Fleisch so viel kosten. Das habe ich auch lange geglaubt. Dann habe ich einen Monat lang alle Kassenzettel gesammelt und nachgerechnet. Das Ergebnis: Wenn ich einen großen Topf Eintopf koche, essen wir zu viert zwei Tage davon, und das kostet weniger als vier Fertiggerichte aus dem Kühlregal. Sicher, es dauert länger, aber am Monatsende bleibt uns deutlich mehr übrig.']],
        items: [{ n: 19, q: '', opts: AF, a: 3 }],
      },
      {
        audio: [['m2', 'Ich wohne mit drei Leuten in einer Wohngemeinschaft. Ganz ehrlich: Ein toller Koch bin ich nicht, und ein Fertiggericht wäre oft schneller und vielleicht sogar leckerer. Trotzdem kochen wir jeden Sonntag zusammen. Einer schneidet Zwiebeln, einer rührt, wir hören Musik und erzählen uns, was in der Woche los war. Das Essen ist dabei gar nicht so wichtig. Mir geht es darum, dass wir gemeinsam etwas machen, statt dass jeder allein vor seinem Teller sitzt.']],
        items: [{ n: 20, q: '', opts: AF, a: 5 }],
      },
    ], {
      topic: 'Thema: Selbst kochen oder Fertiggerichte?',
      stmts: [
        'Fertiggerichte sind heute genauso gesund wie frisches Essen.',
        'Nach der Arbeit fehlt mir die Kraft, lange in der Küche zu stehen.',
        'Selbst kochen ist mir auf Dauer zu teuer.',
        'Wer selbst kocht, gibt weniger Geld aus.',
        'Ich will genau wissen, was in meinem Essen ist.',
        'Beim Kochen ist mir das Zusammensein mit anderen am wichtigsten.',
      ],
    }),
  ],
};
