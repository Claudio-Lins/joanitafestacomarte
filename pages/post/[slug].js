import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function SinglePost({ articles }) {
  function formateDate() {
    const splittedDate = articles.publishedAt.split("-");
    return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`;
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-red-800 py-24 px-4">
        <Head>
          <title>Joanita - {articles.title} </title>
        </Head>
        <div className="bg-white container shadow-lg border rounded-lg md:py-6 py-4">
          <div className="text-gray-900 text-center font-bold text-2xl">
            {articles.title}
          </div>
          <div className="flex text-sm mt-2 justify-center items-center space-x-3 text-gray-400">
            <div className=" text-center tracking-wide">
              {articles.category.name}
            </div>
            <div>
              <p>|</p>
            </div>
            <div className="text-center tracking-wide">{formateDate()}</div>
          </div>
          <div className="px-4">
            <div className="my-2 mx-auto md:w-[500px] shadow-md rounded-lg overflow-hidden ">
              <Image
                src={articles.image.url}
                alt={articles.title}
                layout="responsive"
                width={articles.image.width}
                height={articles.image.height}
                objectFit="cover"
              />
            </div>
          </div>
          <div className="text-gray-800 font-thin text-base px-4 md:w-2/3 mx-auto my-4 ">
            {articles.content}
          </div>
        </div>
        <Link href='/blog'>
        <div className="bg-white px-4 py-2 mt-4 cursor-pointer rounded-lg shadow-md flex">
          <div>Todos os posts</div>
        </div>
        </Link>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://joanita-api.herokuapp.com/articles");
  const articles = await res.json();

  const paths = articles.map((articles) => ({
    params: { slug: articles.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await fetch(
    `https://joanita-api.herokuapp.com/articles?slug=${slug}`
  );
  const data = await res.json();
  const articles = data[0];

  return {
    props: { articles },
    revalidate: 1,
  };
}

//   https://joanita-api.herokuapp.com
