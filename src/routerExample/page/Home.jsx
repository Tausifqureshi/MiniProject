import React from "react";
import { useAuth } from "../contexAPI/AuthProvider ";

export default function Home() {
  const { userName, setUserName, user } = useAuth();
  function handleChange() {
    setUserName(userName === "Tausif" ? "Qureshi" : "Tausif")
  }



return (
  <div className="flex flex-col items-center justify-center bg-gray-50 p-4">
    <div className="bg-white p-8 rounded-xl shadow-lg text-center space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">🏠 Home Page</h1>

      {/* <h2 className="text-xl text-gray-600">Welcome, {userName}</h2> */}
       <h2 className="text-xl text-gray-700">
          Welcome, <span className="font-semibold">{userName}</span>
       </h2>
       {user ? (
        <div className="space-y-1">
          <h1 className="text-lg text-gray-600">
          Logged in as <span className="font-medium">{user.name}</span>
          </h1>
          <p className="text-lg text-gray-600">
          Email: <span className="font-medium">{user.email}</span>
          </p>
        </div>
      ) : (
        <p className="text-xl text-gray-600">Please log in</p>
      )}

      <button
        onClick={handleChange}
        className="bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold text-base px-6 py-3 rounded-xl shadow-md hover:shadow-xl hover:from-blue-700 hover:to-blue-600 hover:scale-105 transform transition-all duration-300 ease-in-out"
      >
        Change Your Name
      </button>
    </div>
  </div>
);

}
