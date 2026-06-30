import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className='flex justify-between bg-gradient-to-r from-pink-100 to-pink-200 px-10 py-5'>
      <div>
        <h3 className='font-bold text-xl'><span className='text-red-600'>G</span><span className='text-pink-600'>aura</span>v</h3>
      </div>
      <div className='flex flex-wrap gap-10 font-medium text-pink-600'>
        <Link className='hover:scale-105 active:text-pink-950' to="/"> <span className='text-black font-medium '>H</span>ome</Link>
        <Link className='hover:scale-105 active:text-pink-950' to="/about"> <span className='text-black font-medium '>A</span>bout</Link>
        <Link className='hover:scale-105 active:text-pink-950' to="/profile"> <span className='text-black font-medium '>P</span>rofile</Link>
        <Link className='hover:scale-105 active:text-pink-950' to="/contact"> <span className='text-black font-medium '>C</span>ontact</Link>
      </div>
    </div>
    </>
  )
}

export default Navbar