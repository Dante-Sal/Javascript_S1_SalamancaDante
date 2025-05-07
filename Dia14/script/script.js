const character_name_input = document.getElementById('character-name');
const actor_name_input = document.getElementById('actor-name');
const actor_age_input =document.getElementById('actor-age');
const location_input = document.getElementById('location');
const poster_input = document.getElementById('poster');
const location_date_input = document.getElementById('location-date');
const costumes_section = document.getElementById('costumes-section');
const producer = document.getElementById('producer');

const new_btn = document.getElementById('new-btn');
const save_btn = document.getElementById('save-btn');

let costumes_number = 0;

function ENABLE_BUTTONS() {
    document.querySelectorAll('.form-input').forEach(input => {
        input.removeAttribute('disabled');
    });
    costumes_section.innerHTML = `
        <div class="card card-inner">
            <h6 class="card-header">Registro de Trajes</h6>
        <div class="card-body">
            <h5 class="card-inner__body-title">Trajes del personaje</h5>
            <p class="card-inner__body-description">En esta sección prodra registrar los nombres de los trajes usados por el actor en cada una de la peliculas.</p>
            <button id="card-inner__body-add-costume-btn" class="btn btn-warning">+</button>
            <div id="card-inner__costumes-container"></div>
        </div>`;
    const add_costume_btn = document.getElementById('card-inner__body-add-costume-btn');
    add_costume_btn.addEventListener('click', ADD_NEW_COSTUME);
};

function DISABLE_BUTTONS() {
    document.querySelectorAll('.form-input').forEach(input => {
        input.value = ''
        input.setAttribute('disabled', 'true');
    });
};

function ADD_NEW_COSTUME() {
    const costumes_container = document.getElementById('card-inner__costumes-container');
    costumes_number++;
    costumes_container.innerHTML += `
        <div id="card-inner__costume--${costumes_number}">
            <label for="costume-name--${costumes_number}" class="form-label card-inner__costume-label">Nombre traje</label>
            <div class="card-inner__costume-inputs-container">
                <input type="text" class="form-control" id="costume-name--${costumes_number}" />
                <button class="btn btn-danger">-</button>
            </div>
        </div>`;
};

new_btn.addEventListener('click', ENABLE_BUTTONS);
save_btn.addEventListener('click', () => {
    if (character_name_input.value.trim() !== '' && actor_name_input.value.trim() !== ''
    && actor_age_input.value.trim() !== '' && location_input.value.trim() !== ''
    && poster_input.value.trim() !== '' && location_date_input.value.trim() !== '') {
        DISABLE_BUTTONS();
    };
});