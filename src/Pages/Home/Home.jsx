import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import PopularTouristSpot from "./PopularTouristSpot";
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import Services from "./Services";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/loading.json";
import { Slide, Zoom } from "react-awesome-reveal";

const Home = () => {
  const touristSpots = useLoaderData();
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(touristSpots.length);
  useEffect(() => {
    setLoading(true);
    fetch("https://adventura-api-data.vercel.app/countries")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setCountries(data);
      });
  }, []);

  return (
    <div>
      <header>
        <Banner></Banner>

        <div className="h-[10vh] bg-[var(--clr-accent)] py-6 hidden md:flex justify-center items-center">
          <div className="max-w-[1440px] mx-auto px-4 md:px-12 xl:px-16 flex items-center justify-center gap-4 ">
            <div className="flex gap-1 text-sm xl:text-base">
              <input
                type="text"
                placeholder="Where to go?"
                className="py-2 rounded px-4 outline-none"
              />
              <input
                type="text"
                placeholder="When to go?"
                className="py-2 rounded px-4 outline-none"
              />
              <input
                type="number"
                placeholder="Number  of Members?"
                className="py-2 rounded px-4 outline-none"
              />
              <button className="py-2 px-6 text-[var(--clr-accent)] font-bold bg-[var(--clr-accent)] rounded text-white border-2 hover:scale-105 duration-700">
                Search
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Tourist spot section */}

        <section className="max-w-[1440px] mx-auto px-4 md:px-12 xl:px-16">
          {touristSpots.length === 0 ? (
            <div className="flex justify-center items-center h-10 w-28 mx-auto">
              {" "}
              <Lottie animationData={loadingAnimation} loop={true} />
            </div>
          ) : (
            <>
              <p className="text-center text-lg">Tourist Spots</p>
              <h2 className="text-center ">Explore Popular Destinations</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 md:mt-12">
                {touristSpots.slice(0, 6).map((spot) => (
                  <PopularTouristSpot
                    key={spot._id}
                    spot={spot}
                  ></PopularTouristSpot>
                ))}
              </div>
            </>
          )}
        </section>

        {/* Discount Section */}
        <section className="flex flex-col md:flex-row md:gap-0 h-[550px] md:h-[440px] lg:h-[620px]">
          {/* offer left */}
          <div className="h-1/2 md:h-full w-full md:w-1/2 border-2">
            <div
              className="relative text-center h-full w-full bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/vxgbFrc/bukhara-banner.jpg)",
              }}
            >
              <div className="absolute bg-black top-0 w-full h-full opacity-40"></div>
              <div className="absolute w-full h-full flex flex-col gap-4 justify-center items-center">
                <h1 className="text-white z-20 text-7xl md:text-9xl">50%</h1>
                <h2 className="text-white">Discount</h2>
              </div>
            </div>
          </div>

          {/* offer right */}
          <div className="h-1/2 md:h-full w-full md:w-1/2">
            <div
              className="relative  bg-cover bg-no-repeat bg-center shadow-md h-full"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/xFLWb6P/photo-1436491865332-7a61a109cc05.jpg)",
              }}
            >
              <div className="bg-white bg-opacity-90 top-0 w-full h-full flex flex-col justify-center md:pr-24 p-4 md:p-8 lg:p-12 py-6">
                <h3>Great Deals</h3>
                <p className="text-justify mt-2 mb-4">
                  Save big on unforgettable experiences! Explore our exclusive
                  discounts and enjoy incredible savings on your next adventure.
                </p>

                <h6>Join Newsletter</h6>
                <p>To receave our best deal.</p>
                <input
                  type="email"
                  placeholder="Your email"
                  className="py-2 px-2 rounded border-2 border-[var(--clr-accent)] outline-none text-black max-w-96"
                />

                <input
                  type="submit"
                  value="Subscribe"
                  className="bg-[var(--clr-accent)] py-1.5 px-4 rounded hover:scale-110 duration-500 cursor-pointer w-fit mt-2 text-white"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Countries section */}

        <section className=" text-center w-full">
          <div className="max-w-[1440px] mx-auto px-4 md:px-12 xl:px-16">
            <p className="text-center text-lg">Countries</p>
            <h2 className="text-center">Explore Your Destination</h2>

            {loading && (
              <div className="flex justify-center items-center h-10 w-28 mx-auto">
                {" "}
                <Lottie animationData={loadingAnimation} loop={true} />
              </div>
            )}
            <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 justify-center items-center">
              <Zoom duration={1200} triggerOnce>
                {countries.map((country) => (
                  <CountryCard
                    key={country._id}
                    country={country}
                  ></CountryCard>
                ))}
              </Zoom>
            </div>
          </div>
        </section>

        {/* Service Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-12 xl:px-16 mb-[4rem] md:mb-[7rem]">
          <div className=" bg-[#ececf2] py-12 md:py-16 rounded-lg px-4 md:px-10 ">
            <p className="text-center text-lg">Our Services</p>
            <h2 className="text-center">We offer the following services</h2>
            <Zoom duration={1500} triggerOnce>
              <Services></Services>
            </Zoom>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
