import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function CreateAccount() {
  return (
    <div className="">
      <Head>
        <title>Create Account - Joanita Festa com Arte</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <div className="flex flex-col items-center justify-center tracking-wide rounded-b-xl shadow-lg text-white bg-red-800 w-full h-[130px] top-0">
        <h1 className="text-6xl font-Lobster">Bem-vinda(o)</h1>
      </div>

      <div className="flex flex-col items-center justify-center tracking-wide w-full mt-8">
        <h2 className="text-5xl font-Lobster">Criar conta</h2>
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
        <p className=" font-Nunito text-sm mt-2">
          Ou use seu email para se registrar
        </p>
      </div>
    </div>
  );
}
