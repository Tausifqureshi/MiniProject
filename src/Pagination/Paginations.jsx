// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function Paginations() {
//   const [userData, setUserData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);//jaise hi user jab bhi kisi application pe load hoga us ka Current page number 1 rehe ga.
//   const [itemsPerPage, setItemsPerPage] = useState(10); //har page pe kitne items dikhane hai wo define kar rahe hain.

//   const indexOfLastItem = currentPage * itemsPerPage; //matlab agar current page 1 hai to 1*10=10, to last item ka index 9 hoga.
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage; //matlab agar last item ka index 10 hai to first item ka index 0 hoga.
//   const currentItems = userData.slice(indexOfFirstItem, indexOfLastItem); //ye currentItems variable me wo items store kar rahe hain jo current page pe dikhane hain.

//   const totalPages = Math.ceil(userData.length / itemsPerPage); //total pages calculate kar rahe hain.


// useEffect(() => {
//   async function fetchUserData() {
//     try {
//       setLoading(true);
//       const response = await axios.get("https://dummyjson.com/users?limit=80&skip=0");
//       console.log(response);
//       setUserData(response.data.users);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//       setError("Failed to fetch user data.");
//     } finally {
//       setLoading(false);
//     }
//   }

//   fetchUserData();
// }, []);


//   if (loading) {
//     return <div className="text-center p-5 text-2xl font-semibold">Loading...</div>;
//   }
  
//   if (error) {
//     return <div className="text-center p-5 text-red-600 text-2xl font-semibold">Error: {error}</div>;
//   }


// return (



//   <div className="max-w-4xl mx-auto p-5 bg-white rounded-2xl shadow-xl border border-gray-300">

//   <h1 className="text-xl font-semibold text-gray-900 text-center mb-4 tracking-tight">
//     User Data
//   </h1>

//   <div className="overflow-hidden rounded-xl border border-gray-300 shadow-sm">
//     <table className="min-w-full text-[13px] text-gray-800 font-serif">

//       {/* HEADER */}
//       <thead>
//         <tr className="bg-gray-800 text-white border-b border-gray-700">
//           <th className="py-3 px-4 text-left font-medium tracking-wide border-r border-gray-700">
//             ID
//           </th>
//           <th className="py-3 px-4 text-left font-medium tracking-wide border-r border-gray-700">
//             Name
//           </th>
//           <th className="py-3 px-4 text-left font-medium tracking-wide">
//             Email
//           </th>
//         </tr>
//       </thead>

//       {/* BODY */}
//       <tbody>
//         {currentItems.map((user, index) => (
//           <tr
//             key={user.id}
//             className={` 
//               ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}
//               hover:bg-gray-200/60
//               transition-all duration-200
//               border-b border-gray-300
//             `}
//           >
//             <td className="py-2.5 px-4 border-r border-gray-300">{user.id}</td>
//             <td className="py-2.5 px-4 border-r border-gray-300">
//               {user.firstName} {user.lastName}
//             </td>
//             <td className="py-2.5 px-4">{user.email}</td>
//           </tr>
//         ))}
//       </tbody>

//     </table>
//   </div>

//     <span className="text-gray-700 text-sm mt-3 block text-center">
//       Page {currentPage} of {totalPages}
//     </span>
//   {/* PAGINATION CONTROLS */}
//   <div className="flex justify-between items-center mt-4">
  
//     <button
//       className={`px-4 py-2 rounded-md ${
//         currentPage === 1 //agar current page 1 hai to previous button disable kar dena hai.matlab pehle page pe hain to previous button disable kar dena hai.


//           ? "bg-gray-300 text-gray-600 cursor-not-allowed"
//           : "bg-blue-600 text-white hover:bg-blue-700"
//       }`}
//       onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} //ye ensure kar raha hai ki current page kabhi bhi 1 se kam na ho jaye
//       disabled={currentPage === 1}
//     >
//       Previous
//     </button>
    
//     {Array.from({ length: totalPages }, (_, index) => (
//         <button
//           key={index + 1} 
//           className={`mx-1 px-3 py-1 rounded-md ${
//             currentPage === index + 1
//               ? "bg-blue-600 text-white"
//               : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//           }`}
//           onClick={() => setCurrentPage(index + 1)}
//         >
//           {index + 1}
//         </button>
//       ))}
  
//     <button
//       className={`px-4 py-2 rounded-md ${
//         currentPage === totalPages //agar current page total pages ke barabar hai to next button disable kar dena. matlab last page pe hai user.
//           ? "bg-gray-300 text-gray-600 cursor-not-allowed"
//           : "bg-blue-600 text-white hover:bg-blue-700"
//       }`}
//       onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//       disabled={currentPage === totalPages}
//     >
//       Next
//     </button>
//   </div>

  
//   </div>

