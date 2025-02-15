"use client"; //usamos use client para que el codigo que se ejecuta
//sea del lado del cliente y no del lado del servidor

import CoverParticles  from "./Components/cover-particles";
import TransitionPage from "./Components/transition-page";
import Introduction from "./Components/introduction";

export default function Home() {
  return (
    <main>
      <TransitionPage/>
      <div className="flex min-h-[100vh] bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <Introduction /> 
      </div>
    </main>
  );
}
