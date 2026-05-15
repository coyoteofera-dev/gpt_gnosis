/*
====================================================================
ARQUIVO: data.js
FUNÇÃO: guardar os dados das obras exibidas no site.
--------------------------------------------------------------------
Este é o arquivo principal para manutenção manual do catálogo.

COMO ACRESCENTAR UMA NOVA OBRA NO CATÁLOGO
1. Coloque o PDF da obra na pasta "pdfs".
2. Coloque a imagem da capa na pasta "covers".
3. Copie o MODELO DE NOVA OBRA abaixo.
4. Cole o bloco dentro da lista OBRAS = [ ... ].
5. Preencha os campos.
6. Mantenha uma vírgula entre uma obra e outra.
7. Para colocar a obra entre os 3 destaques da página inicial,
   acrescente o valor do campo "file" na lista DESTAQUES_INICIO.

ATENÇÃO
- O site tem poucas páginas HTML na raiz para facilitar o GitHub Pages.
- As obras aparecem no arquivo catalogo.html por meio deste arquivo data.js.
- As capas devem ficar somente na pasta covers.
- Os PDFs devem ficar somente na pasta pdfs.
====================================================================
*/

const OBRAS = [
  /*
  ================================================================
  MODELO DE NOVA OBRA PARA COPIAR E COLAR
  ----------------------------------------------------------------
  Copie o bloco abaixo, cole depois de uma obra existente e remova
  as marcações de comentário antes de preencher os dados.

  {
    "file": "nome-identificador-da-obra.pdf",
    "modalidade": "Coletânea",
    "titulo": "Título completo da obra",
    "autores": "Nome dos autores ou organizadores",
    "sinopse": "Breve sinopse da obra para aparecer no catálogo.",
    "isbn": "978-00-00000-00-0",
    "edicao": "1ª edição digital",
    "ano": "2026",
    "area": "Educação",
    "ordem": 2602,
    "paginas": 100,
    "pdf": "pdfs/nome-do-arquivo.pdf",
    "capa": "covers/nome-da-capa.jpg"
  },

  EXPLICAÇÃO DOS CAMPOS
  - file: identificador único da obra. Use nome simples, sem acentos.
  - modalidade: use "Autoral", "Coletânea" ou "Anais de Evento".
  - titulo: título completo que aparecerá no catálogo.
  - autores: autores ou organizadores.
  - sinopse: texto breve exibido no catálogo.
  - isbn: ISBN da obra. Se não houver, use "Não informado".
  - edicao: exemplo, "1ª edição digital".
  - ano: ano exibido e usado nos filtros.
  - area: área exibida e usada nos filtros.
  - ordem: quanto maior, mais acima a obra aparece no catálogo.
  - paginas: quantidade de páginas do PDF.
  - pdf: caminho do PDF dentro da pasta pdfs.
  - capa: caminho da capa dentro da pasta covers.
  ================================================================
  */

  {
    "file": "pesquisas_profept_ifmt_2025.pdf",
    "modalidade": "Coletânea",
    "titulo": "Pesquisas em Desenvolvimento no Mestrado Profissional em Educação Profissional e Tecnológica - ProfEPT/IFMT (2025)",
    "autores": "Ângela Fátima da Rocha e Marcelo Franco Leão (organizadores)",
    "sinopse": "Reúne pesquisas em desenvolvimento no âmbito do Mestrado Profissional em Educação Profissional e Tecnológica, com foco em investigações vinculadas à formação, às práticas educativas e aos contextos da educação profissional e tecnológica.",
    "isbn": "978-65-83547-13-2",
    "edicao": "Edição digital",
    "ano": "2026",
    "area": "Educação Profissional e Tecnológica",
    "ordem": 2601,
    "paginas": 164,
    "pdf": "pdfs/pesquisas-em-desenvolvimento-no-mestrado-profissional-em-educacao-profissional-e-tecnologi.pdf",
    "capa": "covers/pesquisas-em-desenvolvimento-no-mestrado-profissional-em-educacao-profissional-e-tecnologi.jpg"
  },
  {
    "modalidade": "Anais de Evento",
    "titulo": "Socialização de Experiências no PID, PIBID e PRP: Caderno de Resumo Expandido do VI Semilic",
    "autores": "Thiago Beirigo Lopes, Adriane Barth e Douglas Gonçalves Sete (organizadores)",
    "sinopse": "Caderno de resumos expandidos do VI Seminário de Licenciaturas do IFMT, reunindo experiências formativas vinculadas ao PID, ao PIBID e ao PRP, com ênfase na socialização de práticas pedagógicas e na formação docente.",
    "isbn": "978-65-83547-15-6",
    "edicao": "Edição digital",
    "ano": "2025",
    "area": "Formação de professores",
    "ordem": 2510,
    "paginas": 264,
    "file": "vi_semilic_resumos_expandidos_2025.pdf",
    "pdf": "pdfs/socializacao-de-experiencias-no-pid-pibid-e-prp-caderno-de-resumo-expandido-do-vi-semilic.pdf",
    "capa": "covers/socializacao-de-experiencias-no-pid-pibid-e-prp-caderno-de-resumo-expandido-do-vi-semilic.jpg"
  },
  {
    "modalidade": "Anais de Evento",
    "titulo": "Relatos e Experiências no Âmbito do PID, PIBID e PRP: Caderno de Resumo Simples do VI Semilic",
    "autores": "Thiago Beirigo Lopes, Adriane Barth e Douglas Gonçalves Sete (organizadores)",
    "sinopse": "Caderno de resumos simples do VI Seminário de Licenciaturas do IFMT, reunindo relatos e experiências no âmbito do PID, PIBID e PRP, com foco na formação inicial docente e nas práticas pedagógicas socializadas no evento.",
    "isbn": "978-65-83547-14-9",
    "edicao": "Edição digital",
    "ano": "2025",
    "area": "Formação de professores",
    "ordem": 2509,
    "paginas": 95,
    "file": "vi_semilic_resumos_simples_2025.pdf",
    "pdf": "pdfs/relatos-e-experiencias-no-ambito-do-pid-pibid-e-prp-caderno-de-resumo-simples-do-vi-semilic.pdf",
    "capa": "covers/relatos-e-experiencias-no-ambito-do-pid-pibid-e-prp-caderno-de-resumo-simples-do-vi-semilic.jpg"
  },
  {
    "file": "ii_spem_amazonia_2025.pdf",
    "modalidade": "Anais de Evento",
    "titulo": "Temáticas das Teses e Dissertações em Educação Matemática desenvolvidas na Amazônia",
    "autores": "Dailson Evangelista Costa, Mônica Suelen Ferreira de Moraes e Idemar Vizolli (organizadores)",
    "sinopse": "Publicação vinculada ao II SPEM Amazônia, com trabalhos que discutem temáticas de teses e dissertações em Educação Matemática desenvolvidas na região amazônica.",
    "isbn": "978-65-83547-12-5",
    "edicao": "Edição digital",
    "ano": "2025",
    "area": "Educação Matemática",
    "ordem": 2507,
    "paginas": 974,
    "pdf": "pdfs/tematicas-das-teses-e-dissertacoes-em-educacao-matematica-desenvolvidas-na-amazonia.pdf",
    "capa": "covers/tematicas-das-teses-e-dissertacoes-em-educacao-matematica-desenvolvidas-na-amazonia.jpg"
  },
  {
    "file": "pesquisas_ifmt_unic_2025.pdf",
    "modalidade": "Coletânea",
    "titulo": "Pesquisas em Desenvolvimento no Mestrado em Ensino IFMT/UNIC (2025)",
    "autores": "Marcelo Franco Leão e Ângela Fátima da Rocha (organizadores)",
    "sinopse": "Coletânea que apresenta pesquisas em desenvolvimento no Mestrado em Ensino IFMT/UNIC, evidenciando investigações em diferentes áreas do ensino e das práticas educativas.",
    "isbn": "978-65-83547-07-1",
    "edicao": "Edição digital",
    "ano": "2025",
    "area": "Ensino",
    "ordem": 2506,
    "paginas": 282,
    "pdf": "pdfs/pesquisas-em-desenvolvimento-no-mestrado-em-ensino-ifmt-unic-2025.pdf",
    "capa": "covers/pesquisas-em-desenvolvimento-no-mestrado-em-ensino-ifmt-unic-2025.jpg"
  },
  {
    "file": "fundamentos_teoricos_pratica_educativa_2025.pdf",
    "modalidade": "Coletânea",
    "titulo": "Dos fundamentos teórico-metodológicos à prática educativa: Vivências no Ensino de Ciências e Matemática",
    "autores": "Marcelo Franco Leão e Laura Isabel Marques Vasconcelos de Almeida (organizadores)",
    "sinopse": "Coletânea que articula fundamentos teórico-metodológicos e práticas educativas no Ensino de Ciências e Matemática, reunindo vivências, estudos e reflexões produzidas em contexto formativo.",
    "isbn": "978-65-83547-06-4",
    "edicao": "Edição digital",
    "ano": "2025",
    "area": "Ensino de Ciências e Matemática",
    "ordem": 2505,
    "paginas": 153,
    "pdf": "pdfs/dos-fundamentos-teorico-metodologicos-a-pratica-educativa-vivencias-no-ensino-de-ciencias-.pdf",
    "capa": "covers/dos-fundamentos-teorico-metodologicos-a-pratica-educativa-vivencias-no-ensino-de-ciencias-.jpg"
  },
  {
    "file": "escrita_cientifica_praticas_2025.pdf",
    "modalidade": "Coletânea",
    "titulo": "Escrita Científica e Divulgação de Práticas Educativas (2025)",
    "autores": "Marcelo Franco Leão (organizador)",
    "sinopse": "Obra dedicada à escrita científica e à divulgação de práticas educativas, reunindo produções voltadas à socialização de experiências e investigações acadêmicas.",
    "isbn": "978-65-83547-05-7",
    "edicao": "Edição digital",
    "ano": "2025",
    "area": "Escrita científica e Educação",
    "ordem": 2504,
    "paginas": 59,
    "pdf": "pdfs/escrita-cientifica-e-divulgacao-de-praticas-educativas-2025.pdf",
    "capa": "covers/escrita-cientifica-e-divulgacao-de-praticas-educativas-2025.jpg"
  },
  {
    "file": "entre_praticas_reflexoes_2025.pdf",
    "modalidade": "Coletânea",
    "titulo": "Entre práticas e reflexões: relatos de experiência no ensino de linguagens, códigos e suas tecnologias",
    "autores": "Ana Graciela Mendes Fernandes da Fonseca Voltolini, Claudia Lúcia Landgraf Valério, Epaminondas de Matos Magalhães, Marcos Aparecido Pereira e Rosemar Eurico Coenga (organizadores)",
    "sinopse": "Reúne relatos de experiência e reflexões sobre o ensino de linguagens, códigos e suas tecnologias, destacando práticas pedagógicas e produções em contexto educacional.",
    "isbn": "978-65-83547-04-0",
    "edicao": "Edição digital",
    "ano": "2025",
    "area": "Linguagens e Educação",
    "ordem": 2503,
    "paginas": 123,
    "pdf": "pdfs/entre-praticas-e-reflexoes-relatos-de-experiencia-no-ensino-de-linguagens-codigos-e-suas-t.pdf",
    "capa": "covers/entre-praticas-e-reflexoes-relatos-de-experiencia-no-ensino-de-linguagens-codigos-e-suas-t.jpg"
  },
  {
    "file": "ii_mostra_praticas_pedagogicas_2024.pdf",
    "modalidade": "Anais de Evento",
    "titulo": "Anais da II Mostra Científica de Práticas Pedagógicas",
    "autores": "Raquel Neves Pereira de Queiróz, Chaeny Silva Souza, Rocir Pereira Celestino Castilho, Renan Helder dos Santos Silva e Samara Uchôa Feitoza Wagner (organizadores)",
    "sinopse": "Anais da II Mostra Científica de Práticas Pedagógicas, com publicações derivadas de trabalhos apresentados em evento acadêmico dedicado à divulgação de experiências e investigações pedagógicas.",
    "isbn": "978-65-83547-03-3",
    "edicao": "Edição digital",
    "ano": "2025",
    "area": "Práticas Pedagógicas",
    "ordem": 2502,
    "paginas": 185,
    "pdf": "pdfs/anais-da-ii-mostra-cientifica-de-praticas-pedagogicas.pdf",
    "capa": "covers/anais-da-ii-mostra-cientifica-de-praticas-pedagogicas.jpg"
  },
  {
    "file": "i_spem_amazonia_2024.pdf",
    "modalidade": "Anais de Evento",
    "titulo": "Três décadas de Pesquisas Stricto Sensu em Educação Matemática na Amazônia",
    "autores": "Idemar Vizolli, Dailson Evangelista Costa e Mônica Suelen Ferreira de Moraes (organizadores)",
    "sinopse": "Publicação vinculada ao I SPEM Amazônia, com trabalhos sobre pesquisas stricto sensu em Educação Matemática na Amazônia, contemplando formação de professores, práticas de ensino e tendências investigativas.",
    "isbn": "978-65-983317-8-8",
    "edicao": "Edição digital",
    "ano": "2024",
    "area": "Educação Matemática",
    "ordem": 2409,
    "paginas": 649,
    "pdf": "pdfs/tres-decadas-de-pesquisas-stricto-sensu-em-educacao-matematica-na-amazonia.pdf",
    "capa": "covers/tres-decadas-de-pesquisas-stricto-sensu-em-educacao-matematica-na-amazonia.jpg"
  },
  {
    "file": "iii_etem_2024.pdf",
    "modalidade": "Anais de Evento",
    "titulo": "A formação e o trabalho do professor-pesquisador em Educação Matemática",
    "autores": "Idemar Vizolli, Dailson Evangelista Costa e Mônica Suelen Ferreira de Moraes (organizadores)",
    "sinopse": "Publicação vinculada ao III ETEM, reunindo trabalhos sobre formação docente, pesquisa educacional e atuação do professor-pesquisador em Educação Matemática.",
    "isbn": "978-65-983317-9-5",
    "edicao": "Edição digital",
    "ano": "2024",
    "area": "Educação Matemática",
    "ordem": 2408,
    "paginas": 1059,
    "pdf": "pdfs/a-formacao-e-o-trabalho-do-professor-pesquisador-em-educacao-matematica.pdf",
    "capa": "covers/a-formacao-e-o-trabalho-do-professor-pesquisador-em-educacao-matematica.jpg"
  },
  {
    "file": "retratos_culturas_escolares_2024.pdf",
    "modalidade": "Coletânea",
    "titulo": "Retratos de algumas culturas escolares",
    "autores": "Marcelo Franco Leão, Thiago Beirigo Lopes e Laura Isabel Marques Vasconcelos de Almeida (organizadores)",
    "sinopse": "Coletânea que reúne estudos e reflexões sobre culturas escolares, práticas educativas e formação docente, considerando diferentes contextos e experiências pedagógicas.",
    "isbn": "978-65-83547-01-9",
    "edicao": "Edição digital",
    "ano": "2024",
    "area": "Educação e Cultura Escolar",
    "ordem": 2407,
    "paginas": 189,
    "pdf": "pdfs/retratos-de-algumas-culturas-escolares.pdf",
    "capa": "covers/retratos-de-algumas-culturas-escolares.jpg"
  },
  {
    "file": "ensino_sociedade_diversidades_2024.pdf",
    "modalidade": "Coletânea",
    "titulo": "Ensino, Sociedade e Diversidades: reflexões necessárias na formação docente",
    "autores": "Maria Auxiliadora de Almeida Arruda, Marcelo Franco Leão, Edione Teixeira de Carvalho e Ronaldo Eustáquio Feitosa Senra (organizadores)",
    "sinopse": "Obra que reúne reflexões sobre ensino, sociedade e diversidades, com atenção à formação docente e aos desafios educacionais contemporâneos.",
    "isbn": "978-65-83547-00-2",
    "edicao": "Edição digital",
    "ano": "2024",
    "area": "Educação e Diversidades",
    "ordem": 2406,
    "paginas": 144,
    "pdf": "pdfs/ensino-sociedade-e-diversidades-reflexoes-necessarias-na-formacao-docente.pdf",
    "capa": "covers/ensino-sociedade-e-diversidades-reflexoes-necessarias-na-formacao-docente.jpg"
  },
  {
    "file": "pesquisas_ppgen_ifmt_unic_2024.pdf",
    "modalidade": "Coletânea",
    "titulo": "Pesquisas em Desenvolvimento no Mestrado em Ensino IFMT/UNIC (2024)",
    "autores": "Marcelo Franco Leão e Geison Jader Mello (organizadores)",
    "sinopse": "Coletânea de pesquisas em desenvolvimento no Mestrado em Ensino IFMT/UNIC, reunindo trabalhos sobre diferentes objetos, metodologias e contextos de investigação educacional.",
    "isbn": "978-65-983317-7-1",
    "edicao": "Edição digital",
    "ano": "2024",
    "area": "Ensino",
    "ordem": 2405,
    "paginas": 148,
    "pdf": "pdfs/pesquisas-em-desenvolvimento-no-mestrado-em-ensino-ifmt-unic-2024.pdf",
    "capa": "covers/pesquisas-em-desenvolvimento-no-mestrado-em-ensino-ifmt-unic-2024.jpg"
  },
  {
    "file": "escrita_cientifica_praticas_2024.pdf",
    "modalidade": "Coletânea",
    "titulo": "Escrita Científica e Divulgação de Práticas Educativas (2024)",
    "autores": "Marcelo Franco Leão (organizador)",
    "sinopse": "Obra voltada à escrita científica e à divulgação de práticas educativas, com produções que contribuem para a socialização de experiências acadêmicas e pedagógicas.",
    "isbn": "978-65-983317-6-4",
    "edicao": "Edição digital",
    "ano": "2024",
    "area": "Escrita científica e Educação",
    "ordem": 2404,
    "paginas": 47,
    "pdf": "pdfs/escrita-cientifica-e-divulgacao-de-praticas-educativas-2024.pdf",
    "capa": "covers/escrita-cientifica-e-divulgacao-de-praticas-educativas-2024.jpg"
  },
  {
    "file": "integracao_saberes_ctsa.pdf",
    "modalidade": "Coletânea",
    "titulo": "Integração de saberes e enfoque CTSA: Sequências Didáticas para o Ensino de Ciências da Natureza e Matemática",
    "autores": "Ana Claudia Tasinaffo Alves e Leandro Carbo (organizadores)",
    "sinopse": "Coletânea voltada à integração de saberes e ao enfoque CTSA no ensino de Ciências da Natureza e Matemática, com ênfase em propostas didáticas contextualizadas.",
    "isbn": "978-65-83547-02-6",
    "edicao": "1ª edição digital",
    "ano": "2024",
    "area": "Ciências da Natureza e Matemática",
    "ordem": 2403,
    "paginas": 154,
    "pdf": "pdfs/integracao-de-saberes-e-enfoque-ctsa-sequencias-didaticas-para-o-ensino-de-ciencias-da-nat.pdf",
    "capa": "covers/integracao-de-saberes-e-enfoque-ctsa-sequencias-didaticas-para-o-ensino-de-ciencias-da-nat.jpg"
  },
  {
    "file": "conexoes_ctsa.pdf",
    "modalidade": "Coletânea",
    "titulo": "Conexões CTSA: propostas de sequências didáticas para o ensino de ciências e matemática",
    "autores": "Ana Claudia Tasinaffo Alves e Leandro Carbo (organizadores)",
    "sinopse": "Coletânea de propostas de sequências didáticas fundamentadas na abordagem CTSA, voltadas ao ensino contextualizado de Ciências e Matemática.",
    "isbn": "978-65-997449-8-3",
    "edicao": "Edição digital",
    "ano": "2024",
    "area": "Ciências da Natureza e Matemática",
    "ordem": 2402,
    "paginas": 125,
    "pdf": "pdfs/conexoes-ctsa-propostas-de-sequencias-didaticas-para-o-ensino-de-ciencias-e-matematica.pdf",
    "capa": "covers/conexoes-ctsa-propostas-de-sequencias-didaticas-para-o-ensino-de-ciencias-e-matematica.jpg"
  },
  {
    "file": "tecnologias_digitais_2024.pdf",
    "modalidade": "Coletânea",
    "titulo": "Tecnologias Digitais: experiências de sua utilização no ensino como meio para facilitar a aprendizagem",
    "autores": "Sérgio Gomes da Silva (organizador)",
    "sinopse": "Coletânea que apresenta experiências de uso de tecnologias digitais no ensino, discutindo possibilidades para facilitar a aprendizagem e apoiar práticas pedagógicas.",
    "isbn": "978-65-983317-3-3",
    "edicao": "Edição digital",
    "ano": "2024",
    "area": "Tecnologias Educacionais",
    "ordem": 2401,
    "paginas": 148,
    "pdf": "pdfs/tecnologias-digitais-experiencias-de-sua-utilizacao-no-ensino-como-meio-para-facilitar-a-a.pdf",
    "capa": "covers/tecnologias-digitais-experiencias-de-sua-utilizacao-no-ensino-como-meio-para-facilitar-a-a.jpg"
  },
  {
    "file": "alguns_retratos_cultura_escolar_2024.pdf",
    "modalidade": "Coletânea",
    "titulo": "Alguns retratos da cultura escolar",
    "autores": "Marcelo Franco Leão, Laura Isabel Marques Vasconcelos de Almeida e Thiago Beirigo Lopes (organizadores)",
    "sinopse": "Obra organizada em torno de reflexões sobre cultura escolar, registros iconográficos, práticas pedagógicas e experiências de formação docente em diferentes contextos educativos.",
    "isbn": "978-65-983317-2-6",
    "edicao": "Edição digital",
    "ano": "2024",
    "area": "Educação e Cultura Escolar",
    "ordem": 2400,
    "paginas": 110,
    "pdf": "pdfs/alguns-retratos-da-cultura-escolar.pdf",
    "capa": "covers/alguns-retratos-da-cultura-escolar.jpg"
  },
  {
    "file": "E-Book_Diversidade 2.pdf",
    "modalidade": "Coletânea",
    "titulo": "Diversidade",
    "autores": "Cilene Maria Lima Antunes Maciel e Edione Teixeira Carvalho (organizadoras)",
    "sinopse": "Coletânea dedicada a debates sobre diversidade, educação escolar, educação inclusiva e formação de professores, reunindo estudos sobre diferentes contextos educativos.",
    "isbn": "978-65-997449-9-0",
    "edicao": "Edição digital",
    "ano": "2024",
    "area": "Educação e Diversidade",
    "ordem": 2399,
    "paginas": 89,
    "pdf": "pdfs/diversidade.pdf",
    "capa": "covers/diversidade.jpg"
  },
  {
    "file": "EBOOK 2 (Prova 3) - TEMÁTICAS CONTEMPORÂNEAS PARA O ENSINO DE LÍNGUA E LITERATURA (1).pdf",
    "modalidade": "Coletânea",
    "titulo": "Temáticas contemporâneas para o ensino de Língua e Literatura",
    "autores": "Claudia Lúcia Landgraf Valério, Epaminondas de Matos Magalhães, Marcos Aparecido Pereira e Rosemar Eurico Coenga (organizadores)",
    "sinopse": "Coletânea que aborda educação antirracista, multiletramentos, leitura, literatura, identidades e práticas pedagógicas contemporâneas no ensino de Língua e Literatura.",
    "isbn": "978-65-983317-1-9",
    "edicao": "Edição digital",
    "ano": "2024",
    "area": "Educação, Linguagem e Literatura",
    "ordem": 2398,
    "paginas": 81,
    "pdf": "pdfs/tematicas-contemporaneas-para-o-ensino-de-lingua-e-literatura.pdf",
    "capa": "covers/tematicas-contemporaneas-para-o-ensino-de-lingua-e-literatura.jpg"
  },
  {
    "file": "EBOOK 1 (Prova 3) - Desafios e alternativas para o ensino de Língua e Literatura nas escolas públicas de Mato Grosso.pdf",
    "modalidade": "Coletânea",
    "titulo": "Desafios e alternativas para o ensino de Língua e Literatura nas escolas públicas de Mato Grosso",
    "autores": "Claudia Lúcia Landgraf Valério, Epaminondas de Matos Magalhães, Marcos Aparecido Pereira e Rosemar Eurico Coenga (organizadores)",
    "sinopse": "Livro digital dedicado a reflexões sobre ensino de Língua e Literatura, letramento literário, formação de leitores, práticas docentes e desafios educacionais nas escolas públicas de Mato Grosso.",
    "isbn": "978-65-983317-0-2",
    "edicao": "Edição digital",
    "ano": "2024",
    "area": "Educação, Linguagem e Literatura",
    "ordem": 2397,
    "paginas": 113,
    "pdf": "pdfs/desafios-e-alternativas-para-o-ensino-de-lingua-e-literatura-nas-escolas-publicas-de-mato-.pdf",
    "capa": "covers/desafios-e-alternativas-para-o-ensino-de-lingua-e-literatura-nas-escolas-publicas-de-mato-.jpg"
  },
  {
    "file": "quadro_negro_ao_digital_2023.pdf",
    "modalidade": "Coletânea",
    "titulo": "Do quadro negro ao digital: Experiências e Aspirações de Docentes Mestrandos em Ensino (PPGEn/IFMT-UNIC)",
    "autores": "Thiago Beirigo Lopes e Laura Isabel Marques Vasconcelos de Almeida (organizadores)",
    "sinopse": "Coletânea que discute experiências e aspirações docentes em torno das transformações tecnológicas no ensino, considerando deslocamentos entre práticas tradicionais e recursos digitais.",
    "isbn": "978-65-997449-5-2",
    "edicao": "Edição digital",
    "ano": "2023",
    "area": "Tecnologias Educacionais",
    "ordem": 2302,
    "paginas": 198,
    "pdf": "pdfs/do-quadro-negro-ao-digital-experiencias-e-aspiracoes-de-docentes-mestrandos-em-ensino-ppge.pdf",
    "capa": "covers/do-quadro-negro-ao-digital-experiencias-e-aspiracoes-de-docentes-mestrandos-em-ensino-ppge.jpg"
  },
  {
    "file": "diferentes_aspectos_ensino_ppgen_2023.pdf",
    "modalidade": "Coletânea",
    "titulo": "Diferentes aspectos sobre o Ensino: Algumas investigações desenvolvidas no PPGEn",
    "autores": "Marcelo Franco Leão (organizador)",
    "sinopse": "Coletânea de investigações desenvolvidas no PPGEn, contemplando diferentes objetos de estudo no campo do ensino e das práticas educativas.",
    "isbn": "Não informado",
    "edicao": "Edição digital",
    "ano": "2023",
    "area": "Ensino",
    "ordem": 2301,
    "paginas": 120,
    "pdf": "pdfs/diferentes-aspectos-sobre-o-ensino-algumas-investigacoes-desenvolvidas-no-ppgen.pdf",
    "capa": "covers/diferentes-aspectos-sobre-o-ensino-algumas-investigacoes-desenvolvidas-no-ppgen.jpg"
  },
  {
    "file": "anais_v_jenpex_2022.pdf",
    "modalidade": "Anais de Evento",
    "titulo": "Anais V Jornada de Ensino, Pesquisa e Extensão (JENPEX) e I Seminário de Educação Antirracista (SEAn) do IFMT Campus Confresa",
    "autores": "Célia Ferreira de Sousa (organizadora)",
    "sinopse": "Anais da V Jornada de Ensino, Pesquisa e Extensão e do I Seminário de Educação Antirracista do IFMT Campus Confresa, com produções relacionadas à educação, inclusão social e diversidade no território Araguaia Xingu.",
    "isbn": "Não informado",
    "edicao": "Edição digital",
    "ano": "2022",
    "area": "Ensino, Pesquisa e Extensão",
    "ordem": 2201,
    "paginas": 119,
    "pdf": "pdfs/anais-v-jornada-de-ensino-pesquisa-e-extensao-jenpex-e-i-seminario-de-educacao-antirracist.pdf",
    "capa": "covers/anais-v-jornada-de-ensino-pesquisa-e-extensao-jenpex-e-i-seminario-de-educacao-antirracist.jpg"
  }

];

/*
====================================================================
DESTAQUES_INICIO
--------------------------------------------------------------------
Controla as 3 obras exibidas na página inicial.
Para trocar um destaque, substitua o nome pelo valor do campo "file"
da obra desejada.
====================================================================
*/
const DESTAQUES_INICIO = [
  "pesquisas_profept_ifmt_2025.pdf",
  "vi_semilic_resumos_expandidos_2025.pdf",
  "vi_semilic_resumos_simples_2025.pdf"
];
