import { part, ad, gap, RF, AX } from '../tests-lesen-b1.js';

export default {
  id: 'v22', title: 'Variante 2', about: 'Familienzentrum · Anzeigen · Nachhilfe an der Schule, Kindergeburtstag, Streaming-Abo · Abo kündigen · Kein warmes Wasser',
  parts: [
    part(1, [{
      html: `<div class="board"><h3>Familienzentrum Regenbogen – Wegweiser</h3>
<p><b>3. Stock</b> Nachhilfe und Hausaufgabenhilfe (Klassen 1–10) · Musikschule · Elterncafé</p>
<p><b>2. Stock</b> Erziehungsberatung · Schuldnerberatung · Verbraucherberatung (Verträge, Rechnungen, Kündigungen)</p>
<p><b>1. Stock</b> Kinderärztin Dr. Baumann · Hebamme · Krabbelgruppe</p>
<p><b>Erdgeschoss</b> Empfang · Spielzimmer · Raum für Kinderfeste (Vermietung am Empfang)</p>
<p><b>Untergeschoss</b> Turnhalle · Kleiderbörse (gebrauchte Kinderkleidung) · Abstellraum für Kinderwagen</p></div>`,
      items: [
        { n: 1, q: 'Ihr Sohn geht in die 6. Klasse und versteht im Mathematikunterricht nicht viel. Er braucht Hilfe.', opts: ['2. Stock', '3. Stock', 'anderes Stockwerk'], a: 1 },
        { n: 2, q: 'Sie haben Ihren Handyvertrag gekündigt, aber die Firma schickt weiter Rechnungen. Sie brauchen einen Rat.', opts: ['2. Stock', 'Erdgeschoss', 'anderes Stockwerk'], a: 0 },
        { n: 3, q: 'Ihre Tochter wird acht Jahre alt. Ihre Wohnung ist zu klein, deshalb möchten Sie für die Feier einen Raum mieten.', opts: ['1. Stock', '3. Stock', 'anderes Stockwerk'], a: 2 },
        { n: 4, q: 'Ihr kleiner Sohn hat seit gestern Fieber und Husten.', opts: ['1. Stock', '2. Stock', 'anderes Stockwerk'], a: 0 },
        { n: 5, q: 'Ihre Kinder brauchen Winterjacken, aber neue Jacken sind Ihnen zu teuer.', opts: ['Erdgeschoss', 'Untergeschoss', 'anderes Stockwerk'], a: 1 },
      ],
    }]),
    part(2, [{
      html: [
        ad('a', 'Lernstudio Schlaufuchs', 'Nachhilfe in Mathe, Deutsch und Englisch für die Klassen 1 bis 6. Kleine Gruppen, montags bis donnerstags am Nachmittag. Die Probestunde ist kostenlos.'),
        ad('b', 'Studentin gibt Nachhilfe', 'Englisch und Französisch für die Klassen 7 bis 13. Ich komme zu Ihnen nach Hause. 18 Euro pro Stunde.'),
        ad('c', 'Kindergeburtstag im Kletterpark', 'Für Kinder ab 8 Jahren: zwei Stunden Klettern mit Trainer, danach Kuchen und Saft in unserem Café. 15 Euro pro Kind.'),
        ad('d', 'Zauberer Tino kommt zu Ihnen', 'Lustige Zaubershow für Kindergeburtstage in Ihrer Wohnung oder im Garten. 45 Minuten, für Kinder von 4 bis 10 Jahren.'),
        ad('e', 'Konditorei Süßmann', 'Torten nach Ihren Wünschen für Geburtstag und Hochzeit – auch mit Namen oder Foto. Bitte bestellen Sie drei Tage vorher.'),
        ad('f', 'Heizung und Sanitär Brandl', 'Die Heizung bleibt kalt? Aus dem Hahn kommt kein warmes Wasser? Unser Notdienst ist Tag und Nacht für Sie da, auch am Wochenende.'),
        ad('g', 'Zeitschrift „Familie heute“', 'Lesen Sie drei Hefte kostenlos zur Probe. Danach kostet das Abo 4,90 Euro im Monat. Sie können jederzeit kündigen.'),
        ad('h', 'Babysitterin hat Zeit', 'Schülerin (17) passt abends und am Wochenende auf Ihre Kinder auf. Ich habe zwei kleine Geschwister und viel Erfahrung. 10 Euro pro Stunde.'),
      ].join(''),
      items: [
        { n: 6, q: 'Ihre Tochter geht in die 3. Klasse und hat Probleme beim Rechnen.', opts: AX, a: 0 },
        { n: 7, q: 'Ihr Sohn wird sechs Jahre alt. Sie feiern zu Hause und suchen noch ein Programm für die kleinen Gäste.', opts: AX, a: 3 },
        { n: 8, q: 'Ihr Sohn besucht die 8. Klasse und braucht Hilfe in Physik.', opts: AX, a: 8 },
        { n: 9, q: 'Es ist Sonntagabend, und aus Ihrer Dusche kommt nur noch kaltes Wasser.', opts: AX, a: 5 },
        { n: 10, q: 'Sie möchten am Samstagabend mit Ihrem Mann ins Theater gehen und brauchen jemanden für Ihre Kinder.', opts: AX, a: 7 },
      ],
    }], { compact: true }),
    part(3, [
      {
        html: `<p>Liebe Eltern,</p><p>ab dem 3. Februar gibt es an unserer Schule wieder das Programm „Schüler helfen Schülern“. Jugendliche aus den Klassen 10 und 11 geben jüngeren Kindern Nachhilfe in Mathematik, Deutsch und Englisch. Der Unterricht findet dienstags und donnerstags nach der sechsten Stunde in der Schule statt.</p><p>Eine Stunde kostet 5 Euro. Familien mit wenig Geld können im Sekretariat einen Antrag stellen, dann übernimmt die Stadt die Kosten. Wenn Ihr Kind teilnehmen soll, füllen Sie bitte das Formular aus und geben Sie es bis zum 24. Januar der Klassenlehrerin.</p><p>Mit freundlichen Grüßen<br>Karin Oswald, Schulleiterin</p>`,
        items: [
          { n: 11, q: 'Die Nachhilfe geben Lehrerinnen und Lehrer der Schule.', opts: RF, a: 1 },
          { n: 12, q: 'Familien mit wenig Geld …', opts: ['bezahlen nur 5 Euro pro Stunde.', 'müssen das Formular bei der Stadt abgeben.', 'können die Nachhilfe kostenlos bekommen.'], a: 2 },
        ],
      },
      {
        html: `<p>Liebe Eltern von Jonas,</p><p>unsere Tochter Mila wird sieben Jahre alt und möchte Jonas zu ihrem Geburtstag einladen. Wir feiern am Samstag, den 17. Mai, von 14 bis 18 Uhr auf dem Abenteuerspielplatz am Mühlenweg. Wenn es regnet, feiern wir bei uns zu Hause in der Gartenstraße 5.</p><p>Bitte ziehen Sie Jonas alte Kleidung und feste Schuhe an. Für Essen und Getränke sorgen wir. Darf Jonas etwas nicht essen, zum Beispiel wegen einer Allergie? Dann schreiben Sie uns das bitte. Um 18 Uhr können Sie ihn wieder abholen.</p><p>Herzliche Grüße<br>Familie Novák</p>`,
        items: [
          { n: 13, q: 'Bei schlechtem Wetter feiern die Kinder an einem anderen Ort.', opts: RF, a: 0 },
          { n: 14, q: 'Die Eltern von Jonas sollen …', opts: ['Bescheid geben, wenn Jonas etwas nicht essen darf.', 'für die Feier einen Kuchen backen.', 'während der Feier bei den Kindern bleiben.'], a: 0 },
        ],
      },
      {
        html: `<p>Sehr geehrter Herr Demir,</p><p>ab dem 1. März kostet Ihr Abo bei „Filmwelt“ 11,99 Euro statt 9,99 Euro im Monat. Dafür können Sie in Zukunft auf drei Geräten gleichzeitig Filme und Serien sehen.</p><p>Wenn Sie mit dem neuen Preis nicht einverstanden sind, können Sie Ihr Abo bis zum 28. Februar kündigen. Das geht nur online in Ihrem Kundenkonto unter „Mein Abo“. Am Telefon nehmen wir keine Kündigungen an. Wenn Sie nichts tun, läuft Ihr Abo automatisch zum neuen Preis weiter.</p><p>Ihr Filmwelt-Team</p>`,
        items: [
          { n: 15, q: 'Wenn Herr Demir nicht reagiert, bezahlt er ab März mehr als bisher.', opts: RF, a: 0 },
          { n: 16, q: 'Wenn Herr Demir kündigen möchte, …', opts: ['soll er beim Kundenservice anrufen.', 'muss er das im Internet in seinem Kundenkonto tun.', 'hat er dafür bis Ende März Zeit.'], a: 1 },
        ],
      },
    ]),
    part(4, [{
      html: `<h4>Abo kündigen – das sollten Sie wissen</h4>
<p>Ein Abo für eine Zeitschrift, ein Fitnessstudio oder einen Streamingdienst hat man schnell abgeschlossen. Die Kündigung ist oft schwieriger. Die Verbraucherberatung Talstadt gibt Tipps.</p>
<p>Lesen Sie zuerst in Ihrem Vertrag nach, wie lange das Abo läuft und bis wann Sie kündigen müssen. Kündigen Sie dann schriftlich, also mit einem Brief oder einer E-Mail. Ein Anruf ist keine gute Idee, weil Sie später nichts beweisen können.</p>
<p>Bitten Sie die Firma immer um eine Bestätigung und bewahren Sie diese gut auf. Kontrollieren Sie danach Ihr Konto. Bucht die Firma trotz Kündigung weiter Geld ab, können Sie es innerhalb von acht Wochen über Ihre Bank zurückholen.</p>
<p>Vorsicht bei kostenlosen Probeabos: Viele werden automatisch zu einem normalen Abo, das Geld kostet, wenn man nicht rechtzeitig kündigt. Schreiben Sie sich den Termin deshalb gleich in den Kalender.</p>
<p>Haben Sie Probleme mit einer Kündigung? Unsere Beraterinnen helfen Ihnen von Montag bis Donnerstag. Ein Gespräch kostet 10 Euro. Bitte machen Sie vorher einen Termin.</p>`,
      items: [
        { n: 17, q: 'Die Verbraucherberatung empfiehlt, ein Abo am Telefon zu kündigen.', opts: RF, a: 1 },
        { n: 18, q: 'Wenn eine Firma nach der Kündigung noch Geld abbucht, kann man es von der Bank zurückbekommen.', opts: RF, a: 0 },
        { n: 19, q: 'Ein Probeabo endet immer von selbst, wenn die Testzeit vorbei ist.', opts: RF, a: 1 },
      ],
    }]),
    part(5, [{
      html: `<p>Sehr geehrter Herr Steinbach,</p>
<p>ich bin Mieterin in der Gartenstraße 12, Wohnung 5. Ich schreibe Ihnen, ${gap(20)} wir seit letztem Freitag kein warmes Wasser haben. In der Küche und im Bad kommt nur ${gap(21)} Wasser aus dem Hahn. Auch die Heizung im Bad wird nicht richtig warm.</p>
<p>Ich habe am Wochenende mehrmals bei Ihnen angerufen, aber leider konnte ich Sie nicht ${gap(22)}. Für meine Familie ist die Situation sehr schwierig. Wir haben ein Baby, und ich muss das Wasser zum Baden jeden Tag auf dem Herd warm machen.</p>
<p>Ich bitte Sie deshalb, so schnell wie möglich einen Handwerker zu schicken. Er kann gern am Nachmittag kommen. Bitte rufen Sie ${gap(23)} vorher an, damit jemand zu Hause ist.</p>
<p>${gap(24)} das Problem bis Ende der Woche nicht gelöst ist, möchte ich für diesen Monat weniger Miete bezahlen. Ich warte ${gap(25)} Ihre schnelle Antwort.</p>
<p>Mit freundlichen Grüßen<br>Olena Petrenko</p>`,
      items: [
        { n: 20, q: '', opts: ['denn', 'weil', 'deshalb'], a: 1 },
        { n: 21, q: '', opts: ['kalte', 'kalten', 'kaltes'], a: 2 },
        { n: 22, q: '', opts: ['erreichen', 'erreicht', 'erreiche'], a: 0 },
        { n: 23, q: '', opts: ['mir', 'mich', 'ich'], a: 1 },
        { n: 24, q: '', opts: ['Ob', 'Wann', 'Wenn'], a: 2 },
        { n: 25, q: '', opts: ['auf', 'für', 'an'], a: 0 },
      ],
    }], { gaps: true }),
  ],
};
