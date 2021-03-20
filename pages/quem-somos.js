import Image from "next/image";

const QuemSomos = () => {
  return (
    <div className=" min-w-full container">
      <div className="flex justify-center">
        <Image
          src="/quem-somos/karen-hermann.png"
          alt="Karen Hermann"
          width={253}
          height={308}
        />
      </div>
      <div className="bg-red-200 flex flex-grow justify-center py-1">
        <h2 className=" text-red-800 font-Lobster text-4xl text-center">
          Karen Hermann
        </h2>
      </div>
      <div className="px-8 py-4">
        <p className='text-xs font-Poppins font-extrabold leading-6 tracking-wide mb-20'>
          Eu sou a Karen, a cara por trás da Juanita. Sou formada em
          Publicidade, mas desde criança sempre gostei muito de artes manuais e
          depois de ser mãe mergulhei no universo das festas e me encantei. E
          assim surgiu a Joanita, onde me expresso e me realizo com cada festa,
          cada trabalho. Cada festa é personalizada para aquela ocasião e sempre
          feita com muito carinho e cuidado (pelas mãos de uma escorpiana
          perfeccionista).⁣ <br/><br/>Me encantei mais ainda com a possibilidade de uma
          festa bonita e personalizada aliada à praticidade, pois como mãe sei
          que precisamos de coisas práticas, mas também queremos tudo lindo e
          especial para os nossos filhos.<br/><br/> Assim surgiu o carro chefe da Joanita
        </p>
      </div>
    </div>
  );
};

export default QuemSomos;
