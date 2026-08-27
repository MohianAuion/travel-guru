import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import { destinations } from "../../data/destinationsData";

const Home = () => {
  const [currentPlace, setCurrentPlace] = useState(0);

  const handleRightArrow = () => {
    setCurrentPlace((prev) => (prev + 1) % destinations.length);
  };

  const handleLeftArrow = () => {
    setCurrentPlace(
      (prev) => (prev - 1 + destinations.length) % destinations.length
    );
  };

  return (
    <div className="w-11/12 lg:w-10/12 mx-auto mt-16 sm:mt-20 lg:mt-32">

      {/* main */}
      <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12">

        {/* text */}
        <div className="w-full lg:w-[40%] space-y-4 text-center lg:text-left">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold leading-tight">
            Discover Bangladesh
          </h2>

          <p className="text-gray-100 text-sm sm:text-base leading-6 sm:leading-7">
            Travel Guru is a Bangladesh-based travel agency dedicated to
            helping people discover the beauty, culture, history, and natural
            wonders of Bangladesh. From peaceful tea gardens and beautiful
            beaches to adventurous hills and the mysterious Sundarbans, we
            make it easier for you to explore every corner of our country.
          </p>

          <Link to="/booking" className="btn btn-warning">
            Booking
            <FaArrowRight />
          </Link>

        </div>

        {/* cards */}
        <div className="w-full lg:w-[60%] overflow-hidden">

          <div className="flex justify-center lg:justify-start gap-3 sm:gap-4">

            {[0, 1, 2].map((position) => {
              const index = (currentPlace + position) % destinations.length;
              const place = destinations[index];

              return (
                <div
                  key={place.id}
                  className={`
                    relative
                    shrink-0
                    overflow-hidden
                    rounded-2xl

                    /* mobile */
                    w-[85%]
                    h-80

                    /* tablet */
                    sm:w-56
                    sm:h-80

                    /* laptop */
                    lg:w-70
                    lg:h-100

                    /* Card visibility per breakpoint */
                    ${position === 0 ? "block" : ""}
                    ${position === 1 ? "hidden sm:block" : ""}
                    ${position === 2 ? "hidden lg:block" : ""}

                    hover:border-3
                    hover:border-amber-300
                    transition-all
                    duration-300
                  `}
                >
                  <img
                    src={place.image}
                    alt={place.name}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/10"></div>

                  <p className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 text-white text-base sm:text-lg lg:text-xl font-bold">
                    {place.name}
                  </p>
                </div>
              );
            })}

          </div>

        </div>

      </div>

      {/* arrows */}
      <div className="flex justify-center items-center mt-8 sm:mt-12 lg:mt-16 gap-4 sm:gap-5">

        <button
          onClick={handleLeftArrow}
          aria-label="Previous destination"
          className="flex items-center justify-center text-black text-xl sm:text-2xl bg-white w-9 h-9 sm:w-11 sm:h-11 rounded-full hover:bg-gray-400 hover:text-white transition"
        >
          ❮
        </button>

        <button
          onClick={handleRightArrow}
          aria-label="Next destination"
          className="flex items-center justify-center text-black text-xl sm:text-2xl bg-white w-9 h-9 sm:w-11 sm:h-11 rounded-full hover:bg-gray-400 hover:text-white transition"
        >
          ❯
        </button>

      </div>

    </div>
  );
};

export default Home;