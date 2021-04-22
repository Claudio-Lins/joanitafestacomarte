import Image from "next/image";



export default function FormDepoimentos() {
    return (
        <>
        <form className="w-full space-y-2 md:space-y-4">
                  <div className="flex items-center justify-between pl-3 border border-black rounded-lg shadow-sm overflow-hidden">
                    
                    <input
                      className="text-sm font-light outline-none h-12 w-11/12 text-red-800 placeholder-red-800"
                      placeholder="Nome"
                    />
                  </div>

                  <div className="flex items-center justify-between pl-3 border border-black rounded-lg shadow-sm overflow-hidden">
                    
                    <input
                      className="text-sm font-light outline-none h-12 w-11/12 text-red-800 placeholder-red-800"
                      placeholder="E-mail"
                    />
                  </div>

                  <div className="flex items-center justify-between pl-3 border border-black rounded-lg shadow-sm overflow-hidden">
                    
                    <textarea
                      className="text-sm font-light outline-none h-24 w-full py-2 text-red-800 placeholder-red-800"
                      placeholder="Depoimento"
                    />
                  </div>
                  <div className="bg-red-800 rounded-lg text-base font-Nunito text-white py-2">
                    <button>Enviar</button>
                  </div>
                </form>
        </>
    )
}