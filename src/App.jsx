import React from 'react'
import Home from './Landing/Home'
import Blog from './Main/Blog'
import Dashboard from './Main/Dashboard'
import Categories from './Main/Categories'
import Contact from './Main/Contact'
import Login2 from './Components/author/Login2'
import SignUp from './Components/author/SignUp'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PrivateRoutes from './Private-Route/PrivateRoutes'
import Navbar from './Landing/Navbar'

 
 
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:
        <div>
          <Navbar/>
          <Home />
        </div>
    },
    {
      path: '/blog',
      element:
        <div>
          
          <Blog />
        </div>
    },
    {
      path: '/categories',
      element:
        <div>
         
          <Categories />
        </div>
    },
    {
      path: '/contact',
      element:
        <div>
         
          <Contact />
        </div>
    },
    {
      path: '/Dashboard',
      element:
        <div>
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        </div>
    },
    {
      path:'/login',
      element:
      <div>
        <Login2 />
      </div>
    },
    {
      path:'/signup',
      element:
      <div>
        <SignUp/>
      </div>
    },
     
   

  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App