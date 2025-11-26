// Função para pegar parâmetros da URL
function pegarParametro(nome) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(nome);
}

// Pegar os dados enviados via URL
const nomeProduto = pegarParametro("nome");
const imagemProduto = pegarParametro("imagem");
const descricaoProduto = pegarParametro("descricao");

// Atualizar o conteúdo da página
document.querySelector(".produto-titulo").textContent = nomeProduto;
document.querySelector(".produto-imagem").src =
  decodeURIComponent(imagemProduto);
document.querySelector(".produto-descricao").textContent = descricaoProduto;
