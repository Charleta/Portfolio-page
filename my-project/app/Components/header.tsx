

import { socialNetworks } from "@/data";
import MotionTransition from "./transiiton-component";

import Link from "next/link";


const Header = () => {

return (
    
    <MotionTransition position="bottom" className=" absolute z-40 inline-block w-full top-5 md:top-10" >

        <header>
            <div className="container justify-between max-w-6xl mx-auto md:flex">
              <Link href="/">

                    <h1 className="my-3 text-4xl font-bold text-center md:text-left ">

                            Charleta
                            <span className="text-orange-500">
                                Dev
                            </span>
                    </h1>
                    
              </Link>
                        <div className="flex justify-center items-center gap-7">
                            {socialNetworks.map(({src, id , logo})=> (
                                <Link key={id} 
                                href={src}
                                target="_blank"
                                className="transition-all duration-300 hover:text-orange-400"
                                
                                >

                                {logo}
                                </Link>
                            ))}
                                
                            
                        </div>
              </div>
        </header>

    </MotionTransition>
);

};

export default Header;