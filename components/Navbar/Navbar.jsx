import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = ({ toggle }) => {
  return (
    <nav
      className="flex items-center justify-between h-16 bg-red-100 relative shadow-sm"
      role="navigation"
    >
      <Link href="/">
        <a className='pl-8 md:pl-20'>
          <Image
            src="/joaninha-512.svg"
            alt="Joanita Festa com Arte"
            width={40}
            height={50}
          />
        </a>
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <Image
          src="/list.svg"
          alt="Menu Joanita Festa com Arte"
          width={25}
          height={25}
        />
      </div>
      <div className="pr-8 space-x-4 md:block hidden">
        <Link href="/">Home</Link>
        <Link href="/">Quem Somos</Link>
        <Link href="/">Galeria</Link>
        <Link href="/">Depoimentos</Link>
      </div>
    </nav>
  );
};

export default Navbar;
