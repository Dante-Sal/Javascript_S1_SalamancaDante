export const type_input = document.querySelector('.type');
export const type_media_query = window.matchMedia('(max-width: 1088px)');

export const name_input = document.querySelector('.name');
export const name_media_query = window.matchMedia('(max-width: 822px)');

export const search_btn = document.querySelector('.search');
export const search_media_query = window.matchMedia('(max-width: 791px)');

export const favorites_btn = document.querySelector('.favorites');
export const favorites_media_query = window.matchMedia('(max-width: 719px)');

export const card_media_query = window.matchMedia('(max-width: 393px)');

export function UPDATE_TYPE_PLACEHOLDER(e) {
    if (e.matches) {
        type_input.placeholder = 'Type';
    } else {
        type_input.placeholder = 'Type of pet';
    };
};

export function UPDATE_NAME_PLACEHOLDER(e) {
    if (e.matches) {
        name_input.placeholder = 'Name';
    } else {
        name_input.placeholder = 'Pet name';
    };
};

export function UPDATE_SEARCH_VALUE(e) {
    if (e.matches) {
        search_btn.innerHTML = '⌕';
    } else {
        search_btn.innerHTML = 'Search ⌕';
    };
};

export function UPDATE_FAVORITES_VALUE(e) {
    if (e.matches) {
        console.log(e)
        console.log(e.matches)
        favorites_btn.innerHTML = '★';
    } else {
        favorites_btn.innerHTML = 'My Favorite Pets ★';
    };
};

export function SET_CARD_BUTTON_VALUE(e) {
    const card_btn = document.querySelectorAll('.card-button');

    if (e) {
        card_btn.forEach(btn => {
            btn.innerHTML = '+';
        });
    } else {
        card_btn.forEach(btn => {
            btn.innerHTML = 'KNOW MORE ABOUT THIS PET +';
        });
    };
};

export function UPDATE_CARD_BUTTON_VALUE(e) {
    const card_btn = document.querySelectorAll('.card-button');

    if (e.matches) {
        card_btn.forEach(btn => {
            btn.innerHTML = '+';
        });
    } else {
        card_btn.forEach(btn => {
            btn.innerHTML = 'KNOW MORE ABOUT THIS PET +';
        });
    };
};