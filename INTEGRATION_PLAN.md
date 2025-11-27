# Integração do SilFazendoArte_25TA no siteFacul

## 1. Inventário do repositório **SilFazendoArte_25TA**
### Estrutura e páginas
- Páginas principais: `index.html` (home com carrossel, seções de apresentação, mapa e vídeo), `produtos.html` (listagem de produtos com abertura de detalhes), `pop_produtos.html` (janela de detalhes com slider), `contatos.html` (formulário de contato) e `encomendas.html` (tabela de encomendas com CRUD básico e busca). 
- Pastas de suporte: `css/` (estilos específicos por página), `js/` (scripts de carrossel, catálogo e encomendas) e `img/` (logo, banners, produtos e ícones).【F:SilFazendoArte_25TA/index.html†L1-L65】【F:SilFazendoArte_25TA/produtos.html†L1-L91】

### Funcionalidades e componentes
- **Navegação fixa com logo** em todas as páginas, mantendo rotas para Home, Produtos, Contatos e Encomendas.【F:SilFazendoArte_25TA/index.html†L9-L21】
- **Carrossel manual** na home com botões anterior/próximo controlados por `slider.js`. Imagens são ocultadas/exibidas via `showSlide` e o estado é mantido em `slideIndex`.【F:SilFazendoArte_25TA/js/slider.js†L1-L23】
- **Seções institucionais**: texto “Sobre nós”, lista “Nossos produtos”, mapa incorporado do Google Maps e vídeo YouTube para demonstração de produtos.【F:SilFazendoArte_25TA/index.html†L33-L75】
- **Catálogo interativo** (`produtos.html`): cards de produtos que disparam `abrirDetalhes`, abrindo uma pop-up com descrição e slider de imagens múltiplas quando aplicável. Data atual é exibida com arrays de dia/mês em JavaScript. Alert inicial apresenta mensagem de boas-vindas aos produtos.【F:SilFazendoArte_25TA/produtos.html†L4-L68】
- **Pop-up de produto** (`pop_produtos.html`): recebe parâmetros via query string, injeta nome, descrição e constrói slider com botões de navegação. Lista de imagens é recebida como string separada por vírgulas e iterada com índice circular. 【F:SilFazendoArte_25TA/pop_produtos.html†L1-L46】
- **Formulário de contato**: coleta nome, email, telefone, mensagem, preferência de contato (rádio), motivo (select) e opt-in de novidades, com botão de envio. 【F:SilFazendoArte_25TA/contatos.html†L15-L57】
- **Gestão de encomendas**:
  - Tabela inicial com clientes e produtos; cálculo automático do total e formatação monetária (`encomenda.js`). Valida quantidade e valor, marcando erros com classes `info-invalida` e `info-invalida2`.【F:SilFazendoArte_25TA/js/encomenda.js†L1-L37】
  - Inclusão de novas linhas via formulário (`adiciona_encomenda.js`) usando montagem dinâmica de `<tr>`/`<td>` e reuso de funções de cálculo/formatação. 【F:SilFazendoArte_25TA/js/adiciona_encomenda.js†L1-L40】
  - Remoção de linhas com duplo clique e animação `fadeOut` antes de remover o nó (`remove_encomenda.js`).【F:SilFazendoArte_25TA/js/remove_encomenda.js†L1-L13】
  - **Busca incremental** por nome** (`buscar_encomenda.js`), ocultando linhas não correspondentes e reexibindo quando o campo é limpo. 【F:SilFazendoArte_25TA/js/buscar_encomenda.js†L1-L25】
  - **Importação via API** (`api_encomenda.js`): botão que faz `XMLHttpRequest` para `http://localhost:3000/encomendas_web`, parseia JSON e adiciona cada encomenda reutilizando `addEncomendaTabela`. 【F:SilFazendoArte_25TA/js/api_encomenda.js†L1-L12】
- **Efeitos/Interações**: carrossel de slides, pop-up com slider, alert de boas-vindas, busca em tempo real, animação de remoção, formatação monetária e cálculo de totais.

