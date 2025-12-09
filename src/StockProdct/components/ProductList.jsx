// import React, { useEffect, useState, useContext } from "react";
// import { CartContext } from "../context/CartProvider";

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const { cart, handleAddToCart } = useContext(CartContext);

//   // FILTER STATES
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [selectedRadio, setSelectedRadio] = useState("All");
//   const [sortOrder, setSortOrder] = useState("none");
//   const [range, setRange] = useState([0, 2000]);
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data.products);
//         console.log(data.products);
//         setFilteredProducts(data.products);
//       });
//   }, []); 

//   const categories = [...new Set(products.map((p) => p.category))];

//   const handleCheckboxChange = (cat) => {
//     const updated = selectedCategories.includes(cat)
//       ? selectedCategories.filter((c) => c !== cat)
//       : [...selectedCategories, cat];

//     setSelectedCategories(updated);
//   };

//   // FILTER LOGIC
//   useEffect(() => {
//     const filtered = products

//       // Search Filter
//       .filter(
//         (p) =>
//           searchTerm.trim() === "" ||
//           p.title.toLowerCase().includes(searchTerm.toLowerCase())
//       )

//       // Category Filter
//       .filter(
//         (p) =>
//           selectedCategories.length === 0 ||
//           selectedCategories.includes(p.category)
//       )

//       // Radio Filter
//       .filter((p) => selectedRadio === "All" || p.category === selectedRadio)

//       // Range Filter
//       .filter((p) => p.price >= range[0] && p.price <= range[1])

//       // High to Low and Low to High
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
//     products,
//   ]);

//   return (
//     <div className="mt-8">
//       <h2 className="text-2xl font-semibold mb-4">🛍️ Products</h2>

//       {/* Search */}
//       <input
//         type="text"
//         placeholder="Search..."
//         className="p-2 border rounded w-full mb-4"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />

//       {/* Checkbox Category */}
//       <div className="flex gap-4 mb-4 flex-wrap">
//         {categories.map((cat) => (
//           <label key={cat} className="flex items-center space-x-2">
//             <input
//               type="checkbox"
//               checked={selectedCategories.includes(cat)}
//               onChange={() => handleCheckboxChange(cat)}
//             />
//             <span>{cat}</span>
//           </label>
//         ))}
//       </div>

//       {/* Radio Filter */}
//       <div className="flex gap-4 mb-4 flex-wrap">
//         {["All", ...categories].map((cat) => (
//           <label key={cat} className="flex items-center space-x-2">
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

//       {/* Range Filter */}
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

//       {/* Sort */}
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

//       {/* PRODUCTS */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {filteredProducts.map((product) => {
//           const cartItem = cart.find((item) => item.id === product.id);
//           const qty = cartItem ? cartItem.qty : 0;
//           // Agar cartItem mila → uski quantity show karo
//           // Agar cartItem nahi mila → quantity = 0

//           return (
//             <div key={product.id} className="border rounded p-4 shadow">
//               <img
//                 src={product.thumbnail}
//                 className="h-40 w-full object-cover mb-2 rounded"
//               />

//               <h4 className="font-semibold">{product.title}</h4>
//               <p>${product.price}</p>

//               {qty > 0 && (
//                 <p className="font-semibold text-green-600">In Cart: {qty}</p>
//               )}

//               <button
//                 onClick={() => handleAddToCart(product)}
//                 className="bg-blue-500 text-white w-full mt-2 py-1 rounded"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ProductList;


















import React, { useEffect, useState, useContext } from "react";
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

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductList(data.products);
        setFilteredProducts(data.products);
      });
  }, []);

  const categories = [...new Set(stockProducts.map((p) => p.category))];

  const handleCheckboxChange = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat)
        ? prev.filter((c) => c !== cat)
        : [...prev, cat]
    );
  };

  useEffect(() => {
    const filtered =  stockProducts
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
  }, [
    searchTerm,
    selectedCategories,
    selectedRadio,
    sortOrder,
    range,
    stockProducts,
  ]);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">🛍️ Products</h2>

      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border rounded w-full mb-4"
      />

      {/* -------- CHECKBOX FIXED KEY -------- */}
      <div className="flex gap-4 mb-4 flex-wrap">
        {categories.map((cat) => (
          <label key={`checkbox-${cat}`} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedCategories.includes(cat)}
              onChange={() => handleCheckboxChange(cat)}
            />
            <span>{cat}</span>
          </label>
        ))}
      </div>

      {/* -------- RADIO FIXED KEY -------- */}
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

      {/* RANGE */}
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

      {/* SORT */}
      <div className="flex gap-4 mb-6">
        <button onClick={() => setSortOrder("lowToHigh")} className="px-3 py-1 bg-gray-200 rounded">Low to High</button>
        <button onClick={() => setSortOrder("highToLow")} className="px-3 py-1 bg-gray-200 rounded">High to Low</button>
        <button onClick={() => setSortOrder("none")} className="px-3 py-1 bg-gray-200 rounded">Default</button>
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => {
          const cartItem = cart.find((i) => i.id === product.id);
          const qty = cartItem ? cartItem.qty : 0;

           const isOutOfStock = product.stock === 0 || qty >= product.stock;

          return (
            <div key={product.id} className="border rounded p-4 shadow">
              <img src={product.thumbnail} className="h-40 w-full object-cover mb-2 rounded" />
              <h4 className="font-semibold">{product.title}</h4>
              <p>${product.price}</p>
              <p className="text-sm">Stock: <b>{product.stock}</b></p>

              {qty > 0 && <p className="font-semibold text-green-600">In Cart: {qty}</p>}
              {isOutOfStock && <p className="text-red-600 font-semibold">Out of Stock</p>}

              <button
                onClick={() => handleAddToCart(product)}
                disabled={isOutOfStock}
                className={`w-full mt-2 py-1 rounded text-white ${isOutOfStock ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"}`}
              >
                {isOutOfStock ? "Out of Stock" : "Add to Cart"}
              </button>
            </div>
          );
        })}
        
      </div>
    </div>
  );
};

export default ProductList;
