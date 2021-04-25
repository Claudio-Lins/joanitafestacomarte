import React from "react";
import Link from "next/link";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center text-white  bg-red-800 items-center space-y-5 py-6"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link href="/">Home</Link>
      <Link href="/">Quem Somos</Link>
      <Link href="/">Galeria</Link>
      <Link href="/">Depoimentos</Link>
    </div>
  );
};

export default Dropdown;
