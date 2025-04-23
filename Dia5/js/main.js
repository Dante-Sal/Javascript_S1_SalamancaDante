function FETCH_DATA() {
    let id = document.getElementById('container__input').value;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://pokeapi.co/api/v2/pokemon/${id}`);
    xhr.onreadystatechange = (function () {
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);
            DISPLAY_DATA(response);
        }
    });
    xhr.send();
};

function DISPLAY_DATA(data) {
    let text = document.getElementById('container__text');
    text.innerHTML = `${data['id']} - ${data['name']}`;
};

function PREV() {
    console.log('Testing');
};

function NEXT() {
    console.log('Testing');
};

const input = document.getElementById('container__input');
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        FETCH_DATA();
    };
});