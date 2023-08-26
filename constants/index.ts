import { parseAbi } from "viem";

const bridge = [
  "function reserve(address token) public returns (uint256)",
  "function bridgeIn(address token, uint256 amount) public",
  "function bridgeOut(address token, uint256 amount, address to) public",
];

export const BridgeABI = parseAbi(bridge);

export const BridgeAddress = "0xfad4E0022f540B313BD8A77137E2f51e031810F1";

// ===================================================================================================

const bridge_swap = [
  "function calculateAmountOut(uint256 amountIn, address[] calldata path) external view returns (uint256)",
  "function swapIn(uint256 amountIn, uint256 amountOutMin, address[] calldata path) external returns (uint256[] memory amounts)",
  "function addLiquidity(address tokenA, address tokenB, uint256 amountA, uint256 amountB, address to) external returns (uint256 share)",
  "function removeLiquidity(address tokenA, address tokenB, uint256 liquidity, address to) external returns (uint256 amount0, uint256 amount1)",
];

export const BridgeSwapABI = parseAbi(bridge_swap);

export const BridgeSwapAddress = "0x651611eB218D30Ab736c8548F7DB5F5F0b35Fa91";

export const tokenA_address = "0x93B4087485e4eA8F03b4ed17Aa1B2d37640959D8"
export const tokenB_address = "0x43d9cfaE13A9D82D14AB93E5cC673Df6DB7c7a19";
export const tokenC_address = "0x2a6fD1E2DebAbfBb665D36A85aB32D8C36e0F8d7";