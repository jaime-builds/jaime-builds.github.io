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
