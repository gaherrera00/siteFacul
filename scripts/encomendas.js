// Utilidades
function formatarValor(valor) {
  return Number(valor || 0).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
}

function normalizarValor(valor) {
  if (typeof valor === "number") return valor;
  return Number(String(valor).replace(/[^\d,.-]/g, "").replace(",", "."));
}

function criarLinhaEncomenda({ nome, produto, quantidade, valor }) {
  const linha = document.createElement("tr");
  linha.classList.add("cliente");
  linha.innerHTML = `
    <td class="nome">${nome}</td>
    <td class="produtoCliente">${produto}</td>
    <td class="qtde">${quantidade}</td>
    <td class="unitario">${valor}</td>
    <td class="total"></td>
  `;
  validarLinha(linha);
  return linha;
}

function validarLinha(linha) {
  const quantidadeEl = linha.querySelector(".qtde");
  const valorEl = linha.querySelector(".unitario");
  const totalEl = linha.querySelector(".total");

  const quantidade = Number(quantidadeEl.textContent);
  const valor = normalizarValor(valorEl.textContent);

  const quantidadeValida = quantidade > 0 && !Number.isNaN(quantidade);
  const valorValido = valor > 0 && !Number.isNaN(valor);

  linha.classList.remove("info-invalida");
  quantidadeEl.classList.remove("info-invalida");
  valorEl.classList.remove("info-invalida");
  totalEl.classList.remove("info-invalida", "info-invalida2");

  if (quantidadeValida && valorValido) {
    valorEl.textContent = formatarValor(valor);
    totalEl.textContent = formatarValor(quantidade * valor);
  } else {
    totalEl.textContent = "Dados inválidos";
    linha.classList.add("info-invalida");
    if (!quantidadeValida) quantidadeEl.classList.add("info-invalida");
    if (!valorValido) valorEl.classList.add("info-invalida");
    totalEl.classList.add("info-invalida2");
  }
}

function recalcularTotais() {
  document.querySelectorAll(".cliente").forEach(validarLinha);
}

// Adiciona item via formulário
const formulario = document.querySelector("form");
formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value.trim();
  const produto = document.getElementById("produto").value;
  const quantidade = Number(document.getElementById("quantidade").value);
  const valor = Number(document.getElementById("valor").value);

  const novaLinha = criarLinhaEncomenda({
    nome,
    produto,
    quantidade,
    valor,
  });

  document.querySelector(".tabelaClientes").appendChild(novaLinha);
  formulario.reset();
});

// Busca incremental por prefixo
const campoBusca = document.querySelector("#buscar");
campoBusca.addEventListener("input", function () {
  const termo = this.value.trim().toLowerCase();
  const linhas = document.querySelectorAll(".cliente");

  linhas.forEach((linha) => {
    const nome = linha.querySelector(".nome").textContent.toLowerCase();
    const corresponde = !termo || nome.startsWith(termo);
    linha.classList.toggle("invisivel", !corresponde);
  });
});

// Remover item com fade out
const tabela = document.querySelector(".tabelaClientes");
tabela.addEventListener("dblclick", function (event) {
  const linha = event.target.closest("tr");
  if (!linha || !linha.classList.contains("cliente")) return;

  linha.classList.add("fadeOut");
  setTimeout(() => linha.remove(), 500);
});

// Importação via API
async function importarEncomendas() {
  try {
    const resposta = await fetch("http://localhost:3000/encomendas_web");
    if (!resposta.ok) throw new Error("Não foi possível buscar a API.");

    const encomendas = await resposta.json();
    encomendas.forEach((item) => {
      const linha = criarLinhaEncomenda({
        nome: item.nome,
        produto: item.produto,
        quantidade: Number(item.quantidade),
        valor: Number(item.valor),
      });
      tabela.appendChild(linha);
    });
  } catch (erro) {
    console.error(erro);
    alert("Erro ao buscar encomendas da API. Verifique a conexão e tente novamente.");
  }
}

document
  .getElementById("buscar-api")
  .addEventListener("click", importarEncomendas);

recalcularTotais();
