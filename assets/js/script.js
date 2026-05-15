const state = {
  query: '',
  modalidade: 'Todos',
  tema: 'Todos',
  ano: 'Todos'
};

const QUICK_FILTERS = [
  { label: 'Todos', type: 'reset', value: 'Todos' },
  { label: 'Autoral', type: 'modalidade', value: 'Autoral' },
  { label: 'Coletânea', type: 'modalidade', value: 'Coletânea' },
  { label: 'Anais de Evento', type: 'modalidade', value: 'Anais de Evento' },
  { label: 'Educação', type: 'tema', value: 'educacao' },
  { label: 'Ciências', type: 'tema', value: 'ciencias' },
  { label: 'Matemática', type: 'tema', value: 'matematica' },
  { label: '2025', type: 'ano', value: '2025' },
  { label: '2024', type: 'ano', value: '2024' },
  { label: '2023', type: 'ano', value: '2023' },
  { label: '2022', type: 'ano', value: '2022' }
];

function normalize(value) {
  return String(value || '').toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function modalityClass(modalidade) {
  const value = normalize(modalidade);
  if (value.includes('anais')) return 'anais';
  if (value.includes('autoral')) return 'autoral';
  return 'coletanea';
}

function filteredWorks() {
  const term = normalize(state.query);
  return OBRAS.filter(obra => {
    const haystack = normalize([obra.modalidade, obra.titulo, obra.autores, obra.sinopse, obra.isbn, obra.ano, obra.area].join(' '));
    const matchSearch = !term || haystack.includes(term);
    const matchModalidade = state.modalidade === 'Todos' || obra.modalidade === state.modalidade;
    const matchAno = state.ano === 'Todos' || String(obra.ano) === state.ano;
    const matchTema = state.tema === 'Todos' || haystack.includes(state.tema);
    return matchSearch && matchModalidade && matchAno && matchTema;
  });
}

function tagClass(obra) {
  const cls = modalityClass(obra.modalidade);
  return `tag tag-modalidade tag-${cls}`;
}

function renderLatest() {
  const container = document.querySelector('#latestWorks');
  if (!container) return;
  const latest = OBRAS.slice(0, 3);
  container.innerHTML = latest.map(obra => `
    <article class="featured-card">
      <img src="${obra.capa}" alt="Capa da obra ${obra.titulo}" class="featured-cover" loading="lazy">
      <div>
        <div class="tags"><span class="${tagClass(obra)}">${obra.modalidade}</span><span class="tag tag-area">${obra.ano}</span></div>
        <h3>${obra.titulo}</h3>
        <p class="authors">${obra.autores}</p>
        <p>${obra.sinopse}</p>
        <div class="mini-meta">
          <span>${obra.paginas} páginas</span>
          <span>ISBN: ${obra.isbn}</span>
        </div>
      </div>
    </article>
  `).join('');
}

function renderHeroCovers() {
  const container = document.querySelector('#heroCovers');
  if (!container) return;
  container.innerHTML = OBRAS.slice(0, 3).map(obra => `
    <img src="${obra.capa}" alt="Capa da obra ${obra.titulo}" class="hero-cover" loading="lazy">
  `).join('');
}

function isChipActive(filter) {
  if (filter.type === 'reset') return state.modalidade === 'Todos' && state.tema === 'Todos' && state.ano === 'Todos' && !state.query;
  return state[filter.type] === filter.value;
}

function renderFilterChips() {
  const container = document.querySelector('#filterChips');
  if (!container) return;
  container.innerHTML = QUICK_FILTERS.map(filter => `
    <button class="filter-chip ${isChipActive(filter) ? 'active' : ''}" type="button" data-type="${filter.type}" data-value="${filter.value}">${filter.label}</button>
  `).join('');
}

function renderCatalog() {
  const list = document.querySelector('#catalogList');
  const count = document.querySelector('#resultCount');
  if (!list || !count) return;
  const obras = filteredWorks();
  count.textContent = `${obras.length} obra(s) encontrada(s)`;
  list.innerHTML = obras.map(obra => {
    const cls = modalityClass(obra.modalidade);
    return `
      <article class="catalog-item ${cls}">
        <div class="cover-column">
          <img src="${obra.capa}" alt="Capa da obra ${obra.titulo}" class="catalog-cover" loading="lazy">
        </div>
        <div class="catalog-content">
          <div class="tags"><span class="${tagClass(obra)}">${obra.modalidade}</span><span class="tag tag-area">${obra.area} · ${obra.ano}</span></div>
          <h3>${obra.titulo}</h3>
          <p class="authors">${obra.autores}</p>
          <p class="synopsis">${obra.sinopse}</p>
          <div class="metadata-grid">
            <span><strong>ISBN:</strong> ${obra.isbn}</span>
            <span><strong>Páginas:</strong> ${obra.paginas}</span>
            <span><strong>${obra.edicao}</strong>, ${obra.ano}</span>
          </div>
          <div class="actions">
            <a class="btn primary" href="${obra.pdf}" download>↓ Acessar PDF</a>
            <a class="btn secondary" href="${obra.pdf}" target="_blank" rel="noopener">Visualizar</a>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function bindEvents() {
  const searchInput = document.querySelector('#searchInput');
  const chips = document.querySelector('#filterChips');

  if (searchInput) {
    searchInput.addEventListener('input', event => {
      state.query = event.target.value;
      renderFilterChips();
      renderCatalog();
    });
  }
  if (chips) {
    chips.addEventListener('click', event => {
      const button = event.target.closest('button[data-type]');
      if (!button) return;
      const type = button.dataset.type;
      const value = button.dataset.value;
      if (type === 'reset') {
        state.modalidade = 'Todos';
        state.tema = 'Todos';
        state.ano = 'Todos';
        state.query = '';
        if (searchInput) searchInput.value = '';
      } else {
        state[type] = state[type] === value ? 'Todos' : value;
      }
      renderFilterChips();
      renderCatalog();
    });
  }
}

function init() {
  renderHeroCovers();
  renderLatest();
  renderFilterChips();
  renderCatalog();
  bindEvents();
}

document.addEventListener('DOMContentLoaded', init);

function updateActiveNavigation() {
  const links = Array.from(document.querySelectorAll('.nav a'));
  if (!links.length) return;
  const hash = window.location.hash || '#inicio';
  links.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === hash);
  });
}

window.addEventListener('hashchange', updateActiveNavigation);
document.addEventListener('DOMContentLoaded', updateActiveNavigation);
