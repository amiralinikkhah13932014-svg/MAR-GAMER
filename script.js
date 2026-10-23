const searchInput = document.getElementById('searchInput');
const cards = Array.from(document.querySelectorAll('.game-card'));
const filters = Array.from(document.querySelectorAll('.filter'));
const emptyState = document.getElementById('emptyState');
let activeFilter = 'all';

function updateGames() {
  const query = (searchInput.value || '').trim().toLocaleLowerCase('fa');
  let visibleCount = 0;
  cards.forEach(card => {
    const matchesCategory = activeFilter === 'all' || card.dataset.category === activeFilter;
    const searchable = ((card.dataset.search || '') + ' ' + card.innerText).toLocaleLowerCase('fa');
    const matchesQuery = searchable.includes(query);
    const visible = matchesCategory && matchesQuery;
    card.hidden = !visible;
    if (visible) visibleCount++;
  });
  emptyState.hidden = visibleCount > 0;
}
searchInput.addEventListener('input', updateGames);
filters.forEach(button => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    filters.forEach(item => item.classList.toggle('active', item === button));
    updateGames();
  });
});
document.getElementById('year').textContent = new Date().getFullYear();
