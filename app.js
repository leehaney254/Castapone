const speakersData = [
  {
    img: './assets/2.jpg',
    name: 'David Kimani',
    work: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    words: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, natus! Optio, repellendus,',
  },
  {
    img: './assets/3.avif',
    name: 'Esther Atieno',
    work: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    words: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, natus! Optio, repellendus,',
  },
  {
    img: './assets/1.jpeg',
    name: 'Agnes Shikuku',
    work: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    words: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, natus! Optio, repellendus,',
  },
  {
    img: './assets/6.jpeg',
    name: 'Wendy Kwamboka',
    work: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    words: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, natus! Optio, repellendus,',
  },
  {
    img: './assets/4.avif',
    name: 'Martin Kiprotich',
    work: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    words: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, natus! Optio, repellendus,',
  },
  {
    img: './assets/5.avif',
    name: 'Mercy Blasius',
    work: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    words: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, natus! Optio, repellendus,',
  },
];

function dynamicSpeaker(cardinfo) {
  const div = document.createElement('div');
  const speakerImg = document.createElement('img');
  const infoDiv = document.createElement('div');
  const speakerName = document.createElement('h3');
  const speakerProf = document.createElement('p');
  const speakerInfo = document.createElement('p');
  const borderDiv = document.createElement('div');

  // give them classes and ids
  speakerImg.classList.add('imgs');
  speakerProf.classList.add('textColor', 'namz2');
  div.classList.add('flexCard');
  speakerName.classList.add('namz');
  infoDiv.classList.add('speaktext');
  borderDiv.classList.add('borderLeft');

  // give attributes
  speakerImg.setAttribute('src', cardinfo.img);
  speakerName.innerText = cardinfo.name;
  speakerProf.innerText = cardinfo.work;
  speakerInfo.innerText = cardinfo.words;

  // append
  div.appendChild(speakerImg);
  div.appendChild(infoDiv);
  infoDiv.appendChild(speakerName);
  infoDiv.appendChild(speakerProf);
  infoDiv.appendChild(borderDiv);
  infoDiv.appendChild(speakerInfo);

  return div;
}

function buildCards() {
  const speakers = document.querySelector('#dynamic');

  // add the cards dynamically
  speakersData.forEach((cards) => {
    speakers.appendChild(dynamicSpeaker(cards));
  });
}

buildCards();

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