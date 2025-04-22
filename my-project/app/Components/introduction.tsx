"use client";


import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import { myStageFront, myStageBack } from "@/data";


const Introduction = () =>{
    return (
      <div className="z-20 w-full bg-darkBg/60">
        <div className="z-20 grid  md:grid-cols-2 h-full  md:m-auto sm:grid-cols-1 ">
          <div className="flex items-end justify-center mt-2  md:justify-end md:items-center">
            <div className="relative w-72 h-72  md:w-[450px] md:h-[650px] ">
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
            <p className="mx-auto text-md text-center mb-2 mb:text-xl  md:mb-8 md:text-left ">
              ¡Hola! Soy desarrollador web con experiencia en crear soluciones
              digitales eficientes. Trabajo con tecnologías modernas de frontend
              y backend, enfocado en resolver problemas reales de forma
              práctica.
            </p>

            <section>
              <h2 className="mb-2">
                <span className="text-[#A1EF76] font-bold text-xl ">Front</span>
                end
              </h2>
              <div className="grid grid-cols-4 gap-4 ">
                {myStageFront.map(({ id, title, icon }) => (
                  <div
                    key={id}
                    className="w-16 h-16 flex items-center justify-center p-2 transition-all duration-300 ease-in-out bg-white/10 rounded-xl hover:bg-[#A1EF76] hover:shadow-md hover:text-[#0D1B2A] hover:font-bold"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <span> {icon} </span>
                      <p className="mt-2 text-sm">{title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-2 mt-2">
                <span className="text-[#A1EF76] font-bold text-xl ">Back</span>
                end
              </h2>
              <div className="grid grid-cols-4 gap-4 ">
                {myStageBack.map(({ id, title, icon }) => (
                  <div
                    key={id}
                    className="w-16 h-16 flex items-center justify-center p-2 transition-all duration-300 ease-in-out bg-white/10 rounded-xl hover:bg-[#A1EF76] hover:shadow-md hover:text-[#0D1B2A] hover:font-bold"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <span> {icon} </span>
                      <p className="mt-2 text-sm">{title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="flex items-center mt-12 md:mt-24 justify-center gap-3 md:justify-between md:gap-10">
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

