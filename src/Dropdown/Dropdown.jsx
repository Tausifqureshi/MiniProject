import React, { useState, useEffect, useRef } from "react";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaCaretDown,
} from "react-icons/fa";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Dropdown() {
  // Navbar states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  // Custom dropdown
  const [open, setOpen] = useState(false); // for custom dropdown
  const [selected, setSelected] = useState("Select Platform"); 

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleMobileDropdown = () => setMobileDropdownOpen(!mobileDropdownOpen);

  const handleMobileLinkClick = () => {
    setMobileDropdownOpen(false); // Close mobile dropdown
    setMobileMenuOpen(false); // Close mobile menu
  };
   const dropdownRef = useRef(null); // 👉 dropdown ka reference

  useEffect(()=>{
    const handleClickOutside =(event) =>{
      // Agar click dropdown ke bahar hua ho to dropdown band kar do
      if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
        setOpen(false); // dropdown band kar do.
      }

    }
    document.addEventListener("click", handleClickOutside);

    return()=>{
      document.removeEventListener("click", handleClickOutside);
    }

  }, [])

  const options = [
    {
      name: "Github",
      icon: <FaGithub className="text-[#171515]" />,
      url: "https://github.com",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="text-[#E1306C]" />,
      url: "https://instagram.com",
    },
    {
      name: "Linkedin",
      icon: <FaLinkedin className="text-[#0E76A8]" />,
      url: "https://linkedin.com",
    },
    {
      name: "Facebook",
      icon: <FaFacebook className="text-[#4267B2]" />,
      url: "https://facebook.com",
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="text-[#1DA1F2]" />,
      url: "https://twitter.com",
    },
  ];

  const handleSelect = (opt) => {
    setSelected(opt.name);
    setOpen(false); // dropdown band kar do.
    window.open(opt.url, "_blank");
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 py-3 md:px-8">
        {/* Logo */}
        <a href="#" className="text-xl font-bold text-blue-600">
          MySite
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-gray-800 font-medium">
          <a href="#">Home</a>
          <a href="#">About</a>

          {/* CUSTOM DROPDOWN (DESKTOP) */}
          <div className="relative" ref={dropdownRef}>
            <div
              onClick={() => setOpen(!open)}
              className="flex items-center justify-between bg-white h-[45px] px-4 
              text-base font-normal rounded-lg shadow cursor-pointer w-[200px]"
            >
              <span>{selected}</span>
              <FaCaretDown
                className={`transition-all duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </div>

            <ul
              className={`absolute left-0 top-full bg-white shadow rounded-lg overflow-hidden mt-2 transition-all duration-500 w-[200px] z-50 ${
                open ? "max-h-[300px]" : "max-h-0"
              }`}
            >
              {options.map((opt, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(opt)}
                  className="flex items-center h-[50px] px-4 cursor-pointer hover:bg-gray-100"
                >
                  {opt.icon}
                  <span className="ml-3 text-gray-700">{opt.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <a href="#">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {mobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-gray-700 font-medium">
          <a href="#" onClick={handleMobileLinkClick}>
            Home
          </a>
          <a href="#" onClick={handleMobileLinkClick}>
            About
          </a>

          {/* MOBILE DROPDOWN */}
          <div>
            <button
              onClick={toggleMobileDropdown}
              className="w-full text-left flex justify-between"
            >
              {selected}
              <span>{mobileDropdownOpen ? "▲" : "▼"}</span>
            </button>

            {mobileDropdownOpen && (
              <div className="ml-4 mt-2 space-y-2">
                {options.map((opt, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => handleSelect(opt)}
                  >
                    {opt.icon}
                    <span>{opt.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <a href="#" onClick={handleMobileLinkClick}>
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
 j