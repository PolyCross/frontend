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
  token: Address;
  spender: Address;
  amount: string;
}

export interface BridgeProps {
  token: Address;
  amount: string;
}

export interface TokenProps {
  token: Address;
}

export interface BridgeSwapInProps {
  amountIn: string;
  amountOutMin: string;
  path: Address[];
}

export interface BridgeSwapCalculateAmountOut {
  token: Address;
  amountIn: string;
  path: Address[];
}
