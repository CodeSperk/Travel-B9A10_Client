import { useParams } from "react-router-dom";
import CountrySpotsCard from "./CountrySpotsCard";
import { Zoom } from "react-awesome-reveal";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/loading.json";

const CountrySpots = () => {
  const { country } = useParams();
  const [loading, setLoading] = useState(false);
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(`https://adventura-api-data.vercel.app/allSpots/${country}`)
    .then(res => res.json())
    .then(data => {
    setLoading(false);
      setCountryData(data);
    })
  },[country])


  useEffect(() => {
    setLoading(true);
    fetch(`https://adventura-api-data.vercel.app/allSpots/${country}`)
    .then(res => res.json())
    .then(data => {
      setLoading(false);
      setCountryData(data)
    })
  },[country]);
  
  const banner = countryData?.length > 0 ? countryData[0].photoBanner : "https://i.ibb.co/p1CnHBv/banner-4.jpg";
  
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
          <h1 className="text-white "> Explore Breathtaking Tourist Attractions  of {country}<br/></h1>
          </Zoom>
        </div>
      </header>
            {
        loading ? (<div className="flex justify-center items-center h-[90vh] w-28 mx-auto text-center">
      
        <Lottie animationData={loadingAnimation} loop={true} />
      </div>) :( <>
    <section className="mb-[4rem] md:mb-[7rem] mt-8 md:mt-12">
          {/* Places */}
          { countryData.length > 0 ? (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countryData?.map((spot) => (
            <CountrySpotsCard key={spot._id} spot={spot}></CountrySpotsCard>
          ))}
        </div> ) : <div className="text-center"> <h2 className="text-[var(--clr-accent)]"> Coming Soon ......</h2></div> 
        }
         
    </section>
        
        </>)
      }

        </div>
  );
};

export default CountrySpots;