import React, { useState, useEffect } from "react";

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // mobile menu toggle

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scroll down → hide navbar
        setIsVisible(false);
      } else {
        // Scroll up → show navbar
        setIsVisible(true);
      }

      // Navbar background color change after some scroll
      setIsScrolled(window.scrollY > 50);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = ["Home", "About", "Services", "Contact", "Login"];

  return (
    <header
      className={`fixed w-full z-50 top-0 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "bg-white shadow-md" : "bg-gray-900"}`}
    >
      <nav className="max-w-7xl mx-auto px-5 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1
          className={`text-2xl font-bold ${
            isScrolled ? "text-gray-900" : "text-white"
          }`}
        >
          Brand
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li
              key={item}
              className={`cursor-pointer font-medium transition-colors duration-200 ${
                isScrolled
                  ? "text-gray-800 hover:text-blue-600"
                  : "text-white hover:text-blue-400"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button (Icon) */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FiX className={isScrolled ? "text-gray-800" : "text-white"} />
          ) : (
            <FiMenu className={isScrolled ? "text-gray-800" : "text-white"} />
          )}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div
          className={`md:hidden transition-all duration-300 ${
            isScrolled ? "bg-white" : "bg-gray-800"
          }`}
        >
          <ul className="flex flex-col items-center py-4 space-y-3">
            {navItems.map((item) => (
              <li
                key={item}
                className={`cursor-pointer font-medium ${
                  isScrolled
                    ? "text-gray-800 hover:text-blue-600"
                    : "text-white hover:text-blue-400"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default ResponsiveNavbar;
