// Все варианты Hören B1. Новый вариант — отдельный файл hNN.js, добавляется сюда и в SHELL в sw.js.
import h01 from './h01.js';
import h02 from './h02.js';
import h03 from './h03.js';
import h04 from './h04.js';
import h05 from './h05.js';
import h06 from './h06.js';
import h07 from './h07.js';
import h08 from './h08.js';
import h11 from './h11.js';
import h12 from './h12.js';
import h13 from './h13.js';
import h14 from './h14.js';
import h15 from './h15.js';
import h16 from './h16.js';
import h17 from './h17.js';
import h18 from './h18.js';

// Вторая книга — сложнее: тексты длиннее и плотнее, варианты ответа пересказывают текст другими словами (h11–h18)
export const HOEREN_B1_2 = { title: 'Hören B1 — Prüfungsniveau', minutes: 25, variants: [h11, h12, h13, h14, h15, h16, h17, h18] };
export const HOEREN_B1 = { title: 'Hören B1 — Hörtraining', minutes: 25, variants: [h01, h02, h03, h04, h05, h06, h07, h08] };
