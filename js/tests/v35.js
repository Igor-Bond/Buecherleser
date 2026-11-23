import { part, ad, gap, RF, AX } from '../tests-lesen-b1.js';

export default {
  id: 'v35', title: 'Variante 5', about: 'Gesundheitszentrum im Netz · Handwerker und Haushaltsdienste · Grippeimpfung, Wandertag, Mieterverein · Bereitschaftsdienst · Beurlaubung vom Unterricht',
  parts: [
    part(1, [{
      html: `<div class="board"><h3>Gesundheitszentrum Rosenau – www.gz-rosenau.example</h3>
<p><b>Fachabteilungen</b> Innere Medizin · Chirurgie · Orthopädie · Hals-Nasen-Ohren-Heilkunde · Augenklinik</p>
<p><b>Sprechstunden & Termine</b> Termin online buchen · Sprechzeiten der Ambulanzen · Überweisung und Unterlagen · Termin absagen oder verschieben</p>
<p><b>Notaufnahme</b> Erreichbarkeit rund um die Uhr · Anfahrt · aktuelle Wartezeiten · Kindernotfall</p>
<p><b>Aufenthalt & Besuch</b> Besuchszeiten · Parken · Cafeteria · WLAN und Telefon · Was packe ich ein?</p>
<p><b>Geburt & Familie</b> Kreißsaal-Führungen · Geburtsvorbereitungskurse · Hebammensprechstunde · Stillberatung</p>
<p><b>Therapie & Reha</b> Physiotherapie · Ergotherapie · Ernährungsberatung · Rückenschule · Schmerztherapie</p>
<p><b>Verwaltung & Abrechnung</b> Rechnungen · Zuzahlung · Kopie der Patientenakte · Bescheinigungen für den Arbeitgeber</p>
<p><b>Beratung & Soziales</b> Sozialdienst · Pflege nach der Entlassung · Dolmetscherdienst · Seelsorge</p>
<p><b>Karriere</b> Stellenangebote · Ausbildung in der Pflege · Praktikum · Freiwilligendienst</p>
<p><b>Lob & Kritik</b> Patientenfürsprecherin · Fragebogen · Kontaktformular</p></div>`,
      items: [
        { n: 1, q: 'Ihre Schwester erwartet in drei Monaten ein Kind. Sie möchte sich vorher die Räume ansehen, in denen sie entbinden wird.', opts: ['Aufenthalt & Besuch', 'Geburt & Familie', 'andere Rubrik'], a: 1 },
        { n: 2, q: 'Für Ihren Aufenthalt im Mai sollen Sie 80 Euro selbst bezahlen. Sie möchten wissen, wie sich dieser Betrag zusammensetzt.', opts: ['Verwaltung & Abrechnung', 'Beratung & Soziales', 'andere Rubrik'], a: 0 },
        { n: 3, q: 'Ihr Vater wird nächste Woche entlassen, kann sich zu Hause aber noch nicht allein versorgen. Sie suchen Informationen, wer Ihnen bei der Organisation von Hilfe zur Seite steht.', opts: ['Aufenthalt & Besuch', 'Therapie & Reha', 'andere Rubrik'], a: 2 },
        { n: 4, q: 'Ihr Hausarzt hat Ihnen wegen Ihrer Rückenschmerzen Krankengymnastik verordnet. Sie möchten wissen, ob Sie die Behandlung im Gesundheitszentrum machen können.', opts: ['Therapie & Reha', 'Fachabteilungen', 'andere Rubrik'], a: 0 },
        { n: 5, q: 'Sie sollen am Donnerstag zur Kontrolle in die Augenambulanz kommen, sind an diesem Tag aber verhindert. Sie möchten Bescheid geben.', opts: ['Fachabteilungen', 'Lob & Kritik', 'andere Rubrik'], a: 2 },
      ],
    }], { instr: 'Sie lesen eine Seite im Internet. Lesen Sie die Aufgaben 1–5 und die Übersicht. Wo finden Sie etwas Passendes? Wählen Sie a, b oder c.', ru: 'Прочитайте обзор сайта и выберите подходящую рубрику.' }),
    part(2, [{
      html: [
        ad('a', 'Malerbetrieb Kessler', 'Tapezieren, Streichen, Lackieren – Whg., Treppenhäuser, Fassaden. Festpreis nach kostenl. Besichtigung. Zurzeit ausgebucht, neue Termine erst ab Mitte März. Tel. 0151 555 01 23'),
        ad('b', 'Maler-Team Farbwerk', 'Streichen von Whg. u. Büros, auch kurzfristig (innerh. 1 Woche) u. am Wochenende. Ab 9 €/m² inkl. Farbe, zzgl. Anfahrt. Tel. 0151 555 01 31'),
        ad('c', 'Elektro Brandt – Meisterbetrieb', 'Steckdosen, Lampen, Sicherungskästen, E-Check. Notdienst bei Stromausfall rund um die Uhr. Anfahrt im Stadtgebiet 20 €, Std. 58 €. Tel. 0151 555 01 38'),
        ad('d', 'Umzüge Petrov', 'Transporter + 2 Helfer 55 €/Std. Umzüge im Stadtgebiet u. im Umkreis bis 50 km, auch Sa. Kartons leihweise. Tel. 0151 555 01 44'),
        ad('e', 'Umzugsfirma Fernweg', 'Umzüge deutschlandweit u. ins Ausland. Möbelab- u. -aufbau, Einpackservice. Kostenl. Angebot nach Besichtigung, Festpreis. Tel. 0151 555 01 52'),
        ad('f', 'Blitzblank Gebäudereinigung', 'Büros, Praxen, Treppenhäuser, Fenster. Tägl. od. wöchentl., ab 22 €/Std. zzgl. MwSt. Nur für Firmen u. Hausverwaltungen, keine Privathaushalte. Tel. 0151 555 01 60'),
        ad('g', 'Schlüsseldienst Riegel', 'Türöffnung 24 Std., auch Sa./So. u. feiertags. In ca. 30 Min. vor Ort. Festpreis: tagsüber 79 €, 22–6 Uhr 129 €. Tel. 0151 555 01 67'),
        ad('h', 'Gartenpflege Grünwerk', 'Rasen mähen, Hecken schneiden, Laub entfernen, Winterdienst. Einmalig od. regelmäßig (wöchentl./14-tägl.), ganzjährig. 32 €/Std., Abfuhr Grünschnitt inkl. Tel. 0151 555 01 75'),
      ].join(''),
      items: [
        { n: 6, q: 'Sie ziehen Ende Februar aus Ihrer Wohnung aus. In zwei Wochen ist die Übergabe, vorher müssen die Wände noch gestrichen werden.', opts: AX, a: 1 },
        { n: 7, q: 'Sie haben eine neue Stelle in München gefunden und ziehen im Sommer mit der ganzen Familie von Kassel dorthin.', opts: AX, a: 4 },
        { n: 8, q: 'Sie und Ihr Mann arbeiten beide Vollzeit. Sie suchen jemanden, der einmal pro Woche Ihre Wohnung putzt.', opts: AX, a: 8 },
        { n: 9, q: 'Ihre Eltern schaffen die Arbeit auf ihrem Grundstück nicht mehr allein. Alle zwei Wochen soll jemand den Rasen mähen.', opts: AX, a: 7 },
        { n: 10, q: 'Es ist Sonntagabend. Sie stehen vor Ihrer Wohnung, die Tür ist zugefallen und der Schlüssel liegt drinnen.', opts: AX, a: 6 },
      ],
    }], { compact: true }),
    part(3, [
      {
        html: `<h4>Grippeimpfung: Landkreis zieht positive Bilanz</h4><p>Neustetten. Bei der diesjährigen Impfaktion des Landkreises haben sich deutlich mehr Menschen gegen Grippe impfen lassen als im Vorjahr. Wie das Gesundheitsamt mitteilte, wurden zwischen Anfang Oktober und Mitte November rund 4200 Impfungen durchgeführt – etwa 900 mehr als im vergangenen Jahr. Besonders gut angenommen wurde der Impfbus, der an sechs Samstagen auf Wochenmärkten und vor Einkaufszentren Halt machte. „Viele haben sich spontan entschieden, weil kein Termin nötig war“, sagte Amtssprecherin Carla Wendisch. Bei den über 60-Jährigen sei die Beteiligung allerdings kaum gestiegen. Deshalb sollen im kommenden Herbst zusätzlich Seniorentreffs und Pflegeheime angefahren werden.</p>`,
        items: [
          { n: 11, q: 'Im Vorjahr wurden bei der Aktion ungefähr 3300 Menschen geimpft.', opts: RF, a: 0 },
          { n: 12, q: 'Im nächsten Herbst …', opts: ['kommt der Impfbus auch zu Einrichtungen für ältere Menschen.', 'muss man sich für den Impfbus vorher anmelden.', 'hält der Bus nicht mehr auf Wochenmärkten.'], a: 0 },
        ],
      },
      {
        html: `<p>Liebe Eltern der Klassen 6a und 6b,</p><p>am Donnerstag, dem 18. Juni, findet unser Wandertag statt. Wir treffen uns um 7.45 Uhr auf dem Schulhof; die Rückkehr ist gegen 15.30 Uhr geplant. Gewandert wird etwa zwölf Kilometer zum Aussichtsturm Hohenstein. Bitte achten Sie auf feste Schuhe, Regenschutz und ausreichend Verpflegung, da unterwegs nichts gekauft werden kann. Für die Busfahrt werden 6 Euro pro Kind eingesammelt; der Eintritt zum Turm wird vom Förderverein übernommen. Die beiliegende Einverständniserklärung muss bis zum 10. Juni unterschrieben bei der Klassenleitung abgegeben werden. Ohne diese Erklärung darf Ihr Kind nicht teilnehmen und besucht an diesem Tag den Unterricht einer anderen Klasse.</p><p>Mit freundlichen Grüßen<br>M. Albers, Klassenlehrerin</p>`,
        items: [
          { n: 13, q: 'Die Kinder können sich während der Wanderung an einem Kiosk etwas zu essen holen.', opts: RF, a: 1 },
          { n: 14, q: 'Kinder, deren Eltern das Formular nicht rechtzeitig unterschreiben, …', opts: ['bleiben am 18. Juni zu Hause.', 'haben an diesem Tag in der Schule Unterricht.', 'müssen den Eintritt für den Turm selbst bezahlen.'], a: 1 },
        ],
      },
      {
        html: `<h4>Mieterverein Lindenthal e. V. – wir über uns</h4><p>Seit über 40 Jahren vertreten wir die Interessen der Mieterinnen und Mieter in unserer Stadt. Unsere Mitglieder werden von Juristinnen und Juristen persönlich, telefonisch oder per E-Mail beraten – etwa wenn die Miete erhöht wird, die Nebenkostenabrechnung unklar ist oder Mängel nicht beseitigt werden. Auf Wunsch übernehmen wir auch den Schriftverkehr mit dem Vermieter. Vor Gericht dürfen wir Sie allerdings nicht vertreten; hierfür kann über uns eine günstige Rechtsschutzversicherung abgeschlossen werden. Die Beratung ist im Jahresbeitrag von 84 Euro enthalten. Bitte beachten Sie: Beraten werden ausschließlich Mitglieder. Ein Beitritt ist jederzeit möglich, auch wenn der Streit bereits begonnen hat.</p>`,
        items: [
          { n: 15, q: 'Wer schon Ärger mit seinem Vermieter hat, kann trotzdem noch in den Verein eintreten.', opts: RF, a: 0 },
          { n: 16, q: 'Der Mieterverein …', opts: ['tritt für seine Mitglieder im Prozess als Anwalt auf.', 'berechnet für jedes Beratungsgespräch eine Gebühr.', 'schreibt für seine Mitglieder Briefe an den Vermieter.'], a: 2 },
        ],
      },
    ]),
    part(4, [{
      html: `<h4>Abends oder am Wochenende krank – wer hilft?</h4>
<p>Wenn die Hausarztpraxis geschlossen ist, wissen viele Menschen nicht, an wen sie sich wenden sollen. Entscheidend ist, wie ernst die Beschwerden sind.</p>
<p>Bei lebensbedrohlichen Zuständen – zum Beispiel starken Schmerzen in der Brust, Atemnot, Bewusstlosigkeit oder Verdacht auf einen Schlaganfall – wählen Sie sofort den Notruf 112. Der Rettungsdienst ist rund um die Uhr erreichbar.</p>
<p>Für Erkrankungen, mit denen Sie normalerweise in die Praxis gehen würden, die aber nicht bis zum nächsten Werktag warten können, ist der ärztliche Bereitschaftsdienst zuständig. Sie erreichen ihn bundesweit unter der Nummer 116 117, ohne Vorwahl und kostenlos. Am Telefon wird zunächst geklärt, wie dringend Ihr Fall ist. Danach nennt man Ihnen eine Bereitschaftspraxis in Ihrer Nähe; ein Hausbesuch wird nur vereinbart, wenn Sie aus gesundheitlichen Gründen nicht selbst kommen können.</p>
<p>Halten Sie Ihre Versichertenkarte und eine Liste der Medikamente bereit, die Sie regelmäßig einnehmen.</p>
<p>Arzneimittel bekommen Sie nachts und an Feiertagen in der Notdienst-Apotheke. Welche Apotheke geöffnet hat, steht im Schaufenster jeder Apotheke und im Internet. Zwischen 20 und 6 Uhr sowie an Sonn- und Feiertagen wird eine Notdienstgebühr von 2,50 Euro berechnet. Sie entfällt, wenn der Arzt auf dem Rezept das Feld „noctu“ angekreuzt hat.</p>`,
      items: [
        { n: 17, q: 'Der Bereitschaftsdienst schickt grundsätzlich eine Ärztin oder einen Arzt zu den Kranken nach Hause.', opts: RF, a: 1 },
        { n: 18, q: 'Den Zuschlag in der Notdienst-Apotheke muss man nicht in jedem Fall selbst zahlen.', opts: RF, a: 0 },
        { n: 19, q: 'Wer die 116 117 anruft, muss zuerst die Vorwahl seines Wohnortes wählen.', opts: RF, a: 1 },
      ],
    }]),
    part(5, [{
      html: `<p>Sehr geehrte Frau Dr. Hartwig,</p>
<p>mein Sohn Emre besucht die Klasse 7c Ihrer Schule. Am 15. Mai feiert seine Großmutter in Izmir ihren 80. Geburtstag, und unsere ganze Familie ${gap(20)} dazu eingeladen worden. Deshalb möchte ich Sie ${gap(21)} bitten, Emre vom 13. bis zum 16. Mai vom Unterricht zu beurlauben.</p>
<p>Mir ist bewusst, dass eine Beurlaubung nur in Ausnahmefällen genehmigt werden ${gap(22)}. Emre wird den versäumten Stoff selbstverständlich nachholen, ${gap(23)} er keine Nachteile hat. Seine Klassenlehrerin, Frau Vogt, hat ${gap(24)} bereits zugesagt, die Arbeitsblätter vorab mitzugeben.</p>
<p>Für eine Antwort ${gap(25)} zum 30. April wäre ich Ihnen sehr dankbar.</p>
<p>Mit freundlichen Grüßen<br>Selin Aksoy</p>`,
      items: [
        { n: 20, q: '', opts: ['hat', 'ist', 'wird'], a: 1 },
        { n: 21, q: '', opts: ['darum', 'dafür', 'danach'], a: 0 },
        { n: 22, q: '', opts: ['will', 'möchte', 'kann'], a: 2 },
        { n: 23, q: '', opts: ['obwohl', 'damit', 'deshalb'], a: 1 },
        { n: 24, q: '', opts: ['ihm', 'ihn', 'er'], a: 0 },
        { n: 25, q: '', opts: ['seit', 'ab', 'bis'], a: 2 },
      ],
    }], { gaps: true }),
  ],
};
