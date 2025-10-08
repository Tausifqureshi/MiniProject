import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layoutCom/Layout";
import {
  Home,
  About,
  Contact,
  Login,
  ErrorPage,
  Dashboard,
  Profile,
  Settings,
  // DashboardHome
} from "./page/index";
import AuthProvider from "./contexAPI/AuthProvider ";
import ProtectedRoute from "./page/ProtectedRoute";

// New way to create router
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />, // Top-level layout (header, footer, outlet)

//     children: [
//       { index: true, element: <Home /> }, // /
//       { path: "about", element: <About /> }, // /about
//       { path: "contact", element: <Contact /> }, // /contact
//       { path: "login", element: <Login /> }, // /login

//       // Protected Dashboard Routes (nested)
//       {
//         path: "dashboard",
//         element: <ProtectedRoute />, // Protect this branch
//         children: [
//           { index: true, element: <Dashboard /> }, // /dashboard
//           { path: "profile", element: <Profile /> }, // /dashboard/profile
//           { path: "settings", element: <Settings /> }, // /dashboard/settings
//         ],
//       },

//       // Wildcard for 404
//       { path: "*", element: <ErrorPage /> },
//     ],
//   },
// ]);

// Old way to create router

const router = createBrowserRouter(
  createRoutesFromElements( 
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<ProtectedRoute />}>
        <Route  index element={<Dashboard />} />   
        {/*  // ✅ Dashboard page show hoga Deafult */}
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Route>
  )
);

function RouterEax() {
  return (
    <div className="min-h-screen">
      <h1> React Router Example</h1>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default RouterEax;
