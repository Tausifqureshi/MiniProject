// only paginationc code
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
 












// pagination with select all and delete functionality
import React, { useEffect, useState } from "react";
import axios from "axios";

function Paginations() {
  // const [originalData, setOriginalData] = useState(()=>{// original user data
  //   const storedData = localStorage.getItem("usersData");
  //   return storedData ? JSON.parse(storedData) : [];
  // });  
  // const [filteredProducts, setFilteredProducts] = useState([]); // filtered products

  const [originalData, setOriginalData] = useState(() => {
  try {
    const stored = localStorage.getItem("tableData");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
});

const [filteredProducts, setFilteredProducts] = useState(() => {
  try {
    const stored = localStorage.getItem("tableData");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
});

  const [searchTerm, setSearchTerm] = useState(""); // search term state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [itemsPerPage] = useState(10); // Items per page
  const [editId, setEditId] = useState(null); // kaunsa user edit ho raha
  const [editForm, setEditForm] = useState({
  firstName: "",
  lastName: "",
  email: "",
});


  // 👉 Yaha selected IDs store honge (SIRF current page ke)
  const [selectedIds, setSelectedIds] = useState([]);

  const indexOfLastItem = currentPage * itemsPerPage; // Last item index
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; // First item index
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);// Current page items
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage); // Total pages

// Api call to fetch user data
  useEffect(() => {
    async function fetchUserData() {
      try {
        setLoading(true);
        if(originalData.length > 0) return setLoading(false); // agar localStorage me data hai to API call mat karo

        const response = await axios.get("https://dummyjson.com/users?limit=80&skip=0");
        setOriginalData(response.data.users); // Set all user data
        setFilteredProducts(response.data.users); // Set filtered products initially
      } catch (error) {
        setError("Failed to fetch user data.");
      } finally {
        setLoading(false);
      }
    }
    fetchUserData();
  }, []);

//Search Functionality
useEffect(() => {
  if (searchTerm.trim() === "") {
    setFilteredProducts(originalData);
  } else {
    setFilteredProducts( 
      originalData.filter(
        (u) =>
          u.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          u.lastName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }

  const totalPagesAfterFilter = Math.ceil(filteredProducts.length / itemsPerPage);  
  // filter lagne ke baad total pages calculate karo

  if (filteredProducts.length > 0 && currentPage > totalPagesAfterFilter) {
// agar filter lagane ke baad koi data nahi milta
// to user jis page pe tha usi page pe rehne do
// filter nahi mila → same page pe rehne do
// filter mila → jis page pe data hai wahi page dikhao

    setCurrentPage(totalPagesAfterFilter);
  }

  setSelectedIds([]); // search hone pe checkbox clear kar do
}, [searchTerm, originalData]);

  
  // 🔥 PAGE CHANGE hone pe checkbox items reset ho jayenge
  // useEffect(() => {
  //   setSelectedIds([]);
  // }, [currentPage]);

const handleEdit = (user) => {
  setEditId(user.id);
  setEditForm({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  });
};

const handleEditChange = (e) => {
  const { name, value } = e.target;
  setEditForm((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleUpdate = (id) => {
  const updatedData = originalData.map((u) =>
    u.id === id ? { ...u, ...editForm } : u
  );
  setOriginalData(updatedData); // agar user ne kuch update kiya to original data me bhi update karo
  setFilteredProducts(updatedData); // filtered products me bhi update karo
  // ✅ localStorage update
  localStorage.setItem("tableData", JSON.stringify(updatedData));

  setEditId(null); // edit mode band
};

const handleCancel = () => {
  setEditId(null);
};

  // ✔ SINGLE CHECKBOX SELECT/UNSELECT
  const handleSingleSelect = (id) => {
    // setSelectedIds((prev) =>
    //   prev.includes(id)
    //     ? prev.filter((item) => item !== id) // unselect
    //     : [...prev, id] // select
    // );

    if (selectedIds.includes(id)) {
      // unselect
      setSelectedIds((prev) => prev.filter((item) => item !== id));
    }
    else {
      // select
      setSelectedIds((prev) => [...prev, id]);
    }

  };

  // ✔ SELECT ALL (only current page)
 const handleSelectAll = () => {
 
    // 👉 Current page ke users ki IDs ka array banao map se
  // Example: [11, 12, 13, 14]

  const currentPageIds = currentItems.map((u) => u.id);

  // 👉 Check karo: kya current page ke SAARE IDs already selected hain?
  // every() → har ID check karega
  // includes() → selectedIds me wo ID mil rahi hai ya nahi
  const allSelected = currentPageIds.every((id) => selectedIds.includes(id));

  if (allSelected) {// 👉 Agar saare selected hain → to current page ke IDs ko unselect karo

    setSelectedIds((prev) => // ❌ Unselect all: selectedIds se currentPageIds ko hatao
      prev.filter((id) => !currentPageIds.includes(id))
    );
  } else {
    // 👉 Agar saare selected nahi hain → to current page ke saare IDs ko select kar do
    // new Set → duplicate IDs add hone se rokta hai
    setSelectedIds((prev) => [...new Set([...prev, ...currentPageIds])]);
  }

  //  if (allSelected) {
  //     // ❌ Unselect all
  //     setSelectedIds([]);
  //   } else {
  //     // ✅ Select all
  //     setSelectedIds(currentPageIds);
  //   }
};

  // ✔ DELETE ONLY CURRENT PAGE SELECTED ITEMS
  const handleDelete = () => {
    if (selectedIds.length === 0) return alert("No items selected!");
    const updatedData = originalData.filter((u) => !selectedIds.includes(u.id));

    setOriginalData(updatedData); // agar user ne kuch delete kiya to original data me bhi delete karo

    setFilteredProducts(updatedData); // jo delete hua wo filtered products se bhi hata do
    localStorage.setItem("tableData", JSON.stringify(updatedData));

    setSelectedIds([]); // delete hone ke baad checked items ko clear kar do
  };

  if (loading) return <div className="text-center p-5 text-2xl font-semibold">Loading...</div>;
  if (error) return <div className="text-center p-5 text-red-600 text-2xl font-semibold">Error: {error}</div>;

return (
  <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-3xl shadow-2xl border border-gray-200">
    {/* Header */}
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-gray-900 text-center tracking-tight">
        User Management
      </h1>
      <p className="text-sm text-gray-500 text-center mt-1">
        Search, select and manage users easily
      </p>
    </div>

    {/* Search */}
    <div className="relative mb-6">
      <input
        type="text"
        placeholder="Search by first or last name..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-5 py-3 text-sm shadow-sm
        focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
      />
    </div>

    {/* Select All + Delete */}
    <div className="flex items-center justify-between mb-3">
      <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
        <input
          type="checkbox"
          onChange={handleSelectAll}
          checked={currentItems.length > 0 && currentItems.every((u) => selectedIds.includes(u.id))}
          className="h-4 w-4 accent-blue-600"
        />
        Select all (current page)
      </label>

      <button
        onClick={handleDelete}
        disabled={selectedIds.length === 0}
        className={`px-5 py-2 text-sm font-semibold rounded-xl transition
          ${
            selectedIds.length === 0
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-red-600 text-white hover:bg-red-700 shadow-md"
          }`}
      >
        Delete Selected
      </button>
    </div>

    {/* Table */}
    <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="sticky top-0 bg-gray-900 text-white">
            <tr>
              <th className="px-4 py-3 text-left">Select</th>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {currentItems.map((user, index) => (
              <tr
                key={user.id}
                className={`border-b transition ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-blue-50`}
              >
                <td className="px-4 py-3">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(user.id)}
                    onChange={() => handleSingleSelect(user.id)}
                    className="h-4 w-4 accent-blue-600"
                  />
                </td>
                <td className="px-4 py-3">{user.id}</td>
                {/* <td className="px-4 py-3 font-medium">
                  {user.firstName} {user.lastName}
                </td> */}
                <td className="p-2">
                {editId === user.id ? (
                  <>
                    <input
                      name="firstName"
                      value={editForm.firstName}
                      onChange={handleEditChange}
                      className="border px-1 mr-1"
                    />
                    <input
                      name="lastName"
                      value={editForm.lastName}
                      onChange={handleEditChange}
                      className="border px-1"
                    />
                  </>
                ) : (
                  `${user.firstName} ${user.lastName}`
                )}
              </td>

                
                {/* <td className="px-4 py-3 text-gray-600">{user.email}</td> */}
              <td className="p-2">
                {editId === user.id ? (
                  <input
                    name="email"
                    value={editForm.email}
                    onChange={handleEditChange}
                    className="border px-1 w-full"
                  />
                ) : (
                  user.email
                )}
              </td>

                {/* Edit button */}
               <td className="p-2">
                {editId === user.id ? (
                  <>
                    <button
                      onClick={() => handleUpdate(user.id)}
                      className="bg-green-600 text-white px-2 py-1 mr-1 rounded"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className="bg-gray-500 text-white px-2 py-1 rounded"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => handleEdit(user)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </button>
                )}
              </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    {/* Pagination info */}
    <p className="text-center text-sm text-gray-500 mt-4">
      Page <span className="font-semibold">{currentPage}</span> of{" "}
      <span className="font-semibold">{totalPages}</span>
    </p>

    {/* Pagination buttons */}
    <div className="flex justify-center items-center gap-2 mt-4 flex-wrap">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
        className={`px-4 py-2 rounded-xl text-sm font-medium transition
          ${
            currentPage === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700 shadow"
          }`}
      >
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          onClick={() => setCurrentPage(i + 1)}
          className={`px-3 py-2 rounded-xl text-sm font-medium transition
            ${
              currentPage === i + 1
                ? "bg-blue-600 text-white shadow"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
        className={`px-4 py-2 rounded-xl text-sm font-medium transition
          ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700 shadow"
          }`}
      >
        Next
      </button>
    </div>
  </div>
);

}

export default Paginations;











       

