import PropTypes from 'prop-types';

const PopularTouristSpot = ({spot}) => {
  const {_id, photoBanner, placeName, description} = spot;

  console.log(description.length);
  return (
    <div className='flex flex-col shadow-dark rounded-sm'>
      <div className='h-56 xl:h-64'>
        <img src={photoBanner} alt={placeName} className='object-cover h-full rounded-sm'/>
      </div>
       
        <div className='flex-grow p-4'>
          <h4>{placeName}</h4>
          <p className='text-justify mt-4'>{
          description.length>200 ? description.slice(0,200) : description
          }</p>

        </div>
        <p className='font-bold text-[var(--clr-accent)] border-b-2 border-[var(--clr-accent)] w-fit cursor-pointer hover:scale-125 duration-500 m-6'>View Details</p>
       
    </div>
  );
};

PopularTouristSpot.propTypes ={
  spot: PropTypes.object
}

export default PopularTouristSpot;