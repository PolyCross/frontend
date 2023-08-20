import { parseAbi } from "viem";

const bridge = [
  "function reserve(address token) public returns (uint256)",
  "function bridgeIn(address token, uint256 amount) public",
  "function bridgeOut(address token, uint256 amount, address to) public",
];

export const BridgeABI = parseAbi(bridge);

export const BridgeAddress = "0xEad0d3C980fc237A748ea88Ba8459Fa4C188eBAd";

// ===================================================================================================

const bridge_swap = [
  "function calculateAmountOut(uint256 amountIn, address[] calldata path) external view returns (uint256)",
  "function swapIn(uint256 amountIn, uint256 amountOutMin, address[] calldata path) external returns (uint256[] memory amounts)",
  "function addLiquidity(address tokenA, address tokenB, uint256 amountA, uint256 amountB, address to) external returns (uint256 share)",
  "function removeLiquidity(address tokenA, address tokenB, uint256 liquidity, address to) external returns (uint256 amount0, uint256 amount1)",
];

export const BridgeSwapABI = parseAbi(bridge_swap);

export const BridgeSwapAddress = "0x53f5D3fAd7DA1bE9E2eaD516A0492E5CF21C9218";

export const tokenA_address = "0xf93dd1e98Ad72f555522c1D25dEB663250aEfbAC"
export const tokenB_address = "0xfc99C6B880D548f9172EdDe156B9d285F5027dD6";
export const tokenC_address = "0x9652b3320550ceee00bca395060fad3419a94dc5";