// Прогресс между устройствами: общий «снимок» состояния, его слияние, копия файлом и облако.
//
// В снимок входят место чтения в каждой книге, ответы Lesen, «Мои слова» и оформление.
// Сами книги и словари не входят: они большие, их добавляют на каждом устройстве отдельно,
// а место чтения находит книгу по названию и автору. Ключ ИИ не входит никогда.
//
// Слияние — «новее побеждает» по каждой записи отдельно, поэтому чтение на телефоне
// не затирает слова, сохранённые за компьютером.
import * as DB from './db.js';
import { firebaseConfig } from './firebase.config.js';

const FORMAT = 'buecherleser-state-1';
const hooks = { settings() {}, lesen() {}, changed() {}, status() {} };
export const setHooks = h => Object.assign(hooks, h);

const norm = s => String(s || '').toLowerCase().replace(/\s+/g, ' ').trim();
export const bookKey = b => b.test ? b.id : norm(b.title) + '|' + norm(b.author);
const stamp = v => v.at || v.added || 0;

// ---------- снимок, слияние, применение

export async function collect() {
  const [s, lesen, rows, vocab, gone, away] = await Promise.all([
    DB.get('kv', 'settings'), DB.get('kv', 'lesen'), DB.all('books'), DB.all('vocab'), DB.get('kv', 'gone'), DB.get('kv', 'cloudBooks')]);
  const books = { ...away };
  for (const b of rows) {
    if (b.pos) books[bookKey(b)] = { title: b.title, author: b.author || '', pos: b.pos, progress: b.progress || 0, opened: b.opened || 0 };
  }
  const { key, at, ...v } = s || {};
  return {
    format: FORMAT,
    settings: s ? { at: at || 0, v } : null,
    lesen: lesen || {},
    books,
    vocab: Object.fromEntries(vocab.map(x => [x.id, x])),
    gone: gone || {},
  };
}

export function merge(a, b) {
  const pick = (x, y, t) => !x ? y : !y ? x : t(y) > t(x) ? y : x;
  const each = (x = {}, y = {}, t) => {
    const out = {};
    for (const k of new Set([...Object.keys(x), ...Object.keys(y)])) out[k] = pick(x[k], y[k], t);
    return out;
  };
  const gone = each(a.gone, b.gone, v => v);
  const vocab = each(a.vocab, b.vocab, stamp);
  for (const id of Object.keys(vocab)) if ((gone[id] || 0) >= stamp(vocab[id])) delete vocab[id];
  for (const id of Object.keys(gone)) if (vocab[id]) delete gone[id];
  return {
    format: FORMAT,
    settings: pick(a.settings, b.settings, v => v.at || 0),
    lesen: each(a.lesen, b.lesen, v => v.at || 0),
    books: each(a.books, b.books, v => v.opened || 0),
    vocab, gone,
  };
}

// Одинаковый вид для сравнения: ключи по алфавиту
const canon = v => Array.isArray(v) ? v.map(canon)
  : v && typeof v === 'object' ? Object.fromEntries(Object.keys(v).sort().map(k => [k, canon(v[k])])) : v;
const same = (a, b) => JSON.stringify(canon(a)) === JSON.stringify(canon(b));

async function apply(st) {
  if (st.settings) {
    const old = (await DB.get('kv', 'settings')) || {};
    const next = { ...old, ...st.settings.v, look: { ...old.look, ...st.settings.v.look }, key: old.key || '', at: st.settings.at };
    await DB.put('kv', next, 'settings');
    hooks.settings(next);
  }
  await DB.put('kv', st.lesen, 'lesen');
  hooks.lesen(st.lesen);

  const rows = await DB.all('books'), away = { ...st.books };
  for (const b of rows) {
    const k = bookKey(b), r = st.books[k];
    delete away[k];
    if (r && (r.opened || 0) > (b.opened || 0)) await DB.put('books', { ...b, pos: r.pos, progress: r.progress, opened: r.opened });
  }
  await DB.put('kv', away, 'cloudBooks');

  const have = new Set((await DB.all('vocab')).map(v => v.id));
  await DB.tx('vocab', 'readwrite', s => {
    for (const v of Object.values(st.vocab)) s.put(v);
    for (const id of have) if (!st.vocab[id]) s.delete(id);
  });
  await DB.put('kv', st.gone, 'gone');
  hooks.changed();
}

