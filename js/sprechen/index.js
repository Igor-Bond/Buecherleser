// Приложение Sprechen B1: справочник и наборы заданий. Новый набор — файл sNN.js, добавляется сюда и в SHELL в sw.js.
import s01 from './s01.js';
import s02 from './s02.js';
import s03 from './s03.js';
import s04 from './s04.js';
import s05 from './s05.js';
import s06 from './s06.js';
import s07 from './s07.js';
import s08 from './s08.js';

export const SETS = [s01, s02, s03, s04, s05, s06, s07, s08];

const ru = t => `<p lang="ru" class="ru">${t}</p>`;
const pair = (de, r) => `<p class="rm"><b>${de}</b><span lang="ru">${r}</span></p>`;

export const REDEMITTEL = [
  {
    title: 'So läuft die Prüfung',
    html: `<h2>So läuft die Prüfung</h2>
${ru('Устная часть DTZ длится около 16 минут. Обычно сдают вдвоём с другим кандидатом, перед вами два экзаменатора: один ведёт разговор, второй только оценивает. Времени на подготовку нет, словарём и записями пользоваться нельзя.')}
<h3>Teil 1 · Sich vorstellen</h3>
${ru('Около двух минут на человека. На столе лежит лист с опорными словами: Name, Geburtsort, Wohnort, Arbeit / Beruf, Familie, Sprachen. Вы рассказываете о себе примерно минуту — все слова называть не обязательно. Затем экзаменатор задаёт один-два вопроса по вашему рассказу.')}
<h3>Teil 2 · Über Erfahrungen sprechen</h3>
${ru('Около трёх минут на человека. Вы получаете фотографию и два вопроса: что вы видите и какая это ситуация. После описания экзаменатор спрашивает о вашем опыте и о том, как это устроено в вашей стране.')}
<h3>Teil 3 · Gemeinsam etwas planen</h3>
${ru('Около шести минут на двоих. Вы с партнёром получаете один лист: ситуация и примерно пять пунктов (когда, где, что купить, кто платит…). Разговор ведёте вы сами, экзаменаторы молчат. Нужно пройти по пунктам и о чём-то договориться.')}
<h3>Was bewertet wird</h3>
${ru('Половина оценки — содержание: выполнено ли задание в каждой части. Вторая половина — язык: произношение и интонация, беглость, правильность, словарный запас. Для B1 нужно набрать около трёх четвертей баллов.')}
${ru('Отсюда главное правило: не молчите. Короткий ответ и долгая пауза стоят дороже, чем ошибка в окончании. Не знаете слова — опишите его другими словами; не поняли вопрос — переспросите, это не снижает оценку.')}
<h3>Wie Sie hier üben</h3>
${ru('В разделе «Aufgaben» восемь наборов по три задания. Скажите ответ вслух и запишите себя, отметьте по списку, что получилось, и сравните с образцом. Если в настройках приложения есть ключ ИИ, продиктуйте ответ — и получите разбор ошибок с исправленным вариантом. Произношение ИИ не слышит: его проверяйте по своей записи и по образцу, который читает голос.')}
${ru('Тренажёр фраз (Phrasentrainer) — первое, с чего стоит начать. Каждая фраза проходит ступени: повторить за голосом, сказать по тексту с пропусками, сказать по памяти и ответить ею в разговоре; выученное возвращается на повторение через день, три дня, неделю. Начните с него: готовые фразы — основа всех трёх частей.')}
${ru('В разделе «Prüfung» все три части идут подряд, как на экзамене: вопросы задаёт голос, идёт время.')}
${ru('Третью часть лучше всего тренировать с живым партнёром. Здесь его заменяет партнёр-ИИ: в задании Teil 3 нажмите «Разговор с партнёром-ИИ» — он отвечает голосом, спорит и предлагает своё. Без него говорите свою половину разговора: предложение по каждому пункту и вопрос собеседнику.')}`,
  },
  {
    title: 'Redemittel',
    html: `<h2>Redemittel</h2>
${ru('Готовые фразы для каждой части. Выучите по три-четыре фразы из каждого блока так, чтобы они произносились без раздумий.')}
<h3>Teil 1 · sich vorstellen</h3>
${pair('Ich heiße … und komme aus …', 'Меня зовут … и я из …')}
${pair('Ich bin in … geboren.', 'Я родился (родилась) в …')}
${pair('Seit zwei Jahren lebe ich in Deutschland.', 'Уже два года я живу в Германии.')}
${pair('Ich wohne mit meiner Familie in …', 'Я живу с семьёй в …')}
${pair('Ich bin verheiratet / ledig / geschieden und habe zwei Kinder.', 'Я женат (замужем) / не женат (не замужем) / разведён (разведена), у меня двое детей.')}
${pair('Von Beruf bin ich … In meiner Heimat habe ich als … gearbeitet.', 'По профессии я … На родине я работал(а) …')}
${pair('Im Moment besuche ich einen Deutschkurs. Später möchte ich als … arbeiten.', 'Сейчас я хожу на курс немецкого. Потом хочу работать …')}
${pair('Meine Muttersprache ist … Außerdem spreche ich …', 'Мой родной язык — … Кроме того, я говорю на …')}
<h3>Teil 2 · ein Bild beschreiben</h3>
${pair('Auf dem Bild sehe ich …', 'На картинке я вижу …')}
${pair('Im Vordergrund / Im Hintergrund ist …', 'На переднем / на заднем плане …')}
${pair('Links / Rechts / In der Mitte steht (sitzt) …', 'Слева / справа / посередине стоит (сидит) …')}
${pair('Die Frau trägt … Der Mann hält … in der Hand.', 'На женщине … Мужчина держит в руке …')}
${pair('Ich glaube, dass … / Vielleicht … / Wahrscheinlich …', 'Я думаю, что … / Может быть … / Наверное …')}
${pair('Die Situation ist: …', 'Ситуация такая: …')}
${pair('Die Personen sehen fröhlich / müde / gestresst aus.', 'Люди выглядят весёлыми / усталыми / напряжёнными.')}
<h3>Teil 2 · über Erfahrungen sprechen</h3>
${pair('Das kenne ich gut. Bei mir ist das so: …', 'Мне это хорошо знакомо. У меня это так: …')}
${pair('Ich habe selbst erlebt, dass …', 'Я сам(а) сталкивался(лась) с тем, что …')}
${pair('Als ich nach Deutschland gekommen bin, …', 'Когда я приехал(а) в Германию, …')}
${pair('Bei uns in … ist das anders: …', 'У нас в … это по-другому: …')}
${pair('In meiner Heimat ist es normal, dass …', 'На моей родине считается нормальным, что …')}
${pair('Im Vergleich zu Deutschland …', 'По сравнению с Германией …')}
${pair('Das finde ich gut / schwierig, weil …', 'Мне это нравится / кажется трудным, потому что …')}
<h3>Teil 3 · vorschlagen</h3>
${pair('Ich schlage vor, dass wir …', 'Я предлагаю, чтобы мы …')}
${pair('Wir könnten … / Wir sollten …', 'Мы могли бы … / Нам стоит …')}
${pair('Wie wäre es, wenn wir …?', 'Как насчёт того, чтобы …?')}
${pair('Was meinst du? / Was denkst du?', 'Как ты считаешь? / Что ты думаешь?')}
${pair('Hast du am Samstag Zeit? Wann passt es dir?', 'У тебя есть время в субботу? Когда тебе удобно?')}
${pair('Kannst du … besorgen? Ich kümmere mich um …', 'Можешь купить …? Я займусь …')}
<h3>Teil 3 · zustimmen und ablehnen</h3>
${pair('Gute Idee! / Einverstanden. / Das machen wir so.', 'Хорошая идея! / Согласен (согласна). / Так и сделаем.')}
${pair('Da hast du recht.', 'Тут ты прав(а).')}
${pair('Das finde ich nicht so gut, weil …', 'Мне это не очень нравится, потому что …')}
${pair('Vielleicht ist es besser, wenn wir …', 'Может быть, лучше, если мы …')}
${pair('Das ist leider zu teuer. Ich habe eine andere Idee: …', 'К сожалению, это слишком дорого. У меня другая идея: …')}
${pair('Am Samstag kann ich leider nicht. Geht es auch am Sonntag?', 'В субботу я, к сожалению, не могу. А в воскресенье получится?')}
<h3>Teil 3 · zusammenfassen</h3>
${pair('Also, wir machen es so: …', 'Итак, делаем так: …')}
${pair('Dann ist alles klar: Du … und ich …', 'Тогда всё ясно: ты …, а я …')}
<h3>Wenn etwas nicht klappt</h3>
${pair('Entschuldigung, können Sie das bitte wiederholen?', 'Извините, не могли бы вы повторить?')}
${pair('Ich habe die Frage nicht verstanden.', 'Я не понял(а) вопрос.')}
${pair('Wie sagt man das auf Deutsch? Ich meine …', 'Как это сказать по-немецки? Я имею в виду …')}
${pair('Mir fällt das Wort nicht ein. Das ist eine Sache, mit der man …', 'Не могу вспомнить слово. Это вещь, которой …')}
${pair('Einen Moment bitte, ich überlege.', 'Минутку, я подумаю.')}
${pair('Darf ich kurz etwas sagen?', 'Можно я кое-что скажу?')}`,
  },
];
