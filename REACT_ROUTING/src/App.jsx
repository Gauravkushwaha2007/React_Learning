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


import { Route, Routes } from "react-router-dom"
import Home from './Pages/Home'
import About from './Pages/About'
import Navbar from "./components/Navbar"
import PageNotFound from "./Pages/PageNotFound"
import Men from "./Pages/men"
import Women from './Pages/Women'
import Service from "./Pages/Service"

import Products from "./Pages/Products"

const App = () => {
  return (<>
    <div >
      <Navbar/> 
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/about" element={<About></About>}/>
        <Route path="/service" element={<Service></Service>}>
          <Route path="men" element={<Men></Men>} />
          <Route path="women" element={<Women></Women>} />
        </Route>

        <Route path="/products" element={<Products></Products>}/>
        <Route path="/products/:id" element={<Products></Products>} />
        <Route path="*" element={<PageNotFound></PageNotFound>} />
      </Routes>
    </div>
  </>
  
  )
}

export default App