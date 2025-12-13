
// Stock add product context file hai ye
import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  // ORIGINAL API DATA (immutable)
  const [apiProducts, setApiProducts] = useState([]);

  // UI WORKING COPY (stock update yaha hota hai)
  const [stockProducts, setStockProducts] = useState([]);

  
  // CART STATE
  const [cart, setCart] = useState(() => {
    try {
      const stored = localStorage.getItem("cart");
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  });
 

  // 1) SET PRODUCT LIST (API se)
  const setProductList = (apiData) => {
    setApiProducts(apiData); // original data

    const withStock = apiData.map((p) => ({
      ...p,
      stock: p.stock || 5, // default stock
    }));

    setStockProducts(withStock); // UI working copy
  }; 

  // 2) ADD TO CART
  const handleAddToCart = (product) => {
    if (product.stock === 0) {
      alert("Out of Stock");
      return;
    }

    const exists = cart.find((c) => c.id === product.id);
    if (exists) {
      alert("Already in Cart");
      return;
    }

    const newCartItem = {
      ...product,
      qty: 1,
      stock: product.stock - 1,
    };

    const updatedCart = [...cart, newCartItem];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Reduce stock in UI product list
    setStockProducts((prev) =>
      prev.map((p) =>
        p.id === product.id
          ? { ...p, stock: p.stock - 1 }
          : p
      )
    );
  };

  // 3) INCREASE QTY
  const increaseQty = (id) => {
    const item = cart.find((c) => c.id === id);

    if (item.stock === 0) {
      alert("Out of Stock");
      return;
    }

    const updatedCart = cart.map((c) =>
      c.id === id
        ? { ...c, qty: c.qty + 1, stock: c.stock - 1 }
        : c
    );

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // update UI stock list
    setStockProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, stock: p.stock - 1 } : p
      )
    );
  };

  // 4) DECREASE QTY
  const decreaseQty = (id) => {
    const updatedCart = cart.map((c) => {
      if (c.id === id && c.qty > 1) {
        return { ...c, qty: c.qty - 1, stock: c.stock + 1 };
      }
      return c;
    });

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // restore UI stock
    setStockProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, stock: p.stock + 1 } : p
      )
    );
  };

  // 5) REMOVE FROM CART
  const removeFromCart = (id) => {
    const removedItem = cart.find((c) => c.id === id);

    // restore stock in UI list
    setStockProducts((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, stock: p.stock + removedItem.qty }
          : p
      )
    );

    const updated = cart.filter((c) => c.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // 6) CLEAR CART
  // const clearCart = () => {
  //   cart.forEach((item) => {
  //     setStockProducts((prev) =>
  //       prev.map((p) =>
  //         p.id === item.id
  //           ? { ...p, stock: p.stock + item.qty }
  //           : p
  //       )
  //     );
  //   });

  //   setCart([]);
  //   localStorage.setItem("cart", "[]");
  // };

  const clearCart = () => {
   setStockProducts((prev) =>
      prev.map((p) => {
        const cartItem = cart.find((c) => c.id === p.id);
        return cartItem ? { ...p, stock: p.stock + cartItem.qty } : p;
      })
    );
    setCart([]);
    localStorage.setItem("cart", "[]");
  };


  // ----------------------------
  return (
    <CartContext.Provider
      value={{
        apiProducts,        // original data
        stockProducts,      // UI working stock list
        setProductList,
        cart,
        handleAddToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
 };


export default CartProvider;
