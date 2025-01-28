import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='relative '>
      <div className='bg-neutral-700 flex justify-center items-center space-x-10 rounded-full px-4 py-2  absolute top-5 left-1/2 -translate-x-1/2 z-50 text-white'>
        <Link to='/' className='text-[16px] font-inter font-[300] hover:text-[#d9dee4] ease-in duration-300'>Home</Link>
        <Link to='/about'  className='text-[16px] font-inter font-[300] hover:text-[#d9dee4] ease-in duration-300'>About</Link>
        <Link to='/contact'  className='text-[16px] font-inter font-[300] hover:text-[#d9dee4] ease-in duration-300'>Contact</Link>
        <Link to='/login'  className='text-[16px] font-inter font-[300] hover:text-[#d9dee4] ease-in duration-300'>Login</Link>
      </div>
    </div>
  )
}

export default Navbar