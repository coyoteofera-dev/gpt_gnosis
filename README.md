# Site da Editora Gnosis Carajás

Este pacote contém uma versão estática do site da Editora Gnosis Carajás, pronta para publicação no GitHub Pages.

## Estrutura

- `index.html`: página principal do site.
- `assets/css/styles.css`: estilos visuais.
- `assets/js/script.js`: dados do catálogo, filtros e navegação.
- `assets/covers/`: capas extraídas da primeira página dos PDFs enviados.
- `pdfs/`: livros em PDF disponíveis para download no catálogo.

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie todos os arquivos e pastas deste pacote para a raiz do repositório.
3. No GitHub, acesse `Settings > Pages`.
4. Em `Build and deployment`, selecione:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Salve e aguarde o GitHub gerar o link.

## Observações

- Os botões de download do catálogo já apontam para os arquivos da pasta `pdfs/`.
- Os formulários de contato e submissão estão apenas em modo visual. Para funcionar no GitHub Pages, precisam ser integrados a um serviço externo, como FormSubmit, Google Forms ou outro serviço compatível com sites estáticos.
- Caso utilize domínio próprio, configure o domínio no GitHub Pages e no DNS do Registro.br.
