// Função para formatar valor em real
function formatarValor(valor) {
  return valor.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
}

// Adiciona item à tabela
function addItem() {
  const nome = document.getElementById("nome").value.trim();
  const produto = document.getElementById("produto").value;
  const quantidade = Number(document.getElementById("quantidade").value);
  const valorUnitario = Number(document.getElementById("valor").value);

  const tbody = document.querySelector(".tabelaClientes");

  const tr = document.createElement("tr");
  tr.classList.add("cliente");

  tr.innerHTML = `
    <td class="nome">${nome}</td>
    <td class="produtoCliente">${produto}</td>
    <td class="qtde">${quantidade}</td>
    <td class="unitario">${formatarValor(valorUnitario)}</td>
    <td class="total">${formatarValor(quantidade * valorUnitario)}</td>
  `;

  tbody.appendChild(tr);

  document.querySelector("form").reset();
}

// Função de pesquisa de cliente
document.querySelector("#buscar").addEventListener("input", function () {
  const linhas = document.querySelectorAll(".cliente");

  linhas.forEach((linha) => {
    const nome = linha.querySelector(".nome").textContent.toLowerCase();
    if (nome.includes(this.value.toLowerCase())) {
      linha.classList.remove("invisivel");
    } else {
      linha.classList.add("invisivel");
    }
  });
});

// Remover item da tabela com duplo clique
document
  .querySelector(".tabelaClientes")
  .addEventListener("dblclick", function (event) {
    const linha = event.target.closest("tr");
    if (confirm("Tem certeza que deseja excluir essa linha?")) {
      linha.remove();
    }
  });

// Evento para envio do formulário
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  addItem();
});

// Calcular total ao carregar
function calcularTotal() {
  const linhas = document.querySelectorAll(".cliente");

  linhas.forEach((linha) => {
    let quantidade = Number(linha.querySelector(".qtde").textContent);
    let valor = linha.querySelector(".unitario").textContent;

    // Remover formatação
    valor = Number(valor.replace(/[^\d,]/g, "").replace(",", "."));

    if (quantidade > 0 && !isNaN(valor)) {
      const total = quantidade * valor;
      linha.querySelector(".unitario").textContent = formatarValor(valor);
      linha.querySelector(".total").textContent = formatarValor(total);
    } else {
      linha.querySelector(".total").textContent = "XXX";
    }
  });
}

calcularTotal();
