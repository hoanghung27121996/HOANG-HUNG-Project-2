

var slides = document.getElementsByClassName("slides");
slides[0].style.display = "block";
var dem = 0;

setInterval(nextSlides, 3000);
function nextSlides() {
    var slides = document.getElementsByClassName("slides");
    var tmp = dem;
    dem ++;
    if (dem == 3) {
        dem = 0;
    }
    slides[dem].style.display = "block";
    slides[tmp].style.display = "none";
}

console.log(slides.length);