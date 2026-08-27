import React, { use } from "react";
import banner from "../../assets/banner.png";
import coxsBazarImg from "../../assets/Rectangle 1.png";
import sajekImg from "../../assets/Sajek.png";
import sreemongol from "../../assets/Sreemongol.png";
import sylhet from "../../assets/sylhet.png";
import bandarban from "../../assets/bandarban.png";
import shundorban from "../../assets/sundorbon.png";
import khoiyachori from "../../assets/khoiachorajhorna.png";
import saathgombuj from "../../assets/shaatgombujMasjid.png";
import kaptaiLake from "../../assets/kaptaiLake.png";


import Footer from "../../Components/Footer/Footer";

import { FaArrowRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";

const Destinations = () => {
  return (
    <div>
      <header>
        {/* Navbar */}
  <Navbar light></Navbar>

        {/* Banner */}
        <div className="w-full h-52 sm:h-64 md:h-72 lg:h-90">
          <img
            src={banner}
            className="w-full h-full object-cover"
            alt="a map image of bangladesh"
          />
        </div>
      </header>

      <main className="w-11/12 md:w-10/12 mx-auto">

        {/* Heading */}
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

        {/* Destination Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 mb-16">

          {/* Cox's Bazar */}
          <div className="relative w-full h-[420px] sm:h-[450px] md:h-[480px]">

            <img
              src={coxsBazarImg}
              className="w-full h-full rounded-xl object-cover"
              alt="Cox's Bazar"
            />

            <div className="absolute bottom-5 left-5 right-5 sm:left-6 sm:right-6 bg-gray-600/20 backdrop-blur-xs p-4 sm:p-5 rounded-lg">

              <h1 className="text-white text-2xl sm:text-3xl font-semibold">
                Sea Beach
              </h1>

              <h2 className="text-white text-base sm:text-xl flex items-center gap-1 font-medium">
                <FaLocationDot className="text-yellow-400" />
                <span>Cox's Bazar</span>
              </h2>

              <Link
                to="/booking"
                className="btn btn-sm sm:btn-md mt-2 hover:bg-amber-400 hover:border-0 hover:text-gray-100"
              >
                Book Now
                <FaArrowRight />
              </Link>

            </div>
          </div>

          {/* Sreemongol */}
          <div className="relative w-full h-[420px] sm:h-[450px] md:h-[480px]">

            <img
              src={sreemongol}
              className="w-full h-full rounded-xl object-cover"
              alt="Sreemongol"
            />

            <div className="absolute bottom-5 left-5 right-5 sm:left-6 sm:right-6 bg-gray-600/20 backdrop-blur-xs p-4 sm:p-5 rounded-lg">

              <h1 className="text-white text-2xl sm:text-3xl font-semibold">
                Sreemongol
              </h1>

              <h2 className="text-white text-base sm:text-xl flex items-center gap-1 font-medium">
                <FaLocationDot className="text-yellow-400" />
                <span>MouloviBazar</span>
              </h2>

              <Link
                to="/booking"
                className="btn btn-sm sm:btn-md mt-2 hover:bg-amber-400 hover:border-0 hover:text-gray-100"
              >
                Book Now
                <FaArrowRight />
              </Link>

            </div>
          </div>

          {/* Sajek Valley */}
          <div className="relative w-full h-[420px] sm:h-[450px] md:h-[480px]">

            <img
              src={sajekImg}
              className="w-full h-full rounded-xl object-cover"
              alt="Sajek Valley"
            />

            <div className="absolute bottom-5 left-5 right-5 sm:left-6 sm:right-6 bg-gray-600/20 backdrop-blur-xs p-4 sm:p-5 rounded-lg">

              <h1 className="text-white text-2xl sm:text-3xl font-semibold">
                Sajek Valley
              </h1>

              <h2 className="text-white text-base sm:text-xl flex items-center gap-1 font-medium">
                <FaLocationDot className="text-yellow-400" />
                <span>Rangamati</span>
              </h2>

              <Link
                to="/booking"
                className="btn btn-sm sm:btn-md mt-2 hover:bg-amber-400 hover:border-0 hover:text-gray-100"
              >
                Book Now
                <FaArrowRight />
              </Link>

            </div>
          </div>

          {/* Shada Pathor */}
          <div className="relative w-full h-[420px] sm:h-[450px] md:h-[480px]">

            <img
              src={sylhet}
              className="w-full h-full rounded-xl object-cover"
              alt="Shada Pathor"
            />

            <div className="absolute bottom-5 left-5 right-5 sm:left-6 sm:right-6 bg-gray-600/20 backdrop-blur-xs p-4 sm:p-5 rounded-lg">

              <h1 className="text-white text-2xl sm:text-3xl font-semibold">
                Shada Pathor
              </h1>

              <h2 className="text-white text-base sm:text-xl flex items-center gap-1 font-medium">
                <FaLocationDot className="text-yellow-400" />
                <span>Sylhet</span>
              </h2>

              <Link
                to="/booking"
                className="btn btn-sm sm:btn-md mt-2 hover:bg-amber-400 hover:border-0 hover:text-gray-100"
              >
                Book Now
                <FaArrowRight />
              </Link>

            </div>
          </div>

          {/* Sundarban */}
          <div className="relative w-full h-[420px] sm:h-[450px] md:h-[480px]">

            <img
              src={shundorban}
              className="w-full h-full rounded-xl object-cover"
              alt="Sundarban"
            />

            <div className="absolute bottom-5 left-5 right-5 sm:left-6 sm:right-6 bg-gray-600/20 backdrop-blur-xs p-4 sm:p-5 rounded-lg">

              <h1 className="text-white text-2xl sm:text-3xl font-semibold">
                Shundarban
              </h1>

              <h2 className="text-white text-base sm:text-xl flex items-center gap-1 font-medium">
                <FaLocationDot className="text-yellow-400" />
                <span>Khulna</span>
              </h2>

              <Link
                to="/booking"
                className="btn btn-sm sm:btn-md mt-2 hover:bg-amber-400 hover:border-0 hover:text-gray-100"
              >
                Book Now
                <FaArrowRight />
              </Link>

            </div>
          </div>

          {/* Debotakunda */}
          <div className="relative w-full h-[420px] sm:h-[450px] md:h-[480px]">

            <img
              src={bandarban}
              className="w-full h-full rounded-xl object-cover"
              alt="Debotakunda"
            />

            <div className="absolute bottom-5 left-5 right-5 sm:left-6 sm:right-6 bg-gray-600/20 backdrop-blur-xs p-4 sm:p-5 rounded-lg">

              <h1 className="text-white text-2xl sm:text-3xl font-semibold">
                Debotakunda
              </h1>

              <h2 className="text-white text-base sm:text-xl flex items-center gap-1 font-medium">
                <FaLocationDot className="text-yellow-400" />
                <span>Bandarban</span>
              </h2>

              <Link
                to="/booking"
                className="btn btn-sm sm:btn-md mt-2 hover:bg-amber-400 hover:border-0 hover:text-gray-100"
              >
                Book Now
                <FaArrowRight />
              </Link>

            </div>
          </div>

          {/* Khoiyachora */}
          <div className="relative w-full h-[420px] sm:h-[450px] md:h-[480px]">

            <img
              src={khoiyachori}
              className="w-full h-full rounded-xl object-cover"
              alt="Khoiyachora Waterfall"
            />

            <div className="absolute bottom-5 left-5 right-5 sm:left-6 sm:right-6 bg-gray-600/20 backdrop-blur-xs p-4 sm:p-5 rounded-lg">

              <h1 className="text-white text-2xl sm:text-3xl font-semibold">
                Khoiyachora
              </h1>

              <h2 className="text-white text-base sm:text-xl flex items-center gap-1 font-medium">
                <FaLocationDot className="text-yellow-400" />
                <span>Chattogram</span>
              </h2>

              <Link
                to="/booking"
                className="btn btn-sm sm:btn-md mt-2 hover:bg-amber-400 hover:border-0 hover:text-gray-100"
              >
                Book Now
                <FaArrowRight />
              </Link>

            </div>
          </div>

          {/* Sat Gombuj */}
          <div className="relative w-full h-[420px] sm:h-[450px] md:h-[480px]">

            <img
              src={saathgombuj}
              className="w-full h-full rounded-xl object-cover"
              alt="Sat Gombuj Mosque"
            />

            <div className="absolute bottom-5 left-5 right-5 sm:left-6 sm:right-6 bg-gray-600/20 backdrop-blur-xs p-4 sm:p-5 rounded-lg">

              <h1 className="text-white text-2xl sm:text-3xl font-semibold">
                Sat Gombuj
              </h1>

              <h2 className="text-white text-base sm:text-xl flex items-center gap-1 font-medium">
                <FaLocationDot className="text-yellow-400" />
                <span>Bagerhat</span>
              </h2>

              <Link
                to="/booking"
                className="btn btn-sm sm:btn-md mt-2 hover:bg-amber-400 hover:border-0 hover:text-gray-100"
              >
                Book Now
                <FaArrowRight />
              </Link>

            </div>
          </div>

          {/* Kaptai Lake */}
          <div className="relative w-full h-[420px] sm:h-[450px] md:h-[480px]">

            <img
              src={kaptaiLake}
              className="w-full h-full rounded-xl object-cover"
              alt="Kaptai Lake"
            />

            <div className="absolute bottom-5 left-5 right-5 sm:left-6 sm:right-6 bg-gray-600/20 backdrop-blur-xs p-4 sm:p-5 rounded-lg">

              <h1 className="text-white text-2xl sm:text-3xl font-semibold">
                Kaptai Lake
              </h1>

              <h2 className="text-white text-base sm:text-xl flex items-center gap-1 font-medium">
                <FaLocationDot className="text-yellow-400" />
                <span>Rangamati</span>
              </h2>

              <Link
                to="/booking"
                className="btn btn-sm sm:btn-md mt-2 hover:bg-amber-400 hover:border-0 hover:text-gray-100"
              >
                Book Now
                <FaArrowRight />
              </Link>

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Destinations;