import Head from "next/head";
import Image from "next/image";
import FileUpload from "../components/Depoimentos/FileUpload";
import FormDepoimentos from "../components/Depoimentos/FormDepoimentos";

export default function Depoimentos() {
  return (
    <>
      <Head>
        <title>Depopimentos - Joanita Festa com Arte</title>
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-2 pt-20 min-h-screen">
        {/*  */}
        <div className="bg-red-800 lg:min-h-screen flex lg:items-center p-8 sm:p-12">
          <div className="flex-grow text-white text-center">
            <h1 className="text-5xl font-Lobster">Depoimentos</h1>
            <p className=" font-extralight mt-3 tracking-wide">
              Me conta aqui a sua opnião sobre a Joanita Festa com Arte.
            </p>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="lg:flex min-h-screen flex-col  px-6 md:px-12 lg:px-24 xl:p-48">
          <div className="mx-auto text-center text-red-800 hidden md:flex">
            <Image
              src="/assets/joaninha-512.svg"
              alt="Joanita Festa com Arte"
              width={300}
              height={100}
            />
          </div>
          <div className="py-4">
            <FormDepoimentos />
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
}
