import React from "react";
import Link from "next/link";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-2 text-center text-white pt-20  bg-red-800 items-center space-y-5 py-6 tracking-wide font-bold"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link  href="/">Home</Link>
      <Link href="/quem-somos">Quem Somos</Link>
      <Link href="/depoimento/depoimentos">Depoimentos</Link>
      <Link href="/blog">Blog </Link>
    </div>
  );
};

export default Dropdown;
