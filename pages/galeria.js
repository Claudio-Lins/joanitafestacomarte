const Galeria = () => {
  return (
    <div className=" bg-white mb-10 mx-auto lg:w-4/5 md:rounded-xl md:shadow-md">
      <div className="p-4">
        <h2 className="text-center text-5xl text-red-800 font-Lobster">
          Galeria
        </h2>
      </div>
      {/* imagens */}
      <div className=" p-4 grid grid-cols-3 md:grid-cols-6 gap-5">
        {/*  */}
        <div className=' group cursor-pointer relative'>
          <div className='absolute h-full w-full -right-1 -bottom-1 rounded-md bg-gray-400 transform group-hover:-translate-x-1 group-hover:-translate-y-1 transition duration-200'></div>
          <div className="relative flex bg-yellow-300 w-auto h-56 shadow-md rounded-md font-Lobster text-2xl items-center justify-center">
            Image
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Galeria;
