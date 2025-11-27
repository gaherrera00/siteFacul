import { useEffect, useState } from 'react';

export default function ProductModal({ produto, onClose }) {
  const [indice, setIndice] = useState(0);

  useEffect(() => setIndice(0), [produto]);

  if (!produto) return null;

  const imagens = produto.images || [];
  const mover = (delta) => setIndice((atual) => (atual + delta + imagens.length) % imagens.length);
  const travado = imagens.length <= 1;

  return (
    <div className="popup-overlay" role="dialog" aria-modal="true">
      <div className="popup-card">
        <button className="fechar-popup" onClick={onClose} aria-label="Fechar">
          ×
        </button>
        <h2 className="produto-titulo">{produto.name}</h2>
        <div className="slider">
          <button className="slider-btn anterior" onClick={() => mover(-1)} disabled={travado}>
            ❮
          </button>
          <img className="produto-imagem" src={imagens[indice]} alt={produto.name} />
          <button className="slider-btn proximo" onClick={() => mover(1)} disabled={travado}>
            ❯
          </button>
        </div>
        <div className="produto-indicador">
          {imagens.length ? `${indice + 1} / ${imagens.length}` : ''}
        </div>
        <p className="produto-descricao">{produto.description}</p>
        <span className="preco">{produto.price}</span>
      </div>
    </div>
  );
}
