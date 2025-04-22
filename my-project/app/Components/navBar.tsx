
"use client";

import  Link  from "next/link";
import { usePathname } from "next/navigation";
import { itemsNavbar } from "@/data";
import MotionTransition from "./transiiton-component";



const NavBar =() =>{
  const router = usePathname();

return (
  <MotionTransition
    position="right"
    className="z-40 flex flex-col mt-4 items-center justify-center w-full h-max left-4  md:top-1/2 md:-translate-y-1/2 md:bottom-10 md:items-center"
  >
    <nav>
      <div className="flex  items-center justify-center mt-20 px-2 gap-2 md:px-4 py-1 rounded-full bg-white/15 backdrop-blur-sm">
        {itemsNavbar.map((item) => (
          <div
            key={item.id}
            className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary ${
              router === item.link && "bg-black"
            }`}
          >
            <Link href={item.link}> {item.icon} </Link>
          </div>
        ))}
      </div>
    </nav>
  </MotionTransition>
);

};

export default NavBar;  