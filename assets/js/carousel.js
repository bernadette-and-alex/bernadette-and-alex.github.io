var ids = ["Santiago", "Fonsagrada", "Oviedo", "Lugo", "Porto", "Berducedo", "Campiello", "Fisterra", "Ponte-de-Lima", "Barcelos", "Melide", "Pacos"];

var slideIndex = {};

for (let i of ids) {
  slideIndex[i] = 1;
}
showSlides();

// Next/previous controls
function plusSlides(s, n) {
  slideIndex[s] += n;
  showSlides();
}

function showSlides() {
  for (let s of ids) {
    var i;
    var slides = document.getElementById(s).getElementsByClassName("mySlides");
    if (slideIndex[s] > slides.length) { slideIndex[s] = 1 }

    if (slideIndex[s] < 1) { slideIndex[s] = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    if (slides.length > 1) {
      slides[slideIndex[s] - 1].style.display = "block";
    }
  }
}