import { ApproveProps } from "@/types";
import { parseUnits } from "viem";
import { erc20ABI, usePrepareContractWrite, useToken } from "wagmi";
import { SignTx } from ".";

const Approve = ({ token, spender, amount }: ApproveProps) => {
  const { data: tokenData } = useToken({
    address: token,
  });

  const { config } = usePrepareContractWrite({
    address: token,
    abi: erc20ABI,
    functionName: "approve",
    args: [
      spender,
      amount ? parseUnits(amount, tokenData?.decimals!) : BigInt(0),
    ],
  });

  return <SignTx config={config} signInfo="Approve" signingInfo="Approving" />;
};

export default Approve;
