import Head from "next/head";
import Image from "next/image";
import FileUpload from "../components/FileUpload";
import FormDepoimentos from "../components/FormDepoimentos";

export default function Depoimentos() {
  return (
    <>
      <Head>
        <title>Depopimentos - Joanita Festa com Arte</title>
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/*  */}
        <div className="bg-red-800 lg:min-h-screen lg:flex lg:items-center p-8 sm:p-12">
          <div className="flex-grow text-white text-center">
            <h1 className="text-5xl font-Lobster">Depoimentos</h1>
            <p className=" font-extralight mt-3 tracking-wide">
              Me conta aqui a sua opnião sobre a Joanita Festa com Arte.
            </p>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="lg:flex flex-col  px-6 md:px-12 lg:px-24 xl:p-48">
          <div className="mb-6 mx-auto text-center text-red-800">
            <Image
              src="/assets/joaninha-512.svg"
              alt="Joanita Festa com Arte"
              width={300}
              height={100}
            />
          </div>
          
            <FormDepoimentos />
          
          <div className="md:w-3/4 mx-auto">
            <div className="text-center text-green-800 mt-4">
            <div className="mb-6 mx-auto text-center text-red-800">
            <Image
              src="/assets/008-woman-2.svg"
              alt="Joanita Festa com Arte"
              width={250}
              height={100}
            />
          </div>
              <FileUpload />
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
}
