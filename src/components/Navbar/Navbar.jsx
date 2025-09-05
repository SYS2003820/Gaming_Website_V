import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import AuthModal from "../AuthModal/AuthModal";

const Navbar = () => {
  const [authOpen, setAuthOpen] = useState(false);

  const scrollToTrending = () => {
    document
      .getElementById("trending-games")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className="sticky top-0 z-50 bg-[#0d0a18]/90 backdrop-blur-md">
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-4 px-6">
            {/* Left side - Logo + Menu */}
            <div className="flex gap-8 items-center text-white">
              <a href="#">
                <img src={Logo} alt="Logo" className="w-16" />
              </a>
              <div className="hidden sm:block">
                <ul className="flex gap-6 items-center font-medium">
                  <li>
                    <button
                      onClick={scrollToTrending}
                      className="cursor-pointer hover:text-blue-400 transition"
                    >
                      Explore
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={scrollToTrending}
                      className="cursor-pointer hover:text-blue-400 transition"
                    >
                      Release
                    </button>
                  </li>
                  <li className="relative">
                    <input
                      type="search"
                      name="search"
                      id="search"
                      placeholder="Search games.."
                      className="bg-gray-700/50 px-4 py-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <IoMdSearch className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-300" />
                  </li>
                </ul>
              </div>
            </div>

            {/* Right side - Auth buttons */}
            <div className="text-white">
              <ul className="flex gap-4 items-center">
                <li>
                  <button
                    className="bg-gray-700 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-600 transition"
                    onClick={() => setAuthOpen(true)}
                  >
                    Login
                  </button>
                </li>
                <li>
                  <button
                    className="bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-3 rounded-2xl font-semibold hover:from-blue-600 hover:to-blue-800 transition"
                    onClick={() => setAuthOpen(true)}
                  >
                    Sign Up
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
};

export default Navbar;
