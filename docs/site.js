// Theme toggle. Dark is the default; the choice is saved in localStorage.
// The <head> applies a saved choice before first paint, so this only wires the button.
(() => {
  const root = document.documentElement, btn = document.getElementById('theme-toggle');
  if (!btn) return;
  const set = t => { root.dataset.theme = t; btn.setAttribute('aria-label', t === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'); };
  set(root.dataset.theme === 'light' ? 'light' : 'dark');
  btn.addEventListener('click', () => {
    const n = root.dataset.theme === 'dark' ? 'light' : 'dark';
    set(n);
    try { localStorage.setItem('jb-theme', n); } catch (e) {}
  });
})();

// Write-up section list: mark the section currently being read.
(() => {
  const links = [...document.querySelectorAll('.toc a')];
  if (!links.length || !('IntersectionObserver' in window)) return;
  const byId = new Map(links.map(a => [a.hash.slice(1), a]));
  const visible = new Set();
  const mark = () => {
    const first = links.find(a => visible.has(a.hash.slice(1)));
    if (first) links.forEach(a => a === first ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current'));
  };
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => e.isIntersecting ? visible.add(e.target.id) : visible.delete(e.target.id));
    mark();
  }, { rootMargin: '-80px 0px -55% 0px' });
  byId.forEach((_, id) => { const s = document.getElementById(id); if (s) io.observe(s); });
})();
