import Image from "next/image";

const Footer = () => {
  return (
    <div className="sm:hidden flex items-center fixed bottom-0">
      <div className='mb-0'>
        <Image
        src="/footer/base-footer.svg"
        height={75}
        width={411} />
      </div>
    </div>
  );
};

export default Footer;
