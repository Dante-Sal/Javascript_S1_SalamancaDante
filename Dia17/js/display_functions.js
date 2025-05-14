export const title = document.getElementById('title');
export const cards_container = document.querySelector('.cards-container');
export const details_container = document.querySelector('.details-container');

export function DISPLAY_ANIMALS(data, request_type) {
  if (request_type === 'filtered') {
    title.innerHTML = '';
  } else if (request_type === 'popular') {
    title.innerHTML = '<strong>PacoPets most <span>POPULAR</span> ones!</strong>'
  }

  cards_container.innerHTML = '';
  cards_container.style.display = 'grid';

  details_container.innerHTML = '';
  details_container.style.display = 'none';

  for (let i = 0; i < data.animals.length; i++) {
    cards_container.insertAdjacentHTML('beforeend', `
      <div class="card">
          <div class="card-img-container">
              <img id="card-img-top--${i + 1}"/>
          </div>
          <div class="card-body">
            <h5 class="card-title">
              ${data.animals[i].name}
              <button class="btn btn-outline-primary">★</button>
            </h5>
            <p class="card-text text-body-secondary">(${data.animals[i].age} ${data.animals[i].species} | ${data.animals[i].breeds.primary})</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-body-secondary"><strong>Location:</strong> ${data.animals[i].contact.address.city}, ${data.animals[i].contact.address.state}</li>
            <li class="list-group-item text-body-secondary card-published-footer"><small>Published on ${data.animals[i].published_at.slice(0, 10)}</small>
            </li>
            <li class="list-group-item card-button" pet-id="${data.animals[i].id}">KNOW MORE ABOUT THIS PET +</li>
          </ul>
      </div>`);
    if (data.animals[i].photos.length === 0) {
      const card_img_top_current = document.getElementById(`card-img-top--${i + 1}`);
      card_img_top_current.src = 'https://mint.fiu.edu/wp-content/uploads/2021/10/image-not-available.jpg';
    } else if (data.animals[i].photos.full != undefined) {
      const card_img_top_current = document.getElementById(`card-img-top--${i + 1}`);
      card_img_top_current.src = data.animals[i].photos[0].full;
    } else if (data.animals[i].photos[0].large != undefined) {
      const card_img_top_current = document.getElementById(`card-img-top--${i + 1}`);
      card_img_top_current.src = data.animals[i].photos[0].large;
    } else if (data.animals[i].photos[0].medium != undefined) {
      const card_img_top_current = document.getElementById(`card-img-top--${i + 1}`);
      card_img_top_current.src = data.animals[i].photos[0].medium;
    } else if (data.animals[i].photos[0].small != undefined) {
      const card_img_top_current = document.getElementById(`card-img-top--${i + 1}`);
      card_img_top_current.src = data.animals[i].photos[0].small;
    }
  };
};

