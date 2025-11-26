# Site Faculdade 🌐

Projeto front-end baseado no layout do `siteFacul` com funcionalidades do repositório base `SilFazendoArte_25TA`.

- **Home em React:** somente a página inicial foi portada para React (JSX simples, sem router ou estado global) usando o mesmo HTML/CSS do layout original.
- **Demais páginas em HTML/JS puro:** Produtos, Contato, Encomendas e o pop-up de produto permanecem em `public/` com os scripts vanilla originais.
- **Estilos e mídia:** CSS e imagens continuam em `public/styles` e `public/img`, reaproveitando o visual existente.

## Como rodar
1. Instale as dependências (apenas React/Vite):
   ```bash
   npm install
   ```
2. Suba o ambiente de desenvolvimento (serve a home React e os HTMLs de `public/`):
   ```bash
   npm run dev
   ```
3. Para gerar os arquivos estáticos (home em React + páginas HTML copiadas de `public/`):
   ```bash
   npm run build
   ```

## Estrutura
- `index.html`: ponto de entrada do Vite para a home em React.
- `src/App.jsx` e `src/main.jsx`: componentes mínimos para renderizar a home.
- `public/`: páginas HTML originais (`produtos.html`, `contatos.html`, `encomendas.html`, `popProdutos.html`), scripts vanilla e assets.

## Publicar no GitHub Pages
O workflow `.github/workflows/deploy.yml` já publica `dist` no GitHub Pages. Ajuste `base` em `vite.config.js` se usar um nome de repositório diferente de `siteFacul`.
