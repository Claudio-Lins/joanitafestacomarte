
const Galeria = () => {
  return (
    <div className=" bg-white mb-10 mx-auto lg:w-4/5 md:rounded-xl md:shadow-md">
      <div className="p-4">
      <h2 className='text-center text-5xl text-red-800 font-Lobster'>
          Galeria
      </h2>
      </div>
      {/* imagens */}
      <div className='p-4 grid grid-cols-3 md:grid-cols-6'>
        <div className='bg-yellow-300 m-2 w-auto h-24 shadow-md rounded-md'></div>
        <div className='bg-yellow-300 m-2 w-auto h-24 shadow-md rounded-md'></div>
        <div className='bg-yellow-300 m-2 w-auto h-24 shadow-md rounded-md'></div>
        <div className='bg-yellow-300 m-2 w-auto h-24 shadow-md rounded-md'></div>
        <div className='bg-yellow-300 m-2 w-auto h-24 shadow-md rounded-md'></div>
        <div className='bg-yellow-300 m-2 w-auto h-24 shadow-md rounded-md'></div>
        <div className='bg-yellow-300 m-2 w-auto h-24 shadow-md rounded-md'></div>
        <div className='bg-yellow-300 m-2 w-auto h-24 shadow-md rounded-md'></div>
        <div className='bg-yellow-300 m-2 w-auto h-24 shadow-md rounded-md'></div>
        <div className='bg-yellow-300 m-2 w-auto h-24 shadow-md rounded-md'></div>
        <div className='bg-yellow-300 m-2 w-auto h-24 shadow-md rounded-md'></div>
        <div className='bg-yellow-300 m-2 w-auto h-24 shadow-md rounded-md'></div>
      </div>
    </div>
  );
};

export default Galeria;
