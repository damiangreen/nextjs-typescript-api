import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Coin as TCoin } from "./types";

const Coin = ({ id, name, image, current_price, high_24h, low_24h }: TCoin) => (
  <div key={id} className="flex flex-col">
    <Image
      src={image}
      alt="placeholder"
      width={200}
      height={200}
      className="object-cover object-center"
    />
    <div className="flex-1 p-4">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <ul className="list-disc pl-5">
        <li>Current Price: ${current_price}</li>
        <li>24h High: ${high_24h}</li>
        <li>24h Low: ${low_24h}</li>
      </ul>
    </div>
    <div className="p-4">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {/* The id is effectively an extended symbol */}
        <Link href={`/currency/${id}`}>More</Link>
      </button>
    </div>
  </div>
);

export default Coin;
