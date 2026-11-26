// Рисунки для Teil 2 вместо фотографий: простые сцены из повседневной жизни. Цвета свои, от темы оформления не зависят.
const SKIN = ['#f2cba8', '#dba77c', '#a8734c', '#7d5130'];
const INK = '#3b3f45';

// Человек анфас; (x, y) — середина ступней, h — рост. cut: не рисовать ноги (сидит за столом или стоит за прилавком)
function fig(x, y, { h = 110, shirt = '#4b7ba8', pants = '#3f4a5a', skin = 0, hair = '#3a2a1e', long = false, cut = false, cap = '' } = {}) {
  const r = h * 0.105, cy = y - h + r, top = cy + r + 2, tw = h * 0.27, th = h * 0.36, s = SKIN[skin];
  let g = '';
  if (!cut) g += `<rect x="${x - tw / 2 + 1}" y="${top + th - 4}" width="${tw / 2 - 2}" height="${y - top - th + 4}" rx="3" fill="${pants}"/><rect x="${x + 1}" y="${top + th - 4}" width="${tw / 2 - 2}" height="${y - top - th + 4}" rx="3" fill="${pants}"/>`;
  g += `<rect x="${x - tw / 2 - 5}" y="${top + 2}" width="6" height="${th * 0.78}" rx="3" fill="${shirt}"/><rect x="${x + tw / 2 - 1}" y="${top + 2}" width="6" height="${th * 0.78}" rx="3" fill="${shirt}"/>`;
  g += `<rect x="${x - tw / 2}" y="${top}" width="${tw}" height="${th}" rx="6" fill="${shirt}"/>`;
  if (long) g += `<rect x="${x - r - 2}" y="${cy - 2}" width="${2 * r + 4}" height="${r * 2.1}" rx="5" fill="${hair}"/>`;
  g += `<circle cx="${x}" cy="${cy}" r="${r}" fill="${s}"/>`;
  g += `<path d="M${x - r - 1} ${cy} a${r + 1} ${r + 1} 0 0 1 ${2 * r + 2} 0 q${-r - 1} ${-r * 0.55} ${-2 * r - 2} 0Z" fill="${hair}"/>`;
  if (cap) g += `<path d="M${x - r - 2} ${cy - 2} a${r + 2} ${r + 2} 0 0 1 ${2 * r + 4} 0Z" fill="${cap}"/>`;
  return g;
}
const rect = (x, y, w, h, fill, rx = 0, extra = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" ${extra}/>`;
const label = (x, y, t, size = 11, fill = INK, w = 600) => `<text x="${x}" y="${y}" font-size="${size}" font-weight="${w}" fill="${fill}" text-anchor="middle" font-family="system-ui, Arial, sans-serif">${t}</text>`;
const room = (wall = '#e9eef1', floor = '#cdbfa6', fy = 196) => rect(0, 0, 400, 250, wall) + rect(0, fy, 400, 250 - fy, floor);
const win = (x, y, w = 70, h = 56) => rect(x, y, w, h, '#bfe0f2', 3, `stroke="#fff" stroke-width="4"`) + `<path d="M${x + w / 2} ${y}V${y + h}M${x} ${y + h / 2}H${x + w}" stroke="#fff" stroke-width="3"/>`;
const clock = (x, y) => `<circle cx="${x}" cy="${y}" r="13" fill="#fff" stroke="${INK}" stroke-width="2"/><path d="M${x} ${y}V${y - 8}M${x} ${y}l6 3" stroke="${INK}" stroke-width="2" stroke-linecap="round"/>`;
const plant = (x, y) => rect(x - 8, y - 16, 16, 16, '#b0683f', 2) + `<path d="M${x} ${y - 16}q-16 -22 -4 -34q6 14 4 34q2 -26 16 -30q2 18 -16 30" fill="#4f8a4a"/>`;

const SCENES = {
  // Семья за ужином
  essen: () => room('#f0e9dc', '#c9b693') + win(34, 40) + rect(300, 30, 60, 84, '#d8c7a3', 3) + rect(308, 38, 44, 30, '#8fb3c7') + rect(308, 76, 44, 30, '#c98f6b')
    + `<path d="M200 0V34" stroke="${INK}" stroke-width="2"/><path d="M178 52a22 20 0 0 1 44 0Z" fill="#e0a43a"/>`
    + fig(96, 250, { h: 150, shirt: '#b5544a', hair: '#5a3a22', long: true, skin: 1, cut: true })
    + fig(168, 250, { h: 118, shirt: '#e3b23c', hair: '#2a1d14', skin: 1, cut: true })
    + fig(236, 250, { h: 124, shirt: '#5a9a7a', hair: '#2a1d14', long: true, skin: 1, cut: true })
    + fig(308, 250, { h: 154, shirt: '#3f6f9c', hair: '#2a1d14', skin: 1, cut: true })
    + rect(40, 176, 320, 14, '#9a6b42', 4) + rect(56, 190, 10, 60, '#7d5433') + rect(334, 190, 10, 60, '#7d5433')
    + [96, 168, 236, 308].map(x => `<ellipse cx="${x}" cy="174" rx="18" ry="5" fill="#fff" stroke="#c9c9c9"/>`).join('')
    + `<ellipse cx="202" cy="166" rx="26" ry="9" fill="#d9d9d9"/><path d="M180 164a22 12 0 0 1 44 0Z" fill="#c9573a"/>` + rect(262, 152, 8, 22, '#9cc7dc', 2) + rect(128, 156, 7, 18, '#9cc7dc', 2),
  // Приёмная врача
  arzt: () => room('#e8f1ee', '#c8cdc9') + rect(250, 20, 130, 30, '#fff', 4, `stroke="#7fb3a2" stroke-width="2"`) + label(315, 40, 'Anmeldung', 14, '#3d7d6a')
    + clock(200, 36) + rect(28, 28, 62, 78, '#fff', 3, `stroke="#c9c9c9"`) + label(59, 50, 'Bitte', 10) + label(59, 64, 'Abstand', 10) + label(59, 78, 'halten', 10)
    + fig(318, 250, { h: 158, shirt: '#ffffff', hair: '#7a4a28', long: true, skin: 0, cut: true })
    + rect(250, 150, 140, 100, '#7fb3a2', 4) + rect(250, 150, 140, 10, '#5f9383') + rect(274, 132, 34, 22, '#3b3f45', 2) + rect(286, 154, 10, 4, '#3b3f45')
    + [44, 100, 156].map(x => rect(x - 22, 150, 44, 46, '#6d8fb0', 5) + rect(x - 22, 190, 44, 10, '#56728e', 3) + rect(x - 20, 200, 5, 28, '#56728e') + rect(x + 15, 200, 5, 28, '#56728e')).join('')
    + fig(44, 228, { h: 118, shirt: '#c96f4a', pants: '#4a4a4a', hair: '#bdbdbd', skin: 0 })
    + fig(100, 228, { h: 112, shirt: '#7a5aa0', pants: '#35405a', hair: '#1f1611', long: true, skin: 2 })
    + fig(138, 228, { h: 62, shirt: '#e3b23c', pants: '#35405a', hair: '#1f1611', skin: 2 })
    + plant(214, 228) + rect(180, 206, 26, 6, '#9a6b42', 2) + rect(184, 201, 18, 5, '#e3e3e3'),
  // Касса в супермаркете
  kasse: () => room('#f3efe6', '#d2cdbf', 204) + [16, 108].map(x => rect(x, 30, 80, 104, '#b8a078', 2) + [42, 74, 106].map(y => rect(x + 4, y, 72, 4, '#8d7550')
      + [0, 1, 2, 3].map(i => rect(x + 8 + i * 17, y - 20, 12, 20, ['#c9573a', '#5a9a7a', '#e3b23c', '#4b7ba8'][(i + y) % 4], 2)).join('')).join('')).join('')
    + rect(250, 20, 110, 28, '#c9573a', 4) + label(305, 39, 'Kasse 2', 14, '#fff')
    + fig(318, 250, { h: 156, shirt: '#c9573a', hair: '#3a2a1e', long: true, skin: 2, cut: true })
    + rect(196, 160, 204, 90, '#8a8f96', 4) + rect(196, 160, 204, 12, '#3b3f45') + rect(344, 128, 30, 34, '#3b3f45', 3) + rect(350, 134, 18, 12, '#9fd3a8')
    + rect(212, 146, 16, 16, '#e3b23c', 2) + rect(234, 140, 12, 22, '#9cc7dc', 2) + `<circle cx="264" cy="153" r="8" fill="#c9573a"/><circle cx="282" cy="155" r="6" fill="#6aa84f"/>`
    + fig(150, 236, { h: 138, shirt: '#4b7ba8', pants: '#3f4a5a', hair: '#1f1611', skin: 3 })
    + fig(64, 236, { h: 128, shirt: '#8a6fb0', pants: '#5a4a3a', hair: '#8a5a2b', long: true, skin: 0 })
    + `<path d="M88 176H130l-6 34H94Z" fill="none" stroke="${INK}" stroke-width="3"/><path d="M88 176l-8 -14" stroke="${INK}" stroke-width="3"/><circle cx="98" cy="222" r="5" fill="${INK}"/><circle cx="122" cy="222" r="5" fill="${INK}"/>`
    + rect(98, 182, 10, 22, '#e3b23c', 2) + rect(112, 186, 10, 18, '#c9573a', 2),
  // Автобусная остановка
  bus: () => rect(0, 0, 400, 250, '#cfe6f3') + rect(0, 190, 400, 60, '#8f949a') + rect(0, 178, 400, 14, '#c9c4b8')
    + `<circle cx="352" cy="38" r="18" fill="#f2d24b"/>` + rect(0, 96, 60, 84, '#d7c8ae') + rect(8, 108, 14, 16, '#9cc7dc') + rect(34, 108, 14, 16, '#9cc7dc') + rect(8, 136, 14, 16, '#9cc7dc') + rect(34, 136, 14, 16, '#9cc7dc')
    + rect(196, 84, 204, 98, '#d24a3a', 12) + rect(210, 96, 44, 36, '#bfe0f2', 4) + rect(262, 96, 44, 36, '#bfe0f2', 4) + rect(314, 96, 44, 36, '#bfe0f2', 4) + rect(366, 96, 34, 70, '#b9404a', 3)
    + rect(196, 140, 204, 6, '#fff') + label(260, 164, 'Linie 12 · Hauptbahnhof', 11, '#fff') + `<circle cx="236" cy="184" r="15" fill="${INK}"/><circle cx="236" cy="184" r="6" fill="#bbb"/><circle cx="350" cy="184" r="15" fill="${INK}"/><circle cx="350" cy="184" r="6" fill="#bbb"/>`
    + rect(70, 92, 110, 8, '#56728e', 3) + rect(74, 100, 5, 82, '#56728e') + rect(171, 100, 5, 82, '#56728e') + rect(82, 104, 86, 60, '#e6f0f5', 2, 'opacity=".8"')
    + `<circle cx="186" cy="70" r="14" fill="#f2d24b" stroke="#3d7d3d" stroke-width="3"/>` + label(186, 75, 'H', 15, '#3d7d3d', 800) + rect(184, 84, 4, 98, '#56728e')
    + fig(100, 190, { h: 104, shirt: '#5a9a7a', pants: '#3f4a5a', hair: '#bdbdbd', skin: 0 })
    + fig(134, 190, { h: 112, shirt: '#e3b23c', pants: '#35405a', hair: '#1f1611', long: true, skin: 2 }) + rect(126, 138, 9, 14, '#3b3f45', 2)
    + fig(28, 206, { h: 118, shirt: '#7a5aa0', pants: '#5a4a3a', hair: '#5a3a22', skin: 1 }) + rect(38, 150, 18, 26, '#b5544a', 4),
  // Рабочее место, коллеги
  arbeit: () => room('#e9edf2', '#bfc5cc') + win(20, 28, 84, 60) + rect(140, 24, 150, 84, '#fff', 3, `stroke="#9aa3ad" stroke-width="3"`) + label(215, 46, 'Wochenplan', 12)
    + [58, 72, 86].map((y, i) => rect(152, y, [110, 80, 96][i], 5, ['#4b7ba8', '#c9573a', '#5a9a7a'][i], 2)).join('') + clock(350, 40)
    + fig(340, 232, { h: 150, shirt: '#3f6f9c', pants: '#2f3947', hair: '#1f1611', skin: 3 }) + rect(314, 138, 24, 30, '#fff', 2, `stroke="#9aa3ad"`)
    + fig(88, 250, { h: 146, shirt: '#b5544a', hair: '#8a5a2b', long: true, skin: 0, cut: true })
    + fig(204, 250, { h: 150, shirt: '#5a9a7a', hair: '#3a2a1e', skin: 1, cut: true })
    + rect(30, 178, 250, 12, '#9a6b42', 3) + rect(40, 190, 8, 60, '#7d5433') + rect(262, 190, 8, 60, '#7d5433')
    + rect(116, 140, 50, 34, '#3b3f45', 3) + rect(137, 174, 8, 5, '#3b3f45') + rect(232, 140, 50, 34, '#3b3f45', 3) + rect(253, 174, 8, 5, '#3b3f45')
    + rect(44, 164, 14, 14, '#fff', 2, `stroke="#9aa3ad"`) + rect(168, 170, 24, 8, '#e3b23c', 2),
  // Курс немецкого
  kurs: () => room('#eef0e6', '#c9bfa8') + rect(120, 22, 200, 96, '#2f5d4a', 4, `stroke="#8d7550" stroke-width="5"`) + label(220, 58, 'Guten Tag!', 18, '#fff') + label(220, 84, 'Wie geht es Ihnen?', 13, '#dfeee6', 500)
    + win(20, 34, 66, 60) + fig(350, 226, { h: 150, shirt: '#b5544a', pants: '#3f4a5a', hair: '#5a3a22', long: true, skin: 0 })
    + fig(70, 250, { h: 128, shirt: '#4b7ba8', hair: '#1f1611', skin: 2, cut: true })
    + fig(146, 250, { h: 124, shirt: '#e3b23c', hair: '#1f1611', long: true, skin: 3, cut: true })
    + fig(222, 250, { h: 130, shirt: '#7a5aa0', hair: '#bdbdbd', skin: 0, cut: true })
    + fig(292, 250, { h: 122, shirt: '#5a9a7a', hair: '#3a2a1e', long: true, skin: 1, cut: true })
    + rect(30, 196, 300, 12, '#b08a5a', 3) + rect(38, 208, 8, 42, '#8d6b40') + rect(314, 208, 8, 42, '#8d6b40')
    + [70, 146, 222, 292].map((x, i) => rect(x - 16, 188, 32, 8, ['#fff', '#fff', '#c9573a', '#fff'][i], 1, `stroke="#aaa"`)).join(''),
  // Детская площадка
  spielplatz: () => rect(0, 0, 400, 250, '#cfe9f5') + rect(0, 170, 400, 80, '#8fbf6f') + `<ellipse cx="200" cy="214" rx="120" ry="24" fill="#e6d3a1"/>` + `<circle cx="50" cy="40" r="20" fill="#f2d24b"/>`
    + rect(338, 96, 12, 86, '#7d5433') + `<circle cx="344" cy="78" r="38" fill="#4f8a4a"/><circle cx="318" cy="98" r="22" fill="#5b9a55"/>`
    + `<path d="M70 190L96 70M150 190L124 70M96 70H124" stroke="#b5544a" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M102 72V150M118 72V150" stroke="${INK}" stroke-width="2"/>` + rect(98, 150, 24, 6, '#3b3f45', 2)
    + fig(110, 152, { h: 58, shirt: '#e3b23c', pants: '#35405a', hair: '#1f1611', long: true, skin: 2 })
    + rect(206, 92, 8, 96, '#56728e') + rect(244, 92, 8, 96, '#56728e') + rect(202, 88, 54, 8, '#56728e', 3) + `<path d="M252 100L310 196H286L240 118Z" fill="#e3b23c"/>` + [112, 132, 152, 172].map(y => rect(214, y, 30, 4, '#56728e')).join('')
    + fig(230, 90, { h: 54, shirt: '#c9573a', pants: '#35405a', hair: '#5a3a22', skin: 0 })
    + rect(20, 196, 80, 8, '#9a6b42', 3) + rect(20, 176, 80, 6, '#9a6b42', 3) + rect(28, 204, 6, 22, '#7d5433') + rect(86, 204, 6, 22, '#7d5433')
    + fig(42, 226, { h: 112, shirt: '#7a5aa0', pants: '#3f4a5a', hair: '#3a2a1e', long: true, skin: 1 }) + fig(78, 226, { h: 116, shirt: '#3f6f9c', pants: '#2f3947', hair: '#1f1611', skin: 1 })
    + `<circle cx="176" cy="208" r="9" fill="#c9573a"/><path d="M168 208h16" stroke="#fff" stroke-width="2"/>`,
  // Переезд
  umzug: () => rect(0, 0, 400, 250, '#d8ebf5') + rect(0, 200, 400, 50, '#a9aeb3') + rect(0, 30, 170, 172, '#e0cfae') + rect(0, 22, 170, 12, '#b5544a')
    + rect(20, 52, 40, 44, '#bfe0f2', 2, `stroke="#fff" stroke-width="4"`) + rect(104, 52, 40, 44, '#bfe0f2', 2, `stroke="#fff" stroke-width="4"`) + rect(66, 122, 44, 80, '#7d5433', 3) + `<circle cx="102" cy="164" r="3" fill="#e3b23c"/>` + label(88, 116, 'Nr. 14', 10)
    + rect(250, 96, 150, 96, '#f4f4f4', 6, `stroke="#9aa3ad" stroke-width="2"`) + rect(216, 126, 40, 66, '#3f6f9c', 6) + rect(222, 134, 26, 24, '#bfe0f2', 3) + label(326, 150, 'Umzüge Berger', 13, '#3f6f9c')
    + `<circle cx="250" cy="198" r="15" fill="${INK}"/><circle cx="250" cy="198" r="6" fill="#bbb"/><circle cx="360" cy="198" r="15" fill="${INK}"/><circle cx="360" cy="198" r="6" fill="#bbb"/>`
    + fig(150, 232, { h: 132, shirt: '#5a9a7a', pants: '#3f4a5a', hair: '#1f1611', skin: 2 }) + fig(214, 232, { h: 126, shirt: '#e3b23c', pants: '#35405a', hair: '#8a5a2b', long: true, skin: 0 })
    + rect(140, 148, 86, 34, '#c8a26a', 3, `stroke="#8d6b40" stroke-width="2"`) + `<path d="M140 160H226" stroke="#8d6b40" stroke-width="2"/>` + label(183, 176, 'Küche', 10, '#5a4326')
    + rect(18, 204, 40, 34, '#c8a26a', 2, `stroke="#8d6b40" stroke-width="2"`) + rect(30, 174, 34, 30, '#c8a26a', 2, `stroke="#8d6b40" stroke-width="2"`) + label(47, 194, 'Bücher', 9, '#5a4326') + plant(84, 238),
};

export const SCENE_IDS = Object.keys(SCENES);
export const scene = id => SCENES[id] ? `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bild zur Aufgabe">${SCENES[id]()}</svg>` : '';
