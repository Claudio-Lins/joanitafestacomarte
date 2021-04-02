import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Product() {
  return (
    <>
      <Head>
        <title>Login - Joanita Festa com Arte</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="h-screen">
        <div className=" grid grid-cols-1 lg:grid-cols-2 space-y-2">
          <div className="lg:min-h-screen lg:flex lg:items-center px-6 py-2">
            <div className="w-[321px] h-[321px] lg:w-[500px] lg:h-[500px] rounded-xl shadow-lg mx-auto overflow-hidden">
              <Image
                src="/products/product01.jpg"
                alt="Produtos"
                layout="responsive"
                width={321}
                height={321}
              />
            </div>
          </div>

          <div className="lg:flex lg:min-h-screen lg:items-center px-6 py-2 md:p-12 lg:p-24 xl:p-48">
            <div className="grid grid-cols-3">
              <div className="col-span-2">
                <h3 className="text-red-800 font-semibold text-lg">Topper</h3>
                <p className=" text-xs font-light text-gray-700 leading-relaxed">
                  Me encantei mais ainda com a possibilidade de uma festa bonita
                  e personalizada aliada à praticidade, pois como mãe se
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <h3 className="text-4xl font-Nunito font-bold text-red-800 text-right">
                  €25
                </h3>
                {/* <input className='border rounded-md w-2/3 text-center outline-none h-10' type="number" id="quantity" name="quantity" min="1" max="100"/> */}
              </div>
            </div>
            <button className="w-full flex justify-evenly py-3 rounded-lg text-white bg-red-800 mt-6">
              <p>Adicione ao carrinho</p>
              <Image
                src="/products/carrinho.svg"
                alt="carrinho"
                width={29}
                height={25}
              />
            </button>
            <h3 className="text-sm font-Nunito font-semibold tracking-wide mt-4">
              Produtos relacionados
            </h3>
            <div className="grid grid-cols-2 space-x-2 mx-auto py-2 mb-16">
              <div className="p-2 rounded-md shadow-md">
                <Image
                  src="/products/product02.jpg"
                  alt="Produtos"
                  layout="responsive"
                  width={120}
                  height={120}
                />
              </div>
              <div className="p-2 rounded-md shadow-md">
                <Image
                  src="/products/product05.jpg"
                  alt="Produtos"
                  layout="responsive"
                  width={120}
                  height={120}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
