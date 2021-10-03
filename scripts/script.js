let hungarianLangue = document.getElementById("magyar");
let englishLangue = document.getElementById("english");

function translateToHungarian() {
  //menu translate:
  document.getElementById("about").innerText = "Rólam";
  document.getElementById("myskills").innerText = "Képességek";
  document.getElementById("work").innerText = "Munkák";
  document.getElementById("contact").innerText = "Kapcsolat";
  //main elements translate:
  document.getElementById('debut').innerText = "Rólam"
  document.getElementById('textAbout').innerText = "Üdv! József vagyok. Ha minden jól megy, hamarosan Frontend fejlesztő leszek. Az EU-ban tevékenykedem. Webes felületeket fejlesztek a felhasználói interfészekre és az adat vizualizációra specializálódva. Teljes web-projekteket is vállalok, Joomla és Wordpress motorokkal, valamint webshopokat. Problémamegoldó típusú ember vagyok kitüntetett figyelemet szentelek a részletekre. A teljes Frontend spektrummal foglalkozom. Siklóernyőzöm és három gyermekem van.";
  document.getElementById('skillsTitle').innerText = "Képességek";
  document.getElementById('workTitle').innerText = "Munkáim";
  document.getElementById('contactTitle').innerText = "Kapcsolat";
  document.getElementById('contactText').innerText = "Ha bármely kérdése vagy kérése lenne, ne habozzon az űrlapot használni.";
  //html langue change:
  document.documentElement.setAttribute('lang', 'hu');
  //form translate:
  document.getElementById('fname').setAttribute('placeholder', 'Név');
  document.getElementById('subject').setAttribute('placeholder', 'Tárgy');
  document.getElementById('message').setAttribute('placeholder', 'Üzenet');
  document.getElementById('contactButton').innerText = "Elküld";
}

hungarianLangue.addEventListener("click", () => {
  translateToHungarian();
});
englishLangue.addEventListener("click", () => {
  //page reload:
  window.location.reload(true);
});
