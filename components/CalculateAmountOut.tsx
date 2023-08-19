import { BridgeSwapABI, BridgeSwapAddress } from "@/constants";
import { BridgeSwapCalculateAmountOut } from "@/types";
import { formatUnits, parseUnits } from "viem";
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
    args: [parseUnits(amountIn, tokenData?.decimals!), path],
  });

  return (
    <div>
      <h3>Estimate Amount Out: </h3>
      {isLoading ? (
        <div>calculating</div>
      ) : (
        <div>{formatUnits(data as bigint, tokenData?.decimals!)}</div>
      )}
    </div>
  );
};

export default CalculateAmountOut;
