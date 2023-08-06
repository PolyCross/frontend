'use client'

import { Approve, Wallet } from "@/components"
import Token from "@/components/Token"
import Link from "next/link"
import { useState } from "react"
import { Address } from "viem"

const Bridge = () => {
  const [fromTokenAddr, setFromTokenAddr] = useState<Address>("0x")
  const [fromTokenAmount, setFromTokenAmount] = useState<string>("")
  const [toTokenAddr, setToTokenAddr] = useState<Address>("0x")

  return (
    <>
      <section>
        <div className="flex mt-4 justify-center">
          <div className='mt-2 mb-2 ml-20'>
            <Link href='/'>
              <button className='indigo_btn text-lg'>
                Home
              </button>
            </Link>
          </div>
          <Wallet containerStyles="mt-2 mb-2 ml-auto mr-20" />
        </div>
      </section>

      <section className="mt-24">
        <div className="flex justify-center">
          <div className="flex">
            <Token Addr={fromTokenAddr} />
            <div>
              <input className="input_address" placeholder="Token Address" onChange={(e) => setFromTokenAddr(e.target.value as Address)} />
              <input className="input_amount ml-6" placeholder="Token Amount" onChange={(e) => setFromTokenAmount(e.target.value)} />
            </div>
          </div>

        </div>
      </section>

      <section>
        <div>
          <div className="flex mt-20 justify-center">
            <Token Addr={toTokenAddr} />
            <div>
              <input className="input_address" placeholder="Token Address" onChange={(e) => setToTokenAddr(e.target.value as Address)} />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <Approve token={fromTokenAddr} spender="0x000000269073b3B12AF597028aCc00668B67aD6E" amount={fromTokenAmount} />
      </section>
    </>
  )
}

export default Bridge