import { Link, NavLink, useLocation } from "react-router-dom";
import logoBlack from "../assets/icons/logo-black.png";
import logoWhite from "../assets/icons/logo-white.png";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
   const { pathname } = useLocation();
   const logo = pathname === "/" ? logoWhite : logoBlack;
   return (
      <nav className={`flex justify-between items-center py-5`}>
         <div>
            <Link to='/'>
               <img
                  src={logo}
                  className='w-20 drop-shadow-[0px_0px_5px_rgba(255,255,255,0.7)]'
                  alt='Travel Guru'
               />
            </Link>
         </div>
         {pathname === "/" ? (
            <div className='relative'>
               <input
                  type='text'
                  className='bg-[#ffffff31] border rounded-sm py-1 px-2 pl-8 outline-none  relative text-white placeholder:text-gray-200'
                  placeholder='Search your Destination...'
               />
               <IoSearch
                  className='absolute left-1 top-1/2 -translate-y-1/2 text-white font-bold'
                  size={20}
               />
            </div>
         ) : (
            ""
         )}
         <div
            className={`inline-flex gap-4 ${
               pathname === "/" ? "text-white" : ""
            }`}>
            <NavLink
               to='/'
               className={({ isActive }) =>
                  isActive ? "font-bold underline" : ""
               }>
               Home
            </NavLink>
            <NavLink
               to='/news'
               className={({ isActive }) =>
                  isActive ? "font-bold underline" : ""
               }>
               News
            </NavLink>
            <NavLink
               to='/destination'
               className={({ isActive }) =>
                  isActive ? "font-bold underline" : ""
               }>
               Destination
            </NavLink>
            <NavLink
               to='/blog'
               className={({ isActive }) =>
                  isActive ? "font-bold underline" : ""
               }>
               Blog
            </NavLink>
            <NavLink
               to='/contact'
               className={({ isActive }) =>
                  isActive ? "font-bold underline" : ""
               }>
               Contact
            </NavLink>
         </div>
         <div>
            <button className='bg-primary px-3 py-1 rounded-sm'>Log In</button>
         </div>
      </nav>
   );
};

export default Navbar;
