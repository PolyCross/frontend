import { BridgeSwapABI, BridgeSwapAddress } from "@/constants";
import { BridgeSwapRemoveLiquidity } from "@/types";
import { useContractWrite, useNetwork, useWaitForTransaction } from "wagmi";
import { ViewOnExplorer } from ".";

const RemoveLiquidity = ({
  tokenA,
  tokenB,
  liquidity,
  to,
}: BridgeSwapRemoveLiquidity) => {
  const { chain } = useNetwork();

  const { data, write } = useContractWrite({
    address: BridgeSwapAddress,
    abi: BridgeSwapABI,
    functionName: "removeLiquidity",
    args: [tokenA, tokenB, BigInt(liquidity), to],
  });

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  return (
    <div className="flex justify-center ml-4">
      <button className="sky_btn text-lg" onClick={() => write}>
        Bridge
      </button>
      {isLoading ? (
        <button className="green_btn text-lg ml-4" disabled={true}>
          Loading
        </button>
      ) : (
        <ViewOnExplorer
          chainId={chain?.id!}
          hash={data?.hash!}
          isSuccess={isSuccess}
        />
      )}
    </div>
  );
};

export default RemoveLiquidity;
