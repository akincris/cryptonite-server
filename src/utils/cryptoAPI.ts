import fetch from "node-fetch";

const COIN_API_URL = "https://api.coingecko.com/api/v3/coins";

export function getCoinData(endpoint: string) {
  const url = new URL(`${COIN_API_URL}/${endpoint}`);
  return fetch(url.toString());
}
