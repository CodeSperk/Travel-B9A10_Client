import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AllSpotsCards = ({spot}) => {
  const { _id, photoBanner, placeName, cost, totalVisitor, season, travelTime } = spot;

  return (
    <div className="flex flex-col shadow-dark rounded-md">
      <div className="h-56 xl:h-64 relative">
        <img
          src={photoBanner}
          alt={placeName}
          className="object-cover h-full rounded-t-md"
        />
        <p className='bg-[var(--bg-primary)] text-[var(--clr-accent)] px-2 rounded-sm font-bold py-[1px] mt-2 absolute bottom-1 right-1'>${cost}</p>
      </div>

      <div className="flex-grow p-4">
      
        <h4 className='flex-1'>{placeName}</h4>


        <div className='space-y-2 mt-4'>
          <p><span className='font-medium text-[var(--clr-accent)]'>Visitor : </span> {totalVisitor} per year</p>
          <p><span className='font-medium text-[var(--clr-accent)]'>Season : </span> {season}</p>
          <p><span className='font-medium text-[var(--clr-accent)]'>Duration : </span> {travelTime}</p>
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

AllSpotsCards.propTypes= {
  spot: PropTypes.object
}

export default AllSpotsCards;