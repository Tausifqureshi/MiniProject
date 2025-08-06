// Layout.jsx;
// import React, { useState, useEffect, useRef } from "react";
// import { useAuth } from "../contexAPI/AuthProvider ";
// import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";

// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// export default function Layout() {
//   // 🔽 Desktop dropdown (Dashboard) ke liye open/close state
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   // 📱 Mobile navbar (hamburger menu) ke liye open/close state
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   // 📱 Mobile me Dashboard dropdown ke liye open/close state
//   const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

//   // 🖱️ Mouse hover detect karne ke liye (sirf desktop dropdown pe)
//   const [isHovering, setIsHovering] = useState(false);

//   const [windowWidth, setWindowWidth] = useState(window.innerWidth); // 🆕 Add this
//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const { user, logout } = useAuth();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const dropdownRef = useRef();

//   // ✅ Navigation Arrays
//   const mainLinks = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Contact", path: "/contact" },
//   ];

//   const dashboardLinks = [
//     { name: "Dashboard", path: "/dashboard" },
//     { name: "Profile", path: "/dashboard/profile" },
//     { name: "Settings", path: "/dashboard/settings" },
//   ];

//   const handleLogout = () => {
//     logout();
//     navigate("/login", { state: { from: location.pathname } });
//     closeMenus(); //
//   };

//   const handleDashboardClick = () => {
//     // if (!user) {  //agar muje dropwond pe click karte hi naviget karna dashbora tu yaha approch usr upper dashbordlink me pth dashbord wali command karna hoga
//     //   // 🔐 Agar user login nahi hai
//     //   navigate("/login", { state: { from: "/dashboard" } });
//     //   return;
//     // }

//     // if (dropdownOpen === false) {
//     //   // ✅ Agar dropdown abhi band hai → open karo
//     //   setDropdownOpen(true);
//     // } else {
//     //   // ✅ Agar dropdown abhi open hai → dashboard bhejo + dropdown band karo
//     //   navigate("/dashboard");
//     //   setDropdownOpen(false);
//     // }

//     setDropdownOpen(!dropdownOpen)
//   };

//   const closeMenus = () => {
//     setDropdownOpen(false);
//     setMobileMenuOpen(false);
//     setMobileDropdownOpen(false);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       // Agar dropdownRef valid hai aur user ne dropdown ke bahar click kiya hai,
//       // to dropdown ko band kar do
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownOpen(false); // Dropdown ko band karo
//         setMobileDropdownOpen(false); // Mobile dropdown ko bhi band karo
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (  
//     <div className="flex flex-col min-h-screen font-sans">
//       {/* Header */}
//       <header className="bg-blue-600 text-white p-4 shadow-md">
//         <p className="text-xs text-gray-400">Width: {windowWidth}px</p>

//         <div className="container mx-auto flex justify-between items-center">
//           <Link to="/" className="text-xl font-bold">
//             My App
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-6">
//             {mainLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 className="hover:underline"
//                 onClick={closeMenus}
//               >
//                 {link.name}
//               </Link>
//             ))}

//             {/* Desktop Dropdown */}
//             <div
//               className="relative"
//               ref={dropdownRef}
//               //✅ >= 768 && setIsHovering(true)} // hover open (desktop).Jab mouse us element ke upar aaye → isHovering ko true kar do
//               onMouseEnter={() => {
//                 if (windowWidth >= 768) {
//                   setIsHovering(true);
//                 }
//               }}
//               //✅ >= 768 && setIsHovering(false)} // hover close (desktop).Jab mouse bahar nikal jaaye us element se → isHovering ko false kar do
//               onMouseLeave={() => {
//                 if (windowWidth >= 768) {
//                   setIsHovering(false);
//                 }
//               }}
//             >
//               <button
//                 className="hover:underline px-2 py-1"
//                 onClick={handleDashboardClick}
//               >
//                 Admin <span className="text-xl">&#9662;</span>
//               </button>

//               {(dropdownOpen || isHovering) && (
//                 <div className="absolute bg-white text-black shadow-lg rounded z-50 top-full left-0 min-w-[150px]">
//                   {dashboardLinks.map((link) => (
//                     <Link
//                       key={link.name}
//                       to={link.path}
//                       className="block px-4 py-2 hover:bg-gray-100"
//                       onClick={closeMenus}
//                     >
//                       {link.name}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {user ? (
//               <button
//                 onClick={handleLogout}
//                 className="hover:bg-indigo-600 hover:text-white transition px-2 py-1 rounded"
//               >
//                 Logout
//               </button>
//             ) : (
//               <Link
//                 to="/login"
//                 className="hover:bg-indigo-600 hover:text-white transition px-2 py-1 rounded"
//               >
//                 Sign-in
//               </Link>
//             )}
//           </nav>

//           {/* Mobile Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="text-white"
//             >
//               {mobileMenuOpen ? (
//                 <XMarkIcon className="h-6 w-6" />
//               ) : (
//                 <Bars3Icon className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="md:hidden mt-4 space-y-2 bg-blue-500 p-4 rounded">
//             {mainLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 className="block text-white"
//                 onClick={closeMenus}
//               >
//                 {link.name}
//               </Link>
//             ))}

//             {/* Mobile Dropdown */}
//             <div className="border-t border-blue-400 pt-2">
//               <button
//                 onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
//                 className="text-white font-semibold flex items-center justify-between w-full"
//               >
//                 Admin
//                 <span className="text-sm ml-2">
//                   {mobileDropdownOpen ? "▲" : "▼"}
//                 </span>
//               </button>

//               {mobileDropdownOpen && (
//                 <div className="mt-2 space-y-1 ml-2">
//                   {dashboardLinks.map((link) => (
//                     <Link
//                       key={link.name}
//                       to={link.path}
//                       className="block text-white"
//                       onClick={closeMenus}
//                     >
//                       {link.name}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {user ? (
//               <button
//                 onClick={handleLogout}
//                 className="block text-white mt-2 hover:underline"
//               >
//                 Logout
//               </button>
//             ) : (
//               <Link
//                 to="/login"
//                 onClick={closeMenus}
//                 className="block text-white mt-2 hover:underline"
//               >
//                 Sign-in
//               </Link>
//             )}
//           </div>
//         )}
//       </header>

//       {/* Main Content */}
//       <main className="flex-1 mx-auto p-4">
//         <Outlet />
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-100 text-center p-4 border-t mt-4">
//         <p className="text-sm text-gray-600">© 2025 My App</p>
//       </footer>
//     </div>
//   );
// }






import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-blue-600">MyApp</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Dashboard</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Projects</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Team</a>
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Avatar Dropdown (desktop) */}
            <div className="hidden md:block relative group">
              <button className="flex items-center space-x-2 focus:outline-none">
                <img
                  src="https://i.pravatar.cc/32"
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full"
                />
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition duration-150 ease-in-out z-20">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">Logout</a>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-sm border-t">
          <nav className="flex flex-col p-4 space-y-2">
            <a href="#" className="text-gray-700 hover:text-blue-600">Dashboard</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Projects</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Team</a>
            <hr />
            <a href="#" className="text-gray-700 hover:text-blue-600">Profile</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Settings</a>
            <a href="#" className="text-red-600 hover:text-red-700">Logout</a>
          </nav>
        </div>
      )}
    </header>
  );
}
