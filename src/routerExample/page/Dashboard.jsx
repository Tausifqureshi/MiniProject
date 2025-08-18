import React from "react";
import { useAuth } from "../contexAPI/AuthProvider ";
function Dashboard() {
  // const { login, user } = useAuth();
   const { login, user } = useAuth();

  return (
    <div>
      <div className="flex flex-col items-center space-y-4 bg-white p-6 rounded-xl shadow-md max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-gray-800">Dashbord Page</h2>
        {user ? (
          <div className="space-y-1 text-center">
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
          // onClick={handleLogin}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Dashboard;

