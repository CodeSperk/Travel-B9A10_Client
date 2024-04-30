import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  return (
    <>
      <Link to={`/allSpots/${country.country}`}>
        {/* Country Card */}
        <div className="relative bg-black rounded-md">
          <img
            src={country.photo}
            alt=""
            className="opacity-80 hover:opacity-40 rounded-md"
          />
          <p className="absolute bottom-0 bg-black bg-opacity-80 h-24 p-2 lg:p-4 text-start duration-50 rounded-b-md text-sm lg:text-base">
            {country.description}
          </p>
          <h4 className="absolute top-6 w-full text-white">
            {country.country}
          </h4>
        </div>
      </Link>
    </>
  );
};

CountryCard.propTypes = {
  country: PropTypes.object,
};
export default CountryCard;
