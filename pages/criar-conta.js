import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function CreateAccount() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Create Account - Joanita Festa com Arte</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <div className="flex flex-col items-center justify-center tracking-wide shadow-lg text-white bg-red-800 w-full h-[100px] top-0">
        <h1 className="text-5xl font-Lobster">Bem-vinda(o)</h1>
      </div>

      <div className="flex flex-col items-center justify-center tracking-wide w-full mt-4">
        <h2 className="text-4xl font-Lobster">Criar conta</h2>
        <div className="flex gap-4 mt-4">
          <Link href="#">
            <a>
              <Image
                src="/account/facebook.svg"
                alt="Facebook"
                height={33}
                width={33}
              />
            </a>
          </Link>

          <Link href="#">
            <a>
              <Image
                src="/account/google.svg"
                alt="Google"
                height={33}
                width={33}
              />
            </a>
          </Link>
        </div>
        <div className="text-center min-w-full mt-6">
          <p className=" font-Nunito text-sm">
            Ou use seu email para se registrar
          </p>
          <div className="w-11/12 bg-gray-50 mx-auto text-center rounded-lg shadow-md px-3 py-4 mt-2">
            <form className="w-full space-y-4">
              <div className="flex items-center justify-between pl-3 border border-black rounded-lg shadow-sm overflow-hidden">
                <Image
                  src="/account/name.svg"
                  alt="Google"
                  height={21}
                  width={16}
                />
                <input
                  className="text-sm font-light outline-none h-12 w-11/12 text-red-800 placeholder-red-800"
                  placeholder="Nome"
                />
              </div>
              
              <div className="flex items-center justify-between pl-3 border border-black rounded-lg shadow-sm overflow-hidden">
                <Image
                  src="/account/email.svg"
                  alt="Google"
                  height={17}
                  width={22}
                />
                <input
                  className="text-sm font-light outline-none h-12 w-11/12 text-red-800 placeholder-red-800"
                  placeholder="E-mail"
                />
              </div>

              <div className="flex items-center justify-between pl-3 border border-black rounded-lg shadow-sm overflow-hidden">
                <Image
                  src="/account/password.svg"
                  alt="Google"
                  height={21}
                  width={16}
                />
                <input
                  className="text-sm font-light outline-none h-12 w-11/12 text-red-800 placeholder-red-800"
                  placeholder="Senha"
                />
              </div>
              <div className=''>
                  <button>
                      Enviar
                  </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
