import { useEffect, useState } from 'react';

const slides = [
  { src: '/img/banner.jpeg', alt: 'Linha de doces artesanais' },
  { src: '/img/beneficios.jpg', alt: 'Seleção de sobremesas' },
  { src: '/img/personalizado.jpg', alt: 'Caixa personalizada de doces' },
];

export default function Carousel() {
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndice((atual) => (atual + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);

  const mover = (delta) => setIndice((atual) => (atual + delta + slides.length) % slides.length);

  return (
    <section className="carrossel" aria-label="Galeria de destaques">
      <button className="carrossel-btn anterior" aria-label="Slide anterior" onClick={() => mover(-1)}>
        ❮
      </button>
      <div className="carrossel-slides">
        {slides.map((slide, i) => (
          <div key={slide.src} className={`carrossel-slide ${i === indice ? 'ativo' : ''}`}>
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </div>
      <button className="carrossel-btn proximo" aria-label="Próximo slide" onClick={() => mover(1)}>
        ❯
      </button>
    </section>
  );
}
