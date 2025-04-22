import  { socialNetworks } from "@/data";
import Link from "next/link";
const HeaderIcons = () => {

 return (
    
   <div className="grid grid-cols-3 gap-5  items-center md:grid-cols-3 md:mt-8 md:gap-5 md:items-center md:content-center">
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
 );

}


export default HeaderIcons;