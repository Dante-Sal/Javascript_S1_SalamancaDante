import * as mq from './media-queries_functions.js';
import { FETCH_ANIMALS_BY_FILTER, FETCH_POPULAR_ANIMALS } from "./axios-fetch_functions.js";
import { DISPLAY_ANIMALS } from "./display_functions.js";

FETCH_POPULAR_ANIMALS()
    .then(data => {
        DISPLAY_ANIMALS(data);

        mq.SET_CARD_BUTTON_VALUE(mq.card_media_query.matches);

        mq.UPDATE_TYPE_PLACEHOLDER(mq.type_media_query);
        mq.type_media_query.addEventListener('change', mq.UPDATE_TYPE_PLACEHOLDER);

        mq.UPDATE_NAME_PLACEHOLDER(mq.name_media_query);
        mq.name_media_query.addEventListener('change', mq.UPDATE_NAME_PLACEHOLDER);

        mq.UPDATE_SEARCH_VALUE(mq.search_media_query);
        mq.search_media_query.addEventListener('change', mq.UPDATE_SEARCH_VALUE);

        mq.UPDATE_FAVORITES_VALUE(mq.favorites_media_query);
        mq.favorites_media_query.addEventListener('change', mq.UPDATE_FAVORITES_VALUE);

        mq.UPDATE_CARD_BUTTON_VALUE(mq.card_media_query);
        mq.card_media_query.addEventListener('change', mq.UPDATE_CARD_BUTTON_VALUE);
    });

document.querySelector('.v-form')
    .addEventListener('submit', e => {
        e.preventDefault();
        const data = Object.fromEntries(
            new FormData(e.target)
        );
        FETCH_ANIMALS_BY_FILTER(data)
            .then(data => {
                DISPLAY_ANIMALS(data);

                mq.SET_CARD_BUTTON_VALUE(mq.card_media_query.matches);

                mq.UPDATE_TYPE_PLACEHOLDER(mq.type_media_query);
                mq.type_media_query.addEventListener('change', mq.UPDATE_TYPE_PLACEHOLDER);

                mq.UPDATE_NAME_PLACEHOLDER(mq.name_media_query);
                mq.name_media_query.addEventListener('change', mq.UPDATE_NAME_PLACEHOLDER);

                mq.UPDATE_SEARCH_VALUE(mq.search_media_query);
                mq.search_media_query.addEventListener('change', mq.UPDATE_SEARCH_VALUE);

                mq.UPDATE_FAVORITES_VALUE(mq.favorites_media_query);
                mq.favorites_media_query.addEventListener('change', mq.UPDATE_FAVORITES_VALUE);

                mq.UPDATE_CARD_BUTTON_VALUE(mq.card_media_query);
                mq.card_media_query.addEventListener('change', mq.UPDATE_CARD_BUTTON_VALUE);
            });
    });

document.querySelector('.h-form')
    .addEventListener('submit', e => {
        e.preventDefault();
        const data = Object.fromEntries(
            new FormData(e.target)
        );
        FETCH_ANIMALS_BY_FILTER(data)
            .then(data => {
                DISPLAY_ANIMALS(data);

                mq.SET_CARD_BUTTON_VALUE(mq.card_media_query.matches);

                mq.UPDATE_TYPE_PLACEHOLDER(mq.type_media_query);
                mq.type_media_query.addEventListener('change', mq.UPDATE_TYPE_PLACEHOLDER);

                mq.UPDATE_NAME_PLACEHOLDER(mq.name_media_query);
                mq.name_media_query.addEventListener('change', mq.UPDATE_NAME_PLACEHOLDER);

                mq.UPDATE_SEARCH_VALUE(mq.search_media_query);
                mq.search_media_query.addEventListener('change', mq.UPDATE_SEARCH_VALUE);

                mq.UPDATE_FAVORITES_VALUE(mq.favorites_media_query);
                mq.favorites_media_query.addEventListener('change', mq.UPDATE_FAVORITES_VALUE);

                mq.UPDATE_CARD_BUTTON_VALUE(mq.card_media_query);
                mq.card_media_query.addEventListener('change', mq.UPDATE_CARD_BUTTON_VALUE);
            });
    });