import { WalletProps } from "@/types"
import { ConnectButton } from "@rainbow-me/rainbowkit"

const Wallet = ({ containerStyles }: WalletProps) => {
  return (
    <div className={containerStyles}>
      <ConnectButton />
    </div>
  )
}

export default Wallet