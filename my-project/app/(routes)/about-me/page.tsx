
import Avatar from "@/app/Components/avatar";
import ContainerPage from "@/app/Components/container";
import TransitionPage from "@/app/Components/transition-page";


const AboutMe = ( ) => {

    return (
      <>

        <TransitionPage />


        <ContainerPage>
            
            <Avatar/>
            
            <h1 className="text-2xl landig-tight text-center md:text-left
             md:text-5xl md:mt-10"> Toda mi {' '}


              <span className="font-bold text-oran">Trayectoria Profesional</span>
            </h1>


        </ContainerPage>
        
      </>
    );



}




export default AboutMe;