// Functions for Orders Page
function formatarValor(valor) {
  return valor.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
}

// 2.1 -> red text, default line
function Erro1(linha) {
  linha.querySelector(".qtde").textContent = "QTDE INVÁLIDA";
  linha.querySelector(".qtde").classList.add("Erro1");

  linha.querySelector(".total").textContent = "XXX";
  linha.querySelector(".total").classList.add("Erro1");

  linha.querySelector(".unitario").textContent = "XXX";
  linha.querySelector(".unitario").classList.add("Erro1");
}

// 2.2 -> white text, red line
function Erro2(linha) {
  linha.querySelector(".qtde").textContent = "QTDE INVÁLIDA";
  linha.querySelector(".qtde").classList.add("Erro2");

  linha.querySelector(".total").textContent = "XXX";
  linha.querySelector(".total").classList.add("Erro2");

  linha.querySelector(".unitario").textContent = "XXX";
  linha.querySelector(".unitario").classList.add("Erro2");
}

function calcularTotal() {
  let clientes = document.querySelectorAll(".cliente");
  let total = 0;

  clientes.forEach((linha) => {
    let quantidade = linha.querySelector(".qtde").textContent;
    let valor = linha.querySelector(".unitario").textContent;

    if (quantidade > 0 && !isNaN(quantidade) && valor > 0 && !isNaN(valor)) {
      let total = quantidade * valor;
      linha.querySelector(".unitario").textContent = formatarValor(valor);
      linha.querySelector(".total").textContent = formatarValor(total);
    } else {
      // Apply error styling (2.1 or 2.2)
      Erro1(linha);
    }
  });
}

// Initialize calculations when page loads
document.addEventListener("DOMContentLoaded", function () {
  calcularTotal();
});
