import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Home - Joanita Festa com Arte</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      
      <div className='text-[#c2c2c2] text-[500px]'>
      Home
      </div>

    </div>
  )
}
