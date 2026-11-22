// Задания по чтению (Lesen) уровня A2–B1 в формате экзамена DTZ (Deutsch-Test für Zuwanderer):
// 5 частей, 25 заданий, 45 минут. Все тексты написаны специально для Bücherleser.
// Формат: части → группы (текст + задания). У задания: n — номер, q — вопрос, opts — варианты, a — индекс верного.

export const RF = ['richtig', 'falsch'];
export const AX = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'x'];
export const ad = (k, title, text) => `<div class="ad"><b class="ad-k">${k}</b><b>${title}</b><br>${text}</div>`;

const P = {
  1: ['Teil 1', 'Sie sind in einem Gebäude und lesen den Wegweiser. Lesen Sie die Aufgaben 1–5 und den Wegweiser. Wohin gehen Sie? Wählen Sie a, b oder c.', 'Прочитайте указатель и выберите, куда нужно идти.'],
  2: ['Teil 2', 'Lesen Sie die Situationen 6–10 und die Anzeigen a–h. Welche Anzeige passt zu welcher Situation? Für eine Situation gibt es keine passende Anzeige – wählen Sie dann x.', 'Подберите объявление к каждой ситуации. Для одной ситуации объявления нет — тогда выберите x.'],
  3: ['Teil 3', 'Lesen Sie die drei Texte. Zu jedem Text gibt es zwei Aufgaben. Entscheiden Sie, ob die Aussage richtig oder falsch ist, und wählen Sie bei der zweiten Aufgabe a, b oder c.', 'Три текста, к каждому два задания: «верно / неверно» и выбор из трёх вариантов.'],
  4: ['Teil 4', 'Lesen Sie den Text und die Aufgaben 17–19. Sind die Aussagen richtig oder falsch?', 'Прочитайте текст и решите, верны ли утверждения.'],
  5: ['Teil 5', 'Lesen Sie den Brief und schließen Sie die Lücken 20–25. Welche Lösung (a, b oder c) passt am besten?', 'Заполните пропуски в письме.'],
};
export const part = (n, groups, extra = {}) => ({ title: P[n][0], instr: P[n][1], ru: P[n][2], groups, ...extra });
export const gap = n => `<b class="gap-n">(${n})</b> ___`;

