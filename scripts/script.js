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
  displayNextItem();
  setInterval(displayNextItem, 5000);
}
startTimer();

// mobile menu: close after choosing a menu item or pressing Escape
const menuToggle = document.getElementById("hambmenu");
document.querySelectorAll("#menu-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.checked = false;
  });
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.checked) {
    menuToggle.checked = false;
    menuToggle.focus();
  }
});

// e-mail address: stored reversed and in pieces, assembled only on click
const emailButton = document.getElementById("showEmail");
const emailLink = document.getElementById("emailLink");
const emailParts = ["moc", "liamg", "edoceraelc"];
emailButton.addEventListener("click", () => {
  const [tld, domain, user] = emailParts.map((part) =>
    [...part].reverse().join("")
  );
  const address = user + String.fromCharCode(64) + domain + "." + tld;
  emailLink.href = "mailto:" + address;
  emailLink.textContent = address;
  // first the button fades out, then the address fades in (see style.css)
  emailButton.disabled = true;
  emailButton.classList.add("fadeOut");
  const showLink = () => {
    emailButton.hidden = true;
    emailLink.hidden = false;
    emailLink.classList.add("reveal");
    emailLink.focus({ preventScroll: true });
  };
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    showLink();
  } else {
    emailButton.addEventListener("animationend", showLink, { once: true });
  }
});