### Dependências e recursos
- Dependência externa: Font Awesome 4.5 via CDN para ícones de WhatsApp/Instagram. 【F:SilFazendoArte_25TA/index.html†L3-L7】
- Integrações incorporadas: Google Maps (iframe) e YouTube (iframe).
- JavaScript puro (sem frameworks) com manipulação de DOM, `window.open`, `XMLHttpRequest`, `URLSearchParams` e métodos nativos.

## 2. Inventário do repositório **siteFacul**
### Estrutura e páginas
- Páginas existentes: `index.html` (home institucional com história, benefícios, mapa e vídeo), `produtos.html` (grade de produtos que abre pop-up de detalhes), `popProdutos.html` (exibe detalhes recebidos por query string), `contatos.html` (formulário de contato) e `encomendas.html` (tabela com formulário e busca).【F:index.html†L1-L120】【F:produtos.html†L1-L130】
- Pastas de suporte: `styles/` (CSS por página), `scripts/` (lógicas de produtos, pop-up e encomendas) e `img/` (logo, mídia e produtos).【F:produtos.html†L8-L12】【F:popProdutos.html†L6-L8】

### Funcionalidades e componentes
- **Navegação e layout**: cabeçalho com logo e menu principal em todas as páginas; rodapé institucional padrão. 【F:index.html†L16-L31】【F:index.html†L200-L206】
- **Home**: banner estático, seções de história/benefícios com imagem e vídeo institucional. Não possui carrossel ou lista de produtos resumida na home. 【F:index.html†L26-L120】
- **Catálogo de produtos**: grade de cards com botão “Comprar”; clique abre pop-up de detalhes via `abrirDetalhes` que envia nome/imagem/descrição. Data atual exibida no topo via JS. 【F:produtos.html†L18-L118】【F:scripts/produtos.js†L1-L35】
- **Pop-up de produto**: mostra nome, imagem e descrição a partir de parâmetros; sem slider ou múltiplas imagens. 【F:popProdutos.html†L10-L17】【F:scripts/popProdutos.js†L1-L15】
- **Formulário de contato**: campos de dados pessoais, preferências de contato, motivo e opt-in; sem lógica JS adicional. 【F:contatos.html†L16-L60】
- **Encomendas**:
  - Tabela inicial com cálculo de totais e formatação monetária feitos ao carregar (`calcularTotal`). Linhas inválidas exibem “XXX”. 【F:scripts/encomendas.js†L35-L58】
  - Inclusão de novos pedidos via formulário com validação básica e cálculo de total. 【F:scripts/encomendas.js†L9-L33】
  - Busca de clientes por substring (case-insensitive) e remoção com confirmação em duplo clique. 【F:scripts/encomendas.js†L23-L34】【F:scripts/encomendas.js†L60-L71】

### Dependências e recursos
- Fontes Google (Roboto), favicon e mídia local; nenhuma biblioteca JS externa. 【F:index.html†L7-L13】【F:produtos.html†L8-L12】
- Apenas JavaScript vanilla em `scripts/`.

## 3. Gap analysis (o que falta no siteFacul em relação ao SilFazendoArte_25TA)
- **Carrossel na home** (prev/next, controle por `slider.js`) não existe no siteFacul. 【F:SilFazendoArte_25TA/index.html†L22-L32】
- **Seção “Sobre nós” com destaque de produtos e lista rápida** não está na home atual (há apenas história/benefícios). 【F:SilFazendoArte_25TA/index.html†L33-L61】
- **Bloco “Nossos produtos” com lista e imagem lateral** ausente na home. 【F:SilFazendoArte_25TA/index.html†L61-L70】
- **Pop-up com slider de imagens múltiplas** e passagem com botões não existe no pop-up do siteFacul. 【F:SilFazendoArte_25TA/pop_produtos.html†L9-L40】
- **Alerta de boas-vindas** ao catálogo e exibição de data com arrays de dia/mês no `produtos.html` original não foram replicados (siteFacul só formata data). 【F:SilFazendoArte_25TA/produtos.html†L4-L39】
- **Integração de encomendas com busca incremental por prefixo**, marcação de inválidos com classes especiais e animação `fadeOut` são ausentes. SiteFacul tem busca por substring e remoção confirmada, mas não aplica classes de validação nem animação. 【F:SilFazendoArte_25TA/js/encomenda.js†L12-L37】【F:SilFazendoArte_25TA/js/remove_encomenda.js†L1-L13】
- **Importação de encomendas via API** não existe no siteFacul. 【F:SilFazendoArte_25TA/js/api_encomenda.js†L1-L12】
- **Formulário de encomendas específico** com opções predefinidas de produtos/filtros e botão “Buscar da API” não está presente. 【F:SilFazendoArte_25TA/encomendas.html†L20-L83】

