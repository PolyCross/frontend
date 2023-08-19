import { BridgeABI, BridgeAddress } from "@/constants";
import { BridgeProps } from "@/types";
import { parseUnits } from "viem";
import { usePrepareContractWrite, useToken } from "wagmi";
import { SignTx } from ".";

const BridgeIn = ({ token, amount }: BridgeProps) => {
  const { data: tokenData } = useToken({
    address: token,
  });

  const { config } = usePrepareContractWrite({
    address: BridgeAddress,
    abi: BridgeABI,
    functionName: "bridgeIn",
    args: [token, parseUnits(amount, tokenData?.decimals!)],
  });

  return <SignTx config={config} signInfo="Bridge" signingInfo="Bridging" />;
};

export default BridgeIn;
