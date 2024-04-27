import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PopularTouristSpot = ({ spot }) => {
  const { _id, photoBanner, placeName, description } = spot;

  return (
    <div className="flex flex-col shadow-dark rounded-sm">
      <div className="h-56 xl:h-64">
        <img
          src={photoBanner}
          alt={placeName}
          className="object-cover h-full rounded-sm"
        />
      </div>

      <div className="flex-grow p-4">
        <h4>{placeName}</h4>
        <p className="text-justify mt-4">
          {description.length > 200 ? description.slice(0, 200) : description}
        </p>
      </div>

      <Link to={`/details/${_id}`}>
        <button className="font-bold text-[var(--clr-accent)] border-b-2 border-[var(--clr-accent)] w-fit cursor-pointer hover:scale-110 duration-500 m-6">
          View Details
        </button>
      </Link>
    </div>
  );
};

PopularTouristSpot.propTypes = {
  spot: PropTypes.object,
};

export default PopularTouristSpot;
