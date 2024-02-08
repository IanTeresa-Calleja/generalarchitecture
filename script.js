var currentIndex = 0;
var totalSlides = document.querySelectorAll('.carousel-image').length;

function showSlide(index) {
    currentIndex = (index + totalSlides) % totalSlides;
    var offset = currentIndex * 100;
    document.getElementById('image-carousel').style.transform = 'translateX(-' + offset + 'vw)';
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function search() {
    var searchInput = document.getElementById('searchInput').value;
    console.log('Searching for: ' + searchInput);
    return false;
}

setInterval(nextSlide, 7000);