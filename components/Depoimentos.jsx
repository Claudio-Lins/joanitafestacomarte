import Image from "next/image";


export default function Depoimentos({ depoimentos }) {
  return (
    <>
      <div className="p-4 md:flex md:container justify-evenly mx-auto">
        {depoimentos &&
          depoimentos.slice(0, 3).map((depoimentos) => (
            <div key={depoimentos.id}>
              <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                <div className="flex justify-center md:justify-center -mt-16">
                  <Image
                    className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
                    src={depoimentos.picture.url}
                    width={60}
                    height={60}
                    />
                </div>
                <div>
                  <p className="mt-2 text-gray-600">{depoimentos.mensagem}</p>
                </div>
                <div className="flex justify-end mt-4 font-bold">{depoimentos.nome}</div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
