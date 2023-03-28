const carousel = document.querySelector('.carousel');
const carouselContainer = carousel.querySelector('.carousel-container');
const prevButton = carousel.querySelector('.carousel-prev');
const nextButton = carousel.querySelector('.carousel-next');
const carouselItems = carousel.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;
let slide = 0;

function nextSlide() {
    if (slide === totalItems - 1) {
        slide = 0;
    } else {
        slide++;
    }
    updateSlide();
}

function prevSlide() {
    if (slide === 0) {
        slide = totalItems - 1;
    } else {
        slide--;
    }
    updateSlide();
}

function updateSlide() {
    carouselContainer.style.transform = `translateX(-${slide * 100}%)`;
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);