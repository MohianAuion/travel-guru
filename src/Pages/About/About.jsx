import React from "react";
import hotel1 from "../../assets/Rectangle 26.png";
import hotel2 from "../../assets/Rectangle 27.png";
import hotel3 from "../../assets/Rectangle 28.png";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const About = () => {
  const services = [
    {
      image: hotel1,
      title: "Hotel & Resort Booking",
      description:
        "Find comfortable hotels, resorts, and eco-friendly stays across Bangladesh. We help you choose the right place according to your destination, budget, and travel style.",
    },
    {
      image: hotel2,
      title: "Tour & Travel Packages",
      description:
        "Explore Bangladesh with our carefully planned travel packages. From Cox's Bazar and Sajek to Sylhet and the Sundarbans, we make your journey simple and enjoyable.",
    },
    {
      image: hotel3,
      title: "Transportation Services",
      description:
        "Travel comfortably with our transportation support, including private cars, buses, river transport, and domestic travel arrangements.",
    },
  ];

  return (
    <div className="bg-base-100">
        <header>
              <Navbar light></Navbar>
        </header>

      {/* About Hero */}
      <section className="w-11/12 md:w-10/12 mx-auto py-16 md:py-24">

        <div className="max-w-3xl mx-auto text-center">

          <p className="text-orange-500 uppercase tracking-[4px] text-sm font-semibold">
            About Travel Guru
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Discover Bangladesh With Us
          </h1>

          <p className="text-gray-500 leading-7 mt-6">
            Travel Guru is a Bangladesh-based travel agency dedicated to
            helping people discover the beauty, culture, history, and
            natural wonders of Bangladesh. From peaceful tea gardens and
            beautiful beaches to adventurous hills and the mysterious
            Sundarbans, we make it easier for you to explore every corner
            of our country.
          </p>

        </div>


        {/* About Content */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-5">
              Your Journey, Our Responsibility
            </h2>

            <p className="text-gray-500 leading-7 mb-5">
              We believe traveling is not simply about visiting a new place.
              It is about experiencing new cultures, meeting new people,
              enjoying beautiful moments, and creating memories that last
              forever.
            </p>

            <p className="text-gray-500 leading-7">
              Whether you are traveling alone, planning a family vacation,
              organizing a group tour, or looking for an adventurous escape,
              Travel Guru is here to make your journey comfortable,
              organized, and memorable.
            </p>
          </div>


          {/* Why Choose Us */}
          <div className="bg-orange-50 rounded-2xl p-8">

            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why Choose Travel Guru?
            </h3>

            <div className="space-y-5">

              <div>
                <h4 className="font-bold text-gray-900">
                  🌍 Explore Bangladesh
                </h4>
                <p className="text-gray-500 text-sm mt-1">
                  Discover amazing destinations from all around Bangladesh.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900">
                  💰 Travel Within Your Budget
                </h4>
                <p className="text-gray-500 text-sm mt-1">
                  We offer travel solutions that match different budgets
                  and travel styles.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900">
                  🤝 Trusted Travel Support
                </h4>
                <p className="text-gray-500 text-sm mt-1">
                  Our team is here to support you before, during, and after
                  your journey.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900">
                  ❤️ Memorable Experiences
                </h4>
                <p className="text-gray-500 text-sm mt-1">
                  We focus on creating enjoyable experiences, not just
                  arranging transportation.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Services Section */}
      <section className="bg-gray-50 py-16 md:py-20">

        <div className="w-11/12 md:w-10/12 mx-auto">

          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-12">

            <p className="text-orange-500 uppercase tracking-[4px] text-sm font-semibold">
              What We Offer
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Our Services
            </h2>

            <p className="text-gray-500 mt-4 leading-7">
              Everything you need for a smooth and enjoyable journey across
              Bangladesh, all in one place.
            </p>

          </div>


          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service) => (

              <div
                key={service.title}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group"
              >

                {/* Image */}
                <div className="h-56 overflow-hidden">

                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />

                </div>


                {/* Content */}
                <div className="p-6">

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-6">
                    {service.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* Mission Section */}
      <section className="w-11/12 md:w-10/12 mx-auto py-16 md:py-20">

        <div className="max-w-3xl mx-auto text-center">

          <p className="text-orange-500 uppercase tracking-[4px] text-sm font-semibold">
            Our Mission
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Making Every Journey Memorable
          </h2>

          <p className="text-gray-500 leading-7 mt-5">
            Our mission is to make traveling across Bangladesh easier,
            more accessible, and more enjoyable for everyone. We want to
            connect travelers with the incredible destinations, people,
            culture, and experiences that make Bangladesh special.
          </p>

        </div>

      </section>
      <Footer></Footer>

    </div>
  );
};

export default About;