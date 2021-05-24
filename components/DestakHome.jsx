import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import Image from "next/image";

const DestakHome = ({image}) => {
  // const [destak, setDestak] = useState([]);

  // useEffect(() => {
  //   fetch("https://joanita-api.herokuapp.com/destaks")
  //     .then((response) => response.json())
  //     .then((data) => setDestak(data));
  // }, []);

  const [current, setCurrent] = useState(0);
  const length = image.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(image) || image.length <= 0) {
    return null;
  }

  return (
    <>
      <section className="relative flex justify-center items-end md:items-center">
        <FaArrowAltCircleLeft
          className="absolute  flex text-4xl text-gray-200 left-24 md:-left-8 z-10 cursor-pointer hover:text-red-800 -bottom-6 md:inset-y-72"
          onClick={prevSlide}
        />
        <FaArrowAltCircleRight
          className="absolute  flex text-4xl text-gray-200 right-24 md:-right-8 z-10 cursor-pointer hover:text-red-800 -bottom-6 md:inset-y-72"
          onClick={nextSlide}
        />

        {image.map((image, index) => {
          return (
            <>
              <div
                className={
                  index === current ? "px-4 py-6" : " opacity-0 duration-[1s ease]"
                }
                key={index}
              >
                {index === current && (
                  <>
                    <div className='bg-black pb-4 shadow-md'>
                    <div className='border-black border-4'>
                      <Image
                        className=""
                        src={image.Cover.url}
                        alt={image.Title}
                        width={600}
                        height={600}
                        objectFit='cover'
                      />
                    </div>
                    <div className='text-white text-center text-3xl tracking-wider font-Lobster'><h2>{image.Title}</h2></div>
                    </div>
                  </>
                )}
              </div>
            </>
          );
        })}
      </section>
      {/*  */}
    </>
  );
};

export default DestakHome;
