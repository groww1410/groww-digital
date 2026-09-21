const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const open = navLinks.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
});
document.querySelectorAll('.nav-links a').forEach((link) => link.addEventListener('click', () => navLinks.classList.remove('is-open')));

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) entry.target.classList.add('is-visible');
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.car-card');
filters.forEach((filter) => filter.addEventListener('click', () => {
  filters.forEach((item) => { item.classList.remove('active'); item.setAttribute('aria-selected', 'false'); });
  filter.classList.add('active');
  filter.setAttribute('aria-selected', 'true');
  cards.forEach((card) => card.classList.toggle('is-hidden', filter.dataset.filter !== 'all' && !card.dataset.category.includes(filter.dataset.filter)));
}));

const dialog = document.querySelector('#car-dialog');
const modelChoice = document.querySelector('#model-choice');
document.querySelectorAll('.discover').forEach((button) => button.addEventListener('click', () => {
  document.querySelector('#dialog-title').textContent = button.dataset.car;
  modelChoice.value = button.dataset.car;
  dialog.showModal();
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });

document.querySelector('#enquiry-form').addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('#form-note').textContent = 'Thank you. A product expert will be in touch shortly.';
  event.currentTarget.reset();
});
