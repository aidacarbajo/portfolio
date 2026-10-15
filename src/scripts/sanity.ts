// The live sanity suite: twelve real checks run against this page in the visitor's browser.

type Result = { ok: boolean; detail?: string };
type Check = () => Result;

const section = document.querySelector<HTMLElement>('#check');
const button = section?.querySelector<HTMLButtonElement>('.run');

const visible = (el: Element) => {
  const r = el.getBoundingClientRect();
  const s = getComputedStyle(el);
  return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none';
};

const accessibleName = (el: Element) =>
  (el.getAttribute('aria-label') || el.textContent || el.querySelector('img')?.getAttribute('alt') || '').trim();

// WCAG relative luminance and contrast.
const parse = (c: string) => (c.match(/[\d.]+/g) || []).map(Number);
const lum = ([r, g, b]: number[]) => {
  const ch = [r, g, b].map((v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * ch[0] + 0.7152 * ch[1] + 0.0722 * ch[2];
};
const background = (el: Element | null): number[] => {
  while (el) {
    const c = parse(getComputedStyle(el).backgroundColor);
    if (c.length >= 3 && (c[3] === undefined || c[3] > 0.5)) return c;
    el = el.parentElement;
  }
  return [255, 255, 255];
};
const contrast = (a: number[], b: number[]) => {
  const [l1, l2] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
};

const checks: Record<string, Check> = {
  lang: () => {
    const l = document.documentElement.lang;
    return { ok: /^[a-z]{2}/.test(l), detail: l };
  },
  h1: () => {
    const n = document.querySelectorAll('h1').length;
    return { ok: n === 1, detail: String(n) };
  },
  order: () => {
    let last = 0;
    for (const h of document.querySelectorAll('h1, h2, h3, h4, h5, h6')) {
      const level = Number(h.tagName[1]);
      if (last && level > last + 1) return { ok: false, detail: h.textContent ?? '' };
      last = level;
    }
    return { ok: true };
  },
  alt: () => {
    const bad = [...document.images].filter((img) => !img.hasAttribute('alt'));
    return { ok: bad.length === 0, detail: String(bad.length) };
  },
  dims: () => {
    const bad = [...document.images].filter((img) => !img.getAttribute('width') || !img.getAttribute('height'));
    return { ok: bad.length === 0, detail: String(bad.length) };
  },
  names: () => {
    const bad = [...document.querySelectorAll('a[href], button')].filter((el) => visible(el) && !accessibleName(el));
    return { ok: bad.length === 0, detail: String(bad.length) };
  },
  anchors: () => {
    const bad = [...document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')].filter(
      (a) => a.hash.length > 1 && !document.getElementById(decodeURIComponent(a.hash.slice(1))),
    );
    return { ok: bad.length === 0, detail: String(bad.length) };
  },
  target: () => {
    const bad = [...document.querySelectorAll('.btn, button')].filter(
      (el) => visible(el) && el.getBoundingClientRect().height < 44,
    );
    return { ok: bad.length === 0, detail: String(bad.length) };
  },
  contrast: () => {
    const nodes = document.querySelectorAll('main p, main li, main th, main td, main a, main span, footer p, footer a, header p, header a');
    let worst = 21;
    for (const el of nodes) {
      if (!visible(el) || !el.textContent?.trim() || el.closest('[data-ui]')) continue;
      const s = getComputedStyle(el);
      const ratio = contrast(parse(s.color), background(el));
      const large = parseFloat(s.fontSize) >= 24;
      worst = Math.min(worst, large ? ratio * 1.5 : ratio);
    }
    return { ok: worst >= 4.5, detail: worst.toFixed(1) };
  },
  overflow: () => {
    const extra = document.documentElement.scrollWidth - document.documentElement.clientWidth;
    return { ok: extra <= 1, detail: `${extra}px` };
  },
  hreflang: () => {
    const own = document.documentElement.lang;
    const alternates = [...document.querySelectorAll('link[rel="alternate"][hreflang]')].map((l) => l.getAttribute('hreflang'));
    const switcher = document.querySelector('a[hreflang]:not([hreflang="' + own + '"])');
    return { ok: alternates.includes('en') && alternates.includes('es') && !!switcher };
  },
  speed: () => {
    const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
    const ms = nav ? nav.loadEventEnd || nav.domContentLoadedEventEnd : performance.now();
    return { ok: ms > 0 && ms < 3000, detail: `${Math.round(ms)} ms` };
  },
};

if (section && button) {
  const d = section.dataset;
  const summary = section.querySelector<HTMLElement>('.check-summary')!;
  const items = [...section.querySelectorAll<HTMLElement>('[data-check]')];
  button.hidden = false;

  button.addEventListener('click', async () => {
    button.disabled = true;
    button.textContent = d.running ?? '';
    summary.textContent = '';
    items.forEach((li) => li.removeAttribute('data-state'));

    const start = performance.now();
    let passed = 0;
    for (const li of items) {
      // Each row arms (amber) for a beat before it reports, so the run can be followed by eye.
      li.dataset.state = 'armed';
      await new Promise((r) => setTimeout(r, 90));
      const run = checks[li.dataset.check ?? ''];
      let result: Result;
      try {
        result = run ? run() : { ok: false };
      } catch {
        result = { ok: false };
      }
      if (result.ok) passed++;
      li.dataset.state = result.ok ? 'pass' : 'fail';
      li.querySelector('.check-word')!.textContent = result.ok ? (d.passed ?? '') : (d.failed ?? '');
    }
    const ms = (performance.now() - start - items.length * 90).toFixed(1);

    summary.textContent = (d.summary ?? '')
      .replace('{passed}', String(passed))
      .replace('{total}', String(items.length))
      .replace('{ms}', ms);
    section.dataset.result = passed === items.length ? 'pass' : 'fail';
    button.textContent = d.again ?? '';
    button.disabled = false;
  });
}
