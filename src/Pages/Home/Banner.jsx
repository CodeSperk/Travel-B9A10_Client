import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation} from 'swiper/modules';
import 'swiper/css/bundle';
import "./bannerSwiper.css";
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className='homeBanner relative'>
      <Swiper 
      navigation={true} 
      modules={[Navigation, Autoplay]}
      className="mySwiper"
      slidesPerView={1}
      autoplay={{delay:5000, pauseOnMouseEnter:true}}
      id='swiper'
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/dG4SgBR/banner-2.jpg" alt="Home banner4"/>
       
            <div className="overlay h-full w-full max-auto px-12 xl:px-16 text-white flex justify-center items-center">
           <h1 className="text-white uppercase">Welcome ! <br />Discover Your Next Trip</h1>
            </div>

        </SwiperSlide>

      <SwiperSlide>
         <img src="https://i.ibb.co/6bfb9Rx/banner-5.jpg" alt="Home banner1" /> 
         <div className="overlay h-full w-full max-auto px-12 xl:px-16 text-white flex justify-center items-center">
           <h1 className="text-white uppercase">Unleash Your Travel Wanderlust</h1>
            </div>
          
      </SwiperSlide>
      
      <SwiperSlide>  
          <img src="https://i.ibb.co/3dP50kh/banner-1.jpg" alt="Home banner2" />    
          <div className="overlay h-full w-full max-auto px-12 xl:px-16 text-white flex justify-center items-center">
           <h1 className="text-white uppercase">Find Your Path to Travel</h1>
            </div>
      </SwiperSlide>

      <SwiperSlide>
          <img src="https://i.ibb.co/9hwwt0v/banner-3.jpg" alt="Home banner3" />
          <div className="overlay h-full w-full max-auto px-12 xl:px-16 text-white flex justify-center items-center">
           <h1 className="text-white uppercase">Escape to New Travel Horizons</h1>
          </div>
            
      </SwiperSlide>
      <p className='absolute top-1/2 -translate-y-1/2 text-white right-0 z-10 bg-[#2D2F81] p-2 md:pl-2 md:p-3 rounded-l-md'><FaArrowCircleRight className='text-2xl'/></p>
      <p className='absolute top-1/2 -translate-y-1/2 text-white left-0 z-10 bg-[#2D2F81] p-2 md:p-3 md:pl-2 rounded-r-md'><FaArrowCircleLeft className='text-2xl'/></p>
      </Swiper>
    </div>
  );
};

export default Banner;