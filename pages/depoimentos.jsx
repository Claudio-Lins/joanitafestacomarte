import Head from "next/head";
import Image from "next/image";
import FormDepoimentos from '../components/FormDepoimentos'


export default function Login() {
  return (
    <>
      <Head>
        <title>Depopimentos - Joanita Festa com Arte</title>
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-red-800 lg:min-h-screen lg:flex lg:items-center p-8 sm:p-12">
          <div className="flex-grow text-white text-center">
            <h1 className="text-5xl font-Lobster">Depoimentos</h1>
            <p className=" font-extralight mt-3 tracking-wide">Me conta aqui a sua opnião sobre a Joanita Festa com Arte.</p>
          </div>
        </div>

        <div className="lg:flex min-h-screen lg:items-center p-6 md:p-12 lg:p-24 xl:p-48">
          <div className="flex-grow mx-auto text-center text-red-800 space-y-12">
          <Image
                      src="/assets/joaninha-512.svg"
                      alt="Joanita Festa com Arte"
                      width={300}
                      height={100}
                    />
            <FormDepoimentos />
            
          </div>
        </div>
      </div>
    </>
  );
}
