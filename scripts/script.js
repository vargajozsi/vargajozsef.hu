
let langue = "english";
let hungarianLangue = document.getElementById("magyar");
let englishLangue = document.getElementById("english");

hungarianLangue.addEventListener('click', () => {
  langue = "magyar";
  alert(langue);

});
englishLangue.addEventListener('click', () => {
  langue = "english";
  alert(langue);

});

