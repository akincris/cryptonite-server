import fetch from "node-fetch";
import { ICurrency } from "../interfaces/currencyDetails";

type CurrencyInfo = {
  [key: string]: ICurrency;
};
const COIN_API_URL = "https://api.coingecko.com/api/v3";

export function getCoinData(endpoint: string) {
  const url = new URL(`${COIN_API_URL}/coins/${endpoint}`);
  return fetch(url.toString());
}

export function getCurrencyDetails(ids: string) {
  const url = new URL(
    `${COIN_API_URL}/simple/price?ids=${ids}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`
  );

  return fetch(url.toString());
}

export function getCoinHistory(id: string) {
  const url = new URL(
    `${COIN_API_URL}/coins/${id}/history?date=21-05-2023&localization=false`
  );

  return fetch(url.toString());
}
