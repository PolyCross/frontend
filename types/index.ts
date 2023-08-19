import { Address } from "viem";
import { PrepareWriteContractResult } from "wagmi/actions";

export interface WalletProps {
  containerStyles?: string;
}

export interface SignTxProps {
  config: PrepareWriteContractResult;
  signInfo: string;
  signingInfo: string;
}

export interface ApproveProps {
  token: Address | undefined;
  spender: Address;
  amount: string | undefined;
}

export interface BridgeProps {
  token: Address | undefined;
  amount: string | undefined;
  receiver: Address | undefined;
}

export interface BridgeSwapInProps {
  amountIn: string;
  amountOutMin: string;
  path: Address[];
}

export interface BridgeSwapCalculateAmountOut {
  token: Address | undefined;
  amountIn: string;
  path: Address[];
}

export interface BridgeSwapAddLiquidity {
  tokenA: Address | undefined;
  tokenB: Address | undefined;
  amountA: string;
  amountB: string;
  to: Address;
}

export interface BridgeSwapRemoveLiquidity {
  tokenA: Address;
  tokenB: Address;
  liquidity: string;
  to: Address;
}
