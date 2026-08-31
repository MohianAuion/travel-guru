import React from "react";
import banner from "../../assets/Rectangle 1.png";
import mapImg from "../../assets/map.png";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Contact = () => {
  return (
    <div className="bg-base-100 min-h-screen">
      {/* header */}
      <header>
        {/* navbar */}
        <Navbar light></Navbar>

        {/* banner */}
        <div className="relative h-64 sm:h-72 md:h-80 lg:h-90 w-full overflow-hidden bg-gray-900">
          <img
            className="h-full w-full object-cover opacity-50"
            src={banner}
            alt="Travel banner"
          />

          {/* Banner text */}
          <div className="absolute inset-0 flex items-center justify-center sm:justify-end">
            <div className="w-11/12 sm:w-10/12 lg:w-auto mx-auto sm:mx-8 lg:mx-16">
              <div className="max-w-xl text-center sm:text-right">
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
                  Let’s Plan Your Next Adventure 🛩️
                </h1>

                <p className="text-xs sm:text-sm md:text-base text-white font-medium leading-5 sm:leading-6">
                  Connect with Travel Guru and turn your travel dreams into
                  unforgettable journeys. Have questions, need travel advice, or
                  looking for the perfect destination? Our team is here to help
                  make every step of your journey easier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* main */}
      <main className="w-11/12 md:w-10/12 mx-auto py-10 sm:py-12 md:py-16">
        {/* contact section */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <p className="text-yellow-500 font-semibold uppercase tracking-[3px] text-xs sm:text-sm">
            Get In Touch
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
            Contact With Us
          </h2>

          <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm sm:text-base leading-6">
            Have a question or planning your next adventure? We're here to help
            make your journey simple, comfortable, and unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* left side */}
          <div className="flex flex-col gap-6">
            {/* contact info */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-100 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-5 sm:mb-6">
                Contact Info
              </h3>

              <div className="space-y-5 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-50 flex items-center justify-center shrink-0 hover:bg-gray-200 transition">
                    <FaEnvelope className="text-red-500 text-lg sm:text-xl" />
                  </div>

                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                      Send us Email
                    </h4>

                    <a
                      href="mailto:travelguruofficial@gmail.com"
                      className="text-gray-500 hover:text-red-500 transition-colors duration-200 text-xs sm:text-sm mt-0.5 block break-all"
                    >
                      travelguruofficial@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-50 flex items-center justify-center shrink-0 hover:bg-gray-200 transition">
                    <FaPhoneAlt className="text-red-500 text-lg sm:text-xl" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                      Call Us
                    </h4>

                    <a
                      href="tel:01779331722"
                      className="text-gray-500 hover:text-red-500 transition-colors duration-200 text-xs sm:text-sm mt-0.5 block"
                    >
                      +880 1779 331 722
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-50 flex items-center justify-center shrink-0 hover:bg-gray-200 transition">
                    <FaMapMarkerAlt className="text-red-500 text-lg sm:text-xl" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                      Our Location
                    </h4>

                    <p className="text-gray-500 text-xs sm:text-sm mt-0.5">
                      Kallyanpur, Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* find us */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm">
              <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                Find Us On
              </h4>

              <div className="flex flex-col gap-3">
                {/*facebook */}
                <a
                  href="https://www.facebook.com/"
                  className="flex items-center gap-2 border border-gray-300 hover:bg-sky-400 hover:text-white w-full sm:w-10/12 md:w-8/12 lg:w-full py-2.5 sm:py-3 px-4 rounded-lg transition duration-300"
                >
                  <FaFacebook className="text-lg sm:text-xl" />

                  <span className="font-semibold text-sm sm:text-base">
                    Facebook
                  </span>
                </a>

                {/* instagram */}
                <a
                  href="https://www.instagram.com/"
                  className="flex items-center gap-2 border border-gray-300 hover:bg-pink-600 hover:text-white w-full sm:w-10/12 md:w-8/12 lg:w-full py-2.5 sm:py-3 px-4 rounded-lg transition duration-300"
                >
                  <FaInstagram className="text-lg sm:text-xl" />

                  <span className="font-semibold text-sm sm:text-base">
                    Instagram
                  </span>
                </a>

                {/* youtube */}
                <a
                  href="https://www.youtube.com/"
                  className="flex items-center gap-2 border border-gray-300 hover:bg-red-500 hover:text-white w-full sm:w-10/12 md:w-8/12 lg:w-full py-2.5 sm:py-3 px-4 rounded-lg transition duration-300"
                >
                  <FaYoutube className="text-lg sm:text-xl" />

                  <span className="font-semibold text-sm sm:text-base">
                    YouTube
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* map image */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-72 sm:h-80 md:h-96 lg:h-auto">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Kallyanpur,Dhaka,Bangladesh"
              
            >
              <img
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
                src={mapImg}
                alt="Kallyanpur, Dhaka map"
              />
            </a>
          </div>
        </div>
      </main>

      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default Contact;
