import { part, ad, gap, RF, AX } from '../tests-lesen-b1.js';

export default {
  id: 'v20', title: 'Variante 20', about: 'Internetseite der Stadt · Anzeigen · Wasserleitung, Sprachcafé, Rauchmelder · Mülltrennung · Bescheinigung vom Arbeitgeber',
  parts: [
    part(1, [{
      html: `<div class="board"><h3>Internetseite der Stadt Lindenau – Menü</h3>
<p><b>Bürgerservice</b> Termin im Bürgeramt buchen · Ausweis und Reisepass · Wohnsitz anmelden · Formulare</p>
<p><b>Familie und Bildung</b> Kitas und Kitaplätze · Schulen · Volkshochschule · Stadtbibliothek</p>
<p><b>Verkehr und Umwelt</b> Bus und Bahn · Baustellen · Parkausweise für Anwohner · Müllabfuhr und Abfallkalender · Sperrmüll</p>
<p><b>Freizeit und Kultur</b> Veranstaltungskalender · Schwimmbäder · Sportvereine · Museen · Parks und Spielplätze</p>
<p><b>Arbeit und Wirtschaft</b> Stellenangebote der Stadt · Gewerbe anmelden · Wochenmärkte</p>
<p><b>Soziales und Gesundheit</b> Wohngeld · Beratungsstellen · Hilfe für Senioren · Ärzte und Notdienste</p></div>`,
      items: [
        { n: 1, q: 'Sie möchten wissen, an welchem Tag die Papiertonne geleert wird.', opts: ['Bürgerservice', 'Verkehr und Umwelt', 'anderer Menüpunkt'], a: 1 },
        { n: 2, q: 'Sie möchten an der Volkshochschule einen Computerkurs besuchen und suchen das Programm.', opts: ['Familie und Bildung', 'Arbeit und Wirtschaft', 'anderer Menüpunkt'], a: 0 },
        { n: 3, q: 'Sie möchten ein kleines Geschäft eröffnen und müssen es bei der Stadt anmelden.', opts: ['Bürgerservice', 'Soziales und Gesundheit', 'anderer Menüpunkt'], a: 2 },
        { n: 4, q: 'Ihr Reisepass ist nicht mehr gültig. Sie brauchen einen neuen.', opts: ['Bürgerservice', 'Freizeit und Kultur', 'anderer Menüpunkt'], a: 0 },
        { n: 5, q: 'Sie möchten wissen, wie lange das Hallenbad am Sonntag geöffnet ist.', opts: ['Soziales und Gesundheit', 'Verkehr und Umwelt', 'anderer Menüpunkt'], a: 2 },
      ],
    }]),
    part(2, [{
      html: [
        ad('a', 'Übersetzungsbüro Sprachbrücke', 'Beglaubigte Übersetzungen von Zeugnissen, Urkunden und Führerscheinen. Arabisch, Russisch, Ukrainisch, Türkisch und mehr.'),
        ad('b', 'Hilfe bei Formularen', 'Freiwillige helfen Ihnen, Anträge auszufüllen, zum Beispiel für Kindergeld oder Wohngeld. Donnerstags 15–17 Uhr im Nachbarschaftstreff. Kostenlos.'),
        ad('c', 'Steuerberatung Kern', 'Wir machen Ihre Steuererklärung – für Arbeitnehmer und Rentner. Das erste Gespräch kostet nichts.'),
        ad('d', 'Englisch für den Beruf', 'Abendkurs an der Volkshochschule, dienstags 18–19.30 Uhr. Für Teilnehmer, die schon etwas Englisch können.'),
        ad('e', 'Foto Lichtblick', 'Passfotos zum Mitnehmen in fünf Minuten – direkt neben dem Rathaus. Auch Bewerbungsfotos.'),
        ad('f', 'Erste-Hilfe-Kurs', 'Für alle, die den Führerschein machen. Jeden Samstag 9–16 Uhr, 45 Euro, Sehtest inklusive.'),
        ad('g', 'Mieterverein Lindenau', 'Ärger mit dem Vermieter? Wir beraten unsere Mitglieder bei Mieterhöhung, Nebenkostenabrechnung und Kündigung.'),
        ad('h', 'Nähkurs für Anfänger', 'An vier Abenden lernen Sie, eine Tasche zu nähen. Nähmaschinen sind im Kursraum vorhanden.'),
      ].join(''),
      items: [
        { n: 6, q: 'Sie möchten Wohngeld beantragen, verstehen aber das Formular nicht.', opts: AX, a: 1 },
        { n: 7, q: 'Ihr Vermieter möchte ab nächstem Monat 80 Euro mehr Miete. Sie wissen nicht, ob das erlaubt ist.', opts: AX, a: 6 },
        { n: 8, q: 'Sie beantragen einen neuen Ausweis und brauchen dafür ein Bild von sich.', opts: AX, a: 4 },
        { n: 9, q: 'Sie wollen heiraten. Das Standesamt braucht Ihre Geburtsurkunde auf Deutsch.', opts: AX, a: 0 },
        { n: 10, q: 'Sie möchten Französisch lernen und suchen einen Kurs.', opts: AX, a: 8 },
      ],
    }], { compact: true }),
    part(3, [
      {
        html: `<p>Sehr geehrte Anwohnerinnen und Anwohner der Gartenstraße,</p><p>am Mittwoch, den 9. Oktober, erneuern wir in Ihrer Straße eine Wasserleitung. Von 9 bis etwa 15 Uhr gibt es deshalb in den Häusern Nr. 1 bis 30 kein Wasser. Bitte füllen Sie vorher einige Eimer oder Flaschen.</p><p>Wenn das Wasser wieder läuft, kann es zuerst etwas braun sein. Das ist nicht gefährlich. Lassen Sie es einfach einige Minuten laufen, bis es wieder klar ist. Wir bitten um Ihr Verständnis.</p><p>Stadtwerke Lindenau</p>`,
        items: [
          { n: 11, q: 'Die Bewohner sollen vor den Arbeiten etwas Wasser bereitstellen.', opts: RF, a: 0 },
          { n: 12, q: 'Braunes Wasser nach den Arbeiten …', opts: ['darf man auf keinen Fall benutzen.', 'soll man den Stadtwerken melden.', 'wird nach kurzer Zeit wieder sauber.'], a: 2 },
        ],
      },
      {
        html: `<h4>Sprachcafé im Stadtteilzentrum Nord</h4><p>Sie lernen Deutsch und möchten mehr sprechen? Dann kommen Sie in unser Sprachcafé! Jeden Dienstag von 17 bis 18.30 Uhr unterhalten wir uns in kleinen Gruppen über Themen aus dem Alltag. Grammatikübungen und Hausaufgaben gibt es bei uns nicht.</p><p>Das Sprachcafé ist kein Kurs: Sie müssen sich nicht anmelden und können kommen, wann Sie Zeit haben. Die Teilnahme ist kostenlos, Tee und Kekse auch. Ihre Kinder können Sie gern mitbringen, für sie gibt es eine Spielecke.</p>`,
        items: [
          { n: 13, q: 'Für das Sprachcafé muss man sich anmelden.', opts: RF, a: 1 },
          { n: 14, q: 'Im Sprachcafé …', opts: ['übt man vor allem das Sprechen.', 'macht man Grammatikübungen.', 'bekommt man Hausaufgaben.'], a: 0 },
        ],
      },
      {
        html: `<p>Sehr geehrter Herr Suleiman,</p><p>am Montag, den 18. November, prüft die Firma Sicherheit Plus die Rauchmelder in allen Wohnungen unseres Hauses. Der Techniker kommt zwischen 13 und 16 Uhr zu Ihnen, die Kontrolle dauert nur etwa zehn Minuten.</p><p>Wenn Sie zu dieser Zeit nicht zu Hause sein können, geben Sie Ihren Schlüssel bitte einem Nachbarn oder rufen Sie die Firma an, um einen anderen Termin zu vereinbaren. Für einen zweiten Termin müssen Sie allerdings 25 Euro bezahlen.</p><p>Mit freundlichen Grüßen<br>Gerda Wolff, Vermieterin</p>`,
        items: [
          { n: 15, q: 'Der Techniker braucht für die Kontrolle in der Wohnung den ganzen Nachmittag.', opts: RF, a: 1 },
          { n: 16, q: 'Wenn Herr Suleiman am 18. November nicht zu Hause ist, kann er …', opts: ['der Vermieterin seinen Schlüssel bringen.', 'seinen Schlüssel bei Nachbarn lassen.', 'die Rauchmelder selbst prüfen.'], a: 1 },
        ],
      },
    ]),
    part(4, [{
      html: `<h4>Müll richtig trennen – so geht es in Lindenau</h4>
<p>In Lindenau hat jedes Haus vier Tonnen. In die blaue Tonne kommen Papier und Karton, in die gelbe Tonne Verpackungen aus Plastik und Metall, zum Beispiel Joghurtbecher und Dosen. Die braune Tonne ist für Bioabfall wie Obst- und Gemüsereste. Alles andere gehört in die graue Restmülltonne.</p>
<p>Glas dürfen Sie nicht in die Tonnen am Haus werfen. Bringen Sie Flaschen und Gläser ohne Pfand bitte zu den Glascontainern. Dort dürfen Sie Glas nur werktags zwischen 7 und 19 Uhr einwerfen, weil es laut ist.</p>
<p>Batterien und Farben sind gefährlich für die Umwelt. Batterien können Sie in jedem Supermarkt zurückgeben, Farben bringen Sie zum Wertstoffhof.</p>
<p>Die Restmülltonne wird alle zwei Wochen geleert, die Biotonne im Sommer jede Woche. Die genauen Termine stehen im Abfallkalender, den jeder Haushalt im Dezember mit der Post bekommt.</p>`,
      items: [
        { n: 17, q: 'Leere Dosen gehören in die gelbe Tonne.', opts: RF, a: 0 },
        { n: 18, q: 'Glas darf man auch am Sonntag in den Container werfen.', opts: RF, a: 1 },
        { n: 19, q: 'Alle Tonnen werden einmal pro Woche geleert.', opts: RF, a: 1 },
      ],
    }]),
    part(5, [{
      html: `<p>Sehr geehrter Herr Schuster,</p>
<p>ich arbeite seit dem 1. März 2022 ${gap(20)} Lagermitarbeiter in Ihrer Firma. Im nächsten Monat möchte ich bei der Ausländerbehörde meine Aufenthaltserlaubnis verlängern. ${gap(21)} brauche ich eine Bescheinigung von meinem Arbeitgeber.</p>
<p>In der Bescheinigung soll stehen, seit wann ich bei Ihnen arbeite und wie viele Stunden ich pro Woche arbeite. Außerdem muss sie von Ihnen ${gap(22)} sein.</p>
<p>Könnten Sie mir das Dokument bitte bis zum 15. Juni ${gap(23)}? Mein Termin bei der Behörde ist schon am 20. Juni, und ohne die Bescheinigung kann mein Antrag nicht bearbeitet ${gap(24)}.</p>
<p>Ich hole das Dokument gern persönlich im Personalbüro ab. Sie können ${gap(25)} mir aber auch per Post schicken.</p>
<p>Vielen Dank für Ihre Mühe.</p>
<p>Mit freundlichen Grüßen<br>Daniel Tesfaye</p>`,
      items: [
        { n: 20, q: '', opts: ['wie', 'als', 'für'], a: 1 },
        { n: 21, q: '', opts: ['Dafür', 'Davon', 'Darüber'], a: 0 },
        { n: 22, q: '', opts: ['unterschreiben', 'unterschreibt', 'unterschrieben'], a: 2 },
        { n: 23, q: '', opts: ['ausstellen', 'ausgestellt', 'stellen aus'], a: 0 },
        { n: 24, q: '', opts: ['worden', 'werden', 'wird'], a: 1 },
        { n: 25, q: '', opts: ['ihn', 'ihm', 'es'], a: 2 },
      ],
    }], { gaps: true }),
  ],
};
