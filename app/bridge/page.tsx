"use client";

import { Approve, BridgeIn, Reserve, Wallet } from "@/components";
import {
  BridgeAddress as spender,
  tokenA_address,
  tokenB_address,
  tokenC_address,
} from "@/constants";
import Link from "next/link";
import { useState } from "react";
import { Address } from "viem";

const Bridge = () => {
  const [token, setToken] = useState<Address>(tokenA_address);
  const [amount, setAmount] = useState<string>("100");

  return (
    <>
      <section>
        <div className="flex mt-4 justify-center">
          <div className="mt-2 mb-2 ml-20">
            <Link href="/">
              <button className="indigo_btn text-lg">Home</button>
            </Link>
          </div>
          <div className="mt-2 mb-2 ml-20">
            <Link href="/bridge-swap">
              <button className="indigo_btn text-lg">Bridge Swap</button>
            </Link>
          </div>
          <Wallet containerStyles="mt-2 mb-2 ml-auto mr-20" />
        </div>
      </section>

      <section>
        <h1 className="flex justify-center mt-12 text-5xl font-extrabold">
          Bridge Tokens
        </h1>
      </section>

      <section>
        <div className="flex justify-center mt-20">
          <div>
            <select
              className="select_frame"
              onChange={(e) => setToken(e.target.value as Address)}
            >
              <option value={tokenA_address}>TokenA</option>
              <option value={tokenB_address}>TokenB</option>
              <option value={tokenC_address}>TokenC</option>
            </select>
            <input
              className="input_amount ml-6"
              placeholder="Token Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="mt-8 flex justify-center">
          Selected Token Address: {token}
        </h2>
      </section>

      <section>
        <div className="flex justify-center mt-8">
          <Reserve token={token} />
        </div>
      </section>

      <section>
        <div className="mt-20">
          <Approve {...{ token, spender, amount }} />
        </div>
      </section>

      <section>
        <div className="mt-4">
          <BridgeIn {...{ token, amount }} />
        </div>
      </section>
    </>
  );
};

export default Bridge;
