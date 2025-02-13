
import Avatar from "@/app/Components/avatar";
import ContainerPage from "@/app/Components/container";
import TransitionPage from "@/app/Components/transition-page";


const AboutMe = ( ) => {

    return (
      <>
        <TransitionPage />

        <ContainerPage>
          <Avatar />

          <h1
            className="text-2xl landig-tight text-center md:text-left
             md:text-5xl md:mt-10"
          >
            {" "}
            Hablemos{" "}
            <span className="font-bold text-orange-500">Sobre mi</span>
          </h1>

          <div className="mx-auto mt-5 mb-2 text-xl md:mx-0 md:mb-8">
            <p>
              Soy un apasionado de la tecnología y la resolución de problemas a
              través de la programación. Me encanta analizar desafíos y
              encontrar soluciones eficientes mediante el desarrollo de
              software. Siempre estoy explorando nuevas herramientas y
              metodologías para crear soluciones innovadoras y efectivas.
            </p>
            <p>
              Me motiva la idea de mejorar procesos y optimizar sistemas
              mediante la tecnología, combinando creatividad y lógica para
              generar impacto. Busco oportunidades para aplicar mis habilidades
              en proyectos desafiantes y seguir creciendo en este campo
              dinámico.
            </p>
          </div>
        </ContainerPage>
      </>
    );



}




export default AboutMe;