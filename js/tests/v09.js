import { part, ad, gap, RF, AX } from '../tests-lesen-b1.js';

export default {
  id: 'v09', title: 'Variante 9', about: 'Stadtbibliothek · Anzeigen · Arztpraxis, Schichttausch, Bank · Mülltrennung · Handyrechnung',
  parts: [
    part(1, [{
      html: `<div class="board"><h3>Stadtbibliothek Hohenfeld – Wegweiser</h3>
<p><b>3. Stock</b> Lesesaal (ruhige Arbeitsplätze) · Computerplätze mit Internet · Kopierer und Drucker · Gruppenräume</p>
<p><b>2. Stock</b> Sachbücher · Sprachkurse und Wörterbücher · Bücher in Fremdsprachen · Zeitungen und Zeitschriften</p>
<p><b>1. Stock</b> Romane · Krimis · Hörbücher · Filme und Musik</p>
<p><b>Erdgeschoss</b> Information · Anmeldung und Bibliotheksausweise · Ausleihe und Rückgabe · Lesecafé · Garderobe</p>
<p><b>Untergeschoss</b> Kinderbibliothek · Bilderbücher · Jugendbücher · Spiele · Vorleseraum</p></div>`,
      items: [
        { n: 1, q: 'Sie sind neu in der Stadt und möchten einen Bibliotheksausweis bekommen.', opts: ['Erdgeschoss', '1. Stock', 'anderer Stock'], a: 0 },
        { n: 2, q: 'Sie suchen ein Bilderbuch für Ihre vierjährige Tochter.', opts: ['1. Stock', '2. Stock', 'anderer Stock'], a: 2 },
        { n: 3, q: 'Sie brauchen für Ihren Deutschkurs ein Wörterbuch Deutsch–Arabisch.', opts: ['2. Stock', '3. Stock', 'anderer Stock'], a: 0 },
        { n: 4, q: 'Sie suchen einen Film, den Sie am Wochenende mit Freunden sehen können.', opts: ['Untergeschoss', '1. Stock', 'anderer Stock'], a: 1 },
        { n: 5, q: 'Sie haben Ihre Bewerbung auf einem USB-Stick und müssen sie ausdrucken.', opts: ['Erdgeschoss', '2. Stock', 'anderer Stock'], a: 2 },
      ],
    }]),
    part(2, [{
      html: [
        ad('a', 'Schneiderei Nadel & Faden', 'Wir kürzen Hosen und Röcke, nähen neue Reißverschlüsse ein und ändern Kleider. Meistens ist alles in zwei Tagen fertig.'),
        ad('b', 'Schuh- und Schlüsseldienst Aksoy', 'Wir reparieren Ihre Schuhe und machen Schlüssel in wenigen Minuten nach. Im Hauptbahnhof, täglich 7–20 Uhr.'),
        ad('c', 'Secondhand-Laden „Zweite Chance“', 'Gut erhaltene Kleidung für Damen und Herren zu kleinen Preisen. Dienstag bis Samstag 10–18 Uhr.'),
        ad('d', 'Kinderflohmarkt in der Turnhalle', 'Am Samstag von 9 bis 13 Uhr: Kinderkleidung, Spielzeug, Kinderwagen und Kindersitze. Der Eintritt ist frei.'),
        ad('e', 'Reinigung Blitzblank', 'Hemden, Anzüge, Mäntel und Gardinen. Heute gebracht – morgen fertig. Auch Bügelservice.'),
        ad('f', 'Handy-Doktor', 'Wir reparieren Displays und wechseln Akkus, oft in nur einer Stunde. Außerdem: gebrauchte Handys mit Garantie.'),
        ad('g', 'Wochenmarkt am Rathausplatz', 'Frisches Obst und Gemüse, Käse, Brot und Blumen direkt vom Bauern. Mittwochs und samstags 7–13 Uhr.'),
        ad('h', 'Nähkurs für Anfänger', 'Lernen Sie, selbst eine Tasche oder einen Rock zu nähen. Donnerstags 18–20 Uhr in der Volkshochschule, 6 Termine.'),
      ].join(''),
      items: [
        { n: 6, q: 'Sie haben eine Hose gekauft, aber sie ist zu lang. Sie möchten sie kürzer machen lassen.', opts: AX, a: 0 },
        { n: 7, q: 'Ihr Handy ist auf den Boden gefallen. Jetzt ist das Display kaputt.', opts: AX, a: 5 },
        { n: 8, q: 'Ihre neue Mitbewohnerin braucht auch einen Wohnungsschlüssel. Sie haben aber nur einen.', opts: AX, a: 1 },
        { n: 9, q: 'Sie bekommen bald ein Baby und suchen einen günstigen Kinderwagen.', opts: AX, a: 3 },
        { n: 10, q: 'Ihr Fernseher funktioniert nicht mehr. Sie suchen einen billigen gebrauchten Fernseher.', opts: AX, a: 8 },
      ],
    }], { compact: true }),
    part(3, [
      {
        html: `<p>Liebe Patientinnen und Patienten,</p><p>unsere Praxis ist vom 5. bis zum 16. August wegen Urlaub geschlossen. In dringenden Fällen wenden Sie sich bitte an Frau Dr. Lehnert in der Bergstraße 12.</p><p>Rezepte für Medikamente, die Sie regelmäßig nehmen, können Sie noch bis zum 2. August bei uns bestellen – am Telefon oder direkt am Empfang. Ab dem 19. August sind wir wieder für Sie da. Dann ist die Praxis mittwochs auch am Abend bis 19 Uhr geöffnet.</p><p>Ihr Praxisteam Dr. Kaya</p>`,
        items: [
          { n: 11, q: 'Während des Urlaubs können die Patienten zu einer anderen Ärztin gehen.', opts: RF, a: 0 },
          { n: 12, q: 'Rezepte für Medikamente …', opts: ['kann man nur persönlich am Empfang bestellen.', 'soll man vor dem Urlaub der Praxis bestellen.', 'bekommt man nur noch mittwochs.'], a: 1 },
        ],
      },
      {
        html: `<p>Hallo Dana,</p><p>kannst du am Samstag meine Schicht im Café übernehmen? Meine Schwester zieht um und ich habe versprochen, ihr zu helfen. Die Schicht geht von 10 bis 16 Uhr.</p><p>Dafür arbeite ich nächste Woche gern an deinem Dienstag, dann hast du einen Tag frei. Mit der Chefin habe ich schon gesprochen, sie ist einverstanden. Bitte gib mir bis morgen Abend Bescheid, damit ich meiner Schwester zusagen kann.</p><p>Danke und liebe Grüße<br>Mirko</p>`,
        items: [
          { n: 13, q: 'Mirko kann am Samstag nicht arbeiten, weil er in eine neue Wohnung zieht.', opts: RF, a: 1 },
          { n: 14, q: 'Die Chefin …', opts: ['hat nichts gegen den Tausch.', 'weiß noch nichts von dem Tausch.', 'sucht eine neue Mitarbeiterin für das Café.'], a: 0 },
        ],
      },
      {
        html: `<h4>Sparbank Hohenfeld – Information für unsere Kunden</h4><p>Unsere Filiale in der Marktstraße wird vom 1. bis zum 30. April umgebaut. In dieser Zeit ist der Schalter geschlossen. Die Geldautomaten im Eingangsbereich können Sie aber weiter täglich von 6 bis 23 Uhr benutzen.</p><p>Für eine persönliche Beratung besuchen Sie bitte unsere Filiale am Bahnhofsplatz. Dort brauchen Sie einen Termin, den Sie telefonisch oder online vereinbaren können.</p>`,
        items: [
          { n: 15, q: 'Im April kann man in der Marktstraße kein Geld abheben.', opts: RF, a: 1 },
          { n: 16, q: 'Wer eine persönliche Beratung möchte, …', opts: ['muss bis Mai warten.', 'kann einfach ohne Termin zum Bahnhofsplatz gehen.', 'muss vorher einen Termin machen.'], a: 2 },
        ],
      },
    ]),
    part(4, [{
      html: `<h4>Mülltrennung in unserer Wohnanlage</h4>
<p>Liebe Bewohnerinnen und Bewohner, in letzter Zeit landet leider viel Müll in den falschen Tonnen. Deshalb möchten wir Sie noch einmal über die Regeln informieren.</p>
<p>In die blaue Tonne gehören Papier und Karton. Große Kartons müssen Sie bitte klein machen, sonst ist die Tonne zu schnell voll. Verpackungen aus Plastik und Metall kommen in die gelbe Tonne, Essensreste in die braune. Alles andere werfen Sie in die schwarze Tonne für Restmüll.</p>
<p>Glasflaschen dürfen nicht in die Tonnen im Hof. Bringen Sie sie bitte zu den Containern an der Ecke Lindenweg. Dort dürfen Sie Glas nur von Montag bis Samstag zwischen 7 und 19 Uhr einwerfen, weil es sehr laut ist.</p>
<p>Alte Möbel und Elektrogeräte holt die Stadt kostenlos ab. Dafür müssen Sie aber vorher einen Termin vereinbaren. Stellen Sie solche Sachen bitte nicht einfach vor das Haus.</p>
<p>Ihre Hausverwaltung</p>`,
      items: [
        { n: 17, q: 'Große Kartons soll man neben die blaue Tonne stellen.', opts: RF, a: 1 },
        { n: 18, q: 'Am Sonntag darf man kein Glas in die Container werfen.', opts: RF, a: 0 },
        { n: 19, q: 'Wenn die Stadt alte Möbel abholt, muss man dafür bezahlen.', opts: RF, a: 1 },
      ],
    }]),
    part(5, [{
      html: `<p>Sehr geehrte Damen und Herren,</p>
<p>ich bin seit zwei Jahren Kundin bei Ihnen und war bisher immer zufrieden. Heute habe ich aber meine Rechnung für März bekommen und bin sehr ${gap(20)}: Ich soll 74,90 Euro bezahlen, ${gap(21)} mein Tarif nur 19,90 Euro im Monat kostet.</p>
<p>Auf der Rechnung stehen viele Gespräche ins Ausland. Ich habe im März aber gar nicht ins Ausland ${gap(22)}. Das muss ein Fehler sein.</p>
<p>Ich bitte Sie ${gap(23)}, die Rechnung zu prüfen und mir eine neue, richtige Rechnung zu schicken. Bis dahin werde ich nur den normalen Betrag ${gap(24)}.</p>
<p>Wenn ich innerhalb von zwei Wochen keine Antwort ${gap(25)} Ihnen bekomme, werde ich meinen Vertrag kündigen.</p>
<p>Mit freundlichen Grüßen<br>Samira Haddad</p>`,
      items: [
        { n: 20, q: '', opts: ['überrascht', 'überraschend', 'Überraschung'], a: 0 },
        { n: 21, q: '', opts: ['weil', 'obwohl', 'trotzdem'], a: 1 },
        { n: 22, q: '', opts: ['telefonieren', 'telefoniert', 'telefonierte'], a: 1 },
        { n: 23, q: '', opts: ['denn', 'weil', 'deshalb'], a: 2 },
        { n: 24, q: '', opts: ['überweise', 'überwiesen', 'überweisen'], a: 2 },
        { n: 25, q: '', opts: ['von', 'bei', 'aus'], a: 0 },
      ],
    }], { gaps: true }),
  ],
};
