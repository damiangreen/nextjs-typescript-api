import { apiBaseUrl } from "@/constants/apiBaseUrl";
import { fetcher } from "@/helpers/fetcher";

const getCoin = (slug: string) => fetcher(`${apiBaseUrl}/coins/${slug}`);

export default getCoin;
