import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { fetchAPIJoanita } from "../lib/api";
import PostAll from "../components/Blog/PostAll";
import PostMobAll from "../components/Blog/PostMobAll";

export default function Blog({ articles }) {
  return (
    <>
      <div className="pt-16">
        <Head>
          <title>RedeSF - Blog</title>
        </Head>
        {/* <div className="relative mt-3 md:py-0">
          <div>
            <Image
              src="/blog/bg-blog.svg"
              alt="Blog Joanita Festa com Arte"
              objectFit="cover"
              width={1920}
              height={300}
              layout="responsive"
            />
          </div>
          <div className="absolute top-0 bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
            <div className=" text-gray-50 text-xl xl:text-5xl font-semibold text-center">
              Blog - Joanita Festa com Arte
            </div>
          </div>
        </div> */}
      </div>
      <div className="mt-8 md:flex w-full h-auto justify-center py-6 lg:h-auto bg-white">
        <PostAll articles={articles} />
        <PostMobAll articles={articles} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const [articles] = await Promise.all([fetchAPIJoanita("/articles")]);

  return {
    props: { articles },
    revalidate: 1,
  };
}
