import { ENSURE_VALID_TOKEN } from "./axios-token_functions.js";
import { DISPLAY_ANIMALS_DETAILS } from "./display_functions.js";

export async function FETCH_POPULAR_ANIMALS() {
  const access_token = await ENSURE_VALID_TOKEN();
  const req = {
    headers: {
      'Authorization': `Bearer ${access_token}`
    }
  };
  const response = await axios.get('https://api.petfinder.com/v2/animals?sort=recent&limit=24', req);

  return response.data;
};

export async function FETCH_ANIMALS_BY_FILTER(data) {
  const access_token = await ENSURE_VALID_TOKEN();
  let url = 'https://api.petfinder.com/v2/animals?sort=recent&limit=24';
  const req = {
    headers: {
      'Authorization': `Bearer ${access_token}`
    }
  };
  for (let input_value in data) {
    if (input_value === 'type') {
      if (data[input_value] !== '') {
        url += `&${data[input_value]}`;
      };
    } else if (input_value === 'location') {
      if (data[input_value] !== '') {
        url += `&location=${encodeURIComponent(data[input_value]).toLowerCase()}`;
      };
    } else if (input_value === 'name') {
      if (data[input_value] !== '') {
        url += `&name=${encodeURIComponent(data[input_value]).toLowerCase()}`;
      };
    } else if (input_value === 'age') {
      if (data[input_value] !== '') {
        url += `&age=${data[input_value]}`;
      };
    }
  };
  console.log(url)
  const response = await axios.get(url, req);
  console.log(response.data.animals)
  return response.data;
};

export async function FETCH_ANIMALS_DETAILS(event) {
  const id = event.target.getAttribute('pet-id');
  const access_token = await ENSURE_VALID_TOKEN();
  const req = {
    headers: {
      'Authorization': `Bearer ${access_token}`
    }
  };
  const response = await axios.get(`https://api.petfinder.com/v2/animals/${id}`, req);

  console.log(response.data.animal.photos.length)
  DISPLAY_ANIMALS_DETAILS(response.data);
};