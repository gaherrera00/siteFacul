# Análise das funcionalidades da página inicial

## Comparativo dos repositórios
- **Repositório base (`SilFazendoArte_25TA`)**: site estático em HTML/CSS/JS puro. A home traz cabeçalho com navegação entre arquivos, banner, texto institucional, iframe do Google Maps, lista de benefícios e um vídeo local. Não há formulários ou lógica dinâmica na home além do carregamento do mapa.
- **Repositório de layout (`siteFacul`)**: layout visual utilizado como base (cores, imagens e texto). Agora a home roda em React para permitir reaproveitar a estrutura, enquanto as demais páginas permanecem exatamente em HTML/CSS/JS vanilla.

## Funcionalidades da home do repositório base
- Navegação por links simples para Produtos, Contato e Encomendas.
- Banner estático e seção "Sobre nós" com texto corrido e imagem ilustrativa.
- Mapa incorporado via iframe apontando para o endereço de referência.
- Lista estática de benefícios com imagem lateral.
- Vídeo local reproduzido em loop e sem controles.

## O que foi replicado no layout final
- Mesmo cabeçalho, rodapé e links diretos para as páginas HTML existentes.
- Mesma ordem de seções (banner → sobre → mapa → benefícios → vídeo) e textos originais.
- Uso das mesmas imagens (`/img`) e folha de estilos `styles/index.css` para preservar o visual.
- Ausência de novas interações ou validações: apenas renderização estática, igual ao base.

## Integração com as demais páginas
- Produtos, Contatos, Encomendas e pop-up de produto continuam em HTML + CSS + JavaScript puro dentro de `public/`, reaproveitando os scripts originais.
- Os links do cabeçalho da home React apontam diretamente para esses arquivos HTML, mantendo o fluxo de navegação idêntico ao projeto base.
