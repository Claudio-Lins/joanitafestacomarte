import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login - Joanita Festa com Arte</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-red-800 lg:min-h-screen lg:flex lg:items-center p-8 sm:p-12">
          <div className="flex-grow text-white text-center">
            <h1 className="text-5xl font-Lobster">Bem-vinda</h1>
            <a className="font-light">Faça seu login</a>
          </div>
        </div>

        <div className="lg:flex lg:min-h-screen lg:items-center p-6 md:p-12 lg:p-24 xl:p-48">
          <div className="flex-grow mx-auto text-center text-red-800">
            <h2 className="text-4xl font-Lobster tracking-wide">Login</h2>
            <form className="w-full space-y-2 mt-6 rounded-lg shadow-md px-3 py-4">
              <div className="flex items-center pl-3 border border-black rounded-lg shadow-sm overflow-hidden">
                <Image
                  src="/account/email.svg"
                  alt="Google"
                  height={17}
                  width={22}
                />
                <input
                  className="text-sm ml-4 font-light outline-none h-12 text-red-800 placeholder-red-800 w-full"
                  placeholder="E-mail"
                />
              </div>

              <div className="bg-red-800 rounded-lg text-base font-Nunito text-white py-2">
                <button>Enviar</button>
              </div>
            </form>
            <div className="py-6 text-center text-sm text-red-800">
              <Link href="/criar-conta">
                <a>Criar conta</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
