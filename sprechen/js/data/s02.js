export default {
  id: 's02', title: 'Set 2', about: 'Vorstellung · Beim Arzt · Hilfe für einen kranken Nachbarn',
  t1: {
    ask: ['Was haben Sie in Ihrer Heimat beruflich gemacht?', 'Wie gefällt Ihnen die Stadt, in der Sie jetzt wohnen?'],
    sample: [
      ['m1', 'Guten Tag. Mein Name ist Samir Haddad. Ich komme aus Syrien, ich bin in Aleppo geboren. Seit drei Jahren lebe ich in Deutschland, und jetzt wohne ich in Dortmund. Ich bin verheiratet und habe zwei Söhne, sie sind sechs und zehn Jahre alt. Von Beruf bin ich Elektriker. Im Moment arbeite ich in einem Lager und besuche abends einen Deutschkurs. Meine Muttersprache ist Arabisch. Außerdem spreche ich ein bisschen Englisch und natürlich Deutsch.'],
      ['f1', 'Danke. Was haben Sie in Ihrer Heimat beruflich gemacht?'],
      ['m1', 'Ich habe zwölf Jahre als Elektriker gearbeitet, zuerst in einer Firma und später selbstständig. Ich habe in Wohnungen und Geschäften die Leitungen repariert. Hier möchte ich wieder in meinem Beruf arbeiten, deshalb brauche ich noch die Anerkennung von meinem Abschluss.'],
      ['f1', 'Und wie gefällt Ihnen die Stadt, in der Sie jetzt wohnen?'],
      ['m1', 'Dortmund gefällt mir gut, weil die Stadt groß ist und es viele Parks gibt. Meine Kinder haben hier schnell Freunde gefunden. Nur das Wetter ist manchmal schwierig für mich, denn es regnet oft.'],
    ],
  },
  t2: {
    scene: 'arzt', img: 'arzt.jpg', topic: 'Thema: Beim Arzt',
    pic: 'Ein Behandlungszimmer in einer Arztpraxis. Eine Ärztin mit langen blonden Haaren und weißem Kittel misst einem jungen Mann den Blutdruck. Der Mann trägt ein weißes T-Shirt und sitzt am Tisch. Links sitzt eine junge Frau in einem karierten Hemd auf einem Stuhl und schaut zu. Im Hintergrund sind eine Tür und ein weißer Schrank.',
    ask: ['Welche Erfahrungen haben Sie mit Arztbesuchen in Deutschland gemacht?', 'Was ist in Ihrem Heimatland anders, wenn man zum Arzt geht?'],
    sample: [
      ['m1', 'Auf dem Bild sehe ich ein Zimmer in einer Arztpraxis. Rechts sitzt eine Ärztin, sie hat lange blonde Haare und trägt einen weißen Kittel. Sie misst einem jungen Mann den Blutdruck. Der Mann trägt ein weißes T-Shirt und sitzt ruhig am Tisch. Links sitzt eine junge Frau auf einem Stuhl und schaut zu. Ich glaube, sie ist seine Freundin oder seine Schwester und hat ihn zum Arzt begleitet. Vielleicht fühlt sich der Mann nicht gut. Das ist eine normale Untersuchung beim Arzt.'],
      ['f1', 'Welche Erfahrungen haben Sie mit Arztbesuchen in Deutschland gemacht?'],
      ['m1', 'Meistens gute Erfahrungen. Mein Hausarzt ist sehr freundlich und erklärt alles langsam. Aber man braucht fast immer einen Termin, und manchmal muss man lange warten. Einmal habe ich drei Wochen auf einen Termin beim Augenarzt gewartet.'],
      ['f1', 'Was ist in Ihrem Heimatland anders, wenn man zum Arzt geht?'],
      ['m1', 'Bei uns in Syrien geht man einfach ohne Termin zum Arzt und wartet dort. Man bezahlt den Arzt direkt, weil viele Leute keine Krankenversicherung haben. In Deutschland zeigt man nur die Versichertenkarte. Das finde ich besser, weil auch arme Menschen zum Arzt gehen können.'],
    ],
  },
  t3: {
    title: 'Hilfe für einen kranken Nachbarn', who: { m1: 'Samir', f1: 'Agnieszka' },
    task: 'Ihr Nachbar Herr Becker ist aus dem Krankenhaus gekommen und muss zwei Wochen im Bett bleiben. Er lebt allein und hat einen Hund. Sie möchten ihm zusammen helfen. Überlegen Sie, was alles zu tun ist.',
    points: ['Wer kauft ein und wann?', 'Wer holt die Medikamente aus der Apotheke?', 'Wer kocht für ihn?', 'Wer geht mit dem Hund spazieren?', 'Wer besucht ihn an welchen Tagen?'],
    sample: [
      ['m1', 'Hallo Agnieszka. Hast du gehört? Herr Becker ist wieder zu Hause, aber er muss zwei Wochen im Bett bleiben. Wollen wir ihm zusammen helfen?'],
      ['f1', 'Ja, natürlich. Er lebt ja allein. Zuerst das Einkaufen: Ich kann am Montag und am Donnerstag für ihn einkaufen, weil ich dann sowieso in den Supermarkt gehe.'],
      ['m1', 'Sehr gut. Er braucht auch Medikamente. Kannst du die auch gleich aus der Apotheke holen?'],
      ['f1', 'Das ist schwierig, die Apotheke schließt um 18 Uhr, und ich arbeite bis 18 Uhr 30. Vielleicht kannst du das machen?'],
      ['m1', 'Ja, kein Problem. Ich gehe morgen früh vor der Arbeit hin. Und was machen wir mit dem Essen? Wir könnten jeden Tag für ihn kochen.'],
      ['f1', 'Jeden Tag ist zu viel, finde ich, weil wir beide arbeiten. Wie wäre es, wenn wir mehr kochen und ihm etwas für zwei Tage bringen?'],
      ['m1', 'Da hast du recht, das ist einfacher. Ich koche am Wochenende eine große Suppe, und du bringst ihm am Mittwoch etwas. Einverstanden?'],
      ['f1', 'Einverstanden. Und der Hund? Er muss jeden Tag zweimal raus.'],
      ['m1', 'Morgens kann ich mit ihm spazieren gehen, ich stehe früh auf. Kannst du abends gehen?'],
      ['f1', 'Abends bin ich oft müde, aber meine Tochter liebt Hunde. Sie geht bestimmt gern mit ihm spazieren. Und wer besucht Herrn Becker?'],
      ['m1', 'Ich schlage vor, dass ich am Dienstag, Freitag und Sonntag kurz zu ihm gehe und du an den anderen Tagen. Dann kommt jeden Tag jemand zu ihm.'],
      ['f1', 'Gut. Also: Ich kaufe am Montag und Donnerstag ein und bringe am Mittwoch Essen, du holst die Medikamente und kochst am Wochenende, du gehst morgens mit dem Hund spazieren und meine Tochter abends, und wir besuchen ihn abwechselnd.'],
    ],
  },
};
