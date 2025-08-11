import React from "react";
import { useAuth } from "../contexAPI/AuthProvider ";
function Dashboard() {
  // const { login, user } = useAuth();
   const { login, user } = useAuth();

  return (
    <div>
      <div className="flex flex-col items-center space-y-4 bg-white p-6 rounded-xl shadow-md max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-gray-800">Dashbord Page</h2>
        {user ? (
          <div className="space-y-1 text-center">
            <h1 className="text-lg text-gray-600">
              Logged in as <span className="font-medium">{user.name}</span>
            </h1>
            <p className="text-lg text-gray-600">
              Email: <span className="font-medium">{user.email}</span>
            </p>
          </div>
        ) : (
          <p className="text-xl text-gray-600">Please log in</p>
        )}

        <button
          // onClick={handleLogin}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Dashboard;

// Dropdown Project responsive
// import React, { useState } from "react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// export default function Layout() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

//   const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
//   const toggleDropdown = () => setMobileDropdownOpen(!mobileDropdownOpen);

//   const handleMobileLinkClick = () => {
//     setMobileDropdownOpen(false);
//     setMobileMenuOpen(false);
//   };

//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50">
//       <div className="flex justify-between items-center px-4 py-3 md:px-8">
//         {/* Logo */}
//         <a href="#" className="text-xl font-bold text-blue-600">MySite</a>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex items-center gap-6 text-gray-800 font-medium">
//           <a href="#">Home</a>
//           <a href="#">About</a>

//           {/* Hover Dropdown */}
//           <div className="relative group">
//             <button className="hover:text-blue-600">Services</button>
//             <div className="absolute top-full left-0 bg-white shadow-md rounded w-40 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
//               <a href="#" className="block px-4 py-2 hover:bg-gray-100">Web Dev</a>
//               <a href="#" className="block px-4 py-2 hover:bg-gray-100">SEO</a>
//               <a href="#" className="block px-4 py-2 hover:bg-gray-100">Design</a>
//             </div>
//           </div>

//           <a href="#">Contact</a>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden text-xl text-gray-800" onClick={toggleMenu}>
//           {mobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden px-4 pb-4 space-y-2 text-gray-700 font-medium">
//           <a href="#" className="block" onClick={handleMobileLinkClick}>Home</a>
//           <a href="#" className="block" onClick={handleMobileLinkClick}>About</a>

//           {/* Mobile Dropdown */}
//           <div>
//             <button
//               onClick={toggleDropdown}
//               className="w-full text-left flex justify-between items-center"
//             >
//               Services
//               <span>{mobileDropdownOpen ? "▲" : "▼"}</span>
//             </button>

//             {mobileDropdownOpen && (
//               <div className="ml-4 mt-2 space-y-1">
//                 <a href="#" className="block" onClick={handleMobileLinkClick}>Web Dev</a>
//                 <a href="#" className="block" onClick={handleMobileLinkClick}>SEO</a>
//                 <a href="#" className="block" onClick={handleMobileLinkClick}>Design</a>
//               </div>
//             )}
//           </div>

//           <a href="#" className="block" onClick={handleMobileLinkClick}>Contact</a>
//         </div>
//       )}
//     </header>
//   );
// }