let last_ston3_id = 0;
let first_ston3_id = 0;
const search_input = document.getElementById('search-input');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

function FETCH_FIRST() {
    axios.get(`https://6812ccc5129f6313e20f8d72.mockapi.io/ston3s`)
        .then(response => {
            first_ston3_id = parseInt(response.data[0]['id']);
        });
};

function FETCH_LAST() {
    axios.get(`https://6812ccc5129f6313e20f8d72.mockapi.io/ston3s`)
        .then(response => {
            last_ston3_id = parseInt(response.data[response.data.length - 1]['id']);
        });
};

function FETCH_STON3() {
    const id = document.getElementById('search-input').value;
    axios.get(`https://6812ccc5129f6313e20f8d72.mockapi.io/ston3s/${id}`)
        .then(response => {
            if (id.trim() === '') {
                DISPLAY_ERROR();
            } else {
                DISPLAY_STON3(response.data);
            };
        })
        .catch(error => {
            DISPLAY_ERROR(error);
        });
};

function FETCH_PREV_STON3() {
    const id = parseInt(document.getElementById('ston3-id').innerHTML);
    if (id === first_ston3_id) {
        axios.get(`https://6812ccc5129f6313e20f8d72.mockapi.io/ston3s/${last_ston3_id}`)
            .then(response => {
                DISPLAY_STON3(response.data);
            })
            .catch(error => {
                DISPLAY_ERROR(error);
            });
    } else {
        axios.get(`https://6812ccc5129f6313e20f8d72.mockapi.io/ston3s/${id - 1}`)
            .then(response => {
                DISPLAY_STON3(response.data);
            })
            .catch(error => {
                DISPLAY_ERROR(error);
            });
    };
};

function FETCH_NEXT_STON3() {
    const id = parseInt(document.getElementById('ston3-id').innerHTML);
    if (id === last_ston3_id) {
        axios.get(`https://6812ccc5129f6313e20f8d72.mockapi.io/ston3s/${first_ston3_id}`)
            .then(response => {
                DISPLAY_STON3(response.data);
            })
            .catch(error => {
                DISPLAY_ERROR(error);
            });
    } else {
        axios.get(`https://6812ccc5129f6313e20f8d72.mockapi.io/ston3s/${id + 1}`)
            .then(response => {
                DISPLAY_STON3(response.data);
            })
            .catch(error => {
                DISPLAY_ERROR(error);
            });
    };
};

function DISPLAY_STON3(data) {
    const ston3_id = document.getElementById('ston3-id');
    const ston3_name = document.getElementById('ston3-name');
    const ston3_photo = document.getElementById('ston3-photo');
    const ston3_type = document.getElementById('ston3-type');
    const ston3_personality = document.getElementById('ston3-personality');
    const ston3_discovery_date = document.getElementById('ston3-discovery-date');
    const ston3_location_found = document.getElementById('ston3-location-found');

    ston3_id.innerHTML = data['id'];
    ston3_name.innerHTML = `<strong>${data['name']}</strong>`;
    ston3_photo.src = data['photo_url'];
    ston3_photo.removeAttribute('hidden');
    ston3_type.innerHTML = `<strong>Type:</strong> ${data['type']}`;
    ston3_personality.innerHTML = `<strong>Personality:</strong> ${data['personality']}`;
    ston3_discovery_date.innerHTML = `<strong>Discovery date:</strong> ${data['discovery_date']}`;
    ston3_location_found.innerHTML = `<strong>Discovery place:</strong> ${data['location_found']}`;
};

function DISPLAY_ERROR(error) {
    const ston3_id = document.getElementById('ston3-id');
    const ston3_name = document.getElementById('ston3-name');
    const ston3_photo = document.getElementById('ston3-photo');
    const ston3_type = document.getElementById('ston3-type');
    const ston3_personality = document.getElementById('ston3-personality');
    const ston3_discovery_date = document.getElementById('ston3-discovery-date');
    const ston3_location_found = document.getElementById('ston3-location-found');

    ston3_id.innerHTML = '';
    ston3_name.innerHTML = `<strong>[${error}]:</strong> <span style="color: #808080; font-size: 15px;">*please try again with another number*</span>`;
    ston3_photo.src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwVLdfpMvz-evdJYxIKdVL9nHYy0DvR2ypB_HCCmpGnuCEhjdkmw8wpOQKfzwjUq1RsJ8YBaBjQmXkdiXzrtl0r53mc__WFatQXkhENzmiow-LYO4pV8Cfhv1r_wuMHKDmWrKMAEgG7t3C1k_m2M81XMJb2v9wdq4nNT_LqbgBICdoK5HubI1cT0LnBnHE/s1600/404.jpeg';
    ston3_photo.removeAttribute('hidden');
    ston3_type.innerHTML = '';
    ston3_personality.innerHTML = '';
    ston3_discovery_date.innerHTML = '';
    ston3_location_found.innerHTML = '';
};

FETCH_FIRST();
FETCH_LAST();

search_input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        FETCH_STON3();
        search_input.value = '';
    };
});