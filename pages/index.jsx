import React, { useState } from "react";
import Head from "next/head";
import DepoimentosSlideMobile from "../components/DepoimentosSlideMobile";
import DestakHome from "../components/DestakHome";
import { fetchAPIJoanita } from "../lib/api";
import Temas from "../components/Temas/Temas";
import Post from "../components/Blog/Post";
import PostMob from "../components/Blog/PostMob";

export default function Home({ depoimentos, image, temas, articles }) {
  ///////MODAL////////////////////////////////
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  ////////////////////////////////////////////
  return (
    <div className="flex flex-col items-center justify-center py-24">
      <Head>
        <title>Home - Joanita Festa com Arte</title>
        <link rel="icon" href="/assets/joaninha-512.ico" />
      </Head>

      <div className="w-full shadow-xl rounded-md md:w-2/3 lg:w-[1280px] lg:h-[768px]">
        <DestakHome image={image} />
      </div>

      <div className="mt-12 md:flex w-full h-auto justify-center lg:h-[700px] bg-red-200">
        <Temas temas={temas} />
      </div>

      <div className="flex flex-col w-full h-auto justify-center py-8 lg:h-auto bg-white">
        <div className="flex justify-center font-Lobster text-5xl text-red-800">
          <h1>Blog da Joanita</h1>
        </div>
        <div className="">
          <Post articles={articles} />
          <PostMob articles={articles} />
        </div>
      </div>

      <div className="flex flex-col w-full h-auto justify-center items-center py-8 bg-red-200">
      <div className=" justify-center font-Lobster text-5xl text-red-800">
          <h1>Blog da Joanita</h1>
        </div>
        <div>

        <DepoimentosSlideMobile depoimentos={depoimentos} />
        </div>
      </div>
    </div>
  );
}

////////////////////////////////////////////////////////////////
export async function getStaticProps() {
  const [depoimentos, image, temas, articles] = await Promise.all([
    fetchAPIJoanita("/depoimentos"),
    fetchAPIJoanita("/destaks"),
    fetchAPIJoanita("/temas"),
    fetchAPIJoanita("/articles"),
  ]);

  return {
    props: { depoimentos, image, temas, articles },
    revalidate: 1,
  };
}
////////////////////////////////////////////////////////////////
