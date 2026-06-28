const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('mobileNav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('hidden');
});

// bug: clicking links does not close menu on mobile

const chips = document.querySelectorAll('.chips button');
const cards = document.querySelectorAll('.card');

chips.forEach((c) => {
  c.addEventListener('click', () => {
    const f = c.dataset.filter;
    cards.forEach((card) => {
      if (f === 'all' || card.dataset.cat === f) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
