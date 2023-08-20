import { BridgeABI, BridgeAddress } from "@/constants";
import { TokenProps } from "@/types";
import { formatUnits } from "viem";
import { useContractRead, useToken } from "wagmi";

const Reserve = ({ token }: TokenProps) => {
  const { data: tokenData } = useToken({
    address: token,
  });

  const { data } = useContractRead({
    address: BridgeAddress,
    abi: BridgeABI,
    functionName: "reserve",
    args: [token],
  });

  return (
    <h2>
      Reserve of selected token is{" "}
      {formatUnits(data as bigint, tokenData?.decimals!)}
    </h2>
  );
};

export default Reserve;
