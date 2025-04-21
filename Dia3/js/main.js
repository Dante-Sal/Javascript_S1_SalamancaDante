function Display(data) {
    let informacionHTML = document.getElementById('container__img');
    if (data.response == "error") {
        informacionHTML.innerHTML = `<p>Esto no funcionó :sadfeis:</p>`;
    } else {
        if (data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"] == undefined) {
            informacionHTML.innerHTML = `
            <img src=${data["sprites"]["front_default"]} />
            <p><span>${data["id"]} -</span> ${data["name"]}</p>
            `
        } else {
            informacionHTML.innerHTML = `
            <img src=${data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]} />
            <p><span>${data["id"]} -</span> ${data["name"]}</p>
            `
        }
    }
}

function Fetch() {
    let xhr = new XMLHttpRequest();
    let numPokemon = 25;
    let link = `https://pokeapi.co/api/v2/pokemon/${numPokemon}`;
    xhr.open('GET', link);
    xhr.onreadystatechange = function () {
        if (this.status == 200) {
            let respuesta = JSON.parse(this.responseText);
            console.log(respuesta["sprites"]["front_default"]);
            Display(respuesta);
        }
    };
    xhr.send();
}

Fetch();