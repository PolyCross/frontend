import { Address, Hex } from "viem"
import { Chain } from "wagmi"

export interface WalletProps {
    containerStyles?: string
}

export interface ApproveProps {
    token: Address,
    spender: Address,
    amount: string
}

export interface ViewOnExplorerProps {
    chainId: number,
    hash: Hex,
    isSuccess: boolean
}