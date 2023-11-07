nappi.addEventListener("click", function(event) {
  event.preventDefault()
  const maaHuomautus = document.getElementById("maaOk");
  const spHuomautus = document.getElementById("sukupuoli");
  const kieliHuomautus = document.getElementById("kieli");
  const maaValittu = document.getElementById("maa")[0].value;
  const kaikkiKentat = [id, salasana, nimi, osoite, maa, postinumero, sahkoposti, sukupuoli, kieli];

  let kieliOk = false;
  let maaOk = false;
  let sukupuoliOk = false;
  let kaikkiOk = 9;

  // Tarkista kentät 
  kaikkiKentat.forEach((syottoKentta) => {
    if (syottoKentta.value == "") {
      naytaHuomautus(syottoKentta, "* Täytä tämä kenttä");
      kaikkiOk -=1;
    } else if (syottoKentta == id && syottoKentta.value.length < 6) {
      naytaHuomautus(syottoKentta, "* Anna vähintään 6 merkkiä");
      kaikkiOk -=1;
    } else if (syottoKentta == sahkoposti && !tarkistaSposti(syottoKentta.value)) {
      naytaHuomautus(syottoKentta, "* Sähköpostiosoiteessa on virhe. (esim. nimi@email.fi)");
      kaikkiOk -=1;
    } else if (syottoKentta == postinumero && !tarkistaPostinro(syottoKentta.value)) {
      naytaHuomautus(syottoKentta, "* Anna 5-numeroinen postinumero");
      kaikkiOk -=1;
    } else if (syottoKentta == sukupuoli && document.querySelector('input[name="sukupuoli"]:checked')) {
      sukupuoliOk = true
    } else if (syottoKentta == kieli && document.querySelector('input[name="kieli"]:checked')) {
      kieliOk = true
    } else if (syottoKentta == maa && maaValittu == "") {
      maaOk = true;
    }
  });

// Näytä huomautukset syöttökenttien perässä (maa, sukupuoli, kieli), jos valintaa ei ole tehty
if (!maaOk) {
  maaHuomautus.style.color = "red";
  maaHuomautus.style.fontWeight = "normal";
  maaHuomautus.textContent = "* Valitse maa";
  kaikkiOk -=1;
} else {
  maaHuomautus.textContent = "";
}

  if (!sukupuoliOk) {
    spHuomautus.style.color = "red";
    spHuomautus.style.fontWeight = "normal";
    spHuomautus.textContent = "* Valitse sukupuoli";
    kaikkiOk -=1; 
  } else {
    spHuomautus.textContent = "";
  }

  if (!kieliOk) {
    kieliHuomautus.style.color = "red";
    kieliHuomautus.style.fontWeight = "normal";
    kieliHuomautus.textContent = "* Valitse kieli";
    kaikkiOk -=1;
  } else {
    kieliHuomautus.textContent = "";
  }

  // Lähetä viesti ----------------------------------------------------------------------------------------

  if (kaikkiOk == 9) {
  window.location.href = "./viestiok.html";
  } 

  // -----------------------------------------------------------------------------------------------------
  })

// Näytä huomautus syöttökentässä, jos kenttä on tyhjä tai virheellisesti täytetty
function naytaHuomautus(syottoKentta, teksti) {
  syottoKentta.value = "";
  syottoKentta.placeholder = teksti;
  syottoKentta.classList.add("huomautus-vari");
}

// Tarkista, onko sähköpostiosoite kirjoitettu oikein ja palauttaa joko true tai false
function tarkistaSposti(sahkoposti) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(sahkoposti);
}

// Tarkista, onko postinumero 5-numeroinen
function tarkistaPostinro(postinumero) {
  const regex = /^\d{5}$/;
  return regex.test(postinumero);
}

// Poista huomautus
const aktiivinen = (syottoKentta) => {
  if (syottoKentta.placeholder != "") {
    syottoKentta.placeholder = "";
  }
};

// Aseta syöttökenttä aktiiviseksi
[id, salasana, nimi, osoite, postinumero, sahkoposti].forEach((syottoKentta) => {
  syottoKentta.addEventListener("focus", () => aktiivinen(syottoKentta));
});


