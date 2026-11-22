// Немецкая морфология: от словоформы к кандидатам начальной формы.
// Кандидаты проверяются по словарю, поэтому правила могут быть «щедрыми».

// Сильные и неправильные глаголы: инфинитив, 3 л. ед. ч., Präteritum, Partizip II, s = sein.
const STRONG_RAW = `
backen bäckt backte gebacken|befehlen befiehlt befahl befohlen|beginnen beginnt begann begonnen
beißen beißt biss gebissen|biegen biegt bog gebogen|bieten bietet bot geboten|binden bindet band gebunden
bitten bittet bat gebeten|blasen bläst blies geblasen|bleiben bleibt blieb geblieben s|braten brät briet gebraten
brechen bricht brach gebrochen|brennen brennt brannte gebrannt|bringen bringt brachte gebracht
denken denkt dachte gedacht|dürfen darf durfte gedurft|empfehlen empfiehlt empfahl empfohlen
essen isst aß gegessen|fahren fährt fuhr gefahren s|fallen fällt fiel gefallen s|fangen fängt fing gefangen
finden findet fand gefunden|fliegen fliegt flog geflogen s|fliehen flieht floh geflohen s
fließen fließt floss geflossen s|fressen frisst fraß gefressen|frieren friert fror gefroren
geben gibt gab gegeben|gehen geht ging gegangen s|gelingen gelingt gelang gelungen s|gelten gilt galt gegolten
genießen genießt genoss genossen|geschehen geschieht geschah geschehen s|gewinnen gewinnt gewann gewonnen
gießen gießt goss gegossen|gleichen gleicht glich geglichen|graben gräbt grub gegraben
greifen greift griff gegriffen|haben hat hatte gehabt|halten hält hielt gehalten|hängen hängt hing gehangen
heben hebt hob gehoben|heißen heißt hieß geheißen|helfen hilft half geholfen|kennen kennt kannte gekannt
klingen klingt klang geklungen|kommen kommt kam gekommen s|können kann konnte gekonnt
kriechen kriecht kroch gekrochen s|laden lädt lud geladen|lassen lässt ließ gelassen|laufen läuft lief gelaufen s
leiden leidet litt gelitten|leihen leiht lieh geliehen|lesen liest las gelesen|liegen liegt lag gelegen
lügen lügt log gelogen|messen misst maß gemessen|mögen mag mochte gemocht|müssen muss musste gemusst
nehmen nimmt nahm genommen|nennen nennt nannte genannt|pfeifen pfeift pfiff gepfiffen|raten rät riet geraten
reißen reißt riss gerissen|reiten reitet ritt geritten s|rennen rennt rannte gerannt s|riechen riecht roch gerochen
rufen ruft rief gerufen|schaffen schafft schuf geschaffen|scheinen scheint schien geschienen
schieben schiebt schob geschoben|schießen schießt schoss geschossen|schlafen schläft schlief geschlafen
schlagen schlägt schlug geschlagen|schließen schließt schloss geschlossen|schneiden schneidet schnitt geschnitten
schreiben schreibt schrieb geschrieben|schreien schreit schrie geschrien|schweigen schweigt schwieg geschwiegen
schwimmen schwimmt schwamm geschwommen s|sehen sieht sah gesehen|sein ist war gewesen s|senden sendet sandte gesandt
singen singt sang gesungen|sinken sinkt sank gesunken s|sitzen sitzt saß gesessen|sollen soll sollte gesollt
sprechen spricht sprach gesprochen|springen springt sprang gesprungen s|stehen steht stand gestanden
stehlen stiehlt stahl gestohlen|steigen steigt stieg gestiegen s|sterben stirbt starb gestorben s
stoßen stößt stieß gestoßen|streiten streitet stritt gestritten|tragen trägt trug getragen
treffen trifft traf getroffen|treiben treibt trieb getrieben|treten tritt trat getreten s
trinken trinkt trank getrunken|tun tut tat getan|vergessen vergisst vergaß vergessen
verlieren verliert verlor verloren|wachsen wächst wuchs gewachsen s|waschen wäscht wusch gewaschen
weisen weist wies gewiesen|wenden wendet wandte gewandt|werben wirbt warb geworben|werden wird wurde geworden s
werfen wirft warf geworfen|wiegen wiegt wog gewogen|wissen weiß wusste gewusst|wollen will wollte gewollt
ziehen zieht zog gezogen|zwingen zwingt zwang gezwungen`;

