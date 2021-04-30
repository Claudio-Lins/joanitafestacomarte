import Head from "next/head";
import DepoimentosSlideMobile from "../components/DepoimentosSlideMobile";
import DestakHome from "../components/DestakHome";
import { fetchAPIDepoimentos, fetchAPIDestaks } from "../lib/api";
// import SliderDestak from "../components/DestakHome";

export default function Home({ destak, depoimentos, image }) {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <Head>
        <title>Home - Joanita Festa com Arte</title>
        <link rel="icon" href="/assets/joaninha-512.ico" />
      </Head>

      <div className="w-full shadow-xl rounded-md md:w-2/3 lg:w-[1280px] lg:h-[700px]">
        <DestakHome image={image} />
        {/* <SliderDestak destak={destak} /> */}
      </div>

      <div className="mt-8 md:flex w-full h-auto justify-center items-center bg-red-200">
        <DepoimentosSlideMobile depoimentos={depoimentos} />
      </div>
    </div>
  );
}

////////////////////////////////////////////////////////////////
export async function getStaticProps() {
  const [depoimentos, image] = await Promise.all([
    fetchAPIDepoimentos(),
    fetchAPIDestaks("/destaks"),
  ]);

  return {
    props: { depoimentos, image },
    revalidate: 1,
  };
}
