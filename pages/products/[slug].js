import Head from "next/head";
import products from "../../products.json";
import Image from "next/image";
import { fromImageToUrl } from "../../utils/url";

const product = products[0];

const Product = () => {
  return (
    <>
      <div>
          <Head>
              {product.meta_title && 
                    <title>{product.meta_title}</title>
                }
                {product.meta_description && 
                    <meta name='description' content={product.meta_description} />
                }
          </Head>
        <h3>{product.name}</h3>
        <Image
          src={fromImageToUrl(product.image)}
          layout=""
          width={400}
          height={400}
          objectFit="cover"
          />
          <h3>{product.name}</h3>
          <p>€{product.price}</p>
          <p>{product.content}</p>
      </div>
    </>
  );
};


export default Product