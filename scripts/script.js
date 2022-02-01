import { translateToHungarian, translateToGerman, translateToEnglish } from "./translatModule.js";

let hungarianLangue = document.getElementById("magyar");
let englishLangue = document.getElementById("english");
let germanLangue = document.getElementById("german");

hungarianLangue.addEventListener("click", () => {
  translateToHungarian();
});
englishLangue.addEventListener("click", () => {
  //page reload:
  translateToEnglish();
});
germanLangue.addEventListener("click", () => {
  translateToGerman();
});

let svhtml = document.getElementById("vhtml");
let svcss = document.getElementById("vcss");
let svjavascript = document.getElementById("vjavaScript");
let svgithub = document.getElementById("vgithub");
let svbash = document.getElementById("vbash");
let svregex = document.getElementById("vregex");
let svjoomla = document.getElementById("vjoomla");
let svwordpress = document.getElementById("vwordpress");
let svAdobePhotoshop = document.getElementById("vAdobePhotoshop");
let svinkscape = document.getElementById("vinkscape");
let svgimp = document.getElementById("vgimp");

let showarray = [
  svhtml,
  svcss,
  svjavascript,
  svgithub,
  svbash,
  svregex,
  svjoomla,
  svwordpress,
  svAdobePhotoshop,
  svinkscape,
  svgimp,
];
let x = -1;

function displayNextItem() {
  x = x === showarray.length - 1 ? 0 : x + 1;
  showarray[x].classList.add("showIt");
  x === 0
    ? showarray[showarray.length - 1].classList.remove("showIt")
    : showarray[x - 1].classList.remove("showIt");
}

function startTimer() {
  setInterval(displayNextItem, 5000);
}
startTimer();


// menüváltás Onclick hívások
const menuContentId = ['AboutMe', 'MySkills', 'Work', 'Contact']

document.getElementById('about').onclick = function (event) {
  menuContentId.map(menuItem => {
    document.getElementById(menuItem).style.display = 'none'
  });
  document.getElementById('AboutMe').style.display = 'flex';
}


document.getElementById('myskills').onclick = function (event) {
  menuContentId.map(menuItem => {
    document.getElementById(menuItem).style.display = 'none'
  });
  document.getElementById('MySkills').style.display = 'flex';
}

document.getElementById('work').onclick = function (event) {
  menuContentId.map(menuItem => {
    document.getElementById(menuItem).style.display = 'none'
  });
  document.getElementById('Work').style.display = 'flex';
}

document.getElementById('contact').onclick = function (event) {
  menuContentId.map(menuItem => {
    document.getElementById(menuItem).style.display = 'none'
  });
  document.getElementById('Contact').style.display = 'flex';
}


// menüváltás Onclick hívások vége