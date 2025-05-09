const rows_container = document.getElementById('rows-container');
let id = '';

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
                    <h6 class="card-name">
                        <strong>${data[i].character_name}</strong>
                        <div class="d-flex">
                            <a href="./pages/u.html"><button class="btn btn-primary m-1" hero-id="${data[i].id}">⋆</button></a>
                            <button class="btn btn-danger mt-1 mb-1" hero-id="${data[i].id}">-</button>
                        </div>
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
            character_info_container.innerHTML += `<li class="list-group-item">${data[i].costumes[m]}</li>`;
        };
    };
    document.querySelectorAll('.btn-danger').forEach(delete_btn => {
        delete_btn.addEventListener('click', CHECK_HERO_ELIMINATION);
    });
};

function CHECK_HERO_ELIMINATION(event) {
    FETCH_DATA()
        .then(data => {
            id = event.target.getAttribute('hero-id');
            const modal = new bootstrap.Modal(document.getElementById('verification-modal'));
            const character_name_container = document.getElementById('verification-modal__character-name');
            const delete_btn = document.getElementById('verification-modal__delete-btn');
            for (let i = 0; i < data.length; i++) {
                if (data[i].id === id) {
                    character_name_container.innerHTML = data[i].character_name;
                };
            };
            modal.show();
            delete_btn.addEventListener('click', () => {
                DELETE_HERO(id);
                location.reload();
            });
        });
};

async function DELETE_HERO(id) {
    await axios.delete(`https://681ac80317018fe50578b5c6.mockapi.io/superheroes/${id}`);
};

FETCH_DATA()
    .then(data => {
        DISPLAY_DATA(data);
    });