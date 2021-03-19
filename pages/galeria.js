import Image from 'next/image'

const Galeria = () => {
    return (
        <div className=' mt-16'>
            <Image
            src='/galeria/galeria.svg'
            height={60}
            width={162}
            />
        </div>
    );
}
 
export default Galeria;