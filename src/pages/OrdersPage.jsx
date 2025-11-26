import React, { useMemo, useState } from 'react';
import '../styles/encomendas.css';

const initialOrders = [
  {
    nome: 'Carolina',
    produto: 'Pirulitos coloridos (10 unidades)',
    quantidade: 2,
    unitario: 50,
  },
  {
    nome: 'Margarete',
    produto: 'Combo Brigadeiros (6 unidades)',
    quantidade: 2,
    unitario: 30,
  },
  { nome: 'Daniele', produto: 'Fatia de bolo (Creme)', quantidade: 1, unitario: 25 },
  { nome: 'Daniele', produto: 'Fatia de bolo (Chocolate)', quantidade: 0, unitario: 25 },
];

function formatarValor(valor) {
  return valor.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
}

function OrdersPage() {
  const [orders, setOrders] = useState(initialOrders);
  const [busca, setBusca] = useState('');
  const [form, setForm] = useState({ nome: '', produto: '', quantidade: '', valor: '' });

  const filtrados = useMemo(
    () =>
      orders.filter((order) =>
        order.nome.toLowerCase().includes(busca.trim().toLowerCase())
      ),
    [orders, busca]
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const quantidade = Number(form.quantidade);
    const valorUnitario = Number(form.valor);

    const novoPedido = {
      nome: form.nome.trim(),
      produto: form.produto,
      quantidade,
      unitario: valorUnitario,
    };

    setOrders((prev) => [...prev, novoPedido]);
    setForm({ nome: '', produto: '', quantidade: '', valor: '' });
  };

  const handleRemover = (index) => {
    const deveRemover = window.confirm('Tem certeza que deseja excluir essa linha?');
    if (deveRemover) {
      setOrders((prev) => prev.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="encomendas-container">
      <h2>Encomendas</h2>
      <div className="buscar">
        <h4>Buscar clientes:</h4>
        <input
          type="search"
          id="buscar"
          name="buscar"
          placeholder="Nome do cliente"
          value={busca}
          onChange={(event) => setBusca(event.target.value)}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Valor unitario</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody className="tabelaClientes">
          {filtrados.map((item, index) => {
            const totalValido = item.quantidade > 0 && !Number.isNaN(item.unitario);
            const valorExibido = totalValido ? formatarValor(item.unitario) : 'XXX';
            const total = totalValido ? formatarValor(item.quantidade * item.unitario) : 'XXX';

            return (
              <tr
                className="cliente"
                key={`${item.nome}-${index}`}
                onDoubleClick={() => handleRemover(index)}
              >
                <td className="nome">{item.nome}</td>
                <td className="produtoCliente">{item.produto}</td>
                <td className="qtde">{item.quantidade}</td>
                <td className="unitario">{valorExibido}</td>
                <td className="total">{total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <section className="form-contato">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Fazer Pedido</legend>

            <label htmlFor="nome">Nome do Cliente:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              required
              value={form.nome}
              onChange={handleInputChange}
            />

            <label htmlFor="produto">Produto:</label>
            <select
              id="produto"
              name="produto"
              required
              value={form.produto}
              onChange={handleInputChange}
            >
              <option value="">Selecione um produto</option>
              <option value="Brigadeiro Gourmet">Brigadeiro Gourmet</option>
              <option value="Bolo de Morango">Bolo de Morango</option>
              <option value="Doce Vegano">Doce Vegano</option>
              <option value="Caixa Personalizada">Caixa Personalizada</option>
              <option value="Pudim de Leite">Pudim de Leite</option>
              <option value="Trufa de Maracujá">Trufa de Maracujá</option>
              <option value="Mini Cheesecake">Mini Cheesecake</option>
              <option value="Cookies com Gotas de Chocolate">
                Cookies com Gotas de Chocolate
              </option>
              <option value="Bombom de Uva">Bombom de Uva</option>
              <option value="Doce de Leite com Nozes">Doce de Leite com Nozes</option>
              <option value="Rocambole de Chocolate">Rocambole de Chocolate</option>
              <option value="Torta Banoffee">Torta Banoffee</option>
            </select>

            <label htmlFor="quantidade">Quantidade:</label>
            <input
              type="number"
              id="quantidade"
              name="quantidade"
              min="1"
              required
              value={form.quantidade}
              onChange={handleInputChange}
            />

            <label htmlFor="valor">Valor Unitário (R$):</label>
            <input
              type="number"
              id="valor"
              name="valor"
              min="0.01"
              step="0.01"
              required
              value={form.valor}
              onChange={handleInputChange}
            />

            <input type="submit" value="Enviar Pedido" />
          </fieldset>
        </form>
      </section>
    </div>
  );
}

export default OrdersPage;
