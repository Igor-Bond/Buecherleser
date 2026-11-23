import { part, ad, gap, RF, AX } from '../tests-lesen-b1.js';

export default {
  id: 'v32', title: 'Variante 2', about: 'Bürgerservice online · Stellenanzeigen · Kita-Plätze, Betriebsversammlung, Sprachcafé · Nach dem Umzug · Bewerbung als Lagermitarbeiter',
  parts: [
    part(1, [{
      html: `<div class="board"><h3>Stadt Wendenau – Bürgerservice online</h3>
<p><b>Meldewesen & Ausweise</b> Wohnsitz anmelden · Personalausweis · Reisepass · Meldebescheinigung</p>
<p><b>Kfz & Verkehr</b> Fahrzeug zulassen · Führerschein · Bewohnerparkausweis · Bußgelder</p>
<p><b>Familie & Kinder</b> Kita-Platz · Elterngeld · Geburtsurkunde · Ferienbetreuung</p>
<p><b>Schule & Bildung</b> Schulanmeldung · Volkshochschule · Stadtbibliothek · Musikschule</p>
<p><b>Abfall & Umwelt</b> Abfallkalender · Sperrmüll anmelden · Wertstoffhof · Baumschutz</p>
<p><b>Wohnen & Bauen</b> Wohngeld · Wohnberechtigungsschein · Baugenehmigung · Mietspiegel</p>
<p><b>Arbeit & Gewerbe</b> Gewerbe anmelden · Stellenangebote der Stadt · Marktstände</p>
<p><b>Soziales & Gesundheit</b> Schwerbehindertenausweis · Pflegeberatung · Impfberatung · Sozialpass</p>
<p><b>Ausländerbehörde & Integration</b> Aufenthaltstitel · Einbürgerung · Integrationskurse</p>
<p><b>Fundbüro & Ordnung</b> Fundsachen · Lärmbeschwerden · Hundesteuer</p></div>`,
      items: [
        { n: 1, q: 'In Ihrer Straße dürfen nur Anwohner länger als zwei Stunden parken. Sie wollen die Erlaubnis dafür beantragen.', opts: ['Wohnen & Bauen', 'Kfz & Verkehr', 'andere Rubrik'], a: 1 },
        { n: 2, q: 'Ihre Miete ist hoch und Ihr Einkommen niedrig. Sie wollen prüfen, ob Sie einen Zuschuss zur Miete bekommen können.', opts: ['Wohnen & Bauen', 'Familie & Kinder', 'andere Rubrik'], a: 0 },
        { n: 3, q: 'Ihr Sohn wird im Sommer sechs Jahre alt und kommt in die erste Klasse. Sie wollen wissen, was Sie dafür tun müssen.', opts: ['Familie & Kinder', 'Meldewesen & Ausweise', 'andere Rubrik'], a: 2 },
        { n: 4, q: 'Sie haben ein altes Sofa und einen kaputten Schrank und möchten, dass beides vor Ihrem Haus abgeholt wird.', opts: ['Wohnen & Bauen', 'Abfall & Umwelt', 'andere Rubrik'], a: 1 },
        { n: 5, q: 'Sie leben seit acht Jahren in Deutschland und möchten nun die deutsche Staatsangehörigkeit bekommen.', opts: ['Ausländerbehörde & Integration', 'Meldewesen & Ausweise', 'andere Rubrik'], a: 0 },
      ],
    }], { instr: 'Sie lesen eine Seite im Internet. Lesen Sie die Aufgaben 1–5 und die Übersicht. Wo finden Sie etwas Passendes? Wählen Sie a, b oder c.', ru: 'Прочитайте обзор сайта и выберите подходящую рубрику.' }),
    part(2, [{
      html: [
        ad('a', 'Bäckerei Hollmann sucht Verkäufer/in', 'Teilzeit, 25 Std./Woche, Mo–Fr 6–11 Uhr. Erfahrung im Verkauf erwünscht. 14,20 €/Std. Tel. 0151 555 02 10'),
        ad('b', 'Reinigungskraft (m/w/d) auf Minijob-Basis', 'Büroreinigung im Gewerbepark, Mo–Fr 17.30–19.30 Uhr, 10 Std./Woche, 13,90 €/Std. Ab sofort. Tel. 0151 555 02 21'),
        ad('c', 'Zeitungszusteller/in gesucht', 'Minijob, Mo–Sa ca. 4–6 Uhr morgens, eig. Fahrrad nötig. Mind. 18 J. Tel. 0151 555 02 32'),
        ad('d', 'Lagerhelfer (m/w/d) in Vollzeit', 'Nordkamp Logistik, 3-Schicht-System (Früh/Spät/Nacht), Staplerschein nicht erforderlich, Schichtzulage. Ab 1.10. Tel. 0151 555 02 43'),
        ad('e', 'Mitarbeiter/in Lager, Vollzeit', 'Getränkehandel Prüß, nur Tagschicht Mo–Fr 7–15.30 Uhr, Einarbeitung vor Ort, Staplerschein nicht nötig. 15 €/Std. Tel. 0151 555 02 54'),
        ad('f', 'Küchenhilfe für Schulmensa', 'Teilzeit, 20 Std./Woche, Mo–Fr 8.30–12.30 Uhr, in den Schulferien frei. Keine Ausbildung nötig. Tel. 0151 555 02 65'),
        ad('g', 'Lkw-Fahrer/in im Nahverkehr', 'Vollzeit, Führerschein Kl. C/CE zwingend erforderlich, Tagestouren, kein Wochenende. Spedition Okun, Tel. 0151 555 02 76'),
        ad('h', 'Modehaus Seibrecht: Verkäufer/in', 'Teilzeit, 18 Std./Woche, Do und Fr 14–19 Uhr, Sa 10–18 Uhr. Freundliches Auftreten, gutes Deutsch. Tel. 0151 555 02 87'),
      ].join(''),
      items: [
        { n: 6, q: 'Ihre Kinder sind von 8 bis 13 Uhr in der Schule. Nur in dieser Zeit können Sie arbeiten, am liebsten etwa 20 Stunden pro Woche.', opts: AX, a: 5 },
        { n: 7, q: 'Sie studieren und haben tagsüber Vorlesungen. Sie suchen einen Minijob am frühen Abend; sehr früh am Morgen möchten Sie nicht arbeiten.', opts: AX, a: 1 },
        { n: 8, q: 'Sie möchten ganztags in einem Lager arbeiten. Nachts geht das aber nicht, weil Sie dann allein mit Ihren Kindern sind.', opts: AX, a: 4 },
        { n: 9, q: 'Sie haben den Führerschein für Pkw (Klasse B) und suchen eine Vollzeitstelle als Fahrer.', opts: AX, a: 8 },
        { n: 10, q: 'Sie haben früher in einem Geschäft Kunden bedient und möchten wieder in Teilzeit im Verkauf arbeiten. Früh aufstehen macht Ihnen nichts aus, aber samstags haben Sie keine Zeit.', opts: AX, a: 0 },
      ],
    }], { compact: true }),
    part(3, [
      {
        html: `<h4>In Marlenburg fehlen mehr als 300 Kita-Plätze</h4><p>Marlenburg. Für das kommende Kita-Jahr liegen der Stadt 1.240 Anmeldungen vor, es stehen jedoch nur 920 Plätze zur Verfügung. Das wurde am Dienstag im Jugendausschuss mitgeteilt. Besonders angespannt ist die Lage bei den unter Dreijährigen. Zwar sollen bis zum Herbst zwei neue Einrichtungen im Stadtteil Ostfeld eröffnet werden, doch für rund die Hälfte der dort geplanten 110 Plätze fehlt bislang das Personal.</p><p>„Räume lassen sich bauen, Erzieherinnen und Erzieher nicht“, erklärte Stadtsprecherin Carola Wientjes. Die Stadt will deshalb Auszubildenden in diesem Beruf künftig einen Zuschuss von 200 Euro monatlich zahlen. Eltern, die leer ausgehen, werden auf eine Warteliste gesetzt und können sich an die Vermittlung für Tagespflege wenden.</p>`,
        items: [
          { n: 11, q: 'Für die neuen Kitas in Ostfeld sind schon genügend Fachkräfte gefunden worden.', opts: RF, a: 1 },
          { n: 12, q: 'Die Stadt möchte …', opts: ['Eltern ohne Kita-Platz 200 Euro im Monat zahlen.', 'die Ausbildung zur Erzieherin oder zum Erzieher finanziell attraktiver machen.', 'die Warteliste bis zum Herbst abschaffen.'], a: 1 },
        ],
      },
      {
        html: `<p>An alle Mitarbeiterinnen und Mitarbeiter der Feldhaus Logistik GmbH</p><p>Am Mittwoch, dem 18. September, findet von 13.30 bis ca. 15.30 Uhr in der Kantine die nächste Betriebsversammlung statt, zu der der Betriebsrat eingeladen hat. Themen sind unter anderem die neue Schichtplanung ab Januar und der Umbau der Halle 2.</p><p>Die Teilnahme gilt als Arbeitszeit und wird entsprechend vergütet; das betrifft auch Beschäftigte der Nachtschicht, denen die Zeit auf dem Arbeitszeitkonto gutgeschrieben wird. Während der Versammlung ruht die Warenannahme, lediglich der Pförtnerdienst bleibt besetzt. Fragen an die Geschäftsleitung können bis zum 13. September schriftlich beim Betriebsrat eingereicht werden und werden in der Versammlung beantwortet.</p><p>Mit freundlichen Grüßen<br>Die Geschäftsleitung</p>`,
        items: [
          { n: 13, q: 'Wer zur Betriebsversammlung geht, bekommt diese Stunden bezahlt.', opts: RF, a: 0 },
          { n: 14, q: 'Fragen an die Geschäftsleitung …', opts: ['müssen direkt an die Geschäftsleitung geschickt werden.', 'werden bis zum 13. September schriftlich beantwortet.', 'kann man vorher über den Betriebsrat abgeben.'], a: 2 },
        ],
      },
      {
        html: `<h4>Sprachcafé „Wortwechsel“ – Wer wir sind</h4><p>Unsere Initiative wurde vor sechs Jahren von Studierenden und Rentnern ins Leben gerufen. Jeden Mittwoch und Samstag treffen sich bei uns im Stadtteiltreff Menschen, die Deutsch lernen, mit Menschen, die Deutsch als Muttersprache sprechen. Bei Kaffee und Tee wird in kleinen Tischgruppen über Alltagsthemen gesprochen; Grammatik wird dabei nicht unterrichtet, denn wir verstehen uns nicht als Ersatz für einen Sprachkurs.</p><p>Die Teilnahme ist kostenlos, eine Anmeldung ist nicht erforderlich. Einmal im Monat wird zusätzlich ein Bewerbungstraining angeboten, für das die Plätze allerdings begrenzt sind und vorab reserviert werden müssen. Finanziert wird das Café ausschließlich durch Spenden. Wer als Gesprächspartner mitmachen möchte, braucht keine Ausbildung als Lehrkraft – Geduld und Neugier genügen.</p>`,
        items: [
          { n: 15, q: 'Im Sprachcafé kann man regelmäßig Grammatikstunden besuchen.', opts: RF, a: 1 },
          { n: 16, q: 'Für das Bewerbungstraining …', opts: ['muss man sich im Voraus einen Platz sichern.', 'braucht man eine Ausbildung als Lehrkraft.', 'gilt wie für das Café: einfach ohne Anmeldung kommen.'], a: 0 },
        ],
      },
    ]),
    part(4, [{
      html: `<h4>Umgezogen – was muss ich jetzt erledigen?</h4>
<p>Nach einem Umzug gibt es einiges zu tun. Am wichtigsten ist die Ummeldung: Innerhalb von zwei Wochen nach dem Einzug müssen Sie Ihre neue Adresse beim Bürgeramt angeben. Dazu benötigen Sie Ihren Ausweis und die Wohnungsgeberbestätigung, die Ihnen Ihr Vermieter ausstellen muss – der Mietvertrag allein reicht nicht aus. Wer die Frist deutlich überschreitet, muss mit einem Bußgeld rechnen. Da Termine oft knapp sind, sollten Sie schon vor dem Umzug einen buchen.</p>
<p>Damit keine Briefe verloren gehen, empfiehlt sich ein Nachsendeauftrag bei der Post. Er ist kostenpflichtig und gilt wahlweise sechs oder zwölf Monate; in dieser Zeit wird Ihre Post automatisch an die neue Anschrift weitergeleitet. Pakete anderer Zustelldienste sind davon allerdings ausgenommen.</p>
<p>Den Rundfunkbeitrag müssen Sie nicht neu anmelden, sondern lediglich Ihre Adresse online ändern. Ziehen Sie mit jemandem zusammen, der bereits zahlt, können Sie sich abmelden, denn pro Wohnung wird der Beitrag nur einmal erhoben.</p>
<p>Informieren Sie außerdem Ihre Bank, Ihre Krankenkasse und Ihren Arbeitgeber. Letzterer braucht die neue Anschrift unter anderem für die Lohnabrechnung. Bei vielen Banken lässt sich die Adresse im Online-Banking ändern, sodass ein Besuch in der Filiale nicht nötig ist.</p>`,
      items: [
        { n: 17, q: 'Für die Ummeldung genügt es, im Bürgeramt Ausweis und Mietvertrag vorzulegen.', opts: RF, a: 1 },
        { n: 18, q: 'Wer in eine Wohnung zieht, für die schon ein Mitbewohner den Rundfunkbeitrag bezahlt, muss selbst nichts mehr zahlen.', opts: RF, a: 0 },
        { n: 19, q: 'Mit einem Nachsendeauftrag kommen auch Pakete, die nicht die Post, sondern eine andere Firma bringt, an die neue Adresse.', opts: RF, a: 1 },
      ],
    }]),
    part(5, [{
      html: `<p>Sehr geehrte Frau Albers,</p>
<p>mit großem Interesse habe ich Ihre Anzeige im „Marlenburger Anzeiger“ gelesen. Hiermit bewerbe ich mich ${gap(20)} die Stelle als Lagermitarbeiter.</p>
<p>${gap(21)} zwei Jahren lebe ich in Deutschland. In meinem Heimatland Georgien war ich fünf Jahre lang in einem Baumarkt tätig, zuerst im Verkauf und später im Lager. Im März habe ich die Deutschprüfung B1 ${gap(22)}. Einen Staplerschein besitze ich noch nicht, ich ${gap(23)} ihn aber so bald wie möglich machen.</p>
<p>Schichtarbeit und Einsätze am Wochenende sind für mich kein Problem, ${gap(24)} ich ganz in der Nähe Ihres Lagers wohne. Meinen Lebenslauf und meine Zeugnisse schicke ich ${gap(25)} im Anhang. Über eine Einladung zum Vorstellungsgespräch würde ich mich sehr freuen.</p>
<p>Mit freundlichen Grüßen<br>Giorgi Lomidze</p>`,
      items: [
        { n: 20, q: '', opts: ['an', 'um', 'über'], a: 1 },
        { n: 21, q: '', opts: ['Seit', 'Vor', 'Für'], a: 0 },
        { n: 22, q: '', opts: ['bestehen', 'bestand', 'bestanden'], a: 2 },
        { n: 23, q: '', opts: ['möchte', 'durfte', 'konnte'], a: 0 },
        { n: 24, q: '', opts: ['deshalb', 'weil', 'obwohl'], a: 1 },
        { n: 25, q: '', opts: ['Sie', 'Ihre', 'Ihnen'], a: 2 },
      ],
    }], { gaps: true }),
  ],
};
