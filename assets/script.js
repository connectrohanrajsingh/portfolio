document.addEventListener('DOMContentLoaded', function () {
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');

  if (btn) {
    if (localStorage.getItem('theme') !== 'light') {
      btn.innerHTML = '\u2600\uFE0F';
    }

    btn.addEventListener('click', function () {
      root.classList.toggle('dark-mode');
      const isDark = root.classList.contains('dark-mode');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      this.innerHTML = isDark ? '\u2600\uFE0F' : '\uD83C\uDF19';
    });
  }

  // Scroll-triggered fade-in
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
});
