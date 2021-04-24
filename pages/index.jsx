import Head from "next/head";
import Depoimentos from "../components/Depoimentos";
import DepoimentosMob from "../components/Depoimentos-mob";
import { fetchAPIDepoimentos } from "../lib/api";
import SliderDestak from "../components/DestakHome";

export default function Home({ destak, depoimentos }) {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <Head>
        <title>Home - Joanita Festa com Arte</title>
        <link rel="icon" href="/assets/joaninha-512.ico" />
      </Head>

      <div className="w-full shadow-xl rounded-md md:w-2/3 lg:w-[1280px] lg:h-[700px]">
        <SliderDestak destak={destak} />
      </div>
      <div className="md:hidden w-full h-[550px] flex justify-center items-center bg-red-200 my-10">
        <DepoimentosMob depoimentos={depoimentos} />
      </div>
      <div className="hidden md:flex  md:w-full md:h-[800px] justify-center items-center bg-red-200 my-10">
        <Depoimentos depoimentos={depoimentos} />
      </div>
    </div>
  );
}

////////////////////////////////////////////////////////////////
export async function getStaticProps() {
  // Run API calls in parallel
  const [depoimentos] = await Promise.all([fetchAPIDepoimentos()]);

  return {
    props: { depoimentos },
    revalidate: 1,
  };
}
