function Display(data) {
    let informacionHTML = document.getElementById('container__img');
    if (data.response == "error") {
        informacionHTML.innerHTML = `<p>Esto no funcionó :sadfeis:</p>`;
    } else {
        if (data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"] == undefined) {
            informacionHTML.innerHTML = `
            <img src=${data["sprites"]["front_default"]} />
            <p><span>${data["id"]} -</span> ${data["name"]}</p>
            <form name="searchForm" id="searchForm" action="">
                <input type="search" name="search" placeholder="Name or Number"/>
            </form>
            `;
        } else {
            informacionHTML.innerHTML = `
            <img src=${data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]} />
            <p><span>${data["id"]} -</span> ${data["name"]}</p>
            <form name="searchForm" id="searchForm" action="">
                <input type="search" name="search" placeholder="Name or Number"/>
            </form>
            `;
        };
    };
    Fetch();
};

function Fetch() {
    const form = document.getElementById('searchForm')
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            let xhr = new XMLHttpRequest();
            let formData = new FormData(form);
            let link = `https://pokeapi.co/api/v2/pokemon/${formData.get('search')}`;
            xhr.open('GET', link);
            xhr.onreadystatechange = function () {
                if (this.status == 200) {
                    let respuesta = JSON.parse(this.responseText);
                    Display(respuesta);
                }
            };
            xhr.send();
        });
};

Fetch();