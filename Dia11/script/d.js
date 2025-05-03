const delete_input = document.getElementById('delete-input');
const delete_btn = document.getElementById('delete-btn');
const modal_window = document.getElementById('modal-window');
const modal_window_delete_btn = document.getElementById('modal-window__content-delete');
const modal_window_cancel_btn = document.getElementById('modal-window__content-cancel');

function FETCH_TO_DELETE() {
    const id = delete_input.value;
    axios.get(`https://6812ccc5129f6313e20f8d72.mockapi.io/ston3s/${id}`)
        .then(response => {
            DISPLAY_TO_DELETE(response.data);
        })
        .catch(error => {
            DISPLAY_ERROR(error);
        });
};

function FETCH_STON3() {
    const id = delete_input.value;
    axios.delete(`https://6812ccc5129f6313e20f8d72.mockapi.io/ston3s/${id}`)
        .then(response => {
            DISPLAY_DELETED(response.data);
        })
        .catch(error => {
            DISPLAY_ERROR(error);
        });
};

function DISPLAY_TO_DELETE(data) {
    const ston3_name = document.getElementById('ston3-name');
    const ston3_photo = document.getElementById('ston3-photo');
    const ston3_type = document.getElementById('ston3-type');
    const ston3_personality = document.getElementById('ston3-personality');
    const ston3_discovery_date = document.getElementById('ston3-discovery-date');
    const ston3_location_found = document.getElementById('ston3-location-found');

    ston3_name.innerHTML = `<strong>${data['name']}</strong>`;
    ston3_photo.src = data['photo_url'];
    ston3_photo.removeAttribute('hidden');
    ston3_type.innerHTML = `<strong>Type:</strong> ${data['type']}`;
    ston3_personality.innerHTML = `<strong>Personality:</strong> ${data['personality']}`;
    ston3_discovery_date.innerHTML = `<strong>Discovery date:</strong> ${data['discovery_date']}`;
    ston3_location_found.innerHTML = `<strong>Discovery place:</strong> ${data['location_found']}`;
};

function DISPLAY_DELETED(data) {
    const ston3_name = document.getElementById('ston3-name');
    ston3_name.innerHTML = `<strong>${data['name']}</strong> [deleted]`;
};

function DISPLAY_ERROR(error) {
    const ston3_name = document.getElementById('ston3-name');
    const ston3_photo = document.getElementById('ston3-photo');
    const ston3_type = document.getElementById('ston3-type');
    const ston3_personality = document.getElementById('ston3-personality');
    const ston3_discovery_date = document.getElementById('ston3-discovery-date');
    const ston3_location_found = document.getElementById('ston3-location-found');

    ston3_name.innerHTML = `<strong>[${error}]:</strong> <span style="color: #808080; font-size: 15px;">*please try again with another number*</span>`;
    ston3_photo.src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwVLdfpMvz-evdJYxIKdVL9nHYy0DvR2ypB_HCCmpGnuCEhjdkmw8wpOQKfzwjUq1RsJ8YBaBjQmXkdiXzrtl0r53mc__WFatQXkhENzmiow-LYO4pV8Cfhv1r_wuMHKDmWrKMAEgG7t3C1k_m2M81XMJb2v9wdq4nNT_LqbgBICdoK5HubI1cT0LnBnHE/s1600/404.jpeg';
    ston3_photo.removeAttribute('hidden');
    ston3_type.innerHTML = '';
    ston3_personality.innerHTML = '';
    ston3_discovery_date.innerHTML = '';
    ston3_location_found.innerHTML = '';
};

delete_input.addEventListener('input', () => {
    if (delete_input.value.length > 0) {
        delete_btn.removeAttribute('disabled');
        FETCH_TO_DELETE();
    } else {
        delete_btn.setAttribute('disabled', 'true');
    };
});

delete_btn.addEventListener('click', () => {
    modal_window.style.display = 'block';
});

modal_window_delete_btn.addEventListener('click', () => {
    FETCH_STON3();
    modal_window.style.display = 'none';
});

modal_window_cancel_btn.addEventListener('click', () => {
    modal_window.style.display = 'none';
});