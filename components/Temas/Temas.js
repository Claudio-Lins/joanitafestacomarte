import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function Temas({ temas }) {
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-Lobster py-4">Temas</h1>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 mx-auto md:space-x-8 p-4">
          {temas &&
            temas.slice(0, 4).map((temas) => (
              <div key={temas.id}>
                <div className=" mb-2 h-[160px] w-[160px] mx-auto p-4 flex justify-center items-center rounded-md shadow-md">
                  <Image
                    className=""
                    src={temas.cover.url}
                    alt={temas.title}
                    layout="intrinsic"
                    objectFit="contain"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="text-center text-sm font-Poppins font-bold">
                  <h2>{temas.title}</h2>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
