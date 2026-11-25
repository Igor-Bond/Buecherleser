import { part, RF, AF } from './fmt.js';

export default {
  id: 'h06', title: 'Variante 6', about: 'Paketdienst, Klinik, Volkshochschule, Busdurchsage · Wetter, Verkehr, Reisebüro, Stellenangebot, Stadtlauf · Post, Familienkasse, Fahrgemeinschaft, Handytarif · Der Weg zur Arbeit',
  parts: [
    part(1, [
      {
        audio: [['m1', 'Guten Tag, Frau Sahin, hier spricht der Paketdienst Rapido. Wir wollten Ihnen heute um 10 Uhr 40 ein Paket bringen, aber es war leider niemand zu Hause. Das Paket liegt jetzt im Schreibwarenladen Ulrich in der Tulpenstraße 18. Dort können Sie es ab morgen 9 Uhr abholen. Bitte bringen Sie Ihren Ausweis mit. Der Laden bewahrt das Paket sieben Tage auf, danach geht es zurück an den Absender.']],
        items: [{ n: 1, q: 'Wo ist das Paket jetzt?', opts: ['In einem Geschäft in der Tulpenstraße.', 'Bei einer Nachbarin von Frau Sahin.', 'Wieder beim Absender.'], a: 0 }],
      },
      {
        audio: [['f1', 'Sehr geehrte Besucherinnen und Besucher, bitte beachten Sie: Die Besuchszeit auf allen Stationen endet heute um 19 Uhr. Wegen Bauarbeiten ist der Haupteingang schon ab 18 Uhr geschlossen. Benutzen Sie dann bitte den Seitenausgang neben der Apotheke. Die Cafeteria im ersten Stock hat noch bis 18 Uhr 30 geöffnet. Das Parkhaus können Sie wie immer rund um die Uhr verlassen. Wir danken für Ihr Verständnis.']],
        items: [{ n: 2, q: 'Was sollen Besucher am Abend tun?', opts: ['Das Parkhaus bis 19 Uhr verlassen.', 'Die Stationen schon um 18 Uhr verlassen.', 'Das Haus durch einen anderen Ausgang verlassen.'], a: 2 }],
      },
      {
        audio: [['m1', 'Guten Tag, Herr Tran, hier ist Wiegand von der Volkshochschule Sonnental. Sie haben sich für den Computerkurs am Dienstagabend angemeldet. Leider ist dieser Kurs schon voll. Wir haben aber noch drei Plätze im gleichen Kurs am Samstagvormittag, von 10 bis 12 Uhr 30. Der Preis bleibt gleich, 65 Euro. Wenn Sie den Platz möchten, melden Sie sich bitte bis Freitag bei uns, unter 5 5 5, 0 1, 7 2. Vielen Dank.']],
        items: [{ n: 3, q: 'Was bietet die Volkshochschule Herrn Tran an?', opts: ['Einen günstigeren Kurs am Dienstag.', 'Einen Platz in einem Kurs am Samstag.', 'Einen Platz auf der Warteliste.'], a: 1 }],
      },
      {
        audio: [['f1', 'Liebe Fahrgäste, hier spricht Ihre Busfahrerin. Wegen eines Straßenfestes können wir heute die Haltestellen Marktplatz und Theater nicht anfahren. Wer zum Marktplatz möchte, steigt bitte an der nächsten Haltestelle aus, an der Post. Von dort sind es etwa fünf Minuten zu Fuß. Danach fahren wir ohne Halt weiter bis zum Hauptbahnhof. Dort kommen wir pünktlich um 15 Uhr 10 an.']],
        items: [{ n: 4, q: 'Was sollen Fahrgäste tun, die zum Marktplatz wollen?', opts: ['An der Post aussteigen und laufen.', 'Bis zum Hauptbahnhof mitfahren.', 'Am Theater umsteigen.'], a: 0 }],
      },
    ]),
    part(2, [
      {
        audio: [['m1', 'Das Wetter am Wochenende. Der Samstag beginnt noch freundlich, aber schon gegen Mittag kommt starker Wind auf, an der Küste sogar Sturm. Regen fällt am Samstag kaum. Die Temperaturen liegen bei 9 Grad. In der Nacht zum Sonntag wird es frostig, bis minus 3 Grad. Am Sonntag fällt dann der erste Schnee, zuerst in den Bergen, am Nachmittag auch im Flachland. Achtung, die Straßen können glatt sein.']],
        items: [{ n: 5, q: 'Wie wird das Wetter am Sonntag?', opts: ['Es wird stürmisch.', 'Es regnet den ganzen Tag.', 'Es schneit.'], a: 2 }],
      },
      {
        audio: [['f1', 'Und nun der Verkehr. Auf der Autobahn 4 Richtung Osten ist die Ausfahrt Rehfelde wegen Bauarbeiten bis Sonntagabend gesperrt. Wer nach Rehfelde möchte, fährt bitte schon eine Ausfahrt vorher ab, in Ulmenau. Auf der Bundesstraße 12 liegt bei Wolkenstein ein Reifen auf der Fahrbahn, fahren Sie dort bitte langsam. Und am Flughafen ist das Parkhaus 2 voll, im Parkhaus 3 sind noch Plätze frei.']],
        items: [{ n: 6, q: 'Was sollen Autofahrer tun, die nach Rehfelde wollen?', opts: ['Die Autobahn schon in Ulmenau verlassen.', 'Über die Bundesstraße 12 fahren.', 'Im Parkhaus 3 parken.'], a: 0 }],
      },
      {
        audio: [['m1', 'Träumen Sie vom Urlaub? Das Reisebüro Sonnenweg in der Poststraße macht es möglich! Eine Woche Ostsee im Familienhotel, mit Frühstück, schon ab 299 Euro pro Person. Kinder bis sechs Jahre reisen kostenlos mit. Wer bis zum 31. März bucht, spart noch einmal 10 Prozent. Die Anreise mit Bahn oder Auto ist nicht im Preis enthalten. Reisebüro Sonnenweg – wir beraten Sie gern, auch samstags.']],
        items: [{ n: 7, q: 'Was ist bei dem Angebot kostenlos?', opts: ['Die Fahrt mit der Bahn.', 'Die Reise für kleine Kinder.', 'Das Abendessen im Hotel.'], a: 1 }],
      },
      {
        audio: [['f1', 'Arbeit in der Region: Die Großbäckerei Wittkamp in Zellerfeld sucht ab sofort Fahrerinnen und Fahrer. Sie bringen frühmorgens Brot und Brötchen in unsere Filialen. Arbeitsbeginn ist um 4 Uhr, um 10 Uhr haben Sie schon Feierabend. Sie brauchen einen Führerschein Klasse B. Eine Ausbildung als Bäcker ist nicht nötig. Rufen Sie an, werktags zwischen 12 und 15 Uhr, unter 5 5 5, 0 1, 4 8.']],
        items: [{ n: 8, q: 'Was braucht man für diese Stelle?', opts: ['Eine Ausbildung als Bäcker.', 'Erfahrung als Verkäufer.', 'Einen Führerschein.'], a: 2 }],
      },
      {
        audio: [['m1', 'Am Sonntag findet der zwanzigste Stadtlauf von Rosenau statt. Start ist um 10 Uhr am Rathaus. Deshalb ist die Innenstadt von 8 bis 14 Uhr für Autos gesperrt. Auch die Parkhäuser dort sind in dieser Zeit nicht erreichbar. Busse und Straßenbahnen fahren nur bis zum Bahnhof. Wer noch mitlaufen möchte: Anmelden kann man sich bis Samstag, 18 Uhr, im Sportgeschäft Zöllner am Markt. Die Teilnahme kostet 12 Euro.']],
        items: [{ n: 9, q: 'Was müssen Autofahrer am Sonntag beachten?', opts: ['Bis zum frühen Nachmittag können sie nicht in die Innenstadt fahren.', 'Sie dürfen nur in den Parkhäusern der Innenstadt parken.', 'Sie müssen für die Fahrt in die Innenstadt 12 Euro bezahlen.'], a: 0 }],
      },
    ]),
    part(3, [
      {
        who: { m1: 'Kunde', f1: 'Mitarbeiterin' },
        audio: [
          ['m1', 'Guten Tag. Ich möchte dieses Paket nach Portugal schicken, zu meiner Schwester. Es ist ein Geschenk.'],
          ['f1', 'Gern. Stellen Sie es bitte auf die Waage. Das sind 4 Kilo 300.'],
          ['m1', 'Was kostet das?'],
          ['f1', 'Bis 5 Kilo kostet es 17 Euro 99. Dann ist es in etwa fünf Tagen da.'],
          ['m1', 'Fünf Tage? Meine Schwester hat schon am Mittwoch Geburtstag. Geht es nicht schneller?'],
          ['f1', 'Doch, mit Express. Dann ist es in zwei Tagen da, das kostet aber 42 Euro.'],
          ['m1', 'Oh, das ist mir zu teuer. Dann kommt das Geschenk eben ein bisschen später. Ich nehme das normale Paket.'],
          ['f1', 'In Ordnung. Füllen Sie bitte noch diesen Schein aus, mit der Adresse in Portugal.'],
          ['m1', 'Mache ich. Kann ich mit Karte zahlen?'],
          ['f1', 'Ja, natürlich.'],
        ],
        items: [
          { n: 10, q: 'Der Mann schickt ein Geschenk ins Ausland.', opts: RF, a: 0 },
          { n: 11, q: 'Wie schickt der Mann das Paket?', opts: ['Mit Express für 42 Euro.', 'Als normales Paket für 17 Euro 99.', 'Gar nicht, weil es zu spät ankommt.'], a: 1 },
        ],
      },
      {
        who: { m1: 'Herr Zander', f1: 'Frau Rezaei' },
        audio: [
          ['m1', 'Familienkasse, Zander, guten Tag.'],
          ['f1', 'Guten Tag, Rezaei. Ich habe vor sechs Wochen Kindergeld für meinen Sohn beantragt und noch keine Antwort bekommen.'],
          ['m1', 'Einen Moment, ich schaue nach. Wann ist Ihr Sohn geboren?'],
          ['f1', 'Am 12. Februar.'],
          ['m1', 'Ja, ich sehe Ihren Antrag. Hier fehlt noch die Geburtsurkunde. Wir haben Ihnen dazu vor zwei Wochen einen Brief geschickt.'],
          ['f1', 'Einen Brief? Den habe ich nicht bekommen. Wir sind am Ersten umgezogen.'],
          ['m1', 'Dann haben wir noch Ihre alte Adresse. Sagen Sie mir bitte die neue.'],
          ['f1', 'Weidenweg 27. Und die Urkunde – soll ich die vorbeibringen?'],
          ['m1', 'Das ist nicht nötig. Laden Sie einfach eine Kopie auf unserer Internetseite hoch. Danach dauert es noch ungefähr zwei Wochen.'],
          ['f1', 'Gut, das mache ich heute noch.'],
        ],
        items: [
          { n: 12, q: 'Frau Rezaei bekommt schon Kindergeld für ihren Sohn.', opts: RF, a: 1 },
          { n: 13, q: 'Was soll Frau Rezaei tun?', opts: ['Eine Kopie der Geburtsurkunde über das Internet schicken.', 'Die Urkunde persönlich zur Familienkasse bringen.', 'Einen neuen Antrag stellen.'], a: 0 },
        ],
      },
      {
        who: { f1: 'Jelena', m1: 'Ruben' },
        audio: [
          ['f1', 'Sag mal, Ruben, du wohnst doch auch in Talheim, oder?'],
          ['m1', 'Ja, in der Nähe vom Sportplatz. Warum?'],
          ['f1', 'Mein Auto ist ab Montag zwei Wochen in der Werkstatt. Mit dem Bus brauche ich über eine Stunde zur Firma. Könnte ich bei dir mitfahren?'],
          ['m1', 'Klar, kein Problem. Ich fahre immer um 6 Uhr 40 los.'],
          ['f1', 'Super! Soll ich zu dir kommen?'],
          ['m1', 'Nein, das ist zu weit für dich. Ich hole dich an der Tankstelle an der Hauptstraße ab, da fahre ich sowieso vorbei. Sagen wir um Viertel vor sieben?'],
          ['f1', 'Perfekt. Und ich gebe dir natürlich Geld fürs Benzin.'],
          ['m1', 'Ach was, das musst du nicht. Bring lieber mal einen Kuchen mit, du backst doch so gut.'],
          ['f1', 'Abgemacht!'],
        ],
        items: [
          { n: 14, q: 'Jelena möchte mit ihrem Kollegen zusammen zur Arbeit fahren.', opts: RF, a: 0 },
          { n: 15, q: 'Wo treffen sich die beiden morgens?', opts: ['Bei Ruben am Sportplatz.', 'An der Bushaltestelle.', 'An der Tankstelle.'], a: 2 },
        ],
      },
      {
        who: { m1: 'Kunde', f1: 'Verkäuferin' },
        audio: [
          ['m1', 'Guten Tag. Ich zahle im Moment 30 Euro im Monat für meinen Handyvertrag. Das ist mir zu viel. Haben Sie etwas Günstigeres?'],
          ['f1', 'Bestimmt. Telefonieren Sie viel, und brauchen Sie viel Internet?'],
          ['m1', 'Telefonieren nicht so viel. Aber ich schaue unterwegs oft Videos.'],
          ['f1', 'Dann empfehle ich Ihnen unseren Tarif Smart: 20 Gigabyte Internet für 15 Euro im Monat. Telefonieren ist dabei.'],
          ['m1', 'Das klingt gut. Wie lange läuft der Vertrag?'],
          ['f1', '24 Monate. Es gibt den Tarif auch ohne feste Laufzeit, dann kostet er 18 Euro.'],
          ['m1', 'Ich weiß noch nicht, wie lange ich in dieser Stadt bleibe. Dann lieber ohne Laufzeit.'],
          ['f1', 'Gern. Ich brauche nur Ihren Ausweis und Ihre Bankverbindung.'],
          ['m1', 'Beides habe ich dabei. Kann ich meine alte Nummer behalten?'],
          ['f1', 'Ja, das kostet nichts extra.'],
        ],
        items: [
          { n: 16, q: 'Der Kunde möchte ein neues Handy kaufen.', opts: RF, a: 1 },
          { n: 17, q: 'Welchen Tarif nimmt der Kunde?', opts: ['Den für 15 Euro mit 24 Monaten Laufzeit.', 'Den für 18 Euro ohne feste Laufzeit.', 'Er bleibt bei seinem Vertrag für 30 Euro.'], a: 1 },
        ],
      },
    ]),
    part(4, [
      {
        ex: 4,
        audio: [['f1', 'Ich wohne in einem Dorf, 25 Kilometer von der Firma entfernt. Früher bin ich jeden Tag allein gefahren. Dann habe ich gemerkt: Zwei Kolleginnen wohnen ganz in meiner Nähe. Jetzt fahren wir zu dritt, jede Woche mit einem anderen Wagen. Wir teilen die Kosten, und unterwegs ist es viel lustiger.']],
        items: [],
      },
      {
        audio: [['m1', 'Ich arbeite im Schichtdienst im Krankenhaus. Meine Frühschicht beginnt um 5 Uhr 30. Um diese Zeit fährt bei uns noch kein Bus, der erste kommt erst um 6. Und mit dem Fahrrad sind es 18 Kilometer, das schaffe ich morgens nicht. Also muss ich den Wagen nehmen, auch wenn das Benzin teuer ist.']],
        items: [{ n: 18, q: '', opts: AF, a: 2 }],
      },
      {
        audio: [['f2', 'Ich habe gar keinen Führerschein. Ich nehme jeden Morgen die Linie 34, die Fahrt dauert 40 Minuten. Viele finden das lang, aber ich mag es. Ich lese ein Buch, höre Musik oder lerne Vokabeln für meinen Deutschkurs. Wenn ich in der Firma ankomme, bin ich ruhig und entspannt.']],
        items: [{ n: 19, q: '', opts: AF, a: 1 }],
      },
      {
        audio: [['m2', 'Bis zum Büro sind es bei mir sieben Kilometer. Seit zwei Jahren fahre ich die Strecke mit dem Fahrrad, auch im Winter. Ich brauche kein Benzin und keinen Parkplatz, das sind fast 80 Euro weniger im Monat. Und ich habe schon fünf Kilo abgenommen. Zum Sport muss ich jetzt nicht mehr extra gehen.']],
        items: [{ n: 20, q: '', opts: AF, a: 3 }],
      },
    ], {
      topic: 'Thema: Der Weg zur Arbeit – Auto, Fahrrad oder Bus?',
      stmts: [
        'Ich gehe zu Fuß, weil ich ganz in der Nähe arbeite.',
        'Im Bus kann ich die Zeit gut für mich nutzen.',
        'Ohne Auto komme ich nicht pünktlich zur Arbeit.',
        'Mit dem Rad bleibe ich fit und spare Geld.',
        'Ich fahre mit Kolleginnen zusammen in einem Auto.',
        'Bus und Bahn sind mir zu teuer.',
      ],
    }),
  ],
};
