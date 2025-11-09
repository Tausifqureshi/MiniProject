import React, { useState, useEffect } from "react";

const productsData = [
  { id: 1, name: "Apple", price: 100 },
  { id: 2, name: "Banana", price: 60 },
  { id: 3, name: "Carrot", price: 40 },
  { id: 4, name: "Broccoli", price: 120 },
  { id: 5, name: "Mango", price: 150 },
];

export default function DebounceSearch() {
  const [searchTerm, setSearchTerm] = useState(""); // user ke input
  const [debouncedSearch, setDebouncedSearch] = useState(""); // delay ke baad search term
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  // ✅ Debounce logic (production-style)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500); // 500ms delay

    return () => {
      clearTimeout(handler); // cleanup old timer
    };
  }, [searchTerm]);

  // ✅ Filter logic (based on debounced search)
  useEffect(() => {
    if (debouncedSearch.trim() === "") {
      setFilteredProducts(productsData);
    } else {
      const result = productsData.filter((p) =>
        p.name.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
      setFilteredProducts(result);
    }
  }, [debouncedSearch]);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        🔍 Debounce Search Filter
      </h2>

      <input
        type="text"
        placeholder="Search product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {filteredProducts.length === 0 ? (
        <p className="text-gray-500">No products found...</p>
      ) : (
        <ul className="space-y-2">
          {filteredProducts.map((p) => (
            <li
              key={p.id}
              className="border rounded-lg p-2 flex justify-between items-center hover:bg-gray-50 transition"
            >
              <span>{p.name}</span>
              <span className="text-sm text-gray-600">₹{p.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
