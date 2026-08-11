import React from "react";
import bgImg from "../../assets/Rectangle 1.png";
import { Outlet } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";

const HomeLayout = () => {
  const backgroundImage = {
    backgroundImage: `url(${bgImg})`,
  };
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={backgroundImage}
    >
      <div className="min-h-screen bg-cover bg-gray-900/50">
        <header>
          <Navbar></Navbar>
        </header>
        <main>
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
};

export default HomeLayout;
