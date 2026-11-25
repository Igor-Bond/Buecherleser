import { part, RF, AF } from './fmt.js';

export default {
  id: 'h07', title: 'Variante 7', about: 'Physiotherapie, Supermarkt-Parkplatz, Elternbeirat, Reisebüro · Wetter, Verkehr, Baumarkt, Feuerwehr, Warnung der Polizei · Wohnungsübergabe, Zahnarzt, Weiterbildung, Kinderbetreuung · Gesund leben und essen',
  parts: [
    part(1, [
      {
        audio: [['f1', 'Guten Tag, Herr Ibrahimi, hier ist die Physiotherapie Quellenhof, mein Name ist Stöcker. Ihr Termin am Montag um 8 Uhr 30 muss leider ausfallen, weil Ihre Therapeutin krank ist. Am Mittwoch um 17 Uhr 15 ist noch etwas frei, dann behandelt Sie Herr Lauer. Bitte rufen Sie uns bis morgen Mittag zurück und sagen Sie, ob Sie den Termin nehmen. Sonst geben wir ihn weiter. Unsere Nummer ist 5 5 5, 0 1, 6 2. Ihr Rezept ist noch bis Ende des Monats gültig. Auf Wiederhören.']],
        items: [{ n: 1, q: 'Was soll Herr Ibrahimi tun?', opts: ['Ein neues Rezept mitbringen.', 'Bis morgen Mittag sagen, ob er am Mittwoch kommt.', 'Am Montag zu Herrn Lauer kommen.'], a: 1 }],
      },
      {
        audio: [['m1', 'Eine Durchsage für unsere Kunden: Der Fahrer des grauen Kombis auf unserem Parkplatz wird gebeten, sofort zu seinem Wagen zu kommen. Ihr Auto steht direkt vor der Einfahrt für Lieferanten, und unser Lastwagen kann nicht hineinfahren. Bitte stellen Sie das Auto auf einen freien Kundenparkplatz. Sonst müssen wir es in zehn Minuten abschleppen lassen. Und für alle anderen: Unsere Kasse 5 ist jetzt für Sie geöffnet. Vielen Dank.']],
        items: [{ n: 2, q: 'Warum soll der Fahrer zu seinem Auto kommen?', opts: ['Er steht schon zu lange auf einem Kundenparkplatz.', 'Ein Lastwagen hat sein Auto beschädigt.', 'Sein Auto versperrt eine Einfahrt.'], a: 2 }],
      },
      {
        audio: [['f1', 'Hallo Frau Okonkwo, hier spricht Marlies Tiedemann vom Elternbeirat der Kita Sonnenwinkel. Ich rufe wegen des Sommerfests am 21. Juni an. Kuchen haben wir inzwischen genug, vielen Dank für Ihr Angebot. Aber uns fehlen noch Leute für den Aufbau. Könnten Sie am Festtag schon um 13 Uhr kommen und helfen, die Tische aufzustellen? Das Fest selbst beginnt um 15 Uhr. Schreiben Sie mir einfach eine kurze Nachricht. Danke und bis bald!']],
        items: [{ n: 3, q: 'Frau Tiedemann bittet Frau Okonkwo, …', opts: ['einen Kuchen zu backen.', 'erst um 15 Uhr zu kommen.', 'vor dem Fest beim Aufbauen zu helfen.'], a: 2 }],
      },
      {
        audio: [['m1', 'Guten Tag, Frau Castellano, Reisebüro Fernblick, Dormann am Apparat. Ihre Unterlagen für die Busreise nach Wien sind fertig. Sie können sie ab morgen bei uns abholen, wir haben bis 18 Uhr 30 geöffnet. Eine wichtige Änderung: Der Bus fährt nicht um 7 Uhr ab, sondern schon um 6 Uhr 15, und zwar wie geplant vom Busbahnhof, Steig 3. Den Rest von 240 Euro bezahlen Sie bitte beim Abholen. Vielen Dank und auf Wiederhören.']],
        items: [{ n: 4, q: 'Was ist bei der Reise anders als geplant?', opts: ['Der Bus fährt früher ab.', 'Der Bus fährt von einem anderen Ort ab.', 'Die Reise kostet 240 Euro mehr.'], a: 0 }],
      },
    ]),
    part(2, [
      {
        audio: [['f1', 'Das Wetter für heute und morgen. Der Tag beginnt mit dichtem Nebel, vor allem in den Flusstälern. Gegen Mittag löst sich der Nebel auf, und am Nachmittag scheint überall die Sonne bei 14 bis 16 Grad. In der Nacht wird es kalt, die Temperaturen sinken auf 2 Grad. Morgen ziehen Wolken auf, und ab dem Nachmittag weht ein starker Wind. Regen gibt es aber erst am Donnerstag.']],
        items: [{ n: 5, q: 'Wie ist das Wetter heute Nachmittag?', opts: ['Sonnig.', 'Neblig.', 'Windig.'], a: 0 }],
      },
      {
        audio: [['m1', 'Und nun der Verkehr. Autobahn 3 Richtung Süden: Zwischen Hohenfeld und Birkenau liegen Gegenstände auf der Fahrbahn, bitte fahren Sie dort langsam. In der Stadt: Wegen des Marathons ist die Ringstraße heute von 9 bis 15 Uhr für Autos gesperrt. Die Straßenbahnlinien 2 und 6 fahren in dieser Zeit nur bis zum Rathaus. Von dort fahren Ersatzbusse weiter zum Hauptbahnhof.']],
        items: [{ n: 6, q: 'Was erfahren Sie über die Straßenbahnlinien 2 und 6?', opts: ['Sie fahren heute bis 15 Uhr gar nicht.', 'Sie fahren nur einen Teil der Strecke.', 'Sie fahren eine Umleitung über die Autobahn.'], a: 1 }],
      },
      {
        audio: [['f1', 'Der Frühling kommt – und bei Baumarkt Rodeck beginnt die Gartenwoche! Blumenerde, der Sack mit 40 Litern, jetzt für nur 3 Euro 49. Gartenmöbel aus Holz bekommen Sie 25 Prozent günstiger. Und wer am Samstag kommt: Unsere Fachleute zeigen Ihnen von 10 bis 13 Uhr kostenlos, wie man ein Hochbeet baut. Eine Anmeldung brauchen Sie nicht. Baumarkt Rodeck, Industriestraße 18 – wir sind für Sie da.']],
        items: [{ n: 7, q: 'Was kann man am Samstag im Baumarkt machen?', opts: ['Ein fertiges Hochbeet billiger kaufen.', 'Sich für einen Gartenkurs im Sommer anmelden.', 'Kostenlos zusehen, wie ein Hochbeet gebaut wird.'], a: 2 }],
      },
      {
        audio: [['m1', 'Ein Tipp für Familien: Am Sonntag lädt die Freiwillige Feuerwehr Mühlbach zum Tag der offenen Tür ein. Von 10 bis 17 Uhr können Kinder in die Feuerwehrautos klettern und selbst mit dem Schlauch spritzen. Um 14 Uhr zeigen die Feuerwehrleute, wie man einen Brand in der Küche richtig löscht. Für Essen und Getränke ist gesorgt. Übrigens: Die Feuerwehr sucht neue Mitglieder ab 16 Jahren. Informationen bekommen Sie direkt am Infostand.']],
        items: [{ n: 8, q: 'Was passiert um 14 Uhr?', opts: ['Die Feuerwehr führt vor, wie man ein Feuer löscht.', 'Der Tag der offenen Tür beginnt.', 'Jugendliche ab 16 Jahren machen eine Übung mit.'], a: 0 }],
      },
      {
        audio: [['f1', 'Die Polizei warnt: In unserer Stadt sind zurzeit Betrüger unterwegs. Sie rufen vor allem ältere Menschen an und sagen, sie sind von der Bank oder von der Polizei. Dann wollen sie Geld oder die Geheimnummer der Bankkarte. Die Polizei sagt dazu: Echte Polizisten fragen am Telefon nie nach Geld. Legen Sie sofort auf und wählen Sie den Notruf 1 1 0. Sprechen Sie bitte auch mit Ihren Eltern und Großeltern darüber.']],
        items: [{ n: 9, q: 'Was soll man tun, wenn man so einen Anruf bekommt?', opts: ['Die Geheimnummer nur einem Mitarbeiter der Bank sagen.', 'Das Gespräch beenden und die Polizei anrufen.', 'Zuerst die Eltern oder Großeltern um Rat fragen.'], a: 1 }],
      },
    ]),
    part(3, [
      {
        who: { f1: 'Frau Zielke', m1: 'Herr Abdi' },
        audio: [
          ['f1', 'So, Herr Abdi, dann schauen wir uns die Wohnung einmal an. Sie ziehen ja heute aus.'],
          ['m1', 'Ja, Frau Zielke. Ich habe alles geputzt, und die Wände im Wohnzimmer habe ich neu gestrichen.'],
          ['f1', 'Das sieht gut aus. Aber hier im Bad – der Spiegel hat einen Sprung.'],
          ['m1', 'Oh, das stimmt. Das ist beim Umzug passiert. Tut mir leid.'],
          ['f1', 'Ich muss einen neuen Spiegel kaufen, das kostet etwa 60 Euro. Die ziehe ich von der Kaution ab.'],
          ['m1', 'Einverstanden. Und wann bekomme ich den Rest? Die Kaution war ja 1200 Euro.'],
          ['f1', 'Ich überweise Ihnen das Geld in vier Wochen, wenn die Abrechnung für die Nebenkosten da ist.'],
          ['m1', 'Gut. Hier sind die Schlüssel, alle drei.'],
          ['f1', 'Danke. Dann unterschreiben wir jetzt noch das Protokoll.'],
        ],
        items: [
          { n: 10, q: 'Herr Abdi gibt seine Wohnung an die Vermieterin zurück.', opts: RF, a: 0 },
          { n: 11, q: 'Warum bekommt Herr Abdi nicht die ganze Kaution zurück?', opts: ['Weil er die Wände nicht gestrichen hat.', 'Weil ein Schlüssel fehlt.', 'Weil im Bad etwas kaputt ist.'], a: 2 },
        ],
      },
      {
        who: { m1: 'Herr Brückl', f1: 'Frau Tahiri' },
        audio: [
          ['m1', 'Zahnarztpraxis Doktor Engelke, Brückl, guten Morgen.'],
          ['f1', 'Guten Morgen, Tahiri hier. Ich habe seit gestern Abend starke Zahnschmerzen. Kann ich heute noch kommen?'],
          ['m1', 'Heute ist es sehr voll. Einen festen Termin kann ich Ihnen erst für Freitag geben.'],
          ['f1', 'Bis Freitag halte ich das nicht aus. Ich konnte die ganze Nacht nicht schlafen.'],
          ['m1', 'Dann kommen Sie um 11 Uhr in die Schmerzsprechstunde. Sie müssen aber Wartezeit mitbringen, vielleicht eine Stunde.'],
          ['f1', 'Das macht nichts. Ich bin zum ersten Mal bei Ihnen. Was brauchen Sie von mir?'],
          ['m1', 'Nur Ihre Versichertenkarte. Den Fragebogen für neue Patienten füllen Sie hier im Wartezimmer aus.'],
          ['f1', 'Gut. Und wo sind Sie genau?'],
          ['m1', 'Marktgasse 9, zweiter Stock, direkt über der Apotheke.'],
        ],
        items: [
          { n: 12, q: 'Frau Tahiri ruft an, weil sie schnell einen Termin beim Zahnarzt braucht.', opts: RF, a: 0 },
          { n: 13, q: 'Was erfährt Frau Tahiri?', opts: ['Sie muss heute in der Praxis lange warten.', 'Sie soll den Fragebogen zu Hause ausfüllen.', 'Sie kann erst am Freitag kommen.'], a: 0 },
        ],
      },
      {
        who: { f1: 'Beraterin', m1: 'Herr Karimov' },
        audio: [
          ['f1', 'Guten Tag, Herr Karimov, nehmen Sie Platz. Sie interessieren sich für eine Weiterbildung?'],
          ['m1', 'Ja. Ich arbeite seit drei Jahren im Lager, aber ich möchte gern Busfahrer werden.'],
          ['f1', 'Das ist eine gute Idee, Busfahrer werden überall gesucht. Haben Sie schon einen Führerschein für das Auto?'],
          ['m1', 'Ja, den habe ich seit fünf Jahren.'],
          ['f1', 'Sehr gut. Der Kurs für den Busführerschein dauert sechs Monate. Der nächste beginnt am 1. September.'],
          ['m1', 'Und was kostet das? Ich habe gehört, mehr als zehntausend Euro.'],
          ['f1', 'Das stimmt, aber die Kosten können wir übernehmen. Dafür brauche ich noch Ihr Sprachzertifikat, mindestens B1.'],
          ['m1', 'Die Prüfung mache ich erst im Juni.'],
          ['f1', 'Dann schicken Sie mir das Zertifikat, sobald Sie es haben. Den Antrag können wir heute schon ausfüllen.'],
        ],
        items: [
          { n: 14, q: 'Herr Karimov sucht eine neue Stelle in einem Lager.', opts: RF, a: 1 },
          { n: 15, q: 'Was fehlt noch für die Weiterbildung?', opts: ['Der Führerschein für das Auto.', 'Der Nachweis über die Deutschkenntnisse.', 'Das Geld für den Kurs.'], a: 1 },
        ],
      },
      {
        who: { f1: 'Jana', m1: 'Milan' },
        audio: [
          ['f1', 'Milan, ich habe ein Problem. Ab nächster Woche muss ich donnerstags bis 18 Uhr arbeiten.'],
          ['m1', 'Oh. Und der Kindergarten schließt um halb fünf. Wer holt dann Emil ab?'],
          ['f1', 'Kannst du nicht früher Schluss machen?'],
          ['m1', 'Donnerstags haben wir immer Teambesprechung, da komme ich nicht vor sechs raus.'],
          ['f1', 'Und deine Mutter? Sie wohnt doch nur zwei Straßen weiter.'],
          ['m1', 'Sie hat donnerstags ihren Sportkurs. Aber wir könnten Frau Lindqvist fragen, die Nachbarin. Ihre Tochter geht ja in dieselbe Gruppe.'],
          ['f1', 'Stimmt, sie holt Paula sowieso jeden Tag ab. Dafür könnten wir Paula mal am Wochenende nehmen.'],
          ['m1', 'Gute Idee. Ich klingle heute Abend bei ihr und frage.'],
        ],
        items: [
          { n: 16, q: 'Die beiden suchen jemanden, der ihren Sohn vom Kindergarten abholt.', opts: RF, a: 0 },
          { n: 17, q: 'Wen wollen sie um Hilfe bitten?', opts: ['Milans Mutter.', 'Eine Erzieherin aus dem Kindergarten.', 'Eine Nachbarin.'], a: 2 },
        ],
      },
    ]),
    part(4, [
      {
        ex: 0,
        audio: [['f1', 'Bei uns kommt nichts Fertiges auf den Tisch. Ich gehe zweimal in der Woche auf den Markt und kaufe Gemüse, Obst und Fisch. Abends stehe ich dann eine halbe Stunde in der Küche und mache alles selbst. Meine Kinder helfen mit. So weiß ich genau, was im Essen ist.']],
        items: [],
      },
      {
        audio: [['m1', 'Ich weiß, dass ich mich besser ernähren sollte. Aber ich fahre Lastwagen und bin jeden Tag zwölf Stunden unterwegs. Mittags gibt es dann schnell eine Bratwurst an der Raststätte oder ein belegtes Brötchen. Abends bin ich zu müde zum Kochen. Nur am Sonntag gibt es bei uns etwas Richtiges.']],
        items: [{ n: 18, q: '', opts: AF, a: 5 }],
      },
      {
        audio: [['f2', 'Früher habe ich jeden Tag Schokolade gegessen und Limonade getrunken. Ich war oft müde und hatte Kopfschmerzen. Vor einem halben Jahr hat mein Arzt gesagt: Lassen Sie den Zucker weg. Jetzt trinke ich Wasser oder Tee, und Kuchen gibt es nur noch am Sonntag. Ich fühle mich viel fitter und schlafe auch wieder gut.']],
        items: [{ n: 19, q: '', opts: AF, a: 3 }],
      },
      {
        audio: [['m2', 'Beim Essen passe ich nicht besonders auf. Ich esse, was mir schmeckt, auch mal Pizza oder Pommes. Aber ich fahre jeden Tag mit dem Rad zur Arbeit, zwölf Kilometer hin und zurück, und zweimal pro Woche gehe ich schwimmen. Ich glaube, wer viel Sport macht, bleibt auch gesund.']],
        items: [{ n: 20, q: '', opts: AF, a: 1 }],
      },
    ], {
      topic: 'Thema: Gesund leben und essen',
      stmts: [
        'Ich koche jeden Tag selbst mit frischen Zutaten.',
        'Für mich ist Bewegung am wichtigsten.',
        'Gesunde Lebensmittel sind mir zu teuer.',
        'Seit ich weniger Süßes esse, geht es mir besser.',
        'Ich esse kein Fleisch mehr.',
        'Im Alltag fehlt mir die Zeit für gesundes Essen.',
      ],
    }),
  ],
};
