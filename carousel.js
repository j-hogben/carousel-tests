const currentIndexDisplay = document.querySelector('#currentSlideIndexDisplay');
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel__slide');
const carouselPrev = document.querySelector('.carousel__button--prev');
const carouselNext = document.querySelector('.carousel__button--next');

let currentIndex = 0;

// UPDATE CURRENT INDEX WHEN SCROLLING WITH FINGER OR MOUSE WHEEL SCROLL
const updateCurrentIndex = () => {
  const scrollLeft = carousel.scrollLeft;
  const slideGap = getCarouselGap();
  const slideWidth = slides[0].offsetWidth + slideGap;
  const newIndex = Math.round(scrollLeft / slideWidth);
  if (newIndex !== currentIndex) {
    currentIndex = newIndex;
    styleInvalidCarouselNavBtns(currentIndex);
  }
  currentIndexDisplay.textContent = newIndex;
};

// FUNCTION TO GET THE --carousel-gap VALUE
const getCarouselGap = () =>
  parseFloat(getComputedStyle(carousel).getPropertyValue('--carousel-gap'));

// FUNCTION TO ADD INVALID BUTTON STYLE DEPENDING ON CURRENT INDEX
const styleInvalidCarouselNavBtns = (index) => {
  /* IF INDEX IS 0 (FIRST SLIDE SELECTED), INVALIDATE THE
  'PREVIOUS' CAROUSEL NAVIGATION BUTTON */
  if (index === 0) {
    carouselPrev.classList.add('carousel-button-invalid');
  } else {
    carouselPrev.classList.remove('carousel-button-invalid');
  }

  /* IF INDEX IS LAST SLIDE, INVALIDATE THE 'NEXT' 
  CAROUSEL NAVIGATION BUTTON */
  if (index === slides.length - 1) {
    carouselNext.classList.add('carousel-button-invalid');
  } else {
    carouselNext.classList.remove('carousel-button-invalid');
  }
};

carousel.addEventListener('scroll', updateCurrentIndex);
