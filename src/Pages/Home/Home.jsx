import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import PopularTouristSpot from "./PopularTouristSpot";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Lottie from "lottie-react";
import CountryCard from "./CountryCard";

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
      </main>
    </div>
  );
};

export default Home;
