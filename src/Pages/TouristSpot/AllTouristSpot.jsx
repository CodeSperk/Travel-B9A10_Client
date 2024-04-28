import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllSpotsCards from "./AllSpotsCards";
import { IoCalendarNumberOutline, IoLocationSharp } from "react-icons/io5";
import { RiGroupLine } from "react-icons/ri";

const AllTouristSpot = () => {
  const allSpots = useLoaderData();
  const [showAll, setShowAll] = useState(false);
  const [spotsToDisplay, setSpotsToDisplay] = useState(allSpots);

  let spotsLength = 6;
  if (showAll) {
    spotsLength = spotsToDisplay.length;
  }

  const handleSort = (e) => {
    const selectedValue = e.target.value;
    let sorted = [...spotsToDisplay];
    if(selectedValue === "ascending"){
      sorted.sort((a, b) => parseInt(a.cost)- parseInt(b.cost));
    }
    if(selectedValue === "descending"){
      sorted.sort((a, b) => parseInt(b.cost)- parseInt(a.cost));
    }
    setSpotsToDisplay(sorted);
  };

  return (
    <div>
      {/* header section */}
      <div className="">
      <header
        className="relative text-center h-48 md:h-64 xl:h-80 w-full bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: "url(https://i.ibb.co/vxgbFrc/bukhara-banner.jpg)",
        }}
      >
        <div className="absolute bg-black top-0 w-full h-full opacity-40 "></div>
        <div className="absolute w-full h-full flex flex-col gap-4 justify-center items-center">
          <h1 className="text-white z-20">Our Places</h1>

          {/* to sort by average_cost */}
          <select
            onChange={handleSort}
            name="country"
            defaultValue="null"
            className="outline-0 bg-white border-2 border-[(var(clr-secondary))] rounded-md p-2 w-72 space-y-4 font-bold text-[var(--clr-accent)]"
          >
            <option disabled value="null">
              Sort Places by
            </option>
            <option value="ascending">Average Cost Low to High</option>
            <option value="descending">Average Cost High to Low</option>
          </select>
        </div>
      </header>
      </div>
      <main>
        <section className="max-w-[1440px] mx-auto px-4 md:px-12 xl:px-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-4 items-start">
          {/* Places */}
          <div className="md:col-span-2 lg:col-span-3 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {spotsToDisplay?.slice(0, spotsLength).map((spot) => (
                <AllSpotsCards key={spot._id} spot={spot}></AllSpotsCards>
              ))}
            </div>

            {spotsToDisplay.length > 6 && (
              <button
                className="text-white text-lg bg-[var(--clr-accent)] py-2 px-8 rounded mt-6 md:mt-8 w-fit mx-auto"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Show Less spots" : "Show All spots"}
              </button>
            )}
          </div>
          
          {/* right */}
          <div className="border border-text-[var(--clr-accent)] shadow-sm bg-white px-4 py-8 md:px-6 md:py-12 space-y-10"> 
            {/* where */}
            <div className="border-b-2 pb-1">
              <h5 className="font-bold">Where</h5>
              <div className="relative mt-2">
              <input type="text" placeholder="Panjshanbe Bazaar" className="border-none outline-none w-full pr-6 pl-1" />
              <IoLocationSharp className="text-[var(--clr-accent)] absolute top-1/2 -translate-y-1/2 right-0 text-2xl "/>
              </div> 
            </div>

            {/* Date */}
            <div className="border-b-2 pb-1">
              <h5 className="font-bold">When</h5>
              <div className="relative mt-2">
              <input type="text" placeholder="27th april, 2024" className="border-none outline-none w-full pr-6 pl-1" />
              <IoCalendarNumberOutline className="text-[var(--clr-accent)] absolute top-1/2 -translate-y-1/2 right-0 text-xl "/>
              </div> 
            </div>

        
            {/* Guest */}
            <div className="border-b-2 pb-1">
              <h5 className="font-bold">Guests</h5>
              <div className="relative mt-2">
              <input type="number" placeholder="05" className="border-none outline-none w-full pr-6 pl-1" />
              <RiGroupLine className="text-[var(--clr-accent)] absolute top-1/2 -translate-y-1/2 right-0 text-xl "/>
              </div> 
            </div>

          </div>
        </section>
      </main>
    </div>
  );
};

export default AllTouristSpot;
