import React, { useState, useEffect } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import Image from "next/image";

const SliderDestak = () => {
  const [destak, setDestak] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/destaks")
      .then((response) => response.json())
      .then((data) => setDestak(data));
  }, []);

  const [current, setCurrent] = useState(0);
  const length = destak.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(destak) || destak.length <= 0) {
    return null;
  }

  return (
    <>
      <section className="relative flex flex-col justify-center items-center">
        <FaArrowAltCircleLeft
          className="absolute  flex text-2xl text-gray-200 left-4 z-10 cursor-pointer hover:text-red-800"
          onClick={prevSlide}
        />
        <FaArrowAltCircleRight
          className="absolute  flex text-2xl text-gray-200 right-4 z-10 cursor-pointer hover:text-red-800"
          onClick={nextSlide}
        />

        {destak.map((destak, index) => {
          return (
            <>
              <div
                className={
                  index === current ? "p-4" : " opacity-0 duration-[1s ease]"
                }
                key={index}
              >
                {index === current && (
                  <>
                    <div>
                      <Image
                        className="rounded-lg object-cover"
                        src={destak.Cover.url}
                        alt={destak.Title}
                        width={680}
                        height={680}
                      />
                    </div>
                  </>
                )}
              </div>
            </>
          );
        })}
      </section>
      <section className="relative flex flex-col justify-center items-center">
        {destak.map((destak, index) => {
          return (
            <>
              <div
                className={
                  index === current ? "p-4" : " opacity-0 duration-[1s ease]"
                }
                key={index}
              >
                {index === current && (
                  <>
                    {/* <div>{destak.Title}</div> */}
                  </>
                )}
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default SliderDestak;
