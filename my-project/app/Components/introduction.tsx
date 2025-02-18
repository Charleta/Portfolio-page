"use client";


import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const Introduction = () =>{
    return (
      <div className="z-20 w-full bg-darkBg/60">
        <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
          <Image
            src="/home-4.png"
            priority
            width="800"
            height="800"
            alt="profile pic"
          />

          <div className="flex flex-col justify-center max-w-md">
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
            <p className='mx-auto mb-2 text-xl md:mx-0 md:mb-8'>
              Soy un desarrollador de software con experiencia en la creación de
              aplicaciones web y móviles. Me apasiona la tecnología y me encanta
              aprender cosas nuevas.
            </p>

            <div className="flex item-center justify-center gap-3 md:justify-start md:gap-10">
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

