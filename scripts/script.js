let hungarianLangue = document.getElementById("magyar");
let englishLangue = document.getElementById("english");
let germanLangue = document.getElementById("german");

function translateToHungarian() {
  //menu translate:
  document.getElementById("about").innerText = "Rólam";
  document.getElementById("myskills").innerText = "Képességek";
  document.getElementById("work").innerText = "Munkák";
  document.getElementById("contact").innerText = "Kapcsolat";
  //main elements translate:
  document.getElementById('debut').innerText = "Rólam"
  document.getElementById('textAbout').innerText = "Üdv! József vagyok. Ha minden jól megy, hamarosan Frontend fejlesztő leszek. Az EU-ban tevékenykedem. Webes felületeket fejlesztek a felhasználói interfészekre és az adat vizualizációra specializálódva. Teljes web-projekteket is vállalok, Joomla és Wordpress motorokkal, valamint webshopokat. Problémamegoldó típusú ember vagyok kitüntetett figyelemet szentelek a részletekre. A teljes Frontend spektrummal foglalkozom. Siklóernyőzöm és három gyermek édesapja vagyok.";
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

function translateToGerman() {
  //menu translate:
  document.getElementById("about").innerText = "Über mich";
  document.getElementById("myskills").innerText = "Kompetenzen";
  document.getElementById("work").innerText = "Leistungen";
  document.getElementById("contact").innerText = "Kontakt";
  //main elements translate:
  document.getElementById('debut').innerText = "Über mich"
  document.getElementById('textAbout').innerText = "Servus! Mein Name ist Josef. Ich bin auf dem weg, Front-end Entwickler zu werden. Ich bin in der EU ansässig. Ich entwickle Webseiten mit Focus auf User Interfaces und Datenvisualisierungen. Ich übernehme ganze Websiteprojekte Joomla oder WordPress-Projekte, beziehungsweise Webstores. Ich bin ein Problemslöser Typ mit grosse Sorgfalt auf Details.  Ich interessiere mich für den gesamten Frontend-Bereich. Ich bin Gleitschirmflieger und Familienvater von drei Kinder.";
  document.getElementById('skillsTitle').innerText = "Kompetenzen";
  document.getElementById('workTitle').innerText = "Leistungen";
  document.getElementById('contactTitle').innerText = "Kontakt";
  document.getElementById('contactText').innerText = "Zögern Sie bitte nicht, uns zu kontaktieren, falls Sie irgendwelche Informationen benötigen.";
  //html langue change:
  document.documentElement.setAttribute('lang', 'hu');
  //form translate:
  document.getElementById('fname').setAttribute('placeholder', 'Name');
  document.getElementById('subject').setAttribute('placeholder', 'Betreff');
  document.getElementById('message').setAttribute('placeholder', 'Nachricht');
  document.getElementById('contactButton').innerText = "senden";
}

hungarianLangue.addEventListener("click", () => {
  translateToHungarian();
});
englishLangue.addEventListener("click", () => {
  //page reload:
  window.location.reload(true);
});
germanLangue.addEventListener("click", () => {
  translateToGerman();
});

