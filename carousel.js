const currentIndexDisplay = document.querySelector('#currentSlideIndexDisplay');
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel__slide');

let currentIndex = 0;

// UPDATE CURRENT INDEX WHEN SCROLLING WITH FINGER OR MOUSE WHEEL SCROLL
const updateCurrentIndex = () => {
  const scrollLeft = carousel.scrollLeft;
  const slideGap = getCarouselGap();
  const slideWidth = slides[0].offsetWidth + slideGap;
  const newIndex = Math.floor(scrollLeft / slideWidth);
  if (newIndex !== currentIndex) {
    currentIndex = newIndex;
  }
  currentIndexDisplay.textContent = newIndex;
};

// FUNCTION TO GET THE --carousel-gap VALUE
const getCarouselGap = () =>
  parseFloat(getComputedStyle(carousel).getPropertyValue('--carousel-gap'));

carousel.addEventListener('scroll', updateCurrentIndex);
