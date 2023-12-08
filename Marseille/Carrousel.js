let currentSlide = 0;

function changeSlide(n) {
    console.log("Change slide called");
    showSlide(currentSlide += n);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    if (n >= slides.length) {
        currentSlide = 0;
    } else if (n < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = n;
    }

    document.getElementById('carousel').style.transform = 'translateX(' + (-currentSlide * 100) + '%)';
}

function showArrows() {
    document.getElementById('prev').style.opacity = '1';
    document.getElementById('next').style.opacity = '1';
}

function hideArrows() {
    document.getElementById('prev').style.opacity = '0';
    document.getElementById('next').style.opacity = '0';
}