import MotionTransition from "./transiiton-component";
import Image from "next/image";

const Avatar =() =>{

    return (

        <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute ">

            <Image src="/avatar-1.png" width={400} height={400} 
            className="w-full h-full" alt="avatar" />

        </MotionTransition>

    )


};

export default Avatar;














