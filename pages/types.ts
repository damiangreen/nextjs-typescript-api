// Ideally we'd like to use the typings from @types/coingecko-api, it would involve inferring the
// generic argument from the Response<T> below.
// type T = Awaited<ReturnType<CoinGecko["coins"]["fetch"]>>;
// However on closer inspection this repo isnt up to date with the latest version of the API

export type Coin = {
  image: string;
  id: string;
  name: string;
  current_price: number;
  high_24h: number;
  low_24h: number;
  symbol: string;
};

export type CoinsFetchData = {
  name: string;
  market_cap_rank: number;
  image: { small: string };
  market_data: {
    current_price: { usd: number };
    ath: { usd: number };
  };
};
