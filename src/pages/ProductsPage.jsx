import React, { useEffect, useState } from 'react';
import '../styles/produtos.css';
import { products } from '../data/products.js';

function formatDate() {
  const diasSemana = [
    'domingo',
    'segunda-feira',
    'terça-feira',
    'quarta-feira',
    'quinta-feira',
    'sexta-feira',
    'sábado',
  ];
  const meses = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro',
  ];

  const hoje = new Date();
  const diaSemana = diasSemana[hoje.getDay()];
  const dia = hoje.getDate();
  const mes = meses[hoje.getMonth()];
  const ano = hoje.getFullYear();

  return `${diaSemana}, ${dia} de ${mes} de ${ano}`;
}

function ProductsPage() {
  const [dataAtual, setDataAtual] = useState('');

  useEffect(() => {
    setDataAtual(formatDate());
  }, []);

  const abrirDetalhes = (produto) => {
    const params = new URLSearchParams({
      popup: 'produto',
      nome: produto.name,
      imagem: produto.image,
      descricao: produto.description,
    });
    const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
    window.open(url, '_blank', 'width=800,height=700');
  };

  return (
    <main>
      <section id="produtos" className="produtos">
        <div className="data-topo">
          <p id="data-atual" style={{ margin: '10px 0', fontWeight: 'bold' }}>
            {dataAtual}
          </p>
        </div>
        <h2>Nossos Produtos</h2>
        <div className="produtos-grid">
          {products.map((produto) => (
            <div
              key={produto.name}
              className="produto"
              onClick={() => abrirDetalhes(produto)}
            >
              <img src={produto.image} alt={produto.name} />
              <div className="produto-info">
                <h3>{produto.name}</h3>
                <p>{produto.description}</p>
                <span className="preco">{produto.price}</span>
                <button className="botao-personalizado">Comprar</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default ProductsPage;
