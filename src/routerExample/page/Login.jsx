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






