import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="sm:hidden flex items-center fixed h-12 rounded-t-xl shadow-md bg-red-200 w-full bottom-0">
      <div className="bg-red-200 rounded-full p-2 mx-auto pb-6">
        <Link href="/">
          <Image src="/assets/joaninha.svg" height={50} width={45} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
