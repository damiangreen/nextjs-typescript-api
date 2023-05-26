import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import Image from "next/image";
import { CoinsFetchData } from "@/pages/types";
import getCoin from "./getCoin";
import Hero from "@/components/Hero";

const Currency = () => {
  const router = useRouter();
  const slug = router.query.slug;

  const { isLoading, error, data } = useQuery<CoinsFetchData, Error>(
    "repoData",
    () => getCoin(slug as string),
    { enabled: Boolean(slug) && typeof slug === "string" }
  );

  if (isLoading) {
    return <>Loading...</>;
  }

  if (!slug) {
    return <></>;
  }

  if (error || !data) {
    return <>An error has occurred:</>;
  }

  const {
    name,
    market_cap_rank,
    image: { small: image },
    market_data: {
      current_price: { usd },
      ath: { usd: ath_usd },
    },
  } = data;
  return (
    <>
      <Head>
        <title>{slug}</title>
      </Head>
      <main>
        <div className="bg-white pt-8 pb-6">
          <Hero
            title={
              <div className="flex">
                <Image
                  src={image}
                  alt="placeholder"
                  width={40}
                  height={40}
                  className="object-cover object-center mr-2"
                />
                <Link href="/" className="underline decoration-dotted">
                  Coins
                </Link>
                /{name}
              </div>
            }
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ul className="list-disc pl-5">
            <li>Market Cap Rank: {market_cap_rank}</li>
            <li>Current Price: ${usd} </li>
            <li>All time high price: ${ath_usd} </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Currency;
