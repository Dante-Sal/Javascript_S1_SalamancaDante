export const cards_container = document.querySelector('.cards-container');

export function DISPLAY_ANIMALS(data) {
    for (let i = 0; i < data.animals.length; i++) {
        if (data.animals[i].photos.length === 0) {
            cards_container.insertAdjacentHTML('beforeend', `
            <div class="card">
                <div class="card-img-container">
                    <img class="card-img-top" src="" alt="${data.animals[i].name}">
                </div>
                <div class="card-body">
                  <h5 class="card-title">
                    ${data.animals[i].name}
                    <button class="btn btn-outline-primary">★</button>
                  </h5>
                  <p class="card-text text-body-secondary">(${data.animals[i].age} ${data.animals[i].type} | ${data.animals[i].breeds.primary})</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item text-body-secondary"><strong>Location:</strong> ${data.animals[i].contact.address.city}, ${data.animals[i].contact.address.country}</li>
                  <li class="list-group-item text-body-secondary card-published-footer"><small>Published on ${data.animals[i].published_at.slice(0, 10)}</small>
                  </li>
                  <li class="list-group-item card-button">KNOW MORE ABOUT THIS PET +</li>
                </ul>
            </div>`);
        } else if (data.animals[i].photos.full != undefined) {
                    cards_container.insertAdjacentHTML('beforeend', `
            <div class="card">
                <div class="card-img-container">
                    <img class="card-img-top" src="${data.animals[i].photos[0].full}" alt="${data.animals[i].name}">
                </div>
                <div class="card-body">
                  <h5 class="card-title">
                    ${data.animals[i].name}
                    <button class="btn btn-outline-primary">★</button>
                  </h5>
                  <p class="card-text text-body-secondary">(${data.animals[i].age} ${data.animals[i].type} | ${data.animals[i].breeds.primary})</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item text-body-secondary"><strong>Location:</strong> ${data.animals[i].contact.address.city}, ${data.animals[i].contact.address.country}</li>
                  <li class="list-group-item text-body-secondary card-published-footer"><small>Published on ${data.animals[i].published_at.slice(0, 10)}</small>
                  </li>
                  <li class="list-group-item card-button">KNOW MORE ABOUT THIS PET +</li>
                </ul>
            </div>`);
        } else if (data.animals[i].photos[0].large != undefined) {
                                cards_container.insertAdjacentHTML('beforeend', `
            <div class="card">
                <div class="card-img-container">
                    <img class="card-img-top" src="${data.animals[i].photos[0].large}" alt="${data.animals[i].name}">
                </div>
                <div class="card-body">
                  <h5 class="card-title">
                    ${data.animals[i].name}
                    <button class="btn btn-outline-primary">★</button>
                  </h5>
                  <p class="card-text text-body-secondary">(${data.animals[i].age} ${data.animals[i].type} | ${data.animals[i].breeds.primary})</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item text-body-secondary"><strong>Location:</strong> ${data.animals[i].contact.address.city}, ${data.animals[i].contact.address.country}</li>
                  <li class="list-group-item text-body-secondary card-published-footer"><small>Published on ${data.animals[i].published_at.slice(0, 10)}</small>
                  </li>
                  <li class="list-group-item card-button">KNOW MORE ABOUT THIS PET +</li>
                </ul>
            </div>`);
        } else if (data.animals[i].photos[0].medium != undefined) {
                                cards_container.insertAdjacentHTML('beforeend', `
            <div class="card">
                <div class="card-img-container">
                    <img class="card-img-top" src="${data.animals[i].photos[0].medium}" alt="${data.animals[i].name}">
                </div>
                <div class="card-body">
                  <h5 class="card-title">
                    ${data.animals[i].name}
                    <button class="btn btn-outline-primary">★</button>
                  </h5>
                  <p class="card-text text-body-secondary">(${data.animals[i].age} ${data.animals[i].type} | ${data.animals[i].breeds.primary})</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item text-body-secondary"><strong>Location:</strong> ${data.animals[i].contact.address.city}, ${data.animals[i].contact.address.country}</li>
                  <li class="list-group-item text-body-secondary card-published-footer"><small>Published on ${data.animals[i].published_at.slice(0, 10)}</small>
                  </li>
                  <li class="list-group-item card-button">KNOW MORE ABOUT THIS PET +</li>
                </ul>
            </div>`);
        } else if (data.animals[i].photos[0].small != undefined) {
                                cards_container.insertAdjacentHTML('beforeend', `
            <div class="card">
                <div class="card-img-container">
                    <img class="card-img-top" src="${data.animals[i].photos[0].small}" alt="${data.animals[i].name}">
                </div>
                <div class="card-body">
                  <h5 class="card-title">
                    ${data.animals[i].name}
                    <button class="btn btn-outline-primary">★</button>
                  </h5>
                  <p class="card-text text-body-secondary">(${data.animals[i].age} ${data.animals[i].type} | ${data.animals[i].breeds.primary})</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item text-body-secondary"><strong>Location:</strong> ${data.animals[i].contact.address.city}, ${data.animals[i].contact.address.country}</li>
                  <li class="list-group-item text-body-secondary card-published-footer"><small>Published on ${data.animals[i].published_at.slice(0, 10)}</small>
                  </li>
                  <li class="list-group-item card-button">KNOW MORE ABOUT THIS PET +</li>
                </ul>
            </div>`);
        }
    };
};