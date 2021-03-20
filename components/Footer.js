import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="sm:hidden flex items-center fixed h-12 rounded-t-xl shadow-md bg-red-200 w-full bottom-0">
      <div className="mt-1 mx-auto cursor-pointer">
        <Link href="/galeria">
        <Image
        src="/footer/instagram.svg"
        alt="Instagram"
        width={30}
        height={30}
      />
        </Link>
      </div>
      <div className="mt-1 mx-auto cursor-pointer">
        <Link href="/quem-somos">
        <Image
        src="/footer/whatsup.svg"
        alt="Whatsup"
        width={30}
        height={30}
      />
        </Link>
      </div>
      <div className="bg-red-200 rounded-full p-2 mx-auto pb-6 cursor-pointer">
        <Link href="/">
        <Image
        src="/assets/joaninha.svg"
        alt="Joaninha - Lady Bug"
        width={50}
        height={45}
      />
        </Link>
      </div>
      <div className="pt-1 mx-auto cursor-pointer">
        <Link href="/">
        <Image
        src="/footer/contact.svg"
        alt="Contacto"
        width={33}
        height={24}
      />
        </Link>
      </div>
      <div className="mt-1 mx-auto cursor-pointer">
        <Link href="/">
        <Image
        src="/footer/shopping-bag.svg"
        alt="Shopping"
        width={30}
        height={33}
      />
        </Link>
      </div>
    </div>
  );
};

export default Footer;


