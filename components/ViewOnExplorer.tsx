'use client'

import { ViewOnExplorerProps } from "@/types"
import { useState } from "react"
import { polygonMumbai, sepolia } from "wagmi/chains"

const ViewOnExplorer = ({ chainId, hash, isSuccess }: ViewOnExplorerProps) => {
  const [baseURL, setBaseURL] = useState<string>("")

  const handleChainChange = (chainId: number) => {
    let newBaseURL = "";

    switch (chainId) {
      case polygonMumbai.id:
        newBaseURL = "https://mumbai.polygonscan.com/tx/";
        break;

      case sepolia.id:
        newBaseURL = "https://sepolia.etherscan.io/tx/";
        break;

      default:
        newBaseURL = "";
    }

    setBaseURL(newBaseURL);
  };

  return (
    <div>
      {isSuccess && <button className="black_btn text-lg" onClick={() => handleChainChange(chainId)}>
        <a href={baseURL + hash} target="_blank">
          ViewOnExplorer
        </a>
      </button>}
    </div>
  )
}

export default ViewOnExplorer