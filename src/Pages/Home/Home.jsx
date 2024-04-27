import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import PopularTouristSpot from "./PopularTouristSpot";

const Home = () => {
  const touristSpots = useLoaderData();

  return (
    <div>
      <header className="max-w-[1440px] mx-auto px-4 md:px-12 xl:px-16">
        <Banner></Banner>
      </header>

      <main>
        {/* Tourist spot section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-12 xl:px-16">
          <p className="text-center text-lg">Tourist Spots</p>
          <h2 className="text-center ">Explore Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 md:mt-12">
         {
            touristSpots.slice(0,6).map(spot => <PopularTouristSpot key={spot._id} spot={spot}></PopularTouristSpot> )
         } 
        </div>

        </section>

        {/* Countries section */}
        <section >
          <p className="text-center text-lg">Countries</p>
          <h2 className="text-center ">Explore Our Destinations</h2>
          <p className="text-[var(--clr-secondary)]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati totam tempora saepe quos velit quidem dolore pariatur blanditiis quis officiis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eveniet voluptatum veritatis, earum magnam aliquid eum cupiditate nihil rem saepe dignissimos. Atque dolores tempora, necessitatibus consectetur veritatis et temporibus explicabo, alias aliquid asperiores sunt obcaecati, aperiam eos cum maxime quo fugiat debitis totam aliquam ratione quis suscipit incidunt. Dolor, repudiandae.
          </p>
        </section>
      </main>
       
    </div>
  );
};

export default Home;