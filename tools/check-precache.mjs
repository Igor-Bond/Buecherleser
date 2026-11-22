// Сверяет список SHELL в sw.js с файлами проекта: всё, что нужно приложению, должно попадать в офлайн-кеш.
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const sw = readFileSync(join(root, 'sw.js'), 'utf8');
const list = sw.match(/const SHELL = \[([\s\S]*?)\];/)?.[1];
if (!list) { console.error('В sw.js не найден список SHELL'); process.exit(1); }
const shell = new Set([...list.matchAll(/'([^']+)'/g)].map(m => m[1]));

const walk = dir => readdirSync(join(root, dir), { withFileTypes: true }).flatMap(e =>
  e.isDirectory() ? walk(`${dir}/${e.name}`) : [`${dir}/${e.name}`]);
const need = ['index.html', 'manifest.webmanifest', 'icon.svg', 'data/base-de-ru.txt', ...walk('css'), ...walk('js')];

const missing = need.filter(f => !shell.has(f));
const dead = [...shell].filter(f => f !== './' && !existsSync(join(root, f)));
for (const f of missing) console.error('Нет в SHELL: ' + f);
for (const f of dead) console.error('В SHELL есть, а файла нет: ' + f);
if (missing.length || dead.length) process.exit(1);
console.log('Офлайн-кеш в порядке: файлов ' + (shell.size - 1));
