import Head from "next/head";
import React from "react";
import { useQuery } from "react-query";
import { Coin as TCoin } from "./types";
import getCoins from "./getCoins";
import Coin from "./Coin";
import Hero from "@/components/Hero";

const Home = () => {
  const { isLoading, error, data } = useQuery<TCoin[], Error>("coins", () =>
    getCoins()
  );

  if (error) {
    return <>An error has occurred:</>;
  }

  return (
    <>
      <Head>
        <title>CoinGecko Market Pairs (USD)</title>
      </Head>
      <main>
        <Hero
          title={<>Market Pairs (USD)</>}
          subtitle={
            <>
              The following is a list of crypto currencies with information
              related to the USD trading pair.
            </>
          }
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {isLoading && <>Loading...</>}
            {data?.map(Coin)}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
