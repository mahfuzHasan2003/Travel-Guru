import { useContext, useRef } from "react";
import { TravelContext } from "../provider/TravelPlaceProvider";
import { GrFormNextLink, GrFormPreviousLink, GrLinkNext } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Home.css";

// Import Swiper styles
// import "swiper/css/effect-coverflow";
// import "swiper/css/navigation";
// import required modules
import { EffectCoverflow } from "swiper/modules";
const Home = () => {
   const { places, activeIndex, setActiveIndex } = useContext(TravelContext);
   const { title, description, imageURL } = places[activeIndex];
   const swiperRef = useRef(null);

   return (
      <div className='h-full grid place-items-center text-white'>
         <div className='grid lg:grid-cols-2 gap-5'>
            <div>
               <h1 className='text-7xl font-black font-title tracking-wider mb-5'>
                  {title}
               </h1>
               <p>{description.slice(0, 200)} ....</p>
               <button className='flex gap-3 items-center px-5 py-2 bg-primary font-semibold rounded-sm mt-5'>
                  Booking <GrLinkNext />
               </button>
            </div>
            <div className='w-full'>
               <Swiper
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={"auto"}
                  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                  coverflowEffect={{
                     rotate: 50,
                     stretch: 0,
                     depth: 100,
                     modifier: 1,
                     slideShadows: true,
                  }}
                  pagination={true}
                  modules={[EffectCoverflow]}
                  className='mySwiper'>
                  {places.map((place) => (
                     <SwiperSlide
                        key={place.id}
                        className='aspect-[3/4] max-w-[300px] relative'>
                        <img
                           src={place.imageURL}
                           alt={place.title}
                           className='h-full w-full object-cover rounded-md'
                        />
                        <div
                           className='absolute flex items-end p-5 inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] rounded-md'
                           id='overlay'>
                           <h2 className='text-2xl font-title tracking-wider'>
                              {place.title}
                           </h2>
                        </div>
                     </SwiperSlide>
                  ))}
               </Swiper>

               <div className='flex gap-5 mt-5 mx-auto justify-center'>
                  <GrFormPreviousLink
                     onClick={() => swiperRef.current.slidePrev()}
                     className='bg-gray-400 rounded-sm cursor-pointer'
                     size={40}
                  />
                  <GrFormNextLink
                     onClick={() => swiperRef.current.slideNext()}
                     className='bg-gray-400 rounded-sm cursor-pointer'
                     size={40}
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Home;
