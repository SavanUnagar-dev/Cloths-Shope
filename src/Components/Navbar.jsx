import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown, FaBars, FaTimes } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Menu = [
    { id: 1, name: "Home", link: "/#" },
    { id: 2, name: "Top Rated", link: "/#" },
    { id: 3, name: "Kids Wear", link: "/#" },
    { id: 4, name: "Mens Wear", link: "/#" },
    { id: 5, name: "Electronics", link: "/#" },
];

const DropdownLink = [
    { id: 1, name: "Trending Product", link: "/#" },
    { id: 2, name: "Best Selling", link: "/#" },
    { id: 3, name: "Top Rated", link: "/#" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        {/* upper-navbar */}
        <div className="bg-orange-200 dark:bg-orange-950 py-2">
          <div className="container flex justify-between items-center">
            <div>
              <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                <img src={Logo} alt="Logo" className="w-10" />
                Shopsy
              </a>
            </div>

            {/* Search bar and buttons */}
            <div className="flex items-center gap-4">
              {/* Toggle Button for Mobile */}
              <div className="sm:hidden mt-2">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="text-xl focus:outline-none"
                >
                  {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
              </div>

              {/* search bar */}
              <div className="hidden sm:flex relative group">
                <input
                  type="text"
                  placeholder="search"
                  className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-orange-600 dark:border-gray-500 dark:bg-gray-800"
                />
                <IoMdSearch className="text-gray-500 absolute top-1 translate-y-1/2 right-3 group-hover:text-orange-500 dark:text-gray-400 dark:group-hover:text-gray-200" />
              </div>

              {/* order button */}
              <button
                onClick={() => alert("Ordering not available yet")}
                className="hidden sm:flex bg-gradient-to-r from-orange-300 to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
              >
                <span className="group-hover:block hidden transition-all duration-200">
                  Order
                </span>
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>

              {/* Darkmode switch */}
              <div>
                <DarkMode />
              </div>
            </div>
          </div>
        </div>

        {/* lower-navbar */}
        <div
          className={`container ${
            menuOpen ? "block" : "hidden"
          } sm:flex items-center`}
        >
          <ul className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {Menu.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="inline-block px-4 py-2 hover:text-orange-300 duration-200"
                >
                  {data.name}
                </a>
              </li>
            ))}

            {/* Simple Dropdown and Links */}
            <li className="group relative cursor-pointer">
              <a href="#" className="flex items-center gap-[2px] py-2">
                Trending Products
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>
              <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white text-black shadow-md">
                <ul>
                  {DropdownLink.map((data) => (
                    <li key={data.id}>
                      <a
                        href={data.link}
                        className="inline-block w-full rounded-md p-2 hover:bg-orange-200"
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
