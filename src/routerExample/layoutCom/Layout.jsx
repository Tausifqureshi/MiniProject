// // Layout.jsx;
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
//     // { name: "Dashboard", path: "/dashboard" },
//     { name: "Profile", path: "/dashboard/profile" },
//     { name: "Settings", path: "/dashboard/settings" },
//   ];

//   const handleLogout = () => {
//     logout();
//     navigate("/login", { state: { from: location.pathname } });
//     closeMenus(); //
//   };

//   //   const handleDashboardClick = () => {
//   //     // if (user) {  //agar muje dropwond pe click karte hi naviget karna dashbora tu yaha approch usr upper dashbordlink me pth dashbord wali command karna hoga
//   //     //   navigate("/dashboard"); // 🔁 Navigate to Dashboard page
//   //     //   setDropdownOpen(!dropdownOpen); // Open dropdown menu
//   //     // } else {

//   //     //   navigate("/login", { state: { from: "/dashboard" } }); // If not logged in, go to login
//   //     // }

//   //     if (user) {
//   //     navigate("/dashboard");         // 🔁 Redirect to dashboard
//   //   } else {
//   //     navigate("/login", { state: { from: "/dashboard" } }); // 🔐 Redirect to login
//   //   }

//   // //  setDropdownOpen(!dropdownOpen)
//   //   };

//   const handleDashboardClick = () => {
//     if (!user) {
//          // 🔐 Agar user login nahi hai
//       navigate("/login", { state: { from: "/dashboard" } });
//       return;
//     }

//     if (dropdownOpen === false) {
//       // ✅ Agar dropdown abhi band hai → open karo
//       setDropdownOpen(true);
//     } else {
//          // ✅ Agar dropdown abhi open hai → dashboard bhejo + dropdown band karo
//       navigate("/dashboard");
//       setDropdownOpen(false);
//     }
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
//           <nav className="hidden md:flex items-center space-x-6 relative">
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

import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../contexAPI/AuthProvider ";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Layout() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mainLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const dashboardLinks = [
    { name: "Dashbord", path: "/dashboard" },
    { name: "Profile", path: "/dashboard/profile" },
    { name: "Settings", path: "/dashboard/settings" },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login", { state: { from: location.pathname } });
    closeMenus();
  };

  const handleDashboardClick = () => {
    if (!user) {
      navigate("/login", { state: { from: "/dashboard" } });
      return;
    }

    if (!dropdownOpen) {
      setDropdownOpen(true);
    } else {
      navigate("/dashboard");
      setDropdownOpen(false);
    }
  };

  const closeMenus = () => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    setMobileDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
        setMobileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Reusable Link Renderer
  const renderLinks = (links, isMobile = false) =>
    links.map((link) => (
      <Link
        key={link.name}
        to={link.path}
        className={`${
          isMobile ? "block text-white" : "hover:underline"
        } px-2 py-1`}
        onClick={closeMenus}
      >
        {link.name}
      </Link>
    ));

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            My App
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6 relative">
            {renderLinks(mainLinks)}

            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => windowWidth >= 768 && setIsHovering(true)}
              onMouseLeave={() => windowWidth >= 768 && setIsHovering(false)}
            >
              <button
                className="hover:underline px-2 py-1"
                onClick={handleDashboardClick}
              >
                Admin <span className="text-xl">&#9662;</span>
              </button>

              {(dropdownOpen || isHovering) && (
                <div className="absolute bg-white text-black shadow-lg rounded z-50 top-full left-0 min-w-[150px]">
                  {renderLinks(dashboardLinks)}
                </div>
              )}
            </div>

            {user ? (
              <button
                onClick={handleLogout}
                className="hover:bg-indigo-600 transition px-2 py-1 rounded"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="hover:bg-indigo-600 transition px-2 py-1 rounded"
              >
                Sign-in
              </Link>
            )}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 bg-blue-500 p-4 rounded">
            {renderLinks(mainLinks, true)}

            <div className="border-t border-blue-400 pt-2">
              <button
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                className="text-white font-semibold flex items-center justify-between w-full"
              >
                Admin <span>{mobileDropdownOpen ? "▲" : "▼"}</span>
              </button>

              {mobileDropdownOpen && (
                <div className="mt-2 space-y-1 ml-2">
                  {renderLinks(dashboardLinks, true)}
                </div>
              )}
            </div>

            {user ? (
              <button
                onClick={handleLogout}
                className="block text-white mt-2 hover:underline"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={closeMenus}
                className="block text-white mt-2 hover:underline"
              >
                Sign-in
              </Link>
            )}
          </div>
        )}
      </header>

      {/* Main content */}
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
