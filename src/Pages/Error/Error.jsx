import React from "react";
import { Link } from "react-router";
import { FaHome, FaArrowRight } from "react-icons/fa";

const Error = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 my-16">
      <div className="text-center max-w-2xl w-full">

        {/* 404 */}
        <div className="flex justify-center items-center gap-3 md:gap-5 mb-6">
          <span className="text-[120px] md:text-[180px] leading-none font-bold text-gray-900">
            4
          </span>

          {/* 0 */}
          <div className="w-28 h-36 md:w-40 md:h-52 rounded-full border-[12px] md:border-[15px] border-gray-900 flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full bg-gray-100 flex flex-col items-center justify-end">

              {/* Sun */}
              <div className="absolute top-7 md:top-10 w-6 h-6 md:w-8 md:h-8 rounded-full bg-yellow-400" />

              {/* Mountains */}
              <div className="w-full h-2/3 bg-gradient-to-t from-gray-500 via-gray-300 to-transparent clip-path-mountain" />

              {/* Road */}
              <div className="absolute bottom-0 w-10 h-20 bg-white rotate-[-12deg]" />

              {/* Birds */}
              <div className="absolute top-14 text-gray-500 text-xs">
                ˅ ˅
              </div>

            </div>
          </div>

          <span className="text-[120px] md:text-[180px] leading-none font-bold text-gray-900">
            4
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
         The Page Has Gone Off the   <span className="text-yellow-500">Map</span> 🗺️{" "}
       
        </h1>

        {/* Small line */}
        <div className="w-14 h-1 bg-yellow-400 rounded-full mx-auto my-6" />

        {/* Description */}
        <p className="text-gray-500 text-base md:text-lg leading-7 max-w-md mx-auto">
          The page you’re looking for doesn’t exist
          <br />
          or has been moved.
        </p>

        {/* Simple illustration */}
        <div className="relative h-56 md:h-64 mt-8 mb-4">

          {/* Clouds */}
          <div className="absolute left-10 top-8 text-gray-100 text-5xl">
            ☁
          </div>

          <div className="absolute right-10 top-16 text-gray-100 text-5xl">
            ☁
          </div>

          {/* Ground */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-80 h-24 bg-gray-50 rounded-[50%]" />

          {/* Sign post */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">

            <div className="w-2 h-48 bg-gray-700 mx-auto rounded-full" />

            {/* Signs */}
            <div className="absolute top-10 -left-16 w-32 h-10 border-2 border-gray-700 bg-white rounded-md rotate-[-5deg]" />

            <div className="absolute top-20 -left-20 w-36 h-10 bg-yellow-400 rounded-md flex items-center justify-end pr-3">
              <FaArrowRight />
            </div>

            <div className="absolute top-32 -left-14 w-28 h-9 border-2 border-gray-500 bg-white rounded-md rotate-[3deg]" />

          </div>
        </div>

        {/* Go Home Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-4 rounded-full transition duration-200"
        >
          <FaHome />
          Go Home
        </Link>

      </div>
    </div>
  );
};

export default Error;