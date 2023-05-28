const carouselContainer = document.querySelector('.carousel__images');
const prevBtn = document.querySelector('.carousel__btn--prev');
const nextBtn = document.querySelector('.carousel__btn--next');
const modal = document.querySelector('.modal');
const modalImage = document.querySelector('.modal-image');
const modalClose = document.querySelector('.modal-close');
const modalBack = document.querySelector('.modal-back');

prevBtn.addEventListener('click', () => {
  carouselContainer.scrollBy({
    left: -carouselContainer.offsetWidth,
    behavior: 'smooth'
  });
});

nextBtn.addEventListener('click', () => {
  carouselContainer.scrollBy({
    left: carouselContainer.offsetWidth,
    behavior: 'smooth'
  });
});

carouselContainer.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG') {
    const imageSrc = event.target.src;
    modalImage.src = imageSrc;
    modal.style.display = 'block';
  }
});

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

modalBack.addEventListener('click', () => {
  modal.style.display = 'none';
});
