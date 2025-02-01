import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import NavBar from "./Components/navBar";
import Header from "./Components/header";

const urbanist = Urbanist({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Charleta Landing page",
  description: "Landing page made by Charleta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${urbanist}`}>
        <Header/>
        <NavBar/>
        
        {children}
      </body>
    </html>
  );
}
