import { TokenProps } from "@/types"
import { erc20ABI, useContractRead } from "wagmi"

const Token = ({ Addr }: TokenProps) => {
    const { data, isLoading, isError } = useContractRead({
        address: Addr,
        abi: erc20ABI,
        functionName: 'symbol'
    })

    return (
        <div className="mr-6">
            <button className={`sky_btn text-lg h-12 w-${isLoading ? 28 : isError ? 48 : 20}`} disabled={true}>
                {isLoading ? 'Loading' : isError ? 'Invalid Address' : data}
            </button>
        </div>
    )
}

export default Token