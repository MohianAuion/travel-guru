import React, { useState } from "react";
import { useNavigate } from "react-router";

const destinations = [
  "Cox's Bazar",
  "Sreemangal",
  "Sajek Valley",
  "Sundarban",
  "Debotakunda",
  "Shada Pathor",
  "Khoiyachori Waterfall",
  "Kaptai Lake",
  "Sat Gombuj Mosque"
];

const Booking = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    destination: "",
    from: "",
    to: "",
  });

  const [showModal, setShowModal] = useState(false);

  // today date
  const today = new Date().toISOString().split("T")[0];

  // Handle input
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle booking
  const handleBooking = (e) => {
    e.preventDefault();

    setShowModal(true);
  };

  // handleConfirm
  const handleConfirm = () => {
    setShowModal(false);

    // navigate to home
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-5 py-20">

      <div className="w-full max-w-5xl">

        {/* heading */}
        <div className="text-center mb-10">
          <p className="text-orange-400 uppercase tracking-[4px] text-sm font-semibold">
            Travel With Us
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Book Your Trip
          </h1>

          <p className="text-gray-300 mt-3 max-w-xl mx-auto">
            Choose your destination and travel dates to start your next
            unforgettable journey.
          </p>
        </div>

        {/* booking form */}
        <form
          onSubmit={handleBooking}
          className="bg-white mb-12 rounded-2xl shadow-2xl p-6 md:p-8"
        >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Your Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full h-11 border border-gray-200 rounded-lg px-4 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
              />
            </div>

            {/* email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full h-11 border border-gray-200 rounded-lg px-4 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
              />
            </div>

            {/* location */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Your Location
              </label>

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Where are you from?"
                required
                className="w-full h-11 border border-gray-200 rounded-lg px-4 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
              />
            </div>

            {/* destination */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Destination
              </label>

              <select
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                required
                className="w-full h-11 border border-gray-200 rounded-lg px-4 text-sm outline-none bg-white focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
              >
                <option value="" disabled>
                  Select your destination
                </option>

                {destinations.map((destination) => (
                  <option key={destination} value={destination}>
                    {destination}
                  </option>
                ))}
              </select>
            </div>

            {/* from */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                From
              </label>

              <input
                type="date"
                name="from"
                value={formData.from}
                min={today}
                onChange={handleChange}
                required
                className="w-full h-11 border border-gray-200 rounded-lg px-4 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
              />
            </div>

            {/* to */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                To
              </label>

              <input
                type="date"
                name="to"
                value={formData.to}
                min={formData.from || today}
                onChange={handleChange}
                required
                className="w-full h-11 border border-gray-200 rounded-lg px-4 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
              />
            </div>

          </div>

          {/* submit */}
          <button
            type="submit"
            className="w-full mt-7 h-12 bg-orange-400 hover:bg-orange-500 text-black font-semibold rounded-lg transition duration-200 shadow-md"
          >
            Review Booking
          </button>

        </form>
      </div>


      {/* modal */}

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-5">

          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6 md:p-8">

            <div className="text-center mb-6">

              <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest">
                Almost There
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-1">
                Confirm Your Booking
              </h2>

              <p className="text-gray-500 text-sm mt-2">
                Please check your information before confirming.
              </p>

            </div>


            {/* info */}
            <div className="mb-5">

              <h3 className="font-bold text-lg text-gray-800 border-b pb-2 mb-3">
                Personal Information
              </h3>

              <div className="space-y-2 text-sm">

                <div className="flex justify-between gap-4">
                  <span className="text-gray-500">
                    Name
                  </span>

                  <span className="font-semibold text-gray-800">
                    {formData.name}
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-gray-500">
                    Email
                  </span>

                  <span className="font-semibold text-gray-800">
                    {formData.email}
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-gray-500">
                    Location
                  </span>

                  <span className="font-semibold text-gray-800">
                    {formData.location}
                  </span>
                </div>

              </div>

            </div>


          
            <div className="mb-6">

              <h3 className="font-bold text-lg text-gray-800 border-b pb-2 mb-3">
                Trip Information
              </h3>

              <div className="space-y-2 text-sm">

                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Destination
                  </span>

                  <span className="font-bold text-orange-500">
                    {formData.destination}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Departure
                  </span>

                  <span className="font-semibold text-gray-800">
                    {formData.from}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Return
                  </span>

                  <span className="font-semibold text-gray-800">
                    {formData.to}
                  </span>
                </div>

              </div>

            </div>


            {/* buttons */}
            <div className="flex gap-3">

              {/* cancel */}
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="w-1/2 h-11 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition"
              >
                Go Back
              </button>

              {/* confirm */}
              <button
                type="button"
                onClick={handleConfirm}
                className="w-1/2 h-11 bg-orange-400 hover:bg-orange-500 rounded-lg font-semibold text-black transition"
              >
                Confirm Booking
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default Booking;