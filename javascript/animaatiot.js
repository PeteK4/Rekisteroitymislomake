// Animoi elementit
document.addEventListener("DOMContentLoaded", function() {
    const lomake = document.querySelector(".lomake");
    const animaatioSuunta = document.querySelector('script[src="./javascript/animaatiot.js"]').getAttribute("id");

  // Valitaan animaatio
    if (animaatioSuunta == "vasen>oikea") {
      vasenOikea(lomake);
    } else if (animaatioSuunta == "ylhaalta>alas") {
      ylhaaltaAlas(lomake);
    }
  });
  
// Siirrä elementti vasemmalta oikealle
  function vasenOikea(lomake) {
    const alkupiste = -lomake.offsetWidth;
    const loppupiste = 100;
    lomake.style.left = `${alkupiste}px`;
  
    setTimeout(() => {
      lomake.style.transition = "left .8s";
      lomake.style.left = `${loppupiste}px`;
    }, 0);
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
}, 0);
}