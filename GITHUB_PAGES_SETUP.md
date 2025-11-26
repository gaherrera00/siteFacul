# Publicação no GitHub Pages

Este repositório já contém o workflow de publicação (`.github/workflows/deploy.yml`). Para ativar o GitHub Pages basta habilitar a opção no GitHub e fazer um push.

## Passo a passo
1. Faça push da branch `main` para o GitHub.
2. No GitHub, abra **Settings > Pages**.
3. Em **Source**, selecione **GitHub Actions** e salve.
4. A action "Deploy to GitHub Pages" será executada automaticamente a cada push na `main` (ou manualmente via **Run workflow** em **Actions**).
5. Após o término da action, a URL pública aparecerá no log (formato `https://<usuario>.github.io/siteFacul/`).

## Observações
- Se o repositório tiver outro nome, ajuste o `base` em `vite.config.js` para corresponder (ex.: `base: '/novo-repo/'`).
- É necessário ter permissões de administrador no repositório para ativar o Pages em **Settings**.
- Não é possível habilitar o Pages diretamente daqui; siga os passos acima na interface do GitHub.
