import React, { useEffect, useState } from "react";

function Paginations() {
  const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(()=>{
    async function fetchUserData(){
      try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUserData(data);
      }catch(error){
        console.error("Error fetching user data:", error);
      }
    }
    fetchUserData();
  },[])


  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto h-full bg-slate-400 py-3 px-3 rounded-md mt-3 selection:bg-red-700 selection:text-white">
      <h1 className="text-3xl font-bold text-red-900 bg-yellow-300 p-5 text-center rounded-lg">
        Pagination Component
      </h1>
      <p className="mt-5 text-lg font-serif">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
}

export default Paginations;