export const LESEN_B1 = {
  title: 'Lesen B1',
  minutes: 45,
  variants: [
    {
      id: 'v01', title: 'Variante 1', about: 'Kaufhaus · Anzeigen · Hausverwaltung, Sportverein, Bibliothek · Kita · Reklamation',
      parts: [
        part(1, [{
          html: `<div class="board"><h3>Kaufhaus Lindner – Wegweiser</h3>
<p><b>4. Stock</b> Restaurant · Kundentoiletten · Fundbüro · Kundenservice und Umtausch</p>
<p><b>3. Stock</b> Elektrogeräte · Computer · Handys · Fernseher · Fotoservice</p>
<p><b>2. Stock</b> Herrenmode · Sportartikel · Sportschuhe · Koffer und Taschen</p>
<p><b>1. Stock</b> Damenmode · Kindermode · Babyartikel · Spielwaren</p>
<p><b>Erdgeschoss</b> Parfümerie · Schmuck und Uhren · Schreibwaren · Bücher · Zeitschriften · Schlüsseldienst</p>
<p><b>Untergeschoss</b> Lebensmittel · Getränke · Haushaltswaren · Geschirr · Bäckerei</p></div>`,
          items: [
            { n: 1, q: 'Sie möchten für Ihren Sohn zum Geburtstag ein Brettspiel kaufen.', opts: ['1. Stock', '2. Stock', 'anderer Stock'], a: 0 },
            { n: 2, q: 'Sie haben gestern einen Pullover gekauft, aber er ist zu klein. Sie möchten ihn zurückgeben.', opts: ['1. Stock', '2. Stock', 'anderer Stock'], a: 2 },
            { n: 3, q: 'Sie brauchen neue Laufschuhe zum Joggen.', opts: ['Erdgeschoss', '2. Stock', 'anderer Stock'], a: 1 },
            { n: 4, q: 'Sie suchen einen Kochtopf und neue Teller.', opts: ['Untergeschoss', '3. Stock', 'anderer Stock'], a: 0 },
            { n: 5, q: 'Sie möchten Briefumschläge und einen Kugelschreiber kaufen.', opts: ['4. Stock', 'Erdgeschoss', 'anderer Stock'], a: 1 },
          ],
        }]),
        part(2, [{
          html: [
            ad('a', 'Radhaus Sommer', 'Wir reparieren Fahrräder aller Marken – meistens noch am selben Tag. Gebrauchte Räder ab 80 Euro. Montag bis Samstag 9–18 Uhr.'),
            ad('b', 'Nachhilfe in Mathe und Physik', 'Student hilft Schülerinnen und Schülern der Klassen 5 bis 10. 15 Euro pro Stunde, auch am Wochenende.'),
            ad('c', 'Umzüge Krüger', 'Wir transportieren Ihre Möbel schnell und günstig, auch am Wochenende. Rufen Sie uns an – das Angebot ist kostenlos.'),
            ad('d', 'Sprachschule Lingua', 'Deutschkurse am Abend, zweimal pro Woche von 18.30 bis 20 Uhr. Niveau A1 bis B2. Beginn jeden Monat.'),
            ad('e', 'Tagesmutter hat Plätze frei', 'Erfahrene Tagesmutter betreut Kinder von 1 bis 3 Jahren. Montag bis Freitag, 7 bis 16 Uhr.'),
            ad('f', 'Zu verschenken', 'Kinderfahrrad (20 Zoll), gut erhalten. Sie müssen es selbst abholen.'),
            ad('g', 'Restaurant Olivia sucht Aushilfe', 'Für die Küche, freitags und samstags am Abend. Eine Ausbildung ist nicht nötig.'),
            ad('h', 'Deutsch am Vormittag', 'Intensivkurs von Montag bis Freitag, 8.30–12.30 Uhr. Kinderbetreuung im Haus.'),
          ].join(''),
          items: [
            { n: 6, q: 'Ihr Fahrrad ist kaputt. Sie brauchen es schon morgen wieder für den Weg zur Arbeit.', opts: AX, a: 0 },
            { n: 7, q: 'Sie arbeiten tagsüber und möchten nach der Arbeit Ihr Deutsch verbessern.', opts: AX, a: 3 },
            { n: 8, q: 'Ihre Tochter geht in die 8. Klasse und hat Probleme in Mathematik.', opts: AX, a: 1 },
            { n: 9, q: 'Sie suchen einen Nebenjob am Wochenende.', opts: AX, a: 6 },
            { n: 10, q: 'Ihre Waschmaschine ist kaputt. Sie suchen jemanden, der sie repariert.', opts: AX, a: 8 },
          ],
        }], { compact: true }),
        part(3, [
          {
            html: `<p>Sehr geehrte Mieterinnen und Mieter,</p><p>am Donnerstag, den 14. März, wird in unserem Haus die Heizung repariert. Deshalb gibt es von 8 bis 14 Uhr kein warmes Wasser. Die Handwerker müssen auch in einige Wohnungen im dritten Stock. Diese Mieter haben schon einen Brief bekommen.</p><p>Bitte parken Sie an diesem Tag nicht im Hof, weil die Firma dort Platz für ihre Fahrzeuge braucht. Bei Fragen rufen Sie bitte unser Büro an.</p><p>Ihre Hausverwaltung</p>`,
            items: [
              { n: 11, q: 'Am Donnerstag gibt es den ganzen Tag kein warmes Wasser.', opts: RF, a: 1 },
              { n: 12, q: 'Die Mieter sollen …', opts: ['am Donnerstag zu Hause bleiben.', 'ihr Auto nicht im Hof abstellen.', 'der Hausverwaltung einen Brief schreiben.'], a: 1 },
            ],
          },
          {
            html: `<p>Liebe Mitglieder,</p><p>unser Sommerfest findet dieses Jahr am Samstag, den 22. Juni, ab 15 Uhr auf dem Sportplatz statt. Für Getränke sorgt der Verein. Wir bitten alle Familien, einen Salat oder einen Kuchen mitzubringen.</p><p>Für die Kinder gibt es ein kleines Fußballturnier. Wer mitspielen möchte, meldet sich bitte bis zum 15. Juni beim Trainer an. Bei Regen feiern wir in der Sporthalle.</p><p>Viele Grüße<br>der Vorstand</p>`,
            items: [
              { n: 13, q: 'Bei Regen findet das Fest in der Sporthalle statt.', opts: RF, a: 0 },
              { n: 14, q: 'Kinder, die Fußball spielen möchten, …', opts: ['müssen sich vorher beim Trainer anmelden.', 'kommen einfach um 15 Uhr auf den Sportplatz.', 'sollen einen Kuchen mitbringen.'], a: 0 },
            ],
          },
          {
            html: `<h4>Stadtbibliothek – neue Öffnungszeiten</h4><p>Ab dem 1. September ist die Stadtbibliothek auch samstags von 10 bis 14 Uhr geöffnet. Montags bleibt sie wie bisher geschlossen.</p><p>Neu ist auch: Bücher und Filme können Sie jetzt rund um die Uhr am Automaten vor dem Eingang zurückgeben. Der Bibliotheksausweis kostet für Erwachsene 12 Euro im Jahr, für Kinder und Jugendliche bis 18 Jahre ist er kostenlos.</p>`,
            items: [
              { n: 15, q: 'Man kann Bücher auch zurückgeben, wenn die Bibliothek geschlossen ist.', opts: RF, a: 0 },
              { n: 16, q: 'Der Bibliotheksausweis …', opts: ['ist für alle kostenlos.', 'kostet für Kinder 12 Euro im Jahr.', 'kostet für Erwachsene Geld.'], a: 2 },
            ],
          },
        ]),
        part(4, [{
          html: `<h4>Anmeldung in der Kindertagesstätte Sonnenschein</h4>
<p>Unsere Kita nimmt Kinder im Alter von einem bis sechs Jahren auf. Die Anmeldung ist das ganze Jahr möglich. Die meisten Plätze werden aber im August frei, wenn die älteren Kinder in die Schule kommen. Bitte melden Sie Ihr Kind deshalb möglichst früh an.</p>
<p>Für die Anmeldung brauchen wir das ausgefüllte Formular, eine Kopie der Geburtsurkunde und den Impfpass Ihres Kindes. Das Formular bekommen Sie im Büro oder auf unserer Internetseite.</p>
<p>In den ersten zwei Wochen bleibt ein Elternteil mit dem Kind in der Gruppe. So lernt das Kind die Erzieherinnen langsam kennen. Planen Sie für diese Zeit bitte Urlaub ein.</p>
<p>Die Kosten hängen vom Einkommen der Familie ab. Das Mittagessen kostet für alle Kinder 60 Euro im Monat.</p>`,
          items: [
            { n: 17, q: 'Man kann sein Kind nur im August anmelden.', opts: RF, a: 1 },
            { n: 18, q: 'Am Anfang muss die Mutter oder der Vater mit in die Kita kommen.', opts: RF, a: 0 },
            { n: 19, q: 'Alle Familien bezahlen für den Kitaplatz gleich viel.', opts: RF, a: 1 },
          ],
        }]),
        part(5, [{
          html: `<p>Sehr geehrte Damen und Herren,</p>
<p>ich habe am 3. Mai bei Ihnen eine Kaffeemaschine bestellt. Gestern ist das Paket endlich ${gap(20)}. Leider musste ich feststellen, ${gap(21)} die Maschine nicht funktioniert: Sie wird nicht warm. Außerdem fehlt die Gebrauchsanweisung.</p>
<p>Ich möchte Sie deshalb bitten, ${gap(22)} eine neue Maschine zu schicken. Wenn das nicht möglich ist, möchte ich mein Geld ${gap(23)}.</p>
<p>Ich habe schon zweimal versucht, Sie anzurufen, aber ${gap(24)} war erreichbar. Bitte antworten Sie mir bis zum Ende der Woche. Die Rechnung schicke ich Ihnen ${gap(25)} Anhang.</p>
<p>Mit freundlichen Grüßen<br>Elena Petrova</p>`,
          items: [
            { n: 20, q: '', opts: ['angekommen', 'ankommen', 'kam an'], a: 0 },
            { n: 21, q: '', opts: ['weil', 'dass', 'ob'], a: 1 },
            { n: 22, q: '', opts: ['mich', 'mir', 'mein'], a: 1 },
            { n: 23, q: '', opts: ['zurück', 'heraus', 'weg'], a: 0 },
            { n: 24, q: '', opts: ['jemand', 'nichts', 'niemand'], a: 2 },
            { n: 25, q: '', opts: ['im', 'am', 'zum'], a: 0 },
          ],
        }], { gaps: true }),
      ],
    },
    {
      id: 'v02', title: 'Variante 2', about: 'Rathaus · Anzeigen · Schulausflug, Straßenbahn, Stellenangebot · Integrationskurs · Wohnungssuche',
      parts: [
        part(1, [{
          html: `<div class="board"><h3>Rathaus Neustadt – Wegweiser</h3>
<p><b>4. Stock</b> Bauamt · Ordnungsamt (Parkausweise, Gewerbeanmeldung) · Kantine</p>
<p><b>3. Stock</b> Sozialamt · Wohnungsamt (Wohngeld, Wohnberechtigungsschein)</p>
<p><b>2. Stock</b> Jugendamt (Kitaplätze, Beratung für Familien) · Schulamt (Schulanmeldung)</p>
<p><b>1. Stock</b> Standesamt (Heirat, Geburtsurkunden) · Ausländerbehörde (Aufenthaltstitel)</p>
<p><b>Erdgeschoss</b> Information · Bürgerbüro (Anmeldung und Ummeldung, Personalausweis, Reisepass) · Fundbüro</p></div>`,
          items: [
            { n: 1, q: 'Sie sind umgezogen und müssen Ihre neue Adresse melden.', opts: ['Erdgeschoss', '3. Stock', 'anderer Stock'], a: 0 },
            { n: 2, q: 'Sie möchten heiraten und brauchen einen Termin.', opts: ['Erdgeschoss', '1. Stock', 'anderer Stock'], a: 1 },
            { n: 3, q: 'Ihre Tochter kommt im Sommer in die erste Klasse. Sie möchten sie anmelden.', opts: ['1. Stock', '3. Stock', 'anderer Stock'], a: 2 },
            { n: 4, q: 'Ihre Miete ist sehr hoch. Sie möchten fragen, ob Sie Wohngeld bekommen können.', opts: ['2. Stock', '3. Stock', 'anderer Stock'], a: 1 },
            { n: 5, q: 'Sie haben im Bus Ihre Tasche vergessen und möchten fragen, ob jemand sie abgegeben hat.', opts: ['4. Stock', '1. Stock', 'anderer Stock'], a: 2 },
          ],
        }]),
        part(2, [{
          html: [
            ad('a', 'Zahnarztpraxis Dr. Weber', 'Neue Patienten sind willkommen. Sprechzeiten auch abends bis 20 Uhr und samstags. Wir sprechen Deutsch, Englisch und Türkisch.'),
            ad('b', 'Wohnung zu vermieten', '3 Zimmer, Küche, Bad, Balkon, 75 m², 2. Stock, Nähe Hauptbahnhof. 780 Euro warm. Frei ab 1. Oktober.'),
            ad('c', 'Verkaufe Sofa und Kleiderschrank', 'Fast neu, zusammen nur 150 Euro. Die Möbel müssen abgeholt werden.'),
            ad('d', 'Computerkurs für Anfänger', 'Internet, E-Mail, Bewerbungen schreiben. Samstags 10–13 Uhr im Stadtteilzentrum. Der Kurs ist kostenlos.'),
            ad('e', 'Suche Mitfahrer', 'Ich fahre jeden Freitag von Köln nach Berlin und am Sonntag zurück. 25 Euro pro Fahrt.'),
            ad('f', 'Schwimmkurse für Kinder', 'Für Kinder ab 5 Jahren im Stadtbad, dienstags und donnerstags um 16 Uhr. Anmeldung an der Kasse.'),
            ad('g', '1-Zimmer-Apartment', 'Möbliert, 30 m², ideal für Studenten. 420 Euro warm. Sofort frei.'),
            ad('h', 'Kinderarztpraxis Dr. Sommer', 'Montag bis Freitag 8–12 Uhr. Termine nur nach Vereinbarung.'),
          ].join(''),
          items: [
            { n: 6, q: 'Sie haben eine neue Wohnung und brauchen günstige Möbel.', opts: AX, a: 2 },
            { n: 7, q: 'Ihr Sohn ist sechs Jahre alt und soll schwimmen lernen.', opts: AX, a: 5 },
            { n: 8, q: 'Sie haben Zahnschmerzen, können aber nur nach der Arbeit zum Arzt gehen.', opts: AX, a: 0 },
            { n: 9, q: 'Sie suchen mit Ihrem Mann und Ihren zwei Kindern eine größere Wohnung.', opts: AX, a: 1 },
            { n: 10, q: 'Sie möchten am Abend einen Englischkurs besuchen.', opts: AX, a: 8 },
          ],
        }], { compact: true }),
        part(3, [
          {
            html: `<p>Liebe Eltern,</p><p>am Freitag, den 10. Mai, machen wir mit der Klasse 4b einen Ausflug in den Zoo. Wir treffen uns um 8 Uhr vor der Schule und fahren zusammen mit dem Bus. Gegen 15 Uhr sind wir zurück.</p><p>Der Ausflug kostet 9 Euro für die Fahrt und den Eintritt. Bitte geben Sie Ihrem Kind das Geld bis Mittwoch mit. Ihr Kind braucht außerdem etwas zu essen, genug zu trinken und eine Regenjacke. Handys bleiben bitte zu Hause.</p><p>Mit freundlichen Grüßen<br>Petra Hoffmann, Klassenlehrerin</p>`,
            items: [
              { n: 11, q: 'Die Kinder fahren mit dem Bus in den Zoo.', opts: RF, a: 0 },
              { n: 12, q: 'Die Eltern sollen …', opts: ['bis Mittwoch 9 Euro bezahlen.', 'ihr Kind um 15 Uhr im Zoo abholen.', 'dem Kind ein Handy mitgeben.'], a: 0 },
            ],
          },
          {
            html: `<p>Liebe Fahrgäste,</p><p>wegen Bauarbeiten fährt die Straßenbahnlinie 4 vom 2. bis zum 20. Juli nicht zwischen Hauptbahnhof und Stadtpark. Auf dieser Strecke fahren Ersatzbusse. Die Busse halten an allen Haltestellen der Linie 4, die Fahrt dauert aber etwa zehn Minuten länger.</p><p>Ihre Fahrkarten sind auch in den Ersatzbussen gültig. Aktuelle Informationen finden Sie in unserer App.</p><p>Ihre Verkehrsbetriebe</p>`,
            items: [
              { n: 13, q: 'Die Linie 4 fährt im Juli drei Wochen lang auf der ganzen Strecke nicht.', opts: RF, a: 1 },
              { n: 14, q: 'Für die Ersatzbusse …', opts: ['braucht man eine extra Fahrkarte.', 'braucht man keine neue Fahrkarte.', 'muss man in der App bezahlen.'], a: 1 },
            ],
          },
          {
            html: `<h4>Wir suchen Verstärkung!</h4><p>Der Supermarkt Frischemarkt sucht ab sofort Mitarbeiterinnen und Mitarbeiter für die Kasse und für das Lager. Sie arbeiten 20 Stunden pro Woche, auch am Samstag. Erfahrung im Verkauf ist nicht nötig, aber Sie sollten gut Deutsch sprechen und freundlich sein.</p><p>Wir bieten einen sicheren Arbeitsplatz und 10 Prozent Rabatt auf Ihren Einkauf. Interesse? Dann geben Sie Ihre Bewerbung direkt im Markt ab oder schicken Sie sie per E-Mail.</p>`,
            items: [
              { n: 15, q: 'Für die Stelle muss man schon im Verkauf gearbeitet haben.', opts: RF, a: 1 },
              { n: 16, q: 'Die Mitarbeiter …', opts: ['arbeiten nur von Montag bis Freitag.', 'müssen sich per Post bewerben.', 'können im Markt billiger einkaufen.'], a: 2 },
            ],
          },
        ]),
        part(4, [{
          html: `<h4>Herzlich willkommen im Integrationskurs!</h4>
<p>Der Unterricht findet von Montag bis Freitag von 9.00 bis 12.15 Uhr statt. Bitte kommen Sie pünktlich. Wenn Sie krank sind, rufen Sie bitte vor Kursbeginn im Sekretariat an. Ab dem dritten Krankheitstag brauchen wir eine Bescheinigung vom Arzt.</p>
<p>Das Kursbuch kaufen Sie selbst in einer Buchhandlung. Den Titel nennt Ihnen Ihre Lehrerin am ersten Tag. Kopien und Arbeitsblätter bekommen Sie kostenlos.</p>
<p>In der Pause können Sie in der Cafeteria im Erdgeschoss Getränke und kleine Speisen kaufen. Im Klassenraum ist Essen nicht erlaubt, Trinken ist erlaubt.</p>
<p>Am Ende des Kurses machen Sie eine Prüfung. Zur Prüfung dürfen nur Teilnehmer gehen, die regelmäßig am Unterricht teilgenommen haben.</p>`,
          items: [
            { n: 17, q: 'Wer krank ist, muss schon am ersten Tag eine Bescheinigung vom Arzt bringen.', opts: RF, a: 1 },
            { n: 18, q: 'Das Kursbuch bekommt man nicht von der Schule.', opts: RF, a: 0 },
            { n: 19, q: 'Im Klassenraum darf man etwas trinken.', opts: RF, a: 0 },
          ],
        }]),
        part(5, [{
          html: `<p>Sehr geehrter Herr Baumann,</p>
<p>ich habe Ihre Anzeige im Internet gelesen und interessiere mich sehr ${gap(20)} die Wohnung in der Gartenstraße. Ich bin 34 Jahre alt, arbeite ${gap(21)} Krankenpfleger im Stadtkrankenhaus und suche eine Wohnung für mich und meine Frau.</p>
<p>Könnten Sie mir bitte sagen, ${gap(22)} die Nebenkosten sind? Außerdem möchte ich gern wissen, ob man in der Nähe gut parken ${gap(23)}.</p>
<p>Wir würden die Wohnung gern so bald wie möglich besichtigen. Am besten passt es uns nachmittags, ${gap(24)} ich vormittags arbeite. Über eine Antwort von Ihnen würden wir ${gap(25)} sehr freuen.</p>
<p>Mit freundlichen Grüßen<br>Amir Hosseini</p>`,
          items: [
            { n: 20, q: '', opts: ['an', 'für', 'über'], a: 1 },
            { n: 21, q: '', opts: ['als', 'wie', 'für'], a: 0 },
            { n: 22, q: '', opts: ['wie hoch', 'wie lange', 'wie oft'], a: 0 },
            { n: 23, q: '', opts: ['können', 'kann', 'könnt'], a: 1 },
            { n: 24, q: '', opts: ['denn', 'deshalb', 'weil'], a: 2 },
            { n: 25, q: '', opts: ['uns', 'sich', 'euch'], a: 0 },
          ],
        }], { gaps: true }),
      ],
    },
  ],
};
