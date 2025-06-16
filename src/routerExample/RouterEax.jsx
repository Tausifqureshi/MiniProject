import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // This has header + footer
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },        // path: '/'
      { path: 'about', element: <About /> },     // path: '/about'
      { path: 'contact', element: <Contact /> }, // path: '/contact'
    ],
  },
]);


function RouterEax() {


  return (
    <>

    <h1> React Router Example</h1>
    <RouterProvider router={router} />
    </>
  )
}

export default RouterEax