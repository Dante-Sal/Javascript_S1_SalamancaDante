let deckId = '';
let drawedCardsData = new Object();
let pileName = '';
let pilePAData = new Object();
let pilePBData = new Object();
let clickCounter = 0;
let changeCounterPA = 0;
let changeCounterPB = 0;
let rotateFactor = 0;
let translateFactor = 0;

const button = document.getElementById('container-B__btn')
const buttonPA = document.getElementById('subcontainer-A__btn');
const buttonPB = document.getElementById('subcontainer-B__btn');

const cardsPA = document.getElementById('subcontainer-A__card-container');
const cardsPB = document.getElementById('subcontainer-B__card-container');

const pilePA = document.getElementById('subcontainer-A__pile-container');
const pilePB = document.getElementById('subcontainer-B__pile-container');

let stylePA = { 'top': '0', 'left': '0', 'rotate': '0' };
let stylePB = { 'top': '0', 'left': '0', 'rotate': '0' };

function FETCH_NEW_DECK(callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://deckofcardsapi.com/api/deck/new/shuffle/');
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const response = JSON.parse(this.responseText);
            deckId = response['deck_id'];
            callback(deckId);
        };
    };
    xhr.send();
};

function FETCH_DECK(id, callback) {
    let xhr = new XMLHttpRequest;
    xhr.open('GET', `https://deckofcardsapi.com/api/deck/${id}/draw/?count=2`);
    xhr.onreadystatechange = (function () {
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);
            drawedCardsData = response;
            callback(drawedCardsData);
        };
    });
    xhr.send();
}

function RETURN_CARDS(id, cardPA, cardPB) {
    let xhr = new XMLHttpRequest;
    xhr.open('GET', `https://deckofcardsapi.com/api/deck/${id}/return/?cards=${cardPA},${cardPB}`);
    xhr.onreadystatechange = (function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(`Cards ${cardPA} and ${cardPB} returned to the deck`);
        };
    });
    xhr.send();
};

function PARSE_CODE(code) {
    if (code === '0') {
        code = 10;
    } else if (code === 'J' || code === 'Q' || code === 'K') {
        code = 10;
    } else if (code === 'A') {
        code = 11;
    };
    return parseInt(code);
};

function LIST_PILE(pileName, drawedCardsData, callback) {
    let xhr = new XMLHttpRequest;
    xhr.open('GET', `https://deckofcardsapi.com/api/deck/${drawedCardsData['deck_id']}/pile/${pileName}/list`);
    xhr.onreadystatechange = (function () {
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);
            let pileMessage = `Cards from player ${pileName[1]} pile (size: ${response['piles'][pileName]['cards'].length} cards):`;
            for (let i = 0; i < response['piles'][pileName]['cards'].length; i++) {
                if (i === 0) {
                    pileMessage += ` ${response['piles'][pileName]['cards'][i]['code']}`;
                } else {
                    pileMessage += `, ${response['piles'][pileName]['cards'][i]['code']}`;
                };
            };
            console.log(pileMessage);
            if (pileName === 'PA') {
                pilePAData = response;
                callback(pilePAData);
            } else if (pileName === 'PB') {
                pilePBData = response;
                callback(pilePBData);
            };
        };
    });
    xhr.send();
};

