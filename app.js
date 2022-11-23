const speakersData = [
  {
    img: './assets/bezos.jpg',
    name: 'Jeff Bezos',
    work: 'Jeffrey Preston Bezos is an American entrepreneur',
    words: 'He is the founder, executive chairman, and former president and CEO of Amazon.',
  },
  {
    img: './assets/billgates.jpg',
    name: 'Bill Gates',
    work: 'William Henry Gates III is an American business magnate.',
    words: 'He is a co-founder of Microsoft, along with his late childhood friend Paul Allen. During his career at Microsoft, Gates held the positions of chairman, chief executive officer (CEO)',
  },
  {
    img: './assets/elon.png',
    name: 'Elon Musk',
    work: 'Elon Reeve Musk FRS is a business magnate and investor.',
    words: ' He is the founder, CEO and chief engineer of SpaceX; angel investor, CEO and product architect of Tesla, Inc.; founder of The Boring Company; co-founder of Neuralink and OpenAI;',
  },
  {
    img: './assets/jackma.jpg',
    name: 'Jack Ma',
    work: 'He is a Chinese business magnate, investor and philanthropist.',
    words: ' He is the co-founder and former executive chairman of Alibaba Group, a multinational technology conglomerate. In addition, he co-founded Yunfeng Capital, a Chinese private equity firm.',
  },
  {
    img: './assets/zuckerberg.jpg',
    name: 'Mark Zuckerberg',
    work: 'He is an American business magnate, internet entrepreneur, and philanthropist.',
    words: 'He is known for co-founding the social media website Facebook and its parent company Meta Platforms, of which he is the chairman, chief executive officer, and controlling shareholder.',
  },
  {
    img: './assets/zuckerberg.jpg',
    name: 'Mark Zuckerberg',
    work: 'He is an American business magnate, internet entrepreneur, and philanthropist.',
    words: 'He is known for co-founding the social media website Facebook and its parent company Meta Platforms, of which he is the chairman, chief executive officer, and controlling shareholder.',
  },
]

function dynamicSpeaker(cardinfo) {
  const div = document.createElement('div');
  const speakerImg = document.createElement('img');
  const infoDiv = document.createElement('div');
  const speakerName = document.createElement('h3');
  const speakerProf = document.createElement('p');
  const speakerInfo = document.createElement('p');

  //give them classes and ids
  speakerImg.classList.add('imgs');
  speakerProf.classList.add('textColor');
  div.classList.add('flexCard');

  //give attributes
  speakerImg.setAttribute('src', cardinfo.img);
  speakerName.innerText = cardinfo.name;
  speakerProf.innerText = cardinfo.work;
  speakerInfo.innerText = cardinfo.words;

  //append
  div.appendChild(speakerImg);
  div.appendChild(infoDiv);
  infoDiv.appendChild(speakerName);
  infoDiv.appendChild(speakerProf);
  infoDiv.appendChild(speakerInfo);

  return div;
}

function buildCards() {
  let speakers = document.querySelector('#dynamic');

  // add the cards dynamically
  speakersData.forEach((cards) => {
    speakers.appendChild(dynamicSpeaker(cards));
  });

}

buildCards();

/*Build humberger menu*/
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