import Head from 'next/head'
import {getDate} from '../utils/Date'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Home - Joanita Festa com Arte</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <p>{getDate()}</p>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
          <p>Powered by</p>
          <h4 className=" ml-2">Claudio Lins</h4>
      </footer>
    </div>
  )
}
