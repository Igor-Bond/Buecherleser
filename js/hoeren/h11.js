import { part, RF, AF } from './fmt.js';

export default {
  id: 'h11', title: 'Variante 1', about: 'Stadtwerke, Krankenhaus, Schulung, Fernbus · Unwetter, Autobahnbaustelle, Fahrradladen, Berufsschule, Parkgebühren · Nebenkosten, Urlaubsvertretung, Krankenkasse, Kita · Arbeiten im Homeoffice',
  parts: [
    part(1, [
      {
        audio: [['m1', 'Guten Tag, Frau Petrovic, hier spricht Albers von den Stadtwerken Rodenbach. Es geht um die jährliche Ablesung Ihres Stromzählers. Eigentlich wollte unser Mitarbeiter am Dienstag bei Ihnen vorbeikommen, aber er ist krank geworden. Der Termin wird deshalb auf Donnerstag zwischen 8 und 12 Uhr verschoben. Falls dann niemand zu Hause ist, müssen Sie nicht extra freinehmen: Sie können den Zählerstand auch selbst ablesen und uns bis zum 15. März über unsere Internetseite mitteilen. Telefonisch nehmen wir Zählerstände leider nicht mehr an. Vielen Dank und auf Wiederhören.']],
        items: [{ n: 1, q: 'Was kann Frau Petrovic tun, wenn sie am Donnerstagvormittag nicht da ist?', opts: ['Die Zahl vom Gerät online an die Stadtwerke schicken.', 'Den Zählerstand telefonisch durchgeben.', 'Einen neuen Termin am Dienstag vereinbaren.'], a: 0 }],
      },
      {
        audio: [['f1', 'Liebe Besucherinnen und Besucher, bitte beachten Sie folgende Hinweise. Wegen Bauarbeiten ist der Haupteingang ab heute geschlossen. Bitte benutzen Sie den Seiteneingang in der Lindenstraße. Die Besuchszeit endet wie immer um 19 Uhr 30, auf der Kinderstation allerdings schon um 18 Uhr. Die Cafeteria im Erdgeschoss wird zurzeit renoviert, Getränke und kleine Speisen bekommen Sie aber am Kiosk im zweiten Stock. Und noch eine Bitte: Auf der Station 4 dürfen Patienten nur besucht werden, wenn Sie sich vorher bei der Stationsleitung angemeldet haben. Vielen Dank für Ihr Verständnis.']],
        items: [{ n: 2, q: 'Was erfahren die Besucher?', opts: ['Auf allen Stationen endet die Besuchszeit um 18 Uhr.', 'Der Kiosk im Erdgeschoss wird zurzeit renoviert.', 'Man kommt im Moment nur durch eine andere Tür ins Gebäude.'], a: 2 }],
      },
      {
        audio: [['f1', 'Hallo Herr Nowak, hier ist Sandra Kühn aus der Personalabteilung. Ich rufe wegen der Schulung zur Arbeitssicherheit an. Die findet nicht, wie angekündigt, am Montag statt, sondern erst am Mittwoch von 9 bis 13 Uhr, und zwar nicht bei uns im Haus, sondern im Schulungszentrum in der Hafenstraße. Die Teilnahme ist Pflicht, die Zeit wird natürlich als Arbeitszeit gerechnet. Ihre Schicht am Mittwochnachmittag fällt deswegen aber nicht aus. Sagen Sie mir bitte bis Freitag Bescheid, ob Sie einen Platz im Firmenbus brauchen, sonst müssten Sie selbst hinfahren. Danke, tschüs.']],
        items: [{ n: 3, q: 'Herr Nowak soll sich bis Freitag melden und sagen, …', opts: ['dass er an der Schulung im Haus teilnimmt.', 'ob er von der Firma zum Kurs gefahren werden möchte.', 'ob er am Mittwochnachmittag arbeiten kann.'], a: 1 }],
      },
      {
        audio: [['m1', 'Liebe Fahrgäste, hier spricht Ihr Fahrer. Wegen eines Staus bei Erlenbach erreichen wir Wiesenau nicht um 15 Uhr 10, sondern voraussichtlich erst gegen 15 Uhr 40. Die geplante Pause an der Raststätte Lindental wird deshalb von zwanzig auf zehn Minuten verkürzt. Bitte seien Sie pünktlich zurück. Fahrgäste, die in Wiesenau in den Bus nach Hohenstein umsteigen möchten: Dieser Anschluss wird leider nicht erreicht. Ihr Fahrschein gilt aber ohne Aufpreis für den nächsten Bus um 17 Uhr. Die Toilette im Bus ist außer Betrieb, benutzen Sie bitte die an der Raststätte.']],
        items: [{ n: 4, q: 'Was gilt für Fahrgäste, die nach Hohenstein weiterfahren wollen?', opts: ['Sie müssen für den Bus um 17 Uhr einen Aufpreis bezahlen.', 'Ihr Anschlussbus wartet in Wiesenau zehn Minuten.', 'Sie können mit demselben Ticket eine spätere Verbindung nehmen.'], a: 2 }],
      },
    ]),
    part(2, [
      {
        audio: [['f1', 'Und nun eine Unwetterwarnung für unser Sendegebiet. Der Wetterdienst erwartet für heute Nachmittag schwere Gewitter mit Starkregen und Sturm. Betroffen ist zunächst vor allem der Süden der Region, gegen Abend zieht das Unwetter dann auch in den Norden weiter. Dort bleibt es bis etwa 18 Uhr noch trocken. Die Feuerwehr rät, Gegenstände auf Balkon und Terrasse festzumachen und nicht unter Bäumen zu parken. Wälder und Parks sollten Sie auf keinen Fall betreten. In der Nacht beruhigt sich das Wetter, und morgen wird es mit 19 Grad deutlich kühler als heute.']],
        items: [{ n: 5, q: 'Was sagt die Meldung über den Norden der Region?', opts: ['Dort bleibt es heute den ganzen Tag trocken.', 'Dort kommt das Gewitter später an als im Süden.', 'Dort wird es morgen wärmer als heute.'], a: 1 }],
      },
      {
        audio: [['m1', 'Die Verkehrslage. Auf der Autobahn 43 wird ab heute Abend, 20 Uhr, die Fahrbahn erneuert. Zwischen den Anschlussstellen Birkenfeld und Altenau ist die Autobahn in Richtung Süden bis Montag früh, 5 Uhr, voll gesperrt. In Richtung Norden bleibt eine Spur frei, dort müssen Sie aber mit Stau rechnen. Die Umleitung führt ab Birkenfeld über die Bundesstraße 8 und ist ausgeschildert. Lastwagen über 12 Tonnen dürfen diese Umleitung allerdings nicht benutzen, weil eine Brücke zu schwach ist. Sie werden schon ab dem Kreuz Rehberg umgeleitet.']],
        items: [{ n: 6, q: 'Was erfahren Autofahrer, die nach Norden fahren?', opts: ['Sie können weiterfahren, kommen aber wahrscheinlich nur langsam voran.', 'Sie müssen ab Birkenfeld die Bundesstraße 8 nehmen.', 'Für sie ist die Autobahn bis Montag früh gesperrt.'], a: 0 }],
      },
      {
        audio: [['f1', 'Der Frühling kommt – ist Ihr Fahrrad schon fit? Bei Rad und Tat in der Mühlengasse bekommen Sie bis Ende April die große Frühjahrsinspektion für 49 Euro statt 65 Euro. Bremsen, Licht und Reifen werden geprüft, Ersatzteile werden extra berechnet. Wenn Sie Ihr Rad vor 10 Uhr bringen, können Sie es meistens noch am selben Tag abholen. Und wer bei uns ein neues Fahrrad kauft, bekommt die erste Inspektion nach sechs Monaten sogar geschenkt. Ein Leihrad für die Wartezeit gibt es allerdings nur für Kunden mit Elektrofahrrad.']],
        items: [{ n: 7, q: 'Was bekommt man bei Rad und Tat kostenlos?', opts: ['Ersatzteile bei der Frühjahrsinspektion.', 'Eine Kontrolle des Rades ein halbes Jahr nach dem Kauf.', 'Ein Leihrad für alle Kunden, die warten müssen.'], a: 1 }],
      },
      {
        audio: [['m1', 'Unser Veranstaltungstipp: Die Berufsschule am Kanal lädt am Samstag zum Tag der offenen Tür ein. Von 10 bis 15 Uhr können Sie die Werkstätten besichtigen und mit Lehrern und Auszubildenden sprechen. Um 11 Uhr und um 13 Uhr gibt es Vorträge über die Ausbildung in Pflegeberufen. Wer sich für einen technischen Beruf interessiert, kann in der Metallwerkstatt selbst etwas ausprobieren, allerdings erst ab 14 Jahren. Eine Anmeldung ist nicht nötig, nur für die Beratung zu Abschlüssen aus dem Ausland sollte man vorher einen Termin über die Internetseite der Schule buchen.']],
        items: [{ n: 8, q: 'Wofür sollte man sich vorher anmelden?', opts: ['Für ein Gespräch über Zeugnisse aus einem anderen Land.', 'Für die Vorträge über Pflegeberufe.', 'Für das Ausprobieren in der Metallwerkstatt.'], a: 0 }],
      },
      {
        audio: [['f1', 'Aus dem Rathaus: Ab dem 1. Juni wird das Parken in der Innenstadt teurer. Eine Stunde kostet dann 2 Euro 50 statt wie bisher 1 Euro 80. Außerdem muss man künftig auch samstags bis 20 Uhr bezahlen, bisher war das Parken am Samstag ab 14 Uhr kostenlos. Für Anwohner ändert sich nichts, ihr Parkausweis kostet weiterhin 30 Euro im Jahr. Günstiger wird es dagegen in den Parkhäusern am Bahnhof: Dort bezahlt man abends ab 18 Uhr nur noch 1 Euro pro Stunde. Die Stadt hofft, dass dadurch weniger Autos in den Straßen parken.']],
        items: [{ n: 9, q: 'Was gilt ab dem 1. Juni?', opts: ['Anwohner bezahlen 30 Euro mehr für ihren Parkausweis.', 'Samstags ist das Parken in der Innenstadt ab 14 Uhr gratis.', 'In den Parkhäusern am Bahnhof zahlt man am Abend weniger als vorher.'], a: 2 }],
      },
    ]),
    part(3, [
      {
        who: { m1: 'Herr Aydin', f1: 'Frau Sommer' },
        audio: [
          ['m1', 'Guten Tag, Frau Sommer, Aydin hier. Ich rufe wegen der Nebenkostenabrechnung an, die gestern gekommen ist. Ich soll 280 Euro nachzahlen, das kann doch eigentlich nicht stimmen.'],
          ['f1', 'Guten Tag, Herr Aydin. Die Heizkosten sind im letzten Jahr leider stark gestiegen, das betrifft alle Mieter im Haus.'],
          ['m1', 'Das verstehe ich ja. Aber bei mir stehen 68 Quadratmeter in der Abrechnung, obwohl meine Wohnung laut Mietvertrag nur 58 Quadratmeter hat.'],
          ['f1', 'Moment, ich schaue mal nach. Tatsächlich, da haben Sie recht, da ist uns ein Fehler passiert. Das tut mir leid.'],
          ['m1', 'Heißt das, ich muss gar nichts nachzahlen?'],
          ['f1', 'Das glaube ich nicht, aber es wird sicher deutlich weniger. Ich lasse alles neu berechnen.'],
          ['m1', 'Soll ich die 280 Euro dann erst einmal überweisen, und Sie zahlen mir später etwas zurück?'],
          ['f1', 'Nein, bitte überweisen Sie noch nichts. Sie bekommen bis Ende nächster Woche eine neue Abrechnung, und erst die bezahlen Sie dann.'],
          ['m1', 'Gut. Könnten Sie mir die auch per E-Mail schicken? Ich bin ab Montag zwei Wochen verreist.'],
          ['f1', 'Ja, das mache ich gern.'],
        ],
        items: [
          { n: 10, q: 'Frau Sommer bleibt dabei, dass die Abrechnung von Herrn Aydin stimmt.', opts: RF, a: 1 },
          { n: 11, q: 'Was soll Herr Aydin jetzt tun?', opts: ['Mit der Zahlung warten, bis er ein korrigiertes Schreiben bekommt.', 'Die 280 Euro überweisen und später Geld zurückbekommen.', 'Seinen Mietvertrag per E-Mail an Frau Sommer schicken.'], a: 0 },
        ],
      },
      {
        who: { f1: 'Monika', m1: 'Jens' },
        audio: [
          ['f1', 'Jens, hast du einen Moment? Ich bin ja ab Montag drei Wochen im Urlaub, und du machst meine Vertretung.'],
          ['m1', 'Ja, der Chef hat es mir gesagt. Eigentlich sollte das doch Frau Lorenz übernehmen, oder?'],
          ['f1', 'Stimmt, aber sie fällt wegen einer Operation länger aus. Deshalb wollte ich dir kurz das Wichtigste erklären.'],
          ['m1', 'Gern. Muss ich mich auch um deine Bestellungen kümmern?'],
          ['f1', 'Nein, die habe ich bis Ende des Monats schon alle erledigt. Wichtig sind nur die Kundenanfragen: Die sollten innerhalb von zwei Tagen beantwortet werden.'],
          ['m1', 'Und wenn ich etwas nicht weiß? Soll ich dich dann anrufen?'],
          ['f1', 'Lieber nicht, ich möchte im Urlaub wirklich mal abschalten. In dem blauen Ordner auf meinem Schreibtisch steht fast alles. Und falls es um Preise geht, fragst du am besten Herrn Brandt aus dem Verkauf.'],
          ['m1', 'In Ordnung. Und die Rechnungen?'],
          ['f1', 'Die können liegen bleiben, bis ich wieder da bin. Nur die Rechnung der Firma Hellmann muss bis zum Zehnten bezahlt sein, die habe ich aber schon an die Buchhaltung weitergegeben.'],
          ['m1', 'Gut, dann weiß ich Bescheid. Schönen Urlaub!'],
        ],
        items: [
          { n: 12, q: 'Jens übernimmt die Vertretung, weil eine andere Kollegin nicht arbeiten kann.', opts: RF, a: 0 },
          { n: 13, q: 'Was muss Jens während Monikas Urlaub tun?', opts: ['Die Rechnung der Firma Hellmann bezahlen.', 'Monika anrufen, wenn es um Preise geht.', 'Auf Fragen von Kunden schnell reagieren.'], a: 2 },
        ],
      },
      {
        who: { m1: 'Mitarbeiter', f1: 'Frau Kowalski' },
        audio: [
          ['m1', 'Gesundheitskasse Nordland, Sie sprechen mit Herrn Wiese. Was kann ich für Sie tun?'],
          ['f1', 'Guten Tag, Kowalski mein Name. Ich habe letzte Woche mein Portemonnaie verloren, und da war auch meine Versichertenkarte drin. Jetzt brauche ich eine neue.'],
          ['m1', 'Das ist kein Problem, die alte Karte sperre ich sofort. Hat sich bei Ihnen in letzter Zeit etwas geändert, die Adresse oder der Name?'],
          ['f1', 'Umgezogen bin ich nicht, aber ich habe im Mai geheiratet. Früher hieß ich Schneider.'],
          ['m1', 'In dem Fall brauchen wir ein neues Foto von Ihnen, das alte ist ja auch schon über zehn Jahre alt.'],
          ['f1', 'Muss ich das Foto bei Ihnen in der Geschäftsstelle abgeben?'],
          ['m1', 'Das können Sie, einfacher ist es aber, wenn Sie es über unsere App hochladen. Per Post dauert es am längsten.'],
          ['f1', 'Gut, dann mache ich das heute Abend mit dem Handy. Wie lange dauert es, bis die Karte da ist?'],
          ['m1', 'Ungefähr zwei Wochen, nachdem wir das Foto haben.'],
          ['f1', 'Oh, ich habe aber schon am Montag einen Termin beim Zahnarzt.'],
          ['m1', 'Dann schicke ich Ihnen heute noch eine Bescheinigung per E-Mail. Die zeigen Sie in der Praxis vor, sie gilt als Ersatz.'],
          ['f1', 'Vielen Dank, das hilft mir sehr.'],
        ],
        items: [
          { n: 14, q: 'Frau Kowalski kann am Montag auch ohne die neue Karte zum Zahnarzt gehen.', opts: RF, a: 0 },
          { n: 15, q: 'Wie bekommt die Krankenkasse das Foto?', opts: ['Frau Kowalski bringt es in die Geschäftsstelle.', 'Frau Kowalski sendet es über das Internet.', 'Frau Kowalski schickt es mit der Post.'], a: 1 },
        ],
      },
      {
        who: { f1: 'Frau Hoffmann', m1: 'Herr Santos' },
        audio: [
          ['f1', 'Guten Morgen, Herr Santos. Schön, dass Sie kurz Zeit haben. Ich wollte mit Ihnen über Mias Eingewöhnung sprechen.'],
          ['m1', 'Guten Morgen, Frau Hoffmann. Läuft es denn nicht gut? Sie hat heute beim Abschied wieder geweint.'],
          ['f1', 'Das ist in der zweiten Woche ganz normal. Sobald Sie weg sind, beruhigt sie sich schnell und spielt mit den anderen Kindern.'],
          ['m1', 'Da bin ich aber erleichtert. Meine Frau fängt nämlich am ersten Oktober wieder an zu arbeiten, bis dahin müsste es klappen.'],
          ['f1', 'Das schaffen wir. Bisher bleibt Mia ja nur bis halb elf. Ab morgen würde ich gern versuchen, dass sie bis nach dem Mittagessen bleibt, also bis 12 Uhr 30.'],
          ['m1', 'Und der Mittagsschlaf? Zu Hause schläft sie nur mit ihrem Stoffhasen ein.'],
          ['f1', 'Mit dem Schlafen warten wir noch, das kommt erst nächste Woche dazu. Aber bringen Sie den Hasen ruhig schon mit, das gibt ihr Sicherheit.'],
          ['m1', 'Mache ich. Soll ich morgen in der Nähe bleiben, falls etwas ist?'],
          ['f1', 'Sie müssen nicht im Haus warten, aber bitte bleiben Sie telefonisch erreichbar.'],
          ['m1', 'Natürlich, ich arbeite morgen sowieso zu Hause.'],
        ],
        items: [
          { n: 16, q: 'Die Erzieherin macht sich Sorgen, weil Mia sich in der Kita nicht wohlfühlt.', opts: RF, a: 1 },
          { n: 17, q: 'Was ändert sich für Mia ab morgen?', opts: ['Sie macht in der Kita ihren Mittagsschlaf.', 'Ihr Vater wartet die ganze Zeit im Haus auf sie.', 'Sie bleibt länger und isst dort auch zu Mittag.'], a: 2 },
        ],
      },
    ]),
    part(4, [
      {
        ex: 0,
        audio: [['f1', 'Früher bin ich jeden Tag fast drei Stunden mit dem Zug gefahren, morgens hin und abends zurück. Seit zwei Jahren arbeite ich an drei Tagen pro Woche von zu Hause. Natürlich ist nicht alles perfekt, manchmal ist die Internetverbindung schlecht, und mein Schreibtisch steht im Schlafzimmer. Aber ich kann jetzt mit meinen Kindern frühstücken und sie nachmittags vom Kindergarten abholen. Das wäre früher nie möglich gewesen, und das möchte ich nicht mehr aufgeben.']],
        items: [],
      },
      {
        audio: [['m1', 'Am Anfang fand ich es toll, zu Hause zu arbeiten: kein Stau, kein Lärm im Großraumbüro, und meine Aufgaben schaffe ich dort genauso gut. Aber nach ein paar Monaten habe ich gemerkt, dass mir etwas fehlt. Im Büro redet man in der Kaffeepause miteinander, man lacht zusammen und hilft sich schnell mal. Am Bildschirm ist das einfach nicht dasselbe. Deshalb fahre ich inzwischen wieder öfter in die Firma, obwohl ich das gar nicht müsste.']],
        items: [{ n: 18, q: '', opts: AF, a: 2 }],
      },
      {
        audio: [['f2', 'Ich arbeite in der Buchhaltung, und da darf man keine Fehler machen. Im Büro klingelt ständig das Telefon, oder jemand kommt herein und will etwas wissen. Zu Hause habe ich meine Ruhe und bin mit den Abrechnungen viel schneller fertig. Klar, die Kolleginnen sehe ich seltener, aber wir telefonieren ja jeden Tag, das reicht mir. Mein Chef hat inzwischen auch gemerkt, dass meine Ergebnisse besser geworden sind.']],
        items: [{ n: 19, q: '', opts: AF, a: 4 }],
      },
      {
        audio: [['m2', 'Eigentlich arbeite ich gern zu Hause, denn ich spare mir die Fahrt, und meine Arbeit schaffe ich dort auch. Mein Problem ist ein anderes: Der Computer steht im Wohnzimmer, und abends schaue ich doch noch schnell in die E-Mails oder beantworte eine Anfrage. Am Wochenende geht es mir genauso. Meine Freundin sagt, ich habe nie richtig Feierabend, und sie hat recht. Im Büro macht man um 17 Uhr die Tür zu und ist fertig.']],
        items: [{ n: 20, q: '', opts: AF, a: 1 }],
      },
    ], {
      topic: 'Thema: Arbeiten im Homeoffice',
      stmts: [
        'Ohne den Weg zur Arbeit habe ich mehr Zeit für die Familie.',
        'Zu Hause kann ich Arbeit und Freizeit schlecht trennen.',
        'Mir fehlt zu Hause der Kontakt zu den Kollegen.',
        'In meinem Beruf ist Homeoffice gar nicht möglich.',
        'Zu Hause arbeite ich konzentrierter als im Büro.',
        'Homeoffice ist mir zu teuer, weil ich mehr für Strom und Heizung bezahle.',
      ],
    }),
  ],
};
