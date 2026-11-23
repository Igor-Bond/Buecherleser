import { part, ad, gap, RF, AX } from '../tests-lesen-b1.js';

export default {
  id: 'v37', title: 'Variante 7', about: 'Sparkasse im Internet · Auto und Verkehr · Stromausfall, Fenstertausch, Integrationsrat · Haftpflichtversicherung · Schadensmeldung',
  parts: [
    part(1, [{
      html: `<div class="board"><h3>Sparkasse Mühlental – Übersicht</h3>
<p><b>Konto &amp; Karten</b> Girokonto eröffnen · Kontomodelle und Preise · Kreditkarte · Konto für Schüler und Studierende</p>
<p><b>Online-Banking</b> Freischaltung · App fürs Smartphone · Überweisungslimit ändern · Sicherheitstipps</p>
<p><b>Kredite &amp; Finanzierung</b> Ratenkredit · Autokredit · Dispokredit · Kreditrechner</p>
<p><b>Sparen &amp; Anlegen</b> Tagesgeld · Sparplan · Sparbuch für Kinder · Wertpapiere</p>
<p><b>Versicherungen</b> Hausrat · Haftpflicht · Kfz · Krankenversicherung für Auslandsreisen</p>
<p><b>Immobilien</b> Baufinanzierung · Häuser und Wohnungen kaufen · Immobilie bewerten lassen</p>
<p><b>Ausland &amp; Reise</b> Geld ins Ausland überweisen · Fremdwährung bestellen · Karte im Ausland nutzen</p>
<p><b>Service &amp; Termine</b> Beratungstermin vereinbaren · Filialen und Öffnungszeiten · Adresse ändern · Formulare</p>
<p><b>Notfall</b> Karte sperren · Betrugsverdacht melden · Bargeld auf Reisen verloren</p>
<p><b>Karriere</b> Ausbildung · Stellenangebote · Praktikum</p></div>`,
      items: [
        { n: 1, q: 'Sie haben Ihr Portemonnaie im Bus verloren und wollen verhindern, dass jemand mit Ihrer Bankkarte bezahlt.', opts: ['Konto & Karten', 'Notfall', 'andere Rubrik'], a: 1 },
        { n: 2, q: 'Sie möchten Ihren Eltern in Ihrem Heimatland regelmäßig Geld schicken und suchen Informationen dazu.', opts: ['Online-Banking', 'Service & Termine', 'andere Rubrik'], a: 2 },
        { n: 3, q: 'Sie sind umgezogen und wollen der Bank Ihre neue Anschrift mitteilen.', opts: ['Service & Termine', 'Immobilien', 'andere Rubrik'], a: 0 },
        { n: 4, q: 'Ihr Sohn ist mit der Schule fertig und würde gern bei einer Bank einen Beruf lernen.', opts: ['Konto & Karten', 'Service & Termine', 'andere Rubrik'], a: 2 },
        { n: 5, q: 'Sie wollen einen Gebrauchtwagen kaufen, haben aber nicht genug gespart. Sie möchten wissen, wie hoch die monatlichen Raten wären.', opts: ['Kredite & Finanzierung', 'Sparen & Anlegen', 'andere Rubrik'], a: 0 },
      ],
    }], { instr: 'Sie lesen eine Seite im Internet. Lesen Sie die Aufgaben 1–5 und die Übersicht. Wo finden Sie etwas Passendes? Wählen Sie a, b oder c.', ru: 'Прочитайте обзор сайта и выберите подходящую рубрику.' }),
    part(2, [{
      html: [
        ad('a', 'VW Polo 1.2, Automatik', 'Bj. 2015, 98.000 km, Benzin, 5-türig, Klima, TÜV neu, 8-fach bereift. 5.900 € VB. Tel. 0151 555 01 23'),
        ad('b', 'Opel Corsa, Automatik', 'Bj. 2012, 142.000 km, 3-türig, TÜV bis 03/2027, Nichtraucherfahrzeug, kl. Kratzer an der Tür. 3.400 € Festpreis. Tel. 0151 555 01 31'),
        ad('c', 'Fahrschule Tempo', 'Führerschein Kl. B, Intensivkurs in 2 Wo., Theorie Mo–Fr 9–12 Uhr, auch auf Engl. u. Türk. Grundgebühr 320 €. Anmeldung: Tel. 0151 555 01 47'),
        ad('d', 'Fahrschule Kranz', 'Kl. A u. B, Theorie Di + Do 18.30–20 Uhr, Fahrstd. auch Sa. Unterricht nur auf Dt. Grundgebühr 290 €. Tel. 0151 555 01 52'),
        ad('e', 'Kfz-Meisterbetrieb Hadžić', 'Inspektion, Bremsen, Reifenwechsel – alle Marken. HU/AU jeden Mi im Haus. Kostenl. Ersatzwagen für die Dauer der Reparatur. Mo–Fr 7.30–17 Uhr. Tel. 0151 555 01 68'),
        ad('f', 'Tiefgaragenstellplatz zu verm.', 'Nähe Hbf., ab 1.3. frei, 65 € mtl., Kt. 2 MM. Nur Pkw, Einfahrtshöhe max. 1,90 m. Tel. 0151 555 01 74'),
        ad('g', 'StadtMobil Carsharing', '40 Fahrzeuge an 12 Stationen, auch Transporter. Ab 2,50 €/Std. zzgl. 0,30 €/km, im 1. Jahr keine Grundgebühr. Führerschein seit mind. 1 J. nötig. Tel. 0151 555 01 80'),
        ad('h', 'Damen-E-Bike, 28 Zoll', '2 J. alt, Akku 500 Wh (ca. 80 km), inkl. Ladegerät u. Schloss. NP 2.600 €, jetzt 1.350 € VB. Nur Abholung. Tel. 0151 555 01 95'),
      ].join(''),
      items: [
        { n: 6, q: 'Sie suchen ein Auto für höchstens 4.000 Euro. Wegen einer Verletzung am linken Bein können Sie nur Automatik fahren.', opts: AX, a: 1 },
        { n: 7, q: 'Sie möchten den Führerschein machen. Weil Sie täglich bis 17 Uhr arbeiten, können Sie nur abends zum Theorieunterricht kommen.', opts: AX, a: 3 },
        { n: 8, q: 'Sie haben ein 2,60 Meter hohes Wohnmobil und suchen dafür einen festen Platz zum Mieten.', opts: AX, a: 8 },
        { n: 9, q: 'Sie haben seit drei Jahren den Führerschein, aber kein eigenes Auto. Am Samstag wollen Sie einen Schrank abholen und brauchen für ein paar Stunden einen großen Wagen.', opts: AX, a: 6 },
        { n: 10, q: 'Ihr Auto muss diesen Monat zur Hauptuntersuchung, und die Bremsen müssen vorher gemacht werden. Sie sind aber jeden Tag auf ein Auto angewiesen.', opts: AX, a: 4 },
      ],
    }], { compact: true }),
    part(3, [
      {
        html: `<h4>Kabel beschädigt: 2.300 Haushalte ohne Strom</h4><p>Lindenau. Am Dienstagvormittag ist im Stadtteil Westend für rund drei Stunden der Strom ausgefallen. Nach Angaben der Stadtwerke wurde gegen 9.40 Uhr bei Bauarbeiten in der Gerberstraße ein Erdkabel von einem Bagger beschädigt. Betroffen waren etwa 2.300 Haushalte sowie mehrere Geschäfte und eine Grundschule, in der der Unterricht trotzdem fortgesetzt wurde. Auch zwei Ampelanlagen fielen aus, sodass die Polizei den Verkehr regeln musste. „Verletzt wurde zum Glück niemand“, sagte Stadtwerke-Sprecherin Jana Petzold. Gegen 12.45 Uhr waren alle Haushalte wieder versorgt. Wer für den Schaden aufkommen muss, wird noch geprüft. Die Bauarbeiten bleiben bis zur Klärung der Ursache unterbrochen.</p>`,
        items: [
          { n: 11, q: 'Wegen des Stromausfalls wurden die Kinder der Grundschule nach Hause geschickt.', opts: RF, a: 1 },
          { n: 12, q: 'Aus der Meldung erfährt man, dass …', opts: ['ein Bauarbeiter leicht verletzt wurde.', 'noch nicht feststeht, wer die Kosten trägt.', 'auf der Baustelle am Nachmittag weitergearbeitet wurde.'], a: 1 },
        ],
      },
      {
        html: `<p>Sehr geehrte Mieterinnen und Mieter,</p><p>im Rahmen der Modernisierung unseres Hauses Ahornweg 14 werden vom 9. bis 20. März sämtliche Fenster ausgetauscht. Pro Wohnung ist mit einem Arbeitstag zu rechnen; den genauen Termin für Ihre Wohnung finden Sie auf dem Aushang im Treppenhaus. An diesem Tag muss die Wohnung ab 7.30 Uhr zugänglich sein. Sollten Sie verhindert sein, können Sie Ihren Schlüssel beim Hausmeister, Herrn Brandl, hinterlegen.</p><p>Bitte räumen Sie die Fensterbänke frei und rücken Sie Möbel mindestens einen Meter von den Fenstern weg. Gardinen sind vorher abzunehmen. Die Folien zum Abdecken der Böden werden von der Firma mitgebracht. Die Miete erhöht sich durch diese Maßnahme nicht.</p><p>Mit freundlichen Grüßen<br>Wohnbau Lindenau GmbH</p>`,
        items: [
          { n: 13, q: 'Mieter, die am Tag der Arbeiten nicht zu Hause sein können, dürfen ihren Schlüssel beim Hausmeister abgeben.', opts: RF, a: 0 },
          { n: 14, q: 'Bevor die Handwerker kommen, sollen die Mieter …', opts: ['den Fußboden mit Folie schützen.', 'mit der Firma einen Termin vereinbaren.', 'für freien Platz vor den Fenstern sorgen.'], a: 2 },
        ],
      },
      {
        html: `<h4>Der Integrationsrat stellt sich vor</h4><p>Der Integrationsrat vertritt die Interessen der rund 18.000 Lindenauerinnen und Lindenauer mit Zuwanderungsgeschichte gegenüber dem Stadtrat und der Verwaltung. Unsere 15 Mitglieder arbeiten ehrenamtlich. Wir machen Vorschläge, etwa zu mehrsprachigen Formularen oder zu Sprachkursen mit Kinderbetreuung, und werden vom Stadtrat zu wichtigen Themen angehört. Entscheiden kann der Integrationsrat allerdings nicht selbst. Einmal im Monat bieten wir im Rathaus eine offene Sprechstunde an, zu der man ohne Anmeldung kommen kann.</p><p>Am 14. September wird der Integrationsrat neu gewählt. Wahlberechtigt sind alle ausländischen Einwohner ab 16 Jahren, die seit mindestens drei Monaten in Lindenau gemeldet sind. Die Wahlunterlagen werden automatisch per Post zugeschickt.</p>`,
        items: [
          { n: 15, q: 'Die Mitglieder des Integrationsrats bekommen für ihre Tätigkeit ein Gehalt.', opts: RF, a: 1 },
          { n: 16, q: 'Wer im September wählen darf, …', opts: ['bekommt die Unterlagen nach Hause, ohne sie zu beantragen.', 'muss schon seit drei Jahren in der Stadt wohnen.', 'muss sich vorher im Rathaus zur Wahl anmelden.'], a: 0 },
        ],
      },
    ]),
    part(4, [{
      html: `<h4>Private Haftpflichtversicherung – brauche ich das?</h4>
<p>Wer einem anderen Menschen einen Schaden zufügt, muss ihn in Deutschland ersetzen – und zwar in unbegrenzter Höhe. Ein umgestoßenes Glas Rotwein auf dem Teppich der Nachbarn ist schnell bezahlt. Wird aber bei einem Fahrradunfall ein Fußgänger schwer verletzt, kann das Hunderttausende Euro kosten. Deshalb raten Verbraucherberater fast allen Erwachsenen zu einer privaten Haftpflichtversicherung, obwohl sie gesetzlich nicht vorgeschrieben ist.</p>
<p>Die Versicherung bezahlt Schäden, die Sie anderen aus Versehen zufügen. Nicht versichert sind Schäden, die absichtlich verursacht werden, und Schäden an Ihren eigenen Sachen. Auch Unfälle mit dem Auto gehören nicht dazu; dafür gibt es die Kfz-Versicherung. Bei geliehenen Gegenständen zahlen viele Versicherungen nur, wenn das ausdrücklich im Vertrag steht.</p>
<p>Gute Verträge für Alleinstehende gibt es schon ab etwa 50 Euro im Jahr, Familientarife kosten etwas mehr. Kinder sind in der Regel bei den Eltern mitversichert, solange sie zur Schule gehen oder ihre erste Ausbildung machen.</p>
<p>Ist etwas passiert, sollten Sie den Schaden innerhalb einer Woche melden und Fotos machen. Wichtig: Bezahlen Sie nichts selbst und unterschreiben Sie nichts, bevor die Versicherung den Fall geprüft hat. Kündigen können Sie den Vertrag meistens mit einer Frist von drei Monaten zum Ende des Versicherungsjahres.</p>`,
      items: [
        { n: 17, q: 'In Deutschland ist jeder Erwachsene verpflichtet, eine private Haftpflichtversicherung abzuschließen.', opts: RF, a: 1 },
        { n: 18, q: 'Ob die Versicherung zahlt, wenn Sie etwas Geliehenes kaputt machen, hängt von Ihrem Vertrag ab.', opts: RF, a: 0 },
        { n: 19, q: 'Ein 17-jähriger Schüler braucht normalerweise keinen eigenen Vertrag, wenn seine Eltern versichert sind.', opts: RF, a: 0 },
      ],
    }]),
    part(5, [{
      html: `<p>Sehr geehrte Damen und Herren,</p>
<p>hiermit melde ich einen Schaden zu meiner Haftpflichtversicherung (Vertragsnummer HV-204 771). Am Samstag, dem 8. Februar, war ich ${gap(20)} meinem Nachbarn, Herrn Demirci, zu Besuch. Als ich meine Jacke anziehen wollte, habe ich aus Versehen sein Handy vom Tisch ${gap(21)}. Das Display ist dabei gebrochen, ${gap(22)} das Gerät nur aus etwa einem Meter Höhe gefallen ist.</p>
<p>Herr Demirci hat das Handy erst vor drei Monaten gekauft. Die Rechnung und zwei Fotos schicke ich ${gap(23)} als Anlage mit. Laut Werkstatt ${gap(24)} das Display nicht repariert, sondern nur komplett ersetzt werden; das kostet 189 Euro.</p>
<p>Ich bitte Sie um eine kurze Bestätigung, dass Sie meine Meldung erhalten haben. Für Rückfragen stehe ich Ihnen gern zur ${gap(25)}.</p>
<p>Mit freundlichen Grüßen<br>Ana Lupescu</p>`,
      items: [
        { n: 20, q: '', opts: ['zu', 'bei', 'nach'], a: 1 },
        { n: 21, q: '', opts: ['gestoßen', 'stoßen', 'stieß'], a: 0 },
        { n: 22, q: '', opts: ['deshalb', 'weil', 'obwohl'], a: 2 },
        { n: 23, q: '', opts: ['Sie', 'Ihnen', 'Ihr'], a: 1 },
        { n: 24, q: '', opts: ['will', 'möchte', 'kann'], a: 2 },
        { n: 25, q: '', opts: ['Verfügung', 'Verbindung', 'Verabredung'], a: 0 },
      ],
    }], { gaps: true }),
  ],
};
