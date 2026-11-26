// Обложка для книги без своей картинки: рисуется из названия, поэтому не хранится и одинакова на всех устройствах.
const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

const PALETTE = ['#2f4a3c', '#27405e', '#6b2f33', '#7a5520', '#1f5560', '#4a3558', '#3d4a2a', '#5a3a2a'];
const INK = '#efe6cf';

// Рисунки в поле 80×80 с центром (100, 96)
const MOTIF = {
  bolt: '<polygon points="110,56 80,102 99,102 89,140 122,89 103,89" fill="INK" stroke="none"/>',
  house: '<path d="M62 100 100 66 138 100"/><path d="M73 92V134H127V92"/><rect x="93" y="110" width="14" height="24"/><rect x="80" y="100" width="9" height="9"/><rect x="111" y="100" width="9" height="9"/>',
  cup: '<path d="M72 88H122V112a18 18 0 0 1-18 18H90a18 18 0 0 1-18-18Z"/><path d="M122 94h5a9 9 0 0 1 0 18h-5"/><path d="M87 78q-5-7 0-14M99 78q-5-7 0-14M111 78q-5-7 0-14"/><path d="M66 136H128"/>',
  plug: '<rect x="82" y="84" width="36" height="28" rx="6"/><path d="M92 68V84M108 68V84"/><path d="M100 112v10q0 14 14 14h14"/>',
  door: '<rect x="80" y="60" width="40" height="76" rx="2"/><rect x="87" y="68" width="26" height="22"/><circle cx="112" cy="102" r="2.5" fill="INK"/><path d="M70 136H130"/>',
  rings: '<circle cx="100" cy="96" r="34"/><circle cx="100" cy="96" r="22"/><circle cx="100" cy="96" r="5" fill="INK"/>',
  diamond: '<path d="M100 58 138 96 100 134 62 96Z"/><path d="M100 74 122 96 100 118 78 96Z"/>',
  book: '<path d="M100 74c-10-8-24-9-36-6v52c12-3 26-2 36 6 10-8 24-9 36-6V68c-12-3-26-2-36 6Z"/><path d="M100 74v52"/>',
  checks: '<path d="M68 74l5 5 9-10M68 96l5 5 9-10M68 118l5 5 9-10"/><path d="M94 75H132M94 97H132M94 119H122"/>',
  news: '<rect x="66" y="64" width="68" height="66" rx="3"/><path d="M77 78H123M77 92H98M77 104H98M77 116H98"/><rect x="106" y="92" width="17" height="24"/>',
  watch: '<circle cx="100" cy="102" r="31"/><path d="M100 102V83M100 102l13 8"/><path d="M91 60H109M100 60V71"/>',
  ear: '<path d="M70 106V98a30 30 0 0 1 60 0v8"/><rect x="62" y="104" width="16" height="28" rx="6"/><rect x="122" y="104" width="16" height="28" rx="6"/><path d="M93 112v12M100 106v24M107 112v12"/>',
  talk: '<path d="M64 70h50a8 8 0 0 1 8 8v24a8 8 0 0 1-8 8H88l-14 12v-12h-10a8 8 0 0 1-8-8V78a8 8 0 0 1 8-8Z"/><path d="M128 92h8a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8h-6v10l-12-10h-18"/><path d="M72 86h34M72 96h22"/>',
  leaf: '<path d="M68 128c0-40 24-64 64-64 0 40-24 64-64 64Z"/><path d="M68 128 114 82"/>',
};
const BY_WORD = [
  [/^sprechen\b/i, 'talk', '#5a3d6b'],
  [/^hören\b.*prüfungsniveau/i, 'ear', '#2c3a5e'],
  [/^hören\b/i, 'ear', '#1f4f5c'],
  [/prüfungstraining/i, 'checks', '#a8501f'],
  [/aktuelle themen/i, 'news', '#8a3b2c'],
  [/prüfungsniveau/i, 'watch', '#5e2c3c'],
  [/strom|elektrotechnik|energie|blitz/i, 'bolt', '#27405e'],
  [/kollege|elektriker|werkstatt|arbeit/i, 'plug', '#7a5520'],
  [/haus|wohnung|hof\b/i, 'house', '#6b2f33'],
  [/feierabend|frühstück|kaffee|küche/i, 'cup', '#1f5560'],
  [/nachbar|tür|umzug/i, 'door', '#2f4a3c'],
];
const FREE = ['rings', 'diamond', 'book', 'leaf'];

function wrap(text, width, max) {
  const lines = [];
  for (const w of text.split(/\s+/).filter(Boolean)) {
    const last = lines[lines.length - 1];
    if (last && (last + ' ' + w).length <= width) lines[lines.length - 1] = last + ' ' + w;
    else lines.push(w);
  }
  if (lines.length > max) { lines.length = max; lines[max - 1] = lines[max - 1].replace(/[.,;:]?$/, '…'); }
  return lines;
}

export function coverSvg(title = '', author = '') {
  let h = 0;
  for (const c of title) h = (h * 31 + c.codePointAt(0)) >>> 0;
  const hit = BY_WORD.find(([re]) => re.test(title));
  const motif = hit ? hit[1] : FREE[h % FREE.length], bg = hit ? hit[2] : PALETTE[(h >>> 3) % PALETTE.length];
  // «Название. Подзаголовок» → крупная строка и мелкая
  const cut = title.search(/[.:—–]\s/);
  const main = (cut > 3 ? title.slice(0, cut) : title).trim(), sub = cut > 3 ? title.slice(cut + 1).replace(/^[\s—–]+/, '').trim() : '';
  const big = main.length <= 26;
  const mainLines = wrap(main, big ? 13 : 17, big ? 3 : 4), fs = big ? 19 : 15;
  const subLines = sub ? wrap(sub, 27, 3) : [];
  let y = 178, t = '';
  for (const l of mainLines) { t += `<text x="100" y="${y}" font-size="${fs}" font-weight="700">${esc(l)}</text>`; y += fs * 1.22; }
  y += 4;
  for (const l of subLines) { t += `<text x="100" y="${y}" font-size="10.5" opacity=".82">${esc(l)}</text>`; y += 13.5; }
  const by = author && author !== 'Bücherleser' ? `<text x="100" y="283" font-size="9.5" opacity=".7" letter-spacing=".6">${esc(author.length > 30 ? author.slice(0, 29) + '…' : author)}</text>` : '';
  return `<svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(title)}">
<rect width="200" height="300" fill="${bg}"/>
<rect x="9" y="9" width="182" height="282" fill="none" stroke="${INK}" stroke-opacity=".45"/>
<g fill="none" stroke="${INK}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">${MOTIF[motif].replaceAll('INK', INK)}</g>
<path d="M78 154H122" stroke="${INK}" stroke-opacity=".5"/>
<g fill="${INK}" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif">${t}${by}</g>
</svg>`;
}
