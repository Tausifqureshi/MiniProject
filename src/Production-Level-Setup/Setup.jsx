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



