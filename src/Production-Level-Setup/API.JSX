import axios from "axios";

const API = axios.create({
  baseURL: "https://your-backend-api.com/api", // 🔁 Replace with your backend base URL
});

// ==============================
// 🔐 Auth
// ==============================
export const registerUser = (data) => API.post("/auth/register", data);
export const loginUser = (data) => API.post("/auth/login", data);
export const getCurrentUser = () => API.get("/auth/me");

// ==============================
// 📂 Categories
// ==============================
export const getCategories = () => API.get("/categories");
export const getCategoryById = (id) => API.get(`/categories/${id}`);

// ==============================
// 🛍️ Products
// ==============================
export const getAllProducts = () => API.get("/products");
export const getFilteredProducts = (query) => API.get(`/products?${query}`);
export const getSingleProduct = (productId) => API.get(`/products/${productId}`);

// ==============================
// 🛒 Cart
// ==============================
export const getCart = (userId) => API.get(`/cart/${userId}`);
export const addToCart = (userId, item) => API.post(`/cart/${userId}`, item);
export const removeFromCart = (userId, itemId) => API.delete(`/cart/${userId}/${itemId}`);
export const clearCart = (userId) => API.delete(`/cart/clear/${userId}`);

// ==============================
// 📦 Orders
// ==============================
export const placeOrder = (userId, orderData) => API.post(`/orders/${userId}`, orderData);
export const getUserOrders = (userId) => API.get(`/orders/user/${userId}`);
export const getSingleOrder = (orderId) => API.get(`/orders/${orderId}`);

// ==============================
// 💳 Payments
// ==============================
export const createPaymentIntent = (data) => API.post("/payments/create-intent", data);
export const verifyPayment = (data) => API.post("/payments/verify", data);

// ==============================
// ⭐ Reviews
// ==============================
export const addReview = (productId, review) => API.post(`/reviews/${productId}`, review);
export const getProductReviews = (productId) => API.get(`/reviews/${productId}`);
export const deleteReview = (reviewId) => API.delete(`/reviews/${reviewId}`);

// ==============================
// 📬 Addresses
// ==============================
export const getAddresses = (userId) => API.get(`/address/${userId}`);
export const addAddress = (userId, address) => API.post(`/address/${userId}`, address);
export const updateAddress = (addressId, address) => API.put(`/address/${addressId}`, address);
export const deleteAddress = (addressId) => API.delete(`/address/${addressId}`);

// ==============================
// 🛠️ Admin (Protected)
// ==============================
export const getAllUsers = () => API.get("/admin/users");
export const getAllOrders = () => API.get("/admin/orders");
export const updateOrderStatus = (orderId, status) =>
  API.put(`/admin/orders/${orderId}/status`, { status });
export const createProduct = (data) => API.post("/admin/products", data);
export const updateProduct = (id, data) => API.put(`/admin/products/${id}`, data);
export const deleteProduct = (id) => API.delete(`/admin/products/${id}`);
