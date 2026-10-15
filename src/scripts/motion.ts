// Scroll-driven entrances and the logbook odometer. Content is visible without this script.
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Reveal once when an element enters the viewport. Never replays, never leaves content hidden.
const targets = document.querySelectorAll<HTMLElement>('[data-reveal], [data-strip]');
const show = (el: Element) => el.classList.add('is-in');

if (!('IntersectionObserver' in window)) {
  targets.forEach(show);
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        show(entry.target);
        io.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0 },
  );
  targets.forEach((el) => io.observe(el));

  // Safety net: anything on screen a moment after load is shown even if the observer never fired.
  window.addEventListener('load', () =>
    setTimeout(() => {
      targets.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < innerHeight && r.bottom > 0) show(el);
      });
    }, 2500),
  );
}

// Logbook numbers roll up like an odometer the first time they are seen.
const counters = document.querySelectorAll<HTMLElement>('[data-count]');
if (!reduced && counters.length && 'IntersectionObserver' in window) {
  const fmt = new Intl.NumberFormat(document.documentElement.lang);
  const ease = (x: number) => 1 - Math.pow(1 - x, 4);
  const roll = (el: HTMLElement) => {
    const to = Number(el.dataset.count);
    const start = performance.now();
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / 1100);
      el.textContent = fmt.format(Math.round(to * ease(p)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const co = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        roll(entry.target as HTMLElement);
        co.unobserve(entry.target);
      }
    },
    { threshold: 0.6 },
  );
  counters.forEach((el) => {
    // Only counters still below the fold start from zero, so nothing visible jumps backwards.
    if (el.getBoundingClientRect().top > innerHeight) {
      el.textContent = '0';
      co.observe(el);
    }
  });
}
