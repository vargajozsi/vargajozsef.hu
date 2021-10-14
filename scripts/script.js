let hungarianLangue = document.getElementById("magyar");
let englishLangue = document.getElementById("english");
let germanLangue = document.getElementById("german");

import {
  translateToHungarian,
  translateToGerman,
} from "/scripts/translatModule.js";

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
