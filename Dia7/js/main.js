let changeCounterPA = 0;
let changeCounterPB = 0;
let rotateFactor = 0;
let translateFactor = 0;

const buttonPA = document.getElementById('subcontainer-A__btn');
const buttonPB = document.getElementById('subcontainer-B__btn');

let stylePA = {'top': '0', 'left': '0', 'rotate': '0'};
let stylePB = {'top': '0', 'left': '0', 'rotate': '0'};

function FETCH_NEW_DECK() {
    let xhr = new XMLHttpRequest;
    xhr.open('GET', 'https://deckofcardsapi.com/api/deck/new/shuffle/');
    xhr.onreadystatechange = (function(){
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);
            FETCH_DECK(response);            
        };
    });
    xhr.send();
};

function FETCH_DECK(data) {
    let xhr = new XMLHttpRequest;
    xhr.open('GET', `https://deckofcardsapi.com/api/deck/${data['deck_id']}/draw/?count=2`);
    xhr.onreadystatechange = (function(){
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);
            DISPLAY_CARDS(response['cards']);        
        };
    });
    xhr.send();
}

function DISPLAY_CARDS(data) {
    const button = document.getElementById('container-B__btn');

    const cardsPA = document.getElementById('subcontainer-A__card-container');
    const cardsPB = document.getElementById('subcontainer-B__card-container');

    button.addEventListener('click', (e) => {

        button.innerHTML = 'Next round';
        buttonPA.setAttribute('disabled', 'true');
        buttonPB.setAttribute('disabled', 'true');

        cardsPA.innerHTML = `<img id="subcontainer-A__card" class="card" src="${data[0]['image']}"/>`;
        const cardPA = document.getElementById('subcontainer-A__card');
        cardPA.style.top = stylePA.top;
        cardPA.style.left = stylePA.left;
        cardPA.style.rotate = stylePA.rotate;

        cardsPB.innerHTML = `<img id="subcontainer-B__card" class="card" src="${data[1]['image']}"/>`;
        const cardPB = document.getElementById('subcontainer-B__card');
        cardPB.style.top = stylePB.top;
        cardPB.style.left = stylePB.left;
        cardPB.style.rotate = stylePB.rotate;
    });
};

FETCH_NEW_DECK();

buttonPA.addEventListener('click', (e) => {
    changeCounterPA++;

    rotateFactor = Math.random() * 2.4 - 1.1;
    translateFactor = Math.random() * 0.4 - 0.2;
    rotateValue = (changeCounterPA % 2 + 1) * (10 * rotateFactor);
    translateValue = (changeCounterPA % 2 + 1) * (10 * translateFactor);

    stylePA.top = `${translateValue}%`;
    stylePA.left = `${translateValue}%`;
    stylePA.rotate = `${rotateValue}deg`;

    const cardsPA = document.getElementById('subcontainer-A__card-container');
    cardsPA.innerHTML = `<img id='subcontainer-A__cardReverse' class='cardReverse' src='https://deckofcardsapi.com/static/img/back.png'/>`;
    const cardReversePA = document.getElementById('subcontainer-A__cardReverse')
    cardReversePA.style.top = stylePA.top;
    cardReversePA.style.left = stylePA.left;
    cardReversePA.style.rotate = stylePA.rotate;
});

buttonPB.addEventListener('click', (e) => {
    changeCounterPB++;

    rotateFactor = Math.random() * 2.4 - 1.1;
    translateFactor = Math.random() * 0.4 - 0.2;
    rotateValue = (changeCounterPB % 2 + 1) * (10 * rotateFactor);
    translateValue = (changeCounterPB % 2 + 1) * (10 * translateFactor);

    stylePB.top = `${translateValue}%`;
    stylePB.left = `${translateValue}%`;
    stylePB.rotate = `${rotateValue}deg`;

    const cardsPB = document.getElementById('subcontainer-B__card-container');
    cardsPB.innerHTML = `<img id='subcontainer-B__cardReverse' class='cardReverse' src='https://deckofcardsapi.com/static/img/back.png'/>`;
    const cardReversePB = document.getElementById('subcontainer-B__cardReverse')
    cardReversePB.style.top = stylePB.top;
    cardReversePB.style.left = stylePB.left;
    cardReversePB.style.rotate = stylePB.rotate;
});