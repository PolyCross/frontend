import { Address, Hex } from "viem"

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

export interface TokenProps {
    Addr: Address
}