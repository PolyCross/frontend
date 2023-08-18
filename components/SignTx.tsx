import { SignTxProps } from "@/types";
import { useContractWrite, useNetwork, useWaitForTransaction } from "wagmi";
import { polygonMumbai, sepolia } from "wagmi/chains";

const SignTx = ({ config, signInfo, signingInfo }: SignTxProps) => {
  const { chain } = useNetwork();

  const { data, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const URL = () => {
    switch (chain?.id) {
      case sepolia.id:
        return "https://sepolia.etherscan.io/tx/";

      case polygonMumbai.id:
        return "https://mumbai.polygonscan.com/tx/";

      default:
        return "https://etherscan.io/tx/";
    }
  };

  return (
    <div className="flex justify-center">
      <button
        className={`text-lg ${isLoading ? "green" : "sky"}_btn`}
        disabled={isLoading}
        onClick={() => write?.()}
      >
        {isLoading ? signingInfo : signInfo}
      </button>
      {isSuccess && (
        <button className="ml-4 green_btn text-lg">
          <a href={URL() + data?.hash} target="_blank">
            ViewOnExplorer
          </a>
        </button>
      )}
    </div>
  );
};

export default SignTx;
