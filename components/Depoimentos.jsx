import Image from "next/image";

export default function Depoimentos({ depoimentos }) {
  return (
    <>
      <div className="flex flex-col justify-center mt-10">
        <div className="font-Lobster text-5xl text-center">
          <h2>Depoimentos</h2>
        </div>
        <div className="p-4 md:flex md:container justify-evenly mx-auto space-x-6">
          {depoimentos &&
            depoimentos.slice(0, 1).map((depoimentos) => (
              <div key={depoimentos.id}>
                <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                  <div className="flex justify-center md:justify-center -mt-16">
                    <Image
                      className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
                      src={depoimentos.picture.url}
                      width={80}
                      height={80}
                    />
                  </div>
                  <div>
                    <p className="mt-2 text-gray-600">{depoimentos.mensagem}</p>
                  </div>
                  <div className="flex justify-end mt-4 font-bold">
                    {depoimentos.nome}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
