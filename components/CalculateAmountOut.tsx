import {
  BridgeSwapABI,
  BridgeSwapAddress,
  tokenA_address,
  tokenC_address,
} from "@/constants";
import { BridgeSwapCalculateAmountOut } from "@/types";
import { formatUnits, parseUnits, zeroAddress } from "viem";
import { useContractRead, useToken } from "wagmi";

const CalculateAmountOut = ({
  token,
  amountIn,
  path,
}: BridgeSwapCalculateAmountOut) => {
  const { data: tokenData } = useToken({
    address: token,
  });

  const { data, isLoading } = useContractRead({
    address: BridgeSwapAddress,
    abi: BridgeSwapABI,
    functionName: "calculateAmountOut",
    args: [
      amountIn ? parseUnits(amountIn, tokenData?.decimals!) : BigInt(0),
      path.includes(undefined) ? [tokenC_address, tokenA_address] : path,
    ],
  });

  const temp_data = data
    ? formatUnits(data as bigint, tokenData?.decimals!)
    : "";
  const res = parseFloat(temp_data).toFixed(2);

  return (
    <div className="mt-4">
      <h3>Estimate Amount Out: {isLoading ? "Loading" : res}</h3>
    </div>
  );
};

export default CalculateAmountOut;
