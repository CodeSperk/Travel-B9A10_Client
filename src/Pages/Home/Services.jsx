import { FaHotel, FaSkiing } from "react-icons/fa";
import { FaCarRear } from "react-icons/fa6";
import { GrGroup, GrMapLocation } from "react-icons/gr";
import { LuPlane } from "react-icons/lu";

const Services = () => {
  return (
    <div className=" mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* service-1 */}
      <div className="flex gap-6">
      <GrMapLocation className="text-[var(--clr-accent)] text-4xl mt-2"/>
      <div className="flex flex-col justify-between">
        <h4>Tour Package</h4>
        <p className="mt-2 mb-4 flex-grow">Explore iconic landmarks and hidden gems with guided tours, accommodations, and local experiences included.</p>
        <a href="#" className="text-[var(--clr-accent)]">Learn More</a>
      </div>
      </div>

      {/* service-2 */}
      <div className="flex gap-6">
      <LuPlane className="text-[var(--clr-accent)] text-4xl mt-2"/>
      <div className="flex flex-col justify-between">
        <h4>Air Ticketing</h4>
        <p className="mt-2 mb-4 flex-grow">Book hassle-free flights worldwide, with flexible options and 24/7 customer support for convenience.</p>
        <a href="#" className="text-[var(--clr-accent)]">Learn More</a>
      </div>
      </div>


      {/* service-3 */}
      <div className="flex gap-6">
      <FaSkiing className="text-[var(--clr-accent)] text-4xl mt-2"/>
      <div className="flex flex-col justify-between">
        <h4>Ski Experiences</h4>
        <p className="mt-2 mb-4 flex-grow">Enjoy thrilling slopes, cozy chalets, and expert instruction in renowned ski destinations around the globe.</p>
        <a href="#" className="text-[var(--clr-accent)]">Learn More</a>
      </div>
      </div>


      {/* service-4 */}
      <div className="flex gap-6">
      <FaHotel className="text-[var(--clr-accent)] text-4xl mt-2"/>
      <div className="flex flex-col justify-between">
        <h4>Hotel Accommodations</h4>
        <p className="mt-2 mb-4 flex-grow">Choose from a variety of accommodations suited to your budget and preferences for a comfortable stay.</p>
        <a href="#" className="text-[var(--clr-accent)]">Learn More</a>
      </div>
      </div>

      {/* service-5 */}
      <div className="flex gap-6">
      <FaCarRear className="text-[var(--clr-accent)] text-4xl mt-2"/>
      <div className="flex flex-col justify-between">
        <h4>Car Rentals</h4>
        <p className="mt-2 mb-4 flex-grow">Discover destinations at your own pace with convenient rental options and a range of vehicle choices.</p>
        <a href="#" className="text-[var(--clr-accent)]">Learn More</a>
      </div>
      </div>

      {/* service-6 */}
      <div className="flex gap-6">
      <GrGroup className="text-[var(--clr-accent)] text-4xl mt-2"/>
      <div className="flex flex-col justify-between">
        <h4>Group Travel Planning: </h4>
        <p className="mt-2 mb-4 flex-grow">ILet us handle the logistics for your group trip, ensuring a seamless and memorable experience.</p>
        <a href="#" className="text-[var(--clr-accent)]">Learn More</a>
      </div>
      </div>




    </div>
  );
};

export default Services;