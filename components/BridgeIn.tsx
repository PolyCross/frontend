import { BridgeABI, BridgeAddress, TestTokenAddress } from "@/constants";
import { BridgeProps } from "@/types";
import { parseUnits } from "viem";
import { useAccount, usePrepareContractWrite, useToken } from "wagmi";
import { SignTx } from ".";

const BridgeIn = ({ token, amount, receiver }: BridgeProps) => {
  const { address } = useAccount();
  const { data: tokenData } = useToken({
    address: token,
  });

  const { config } = usePrepareContractWrite({
    address: BridgeAddress,
    abi: BridgeABI,
    functionName: "bridgeIn",
    args: [
      token ? token : TestTokenAddress,
      amount ? parseUnits(amount, tokenData?.decimals!) : BigInt(0),
      receiver ? receiver : address,
    ],
  });

  return <SignTx config={config} signInfo="Bridge" signingInfo="Bridging" />;
};

export default BridgeIn;
