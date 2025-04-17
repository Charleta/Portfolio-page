"use client";


import Avatar from "@/app/Components/avatar";
import ContainerPage from "@/app/Components/container";
import TransitionPage from "@/app/Components/transition-page";
import Image from "next/image";


const AboutMe = ( ) => {

    return (
      <>
        <TransitionPage />

        <ContainerPage>
          <Avatar />

          <h1
            className="text-2xl text-center md:text-left
             md:text-5xl md:mt-10"
          >
            {" "}
            Hablemos <span className="font-bold text-orange-500">Sobre mi</span>
          </h1>
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:gap-10 mt-10">
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-md shadow-white/50">
              <Image
                src="/perfil-3.jpg"
                alt="profile pic"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="mt-5 max-w-xl md:mt-0 text-md p-5 text-white text-center md:text-left">
              <p className="mb-4">
                Soy un apasionado de la tecnología y la resolución de problemas
                a través de la programación. Me encanta analizar desafíos y
                encontrar soluciones eficientes mediante el desarrollo de
                software. Siempre estoy explorando nuevas herramientas y
                metodologías para crear soluciones innovadoras y efectivas.
              </p>
              <p>
                Me motiva la idea de mejorar procesos y optimizar sistemas
                mediante la tecnología, combinando creatividad y lógica para
                generar impacto. Busco oportunidades para aplicar mis
                habilidades en proyectos desafiantes y seguir creciendo en este
                campo dinámico.
              </p>
            </div>
          </div>
        </ContainerPage>
      </>
    );



}




export default AboutMe;