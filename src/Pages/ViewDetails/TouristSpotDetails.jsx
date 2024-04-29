import { FaLocationDot } from "react-icons/fa6";
import { IoCalendarNumberOutline, IoLocationSharp } from "react-icons/io5";
import { MdGroupAdd, MdOutlineEmojiTransportation } from "react-icons/md";
import { RiGroupLine } from "react-icons/ri";
import { TfiAlarmClock } from "react-icons/tfi";
import { TiGroup } from "react-icons/ti";
import { useLoaderData } from "react-router-dom";

const TouristSpotDetails = () => {
  const touristSpot = useLoaderData();
  const {
    photoBanner,
    photo,
    placeName,
    country,
    location,
    description,
    cost,
    season,
    travelTime,
    totalVisitor,
    userName,
  } = touristSpot;

  return (
    <div>
<header className="max-w-[1440px] mx-auto px-4 md:px-12 xl:px-16">
<div
        className="relative text-center h-64 md:h-80 xl:h-96 w-full bg-cover bg-no-repeat bg-center rounded-xl"
        style={{
          backgroundImage: `url(${photoBanner})`,
        }}
      >
        <div className="absolute bg-black top-0 w-full h-full opacity-40 rounded-xl"></div>
        <div className="absolute w-full h-full flex flex-col gap-4 justify-center items-center">
          <h1 className="text-white z-20">{placeName}</h1>

         
      
        </div>
      </div>
      </header>


      <main className="max-w-[1440px] mx-auto px-4 md:px-12 xl:px-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 md:mt-12 mb-[4rem] md:mb-[7rem]">
        {/* Details Section */}
        <div className="md:col-span-2 lg:col-span-3">
          <div className="flex items-start gap-2">
            <h4 className="flex-1">{placeName}</h4>
            <p className="bg-[var(--bg-primary)] text-[var(--clr-accent)] px-2 rounded font-bold py-[1px] mt-2">
              ${cost}
            </p>
          </div>

          <small className="text-base">
            {location}, {country}
          </small>

          {/* description */}
          <div>
            <h6 className="mt-6 mb-2">Description</h6>
            <p className="text-justify">{description}</p>
          </div>

          {/* season */}
          <p className="mt-2">
            <span className="text-[var(--clr-accent)] font-bold">
              Season :{" "}
            </span>{" "}
            {season}
          </p>

          <div className="flex flex-col md:flex-row gap-3 md:gap-6 w-full mt-6">
            {/* Duration */}
            <div className="flex gap-3 items-center">
              <TfiAlarmClock className="text-4xl text-[var(--clr-accent)]" />
              <p>{travelTime} travel</p>
            </div>

            {/* Visitor */}
            <div className="flex gap-3 items-center">
              <MdGroupAdd className="text-5xl text-[var(--clr-accent)]" />
              <p>
                {totalVisitor}
                <sup> +</sup> people visited
              </p>
            </div>

            {/* Safe and  conditional */}
            <div className="flex gap-3 items-center">
              <MdOutlineEmojiTransportation className="text-5xl text-[var(--clr-accent)]" />
              <p>Safe and conditional</p>
            </div>
          </div>
        </div>

        {/* Aside right */}
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
      </main>
    </div>
  );
};

export default TouristSpotDetails;
