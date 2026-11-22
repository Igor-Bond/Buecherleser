import { part, ad, gap, RF, AX } from '../tests-lesen-b1.js';

export default {
  id: 'v03', title: 'Variante 3', about: 'Einkaufszentrum · Freizeitanzeigen · Stromzähler, Schichttausch, Arztpraxis · Mülltrennung · Kündigung im Fitnessstudio',
  parts: [
    part(1, [{
      html: `<div class="board"><h3>Stadtgalerie Altmark – Wegweiser</h3>
<p><b>2. Obergeschoss</b> Kino · Restaurants · Eiscafé · Friseur · Spielecke für Kinder</p>
<p><b>1. Obergeschoss</b> Buchhandlung · Elektronikmarkt · Optiker · Reisebüro · Schuhgeschäft</p>
<p><b>Erdgeschoss</b> Information · Apotheke · Drogerie · Blumenladen · Bäckerei · Geldautomat</p>
<p><b>Untergeschoss</b> Supermarkt · Post · Reinigung · Schuhreparatur · Kasse für das Parkhaus</p></div>`,
      items: [
        { n: 1, q: 'Sie sehen nicht mehr gut und brauchen eine neue Brille.', opts: ['Erdgeschoss', '1. Obergeschoss', 'anderes Stockwerk'], a: 1 },
        { n: 2, q: 'Sie möchten ein Paket an Ihre Familie im Ausland schicken.', opts: ['Erdgeschoss', '1. Obergeschoss', 'anderes Stockwerk'], a: 2 },
        { n: 3, q: 'Ihre Ärztin hat Ihnen ein Rezept gegeben. Sie möchten das Medikament abholen.', opts: ['Erdgeschoss', 'Untergeschoss', 'anderes Stockwerk'], a: 0 },
        { n: 4, q: 'Sie möchten sich die Haare schneiden lassen.', opts: ['1. Obergeschoss', '2. Obergeschoss', 'anderes Stockwerk'], a: 1 },
        { n: 5, q: 'Ihr Wintermantel ist schmutzig. Sie können ihn nicht selbst waschen.', opts: ['Untergeschoss', '2. Obergeschoss', 'anderes Stockwerk'], a: 0 },
      ],
    }]),
    part(2, [{
      html: [
        ad('a', 'Chor „Stimmenfreude“', 'Wir singen jeden Mittwoch um 19.30 Uhr im Gemeindehaus. Neue Sängerinnen und Sänger sind willkommen. Noten lesen müssen Sie nicht können.'),
        ad('b', 'Gymnastik für Seniorinnen und Senioren', 'Dienstags um 10 Uhr im Stadtteilzentrum. Alle Übungen machen wir im Sitzen. Auch für Menschen, die nicht mehr gut gehen können.'),
        ad('c', 'SV Grünau sucht junge Fußballer', 'Für Mädchen und Jungen von 6 bis 10 Jahren. Training montags und donnerstags um 16.30 Uhr.'),
        ad('d', 'Lauftreff im Stadtpark', 'Jeden Sonntag um 9 Uhr am Parkeingang. Für Anfänger und Fortgeschrittene, kostenlos und ohne Anmeldung.'),
        ad('e', 'Tanzschule Rondo', 'Walzer, Tango und Salsa für Paare. Neuer Kurs freitags um 20 Uhr. Acht Abende kosten 90 Euro pro Person.'),
        ad('f', 'Kochkurs „Küche der Welt“', 'Einmal im Monat kochen wir am Samstag zusammen. 25 Euro, die Lebensmittel sind im Preis enthalten.'),
        ad('g', 'Malen und Zeichnen im Jugendhaus', 'Kurs für Kinder von 8 bis 12 Jahren, samstags 10–12 Uhr. Papier und Farben bekommen die Kinder von uns.'),
        ad('h', 'Fitnessstudio Aktiv', 'Training an modernen Geräten, täglich 6–23 Uhr. Das erste Training ist kostenlos. Ab 18 Jahren.'),
      ].join(''),
      items: [
        { n: 6, q: 'Sie singen gern und möchten das zusammen mit anderen Menschen tun.', opts: AX, a: 0 },
        { n: 7, q: 'Ihre Tochter ist neun Jahre alt und malt sehr gern. Sie suchen einen Kurs für sie.', opts: AX, a: 6 },
        { n: 8, q: 'Sie möchten am Wochenende draußen Sport machen, aber dafür kein Geld ausgeben.', opts: AX, a: 3 },
        { n: 9, q: 'Ihr Vater ist 78 Jahre alt und hat Probleme mit den Knien. Er möchte sich trotzdem mehr bewegen.', opts: AX, a: 1 },
        { n: 10, q: 'Sie möchten lernen, Gitarre zu spielen.', opts: AX, a: 8 },
      ],
    }], { compact: true }),
    part(3, [
      {
        html: `<p>Sehr geehrte Frau Okafor,</p><p>am Dienstag, den 5. November, lesen unsere Mitarbeiter in Ihrem Haus die Stromzähler ab. Sie kommen zwischen 9 und 12 Uhr. Die Zähler sind im Keller, deshalb müssen Sie nicht zu Hause sein. Bitte sorgen Sie nur dafür, dass die Kellertür offen ist.</p><p>Wenn Sie den Zählerstand lieber selbst melden möchten, können Sie das bis zum 3. November auf unserer Internetseite tun. Dann kommt niemand zu Ihnen.</p><p>Mit freundlichen Grüßen<br>Stadtwerke Bergfeld</p>`,
        items: [
          { n: 11, q: 'Frau Okafor muss am 5. November am Vormittag zu Hause sein.', opts: RF, a: 1 },
          { n: 12, q: 'Wer den Zählerstand selbst im Internet meldet, …', opts: ['bekommt keinen Besuch von den Mitarbeitern.', 'muss das am 5. November machen.', 'soll danach bei den Stadtwerken anrufen.'], a: 0 },
        ],
      },
      {
        html: `<p>Hallo Dragan,</p><p>ich habe eine Bitte: Könntest du am Samstag meine Frühschicht übernehmen? Meine Schwester heiratet, und ich habe leider vergessen, rechtzeitig Urlaub zu beantragen. Dafür arbeite ich gern nächste Woche am Mittwoch für dich in der Spätschicht. Dann hättest du einen freien Abend.</p><p>Unser Chef, Herr Lindqvist, ist einverstanden. Wir müssen ihm nur bis morgen Bescheid sagen. Schreib mir bitte heute noch, ob das für dich geht.</p><p>Danke und viele Grüße<br>Milena</p>`,
        items: [
          { n: 13, q: 'Der Chef hat nichts dagegen, dass Milena und Dragan die Schichten tauschen.', opts: RF, a: 0 },
          { n: 14, q: 'Milena …', opts: ['hat für Samstag Urlaub bekommen.', 'will am Mittwoch für Dragan arbeiten.', 'braucht die Antwort erst nächste Woche.'], a: 1 },
        ],
      },
      {
        html: `<h4>Praxis Dr. Albrecht – Urlaub</h4><p>Liebe Patientinnen und Patienten,</p><p>unsere Praxis ist vom 15. bis zum 26. Juli wegen Urlaub geschlossen. Ab Montag, dem 29. Juli, sind wir wieder für Sie da. In dringenden Fällen können Sie zu Frau Dr. Yilmaz in der Marktstraße 8 gehen. Bitte bringen Sie dorthin Ihre Versichertenkarte mit.</p><p>Wenn Sie regelmäßig Medikamente nehmen, holen Sie Ihr Rezept bitte noch vor dem 15. Juli bei uns ab.</p><p>Ihr Praxisteam</p>`,
        items: [
          { n: 15, q: 'Wer im Urlaub von Dr. Albrecht dringend Hilfe braucht, kann zu einer anderen Ärztin gehen.', opts: RF, a: 0 },
          { n: 16, q: 'Patienten, die jeden Tag Medikamente brauchen, sollen …', opts: ['bis zum 29. Juli warten.', 'ihr Rezept in der Apotheke bestellen.', 'ihr Rezept vor dem Urlaub in der Praxis abholen.'], a: 2 },
        ],
      },
    ]),
    part(4, [{
      html: `<h4>Mülltrennung in unserer Wohnanlage</h4>
<p>Im Hof stehen vier verschiedene Tonnen. In die blaue Tonne gehören Papier und Karton, in die gelbe Tonne Verpackungen aus Plastik und Metall, in die braune Tonne Küchen- und Gartenabfälle. Alles andere kommt in die schwarze Tonne für Restmüll.</p>
<p>Glasflaschen werfen Sie bitte nicht in die Tonnen im Hof, sondern in die Container an der Ecke Lindenweg. Das ist nur von Montag bis Samstag zwischen 7 und 19 Uhr erlaubt, weil es sehr laut ist.</p>
<p>Die gelbe und die blaue Tonne werden alle zwei Wochen geleert, die anderen Tonnen jede Woche. Bitte machen Sie große Kartons klein, bevor Sie sie wegwerfen. Sonst ist die Tonne zu schnell voll.</p>
<p>Alte Möbel und kaputte Elektrogeräte dürfen nicht im Hof oder im Keller stehen. Die Stadt holt solche Sachen zweimal im Jahr kostenlos ab. Den Termin müssen Sie selbst bei der Stadt anmelden.</p>`,
      items: [
        { n: 17, q: 'Am Sonntag darf man keine Glasflaschen in die Container werfen.', opts: RF, a: 0 },
        { n: 18, q: 'Alle Tonnen im Hof werden jede Woche geleert.', opts: RF, a: 1 },
        { n: 19, q: 'Die Hausverwaltung meldet den Termin für alte Möbel bei der Stadt an.', opts: RF, a: 1 },
      ],
    }]),
    part(5, [{
      html: `<p>Sehr geehrte Damen und Herren,</p>
<p>hiermit kündige ich meinen Vertrag (Mitgliedsnummer 48213) zum 31. März. Ich bin seit zwei Jahren Mitglied in ${gap(20)} Studio und war immer sehr zufrieden. Im April ziehe ich aber aus beruflichen Gründen nach Hamburg um, ${gap(21)} kann ich Ihr Angebot leider nicht mehr nutzen.</p>
<p>Bitte ${gap(22)} Sie mir die Kündigung schriftlich. Außerdem bitte ich Sie, ab April kein Geld mehr ${gap(23)} meinem Konto abzubuchen.</p>
<p>Meine Mitgliedskarte gebe ich an meinem letzten Trainingstag an der Rezeption ab. ${gap(24)} Sie noch Fragen haben, erreichen Sie mich am besten per E-Mail.</p>
<p>Vielen Dank ${gap(25)} die gute Betreuung in den letzten zwei Jahren.</p>
<p>Mit freundlichen Grüßen<br>Tomasz Wieczorek</p>`,
      items: [
        { n: 20, q: '', opts: ['Ihr', 'Ihrem', 'Ihren'], a: 1 },
        { n: 21, q: '', opts: ['deshalb', 'weil', 'denn'], a: 0 },
        { n: 22, q: '', opts: ['bestätigt', 'bestätige', 'bestätigen'], a: 2 },
        { n: 23, q: '', opts: ['aus', 'von', 'bei'], a: 1 },
        { n: 24, q: '', opts: ['Falls', 'Ob', 'Als'], a: 0 },
        { n: 25, q: '', opts: ['über', 'an', 'für'], a: 2 },
      ],
    }], { gaps: true }),
  ],
};
