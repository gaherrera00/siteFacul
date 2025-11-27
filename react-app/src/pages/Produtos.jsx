import { useEffect, useMemo, useState } from 'react';
import ProductModal from '../components/ProductModal.jsx';
import { products } from '../data/products.js';

export default function Produtos() {
  const [selecionado, setSelecionado] = useState(null);
  const [dataAtual, setDataAtual] = useState('');

  useEffect(() => {
    alert('Bem-vindo! Confira os detalhes dos nossos produtos na janela pop-up.');
    const diasSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    const hoje = new Date();
    const dataFormatada = `${diasSemana[hoje.getDay()]}, ${hoje.getDate()} de ${meses[hoje.getMonth()]} de ${hoje.getFullYear()}`;
    setDataAtual(dataFormatada);
  }, []);

  const cards = useMemo(
    () =>
      products.map((produto) => (
        <div key={produto.name} className="produto" onClick={() => setSelecionado(produto)}>
          <img src={produto.images[0]} alt={produto.name} />
          <div className="produto-info">
            <h3>{produto.name}</h3>
            <p>{produto.description}</p>
            <span className="preco">{produto.price}</span>
            <button className="botao-personalizado" type="button">
              Comprar
            </button>
          </div>
        </div>
      )),
    []
  );

  return (
    <main>
      <div className="data-topo">
        <p id="data-atual" style={{ margin: '10px 0', fontWeight: 'bold' }}>
          {dataAtual}
        </p>
      </div>
      <section id="produtos" className="produtos">
        <h2>Nossos Produtos</h2>
        <div className="produtos-grid">{cards}</div>
      </section>
      <ProductModal produto={selecionado} onClose={() => setSelecionado(null)} />
    </main>
  );
}
