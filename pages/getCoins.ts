import { apiBaseUrl } from "@/constants/apiBaseUrl";
import { fetcher } from "@/helpers/fetcher";

const getCoins = () =>
  fetcher(`${apiBaseUrl}/coins/markets?vs_currency=usd&per_page=45&page=1`);

export default getCoins;
