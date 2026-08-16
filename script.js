// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const tabList = document.getElementById('tabList');
navToggle.addEventListener('click', () => {
  const open = tabList.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});
tabList.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    tabList.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Request slip: give it a "filed" number for flavor
document.getElementById('slipNumber').textContent =
  String(Math.floor(Math.random() * 900) + 100);

// Contact form -> opens the user's email client with a pre-filled message
const form = document.getElementById('requestSlip');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
  const body = encodeURIComponent(
    `${message}\n\n— ${name}\n${email}`
  );

  window.location.href = `mailto:samplazabulac@gmail.com?subject=${subject}&body=${body}`;
});
