

import { socialNetworks } from "@/data";
import MotionTransition from "./transiiton-component";

import Link from "next/link";


const Header = () => {

return (
  <MotionTransition
    position="bottom"
    className=" absolute z-40 inline-block w-full top-5 md:top-10"
  >
    <header>
      <div className="container  justify-between max-w-6xl mx-auto md:flex p-5">
        <Link href="/">
          <h1 className=" text-4xl font-bold text-center md:text-left ">
            Charleta
            <span className="text-[#A1EF76]">Dev</span>
          </h1>
        </Link>
        
          <div className="flex flex-col mt-32 gap-5 justify-center items-start   md:items-center">
            {socialNetworks.map(({ src, id, logo }) => (
              <Link
                key={id}
                href={src}
                target="_blank"
                className="transition-all duration-300 hover:text-[#A1EF76]
                hover:font-bold hover:scale-150"
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