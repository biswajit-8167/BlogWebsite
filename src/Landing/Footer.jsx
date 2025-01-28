 import React from 'react'
import { Link } from 'react-router-dom'
 function Footer() {
   return (
     <div>
        <div className='flex justify-center items-center gap-4 bg-neutral-950 text-white font-inter font-[400] p-4'>
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/">Pricing</Link>
            <Link to="/">Terms</Link>
            <Link to="/">Privacy</Link>
            
        </div>
     </div>
   )
 }
 
 export default Footer