
/* ================================================================
   ARQUIVO: script.js
   FUNÇÃO: controlar partes dinâmicas do site.
   ----------------------------------------------------------------
   Este arquivo lê os dados de data.js e monta:
   1. Os três destaques da página inicial.
   2. A lista completa do catálogo.
   3. A busca por título, autor, ISBN, área e sinopse.
   4. Os filtros por modalidade, área e ano.
   ================================================================ */

/* ----------------------------------------------------------------
   Bloco auxiliar: deixa textos seguros para entrar no HTML.
   Evita que caracteres especiais quebrem a página.
   ---------------------------------------------------------------- */
function escapeHTML(texto) {
  return String(texto ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

/* ----------------------------------------------------------------
   Bloco auxiliar: monta o HTML de uma obra no catálogo.
   Ao alterar o visual de cada item do catálogo, mexa aqui.
   ---------------------------------------------------------------- */
function templateObra(obra) {
  return `
    <article class="catalog-item" data-modalidade="${escapeHTML(obra.modalidade)}" data-area="${escapeHTML(obra.area)}" data-ano="${escapeHTML(obra.ano)}">
      <a class="catalog-cover" href="${escapeHTML(obra.pdf)}" target="_blank" rel="noopener">
        <img src="${escapeHTML(obra.capa)}" alt="Capa da obra ${escapeHTML(obra.titulo)}" loading="lazy">
      </a>
      <div class="catalog-content">
        <div class="catalog-tags">
          <span class="tag">${escapeHTML(obra.modalidade)}</span>
          <span class="tag soft">${escapeHTML(obra.area)} · ${escapeHTML(obra.ano)}</span>
        </div>
        <h2>${escapeHTML(obra.titulo)}</h2>
        <p class="authors">${escapeHTML(obra.autores)}</p>
        <p class="synopsis">${escapeHTML(obra.sinopse)}</p>
        <div class="meta">
          <span><strong>ISBN:</strong> ${escapeHTML(obra.isbn)}</span>
          <span><strong>Páginas:</strong> ${escapeHTML(obra.paginas)}</span>
          <span><strong>Edição:</strong> ${escapeHTML(obra.edicao)}</span>
          <span><strong>Ano:</strong> ${escapeHTML(obra.ano)}</span>
        </div>
        <div class="catalog-actions">
          <a class="btn primary" href="${escapeHTML(obra.pdf)}" download>↓ Acessar PDF</a>
          <a class="btn secondary" href="${escapeHTML(obra.pdf)}" target="_blank" rel="noopener">Visualizar</a>
        </div>
      </div>
    </article>`;
}

/* ----------------------------------------------------------------
   Bloco da página inicial: renderiza as 3 obras em destaque.
   A escolha dos destaques fica no arquivo data.js, em DESTAQUES_INICIO.
   ---------------------------------------------------------------- */
function renderDestaquesInicio() {
  const destino = document.querySelector('[data-home-destaques]');
  if (!destino || typeof OBRAS === 'undefined') return;

  const obrasDestaque = DESTAQUES_INICIO
    .map(file => OBRAS.find(obra => obra.file === file))
    .filter(Boolean)
    .slice(0, 3);

  destino.innerHTML = obrasDestaque.map(obra => `
    <article class="featured-card">
      <a href="catalogo.html" aria-label="Ver obra no catálogo">
        <img src="${escapeHTML(obra.capa)}" alt="Capa da obra ${escapeHTML(obra.titulo)}" loading="lazy">
      </a>
      <div>
        <span class="tag">${escapeHTML(obra.modalidade)}</span>
        <h3>${escapeHTML(obra.titulo)}</h3>
        <p>${escapeHTML(obra.autores)}</p>
        <div class="mini-meta">
          <span>${escapeHTML(obra.ano)}</span>
          <span>${escapeHTML(obra.paginas)} páginas</span>
          <span>${escapeHTML(obra.isbn)}</span>
        </div>
      </div>
    </article>`).join('');
}

/* ----------------------------------------------------------------
   Bloco do catálogo: cria busca e filtros.
   O catálogo inteiro é renderizado a partir da lista OBRAS no data.js.
   ---------------------------------------------------------------- */
function renderCatalogo() {
  const lista = document.querySelector('[data-catalog-list]');
  if (!lista || typeof OBRAS === 'undefined') return;

  const busca = document.querySelector('[data-search]');
  const filtros = document.querySelectorAll('[data-filter]');
  const contador = document.querySelector('[data-count]');
  let filtroAtual = 'Todos';

  function obraCombinaComFiltro(obra, filtro) {
    if (filtro === 'Todos') return true;
    return obra.modalidade === filtro || obra.area === filtro || String(obra.ano) === filtro;
  }

  function atualizar() {
    const termo = (busca?.value || '').toLowerCase().trim();
    const resultado = OBRAS
      .filter(obra => obraCombinaComFiltro(obra, filtroAtual))
      .filter(obra => {
        const texto = [obra.titulo, obra.autores, obra.sinopse, obra.isbn, obra.area, obra.ano, obra.modalidade].join(' ').toLowerCase();
        return termo === '' || texto.includes(termo);
      })
      .sort((a, b) => (b.ordem || 0) - (a.ordem || 0));

    lista.innerHTML = resultado.length
      ? resultado.map(templateObra).join('')
      : '<div class="empty">Nenhuma obra encontrada com os filtros selecionados.</div>';

    if (contador) contador.textContent = `${resultado.length} obra(s) encontrada(s)`;
  }

  if (busca) busca.addEventListener('input', atualizar);
  filtros.forEach(botao => {
    botao.addEventListener('click', () => {
      filtros.forEach(b => b.classList.remove('active'));
      botao.classList.add('active');
      filtroAtual = botao.dataset.filter;
      atualizar();
    });
  });

  atualizar();
}

/* ----------------------------------------------------------------
   Bloco final: executa os renderizadores depois que o HTML carrega.
   ---------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  renderDestaquesInicio();
  renderCatalogo();
});
