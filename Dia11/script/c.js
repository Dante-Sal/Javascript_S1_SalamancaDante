function FETCH_STON3(data) {
    const req = {
            'name': data['form__name'],
            "type": data['form__type'],
            "personality": data['form__personality'],
            "discovery_date": data['form__discovery-date'],
            "location_found": data['form__location-found'],
            "photo_url": data['form__photo-url']
        };
    axios.post(`https://6812ccc5129f6313e20f8d72.mockapi.io/ston3s`, req)
        .then(response => {
            DISPLAY_STON3(response.data);
        })
        .catch(error => {
            DISPLAY_ERROR(error);
        });
};

function DISPLAY_STON3(data) {
    const new_ston3_name = document.getElementById('created-info__title--new-ston3-name');
    const new_ston3_photo = document.getElementById('created-info__photo');
    const new_ston3_type = document.getElementById('created-info__type');
    const new_ston3_personality = document.getElementById('created-info__personality');
    const new_ston3_discovery_date = document.getElementById('created-info__discovery-date');
    const new_ston3_location_found = document.getElementById('created-info__location-found');

    new_ston3_name.innerHTML = data['name'];
    new_ston3_photo.src = data['photo_url'];
    new_ston3_photo.removeAttribute('hidden');
    new_ston3_type.innerHTML = `<strong>Type:</strong> ${data['type']}`;
    new_ston3_personality.innerHTML = `<strong>Personality:</strong> ${data['personality']}`;
    new_ston3_discovery_date.innerHTML = `<strong>Discovery date:</strong> ${data['discovery_date']}`;
    new_ston3_location_found.innerHTML = `<strong>Discovery place:</strong> ${data['location_found']}`;
};

function DISPLAY_ERROR(error) {
    const new_ston3_name = document.getElementById('created-info__title');
    const new_ston3_photo = document.getElementById('created-info__photo');
    const new_ston3_type = document.getElementById('created-info__type');
    const new_ston3_personality = document.getElementById('created-info__personality');
    const new_ston3_discovery_date = document.getElementById('created-info__discovery-date');
    const new_ston3_location_found = document.getElementById('created-info__location-found');

    new_ston3_name.innerHTML = `<strong>[${error}]:</strong> Cannot create this ston3`;
    new_ston3_photo.src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwVLdfpMvz-evdJYxIKdVL9nHYy0DvR2ypB_HCCmpGnuCEhjdkmw8wpOQKfzwjUq1RsJ8YBaBjQmXkdiXzrtl0r53mc__WFatQXkhENzmiow-LYO4pV8Cfhv1r_wuMHKDmWrKMAEgG7t3C1k_m2M81XMJb2v9wdq4nNT_LqbgBICdoK5HubI1cT0LnBnHE/s1600/404.jpeg';
    new_ston3_photo.removeAttribute('hidden');
    new_ston3_type.innerHTML = '';
    new_ston3_personality.innerHTML = '';
    new_ston3_discovery_date.innerHTML = '';
    new_ston3_location_found.innerHTML = '';
};

document.querySelector('form')
    .addEventListener('submit', (e) => {
        e.preventDefault();
        const data = Object.fromEntries(
            new FormData(e.target)
        );
        FETCH_STON3(data);
    });