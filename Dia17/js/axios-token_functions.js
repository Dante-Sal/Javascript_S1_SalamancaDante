export const api_key = 'eeL79mIQawccBKmIz7LwFegytKuuiVgIstK9cNv6ITM9mrVVH6';
export const api_secret = 'jSMjFhxQN2d7UkbR2vb5YXPbz09Ib70OAzci4jDd';

export let access_token = null;
export let token_expiration = 0;

export async function FETCH_ACCESS_TOKEN() {
    const req = {
        grant_type: 'client_credentials',
        client_id: api_key,
        client_secret: api_secret
    };
    const response = await axios.post('https://api.petfinder.com/v2/oauth2/token', req);

    access_token = response.data.access_token;
    token_expiration = Date.now() + response.data.expires_in * 1000;

    console.log('✅ Token obtenido:', access_token);
    console.log('Vence el: ', token_expiration);
};

export async function ENSURE_VALID_TOKEN() {
  if (!access_token || Date.now() >= token_expiration) {
    await FETCH_ACCESS_TOKEN();
  };
  return access_token;
};