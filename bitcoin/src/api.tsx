// fetch하고, json객체를 받는 형식의 함수들.

// 어떤 식으로 fetch되는지 보기 쉬운 방법.
// export async function fetchCoins() {
//   const response = await fetch("https://api.coinpaprika.com/v1/coins");
//   const json = await response.json();
//   return json;
// }
// 심플하게 전통적인 방법으로 함수작성하는방법.

const BASE_URL = "https://api.coinpaprika.com/v1/";

export function fetchCoins() {
  return fetch(`${BASE_URL}coins`).then((response) => response.json());
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}coins/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}tickers/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinHistroy(coinId: string) {
  // const endDate = Math.floor(Date.now() / 1000);
  // const startDate = endDate - 60 * 60 * 24 * 7 * 2;
  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
  ).then((response) => response.json());
}
