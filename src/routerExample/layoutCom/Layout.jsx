
// NavbarDropdown.jsx
import React, { useState, useEffect, useRef } from "react";
import { Outlet, Link , useLocation, useNavigate} from "react-router-dom";
import { useAuth } from "../contexAPI/AuthProvider ";

export default function Layout() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
const { user, logout } = useAuth();
const location = useLocation();
const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", {state: { from: location.pathname },});

  };


  const closeDropdown = () => {
    setDropdownOpen(false); //
    console.log("closeDropdown");
  };

    const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
            <div className="relative group" ref={dropdownRef}
            onMouseEnter={() => window.innerWidth >= 768 && setDropdownOpen(true)} // hover open (desktop)
            onMouseLeave={() => window.innerWidth >= 768 && setDropdownOpen(false)} // hover close (desktop)
            >
              <button
                 onClick={() => setDropdownOpen(!dropdownOpen)  }
                className="hover:underline focus:outline-none px-2 py-1"
                 aria-haspopup="true"  
                aria-expanded={dropdownOpen}
                
              >
                Dashboard <span className="text-xl">&#9662;</span> {/* Unicode arrow */}
              </button>

              {dropdownOpen && (
                <div className="absolute hidden group-hover:block top-full left-0  bg-white text-black shadow-lg rounded z-50 min-w-[150px]">
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={closeDropdown}
                  >
                    Dashboard Home
                  </Link>

                  <Link
                    to="/dashboard/profile"
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

            {/* <Link to="/login" className="hover:underline" onClick={closeDropdown}>
              Login
            </Link> */}

          {user ? (
        <a
          onClick={handleLogout}
          className="cursor-pointer hover:bg-indigo-600 hover:text-white transition px-2 py-1 rounded"
          // style={{ color: mode === "dark" ? "#fff" : "#212529" }}
        >
          Logout
        </a>
      ) : (
        <Link
        onClick={closeDropdown}
          to="/login"
          className="hover:bg-indigo-600 hover:text-white transition px-2 py-1 rounded"
          // style={{ color: mode === "dark" ? "#fff" : "#212529" }}
        >
          Sign-in
        </Link>
      )}
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



