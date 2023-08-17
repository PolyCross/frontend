import { BridgeSwapABI, BridgeSwapAddress } from "@/constants";
import { BridgeSwapAddLiquidity } from "@/types";
import { useState } from "react";
import { Hex, parseUnits } from "viem";
import { erc20ABI, useNetwork, useWaitForTransaction } from "wagmi";
import { readContract, writeContract } from "wagmi/actions";
import { ViewOnExplorer } from ".";

const AddLiquidity = ({
  tokenA,
  tokenB,
  amountA,
  amountB,
  to,
}: BridgeSwapAddLiquidity) => {
  const [hash, setHash] = useState<Hex>();
  const { chain } = useNetwork();

  const addLiquidity = async () => {
    const decimalsA = await readContract({
      address: tokenA,
      abi: erc20ABI,
      functionName: "decimals",
    });
    const decimalsB = await readContract({
      address: tokenB,
      abi: erc20ABI,
      functionName: "decimals",
    });
    const { hash } = await writeContract({
      address: BridgeSwapAddress,
      abi: BridgeSwapABI,
      functionName: "addLiquidity",
      args: [
        tokenA,
        tokenB,
        parseUnits(amountA, decimalsA),
        parseUnits(amountB, decimalsB),
        to,
      ],
    });
    setHash(hash);
  };

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: hash,
  });

  return (
    <div className="flex justify-center ml-4">
      <button className="sky_btn text-lg" onClick={addLiquidity}>
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

export default AddLiquidity;
