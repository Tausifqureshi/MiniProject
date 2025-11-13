import React, { useEffect, useState } from "react";

const productsData = [
  { id: 1, name: "Apple", category: "Fruit", price: 120 },
  { id: 2, name: "Banana", category: "Fruit", price: 60 },
  { id: 3, name: "Carrot", category: "Vegetable", price: 80 },
  { id: 4, name: "Broccoli", category: "Vegetable", price: 150 },
  { id: 5, name: "Tomato", category: "Vegetable", price: 70 },
  { id: 6, name: "Orange", category: "Fruit", price: 100 },
  { id: 7, name: "Cabbage", category: "Vegetable", price: 90 },
  { id: 8, name: "Pineapple", category: "Fruit", price: 200 },
  { id: 9, name: "Strawberry", category: "Fruit", price: 300 },
  { id: 10, name: "Potato", category: "Vegetable", price: 50 },
  { id: 11, name: "Mango", category: "Fruit", price: 250 },
  { id: 12, name: "Spinach", category: "Vegetable", price: 110 },
];

function ProductFilterPagination() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  // 🧮 Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // 🧠 useEffect for filtering and sorting
  //   useEffect(() => {
  //     let result = [...productsData];

  //     // 🔍 Search Filter
  //     if (searchTerm.trim() === "") {
  //       // Empty → show all
  //     } else {
  //       result = result.filter((p) =>
  //         p.name.toLowerCase().includes(searchTerm.toLowerCase())
  //       );
  //     }

  //     // ✅ Checkbox Category Filter
  //     if (selectedCategories.length > 0) {
  //       result = result.filter((p) => selectedCategories.includes(p.category));
  //     }

  //     // 🔽 Sort Filter
  //     if (sortOrder === "lowToHigh") {
  //       result.sort((a, b) => a.price - b.price);
  //     } else if (sortOrder === "highToLow") {
  //       result.sort((a, b) => b.price - a.price);
  //     }

  //     setFilteredProducts(result);
  //     setCurrentPage(1); // Reset to first page after any filter
  //   }, [searchTerm, selectedCategories, sortOrder]);

  useEffect(() => {
    setFilteredProducts(() => {
      productsData
        .filter((product) => {
          return product.name.toLowerCase().includes(searchTerm.toLowerCase());
        })
        .filter((product) => {
          if (selectedCategories.length === 0) return true;
          return selectedCategories.includes(product.category);
        })
        .sort((a, b) => {
          if (sortOrder === "lowToHigh") {
            return a.price - b.price;
          } else if (sortOrder === "highToLow") {
            return b.price - a.price;
          } else {
            return 0;
          }
        });
    });
  }, [searchTerm, selectedCategories, sortOrder]);

  
  // 📦 Pagination Logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // 🧩 Handlers
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
        🛒 Filter + Search + Sort + Pagination
      </h1>

      {/* 🔎 Search Input */}
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* ⚙️ Filters */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        {/* 🧾 Category Filter */}
        <div className="flex gap-3 flex-wrap">
          {["Fruit", "Vegetable"].map((cat) => (
            <label
              key={cat}
              className="flex items-center gap-2 text-gray-700 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => handleCategoryChange(cat)}
              />
              {cat}
            </label>
          ))}
        </div>

        {/* ↕️ Sort Dropdown */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Sort By</option>
          <option value="lowToHigh">Price: Low → High</option>
          <option value="highToLow">Price: High → Low</option>
        </select>
      </div>

      {/* 🧩 Product List */}
      {currentProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currentProducts.map((p) => (
            <div
              key={p.id}
              className="border rounded-lg p-4 shadow-md hover:shadow-lg transition duration-200 bg-white"
            >
              <h3 className="text-lg font-semibold text-gray-800">{p.name}</h3>
              <p className="text-gray-500">{p.category}</p>
              <p className="mt-2 font-bold text-blue-600">₹{p.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-8">No products found.</p>
      )}

      {/* 🔢 Pagination Controls */}
      <div className="flex justify-center items-center mt-8 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md border ${
            currentPage === 1
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => {
          const pageNum = i + 1;
          return (
            <button
              key={pageNum}
              onClick={() => handlePageChange(pageNum)}
              className={`px-4 py-2 rounded-md border ${
                currentPage === pageNum
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {pageNum}
            </button>
          );
        })}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md border ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ProductFilterPagination;
