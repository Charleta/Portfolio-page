

import type { Metadata } from "next"; // sirve para definir el tipo de dato de la metadata, como el titulo y la descripcion
import {  Space_Grotesk } from "next/font/google";
import "./globals.css";
import NavBar from "./Components/navBar";
import Header from "./Components/header";
import CoverParticles from "./Components/cover-particles";

const SpaceGrotesk = Space_Grotesk({
  // aca tenemos una variable que se le asigna una funcion, que es la funcion Urbanist, esta funcion recibe un objeto con las propiedades que se le quieren asignar a la fuente
  subsets: ["latin"],
});




export const metadata: Metadata = {
  title: "Charleta Landing page",
  description: "Landing page made by Charleta",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="es">
      <body className={`${SpaceGrotesk.className}`}>
        <CoverParticles />
        <Header />
        <NavBar />

        {children}
      </body>
    </html>
  );
}
