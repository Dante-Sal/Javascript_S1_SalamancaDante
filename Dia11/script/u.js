let selected_id = 0;
let edit_counter = 0;

function FETCH_TO_UPDATE_INFO_FROM_ID() {
    axios.get(`https://6812ccc5129f6313e20f8d72.mockapi.io/ston3s/${selected_id}`)
        .then(response => {
            DISPLAY_TO_UPDATE_INFO_FROM_ID(response.data);
        })
        .catch(error => {
            DISPLAY_SELECT_ERROR(error);
            document.querySelectorAll('.info-form__data').forEach(el => {
                el.setAttribute('disabled', 'true');
            });
            document.querySelectorAll('.id-form__data').forEach(el => {
                el.removeAttribute('disabled');
            });
        });
};

function FETCH_STON3(data) {
    const req = {
        'name': data['info-form__name'],
        "type": data['info-form__type'],
        "personality": data['info-form__personality'],
        "discovery_date": data['info-form__discovery-date'],
        "location_found": data['info-form__location-found'],
        "photo_url": data['info-form__photo-url']
    };
    axios.put(`https://6812ccc5129f6313e20f8d72.mockapi.io/ston3s/${selected_id}`, req)
        .then(response => {
            DISPLAY_STON3(response.data);
        })
        .catch(error => {
            DISPLAY_EDIT_ERROR(error);
        });
};

function DISPLAY_TO_UPDATE_INFO_FROM_ID(data) {
    const ston3_id = document.getElementById('info__to-update-title--ston3-id');
    const to_update_ston3_name = document.getElementById('info__to-update-title--ston3-name');
    const to_update_ston3_photo = document.getElementById('info__to-update-photo');
    const updated_ston3_type = document.getElementById('info__updated-type');
    const updated_ston3_personality = document.getElementById('info__updated-personality');
    const updated_ston3_discovery_date = document.getElementById('info__updated-discovery-date');
    const updated_ston3_location_found = document.getElementById('info__updated-location-found');
    const ston3_line_break = document.getElementById('info__line-break');
    const updating_ston3_name = document.getElementById('info-form__name');
    const updating_ston3_type = document.getElementById('info-form__type');
    const updating_ston3_personality = document.getElementById('info-form__personality');
    const updating_ston3_discovery_date = document.getElementById('info-form__discovery-date');
    const updating_ston3_location_found = document.getElementById('info-form__location-found');
    const updating_ston3_photo = document.getElementById('info-form__photo-url');

    ston3_id.innerHTML = `ston3 ${data['id']}:`;
    to_update_ston3_name.innerHTML = data['name'];
    to_update_ston3_name.removeAttribute('style');
    to_update_ston3_photo.src = data['photo_url'];
    to_update_ston3_photo.removeAttribute('hidden');
    updated_ston3_type.innerHTML = '';
    updated_ston3_personality.innerHTML = '';
    updated_ston3_discovery_date.innerHTML = '';
    updated_ston3_location_found.innerHTML = '';
    ston3_line_break.innerHTML = '<br/><br/><br/><br/>'
    updating_ston3_name.value = data['name'];
    updating_ston3_name.placeholder = `Type the updated name of ston3 ${data['id']}`;
    updating_ston3_type.value = data['type'];
    updating_ston3_type.placeholder = `Type the updated type of ston3 ${data['id']}`;
    updating_ston3_personality.value = data['personality'];
    updating_ston3_personality.placeholder = `Type the updated personality of ston3 ${data['id']}`;
    updating_ston3_discovery_date.value = data['discovery_date'];
    updating_ston3_location_found.value = data['location_found'];
    updating_ston3_location_found.placeholder = `Type the updated discovery place of ston3 ${data['id']}`;
    updating_ston3_photo.value = data['photo_url'];
    updating_ston3_photo.placeholder = `Insert the url of the new photo/picture of ston3 ${data['id']}`;
};

function DISPLAY_STON3(data) {
    const ston3_id = document.getElementById('info__to-update-title--ston3-id');
    const updated_ston3_name = document.getElementById('info__to-update-title--ston3-name');
    const updated_ston3_photo = document.getElementById('info__to-update-photo');
    const updated_ston3_type = document.getElementById('info__updated-type');
    const updated_ston3_personality = document.getElementById('info__updated-personality');
    const updated_ston3_discovery_date = document.getElementById('info__updated-discovery-date');
    const updated_ston3_location_found = document.getElementById('info__updated-location-found');
    const ston3_line_break = document.getElementById('info__line-break');

    ston3_id.innerHTML = `ston3 ${data['id']}:`;
    updated_ston3_name.innerHTML = data['name'];
    updated_ston3_photo.src = data['photo_url'];
    updated_ston3_photo.removeAttribute('hidden');
    updated_ston3_type.innerHTML = `<strong>Type:</strong> ${data['type']}`;
    updated_ston3_personality.innerHTML = `<strong>Personality:</strong> ${data['personality']}`;
    updated_ston3_discovery_date.innerHTML = `<strong>Discovery date:</strong> ${data['discovery_date']}`;
    updated_ston3_location_found.innerHTML = `<strong>Discovery place:</strong> ${data['location_found']}`;
    ston3_line_break.innerHTML = '<br/><br/><br/><br/>'
};

