import Link from "next/link";
import { SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiSass,
  SiFigma,
  SiVercel,
  SiGithub,
  SiPostgresql,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiSocketdotio,
  SiMysql
 } from "react-icons/si";

export const myStageFront = [
  
  {
    id: 1,
    title: "React",
    icon: <SiReact />,
    description:
      "React es una biblioteca de JavaScript para construir interfaces de usuario interactivas y reutilizables, facilitando el desarrollo de aplicaciones web modernas.",
  },
  {
    Id:2,
    title: "Next.js",
    icon: <SiNextdotjs />,
  },

  {
    id: 3,
    title: "Tailwind",
    icon: <SiTailwindcss />,
    description:
      "Tailwind CSS es un marco de diseño de CSS que permite crear interfaces personalizadas y responsivas utilizando clases utilitarias predefinidas.",
  },
  // {
  //   id: 4,
  //   title: "HTML5",
  //   icon: <SiHtml5 />,
  //   description:
  //     "HTML5 es la última versión del lenguaje de marcado HTML, que proporciona una estructura semántica y nuevas características para el desarrollo web moderno.",
  // },
  // {
  //   id: 5,
  //   title: "CSS3",
  //   icon: <SiCss3 />,
  //   description:
  //     "CSS3 es la última versión de CSS, que permite aplicar estilos avanzados y efectos visuales a las páginas web, mejorando la presentación y la experiencia del usuario.",
  // },


];

export const myStageBack = [
  {
    Id: 1,
    title: "Node.js",
    icon: <SiMongodb />,
  },

  {
    id: 2,
    title: "SQL",
    icon: <SiMysql />,
  },
  {
    id: 3,
    title: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    id: 4,
    title: "Firebase",
    icon: <SiFirebase />,
  },
];


import {
  BookText,
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Twitter,
  Crop,
  Pencil,
  Computer,
  Book,
  Rocket,
  Speech,
  Github,
  Mail,
  
} from "lucide-react";

export const socialNetworks = [
  {
    id: 1,
    logo: (
      <Link
        href="https://www.linkedin.com/in/carlos-ortega-oca%C3%B1a"
        target="_blank"
        rel="noopener noreferrer" // Esto es una medida de seguridad para evitar que se abran ventanas emergentes y se pueda hacer phishing
      >
        <Linkedin size={32} strokeWidth={1} />
      </Link>
    ),
    src: "https://www.linkedin.com/in/carlos-ortega-oca%C3%B1a/",
  },
  {
    id: 2,
    logo: (
      <Link
        href="https://x.com/carlosortega_ok"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter size={32} strokeWidth={1} />
      </Link>
    ),

    src: "https://x.com/carlosortega_ok",
  },
  {
    id: 3,
    logo: (
      <Link
        href="https://github.com/Charleta"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github size={32} strokeWidth={1} />
      </Link>
    ),
    src: "https://github.com/Charleta",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "/about-me",
  },
  {
    id: 3,
    title: "Portfolio",
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: "/portfolio",
  },
  {
    id: 4,
    title: "Mail",
    icon: <Mail size={25} color="#fff" strokeWidth={1} />,
    link: "mailto:sr.carlosortega@gmail.com",
  },
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Frontend Developer",
    subtitle: "TechSolutions",
    description:
      "Colabora con un equipo dinámico para desarrollar interfaces de usuario atractivas y funcionales que impulsen el éxito de nuestros clientes en el mundo digital.",
    date: "Nov 2023 ",
  },
  {
    id: 2,
    title: "Creador de Experiencias Digitales",
    subtitle: "PixelCrafters",
    description:
      "Trabaja en proyectos emocionantes que desafían los límites de la creatividad y la tecnología. Únete a nosotros mientras creamos experiencias digitales cautivadoras que inspiran y cautivan a nuestros usuarios.",
    date: "May 2021",
  },
  {
    id: 3,
    title: "Especialista en Desarrollo Frontend",
    subtitle: "CodeForge Solutions",
    description:
      "Como desarrollador frontend, tendrás la oportunidad de colaborar en proyectos diversos y desafiantes que te permitirán expandir tus habilidades y dejar tu huella en el mundo digital.",
    date: "Ago 2019",
  },
  {
    id: 4,
    title: "Prácticas Grado",
    subtitle: "WebWizards Inc.",
    description:
      "Únete a nosotros mientras creamos sitios web y aplicaciones interactivas que sorprenden y deleitan a nuestros clientes. Si tienes pasión por el diseño y la programación, y disfrutas colaborar en un entorno creativo, ¡queremos conocerte!        ",
    date: "Mar 2018",
  },
];


export const dataPortfolio = [
  {
    id: 1,
    title: "Portfolio Personal",
    image: "/project-1.png",
    urlGithub: "https://github.com/Charleta/Portfolio-page",
    urlDemo: "https://portfolio-page-uzcc.vercel.app/",
  },
];

