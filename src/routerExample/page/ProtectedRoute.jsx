import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexAPI/AuthProvider ";

const ProtectedRoute = () => {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;


 {/* Dropdown for Dashboard */}
        //   <div className="relative group">
        //     <button className="hover:underline focus:outline-none px-2 py-1">
        //       Dashboard
        //     </button>

        //     {/* Dropdown menu */}
        //     <div className="absolute top-full left-0 bg-white text-black shadow-lg rounded hidden group-hover:block z-50 min-w-[150px]">
        //       <Link
        //         to="/dashboard"
        //         className="block px-4 py-2 hover:bg-gray-100"
        //       >
        //         Dashboard Home
        //       </Link>
        //       <Link
        //         to="/profile"
        //         className="block px-4 py-2 hover:bg-gray-100"
        //       >
        //         Profile
        //       </Link>
        //       <Link
        //         to="/settings"
        //         className="block px-4 py-2 hover:bg-gray-100"
        //       >
        //         Settings
        //       </Link>
        //     </div>
        //   </div>