function DISPLAY_SELECT_ERROR(error) {
    const to_update_ston3_title = document.getElementById('info__to-update-title');
    const to_update_ston3_photo = document.getElementById('info__to-update-photo');
    const ston3_line_break = document.getElementById('info__line-break');
    const updating_ston3_name = document.getElementById('info-form__name');
    const updating_ston3_photo = document.getElementById('info-form__photo-url');
    const updating_ston3_type = document.getElementById('info-form__type');
    const updating_ston3_personality = document.getElementById('info-form__personality');
    const updating_ston3_discovery_date = document.getElementById('info-form__discovery-date');
    const updating_ston3_location_found = document.getElementById('info-form__location-found');

    to_update_ston3_title.innerHTML = `<strong id="info__to-update-title--ston3-id">[${error}]:</strong> <span id="info__to-update-title--ston3-name" style="color: #808080; font-size: 15px;">*please try again with another number*</span>`;
    to_update_ston3_photo.src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwVLdfpMvz-evdJYxIKdVL9nHYy0DvR2ypB_HCCmpGnuCEhjdkmw8wpOQKfzwjUq1RsJ8YBaBjQmXkdiXzrtl0r53mc__WFatQXkhENzmiow-LYO4pV8Cfhv1r_wuMHKDmWrKMAEgG7t3C1k_m2M81XMJb2v9wdq4nNT_LqbgBICdoK5HubI1cT0LnBnHE/s1600/404.jpeg';
    to_update_ston3_photo.removeAttribute('hidden');
    ston3_line_break.innerHTML = '<br/><br/><br/><br/>'
    updating_ston3_name.value = '';
    updating_ston3_type.value = '';
    updating_ston3_personality.value = '';
    updating_ston3_discovery_date.value = '';
    updating_ston3_location_found.value = '';
    updating_ston3_photo.value = '';
};

function DISPLAY_EDIT_ERROR(error) {
    const to_update_ston3_title = document.getElementById('info__to-update-title');
    const to_update_ston3_photo = document.getElementById('info__to-update-photo');
    const updated_ston3_type = document.getElementById('info__updated-type');
    const updated_ston3_personality = document.getElementById('info__updated-personality');
    const updated_ston3_discovery_date = document.getElementById('info__updated-discovery-date');
    const updated_ston3_location_found = document.getElementById('info__updated-location-found');
    const ston3_line_break = document.getElementById('info__line-break');
    const updating_ston3_name = document.getElementById('info-form__name');
    const updating_ston3_photo = document.getElementById('info-form__photo-url');
    const updating_ston3_type = document.getElementById('info-form__type');
    const updating_ston3_personality = document.getElementById('info-form__personality');
    const updating_ston3_discovery_date = document.getElementById('info-form__discovery-date');
    const updating_ston3_location_found = document.getElementById('info-form__location-found');

    to_update_ston3_title.innerHTML = `<strong id="info__to-update-title--ston3-id">[${error}]:</strong> <span id="info__to-update-title--ston3-name" style="color: #808080; font-size: 15px;">*please try again*</span>`;
    to_update_ston3_photo.src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwVLdfpMvz-evdJYxIKdVL9nHYy0DvR2ypB_HCCmpGnuCEhjdkmw8wpOQKfzwjUq1RsJ8YBaBjQmXkdiXzrtl0r53mc__WFatQXkhENzmiow-LYO4pV8Cfhv1r_wuMHKDmWrKMAEgG7t3C1k_m2M81XMJb2v9wdq4nNT_LqbgBICdoK5HubI1cT0LnBnHE/s1600/404.jpeg';
    to_update_ston3_photo.removeAttribute('hidden');
    updated_ston3_type.innerHTML = '';
    updated_ston3_personality.innerHTML = '';
    updated_ston3_discovery_date.innerHTML = '';
    updated_ston3_location_found.innerHTML = '';
    ston3_line_break.innerHTML = '<br/><br/><br/><br/>'
    updating_ston3_name.value = '';
    updating_ston3_type.value = '';
    updating_ston3_personality.value = '';
    updating_ston3_discovery_date.value = '';
    updating_ston3_location_found.value = '';
    updating_ston3_photo.value = '';
};

document.querySelector('#id-form')
    .addEventListener('submit', (e) => {
        e.preventDefault();
        const data = Object.fromEntries(
            new FormData(e.target)
        );
        document.querySelectorAll('.info-form__data').forEach(el => {
            el.removeAttribute('disabled');
        });
        document.querySelectorAll('.id-form__data').forEach(el => {
            el.setAttribute('disabled', 'true');
        });
        selected_id = parseInt(data['id-form__id']);
        FETCH_TO_UPDATE_INFO_FROM_ID();
    });

document.querySelector('#info-form')
    .addEventListener('submit', (e) => {
        e.preventDefault();
        edit_counter++;
        const data = Object.fromEntries(
            new FormData(e.target)
        );
        if (edit_counter > 0) {
            document.querySelectorAll('.info-form__data').forEach(el => {
                el.setAttribute('disabled', 'true');
            });
            document.querySelectorAll('.id-form__data').forEach(el => {
                el.removeAttribute('disabled');
            });
        };
        FETCH_STON3(data);
    });