import React, { useState, useEffect } from "react";

const productsData = [
  { id: 1, name: "Apple", category: "Fruit" },
  { id: 2, name: "Banana", category: "Fruit" },
  { id: 3, name: "Carrot", category: "Vegetable" },
  { id: 4, name: "Broccoli", category: "Vegetable" },
  { id: 5, name: "Chicken", category: "Meat" },
  { id: 6, name: "Fish", category: "Meat" },
];

function CheckboxFilter() {
    const [selectedCategories, setSelectedCategories] = useState([]); //Selected categories state
    const [filteredProducts, setFilteredProducts] = useState(productsData); //Filter data state
    
    const categories = [...new Set(productsData.map(p => p.category))]; // Unique categories
    
  const handleChange = (cat) => {

    selectedCategories.includes(cat)
      ? setSelectedCategories(selectedCategories.filter((c) => c !== cat)) // remove and uncheck
      : setSelectedCategories([...selectedCategories, cat]); // add and check


    // if (selectedCategories.includes(cat)) {
    //   setSelectedCategories(selectedCategories.filter((c) => c !== cat));
    // } else {
    //   setSelectedCategories([...selectedCategories, cat]);
    // }

    
  };

  useEffect(() => {
    // if (selectedCategories.length === 0) {
    //   setFilteredProducts(productsData); // show all products if none selected
    // } else {
    //   setFilteredProducts(
    //     productsData.filter((p) => selectedCategories.includes(p.category)) // filter by selected categories
    //   );
    // }

    const filtered = selectedCategories.length === 0
        ? productsData
        : productsData.filter((p) => selectedCategories.includes(p.category));
    setFilteredProducts(filtered);
  }, [selectedCategories]);

  return (
    <div className="p-6 max-w-2xl mx-auto bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Category Filter (Checkbox)</h2>

      {/* Checkboxes */}
      <div className="flex gap-6 mb-6 justify-center">
        {categories.map((cat) => (
          <label key={cat} className="flex items-center space-x-2">
            <input
              type="checkbox"
              value={cat}
              checked={selectedCategories.includes(cat)}
              onChange={() => handleChange(cat)}
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

export default CheckboxFilter;
