import Head from "next/head";
import { useRouter } from "next/router";

import Image from "next/image";
import Link from "next/link";

export default function ThanksDepoimentos() {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Obrigada§ - Joanita Festa com Arte</title>
      </Head>
      <div className=" min-h-screen flex justify-center items-center">
        <div className="flex flex-col space-y-3 justify-center items-center text-white bg-red-800 w-[600px] h-[300px] rounded-lg shadow-lg">
          <h1 className="text-5xl font-Lobster">Obrigada</h1>
          <p className="text-sm font-Poppins">Pelo seu depoimento...</p>
          <form onSubmit={handleSubmit}>
            <button
            //   onClick={handleSubmit}
              className="px-3 bg-white rounded-lg shadow-md text-red-800 text-sm"
            >
              Fechar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
