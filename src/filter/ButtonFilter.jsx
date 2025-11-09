import React, { useState, useEffect } from "react";

const products = [
  { id: 1, name: "Apple", category: "Fruit" },
  { id: 2, name: "Banana", category: "Fruit" },
  { id: 3, name: "Carrot", category: "Vegetable" },
  { id: 4, name: "Broccoli", category: "Vegetable" },
];

function ButtonFilter() {
  const categories = ["All", "Fruit", "Vegetable"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((p) => p.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  return (
    <div>
      <h2>Button Filter</h2>
      <div>
        {categories.map((cat) => (
          <button
            key={cat}
            style={{
              background: selectedCategory === cat ? "blue" : "gray",
              color: "white",
              marginRight: 5,
              padding: "5px 10px",
            }}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <ul>
        {filteredProducts.map((p) => (
          <li key={p.id}>
            {p.name} - {p.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ButtonFilter;
