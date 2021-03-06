import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function PostMob({ articles }) {
  return (
    <>
      <div className="sm:hidden">
        
        <div className="md:grid lg:grid-cols-3 px-4 mx-auto">
          {articles &&
            articles.slice(0, 1).map((articles) => (
              <div>
                <Link href={`post/${articles.slug}`} key={articles.id}>
                  <a>
                    <div className="flex max-w-sm mt-10 bg-white shadow-lg border rounded-lg overflow-hidden mx-auto">
                      
                      <div className="flex items-center w-full">
                        <div className="w-full">
                          <div className=" mb-2 mt-6 mx-3 px-2">
                            <Image
                              src={articles.image.url}
                              alt=""
                              layout="responsive"
                              width={articles.image.width}
                              height={articles.image.height}
                              objectFit="cover"
                            />
                          </div>
                          <div className="text-gray-900 font-semibold text-lg mb-2 mx-3 px-2">
                            {articles.title}
                          </div>
                          <div className="text-gray-800 font-thin text-sm mb-6 mx-3 px-2">
                            {articles.content.slice(0, 150)}
                          </div>
                          <div className="w-full border-t border-gray-100">
                            <div className="mt-3 mx-5 flex justify-between">
                              <div className="flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center">
                                Autor:
                                <div className="ml-1 text-gray-400 font-thin text-ms">
                                  {articles.author.name}
                                </div>
                              </div>
                              <div className="flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center">
                                Categoria:
                                <div className="ml-1 text-gray-400 font-thin text-ms">
                                  {articles.category.name}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
