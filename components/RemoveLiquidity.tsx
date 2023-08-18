import { BridgeSwapABI, BridgeSwapAddress } from "@/constants";
import { BridgeSwapRemoveLiquidity } from "@/types";
import { usePrepareContractWrite } from "wagmi";
import { SignTx } from ".";

const RemoveLiquidity = ({
  tokenA,
  tokenB,
  liquidity,
  to,
}: BridgeSwapRemoveLiquidity) => {
  const { config } = usePrepareContractWrite({
    address: BridgeSwapAddress,
    abi: BridgeSwapABI,
    functionName: "removeLiquidity",
    args: [tokenA, tokenB, BigInt(liquidity), to],
  });

  return (
    <SignTx
      config={config}
      signInfo="Remove Liquidity"
      signingInfo="Removing Liquidity"
    />
  );
};

export default RemoveLiquidity;
