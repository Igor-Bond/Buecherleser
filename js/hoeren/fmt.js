// Задания по аудированию (Hören) уровня A2–B1 в формате экзамена DTZ: 4 части, 20 заданий, около 25 минут.
// Все тексты написаны специально для Bücherleser. Звука в файлах нет — тексты читает синтез речи (js/speak.js).
// Формат: части → группы (текст для прослушивания + задания). audio — реплики [[код, текст], …]: код f1/m1/f2… — пол и номер
// говорящего; who — подписи говорящих в расшифровке. У задания: n — номер, q — вопрос, opts — варианты, a — индекс верного.
// Числа и время пишутся так, чтобы синтезатор прочёл их правильно: «14 Uhr 30», «12 Euro 50», без сокращений.

export const RF = ['richtig', 'falsch'];
export const AF = ['a', 'b', 'c', 'd', 'e', 'f'];

const P = {
  1: ['Teil 1', 'Sie hören vier Ansagen. Zu jeder Ansage gibt es eine Aufgabe. Welche Lösung (a, b oder c) passt am besten?', 'Четыре объявления или сообщения на автоответчике. К каждому — одно задание.', 'Ansage'],
  2: ['Teil 2', 'Sie hören fünf Informationen aus dem Radio. Zu jeder Information gibt es eine Aufgabe. Welche Lösung (a, b oder c) passt am besten?', 'Пять сообщений по радио: погода, транспорт, реклама, объявления.', 'Radio'],
  3: ['Teil 3', 'Sie hören vier Gespräche. Zu jedem Gespräch gibt es zwei Aufgaben. Entscheiden Sie zuerst, ob die Aussage richtig oder falsch ist, und wählen Sie dann a, b oder c.', 'Четыре разговора, к каждому два задания: верно/неверно и выбор a, b или c.', 'Gespräch'],
  4: ['Teil 4', 'Sie hören Aussagen zu einem Thema. Welcher der Sätze a–f passt zu den Aussagen 18–20? Lesen Sie zuerst die Sätze a–f. Hören Sie dann das Beispiel und die drei Aussagen.', 'Высказывания на одну тему: к каждому подберите одно из утверждений a–f. Одно утверждение занято примером, два лишние.', 'Aussage'],
};
// В Teil 4: extra.topic — тема, extra.stmts — шесть утверждений a–f; первая группа — пример (ex — индекс его утверждения, заданий нет)
export const part = (n, groups, extra = {}) => ({ title: P[n][0], instr: P[n][1], ru: P[n][2], label: P[n][3], groups, ...(n === 4 && { compact: true }), ...extra });
