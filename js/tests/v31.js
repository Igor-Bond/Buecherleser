import { part, ad, gap, RF, AX } from '../tests-lesen-b1.js';

export default {
  id: 'v31', title: 'Variante 1', about: 'Kleinanzeigen-Portal · Wohnungsanzeigen · Warnstreik, Wasserabstellung, Nachbarschaftshilfe · Paket nicht angekommen · Einladung zum Elternabend',
  parts: [
    part(1, [{
      html: `<div class="board"><h3>zweitehand-markt.example – Gebrauchtes kaufen, verkaufen, tauschen</h3>
<p><b>Möbel & Wohnen</b> Sofas · Betten · Schränke · Regale · Lampen</p>
<p><b>Haushaltsgeräte</b> Waschmaschinen · Kühlschränke · Staubsauger · Kaffeemaschinen</p>
<p><b>Elektronik</b> Handys · Laptops · Fernseher · Spielkonsolen</p>
<p><b>Mode & Accessoires</b> Damen- und Herrenkleidung · Schuhe · Taschen · Uhren</p>
<p><b>Baby & Kind</b> Kinderwagen · Kindersitze · Kinderkleidung · Spielzeug</p>
<p><b>Freizeit & Sport</b> Fahrräder · Fitnessgeräte · Campingausrüstung · Musikinstrumente</p>
<p><b>Haus & Garten</b> Werkzeug · Gartenmöbel · Pflanzen · Rasenmäher</p>
<p><b>Bücher & Medien</b> Romane · Schul- und Lehrbücher · Hörbücher · Filme</p>
<p><b>Auto & Zubehör</b> Reifen · Dachboxen · Fahrradträger · Ersatzteile</p>
<p><b>Zu verschenken & Tauschen</b> Gratisartikel · Tauschangebote · Gesuche</p></div>`,
      items: [
        { n: 1, q: 'Ihre kleine Tochter soll bei Fahrten in den Urlaub sicher mitfahren können. Sie suchen dafür einen gebrauchten Sitz.', opts: ['Auto & Zubehör', 'Baby & Kind', 'andere Rubrik'], a: 1 },
        { n: 2, q: 'Sie wollen im Sommer mit Freunden zelten und suchen einen günstigen Schlafsack.', opts: ['Haus & Garten', 'Möbel & Wohnen', 'andere Rubrik'], a: 2 },
        { n: 3, q: 'Sie bereiten sich auf eine Deutschprüfung vor und suchen ein gebrauchtes Kursbuch für das Niveau B1.', opts: ['Bücher & Medien', 'Elektronik', 'andere Rubrik'], a: 0 },
        { n: 4, q: 'Ihre neue Wohnung hat einen Balkon. Sie suchen einen kleinen Tisch und zwei Stühle, die auch bei Regen draußen bleiben können.', opts: ['Möbel & Wohnen', 'Haus & Garten', 'andere Rubrik'], a: 1 },
        { n: 5, q: 'Sie wollen mit dem Wagen in den Urlaub fahren und zwei Räder mitnehmen. Dafür fehlt Ihnen noch die passende Halterung.', opts: ['Auto & Zubehör', 'Freizeit & Sport', 'andere Rubrik'], a: 0 },
      ],
    }], { instr: 'Sie lesen eine Seite im Internet. Lesen Sie die Aufgaben 1–5 und die Übersicht. Wo finden Sie etwas Passendes? Wählen Sie a, b oder c.', ru: 'Прочитайте обзор сайта и выберите подходящую рубрику.' }),
    part(2, [{
      html: [
        ad('a', '4-Zi.-Whg. mit Garten, Südstadt', '105 m², EG, EBK, Terrasse. Kaltmiete 1.150 € zzgl. NK 220 €, 3 MM Kt. Frei ab 1.7. Tel. 0151 555 01 23'),
        ad('b', 'WG-Zimmer in Uninähe', '16 m², möbl., in netter 3er-WG. 380 € warm inkl. WLAN. Frei ab 1.12. Tel. 0151 555 01 31 (ab 18 Uhr)'),
        ad('c', '4-Zi.-Whg., Nordviertel', '98 m², 2. OG, gr. Balkon, EBK, Keller. KM 980 € + NK 190 €, 2 MM Kt. Bezugsfrei 1.8. Tel. 0151 555 01 42'),
        ad('d', '2-Zi.-Whg., Altstadt', '58 m², 4. OG ohne Aufzug, neues Bad, EBK. 520 € warm, Kt. 1.000 €. Keine Haustiere. Ab sofort. Tel. 0151 555 01 58'),
        ad('e', 'Möbl. Apartment auf Zeit', '1,5 Zi., 35 m², komplett eingerichtet. Zwischenmiete 1.3.–31.5., Verlängerung nicht möglich. 650 € mtl. inkl. NK. Tel. 0151 555 01 64'),
        ad('f', 'Zimmer in 2er-WG, Zentrum', '18 m², möbliert, Küche und Bad zur Mitbenutzung. 390 € inkl. NK, Kt. 400 €. Ab sofort frei. Tel. 0151 555 01 75'),
        ad('g', '2-Zi.-Whg., Bahnhofsnähe', '52 m², 1. OG (kein Aufzug), Balkon. 540 € warm, 2 MM Kt. Haustiere nach Absprache erlaubt. Frei ab 15.6. Tel. 0151 555 01 86'),
        ad('h', '3-Zi.-Whg., Parkviertel', '74 m², 3. OG, Aufzug, Balkon, EBK. KM 760 € zzgl. NK 150 €, 2 MM Kt. Ab sofort oder später. Tel. 0151 555 01 97'),
      ].join(''),
      items: [
        { n: 6, q: 'Sie beginnen am 1. Oktober Ihr Studium und brauchen bis dahin ein möbliertes Zimmer. Mehr als 400 Euro im Monat können Sie nicht bezahlen.', opts: AX, a: 5 },
        { n: 7, q: 'Sie suchen für sich, Ihren Mann und Ihre zwei Kinder eine Wohnung mit mindestens vier Zimmern, in die Sie im August einziehen können. Mit allen Nebenkosten darf sie höchstens 1.200 Euro kosten.', opts: AX, a: 2 },
        { n: 8, q: 'Sie arbeiten von April bis Ende September für eine Firma in der Stadt. Für diese Zeit suchen Sie eine eingerichtete Wohnung nur für sich allein.', opts: AX, a: 8 },
        { n: 9, q: 'Sie leben allein mit Ihrer Katze und suchen eine Zweizimmerwohnung für höchstens 600 Euro warm.', opts: AX, a: 6 },
        { n: 10, q: 'Ihre Eltern sind über 80 und können keine Treppen mehr steigen. Sie suchen für sie eine Wohnung mit zwei oder drei Zimmern, die warm nicht mehr als 1.000 Euro kostet.', opts: AX, a: 7 },
      ],
    }], { compact: true }),
    part(3, [
      {
        html: `<h4>Warnstreik: Busse und Straßenbahnen bleiben am Donnerstag im Depot</h4><p>Halverstedt. Fahrgäste müssen sich am kommenden Donnerstag auf erhebliche Einschränkungen einstellen. Die Gewerkschaft hat die rund 1.400 Beschäftigten der Halverstedter Verkehrsbetriebe zu einem ganztägigen Warnstreik aufgerufen. Von Betriebsbeginn um 4 Uhr bis Mitternacht fallen sämtliche Straßenbahnen und fast alle Buslinien aus. Nicht betroffen sind die S-Bahnen und Regionalzüge, da sie von einem anderen Unternehmen betrieben werden.</p><p>Die Gewerkschaft fordert 8 Prozent mehr Lohn, die Arbeitgeber haben bisher 4,5 Prozent angeboten. „Wir bedauern die Unannehmlichkeiten, aber ohne Druck bewegt sich nichts“, sagte Gewerkschaftssprecher Jonas Reimold. Zeitkarten werden für den Streiktag nicht erstattet. Die nächste Verhandlungsrunde ist für den 12. März geplant.</p>`,
        items: [
          { n: 11, q: 'Wer am Donnerstag in Halverstedt unterwegs ist, kann weiterhin die S-Bahn benutzen.', opts: RF, a: 0 },
          { n: 12, q: 'Die Arbeitgeber …', opts: ['sind bereit, die Löhne um 8 Prozent zu erhöhen.', 'wollen Fahrgästen mit Monatskarte Geld zurückzahlen.', 'haben weniger angeboten, als die Gewerkschaft verlangt.'], a: 2 },
        ],
      },
      {
        html: `<p>Sehr geehrte Mieterinnen und Mieter der Ulmenstraße 14–18,</p><p>wegen dringender Reparaturarbeiten an den Wasserleitungen im Keller muss am Dienstag, dem 9. April, die Wasserversorgung im gesamten Gebäude unterbrochen werden. Das Wasser wird voraussichtlich von 8.30 Uhr bis 15 Uhr abgestellt. Bitte füllen Sie vorher ausreichend Wasser zum Kochen und für die Toilettenspülung ab und halten Sie in dieser Zeit alle Wasserhähne geschlossen.</p><p>Nach Abschluss der Arbeiten kann das Wasser kurzzeitig bräunlich gefärbt sein; lassen Sie es dann einige Minuten laufen, bevor Sie es verwenden. Die Heizung ist von der Maßnahme nicht betroffen. Ein Zugang zu den Wohnungen ist nicht erforderlich. Für Rückfragen erreichen Sie uns unter 0351 555 01 47.</p><p>Mit freundlichen Grüßen<br>Hausverwaltung Brenneke und Söhne</p>`,
        items: [
          { n: 13, q: 'Für die Reparatur müssen die Handwerker auch in die Wohnungen der Mieter kommen.', opts: RF, a: 1 },
          { n: 14, q: 'Wenn das Wasser nach der Reparatur eine dunklere Farbe hat, sollen die Mieter …', opts: ['es erst eine Weile fließen lassen.', 'sofort die Hausverwaltung anrufen.', 'die Wasserhähne geschlossen halten.'], a: 0 },
        ],
      },
      {
        html: `<h4>Nachbarschaftshilfe Lindental e. V. – Wir über uns</h4><p>Unser Verein wurde 2011 gegründet und vermittelt Unterstützung im Alltag an Menschen, die aufgrund von Alter, Krankheit oder Behinderung Hilfe benötigen. Rund 60 ehrenamtliche Helferinnen und Helfer begleiten zu Arztterminen, erledigen Einkäufe oder lesen einfach einmal vor. Pflegerische Tätigkeiten und Wohnungsreinigung werden von uns nicht übernommen; dafür nennen wir Ihnen gern geeignete Dienste.</p><p>Die Hilfe ist für Vereinsmitglieder kostenlos, der Jahresbeitrag beträgt 24 Euro. Nichtmitglieder werden um eine Spende gebeten. Wer selbst helfen möchte, wird in einem Einführungskurs an zwei Abenden vorbereitet und entscheidet anschließend selbst, wie viele Stunden er zur Verfügung stellt. Unser Büro ist dienstags und donnerstags von 10 bis 12 Uhr besetzt.</p>`,
        items: [
          { n: 15, q: 'Bei Bedarf putzen die Helfer des Vereins auch die Wohnung.', opts: RF, a: 1 },
          { n: 16, q: 'Neue ehrenamtliche Helfer …', opts: ['müssen jede Woche eine feste Zahl von Stunden arbeiten.', 'nehmen zuerst an einer kurzen Schulung teil.', 'zahlen für den Einführungskurs 24 Euro.'], a: 1 },
        ],
      },
    ]),
    part(4, [{
      html: `<h4>Paket nicht angekommen – was tun?</h4>
<p>Sie haben im Internet bestellt, doch die Ware kommt nicht an? Prüfen Sie zuerst mit der Sendungsnummer, wo sich das Paket befindet. Steht dort „zugestellt“, fragen Sie bei den Nachbarn nach und sehen Sie im Briefkasten nach, ob eine Benachrichtigungskarte hinterlassen wurde. Pakete, die in einer Filiale abgegeben wurden, werden dort in der Regel nur sieben Werktage aufbewahrt und gehen danach an den Absender zurück.</p>
<p>Bleibt das Paket verschwunden, wenden Sie sich nicht an den Paketdienst, sondern an den Händler. Er ist Ihr Vertragspartner und trägt das Risiko, bis die Ware bei Ihnen eingetroffen ist. Setzen Sie ihm schriftlich eine Frist von 14 Tagen, um die Ware erneut zu liefern. Verstreicht diese Frist, können Sie vom Kauf zurücktreten und Ihr Geld zurückverlangen.</p>
<p>Anders ist es, wenn Sie von einer Privatperson gekauft haben: Hier tragen Sie in der Regel selbst das Risiko, sobald der Verkäufer das Paket nachweislich abgeschickt hat. Achten Sie deshalb bei solchen Käufen auf versicherten Versand.</p>
<p>Einen Nachforschungsauftrag beim Paketdienst kann grundsätzlich nur der Absender stellen. Bitten Sie ihn, das möglichst bald zu tun, denn viele Unternehmen nehmen solche Anträge nur innerhalb von sechs Monaten an.</p>`,
      items: [
        { n: 17, q: 'Ein Paket, das man nicht rechtzeitig in der Filiale abholt, wird wieder zurückgeschickt.', opts: RF, a: 0 },
        { n: 18, q: 'Wer bei einem Händler bestellt hat, sollte das fehlende Paket beim Paketdienst reklamieren.', opts: RF, a: 1 },
        { n: 19, q: 'Liefert der Händler innerhalb der gesetzten 14 Tage nicht noch einmal, darf der Kunde den Kaufpreis zurückfordern.', opts: RF, a: 0 },
      ],
    }]),
    part(5, [{
      html: `<p>Liebe Eltern der Klasse 7b,</p>
<p>im Juni fährt unsere Klasse für fünf Tage an die Ostsee. Die Jugendherberge ${gap(20)} ich bereits im Herbst reserviert. Um alle wichtigen Fragen zu besprechen, lade ich ${gap(21)} herzlich zu einem Elternabend ein. Er findet am Donnerstag, dem 16. Mai, um 19 Uhr in Raum 104 statt.</p>
<p>An diesem Abend informiere ich Sie ${gap(22)} das Programm, die Kosten und die Regeln für die Fahrt. ${gap(23)} Sie nicht kommen können, geben Sie Ihrem Kind bitte eine kurze Nachricht mit.</p>
<p>Bitte beachten Sie: Ohne unterschriebene Anmeldung ${gap(24)} Ihr Kind leider nicht mitfahren. Die Formulare erhalten Sie am Elternabend. Für Fragen stehe ich Ihnen auch vorher gern zur ${gap(25)}.</p>
<p>Mit freundlichen Grüßen<br>Henrik Stollberg, Klassenlehrer</p>`,
      items: [
        { n: 20, q: '', opts: ['habe', 'bin', 'werde'], a: 0 },
        { n: 21, q: '', opts: ['Ihnen', 'Sie', 'Ihr'], a: 1 },
        { n: 22, q: '', opts: ['für', 'von', 'über'], a: 2 },
        { n: 23, q: '', opts: ['Damit', 'Falls', 'Ob'], a: 1 },
        { n: 24, q: '', opts: ['darf', 'muss', 'wollte'], a: 0 },
        { n: 25, q: '', opts: ['Verbindung', 'Vorstellung', 'Verfügung'], a: 2 },
      ],
    }], { gaps: true }),
  ],
};
