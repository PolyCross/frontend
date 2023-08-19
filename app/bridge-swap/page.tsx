"use client";

import { CalculateAmountOut, Wallet } from "@/components";
import { tokenA_address, tokenB_address, tokenT_address } from "@/constants";
import Link from "next/link";
import { useState } from "react";
import { Address } from "viem";

const BridgeSwap = () => {
  const [amountIn, setAmountIn] = useState<string>();
  const [amountOutMin, setAmountOutMin] = useState<string>();
  const [tokenIn, setTokenIn] = useState<Address>();
  const [tokenOut, setTokenOut] = useState<Address>();

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

      <section className="mt-24">
        <div className="flex justify-center">
          <div className="flex">
            <div>
              Token In:{" "}
              <select
                className="select_frame"
                onChange={(e) => setTokenIn(e.target.value as Address)}
              >
                <option value={tokenT_address}>TokenT</option>
                <option value={tokenA_address}>TokenA</option>
                <option value={tokenB_address}>TokenB</option>
              </select>{" "}
              <br />
              Token Out:{" "}
              <select
                className="select_frame mt-4"
                onChange={(e) => setTokenOut(e.target.value as Address)}
              >
                <option value={tokenT_address}>TokenT</option>
                <option value={tokenA_address}>TokenA</option>
                <option value={tokenB_address}>TokenB</option>
              </select>{" "}
              <br />
              SwapIn Amount:{" "}
              <input
                className="input_amount mt-8 mr-4"
                placeholder="Token Amount"
                onChange={(e) => setAmountIn(e.target.value)}
              />
              Slippage: &nbsp;
              <input
                className="border-4 border-blue-600  rounded-full text-center h-8 w-16 py-1.5 px-2"
                type="number"
                step="0.01"
                min="0.01"
                max="100"
                value="0.3"
                onChange={(e) => setAmountOutMin(e.target.value)}
              />{" "}
              %
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex mt-4 justify-center">
          <CalculateAmountOut token={tokenIn} amountIn={amountIn!} path={} />
        </div>
      </section>
    </>
  );
};

export default BridgeSwap;
