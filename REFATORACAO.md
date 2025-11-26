# Migração parcial para React (somente a Home)

## O que foi convertido
- A página inicial agora é renderizada por um componente React simples (`src/App.jsx`), usando apenas JSX e referências diretas às imagens e ao CSS original.
- O HTML da home foi reescrito em JSX mantendo as mesmas seções do layout base: banner, "Sobre nós", mapa, benefícios e vídeo.

## O que permanece igual ao projeto base
- Produtos, pop-up de produto, Contatos e Encomendas continuam em HTML + CSS + JavaScript puro dentro de `public/`, reaproveitando os scripts (`public/scripts`) e folhas de estilo (`public/styles`) originais.
- Navegação feita por links entre arquivos (`index.html`, `produtos.html`, `contatos.html`, `encomendas.html`), sem router ou estado global.

## Como evitamos complexidade
- Nenhum hook além do componente funcional padrão; sem contextos, sem roteadores, sem novos padrões.
- CSS e imagens originais foram mantidos em `public/` e referenciados por caminho base (`import.meta.env.BASE_URL`) apenas para garantir que funcionem no GitHub Pages.
- Estrutura mínima em `src/`: apenas `main.jsx` e `App.jsx` para montar a home.

## Garantia de equivalência
- Conteúdo, links e ordem das seções da home são os mesmos do HTML base.
- As demais páginas mantêm exatamente a lógica vanilla (tabela de encomendas com busca, inclusão, remoção e consumo de API; popup de produto aberto por `window.open`), sem alterações de comportamento.
