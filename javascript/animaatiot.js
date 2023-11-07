const image = new Image();
image.src = "./paperi.webp";

image.addEventListener("load", function() {
  const lomake = document.querySelector(".lomake");
  const animaatioSuunta = document.querySelector('script[src="./javascript/animaatiot.js"]').getAttribute("id");

  // Valitaan animaatio / laitetaan lomake näkyviin
  if (animaatioSuunta == "vasen>oikea") {
    lomake.style.display = "block";
    vasenOikea(lomake);
  } else if (animaatioSuunta == "ylhaalta>alas") {
    lomake.style.display = "block";
    ylhaaltaAlas(lomake);
  }
});

// Siirrä elementti vasemmalta oikealle
function vasenOikea(lomake) {
  const alkupiste = -lomake.offsetWidth;
  const loppupiste = 100;
  lomake.style.left = `${alkupiste}px`;

  setTimeout(() => {
    lomake.style.transition = "left 0.8s";
    lomake.style.left = `${loppupiste}px`;
  }, 100);
}

// Siirrä elementti ylhäältä alas
function ylhaaltaAlas(lomake) {
  const alkupiste = -lomake.offsetHeight - 120;
  const loppupiste = 20;
  lomake.style.top = `${alkupiste}px`;
  lomake.style.left = "100px";

  setTimeout(() => {
    lomake.style.transition = "top 0.8s";
    lomake.style.top = `${loppupiste}px`;
  }, 100);
}
