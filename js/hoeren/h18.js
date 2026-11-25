import { part, RF, AF } from './fmt.js';

export default {
  id: 'h18', title: 'Variante 8', about: 'Schornsteinfeger, Konzerthalle, Berufsschule, ärztlicher Notdienst · Pollenflug, Brückensperrung, Second-Hand-Kaufhaus, Stadtradeln, Bürgerbüro · Probearbeit, Stromanbieter, Schulwechsel, Transporter · Weiterbildung neben dem Beruf',
  parts: [
    part(1, [
      {
        audio: [['m1', 'Guten Tag, Frau Dimitrova, hier spricht Schornsteinfeger Haller. Ich hatte Ihnen ja einen Termin für die Kontrolle Ihrer Gasheizung am Dienstag um 10 Uhr angekündigt. Leider muss ich das ändern, weil ich an dem Tag einen Notfall in einem anderen Stadtteil habe. Ich würde stattdessen am Freitag kommen, und zwar nicht vormittags, sondern zwischen 13 und 15 Uhr. Falls Sie dann nicht da sind, reicht es, wenn mir jemand den Keller aufschließt, zum Beispiel der Hausmeister. Nur wenn Freitag gar nicht geht, melden Sie sich bitte unter 5 5 5, 0 1, 4 7.']],
        items: [{ n: 1, q: 'Was ist für den neuen Termin wichtig?', opts: ['Frau Dimitrova muss am Freitagvormittag zu Hause sein.', 'Der Schornsteinfeger muss zur Heizung hineinkommen können.', 'Frau Dimitrova soll den Freitag telefonisch bestätigen.'], a: 1 }],
      },
      {
        audio: [['f1', 'Verehrte Gäste, herzlich willkommen in der Stadthalle Rheinau. Das Konzert beginnt heute wegen technischer Probleme nicht um 20 Uhr, sondern erst um 20 Uhr 30. Der Saal wird in etwa zehn Minuten geöffnet. Bitte beachten Sie, dass große Taschen und Rucksäcke nicht mit in den Saal genommen werden dürfen; sie können kostenlos an der Garderobe im Untergeschoss abgegeben werden. Fotografieren mit dem Handy ist erlaubt, Filmaufnahmen sind jedoch verboten. Wer nach der Pause zu spät zurückkommt, wird erst wieder eingelassen, wenn ein Musikstück zu Ende ist.']],
        items: [{ n: 2, q: 'Was erfahren die Besucher?', opts: ['Der Saal wird erst um 20 Uhr 30 geöffnet.', 'Für Rucksäcke muss man an der Garderobe bezahlen.', 'Im zweiten Teil des Abends kann man nicht jederzeit auf seinen Platz gehen.'], a: 2 }],
      },
      {
        audio: [['f1', 'Guten Tag, Herr Hakimi, hier ist das Sekretariat der Berufsschule am Kanal, mein Name ist Wieland. Sie hatten gefragt, ob wir Ihnen Ihr Abschlusszeugnis mit der Post schicken können. Das ist leider nicht möglich, weil der Empfang unterschrieben werden muss. Die Zeugnisse werden am Freitag, dem 10. Juli, um 11 Uhr in der Aula ausgegeben. Falls Sie da arbeiten müssen, können Sie es in der Woche danach bei uns im Sekretariat abholen, täglich bis 12 Uhr. Oder Sie geben einer anderen Person eine Vollmacht mit. Und bitte bringen Sie noch Ihre Bibliotheksbücher zurück.']],
        items: [{ n: 3, q: 'Wie kann Herr Hakimi sein Zeugnis bekommen, wenn er am 10. Juli keine Zeit hat?', opts: ['Jemand holt es für ihn ab und zeigt seine schriftliche Erlaubnis.', 'Die Schule schickt es ihm mit der Post.', 'Er holt es am selben Freitag nach 12 Uhr im Sekretariat ab.'], a: 0 }],
      },
      {
        audio: [['m1', 'Sie sind mit dem ärztlichen Bereitschaftsdienst verbunden. Im Moment sind alle Leitungen besetzt, bitte legen Sie nicht auf. Bei lebensgefährlichen Notfällen wie starken Schmerzen in der Brust oder Atemnot wählen Sie bitte sofort die 1 1 2. Unsere Bereitschaftspraxis im Klinikum Nord ist heute von 18 bis 22 Uhr geöffnet, dorthin können Sie ohne Anmeldung kommen. Ein Hausbesuch ist nur möglich, wenn Sie aus gesundheitlichen Gründen die Wohnung nicht verlassen können. Halten Sie bitte Ihre Versichertenkarte und eine Liste Ihrer Medikamente bereit.']],
        items: [{ n: 4, q: 'Was erfährt man aus der Ansage?', opts: ['Für die Bereitschaftspraxis braucht man eine Anmeldung.', 'Ein Arzt kommt nur in bestimmten Fällen zu den Kranken nach Hause.', 'Bei Atemnot soll man in der Leitung bleiben und nicht auflegen.'], a: 1 }],
      },
    ]),
    part(2, [
      {
        audio: [['f1', 'Das Wetter. Der Frühling zeigt sich in den nächsten Tagen von seiner schönen Seite: Heute und morgen scheint fast überall die Sonne, und die Temperaturen steigen auf 19 Grad. Für Allergiker ist das allerdings keine gute Nachricht, denn bei dem trockenen, windigen Wetter fliegen besonders viele Birkenpollen. Lüften Sie deshalb am besten nicht tagsüber, sondern spät abends. Am Donnerstag ziehen dann Schauer durch, die die Luft reinigen, sodass die Belastung deutlich sinkt. Zum Wochenende hin wird es wieder trocken, mit 14 Grad aber kühler.']],
        items: [{ n: 5, q: 'Was erfahren Sie aus dem Wetterbericht?', opts: ['Am Donnerstag fliegen besonders viele Pollen.', 'Der Regen macht es für Menschen mit Allergie leichter.', 'Am besten lüftet man tagsüber, solange die Sonne scheint.'], a: 1 }],
      },
      {
        audio: [['m1', 'Aus dem Verkehrsstudio. Die Kanalbrücke zwischen Altstadt und Hafenviertel wird ab kommendem Montag für den Autoverkehr gesperrt, weil die Fahrbahn erneuert werden muss. Die Arbeiten sollten ursprünglich sechs Wochen dauern, nach neuen Angaben der Stadt ist jedoch mit etwa drei Monaten zu rechnen. Fußgänger und Radfahrer können die Brücke weiterhin benutzen. Autofahrer werden über den Nordring umgeleitet. Die Buslinie 6 fährt in dieser Zeit nicht über die Brücke und endet schon am Fischmarkt. Von dort erreichen Sie das Hafenviertel in etwa zehn Minuten zu Fuß.']],
        items: [{ n: 6, q: 'Was gilt während der Bauarbeiten?', opts: ['Die Brücke ist sechs Wochen lang für alle gesperrt.', 'Die Buslinie 6 wird über den Nordring umgeleitet.', 'Mit dem Rad kommt man wie bisher auf die andere Seite.'], a: 2 }],
      },
      {
        audio: [['f1', 'Gut einkaufen und dabei die Umwelt schonen – das geht im Second-Hand-Kaufhaus Fundgrube in der Weberstraße. Auf zwei Etagen finden Sie Möbel, Geschirr, Bücher und Kleidung, alles gebraucht, geprüft und sauber. Diese Woche gibt es Kinderkleidung zum halben Preis. Sie möchten selbst etwas loswerden? Gut erhaltene Sachen nehmen wir gern als Spende an, bezahlen können wir dafür allerdings nichts. Möbel holen wir sogar kostenlos bei Ihnen ab, wenn Sie vorher einen Termin vereinbaren. Geöffnet ist dienstags bis samstags von 10 bis 18 Uhr.']],
        items: [{ n: 7, q: 'Was bietet das Kaufhaus an?', opts: ['Es transportiert geschenkte Einrichtung ohne Gebühr ab.', 'Es bezahlt Kunden für gut erhaltene Sachen.', 'Es verkauft diese Woche alle Kleidung zum halben Preis.'], a: 0 }],
      },
      {
        audio: [['m1', 'Und jetzt ein Tipp für alle, die gern Rad fahren: Am 1. Juni startet in Bergheim wieder die Aktion Stadtradeln. Drei Wochen lang sammeln Teams aus Firmen, Schulen und Vereinen möglichst viele Kilometer auf dem Fahrrad. Mitmachen kann jeder, der in Bergheim wohnt, arbeitet oder zur Schule geht. Die Kilometer tragen Sie einfach in der App oder auf der Internetseite der Stadt ein. Die Anmeldung kostet nichts und ist auch nach dem Start noch möglich. Für das Team mit den meisten Kilometern pro Person gibt es ein Frühstück im Rathaus.']],
        items: [{ n: 8, q: 'Was erfahren Sie über die Aktion?', opts: ['Nur wer in Bergheim wohnt, darf mitmachen.', 'Die Anmeldung ist nur bis zum 1. Juni möglich.', 'Man kann auch später noch einsteigen.'], a: 2 }],
      },
      {
        audio: [['f1', 'Eine Information der Stadtverwaltung: Das Bürgerbüro im Rathaus hat ab dem 1. April neue Öffnungszeiten. Montags und mittwochs ist künftig schon ab 7 Uhr 30 geöffnet, donnerstags sogar bis 19 Uhr, damit auch Berufstätige ihre Angelegenheiten erledigen können. Dafür bleibt das Büro freitags künftig ganz geschlossen. Einen neuen Ausweis oder Pass können Sie weiterhin nur mit Termin beantragen; Termine bucht man online oder telefonisch. Fertige Dokumente dürfen dagegen ohne Termin abgeholt werden, allerdings nur vormittags.']],
        items: [{ n: 9, q: 'Was erfahren Sie über das Bürgerbüro?', opts: ['An einem Tag der Woche kann man künftig auch am Abend kommen.', 'Freitags ist nur noch vormittags geöffnet.', 'Einen Pass kann man jetzt ohne Termin beantragen.'], a: 0 }],
      },
    ]),
    part(3, [
      {
        who: { f1: 'Frau Reuter', m1: 'Herr Tesfaye' },
        audio: [
          ['f1', 'Herr Tesfaye, schön, dass Sie da sind. Ihr Vorstellungsgespräch letzte Woche hat uns gut gefallen. Bevor wir uns entscheiden, möchten wir Sie aber gern bei der Arbeit kennenlernen.'],
          ['m1', 'Das verstehe ich gut. Ich möchte ja auch sehen, ob das Haus zu mir passt. Wie läuft so ein Probetag bei Ihnen ab?'],
          ['f1', 'Sie begleiten eine erfahrene Kollegin, Frau Jansen, auf dem Wohnbereich 2. Die Frühschicht beginnt um 6 Uhr 30, aber es reicht, wenn Sie um 7 Uhr da sind.'],
          ['m1', 'Gut. Und was soll ich mitbringen? Arbeitskleidung habe ich noch von meiner alten Stelle.'],
          ['f1', 'Kleidung bekommen Sie von uns. Wichtig sind nur feste, geschlossene Schuhe. Und bitte denken Sie an Ihren Impfausweis, den brauchen wir für die Unterlagen.'],
          ['m1', 'In Ordnung. Wird der Tag eigentlich bezahlt?'],
          ['f1', 'Nein, leider nicht, aber das Mittagessen bekommen Sie bei uns. Wäre Ihnen der Donnerstag recht?'],
          ['m1', 'Donnerstag habe ich vormittags meinen Sprachkurs. Am Freitag könnte ich aber.'],
          ['f1', 'Freitag ist Frau Jansen nicht im Dienst. Dann nehmen wir doch den Montag darauf.'],
          ['m1', 'Montag passt. Wann erfahre ich, ob ich die Stelle bekomme?'],
          ['f1', 'Wir sprechen gleich nach der Schicht miteinander, und spätestens am Mittwoch rufe ich Sie an.'],
        ],
        items: [
          { n: 10, q: 'Das Pflegeheim hat Herrn Tesfaye schon fest eingestellt.', opts: RF, a: 1 },
          { n: 11, q: 'Was muss Herr Tesfaye zum Probetag mitbringen?', opts: ['Passendes für die Füße und einen Nachweis über seine Impfungen.', 'Die Arbeitskleidung von seiner alten Stelle.', 'Etwas zu essen für die Mittagspause.'], a: 0 },
        ],
      },
      {
        who: { m1: 'Herr Böhm', f1: 'Frau Castillo' },
        audio: [
          ['m1', 'Stadtenergie Grünwald, mein Name ist Böhm. Was kann ich für Sie tun?'],
          ['f1', 'Guten Tag, Castillo hier. Ich habe gestern die Jahresabrechnung von meinem jetzigen Anbieter bekommen und soll 240 Euro nachzahlen. Deshalb überlege ich, zu Ihnen zu wechseln.'],
          ['m1', 'Wie viele Personen leben denn in Ihrem Haushalt?'],
          ['f1', 'Wir sind zu dritt.'],
          ['m1', 'Dann würde ich Ihnen unseren Tarif Basis empfehlen, für 79 Euro im Monat. Es gibt auch den Tarif Öko für 86 Euro, mit Strom nur aus Wind und Sonne.'],
          ['f1', 'Im Moment zahle ich 95. Der günstigere reicht mir. Wie lange bin ich dann an den Vertrag gebunden?'],
          ['m1', 'Zwölf Monate, und der Preis ist in dieser Zeit garantiert.'],
          ['f1', 'Muss ich meinem alten Anbieter eigentlich selbst kündigen? Ich habe gehört, dass das kompliziert ist.'],
          ['m1', 'Nein, darum kümmern wir uns. Wir brauchen nur Ihre Zählernummer und Ihre Kundennummer. Beides steht auf der Abrechnung.'],
          ['f1', 'Die habe ich gerade nicht zur Hand, ich rufe aus dem Büro an. Kann ich das auch online machen?'],
          ['m1', 'Natürlich, auf unserer Internetseite gibt es ein Formular. Der Wechsel dauert etwa drei Wochen, und Sie haben die ganze Zeit Strom.'],
          ['f1', 'Gut, dann fülle ich das heute Abend zu Hause aus.'],
        ],
        items: [
          { n: 12, q: 'Frau Castillo ist mit den Kosten bei ihrem bisherigen Stromanbieter unzufrieden.', opts: RF, a: 0 },
          { n: 13, q: 'Wie geht es nach dem Gespräch weiter?', opts: ['Frau Castillo kündigt selbst bei ihrem alten Anbieter.', 'Sie nennt Herrn Böhm gleich am Telefon ihre Zählernummer.', 'Sie erledigt den Wechsel später am Computer.'], a: 2 },
        ],
      },
      {
        who: { m1: 'Herr Popescu', f1: 'Frau Arslan' },
        audio: [
          ['m1', 'Guten Tag, Frau Arslan. Danke, dass Sie sich Zeit nehmen. Es geht um unseren Sohn Luca, er ist jetzt in der sechsten Klasse hier an der Realschule.'],
          ['f1', 'Guten Tag, Herr Popescu. Ja, ich kenne Luca aus dem Englischunterricht. Worum geht es denn genau?'],
          ['m1', 'Seine Noten sind seit einem Jahr sehr gut, und er langweilt sich oft. Meine Frau und ich fragen uns, ob er nicht aufs Gymnasium wechseln sollte.'],
          ['f1', 'Von den Noten her wäre das durchaus möglich. Er braucht in Deutsch, Mathematik und Englisch mindestens eine Zwei, und das schafft er ja.'],
          ['m1', 'Könnte er dann gleich nach den Winterferien wechseln?'],
          ['f1', 'Davon würde ich abraten, weil am Gymnasium in der sechsten Klasse schon Französisch unterrichtet wird. Sinnvoller ist der Wechsel zum neuen Schuljahr. In den Sommerferien könnte er dann einen Französischkurs machen.'],
          ['m1', 'Das klingt vernünftig. Und was müssen wir jetzt tun?'],
          ['f1', 'Den Antrag stellen Sie bis Ende Februar direkt beim Gymnasium, nicht bei uns. Vorher sollten Sie aber unbedingt mit Luca selbst klären, ob er das überhaupt will. Er müsste ja seine Freunde hier verlassen.'],
          ['m1', 'Das stimmt. Das machen wir gleich am Wochenende.'],
        ],
        items: [
          { n: 14, q: 'Frau Arslan findet, dass Luca die Schule wechseln kann, aber nicht mitten im Schuljahr.', opts: RF, a: 0 },
          { n: 15, q: 'Was sollen die Eltern zuerst tun?', opts: ['Den Antrag bei Frau Arslan abgeben.', 'Herausfinden, wie ihr Sohn über die Idee denkt.', 'Luca zu einem Französischkurs anmelden.'], a: 1 },
        ],
      },
      {
        who: { f1: 'Mira', f2: 'Svenja' },
        audio: [
          ['f1', 'Svenja, in drei Wochen ziehe ich um, und ich muss langsam den Transporter organisieren.'],
          ['f2', 'Wann genau ist der Umzug?'],
          ['f1', 'Am Samstag, dem 18. Ich habe bei der Autovermietung Rollmann geschaut: Ein Transporter kostet am Samstag 89 Euro für den ganzen Tag.'],
          ['f2', 'Das ist ganz schön viel. Bei meinem Umzug habe ich freitags gemietet, da war es deutlich billiger.'],
          ['f1', 'Stimmt, freitags kostet er nur 59 Euro. Aber am Freitag arbeite ich bis 16 Uhr, und meine Helfer haben auch erst am Wochenende Zeit.'],
          ['f2', 'Und wenn du nur ein paar Stunden nimmst? Die neue Wohnung ist doch nur zehn Minuten entfernt.'],
          ['f1', 'Das geht tatsächlich: vier Stunden für 49 Euro. Meinst du, das reicht?'],
          ['f2', 'Wenn alle Kartons gepackt sind und wir zu fünft tragen, bestimmt. Wer fährt eigentlich? Du hast doch gar keinen Führerschein.'],
          ['f1', 'Eben. Ich wollte dich fragen, ob du fahren würdest.'],
          ['f2', 'Mache ich gern, aber dann muss der Vertrag auf meinen Namen laufen, sonst sind wir nicht versichert.'],
          ['f1', 'Ach so. Dann buchen wir am besten heute Abend zusammen online, und ich überweise dir das Geld.'],
          ['f2', 'Einverstanden. Und wir nehmen ihn von 9 bis 13 Uhr, dann sind wir mittags fertig.'],
        ],
        items: [
          { n: 16, q: 'Mira wird beim Umzug selbst am Steuer des Transporters sitzen.', opts: RF, a: 1 },
          { n: 17, q: 'Wofür entscheiden sich die Freundinnen?', opts: ['Sie nehmen den Wagen am Umzugstag nur für den Vormittag.', 'Sie mieten ihn am Freitag für 59 Euro.', 'Sie mieten ihn am Samstag für den ganzen Tag.'], a: 0 },
        ],
      },
    ]),
    part(4, [
      {
        ex: 4,
        audio: [['f1', 'Ich arbeite im Einzelhandel, mal früh, mal spät, und jede Woche anders. Ein Kurs mit festen Terminen, zum Beispiel immer dienstags um 18 Uhr, kommt für mich deshalb nicht in Frage. Ich mache meinen Buchhaltungskurs komplett im Internet. Sicher, manchmal fehlt mir der Kontakt zu den anderen Teilnehmern, und man braucht viel Disziplin. Aber ich kann die Videos ansehen, wann ich will, auch nachts um elf oder am Sonntagmorgen. Anders würde es bei mir gar nicht gehen.']],
        items: [],
      },
      {
        audio: [['m1', 'Zwei Jahre lang habe ich neben meiner Arbeit als Elektriker die Meisterschule besucht, dreimal pro Woche abends und jeden Samstag. Das Lernen selbst ist mir nicht schwergefallen, und mein Chef fand die Idee auch gut. Aber wir haben zwei kleine Kinder. Meine Frau hat in dieser Zeit fast alles allein gemacht, und meine Eltern haben am Samstag oft auf die Kleinen aufgepasst. Wenn die nicht alle mitgeholfen hätten, hätte ich nach drei Monaten aufgehört.']],
        items: [{ n: 18, q: '', opts: AF, a: 0 }],
      },
      {
        audio: [['f2', 'Ich war acht Jahre lang Verkäuferin in einer Bäckerei. Dann habe ich abends einen Kurs in Büroorganisation gemacht, ein ganzes Jahr lang. Leicht war das nicht, und den Kurs musste ich selbst bezahlen. Aber mit dem Zertifikat habe ich mich bei einer Versicherung beworben, und heute arbeite ich dort im Kundenservice, mit festen Arbeitszeiten und freien Wochenenden. Viel mehr Geld bekomme ich zwar nicht, trotzdem würde ich nie mehr zurückwollen.']],
        items: [{ n: 19, q: '', opts: AF, a: 2 }],
      },
      {
        audio: [['m2', 'Im letzten Herbst habe ich einen Abendkurs für Programmierung angefangen. Das Thema hat mich wirklich interessiert, und die Firma hat sogar die Hälfte der Gebühr bezahlt. Aber ich arbeite in der Logistik, oft zehn Stunden am Tag. Abends saß ich im Kurs und konnte kaum die Augen offen halten, und am Wochenende musste ich noch Aufgaben machen. Nach vier Monaten war ich ständig krank. Da habe ich abgebrochen. Vielleicht versuche ich es wieder, wenn ich weniger Stunden arbeite.']],
        items: [{ n: 20, q: '', opts: AF, a: 3 }],
      },
    ], {
      topic: 'Thema: Weiterbildung neben dem Beruf',
      stmts: [
        'Ohne die Hilfe meiner Familie hätte ich es nicht geschafft.',
        'Der Arbeitgeber sollte die Kosten für den Kurs übernehmen.',
        'Durch die Weiterbildung habe ich eine bessere Stelle gefunden.',
        'Arbeiten und gleichzeitig lernen war mir zu anstrengend.',
        'Ich lerne online, weil ich mir die Zeit selbst einteilen kann.',
        'Eine Weiterbildung lohnt sich nur, wenn man danach mehr verdient.',
      ],
    }),
  ],
};
