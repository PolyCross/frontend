import { BridgeSwapABI, BridgeSwapAddress } from "@/constants";
import { BridgeSwapAddLiquidity } from "@/types";
import { parseUnits } from "viem";
import { usePrepareContractWrite, useToken } from "wagmi";
import { SignTx } from ".";

const AddLiquidity = async ({
  tokenA,
  tokenB,
  amountA,
  amountB,
  to,
}: BridgeSwapAddLiquidity) => {
  const { data: tokenA_data } = useToken({
    address: tokenA,
  });

  const { data: tokenB_data } = useToken({
    address: tokenB,
  });

  const { config } = usePrepareContractWrite({
    address: BridgeSwapAddress,
    abi: BridgeSwapABI,
    functionName: "addLiquidity",
    args: [
      tokenA,
      tokenB,
      parseUnits(amountA, tokenA_data?.decimals!),
      parseUnits(amountB, tokenB_data?.decimals!),
      to,
    ],
  });

  return (
    <SignTx
      config={config}
      signInfo="Add Liquidity"
      signingInfo="Adding Liquidity"
    />
  );
};

export default AddLiquidity;
