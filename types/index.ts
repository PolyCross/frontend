import { Address, Hex } from "viem"

export interface WalletProps {
    containerStyles?: string
}

export interface ApproveProps {
    token: Address | undefined,
    spender: Address,
    amount: string
}

export interface ViewOnExplorerProps {
    hash: Hex | undefined,
    write: () => void,
    signInfo: string,
    signingInfo: string
}

export interface TokenProps {
    Addr: Address | undefined
}

export interface BridgeProps {
    token: Address | undefined,
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