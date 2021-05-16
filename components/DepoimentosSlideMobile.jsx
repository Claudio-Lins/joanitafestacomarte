import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import Image from "next/image";

const DepoimentosSlideMobile = ({depoimentos}) => {
  // const [depoimentos, setdepoimentos] = useState([]);

  // useEffect(() => {
  //   fetch("https://joanita-api.herokuapp.com/depoimentos")
  //     .then((response) => response.json())
  //     .then((data) => setdepoimentos(data));
  // }, []);

  const [current, setCurrent] = useState(0);
  const length = depoimentos.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(depoimentos) || depoimentos.length <= 0) {
    return null;
  }

  return (
    <>
      <section className="relative flex flex-col justify-center items-center">
        <FaArrowAltCircleLeft
          className="absolute flex text-3xl text-gray-200 left-2 md:-left-2 mt-0 z-10 cursor-pointer hover:text-red-800"
          onClick={prevSlide}
        />
        <FaArrowAltCircleRight
          className="absolute  flex text-3xl text-gray-200 right-2 md:-right-2 mt-0 z-10 cursor-pointer hover:text-red-800"
          onClick={nextSlide}
        />

        {depoimentos.map((depoimentos, index) => {
          return (
            <>
              <div
                className={
                  index === current ? "p-8" : " opacity-0 duration-[1s ease]"
                }
                key={index}
              >
                {index === current && (
                  <>
                    <div className="flex flex-col justify-center">
                      <div className="px-7 md:flex md:container justify-evenly mx-auto">
                        <div className="max-w-md py-2 px-4 bg-white shadow-lg rounded-lg my-20">
                          <div className="flex justify-center md:justify-center -mt-16">
                            <Image
                              className="w-20 h-20 object-cover rounded-full border-2"
                              src={depoimentos.picture.url}
                              width={100}
                              height={100}
                            />
                          </div>
                          <div>
                            <p className="mt-2 text-gray-600">
                              {depoimentos.mensagem}
                            </p>
                          </div>
                          <div className="flex justify-end mt-4 font-bold">
                            {depoimentos.nome}
                          </div>
                        </div>
                      </div>
                    </div>
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

export default DepoimentosSlideMobile;
