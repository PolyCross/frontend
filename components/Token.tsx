import { TokenProps } from "@/types";
import { useToken } from "wagmi";

const Token = ({ Addr }: TokenProps) => {
  const { data, isLoading, isError } = useToken({
    address: Addr
  });

  return (
    <div className="mr-6">
      {Addr && (
        <button
          className={`black_btn text-lg h-12 w-${
            isLoading ? 28 : isError ? 48 : 20
          }`}
          disabled={true}
        >
          {isLoading ? "Loading" : isError ? "Invalid Address" : data?.symbol}
        </button>
      )}
    </div>
  );
};

export default Token;