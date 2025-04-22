function Display(data) {
    let informacionHTML = document.getElementById('container__img');
    if (data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"] == undefined) {
        informacionHTML.innerHTML = `
            <img src=${data["sprites"]["front_default"]} />
            <p><span class="-${data["id"]}" id="identifier">${data["id"]}</span> <span>-</span> ${data["name"]}</p>
            <form id="searchForm" name="searchForm">
                <input name="search" type="search" placeholder="Name or Number"/>
                <button id="prev" onclick="DisplayPrev()">Prev &lt</button>
                <button id="next" onclick="DisplayNext()">Next &gt</button>
            </form>
            `;
    } else {
        informacionHTML.innerHTML = `
            <img src=${data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]} />
            <p><span class="-${data["id"]}" id="identifier">${data["id"]}</span> <span>-</span> ${data["name"]}</p>
            <form id="searchForm" name="searchForm">
                <input name="search" type="search" placeholder="Name or Number"/>
                <button id="prev" onclick="DisplayPrev()">Prev &lt</button>
                <button id="next" onclick="DisplayNext()">Next &gt</button>
            </form>
            `;
    };
    Fetch();
};

function Fetch() {
    const form = document.getElementById('searchForm')
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let xhr = new XMLHttpRequest();
        let formData = new FormData(form);
        let link = `https://pokeapi.co/api/v2/pokemon/${formData.get('search')}`;
        xhr.open('GET', link);
        xhr.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                let respuesta = JSON.parse(this.responseText);
                Display(respuesta);
            };
        };
        xhr.send();
    });
};

function FetchPokemonById(id) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://pokeapi.co/api/v2/pokemon/${id}`);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let respuesta = JSON.parse(xhr.responseText);
            Display(respuesta);
        }
    };
    xhr.send();
}

function DisplayNext() {
    const element = document.getElementById('identifier');
    let protoID = element.getAttribute('class');
    let id = parseInt(protoID.replace('-', ''));
    FetchPokemonById(id + 1);
};

function DisplayPrev() {
    const element = document.getElementById('identifier');
    let protoID = element.getAttribute('class');
    let id = parseInt(protoID.replace('-', ''));
    FetchPokemonById(id - 1);
};

Fetch();