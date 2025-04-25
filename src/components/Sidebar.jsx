import React from 'react';
import { NavLink } from 'react-router';

const Sidebar = () => {
    return (
       <div className=''>
         <div className='mx-2 pt-4'>
            <ul className=' text-sm md:text-[16px]  z-1 pl-5 md:px-10 py-2 font-semibold  '>

                <NavLink  className={({ isActive }) => (isActive ? "text-blue-600 " : " hover:text-blue-300 ")}
        to="/"><li className='  border-b border-gray-300  py-2 '>Home</li></NavLink>

<NavLink  className={({ isActive }) => (isActive ? "text-blue-600 " : " hover:text-blue-300 ")}
        to="/overview">
                <li className='  py-2 border-b border-gray-300'>Overview</li>
                </NavLink>

                <NavLink  className={({ isActive }) => (isActive ? "text-blue-600 " : " hover:text-blue-300 ")}
        to="/product">
                <li className='  py-2 border-b border-gray-300'>Product List</li>
                </NavLink>

                <li className='hover:text-blue-300 cursor-pointer py-2 border-b border-gray-300'>Users</li>
                <li className='hover:text-blue-300 cursor-pointer py-2 border-b border-gray-300'>Vendors</li>
                <li className='hover:text-blue-300 cursor-pointer py-2 border-b border-gray-300'>Category</li>
                <li className='hover:text-blue-300 cursor-pointer  py-2 border-b border-gray-300'>Order</li>
            </ul>
        </div>
       </div>
    );
};

export default Sidebar;