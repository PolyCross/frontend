import { Config } from "@/components";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bridge Swap Liquidity",
  description: "Cross-Chain Swap Assets Liquidity Management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Config>{children}</Config>
      </body>
    </html>
  );
}