const EXTRA = {
  sein: 'bin bist sind seid sei seien', haben: 'hast', werden: 'wirst',
  wissen: 'weißt', können: 'kannst', müssen: 'musst', wollen: 'willst',
  sollen: 'sollst', dürfen: 'darfst', mögen: 'magst',
};

export const SEP = ['ab', 'an', 'auf', 'aus', 'bei', 'ein', 'fest', 'fort', 'her', 'hin', 'los', 'mit', 'nach',
  'vor', 'weg', 'weiter', 'zu', 'zurück', 'zusammen', 'um', 'durch', 'über', 'unter', 'wieder', 'herum',
  'heraus', 'herein', 'hinaus', 'hinein', 'herunter', 'hinunter', 'hinauf', 'herauf', 'vorbei', 'entgegen',
  'gegenüber', 'teil', 'statt', 'kennen', 'hervor', 'voraus', 'zurecht', 'empor', 'nieder', 'dar', 'heim',
  'hoch', 'frei', 'herab', 'hinab', 'heran', 'umher', 'hinzu', 'vorüber', 'davon', 'dabei', 'fern',
  'raus', 'rein', 'rauf', 'runter', 'rüber'];
const INSEP_ONLY = new Set(['be', 'ge', 'er', 'ver', 'zer', 'ent', 'emp', 'miss']);
const AMBIG = new Set(['um', 'durch', 'über', 'unter', 'wieder', 'wider', 'hinter']);
export const SEPSET = new Set(SEP);
const PREF = [...new Set([...SEP, ...INSEP_ONLY, ...AMBIG])].sort((a, b) => b.length - a.length);

export const STRONG = new Map();   // инфинитив → {pr3, pt, pp, aux}
const FORMS = new Map();           // словоформа → [{inf, tag}]
const PP_NOGE = new Map();         // причастие без ge- → [инфинитив]

function addForm(form, inf, tag) {
  if (!FORMS.has(form)) FORMS.set(form, []);
  const a = FORMS.get(form);
  if (!a.some(x => x.inf === inf && x.tag === tag)) a.push({ inf, tag });
}
const umlaut = s => {
  const i = Math.max(s.lastIndexOf('a'), s.lastIndexOf('o'), s.lastIndexOf('u'));
  return i < 0 ? s : s.slice(0, i) + { a: 'ä', o: 'ö', u: 'ü' }[s[i]] + s.slice(i + 1);
};

for (const row of STRONG_RAW.split(/[|\n]/)) {
  const [inf, pr3, pt, pp, aux] = row.trim().split(' ');
  if (!pp) continue;
  STRONG.set(inf, { pr3, pt, pp, aux: aux || 'h' });
  const stem = inf.replace(/e?n$/, '');
  if (pr3 !== stem + 't' && pr3 !== stem + 'et') {
    addForm(pr3, inf, 'Präsens');
    const base = pr3.endsWith('t') ? pr3.slice(0, -1) : pr3;
    addForm(base + 'st', inf, 'Präsens');
    addForm(pr3 + 'st', inf, 'Präsens');
    if (pr3.endsWith('t') && base.length > 1) addForm(base, inf, 'Imperativ');
  }
  const ptEnds = pt.endsWith('e') ? ['', 'st', 'n', 't'] : ['', 'st', 'est', 'en', 't', 'et'];
  for (const e of ptEnds) addForm(pt + e, inf, 'Präteritum');
  const k2 = umlaut(pt) + (pt.endsWith('e') ? '' : 'e');
  for (const e of ['', 'st', 'n', 't']) if (!FORMS.has(k2 + e)) addForm(k2 + e, inf, 'Konjunktiv II');
  for (const e of ['', 'e', 'en', 'er', 'es', 'em']) addForm(pp + e, inf, 'Partizip II');
  if (pp.startsWith('ge')) {
    const k = pp.slice(2);
    if (!PP_NOGE.has(k)) PP_NOGE.set(k, []);
    PP_NOGE.get(k).push(inf);
  }
}
for (const [inf, list] of Object.entries(EXTRA)) for (const f of list.split(' ')) addForm(f, inf, 'Präsens');

