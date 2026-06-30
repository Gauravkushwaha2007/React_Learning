// import React from 'react'
// import { createBrowserRouter, Link, NavLink, RouterProvider} from 'react-router-dom'
// import Home from './components/Home'
// import About from './components/About'
// import Profile from './components/Profile'
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home/>
//   },
//   {
//     path: '/about',
//     element: <About/>
//   },
//   {
//     path: '/profile',
//     element: <Profile/>
//   }
// ])


// const App = () => {
  //   return (<>
  
  //   <RouterProvider router={router} />
  //   <nav>
  //   <Link to='/'>Home</Link>
  //   <Link to='/about'>About</Link>
  //   <Link to='/profile'>Profile</Link>
  
  //   </nav>
  //   </>
  //   )
  // }
  
// export default App


import { Route, Router, Routes } from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Profile from './components/Profile'
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"

const App = () => {
  return (<>
  
    <div >
      <Navbar/> 
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/about" element={<About></About>}/>
        <Route path="/contact" element={<Contact></Contact>}/>
        <Route path="/profile" element={<Profile></Profile>}/>
      </Routes>
    </div>
  </>
  
  )
}

export default App