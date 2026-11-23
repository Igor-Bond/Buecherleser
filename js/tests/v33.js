import { part, ad, gap, RF, AX } from '../tests-lesen-b1.js';

export default {
  id: 'v33', title: 'Variante 3', about: 'Volkshochschule online · Kurse und Weiterbildung · Stadtbücherei, Gesundheitskarte, Sportverein · Krankmeldung · Kostenübernahme für einen Rückenkurs',
  parts: [
    part(1, [{
      html: `<div class="board"><h3>Volkshochschule Lindenau – Programm online</h3>
<p><b>Sprachen</b> Deutsch als Fremdsprache · Englisch · Spanisch · Arabisch · Einstufungstest</p>
<p><b>Beruf &amp; EDV</b> Tabellenkalkulation · Bewerbungstraining · Buchführung · Zehn-Finger-Schreiben · Sicherheit im Internet</p>
<p><b>Gesundheit</b> Yoga · Rückenschule · Entspannung · Erste Hilfe am Kind · Wassergymnastik</p>
<p><b>Kochen &amp; Ernährung</b> Vegetarische Küche · Brot backen · Kochen bei Diabetes · Länderküchen</p>
<p><b>Kultur &amp; Gestalten</b> Zeichnen · Nähen · Fotografie · Gitarre · Theaterwerkstatt</p>
<p><b>Gesellschaft &amp; Leben</b> Mietrecht · Rente und Vorsorge · Erziehungsfragen · Stadtführungen · Verbraucherfragen</p>
<p><b>Grundbildung</b> Lesen und Schreiben für Erwachsene · Rechnen im Alltag · Schulabschlüsse nachholen</p>
<p><b>Junge VHS</b> Ferienkurse · Lernhilfe · Kinderwerkstatt · Babysitterkurs</p>
<p><b>Service</b> Anmeldung · Ermäßigungen · Kursorte · Geschenkgutscheine · Kontakt</p></div>`,
      items: [
        { n: 1, q: 'Sie sind zu einem Vorstellungsgespräch eingeladen und wollen vorher üben, wie man sich einer Firma am besten präsentiert.', opts: ['Beruf & EDV', 'Gesellschaft & Leben', 'andere Rubrik'], a: 0 },
        { n: 2, q: 'Sie haben die Schule früher ohne Zeugnis verlassen und möchten jetzt als Erwachsener den Hauptschulabschluss machen.', opts: ['Junge VHS', 'Beruf & EDV', 'andere Rubrik'], a: 2 },
        { n: 3, q: 'Ihr Vermieter will mehr Geld für die Wohnung. Sie suchen einen Vortrag, in dem Sie etwas über Ihre Rechte erfahren.', opts: ['Service', 'Gesellschaft & Leben', 'andere Rubrik'], a: 1 },
        { n: 4, q: 'Sie verdienen sehr wenig und wollen wissen, ob Sie für einen Kurs weniger bezahlen müssen.', opts: ['Service', 'Grundbildung', 'andere Rubrik'], a: 0 },
        { n: 5, q: 'Ihre 14-jährige Tochter möchte lernen, wie man auf kleine Kinder aufpasst, damit sie sich etwas Taschengeld verdienen kann.', opts: ['Gesundheit', 'Gesellschaft & Leben', 'andere Rubrik'], a: 2 },
      ],
    }], { instr: 'Sie lesen eine Seite im Internet. Lesen Sie die Aufgaben 1–5 und die Übersicht. Wo finden Sie etwas Passendes? Wählen Sie a, b oder c.', ru: 'Прочитайте обзор сайта и выберите подходящую рубрику.' }),
    part(2, [{
      html: [
        ad('a', 'Realschulabschluss in 12 Monaten', 'Tageskurs Mo.–Fr. 8–13 Uhr, Beginn 1.9., Mindestalter 17 J., kostenfrei. Anm. bis 15.7. Bildungswerk Talheim, Tel. 0151 555 01 12'),
        ad('b', 'Buchführung online lernen', 'Fernkurs für Einsteiger, 6 Mon., ca. 6 Std./Woche, freie Zeiteinteilung. 79 € mtl. inkl. Lernmaterial, Abschluss mit Zertifikat. Tel. 0151 555 01 23'),
        ad('c', 'Pflegehelfer/in – Basiskurs', 'Berufsbegleitend, Di. u. Do. 18–21 Uhr, insg. 200 Std. Förderung mit Bildungsgutschein mögl. Start 12.1. Akademie Vita, Tel. 0151 555 01 34'),
        ad('d', 'Elektrofachkraft für festgelegte Tätigkeiten', 'Lehrgang 2 Wochen Vollzeit. Voraussetzung: abgeschl. techn. Ausbildung. 1.450 € zzgl. Prüfungsgebühr. Nächster Termin ab 3.2. Tel. 0151 555 01 45'),
        ad('e', 'Abendrealschule Talheim', 'Realschulabschluss neben dem Beruf: Mo.–Do. 18–21.15 Uhr, Dauer 2 J., kein Schulgeld. Info-Abend am 10.6., 19 Uhr, Raum 104.'),
        ad('f', 'Qualifizierung Kindertagespflege', 'Für angehende Tagesmütter u. -väter. 160 Std., jeweils Sa. 9–15 Uhr. Zertifikat zur Vorlage beim Jugendamt. 290 €, Ermäßigung mögl. Tel. 0151 555 01 56'),
        ad('g', 'Fernlehrgang Finanzbuchhaltung', 'Komplett online, 9 Mon., Beginn jederzeit, Betreuung per E-Mail. 149 € mtl., IHK-Prüfung zzgl. Gebühr. Tel. 0151 555 01 67'),
        ad('h', 'Umschulung Pflegefachfrau/-mann', 'Vollzeit, 3 J., staatl. anerkannter Abschluss. Kostenübernahme durch Bildungsgutschein (Agentur für Arbeit/Jobcenter). Start 1.4. u. 1.10. Tel. 0151 555 01 78'),
      ].join(''),
      items: [
        { n: 6, q: 'Sie sind arbeitslos und haben von der Agentur für Arbeit einen Bildungsgutschein bekommen. Sie möchten tagsüber in Vollzeit einen Beruf in der Pflege lernen.', opts: AX, a: 7 },
        { n: 7, q: 'Sie wohnen in einem Dorf ohne Busverbindung und möchten zu Hause am Computer Buchhaltung lernen. Mehr als 100 Euro im Monat können Sie dafür nicht ausgeben.', opts: AX, a: 1 },
        { n: 8, q: 'Sie haben in Ihrer Heimat als Elektriker gearbeitet. Sie suchen eine Stelle, die Sie berät, wie Ihr Berufsabschluss in Deutschland anerkannt wird.', opts: AX, a: 8 },
        { n: 9, q: 'Sie arbeiten von Montag bis Freitag von 8 bis 17 Uhr im Supermarkt und möchten den Realschulabschluss nachholen.', opts: AX, a: 4 },
        { n: 10, q: 'Sie möchten in Ihrer Wohnung Kinder anderer Familien betreuen und brauchen dafür einen Nachweis für das Amt.', opts: AX, a: 5 },
      ],
    }], { compact: true }),
    part(3, [
      {
        html: `<h4>Stadtbücherei Wernau künftig bis 22 Uhr geöffnet</h4><p>Wernau. Die Stadtbücherei am Kirchplatz ändert zum 1. Februar ihre Öffnungszeiten. Künftig können Leserinnen und Leser die Räume dienstags bis samstags von 7 bis 22 Uhr nutzen; bisher wurde um 18 Uhr geschlossen. Möglich wird das durch ein Selbstbedienungssystem, für das der Gemeinderat 85.000 Euro bewilligt hat. Medien werden an Automaten ausgeliehen und zurückgegeben, die Eingangstür lässt sich mit dem Büchereiausweis öffnen. Fachpersonal ist allerdings weiterhin nur von 10 bis 18 Uhr anwesend. „Niemand verliert seinen Arbeitsplatz. Wir gewinnen Zeit für Beratung und Veranstaltungen“, betonte Büchereileiterin Henrike Solbach. Jugendliche unter 16 Jahren erhalten außerhalb der Servicezeiten nur in Begleitung eines Erwachsenen Zutritt.</p>`,
        items: [
          { n: 11, q: 'Nach der Umstellung sind während der ganzen Öffnungszeit Mitarbeiter da, die den Besuchern helfen.', opts: RF, a: 1 },
          { n: 12, q: 'Wer 15 Jahre alt ist, …', opts: ['kommt nach 18 Uhr nur zusammen mit einem Erwachsenen in die Bücherei.', 'kann die Bücherei ab Februar überhaupt nicht mehr benutzen.', 'darf an den Automaten keine Medien ausleihen.'], a: 0 },
        ],
      },
      {
        html: `<p>Sehr geehrtes Mitglied,</p><p>Ihre elektronische Gesundheitskarte verliert am 31. März ihre Gültigkeit. Damit Ihnen rechtzeitig eine neue Karte zugeschickt werden kann, benötigen wir ein aktuelles Lichtbild von Ihnen. Das Foto, das uns vorliegt, ist älter als zehn Jahre und darf nicht mehr verwendet werden.</p><p>Bitte laden Sie Ihr Bild bis zum 15. Februar in unserem Online-Portal hoch oder senden Sie es uns mit dem beiliegenden Formular per Post zu. Ein Besuch in der Geschäftsstelle ist dafür nicht erforderlich. Die neue Karte wird Ihnen etwa drei Wochen nach Eingang des Fotos zugestellt. Für Kinder unter 15 Jahren wird die Karte ohne Bild ausgestellt. Kosten entstehen Ihnen nicht.</p><p>Mit freundlichen Grüßen<br>Ihre Nordland Krankenkasse</p>`,
        items: [
          { n: 13, q: 'Das Bild, das die Krankenkasse bisher von dem Mitglied hat, kann für die neue Karte nicht mehr benutzt werden.', opts: RF, a: 0 },
          { n: 14, q: 'Das Foto …', opts: ['muss man persönlich in der Geschäftsstelle abgeben.', 'kann man über das Internet oder mit einem Brief schicken.', 'brauchen auch Kinder, die jünger als 15 Jahre sind.'], a: 1 },
        ],
      },
      {
        html: `<h4>TSV Hohenried – wir stellen uns vor</h4><p>Der TSV Hohenried wurde 1921 gegründet und zählt heute rund 1.400 Mitglieder. In zwölf Abteilungen – vom Kinderturnen über Handball bis zum Reha-Sport – wird bei uns trainiert. Besonders gefragt sind unsere Angebote für Kinder: Für das Schwimmen und das Turnen bestehen inzwischen Wartelisten, weil Übungsleiter fehlen. Deshalb suchen wir Ehrenamtliche ab 16 Jahren, die ein- bis zweimal pro Woche eine Gruppe betreuen möchten. Erfahrung als Trainer wird nicht vorausgesetzt. Die Ausbildung zum Übungsleiter wird vom Verein bezahlt, außerdem erhalten Sie eine kleine Aufwandsentschädigung. Für die Arbeit mit Minderjährigen muss ein erweitertes Führungszeugnis vorgelegt werden. Interessierte melden sich in der Geschäftsstelle, Tel. 0151 555 01 47.</p>`,
        items: [
          { n: 15, q: 'Wer beim TSV eine Gruppe leiten will, muss vorher schon einmal als Trainer gearbeitet haben.', opts: RF, a: 1 },
          { n: 16, q: 'Der Verein …', opts: ['zahlt den Ehrenamtlichen ein normales Gehalt.', 'hat für alle Kinderkurse noch genug freie Plätze.', 'übernimmt die Kosten, wenn Helfer zum Übungsleiter ausgebildet werden.'], a: 2 },
        ],
      },
    ]),
    part(4, [{
      html: `<h4>Krank geworden – was muss ich dem Arbeitgeber melden?</h4>
<p>Wer morgens merkt, dass er nicht arbeiten kann, muss den Betrieb sofort informieren – am besten noch vor Arbeitsbeginn. Ob Sie anrufen oder eine E-Mail schreiben, ist gesetzlich nicht festgelegt; viele Firmen haben dafür aber eigene Regeln. Sie müssen nur mitteilen, wie lange Sie voraussichtlich fehlen. Welche Krankheit Sie haben, geht den Arbeitgeber nichts an.</p>
<p>Dauert die Krankheit länger als drei Kalendertage, brauchen Sie spätestens am darauffolgenden Arbeitstag eine ärztliche Arbeitsunfähigkeitsbescheinigung. Achtung: Der Arbeitgeber darf sie auch früher verlangen, sogar schon ab dem ersten Tag. Schauen Sie deshalb in Ihren Arbeitsvertrag. Gesetzlich Versicherte müssen die Bescheinigung nicht mehr selbst abgeben: Die Praxis übermittelt die Daten elektronisch an die Krankenkasse, und der Arbeitgeber ruft sie dort ab. Privat Versicherte erhalten weiterhin einen Ausdruck, den sie selbst weiterleiten.</p>
<p>Sind Sie länger krank als zunächst bescheinigt, benötigen Sie eine Folgebescheinigung und müssen sich erneut im Betrieb melden.</p>
<p>Wer im Urlaub erkrankt, sollte ebenfalls sofort zum Arzt gehen. Die Tage, die ärztlich bescheinigt sind, werden nicht auf den Urlaub angerechnet. Den Urlaub dürfen Sie jedoch nicht einfach selbst verlängern – die Tage müssen später neu beantragt werden.</p>`,
      items: [
        { n: 17, q: 'Der Arbeitgeber hat das Recht zu erfahren, woran ein kranker Mitarbeiter leidet.', opts: RF, a: 1 },
        { n: 18, q: 'Ein Betrieb kann bestimmen, dass Beschäftigte bereits für den ersten Krankheitstag ein Attest vom Arzt brauchen.', opts: RF, a: 0 },
        { n: 19, q: 'Wer im Urlaub drei Tage krank war und das vom Arzt bestätigt bekommen hat, darf deshalb drei Tage später zur Arbeit zurückkommen.', opts: RF, a: 1 },
      ],
    }]),
    part(5, [{
      html: `<p>Sehr geehrte Damen und Herren,</p>
<p>ich bin seit acht Jahren bei Ihnen versichert (Versichertennummer K 304 771 295). Seit dem Frühjahr habe ich häufig Rückenschmerzen, ${gap(20)} ich bei der Arbeit im Lager viel heben muss. Mein Hausarzt hat mir ${gap(21)}, einen Kurs für Rückentraining zu besuchen.</p>
<p>Ab dem 4. Mai bietet das Gesundheitszentrum Aumühle einen solchen Kurs an: zehn Termine für insgesamt 140 Euro. Bevor ich mich anmelde, ${gap(22)} ich gern wissen, ob Sie die Kosten ganz oder teilweise übernehmen. Eine Beschreibung des Kurses lege ich ${gap(23)} bei.</p>
<p>Bitte teilen Sie mir auch mit, ob ich ${gap(24)} der Anmeldung noch ein Formular ausfüllen muss. Könnten Sie mir bis Ende April Bescheid ${gap(25)}?</p>
<p>Vielen Dank für Ihre Mühe.</p>
<p>Mit freundlichen Grüßen<br>Rafael Domínguez</p>`,
      items: [
        { n: 20, q: '', opts: ['deshalb', 'weil', 'denn'], a: 1 },
        { n: 21, q: '', opts: ['empfohlen', 'empfehlen', 'empfiehlt'], a: 0 },
        { n: 22, q: '', opts: ['muss', 'darf', 'möchte'], a: 2 },
        { n: 23, q: '', opts: ['Sie', 'Ihnen', 'Ihr'], a: 1 },
        { n: 24, q: '', opts: ['vor', 'bevor', 'früher'], a: 0 },
        { n: 25, q: '', opts: ['machen', 'nehmen', 'geben'], a: 2 },
      ],
    }], { gaps: true }),
  ],
};
