const obras = [
  {
    "id": "diversidade",
    "modalidade": "Coletânea",
    "categoria": "Livros e coletâneas",
    "area": "Educação e Diversidade",
    "ano": "2024",
    "edicao": "1ª edição digital",
    "paginas": "89",
    "titulo": "Diversidade",
    "autores": "Cilene Maria Lima Antunes Maciel e Edione Teixeira Carvalho (organizadoras)",
    "isbn": "978-65-997449-9-0",
    "sinopse": "Coletânea dedicada a debates sobre diversidade, educação escolar, educação inclusiva e formação de professores, reunindo estudos que abordam contextos educativos diversos e desafios contemporâneos da prática pedagógica.",
    "pdf": "diversidade.pdf",
    "cover": "diversidade.jpg",
    "ordem": 6,
    "pdf_url": "pdfs/diversidade.pdf",
    "cover_url": "assets/covers/diversidade.jpg"
  },
  {
    "id": "integracao-ctsa",
    "modalidade": "Coletânea",
    "categoria": "Livros e coletâneas",
    "area": "Ciências da Natureza e Matemática",
    "ano": "2024",
    "edicao": "1ª edição digital",
    "paginas": "154",
    "titulo": "Integração de saberes e enfoque CTSA: Sequências Didáticas para o Ensino de Ciências da Natureza e Matemática",
    "autores": "Ana Claudia Tasinaffo Alves e Leandro Carbo (organizadores)",
    "isbn": "978-65-83547-02-6",
    "sinopse": "Obra que reúne sequências didáticas voltadas ao ensino de Ciências da Natureza e Matemática, com ênfase na integração entre Ciência, Tecnologia, Sociedade e Ambiente.",
    "pdf": "integracao-de-saberes-enfoque-ctsa.pdf",
    "cover": "integracao-de-saberes-enfoque-ctsa.jpg",
    "ordem": 5,
    "pdf_url": "pdfs/integracao-de-saberes-enfoque-ctsa.pdf",
    "cover_url": "assets/covers/integracao-de-saberes-enfoque-ctsa.jpg"
  },
  {
    "id": "conexoes-ctsa",
    "modalidade": "Coletânea",
    "categoria": "Livros e coletâneas",
    "area": "Ciências da Natureza e Matemática",
    "ano": "2024",
    "edicao": "1ª edição digital",
    "paginas": "125",
    "titulo": "Conexões CTSA: propostas de sequências didáticas para o ensino de ciências e matemática",
    "autores": "Ana Claudia Tasinaffo Alves e Leandro Carbo (organizadores)",
    "isbn": "978-65-997449-8-3",
    "sinopse": "Coletânea de propostas de sequências didáticas fundamentadas na abordagem CTSA, voltadas ao ensino contextualizado de Ciências e Matemática.",
    "pdf": "conexoes-ctsa.pdf",
    "cover": "conexoes-ctsa.jpg",
    "ordem": 4,
    "pdf_url": "pdfs/conexoes-ctsa.pdf",
    "cover_url": "assets/covers/conexoes-ctsa.jpg"
  },
  {
    "id": "retratos-cultura-escolar",
    "modalidade": "Coletânea",
    "categoria": "Livros e coletâneas",
    "area": "Educação e Cultura Escolar",
    "ano": "2024",
    "edicao": "1ª edição digital",
    "paginas": "110",
    "titulo": "Alguns retratos da cultura escolar",
    "autores": "Marcelo Franco Leão, Laura Isabel Marques Vasconcelos de Almeida e Thiago Beirigo Lopes (organizadores)",
    "isbn": "978-65-983317-2-6",
    "sinopse": "Obra organizada em torno de reflexões sobre cultura escolar, registros iconográficos, práticas pedagógicas e experiências de formação docente em diferentes contextos educativos.",
    "pdf": "alguns-retratos-da-cultura-escolar.pdf",
    "cover": "alguns-retratos-da-cultura-escolar.jpg",
    "ordem": 3,
    "pdf_url": "pdfs/alguns-retratos-da-cultura-escolar.pdf",
    "cover_url": "assets/covers/alguns-retratos-da-cultura-escolar.jpg"
  },
  {
    "id": "tematicas-lingua-literatura",
    "modalidade": "Coletânea",
    "categoria": "Livros e coletâneas",
    "area": "Educação, Linguagem e Literatura",
    "ano": "2024",
    "edicao": "1ª edição digital",
    "paginas": "80",
    "titulo": "Temáticas contemporâneas para o ensino de Língua e Literatura",
    "autores": "Claudia Lúcia Landgraf Valério, Epaminondas de Matos Magalhães, Marcos Aparecido Pereira e Rosemar Eurico Coenga (organizadores)",
    "isbn": "978-65-983317-1-9",
    "sinopse": "Coletânea que aborda educação antirracista, multiletramentos, leitura, literatura, identidades e práticas pedagógicas contemporâneas no ensino de Língua e Literatura.",
    "pdf": "tematicas-contemporaneas-lingua-literatura.pdf",
    "cover": "tematicas-contemporaneas-lingua-literatura.jpg",
    "ordem": 2,
    "pdf_url": "pdfs/tematicas-contemporaneas-lingua-literatura.pdf",
    "cover_url": "assets/covers/tematicas-contemporaneas-lingua-literatura.jpg"
  },
  {
    "id": "desafios-lingua-literatura-mt",
    "modalidade": "Coletânea",
    "categoria": "Livros e coletâneas",
    "area": "Educação, Linguagem e Literatura",
    "ano": "2024",
    "edicao": "1ª edição digital",
    "paginas": "113",
    "titulo": "Desafios e alternativas para o ensino de Língua e Literatura nas escolas públicas de Mato Grosso",
    "autores": "Claudia Lúcia Landgraf Valério, Epaminondas de Matos Magalhães, Marcos Aparecido Pereira e Rosemar Eurico Coenga (organizadores)",
    "isbn": "978-65-983317-0-2",
    "sinopse": "Livro digital dedicado a reflexões sobre ensino de Língua e Literatura, letramento literário, formação de leitores, práticas docentes e desafios educacionais nas escolas públicas de Mato Grosso.",
    "pdf": "desafios-alternativas-ensino-lingua-literatura-mt.pdf",
    "cover": "desafios-alternativas-ensino-lingua-literatura-mt.jpg",
    "ordem": 1,
    "pdf_url": "pdfs/desafios-alternativas-ensino-lingua-literatura-mt.pdf",
    "cover_url": "assets/covers/desafios-alternativas-ensino-lingua-literatura-mt.jpg"
  },
  {
    "id": "anais-eventos",
    "modalidade": "Anais de Evento",
    "categoria": "Anais de eventos",
    "area": "Eventos acadêmicos",
    "ano": "Em breve",
    "edicao": "A definir",
    "paginas": "A definir",
    "titulo": "Anais de eventos da Editora Gnosis Carajás",
    "autores": "Organizadores de eventos parceiros",
    "isbn": "A definir",
    "sinopse": "Espaço reservado para publicação e consulta de anais de eventos acadêmicos, científicos, culturais e educacionais vinculados à editora.",
    "pdf_url": "",
    "cover_url": "",
    "ordem": 0
  }
];


