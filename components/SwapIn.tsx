import { BridgeSwapABI, BridgeSwapAddress } from "@/constants";
import { BridgeSwapInProps } from "@/types";
import { useState } from "react";
import { Hex, parseUnits } from "viem";
import { erc20ABI, useNetwork, useWaitForTransaction } from "wagmi";
import { readContract, writeContract } from "wagmi/actions";
import { ViewOnExplorer } from ".";

const SwapIn = ({ amountIn, amountOutMin, path }: BridgeSwapInProps) => {
  const [hash, setHash] = useState<Hex>();
  const { chain } = useNetwork();

  const swapIn = async () => {
    const decimals = await readContract({
      address: path[0],
      abi: erc20ABI,
      functionName: "decimals",
    });
    const { hash } = await writeContract({
      address: BridgeSwapAddress,
      abi: BridgeSwapABI,
      functionName: "swapIn",
      args: [parseUnits(amountIn, decimals), BigInt(amountOutMin), path],
    });
    setHash(hash);
  };

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: hash,
  });

  return (
    <div className="flex justify-center ml-4">
      <button className="sky_btn text-lg" onClick={swapIn}>
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

export default SwapIn;
