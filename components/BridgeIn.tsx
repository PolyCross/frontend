"use client";

import { BridgeABI, BridgeAddress } from "@/constants";
import { BridgeProps } from "@/types";
import { useState } from "react";
import { Hex, parseUnits } from "viem";
import { erc20ABI, useNetwork, useWaitForTransaction } from "wagmi";
import { readContract, writeContract } from "wagmi/actions";
import { ViewOnExplorer } from ".";

const BridgeIn = ({ token, amount, receiver }: BridgeProps) => {
  const [hash, setHash] = useState<Hex>();
  const { chain } = useNetwork();

  const bridgeIn = async () => {
    const decimals = await readContract({
      address: token,
      abi: erc20ABI,
      functionName: "decimals",
    });
    const { hash } = await writeContract({
      address: BridgeAddress,
      abi: BridgeABI,
      functionName: "bridgeIn",
      args: [token, parseUnits(amount, decimals), receiver],
    });
    setHash(hash);
  };

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: hash,
  });

  return (
    <div className="flex justify-center ml-4">
      <button className="sky_btn text-lg" onClick={bridgeIn}>
        Bridge
      </button>
      {isLoading ? (
        <button className="green_btn text-lg ml-4" disabled={true}>
          Loading
        </button>
      ) : (
        <ViewOnExplorer
          chainId={chain?.id!}
          hash={hash!}
          isSuccess={isSuccess}
        />
      )}
    </div>
  );
};

export default BridgeIn;
