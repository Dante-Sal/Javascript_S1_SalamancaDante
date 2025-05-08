const rows_container = document.getElementById('rows-container');

async function FETCH_DATA() {
    const response = await axios.get('https://681ac80317018fe50578b5c6.mockapi.io/superheroes');
    const data = response.data;
    return data;
};

function DISPLAY_DATA(data) {
    for (let i = 0; i < data.length; i++) {
        rows_container.innerHTML += `
        <div class="col mb-3">
            <div class="card card-inner">
                <img src="${data[i].poster}" class="card-img-top" alt="${data[i].character_name} (${data[i].actor_name}) Poster"/>
                <div class="card-body">
                    <h6 class="text-center card-name">
                        <span>${data[i].character_name}</span>
                        <button class="btn btn-danger">-</button>
                    </h6>
                    <p class="card-text">
                        <strong>Actor/Actriz:</strong> ${data[i].actor_name}
                    </p>
                </div>
                <ul id="card-inner__info--${data[i].id}" class="list-group list-group-flush">
                    <li class="list-group-item"><strong>Edad del actor/actriz:</strong> ${data[i].actor_age}</li>
                    <li class="list-group-item"><strong>Ubicación del personaje:</strong> ${data[i].location}</li>
                    <li class="list-group-item"><strong>Fecha de aparición:</strong> ${data[i].location_date}</li>
                    <li class="list-group-item"><strong>Productor:</strong> ${data[i].producer}</li>
                    <div class="card-header card-header-inner">
                        <strong>Trajes</strong>
                    </div>
                </ul>
            </div>
        </div>`;
        const character_info_container = document.getElementById(`card-inner__info--${data[i].id}`);
        for (let m = 0; m < data[i].costumes.length; m++) {
            character_info_container.innerHTML += `<li class="list-group-item">${data[i].costumes[m]}</li>`
        };
    };
};

FETCH_DATA()
    .then(data => {
        DISPLAY_DATA(data);
    });