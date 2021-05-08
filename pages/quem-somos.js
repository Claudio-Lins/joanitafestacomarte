import Image from "next/image";
import Head from "next/head";

const QuemSomos = ({quemSomos}) => {
  return (
    <>
      <Head>
        <title>Quem Somos - Joanita Festa com Arte</title>
        <link rel="icon" href="/assets/joaninha-512.ico" />
      </Head>

      <div className="min-w-full pt-16 container md:p-4">
        <div className="relative bg-white mb-10 mx-auto items-center md:grid md:grid-cols-2 lg:w-2/4 md:border md:mt-20 md:rounded-xl md:shadow-md  overflow-hidden">
          <div className="">
            <div className="flex justify-center mt-4">
              <Image
                className="mx-auto"
                src={quemSomos.cover.url}
                alt="Karen Hermann"
                quality="high"
                width={283}
                height={380}
              />
            </div>
            <div className="bg-red-200 py-1 rounded-tr-xl">
              <h2 className=" text-red-800 font-Lobster text-4xl text-center">
              {quemSomos.title}
              </h2>
            </div>
          </div>
          <div className="px-8 py-8 flex items-center">
            <p className=" text-xs font-Poppins leading-6 tracking-wide font-bold">
            {quemSomos.content}
            </p>
          </div>
        </div>
        <div className="absolute">
          <Image
            className="mx-auto"
            src="/assets/joaninha.svg"
            alt="Karen Hermann"
            width={25}
            height={30}
          />
        </div>
      </div>
    </>
  );
};

export default QuemSomos;




export async function getStaticProps(context) {
  const res = await fetch(`https://joanita-api.herokuapp.com/quem-somos`)
  const quemSomos = await res.json()


  return {
    props: { quemSomos }, // will be passed to the page component as props
  }
}