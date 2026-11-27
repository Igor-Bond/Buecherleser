// Сверяет списки SHELL в sw.js и sprechen/sw.js с файлами проекта: всё, что нужно приложению, должно попадать в его офлайн-кеш.
// Приложений два: Bücherleser (корень) и Sprechen B1 (папка sprechen/, общие модули берёт из ../js).
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { dirname, join, posix } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const walk = dir => readdirSync(join(root, dir), { withFileTypes: true }).flatMap(e =>
  e.isDirectory() ? walk(`${dir}/${e.name}`) : [`${dir}/${e.name}`]);

// модули, которые нужны только приложению Sprechen
const SPRECHEN_ONLY = f => /^js\/(sprechen\.js|trainer\.js|voicein\.js|sprechen\/)/.test(f);
// модули Bücherleser, которыми пользуется и Sprechen
const SHARED = ['js/db.js', 'js/speak.js', 'js/llm.js', 'js/hoeren.js'];

function check(name, swPath, base, need) {
  const sw = readFileSync(join(root, swPath), 'utf8');
  const list = sw.match(/const SHELL = \[([\s\S]*?)\];/)?.[1];
  if (!list) { console.error(`В ${swPath} не найден список SHELL`); return false; }
  // пути в списке — относительно папки приложения; приводим к путям от корня проекта
  const shell = new Set([...list.matchAll(/'([^']+)'/g)].map(m => m[1]).filter(f => f !== './').map(f => posix.normalize(posix.join(base, f))));
  const missing = need.filter(f => !shell.has(f)), dead = [...shell].filter(f => !existsSync(join(root, f)));
  for (const f of missing) console.error(`${name}: нет в SHELL: ${f}`);
  for (const f of dead) console.error(`${name}: в SHELL есть, а файла нет: ${f}`);
  if (!missing.length && !dead.length) console.log(`${name}: офлайн-кеш в порядке, файлов ${shell.size}`);
  return !missing.length && !dead.length;
}

// Каждый import в модулях Sprechen должен вести в файл из его списка — иначе офлайн приложение не запустится
const imports = f => [...readFileSync(join(root, f), 'utf8').matchAll(/^import .* from '(\.[^']+)';/gm)].map(m => posix.normalize(posix.join(posix.dirname(f), m[1])));
const sprechenNeed = [...walk('sprechen').filter(f => !f.endsWith('/sw.js')), ...SHARED, ...walk('js').filter(SPRECHEN_ONLY), ...walk('assets/sprechen')];
const loose = sprechenNeed.filter(f => f.endsWith('.js')).flatMap(f => imports(f).filter(i => !sprechenNeed.includes(i)).map(i => `${f} → ${i}`));
for (const l of loose) console.error('Sprechen: модуль тянет файл не из своего списка: ' + l);

const ok = [
  check('Bücherleser', 'sw.js', '', ['index.html', 'manifest.webmanifest', 'icon.svg', 'data/base-de-ru.txt', ...walk('css'), ...walk('js').filter(f => !SPRECHEN_ONLY(f)), ...walk('books')]),
  check('Sprechen', 'sprechen/sw.js', 'sprechen', sprechenNeed),
].every(Boolean);
process.exit(ok && !loose.length ? 0 : 1);
