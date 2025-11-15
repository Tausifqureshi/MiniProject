import React, { useState, useEffect } from "react";

const productsRadio = [
  { id: 1, name: "Apple", category: "Fruit" },
  { id: 2, name: "Banana", category: "Fruit" },
  { id: 3, name: "Carrot", category: "Vegetable" },
  { id: 4, name: "Broccoli", category: "Vegetable" },
];

function RadioFilter() {
  const categories = ["All", "Fruit", "Vegetable"];
  const [selectedRadio, setSelectedRadio] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(productsRadio);

  // 🔵 Ye function upar rakha
  const handleRadioChange = (e) => {
    setSelectedRadio(e.target.value); // sirf yahi chalega
  };

  useEffect(() => {
    if (selectedRadio === "All") {
      setFilteredProducts(productsRadio); // show all products
    } else {
      setFilteredProducts(
        productsRadio.filter((p) => p.category === selectedRadio) // filter by selected category
      );
    }
  }, [selectedRadio]);

  return (
    <div className="p-6 max-w-xl mx-auto bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Radio Button Filter</h2>

      {/* Radio Buttons */}
      <div className="flex gap-6 mb-6 justify-center">
        {categories.map((cat) => (
          <label key={cat} className="flex items-center space-x-2">
            <input
              type="radio"
              name="radioCategory"
              value={cat}               // 🔵 value yaha hai
              checked={selectedRadio === cat}
              onChange={handleRadioChange} // 🔵 function call by reference
              className="w-4 h-4 text-blue-600 accent-blue-600"
            />
            <span className="text-gray-700 font-medium">{cat}</span>
          </label>
        ))}
      </div>

      {/* Filtered Products */}
      <ul className="space-y-2">
        {filteredProducts.map((p) => (
          <li
            key={p.id}
            className="p-3 bg-white rounded-md shadow-sm flex justify-between"
          >
            <span className="font-medium">{p.name}</span>
            <span className="text-gray-500">{p.category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RadioFilter;
