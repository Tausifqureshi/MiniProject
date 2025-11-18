import React, { useState, useEffect } from "react";

// Sample product data
const productsData = [
  { id: 1, name: "Apple", category: "Fruit", price: 50, rating: 4 },
  { id: 2, name: "Banana", category: "Fruit", price: 30, rating: 3 },
  { id: 3, name: "Carrot", category: "Vegetable", price: 20, rating: 5 },
  { id: 4, name: "Broccoli", category: "Vegetable", price: 40, rating: 4 },
  { id: 5, name: "Chicken", category: "Meat", price: 100, rating: 5 },
  { id: 6, name: "Fish", category: "Meat", price: 120, rating: 4 },
];

function AllFilterWith() {
  // Filter states
  const categories = [...new Set(productsData.map((p) => p.category))];
  const [searchTerm, setSearchTerm] = useState(""); // Search filter
  const [selectedCategories, setSelectedCategories] = useState([]); // Checkbox filter
  const [selectedRadio, setSelectedRadio] = useState("All"); // Radio filter
  const [sortOrder, setSortOrder] = useState("none"); // 'none', 'lowToHigh', 'highToLow'
  const [range, setRange] = useState([0, 150]); // Price range
  const [filteredProducts, setFilteredProducts] = useState(productsData); // Final filtered products

  // Handle checkbox change
  const handleCheckboxChange = (cat) => {
    // if (selectedCategories.includes(cat)) {
    //   setSelectedCategories(selectedCategories.filter((c) => c !== cat));
    // }
    // else {
    //   setSelectedCategories([...selectedCategories, cat]);
    // }

    const filterProduct = selectedCategories.includes(cat)
      ? selectedCategories.filter((c) => c !== cat)
      : [...selectedCategories, cat];
    setSelectedCategories(filterProduct);
  };

  // Combined filtering logic
  // useEffect(() => {
  //   let result = [...productsData];

  //   // Search filter
  //   // if (searchTerm.trim() !== "") {
  //   //   result = result.filter((p) =>
  //   //     p.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   //   );
  //   // }

  //   // 🔹 Right side wala `result` →
  //   //    ye current array hai (jisme abhi tak ka data hai)
  //   //    is par filter() lagake ek naya filtered array return hota hai
  //   //
  //   // 🔹 Left side wala `result` →
  //   // Ye variable assignment ke liye hai. Matlab, “jo naya filtered array mila hai, use result me save kar do.

  //   if (searchTerm.trim() === "") {
  //     // empty search → show all (result remains all productsData)
  //   } else {
  //     // non-empty search → filter by name
  //     result = result.filter((p) =>
  //       p.name.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //   }

  //   // Checkbox category filter
  //   if (selectedCategories.length > 0) {
  //     result = result.filter((p) => selectedCategories.includes(p.category));
  //   }

  //   // Radio category filter
  //   if (selectedRadio !== "All") {
  //     result = result.filter((p) => p.category === selectedRadio);
  //   }

  //   // Range filter
  //   result = result.filter((p) => p.price >= range[0] && p.price <= range[1]);

  //   // Sorting
  //   if (sortOrder === "lowToHigh") {
  //     result.sort((a, b) => a.price - b.price);
  //   } else if (sortOrder === "highToLow") {
  //     result.sort((a, b) => b.price - a.price);
  //   }

  //   setFilteredProducts(result);
  // }, [searchTerm, selectedCategories, selectedRadio, range, sortOrder]);

  useEffect(()=>{
    const filtered = productsData
    // Search filter logic
    .filter((p)=> searchTerm.trim() === "" || p.name.toLowerCase().includes(searchTerm.toLowerCase()))

    // Checkbox filter logic
    .filter((p)=> selectedCategories.length === 0 || selectedCategories.includes(p.category))

    // Radio filter logic
    .filter((p)=> selectedRadio === "All" || p.category === selectedRadio)

    // Range filter logic
    .filter((p)=> p.price >= range[0] && p.price <= range[1])

    // Sort filter logic
    .sort((a, b)=> sortOrder === "lowToHigh" ? a.price - b.price : sortOrder === "highToLow" ? b.price - a.price : 0);


    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategories, selectedRadio, range, sortOrder]);

 
  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Combined Filters Dashboard
      </h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Checkbox Categories */}
      <div className="flex gap-4 mb-4 flex-wrap">
        {categories.map((cat) => (
          <label key={cat} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedCategories.includes(cat)}
              onChange={() => handleCheckboxChange(cat)}
              className="w-4 h-4 accent-blue-600"
            />
            <span className="text-gray-700">{cat}</span>
          </label>
        ))}
      </div>

      {/* Radio Categories */}
      <div className="flex gap-4 mb-4 flex-wrap">
        {["All", ...categories].map((cat) => (
          <label key={cat} className="flex items-center space-x-2"> 
            <input
              type="radio"
              name="radioCategory"
              value={cat}
              checked={selectedRadio === cat}
              onChange={() => setSelectedRadio(cat)}
              className="w-4 h-4 accent-blue-600"
            />
            <span className="text-gray-700">{cat}</span>
          </label>
        ))}
      </div>

      {/* Price Range */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">
          Price Range: ${range[0]} - ${range[1]}
        </label>
        <div className="flex gap-4 items-center">
          <input
            type="range"
            min={0}
            max={150}
            value={range[0]}
            onChange={(e) => setRange([Number(e.target.value), range[1]])}
            className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
          />
          <input
            type="range"
            min={0}
            max={150}
            value={range[1]}
            onChange={(e) => setRange([range[0], Number(e.target.value)])}
            className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
          />
        </div>
      </div>

      {/* Sort Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${
            sortOrder === "lowToHigh"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setSortOrder("lowToHigh")}
        >
          Low to High
        </button>

        <button
          className={`px-4 py-2 rounded ${
            sortOrder === "highToLow"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setSortOrder("highToLow")}
        >
          High to Low
        </button>

        <button
          className={`px-4 py-2 rounded ${
            sortOrder === "none"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setSortOrder("none")}
        >
          Default
        </button>
      </div>

      {/* Filtered Products */}
      <ul className="space-y-2">
        {filteredProducts.length === 0 ? (
          <p className="text-gray-500 text-center">No products found</p>
        ) : (
          filteredProducts.map((p) => (
            <li
              key={p.id}
              className="p-3 bg-white rounded-md shadow-sm flex justify-between"
            >
              <span className="font-medium">{p.name}</span>
              <span className="text-gray-500">
                {p.category} - ${p.price}
              </span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default AllFilterWith;
