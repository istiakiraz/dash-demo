import React from 'react';
import { NavLink } from 'react-router';
import { FaHome, FaCartPlus, FaUserFriends } from "react-icons/fa";
import { GrOverview, GrVend } from "react-icons/gr";
import { BiSolidCategoryAlt } from "react-icons/bi";




const Sidebar = () => {
    return (
       <div className=''>
         <div className='mx-2 pt-4'>
            <ul className=' text-sm md:text-[16px]  z-1 pl-5 md:px-10 py-2 font-semibold  '>

                <NavLink  className={({ isActive }) => (isActive ? "text-blue-600 " : " hover:text-blue-300 ")}
        to="/"><li className='  border-b border-gray-300  py-2 '> <span className='flex items-center gap-1'><FaHome /> Home</span></li></NavLink>

<NavLink  className={({ isActive }) => (isActive ? "text-blue-600 " : " hover:text-blue-300 ")}
        to="/overview">
                <li className='  py-2 border-b border-gray-300'><div className='flex items-center gap-1'><GrOverview /> Overview</div></li>
                </NavLink>

                <NavLink  className={({ isActive }) => (isActive ? "text-blue-600 " : " hover:text-blue-300 ")}
        to="/product">
                <li className='  py-2 border-b border-gray-300'><div className='flex items-center gap-1'><FaCartPlus /> Product List</div></li>
                </NavLink>
                <NavLink  className={({ isActive }) => (isActive ? "text-blue-600 " : " hover:text-blue-300 ")}
        to="/Users">
                <li className='  py-2 border-b border-gray-300'><div className='flex items-center gap-1'><FaUserFriends />Users</div></li>
                </NavLink>
                <NavLink  className={({ isActive }) => (isActive ? "text-blue-600 " : " hover:text-blue-300 ")}
        to="/vendors">
                <li className='  py-2 border-b border-gray-300'><div className='flex items-center gap-1'><GrVend /> Vendors</div></li>
                </NavLink>
                <NavLink  className={({ isActive }) => (isActive ? "text-blue-600 " : " hover:text-blue-300 ")}
        to="/category">
                <li className='  py-2 border-b border-gray-300'><div className='flex items-center gap-1'><BiSolidCategoryAlt /> Category</div></li>
                </NavLink>

                <li className='hover:text-blue-300 cursor-pointer  py-2 border-b border-gray-300'>Order</li>
            </ul>
        </div>
       </div>
    );
};

export default Sidebar;