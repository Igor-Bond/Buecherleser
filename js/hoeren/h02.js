import { part, RF, AF } from './fmt.js';

export default {
  id: 'h02', title: 'Variante 2', about: 'Kita, Flughafen, Zahnarzt, Autowerkstatt · Wetter, Stau, Sportstudio, Altstadtfest, Bahnstreik · Wohnungsbesichtigung, Apotheke, Urlaubsplan, Sprachkurs · Wohnen in der Stadt oder auf dem Land',
  parts: [
    part(1, [
      {
        audio: [['f1', 'Guten Tag, Frau Milic, hier ist Sabine Thiel von der Kita Sonnenhof. Es geht um den Ausflug in den Tierpark am Freitag. Wir fahren um 8 Uhr 30 mit dem Bus los, bitte bringen Sie Milan schon um 8 Uhr. Er braucht feste Schuhe und eine Regenjacke. Essen und Getränke bekommen die Kinder von uns. Und noch etwas: Die Einverständniserklärung fehlt uns noch. Bitte geben Sie das Formular bis Mittwoch unterschrieben ab. Vielen Dank und auf Wiederhören.']],
        items: [{ n: 1, q: 'Was soll Frau Milic bis Mittwoch tun?', opts: ['Essen für den Ausflug vorbereiten.', 'Geld für den Bus mitbringen.', 'Ein Formular unterschrieben abgeben.'], a: 2 }],
      },
      {
        audio: [['m1', 'Achtung, eine Information für alle Fluggäste nach Lissabon, Flug Nummer 472. Wegen des starken Nebels kann Ihr Flugzeug noch nicht starten. Die neue Abflugzeit ist voraussichtlich 13 Uhr 20. Außerdem hat sich der Ausgang geändert: Bitte gehen Sie nicht zu Ausgang B 12, sondern zu Ausgang B 27. Fluggäste, die deshalb einen Anschlussflug verpassen, wenden sich bitte an den Informationsschalter in Halle 2.']],
        items: [{ n: 2, q: 'Was sollen die Fluggäste nach Lissabon tun?', opts: ['Zu einem anderen Ausgang gehen.', 'Sich alle am Informationsschalter melden.', 'In Halle 2 auf den Abflug warten.'], a: 0 }],
      },
      {
        audio: [['f1', 'Guten Tag, Herr Aydin, Praxis Doktor Wieland, mein Name ist Roth. Sie wollten einen Termin zur Kontrolle. Diese Woche ist leider alles voll. Ich kann Ihnen den Montag um 7 Uhr 45 anbieten oder den Mittwoch um 17 Uhr. Bitte rufen Sie uns zurück und sagen Sie, welcher Termin Ihnen passt. Wir sind heute bis 12 Uhr erreichbar, morgen dann wieder ab 8 Uhr. Die Nummer ist 5 5 5, 0 1, 4 8. Danke schön.']],
        items: [{ n: 3, q: 'Warum soll Herr Aydin zurückrufen?', opts: ['Sein Termin am Montag fällt aus.', 'Er soll einen von zwei Terminen auswählen.', 'Die Praxis hat diese Woche noch einen Termin frei.'], a: 1 }],
      },
      {
        audio: [['m1', 'Hallo, Frau Lindqvist, Autohaus Petzold, Krause am Apparat. Ihr Wagen ist fertig. Wir haben die Bremsen vorne erneuert und das Öl gewechselt. Die Rechnung beträgt 385 Euro. Sie können das Auto heute bis 18 Uhr abholen oder morgen ab 7 Uhr 30. Bitte beachten Sie: Unser Kartengerät ist zurzeit kaputt. Sie können also nur bar bezahlen oder das Geld später überweisen. Bis dann!']],
        items: [{ n: 4, q: 'Was erfährt Frau Lindqvist über die Bezahlung?', opts: ['Mit Karte kann sie im Moment nicht zahlen.', 'Sie muss das Geld heute bis 18 Uhr überweisen.', 'Sie muss die Rechnung auf jeden Fall bar bezahlen.'], a: 0 }],
      },
    ]),
    part(2, [
      {
        audio: [['f1', 'Das Wetter für heute und morgen. Heute bleibt es im ganzen Sendegebiet grau und neblig, und es ist kalt bei nur 3 Grad. In der Nacht sinken die Temperaturen auf minus 2 Grad. Vorsicht, auf den Straßen kann es glatt werden! Morgen früh fällt zuerst etwas Schnee. Ab dem Mittag kommt dann die Sonne heraus, und es bleibt trocken bei 5 Grad.']],
        items: [{ n: 5, q: 'Wie wird das Wetter morgen Nachmittag?', opts: ['Es schneit.', 'Es ist sonnig.', 'Es ist neblig.'], a: 1 }],
      },
      {
        audio: [['m1', 'Und nun zum Verkehr. Auf der Autobahn 3 in Richtung Süden gibt es zwischen Rodenberg und dem Kreuz Mühltal 9 Kilometer Stau. Dort ist ein Lastwagen liegen geblieben. Sie brauchen ungefähr 40 Minuten länger. Unser Tipp: Verlassen Sie die Autobahn schon an der Ausfahrt Rodenberg und fahren Sie über die Bundesstraße 26. In der Gegenrichtung, also nach Norden, läuft der Verkehr ohne Probleme.']],
        items: [{ n: 6, q: 'Was wird Autofahrern in Richtung Süden empfohlen?', opts: ['Über eine Bundesstraße zu fahren.', 'Erst 40 Minuten später loszufahren.', 'Bis zum Kreuz Mühltal auf der Autobahn zu bleiben.'], a: 0 }],
      },
      {
        audio: [['f1', 'Fit werden im neuen Jahr? Im Sportstudio Aktivo in der Gartenstraße 18 ist das ganz einfach! Wer sich im Januar anmeldet, zahlt keine Anmeldegebühr und spart damit 49 Euro. Der Monatsbeitrag beträgt 24 Euro 90. Dafür können Sie alle Geräte benutzen. Kurse wie Yoga oder Rückentraining kosten 5 Euro extra im Monat. Kommen Sie vorbei – wir haben täglich von 6 bis 23 Uhr geöffnet.']],
        items: [{ n: 7, q: 'Was bekommen neue Mitglieder im Januar?', opts: ['Kostenlose Kurse.', 'Den ersten Monat gratis.', 'Die Anmeldung ohne Gebühr.'], a: 2 }],
      },
      {
        audio: [['m1', 'Am Wochenende feiert Hollenbach sein Altstadtfest. Los geht es am Freitag um 18 Uhr auf dem Marktplatz mit Musik von drei Bands. Am Samstag gibt es ab 10 Uhr einen großen Markt mit Handwerk und Spezialitäten. Der Höhepunkt ist das Feuerwerk am Samstagabend um 22 Uhr 30. Am Sonntag haben außerdem die Geschäfte in der Innenstadt von 13 bis 18 Uhr geöffnet.']],
        items: [{ n: 8, q: 'Was kann man am Sonntag machen?', opts: ['Das Feuerwerk ansehen.', 'Bands auf dem Marktplatz hören.', 'In der Innenstadt einkaufen.'], a: 2 }],
      },
      {
        audio: [['f1', 'Eine wichtige Information für Bahnreisende: Am Donnerstag streiken die Lokführer von 3 Uhr morgens bis 15 Uhr. In dieser Zeit fahren keine Regionalzüge und nur wenige Fernzüge. Auch nach dem Streik gibt es bis zum Abend noch Verspätungen. Fahrkarten für Donnerstag können Sie auch noch am Freitag oder am Samstag benutzen. Busse und Straßenbahnen in den Städten fahren normal.']],
        items: [{ n: 9, q: 'Was erfahren Bahnreisende?', opts: ['Am Donnerstag fahren auch die Busse nicht.', 'Ihre Fahrkarte für Donnerstag gilt auch an den zwei Tagen danach.', 'Ab 15 Uhr fahren alle Züge wieder pünktlich.'], a: 1 }],
      },
    ]),
    part(3, [
      {
        who: { m1: 'Herr Brandt', f1: 'Frau Sokolova' },
        audio: [
          ['m1', 'Guten Tag, Frau Sokolova. Kommen Sie herein. Das ist also die Wohnung.'],
          ['f1', 'Guten Tag, Herr Brandt. Oh, das Wohnzimmer ist ja schön hell!'],
          ['m1', 'Ja, und der Balkon geht nach Süden. Die Wohnung hat 68 Quadratmeter und drei Zimmer.'],
          ['f1', 'Und die Küche? In der Anzeige stand nichts von einer Einbauküche.'],
          ['m1', 'Einen Herd und eine Spüle gibt es. Die Schränke müssten Sie aber selbst mitbringen.'],
          ['f1', 'Das geht. Wie hoch ist die Miete genau?'],
          ['m1', '640 Euro kalt, dazu kommen 150 Euro Nebenkosten. Frei ist die Wohnung ab dem 1. Juni. Vorher lasse ich sie noch streichen.'],
          ['f1', 'Sie gefällt mir gut. Ich möchte sie aber erst meinem Mann zeigen. Können wir morgen Abend noch einmal kommen?'],
          ['m1', 'Ja, gern. Sagen wir um 18 Uhr.'],
        ],
        items: [
          { n: 10, q: 'Frau Sokolova sieht sich die Wohnung zusammen mit ihrem Mann an.', opts: RF, a: 1 },
          { n: 11, q: 'Was fehlt in der Küche?', opts: ['Die Schränke.', 'Der Herd.', 'Die Spüle.'], a: 0 },
        ],
      },
      {
        who: { f1: 'Apothekerin', m1: 'Kunde' },
        audio: [
          ['f1', 'Guten Tag, was kann ich für Sie tun?'],
          ['m1', 'Guten Tag. Ich habe hier ein Rezept von meiner Hausärztin.'],
          ['f1', 'Danke. Die Tabletten habe ich da. Aber die Salbe müssen wir bestellen.'],
          ['m1', 'Wie lange dauert das?'],
          ['f1', 'Nicht lange. Sie ist heute Nachmittag ab 15 Uhr da.'],
          ['m1', 'Heute Nachmittag muss ich arbeiten. Kann ich sie auch morgen früh abholen?'],
          ['f1', 'Natürlich, wir öffnen um 8 Uhr. Oder wir bringen sie Ihnen heute Abend nach Hause. Das kostet nichts.'],
          ['m1', 'Nein danke, ich komme lieber morgen vor der Arbeit vorbei. Was bezahle ich?'],
          ['f1', 'Für beide Medikamente zusammen 10 Euro. Die Tabletten nehmen Sie bitte dreimal täglich nach dem Essen.'],
          ['m1', 'In Ordnung. Hier, bitte.'],
        ],
        items: [
          { n: 12, q: 'Der Kunde bekommt heute nicht alle Medikamente.', opts: RF, a: 0 },
          { n: 13, q: 'Wie bekommt der Kunde die Salbe?', opts: ['Die Apotheke bringt sie ihm nach Hause.', 'Er holt sie morgen früh ab.', 'Er holt sie heute um 15 Uhr ab.'], a: 1 },
        ],
      },
      {
        who: { f1: 'Martina', m1: 'Jörg' },
        audio: [
          ['f1', 'Jörg, hast du den Urlaubsplan schon gesehen? Wir sollen uns bis Freitag eintragen.'],
          ['m1', 'Ja, ich weiß. Ich möchte gern die ersten drei Wochen im August nehmen. Da haben meine Kinder Schulferien.'],
          ['f1', 'Oh, im August wollte ich auch weg. Aber wir können nicht beide gleichzeitig fehlen, das erlaubt Herr Sander nicht.'],
          ['m1', 'Stimmt. Kannst du nicht im Juli fahren?'],
          ['f1', 'Hm. Im Juli ist es am Meer so voll. Aber ich könnte im September fahren. Da ist es sogar billiger.'],
          ['m1', 'Das wäre wirklich nett von dir!'],
          ['f1', 'Gut, dann nehme ich die ersten zwei Wochen im September. Dafür arbeitest du im Dezember in der Woche vor Weihnachten.'],
          ['m1', 'Einverstanden. Ich trage uns gleich ein.'],
        ],
        items: [
          { n: 14, q: 'Beide Kollegen nehmen im August Urlaub.', opts: RF, a: 1 },
          { n: 15, q: 'Wann macht Martina Urlaub?', opts: ['Im Juli.', 'Im August.', 'Im September.'], a: 2 },
        ],
      },
      {
        who: { f1: 'Mitarbeiterin', m1: 'Herr Tavares' },
        audio: [
          ['f1', 'Sprachschule Dialog, guten Tag.'],
          ['m1', 'Guten Tag, Tavares ist mein Name. Ich möchte mich für einen Deutschkurs anmelden, Niveau B1.'],
          ['f1', 'Gern. Möchten Sie vormittags oder abends lernen?'],
          ['m1', 'Abends, ich arbeite bis 17 Uhr.'],
          ['f1', 'Der Abendkurs findet montags und mittwochs statt, von 18 Uhr 30 bis 20 Uhr 45. Er beginnt am 4. März.'],
          ['m1', 'Gut. Und was kostet der Kurs?'],
          ['f1', '290 Euro für acht Wochen. Das Kursbuch kostet extra, 22 Euro.'],
          ['m1', 'Muss ich vorher einen Test machen?'],
          ['f1', 'Ja, einen Einstufungstest. Der dauert etwa 30 Minuten. Sie können ihn zu Hause am Computer machen oder hier bei uns.'],
          ['m1', 'Dann mache ich ihn lieber bei Ihnen. Geht es am Samstag?'],
          ['f1', 'Ja, samstags sind wir von 9 bis 13 Uhr da. Kommen Sie einfach vorbei.'],
        ],
        items: [
          { n: 16, q: 'Herr Tavares möchte abends Deutsch lernen.', opts: RF, a: 0 },
          { n: 17, q: 'Wo macht Herr Tavares den Einstufungstest?', opts: ['In der Sprachschule.', 'Zu Hause am Computer.', 'Im Kurs am 4. März.'], a: 0 },
        ],
      },
    ]),
    part(4, [
      {
        ex: 0,
        audio: [['m1', 'Ich wohne seit zehn Jahren mitten in der Stadt, und ich möchte nicht tauschen. Zur Arbeit gehe ich zu Fuß, das dauert eine Viertelstunde. Der Supermarkt ist gleich um die Ecke, mein Arzt auch. Und wenn ich abends ins Kino will, bin ich in fünf Minuten dort. Das ist für mich das Wichtigste.']],
        items: [],
      },
      {
        audio: [['f1', 'Wir sind vor zwei Jahren in ein Dorf gezogen. Das Haus ist schön, aber der Bus fährt nur dreimal am Tag. Ich bringe die Kinder mit dem Wagen zur Schule, fahre zum Einkaufen 12 Kilometer und zur Arbeit noch weiter. Inzwischen haben wir sogar zwei Wagen. Das habe ich mir vorher anders vorgestellt.']],
        items: [{ n: 18, q: '', opts: AF, a: 4 }],
      },
      {
        audio: [['m2', 'Ich bin in der Großstadt geboren und lebe eigentlich gern hier. Aber für meine kleine Wohnung zahle ich inzwischen 950 Euro Miete, und es wird jedes Jahr mehr. Auch im Restaurant und im Café sind die Preise gestiegen. Am Monatsende bleibt mir kaum etwas übrig. Deshalb suche ich jetzt eine Wohnung in einer Kleinstadt.']],
        items: [{ n: 19, q: '', opts: AF, a: 2 }],
      },
      {
        audio: [['f2', 'Früher haben wir im vierten Stock an einer großen Straße gewohnt. Die Kinder durften nie allein nach unten. Jetzt leben wir in einem kleinen Ort. Hinter dem Haus ist eine Wiese, und es fahren kaum Autos. Meine beiden Söhne sind den ganzen Nachmittag mit dem Fahrrad unterwegs, und ich muss keine Angst haben.']],
        items: [{ n: 20, q: '', opts: AF, a: 1 }],
      },
    ], {
      topic: 'Thema: Wohnen – in der Stadt oder auf dem Land?',
      stmts: [
        'In der Stadt ist alles in der Nähe.',
        'Auf dem Land können Kinder frei draußen spielen.',
        'Das Leben in der Stadt ist mir zu teuer.',
        'Auf dem Land kennt man seine Nachbarn besser.',
        'Auf dem Land geht ohne Auto fast nichts.',
        'In der Stadt findet man leichter Arbeit.',
      ],
    }),
  ],
};
