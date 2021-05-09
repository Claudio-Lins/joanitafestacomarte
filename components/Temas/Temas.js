import Image from "next/image";

export default function Temas({ temas }) {
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-Lobster py-4">Temas</h1>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 mx-auto space-x-2 md:space-x-8 p-4">
          {temas &&
            temas.slice(0, 4).map((temas) => (
              <div key={temas.id}>
                <div className=" mb-1 h-[160px] w-[160px] mx-auto p-4 flex justify-center items-center rounded-md shadow-md bg-white">
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
                <div className="text-center text-sm font-Poppins font-bold mt-0 mb-4">
                  <h2>{temas.title}</h2>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
