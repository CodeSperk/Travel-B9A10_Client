import { useLoaderData } from "react-router-dom";
import CountrySpotsCard from "./CountrySpotsCard";
import { Zoom } from "react-awesome-reveal";

const CountrySpots = () => {
  const countrySpots = useLoaderData();


  const banner = countrySpots.length>0 ? countrySpots[0].photoBanner :  "countrySpots[0].photoBanner";

  return (
    <div className="min-height-main max-w-[1440px] mx-auto px-4 md:px-12 xl:px-16">
      
      <header
        className="relative text-center h-48 md:h-64 xl:h-80 w-full bg-cover bg-no-repeat bg-center rounded-xl"
        style={{
          backgroundImage:  `url(${banner})`,
        }}
      >
        <div className="absolute bg-black rounded-xl top-0 w-full h-full opacity-40 "></div>
        <div className="absolute w-full h-full flex flex-col gap-4 justify-center items-center">
          <Zoom duration={1500}>
          <h1 className="text-white "> Explore Breathtaking Tourist Attractions  of <br/> {countrySpots[0].country}</h1>
          </Zoom>

        </div>
      </header>
    

    <section className="mb-[4rem] md:mb-[7rem]">
          {/* Places */}
         {
          countrySpots.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countrySpots?.map((spot) => (
            <CountrySpotsCard key={spot._id} spot={spot}></CountrySpotsCard>
          ))}
        </div> : <div className="text-center"> <h2 className="text-[var(--clr-accent)]"> Coming Soon ......</h2></div>
         }
            
      
        </section>
        </div>
  );
};

export default CountrySpots;