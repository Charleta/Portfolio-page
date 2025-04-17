"use client";


import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const Introduction = () =>{
    return (
      <div className="z-20 w-full bg-darkBg/60">
        <div className="z-20 flex  flex-col justify-center h-full  md:py-0 md:flex-row">
          <div className="relative w-auto h-auto sm:w-auto sm:h-auto md:w-auto md:h-auto mx-auto mt-32">
            <Image
              src="/yo-ghibli.png"
              priority
              fill
              className="object-contain"
              alt="profile pic"
            />
          </div>
          <div className="flex flex-col justify-center max-w-md ">
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
                className="font-bold text-orange-500 block"
              />
            </h1>
            <p className="mx-auto p-5 mb-2 text-xl md:mx-0 md:mb-8">
              Soy un desarrollador de software con experiencia en la creación de
              aplicaciones web y móviles. Me apasiona la tecnología y me encanta
              aprender cosas nuevas.
            </p>

            <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
              <Link
                href="/portfolio"
                className="px-3 py-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-md hover:shadow-white/50"
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

