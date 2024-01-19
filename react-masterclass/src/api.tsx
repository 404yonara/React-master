// fetch하고, json객체를 받는 형식의 함수들.

// 어떤 식으로 fetch되는지 보기 쉬운 방법.
// export async function fetchCoins() {
//   const response = await fetch("https://api.coinpaprika.com/v1/coins");
//   const json = await response.json();
//   return json;
// }
// 심플하게 전통적인 방법으로 함수작성하는방법.
export function fetchCoins() {
  return fetch("https://api.coinpaprika.com/v1/coins").then((response) =>
    response.json()
  );
}
