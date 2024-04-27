import { useLoaderData } from "react-router-dom";

const TouristSpotDetails = () => {
  const touristSpot = useLoaderData();
  console.log(touristSpot);

  return (
    <div>
      <img src={touristSpot.photo} alt="" />
    </div>
  );
};

export default TouristSpotDetails;