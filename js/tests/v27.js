import { part, ad, gap, RF, AX } from '../tests-lesen-b1.js';

export default {
  id: 'v27', title: 'Variante 7', about: 'Flughafen · Anzeigen · Schlüssel gefunden, Besuch im Krankenhaus, Abholen am Flughafen · Handyhilfe im Seniorentreff · Falsche Handyrechnung',
  parts: [
    part(1, [{
      html: `<div class="board"><h3>Flughafen Lindental – Wegweiser</h3>
<p><b>Ebene 3</b> Besucherterrasse · Restaurant „Weitblick“ · Spielbereich für Kinder</p>
<p><b>Ebene 2 – Abflug</b> Check-in-Schalter 1–40 · Gepäckaufgabe · Sicherheitskontrolle · Wechselstube</p>
<p><b>Ebene 1 – Ankunft</b> Gepäckausgabe · Zoll · Treffpunkt · Information · Autovermietung · Fundbüro</p>
<p><b>Ebene 0</b> Bahnhof (S-Bahn und Regionalzüge) · Fahrkartenautomaten · Taxistand · Bushaltestelle · Apotheke</p>
<p><b>Untergeschoss</b> Parkhaus P1 · Kasse für das Parkhaus · Schließfächer</p></div>`,
      items: [
        { n: 1, q: 'Sie holen einen Freund ab und möchten dort auf ihn warten, wo die Passagiere nach der Landung herauskommen.', opts: ['Ebene 1', 'Ebene 2', 'andere Ebene'], a: 0 },
        { n: 2, q: 'Sie fliegen heute in den Urlaub und möchten Ihren Koffer für den Flug abgeben.', opts: ['Ebene 1', 'Ebene 2', 'andere Ebene'], a: 1 },
        { n: 3, q: 'Sie haben noch viel Zeit und möchten zusehen, wie die Flugzeuge starten und landen.', opts: ['Ebene 0', 'Ebene 2', 'andere Ebene'], a: 2 },
        { n: 4, q: 'Sie möchten mit dem Zug in die Innenstadt fahren und brauchen noch ein Ticket.', opts: ['Ebene 0', 'Ebene 1', 'andere Ebene'], a: 0 },
        { n: 5, q: 'Sie haben gestern im Flughafen Ihre Jacke vergessen und möchten fragen, ob jemand sie gefunden hat.', opts: ['Ebene 2', 'Ebene 3', 'andere Ebene'], a: 2 },
      ],
    }]),
    part(2, [{
      html: [
        ad('a', 'Schlüsseldienst Brandt', 'Die Tür ist zu und der Schlüssel liegt in der Wohnung? Wir öffnen Ihre Tür – Tag und Nacht, auch am Wochenende. Feste Preise.'),
        ad('b', 'Smartphone-Kurs für Anfänger', 'An vier Vormittagen lernen Sie in der Volkshochschule: telefonieren, Nachrichten schreiben, Fotos schicken. Kleine Gruppe, langsames Tempo – besonders für ältere Menschen.'),
        ad('c', 'Handy-Doktor am Markt', 'Wir reparieren Handys aller Marken. Ein neues Display oder einen neuen Akku bekommen Sie bei uns meistens in einer Stunde.'),
        ad('d', 'Flughafen-Shuttle Kranich', 'Wir bringen Sie pünktlich zum Flughafen und holen Sie auch wieder ab – auch nachts. Festpreis ab 35 Euro.'),
        ad('e', 'Haus- und Blumenservice Grünfink', 'Sie sind auf Reisen oder im Krankenhaus? Wir gießen Ihre Pflanzen, leeren den Briefkasten und füttern Ihre Katze.'),
        ad('f', 'Blumenhaus Jasmin', 'Frische Sträuße und Topfpflanzen. Wir liefern noch am selben Tag nach Hause oder direkt ins Krankenhaus.'),
        ad('g', 'Gebrauchte Handys günstig', 'Geprüfte Smartphones ab 60 Euro, alle mit einem Jahr Garantie. Montag bis Samstag 10–18 Uhr in der Bahnhofstraße 3.'),
        ad('h', 'Stadtführung „Altstadt zu Fuß“', 'Jeden Samstag und Sonntag um 14 Uhr ab Rathausplatz. Die Führung dauert zwei Stunden, auch auf Englisch. 9 Euro pro Person.'),
      ].join(''),
      items: [
        { n: 6, q: 'Ihr Handy ist auf den Boden gefallen, und das Glas ist kaputt. Sie brauchen das Gerät schnell wieder.', opts: AX, a: 2 },
        { n: 7, q: 'Ihre Mutter ist 74 Jahre alt und hat zum ersten Mal ein Smartphone. Sie möchte lernen, wie man es benutzt.', opts: AX, a: 1 },
        { n: 8, q: 'Ihr Computer ist sehr langsam geworden. Sie suchen jemanden, der ihn repariert.', opts: AX, a: 8 },
        { n: 9, q: 'Sie fahren für drei Wochen zu Ihrer Familie ins Ausland. In dieser Zeit soll sich jemand um Ihre Pflanzen kümmern.', opts: AX, a: 4 },
        { n: 10, q: 'Ein Freund besucht Sie am Wochenende zum ersten Mal. Er möchte viel über Ihre Stadt erfahren.', opts: AX, a: 7 },
      ],
    }], { compact: true }),
    part(3, [
      {
        html: `<h4>Schlüssel gefunden!</h4><p>Liebe Nachbarinnen und Nachbarn,</p><p>am Montagabend habe ich im Treppenhaus zwischen dem ersten und dem zweiten Stock einen Schlüsselbund gefunden. Es sind drei Schlüssel mit einem kleinen roten Anhänger. Ich habe schon bei einigen Nachbarn geklingelt, aber niemand vermisst ihn.</p><p>Wem gehören die Schlüssel? Sie können sie bei mir im dritten Stock rechts abholen. Von Montag bis Freitag bin ich ab 17 Uhr zu Hause. Wenn sich bis Freitag niemand meldet, bringe ich den Schlüsselbund am Samstag zum Fundbüro im Rathaus.</p><p>Viele Grüße<br>Karim Haddad</p>`,
        items: [
          { n: 11, q: 'Herr Haddad hat die Schlüssel schon im Fundbüro abgegeben.', opts: RF, a: 1 },
          { n: 12, q: 'Wer die Schlüssel verloren hat, …', opts: ['kann nach 17 Uhr zu Herrn Haddad in den dritten Stock kommen.', 'findet sie in seinem Briefkasten.', 'soll bis Freitag im Rathaus anrufen.'], a: 0 },
        ],
      },
      {
        html: `<p>Hallo Jelena,</p><p>hast du es schon gehört? Frau Petrova aus dem Erdgeschoss liegt seit Sonntag im Krankenhaus. Sie ist auf der Treppe gestürzt und hat sich das Bein gebrochen. Sie muss noch ungefähr zwei Wochen dort bleiben. Ich war gestern bei ihr. Besuch ist jeden Tag von 14 bis 19 Uhr erlaubt.</p><p>Sie hat mir ihren Wohnungsschlüssel gegeben, damit ich ihre Blumen gieße. Leider fahre ich am Freitag für eine Woche zu meinen Eltern. Könntest du in dieser Zeit die Pflanzen gießen? Zweimal in der Woche reicht. Den Schlüssel bringe ich dir am Donnerstagabend vorbei.</p><p>Liebe Grüße<br>Nuria</p>`,
        items: [
          { n: 13, q: 'Frau Petrova darf nur nachmittags und am frühen Abend Besuch bekommen.', opts: RF, a: 0 },
          { n: 14, q: 'Nuria bittet Jelena, …', opts: ['Frau Petrova den Schlüssel ins Krankenhaus zu bringen.', 'sich eine Woche lang um die Pflanzen der Nachbarin zu kümmern.', 'am Freitag mit ihr zu Frau Petrova zu fahren.'], a: 1 },
        ],
      },
      {
        html: `<p>Hallo Mehmet,</p><p>am Samstag kommt endlich mein alter Schulfreund Andrei zu Besuch. Sein Flugzeug landet um 10.40 Uhr. Leider muss ich an diesem Tag bis 12 Uhr arbeiten. Kannst du ihn bitte am Flughafen abholen? Er hat zwei große Koffer, deshalb ist das Auto besser als die S-Bahn. Warte am besten am Treffpunkt in der Ankunftshalle. Ich schicke dir noch ein Foto von ihm.</p><p>Bring ihn bitte zu uns nach Hause, meine Frau ist da. Am Nachmittag wollen wir ihm die Altstadt zeigen, und am Abend kocht meine Frau für uns alle. Du bist natürlich auch eingeladen!</p><p>Vielen Dank<br>Viktor</p>`,
        items: [
          { n: 15, q: 'Wenn Andrei ankommt, ist Viktor noch bei der Arbeit.', opts: RF, a: 0 },
          { n: 16, q: 'An seinem ersten Tag …', opts: ['geht Andrei abends mit den Freunden ins Restaurant.', 'fährt Andrei mit der S-Bahn zu Viktor nach Hause.', 'soll Andrei nachmittags die Altstadt sehen.'], a: 2 },
        ],
      },
    ]),
    part(4, [{
      html: `<h4>„Handy-Sprechstunde“ im Seniorentreff Am Mühlbach</h4>
<p>Viele ältere Menschen haben ein Smartphone, aber sie benutzen es nur zum Telefonieren. Dabei kann man damit viel mehr machen: Fotos an die Enkel schicken, Fahrpläne lesen oder einen Arzttermin buchen. Der Seniorentreff Am Mühlbach bietet deshalb seit März eine Handy-Sprechstunde an.</p>
<p>Jeden Donnerstag von 15 bis 17 Uhr sitzen Schülerinnen und Schüler des Humboldt-Gymnasiums im Café des Seniorentreffs und beantworten Fragen. Jeder Besucher bekommt einen eigenen Helfer. Die Jugendlichen arbeiten freiwillig, und die Hilfe kostet nichts. Eine Anmeldung ist nicht nötig, aber manchmal muss man ein bisschen warten.</p>
<p>Bitte bringen Sie Ihr eigenes Gerät und das Ladekabel mit. Wichtig sind auch Ihre Passwörter, zum Beispiel für das E-Mail-Konto. Schreiben Sie sie am besten schon zu Hause auf einen Zettel.</p>
<p>Wer mehr lernen möchte, kann ab Oktober einen Kurs besuchen. Er dauert sechs Wochen und kostet 30 Euro. Es gibt nur zwölf Plätze. Für den Kurs müssen Sie sich deshalb im Büro des Seniorentreffs anmelden.</p>`,
      items: [
        { n: 17, q: 'In der Handy-Sprechstunde helfen junge Leute den Seniorinnen und Senioren.', opts: RF, a: 0 },
        { n: 18, q: 'Wer zur Sprechstunde kommen will, muss vorher einen Termin machen.', opts: RF, a: 1 },
        { n: 19, q: 'Auch für den Kurs ab Oktober muss man nichts bezahlen.', opts: RF, a: 1 },
      ],
    }]),
    part(5, [{
      html: `<p>Sehr geehrte Damen und Herren,</p>
<p>ich bin seit drei Jahren Kunde bei Ihnen (Kundennummer 730518). Gestern habe ich meine Rechnung für den Monat Mai bekommen. Sie ist viel ${gap(20)} als sonst: Statt 15 Euro soll ich 48 Euro bezahlen.</p>
<p>Auf der Rechnung stehen mehrere Gespräche ins Ausland, ${gap(21)} ich aber nie geführt habe. Im Mai ${gap(22)} ich mein Handy fast nur zu Hause benutzt, und ich habe nur mit meiner Familie hier in Deutschland telefoniert.</p>
<p>Ich bitte Sie deshalb, die Rechnung noch einmal zu ${gap(23)}. Bitte schicken Sie ${gap(24)} bis zum 15. Juni eine neue Rechnung mit dem richtigen Betrag.</p>
<p>Ich hoffe ${gap(25)} eine schnelle Lösung und danke Ihnen im Voraus.</p>
<p>Mit freundlichen Grüßen<br>Daniel Okonkwo</p>`,
      items: [
        { n: 20, q: '', opts: ['hoch', 'höher', 'am höchsten'], a: 1 },
        { n: 21, q: '', opts: ['die', 'den', 'das'], a: 0 },
        { n: 22, q: '', opts: ['bin', 'habe', 'werde'], a: 1 },
        { n: 23, q: '', opts: ['prüfen', 'geprüft', 'prüft'], a: 0 },
        { n: 24, q: '', opts: ['mich', 'mir', 'mein'], a: 1 },
        { n: 25, q: '', opts: ['für', 'an', 'auf'], a: 2 },
      ],
    }], { gaps: true }),
  ],
};
