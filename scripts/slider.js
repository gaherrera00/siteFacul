let slideIndex = 0;

function mostrarSlide(index) {
  const slides = document.querySelectorAll(".carrossel-slide");
  if (!slides.length) return;

  slideIndex = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => {
    slide.classList.toggle("ativo", i === slideIndex);
  });
}

function proximoSlide() {
  mostrarSlide(slideIndex + 1);
}

function slideAnterior() {
  mostrarSlide(slideIndex - 1);
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarSlide(slideIndex);

  const btnProximo = document.querySelector(".carrossel-btn.proximo");
  const btnAnterior = document.querySelector(".carrossel-btn.anterior");

  btnProximo?.addEventListener("click", proximoSlide);
  btnAnterior?.addEventListener("click", slideAnterior);
});