## 4. Plano de integração (mantendo visual do siteFacul)
### Princípios gerais
- **Não alterar estilos existentes**: manter classes e CSS de `styles/`. Novos componentes devem usar classes próprias ou herdar estilos existentes sem sobrescrever regras globais.
- **Adicionar, não substituir**: preservar todos os arquivos atuais; criar novos blocos/páginas apenas quando necessário.
- **Organização**: colocar novos scripts em `scripts/` espelhando a nomenclatura atual; novas páginas/ativos em subpastas similares (`img/`, `styles/`).

### Funcionalidades e como integrar
1) **Carrossel na home**
- Origem: `SilFazendoArte_25TA/index.html` + `js/slider.js`.
- Integração: adicionar container de carrossel abaixo do header em `index.html` do siteFacul, com imagens reutilizando assets atuais ou cópias das imagens originais em `img/`. Copiar `slider.js` para `scripts/slider.js` e importar no final do `index.html` sem alterar estilos globais (usar classes específicas `.carrossel`, `.carrossel-btn`).
- Novos arquivos: `scripts/slider.js`; possíveis novas imagens em `img/`.
- Preservação visual: adicionar CSS dedicado (`styles/slider.css` ou bloco interno) com nomes de classe não conflitantes; não editar CSS existente.

2) **Seção “Sobre nós” e “Nossos produtos” resumidos**
- Origem: blocos `<section>` de `SilFazendoArte_25TA/index.html` (texto, lista, imagem e vídeo YouTube já existe no siteFacul).
- Integração: inserir seção adicional após o banner ou antes da localização em `index.html`, ajustando apenas markup para caber no layout atual. Usar classes novas (`sobre-nos-resumida`, `nossos-produtos-resumo`) com CSS complementar em `styles/index-ext.css` para evitar impacto.
- Novos arquivos: opcional `styles/index-ext.css` importado após o CSS atual.

3) **Pop-up com slider de imagens**
- Origem: `SilFazendoArte_25TA/pop_produtos.html` + script inline.
- Integração: estender `popProdutos.html` do siteFacul para incluir slider (botões prev/next e `<img id="slider-img">`) e lógica JS separada (`scripts/popProdutosSlider.js`) que consome múltiplas imagens passadas na query (string separada por vírgulas). Manter layout atual envolvendo o slider dentro do container existente.
- Novos arquivos: `scripts/popProdutosSlider.js`; ajuste em `scripts/produtos.js` para enviar lista de imagens quando houver múltiplas fotos (sem remover comportamento atual).
- Preservação visual: classes isoladas (`.slider`, `.slider-btn`) com CSS extra em `styles/popProdutos-ext.css` carregado após o CSS padrão.

4) **Alerta inicial e data com arrays**
- Origem: script inicial de `produtos.html` (alert e arrays `dia/mes`).
- Integração: incorporar alerta opcional no `DOMContentLoaded` em `scripts/produtos.js` e, para compatibilidade, permitir configuração via flag para não interferir na UX. Arrays de dia/mês já podem reutilizar lógica existente de formatação.
- Novos arquivos: ajuste no `scripts/produtos.js` mantendo funções atuais.

