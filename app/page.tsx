import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
  return (
    <section>
      <div className='w-full flex justify-center mt-20'>
        <h1 className='head_text text-center'>
          Bridge Tokens &amp; Swaps
          <br />
          <span className='orange_gradient text-center'>EVM Blockchain Assets Transfer</span>
        </h1>
      </div>
      <p className='text-center text-2xl mt-4'>
        PolyCross aims to connect different EVM blockchains
      </p>
      <div className='flex justify-center mt-8'>
        <Link href='/bridge'>
          <button className='black_btn text-2xl'>
            Enter App
          </button>
        </Link>
      </div>
      <div className='bg-blue-700 mt-20'>
        <h2 className='flex justify-center mt-4 text-2xl text-white'>
          <span className='mt-8'>Networks Already Supported</span>
        </h2><br />
        <div className='flex justify-center mt-8'>
          <Image alt='Polygon' src='/polygon-logo.svg' width={120} height={90} className='mb-4'/>
          <Image alt='Ethereum' src='/etherum-logo.svg' width={135} height={90} className='ml-28 mb-8' />
          <Image alt='BNB' src='/bnb-chain.svg' width={120} height={90} className='ml-28 mb-8' />
        </div>
      </div>
    </section>
  )
}

export default Home