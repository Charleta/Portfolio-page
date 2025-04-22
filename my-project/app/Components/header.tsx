

import MotionTransition from "./transiiton-component";
import HeaderIcons from "./header-icons";

import Link from "next/link";


const Header = () => {

return (
  <>
    <MotionTransition
      position="bottom"
      className=" absolute z-40 inline-block w-full top-5 md:top-10"
    >
      <header>
        <div className="container max-w-6xl mx-auto p-5 flex flex-col md:flex-row md:justify-between md:items-center">
          <Link href="/">
            <h1 className=" text-4xl font-bold text-center md:text-left ">
              Charleta
              <span className="text-[#A1EF76]">Dev</span>
            </h1>
          </Link>
          <div className="hidden md:block">
            <HeaderIcons />
          </div>
        </div>
      </header>
    </MotionTransition>
  </>
);

};

export default Header;