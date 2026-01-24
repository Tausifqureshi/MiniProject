import React, { useState } from "react";

// Sample product data
const productsData = [
  { id: 1, name: "Apple", category: "Fruit" },
  { id: 2, name: "Banana", category: "Fruit" },
  { id: 3, name: "Carrot", category: "Vegetable" },
  { id: 4, name: "Broccoli", category: "Vegetable" },
  { id: 5, name: "Chicken", category: "Meat" },
  { id: 6, name: "Fish", category: "Meat" },
];

function ButtonSearchFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  // input change
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // 🔥 button click pe filter
  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setFilteredProducts(productsData);
      return;
    }

    const lower = searchTerm.toLowerCase();

    const filtered = productsData.filter((p) =>
      p.name.toLowerCase().includes(lower)
    );

    setFilteredProducts(filtered);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Search Filter (Button Click)</h2>

      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleChange}
        style={{ padding: "5px 10px", width: 250 }}
      />

      <button
        onClick={handleSearch}
        style={{ marginLeft: 10, padding: "6px 15px" }}
      >
        Search
      </button>

      <br /><br />

      {filteredProducts.length === 0 ? (
        <p>No products found</p>
      ) : (
        <ul>
          {filteredProducts.map((p) => (
            <li key={p.id}>
              {p.name} - {p.category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
} 

export default ButtonSearchFilter;
