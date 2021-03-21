import Image from "next/image";

const QuemSomos = () => {
  return (
    <div className="min-w-full container md:p-4">
      <div className="relative bg-white mb-10 mx-auto items-center md:grid md:grid-cols-2 lg:w-3/4 md:rounded-xl md:shadow-md">
        <div className="">
          <div className="flex justify-center mt-4">
            <Image
              className="mx-auto"
              src="/quem-somos/karen-hermann.png"
              alt="Karen Hermann"
              width={253}
              height={308}
            />
          </div>
          <div className="bg-red-200 py-1">
            <h2 className=" text-red-800 font-Lobster text-4xl text-center">
              Karen Hermann
            </h2>
          </div>
        </div>
        <div className='px-8 py-8 flex items-center'>
            <p className="flex text-xs font-Poppins font-extrabold leading-6 tracking-wide">
              Eu sou a Karen, a cara por trás da Juanita. Sou formada em
              Publicidade, mas desde criança sempre gostei muito de artes
              manuais e depois de ser mãe mergulhei no universo das festas e me
              encantei. E assim surgiu a Joanita, onde me expresso e me realizo
              com cada festa, cada trabalho. Cada festa é personalizada para
              aquela ocasião e sempre feita com muito carinho e cuidado (pelas
              mãos de uma escorpiana perfeccionista).⁣ <br />
              <br />
              Me encantei mais ainda com a possibilidade de uma festa bonita e
              personalizada aliada à praticidade, pois como mãe sei que
              precisamos de coisas práticas, mas também queremos tudo lindo e
              especial para os nossos filhos.
              <br />
              <br /> Assim surgiu o carro chefe da Joanita
            </p>
          </div>
      </div>
          <div className='absolute'>
          <Image
              className="mx-auto"
              src="/assets/joaninha.svg"
              alt="Karen Hermann"
              width={25}
              height={30}
            />
          </div>
    </div>
  );
};

export default QuemSomos;
