"use client";

import { Approve, Token, Wallet, BridgeIn } from "@/components";
import { BridgeAddress } from "@/constants";
import Link from "next/link";
import { useState } from "react";
import { Address } from "viem";

const Bridge = () => {
  const [token, setToken] = useState<Address>("0x");
  const [amount, setAmount] = useState<string>("");
  const [receiver, setReceiver] = useState<Address>("0x");

  return (
    <>
      <section>
        <div className="flex mt-4 justify-center">
          <div className="mt-2 mb-2 ml-20">
            <Link href="/">
              <button className="indigo_btn text-lg">Home</button>
            </Link>
          </div>
          <Wallet containerStyles="mt-2 mb-2 ml-auto mr-20" />
        </div>
      </section>

      <section className="mt-24">
        <div className="flex justify-center">
          <div className="flex">
            <Token Addr={token} />
            <div>
              <input
                className="input_address"
                placeholder="Token Address"
                onChange={(e) => setToken(e.target.value as Address)}
              />
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
        <Approve token={token} spender={BridgeAddress} amount={amount} /> <br />
        <BridgeIn {...{ token, amount, receiver }} />
      </section>
    </>
  );
};

export default Bridge;
