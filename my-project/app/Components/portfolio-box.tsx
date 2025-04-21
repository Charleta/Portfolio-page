import Image from 'next/image';
import Link from 'next/link';


interface PortfolioBoxProps {
   data: {
    id:number,
    title:string,
    image:string,
    urlGithub:string,
    urlDemo:string
}
}

const PortfolioBox = (props : PortfolioBoxProps) => {

    const { data } = props;
    const {  title, image, urlGithub, urlDemo } = data;
    return (
      <div className="p-4 border border-teal-50 rounded-xl md:w-72 md:mt-10">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <Image
          src={image}
          alt="Imagen de proyecto"
          width={200}
          height={200}
          className="rounded-2xl w-full md:w-[200px] h-auto"
        />

        <div className="flex mt-5 gap-5 justify-between">
          <Link
            href={urlDemo}
            target="blank"
            rel="noopener noreferrer"
            className="p-2 transiton duration-150 rounded-lg
            bg-gray-800 text-white hover:bg-gray-700"
          >
            Ir al demo
          </Link>
          <Link
            href={urlGithub}
            target="blank"
            rel="noopener noreferrer"
            className="p-2 transiton duration-150 rounded-lg
            bg-[#A1EF76] text-[#0D1B2A]  hover:bg-[#679e4a]"
          >
            Github
          </Link>
        </div>
      </div>
    );



};



export default PortfolioBox;