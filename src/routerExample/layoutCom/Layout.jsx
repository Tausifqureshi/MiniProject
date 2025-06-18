
// NavbarDropdown.jsx
import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  const [dropdownOpen, setDropdownOpen] = useState(false);



  const closeDropdown = () => {
    setDropdownOpen(false);
    console.log("closeDropdown");
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-lg font-bold">My App</h1>

          <nav className="flex space-x-4 items-center relative">
            <Link to="/" className="hover:underline" onClick={closeDropdown}>
              Home
            </Link>
            <Link to="/about" className="hover:underline" onClick={closeDropdown}>
              About
            </Link>
            <Link to="/contact" className="hover:underline" onClick={closeDropdown}>
              Contact
            </Link>

            {/* 🔻 Dashboard Dropdown */}
            <div className="relative">
              <button
                // onClick={toggleDropdown}
                 onClick={() => setDropdownOpen(!dropdownOpen)  }
                className="hover:underline focus:outline-none px-2 py-1"
              >
                Dashboard
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white text-black shadow-lg rounded z-50 min-w-[150px]">
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={closeDropdown}
                  >
                    Dashboard Home
                  </Link>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={closeDropdown}
                  >
                    Profile
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={closeDropdown}
                  >
                    Settings
                  </Link>
                </div>
              )}
            </div>

            <Link to="/login" className="hover:underline" onClick={closeDropdown}>
              Login
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 mx-auto p-4">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center p-4 border-t mt-4">
        <p className="text-sm text-gray-600">© 2025 My App</p>
      </footer>
    </div>
  );
}





















