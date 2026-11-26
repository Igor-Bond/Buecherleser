// Формат набора Sprechen: t1 — вопросы экзаменатора (ask) и образец; t2 — рисунок (scene из scenes.js), тема, описание рисунка
// для ИИ (pic), вопросы об опыте (ask) и образец; t3 — ситуация (title, task), пункты (points), имена (who) и образец диалога.
// sample — реплики [[код, текст], …] как в Hören: код f1/m1 — пол и номер говорящего. В t1 и t2 первым говорит кандидат.
export default {
  id: 's01', title: 'Set 1', about: 'Vorstellung · Essen in der Familie · Abschiedsfeier für eine Kollegin',
  t1: {
    ask: ['Warum sind Sie nach Deutschland gekommen?', 'Was machen Sie gern in Ihrer Freizeit?'],
    sample: [
      ['f1', 'Guten Tag. Ich heiße Olena Kovalenko. Ich komme aus der Ukraine, aus Charkiw. Seit zwei Jahren lebe ich in Deutschland, jetzt wohne ich in Kassel. Ich bin verheiratet und habe eine Tochter, sie ist neun Jahre alt und geht in die dritte Klasse. In der Ukraine habe ich als Buchhalterin gearbeitet. Im Moment besuche ich einen Deutschkurs, und später möchte ich wieder in meinem Beruf arbeiten. Ich spreche Ukrainisch, Russisch, ein bisschen Englisch und jetzt auch Deutsch.'],
      ['m1', 'Danke. Warum sind Sie nach Deutschland gekommen?'],
      ['f1', 'Ich bin wegen des Krieges gekommen. In meiner Stadt war es zu gefährlich, deshalb bin ich mit meiner Tochter nach Deutschland gefahren. Mein Mann ist ein Jahr später gekommen.'],
      ['m1', 'Und was machen Sie gern in Ihrer Freizeit?'],
      ['f1', 'Ich koche gern, vor allem ukrainische Gerichte. Am Wochenende gehe ich oft mit meiner Familie im Park spazieren, weil wir in der Woche wenig Zeit zusammen haben. Und abends lese ich einfache Bücher auf Deutsch.'],
    ],
  },
  t2: {
    scene: 'essen', topic: 'Thema: Essen in der Familie',
    pic: 'Eine Familie sitzt am Esstisch: eine Frau, ein Mann und zwei Kinder. Auf dem Tisch stehen Teller, Gläser und eine Schüssel mit Essen. Über dem Tisch hängt eine Lampe, links ist ein Fenster.',
    ask: ['Wie ist das bei Ihnen: Essen Sie oft zusammen mit Ihrer Familie?', 'Was ist in Ihrem Heimatland beim Essen anders als in Deutschland?'],
    sample: [
      ['f1', 'Auf dem Bild sehe ich eine Familie. Sie sitzt am Esstisch: eine Frau, ein Mann und zwei Kinder. Auf dem Tisch stehen Teller, Gläser und eine große Schüssel mit Essen. Über dem Tisch hängt eine Lampe, und links ist ein Fenster. Ich glaube, es ist Abend und die Familie isst zusammen zu Abend. Vielleicht erzählen die Kinder gerade, was sie in der Schule gemacht haben. Die Stimmung ist ruhig und gemütlich.'],
      ['m1', 'Wie ist das bei Ihnen: Essen Sie oft zusammen mit Ihrer Familie?'],
      ['f1', 'Ja, aber nicht jeden Tag. Mittags isst meine Tochter in der Schule, und ich bin im Kurs. Aber am Abend essen wir fast immer zusammen. Das ist mir wichtig, weil wir dann in Ruhe über den Tag sprechen können. Am Sonntag frühstücken wir lange.'],
      ['m1', 'Was ist in Ihrem Heimatland beim Essen anders als in Deutschland?'],
      ['f1', 'Bei uns in der Ukraine isst man mittags und abends warm, und es gibt fast immer eine Suppe. In Deutschland essen viele Leute abends nur Brot mit Käse oder Wurst. Das war am Anfang neu für mich. Außerdem essen wir später, oft erst um acht Uhr.'],
    ],
  },
  t3: {
    title: 'Abschiedsfeier für eine Kollegin', who: { f1: 'Olena', m1: 'Karim' },
    task: 'Ihre Kollegin Frau Schneider geht nächsten Monat in Rente. Sie möchten zusammen eine kleine Abschiedsfeier in der Firma organisieren. Überlegen Sie, was alles zu tun ist.',
    points: ['Wann und wo feiern?', 'Wen einladen?', 'Essen und Getränke?', 'Geschenk – was und wer kauft es?', 'Wer bezahlt?'],
    sample: [
      ['f1', 'Du, Karim, Frau Schneider geht nächsten Monat in Rente. Wollen wir eine kleine Feier für sie organisieren?'],
      ['m1', 'Ja, das ist eine gute Idee. Wann sollen wir feiern? Ich schlage ihren letzten Arbeitstag vor, das ist ein Freitag.'],
      ['f1', 'Einverstanden. Am besten nach der Arbeit, um 15 Uhr. Und wo? Wir könnten in der Kantine feiern.'],
      ['m1', 'Die Kantine ist am Freitagnachmittag geschlossen. Vielleicht ist der Pausenraum besser, da ist genug Platz.'],
      ['f1', 'Stimmt, du hast recht. Wen laden wir ein? Ich finde, alle aus unserer Abteilung und auch den Chef.'],
      ['m1', 'Gut. Ich schreibe heute noch eine E-Mail an alle. Und was machen wir mit dem Essen?'],
      ['f1', 'Ich kann einen Kuchen backen. Kannst du Getränke besorgen, Saft und Wasser?'],
      ['m1', 'Ja, kein Problem. Wir brauchen auch ein Geschenk. Wie wäre es mit einem Gutschein für ein Restaurant?'],
      ['f1', 'Hm, sie arbeitet gern im Garten. Ich finde einen Gutschein für ein Gartencenter besser.'],
      ['m1', 'Das stimmt, das passt besser zu ihr. Und wer bezahlt das alles?'],
      ['f1', 'Wir sammeln Geld bei den Kollegen, jeder gibt 5 Euro. Den Gutschein kaufe ich am Samstag.'],
      ['m1', 'Prima. Also: Wir feiern am Freitag um 15 Uhr im Pausenraum, ich lade alle ein und bringe Getränke mit, und du backst einen Kuchen und kaufst den Gutschein.'],
    ],
  },
};
