import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content py-12 px-6">
      <div className="w-11/12 md:w-10/12 mx-auto flex flex-col md:flex-row justify-between gap-8">
        
        {/* Brand Info & Credits */}
        <div className="max-w-xs">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-yellow-400 text-neutral flex items-center justify-center text-2xl shrink-0">
              <FaPaperPlane />
            </div>
            <p className="font-bold text-xl text-white">Travel Guru</p>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Making your travel dreams simple & unforgettable. Providing reliable
            travel planning and expert guides.
          </p>

          <div className="mt-4 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Travel Guru. All rights reserved.</p>
            <p className="mt-1 text-xs text-gray-400">
              Created by{" "}
              <span className="text-yellow-400 font-medium">
                Mohian Ahmed Auion
              </span>
            </p>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h6 className="font-bold uppercase tracking-wider text-white mb-4">Company</h6>
          <div className="flex flex-col gap-2 text-sm text-gray-400">
            <a href="/about" className="hover:text-yellow-400 transition">About us</a>
            <a href="/contact" className="hover:text-yellow-400 transition">Contact</a>
            <a href="/destinations" className="hover:text-yellow-400 transition">Destinations</a>
            <a href="/blog" className="hover:text-yellow-400 transition">Travel Blog</a>
          </div>
        </div>

        {/* Legal Links */}
        <div>
          <h6 className="font-bold uppercase tracking-wider text-white mb-4">Legal</h6>
          <div className="flex flex-col gap-2 text-sm text-gray-400">
            <a href="/terms" className="hover:text-yellow-400 transition">Terms of use</a>
            <a href="/privacy" className="hover:text-yellow-400 transition">Privacy policy</a>
            <a href="/cookie-policy" className="hover:text-yellow-400 transition">Cookie policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;