const cardsGreen = [
    ['url(/assets/MythicCards/green/green1.png)'],
    ['url(/assets/MythicCards/green/green2.png)'],
    ['url(/assets/MythicCards/green/green3.png)'],
    ['url(/assets/MythicCards/green/green4.png)'],
    ['url(/assets/MythicCards/green/green5.png)'],
    ['url(/assets/MythicCards/green/green6.png)'],
    ['url(/assets/MythicCards/green/green7.png)'],
    ['url(/assets/MythicCards/green/green8.png)'],
    ['url(/assets/MythicCards/green/green9.png)'],
    ['url(/assets/MythicCards/green/green10.png)'],
    ['url(/assets/MythicCards/green/green11.png)'],
    ['url(/assets/MythicCards/green/green12.png)'],
    ['url(/assets/MythicCards/green/green13.png)'],
    ['url(/assets/MythicCards/green/green14.png)'],
    ['url(/assets/MythicCards/green/green15.png)'],
    ['url(/assets/MythicCards/green/green16.png)'],
    ['url(/assets/MythicCards/green/green17.png)'],
    ['url(/assets/MythicCards/green/green18.png)'],
]
const cardsBrown = [
    ['url(/assets/MythicCards/brown/brown1.png)'],
    ['url(/assets/MythicCards/brown/brown2.png)'],
    ['url(/assets/MythicCards/brown/brown3.png)'],
    ['url(/assets/MythicCards/brown/brown4.png)'],
    ['url(/assets/MythicCards/brown/brown5.png)'],
    ['url(/assets/MythicCards/brown/brown6.png)'],
    ['url(/assets/MythicCards/brown/brown7.png)'],
    ['url(/assets/MythicCards/brown/brown8.png)'],
    ['url(/assets/MythicCards/brown/brown9.png)'],
    ['url(/assets/MythicCards/brown/brown10.png)'],
    ['url(/assets/MythicCards/brown/brown11.png)'],
    ['url(/assets/MythicCards/brown/brown12.png)'],
    ['url(/assets/MythicCards/brown/brown13.png)'],
    ['url(/assets/MythicCards/brown/brown14.png)'],
    ['url(/assets/MythicCards/brown/brown15.png)'],
    ['url(/assets/MythicCards/brown/brown16.png)'],
    ['url(/assets/MythicCards/brown/brown17.png)'],
    ['url(/assets/MythicCards/brown/brown18.png)'],
    ['url(/assets/MythicCards/brown/brown19.png)'],
    ['url(/assets/MythicCards/brown/brown20.png)'],
    ['url(/assets/MythicCards/brown/brown21.png)'],
]
const cardsBlue = [
    ['url(/assets/MythicCards/blue/blue1.png)'],
    ['url(/assets/MythicCards/blue/blue2.png)'],
    ['url(/assets/MythicCards/blue/blue3.png)'],
    ['url(/assets/MythicCards/blue/blue4.png)'],
    ['url(/assets/MythicCards/blue/blue5.png)'],
    ['url(/assets/MythicCards/blue/blue6.png)'],
    ['url(/assets/MythicCards/blue/blue7.png)'],
    ['url(/assets/MythicCards/blue/blue8.png)'],
    ['url(/assets/MythicCards/blue/blue9.png)'],
    ['url(/assets/MythicCards/blue/blue10.png)'],
    ['url(/assets/MythicCards/blue/blue11.png)'],
    ['url(/assets/MythicCards/blue/blue12.png)'],
];
const cards = [
    cardsGreen,
    cardsBrown,
    cardsBlue,
]


const ancientsContainer = document.querySelector('.ancients-container');
const difContainer = document.querySelector('.difficulty-container');
const deckContainer = document.querySelector('.deck-container');
const shuffleButton = document.querySelector('.shuffle-button');
const currentState = document.querySelector('.current-state');
const deck = document.querySelector('.deck');
const lastCard = document.querySelector('.last-card');
let random,
    randomCards;

ancientsContainer.onclick = function(e) {
    if (e.target.className != 'ancient-card') return;
    activeAnc(e.target);
}

let selectedAnc;
function activeAnc(Anc) {
    if (selectedAnc) {
        selectedAnc.classList.remove('active');
    } 
    selectedAnc = Anc;
    selectedAnc.classList.add('active');
    difContainer.style.visibility = 'visible';
}


difContainer.onclick = function(e) {
    if (e.target.className != 'difficulty') return;
    activeDif(e.target);
}

let selectedDif;
function activeDif(Dif) {
    if (selectedDif) {
        selectedDif.classList.remove('activeDif');
    }
    selectedDif = Dif;
    selectedDif.classList.add('activeDif');
    deckContainer.style.visibility = 'visible';
    shuffleButton.style.display = 'flex';
    currentState.style.display = 'none';
    deck.style.display = 'none';
    lastCard.style.display = 'none';
    lastCard.classList.remove('f');
}


shuffleButton.onclick = function() {
    shuffleButton.style.display = 'none';
    currentState.style.display = 'flex';
    deck.style.display = 'flex';
    lastCard.style.display = 'flex';
}


deck.addEventListener('click', function () {    
    getRandomCard();
    reduceStageNumbers()
    lastCard.style.background = cards[randomCards][random];
    // console.log(cards[randomCards][random]);
    lastCard.style.backgroundSize = 'cover';
    // cardsBlue.splice(random,1);
});


function getRandomCard() {
    randomCards = Math.floor( Math.random() * 3 );
    random = Math.floor( Math.random() * Object.keys(cards[randomCards]).length );
}

function reduceStageNumbers() {
    let dotsText = document.querySelector('.dots-container .blue');
    // dotsText.textContent = 0;
    console.log(dotsText);
    
}

// + нажатие на deck выдает рандомную карту blue
// - нажатие на deck выдает рандомную уникальную карту blue
// + нажатие на deck выдает рандомную карту blue/brown/red
// - исходя из цвета карты у элемента current state минусуется 1 у того же цвета по стадиям начиная с первой