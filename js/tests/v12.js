import { part, ad, gap, RF, AX } from '../tests-lesen-b1.js';

export default {
  id: 'v12', title: 'Variante 12', about: 'Ärztehaus · Anzeigen · Straßenfest, Schulung im Betrieb, Hallenbad · Girokonto · Urlaubsantrag',
  parts: [
    part(1, [{
      html: `<div class="board"><h3>Ärztehaus am Stadtgarten – Wegweiser</h3>
<p><b>4. Stock</b> Dr. Yildiz – Augenärztin · Dr. Brenner – Hals-Nasen-Ohren-Arzt</p>
<p><b>3. Stock</b> Dr. Sokolov – Hautarzt · Dr. Franke – Frauenärztin</p>
<p><b>2. Stock</b> Dr. Petersen – Kinderarzt · Dr. Rahimi – Zahnärztin</p>
<p><b>1. Stock</b> Dr. Hahn und Dr. Lutz – Hausärzte · Labor (Blutabnahme)</p>
<p><b>Erdgeschoss</b> Apotheke · Physiotherapie (Krankengymnastik, Massage) · Sanitätshaus</p>
<p><b>Untergeschoss</b> Röntgenpraxis · Tiefgarage</p></div>`,
      items: [
        { n: 1, q: 'Sie sehen seit einiger Zeit schlecht und möchten Ihre Augen untersuchen lassen.', opts: ['3. Stock', '4. Stock', 'anderer Stock'], a: 1 },
        { n: 2, q: 'Ihr Arzt hat Ihnen ein Rezept gegeben. Jetzt möchten Sie das Medikament holen.', opts: ['Erdgeschoss', '1. Stock', 'anderer Stock'], a: 0 },
        { n: 3, q: 'Ihr einjähriger Sohn soll heute geimpft werden.', opts: ['2. Stock', '3. Stock', 'anderer Stock'], a: 0 },
        { n: 4, q: 'Sie haben rote Flecken am Arm, die stark jucken.', opts: ['2. Stock', '4. Stock', 'anderer Stock'], a: 2 },
        { n: 5, q: 'Sie haben Rückenschmerzen. Ihr Hausarzt hat Ihnen Krankengymnastik verschrieben.', opts: ['1. Stock', 'Erdgeschoss', 'anderer Stock'], a: 1 },
      ],
    }]),
    part(2, [{
      html: [
        ad('a', 'Malerbetrieb Farbenfroh', 'Wir streichen und tapezieren Ihre Wohnung sauber und schnell. Rufen Sie an – wir machen Ihnen ein kostenloses Angebot.'),
        ad('b', 'Hausmeisterservice Petrow', 'Gartenarbeit, Reinigung von Treppenhäusern, Winterdienst. Für Hausbesitzer und Firmen.'),
        ad('c', 'Elektro-Notdienst Brandt', 'Wir sind 24 Stunden für Sie da, auch an Sonn- und Feiertagen: bei Stromausfall, kaputten Steckdosen und Leitungen.'),
        ad('d', 'Putzhilfe gesucht', 'Familie mit zwei Kindern sucht eine zuverlässige Hilfe für vier Stunden pro Woche. Wir zahlen 14 Euro pro Stunde.'),
        ad('e', 'Sanitär Hoffmann', 'Bad, Heizung, Wasserleitungen. Der Abfluss ist verstopft? Wir kommen innerhalb von zwei Stunden.'),
        ad('f', 'Biete Hilfe im Haushalt', 'Ich putze, bügle und kaufe für Sie ein. Viel Erfahrung, besonders mit älteren Menschen. Vormittags habe ich noch Zeit.'),
        ad('g', 'Montage-Service Schraube', 'Wir bauen Ihre Küche und Ihre Möbel auf, hängen Lampen auf und bohren für Sie. Preis nach Stunden.'),
        ad('h', 'Fensterreinigung Klarblick', 'Saubere Fenster für Wohnungen, Büros und Geschäfte. Wir kommen einmal oder regelmäßig.'),
      ].join(''),
      items: [
        { n: 6, q: 'Am Sonntagabend haben Sie plötzlich in der ganzen Wohnung keinen Strom mehr.', opts: AX, a: 2 },
        { n: 7, q: 'Sie ziehen bald aus. Vorher müssen die Wände in Ihrer Wohnung neu gestrichen werden.', opts: AX, a: 0 },
        { n: 8, q: 'Ihre Mutter ist 82 Jahre alt. Sie braucht jemanden, der für sie sauber macht und Lebensmittel besorgt.', opts: AX, a: 5 },
        { n: 9, q: 'Sie haben einen großen Kleiderschrank gekauft, können ihn aber nicht allein aufbauen.', opts: AX, a: 6 },
        { n: 10, q: 'Sie haben Ihren Schlüssel in der Wohnung vergessen und kommen nicht mehr hinein.', opts: AX, a: 8 },
      ],
    }], { compact: true }),
    part(3, [
      {
        html: `<p>Liebe Anwohnerinnen und Anwohner der Gartenstraße,</p><p>am Sonntag, den 15. September, findet in unserer Straße das jährliche Straßenfest statt. Von 8 bis 22 Uhr ist die Gartenstraße deshalb für Autos gesperrt. Bitte parken Sie Ihr Auto schon am Samstagabend in einer anderen Straße. Autos, die am Sonntagmorgen noch dort stehen, werden abgeschleppt – das kostet etwa 200 Euro.</p><p>Das Fest beginnt um 11 Uhr mit Musik und Essen aus vielen Ländern. Wir freuen uns auf Sie!</p><p>Ihr Stadtteilverein</p>`,
        items: [
          { n: 11, q: 'Am Sonntag darf man tagsüber nicht mit dem Auto durch die Gartenstraße fahren.', opts: RF, a: 0 },
          { n: 12, q: 'Wer sein Auto am Sonntagmorgen in der Gartenstraße stehen lässt, …', opts: ['kann es bis zum Abend dort lassen.', 'bekommt Probleme: Das Auto wird weggebracht.', 'darf erst um 11 Uhr wegfahren.'], a: 1 },
        ],
      },
      {
        html: `<p>Liebe Kolleginnen und Kollegen,</p><p>am Freitag, den 7. Februar, bekommen wir in der Produktion neue Maschinen. Deshalb findet am Montag und Dienstag danach eine Schulung statt. Alle Mitarbeiter der Frühschicht kommen am Montag, alle aus der Spätschicht am Dienstag, jeweils von 9 bis 15 Uhr in den Besprechungsraum.</p><p>Die Schulung ist Arbeitszeit und Pflicht für alle. Mittags gibt es ein kostenloses Essen in der Kantine. Wer an seinem Tag nicht kommen kann, meldet sich bitte bei Frau Jansen im Personalbüro.</p><p>Thomas Reuter, Betriebsleiter</p>`,
        items: [
          { n: 13, q: 'Die Mitarbeiter können selbst entscheiden, ob sie an der Schulung teilnehmen.', opts: RF, a: 1 },
          { n: 14, q: 'Am Schulungstag …', opts: ['müssen die Mitarbeiter ihr Essen selbst mitbringen.', 'kommen alle Mitarbeiter zusammen am Montag.', 'bekommen die Mitarbeiter ein Mittagessen, ohne zu bezahlen.'], a: 2 },
        ],
      },
      {
        html: `<h4>Hallenbad Wellenau – Informationen für unsere Gäste</h4><p>Vom 1. bis zum 14. Juli ist das Hallenbad wegen der jährlichen Reinigung geschlossen. Die Sauna bleibt geöffnet und hat in dieser Zeit einen eigenen Eingang an der Parkstraße.</p><p>Wer eine Monatskarte hat, bekommt sie um zwei Wochen verlängert. Kommen Sie dafür bitte nach dem 14. Juli mit Ihrer Karte an die Kasse. Ab dem 15. Juli gelten neue Preise: Erwachsene bezahlen dann 5 Euro statt 4,50 Euro. Für Kinder bleibt der Preis gleich.</p>`,
        items: [
          { n: 15, q: 'Anfang Juli kann man zwei Wochen lang auch nicht in die Sauna gehen.', opts: RF, a: 1 },
          { n: 16, q: 'Ab dem 15. Juli …', opts: ['ist der Eintritt für Erwachsene teurer.', 'bezahlen Kinder mehr als vorher.', 'gibt es keine Monatskarten mehr.'], a: 0 },
        ],
      },
    ]),
    part(4, [{
      html: `<h4>Ein Girokonto bei der Volksbank Rheintal eröffnen</h4>
<p>Für Miete, Gehalt und viele Rechnungen brauchen Sie in Deutschland ein Girokonto. Bei uns können Sie es in wenigen Minuten eröffnen – in jeder Filiale oder bequem online von zu Hause.</p>
<p>Sie brauchen dafür nur einen gültigen Ausweis oder Reisepass und Ihre Meldebescheinigung. Einen Arbeitsvertrag müssen Sie nicht zeigen.</p>
<p>Das Konto kostet 4,90 Euro im Monat. Für Schüler, Auszubildende und Studierende bis 27 Jahre ist es kostenlos. Ihre Bankkarte bekommen Sie etwa eine Woche nach der Eröffnung mit der Post. Die Geheimzahl schicken wir Ihnen aus Sicherheitsgründen in einem zweiten Brief.</p>
<p>An unseren Automaten heben Sie kostenlos Geld ab. An Automaten von anderen Banken kann das bis zu 5 Euro kosten.</p>
<p>Haben Sie Fragen? Unsere Berater sprechen auch Englisch, Türkisch und Russisch. Vereinbaren Sie einfach einen Termin.</p>`,
      items: [
        { n: 17, q: 'Um ein Konto zu eröffnen, muss man in eine Filiale gehen.', opts: RF, a: 1 },
        { n: 18, q: 'Ohne Arbeitsvertrag bekommt man bei dieser Bank kein Konto.', opts: RF, a: 1 },
        { n: 19, q: 'Die Karte und die Geheimzahl kommen in zwei verschiedenen Briefen.', opts: RF, a: 0 },
      ],
    }]),
    part(5, [{
      html: `<p>Sehr geehrter Herr Kessler,</p>
<p>hiermit möchte ich Urlaub ${gap(20)}: vom 4. bis zum 22. August. In dieser Zeit möchte ich mit meiner Familie meine Eltern in Portugal besuchen, ${gap(21)} ich seit drei Jahren nicht mehr gesehen habe.</p>
<p>Ich weiß, dass im Sommer viele Kollegen Urlaub nehmen möchten. Deshalb ${gap(22)} ich schon mit Frau Demir gesprochen. Sie ist bereit, mich in diesen drei Wochen zu ${gap(23)}.</p>
<p>Alle wichtigen Aufträge werde ich natürlich ${gap(24)} meinem Urlaub fertig machen.</p>
<p>Ich würde mich freuen, ${gap(25)} Sie meinen Antrag genehmigen. Für Fragen stehe ich Ihnen gern zur Verfügung.</p>
<p>Mit freundlichen Grüßen<br>Carlos Mendes</p>`,
      items: [
        { n: 20, q: '', opts: ['bestellen', 'beantragen', 'bewerben'], a: 1 },
        { n: 21, q: '', opts: ['denen', 'den', 'die'], a: 2 },
        { n: 22, q: '', opts: ['habe', 'bin', 'werde'], a: 0 },
        { n: 23, q: '', opts: ['verdienen', 'vertreten', 'verbringen'], a: 1 },
        { n: 24, q: '', opts: ['bevor', 'früher', 'vor'], a: 2 },
        { n: 25, q: '', opts: ['wenn', 'ob', 'weil'], a: 0 },
      ],
    }], { gaps: true }),
  ],
};
