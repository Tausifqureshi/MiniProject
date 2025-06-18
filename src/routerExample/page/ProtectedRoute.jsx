import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../contexAPI/AuthProvider ";

const ProtectedRoute = () => {
    const location = useLocation();


  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to="/login" state={{ from: location.pathname }} />;
};

export default ProtectedRoute;




