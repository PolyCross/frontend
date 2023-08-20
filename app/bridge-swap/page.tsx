"use client";

import { Approve, CalculateAmountOut, SwapIn, Wallet } from "@/components";
import {
  BridgeSwapAddress,
  tokenA_address,
  tokenB_address,
  tokenC_address,
} from "@/constants";
import Link from "next/link";
import { useState } from "react";
import { Address } from "viem";

const BridgeSwap = () => {
  const [amountIn, setAmountIn] = useState<string>("100");
  const [slippage, setSlippage] = useState<string>("0.3");
  const [tokenIn, setTokenIn] = useState<Address>(tokenA_address);
  const [tokenOut, setTokenOut] = useState<Address>(tokenB_address);

  const amoutOutMin = () => {
    const res = (parseFloat(amountIn) * parseFloat(slippage)) / 100;
    return res.toString();
  };

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
            <Link href="/bridge">
              <button className="indigo_btn text-lg">Bridge</button>
            </Link>
          </div>
          <Wallet containerStyles="mt-2 mb-2 ml-auto mr-20" />
        </div>
      </section>

      <section>
        <div className="flex justify-center mt-12">
          <h1 className="text-5xl font-extrabold">Bridge && Swap Tokens</h1>
        </div>
      </section>

      <section>
        <div className="mt-24 flex justify-center">
          <div>
            Token In:{" "}
            <select
              className="select_frame mr-8"
              onChange={(e) => setTokenIn(e.target.value as Address)}
            >
              <option value={tokenA_address}>TokenA</option>
              <option value={tokenB_address}>TokenB</option>
              <option value={tokenC_address}>TokenC</option>
            </select>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h2 className="mt-8 flex justify-center">
            Selected Token Address: {tokenIn}
          </h2>
        </div>
      </section>

      <section>
        <div className="flex justify-center mt-12">
          <div>
            Token Out:{" "}
            <select
              className="select_frame mt-4"
              onChange={(e) => setTokenOut(e.target.value as Address)}
            >
              <option value={tokenB_address}>TokenB</option>
              <option value={tokenA_address}>TokenA</option>
              <option value={tokenC_address}>TokenC</option>
            </select>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mt-8 flex justify-center">
          Selected Token Address: {tokenOut}
        </h2>
      </section>

      <section>
        <div className="flex justify-center mt-10">
          <div>
            SwapIn Amount:{" "}
            <input
              className="input_amount mt-8 mr-4"
              placeholder={amountIn}
              onChange={(e) => setAmountIn(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-center mt-6">
          <div>
            Slippage:{" "}
            <input
              className="border-4 border-blue-600  rounded-full text-center h-8 w-16 py-1.5 px-2"
              type="number"
              placeholder="0.3"
              onChange={(e) => setSlippage(e.target.value)}
            />
            %
          </div>
        </div>
      </section>

      <section>
        <div className="flex mt-4 justify-center">
          <CalculateAmountOut
            token={tokenIn}
            amountIn={amountIn}
            path={[tokenIn, tokenOut]}
          />
        </div>
      </section>

      <section>
        <div className="flex mt-6 justify-center">
          <Approve
            token={tokenIn}
            amount={amountIn}
            spender={BridgeSwapAddress}
          />
        </div>
      </section>

      <section>
        <div className="flex mt-4 justify-center">
          <SwapIn
            amountIn={amountIn}
            amountOutMin={amoutOutMin()}
            path={[tokenIn, tokenOut]}
          />
        </div>
      </section>
    </>
  );
};

export default BridgeSwap;
