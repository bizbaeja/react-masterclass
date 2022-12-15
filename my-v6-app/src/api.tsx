//API를 fetch하고 json 을 return 하는 함수
//useQuery Hook 을 원래 있던 자리에 대신 끼워넣는다.
const BASE_URL = `https://api.coinpaprika.com/v1`;

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}
//json data의 Promise를 반환해야함

export function fetchCoinInfo(coinId?: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinTickers(coinId?: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinHistory(coinId?: string) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7;

  return fetch(
    `${BASE_URL}/coins/${coinId}/ohlcv/historical?startDate=${startDate}&end=${endDate}`
  ).then((response) => response.json());
}
