/* Build humberger menu */
let displayMenu = false; // keeps track of the menu state
const humbergerMenu = document.querySelector('#hum-menu'); // select the humberger menu
const hiddenMenu = document.querySelector('.blurBack'); // select the hidden menu
const hidesMenu = document.querySelector('#cancel'); // select the hidden menu

/* Declare the functions */
function menuDisplay() {
  if (!displayMenu) {
    hiddenMenu.classList.remove('hideMenu');
    hiddenMenu.classList.add('displayMenu');
    displayMenu = true;
  } else {
    hiddenMenu.classList.remove('displayMenu');
    hiddenMenu.classList.add('hideMenu');
    displayMenu = false;
  }
}

/* Event listeners */
humbergerMenu.addEventListener('click', menuDisplay);
hidesMenu.addEventListener('click', menuDisplay);