if (clickCounter === 0) {
    FETCH_NEW_DECK(function (deckId) {
        console.log('Deck ID:', deckId);

        button.addEventListener('click', () => {
            clickCounter++;

            FETCH_DECK(deckId, function (drawedCardsData) {
                let cardPACode = drawedCardsData['cards'][0]['code']
                let cardPANumCode = cardPACode[0];
                let cardPAValue = PARSE_CODE(cardPANumCode);
                let cardPBCode = drawedCardsData['cards'][1]['code']
                let cardPBNumCode = cardPBCode[0];
                let cardPBValue = PARSE_CODE(cardPBNumCode);

                if (clickCounter % 2 === 1) {
                    console.log(`Cards: ${drawedCardsData['cards'][0]['code']}, ${drawedCardsData['cards'][1]['code']}`);

                    button.innerHTML = 'Next round';
                    buttonPA.setAttribute('disabled', 'true');
                    buttonPB.setAttribute('disabled', 'true');

                    cardsPA.innerHTML = `<img id="subcontainer-A__card" class="card" src="${drawedCardsData['cards'][0]['image']}"/>`;
                    const cardPA = document.getElementById('subcontainer-A__card');
                    cardPA.style.top = stylePA.top;
                    cardPA.style.left = stylePA.left;
                    cardPA.style.rotate = stylePA.rotate;

                    cardsPB.innerHTML = `<img id="subcontainer-B__card" class="card" src="${drawedCardsData['cards'][1]['image']}"/>`;
                    const cardPB = document.getElementById('subcontainer-B__card');
                    cardPB.style.top = stylePB.top;
                    cardPB.style.left = stylePB.left;
                    cardPB.style.rotate = stylePB.rotate;

                    if (cardPAValue > cardPBValue) {
                        console.log('Round status: Player A Wins');
                        console.log(cardPAValue, cardPBValue)

                        pileName = 'PA';
                        let xhr = new XMLHttpRequest;
                        xhr.open('GET', `https://deckofcardsapi.com/api/deck/${drawedCardsData['deck_id']}/pile/${pileName}/add/?cards=${cardPACode},${cardPBCode}`);
                        xhr.onreadystatechange = (function () {
                            if (this.readyState === 4 && this.status === 200) {
                                LIST_PILE(pileName, drawedCardsData, function (pilePAData) {
                                    let pilePAInner = ``;
                                    for (let p = 0; p < pilePAData['piles']['PA']['cards'].length; p++) {
                                        pilePAInner += `<img id="subcontainer-A__pilecard--${p + 1}" class="card" src="${pilePAData['piles']['PA']['cards'][p]['image']}" style="margin-left: ${p}vw"/>`;
                                    }
                                    pilePA.innerHTML = pilePAInner;
                                });
                            };
                        });
                        xhr.send();
                    } else if (cardPAValue < cardPBValue) {
                        console.log('Round status: Player B Wins');

                        pileName = 'PB';
                        let xhr = new XMLHttpRequest;
                        xhr.open('GET', `https://deckofcardsapi.com/api/deck/${drawedCardsData['deck_id']}/pile/${pileName}/add/?cards=${cardPACode},${cardPBCode}`);
                        xhr.onreadystatechange = (function () {
                            if (this.readyState === 4 && this.status === 200) {
                                LIST_PILE(pileName, drawedCardsData, function (pilePBData) {
                                    let pilePBInner = ``;
                                    for (let p = 0; p < pilePBData['piles']['PB']['cards'].length; p++) {
                                        pilePBInner += `<img id="subcontainer-B__pilecard--${p + 1}" class="card" src="${pilePBData['piles']['PB']['cards'][p]['image']}" style="margin-left: ${p}vw"/>`;
                                    }
                                    pilePB.innerHTML = pilePBInner;
                                });
                            };
                        });
                        xhr.send();
                    } else {
                        console.log('Round status: Draw');
                    };
                } else {
                    RETURN_CARDS(deckId, cardPACode, cardPBCode);

                    button.innerHTML = 'Show cards';
                    buttonPA.removeAttribute('disabled');
                    buttonPB.removeAttribute('disabled');

                    cardsPA.innerHTML = `<img id="subcontainer-A__cardReverse" class="cardReverse" src="https://deckofcardsapi.com/static/img/back.png"/>`;
                    cardsPB.innerHTML = `<img id="subcontainer-B__cardReverse" class="cardReverse" src="https://deckofcardsapi.com/static/img/back.png"/>`;
                };
            });
        });

    });
};

buttonPA.addEventListener('click', () => {
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
    const cardReversePA = document.getElementById('subcontainer-A__cardReverse');
    cardReversePA.style.top = stylePA.top;
    cardReversePA.style.left = stylePA.left;
    cardReversePA.style.rotate = stylePA.rotate;
});

buttonPB.addEventListener('click', () => {
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
    const cardReversePB = document.getElementById('subcontainer-B__cardReverse');
    cardReversePB.style.top = stylePB.top;
    cardReversePB.style.left = stylePB.left;
    cardReversePB.style.rotate = stylePB.rotate;
});