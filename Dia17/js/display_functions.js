export const cards_container = document.querySelector('.cards-container');

export function DISPLAY_ANIMALS(data) {
  cards_container.innerHTML = '';
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
            <p class="card-text text-body-secondary">(${data.animals[i].age} ${data.animals[i].type} | ${data.animals[i].breeds.primary})</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-body-secondary"><strong>Location:</strong> ${data.animals[i].contact.address.city}, ${data.animals[i].contact.address.country}</li>
            <li class="list-group-item text-body-secondary card-published-footer"><small>Published on ${data.animals[i].published_at.slice(0, 10)}</small>
            </li>
            <li class="list-group-item card-button">KNOW MORE ABOUT THIS PET +</li>
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