import React, { useState } from "react";

function OutOfStock() {
  const [stock, setStock] = useState(5); // initial stock
  const [message, setMessage] = useState("");

  const handleAddToCart = () => {
    if (stock > 0) {
      const updatedStock = stock - 1;
      setStock(updatedStock);
      alert("Product added to cart!");

      if (updatedStock === 0) {
        setMessage("Out of Stock");
      }
    } else {
      setMessage("Out of Stock");
    }
  }; 

  return (
    <div style={{ padding: "20px", border: "1px solid gray", width: "200px" }}>
      <h2>Product Name</h2>
      <p>
        Available Stock: <strong>{stock}</strong>
      </p>

      <button onClick={handleAddToCart} disabled={stock === 0}>
        Add to Cart
      </button>

      {message && (
        <p style={{ color: "red", marginTop: "10px" }}>{message}</p>
      )}
    </div>
  );
}

export default OutOfStock;
