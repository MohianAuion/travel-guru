import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
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
import Footer from "../../Components/Footer/Footer";

const Contact = () => {
  return (
    <div className="bg-base-100 min-h-screen">
      {/* Header Section */}
      <header>
        <Navbar light />
        
        {/* banner section */}
        <div className="relative h-72 md:h-90 w-full overflow-hidden bg-gray-900">
          <img
            className="h-full w-full object-cover  opacity-50"
            src={banner}
            alt="Travel banner"
          />
          <div className="absolute inset-0 flex items-center justify-end">
            <div className=" mx-16 flex justify-end">
              <div className="max-w-xl text-right">
                <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 leading-tight">
                  Let’s Plan Your Next Adventure 🛩️
                </h1>
                <p className="text-sm md:text-sm text-white font-medium">
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

      {/* Main Section */}
      <main className="w-11/12 md:w-10/12 mx-auto py-12 md:py-16">
        <div className="text-center mb-12">
          <p className="text-yellow-500 font-semibold uppercase tracking-widest text-sm">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Contact With Us
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm md:text-base">
            Have a question or planning your next adventure? We're here to help
            make your journey simple, comfortable, and unforgettable.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Column: Contact Info & Social Links */}
          <div className="flex flex-col gap-6 h-full justify-between">
            
            {/* Contact Information Card */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Contact Info
              </h3>

              <div className="space-y-6">

                {/* Email*/}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 hover:bg-gray-300">
                    <FaEnvelope className="text-red-500 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-base">Send us Email</h4>
                    <a
                      href="mailto:travelguruofficial@gmail.com"
                      className="text-gray-500 hover:text-red-500 transition-colors duration-200 text-sm mt-0.5 block"
                    >
                      travelguruofficial@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone*/}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-300">
                    <FaPhoneAlt className="text-red-500 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-base">Call Us</h4>
                    <a
                      href="tel:01779331722"
                      className="text-gray-500 hover:text-red-500 transition-colors duration-200 text-sm mt-0.5 block"
                    >
                      +880 1779 331 722
                    </a>
                  </div>
                </div>

                {/* Location*/}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 hover:bg-gray-300">
                    <FaMapMarkerAlt className="text-red-500 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-base">Our Location</h4>
                    <p className="text-gray-500 hover:text-red-500 transition-colors duration-200 text-sm mt-0.5">
                      Kallyanpur, Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Card - Vertical Line by Line */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">
                Find Us On
              </h4>
              <div className="flex flex-col gap-3">
                
                {/* Facebook */}
                <a className="flex items-center gap-1 border border-gray-400 hover:bg-sky-400 hover:text-white w-[50%] py-3 px-4 rounded-sm ">
                  <FaFacebook className="text-xl" />
                  <span className="font-semibold">Facebook</span>
                </a>

                {/* Instagram */}
                <a className="flex items-center gap-1 border border-gray-400 hover:bg-pink-700 hover:text-white w-[50%] py-3 px-4 rounded-sm ">
                <FaInstagram className="text-xl"></FaInstagram>
                  <span className="font-semibold">Instagram</span>
                </a>
                {/* YouTube */}
                 <a className="flex items-center gap-1 border border-gray-400 hover:bg-red-500 hover:text-white w-[50%] py-3 px-4 rounded-sm ">
              <FaYoutube className="text-xl"></FaYoutube>
                  <span className="font-semibold">Youtube</span>
                </a>

              </div>
            </div>

          </div>

          {/* Right Column: Map Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 min-h-[350px] lg:min-h-full">
            <img
              className="w-full h-full object-cover"
              src={mapImg}
              alt="Travel Guru location map"
            />
          </div>

        </div>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default Contact;