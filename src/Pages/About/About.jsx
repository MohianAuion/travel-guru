import React from "react";
import hotel1 from "../../assets/Rectangle 26.png";
import hotel2 from "../../assets/Rectangle 27.png";
import hotel3 from "../../assets/Rectangle 28.png";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router";

const About = () => {
  return (
    <div className="bg-base-100">
      {/*navbar*/}
      <header>
        <Navbar light></Navbar>
      </header>

      {/* about section */}
      <main>
        <section className="w-11/12 md:w-10/12 mx-auto py-12 sm:py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-orange-500 uppercase tracking-[3px] text-xs sm:text-sm font-semibold">
              About Travel Guru
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3">
              Discover Bangladesh With Us
            </h1>

            <p className="text-gray-500 text-sm sm:text-base leading-7 mt-5">
              Travel Guru is a Bangladesh-based travel agency dedicated to
              helping you discover the beauty, culture, history, and natural
              wonders of our country. From peaceful tea gardens and beautiful
              beaches to adventurous hills and the mysterious Sundarbans, we
              make it easier for you to explore every corner of Bangladesh.
            </p>
          </div>

          {/*our story & why us section */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-14 sm:mt-16">
            {/* our story */}
            <div className="border border-gray-200 rounded-2xl p-6 sm:p-8">
              <p className="text-orange-500 uppercase tracking-[3px] text-xs font-semibold mb-3">
                Our Story
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
                Your Journey, Our Responsibility
              </h2>

              <p className="text-gray-500 text-sm sm:text-base leading-7 mb-4">
                We believe traveling is not simply about visiting a new place.
                It is about experiencing new cultures, meeting new people,
                enjoying beautiful moments, and creating memories that last
                forever.
              </p>

              <p className="text-gray-500 text-sm sm:text-base leading-7">
                Whether you are traveling alone, planning a family vacation,
                organizing a group tour, or looking for an adventurous escape,
                Travel Guru is here to make your journey comfortable, organized,
                and memorable.
              </p>
            </div>

            {/* why us */}
            <div className="bg-orange-50 rounded-2xl p-6 sm:p-8">
              <p className="text-orange-500 uppercase tracking-[3px] text-xs font-semibold mb-3">
                Why Us
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Why Choose Travel Guru?
              </h2>

              <div className="flex gap-4 mb-6">
                <div className="w-10 h-10 shrink-0 rounded-full bg-orange-400 flex items-center justify-center">
                  🌍
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    Explore Bangladesh
                  </h3>

                  <p className="text-gray-500 text-sm leading-6 mt-1">
                    Discover beautiful destinations and hidden gems from all
                    around Bangladesh.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 mb-6">
                <div className="w-10 h-10 shrink-0 rounded-full bg-orange-400 flex items-center justify-center">
                  💰
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    Travel Within Your Budget
                  </h3>

                  <p className="text-gray-500 text-sm leading-6 mt-1">
                    Flexible travel solutions designed for different budgets and
                    travel styles.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 mb-6">
                <div className="w-10 h-10 shrink-0 rounded-full bg-orange-400 flex items-center justify-center">
                  🤝
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    Trusted Travel Support
                  </h3>

                  <p className="text-gray-500 text-sm leading-6 mt-1">
                    We are here to support you before, during, and after your
                    journey.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-orange-400 flex items-center justify-center">
                  ❤️
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    Memorable Experiences
                  </h3>

                  <p className="text-gray-500 text-sm leading-6 mt-1">
                    We focus on creating enjoyable experiences, not just
                    arranging transportation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* service section */}
        <section className="bg-gray-50 py-12 sm:py-16 md:py-20">
          <div className="w-11/12 md:w-10/12 mx-auto">
            {/* Services Heading */}
            <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
              <p className="text-orange-500 uppercase tracking-[3px] text-xs sm:text-sm font-semibold">
                What We Offer
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
                Our Services
              </h2>

              <p className="text-gray-500 text-sm sm:text-base mt-4 leading-7">
                Everything you need for a smooth and enjoyable journey across
                Bangladesh.
              </p>
            </div>

            {/* cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* hotel and resort*/}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300">
                <div className="h-52 sm:h-56 overflow-hidden">
                  <img
                    src={hotel1}
                    alt="Hotel and Resort Booking"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    Hotel & Resort Booking
                  </h3>

                  <p className="text-gray-500 text-sm leading-6">
                    Find comfortable hotels, resorts, and eco-friendly stays
                    across Bangladesh. We help you choose the right place
                    according to your destination, budget, and travel style.
                  </p>
                </div>
              </div>

              {/* tour and travel */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300">
                <div className="h-52 sm:h-56 overflow-hidden">
                  <img
                    src={hotel2}
                    alt="Tour and Travel Packages"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    Tour & Travel Packages
                  </h3>

                  <p className="text-gray-500 text-sm leading-6">
                    Explore Bangladesh with our carefully planned travel
                    packages. From Cox's Bazar and Sajek to Sylhet and the
                    Sundarbans, we make your journey simple and enjoyable.
                  </p>
                </div>
              </div>

              {/* transportation services */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300">
                <div className="h-52 sm:h-56 overflow-hidden">
                  <img
                    src={hotel3}
                    alt="Transportation Services"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    Transportation Services
                  </h3>

                  <p className="text-gray-500 text-sm leading-6">
                    Travel comfortably with our transportation support,
                    including private cars, buses, river transport, and domestic
                    travel arrangements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* mission section*/}
        <section className="w-11/12 md:w-10/12 mx-auto py-14 sm:py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-orange-500 uppercase tracking-[3px] text-xs sm:text-sm font-semibold">
              Our Mission
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Making Every Journey Memorable
            </h2>

            <p className="text-gray-500 text-sm sm:text-base leading-7 mt-5">
              Our mission is to make traveling across Bangladesh easier, more
              accessible, and more enjoyable for everyone. We want to connect
              travelers with the incredible destinations, people, culture, and
              experiences that make Bangladesh special.
            </p>
          </div>
        </section>

        {/* explore destinations section */}
        <section className="w-11/12 md:w-10/12 mx-auto pb-14 sm:pb-16 md:pb-20">
          <div className="bg-orange-400 rounded-2xl px-6 py-10 sm:p-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Ready to Explore Bangladesh?
            </h2>

            <p className="text-gray-800 text-sm sm:text-base mt-3 max-w-xl mx-auto">
              Choose your destination and start planning your next unforgettable
              journey with Travel Guru.
            </p>

            <Link
              to="/destinations"
              className="btn bg-white border-0 mt-5 hover:bg-gray-900 hover:border-0 hover:text-white"
            >
              Explore Destinations
            </Link>
          </div>
        </section>
      </main>

      {/* footer*/}
      <Footer></Footer>
    </div>
  );
};

export default About;
