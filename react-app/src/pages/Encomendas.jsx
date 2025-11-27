import { useMemo, useState } from 'react';

let contador = 0;
const produtos = ['Brigadeiro', 'Bolo', 'Doce vegano', 'Caixa personalizada'];

function formatarValor(valor) {
  return Number(valor || 0).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

function normalizarValor(valor) {
  if (typeof valor === 'number') return valor;
  return Number(String(valor).replace(/[^\d,.-]/g, '').replace(',', '.'));
}

export default function Encomendas() {
  const [linhas, setLinhas] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [removendo, setRemovendo] = useState(null);

  const adicionar = (event) => {
    event.preventDefault();
    const dados = new FormData(event.target);
    const nova = {
      id: contador++,
      nome: dados.get('nome').trim(),
      produto: dados.get('produto'),
      quantidade: Number(dados.get('quantidade')),
      valor: Number(dados.get('valor')),
    };
    setLinhas((lista) => [...lista, nova]);
    event.target.reset();
  };

  const remover = (id) => {
    setRemovendo(id);
    setTimeout(() => {
      setLinhas((lista) => lista.filter((linha) => linha.id !== id));
      setRemovendo(null);
    }, 500);
  };

  const importarApi = async () => {
    try {
      const resposta = await fetch('http://localhost:3000/encomendas_web');
      if (!resposta.ok) throw new Error('Não foi possível buscar a API.');
      const encomendas = await resposta.json();
      setLinhas((lista) => [
        ...lista,
        ...encomendas.map((item) => ({
          id: contador++,
          nome: item.nome,
          produto: item.produto,
          quantidade: Number(item.quantidade),
          valor: Number(item.valor),
        })),
      ]);
    } catch (erro) {
      console.error(erro);
      alert('Erro ao buscar encomendas da API. Verifique a conexão e tente novamente.');
    }
  };

  const linhasFiltradas = useMemo(() => {
    const termo = filtro.trim().toLowerCase();
    return linhas.filter((linha) => !termo || linha.nome.toLowerCase().startsWith(termo));
  }, [linhas, filtro]);

  return (
    <main>
      <h2>Encomendas</h2>
      <form onSubmit={adicionar}>
        <label>Nome</label>
        <input type="text" name="nome" required />

        <label>Produto</label>
        <select name="produto" required>
          {produtos.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>

        <label>Quantidade</label>
        <input type="number" name="quantidade" min="1" required />

        <label>Valor</label>
        <input type="number" name="valor" step="0.01" min="0" required />

        <button type="submit">Adicionar</button>
      </form>

      <div className="acoes-encomendas">
        <input
          id="buscar"
          type="search"
          placeholder="Buscar pelo nome"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
        <button id="buscar-api" type="button" onClick={importarApi}>
          Importar encomendas da API
        </button>
      </div>

      <table className="tabelaClientes">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Valor unitário</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {linhasFiltradas.map((linha) => {
            const quantidadeValida = linha.quantidade > 0 && !Number.isNaN(linha.quantidade);
            const valorNumerico = normalizarValor(linha.valor);
            const valorValido = valorNumerico > 0 && !Number.isNaN(valorNumerico);
            const invalida = !(quantidadeValida && valorValido);
            const total = quantidadeValida && valorValido ? formatarValor(linha.quantidade * valorNumerico) : 'Dados inválidos';

            return (
              <tr
                key={linha.id}
                className={`cliente ${invalida ? 'info-invalida' : ''} ${removendo === linha.id ? 'fadeOut' : ''}`}
                onDoubleClick={() => remover(linha.id)}
              >
                <td className={`nome ${invalida && !linha.nome ? 'info-invalida' : ''}`}>{linha.nome}</td>
                <td className="produtoCliente">{linha.produto}</td>
                <td className={`qtde ${!quantidadeValida ? 'info-invalida' : ''}`}>{linha.quantidade}</td>
                <td className={`unitario ${!valorValido ? 'info-invalida' : ''}`}>{formatarValor(valorNumerico)}</td>
                <td className={`total ${invalida ? 'info-invalida2' : ''}`}>{total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