// Формы сильных глаголов, в том числе с приставками: «verstand» → verstehen, «angekommen» → ankommen.
export function strongForms(w) {
  const out = [], seen = new Set();
  const add = (k, tag) => { if (!seen.has(k + tag)) { seen.add(k + tag); out.push({ k, pos: 'v', tag, strong: true }); } };
  for (const x of FORMS.get(w) || []) add(x.inf, x.tag);
  for (const p of PREF) {
    if (!w.startsWith(p) || w.length < p.length + 2) continue;
    const r = w.slice(p.length);
    for (const x of FORMS.get(r) || []) add(p + x.inf, x.tag);
    if (!SEPSET.has(p) || AMBIG.has(p)) for (const inf of PP_NOGE.get(r) || []) add(p + inf, 'Partizip II');
    if (SEPSET.has(p) && r.startsWith('zu') && STRONG.has(r.slice(2))) add(p + r.slice(2), 'Infinitiv mit zu');
  }
  return out;
}

const deUmlaut = s => {
  const m = s.match(/^(.*)(äu|ä|ö|ü)([^äöü]*)$/);
  return m ? m[1] + { 'äu': 'au', 'ä': 'a', 'ö': 'o', 'ü': 'u' }[m[2]] + m[3] : null;
};

const V_END = [['etest', 'Präteritum'], ['eten', 'Präteritum'], ['etet', 'Präteritum'], ['ete', 'Präteritum'],
  ['test', 'Präteritum'], ['ten', 'Präteritum'], ['tet', 'Präteritum'], ['te', 'Präteritum'],
  ['est', 'Präsens'], ['et', 'Präsens'], ['st', 'Präsens'], ['t', 'Präsens'], ['e', 'Präsens'], ['end', 'Partizip I']];
const N_END = ['nen', 'ern', 'en', 'er', 'es', 'se', 'e', 'n', 's'];
const A_END = ['en', 'em', 'er', 'es', 'e'];

// Правильные формы: окончания глаголов, существительных, прилагательных.
export function regular(w) {
  const out = [], seen = new Set();
  const push = (k, pos, tag, du = false) => {
    if (!k || k.length < 2 || k === w || seen.has(k + pos)) return;
    seen.add(k + pos); out.push({ k, pos, tag, du });
  };
  // глаголы
  for (const [s, tag] of V_END) {
    if (!w.endsWith(s) || w.length - s.length < 2) continue;
    const st = w.slice(0, -s.length);
    push(st + 'en', 'v', tag);
    if (/(el|er)$/.test(st)) push(st + 'n', 'v', tag);
  }
  push(w + 'en', 'v', 'Imperativ');
  let m = w.match(/^ge(.{2,}?)(e?t)$/);
  if (m) { push(m[1] + 'en', 'v', 'Partizip II'); push(m[1] + 'n', 'v', 'Partizip II'); }
  for (const p of SEP) {
    if (!w.startsWith(p)) continue;
    const r = w.slice(p.length);
    m = r.match(/^ge(.{2,}?)(e?t)$/);
    if (m) { push(p + m[1] + 'en', 'v', 'Partizip II'); push(p + m[1] + 'n', 'v', 'Partizip II'); }
    if (r.startsWith('zu') && r.endsWith('n') && r.length > 5) push(p + r.slice(2), 'v', 'Infinitiv mit zu');
  }
  // существительные
  const nTag = 'форма существительного';
  for (const s of N_END) {
    if (!w.endsWith(s) || w.length - s.length < 2) continue;
    const st = w.slice(0, -s.length);
    push(st, 'n', nTag); push(deUmlaut(st), 'n', nTag, true);
  }
  push(deUmlaut(w), 'n', 'множественное число', true);
  // прилагательные
  const adj = (st, tag) => {
    push(st, 'adj', tag); push(deUmlaut(st), 'adj', tag, true);
    if (st.endsWith('er')) { const b = st.slice(0, -2); push(b, 'adj', 'сравнительная степень'); push(deUmlaut(b), 'adj', 'сравнительная степень', true); push(b + 'e', 'adj', 'сравнительная степень'); }
    for (const s of ['est', 'st']) if (st.endsWith(s)) { const b = st.slice(0, -s.length); push(b, 'adj', 'превосходная степень'); push(deUmlaut(b), 'adj', 'превосходная степень', true); }
  };
  for (const s of A_END) if (w.endsWith(s) && w.length - s.length >= 2) adj(w.slice(0, -s.length), 'склоняемая форма');
  if (/e[nrsm]$/.test(w)) push(w.slice(0, -1), 'adj', 'склоняемая форма');
  adj(w, 'склоняемая форма');
  return out;
}

