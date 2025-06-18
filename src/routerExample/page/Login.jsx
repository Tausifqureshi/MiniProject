import { useAuth } from "../contexAPI/AuthProvider ";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; // Optional: icon library if you're using it

export default function Login() {
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const patName = location.state?.from || "/";

  const handleLogin = () => {
    const dummyUser = { name: "Tausif", email: "test@example.com" };
    login(dummyUser);
    navigate(patName);
    console.log("Login clicked");
  };

  const handleBack = () => {
    navigate("/" );
  };

  return (
  
  <div className="p-6 bg-gray-50">
      {/* Top-left back arrow */}
      <button
        onClick={handleBack}
        className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition mb-4"
      >
        <span className="text-xl">&#8592;</span> {/* Unicode arrow */}
        <span className="text-base font-medium">Back to Home</span>
      </button>

      <div className="flex flex-col items-center space-y-4 bg-white p-6 rounded-xl shadow-md max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-gray-800">Login Page</h2>
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
          onClick={handleLogin}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </div>
    </div>




  );
}




// import { Outlet, Link } from "react-router-dom";
// import NavbarDropdown from "../page/NavbarDropdown";

// export default function Layout() {

//   return (
//     <div className="flex flex-col min-h-screen font-sans">
//     <header className="bg-blue-600 text-white p-4 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-lg font-bold">My App</h1>

//         <nav className="flex space-x-4 items-center relative">
//           <Link to="/" className="hover:underline">
//             Home
//           </Link>

//           <Link to="/about" className="hover:underline">
//             About
//           </Link>

//           <Link to="/contact" className="hover:underline">
//             Contact
//           </Link>

//           {/* Dropdown for Dashboard */}
//           <div className="relative group">
//             <button className="hover:underline focus:outline-none px-2 py-1">
//               Dashboard
//             </button>

//             {/* Dropdown menu */}
//             <div className="absolute top-full left-0 bg-white text-black shadow-lg rounded hidden group-hover:block z-50 min-w-[150px]">
//               <Link
//                 to="/dashboard"
//                 className="block px-4 py-2 hover:bg-gray-100"
//               >
//                 Dashboard Home
//               </Link>
//               <Link
//                 to="/profile"
//                 className="block px-4 py-2 hover:bg-gray-100"
//               >
//                 Profile
//               </Link>
//               <Link
//                 to="/settings"
//                 className="block px-4 py-2 hover:bg-gray-100"
//               >
//                 Settings
//               </Link>
//             </div>
//           </div>

//                 <Link
//                 to="/profile"
//                  className="hover:underline"
//               >
//                 Profile
//               </Link>

//           <Link to="/login" className="hover:underline">
//             Login
//           </Link>
//         </nav>
//       </div>
//     </header>




//   <main className="flex-1 mx-auto p-4">
//       <Outlet />
//      </main>

//      {/* Footer */}
//       <footer className="bg-gray-100 text-center p-4 border-t mt-4">
//         <p className="text-sm text-gray-600">© 2025 My App</p>
//       </footer>
//       </div>
//   );

// }