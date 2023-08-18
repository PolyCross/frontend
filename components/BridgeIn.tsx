import { BridgeABI, BridgeAddress } from "@/constants";
import { BridgeProps } from "@/types";
import { parseUnits } from "viem";
import { useContractWrite, useToken } from "wagmi";
import { SignTx } from ".";

const BridgeIn = ({ token, amount, receiver }: BridgeProps) => {
  const { data: tokenData } = useToken({
    address: token,
  });

  const { data, write } = useContractWrite({
    address: BridgeAddress,
    abi: BridgeABI,
    functionName: "bridgeIn",
    args: [token, parseUnits(amount, tokenData?.decimals!), receiver],
  });

  return (
    <SignTx hash={data?.hash} write={write} signInfo="Bridge" signingInfo="Bridging" />
  );
};

export default BridgeIn;
