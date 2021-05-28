import { Slide } from "react-slideshow-image";
import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

import Image from "next/image";

const SlideDestak = ({ image }) => {
    const properties = {
        duration: 4000,
        transitionDuration: 600,
        infinite: true,
        canSwipe: true,
        prevArrow: <div className='hidden md:block' style={{width: "30px", marginRight: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#991B1B"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></div>,
        nextArrow: <div className='hidden md:block' style={{width: "30px", marginLeft: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#991B1B"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></div>
      };
  return (
    <>
    <div className=" container w-[340px] md:w-[600px] mx-auto bg-black pb-4 pt-0">
        <Slide {...properties} className="border-black border-4">
        {image.map((image, index) => {
            return (
            <>
              <div key={index} className="">
                <div className="">
                  <Image
                    className=""
                    src={image.Cover.url}
                    alt={image.Title}
                    width={600}
                    height={600}
                    objectFit="cover"
                  />
                </div>
                <div className="text-white mt-2 text-center text-3xl tracking-wider font-Lobster">
                  <h2>{image.Title}</h2>
                </div>
              </div>
            </>
          );
        })}
        </Slide>
      </div>
    </>
  );
};

export default SlideDestak;
