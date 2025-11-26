# Site Faculdade 🌐

Projeto front-end estático criado para treinar HTML, CSS e JavaScript.  
Inclui estrutura responsiva e navegação entre seções.

## Funcionalidades
- Layout limpo e responsivo
- Páginas de apresentação, cursos e contato
- Uso de variáveis CSS e organização modular

## Tecnologias
- HTML
- CSS
- JavaScript

## Objetivo
Demonstrar base sólida em front-end puro e boas práticas de estilização.

## Publicar no GitHub Pages
Siga estes passos para publicar o projeto em `github.io` usando o fluxo do GitHub Pages:

1. Garanta que o repositório se chama `siteFacul` (ou ajuste o `base` no `vite.config.js` para corresponder ao nome do repositório).
2. Faça o push da branch `main` para o GitHub.
3. No GitHub, vá em **Settings > Pages** e selecione **Source: GitHub Actions**.
4. O workflow `.github/workflows/deploy.yml` já faz o build (`npm ci && npm run build`) e publica o conteúdo de `dist` no GitHub Pages ao receber push na `main` ou via **Run workflow**.
5. Aguarde a finalização da action e acesse a URL indicada no log (formato `https://<usuario>.github.io/siteFacul/`).

Se usar outro nome de repositório, troque o valor de `base` no `vite.config.js` para `'/novo-nome/'` antes de buildar e publicar.

Para um passo a passo rápido e observações adicionais, consulte também `GITHUB_PAGES_SETUP.md`.
