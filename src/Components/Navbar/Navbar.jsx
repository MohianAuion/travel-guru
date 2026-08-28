import React, { use, useState } from "react";
import logo from "../../assets/logo.png";
import defaultUserImg from "../../assets/user.png";
import { Link, NavLink, useNavigate } from "react-router";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import AuthContext from "../../Context/AuthContext";
import "./Navbar.css";
import { CgProfile } from "react-icons/cg";

const Navbar = ({ light = false }) => {
  const { user, logOut } = use(AuthContext);

  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const links = (
    <>
      <li className="hover:font-bold">
        <Link to="/">Home</Link>
      </li>

      <li className="hover:font-bold">
        <NavLink to="/destinations">Destinations</NavLink>
      </li>

      <li className="hover:font-bold">
        <NavLink to="/about">About Us</NavLink>
      </li>

      <li className="hover:font-bold">
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  // logout
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(() => {});
  };

  // handle search
  const handleSearch = (e) => {
    
    if (e.key === "Enter") {
      navigate("/destinations");
    }
  };

  return (
    <div className="max-w-11/12 lg:max-w-10/12 mx-auto rounded-md">
      <div className="navbar flex items-center justify-between pt-5 gap-3">
        {/* logo image */}
        <div className="shrink-0">
          <img
            className={`w-24 sm:w-28 lg:w-34 ${
              light ? "" : "brightness-0 invert"
            }`}
            src={logo}
            alt="Travel Guru logo"
          />
        </div>

        {/* for desktop */}

        <div className="hidden lg:block">
          {!light && (
            <div className="relative">
              <input
                type="text"
                placeholder="Search Destination"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleSearch}
                className="input pr-10 pl-9 w-full text-white font-semibold bg-gray-300/50"
              />

              <span className="absolute text-white top-1/2 -translate-y-1/2 right-3">
                <FaSearch />
              </span>
            </div>
          )}
        </div>

        <div className="hidden lg:block">
          <ul
            className={`flex gap-10 font-medium ${
              light ? "text-black" : "text-white"
            }`}
          >
            {links}
          </ul>
        </div>

        <div className="flex items-center gap-3">
          {/* profile */}

          <div>
            {user ? (
              <img
                src={user.photoURL || defaultUserImg}
                alt={user.displayName || "User"}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-yellow-400"
              />
            ) : (
              <CgProfile
                className={`text-3xl sm:text-4xl ${light ? "" : "text-white"}`}
              />
            )}
          </div>

          {/* login */}

          <div className="hidden lg:block">
            {user ? (
              <Link
                onClick={handleLogOut}
                to="/auth"
                className="btn btn-warning ml-2"
              >
                LogOut
              </Link>
            ) : (
              <Link to="/auth" className="btn btn-warning ml-2">
                LogIn
              </Link>
            )}
          </div>

          {/* menu */}

          <button
            className={`lg:hidden text-2xl ${
              light ? "text-black" : "text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* for mobile */}

      {menuOpen && (
        <div className="lg:hidden bg-base-100 rounded-md shadow-md mt-2 p-4">
          {/* search */}

          {!light && (
            <div className="relative w-full mb-4">
              <input
                type="text"
                placeholder="Search Destination"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleSearch}
                className="input pr-10 pl-9 w-full text-white font-semibold bg-gray-300/50"
              />

              <span className="absolute text-gray-500 top-1/2 -translate-y-1/2 right-3">
                <FaSearch />
              </span>
            </div>
          )}

          <ul className="flex flex-col gap-4 font-medium text-black">
            {links}

            {/* login */}

            <li>
              {user ? (
                <Link
                  onClick={() => {
                    handleLogOut();
                    setMenuOpen(false);
                  }}
                  to="/auth"
                  className="btn btn-warning w-full"
                >
                  LogOut
                </Link>
              ) : (
                <Link
                  onClick={() => setMenuOpen(false)}
                  to="/auth"
                  className="btn btn-warning w-full"
                >
                  LogIn
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
