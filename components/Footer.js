import Image from "next/image";

const Footer = () => {
  return (
    <div className="sm:hidden flex items-center fixed bottom-0">
      <div className='relative'>
        <Image
        src="/footer/base-footer.svg"
        height={75}
        width={411} />
      </div>
      <div className='absolute inline-block'>
          <button className='mx-auto'>
          <Image
        src="/assets/joaninha.svg"
        height={33}
        width={43} />
          </button>
      </div>
    </div>
  );
};

export default Footer;
