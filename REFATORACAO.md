# Migração para React com mesmo nível de simplicidade

## Comparativo rápido
- **Estrutura de páginas**: mantidas Home, Produtos, Contato e Encomendas, iguais ao fluxo original.
- **Quantidade de componentes**: cabeçalho e rodapé compartilhados e uma página por tela principal, sem padrões avançados.
- **JS/Interatividade**: mesmas ações do projeto base (popup de produto, data do dia, busca e filtro de pedidos, duplo clique para remover, formulário que adiciona linha).
- **Navegação**: usa hash (`#home`, `#produtos`, `#contatos`, `#encomendas`) para trocar de página, equivalente aos links entre HTMLs do layout base.

## O que foi replicado do projeto base
- Listagem de produtos com abertura de detalhes em nova janela.
- Inserção da data atual na página de produtos.
- Formulário de pedidos que inclui novos registros na tabela e calcula totais.
- Campo de busca que filtra clientes e remoção com duplo clique, mantendo a confirmação.
- Estrutura visual (banner, história, mapa, benefícios e vídeo) igual ao HTML original.

## Como o layout atual se encaixa
- CSS original foi reaproveitado em `src/styles`, preservando cores, espaçamentos e tipografia.
- Imagens e mídias permanecem em `/public/img`, mantendo os mesmos caminhos usados no layout existente.
- Componentes React apenas organizam o mesmo HTML em blocos reutilizáveis (cabeçalho e rodapé) para evitar repetição.

## Nova estrutura em React
- `src/App.jsx`: controla navegação simples por hash e decide qual página renderizar ou se deve exibir o popup de produto.
- `src/pages/HomePage.jsx`: conteúdo da página inicial (banner, história, mapa, benefícios, vídeo).
- `src/pages/ProductsPage.jsx`: grade de produtos e abertura da janela de detalhes.
- `src/pages/ContactPage.jsx`: formulário de contato estático como no HTML original.
- `src/pages/OrdersPage.jsx`: tabela de clientes, busca, inclusão de pedidos e remoção por duplo clique.
- `src/pages/PopProduct.jsx`: exibe detalhes do produto na janela aberta via `window.open` usando query string.
- `src/components/Header.jsx` e `src/components/Footer.jsx`: mesmos elementos de navegação e rodapé usados nas páginas.
- `public/img`: mesma pasta de mídia usada pelo layout.

## Lista de funcionalidades preservadas
- Navegação entre páginas por links simples.
- Detalhe de produto em nova janela com nome, imagem e descrição.
- Exibição da data atual na listagem de produtos.
- Busca por cliente em encomendas, adição de novos pedidos, cálculo/mascara de moeda e remoção por confirmação.
- Formulário de contato sem lógica extra, como no projeto base.

## Garantia de equivalência e ausência de complexidade extra
- Não foram adicionadas bibliotecas além de React e Vite (apenas para suportar JSX).
- Lógica permanece imperativa e direta, sem hooks complexos, estado global ou padrões avançados.
- A navegação continua simples (hash), e o popup usa `window.open` com query string como antes.
- Cada página corresponde a um HTML original, mantendo o mesmo nível de detalhamento e interatividade.
