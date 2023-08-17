import { parseAbi } from "viem";

const bridge = [
  "function bridgeIn(address token, uint256 amount, address operator) public",
  "function bridgeOut(address token, uint256 amount, address to) public",
];

export const BridgeABI = parseAbi(bridge);

export const BridgeAddress = "0x9fE146cFfa1dBfff382fFf19f56C55F44DA2baA5";

export const TestTokenAddress = "0xf2b7998a24DcA81B310ae03ac29058b87ead46bB";

// ===================================================================================================

const bridge_swap = [
  "function calculateAmountOut(uint256 amountIn, address[] calldata path) external view returns (uint256)",
  "function swapIn(uint256 amountIn, uint256 amountOutMin, address[] calldata path) external returns (uint256[] memory amounts)",
  "function addLiquidity(address tokenA, address tokenB, uint256 amountA, uint256 amountB, address to) external returns (uint256 share)",
  "function removeLiquidity(address tokenA, address tokenB, uint256 liquidity, address to) external returns (uint256 amount0, uint256 amount1)",
];

export const BridgeSwapABI = parseAbi(bridge_swap);

export const BridgeSwapAddress = "0x31d0ce72C46940DDb5192D6006E8bC0Ca3Ebd805";
