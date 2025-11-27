// Função para pegar parâmetros da URL
function pegarParametro(nome) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(nome);
}

// Pegar os dados enviados via URL
const nomeProduto = pegarParametro("nome") || "Produto";
const imagensParam = pegarParametro("imagem") || pegarParametro("imagens");
const descricaoProduto = pegarParametro("descricao") || "";

// Elementos da página
const tituloEl = document.querySelector(".produto-titulo");
const imagemEl = document.querySelector(".produto-imagem");
const descricaoEl = document.querySelector(".produto-descricao");
const indicadorEl = document.querySelector(".produto-indicador");
const btnAnterior = document.querySelector(".slider-btn.anterior");
const btnProximo = document.querySelector(".slider-btn.proximo");
const btnFechar = document.querySelector(".fechar-popup");

// Trata lista de imagens
const listaImagens = imagensParam
  ? decodeURIComponent(imagensParam)
      .split(",")
      .map((img) => img.trim())
      .filter(Boolean)
  : [];

let indiceAtual = 0;

function atualizarSlider() {
  if (!listaImagens.length) {
    imagemEl.removeAttribute("src");
    indicadorEl.textContent = "";
    btnAnterior.disabled = true;
    btnProximo.disabled = true;
    return;
  }

  indiceAtual = (indiceAtual + listaImagens.length) % listaImagens.length;
  imagemEl.src = listaImagens[indiceAtual];
  imagemEl.alt = nomeProduto;
  indicadorEl.textContent = `${indiceAtual + 1} / ${listaImagens.length}`;
  const travado = listaImagens.length <= 1;
  btnAnterior.disabled = travado;
  btnProximo.disabled = travado;
}

btnAnterior?.addEventListener("click", () => {
  indiceAtual -= 1;
  atualizarSlider();
});

btnProximo?.addEventListener("click", () => {
  indiceAtual += 1;
  atualizarSlider();
});

btnFechar?.addEventListener("click", () => window.close());

// Atualizar o conteúdo da página
tituloEl.textContent = nomeProduto;
descricaoEl.textContent = descricaoProduto;
atualizarSlider();
