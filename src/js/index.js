const cardsContainer = document.getElementById('cards-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const currentEl = document.getElementById('current');
const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const addCardBtn = document.getElementById('add-card');
const clearBtn = document.getElementById('clear');
const addContainer = document.getElementById('add-container');


//current card
let currentActiveCard = 0;

//dom card

const cardsEl = [];

//store card

const cardsData = getCardData();

// const cardsData = [
//     {
//         question: 'que 1',
//         answer: 'ans 1'
//     },
//     {
//         question: 'que 2',
//         answer: 'ans 2'
//     },
//     {
//         question: 'que 3',
//         answer: 'ans 1'
//     },
// ];

// create all card

function createCards() {
    cardsData.forEach((data, index) => createCard(data, index));
}

//single card create

function createCard(data, index) {
    const card = document.createElement('div');
    card.classList.add('card');

    if (index == 0) {
        card.classList.add('active');
    }

    card.innerHTML = `
    <div class="inner-card">
    <div class="inner-card-front">
      <p>
       ${data.question}
      </p>
    </div>
    <div class="inner-card-back">
      <p>
        ${data.answer}
      </p>
    </div>
  </div>
    `;

    card.addEventListener('click', () => card.classList.toggle('show-answer'))

    //add to dom

    cardsEl.push(card);

    cardsContainer.appendChild(card);

    updateCurrentText();
}

//number of cards
function updateCurrentText() {
    currentEl.innerText = `${currentActiveCard + 1}/${cardsEl.length}`;
}

createCards();

// get card data from local

function getCardData() {
    const cards = JSON.parse(localStorage.getItem('cards'));
    return cards == null ? [] : cards;
}


// add ard to local
function setCardData(cards) {
    localStorage.setItem('cards', JSON.stringify(cards));
    window.location.reload();
}
//event listners

//netx btn
nextBtn.addEventListener('click', () => {
    cardsEl[currentActiveCard].className = 'card left';

    currentActiveCard = currentActiveCard + 1;

    if (currentActiveCard > cardsEl.length - 1) {
        currentActiveCard = cardsEl.length - 1;
    }

    cardsEl[currentActiveCard].className = 'card active';

    updateCurrentText();
});


//prev btn
prevBtn.addEventListener('click', () => {
    cardsEl[currentActiveCard].className = 'card right';

    currentActiveCard = currentActiveCard - 1;

    if (currentActiveCard < 0) {
        currentActiveCard = 0;
    }

    cardsEl[currentActiveCard].className = 'card active';

    updateCurrentText();
});

//show add container

showBtn.addEventListener('click', () => addContainer.classList.add('show'));

// hide 
hideBtn.addEventListener('click', () => addContainer.classList.remove('show'));


// add new card
addCardBtn.addEventListener('click', () => {
    const question = questionEl.value;
    const answer = answerEl.value;

    if (question.trim() && answer.trim()) {

        const newCard = { question, answer };

        createCard(newCard);

        question.value = '';
        answer.value = '';

        addContainer.classList.remove('show');

        cardsData.push(newCard);
        setCardData(cardsData);
    }
});

//clear cards
clearBtn.addEventListener('click', () => {
    localStorage.clear();
    cardsContainer.innerHTML = '';
    window.location.reload();
})