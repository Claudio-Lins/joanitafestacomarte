import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Home - Joanita Festa com Arte</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      
      <div className='text-[#fff] text-lg'>
      <h1 className='btn'>Home</h1>
      </div>

    </div>
  )
}
