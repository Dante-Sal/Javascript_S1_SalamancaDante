const character_name_input = document.getElementById('character-name');
const actor_name_input = document.getElementById('actor-name');
const actor_age_input = document.getElementById('actor-age');
const location_input = document.getElementById('location');
const poster_input = document.getElementById('poster');
const location_date_input = document.getElementById('location-date');
const costumes_section = document.getElementById('costumes-section');
const producer_input = document.getElementById('producer');

const new_btn = document.getElementById('new-btn');
const save_btn = document.getElementById('save-btn');

let costumes_number = 0;
let costumes = [];

async function FETCH_NEW(data) {
    const req = {
        'character_name': data[0],
        'actor_name': data[1],
        'actor_age': data[2],
        'location': data[3],
        'poster': data[4],
        'location_date': data[5],
        'producer': data[6],
        'costumes': data[7]
    };
    await axios.post('https://681ac80317018fe50578b5c6.mockapi.io/superheroes', req);
};

function ENABLE_BUTTONS() {
    document.querySelectorAll('.form-input').forEach(input => {
        input.removeAttribute('disabled');
    });
    costumes_section.innerHTML = `
        <div class="card card-inner">
            <h6 class="card-header">Registro de Trajes</h6>
            <div id="card-inner__costumes-card-body" class="card-body">
                <h5 class="card-inner__body-title">Trajes del personaje</h5>
                <p class="card-inner__body-description">En esta sección prodra registrar los nombres de los trajes usados por el actor en cada una de la peliculas.</p>
                <button id="card-inner__body-add-costume-btn" class="btn btn-warning">+</button>
                <div id="card-inner__costumes-container"></div>
            </div>
        </div>`;
    new_btn.setAttribute('disabled', 'true');
    save_btn.removeAttribute('disabled');
    const add_costume_btn = document.getElementById('card-inner__body-add-costume-btn');
    add_costume_btn.addEventListener('click', ADD_NEW_COSTUME);
};

function DISABLE_BUTTONS() {
    document.querySelectorAll('.form-input').forEach(input => {
        if (input.getAttribute('class') === 'form-select form-input') {
            input.value = 'Marvel';
        } else {
            input.value = '';
        };
        input.setAttribute('disabled', 'true');
    });
    costumes_section.innerHTML = '';
    new_btn.removeAttribute('disabled');
    save_btn.setAttribute('disabled', 'true');
    costumes_number = 0;
};

function ADD_NEW_COSTUME() {
    const costumes_container = document.getElementById('card-inner__costumes-container');
    if (costumes_container.innerHTML === '') {
        costumes_number++;
        costumes_container.insertAdjacentHTML('beforeend', `
            <div id="card-inner__costume--1" costume-id="1">
                <label for="costume-name--1" class="form-label card-inner__costume-label">Nombre traje</label>
                <div class="card-inner__costume-inputs-container">
                    <input type="text" class="form-control" id="costume-name--1" costume-id="1" />
                    <button class="btn btn-danger btn-delete" costume-id="1">-</button>
                </div>
            </div>`);
    } else {
        const costume_last_input_id = parseInt(costumes_container.children[costumes_number - 1].getAttribute('costume-id'));
        costumes_number++;
        costumes_container.insertAdjacentHTML('beforeend', `
            <div id="card-inner__costume--${costume_last_input_id + 1}" costume-id="${costume_last_input_id + 1}">
                <label for="costume-name--${costume_last_input_id + 1}" class="form-label card-inner__costume-label">Nombre traje</label>
                <div class="card-inner__costume-inputs-container">
                    <input type="text" class="form-control" id="costume-name--${costume_last_input_id + 1}" costume-id="${costume_last_input_id + 1}" />
                    <button class="btn btn-danger btn-delete" costume-id="${costume_last_input_id + 1}">-</button>
                </div>
            </div>`);
    };
    document.querySelectorAll('.btn-delete').forEach(btn => {
        btn.addEventListener('click', DELETE_COSTUME);
    });
};

function DELETE_COSTUME(event) {
    const id = event.target.getAttribute('costume-id');
    const costume = document.getElementById(`card-inner__costume--${id}`);
    costumes_number--;
    costume.remove();
};

new_btn.addEventListener('click', ENABLE_BUTTONS);
save_btn.addEventListener('click', () => {
    costumes = [];
    if (character_name_input.value.trim() !== '' && actor_name_input.value.trim() !== ''
        && actor_age_input.value.trim() !== '' && location_input.value.trim() !== ''
        && poster_input.value.trim() !== '' && location_date_input.value.trim() !== '') {
        if (costumes_number !== 0) {
            const costumes_container = document.getElementById('card-inner__costumes-container');
            const costume_last_input_id = parseInt(costumes_container.children[costumes_number - 1].getAttribute('costume-id'));
            for (let i = 0; i < costume_last_input_id; i++) {
                const costume_input = document.getElementById(`costume-name--${i + 1}`);
                if (costume_input !== null) {
                    if (costume_input.value.trim() !== '') {
                        costumes.push(costume_input.value);
                    };
                };
            };
        };
        if (costumes.length === costumes_number) {
            const new_hero_data = [character_name_input.value, actor_name_input.value, actor_age_input.value, location_input.value, poster_input.value, location_date_input.value, producer_input.value, costumes];
            DISABLE_BUTTONS();
            FETCH_NEW(new_hero_data);
        } else {
            const modal = new bootstrap.Modal(document.getElementById('error-modal'));
            modal.show();
        };
    } else {
        const modal = new bootstrap.Modal(document.getElementById('error-modal'));
        modal.show();
    };
});