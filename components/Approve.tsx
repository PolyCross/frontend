'use client'

import { ApproveProps } from "@/types"
import { useState } from "react"
import { Hex, parseUnits } from "viem"
import { erc20ABI, useNetwork, useWaitForTransaction } from "wagmi"
import { readContract, writeContract } from "wagmi/actions"
import { ViewOnExplorer } from "."

const Approve = ({ token, spender, amount }: ApproveProps) => {
    const [hash, setHash] = useState<Hex>()
    const { chain } = useNetwork()

    const approve = async () => {
        const decimals = await readContract({
            address: token,
            abi: erc20ABI,
            functionName: 'decimals'
        })
        const { hash } = await writeContract({
            address: token,
            abi: erc20ABI,
            functionName: 'approve',
            args: [spender, parseUnits(amount, decimals)]
        })
        setHash(hash)
    }

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: hash
    })

    return (
        <div className="flex justify-center ml-4">
            <button className='sky_btn text-lg' onClick={approve}>
                Approve
            </button>
            {isLoading ? <button className="green_btn text-lg ml-4" disabled={true}>Loading</button>
                : <ViewOnExplorer chainId={chain?.id!} hash={hash!} isSuccess={isSuccess} />}
        </div>
    )
}

export default Approve