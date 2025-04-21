"use client";


import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const Introduction = () =>{
    return (
      <div className="z-20 w-full bg-darkBg/60">
        <div className="z-20 grid  md:grid-cols-2 h-full  md:m-auto sm:grid-cols-1 ">
          <div className="flex items-end justify-center mt-2  md:justify-end md:items-center">
            <div className="relative w-80 h-80 md:w-[400px] md:h-[600px] ">
              <Image
                src="/yo-ghibli.png"
                priority
                fill
                className="object-contain"
                alt="profile pic"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-start  max-w-md p-2 md:items-start md:justify-center ">
            <h1 className="mb-5 text-2xl leanding-tight text-center md:text-left md:text-4xl md:mb-10">
              Si puedes pensarlo,
              <TypeAnimation
                sequence={[
                  "lo podemos hacer.",
                  1000,
                  "lo podemos desarrollar.",
                  1000,
                  "lo podemos mejorar.",
                  1000,
                ]}
                wrapper="span"
                speed={80}
                repeat={Infinity}
                className="font-bold text-[#A1EF76] block"
              />
            </h1>
            <p className="mx-auto text-center mb-2 text-xl  md:mb-8 md:text-left ">
              Soy un desarrollador de software con experiencia en la creación de
              aplicaciones web y móviles. Me apasiona la tecnología y me encanta
              aprender cosas nuevas.
            </p>

            <div className="flex items-center mt-2 justify-center gap-3 md:justify-between md:gap-10">
              <Link
                href="/portfolio"
                className="px-3 text-[#0D1B2A] font-bold py-2 bg-[#A1EF76] transition-all border-2 border-[#679e4a] cursor-pointer w-fit rounded-xl hover:shadow-md hover:bg-[#679e4a] "
              >
                Ver proyectos
              </Link>
              <Link
                href="mailto:sr.carlosortega@gmail.com"
                className="px-3  py-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-md hover:shadow-white/50"
              >
                Contactarme
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}


export default Introduction;

