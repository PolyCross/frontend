'use client'

import { ConnectButton } from "@rainbow-me/rainbowkit"
import Link from "next/link"

const Bridge = () => {
  return (
    <section>
      <div className="flex mt-4 justify-center">
        <div className='mt-2 mb-2 ml-20'>
          <Link href='/'>
            <button className='black_btn text-lg'>
              Home
            </button>
          </Link>
        </div>
        <div className="mt-2 mb-2 ml-auto mr-20">
          <ConnectButton />
        </div>
      </div>
    </section>
  )
}

export default Bridge