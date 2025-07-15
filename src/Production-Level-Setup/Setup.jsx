// API Setup 
// src/api/api.js
// src/api/api.js
import axios from "axios";

// Axios base instance
const API = axios.create({
  baseURL: "https://your-backend-api.com/api", // 🔁 Change to your actual backend URL
});

// Attach token automatically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

//
// ---------------- AUTH APIs ----------------
//
export const loginUser = function (formData) {
  return API.post("/auth/login", formData);
};

export const registerUser = function (formData) {
  return API.post("/auth/register", formData);
};

export const getCurrentUser = function () {
  return API.get("/auth/me");
};

//
// ---------------- CATEGORY APIs ----------------
//
export const getCategories = () => API.get("/categories");

//
// ---------------- PRODUCT APIs ----------------
//
export const getAllProducts = () => API.get("/products");
export const getFilteredProducts = (query) => API.get(`/products?${query}`);
export const getSingleProduct = (id) => API.get(`/products/${id}`);

//
// ---------------- CART APIs ----------------
//
export const getCart = () => API.get("/cart");
export const addToCart = (item) => API.post("/cart", item);
export const removeFromCart = (itemId) => API.delete(`/cart/${itemId}`);
export const clearCart = () => API.delete("/cart/clear");

//
// ---------------- ORDER APIs ----------------
//
export const createOrder = (orderData) => API.post("/orders", orderData);
export const getMyOrders = () => API.get("/orders/my");
export const getSingleOrder = (orderId) => API.get(`/orders/${orderId}`);



// Authcontext provider context api use .
import React, { createContext, useContext, useEffect, useState } from "react";
import { loginUser, registerUser, getCurrentUser } from "../api/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (credentials) => {
    const { data } = await loginUser(credentials);
    localStorage.setItem("token", data.token);
    await loadUser(); // fetch user after login
  };

  const register = async (formData) => {
    const { data } = await registerUser(formData);
    localStorage.setItem("token", data.token);
    await loadUser();
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const loadUser = async () => {
    try {
      const { data } = await getCurrentUser();
      setUser(data);
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);



// Protected Route jis bhi  page pe use karna yaha Protected Route 
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function PrivateRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  return user ? children : <Navigate to="/login" />;
}


// Routes Setup import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import ProductDetail from "../pages/ProductDetail";
import PrivateRoute from "./PrivateRoute";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}





// npm add @emailjs/browser@latest








































// import React from 'react';
// import { ExternalLink, Github, Star, Code, Palette, Zap } from 'lucide-react';

// const Projects = () => {
//   const projects = [
//     {
//       title: 'E-Commerce React App',
//       description: 'A modern e-commerce platform built with React.js featuring product catalog, shopping cart, user authentication, and responsive design.',
//       image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
//       tech: ['React.js', 'JavaScript', 'Tailwind CSS', 'Context API'],
//       github: 'https://github.com',
//       demo: 'https://demo.com',
//       featured: true,
//       stars: 124,
//       category: 'Web App'
//     },
//     {
//       title: 'Weather Dashboard',
//       description: 'Interactive weather application with real-time data, location search, 5-day forecast, and beautiful animated UI components.',
//       image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
//       tech: ['React.js', 'Weather API', 'CSS3', 'Chart.js'],
//       github: 'https://github.com',
//       demo: 'https://demo.com',
//       featured: true,
//       stars: 89,
//       category: 'Dashboard'
//     },
//     {
//       title: 'Task Management Tool',
//       description: 'Productivity app with drag-and-drop functionality, task categories, progress tracking, and local storage persistence.',
//       image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
//       tech: ['React.js', 'JavaScript', 'CSS Grid', 'Local Storage'],
//       github: 'https://github.com',
//       demo: 'https://demo.com',
//       featured: false,
//       stars: 67,
//       category: 'Productivity'
//     },
//     {
//       title: 'Portfolio Website',
//       description: 'Responsive portfolio website with dark mode, smooth animations, contact form, and modern design principles.',
//       image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
//       tech: ['React.js', 'Tailwind CSS', 'Framer Motion', 'EmailJS'],
//       github: 'https://github.com',
//       demo: 'https://demo.com',
//       featured: false,
//       stars: 43,
//       category: 'Portfolio'
//     },
//   ];

//   const categories = ['All', 'Web App', 'Dashboard', 'Productivity', 'Portfolio'];
//   const [activeCategory, setActiveCategory] = React.useState('All');

//   const filteredProjects = activeCategory === 'All' 
//     ? projects 
//     : projects.filter(project => project.category === activeCategory);

//   return (
//     <section id="projects" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>
      
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="max-w-7xl mx-auto">
//           {/* Section Header */}
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
//               <Code className="w-5 h-5 text-purple-600 mr-2" />
//               <span className="text-purple-600 dark:text-purple-400 font-semibold">My Work</span>
//             </div>
//             <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               Featured Projects
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
//               Here are some of my recent frontend projects that showcase my skills in React.js, JavaScript, and modern web development
//             </p>
//           </div>

//           {/* Category Filter */}
//           <div className="flex flex-wrap justify-center gap-4 mb-12">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setActiveCategory(category)}
//                 className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
//                   activeCategory === category
//                     ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
//                     : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>

//           {/* Projects Grid */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
//             {filteredProjects.map((project, index) => (
//               <div
//                 key={index}
//                 className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-200 dark:border-gray-700"
//               >
//                 {/* Project Image */}
//                 <div className="relative overflow-hidden h-64">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
//                   {/* Overlay Icons */}
//                   <div className="absolute top-4 left-4 flex space-x-2">
//                     {project.featured && (
//                       <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
//                         <Star size={14} className="mr-1" />
//                         Featured
//                       </div>
//                     )}
//                     <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
//                       {project.category}
//                     </div>
//                   </div>

//                   {/* Quick Action Buttons */}
//                   <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <a
//                       href={project.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="p-3 bg-gray-900/80 text-white rounded-full hover:bg-gray-900 transition-colors duration-200"
//                     >
//                       <Github size={18} />
//                     </a>
//                     <a
//                       href={project.demo}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="p-3 bg-blue-600/80 text-white rounded-full hover:bg-blue-600 transition-colors duration-200"
//                     >
//                       <ExternalLink size={18} />
//                     </a>
//                   </div>
//                 </div>

//                 {/* Project Content */}
//                 <div className="p-8">
//                   {/* Title and Stars */}
//                   <div className="flex items-center justify-between mb-4">
//                     <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
//                       {project.title}
//                     </h3>
//                     <div className="flex items-center text-yellow-500">
//                       <Star size={16} className="mr-1 fill-current" />
//                       <span className="text-sm font-semibold">{project.stars}</span>
//                     </div>
//                   </div>

//                   {/* Description */}
//                   <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
//                     {project.description}
//                   </p>

//                   {/* Tech Stack */}
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {project.tech.map((tech, techIndex) => (
//                       <span
//                         key={techIndex}
//                         className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Action Buttons */}
//                   <div className="flex space-x-4">
//                     <a
//                       href={project.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-xl hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-200 font-medium transform hover:scale-105"
//                     >
//                       <Github size={18} className="mr-2" />
//                       Code
//                     </a>
//                     <a
//                       href={project.demo}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium transform hover:scale-105"
//                     >
//                       <ExternalLink size={18} className="mr-2" />
//                       Live Demo
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* View More Button */}
//           <div className="text-center">
//             <a
//               href="https://github.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
//             >
//               <Github size={20} className="mr-3 group-hover:animate-pulse" />
//               View All Projects
//               <Zap size={20} className="ml-3 group-hover:animate-bounce" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;