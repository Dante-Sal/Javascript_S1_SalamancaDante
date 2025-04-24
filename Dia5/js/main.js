function FETCH_DATA() {
    let id = document.getElementById('container__input').value;
    if (id === '' || id.trim() === '') {
        DISPLAY_UNDEFINED();
    } else {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', `https://pokeapi.co/api/v2/pokemon/${id}`);
        xhr.onreadystatechange = (function () {
            if (this.readyState === 4 && this.status === 200) {
                let response = JSON.parse(this.responseText);
                DISPLAY_DATA(response);
            } else if (this.readyState === 4 && this.status !== 200) {
                DISPLAY_UNDEFINED();
            };
        });
        xhr.send();
    };
};

function DISPLAY_DATA(data) {
    let sprite = document.getElementById('container__img');
    let text = document.getElementById('container__text');
    text.innerHTML = `<span id="container__text--span">${data['id']} - </span>${data['name'].replace('-', ' ')}`;
    if (data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'] === null && data['sprites']['front_default'] === null) {
        sprite.innerHTML = `
            <div style="
            position: absolute;
            top: 30%;
            left: 30%;
            width: 7.5vw;
            height: 7.5vw;
            background: url(https://cdn.pixil.digital/images/shop/preset/kNdWf8UA1Z.png);
            background-position: 50%;
            background-size: contain;
            background-repeat: no-repeat;
            "></div>
            `;
    } else if (data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'] === null) {
        sprite.innerHTML = `
            <div style="
            position: absolute;
            top: 30%;
            left: 30%;
            width: 7.5vw;
            height: 7.5vw;
            background: url(${data['sprites']['front_default']});
            background-position: 50%;
            background-size: contain;
            background-repeat: no-repeat;
            "></div>
            `;
    } else {
        sprite.innerHTML = `
            <div style="
            position: absolute;
            top: 30%;
            left: 30%;
            width: 7.5vw;
            height: 7.5vw;
            background: url(${data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']});
            background-position: 50%;
            background-size: contain;
            background-repeat: no-repeat;
            "></div>
            `;
    };
};

function DISPLAY_UNDEFINED() {
    let sprite = document.getElementById('container__img');
    let text = document.getElementById('container__text');
    text.innerHTML = `<span id="container__text--span">!404 - </span>Not Found`;
    sprite.innerHTML = `
        <div style="
        position: absolute;
        top: 30%;
        left: 30%;
        width: 7.5vw;
        height: 7.5vw;
        background: url('https://cdn.pixil.digital/images/shop/preset/kNdWf8UA1Z.png');
        background-position: 50%;
        background-size: contain;
        background-repeat: no-repeat;
        "></div>
        `
};

function PREV() {
    let span = document.getElementById('container__text--span');
    let prevId = parseInt(span.innerHTML.replace(' - ', '')) - 1;
    let xhr = new XMLHttpRequest();
    if (prevId === 0 || span.innerHTML.replace(' - ', '') === '') {
        xhr.open('GET', `https://pokeapi.co/api/v2/pokemon/10277`);
    } else if (prevId === 10000) {
        xhr.open('GET', `https://pokeapi.co/api/v2/pokemon/1025`);
    } else {
        xhr.open('GET', `https://pokeapi.co/api/v2/pokemon/${prevId}`);
    };
    xhr.onreadystatechange = (function () {
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);
            DISPLAY_DATA(response);
        } else if (this.readyState === 4 && this.status !== 200) {
            DISPLAY_UNDEFINED();
        };
    });
    xhr.send();
};

function NEXT() {
    let span = document.getElementById('container__text--span');
    let nextId = parseInt(span.innerHTML.replace(' - ', '')) + 1;
    let xhr = new XMLHttpRequest();
    if (nextId === 10278 || span.innerHTML.replace(' - ', '') === '') {
        xhr.open('GET', `https://pokeapi.co/api/v2/pokemon/1`);
    } else if (nextId === 1026) {
        xhr.open('GET', `https://pokeapi.co/api/v2/pokemon/10001`);
    } else {
        xhr.open('GET', `https://pokeapi.co/api/v2/pokemon/${nextId}`);
    };
    xhr.onreadystatechange = (function () {
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);
            DISPLAY_DATA(response);
        } else if (this.readyState === 4 && this.status !== 200) {
            DISPLAY_UNDEFINED();
        };
    });
    xhr.send();
};

const input = document.getElementById('container__input');
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        FETCH_DATA();
        input.value = '';
    };
});

const prev = document.getElementById('container__btns--prev');
prev.addEventListener('click', (e) => {
    PREV();
});

const next = document.getElementById('container__btns--next');
next.addEventListener('click', (e) => {
    NEXT();
});