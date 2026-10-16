// IRONWORKS — JavaScript
document.addEventListener('DOMContentLoaded', () => {
  console.log('IRONWORKS loaded — Lift heavy. Pay light.');

  /* Contact form — client-side only, no backend */
  const form = document.getElementById('join-form');
  const success = document.getElementById('form-success');

  if (form && success) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const name = formData.get('name') || '';
      const email = formData.get('email') || '';
      const message = formData.get('message') || '';

      if (!name || !email || !message) {
        success.textContent = 'Please fill in all fields before sending.';
        success.style.color = '#e84c18';
        success.hidden = false;
        return;
      }

      success.textContent = `Thanks, ${name}. Message sent — we'll be in touch soon.`;
      success.style.color = '#ff5a1f';
      success.hidden = false;

      form.reset();
    });
  }

  /* Reveal-on-scroll — disabled under prefers-reduced-motion */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealTargets = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -80px 0px' });

  if (!prefersReduced) {
    revealTargets.forEach((el) => observer.observe(el));
  } else {
    revealTargets.forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }
});
