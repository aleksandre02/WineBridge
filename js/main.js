/* ============================================================
   WineBridge — Main JavaScript
   ============================================================ */

'use strict';

/* ── Scroll Fade-In Animation ─────────────────────────────── */
(function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in-up');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach((el) => observer.observe(el));
})();

/* ── Smooth Scroll for Anchor Links ──────────────────────── */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const headerHeight = document.querySelector('.site-header')?.offsetHeight || 0;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();

/* ── Newsletter Form (UI only) ────────────────────────────── */
(function initNewsletterForm() {
  const form = document.querySelector('.cellar-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    const btn   = form.querySelector('button');
    if (!input || !btn) return;

    const original = btn.textContent;
    btn.textContent = 'Thank you!';
    btn.disabled = true;
    input.value = '';

    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
    }, 3500);
  });
})();

/* ── Contact Form (UI only) ───────────────────────────────── */
(function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    if (!btn) return;

    const original = btn.textContent;
    btn.textContent = 'Message Sent!';
    btn.disabled = true;
    form.reset();

    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
    }, 4000);
  });
})();

/* ── Sticky Header Shadow ─────────────────────────────────── */
(function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 24) {
      header.style.boxShadow = '0 4px 20px rgba(44,44,44,0.10)';
    } else {
      header.style.boxShadow = 'none';
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
})();
