import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = ({ toggle }) => {
  return (
    <>
      <nav className="bg-red-200 fixed inset-x-0 z-50">
        <div
          className="container mx-auto flex items-center justify-between md:justify-evenly h-20 bg-red-200 relative shadow-sm"
          role="navigation"
        >
          <Link href="/">
            <a className="pl-6 md:pl-20">
              <Image
                src="/assets/lg-joanita-hor-180x68.svg"
                alt="Joanita Festa com Arte"
                width={160}
                height={55}
              />
            </a>
          </Link>
          <div className="pr-12 cursor-pointer md:hidden" onClick={toggle}>
            <Image
              src="/assets/menu-burger.svg"
              alt="Menu Joanita Festa com Arte"
              width={25}
              height={25}
            />
          </div>
          <div className="flex pr-8 space-x-8 font-Nunito font-semibold md:block hidden">
            <Link href="/">
              <a className=" inline-block hover:text-red-900 hover:font-bold">
                Home
              </a>
            </Link>
            <Link href="/quem-somos">
              <a className=" inline-block hover:text-red-900 hover:font-bold">
                Quem Somos
              </a>
            </Link>
            <Link href="/depoimento/depoimentos">
              <a className=" inline-block hover:text-red-900 hover:font-bold">
                Depoimentos
              </a>
            </Link>
            <Link href="/blog">
              <a className=" inline-block hover:text-red-900 hover:font-bold">
                Blog
              </a>
            </Link>
          </div>
          {/* <div className="flex pr-8 cursor-pointer">
            <Link href="https://www.instagram.com/joanitafestacomarte/">
              <Image
                src="/footer/instagram.svg"
                alt="Instagram Joanita Festa com Arte"
                width={25}
                height={25}
              />
            </Link>
          </div> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
