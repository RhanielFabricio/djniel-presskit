/* =============================================
   DJ NIEL — PRESS KIT
   script.js
   ============================================= */

/* -------- NAVBAR: scroll shadow -------- */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.5)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

/* -------- NAVBAR: active link no scroll -------- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observerNav = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.4 });

sections.forEach(section => observerNav.observe(section));

/* -------- MENU MOBILE -------- */
const navToggle = document.querySelector('.nav-toggle');
const navLinksList = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinksList.classList.toggle('open');
});

// Fechar menu ao clicar num link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinksList.classList.remove('open');
  });
});

/* -------- SCROLL REVEAL -------- */
const revealElements = document.querySelectorAll('.reveal');

const observerReveal = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Delay escalonado para elementos que aparecem juntos
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      observerReveal.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => observerReveal.observe(el));

/* -------- FORMULÁRIO → WHATSAPP -------- */
const form = document.getElementById('contact-form');
// Substitua pelo seu número real (somente dígitos, com DDI e DDD)
const WHATSAPP_NUMBER = '5511SEUNUMERO';

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome     = document.getElementById('nome');
  const contato  = document.getElementById('contato');
  const evento   = document.getElementById('evento');
  const mensagem = document.getElementById('mensagem');

  let valid = true;

  // Validação básica
  [nome, contato].forEach(field => {
    const error = field.nextElementSibling;
    if (!field.value.trim()) {
      field.classList.add('error');
      error.classList.add('visible');
      valid = false;
    } else {
      field.classList.remove('error');
      error.classList.remove('visible');
    }
  });

  if (!valid) return;

  // Montar mensagem para o WhatsApp
  const msg = [
    `Olá DJ Niel! 👋`,
    ``,
    `*Nome:* ${nome.value.trim()}`,
    `*Contato:* ${contato.value.trim()}`,
    evento.value.trim() ? `*Tipo de evento:* ${evento.value.trim()}` : null,
    mensagem.value.trim() ? `*Mensagem:* ${mensagem.value.trim()}` : null,
  ]
  .filter(Boolean)
  .join('\n');

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
});

/* -------- SMOOTH SCROLL para links internos -------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 64; // altura do navbar
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
