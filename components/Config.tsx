"use client";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { polygonMumbai, sepolia } from "wagmi/chains";
import { infuraProvider } from "wagmi/providers/infura";

const { chains, publicClient } = configureChains(
  [sepolia, polygonMumbai],
  [infuraProvider({ apiKey: "1dfa3e0d64524dd091a0bcfc39c8bd4e" })]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const Config = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
    </WagmiConfig>
  );
};

export default Config;
