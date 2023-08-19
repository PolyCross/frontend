import { BridgeSwapABI, BridgeSwapAddress } from "@/constants";
import { BridgeSwapInProps } from "@/types";
import { parseUnits } from "viem";
import { usePrepareContractWrite, useToken } from "wagmi";
import { SignTx } from ".";

const SwapIn = ({ amountIn, amountOutMin, path }: BridgeSwapInProps) => {
  const { data: tokenData } = useToken({
    address: path[0],
  });

  const { config } = usePrepareContractWrite({
    address: BridgeSwapAddress,
    abi: BridgeSwapABI,
    functionName: "swapIn",
    args: [
      parseUnits(amountIn, tokenData?.decimals!),
      parseUnits(amountOutMin, tokenData?.decimals!),
      path,
    ],
  });

  return (
    <SignTx
      config={config}
      signInfo="Swap"
      signingInfo="Swaping"
    />
  );
};

export default SwapIn;
