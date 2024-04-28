import { useLoaderData } from "react-router-dom";

const TouristSpotDetails = () => {
  const touristSpot = useLoaderData();
  console.log(touristSpot);

  return (
    <div>
      <img src={touristSpot.photoBanner} alt="" />
    </div>
  );
};

export default TouristSpotDetails;