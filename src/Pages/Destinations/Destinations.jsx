import React from "react";
import { destinations } from "../../data/destinationsData";
import banner from "../../assets/banner.png";

import Footer from "../../Components/Footer/Footer";

import { FaArrowRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";

const Destinations = () => {
  return (
    <div>
      <header>
        {/* navbar */}
        <Navbar light></Navbar>

        {/* banner */}
        <div className="w-full h-52 sm:h-64 md:h-72 lg:h-90">
          <img
            src={banner}
            className="w-full h-full object-cover"
            alt="a map image of bangladesh"
          />
        </div>
      </header>

      <main className="w-11/12 md:w-10/12 mx-auto">
        {/* heading */}
        <div className="text-center space-y-2 mt-12 md:mt-16 mb-10 md:mb-14">
          <h2 className="text-sm sm:text-base md:text-lg text-yellow-400 font-bold">
            Explore Destinations
          </h2>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Find Your Next Adventure
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-500">
            Top Destinations in Bangladesh
          </h2>
        </div>

        {/* destination cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 mb-16">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="relative w-full h-[420px] sm:h-[450px] md:h-[480px]"
            >
              <img
                src={destination.image}
                className="w-full h-full rounded-xl object-cover"
                alt={destination.name}
              />

              <div className="absolute bottom-5 left-5 right-5 sm:left-6 sm:right-6 bg-gray-600/20 backdrop-blur-xs p-4 sm:p-5 rounded-lg">
                <h2 className="text-white text-2xl sm:text-3xl font-semibold">
                  {destination.name}
                </h2>

                <h3 className="text-white text-base sm:text-xl flex items-center gap-1 font-medium">
                  <FaLocationDot className="text-yellow-400" />

                  <span>{destination.location}</span>
                </h3>

                <Link
                  to="/booking"
                  className="btn btn-sm sm:btn-md mt-2 hover:bg-amber-400 hover:border-0 hover:text-gray-100"
                >
                  Book Now
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Destinations;
