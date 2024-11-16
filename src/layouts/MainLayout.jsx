import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { TravelContext } from "../provider/TravelPlaceProvider";

const MainLayout = () => {
   const { pathname } = useLocation();
   const { places, activeIndex } = useContext(TravelContext);
   const bgImage = {
      backgroundImage:
         pathname === "/" ? `url(${places[activeIndex].imageURL})` : null,
   };
   return (
      <div
         style={bgImage}
         className='relative h-dvh bg-cover bg-center font-body'>
         {pathname === "/" ? (
            <div className='absolute inset-0 bg-black opacity-50'></div>
         ) : null}
         <div className='relative w-11/12 max-w-7xl mx-auto h-full flex flex-col'>
            <Navbar />
            <div className='flex-1 my-10 overflow-y-auto'>
               <Outlet />
            </div>
         </div>
      </div>
   );
};

export default MainLayout;
