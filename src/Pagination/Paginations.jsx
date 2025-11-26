import React, { useEffect, useState } from "react";

function Paginations() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    async function fetchUserData() {
      try {
        setLoading(true);
        const response = await fetch("https://dummyjson.com/users");
        console.log(response);
        if (!response.ok) { 
          throw new Error(`"Network response was not ok" ${response.statusText}`);
        }  
        const data = await response.json();
        console.log(data.users);
        setUserData(data.users);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Failed to fetch user data.");
      } finally {
        setLoading(false);
      }
    }
    fetchUserData();
  }, []);

  if (loading) {
    return <div className="text-center p-5 text-2xl font-semibold">Loading...</div>;
  }
  
  if (error) {
    return <div className="text-center p-5 text-red-600 text-2xl font-semibold">Error: {error}</div>;
  }


return (
  <div className="max-w-3xl mx-auto p-2 bg-white rounded-2xl shadow-xl border border-gray-200 font-serif">

    <h1 className="text-2xl font-semibold text-gray-800 text-center mb-2">
      User Data
    </h1>

    <div className="overflow-hidden rounded-xl border border-gray-300 shadow-sm">
      <table className="min-w-full text-sm text-gray-800">

        {/* Header */}
        <thead className="bg-gray-100 border-b border-gray-300">
          <tr>
            <th className="py-3 px-4 text-left font-medium tracking-wide">ID</th>
            <th className="py-3 px-4 text-left font-medium tracking-wide">Name</th>
            <th className="py-3 px-4 text-left font-medium tracking-wide">Email</th>
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {userData.map((user, index) => (
            <tr
              key={user.id}
              className={`
                ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                hover:bg-gray-100 transition-colors
              `}
            >
              <td className="py-3 px-3 border-b border-gray-200">{user.id}</td>
              <td className="py-3 px-3 border-b border-gray-200">{user.name}</td>
              <td className="py-3 px-3 border-b border-gray-200">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  </div>
);


}

export default Paginations;
