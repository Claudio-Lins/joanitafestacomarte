import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";

export default function Depoimentos() {
  ////////////////////////////////
  const [state, setState] = useState('');
  
  const handleChange = (event) => {
  
  const state = {
    file: null
  }

    console.log("Depoimentos.handleChange event.target.files", event.target.files);
    setState({ file: event.target.files[0]})
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("ImageUpload.handleSubmit state.file", state.file);

    const data = new FormData()
    data.append('files', state.file)

    const upload_res = await axios({
      method: 'POST',
      url: "https://joanita-api.herokuapp.com/upload",
      data
    })
  };

  ////////////////////////////////
  return (
    <>
      <Head>
        <title>Depopimentos - Joanita Festa com Arte</title>
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-2 pt-20 min-h-screen">
        {/*  */}
        <div className="bg-red-800 lg:min-h-screen flex lg:items-center p-8 sm:p-12">
          <div className="flex-grow text-white text-center">
            <h1 className="text-5xl font-Lobster">Depoimentos</h1>
            <p className=" font-extralight mt-3 tracking-wide">
              Me conta aqui a sua opnião sobre a Joanita Festa com Arte.
            </p>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="lg:flex min-h-screen flex-col  px-6 md:px-12 lg:px-24 xl:p-48">
          <div className="mx-auto text-center text-red-800 hidden md:flex">
            <Image
              src="/assets/joaninha-512.svg"
              alt="Joanita Festa com Arte"
              width={300}
              height={100}
            />
          </div>
          <div className="py-4">
            <form
              onSubmit={handleSubmit}
              className="w-full space-y-2 md:space-y-4"
            >
              <div className="flex items-center justify-between pl-3 border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                <input
                  type="text"
                  name="nome"
                  className="text-sm font-light outline-none h-12 w-11/12 text-red-800 placeholder-red-800"
                  placeholder="Nome"
                />
              </div>

              <div className="flex items-center justify-between pl-3 border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                <input
                  type="email"
                  name="email"
                  className="text-sm font-light outline-none h-12 w-11/12 text-red-800 placeholder-red-800"
                  placeholder="E-mail"
                />
              </div>

              <div className="">
                <div className=" pl-3 text-red-800 text-sm">Enviar Foto</div>
                <div className="flex  pl-3 pt-3 pb-0 border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                  <input
                    onChange={handleChange}
                    type="file"
                    name="file"
                    className="text-sm font-light outline-none h-12 w-11/12 text-red-800 placeholder-red-800"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pl-3 border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                <textarea
                  name="mensage"
                  className="text-sm font-light outline-none h-24 w-full py-2 text-red-800 placeholder-red-800"
                  placeholder="Mensagem"
                />
              </div>

              <div className="bg-red-800 rounded-lg py-2">
                <button
                onClick={handleSubmit}
                  className="w-full text-base font-Nunito text-white tracking-wider hover:font-bold hover:text-xl"
                  type="button"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
}
