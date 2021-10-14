import { translateToHungarian, translateToGerman } from "./translatModule.js";

let hungarianLangue = document.getElementById("magyar");
let englishLangue = document.getElementById("english");
let germanLangue = document.getElementById("german");

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

let svhtml = document.getElementById("vhtml");
let svcss = document.getElementById("vcss");
let svjavascript = document.getElementById("vjavaScript");
let showarray = [svhtml, svcss, svjavascript],
  x = -1;

function displayNextImage() {
  x = x === showarray.length - 1 ? 0 : x + 1;
  showarray[x].classList.toggle("showIt");
}

function startTimer() {
  setInterval(displayNextImage, 1800);
}

document.body.onload = startTimer();
