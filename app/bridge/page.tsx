"use client";

import { Approve, BridgeIn, Wallet } from "@/components";
import {
  tokenT_address,
  BridgeAddress as spender,
  tokenA_address,
  tokenB_address,
} from "@/constants";
import Link from "next/link";
import { useState } from "react";
import { Address } from "viem";

const Bridge = () => {
  const [token, setToken] = useState<Address>();
  const [amount, setAmount] = useState<string>();
  const [receiver, setReceiver] = useState<Address>();

  return (
    <>
      <section>
        <div className="flex mt-4 justify-center">
          <div className="mt-2 mb-2 ml-20">
            <Link href="/">
              <button className="indigo_btn text-lg">Home</button>
            </Link>
          </div>
          <div className="mt-2 mb-2 ml-auto">
            <Link href="/bridge-swap">
              <button className="indigo_btn text-lg">Bridge Swap</button>
            </Link>
          </div>
          <Wallet containerStyles="mt-2 mb-2 ml-auto mr-20" />
        </div>
      </section>

      <section className="mt-24">
        <div className="flex justify-center">
          <div className="flex">
            <div>
              <select className="select_frame" onChange={(e) => setToken(e.target.value as Address)}>
                <option value={tokenT_address}>TokenT</option>
                <option value={tokenA_address}>TokenA</option>
                <option value={tokenB_address}>TokenB</option>
              </select>
              <input
                className="input_amount ml-6"
                placeholder="Token Amount"
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex mt-20 justify-center">
          <input
            className="input_address"
            placeholder="Receiver Address"
            onChange={(e) => setReceiver(e.target.value as Address)}
          />
        </div>
      </section>

      <section className="mt-20">
        <Approve {...{ token, spender, amount }} /> <br />
        <BridgeIn {...{ token, amount, receiver }} />
      </section>
    </>
  );
};

export default Bridge;
