import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
     try {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
     } catch (error) {
      console.error("Error parsing user from localStorage:", error);
      return null;
     }
  });
  const [userName, setUserName] = useState("");

  // useEffect(() => {
  //   const storedUser = JSON.parse(localStorage.getItem("user"));
  //   if (storedUser) setUser(storedUser);
  // }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, userName, setUserName }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;










// UseEffect me hi setand get karna locastorge.
// import { createContext, useContext, useState, useEffect } from "react";

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [userName, setUserName] = useState("");

//   // Load user from localStorage on mount
//   useEffect(() => {
//     try {
//       const storedUser = localStorage.getItem("user");
//       if (storedUser) {
//         setUser(JSON.parse(storedUser));
//       }
//     } catch (error) {
//       console.error("Error parsing user from localStorage:", error);
//     }
//   }, []);

//   // Update localStorage whenever user changes
//   useEffect(() => {
//     if (user) {
//       localStorage.setItem("user", JSON.stringify(user));
//     } else {
//       localStorage.removeItem("user");
//     }
//   }, [user]);

//   const login = (userData) => {
//     setUser(userData);
//   };

//   const logout = () => {
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider
//       value={{ user, login, logout, userName, setUserName }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
// export default AuthProvider;