// );
// }



// export default Paginations; 
 













import React, { useEffect, useState } from "react";
import axios from "axios";

function Paginations() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // 👉 Yaha selected IDs store honge (SIRF current page ke)
  const [selectedIds, setSelectedIds] = useState([]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = userData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(userData.length / itemsPerPage);

  useEffect(() => {
    async function fetchUserData() {
      try {
        setLoading(true);
        const response = await axios.get("https://dummyjson.com/users?limit=80&skip=0");
        setUserData(response.data.users);
      } catch (error) {
        setError("Failed to fetch user data.");
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
  }, []);

  // 🔥 PAGE CHANGE hone pe selected items reset ho jayenge
  useEffect(() => {
    setSelectedIds([]);
  }, [currentPage]);

  // --------------------------
  // ✔ SINGLE CHECKBOX SELECT/UNSELECT
  // --------------------------
  const handleSingleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id) // unselect
        : [...prev, id] // select
    );
  };

  // --------------------------
  // ✔ SELECT ALL (only current page)
  // --------------------------
  const handleSelectAll = () => {
    const currentPageIds = currentItems.map((u) => u.id);

    const allSelected = currentPageIds.every((id) => selectedIds.includes(id));

    if (allSelected) {
      // unselect all
      setSelectedIds((prev) => prev.filter((id) => !currentPageIds.includes(id)));
    } else {
      // select all
      setSelectedIds((prev) => [...new Set([...prev, ...currentPageIds])]);
    }
  };

  // --------------------------
  // ✔ DELETE ONLY CURRENT PAGE SELECTED ITEMS
  // --------------------------
  const handleDelete = () => {
    if (selectedIds.length === 0) return alert("No items selected!");

    const updatedData = userData.filter((u) => !selectedIds.includes(u.id));
    setUserData(updatedData);
    setSelectedIds([]);
  };

  if (loading) return <div className="text-center p-5 text-2xl font-semibold">Loading...</div>;
  if (error) return <div className="text-center p-5 text-red-600 text-2xl font-semibold">Error: {error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-5 bg-white rounded-2xl shadow-xl border border-gray-300">
      <h1 className="text-xl font-semibold text-gray-900 text-center mb-4 tracking-tight">User Data</h1>

      {/* SELECT ALL + DELETE BUTTON */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            onChange={handleSelectAll}
            checked={currentItems.every((u) => selectedIds.includes(u.id))}
          />
          <span>Select All (Current Page)</span>
        </div>

        <button
          // className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          onClick={handleDelete}
          disabled={selectedIds.length === 0}
          className={`px-4 py-2 rounded-md ${
            selectedIds.length === 0
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-red-600 text-white hover:bg-red-700"
          }`}
        >
          Delete Selected
        </button>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-300 shadow-sm">
        <table className="min-w-full text-[13px] text-gray-800 font-serif">
          <thead>
            <tr className="bg-gray-800 text-white border-b border-gray-700">
              <th className="py-3 px-4 border-r">Select</th>
              <th className="py-3 px-4 border-r">ID</th>
              <th className="py-3 px-4 border-r">Name</th>
              <th className="py-3 px-4">Email</th>
            </tr>
          </thead>

          <tbody>
            {currentItems.map((user, index) => (
              <tr
                key={user.id}
                className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-200/60`}
              >
                <td className="py-2.5 px-4 border-r">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(user.id)}
                    onChange={() => handleSingleSelect(user.id)}
                  />
                </td>

                <td className="py-2.5 px-4 border-r">{user.id}</td>
                <td className="py-2.5 px-4 border-r">
                  {user.firstName} {user.lastName}
                </td>
                <td className="py-2.5 px-4">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Info */}
      <span className="text-gray-700 text-sm mt-3 block text-center">
        Page {currentPage} of {totalPages}
      </span>

      {/* PAGINATION BUTTONS */}
      <div className="flex justify-between items-center mt-4">
        <button
          className={`px-4 py-2 rounded-md ${
            currentPage === 1 ? "bg-gray-300 text-gray-600 cursor-not-allowed" : "bg-blue-600 text-white"
          }`}
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`mx-1 px-3 py-1 rounded-md ${
              currentPage === index + 1 ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className={`px-4 py-2 rounded-md ${
            currentPage === totalPages ? "bg-gray-300 text-gray-600 cursor-not-allowed" : "bg-blue-600 text-white"
          }`}
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Paginations;


















       

