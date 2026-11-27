// Рисует значок приложения: icon.svg и PNG 192 и 512 — без сторонних библиотек.
// node tools/make-icon.mjs
// Рисунок (два «облачка» разговора) держится в середине квадрата, чтобы пережить круглую обрезку значка на Android.
import { writeFileSync } from 'node:fs';
import { deflateSync, crc32 } from 'node:zlib';

const BG = [0x5a, 0x3d, 0x6b], FG = [0xf4, 0xec, 0xd8], DIM = [0xa7, 0x94, 0xa2]; // DIM — заднее облачко: светлый цвет на 55 %
// фигуры в координатах 512×512, от задней к передней: [цвет, прямоугольник со скруглением | треугольник]
const rr = (x0, y0, x1, y1, r) => (x, y) => {
  if (x < x0 || x > x1 || y < y0 || y > y1) return false;
  const cx = Math.max(x0 + r, Math.min(x1 - r, x)), cy = Math.max(y0 + r, Math.min(y1 - r, y));
  return (x - cx) ** 2 + (y - cy) ** 2 <= r * r;
};
const tri = (ax, ay, bx, by, cx, cy) => (x, y) => {
  const s = (px, py, qx, qy) => (x - qx) * (py - qy) - (px - qx) * (y - qy);
  const d1 = s(ax, ay, bx, by), d2 = s(bx, by, cx, cy), d3 = s(cx, cy, ax, ay);
  return !((d1 < 0 || d2 < 0 || d3 < 0) && (d1 > 0 || d2 > 0 || d3 > 0));
};
const SHAPES = [
  [DIM, rr(226, 226, 410, 356, 28)], [DIM, tri(330, 350, 386, 350, 386, 400)],
  [BG, rr(88, 122, 350, 304, 40)],                                             // просвет между облачками
  [FG, rr(102, 136, 336, 290, 28)], [FG, tri(140, 284, 200, 284, 140, 338)],
  [BG, rr(140, 180, 298, 196, 8)], [BG, rr(140, 216, 252, 232, 8)],            // строки текста
];

function png(n) {
  const SS = 4, raw = Buffer.alloc(n * (n * 3 + 1));
  for (let y = 0; y < n; y++) {
    raw[y * (n * 3 + 1)] = 0; // фильтр строки: нет
    for (let x = 0; x < n; x++) {
      const acc = [0, 0, 0];
      for (let j = 0; j < SS; j++) for (let i = 0; i < SS; i++) { // сглаживание: 16 проб на точку
        const px = (x + (i + 0.5) / SS) * 512 / n, py = (y + (j + 0.5) / SS) * 512 / n;
        let c = BG;
        for (const [col, hit] of SHAPES) if (hit(px, py)) c = col;
        acc[0] += c[0]; acc[1] += c[1]; acc[2] += c[2];
      }
      const o = y * (n * 3 + 1) + 1 + x * 3;
      raw[o] = Math.round(acc[0] / SS / SS); raw[o + 1] = Math.round(acc[1] / SS / SS); raw[o + 2] = Math.round(acc[2] / SS / SS);
    }
  }
  const chunk = (type, data) => {
    const body = Buffer.concat([Buffer.from(type), data]), out = Buffer.alloc(body.length + 8);
    out.writeUInt32BE(data.length, 0); body.copy(out, 4); out.writeUInt32BE(crc32(body) >>> 0, body.length + 4);
    return out;
  };
  const head = Buffer.alloc(13); head.writeUInt32BE(n, 0); head.writeUInt32BE(n, 4); head[8] = 8; head[9] = 2; // 8 бит, RGB
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', head), chunk('IDAT', deflateSync(raw, { level: 9 })), chunk('IEND', Buffer.alloc(0))]);
}

const hex = c => '#' + c.map(v => v.toString(16).padStart(2, '0')).join('');
const dir = new URL('../', import.meta.url);
writeFileSync(new URL('icon.svg', dir), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<rect width="512" height="512" fill="${hex(BG)}"/>
<rect x="226" y="226" width="184" height="130" rx="28" fill="${hex(DIM)}"/><path d="M330 350h56v50z" fill="${hex(DIM)}"/>
<rect x="88" y="122" width="262" height="182" rx="40" fill="${hex(BG)}"/>
<rect x="102" y="136" width="234" height="154" rx="28" fill="${hex(FG)}"/><path d="M140 284h60l-60 54z" fill="${hex(FG)}"/>
<rect x="140" y="180" width="158" height="16" rx="8" fill="${hex(BG)}"/><rect x="140" y="216" width="112" height="16" rx="8" fill="${hex(BG)}"/>
</svg>
`);
for (const n of [192, 512]) { const b = png(n); writeFileSync(new URL(`icon-${n}.png`, dir), b); console.log(`icon-${n}.png: ${b.length} байт`); }
