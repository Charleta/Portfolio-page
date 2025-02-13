import ContainerPage from "@/app/Components/container";
import TransitionPage from "@/app/Components/transition-page";
import PortfolioBox from "@/app/Components/portfolio-box";
import { dataPortfolio } from "@/data";

const PortfolioPage = () => {

    return (
      <ContainerPage>
        <TransitionPage />

        <div className="flex flex-col justify-center h-full">
          <h1
            className="text-2xl landig-tight text-center md:text-left
             md:text-5xl md:mt-10"
          >
            Ultimos trabajos{" "}
            <span className="font-bold text-orange-500">realizados</span>
          </h1>

          <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 sm:grid-cols-2 md:grid-cols-4">
            {dataPortfolio.map((data) => (
              <PortfolioBox key={data.id} data={data}/>
            ))}
          </div>
        </div>
      </ContainerPage>
    );
    }

    export default PortfolioPage;