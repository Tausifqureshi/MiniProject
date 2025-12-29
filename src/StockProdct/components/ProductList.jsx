// import React, { useEffect, useState, useContext } from "react";
// import { CartContext } from "../context/CartProvider";

// const ProductList = () => {
//   const { stockProducts, setProductList, cart, handleAddToCart } =
//     useContext(CartContext);

//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [selectedRadio, setSelectedRadio] = useState("All");
//   const [sortOrder, setSortOrder] = useState("none");
//   const [range, setRange] = useState([0, 2000]);

//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//       .then((res) => res.json())
//       .then((data) => {
//         setProductList(data.products);
//         setFilteredProducts(data.products);
//       });
//   }, []);

//   const categories = [...new Set(stockProducts.map((p) => p.category))];

//   const handleCheckboxChange = (cat) => {
//     setSelectedCategories((prev) =>
//       prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
//     );
//   };

//   useEffect(() => {
//     const filtered = stockProducts
//       .filter(
//         (p) =>
//           searchTerm.trim() === "" ||
//           p.title.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//       .filter(
//         (p) =>
//           selectedCategories.length === 0 ||
//           selectedCategories.includes(p.category)
//       )
//       .filter((p) => selectedRadio === "All" || p.category === selectedRadio)
//       .filter((p) => p.price >= range[0] && p.price <= range[1])
//       .sort((a, b) =>
//         sortOrder === "lowToHigh"
//           ? a.price - b.price
//           : sortOrder === "highToLow"
//           ? b.price - a.price
//           : 0
//       );

//     setFilteredProducts(filtered);
//   }, [
//     searchTerm,
//     selectedCategories,
//     selectedRadio,
//     sortOrder,
//     range,
//     stockProducts,
//   ]);

//   return (
//     <div className="mt-8">
//       <h2 className="text-2xl font-semibold mb-4">🛍️ Products</h2>

//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="p-2 border rounded w-full mb-4"
//       />

//       {/* -------- CHECKBOX FIXED KEY -------- */}
//       <div className="flex gap-4 mb-4 flex-wrap">
//         {categories.map((cat) => (
//           <label
//             key={`checkbox-${cat}`}
//             className="flex items-center space-x-2"
//           >
//             <input
//               type="checkbox"
//               checked={selectedCategories.includes(cat)}
//               onChange={() => handleCheckboxChange(cat)}
//             />
//             <span>{cat}</span>
//           </label>
//         ))}
//       </div>

//       {/* -------- RADIO FIXED KEY -------- */}
//       <div className="flex gap-4 mb-4 flex-wrap">
//         {["All", ...categories].map((cat) => (
//           <label key={`radio-${cat}`} className="flex items-center space-x-2">
//             <input
//               type="radio"
//               name="radio"
//               checked={selectedRadio === cat}
//               onChange={() => setSelectedRadio(cat)}
//             />
//             <span>{cat}</span>
//           </label>
//         ))}
//       </div>

//       {/* RANGE */}
//       <div className="mb-4">
//         <label>
//           Price Range: ${range[0]} - ${range[1]}
//         </label>
//         <div className="flex gap-4 items-center">
//           <input
//             type="range"
//             min={0}
//             max={2000}
//             value={range[0]}
//             onChange={(e) => setRange([+e.target.value, range[1]])}
//           />
//           <input
//             type="range"
//             min={0}
//             max={2000}
//             value={range[1]}
//             onChange={(e) => setRange([range[0], +e.target.value])}
//           />
//         </div>
//       </div>

//       {/* SORT */}
//       <div className="flex gap-4 mb-6">
//         <button
//           onClick={() => setSortOrder("lowToHigh")}
//           className="px-3 py-1 bg-gray-200 rounded"
//         >
//           Low to High
//         </button>
//         <button
//           onClick={() => setSortOrder("highToLow")}
//           className="px-3 py-1 bg-gray-200 rounded"
//         >
//           High to Low
//         </button>
//         <button
//           onClick={() => setSortOrder("none")}
//           className="px-3 py-1 bg-gray-200 rounded"
//         >
//           Default
//         </button>
//       </div>

//       {/* PRODUCTS GRID */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {filteredProducts.map((product) => {
//           const cartItem = cart.find((i) => i.id === product.id);
//           const qty = cartItem ? cartItem.qty : 0;

//           const isOutOfStock = product.stock === 0 || qty >= product.stock;

//           return (
//             <div key={product.id} className="border rounded p-4 shadow">
//               <img
//                 src={product.thumbnail}
//                 className="h-40 w-full object-cover mb-2 rounded"
//               />
//               <h4 className="font-semibold">{product.title}</h4>
//               <p>${product.price}</p>
//               <p className="text-sm">
//                 Stock: <b>{product.stock}</b>
//               </p>

//               {qty > 0 && (
//                 <p className="font-semibold text-green-600">In Cart: {qty}</p>
//               )}
//               {isOutOfStock && (
//                 <p className="text-red-600 font-semibold">Out of Stock</p>
//               )}

//               <button
//                 onClick={() => handleAddToCart(product)}
//                 disabled={isOutOfStock}
//                 className={`w-full mt-2 py-1 rounded text-white ${
//                   isOutOfStock
//                     ? "bg-gray-400 cursor-not-allowed"
//                     : "bg-blue-500"
//                 }`}
//               >
//                 {isOutOfStock ? "Out of Stock" : "Add to Cart"}
//               </button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ProductList;

import React, { useEffect, useState, useContext, } from "react";
import { CartContext } from "../context/CartProvider";

