// Functions for Products Page
function abrirDetalhes(nome, imagem, descricao) {
  const url = `popProdutos.html?nome=${encodeURIComponent(
    nome
  )}&imagem=${encodeURIComponent(imagem)}&descricao=${encodeURIComponent(
    descricao
  )}`;
  window.open(url, "_blank", "width=800,height=700");
}

// Insert current date at the top of the page
document.addEventListener("DOMContentLoaded", function () {
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
  const dataElement = document.getElementById("data-atual");
  if (dataElement) {
    dataElement.textContent = dataFormatada;
  }
});
