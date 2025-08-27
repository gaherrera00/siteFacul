// Functions for Popup Product Page
function getParametro(dado) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(dado);
}

// Initialize popup content when page loads
document.addEventListener("DOMContentLoaded", function () {
  const tituloElement = document.querySelector(".produto-titulo");
  const imagemElement = document.querySelector(".produto-imagem");
  const descricaoElement = document.querySelector(".produto-descricao");

  if (tituloElement) {
    tituloElement.textContent = getParametro("nome") || "Produto";
  }

  if (imagemElement) {
    imagemElement.src = getParametro("imagem") || "";
  }

  if (descricaoElement) {
    descricaoElement.textContent =
      getParametro("descricao") || "Descrição não disponível";
  }
});
