import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content py-8 px-6">
      <div className="w-11/12 md:w-10/12 mx-auto flex flex-col items-center gap-6 text-center">

       {/* logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-yellow-400 text-neutral flex items-center justify-center text-lg shrink-0">
            <FaPaperPlane />
          </div>
          <p className="font-bold text-lg text-white">Travel Guru</p>
        </div>

        {/* links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
          <a href="/about" className="hover:text-yellow-400 transition">About us</a>
          <a href="/contact" className="hover:text-yellow-400 transition">Contact</a>
          <a href="/destinations" className="hover:text-yellow-400 transition">Destinations</a>
          <a href="/terms" className="hover:text-yellow-400 transition">Terms of use</a>
          <a href="/privacy" className="hover:text-yellow-400 transition">Privacy policy</a>
        </div>

        {/* divider */}
        <div className="w-full max-w-xs border-t border-white/10"></div>

        {/* copyright */}
        <div className="text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Travel Guru. All rights reserved.</p>
          <p className="mt-1">
            Created by <span className="text-yellow-400 font-medium">Mohian Ahmed Auion</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;