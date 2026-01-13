import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

function ResponsiveNavbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hide on scroll down, show on scroll up
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      // Change background after scroll 50px
      setIsScrolled(window.scrollY > 50);

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // ✔ Paths with links
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/login" },
  ];

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
            <li key={item.name}>
              <Link
                to={item.path}
                className={`cursor-pointer font-medium transition-colors duration-200 ${
                  isScrolled
                    ? "text-gray-800 hover:text-blue-600"
                    : "text-white hover:text-blue-400"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FiX className={isScrolled ? "text-gray-800" : "text-white"} />
          ) : (
            <FiMenu className={isScrolled ? "text-gray-800" : "text-white"} />
          )}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div
          className={`md:hidden transition-all duration-300 ${
            isScrolled ? "bg-white" : "bg-gray-800"
          }`}
        >
          <ul className="flex flex-col items-center py-4 space-y-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)} // click close menu
                  className={`cursor-pointer font-medium ${
                    isScrolled
                      ? "text-gray-800 hover:text-blue-600"
                      : "text-white hover:text-blue-400"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default ResponsiveNavbar;
  



  // Change use  Employment Description
// I worked as a freelance Frontend Developer, building responsive and user-friendly web applications using React.js, Next.js, and TypeScript. My responsibilities included collaborating with clients to convert UI/UX designs into reusable components, integrating REST APIs, and ensuring the delivery of production-ready applications with optimized performance and cross-browser compatibility. I developed responsive web applications, implemented component-based UI architecture, and integrated dynamic data rendering through REST APIs. Additionally, I used Redux and Context API for state management, improved UI performance, responsiveness, and accessibility, and deployed applications on Vercel and Netlify. I also maintained clean and maintainable code using Git and GitHub, while continuously working with clients to enhance features and update requirements. My tools and technologies included React.js, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Material-UI, Redux, Git, GitHub, Firebase, Vercel, and Netlify.

 
// Mian Naukri Employment Description:
// Worked as a Freelance Frontend Developer, delivering scalable, responsive, and user-centric web applications using React.js, Next.js, and TypeScript. Collaborated closely with clients to translate UI/UX designs into clean, reusable, and maintainable components. Integrated REST APIs, implemented component-based architecture, and ensured production-ready applications with optimized performance and cross-browser compatibility. Used Redux and Context API for efficient state management, improved UI responsiveness, accessibility, and performance, and deployed applications on Vercel and Netlify. Maintained clean code and version control using Git and GitHub, while continuously enhancing features based on client requirements. Technologies: React.js, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Material UI, Redux, REST APIs, Git, GitHub, Firebase, Vercel, Netlify.




// Resume headline Naukri ki change 
// Frontend Engineer skilled in HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, Next.js, Firebase, Node.js, Redux, React Router, Tailwind, Bootstrap, Material-UI, Git, GitHub, REST APIs.
// LinkedIn: https://www.linkedin.com/in/tausif-qureshi/ 

// resume headline ki change
// I am an immediate joiner & looking for a Frontend Developer role. Experienced professional with 1+ year of experience in React.js, Next.js, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS & Redux.


// React.js Frontend Developer | Next.js | TypeScript | UI Development




//  8543212587 
