import { part, ad, gap, RF, AX } from '../tests-lesen-b1.js';

export default {
  id: 'v38', title: 'Variante 8', about: 'Stadtbibliothek im Internet · Kinderbetreuung und Schule · Stadtbad, Sicherheitsschulung, Reparatur-Café · Nebenkostenabrechnung · Brief an die Hausverwaltung',
  parts: [
    part(1, [{
      html: `<div class="board"><h3>Stadtbibliothek Hohenfeld – Übersicht</h3>
<p><b>Ausleihe &amp; Konto</b> Ausweis beantragen · Medien verlängern · Vormerkungen · Passwort vergessen</p>
<p><b>Kinder</b> Bilderbücher · Vorlesestunde · Kindergeburtstag in der Bibliothek · Lesetipps bis 12 Jahre</p>
<p><b>Jugend</b> Mangas und Comics · Gaming-Nachmittag · Hilfe beim Referat · Bewerbungstraining</p>
<p><b>Sprachen lernen</b> Deutsch als Zweitsprache · Sprachkurse auf CD und online · Sprachcafé · Prüfungsvorbereitung</p>
<p><b>E-Medien</b> E-Books und Hörbücher herunterladen · Zeitungen online · Filme streamen · Hilfe bei technischen Problemen</p>
<p><b>Veranstaltungen</b> Lesungen · Ausstellungen · Kurse für Senioren (Smartphone, Internet) · Kalender</p>
<p><b>Lernräume &amp; Technik</b> Gruppenraum reservieren · Einzelarbeitsplätze · WLAN · Kopieren, Drucken, Scannen</p>
<p><b>Gebühren</b> Jahresbeitrag · Mahngebühren · Ermäßigungen · Ersatz für verlorene Medien</p>
<p><b>Mitmachen</b> Ehrenamt als Vorlesepate · Bücherspenden · Förderverein</p>
<p><b>Über uns</b> Öffnungszeiten · Anfahrt · Zweigstellen · Fahrplan des Bücherbusses</p></div>`,
      items: [
        { n: 1, q: 'Sie haben ein ausgeliehenes Buch im Urlaub verloren und wollen wissen, was Sie nun dafür bezahlen müssen.', opts: ['Ausleihe & Konto', 'Gebühren', 'andere Rubrik'], a: 1 },
        { n: 2, q: 'Sie wollen mit drei Kolleginnen aus dem Deutschkurs zusammen lernen und suchen ein Zimmer, das Sie für zwei Stunden buchen können.', opts: ['Sprachen lernen', 'Veranstaltungen', 'andere Rubrik'], a: 2 },
        { n: 3, q: 'Sie müssen einen Roman morgen zurückgeben, sind aber noch nicht fertig und möchten ihn länger behalten.', opts: ['Ausleihe & Konto', 'E-Medien', 'andere Rubrik'], a: 0 },
        { n: 4, q: 'Ihre Mutter ist 70 Jahre alt und möchte lernen, wie man mit dem Handy Fotos verschickt.', opts: ['Veranstaltungen', 'E-Medien', 'andere Rubrik'], a: 0 },
        { n: 5, q: 'Ihre Kinder sind groß geworden. Sie haben noch viele gut erhaltene Kinderbücher und möchten sie der Bibliothek schenken.', opts: ['Kinder', 'Ausleihe & Konto', 'andere Rubrik'], a: 2 },
      ],
    }], { instr: 'Sie lesen eine Seite im Internet. Lesen Sie die Aufgaben 1–5 und die Übersicht. Wo finden Sie etwas Passendes? Wählen Sie a, b oder c.', ru: 'Прочитайте обзор сайта и выберите подходящую рубрику.' }),
    part(2, [{
      html: [
        ad('a', 'Tagesmutter hat Plätze frei', 'Erf. Tagesmutter (Pflegeerlaubnis) nimmt ab 1.9. noch 2 Kinder, 1–3 J., Mo–Fr 7–15 Uhr, Nordstadt. Kosten über das Jugendamt. Tel. 0151 555 02 14'),
        ad('b', 'Tagesvater im Südviertel', 'Betreue Kinder von 6 Mon. bis 3 J., Mo–Do 8–17 Uhr, ab sofort. Kl. Gruppe (max. 4 Kinder), Garten. Tel. 0151 555 02 26'),
        ad('c', 'Hausaufgabenhilfe im Stadtteiltreff Ost', 'Für Kl. 1–4, Mo–Do 14–16 Uhr, kostenlos, ehrenamtl. Helfer. Anmeldung erforderl. Tel. 0151 555 02 33'),
        ad('d', 'Nachhilfe bei Ihnen zu Hause', 'Lehramtsstudentin gibt Einzelunterricht in Mathe, Engl. u. Dt., Kl. 5–10. 18 €/Std., auch Sa. Tel. 0151 555 02 41'),
        ad('e', 'Lernstudio Plus', 'Nachhilfe in Kleingruppen (3–5 Schüler), Kl. 5–13, alle Fächer, Abiturvorbereitung. 2x wö. 90 Min., 129 € mtl. zzgl. 30 € Anmeldegebühr. Bahnhofstr. 12, Tel. 0151 555 02 58'),
        ad('f', 'Ferienbetreuung im Jugendzentrum Mitte', '20.7.–7.8., Kinder 6–12 J., Mo–Fr 8–16 Uhr inkl. Mittagessen, 85 €/Wo. Sport, Basteln, Ausflüge. Anmeldung bis 30.6., Tel. 0151 555 02 65'),
        ad('g', 'Musikschule Klangraum', 'Gitarren- u. Klavierunterricht für Kinder ab 7 J. u. Erw., Einzelunterricht 30 Min./Wo., 72 € mtl. Leihinstrument mögl. Tel. 0151 555 02 79'),
        ad('h', 'Babysitterin', 'Schülerin (17 J., Babysitterkurs) passt abends u. am Wochenende auf Ihre Kinder auf. 9 €/Std., nur Nordstadt u. Mitte. Tel. 0151 555 02 87'),
      ].join(''),
      items: [
        { n: 6, q: 'Ab September arbeiten Sie wieder, von Montag bis Freitag jeweils bis 16.30 Uhr. Für diese Zeit suchen Sie eine Betreuung für Ihre zweijährige Tochter.', opts: AX, a: 8 },
        { n: 7, q: 'Ihr Sohn geht in die 7. Klasse und hat schlechte Noten in Englisch. Er soll allein mit einer Lehrkraft lernen, nicht in einer Gruppe.', opts: AX, a: 3 },
        { n: 8, q: 'Ihre achtjährige Tochter möchte ein Instrument lernen. Ein eigenes Instrument wollen Sie am Anfang noch nicht kaufen.', opts: AX, a: 6 },
        { n: 9, q: 'Sie wohnen in der Nordstadt und möchten am Freitagabend mit Ihrem Mann ins Theater gehen. Für Ihre beiden Kinder suchen Sie jemanden.', opts: AX, a: 7 },
        { n: 10, q: 'In den Sommerferien müssen Sie arbeiten. Ihr zehnjähriger Sohn soll in dieser Zeit tagsüber nicht allein zu Hause sein.', opts: AX, a: 5 },
      ],
    }], { compact: true }),
    part(3, [
      {
        html: `<h4>Stadtbad schließt für 14 Monate</h4><p>Hohenfeld. Das Stadtbad an der Uferstraße wird ab dem 2. Juni umfassend saniert und bleibt voraussichtlich bis Ende Juli des nächsten Jahres geschlossen. Erneuert werden unter anderem das Dach, die Lüftung und die gesamte Wassertechnik. Die Kosten von rund 6,8 Millionen Euro werden zur Hälfte vom Land übernommen. „Das Bad ist über 40 Jahre alt, eine Reparatur einzelner Teile hätte sich nicht mehr gelohnt“, erklärte Bäderleiter Thomas Wernicke. Der Schwimmunterricht der Schulen wird während der Bauzeit ins Hallenbad der Nachbarstadt Altenbrück verlegt; die Kinder werden mit Bussen dorthin gebracht. Vereine müssen sich dagegen selbst um Ersatz kümmern. Bereits gekaufte Jahreskarten werden um die Dauer der Schließung verlängert.</p>`,
        items: [
          { n: 11, q: 'Schulklassen können auch während der Bauarbeiten schwimmen gehen.', opts: RF, a: 0 },
          { n: 12, q: 'Wer schon eine Jahreskarte besitzt, …', opts: ['bekommt sein Geld zurück.', 'kann sie nach der Wiedereröffnung entsprechend länger benutzen.', 'darf damit kostenlos das Bad in Altenbrück besuchen.'], a: 1 },
        ],
      },
      {
        html: `<p>An alle Beschäftigten in Lager und Versand</p><p>Am Donnerstag, dem 16. Oktober, findet die jährliche Sicherheitsunterweisung statt. Die Teilnahme ist für sämtliche Mitarbeiterinnen und Mitarbeiter verpflichtend, auch für Aushilfen und Teilzeitkräfte. Damit der Betrieb nicht unterbrochen werden muss, wird die Schulung zweimal angeboten: von 6.30 bis 8.00 Uhr und von 14.00 bis 15.30 Uhr im Schulungsraum 2. Bitte tragen Sie sich bis zum 10. Oktober in die Liste am Schwarzen Brett ein. Die Schulung gilt als Arbeitszeit. Themen sind der Brandschutz, das richtige Heben schwerer Lasten und das Verhalten bei Unfällen. Wer an diesem Tag Urlaub hat oder krank ist, wird zu einem Ersatztermin im November eingeladen.</p><p>Mit freundlichen Grüßen<br>Karin Östlund, Personalabteilung<br>Nordlog Versand GmbH</p>`,
        items: [
          { n: 13, q: 'Mitarbeiter, die nur wenige Stunden pro Woche im Betrieb arbeiten, brauchen an der Schulung nicht teilzunehmen.', opts: RF, a: 1 },
          { n: 14, q: 'Die Beschäftigten …', opts: ['bekommen die Zeit der Schulung bezahlt.', 'müssen die Schulung in ihrer Freizeit besuchen.', 'bekommen von der Personalabteilung eine Uhrzeit zugeteilt.'], a: 0 },
        ],
      },
      {
        html: `<h4>Reparieren statt wegwerfen – das Reparatur-Café Hohenfeld</h4><p>Seit sechs Jahren treffen wir uns an jedem ersten Samstag im Monat von 14 bis 17 Uhr im Bürgerhaus. Bei uns werden defekte Toaster, Lampen, Fahrräder oder Kleidungsstücke nicht einfach von Fachleuten repariert: Unsere ehrenamtlichen Helferinnen und Helfer zeigen Ihnen, wie es geht, und Sie arbeiten selbst mit. Werkzeug ist vorhanden. Ersatzteile müssen allerdings mitgebracht oder bezahlt werden. Die Hilfe selbst kostet nichts, über eine Spende freuen wir uns aber. Im letzten Jahr konnten so etwa 400 Gegenstände vor dem Müll gerettet werden – ungefähr zwei von drei Reparaturen gelingen. Eine Garantie können wir nicht geben. Geräte, die größer sind als eine Mikrowelle, werden aus Platzgründen nicht angenommen.</p>`,
        items: [
          { n: 15, q: 'Wenn für die Reparatur keine neuen Teile nötig sind, muss der Besucher nichts bezahlen.', opts: RF, a: 0 },
          { n: 16, q: 'Im Reparatur-Café …', opts: ['gibt man sein Gerät ab und holt es später repariert wieder ab.', 'kann man auch eine kaputte Waschmaschine reparieren lassen.', 'lässt sich nicht jeder Gegenstand wieder in Ordnung bringen.'], a: 2 },
        ],
      },
    ]),
    part(4, [{
      html: `<h4>Nebenkostenabrechnung bekommen – so prüfen Sie sie</h4>
<p>Einmal im Jahr erhalten Mieter die Abrechnung über ihre Nebenkosten – und oft sollen sie Geld nachzahlen. Fachleute schätzen, dass jede zweite Abrechnung Fehler enthält. Es lohnt sich also, genau hinzusehen.</p>
<p>Prüfen Sie zuerst das Datum: Der Vermieter muss die Abrechnung spätestens zwölf Monate nach dem Ende des Abrechnungszeitraums zuschicken. Kommt die Abrechnung für das Jahr 2025 erst im Januar 2027, müssen Sie eine Nachzahlung nicht mehr leisten. Ein Guthaben steht Ihnen dagegen auch dann noch zu.</p>
<p>Schauen Sie danach in Ihren Mietvertrag. Abgerechnet werden dürfen nur Kosten, die dort vereinbart sind, zum Beispiel Heizung, Wasser, Müllabfuhr, Hausmeister oder Gebäudeversicherung. Reparaturen und die Kosten der Hausverwaltung gehören nicht dazu; sie muss der Vermieter selbst tragen.</p>
<p>Haben Sie Zweifel, können Sie verlangen, die Rechnungen und Belege einzusehen. Vereinbaren Sie dafür einen Termin im Büro des Vermieters. Fehler sollten Sie schriftlich mitteilen. Für diesen Widerspruch haben Sie zwölf Monate Zeit, nachdem Sie die Abrechnung bekommen haben. Die Nachzahlung selbst wird allerdings schon nach etwa 30 Tagen fällig. Zahlen Sie im Streitfall deshalb „unter Vorbehalt“ – so können Sie Ihr Geld später zurückfordern. Hilfe bekommen Sie beim Mieterverein oder bei der Verbraucherzentrale.</p>`,
      items: [
        { n: 17, q: 'Schickt der Vermieter die Abrechnung zu spät, verliert der Mieter auch das Geld, das er zu viel bezahlt hat.', opts: RF, a: 1 },
        { n: 18, q: 'Wenn der Aufzug repariert werden muss, darf der Vermieter das nicht über die Nebenkosten abrechnen.', opts: RF, a: 0 },
        { n: 19, q: 'Mit der Nachzahlung darf man warten, bis die zwölf Monate für den Widerspruch vorbei sind.', opts: RF, a: 1 },
      ],
    }]),
    part(5, [{
      html: `<p>Sehr geehrte Frau Albers,</p>
<p>vielen Dank für die Nebenkostenabrechnung 2025, die ich ${gap(20)} 12. März erhalten habe. Leider habe ich dazu einige Fragen.</p>
<p>Die Heizkosten sind im Vergleich zum Vorjahr um fast 40 Prozent ${gap(21)}. Das kann ich mir nicht erklären, ${gap(22)} ich im letzten Winter sechs Wochen verreist war und in dieser Zeit kaum geheizt habe. Außerdem werden Kosten für die Hausverwaltung berechnet, die laut Mietvertrag nicht auf die Mieter umgelegt werden ${gap(23)}.</p>
<p>Ich bitte Sie deshalb ${gap(24)} einen Termin, an dem ich die Belege in Ihrem Büro einsehen kann. Bis zur Klärung überweise ich ${gap(25)} die Nachzahlung von 286 Euro nur unter Vorbehalt.</p>
<p>Mit freundlichen Grüßen<br>Farid Nazari<br>Birkenallee 7, Wohnung 12</p>`,
      items: [
        { n: 20, q: '', opts: ['im', 'am', 'um'], a: 1 },
        { n: 21, q: '', opts: ['gestiegen', 'gesteigert', 'steigen'], a: 0 },
        { n: 22, q: '', opts: ['damit', 'deshalb', 'weil'], a: 2 },
        { n: 23, q: '', opts: ['wollen', 'dürfen', 'möchten'], a: 1 },
        { n: 24, q: '', opts: ['um', 'für', 'nach'], a: 0 },
        { n: 25, q: '', opts: ['Sie', 'Ihr', 'Ihnen'], a: 2 },
      ],
    }], { gaps: true }),
  ],
};
