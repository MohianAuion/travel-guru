import React, { useState } from "react";

import coxsbazarImg from "../../assets/Rectangle 1.png";
import sajekImg from "../../assets/Sajek.png";
import sreemongolImg from "../../assets/Sreemongol.png";
import shundorbonImg from "../../assets/sundorbon.png";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  const destinations = [
    {
      image: coxsbazarImg,
      title: "Cox's Bazar",
    },
    {
      image: sajekImg,
      title: "Sajek",
    },
    {
      image: shundorbonImg,
      title: "Shundorban",
    },
    {
      image: sreemongolImg,
      title: "SreeMongol",
    },
  ];

  const [currentImg, setCurrentImg] = useState(0);

  // RIGHT
  const handleRightArrow = () => {
    setCurrentImg((prev) => (prev + 1) % destinations.length);
  };

  // LEFT
  const handleLeftArrow = () => {
    setCurrentImg(
      (prev) => (prev - 1 + destinations.length) % destinations.length
    );
  };

  return (
    <div className="w-10/12 mx-auto">

      <div className="flex gap-12 items-center mt-35">

        {/* TEXT */}
        <div className="w-[40%]">
          <h2 className="text-white text-5xl font-bold mb-5">
            COX'S BAZAR
          </h2>

          <p className="text-white text-lg font-medium mb-5">
            Cox's Bazar is a city, fishing port, tourism centre and district
            headquarters in southeastern Bangladesh.
            <br />
            It is famous mostly for its long natural sandy beach, and it ...
          </p>

          <button className="btn btn-warning">
            Booking <FaArrowRight></FaArrowRight>
          </button>
        </div>


        {/* CAROUSEL */}

        <div className="w-[60%] overflow-hidden">

          <div className="flex gap-4">

            {[0, 1, 2].map((offset) => {

              const index =
                (currentImg + offset) % destinations.length;

              const destination = destinations[index];

              return (
                <div
                  key={`${currentImg}-${offset}`}
                  className="relative h-100 w-70 shrink-0"
                >
                  <img
                    className="h-full w-full object-cover rounded-3xl"
                    src={destination.image}
                    alt={destination.title}
                  />

                  <h2 className="absolute text-white top-85 left-5 text-2xl font-bold">
                    {destination.title}
                  </h2>
                </div>
              );
            })}

          </div>

        </div>
      </div>


      {/* ARROWS */}

      <div className="flex justify-center items-center gap-5 mt-16">

        <button
          onClick={handleLeftArrow}
          className="flex justify-center items-center text-black text-xl font-bold bg-white rounded-full w-9 h-9"
        >
          ❮
        </button>

        <button
          onClick={handleRightArrow}
          className="flex justify-center items-center text-black text-xl font-bold bg-white rounded-full w-9 h-9"
        >
          ❯
        </button>

      </div>

    </div>
  );
};

export default Home;