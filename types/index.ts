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

export interface BridgeProps {
    token: Address,
    amount: string,
    receiver: Address
}

export interface BridgeSwapInProps {
    amountIn: string,
    amountOutMin: string,
    path: Address[]
}

export interface BridgeSwapAddLiquidity {
    tokenA: Address,
    tokenB: Address,
    amountA: string,
    amountB: string,
    to: Address
}

export interface BridgeSwapRemoveLiquidity {
    tokenA: Address,
    tokenB: Address,
    liquidity: string,
    to: Address
}