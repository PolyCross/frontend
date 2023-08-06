import { Address } from "viem"

export interface WalletProps {
    containerStyles?: string
}

export interface ApproveProps {
    token: Address,
    spender: Address,
    amount: string
}