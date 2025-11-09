import React, { useState, useEffect } from "react";

// Sample product data
const productsData = [
  { id: 1, name: "Apple", category: "Fruit" },
  { id: 2, name: "Banana", category: "Fruit" },
  { id: 3, name: "Carrot", category: "Vegetable" },
  { id: 4, name: "Broccoli", category: "Vegetable" },
  { id: 5, name: "Chicken", category: "Meat" },
  { id: 6, name: "Fish", category: "Meat" },
];

function SearchFilter() {
  const [products, setProducts] = useState(productsData);
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products whenever searchTerm changes
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredProducts(products); // show all if search is empty
    } else {
      const lowerSearch = searchTerm.toLowerCase();
      const filtered = products.filter((p) =>
        p.name.toLowerCase().includes(lowerSearch)
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, products]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Search Filter</h2>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "5px 10px", width: 250, marginBottom: 20 }}
      />

      {/* Filtered Products */}
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

export default SearchFilter;