5) **Gestão de encomendas avançada**
- Origem: `SilFazendoArte_25TA/encomendas.html` e scripts `encomenda.js`, `adiciona_encomenda.js`, `remove_encomenda.js`, `buscar_encomenda.js`, `api_encomenda.js`.
- Integração: 
  - Expandir `encomendas.html` do siteFacul com botão “Buscar da API”, select de produtos pré-definidos e classes de validação (`info-invalida`, `info-invalida2`, `fadeOut`, `invisivel`).
  - Dividir lógicas em novos arquivos em `scripts/` (`encomendas-validacao.js`, `encomendas-api.js`, `encomendas-busca-prefixo.js`, `encomendas-animacao.js`) importados após o script existente para não quebrar estilo e manter código organizado.
  - Reaproveitar funções utilitárias (formatação/cálculo) do arquivo atual ou extrair para módulo compartilhado.
  - Implementar `XMLHttpRequest` ou `fetch` para `http://localhost:3000/encomendas_web`, adicionando novos itens com as funções já usadas para inserir linhas.
- Novos arquivos: scripts mencionados e, se necessário, CSS incremental (`styles/encomendas-ext.css`) para classes de animação/erro.
- Preservação visual: usar animações discretas (opacidade) que não alterem layout; classes novas não devem sobrescrever estilos de tabela existentes.

6) **Formulário de encomenda detalhado**
- Origem: seção “Adicionar encomenda” de `SilFazendoArte_25TA/encomendas.html`.
- Integração: substituir opções do select ou adicionar novo bloco de formulário abaixo do existente usando as mesmas classes de layout para manter consistência. Campos e rótulos podem reutilizar estilos atuais; validações e placeholders podem ser adicionados via JS sem mudar CSS.

7) **Contato sem dependências adicionais**
- Origem: `contatos.html` (campos e preferências). Estrutura já similar; nenhuma ação necessária além de alinhar mensagens e placeholders, se desejado.

## 5. Passo a passo para integrar
1. **Preparar assets**: copiar imagens adicionais de produtos e banners para `img/` mantendo nomes descritivos; criar novos CSS complementares (`styles/index-ext.css`, `styles/popProdutos-ext.css`, `styles/encomendas-ext.css`) e referenciá-los após os arquivos existentes.
2. **Adicionar carrossel**: inserir bloco HTML do carrossel na `index.html` do siteFacul logo abaixo do header; incluir `<script src="./scripts/slider.js"></script>` no fim do body; criar `scripts/slider.js` com lógica do carrossel e ajustar seletores para `.carrossel img`.
3. **Incluir seções resumidas**: colar o conteúdo “Sobre nós” e “Nossos produtos” antes da seção de localização, adaptando classes para não conflitar; estilizar no CSS complementar.
4. **Estender pop-up de produtos**: atualizar `popProdutos.html` adicionando wrapper `div.slider` com botões prev/next e imagem; criar `scripts/popProdutosSlider.js` para ler query `imagem` como lista e navegar; carregar o novo script após `popProdutos.js`.
5. **Atualizar abertura de produtos**: em `scripts/produtos.js`, permitir que `abrirDetalhes` aceite array de imagens (usar `join(',')` antes de `encodeURIComponent`) e mantenha compatibilidade com chamadas existentes que enviam string única.
6. **Encomendas – validação e API**: 
   - Acrescentar botão “Buscar da API” e bloco de formatação de erros em `encomendas.html`; 
   - Criar scripts separados para validação de quantidade/valor (adicionando classes `info-invalida`), remoção animada (classe `fadeOut` via CSS), busca por prefixo e consumo da API com `fetch`/`XMLHttpRequest`; 
   - Importar os novos arquivos após `scripts/encomendas.js` garantindo que funções utilitárias sejam compartilhadas.
7. **Formulário avançado**: replicar opções de produtos do repositório original no `select` do formulário, mantendo estilos atuais; adicionar placeholders e mensagens coerentes sem alterar cores/tipografia.
8. **Testes**: abrir cada página no navegador local; verificar funcionamento do carrossel, abertura de pop-up com slider, cálculo/formatação de encomendas, busca/remoção/adição, e chamada da API (mockar endpoint se necessário). Validar que estilos originais permanecem intactos.

