import { ApproveProps } from "@/types";
import { parseUnits } from "viem";
import { erc20ABI, useContractWrite, useToken } from "wagmi";
import { SignTx } from ".";

const Approve = ({ token, spender, amount }: ApproveProps) => {
  const { data: tokenData } = useToken({
    address: token,
  });

  const { data, write } = useContractWrite({
    address: token!,
    abi: erc20ABI,
    functionName: "approve",
    args: [spender, parseUnits(amount, tokenData?.decimals!)],
  });

  return (
    <SignTx
      hash={data?.hash}
      write={write}
      signInfo="Approve"
      signingInfo="Approving"
    />
  );
};

export default Approve;