const navButtons = document.querySelectorAll('[data-page]');
const pages = document.querySelectorAll('.page');
const catalogList = document.getElementById('catalog-list');
const latestList = document.getElementById('latest-list');
const searchInput = document.getElementById('search');
const modalityFilter = document.getElementById('filter-modality');
const areaFilter = document.getElementById('filter-area');
const resultCount = document.getElementById('result-count');
const yearSpan = document.getElementById('year');

function normalizeText(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function setPage(pageId) {
  pages.forEach((page) => {
    page.classList.toggle('active', page.id === pageId);
  });

  navButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.page === pageId);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function imageOrPlaceholder(obra) {
  if (obra.cover_url) {
    return `<img src="${obra.cover_url}" alt="Capa do livro ${escapeHtml(obra.titulo)}" loading="lazy">`;
  }

  return `
    <div class="cover-placeholder">
      <span>GC</span>
      <strong>Anais de eventos</strong>
      <small>Em breve</small>
    </div>
  `;
}

function downloadButtons(obra) {
  if (obra.pdf_url) {
    return `
      <a class="button primary" href="${obra.pdf_url}" download>Baixar PDF</a>
      <a class="button secondary" href="${obra.pdf_url}" target="_blank" rel="noopener">Abrir PDF</a>
    `;
  }

  return '<span class="unavailable">Download em breve</span>';
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderLatest() {
  const latest = obras
    .filter((obra) => obra.pdf_url)
    .sort((a, b) => Number(b.ordem || 0) - Number(a.ordem || 0))
    .slice(0, 3);

  latestList.innerHTML = latest.map((obra) => `
    <article class="latest-card">
      <div class="latest-cover">${imageOrPlaceholder(obra)}</div>
      <div class="latest-info">
        <span class="pill">${escapeHtml(obra.modalidade)}</span>
        <h3>${escapeHtml(obra.titulo)}</h3>
        <p class="authors">${escapeHtml(obra.autores)}</p>
        <p>${escapeHtml(obra.sinopse)}</p>
        <div class="mini-meta">
          <span>${escapeHtml(obra.ano)}</span>
          <span>${escapeHtml(obra.paginas)} páginas</span>
          <span>ISBN ${escapeHtml(obra.isbn)}</span>
        </div>
      </div>
    </article>
  `).join('');
}

function fillFilters() {
  const areas = Array.from(new Set(obras.map((obra) => obra.area))).sort();
  const modalities = Array.from(new Set(obras.map((obra) => obra.modalidade))).sort();

  modalityFilter.innerHTML = '<option>Todas as modalidades</option>' + modalities.map((item) => `<option>${escapeHtml(item)}</option>`).join('');
  areaFilter.innerHTML = '<option>Todas as áreas</option>' + areas.map((item) => `<option>${escapeHtml(item)}</option>`).join('');
}

function getFilteredWorks() {
  const query = normalizeText(searchInput.value);
  const modality = modalityFilter.value;
  const area = areaFilter.value;

  return obras.filter((obra) => {
    const matchModality = modality === 'Todas as modalidades' || obra.modalidade === modality;
    const matchArea = area === 'Todas as áreas' || obra.area === area;
    const fullText = normalizeText([
      obra.modalidade,
      obra.titulo,
      obra.autores,
      obra.sinopse,
      obra.isbn,
      obra.ano,
      obra.area,
      obra.edicao,
      obra.paginas,
    ].join(' '));
    const matchQuery = query === '' || fullText.includes(query);
    return matchModality && matchArea && matchQuery;
  });
}

function renderCatalog() {
  const filtered = getFilteredWorks().sort((a, b) => Number(b.ordem || 0) - Number(a.ordem || 0));
  resultCount.textContent = `${filtered.length} obra(s) encontrada(s)`;

  if (!filtered.length) {
    catalogList.innerHTML = '<div class="empty-state">Nenhuma obra encontrada com os filtros selecionados.</div>';
    return;
  }

  catalogList.innerHTML = filtered.map((obra) => `
    <article class="catalog-item">
      <div class="catalog-cover">${imageOrPlaceholder(obra)}</div>
      <div class="catalog-content">
        <div class="tag-row">
          <span>${escapeHtml(obra.modalidade)}</span>
          <span>${escapeHtml(obra.area)}</span>
        </div>
        <h3>${escapeHtml(obra.titulo)}</h3>
        <p class="authors">${escapeHtml(obra.autores)}</p>
        <p class="synopsis">${escapeHtml(obra.sinopse)}</p>
        <dl class="metadata-grid">
          <div><dt>ISBN</dt><dd>${escapeHtml(obra.isbn)}</dd></div>
          <div><dt>Páginas</dt><dd>${escapeHtml(obra.paginas)}</dd></div>
          <div><dt>Edição</dt><dd>${escapeHtml(obra.edicao)}</dd></div>
          <div><dt>Ano</dt><dd>${escapeHtml(obra.ano)}</dd></div>
        </dl>
        <div class="actions">${downloadButtons(obra)}</div>
      </div>
    </article>
  `).join('');
}

navButtons.forEach((button) => {
  button.addEventListener('click', () => setPage(button.dataset.page));
});

document.querySelectorAll('[data-go]').forEach((button) => {
  button.addEventListener('click', () => setPage(button.dataset.go));
});

[searchInput, modalityFilter, areaFilter].forEach((input) => {
  input.addEventListener('input', renderCatalog);
  input.addEventListener('change', renderCatalog);
});

if (yearSpan) yearSpan.textContent = new Date().getFullYear();
fillFilters();
renderLatest();
renderCatalog();
