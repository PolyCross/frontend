import { parseAbi } from "viem"

const bridge = [
    "function bridgeIn(address token, uint256 amount, address operator) public",
    "function bridgeOut(address token, uint256 amount, address to) public"
]

export const BridgeABI = parseAbi(bridge)

export const BridgeAddress = "0x9fE146cFfa1dBfff382fFf19f56C55F44DA2baA5"

export const TestTokenAddress = "0xf2b7998a24DcA81B310ae03ac29058b87ead46bB"