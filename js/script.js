// script.js

const track = document.querySelector('.slider-track');
const items = document.querySelectorAll('.slider-item');
const itemWidth = items[0].offsetWidth + 20; // ширина + отступы
let currentIndex = 0;

function scrollSlider() {
    currentIndex++;
    if (currentIndex >= items.length) {
        currentIndex = 0;
    }
    const offset = currentIndex * itemWidth;
    track.style.transform = `translateX(-${offset}px)`;
}

setInterval(scrollSlider, 10000);