const ProductList = () => {
  const { stockProducts, setProductList, cart, handleAddToCart } =
    useContext(CartContext);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState("All");
  const [sortOrder, setSortOrder] = useState("none");
  const [range, setRange] = useState([0, 2000]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // LOADING STATE
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductList(data.products);
        setFilteredProducts(data.products);
        setLoading(false);
      });
  }, []);

  const categories = [...new Set(stockProducts.map((p) => p.category))];

  const handleCheckboxChange = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  // FILTER LOGIC
  useEffect(() => {
    setLoading(true); // filter change pe loading true
    const timeout = setTimeout(() => {
      const filtered = stockProducts
        .filter(
          (p) =>
            searchTerm.trim() === "" ||
            p.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter(
          (p) =>
            selectedCategories.length === 0 ||
            selectedCategories.includes(p.category)
        )
        .filter((p) => selectedRadio === "All" || p.category === selectedRadio)
        .filter((p) => p.price >= range[0] && p.price <= range[1])
        .sort((a, b) =>
          sortOrder === "lowToHigh"
            ? a.price - b.price
            : sortOrder === "highToLow"
            ? b.price - a.price
            : 0
        );

      setFilteredProducts(filtered);
      setCurrentPage(1); // filter change pe page reset
      setLoading(false);
    }, 1000); // 1000ms delay for smoothness

    return () => clearTimeout(timeout);
  }, [
    searchTerm,
    selectedCategories,
    selectedRadio,
    sortOrder,
    range,
    stockProducts,
  ]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage); // total pages calculation
  const indexOfLastItem = currentPage * itemsPerPage; // last item index
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; // first item index
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  ); // current page items 8 items

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">🛍️ Products </h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border rounded w-full mb-4"
      />

      {/* Checkbox Categories */}
      <div className="flex gap-4 mb-4 flex-wrap">
        {categories.map((cat) => (
          <label
            key={`checkbox-${cat}`}
            className="flex items-center space-x-2"
          >
            <input
              type="checkbox"
              checked={selectedCategories.includes(cat)}
              onChange={() => handleCheckboxChange(cat)}
            />
            <span>{cat}</span>
          </label>
        ))}
      </div>

      {/* Radio Categories */}
      <div className="flex gap-4 mb-4 flex-wrap">
        {["All", ...categories].map((cat) => (
          <label key={`radio-${cat}`} className="flex items-center space-x-2">
            <input
              type="radio"
              name="radio"
              checked={selectedRadio === cat}
              onChange={() => setSelectedRadio(cat)}
            />
            <span>{cat}</span>
          </label>
        ))}
      </div>

      {/* Price Range */}
      <div className="mb-4">
        <label>
          Price Range: ${range[0]} - ${range[1]}
        </label>
        <div className="flex gap-4 items-center">
          <input
            type="range"
            min={0}
            max={2000}
            value={range[0]}
            onChange={(e) => setRange([+e.target.value, range[1]])}
          />
          <input
            type="range"
            min={0}
            max={2000}
            value={range[1]}
            onChange={(e) => setRange([range[0], +e.target.value])}
          />
        </div>
      </div>

      {/* Sort Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setSortOrder("lowToHigh")}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          Low to High
        </button>
        <button
          onClick={() => setSortOrder("highToLow")}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          High to Low
        </button>
        <button
          onClick={() => setSortOrder("none")}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          Default
        </button>
      </div>

      {/* Products Grid */}
      {loading ? (
        <div className="text-center py-10 text-gray-500">
          Loading Products...
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentItems.map((product) => {
            const cartItem = cart.find((i) => i.id === product.id);
            const qty = cartItem ? cartItem.qty : 0;
            const isOutOfStock = product.stock === 0 || qty >= product.stock;

            return (
              <div
                key={product.id}
                className="border rounded p-4 shadow transform transition duration-300 hover:scale-105"
              >
                <img
                  src={product.thumbnail}
                  className="h-40 w-full object-cover mb-2 rounded"
                />
                <h4 className="font-semibold">{product.title}</h4>
                <p>${product.price}</p>
                <p className="text-sm">
                  Stock: <b>{product.stock}</b>
                </p>
                {qty > 0 && (
                  <p className="font-semibold text-green-600">In Cart: {qty}</p>
                )}
                {isOutOfStock && (
                  <p className="text-red-600 font-semibold">Out of Stock</p>
                )}
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={isOutOfStock}
                  className={`w-full mt-2 py-1 rounded text-white ${
                    isOutOfStock
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-500"
                  }`}
                >
                  {isOutOfStock ? "Out of Stock" : "Add to Cart"}
                </button>
              </div>
            );
          })}
        </div>
      )}
      {/* Pagination Info */}
      <span className="text-gray-700 text-sm mt-3 block text-center">
        Page {currentPage} of {totalPages}
      </span>

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-2">
        {/* <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-300 rounded disabled:cursor-not-allowed"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-300 rounded disabled:cursor-not-allowed"
        >
          Next
        </button> */}

        <button
          onClick={() => {
            setLoading(true); // loading start
            setTimeout(() => {
              setCurrentPage((p) => Math.max(p - 1, 1));
              setLoading(false); // loading stop
            }, 1000); // 150ms delay smoothness ke liye
          }}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-300 rounded disabled:cursor-not-allowed"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                setCurrentPage(i + 1);
                setLoading(false);
              }, 1000);
            }}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => {
            setLoading(true);
            setTimeout(() => {
              setCurrentPage((p) => Math.min(p + 1, totalPages));
              setLoading(false);
            }, 1000);
          }}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-300 rounded disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