// Книга, добавленная на этом устройстве позже: место чтения могло уже прийти с другого
export async function adopt(meta) {
  const away = (await DB.get('kv', 'cloudBooks')) || {}, r = away[bookKey(meta)];
  if (!r) return meta;
  delete away[bookKey(meta)];
  await DB.put('kv', away, 'cloudBooks');
  return { ...meta, pos: r.pos, progress: r.progress, opened: r.opened };
}

export async function forget(id) {
  const gone = (await DB.get('kv', 'gone')) || {};
  gone[id] = Date.now();
  await DB.put('kv', gone, 'gone');
}

// ---------- копия файлом

export async function backupText() {
  return JSON.stringify({ ...(await collect()), saved: new Date().toISOString() }, null, 1);
}
export async function restore(text) {
  const j = JSON.parse(text);
  if (j?.format !== FORMAT) throw new Error('Это не файл копии Bücherleser');
  await apply(merge(await collect(), j));
  touch();
  return { words: Object.keys(j.vocab || {}).length, books: Object.keys(j.books || {}).length };
}

// ---------- вход через Google

let sdk = null, auth = null, user = null, ready = null;
export const cloud = {
  get user() { return user; },
  configured: !!firebaseConfig?.apiKey,
  last: 0, error: '',
};

function init() {
  return ready ??= (async () => {
    const [a, b] = await Promise.all([import('../vendor/firebase/firebase-app.js'), import('../vendor/firebase/firebase-auth.js')]);
    sdk = { ...a, ...b };
    auth = sdk.getAuth(sdk.initializeApp(firebaseConfig));
    await sdk.setPersistence(auth, sdk.browserLocalPersistence);
    await sdk.getRedirectResult(auth).catch(() => null);
    await new Promise(res => { const off = sdk.onAuthStateChanged(auth, u => { user = u; off(); res(); }); });
  })().catch(err => { ready = null; throw err; });
}
// SDK весит четверть мегабайта, а разрешение на всплывающее окно живёт доли секунды после нажатия:
// поэтому он подгружается заранее, при показе экрана со входом
export const warmUp = () => { if (cloud.configured) init().catch(() => {}); };

// При запуске: SDK поднимается только у тех, кто уже входил
export async function resume() {
  if (!cloud.configured || !(await DB.get('kv', 'cloud'))?.on) return;
  try { await init(); } catch { return; }
  hooks.status();
  if (user) sync();
}

const NO_POPUP = ['auth/popup-blocked', 'auth/operation-not-supported-in-this-environment', 'auth/cancelled-popup-request'];
const AUTH_ERR = {
  'auth/popup-closed-by-user': 'Окно входа закрыто — вход не завершён',
  'auth/network-request-failed': 'Нет связи с Google',
  'auth/unauthorized-domain': `Адрес ${location.hostname} не разрешён в проекте Firebase (Authentication → Settings → Authorized domains)`,
  'auth/operation-not-allowed': 'Вход через Google выключен в проекте Firebase',
};

export async function signIn() {
  await init();
  const provider = new sdk.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  await DB.put('kv', { on: true }, 'cloud');
  try {
    user = (await sdk.signInWithPopup(auth, provider)).user;
  } catch (e) {
    // В установленном приложении всплывающих окон нет — уходим на вход переходом, страница вернётся сама
    if (NO_POPUP.includes(e?.code)) return sdk.signInWithRedirect(auth, provider);
    throw new Error(AUTH_ERR[e?.code] || e?.message || 'Не удалось войти');
  }
  hooks.status();
  await sync();
}

