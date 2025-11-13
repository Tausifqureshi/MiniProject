import React, { useState, useEffect } from "react";

// 🧺 Static product data
const productsData = [
  { id: 1, name: "Apple", category: "Fruit", price: 50 },
  { id: 2, name: "Banana", category: "Fruit", price: 30 },
  { id: 3, name: "Carrot", category: "Vegetable", price: 20 },
  { id: 4, name: "Broccoli", category: "Vegetable", price: 40 },
  { id: 5, name: "Chicken", category: "Meat", price: 100 },
  { id: 6, name: "Fish", category: "Meat", price: 120 },
];

function RangeFilter() {
  // 🎚️ Range setup (min & max from data)
  const prices = productsData.map((p) => p.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const [range, setRange] = useState([minPrice, maxPrice]);
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  // 🎯 Filter products by price range
  useEffect(() => {
    const [min, max] = range;
    const filtered = productsData.filter(
      (p) => p.price >= min && p.price <= max
    );
    setFilteredProducts(filtered);
  }, [range]);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Price Range Filter</h2>

      {/* Range Inputs */}
      <div className="mb-6 space-y-4">
        <div>
          <label className="block font-medium mb-1">
            Min Price: <span className="font-semibold">{range[0]}</span>
          </label>
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            value={range[0]}
            onChange={(e) => setRange([Number(e.target.value), range[1]])}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">
            Max Price: <span className="font-semibold">{range[1]}</span>
          </label>
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            value={range[1]}
            onChange={(e) => setRange([range[0], Number(e.target.value)])}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      {/* Filtered Products */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Filtered Products:</h3>
        {filteredProducts.length === 0 ? (
          <p className="text-gray-500">No products in this price range</p>
        ) : (
          <ul className="space-y-2">
            {filteredProducts.map((p) => (
              <li
                key={p.id}
                className="p-3 border rounded-md flex justify-between bg-white shadow-sm"
              >
                <span>
                  {p.name} - {p.category}
                </span>
                <span className="font-semibold">${p.price}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default RangeFilter;
