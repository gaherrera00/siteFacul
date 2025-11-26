# Análise de funcionalidades

## Visão geral
- **Repositório base (`SilFazendoArte_25TA`)**: site estático com quatro páginas (home, produtos, pop-up de produto e contato) mais uma página de encomendas com operações em JavaScript vanilla para calcular totais, validar dados, filtrar, adicionar/remover linhas e consumir uma API local.
- **Repositório atual (`siteFacul`)**: aplicação React com navegação por hash, páginas equivalentes e lógica reimplementada para produtos e encomendas, mas com variações de dados, validações e interações.

## Funcionalidades do repositório base
- **Home**: carrossel manual com botões anterior/próximo, seção "Sobre nós", mapa embutido, lista simples de produtos e um vídeo do YouTube. Navegação por links diretos para as outras páginas. **Sem** lógica de formulário ou estado na home. As imagens do carrossel são trocadas pelo script `js/slider.js` controlando exibição sequencial.
- **Produtos**: alerta inicial, exibição da data atual via script inline, grid de cards com textos e preços estáticos. Clique abre uma nova janela (`window.open`) para `pop_produtos.html` passando nome, imagem ou lista de imagens e descrição via query string. Há um slider simples na pop-up percorrendo a lista recebida.
- **Contato**: formulário estático com campos obrigatórios apenas pelo atributo `required`, sem envio ou validação extra em JavaScript.
- **Encomendas**:
  - Cálculo do total por linha e formatação em BRL, com marcação de células inválidas para quantidade ou unitário (`js/encomenda.js`).
  - Busca em tempo real no campo "Buscar" que filtra linhas pelo prefixo do nome, escondendo (`classList.add('invisivel')`) quando não coincide (`js/buscar_encomenda.js`).
  - Inclusão de nova encomenda a partir de formulário, montando manualmente `<tr>` e `<td>` e calculando total/formatando valores (`js/adiciona_encomenda.js`).
  - Remoção por duplo clique na linha com um efeito de fade (classe `fadeOut`) antes de `remove()` (`js/remove_encomenda.js`).
  - Botão "Buscar da API" que faz `XMLHttpRequest` para `http://localhost:3000/encomendas_web` e adiciona cada item retornado usando o mesmo fluxo de inclusão (`js/api_encomenda.js`).

## Funcionalidades presentes no repositório atual
- **Navegação**: header fixa navegação por hash (`#home`, `#produtos`, `#contatos`, `#encomendas`), sem troca de rota pelo servidor. Quando a URL traz `popup=produto`, apenas a pop-up é renderizada.
- **Home (`src/pages/HomePage.jsx`)**: renderiza banner, textos institucionais e mapa, mas **não** possui carrossel funcional nem vídeo incorporado. Conteúdo textual e ilustrações diferem do base.
- **Produtos (`src/pages/ProductsPage.jsx`)**: mostra data formatada em português, grid mapeado de `src/data/products.js` e, ao clicar, abre nova janela com `popup=produto` e parâmetros de nome/imagem/descrição. O pop-up (`src/pages/PopProduct.jsx`) exibe apenas uma imagem única e não inclui slider para múltiplas imagens.
- **Contato (`src/pages/ContactPage.jsx`)**: formulário com campos controlados em React e validação mínima via atributos HTML. Não há envio ou integração externa.
- **Encomendas (`src/pages/OrdersPage.jsx`)**:
  - Tabela inicial construída a partir de um array local `initialOrders`, com cálculo de total apenas para linhas válidas; valores inválidos exibem "XXX" em vez de marcar células.
  - Filtro por substring no nome (não apenas prefixo) usando `toLowerCase` e `includes`.
  - Inclusão de pedidos via formulário controlado que converte campos em `Number` e acrescenta ao estado; sem formatação monetária ao inserir até recalcular na renderização.
  - Remoção acionada por `window.confirm` no duplo clique, sem efeito visual de fade.
  - **Não** há botão ou lógica para buscar dados de uma API externa.

## Convergências e divergências
- **Equivalências**: ambas as versões têm quatro páginas principais e um pop-up de produto, exibem produtos em um grid clicável e oferecem tabela de encomendas com busca, adição e remoção de linhas, além de formatação de valores monetários em BRL no fluxo de encomendas.
- **Diferenças**:
  - O carrossel, o vídeo e a lista de produtos estática da home do base não estão replicados; a navegação usa hash em vez de links entre arquivos HTML.
  - O pop-up do base aceita múltiplas imagens e usa slider, enquanto a versão atual exibe imagem única sem navegação.
  - As validações de encomendas (marcação de campos inválidos) e o consumo de API local estão ausentes na versão atual; a filtragem usa `includes` em vez de comparação de prefixo e a remoção pede confirmação.
  - Dados textuais e rótulos (produtos, pedidos iniciais) divergem do conteúdo original.