export async function signOut() {
  await DB.put('kv', { on: false }, 'cloud');
  if (auth) await sdk.signOut(auth);
  user = null; cloud.error = '';
  hooks.status();
}

// ---------- облако: Firestore через REST, чтобы не тянуть его SDK (почти 700 КБ)
//
// Снимок лежит в users/{uid}/buecherleser: документ main с числом частей и части p0, p1, …
// Документ Firestore ограничен мегабайтом, а «Мои слова» с ИИ-разборами могут вырасти больше.

const CHUNK = 250000; // знаков; кириллица занимает до трёх байт на знак
const base = () => `projects/${firebaseConfig.projectId}/databases/(default)/documents`;
const dir = () => `${base()}/users/${user.uid}/buecherleser`;

async function api(path, opts = {}) {
  const r = await fetch('https://firestore.googleapis.com/v1/' + path, {
    ...opts, headers: { Authorization: 'Bearer ' + await user.getIdToken(), 'Content-Type': 'application/json' },
  });
  if (r.status === 404) return null;
  if (!r.ok) {
    const msg = (await r.json().catch(() => null))?.error?.message;
    throw new Error(r.status === 403 ? 'Доступ запрещён правилами Firestore' : r.status === 429 ? 'Исчерпана дневная квота Firestore' : msg || 'Ошибка облака ' + r.status);
  }
  return r.json();
}

async function pull() {
  const main = await api(dir() + '/main');
  const n = +(main?.fields?.n?.integerValue || 0);
  if (!n) return { state: null, n: 0 };
  const parts = await Promise.all([...Array(n).keys()].map(i => api(`${dir()}/p${i}`)));
  if (parts.some(p => !p)) throw new Error('Копия в облаке повреждена: не хватает части');
  return { state: JSON.parse(parts.map(p => p.fields.s.stringValue).join('')), n };
}

async function push(state, oldN) {
  const text = JSON.stringify(state), writes = [];
  const n = Math.max(1, Math.ceil(text.length / CHUNK));
  for (let i = 0; i < n; i++) writes.push({ update: { name: `${dir()}/p${i}`, fields: { s: { stringValue: text.slice(i * CHUNK, (i + 1) * CHUNK) } } } });
  for (let i = n; i < oldN; i++) writes.push({ delete: `${dir()}/p${i}` });
  writes.push({ update: { name: dir() + '/main', fields: { n: { integerValue: String(n) }, at: { integerValue: String(Date.now()) } } } });
  await api(base() + ':commit', { method: 'POST', body: JSON.stringify({ writes }) });
}

let busy = null, again = false;
export function sync() {
  if (!user) return Promise.resolve(false);
  if (busy) { again = true; return busy; }
  busy = (async () => {
    try {
      const local = await collect(), { state: remote, n } = await pull();
      const merged = remote ? merge(local, remote) : local;
      if (!same(merged, local)) await apply(merged);
      if (!remote || !same(merged, remote)) await push(merged, n);
      cloud.last = Date.now(); cloud.error = '';
      return true;
    } catch (err) {
      cloud.error = navigator.onLine === false ? 'Нет сети — синхронизация подождёт' : err.message;
      return false;
    } finally {
      busy = null; hooks.status();
      if (again) { again = false; touch(); }
    }
  })();
  return busy;
}

// Что-то изменилось на устройстве: отправить, когда человек остановится
let timer;
export function touch(ms = 20000) {
  if (!user) return;
  clearTimeout(timer); timer = setTimeout(sync, ms);
}
document.addEventListener('visibilitychange', () => {
  if (!user) return;
  clearTimeout(timer);
  // Уходя — отправить (после того как допишутся отложенные сохранения), возвращаясь — забрать
  if (document.hidden) timer = setTimeout(sync, 900); else sync();
});
