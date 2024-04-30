import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CountrySpotsCard = ({spot}) => {
  const { _id, photoBanner, placeName, country, location, description, cost, season} = spot;

  return (
    <div className="flex flex-col shadow-dark rounded-md">
      <div className="h-56 xl:h-64">
        <img
          src={photoBanner}
          alt={placeName}
          className="object-cover h-full rounded-t-md"
        />
      </div>

      <div className="flex-grow p-4">
        <div className='flex items-start gap-2'>
        <h4 className='flex-1'>{placeName}</h4>
        
        <p className='bg-[var(--bg-primary)] text-[var(--clr-accent)] px-2 rounded font-bold py-[1px] mt-2'>${cost}</p>
        </div>
        <p>{description.slice(0, 120)}...</p>
       

        <div className='space-y-2 mt-4'>
          <p><span className='font-medium text-[var(--clr-accent)]'>Country : </span> {country}</p>
          <p><span className='font-medium text-[var(--clr-accent)]'>Location : </span> {location} per year</p>
          <p><span className='font-medium text-[var(--clr-accent)]'>Season : </span> {season}</p>
        </div>
      </div>

      <Link to={`/details/${_id}`}>
        <button className="font-bold text-[var(--clr-accent)] border-b-2 border-[var(--clr-accent)] w-fit cursor-pointer hover:scale-110 duration-500 mx-6 mb-6">
          View Details
        </button>
      </Link>
    </div>
  );
};

CountrySpotsCard.propTypes= {
  spot: PropTypes.object
}

export default CountrySpotsCard;