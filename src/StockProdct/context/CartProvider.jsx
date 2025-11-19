import React, { createContext, useState } from "react";

export const CartContext = createContext();

 const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Error parsing cart from localStorage:", error);
      return [];
    }
  });

  // ✅ handleAddToCart exactly waise jaise snippet
  const handleAddToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      alert("Already in Cart");
      return;
    }

    const productToAdd = { ...product, qty: 1 };
    const updatedCart = [...cart, productToAdd];
    setCart(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increaseQty = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item 
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQty = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };

  return (
    <CartContext.Provider value={{
      cart,
      handleAddToCart,
      increaseQty,
      decreaseQty,
      removeFromCart,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};



export default CartProvider;