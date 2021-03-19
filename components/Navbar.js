import Image from 'next/image'

const Navbar = () => {
    return (
        <div className='sm:hidden flex items-center fixed h-12 rounded-t-xl shadow-md bg-red-200 w-full top-0 justify-evenly z-10'>
            <div>
                <Image
                src='/navbar/home.svg'
                width={58}
                height={35}
                />
            </div>
            <div>
                <Image
                src='/navbar/galeria.svg'
                width={62}
                height={35}
                />
            </div>
            <div>
                <Image
                src='/navbar/temas.svg'
                width={57}
                height={35}
                />
            </div>
            <div>
                <Image
                src='/navbar/contacto.svg'
                width={73}
                height={35}
                />
            </div>
        </div>
    );
}
 
export default Navbar;