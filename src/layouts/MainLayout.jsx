import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex flex-1">
          <div className="md:w-1/7 w-1/4 h-full bg-gray-100">
            <Sidebar />
          </div>
          <div className="md:w-6/7 w-3/4 h-full overflow-y-auto">
            <div>
              <Outlet className=" flex-1 overflow-y-auto" />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
