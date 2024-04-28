import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import PopularTouristSpot from "./PopularTouristSpot";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Lottie from "lottie-react";
import CountryCard from "./CountryCard";
import Services from "./Services";

const Home = () => {
  const touristSpots = useLoaderData();
  const [countries, setCountries] = useState([]);
  const { loading } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5000/countries")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  return (
    <div>
      <header>
        <Banner></Banner>
      </header>

      <main>
        <Lottie loop={true} />

        {/* Tourist spot section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-12 xl:px-16">
          <p className="text-center text-lg">Tourist Spots</p>
          <h2 className="text-center ">Explore Popular Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 md:mt-12">
            {loading && <h1>Loading</h1>}

            {touristSpots.slice(0, 6).map((spot) => (
              <PopularTouristSpot
                key={spot._id}
                spot={spot}
              ></PopularTouristSpot>
            ))}
          </div>
        </section>

        {/* Discount Section */}
        <section className="md:flex h-96 md:h-[440px] lg:h-[620px]">
          {/* offer left */}
          <div className="md:w-1/2 h-64 md:h-full">
            <div
              className="relative text-center h-full w-full bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/vxgbFrc/bukhara-banner.jpg)",
              }}
            >
              <div className="absolute bg-black top-0 w-full h-full opacity-40"></div>
              <div className="absolute w-full h-full flex flex-col gap-4 justify-center items-center">
                <h1 className="text-white z-20 text-9xl">50%</h1>
                <h2 className="text-white">Discount</h2>
              </div>
            </div>
          </div>

          {/* offer right */}
          <div className="relative md:w-1/2 bg-cover bg-no-repeat bg-center shadow-md h-56 md:h-full" style={{backgroundImage: "url(https://i.ibb.co/xFLWb6P/photo-1436491865332-7a61a109cc05.jpg)"}}>
            
            <div className="absolute bg-white bg-opacity-90 top-0 w-full h-full flex flex-col justify-center md:pr-24 p-4 md:p-8 lg:p-12">
            <h3>Great Deals</h3>
            <p className="text-justify mt-2 mb-4">
              Save big on unforgettable experiences! Explore our exclusive
              discounts and enjoy incredible savings on your next adventure.
            </p>

            <h6>Join Newsletter</h6>
            <p>To receave our best deal.</p>
            <input type="email" placeholder="Your email" className="py-2 px-2 rounded border-2 border-[var(--clr-accent)] outline-none text-black max-w-96"/>

            <input type="submit" value="Subscribe" className="bg-[var(--clr-accent)] py-1.5 px-4 rounded hover:scale-110 duration-500 cursor-pointer w-fit mt-2 text-white"/>
            </div>

          </div>
        </section>

        {/* Countries section */}

        <section className=" text-center w-full">
          <div className="max-w-[1440px] mx-auto px-4 md:px-12 xl:px-16">
            <header>
              <p className="text-center text-lg">Countries</p>
              <h2 className="text-center">Explore Your Destination</h2>
            </header>

            <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 justify-center items-center">
              {countries.map((country) => (
                <CountryCard key={country._id} country={country}></CountryCard>
              ))}
            </div>
          </div>
        </section>


        {/* Service Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-12 xl:px-16">
          <div className=" bg-blue-50 py-12 md:py-16 rounded-lg px-4 md:px-10">
        <header>
              <p className="text-center text-lg">Our Services</p>
              <h2 className="text-center">We offer the following services</h2>
        </header>
        
        <Services></Services>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