// Три основные формы глагола для карточки. hasVerb(k) — есть ли в словаре такой глагол.
export function verbForms(inf, hasVerb = () => false) {
  inf = inf.toLowerCase();
  if (STRONG.has(inf)) return { ...STRONG.get(inf) };
  for (const p of PREF) {
    if (!inf.startsWith(p)) continue;
    const b = STRONG.get(inf.slice(p.length));
    if (!b) continue;
    if (INSEP_ONLY.has(p)) return { pr3: p + b.pr3, pt: p + b.pt, pp: p + (b.pp.startsWith('ge') ? b.pp.slice(2) : b.pp) };
    if (AMBIG.has(p)) return null;
    return { pr3: `${b.pr3} ${p}`, pt: `${b.pt} ${p}`, pp: p + b.pp, aux: b.aux };
  }
  const cut = v => v.endsWith('en') ? v.slice(0, -2) : v.endsWith('n') ? v.slice(0, -1) : null;
  const stem = cut(inf);
  if (!stem) return null;
  const mk = st => { const e = /[td]$|[^aeiouäöülrh][mn]$/.test(st) ? 'e' : ''; return { pr3: st + e + 't', pt: st + e + 'te', pp: st + e + 't' }; };
  for (const p of PREF) {
    if (!inf.startsWith(p) || AMBIG.has(p)) continue;
    const r = inf.slice(p.length);
    if (INSEP_ONLY.has(p)) { if (r.length >= 5) return mk(stem); continue; }
    if (hasVerb(r)) {
      const f = mk(cut(r));
      return { pr3: `${f.pr3} ${p}`, pt: `${f.pt} ${p}`, pp: p + (r.endsWith('ieren') ? '' : 'ge') + f.pp };
    }
  }
  const f = mk(stem);
  return { ...f, pp: (inf.endsWith('ieren') ? '' : 'ge') + f.pp };
}

// Возможные основы глагола без отделяемой приставки (для проверки по словарю).
export function sepRests(inf) {
  inf = inf.toLowerCase();
  return SEP.filter(p => inf.startsWith(p) && inf.length > p.length + 3).map(p => inf.slice(p.length));
}

export const WORD_RE = /[A-Za-zÀ-ÖØ-öø-ÿẞ]+/g;
export function wordsIn(text) {
  const out = []; let m; WORD_RE.lastIndex = 0;
  while ((m = WORD_RE.exec(text))) out.push({ w: m[0], start: m.index, end: m.index + m[0].length });
  return out;
}

// Границы простого предложения (клаузы) вокруг слова.
export function clauseOf(s, start, end) {
  const B = /[,;:!?.…«»„“”"()–—]|\s(?:und|oder|aber|denn|sondern)\s/g;
  let from = 0, to = s.length, m;
  while ((m = B.exec(s))) {
    if (m.index + m[0].length <= start) from = m.index + m[0].length;
    else if (m.index >= end) { to = m.index; break; }
  }
  return { from, to };
}

// Стоит ли в конце клаузы отделяемая приставка: «Er fing gestern an».
export function sepContext(sentence, start, end) {
  const { from, to } = clauseOf(sentence, start, end);
  const ws = wordsIn(sentence.slice(from, to)).map(x => ({ ...x, start: x.start + from }));
  if (ws.length < 2) return null;
  const last = ws[ws.length - 1], particle = last.w.toLowerCase();
  if (!SEPSET.has(particle)) return null;
  if (last.start === start) return { particle, isParticle: true, before: ws.slice(0, -1).map(x => x.w.toLowerCase()) };
  return start < last.start ? { particle } : null;
}

// Границы предложения в абзаце.
export function sentenceOf(text, pos) {
  const B = /[.!?…]+[“”"»«’)]*\s+/g;
  let from = 0, to = text.length, m;
  while ((m = B.exec(text))) {
    const e = m.index + m[0].length;
    if (e <= pos) from = e; else { to = e; break; }
  }
  return { from, to };
}
