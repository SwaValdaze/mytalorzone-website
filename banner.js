const slides = document.querySelector('.banner-slides');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
  currentIndex = index;
}

function currentSlide(index) {
  showSlide(index);
}

setInterval(() => {
  const nextIndex = (currentIndex + 1) % dots.length;
  showSlide(nextIndex);
}, 4000);
