document.getElementById('year').textContent = new Date().getFullYear();

// Scroll reveal
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Skill bars
const barIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.style.width = e.target.dataset.w + '%';
  });
}, { threshold: 0.3 });
document.querySelectorAll('.skill-fill').forEach(b => barIO.observe(b));

// Nav active — highlight the link matching the current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  if (a.getAttribute('href') === currentPage) a.classList.add('active');
});

// Hamburger menu
const burger = document.getElementById('navBurger');
const menu = document.getElementById('navLinks');
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  menu.classList.toggle('open');
});
menu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    burger.classList.remove('open');
    menu.classList.remove('open');
  });
});
