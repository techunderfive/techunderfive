/*
  TechUnder5 Site JS
  - Theme toggle with localStorage
  - Mobile nav toggle
*/

(function () {
  const root = document.documentElement;
  const THEME_KEY = 'tu5-theme';

  function getPreferredTheme() {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
    return 'light'; // Default to light mode instead of following system preference
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  // Init theme early
  applyTheme(getPreferredTheme());

  // Toggle
  document.addEventListener('DOMContentLoaded', function () {
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', function () {
        const next = (root.getAttribute('data-theme') === 'dark') ? 'light' : 'dark';
        localStorage.setItem(THEME_KEY, next);
        applyTheme(next);
      });
    }

    // Mobile nav toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.getElementById('primary-nav');
    if (navToggle && navList) {
      navToggle.addEventListener('click', function () {
        const expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', String(!expanded));
        navList.classList.toggle('open');
      });
    }

    // Hero banner toggle every 5 seconds
    const banner1 = document.getElementById('tu5-banner-1');
    const banner2 = document.getElementById('tu5-banner-2');
    if (banner1 && banner2) {
      let showFirst = true;
      setInterval(function () {
        showFirst = !showFirst;
        if (showFirst) {
          banner1.style.display = '';
          banner2.style.display = 'none';
        } else {
          banner1.style.display = 'none';
          banner2.style.display = 'inline-block';
        }
      }, 5000);
    }
  });
})();


