import axios from "axios";

// https://kinopoiskapiunofficial.tech/documentation/api/ swager

const API_URL = "https://kinopoiskapiunofficial.tech/api/";
const API_KEY = "80e78b6e-50df-4b75-8ae1-0b6daff203e8";

const $api = axios.create({
  baseURL: API_URL,
});

$api.defaults.headers.common["X-API-KEY"] = API_KEY;

export { $api };
