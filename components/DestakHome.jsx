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
      <section className="relative flex flex-col justify-center items-center">
        <FaArrowAltCircleLeft
          className="absolute  flex text-4xl text-gray-200 left-4 z-10 cursor-pointer hover:text-red-800"
          onClick={prevSlide}
        />
        <FaArrowAltCircleRight
          className="absolute  flex text-4xl text-gray-200 right-4 z-10 cursor-pointer hover:text-red-800"
          onClick={nextSlide}
        />

        {image.map((image, index) => {
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
                        src={image.Cover.url}
                        alt={image.Title}
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
        {image.map((image, index) => {
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

export default DestakHome;
