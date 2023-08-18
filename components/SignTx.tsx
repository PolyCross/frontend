import { ViewOnExplorerProps } from "@/types";
import { useNetwork, useWaitForTransaction } from "wagmi";
import { polygonMumbai, sepolia } from "wagmi/chains";

const SignTx = ({
  hash,
  write,
  signInfo,
  signingInfo,
}: ViewOnExplorerProps) => {
  const { chain } = useNetwork();
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash,
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
    <div className="flex justify-center ml-4">
      <button
        className={`text-lg ${isLoading ? "green" : "sky"}_btn`}
        disabled={isLoading}
        onClick={() => write()}
      >
        {isLoading ? signingInfo : signInfo}
      </button>
      {isSuccess && (
        <button className="ml-4 green_btn text-lg">
          <a href={URL() + hash} target="_blank">
            ViewOnExplorer
          </a>
        </button>
      )}
    </div>
  );
};

export default SignTx;
