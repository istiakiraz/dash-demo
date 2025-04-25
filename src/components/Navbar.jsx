import React from 'react';
import logo from "../assets/dashboard.png"

const Navbar = () => {
    return (
        <div className='bg-base-100 shadow-sm'>
           <div className="navbar md:w-10/12 mx-auto w-11/12 ">
  {/* <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
    </button>
  </div> */}
  <div className="flex-1">
    <div className='flex items-center gap-1'>
        <img className='w-6 h-full' src={logo} alt="" />
        <h1 className="text-xl font-bold ">Dash<span className='text-blue-600'>Board</span></h1>
    </div>
  </div>
  <div className="flex-none">
  <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
        <span className="badge badge-xs bg-blue-400 indicator-item"></span>
      </div>
    </button>
  </div>
</div>
        </div>
    );
};

export default Navbar;