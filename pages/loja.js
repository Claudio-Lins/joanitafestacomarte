import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import products from "../products.json";
import { fromImageToUrl } from "../utils/url";

export default function Loja() {
  return (
    <>
      <div className=" min-h-screen w-full flex flex-col justify-center items-center">
        <Head>
          <title>Loja da Joanita - Joanita Festa com Arte</title>
          <link rel="icon" href="/assets/joaninha-512.ico" />
        </Head>

        {products.map((product) => (
          <div key={product.name} className="product p-6 text-xl">
            <Link href={`/products/${product.slug}`}>
              <a>
                <div className="row flex flex-col">
                  <div className="colImg flex max-w-[500px] mr-6">
                    <Image
                      src={fromImageToUrl(product.image)}
                      layout=""
                      width={400}
                      height={400}
                      objectFit="cover"
                    />
                  </div>
                  <div className="col flex">
                    {product.name}
                    {product.price}
                  </div>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
