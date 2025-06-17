// import { useAuth } from "../context/authContext";
import { useNavigate, useLocation } from "react-router-dom";

export default function Login() {
//   const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    // const dummyUser = { name: "Tausif", email: "test@example.com" };
    // login(dummyUser);
    // navigate("/");

    console.log("Login clicked");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Login Page</h2>
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </div>
  );
}
