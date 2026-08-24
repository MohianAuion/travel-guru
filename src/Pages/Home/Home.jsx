// import React, { useState } from "react";

import { FaArrowRight } from "react-icons/fa";
import coxsbazarImg from "../../assets/Rectangle 1.png";
import sajekImg from "../../assets/Sajek.png";
import sreemongolImg from "../../assets/Sreemongol.png";
import sylhetimg from "../../assets/sylhet.png";
import bandarbanImg from "../../assets/bandarban.png";
import shundorbonImg from "../../assets/sundorbon.png";
import { useState } from "react";
import { Link } from "react-router";

const Home = () => {
  const places = [
    {
      id: 1,
      images: coxsbazarImg,
      title: "Cox's Bazar",
    },
    {
      id: 2,
      images: sajekImg,
      title: "Sajek",
    },
    {
      id: 3,
      images: sreemongolImg,
      title: "Sreemongol",
    },
    {
      id: 4,
      images: sylhetimg,
      title: "Sylhet",
    },
    {
      id: 5,
      images: shundorbonImg,
      title: "Shundarban",
    },
    {
      id: 6,
      images: bandarbanImg,
      title: "Bandarban",
    },
    
  ];

  const [currentPlace, setCurrentPlace] = useState(0);

  // handle right arrow
  const handleRightArrow = () => {
    setCurrentPlace((prev) => (prev + 1) % places.length);
  };

  // handle left arrow
  const handleLeftArrow = () => {
    setCurrentPlace((prev) => (prev - 1 + places.length) % places.length);
  };

  return (
    <div className="w-10/12 mx-auto mt-35">
      <div className="flex gap-10 items-center ">
        {/* text */}
        <div className="w-[40%] space-y-4">
          <h2 className="text-5xl text-white font-bold">Discover Bangladesh</h2>
          <p className="text-gray-100 text-md font-normal leading-7">
           Travel Guru is a Bangladesh-based travel agency dedicated to helping people discover the beauty, culture, history, and natural wonders of Bangladesh. From peaceful tea gardens and beautiful beaches to adventurous hills and the mysterious Sundarbans, we make it easier for you to explore every corner of our country.
          </p>
          <Link to='/booking' className="btn btn-warning">
           Booking<FaArrowRight></FaArrowRight>
          </Link>
        </div>

        {/* images */}
        <div className="w-[60%] overflow-hidden">
          <div className="flex gap-4 ">
            {[0, 1, 2].map((position) => {
              const index = (currentPlace + position) % places.length;
              const place = places[index];
              return (
                <div
                  key={place.id}
                  className="h-100 w-70 overflow-hidden shrink-0 relative rounded-2xl hover:border hover:border-3 hover:border-amber-300 hover:rounded-2xl"
                >
                  <img
                    className="h-full w-full object-cover"
                    src={place.images}
                    alt=""
                  />
                  <p className="absolute text-white text-xl font-bold top-85 left-6">
                    {place.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* arrow */}
      <div className="flex justify-center items-center mt-16 gap-5">
        <div className="flex justify-center items-center">
          {/* left arrow */}
          <button
            onClick={handleLeftArrow}
            className="text-black text-3xl bg-white w-11 h-11 rounded-full hover:bg-gray-400 hover:text-amber-50"
          >
            ❮
          </button>
        </div>

        {/* right arrow */}
        <div>
          <button
            onClick={handleRightArrow}
            className="text-black text-3xl bg-white w-11 h-11 rounded-full hover:bg-gray-400 hover:text-amber-50"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  )
};

export default Home;
