// Mobile navigation
const toggle = document.querySelector('.mobile-toggle');
const drawer = document.querySelector('.mobile-drawer');
const overlay = document.querySelector('.mobile-overlay');

function openDrawer() {
  toggle.classList.add('active');
  drawer.classList.add('active');
  overlay.classList.add('active');
  toggle.setAttribute('aria-expanded', 'true');
  drawer.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  toggle.classList.remove('active');
  drawer.classList.remove('active');
  overlay.classList.remove('active');
  toggle.setAttribute('aria-expanded', 'false');
  drawer.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

toggle.addEventListener('click', () => {
  toggle.classList.contains('active') ? closeDrawer() : openDrawer();
});

overlay.addEventListener('click', closeDrawer);
drawer.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeDrawer);
});

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
reveals.forEach(el => revealObserver.observe(el));

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
