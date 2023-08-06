'use client'

import { ApproveProps } from "@/types"
import { useState } from "react"
import { Hex, parseUnits } from "viem"
import { erc20ABI, useWaitForTransaction } from "wagmi"
import { readContract, writeContract } from "wagmi/actions"

const Approve = ({ token, spender, amount }: ApproveProps) => {
    const [txHash, setTxHash] = useState<Hex>()

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

        setTxHash(hash)
    }

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: txHash
    })

    return (
        <div>
            <button className='black_btn text-lg' onClick={approve}>
                Approve
            </button>
            <div>
                {isLoading && <h3>Loading</h3>}
                {isSuccess && <h3>Succeed</h3>}
            </div>
        </div>
    )
}

export default Approve