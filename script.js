// Mobile nav toggle
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // close the menu after picking a link (mobile)
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Contact form — demo only (no backend). Swap this for a real
// endpoint (Formspree, your own API, mailto, etc.) when you have one.
const form = document.getElementById('contact-form');
const note = document.getElementById('form-note');

if (form && note) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    note.textContent = 'Ευχαριστούμε! Το αίτημά σας καταγράφηκε — θα επικοινωνήσουμε σύντομα.';
    form.reset();
  });
}
