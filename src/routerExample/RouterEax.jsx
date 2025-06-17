import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from  './layoutCom/Layout';
import { Home, About, Contact, ErrorPage, } from './page/index'
import AuthProvider from './contexAPI/AuthProvider '

// New way to create router
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />, // parent route component
   
//     children: [ // child route components parent route component ke
//       { index: true, element: <Home /> },        // path: '/'
//       { path: 'about', element: <About /> },     // path: '/about'
//       { path: 'contact', element: <Contact /> }, // path: '/contact'
//     ],
//   },
// ]);


// Old way to create router
const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />} >
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="*" element={<ErrorPage />}/>
    {/* <Route path="login" element={<Login />}/> */}
    </Route>
))


function RouterEax() {


  return (
    <div className="min-h-screen">
    <h1> React Router Example</h1>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </div>
  )
}

export default RouterEax