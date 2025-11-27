function abrirDetalhes(nome, imagens, descricao) {
  const listaImagens = Array.isArray(imagens)
    ? imagens
    : `${imagens}`
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);

  const url = `popProdutos.html?nome=${encodeURIComponent(
    nome
  )}&imagem=${encodeURIComponent(listaImagens.join(","))}&descricao=${encodeURIComponent(
    descricao
  )}`;
  window.open(url, "_blank", "width=800,height=700");
}

// Insere a data atual no topo da página
document.addEventListener("DOMContentLoaded", function () {
  alert("Bem-vindo! Confira os detalhes dos nossos produtos na janela pop-up.");

  const diasSemana = [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado",
  ];
  const meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];

  const hoje = new Date();
  const diaSemana = diasSemana[hoje.getDay()];
  const dia = hoje.getDate();
  const mes = meses[hoje.getMonth()];
  const ano = hoje.getFullYear();

  const dataFormatada = `${diaSemana}, ${dia} de ${mes} de ${ano}`;
  document.getElementById("data-atual").textContent = dataFormatada;
});
