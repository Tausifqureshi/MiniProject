// API Setup 
// src/api/api.js
// src/api/api.js
import axios from "axios";

// Axios base instance
const API = axios.create({
  baseURL: "https://your-backend-api.com/api", // 🔁 Change to your actual backend URL
});

// Attach token automatically .Interceptor har API ke sath automatically token laga deta hai, aur jab hum loginUser API call karte hain to backend response me token bhej deta hai.
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } //Header ke andar Authorization naam ka field add kar deti hai. Usme token daal deti hai
  return config;
});


// eh interceptor production me isliye use hota hai taaki jab token expire / invalid ho (401) to user ko automatically logout karke login page pe bhej de. React khud token expire check nahi karta, backend 401 bhejta hai aur yeh line React ko batati hai ke session khatam ho chuka hai.
API.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);

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
export const getCategoryById = (id) => API.get(`/categories/${id}`);

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
    await loadUser();//Login me hum sirf token localStorage me save karte hain, lekin React ko pata nahi hota ke user kaun hai. Is liye login ke baad loadUser() call karte hain taaki backend se user {data} lekar React ko bata sake aur UI render ho jaye.”
  };

  const register = async (formData) => {
    const { data } = await registerUser(formData);
    localStorage.setItem("token", data.token);// ← AUTOMATIC LOGIN PART 1 (token save)
    await loadUser(); // AUTOMATIC LOGIN PART 2 (load user data)
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




// Login code compponent me use karna hai
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const validate = () => {
    if (!form.email) return "Email required";
    if (!/\S+@\S+\.\S+/.test(form.email)) return "Invalid email";
    if (!form.password) return "Password required";
    if (form.password.length < 6) return "Min 6 chars password";
    return null;
  };

  const submit = async (e) => {
    e.preventDefault();
    const msg = validate();
    if (msg) return setError(msg);

    try {
      await login(form);
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <form onSubmit={submit}>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button>Login</button>
    </form>
  );
};

// export default Login;



// Signup component me use karna hai
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const { register } = useAuth();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const validate = () => {
    if (!form.name) return "Name required";
    if (!form.email) return "Email required";
    if (!/\S+@\S+\.\S+/.test(form.email)) return "Invalid email";
    if (form.password.length < 6) return "Password min 6 chars";
    if (form.password !== form.confirmPassword)
      return "Passwords do not match";
    return null;
  };

  const submit = async (e) => {
    e.preventDefault();
    const msg = validate();
    if (msg) return setError(msg);

    try {
      await register(form);
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <form onSubmit={submit}>
      <h2>Signup</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <input type="password" placeholder="Confirm Password" onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })} />
      <button>Create Account</button>
    </form>
  );
};

// export default Signup;

// Category context  withs filter
// src/context/CategoryContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { getCategories, getFilteredProducts } from "../api/api";

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    categories: [], // ← Multi-select categories
    search: "",
    priceMin: 0,
    priceMax: 0,
  });
  const [loading, setLoading] = useState(true);

  // Load categories
  const loadCategories = async () => {
    try {
      const { data } = await getCategories();
      setCategories(data);
    } catch (err) {
      console.error("Error loading categories", err);
    }
  };

  // Load products based on filters
  const loadProducts = async () => {
    try {
      setLoading(true);
      const queryParams = new URLSearchParams();

      if (filters.categories.length) {
        // Send multiple categories as comma-separated string
        queryParams.append("category", filters.categories.join(","));
      }
      if (filters.search) queryParams.append("search", filters.search);
      if (filters.priceMin) queryParams.append("priceMin", filters.priceMin);
      if (filters.priceMax) queryParams.append("priceMax", filters.priceMax);

      const { data } = await getFilteredProducts(queryParams.toString());
      setProducts(data);
    } catch (err) {
      console.error("Error loading products", err);
    } finally {
      setLoading(false);
    }
  };

  // Reload products when filters change
  useEffect(() => {
    loadProducts();
  }, [filters]);

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <CategoryContext.Provider
      value={{ categories, products, filters, setFilters, loading }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);


// category filter components
// src/components/CategoryFilter.js
import React, { useState } from "react";
import { useCategory } from "../context/CategoryContext";

const CategoryFilter = () => {
  const { categories, filters, setFilters } = useCategory();
  const [search, setSearch] = useState(filters.search || "");

  const handleCategoryToggle = (categoryId) => {
    setFilters((prev) => {
      const isSelected = prev.categories.includes(categoryId);
      let newCategories;
      if (isSelected) {
        newCategories = prev.categories.filter((id) => id !== categoryId);
      } else {
        newCategories = [...prev.categories, categoryId];
      }
      return { ...prev, categories: newCategories };
    });
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setFilters((prev) => ({ ...prev, search }));
  };

  return (
    <div className="p-4 bg-white shadow rounded mb-6">
      {/* Search */}
      <form onSubmit={handleSearchSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 flex-grow rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 rounded">
          Search
        </button>
      </form>

      {/* Category Checkboxes */}
      <div className="mb-4">
        <p className="font-semibold mb-2">Filter by Category</p>
        <div className="flex gap-4 flex-wrap">
          {categories.map((cat) => (
            <label key={cat._id} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={filters.categories.includes(cat._id)}
                onChange={() => handleCategoryToggle(cat._id)}
                className="accent-blue-600"
              />
              {cat.name}
            </label>
          ))}
        </div>
      </div>

      {/* Price Filters */}
      <div className="flex gap-4 flex-wrap">
        <input
          type="number"
          name="priceMin"
          placeholder="Min Price"
          value={filters.priceMin}
          onChange={handleFilterChange}
          className="border p-2 rounded w-24"
        />
        <input
          type="number"
          name="priceMax"
          placeholder="Max Price"
          value={filters.priceMax}
          onChange={handleFilterChange}
          className="border p-2 rounded w-24"
        />
      </div>
    </div>
  );
};

// export default CategoryFilter;

// filter product render component
// src/components/ProductList.js
import React from "react";
import { useCategory } from "../context/CategoryContext";

const ProductList = () => {
  const { products, loading } = useCategory();

  if (loading) return <p className="text-center mt-4">Loading products...</p>;
  if (!products.length) return <p className="text-center mt-4">No products found</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((p) => (
        <div key={p._id} className="border p-4 rounded shadow hover:shadow-lg transition">
          <img
            src={p.image}
            alt={p.name}
            className="w-full h-40 object-cover rounded mb-2"
          />
          <h3 className="font-semibold">{p.name}</h3>
          <p className="text-gray-500">{p.category.name}</p>
          <p className="mt-1 font-bold">${p.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;











































