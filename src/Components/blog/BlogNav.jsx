import React from 'react'
import { Link } from 'react-router-dom'
function BlogNav() {
  return (
    <div className='flex justify-between items-center'>
        <div>
           <Link> <h1 className='text-[30px] font-[600] font-dmsans text-[#0075FA]'>Blog</h1></Link>
        </div>
        <div className='flex justify-between items-center space-x-10'>
             <Link>  <h1 className='text-[20px] font-[500] font-poppins text-[#0075FA] hover:text-[#000000] ease-in duration-300'>Follow Us</h1></Link>
            <div className='text-[16px] text-[#0075FA] space-x-4 '>
                <Link to={'https://www.facebook.com/people/Biswajit-Roy/61562710751808/'} target='_blank' className='hover:text-[#000000] ease-in duration-300'> <i className="fa-brands fa-facebook"></i></Link>
                <Link to={'https://x.com/Roy7980Roy'} target='_blank' className='hover:text-[#000000] ease-in duration-300'> <i className="fa-brands fa-twitter"></i></Link>
                <Link to={'https://www.instagram.com/biswajitroy5564/'} target='_blank' className='hover:text-[#000000] ease-in duration-300'> <i className="fa-brands fa-instagram"></i></Link>
                <Link to={'https://www.linkedin.com/in/biswajitroy8167/'} target='_blank' className='hover:text-[#000000] ease-in duration-300'>   <i className="fa-brands fa-linkedin"></i></Link>     
            </div>
        </div>
    </div>
  )
}

export default BlogNav