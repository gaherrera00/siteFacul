import React from 'react';
import '../styles/popProdutos.css';

function PopProduct() {
  const params = new URLSearchParams(window.location.search);
  const nome = params.get('nome');
  const imagem = params.get('imagem');
  const descricao = params.get('descricao');

  return (
    <main>
      <div className="produto-container">
        <h1 className="produto-titulo">{nome}</h1>
        <img className="produto-imagem" src={decodeURIComponent(imagem || '')} alt="Imagem do produto" />
        <p className="produto-descricao">{descricao}</p>
      </div>
    </main>
  );
}

export default PopProduct;
