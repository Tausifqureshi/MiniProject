import React, { useState, useEffect } from "react";

// Sample product data with price
const productsData = [
  { id: 1, name: "Apple", category: "Fruit", price: 50 },
  { id: 2, name: "Banana", category: "Fruit", price: 30 },
  { id: 3, name: "Carrot", category: "Vegetable", price: 20 },
  { id: 4, name: "Broccoli", category: "Vegetable", price: 40 },
  { id: 5, name: "Chicken", category: "Meat", price: 100 },
  { id: 6, name: "Fish", category: "Meat", price: 120 },
];

function LowToHighFilter() {
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [sortOrder, setSortOrder] = useState("none"); // 'none' | 'lowToHigh' | 'highToLow'

  useEffect(() => {
    let sorted = [...productsData]; // directly use original data

    if (sortOrder === "lowToHigh") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "highToLow") {
      sorted.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sorted);
  }, [sortOrder]);

  return (
    <div className="p-6 max-w-2xl mx-auto bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Price Filter</h2>

      {/* Sort Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${
            sortOrder === "lowToHigh" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setSortOrder("lowToHigh")}
        >
          Low to High
        </button>
        <button
          className={`px-4 py-2 rounded ${
            sortOrder === "highToLow" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setSortOrder("highToLow")}
        >
          High to Low
        </button>
        <button
          className={`px-4 py-2 rounded ${
            sortOrder === "none" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setSortOrder("none")}
        >
          Default
        </button>
      </div>

      {/* Product List */}
      <ul className="space-y-2">
        {filteredProducts.map((p) => (
          <li
            key={p.id}
            className="p-3 bg-white rounded-md shadow-sm flex justify-between"
          >
            <span className="font-medium">{p.name}</span>
            <span className="text-gray-500">${p.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LowToHighFilter;



















//  Select and option tag ke sath use 
// import React, { useState, useEffect } from "react";

// const productsData = [
//   { id: 1, name: "Apple", category: "Fruit", price: 50 },
//   { id: 2, name: "Banana", category: "Fruit", price: 30 },
//   { id: 3, name: "Carrot", category: "Vegetable", price: 20 },
//   { id: 4, name: "Broccoli", category: "Vegetable", price: 40 },
//   { id: 5, name: "Chicken", category: "Meat", price: 100 },
//   { id: 6, name: "Fish", category: "Meat", price: 120 },
// ];

// function LowToHighFilter() {
//   const [filteredProducts, setFilteredProducts] = useState(productsData);
//   const [sortOrder, setSortOrder] = useState("none");

//   // 🟢 STEP 1: Upar function bana diya
//   const handleSort = (e) => {
//     const { value } = e.target;   // e.target.value ko destructure kara
//     setSortOrder(value);
//   };

//   useEffect(() => {
//     let sorted = [...productsData];

//     if (sortOrder === "lowToHigh") {
//       sorted.sort((a, b) => a.price - b.price);
//     } else if (sortOrder === "highToLow") {
//       sorted.sort((a, b) => b.price - a.price);
//     }

//     setFilteredProducts(sorted);
//   }, [sortOrder]);

//   return (
//     <div className="p-6 max-w-2xl mx-auto bg-gray-50 rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-4 text-center">Price Filter</h2>

//       {/* Dropdown Sort Filter */}
//       <div className="flex justify-center mb-6">
//         <select
//           className="px-4 py-2 border rounded"
//           value={sortOrder}
//           onChange={handleSort}   // 🟢 Yaha SIRF reference pass kara
//         >
//           <option value="none">Default</option>
//           <option value="lowToHigh">Low to High</option>
//           <option value="highToLow">High to Low</option>
//         </select>
//       </div>

//       {/* Product List */}
//       <ul className="space-y-2">
//         {filteredProducts.map((p) => (
//           <li
//             key={p.id}
//             className="p-3 bg-white rounded-md shadow-sm flex justify-between"
//           >
//             <span className="font-medium">{p.name}</span>
//             <span className="text-gray-600">${p.price}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default LowToHighFilter;
