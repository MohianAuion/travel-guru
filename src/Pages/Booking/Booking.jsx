import React from "react";

const Booking = () => {
  return (
    <div className="w-10/12 mx-auto mt-35">

        <div className="flex justify-center items-center gap-24" >
      {/* text */}
      <div className="w-[40%] space-y-4">
        <h2 className="text-6xl text-white font-bold">Cox's bazar</h2>
        <p className="text-white text-lg">
          Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known
          for its very long, sandy beachfront, stretching from Sea Beach in the
          north to Kolatoli Beach in the south. Aggameda Khyang monastery is
          home to bronze statues and centuries-old Buddhist manuscripts. South
          of town, the tropical rainforest of Himchari National Park has
          waterfalls and many birds. North, sea turtles breed on nearby Sonadia
          Island.
        </p>
      </div>


      {/* form */}

      {/* Booking Form */}
      <div className="bg-white rounded-sm p-4 w-[300px]">

{/* name */}
        <label className="block text-[10px] text-gray-500 mb-1">Name</label>

          <input
            type="text"
           placeholder="type your name"
            readOnly
            className="w-full h-8 bg-gray-100 rounded-sm px-3 text-[11px] font-semibold text-black outline-none"
          />

          {/* email */}
           <label className="block text-[10px] text-gray-500 mb-1">Email</label>

          <input
            type="text"
           placeholder="enter your email"
            readOnly
            className="w-full h-8 bg-gray-100 rounded-sm px-3 text-[11px] font-semibold text-black outline-none"
          />

          {/* location */}
           <label className="block text-[10px] text-gray-500 mb-1">Location</label>

          <input
            type="text"
           placeholder="your location"
            readOnly
            className="w-full h-8 bg-gray-100 rounded-sm px-3 text-[11px] font-semibold text-black outline-none"
          />
      

        {/* Destination */}
       
          <label className="block text-[10px] text-gray-500 mb-1">
            Destination
          </label>

          <input
            type="text"
            value="Select your Destination"
            readOnly
            className="w-full h-8 bg-gray-100 rounded-sm px-3 text-[11px] font-semibold text-black outline-none"
          />
        

        {/* From and To */}
        <div className="flex gap-2 mb-3">
          {/* From */}
          <div className="w-1/2">
            <label className="block text-[10px] text-gray-500 mb-1">From</label>

            <div className="relative">
              <input
                type="text"
                value="01/09"
                readOnly
                className="w-full h-8 bg-gray-100 rounded-sm px-3 text-[11px] font-semibold text-black outline-none"
              />

              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs">
                📅
              </span>
            </div>
          </div>

          {/* To */}
          <div className="w-1/2">
            <label className="block text-[10px] text-gray-500 mb-1">To</label>

            <div className="relative">
              <input
                type="text"
                value="12/09"
                readOnly
                className="w-full h-8 bg-gray-100 rounded-sm px-3 text-[11px] font-semibold text-black outline-none"
              />

              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs">
                📅
              </span>
            </div>
          </div>
        </div>

        {/* Booking Button */}
        <button className="w-full h-8 bg-orange-400 hover:bg-orange-500 rounded-sm text-black text-[10px] font-medium">
          Confirm Booking
        </button>
      </div>
    </div>
    </div>
  );
};

export default Booking;
