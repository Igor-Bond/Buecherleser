import { part, ad, gap, RF, AX } from '../tests-lesen-b1.js';

export default {
  id: 'v04', title: 'Variante 4', about: 'Krankenhaus · Handwerker und Reparaturen · Krankenkasse, Flohmarkt, Arbeitskleidung · Monatsticket · Entschuldigung an die Schule',
  parts: [
    part(1, [{
      html: `<div class="board"><h3>Klinikum Rosenau – Wegweiser</h3>
<p><b>4. Stock</b> Kinderklinik · Geburtsstation · Spielzimmer</p>
<p><b>3. Stock</b> Innere Medizin · Herzstation · Raum der Stille</p>
<p><b>2. Stock</b> Chirurgie · Orthopädie · Physiotherapie (Krankengymnastik)</p>
<p><b>1. Stock</b> Augenklinik · Hals-Nasen-Ohren-Abteilung · Labor (Blutabnahme)</p>
<p><b>Erdgeschoss</b> Information · Patientenaufnahme (Anmeldung) · Notaufnahme · Röntgen · Cafeteria · Kiosk</p>
<p><b>Untergeschoss</b> Apotheke · Verwaltung (Rechnungen) · Fundsachen · Zugang zum Parkhaus</p></div>`,
      items: [
        { n: 1, q: 'Ihre Schwester hat gestern ein Baby bekommen. Sie möchten sie besuchen.', opts: ['3. Stock', '4. Stock', 'anderer Stock'], a: 1 },
        { n: 2, q: 'Sie werden morgen am Knie operiert. Heute müssen Sie sich zuerst anmelden und Formulare unterschreiben.', opts: ['Erdgeschoss', '2. Stock', 'anderer Stock'], a: 0 },
        { n: 3, q: 'Ihr Hausarzt schickt Sie ins Krankenhaus, weil Ihr Blut untersucht werden soll.', opts: ['3. Stock', 'Erdgeschoss', 'anderer Stock'], a: 2 },
        { n: 4, q: 'Sie haben vom Krankenhaus eine Rechnung bekommen und glauben, dass sie falsch ist.', opts: ['Untergeschoss', '3. Stock', 'anderer Stock'], a: 0 },
        { n: 5, q: 'Nach einer Operation an der Schulter sollen Sie zweimal pro Woche zur Krankengymnastik kommen.', opts: ['1. Stock', '2. Stock', 'anderer Stock'], a: 1 },
      ],
    }]),
    part(2, [{
      html: [
        ad('a', 'Malerbetrieb Kowalczyk', 'Wir streichen und tapezieren Wohnungen und Treppenhäuser – sauber und pünktlich. Rufen Sie an, wir machen Ihnen ein kostenloses Angebot.'),
        ad('b', 'Türöffnung Blitz', 'Die Tür ist zu und der Schlüssel ist weg? Wir sind 24 Stunden am Tag für Sie da, auch an Feiertagen. In 30 Minuten bei Ihnen.'),
        ad('c', 'Elektro Haas', 'Wir reparieren Küchengeräte: Herde, Backöfen und Kühlschränke. Unser Techniker kommt zu Ihnen nach Hause.'),
        ad('d', 'Schneiderei Nadel & Faden', 'Hosen und Röcke kürzen, neue Reißverschlüsse, Knöpfe annähen. In zwei Tagen ist alles fertig.'),
        ad('e', 'Gartenservice Grünfink', 'Rasen mähen, Hecken schneiden, Laub entfernen. Einmal oder regelmäßig – ganz wie Sie möchten.'),
        ad('f', 'Fensterreinigung Klar', 'Wir putzen Fenster in Wohnungen, Büros und Geschäften. Preis nach Größe, Termine auch am Samstag.'),
        ad('g', 'Schuh- und Schlüsselservice im Bahnhof', 'Neue Absätze und Sohlen, Schlüssel kopieren – Sie können darauf warten. Montag bis Samstag 8–19 Uhr.'),
        ad('h', 'Sanitär Brunner', 'Bad, Heizung, Wasserleitungen. Notdienst, wenn Wasser aus der Leitung läuft – auch nachts und am Wochenende.'),
      ].join(''),
      items: [
        { n: 6, q: 'Sie kommen um Mitternacht nach Hause und merken, dass Ihr Schlüssel in der Wohnung liegt.', opts: AX, a: 1 },
        { n: 7, q: 'Sie haben eine Hose gekauft, aber sie ist zu lang.', opts: AX, a: 3 },
        { n: 8, q: 'In Ihrem Bad läuft Wasser aus einem Rohr an der Wand. Sie brauchen sofort Hilfe.', opts: AX, a: 7 },
        { n: 9, q: 'Sie ziehen aus und müssen vorher alle Wände in der Wohnung weiß streichen lassen.', opts: AX, a: 0 },
        { n: 10, q: 'Ihr Fernseher zeigt kein Bild mehr. Sie suchen jemanden, der ihn repariert.', opts: AX, a: 8 },
      ],
    }], { compact: true }),
    part(3, [
      {
        html: `<p>Sehr geehrter Herr Nwosu,</p><p>Ihre Versichertenkarte ist nur noch bis zum 30. Juni gültig. Für die neue Karte brauchen wir ein aktuelles Foto von Ihnen. Sie können das Foto in unserer App hochladen oder per Post schicken. Bitte schreiben Sie dann Ihre Versichertennummer auf die Rückseite des Fotos.</p><p>Die neue Karte schicken wir Ihnen etwa drei Wochen später nach Hause. Bis dahin können Sie mit der alten Karte weiter zum Arzt gehen.</p><p>Mit freundlichen Grüßen<br>Ihre Krankenkasse Vitalis</p>`,
        items: [
          { n: 11, q: 'Herr Nwosu muss das Foto persönlich zur Krankenkasse bringen.', opts: RF, a: 1 },
          { n: 12, q: 'Die neue Versichertenkarte …', opts: ['kommt mit der Post.', 'kostet eine Gebühr.', 'bekommt man beim Arzt.'], a: 0 },
        ],
      },
      {
        html: `<h4>Flohmarkt im Stadtteil Westend</h4><p>Am Sonntag, den 8. September, findet von 10 bis 16 Uhr auf dem Hof der Goetheschule unser Flohmarkt statt. Jeder darf mitmachen und gebrauchte Kleidung, Bücher, Spielzeug oder Geschirr verkaufen. Neue Waren sind nicht erlaubt.</p><p>Ein Stand kostet 8 Euro. Kinder, die ihre Sachen auf einer Decke verkaufen, bezahlen nichts. Tische müssen Sie selbst mitbringen. Anmeldung bis zum 1. September im Stadtteilbüro. Der Elternverein verkauft Kaffee und Kuchen.</p>`,
        items: [
          { n: 13, q: 'Auf dem Flohmarkt darf man nur gebrauchte Sachen verkaufen.', opts: RF, a: 0 },
          { n: 14, q: 'Erwachsene, die etwas verkaufen möchten, …', opts: ['bekommen einen Tisch von der Schule.', 'müssen sich bis zum 1. September anmelden.', 'sollen Kaffee und Kuchen mitbringen.'], a: 1 },
        ],
      },
      {
        html: `<p>Liebe Kolleginnen und Kollegen,</p><p>ab dem 1. Oktober bekommen alle Mitarbeiter im Lager neue Arbeitskleidung. Bitte kommen Sie in dieser Woche in Ihrer Pause ins Büro von Frau Demirci und probieren Sie Jacke, Hose und Sicherheitsschuhe an. Die Kleidung ist für Sie kostenlos. Sie müssen sie aber selbst zu Hause waschen.</p><p>Ohne Sicherheitsschuhe darf ab Oktober niemand mehr im Lager arbeiten.</p><p>Viele Grüße<br>Jürgen Maaß, Lagerleiter</p>`,
        items: [
          { n: 15, q: 'Die Firma wäscht die Arbeitskleidung für die Mitarbeiter.', opts: RF, a: 1 },
          { n: 16, q: 'Die Mitarbeiter im Lager sollen …', opts: ['die Sicherheitsschuhe selbst bezahlen.', 'am 1. Oktober zu Frau Demirci gehen.', 'in dieser Woche die neue Kleidung anprobieren.'], a: 2 },
        ],
      },
    ]),
    part(4, [{
      html: `<h4>Das Monatsticket der Verkehrsbetriebe Talheim</h4>
<p>Mit dem Monatsticket fahren Sie einen ganzen Monat lang mit allen Bussen und Straßenbahnen in der Stadt. Es kostet 52 Euro. Schüler, Auszubildende und Senioren ab 65 Jahren bezahlen nur 36 Euro. Dafür müssen sie beim Kauf einen Ausweis zeigen.</p>
<p>Das Ticket gilt nur für eine Person. Sie dürfen es also nicht an andere weitergeben. Am Wochenende und an Feiertagen dürfen Sie aber einen Erwachsenen und bis zu drei Kinder kostenlos mitnehmen.</p>
<p>Ein Fahrrad können Sie von Montag bis Freitag erst ab 9 Uhr mitnehmen, weil die Bahnen am frühen Morgen sehr voll sind. Für das Fahrrad brauchen Sie eine eigene Fahrkarte.</p>
<p>Sie bekommen das Ticket am Automaten, im Kundenzentrum am Marktplatz oder in unserer App. Wenn Sie ein Ticket aus Papier verlieren, bekommen Sie leider kein neues.</p>`,
      items: [
        { n: 17, q: 'Alle Fahrgäste bezahlen für das Monatsticket den gleichen Preis.', opts: RF, a: 1 },
        { n: 18, q: 'Am Samstag kann man mit dem Monatsticket andere Personen mitnehmen.', opts: RF, a: 0 },
        { n: 19, q: 'Mit dem Monatsticket darf man sein Fahrrad kostenlos mitnehmen.', opts: RF, a: 1 },
      ],
    }]),
    part(5, [{
      html: `<p>Sehr geehrte Frau Brandl,</p>
<p>mein Sohn Karim aus der Klasse 3a kann heute leider nicht ${gap(20)} Schule kommen. Er hat seit gestern Abend hohes Fieber und starke Halsschmerzen. Heute Vormittag gehe ich mit ${gap(21)} zum Kinderarzt.</p>
<p>Ich glaube, ${gap(22)} Karim bis Freitag zu Hause bleiben muss. Eine Bescheinigung vom Arzt gebe ich ihm mit, ${gap(23)} er wieder gesund ist.</p>
<p>Am Donnerstag schreibt die Klasse einen Mathetest. Kann Karim den Test später ${gap(24)}? Könnten Sie außerdem einem Mitschüler die Hausaufgaben für ihn mitgeben? Dann ${gap(25)} er nicht so viel vom Unterricht.</p>
<p>Vielen Dank für Ihr Verständnis.</p>
<p>Mit freundlichen Grüßen<br>Samira Haddad</p>`,
      items: [
        { n: 20, q: '', opts: ['zur', 'bei der', 'zu'], a: 0 },
        { n: 21, q: '', opts: ['ihn', 'ihm', 'er'], a: 1 },
        { n: 22, q: '', opts: ['ob', 'wenn', 'dass'], a: 2 },
        { n: 23, q: '', opts: ['sobald', 'während', 'obwohl'], a: 0 },
        { n: 24, q: '', opts: ['nachgeschrieben', 'nachschreiben', 'nachzuschreiben'], a: 1 },
        { n: 25, q: '', opts: ['verliert', 'versucht', 'verpasst'], a: 2 },
      ],
    }], { gaps: true }),
  ],
};
