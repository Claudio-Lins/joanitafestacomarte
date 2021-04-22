import Head from 'next/head'
import SliderDestak from '../components/DestakHome'

export default function Home({destak}) {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <Head>
        <title>Home - Joanita Festa com Arte</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      
      <div className='w-full shadow-lg rounded-md md:w-2/3 lg:w-[1280px] lg:h-[700px]'>
      <SliderDestak destak={destak} />
      </div>
      <div className='w-full h-[800px] flex justify-center items-center bg-red-200 my-10'>
        <h2>Section</h2>
      </div>

    </div>
  )
}
