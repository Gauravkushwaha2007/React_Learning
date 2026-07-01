import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className='flex justify-between bg-gradient-to-r from-pink-100 to-pink-200 px-10 py-5'>
      <div>
        <h3 className='font-bold text-xl'><span className='text-red-600'>G</span><span className='text-pink-600'>aura</span>v</h3>
      </div>
      <div className='flex flex-wrap gap-10 font-medium text-pink-600'>        
        <NavLink className={({isActive})=>isActive? "text-red-600 font-bold underline" : "text-red-500"} to='/'>{({isActive})=>(<span>{isActive? "👉About": "About"}</span>)}</NavLink>
        <NavLink className={({isActive})=>isActive? "text-red-600 font-bold underline" : "text-red-500"} to='/about'>{({isActive})=>(<span>{isActive ? "👉About": "About"}</span>)}</NavLink>
        <NavLink className={({isActive})=>isActive? "text-red-600 font-bold underline" : "text-red-500"} to='/profile'>{({isActive})=>(<sapn>{isActive ? "👉Profile" : "Profile" }</sapn>)}</NavLink>
        <NavLink className={({isActive})=>isActive? "text-red-600 font-bold underline" : "text-red-500"} to='/contact'>{({isActive})=>(<span>{isActive ? "👉Contact" : "Contact" }</span>)}</NavLink>
        <NavLink className={({isActive})=>isActive? "text-red-600 font-bold underline" : "text-red-500"} to='/service'>{({isActive})=>(<span>{isActive ? "Service" : "Service" }</span>)}</NavLink>
      </div>
    </div>
    </>
  )
}

export default Navbar