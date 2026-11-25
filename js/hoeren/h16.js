import { part, RF, AF } from './fmt.js';

export default {
  id: 'h16', title: 'Variante 6', about: 'Vermieterin, Bahnsteig, Kita, Supermarkt · Schneefall, Unfall, Bäckerei, Museumsnacht, Schulweg · Versicherung, Betriebsausflug, Jobcenter, Blumen gießen · Fernsehen, streamen oder lesen',
  parts: [
    part(1, [
      {
        audio: [['f1', 'Guten Tag, Herr Santos, hier ist Ihre Vermieterin, Frau Engelhardt. Da Sie ja zum Monatsende ausziehen, möchte ich die Wohnung gern neuen Interessenten zeigen. Eigentlich hatte ich an Samstagvormittag gedacht, aber da kann die Familie nicht. Deshalb würde ich am Mittwoch gegen 18 Uhr mit zwei Personen vorbeikommen. Sie müssen nicht unbedingt da sein, ich habe ja einen Schlüssel, aber ohne Ihre Zustimmung gehe ich natürlich nicht hinein. Geben Sie mir also bitte kurz Bescheid, ob Ihnen das recht ist. Aufräumen müssen Sie nicht extra. Vielen Dank!']],
        items: [{ n: 1, q: 'Worum bittet die Vermieterin?', opts: ['Herr Santos soll am Mittwoch um 18 Uhr zu Hause sein.', 'Herr Santos soll ihr bis Samstag einen Schlüssel geben.', 'Herr Santos soll ihr mitteilen, ob er mit dem Besuch einverstanden ist.'], a: 2 }],
      },
      {
        audio: [['m1', 'Achtung an Gleis 6! Der Intercity nach Hallstedt, Abfahrt 15 Uhr 12, fährt heute in umgekehrter Wagenreihung. Die Wagen der ersten Klasse halten nicht wie gewohnt im Abschnitt A, sondern in den Abschnitten E und F. Das Bordrestaurant befindet sich in der Mitte des Zuges im Abschnitt C. Außerdem fehlt heute Wagen 9. Reisende mit einer Reservierung für diesen Wagen werden gebeten, sich an das Zugpersonal zu wenden oder freie Plätze in Wagen 8 zu benutzen. Der Zug trifft in wenigen Minuten ein. Bitte beachten Sie die Anzeigen am Bahnsteig.']],
        items: [{ n: 2, q: 'Was sollen Fahrgäste tun, die in Wagen 9 reserviert haben?', opts: ['Sich im Nachbarwagen einen Sitz suchen oder die Mitarbeiter im Zug ansprechen.', 'Im Abschnitt A auf das Zugpersonal warten.', 'In die erste Klasse in den Abschnitten E und F einsteigen.'], a: 0 }],
      },
      {
        audio: [['f1', 'Guten Tag, Frau Abdi, hier spricht Frau Lorenz von der Kita Sonnenhof. Wie Sie vielleicht schon gehört haben, wird am Dienstag und Mittwoch in den städtischen Kitas gestreikt. Unsere Einrichtung bleibt an beiden Tagen geschlossen. Es gibt allerdings eine Notbetreuung in der Kita Lindenweg, aber nur für Kinder, deren Eltern beide berufstätig sind. Sie hatten Ihren Sohn dafür angemeldet. Damit er den Platz bekommt, brauche ich bis Freitag noch die Bescheinigung von Ihrem Arbeitgeber, die von Ihrem Mann liegt schon vor. Ab Donnerstag läuft dann alles wieder normal.']],
        items: [{ n: 3, q: 'Was muss Frau Abdi noch tun?', opts: ['Ihren Sohn bis Freitag für die Notbetreuung anmelden.', 'Einen Nachweis von ihrer Firma einreichen.', 'Die Bescheinigung ihres Mannes in die Kita Lindenweg bringen.'], a: 1 }],
      },
      {
        audio: [['m1', 'Liebe Kundinnen und Kunden, bitte beachten Sie einen wichtigen Hinweis. Der Hersteller Hofgut Wiesental ruft seinen Erdbeerjoghurt im großen Becher mit 500 Gramm zurück, weil in einigen Bechern kleine Plastikteile gefunden wurden. Betroffen ist nur Ware mit dem Haltbarkeitsdatum 14. Juni, andere Sorten und der kleine Becher sind in Ordnung. Wenn Sie diesen Joghurt gekauft haben, essen Sie ihn bitte nicht. Sie können ihn an unserer Information zurückgeben und bekommen den Kaufpreis erstattet, auch wenn Sie den Kassenbon nicht mehr haben. Wir bitten um Entschuldigung.']],
        items: [{ n: 4, q: 'Was erfahren die Kunden?', opts: ['Alle Joghurtsorten des Herstellers werden zurückgerufen.', 'Man erhält sein Geld auch ohne Beleg zurück.', 'Der kleine Becher darf bis zum 14. Juni nicht gegessen werden.'], a: 1 }],
      },
    ]),
    part(2, [
      {
        audio: [['f1', 'Das Wetter. In der Nacht hat es im ganzen Sendegebiet geschneit, im Bergland liegen bis zu 20 Zentimeter Neuschnee. Heute Vormittag schneit es zunächst weiter, gegen Mittag hört der Schneefall im Flachland aber auf, und es zeigt sich sogar kurz die Sonne. Im Bergland dagegen fällt bis zum Abend Schnee. Die Temperaturen liegen tagsüber bei minus 1 Grad, in der kommenden Nacht sinken sie auf minus 8 Grad. Weil nasse Straßen dann gefrieren, wird es morgen früh sehr glatt. Lassen Sie das Auto also möglichst stehen.']],
        items: [{ n: 5, q: 'Wovor wird für morgen früh gewarnt?', opts: ['Vor Eis auf den Fahrbahnen.', 'Vor 20 Zentimetern Neuschnee im Flachland.', 'Vor starkem Schneefall bis zum Abend.'], a: 0 }],
      },
      {
        audio: [['m1', 'Verkehr aktuell. Auf der Bundesstraße 27 zwischen Rodenbach und Kirchhain ist am Morgen ein Lastwagen umgekippt. Verletzt wurde zum Glück niemand, aber die Ladung liegt auf der Fahrbahn. Die Strecke ist deshalb in Richtung Kirchhain komplett gesperrt, in Richtung Rodenbach ist eine Spur frei. Die Aufräumarbeiten dauern voraussichtlich bis 13 Uhr. Wer nach Kirchhain möchte, sollte schon in Rodenbach abfahren und der Umleitung über Steinau folgen. Achtung: Auf dieser Umleitung gibt es eine niedrige Brücke, unter der Fahrzeuge über 3 Meter 50 Höhe nicht durchkommen.']],
        items: [{ n: 6, q: 'Was erfahren Autofahrer, die nach Kirchhain wollen?', opts: ['Sie können auf einer Spur am Unfallort vorbeifahren.', 'Sie sollen bis 13 Uhr in Rodenbach warten.', 'Sie müssen einen anderen Weg nehmen.'], a: 2 }],
      },
      {
        audio: [['f1', 'Frisch, knusprig, von Hand gemacht: Am Samstag eröffnet die Bäckerei Kornblume ihre neue Filiale in der Gartenstraße, direkt gegenüber der Post. Zur Feier des Tages bekommt jeder Kunde zu seinem Einkauf ein Brötchen geschenkt, und Kinder dürfen von 10 bis 12 Uhr selbst Brezeln backen. In der ganzen ersten Woche kostet außerdem jede Tasse Kaffee nur 1 Euro. Geöffnet ist täglich ab 6 Uhr, sonntags allerdings erst ab 8 Uhr. Übrigens: Unsere Filiale am Marktplatz bleibt natürlich wie gewohnt für Sie da. Bäckerei Kornblume, Backen mit Liebe.']],
        items: [{ n: 7, q: 'Was gibt es nur am Eröffnungstag?', opts: ['Kaffee für 1 Euro.', 'Etwas Gebackenes umsonst für alle, die etwas kaufen.', 'Kostenlose Brezeln für jeden Kunden.'], a: 1 }],
      },
      {
        audio: [['m1', 'Der Kulturtipp: Am kommenden Samstag findet die Lange Nacht der Museen statt. Von 18 Uhr bis 1 Uhr nachts öffnen 14 Museen und Galerien ihre Türen. Das Ticket für 12 Euro gilt für alle Häuser und auch für die Sonderbusse, die alle 15 Minuten zwischen den Museen fahren. Kinder und Jugendliche unter 16 Jahren brauchen kein Ticket. Karten gibt es im Vorverkauf in der Touristeninformation, an den Museumskassen aber erst am Samstag ab 17 Uhr. Für die Führung durch das Schlossmuseum um 20 Uhr muss man sich allerdings vorher anmelden, denn die Plätze sind begrenzt.']],
        items: [{ n: 8, q: 'Was erfahren Sie über die Lange Nacht der Museen?', opts: ['Für die Sonderbusse braucht man ein zusätzliches Ticket.', 'An den Museumskassen kann man die Karten schon vor Samstag kaufen.', 'An einem der Angebote kann man nicht spontan teilnehmen.'], a: 2 }],
      },
      {
        audio: [['f1', 'Aus der Region: Nächste Woche beginnt die Schule wieder, und die Polizei Wehrstadt bittet alle Autofahrer um besondere Vorsicht. In den ersten zwei Wochen wird vor den Grundschulen häufiger die Geschwindigkeit kontrolliert, vor allem morgens zwischen 7 und 8 Uhr. Eltern wird empfohlen, den Schulweg schon jetzt gemeinsam mit den Kindern zu Fuß zu üben, statt sie später täglich mit dem Auto zu bringen. Denn gerade die vielen Autos vor dem Schultor sind für Kinder gefährlich. Wer trotzdem fährt, sollte ein Stück entfernt halten und das Kind die letzten Meter laufen lassen.']],
        items: [{ n: 9, q: 'Was rät die Polizei den Eltern?', opts: ['Die Strecke zur Schule noch in den Ferien mit dem Kind zu trainieren.', 'Die Kinder in den ersten zwei Wochen mit dem Auto zu bringen.', 'Morgens zwischen 7 und 8 Uhr direkt vor dem Schultor zu halten.'], a: 0 }],
      },
    ]),
    part(3, [
      {
        who: { m1: 'Herr Thiele', f1: 'Frau Okonkwo' },
        audio: [
          ['m1', 'Nordstern Versicherung, Schadensabteilung, Sie sprechen mit Herrn Thiele.'],
          ['f1', 'Guten Tag, Okonkwo hier. Ich möchte einen Schaden melden. Gestern ist bei uns die Waschmaschine ausgelaufen, und das Wasser ist bis in die Wohnung unter uns gelaufen.'],
          ['m1', 'Das tut mir leid. Was ist denn genau beschädigt?'],
          ['f1', 'Bei uns der Boden im Bad und im Flur. Und bei der Nachbarin ist die Decke nass, sagt sie.'],
          ['m1', 'Für den Schaden in Ihrer eigenen Wohnung sind wir zuständig. Die Decke der Nachbarin wäre dagegen ein Fall für die Haftpflichtversicherung. Haben Sie die auch bei uns?'],
          ['f1', 'Nein, die habe ich bei einer anderen Firma.'],
          ['m1', 'Dann müssten Sie das dort extra melden. Für Ihren Boden brauche ich Fotos und, wenn möglich, die Rechnung der Waschmaschine.'],
          ['f1', 'Die finde ich bestimmt nicht mehr, die Maschine ist acht Jahre alt.'],
          ['m1', 'Das ist nicht schlimm, dann reichen die Fotos. Wichtig ist nur, dass Sie nichts reparieren lassen, bevor unser Gutachter da war.'],
          ['f1', 'Oh, der Handwerker sollte eigentlich morgen kommen. Dann sage ich ihm ab.'],
          ['m1', 'Ja, bitte. Der Gutachter meldet sich innerhalb von drei Tagen bei Ihnen. Die Fotos können Sie über unsere Internetseite hochladen.'],
          ['f1', 'Gut, das mache ich heute Abend.'],
        ],
        items: [
          { n: 10, q: 'Die Versicherung von Herrn Thiele bezahlt auch den Schaden in der Wohnung der Nachbarin.', opts: RF, a: 1 },
          { n: 11, q: 'Was soll Frau Okonkwo tun?', opts: ['Die Rechnung der Waschmaschine hochladen.', 'Den Boden morgen vom Handwerker reparieren lassen.', 'Mit den Arbeiten warten, bis ein Fachmann der Versicherung alles gesehen hat.'], a: 2 },
        ],
      },
      {
        who: { f1: 'Miriam', m1: 'Stefan' },
        audio: [
          ['f1', 'Stefan, wir sollen doch den Betriebsausflug organisieren. Hast du schon eine Idee?'],
          ['m1', 'Ich dachte an eine Kanutour auf dem Fluss, so wie vor drei Jahren. Das hat damals allen gefallen.'],
          ['f1', 'Schon, aber diesmal ist Frau Hellwig dabei, und mit ihrem Knie kann sie nicht ins Boot. Außerdem können zwei Kollegen aus dem Lager nicht schwimmen.'],
          ['m1', 'Stimmt, daran habe ich nicht gedacht. Und eine Wanderung zur Burg Falkenstein?'],
          ['f1', 'Das ist für Frau Hellwig auch schwierig. Wie wäre es mit einer Schifffahrt auf dem Stausee und danach Grillen am Ufer?'],
          ['m1', 'Gute Idee, da können alle mitmachen. Was kostet das denn?'],
          ['f1', 'Das Schiff 14 Euro pro Person. Die Firma zahlt 30 Euro für jeden, dann bleiben noch 16 Euro für Essen und Getränke.'],
          ['m1', 'Das müsste reichen. Welcher Tag ist geplant, der 20. Juni?'],
          ['f1', 'Eigentlich ja, aber da ist die halbe Buchhaltung auf einer Schulung. Der Chef hat deshalb den 27. vorgeschlagen.'],
          ['m1', 'Am 27. bin ich auch da. Soll ich das Schiff reservieren?'],
          ['f1', 'Das mache ich, ich habe die Nummer. Könntest du eine Liste aufhängen, damit wir wissen, wer mitkommt und wer kein Fleisch isst?'],
          ['m1', 'Klar, die hänge ich heute noch in die Küche.'],
        ],
        items: [
          { n: 12, q: 'Die beiden suchen einen Ausflug, bei dem niemand aus der Firma ausgeschlossen ist.', opts: RF, a: 0 },
          { n: 13, q: 'Was übernimmt Stefan?', opts: ['Er fragt die Kollegen, wer dabei sein möchte.', 'Er reserviert das Schiff für den 27. Juni.', 'Er kauft Essen und Getränke für 16 Euro pro Person.'], a: 0 },
        ],
      },
      {
        who: { m1: 'Herr Wagner', f1: 'Frau Stojanovic' },
        audio: [
          ['m1', 'Jobcenter Neuhausen, Wagner, guten Tag.'],
          ['f1', 'Guten Tag, Herr Wagner, hier ist Stojanovic. Ich habe am Donnerstag um 9 Uhr einen Termin bei Ihnen, aber ich kann leider nicht kommen.'],
          ['m1', 'Aus welchem Grund denn? Sie wissen ja, dass diese Termine Pflicht sind.'],
          ['f1', 'Ja, das weiß ich. Aber ich habe genau an dem Vormittag ein Vorstellungsgespräch, bei einer Reinigungsfirma in Altbach.'],
          ['m1', 'Das ist natürlich ein wichtiger Grund. Ich brauche dafür aber einen Nachweis, zum Beispiel die Einladung der Firma.'],
          ['f1', 'Die habe ich als E-Mail bekommen. Kann ich sie Ihnen einfach weiterleiten?'],
          ['m1', 'Ja, das genügt. Dann suchen wir einen neuen Termin. Wie wäre es am Freitag um 11 Uhr?'],
          ['f1', 'Freitags habe ich bis 12 Uhr Deutschkurs. Ginge es auch am Nachmittag?'],
          ['m1', 'Freitagnachmittag haben wir geschlossen. Dann erst nächste Woche, Montag um 14 Uhr oder Dienstag um 8 Uhr 30.'],
          ['f1', 'Dienstag ist mir zu früh, da bringe ich meine Tochter zur Schule. Dann lieber der andere Termin.'],
          ['m1', 'Gut, das ist notiert. Bringen Sie bitte auch Ihre Bewerbungen der letzten Wochen mit.'],
          ['f1', 'Mache ich. Und falls ich die Stelle bekomme?'],
          ['m1', 'Dann rufen Sie mich bitte sofort an, der Termin findet aber trotzdem statt.'],
        ],
        items: [
          { n: 14, q: 'Frau Stojanovic sagt den Termin am Donnerstag ab, weil sie dann im Deutschkurs sitzt.', opts: RF, a: 1 },
          { n: 15, q: 'Wann kommt Frau Stojanovic ins Jobcenter?', opts: ['Am Freitag um 11 Uhr.', 'Am Nachmittag zu Beginn der nächsten Woche.', 'Am Dienstag um 8 Uhr 30.'], a: 1 },
        ],
      },
      {
        who: { f1: 'Frau Kowalski', m1: 'Herr Rahimi' },
        audio: [
          ['f1', 'Hallo, Herr Rahimi, darf ich Sie kurz stören? Ich hätte eine Bitte.'],
          ['m1', 'Aber natürlich, Frau Kowalski. Worum geht es denn?'],
          ['f1', 'Wir fliegen am Samstag für zwei Wochen zu meiner Schwester nach Portugal. Könnten Sie in der Zeit vielleicht unsere Blumen gießen?'],
          ['m1', 'Gern, das ist doch kein Problem. Wie oft muss ich denn kommen?'],
          ['f1', 'Die Pflanzen im Wohnzimmer brauchen nur einmal pro Woche Wasser. Aber die Tomaten auf dem Balkon müssten jeden zweiten Tag gegossen werden.'],
          ['m1', 'Das schaffe ich. In der zweiten Woche bin ich allerdings von Mittwoch bis Freitag auf einer Dienstreise.'],
          ['f1', 'Oh. Dann frage ich für diese Tage meine Kollegin, sie wohnt ja in der Nähe.'],
          ['m1', 'Das ist nicht nötig, mein Sohn ist zu Hause, er kann das übernehmen. Er ist 16 und sehr zuverlässig.'],
          ['f1', 'Wunderbar, vielen Dank! Soll ich Ihnen den Schlüssel am Freitagabend bringen?'],
          ['m1', 'Freitag bin ich beim Sport. Werfen Sie ihn einfach in unseren Briefkasten.'],
          ['f1', 'Lieber nicht, das ist mir zu unsicher. Ich klingele am Samstag früh bei Ihnen, bevor das Taxi kommt, so gegen sieben.'],
          ['m1', 'In Ordnung, da bin ich schon wach. Gute Reise!'],
        ],
        items: [
          { n: 16, q: 'Während der ganzen Reise kümmert sich die Familie Rahimi um die Pflanzen von Frau Kowalski.', opts: RF, a: 0 },
          { n: 17, q: 'Wie bekommt Herr Rahimi den Schlüssel?', opts: ['Frau Kowalski wirft ihn in den Briefkasten.', 'Frau Kowalski gibt ihn kurz vor der Abreise persönlich ab.', 'Frau Kowalski bringt ihn am Freitagabend vorbei.'], a: 1 },
        ],
      },
    ]),
    part(4, [
      {
        ex: 3,
        audio: [['f1', 'Ich sitze den ganzen Tag im Büro vor dem Computer. Abends habe ich früher oft noch eine Serie angemacht, aber danach war ich eher nervös und konnte schlecht einschlafen. Seit einem Jahr nehme ich mir stattdessen ein Buch, meistens einen Krimi. Schon nach ein paar Seiten werde ich ruhig und vergesse die Arbeit. Natürlich schaue ich ab und zu einen Film, aber richtig entspannen kann ich nur mit einem Buch.']],
        items: [],
      },
      {
        audio: [['m1', 'Ich arbeite im Schichtdienst, mal früh, mal nachts. Das normale Fernsehprogramm passt da einfach nicht: Wenn der Film um Viertel nach acht anfängt, bin ich entweder bei der Arbeit oder schon im Bett. Deshalb habe ich ein Abo bei einem Streaming-Dienst, obwohl das natürlich jeden Monat etwas kostet. Dafür kann ich eine Folge um 10 Uhr morgens anfangen, unterbrechen und am nächsten Tag weiterschauen. Diese Freiheit möchte ich nicht mehr hergeben.']],
        items: [{ n: 18, q: '', opts: AF, a: 0 }],
      },
      {
        audio: [['f2', 'Ich lese eigentlich gern, aber auf Deutsch ist das für mich noch sehr anstrengend, weil ich ständig Wörter nachschlagen muss. Mit Serien geht es leichter. Ich schaue deutsche Serien mit Untertiteln und höre, wie die Leute im Alltag wirklich reden. Manche Sätze spreche ich laut nach. Mein Mann lacht darüber und meint, das sei doch keine Erholung. Mag sein, aber mein Deutsch ist dadurch viel besser geworden als im ganzen letzten Kurs.']],
        items: [{ n: 19, q: '', opts: AF, a: 5 }],
      },
      {
        audio: [['m2', 'Serien sind heute wirklich gut gemacht, das gebe ich zu. Genau das ist aber mein Problem. Ich nehme mir vor, nur eine Folge zu schauen, dann läuft automatisch die nächste, und plötzlich ist es ein Uhr nachts. Am Wochenende war manchmal der halbe Samstag weg. Deshalb habe ich mein Abo gekündigt, nicht wegen des Geldes, sondern wegen der vielen Stunden. Jetzt gehe ich abends öfter raus oder lese, und ich vermisse eigentlich nichts.']],
        items: [{ n: 20, q: '', opts: AF, a: 4 }],
      },
    ], {
      topic: 'Thema: Freizeit – fernsehen, streamen oder lesen?',
      stmts: [
        'Beim Streamen entscheide ich selbst, wann ich etwas sehe.',
        'Mir ist ein festes Fernsehprogramm lieber als die große Auswahl.',
        'Für die vielen Streaming-Dienste gebe ich zu viel Geld aus.',
        'Beim Lesen kann ich mich am besten erholen.',
        'Vor dem Bildschirm verliere ich zu viel Zeit.',
        'Ich nutze Filme und Serien, um eine Sprache zu lernen.',
      ],
    }),
  ],
};
