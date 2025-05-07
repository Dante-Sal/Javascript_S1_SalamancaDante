const character_name_input = document.getElementById('character-name');
const actor_name_input = document.getElementById('actor-name');
const actor_age_input = document.getElementById('actor-age');
const location_input = document.getElementById('location');
const poster_input = document.getElementById('poster');
const location_date_input = document.getElementById('location-date');
const costumes_section = document.getElementById('costumes-section');
const producer = document.getElementById('producer');

const new_btn = document.getElementById('new-btn');
const save_btn = document.getElementById('save-btn');
const cancel_btn = document.getElementById('cancel-btn');

let costumes_number = 0;
let costumes = new Array();
let costume_input_value = '';

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
            <div class="card-body">
                <h5 class="card-inner__body-title">Trajes del personaje</h5>
                <p class="card-inner__body-description">En esta sección prodra registrar los nombres de los trajes usados por el actor en cada una de la peliculas.</p>
                <button id="card-inner__body-add-costume-btn" class="btn btn-warning">+</button>
                <div id="card-inner__costumes-container"></div>
            </div>`;
    new_btn.setAttribute('disabled', 'true');
    save_btn.removeAttribute('disabled');
    cancel_btn.removeAttribute('disabled');
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
    cancel_btn.setAttribute('disabled', 'true');
};

function ADD_NEW_COSTUME() {
    const costumes_container = document.getElementById('card-inner__costumes-container');
    costumes_number++;
    costumes_container.insertAdjacentHTML('beforeend', `
        <div id="card-inner__costume--${costumes_number}">
            <label for="costume-name--${costumes_number}" class="form-label card-inner__costume-label">Nombre traje</label>
            <div class="card-inner__costume-inputs-container">
                <input type="text" class="form-control" id="costume-name--${costumes_number}" />
                <button class="btn btn-danger btn-delete" costume-id="${costumes_number}">-</button>
            </div>
        </div>`);
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

    if (character_name_input.value.trim() !== '' && actor_name_input.value.trim() !== ''
        && actor_age_input.value.trim() !== '' && location_input.value.trim() !== ''
        && poster_input.value.trim() !== '' && location_date_input.value.trim() !== '') {
        for (let i = 0; i < costumes_number; i++) {
            const costumes_container = document.getElementById('card-inner__costumes-container');
            costume_input_value = costumes_container.childNodes[i * 2 + 1].childNodes[3].childNodes[1].value;
            if (costume_input_value.trim() !== '') {
                costumes.push(costume_input_value);
            };
        };
        if (costumes.length === costumes_number) {
            const new_hero_data = [character_name_input.value, actor_name_input.value, actor_age_input.value, location_input.value, poster_input.value, location_date_input.value, costumes];
            DISABLE_BUTTONS();
            FETCH_NEW(new_hero_data);
        };
    };
});

// [
//     {
//       "character_name": "Iron Man",
//       "actor_name": "Robert Downey Jr.",
//       "actor_age": 59,
//       "location": "Malibu, California",
//       "poster": "https://m.media-amazon.com/images/I/8159UW0-AEL.jpg",
//       "location_date": "2008-05-02",
//       "producer": "Marvel",
//       "costumes": [
//         "Mark I",
//         "Mark III",
//         "Mark XLII",
//         "Mark LXXXV"
//       ]
//     },
//     {
//       "character_name": "Spider-Man",
//       "actor_name": "Tom Holland",
//       "actor_age": 28,
//       "location": "Queens, New York",
//       "poster": "https://m.media-amazon.com/images/I/81T0GmGsrZL.jpg",
//       "location_date": "2016-04-12",
//       "producer": "Marvel",
//       "costumes": [
//         "Homemade Suit",
//         "Stark Suit",
//         "Iron Spider",
//         "Integrated Suit"
//       ]
//     },
//     {
//       "character_name": "Batman",
//       "actor_name": "Robert Pattinson",
//       "actor_age": 38,
//       "location": "Gotham City",
//       "poster": "https://m.media-amazon.com/images/I/81Jmu1PiInL.jpg",
//       "location_date": "2022-03-04",
//       "producer": "DComics",
//       "costumes": [
//         "Year Two Suit",
//         "Armored Suit"
//       ]
//     },
//     {
//       "character_name": "Wonder Woman",
//       "actor_name": "Gal Gadot",
//       "actor_age": 40,
//       "location": "Themyscira",
//       "poster": "https://www.vintagemovieposters.co.uk/wp-content/uploads/2021/01/IMG_1102-scaled.jpeg",
//       "location_date": "2017-06-02",
//       "producer": "DComics",
//       "costumes": [
//         "Amazonian Armor",
//         "Golden Eagle Armor"
//       ]
//     },
//     {
//       "character_name": "Captain America",
//       "actor_name": "Chris Evans",
//       "actor_age": 43,
//       "location": "Brooklyn, New York",
//       "poster": "https://filmartgallery.com/cdn/shop/products/Captain-America-The-First-Avenger-Vintage-Movie-Poster-Original.jpg?v=1738907859",
//       "location_date": "2011-07-22",
//       "producer": "Marvel",
//       "costumes": [
//         "USO Suit",
//         "Stealth Suit",
//         "Infinity War Suit",
//         "Endgame Suit"
//       ]
//     },
//     {
//       "character_name": "Superman",
//       "actor_name": "Henry Cavill",
//       "actor_age": 41,
//       "location": "Metropolis",
//       "poster": "https://i.ebayimg.com/00/s/MTYwMFgxMDc5/z/F~4AAOSwzDxi5tqG/$_57.JPG?set_id=880000500F",
//       "location_date": "2013-06-14",
//       "producer": "DComics",
//       "costumes": [
//         "Kryptonian Suit",
//         "Black Suit"
//       ]
//     },
//     {
//       "character_name": "Black Panther",
//       "actor_name": "Chadwick Boseman",
//       "actor_age": 43,
//       "location": "Wakanda",
//       "poster": "https://screenrant.com/wp-content/uploads/2017/12/Black-Panther-Canada-Poster.jpg",
//       "location_date": "2018-02-16",
//       "producer": "Marvel",
//       "costumes": [
//         "Civil War Suit",
//         "Nanotech Suit"
//       ]
//     },
//     {
//       "character_name": "Flash",
//       "actor_name": "Ezra Miller",
//       "actor_age": 32,
//       "location": "Central City",
//       "poster": "https://i.ebayimg.com/00/s/MTYwMFgxMDgw/z/VswAAOSwcbNkSTHC/$_57.JPG?set_id=880000500F",
//       "location_date": "2017-11-17",
//       "producer": "DComics",
//       "costumes": [
//         "Prototype Suit",
//         "Upgraded Justice League Suit"
//       ]
//     },
//     {
//       "character_name": "Doctor Strange",
//       "actor_name": "Benedict Cumberbatch",
//       "actor_age": 48,
//       "location": "New York Sanctum",
//       "poster": "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1500x1500/products/90329/98876/doctor-strange-in-the-multiverse-of-madness-original-marvel-movie-poster-one-sheet-buy-now-at-starstills__20801.1698922344.jpg?c=2&imbypass=on",
//       "location_date": "2016-11-04",
//       "producer": "Marvel",
//       "costumes": [
//         "Mystic Robes",
//         "Multiverse Robes"
//       ]
//     },
//     {
//       "character_name": "Aquaman",
//       "actor_name": "Jason Momoa",
//       "actor_age": 45,
//       "location": "Atlantis",
//       "poster": "https://i.ebayimg.com/00/s/MTYwMFgxMDc5/z/POcAAOSwoDFb~IKF/$_57.JPG?set_id=8800005007",
//       "location_date": "2018-12-21",
//       "producer": "DComics",
//       "costumes": [
//         "Classic Atlantean Armor",
//         "Stealth Suit"
//       ]
//     }
//   ]