export function DISPLAY_ANIMALS_DETAILS(data) {
  window.scrollTo(0, 0);
  
  title.innerHTML = ''
  cards_container.innerHTML = '';
  cards_container.style.display = 'none';

  details_container.innerHTML = '';
  details_container.style.display = 'flex';

  if (data.animal.description === null) {
    details_container.innerHTML = `
      <h1 id="details-title">
        <strong>Meet <span>${data.animal.name.toUpperCase()}</span>!</strong>
        <div>
          <button class="btn btn-outline-primary details-favorite">★</button>
          <a class="contacts-link" href="#contacts"><button class="btn btn-primary details-contact">✆</button></a>
        </div>
      </h1>

      <div id="images-carousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators"></div>
        <div class="carousel-inner"></div>
        <button class="carousel-control-prev" type="button" data-bs-target="#images-carousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#images-carousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <h2 class="h2">
        <p>${data.animal.age} ${data.animal.species} <span>(${data.animal.gender} / ${data.animal.size})</span></p>
        <span>${data.animal.breeds.primary}</span>
      </h2>

      <div class="hr"></div>

      <ul class="no-description-list">
        <li>Low-pressure trial period</li>
        <li>Rescue team support</li>
        <li>A smooth transition for the pup</li>
        <li>Helps us save more lives by opening foster space</li>
      </ul>
      <p class="details-description details-link">
        Apply today to meet ${data.animal.name}—she’s ready to sweeten your life!<br /><br />
        If you’re interested in scheduling a meet and greet, please fill out an adoption application at:<br /><br />
        <a href="${data.animal.url}">${data.animal.url}</a><br /><br />
      </p>
      
      <div id="contacts" class="contacts-container">
        <h1>Contact:</h1>
        <div class="contacts">
          <p><span class="badge rounded-pill text-bg-success">E-mail</span> : ${data.animal.contact.email}</p>
          <p><span class="badge rounded-pill text-bg-danger">Phone</span> : ${data.animal.contact.phone}</p>
        </div>
      </div>`;
    const no_description_list = document.querySelector('.no-description-list');
    no_description_list.style.marginTop = '2.5vmax';
  } else {
    details_container.innerHTML = `
      <h1 id="details-title">
        <strong>Meet <span>${data.animal.name.toUpperCase()}</span>!</strong>
        <div>
          <button class="btn btn-outline-primary details-favorite">★</button>
          <a class="contacts-link" href="#contacts"><button class="btn btn-primary details-contact">✆</button></a>
        </div>
      </h1>

      <div id="images-carousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators"></div>
        <div class="carousel-inner"></div>
        <button class="carousel-control-prev" type="button" data-bs-target="#images-carousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#images-carousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <h2 class="h2">
        <p>${data.animal.age} ${data.animal.species} <span>(${data.animal.gender} / ${data.animal.size})</span></p>
        <span>${data.animal.breeds.primary}</span>
      </h2>

      <div class="hr"></div>

      <p class="details-description">
        ${data.animal.description}
        <span class="h2">Foster-to-Adopt Available!</span>
        Our Foster-to-Adopt program gives you a chance to bring a dog home on a trial basis before making a final
        decision. It’s a great way to ensure the perfect match—for both you and the dog.
        <span class="h2 details-benefits">Program Benefits:</span>
      </p>
      <ul>
        <li>Low-pressure trial period</li>
        <li>Rescue team support</li>
        <li>A smooth transition for the pup</li>
        <li>Helps us save more lives by opening foster space</li>
      </ul>
      <p class="details-description details-link">
        Apply today to meet ${data.animal.name}—she’s ready to sweeten your life!<br /><br />
        If you’re interested in scheduling a meet and greet, please fill out an adoption application at:<br /><br />
        <a href="${data.animal.url}">${data.animal.url}</a><br /><br />
      </p>
      
      <div id="contacts" class="contacts-container">
        <h1>Contact:</h1>
        <div class="contacts">
          <p><span class="badge rounded-pill text-bg-success">E-mail</span> : ${data.animal.contact.email}</p>
          <p><span class="badge rounded-pill text-bg-danger">Phone</span> : ${data.animal.contact.phone}</p>
        </div>
      </div>`;
  };

  if (data.animal.photos.length === 0) {
    const carousel_indicators = document.querySelector('.carousel-indicators');
    const carousel_inner = document.querySelector('.carousel-inner');
    carousel_indicators.innerHTML = `
      <button class="active" type="button" data-bs-target="#images-carousel" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
      `;
    carousel_inner.innerHTML = `
      <div class="carousel-item active">
        <img class="d-block carousel-image" src="https://mint.fiu.edu/wp-content/uploads/2021/10/image-not-available.jpg"/>
      </div>
      `;
  } else {
    for (let i = 0; i < data.animal.photos.length; i++) {
      const carousel_indicators = document.querySelector('.carousel-indicators');
      const carousel_inner = document.querySelector('.carousel-inner');

      if (i === 0) {
        carousel_indicators.innerHTML += `
          <button class="active" type="button" data-bs-target="#images-carousel" data-bs-slide-to="${i}" aria-current="true" aria-label="Slide ${i + 1}"></button>
          `;
        if (data.animal.photos[i].full != undefined) {
          carousel_inner.innerHTML += `
            <div class="carousel-item active">
              <img class="d-block carousel-image" src="${data.animal.photos[i].full}"/>
            </div>
            `;
        } else if (data.animal.photos[i].large != undefined) {
          carousel_inner.innerHTML += `
            <div class="carousel-item active">
              <img class="d-block carousel-image" src="${data.animal.photos[i].large}"/>
            </div>
            `;
        } else if (data.animal.photos[i].medium != undefined) {
          carousel_inner.innerHTML += `
            <div class="carousel-item active">
              <img class="d-block carousel-image" src="${data.animal.photos[i].medium}"/>
            </div>
            `;
        } else if (data.animal.photos[i].small != undefined) {
          carousel_inner.innerHTML += `
            <div class="carousel-item active">
              <img class="d-block carousel-image" src="${data.animal.photos[i].small}"/>
            </div>
            `;
        };
      } else {
        carousel_indicators.innerHTML += `
          <button type="button" data-bs-target="#images-carousel" data-bs-slide-to="${i}" aria-current="true" aria-label="Slide ${i + 1}"></button>
          `;
        if (data.animal.photos[i].full != undefined) {
          carousel_inner.innerHTML += `
            <div class="carousel-item">
              <img class="d-block carousel-image" src="${data.animal.photos[i].full}"/>
            </div>
            `;
        } else if (data.animal.photos[i].large != undefined) {
          carousel_inner.innerHTML += `
            <div class="carousel-item">
              <img class="d-block carousel-image" src="${data.animal.photos[i].large}"/>
            </div>
            `;
        } else if (data.animal.photos[i].medium != undefined) {
          carousel_inner.innerHTML += `
            <div class="carousel-item">
              <img class="d-block carousel-image" src="${data.animal.photos[i].medium}"/>
            </div>
            `;
        } else if (data.animal.photos[i].small != undefined) {
          carousel_inner.innerHTML += `
            <div class="carousel-item">
              <img class="d-block carousel-image" src="${data.animal.photos[i].small}"/>
            </div>
            `;
        };
      };
    };
  };
};