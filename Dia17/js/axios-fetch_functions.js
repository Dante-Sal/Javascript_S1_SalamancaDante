import { ENSURE_VALID_TOKEN } from "./axios-token_functions.js";

export async function FETCH_ANIMALS() {
  const access_token = await ENSURE_VALID_TOKEN();
  const req = {
    headers: {
      'Authorization': `Bearer ${access_token}`
    }
  };
  const response = await axios.get('https://api.petfinder.com/v2/animals?sort=recent', req);

  console.log('🐾 Animales:', response.data.animals);
  return response.data;
};